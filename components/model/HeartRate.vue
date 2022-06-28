<template>
  <div class="slider d-flex flex-column align-center">
    <div
      class="d-flex align-center font-weight-bold text-xl-h6 text-subtitle-2 text-sm-subtitle-2 text-md-body-1"
    >
      <div class="pr-2">Heart Rate</div>
      <div class="kiwriousContainer">
        <!-- <v-tooltip>
          <template v-slot:activator="{ on, attrs }">
            
          </template>
          <span>Got Kiwirous? Click here!</span>
        </v-tooltip> -->
        <div class="kiwriousDescription">Got Kiwrious? Click here!</div>
        <!-- <a title="Got Kiwrious? Click here!"> -->
        <img
          src="~/assets/images/kiwirous.png"
          ref="kiwrious"
          class="kiwirous"
        />
        <!-- </a> -->
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
      ref="kiwriousValue"
      class="text-caption text-sm-caption text-md-caption text-lg-body-2 text-xl-body-2 font-italic"
    >
      beats per minute
    </div>
  </div>
</template>

<script>
export default {
  name: "HeartRate",
  Copper: null,
  isConnect: false,
  kiwriousContainer: null,
  kiwriousValue: null,
  count: 0,

  data() {
    return {
      beat: 2500,
    };
  },
  mounted() {
    this.beat = this.$heartBeat();
    this.kiwriousContainer = this.$refs.kiwrious;
    this.kiwriousValue = this.$refs.kiwriousValue;
    this.Copper = this.$Copper();
    this.count = 0;
    this.connectKiwrious();
  },
  methods: {
    sliderOnChange(beat) {
      $nuxt.$emit("beat-change", beat);
    },
    connectKiwrious() {
      this.Copper.kiwrious.setBinUrl("kiwrious-config/prog.bin");
      this.Copper.kiwrious.setWasm("kiwrious-config/libunicorn.out.wasm");
      this.Copper.kiwrious.serialService.onSerialConnection = (isConnected) => {
        this.isConnected = isConnected;
      };
      this.kiwriousContainer.onclick = async () => {
        this.isConnected
          ? await this.Copper.kiwrious.serialService.disconnectAsync()
          : await this.Copper.kiwrious.serialService.connectAndReadAsync();
      };
      this.Copper.kiwrious.serialService.onSerialData = (decodedData) => {
        const values = decodedData.decodedValues;

        const val = values[0].value;
        const status = val.status;
        const hrVal = val.heartrate;

        this.kiwriousValue.innerText = status;

        if (status === "Ready") {
          this.count = this.count + 1;

          if (hrVal > 160 || hrVal < 0) {
            this.kiwriousValue.innerText = "Your heartrate is: NaN";
          } else {
            this.kiwriousValue.innerText =
              "Your heartrate is: " + hrVal.toString();
            if (this.count >= 10) {
              const normalHrVal = hrVal * (5000 / 160);
              this.beat = normalHrVal;
              this.count = 0;
            }
          }
        }
      };
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
.kiwriousDescription {
  display: none;
  position: absolute;
  left: 100px;
  top: 20px;
  font-size: x-small;
}

.kiwriousContainer:hover {
  cursor: pointer;
  .kiwriousDescription {
    display: block;
  }
}
.slider {
  width: 100%;
}

.kiwirous {
  width: 1.8rem;
  height: 1.8rem;
}
</style>
