<template>
  <!-- :class="mdAndUp ? 'full-height' : 'auto-height'" -->
  <div>
    <div class="model-panel">
      <model />
      <div class="mr-24 ml-4 d-flex d-sm-none">
        <heart-rate />
      </div>
    </div>
    <!-- w-full lg:fixed top-0 right-0 lg:w-64 lg:h-full -->
    <div
      class="trace-main"
      :class="mdAndUp ? 'tracePanel-md' : 'tracePanel-sm'"
    >
      <!-- flex flex-col justify-around lg:h-full -->
      <!-- <div ref="rateAndTraces" class="trace-main"> -->
      <div class="d-none d-sm-flex rate-mdAndUp">
        <div class="heart-rate">
          <heart-rate />
        </div>
      </div>
      <div :class="mdAndUp ? 'trace-md' : 'trace-sm'">
        <traces />
      </div>
      <div
        class="d-none d-md-flex justify-center"
        :class="mdAndUp ? 'logo-md' : 'logo-sm'"
      >
        <div class="logo-mdAndUp">
          <logo />
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>

<style scoped lang="scss">
.model-panel {
  width: 100vw;
  height: auto;
}
.model-rate {
  position: relative;
  width: 100%;
  text-align: center;
}

.rate-mdAndUp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 20%;
  .heart-rate {
    margin-top: 10px;
    width: 60%;
    height: 100px;
  }
}

.logo-mdAndUp {
  width: 50%;
  // height: 100px;
  // display: block;
}
.logo-md {
  display: block;
  height: 10%;
}

.trace-main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px 3px;
}
.tracePanel-md {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  min-width: 280px;
  max-width: 25vw;
}
.tracePanel-sm {
  width: 100vw;
  height: auto;
}
.trace-md {
  min-height: 60%;
}
.trace-sm {
  width: 100%;
  margin-bottom: 100px;
  padding-right: 10px;
}
</style>
