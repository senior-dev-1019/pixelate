<template>
  <b-modal
    id="image-crop-modal"
    title="Crop your image"
    no-close-on-backdrop
    no-close-on-esc
    size="lg"
    @ok="handleOk"
  >
    <vue-cropper
      ref="cropper"
      :src="imgSrc"
      alt="Source Image"
      :aspect-ratio="ratio"
    >
    </vue-cropper>
    <template #modal-footer="{ok, cancel}">
      <div
        class="w-100 pl-5 pr-2 d-flex align-items-center justify-content-between"
      >
        <div>
          <span class="mr-2">Duration : </span
          ><input type="number" v-model="duration" />
        </div>
        <div>
          <b-button variant="danger" @click="cancel()">Cancel</b-button>
          <b-button class="ml-2" variant="success" @click="ok()"
            >Create Video</b-button
          >
        </div>
      </div>
    </template>
  </b-modal>
</template>
<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
export default {
  name: 'crop-modal',
  components: { VueCropper },
  data() {
    return {
      imgSrc: '',
      ratio: 9 / 16,
      duration: 15
    };
  },
  methods: {
    initData(data) {
      this.imgSrc = data;
      this.$refs.cropper.replace(data);
    },
    initRate(ratio) {
      this.ratio = ratio;
    },
    handleOk(e) {
      const cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.$emit('handleCropImage', { img: cropImg, duration: this.duration });
    }
  }
};
</script>
