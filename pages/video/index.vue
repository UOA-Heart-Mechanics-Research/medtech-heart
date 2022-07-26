<template>
  <div id="video-div">
    <v-overlay
      color="black"
      :value="showVideo"
      :absolute="$vuetify.breakpoint.mdAndUp ? true : false"
      opacity="1"
    >
      <div>
        <video-player :videoId="currentVideoId" @close-video="closeVideo()" />
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  // layout: "empty",
  layout: "default",
  data() {
    return {
      currentVideoId: null,
      showVideo: false,
      overlay: false,
      lastOffset: 0,
      outerWidth: 0,
    };
  },

  methods: {
    closeVideo() {
      this.showVideo = false;
      /* Scroll back to the point where user clicked on video icon - for small devices */
      if (!this.$vuetify.breakpoint.mdAndUp)
        this.$vuetify.goTo(this.lastOffset, {});
    },
  },
  mounted() {
    this.currentVideoId = this.$route.params.videoId
      ? this.$route.params.videoId
      : "";
    this.showVideo = true;
    this.lastOffset = process.client ? window.pageYOffset : 0;
  },
  beforeDestroy() {
    this.showVideo = false;
  },
};
</script>

<style scoped>
#video-div {
  width: 100vw;
  height: 100vh;
}
</style>
