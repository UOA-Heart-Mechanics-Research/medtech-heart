<template>
  <v-app ref="base_background">
    <div class="rightPanel">
      <div>
        <div class="pa-0 black">
          <Nuxt />
        </div>
      </div>
    </div>
    <div
      class="firefox"
      :class="mdAndUp ? 'outer-large' : 'outer-small'"
      ref="leftPanel"
    >
      <div class="pa-0">
        <v-row class="d-flex" no-gutters>
          <v-col>
            <div class="pa-0" :class="mdAndUp ? 'full-height' : 'auto-height'">
              <v-row class="d-flex flex-column" no-gutters>
                <v-col ref="panel" class="out-card">
                  <v-card
                    outlined
                    tile
                    class="pa-0 overflow-y-auto transparent"
                    :class="mdAndUp ? 'panel-height' + multiplier : ''"
                  >
                    <left-pane :panel-height="panelHeight" />
                  </v-card>
                </v-col>
                <v-col class="d-none d-md-block fix-it">
                  <navigation />
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <div class="d-md-none fixed left-0 bottom-0">
          <navigation />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",

  data: () => {
    return {
      multiplier: 1,
      panelHeight: 0,
      isVideo: true,
    };
  },

  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },

  mounted() {
    this.panelHeight = this.$refs.panel.clientHeight;
    const base_background = this.$refs.base_background.$el;
    const Copper = this.$Copper();
    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyF") {
        Copper.fullScreenListenner(base_background);
      }
    });
  },

  watch: {
    panelHeight: (height) => {},
  },

  updated() {
    this.panelHeight = this.$refs.panel.clientHeight;
  },

  created() {
    console.log(
      "%cMedtech Heart Vue App %cBeta:v3.0.1",
      "padding: 3px;color:white; background:#023047",
      "padding: 3px;color:white; background:#219EBC"
    );
    this.$nuxt.$on("menu-height-changed", (multiplier) => {
      this.multiplier = multiplier;
    });
  },

  beforeDestroy() {
    this.$nuxt.$off("menu-height-changed");
  },
};
</script>

<style scoped lang="scss">
.outer-large {
  min-width: 409px;
  width: 30vw;
  position: fixed;
  top: 0;
  left: 0;
}
.outer-small {
  width: 100vw;
}
.firefox {
  z-index: 1;
}
.fix-it {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  bottom: 0;
}

.panel-height1 {
  height: calc(100vh - 56px);
}
.panel-height2 {
  height: calc(100vh - 112px);
}
.transparent {
  margin: 0;
  padding: 0;
  opacity: 0.8;
}
.out-card {
  border-left: 1px solid black;
  margin: 0;
  padding: 0;
}

.rightPanel {
  order: 2;
}
</style>
