<template>
  <div id="page-welcome">
    <div class="container">
      <b-row>
        <b-col md="4">
          <h4>Select your video type</h4>
          <b-form-radio-group
            id="ratio-type"
            v-model="ratioType"
            :options="ratioTypes"
            name="ratio-type"
          ></b-form-radio-group>
          <hr />
          <h4 class="mt-4">Select your type</h4>
          <b-form-radio-group
            id="media-type"
            v-model="mediaType"
            :options="mediaTypes"
            name="media-type"
          ></b-form-radio-group>
          <hr />
          <div v-if="mediaType === 'video'">
            <h4 class="mt-5">Import your video file</h4>
            <file-pond
              class="mt-4"
              name="media-upload"
              ref="uploader"
              label-idle="<h3>Drop files here...</h3><h5 class='text-danger'>*Video should be at least 10 seconds.</h5>"
              :allow-multiple="false"
              :allow-revert="false"
              accepted-file-types="video/mp4"
              :server="serverOptions"
              v-bind:files="uploadFiles"
              @init="handleFilePondInit"
              @processfile="handleProcessMedia"
            />
            <b-button variant="danger" @click="resetUploader">Reset</b-button>
          </div>
          <div v-else>
            <h4 class="mt-5">Import your image file</h4>
            <b-button variant="info" @click="onClickImage">Load Image</b-button>
          </div>

          <hr />
          <h4 class="mt-5">Input your pixelate steps</h4>
          <b-form-input v-model="steps" type="number" />
          <b-button variant="success" class="mt-4" @click="pixelate"
            >Pixelate</b-button
          >
        </b-col>
        <b-col md="8">
          <b-row>
            <b-col :md="ratioType === 'portrait' ? 6 : 12">
              <h3>Original Video</h3>
              <div
                :class="
                  ratioType === 'portrait'
                    ? 'video-portrait'
                    : 'video-landscape'
                "
              >
                <video ref="preview" id="preview-video" controls>
                  <source
                    :src="video ? `${baseUrl}/storage/${video}` : ''"
                    type="video/mp4"
                  />
                </video>
              </div>
            </b-col>
            <b-col
              :md="ratioType === 'portrait' ? 6 : 12"
              :class="ratioType === 'portrait' ? 'mt-0' : 'mt-3'"
            >
              <h3>Pixelated Video</h3>
              <div
                :class="
                  ratioType === 'portrait'
                    ? 'video-portrait'
                    : 'video-landscape'
                "
              >
                <video ref="pixelatedVideo" id="pixelated-video" controls>
                  <source
                    :src="pixelated ? `${baseUrl}/storage/${pixelated}` : ''"
                    type="video/mp4"
                  />
                </video>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <crop-modal ref="cropperRef" @handleCropImage="onCropImage" />
    <progress-modal
      ref="progressRef"
      :progress="Number(progress)"
      :total="Number(steps)"
      :mode="Number(mode)"
    />
    <input
      type="file"
      accept="image/png, image/jpeg"
      id="image-upload"
      hidden
      ref="uploadImageRef"
      @change="cropImage"
    />
  </div>
</template>
<style lang="scss" moduled>
#page-welcome {
  padding: 50px;
  .filepond--credits {
    display: none !important;
  }
  .video-portrait {
    width: 100%;
    padding-top: 170%;
    position: relative;
  }
  .video-landscape {
    width: 100%;
    padding-top: 56.25%;
    position: relative;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
<script>
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
const FilePond = vueFilePond(FilePondPluginFileValidateType);
import CropModal from '../components/crop-modal.vue';
import ProgressModal from '../components/progress-modal.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  name: 'welcome',
  components: { FilePond, CropModal, ProgressModal },
  data() {
    return {
      uploadFiles: [],
      video: '',
      image: '',
      pixelated: '',
      duration: 15,
      baseUrl: process.env.MIX_APP_URL,
      steps: 5,
      progress: 0,
      mode: 0,
      serverOptions: {
        url: `${process.env.MIX_APP_URL}/api/uploadVideo`,
        revert: null,
        process: {
          withCredentials: false
        }
      },
      ratioType: 'portrait',
      ratioTypes: [
        { text: 'Portrait (9 : 16)', value: 'portrait' },
        { text: 'Landscape (16: 9)', value: 'landscape' }
      ],
      mediaType: 'video',
      mediaTypes: [
        { text: 'Video', value: 'video' },
        { text: 'Image', value: 'image' }
      ]
    };
  },
  sockets: {
    connect: function() {},
    progress: function(data) {
      this.progress = data.progress;
    }
  },
  methods: {
    handleFilePondInit() {},
    handleProcessMedia(err, file) {
      if (err) {
        this.$bvToast.toast('Cannot upload the video', {
          title: 'Warning',
          variant: 'danger',
          solid: true,
          autoHideDelay: 2000
        });
      } else {
        const preview = this.$refs.preview;
        this.video = file.serverId;
        preview.src = `${process.env.MIX_APP_URL}/storage/${file.serverId}`;
        preview.load();
      }
    },
    pixelate() {
      // check path
      if (this.video === '') {
        // show message
        this.$bvToast.toast('Upload video first', {
          title: 'Warning',
          variant: 'danger',
          solid: true,
          autoHideDelay: 2000
        });
        return;
      }
      this.progress = 0;
      this.mode = 0;
      this.$bvModal.show('progress-modal');

      axios
        .post('/api/pixelate', {
          path: this.video,
          steps: this.steps,
          type: this.ratioType
        })
        .then(res => {
          const pixelatedVideo = this.$refs.pixelatedVideo;
          this.pixelated = res.data;
          pixelatedVideo.src = `${process.env.MIX_APP_URL}/storage/${res.data}`;
          pixelatedVideo.load();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.$bvModal.hide('progress-modal');
        });
    },
    resetUploader() {
      const uploader = this.$refs.uploader;
      uploader.removeFiles();
    },
    async onCropImage(e) {
      const data = new FormData();
      data.append('file', e.img);
      data.append('duration', e.duration);
      const result = await Swal.fire({
        title: 'Do you want to create pixelate together?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Create Both',
        denyButtonText: 'Create Origin'
      });
      data.append('scaleType', this.ratioType);
      data.append('steps', this.steps);
      if (result.isConfirmed) {
        data.append('pixelate', 1);
        this.mode = 0;
      } else if (result.isDenied) {
        data.append('pixelate', 0);
        this.mode = 1;
      } else {
        this.$bvToast.toast('Creating video is canceled', {
          title: 'Warning',
          variant: 'danger',
          solid: true,
          autoHideDelay: 2000
        });
        return;
      }
      this.progress = 0;
      this.$bvModal.show('progress-modal');
      axios
        .post('/api/uploadImage', data)
        .then(res => {
          const preview = this.$refs.preview;
          this.video = res.data.original;
          preview.src = `${process.env.MIX_APP_URL}/storage/${this.video}`;
          preview.load();
          if (result.isConfirmed) {
            const pixelatedVideo = this.$refs.pixelatedVideo;
            this.pixelated = res.data.pixelated;
            pixelatedVideo.src = `${process.env.MIX_APP_URL}/storage/${this.pixelated}`;
            pixelatedVideo.load();
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.$bvModal.hide('progress-modal');
        });
    },
    cropImage(e) {
      if (e.target.files.length === 0) return;
      const file = e.target.files[0];
      const reader = new FileReader();

      this.$bvModal.show('image-crop-modal');
      if (this.ratioType === 'portrait') {
        this.$refs.cropperRef.initRate(9 / 16);
      } else {
        this.$refs.cropperRef.initRate(16 / 9);
      }

      reader.onload = event => {
        this.$refs.cropperRef.initData(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    onClickImage() {
      this.$refs.files = new DataTransfer().files;
      this.$refs.uploadImageRef.click();
    }
  }
};
</script>
