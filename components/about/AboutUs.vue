<template>
  <div class="pa-2">
    <h1 class="pt-2 main-heading">About Us</h1>
    <div class="about-panel">
      <div class="navigate flexbox --vertical lg:-mt-10">
        <div
          class="button"
          :class="researchSelected ? 'button --active' : 'button --inactive'"
        >
          <v-btn plain @click="toggleNavigation('research')">
            Our Research
          </v-btn>
        </div>
        <div
          class="button"
          :class="teamSelected ? 'button --active' : 'button --inactive'"
        >
          <v-btn plain @click="toggleNavigation('team')"> Our Team </v-btn>
        </div>
      </div>
      <div class="feedback font-weight-medium text--primary lg:-mt-16">
        Visit our <a href="#">Online form</a> to give us your valuable feedback
        about this app.
      </div>

      <div class="mx-auto contributor lg:-mt-16" max-width="344">
        <v-card-text>
          <div class="text-h6 text--darken-6">Website Design</div>
          <div class="text--darken-4 pl-6">
            Dr Thiranja Prasad Babarenda Gamage <br />
            Prof Martyn Nash <br />
            Richard Christie <br />
            Chinchien Lin <br />
            Zhinuo Wang <br />
            Linkun Gao <br />
            Alan Wu <br />
            Riffat<br />
          </div>
        </v-card-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",

  data() {
    return {
      teamSelected: false,
      researchSelected: true,
    };
  },

  methods: {
    toggleNavigation: function (componentName) {
      this.teamSelected = !this.teamSelected;
      this.researchSelected = !this.researchSelected;
      $nuxt.$emit("about-navigation", componentName);
    },
  },
};
</script>

<style scoped lang="scss">
.navigate {
  padding-top: 4rem;
  padding-bottom: 2rem;
  align-items: center;
  row-gap: 1.5rem;

  .button {
    width: 80%;
    max-width: 16rem;
    padding: 1.2rem;
    border-radius: 1.25rem;
    text-align: center;
    span {
      font-size: 1.3rem;
      font-weight: 600;
    }

    &.--active {
      color: white;
      background-color: rgba(150, 30, 150, 0.6);
    }
    &.--inactive {
      color: rgba(175, 175, 175);
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
.contributor {
  background-color: rgba(150, 30, 150, 0.3);
}
.about-panel {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.feedback {
  padding: 1rem;
  line-height: 2rem;
  a {
    color: yellow;
  }
}
</style>
