<template>
  <div ref="outerDiv">
    <div class="text-center">
      <right-pane />
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",

  async asyncData({ route, $getContentBySlug, error, store }) {
    const slug = route.params.slug;
    let content = $getContentBySlug(slug);
    if (content === null) {
      error({ statusCode: 404, message: "Unexpected Error, Page not found" });
    }
    store.commit("setCurrentContent", content);
  },
};
</script>

<style scoped lang="scss">
.right-pane {
  width: 100%;
  color: $text-color;
}
</style>
