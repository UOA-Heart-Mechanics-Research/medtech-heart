<template>
  <div class="left-pane">
    <div class="sm-logo d-md-none">
      <logo />
    </div>
    <div v-if="$route.name == 'slug'">
      <!-- currentBg  -->
      <div class="pa-4" :class="currentBg" tile :style="panelHeightStyle">
        <!-- <div class="pa-4 w-full" :class="currentBg" tile> -->
        <lazy-panel />
      </div>
    </div>
    <div v-if="$route.name == 'about'">
      <v-card class="pa-4 bg-secondary" :style="panelHeightStyle">
        <!-- <v-card class="pa-4 bg-secondary lg:h-screen"> -->
        <lazy-about-us />
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftPane",

  props: {
    panelHeight: {
      type: Number,
    },
  },

  computed: {
    currentBg() {
      return this.$category() ? "bg-" + this.$category() : "bg-success";
    },
    panelHeightStyle() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return { "min-height": this.panelHeight - 2 + "px" };
      } else return { height: "auto" };
    },
  },
};
</script>

<!-- Not scoped, will be available at other places. Currently, also used in Panel(.md files) and AboutUs components -->

<style lang="scss" src="@/assets/sass/components/left-panel.scss"></style>
