<template>
  <div class="pa-2">
    <div class="flexbox demo-head">
      <div>
        <h1 class="pt-2 main-heading">
          {{ $parentTopic().heading }}
        </h1>
        <h4 :class="'sub-heading font-weight-black ' + $subTitle() + '--text'">
          {{ $heading() }}
        </h4>
      </div>
    </div>
    <div
      v-if="fileFound"
      ref="markedDiv"
      class="pt-2 pt-xl-4 marked"
      v-html="markedText"
    ></div>
    <!-- <div v-if="$parentTopic().heading === 'Te Manawa'">
      <v-select
        v-model="select"
        :items="items"
        class="select"
        label="Switch versions"
        dense
        color="#fff"
        height="20px"
        @change="onselectChange(select)"
      ></v-select>
    </div> -->
    <div v-if="!fileFound" class="error-message">
      <span>Data Not Found</span>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "Panel",

  data() {
    return {
      select: "",
      currentPanel: "",
      fileFound: false,
      items: ["latest", "version 2.0", "version 1.0"],
    };
  },

  methods: {
    // onselectChange(select) {
    //   // if (select === "latest")
    //   //   window.location.href =
    //   //     "https://uoa-heart-mechanics-research.github.io/medtech-heart/latest/";
    //   if (select === "version 2.0")
    //     window.location.href =
    //       "https://uoa-heart-mechanics-research.github.io/medtech-heart/v2/";
    //   if (select === "version 1.0")
    //     window.location.href =
    //       "https://sites.bioeng.auckland.ac.nz/medtech/heart/";
    // },
    play: function (event) {
      // /model-heart#video-div
      const routeStr = this.$nuxt.$route.path;

      const lastChar = routeStr.charAt(routeStr.length - 1);

      if (lastChar === "/") {
        const newstr = routeStr.substr(0, routeStr.length - 1);
        // console.log(newstr);
        this.$router.push({
          name: "video",
          params: { videoId: event.target.id, originPath: newstr },
        });
      } else {
        // this.$router.push({ path: routeStr, hash: "#video-div" });
        this.$router.push({
          name: "video",
          params: { videoId: event.target.id, originPath: routeStr },
        });
      }

      // $nuxt.$emit("load-video-player", {id:event.target.id, originPath:});
    },
    refreshContent: function () {
      const fileName = this.$dataFile();
      try {
        const panelData = require(`@/assets/data/markdown/${fileName}.md`);
        this.fileFound = true;
        this.currentPanel = panelData.default;
      } catch (e) {
        this.fileFound = false;
      }
    },
    addVideoLinks: function () {
      if (this.fileFound) {
        const markedDiv = this.$refs.markedDiv;
        const links = markedDiv.getElementsByTagName("span");
        let i;
        for (i = 0; i < links.length; i++) {
          let element = links[i];
          if (element.getAttribute("data-play") == "video") {
            element.addEventListener("click", this.play);
          }
        }
      }
    },
  },

  computed: {
    markedText() {
      return marked(this.currentPanel);
    },
  },

  mounted() {
    this.addVideoLinks();
  },

  created() {
    this.refreshContent();
  },

  updated() {
    this.refreshContent();
    this.addVideoLinks();
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 127px;
}
.v-input__slot {
  background: #fff;
}
.theme--dark.v-list {
  // v-secondary-base
  background: rgba(34, 155, 34, 1);
}
// .primary--text {
//   // color: var(--v-secondary-base) !important;
//   // caret-color: var(--v-secondary-base) !important;
//   color: #fff;
// }
</style>
