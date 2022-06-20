export const state = () => ({
  currentContent: {},
  chartLoaded: "",
  previousCamera: {},
  baseRenderer: undefined,
  modelToSceneArray: [],
  isHalfmodel: false,
  heartBeat: 2500,
});

export const getters = {
  getCurrentContent: (state) => state.currentContent,
  getChartLoaded: (state) => state.chartLoaded,
  getBaseRender: (state) => state.baseRenderer,
  getModelToSceneArray: (state) => state.modelToSceneArray,
  getPreviousCamera: (state) => state.previousCamera,
  getIsHalfModel: (state) => state.isHalfmodel,
  getHeartBeat: (state) => state.heartBeat,
};

export const mutations = {
  setCurrentContent(state, newContent) {
    state.currentContent = newContent;
  },
  setChartLoaded(state, currentChart) {
    state.chartLoaded = currentChart;
  },
  setBaseRender(state, currentRender) {
    state.baseRenderer = currentRender;
  },
  setModelToSceneArray(state, old_scene) {
    state.modelToSceneArray[old_scene.sceneName] = old_scene;
  },
  setPreviousCamera(state, preCamera) {
    state.previousCamera = preCamera;
  },
  setIsHalfModel(state, flag) {
    state.isHalfmodel = flag;
  },
  setHeartBeat(state, beat) {
    state.heartBeat = beat;
  },
};
