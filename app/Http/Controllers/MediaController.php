<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use FFMpeg\FFProbe;

use ElephantIO\Client as ElephantIOClient;
use ElephantIO\Engine\SocketIO\Version2X;

class MediaController extends Controller
{
    //
    public function uploadVideo(Request $request)
    {
        try {
            $file = $request->file('media-upload')->store('uploads');
            return $file;
        } catch (\Throwable $e) {
            Log::info('upload media : ' . $e->getMessage());
            return response()->json(['error' => 'Cannot upload video'], 400);
        }
    }

    public function uploadImage(Request $request)
    {
        try {
            $base64_image = $request->file;
            @list($type, $file_data) = explode(';', $base64_image);
            @list(, $file_data) = explode(',', $file_data);
            $url = 'uploads/' . uniqid() . '.png';
            Storage::disk('local')->put($url, base64_decode($file_data));
            $in = storage_path('app/public/' . $url);
            $out = 'uploads/' . uniqid() . '.mp4';
            $file = '';
            if ($this->create_video($in, storage_path('app/public/' . $out), $request->duration, $request->scaleType)) {
                // remove original image
                if (file_exists($in)) {
                    unlink($in);
                }
                if ($request->pixelate) {
                    // create 
                    $file = $this->create_pixelate(storage_path('app/public/' . $out), $request->scaleType, $request->steps);
                }
                return response()->json(['original' => $out, 'pixelated' => $file], 200);
            } else {
                return response()->json(['error' => 'Unable to create video'], 400);
            }

            // create video
        } catch (\Throwable $e) {
            Log::error('uploadImage : ' . $e->getMessage());
            return response()->json([], 400);
        }
    }

    public function pixelate(Request $request)
    {
        try {
            $path = storage_path('app/public/' . $request->path);
            $steps = $request->steps;
            $type = $request->type;

            $out = $this->create_pixelate($path, $type, $steps);
            if ($out == '') {
                return response()->json(['error' => 'error'], 400);
            }
            return $out;
        } catch (\Throwable $e) {
            Log::error('pixelate : ' . $e);
            return response()->json(['error' => 'error'], 400);
        }
    }

    public function create_video($in, $out, $sec, $type)
    {
        try {
            if ($type == 'landscape') {
                $cmd = 'ffmpeg -y -loop 1 -i "' . $in . '" -framerate 30 -b:v 6000k -t ' . $sec . ' -pix_fmt yuv420p -vf "scale=1920:1080" "' . $out . '"';
            } else {
                $cmd = 'ffmpeg -y -loop 1 -i "' . $in . '" -framerate 30 -b:v 6000k -t ' . $sec . ' -pix_fmt yuv420p -vf "scale=1080:1920" "' . $out . '"';
            }
            exec($cmd);
            return true;
        } catch (\Throwable $e) {
            Log::error('create_video : ' . $e->getMessage());
            return false;
        }
    }
    public function random_string($length)
    {
        $key = '';
        $keys = array_merge(range(0, 9), range('a', 'z'));

        for ($i = 0; $i < $length; $i++) {
            $key .= $keys[array_rand($keys)];
        }

        return $key;
    }

    public function create_pixelate($path, $type, $steps)
    {
        try {
            $audio = 0;

            // get duration
            $ffprobe = FFProbe::create();
            $duration = $ffprobe->format($path)->get('duration');
            // video width and height
            // check ratio from width , height
            // if it is 16:9 => i have swap x, y

            $limit = 0.7;
            if ($steps <= $duration * 0.5) {
                $limit = 0.5;
            }

            if ($type === 'portrait') {
                $x = 0.2;
                $y = 0.18;
                $x_step1 = (0.2 - 0.08) / ($steps * $limit);
                $y_step1 = (0.18 - 0.03) / ($steps * $limit);
                $x_step2 = (0.08 - 0.02) / ($steps * (1 - $limit));
                $y_step2 = (0.03 - 0.01) / ($steps * (1 - $limit));
            } else {
                $x = 0.18;
                $y = 0.2;
                $x_step1 = (0.18 - 0.03) / ($steps * $limit);
                $y_step1 = (0.2 - 0.08) / ($steps * $limit);
                $x_step2 = (0.03 - 0.01) / ($steps * (1 - $limit));
                $y_step2 = (0.08 - 0.02) / ($steps * (1 - $limit));
            }

            $start = 0;
            $sub = ($duration - 2) / $steps;
            $tmp = [];
            $cmd = 'ffmpeg -y -i "' . $path . '"';
            for ($i = 0; $i < $steps; $i++) {
                $cmd = $cmd . ' -vf "frei0r=filter_name=pixeliz0r:filter_params=' . $x . '|' . $y . '" -framerate 30 -b:v 6000k -pix_fmt yuv420p -ss ' . $start . ' -t ' . $sub . ' ' . storage_path('app/public/tmp/' . $i . '.mp4');
                $tmp[] = storage_path('app/public/tmp/' . $i . '.mp4');
                $start += $sub;
                // calculation
                if ($i < $limit * $steps - 1) {
                    $x -= $x_step1;
                    $y -= $y_step1;
                } else {
                    $x -= $x_step2;
                    $y -= $y_step2;
                }
                if ($x < 0) {
                    $x = 0.02;
                }
                if ($y < 0) {
                    $y = 0.01;
                }
                if (($i + 1) % 4 == 0) {
                    exec($cmd);
                    $this->socketEmit($i + 1);
                    $cmd = $cmd = 'ffmpeg -y -i "' . $path . '"';
                }
                // exec($cmd);
            }
            if ($steps % 4 != 0) {
                exec($cmd);
                $this->socketEmit($steps);
            }

            $cmd = 'ffmpeg -y -i  "' . $path . '" -framerate 30 -b:v 6000k -pix_fmt yuv420p -ss ' . $start . ' ' . storage_path('app/public/tmp/' . $steps . '.mp4');
            $tmp[] = storage_path('app/public/tmp/' . $steps . '.mp4');
            exec($cmd);

            // merge video
            $txt = '';
            foreach ($tmp as $i => $t_path) {
                $txt = $txt . 'file ' . $t_path . PHP_EOL;
            }

            $txt = str_replace('\\', '/', $txt);

            file_put_contents(storage_path('app/public/tmp/list.txt'), $txt);

            $out = 'uploads/' . $this->random_string(10);

            $cmd = 'ffmpeg -y -f concat -safe 0 -i "' . storage_path('app/public/tmp/list.txt') . '" -c copy "' . storage_path('app/public/' . $out . '_.mp4') . '"';
            exec($cmd);

            foreach ($tmp as $t_path) {
                if (file_exists($t_path)) {
                    unlink($t_path);
                }
            }

            if (file_exists(storage_path('app/public/tmp/list.txt'))) {
                unlink(storage_path('app/public/tmp/list.txt'));
            }

            $out_duration = $ffprobe->format(storage_path('app/public/' . $out . '_.mp4'))->get('duration');

            if ($out_duration < $duration) {
                // $cmd = 'ffmpeg -y -i "' . storage_path('app/public/' . $out . '_.mp4') . '" -vf tpad=stop_mode=clone:stop_duration=' . ($duration - $out_duration) . ' -b:v 6000k "' . storage_path('app/public/' . $out . '.mp4') . '"';
                $cmd = 'ffmpeg -y -i "' . storage_path('app/public/' . $out . '_.mp4') . '" -filter_complex "[0]trim=0:' . ($duration - $out_duration) . '[hold];[0][hold]concat[extended];[extended][0]overlay" -b:v 6000k "' . storage_path('app/public/' . $out . '.mp4') . '"';
            } else {
                $cmd = 'ffmpeg -y -i "' . storage_path('app/public/' . $out . '_.mp4') . '" -b:v 6000k "' . storage_path('app/public/' . $out . '.mp4') . '"';
            }

            // unlink _.mp4
            exec($cmd);
            if (file_exists(storage_path('app/public/' . $out . '_.mp4'))) {
                unlink(storage_path('app/public/' . $out . '_.mp4'));
            }

            return $out . '.mp4';
        } catch (\Throwable $e) {
            Log::error('create pixelate : ' . $e->getMessage());
            return '';
        }
    }

    public function socketEmit($progress)
    {
        try {
            if (env('LOCAL_MODE') == 1) {
                $socket = new Version2X('http://localhost:3011');
            } else {
                $socket = new Version2X(env('APP_URL') . ':' . env('SOCKET_PORT'));
            }
            $elephant = new ElephantIOClient($socket);
            $elephant->initialize();

            $elephant->emit('progress', ['progress' => $progress]);
            $elephant->close();
        } catch (\Throwable $e) {
            Log::error('socket emit error');
        }
    }
}
