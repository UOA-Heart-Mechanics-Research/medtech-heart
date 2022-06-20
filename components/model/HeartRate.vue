<template>
  <div class="slider d-flex flex-column align-center">
    <div
      class="d-flex align-center font-weight-bold text-xl-h6 text-subtitle-2 text-sm-subtitle-2 text-md-body-1"
    >
      <div class="pr-2">Heart Rate</div>
      <div>
        <!-- <v-tooltip>
          <template v-slot:activator="{ on, attrs }">
            
          </template>
          <span>Got Kiwirous? Click here!</span>
        </v-tooltip> -->
        <img src="~/assets/images/kiwirous.png" class="kiwirous" />
      </div>
    </div>
    <v-slider
      dense
      v-model="beat"
      min="0"
      max="5000"
      thumb-color="info"
      track-color="secondary"
      track-fill-color="secondary"
      hide-details
      class="slider"
      @change="sliderOnChange(beat)"
    >
    </v-slider>

    <div
      class="text-caption text-sm-caption text-md-caption text-lg-body-2 text-xl-body-2 font-italic"
    >
      beats per minute
    </div>
  </div>
</template>

<script>
export default {
  name: "HeartRate",

  data() {
    return {
      beat: 2500,
    };
  },
  mounted() {
    this.beat = this.$heartBeat();
  },
  methods: {
    sliderOnChange(beat) {
      // console.log(beat);
      $nuxt.$emit("beat-change", beat);
    },
  },
  watch: {
    beat: (immediateBeat) => {
      if (immediateBeat > 2) {
        if (immediateBeat % 2 === 0) {
          $nuxt.$emit("beat-update-onTime", immediateBeat);
        }
      } else {
        $nuxt.$emit("beat-update-onTime", 0);
      }
    },
  },
  created() {
    this.$nuxt.$on("beat-reset", (currentBeat) => {
      this.beat = currentBeat;
    });
  },
};
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
}

.kiwirous {
  width: 1.8rem;
  height: 1.8rem;
}
</style>
