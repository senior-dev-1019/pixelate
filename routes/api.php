<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('test', function(Request $request) {
    return 'test';
});

Route::post('uploadVideo', 'MediaController@uploadVideo');
Route::post('uploadImage', 'MediaController@uploadImage');
Route::post('pixelate', 'MediaController@pixelate');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
