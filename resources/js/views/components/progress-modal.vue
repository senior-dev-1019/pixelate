<template>
  <b-modal
    id="progress-modal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    body-bg-variant="info"
    body-text-variant="light"
  >
    <div class="d-flex align-items-center justify-content-center">
      <b-spinner label="loading" variant="light" class="mr-2" />
      <h5 class="text-center mb-0">{{ showText }}</h5>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'progress-modal',
  props: {
    progress: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    mode: { type: Number, default: 0 }
  },
  computed: {
    showText: function() {
      if (this.mode === 1 && this.progress === 0) {
        return 'Creating video';
      } else if (this.progress === this.total) {
        return 'Merging video';
      } else {
        return `${this.progress} of ${this.total} steps are completed...`;
      }
    }
  }
};
</script>
