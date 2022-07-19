<template>
  <!-- w-full h-full lg:h-screen -->
  <div class="">
    <div class="flex flex-col justify-center items-center">
      <!-- w-full h-[400px] -mt-12 lg:h-screen lg:mt-0 -->
      <div
        ref="baseDomObject"
        :class="mdAndUp ? 'baseDom-md' : 'baseDom-sm'"
        @dblclick="onHalfHeartPressed"
      />
      <!-- lg:fixed lg:bottom-0 lg:h-24 lg:ml-24 w-full h-full flex flex-row justify-center lg:mt-0 order-first lg:order-last -->
      <div
        ref="threeDControls"
        class="baseModelControl"
        :class="mdAndUp ? 'baseModelControl-md' : 'baseModelControl-sm'"
      >
        <!-- ml-0 h-full w-2/5 lg:w-64 relative -->
        <div class="baseModelCB" :class="mdAndUp ? 'baseModelCB-md' : ''">
          <button
            class="absolute top-0 left-0 w-1/5 h-full hover:bg-gray-50/10"
            @click="onResetAllModelsView"
          />
          <img
            src="~/assets/images/gestures-icons.png"
            class="h-full w-full md:object-contain"
          />
          <button
            class="absolute top-0 right-0 w-1/4 h-full hover:bg-gray-50/10"
            @click="onHalfHeartPressed"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heartRate: 2500,
      threeDControlsHeight: 0,
      Copper: null,
      THREE: null,
      baseRenderer: null,
      oldCam: null,
      scene: null,
      modelToSceneArray: [],
      container: null,
      modelName: "",
      modelURLsArray: {
        NoInfarct_highres: [
          "heartInfarct/noInfarct.glb",
          "modelView/noInfarct_view_setmodel.json",
        ],
        NormalElectricity_highres: [
          "heartElectricity/normalActivity.glb",
          "modelView/noInfarct_view_setmodel.json",
        ],
        CompensatedFailure_highres: [
          "heartFailure/compensated.glb",
          "modelView/noInfarct_view_setmodel.json",
        ],
        SmallInfarct_highres: [
          "heartInfarct/smallInfarct.glb",
          "modelView/noInfarct_view_setmodel.json",
        ],
        LargeInfarct_highres: [
          "heartInfarct/largeInfarct.glb",
          "modelView/noInfarct_view_setmodel.json",
        ],
        ArrythmiaElectricity_highres: [
          "heartElectricity/arrythmiaActivity.glb",
          "modelView/arrythmiaActivity_view.json",
        ],
        DecompensatedFailure_highres: [
          "heartFailure/decompensated.glb",
          "modelView/noInfarct_view_setmodel.json",
        ],
      },
    };
  },

  props: {
    totalHeight: {
      type: Number,
    },
    availableHeight: {
      type: Number,
    },
  },

  computed: {
    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },

  mounted() {
    this.THREE = this.$three();
    this.modelName = this.$model().name;
    this.container = this.$refs.baseDomObject;
    const baseContainer = this.$baseContainer();

    setTimeout(() => {
      this.mdAndUp
        ? (baseContainer.style.height = "100vh")
        : (baseContainer.style.height = "400px");
    }, 100);
    this.container.appendChild(baseContainer);
    this.start();
  },

  methods: {
    start() {
      this.Copper = this.$Copper();
      this.baseRenderer = this.$baseRenderer();
      this.modelToSceneArray = this.$modelToSceneArray();

      if (
        this.modelName === "NoInfarct" ||
        this.modelName === "SmallInfarct" ||
        this.modelName === "LargeInfarct" ||
        this.modelName === "CompensatedFailure" ||
        this.modelName === "DecompensatedFailure" ||
        this.modelName === "NormalElectricity"
      ) {
        this.oldCam = this.$perviousCamera();
      }
      if (this.$model().name === "ArrythmiaElectricity") {
        this.loadModel(this.modelName, 0.25);
      } else {
        this.loadModel(this.modelName, 1.0);
      }

      this.heartRate = this.$heartBeat();
      this.updateSlider(this.heartRate);
    },
    loadModel(model_name, rateScaling) {
      let model_prefix = "_highres";
      const metaURL = this.modelURLsArray[model_name + model_prefix][0];
      const viewURL = this.modelURLsArray[model_name + model_prefix][1];

      this.scene = this.baseRenderer.getSceneByName(model_name);
      if (this.scene === undefined) {
        this.scene = this.baseRenderer.createScene(model_name);
        this.scene.controls.staticMoving = true;
        this.scene.controls.rotateSpeed = 2.0;
        this.baseRenderer.setCurrentScene(this.scene);
        this.scene.loadGltf(metaURL, (content) => {
          if (model_name === "ArrythmiaElectricity") {
            this.scene.setModelPosition(content, { x: 5, y: 2 });
          } else {
            this.scene.setModelPosition(content, { y: 3 });
          }

          if (this.oldCam && this.oldCam.near) {
            this.shareCameraSettings(this.oldCam);
          }
        });
        this.$store.commit("setModelToSceneArray", this.scene);

        this.scene.loadViewUrl(viewURL);

        /**
         * add special light for heart models
         * */
        // if (
        //   model_name === "ArrythmiaElectricity" ||
        //   model_name === "NormalElectricity"
        // ) {
        //   this.scene.ambientLight.intensity = 2;
        //   this.scene.ambientLight.color = new this.THREE.Color(0x18ef06);
        //   this.scene.directionalLight.intensity = 0.6;
        //   this.scene.directionalLight.color = new this.THREE.Color(0x18ef06);
        // } else {
        //   this.scene.ambientLight.intensity = 0.3;
        //   this.scene.ambientLight.color = new this.THREE.Color(0x18ef06);
        //   this.scene.directionalLight.intensity = 0.3;
        //   this.scene.directionalLight.color = new this.THREE.Color(0x18ef06);
        // }

        // this.scene.updateBackground("#33335a", "#1c7258");
        this.scene.updateBackground("#000", "#000");
        // this.Copper.setHDRFilePath("environment/venice_sunset_1k.hdr");
        this.Copper.setHDRFilePath("environment/footprint_court_2k.hdr");
        this.baseRenderer.updateEnvironment();
        this.addLabel(this.modelName);
      } else {
        this.meshReady(this.oldCam);
        this.baseRenderer.setCurrentScene(this.scene);
      }
    },
    meshReady(oldCam) {
      if (this.oldCam && oldCam.near) {
        this.shareCameraSettings(oldCam);
      }
    },

    shareCameraSettings(oldCam) {
      if (
        oldCam !== null &&
        oldCam.near !== null &&
        oldCam.near !== undefined
      ) {
        const target = [
          -0.9551143646240234, 2.91867446899414, 2.7563438415527344,
        ];
        const viewpoint = this.scene.setViewPoint(oldCam, target);
        this.scene.updateCamera(viewpoint);
      }
    },

    onResetAllModelsView() {
      this.heartRate = 2500;
      $nuxt.$emit("beat-reset", 2500);
      this.$store.commit("setHeartBeat", 2500);

      this.$store.commit("setPreviousCamera", {});

      for (var k in this.modelToSceneArray) {
        if (this.modelToSceneArray.hasOwnProperty(k)) {
          this.modelToSceneArray[k].resetView();
          if (this.modelToSceneArray[k].isHalfed) {
            this.showHalf(this.modelToSceneArray[k]);
          }
        }
      }
    },
    convertHeartRate(heartRate) {
      if (this.modelName === "ArrythmiaElectricity") {
        return heartRate / 2000;
      } else {
        return heartRate / 500;
      }
    },
    updateSlider(heartRate) {
      const convertRate = this.convertHeartRate(heartRate);
      this.scene.setPlayRate(convertRate);
    },
    addLabel(model_name) {
      if (model_name === "NoInfarct" || model_name === "NormalElectricity") {
        this.Copper.addLabelToScene(
          this.scene,
          "right ventricle",
          -45.323991175632,
          44.1417335930078,
          10.421283,
          60.0
        );
        this.Copper.addLabelToScene(
          this.scene,
          "left ventricle",
          -55.056679,
          4.82123313284426,
          5.421283,
          60.0
        );
      } else if (model_name === "SmallInfarct") {
        this.Copper.addLabelToScene(
          this.scene,
          "damaged tissue",
          30,
          -40,
          0,
          60.0
        );
      } else if (model_name === "LargeInfarct") {
        this.Copper.addLabelToScene(
          this.scene,
          "damaged tissue",
          15,
          -45,
          0,
          60.0
        );
      }
    },
    onHalfHeartPressed() {
      this.showHalf();
    },
    showHalf(sceneObj) {
      console.log("hala");
      let scene;
      if (sceneObj) {
        scene = sceneObj;
      } else {
        scene = this.baseRenderer.getSceneByName(this.modelName);
      }
      scene.content.traverse((child) => {
        if (
          child.name === "Post_top" ||
          child.name === "Post_inner" ||
          child.name === "Post_NonInfarct" ||
          child.name === "Post_top_1" ||
          child.name === "Post_inner_1" ||
          child.name === "Post_NonInfarct_1" ||
          child.name === "Post"
        ) {
          scene.updateModelChildrenVisualisation(child);
        }
      });
      if (this.modelName === "NormalElectricity") {
        scene.content.traverse((child) => {
          if (child.name === "Ant" || child.name === "Post") {
            scene.updateModelChildrenVisualisation(child);
          }
        });
      }
    },
  },

  watch: {
    heartRate: function (currentRate) {
      this.updateSlider(currentRate);
    },
  },

  created() {
    this.$nuxt.$on("beat-update-onTime", (immediateBeat) => {
      this.updateSlider(immediateBeat);
    });
    this.$nuxt.$on("beat-change", (currentBeat) => {
      this.heartRate = currentBeat;
      this.$store.commit("setHeartBeat", currentBeat);
    });
  },

  beforeDestroy() {
    if (this.oldCam) {
      const currentCamera = this.baseRenderer.getCurrentScene().camera;
      const position = new this.THREE.Vector3();
      const up = new this.THREE.Vector3();
      position.copy(currentCamera.position);
      up.copy(currentCamera.up);

      const currentCameraInfo = {
        position: position,
        up: up,
        near: currentCamera.near,
        far: currentCamera.far,
      };

      this.$store.commit("setPreviousCamera", currentCameraInfo);
    }

    this.$nuxt.$off("beat-change");
  },
};
</script>

<style scoped lang="scss">
.baseModelControl {
  width: 100vw;
  height: 120px;
  // background: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  .baseModelCB {
    width: 240px;
    height: 70px;
    position: relative;
  }
  .baseModelCB-md {
    width: 280px;
    height: 100px;
  }
}

.baseModelControl-md {
  position: fixed;
  bottom: 10px;
  padding-left: 100px;
}
.baseModelControl-sm {
  order: -1;
  height: 60px;
}
.baseDom-md {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.baseDom-sm {
  width: 100vw;
  height: 400px;
  margin: 0;
  padding: 0;
}
.outer-model {
  height: 100%;
}
.hidden-input {
  width: 1px;
  height: 1px;
}
</style>
