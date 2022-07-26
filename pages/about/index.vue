<template>
  <div :class="mdAndUp ? 'aboutPanel-l' : 'aboutPanel-s'">
    <div
      v-if="section == 'research'"
      class="container-default research-page flexbox --vertical"
      :class="$vuetify.breakpoint.smAndUp ? 'full-height' : ''"
    >
      <div class="pt-4 heading">
        <h3 class="heading__main">
          Heart Mechanics Research at the Auckland Bioengineering Institute
        </h3>
        <div class="heading__sub">
          Improving diagnosis and management of heart diseases<span
            v-if="$vuetify.breakpoint.mdAndUp"
            ><br
          /></span>
          using personalised biomechanics and image-driven computer modelling
        </div>
      </div>
      <iframe
        class="researchVideo"
        frameborder="0"
        src="https://www.youtube.com/embed/FazkF5oQTU0?rel=0&amp;showinfo=0&autoplay=1"
        allowfullscreen
      >
      </iframe>
    </div>
    <div
      v-if="section == 'team'"
      class="container-default research-page flexbox --vertical"
      :class="$vuetify.breakpoint.mdAndUp ? 'full-height' : ''"
    >
      <div class="pt-4 heading">
        <h3 class="heading__main">Our Heart Mechanics Research Team</h3>
        <div class="heading__sub pt-2">
          An inter-disciplinary collaboration between experts in
          <span v-if="$vuetify.breakpoint.smAndUp"><br /></span>
          bioengineering, physiology, software development, and medical imaging
        </div>
      </div>
      <div class="detail">
        <img src="~assets/images/headshots.png" />
      </div>
      <div class="detail">
        <img src="~assets/images/funding-abi-medtech.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  name: "AboutPage",

  data() {
    return {
      section: "research",
    };
  },
  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  created() {
    this.$nuxt.$on("about-navigation", (componentName) => {
      this.section = componentName;
    });
    this.$store.commit("setChartLoaded", "");
  },

  beforeDestroy() {
    this.$nuxt.$off("about-navigation");
  },
};
</script>

<style lang="scss" scoped src="@/assets/sass/pages/about.scss"></style>
