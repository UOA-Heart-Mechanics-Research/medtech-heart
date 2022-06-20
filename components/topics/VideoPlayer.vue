<template>
  <div>
    <div
      v-if="videoFound"
      class="container-default video-player flexbox --vertical"
      :class="$vuetify.breakpoint.mdAndUp ? 'full-height' : ''"
    >
      <iframe
        allowfullscreen
        frameborder="0"
        :class="getVideoStyle()"
        :src="selectedVideo.link"
      >
      </iframe>
      <div id="outer-credits">
        <div class="credits flexbox">
          <img src="@/assets/images/Annie-Jones.png" class="img-icon" />
          <div class="credit-button flexbox --vertical">
            <div class="annie-liz flexbox d-none d-sm-block">
              <span>{{ credits1 }} {{ credits2 }}</span>
            </div>
            <div class="button">
              <v-btn
                class="bg-secondary"
                elevation="8"
                small
                block
                @click="close"
              >
                <span> Click to Close</span>
              </v-btn>
            </div>
          </div>
          <img src="@/assets/images/Liz-Broadbent.png" class="img-icon" />
        </div>
        <div class="pt-2 annie-liz flexbox d-sm-none">
          <span>{{ credits1 }}<br />{{ credits2 }}</span>
        </div>
      </div>
    </div>
    <div v-if="!videoFound" class="error-message">
      <h3>Specified video was not found</h3>
    </div>
  </div>
</template>

<script>
import videosData from "@/assets/data/videos.json";

export default {
  data() {
    return {
      videoFound: false,
      videos: videosData,
      selectedVideo: {},

      credits1: "Movie credits to Annie Jones and Dr. Liz Broadbent,",
      credits2: " University of Auckland",
    };
  },

  props: {
    videoId: {
      type: String,
      required: true,
    },
  },

  methods: {
    refreshVideo: function (currentId) {
      this.videoFound = false;

      if (currentId) {
        this.selectedVideo = this.videos[currentId];
        if (this.selectedVideo) {
          this.videoFound = true;
        }
      }
    },

    close: function () {
      window.history.back();
      this.$emit("close-video");
    },
    getVideoStyle() {
      return this.$vuetify.breakpoint.mdAndUp
        ? "display-video"
        : "display-video --" + this.$vuetify.breakpoint.name;
    },
  },

  watch: {
    videoId: function (currentId) {
      this.refreshVideo(currentId);
    },
  },

  created() {
    this.refreshVideo(this.videoId);
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/sass/components/video-player.scss"
></style>
