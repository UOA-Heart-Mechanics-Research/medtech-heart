export default (context, inject) => {
  inject("currentRender", () => {
    return context.store.getters.getBaseRender;
  }),
    inject("modelToSceneArray", () => {
      return context.store.getters.getModelToSceneArray;
    }),
    inject("perviousCamera", () => {
      return context.store.getters.getPreviousCamera;
    });
  inject("isHalfModel", () => {
    return context.store.getters.getIsHalfModel;
  });
  inject("heartBeat", () => {
    return context.store.getters.getHeartBeat;
  });
};
