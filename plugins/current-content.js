export default (context, inject) => {
  inject("parentTopic", () => {
    return context.store.getters.getCurrentContent.parentTopic;
  }),
    inject("heading", () => {
      return context.store.getters.getCurrentContent.heading;
    }),
    inject("title", () => {
      return context.store.getters.getCurrentContent.title;
    }),
    inject("category", () => {
      return context.store.getters.getCurrentContent.category;
    }),
    inject("subTitle", () => {
      return context.store.getters.getCurrentContent.subTitle;
    }),
    inject("dataFile", () => {
      return context.store.getters.getCurrentContent.dataFile;
    }),
    inject("demoIcon", () => {
      return context.store.getters.getCurrentContent.demoIcon;
    }),
    inject("ecg", () => {
      return context.store.getters.getCurrentContent.ecg;
    }),
    inject("lvp", () => {
      return context.store.getters.getCurrentContent.lvp;
    }),
    inject("model", () => {
      return context.store.getters.getCurrentContent.model;
    });
};
