import * as Copper from "gltfloader-plugin-test";
import * as THREE from "three";

const container = document.createElement("div");
container.style.width = "100vw";
container.style.height = "100vh";
container.style.margin = 0;
container.style.padding = 0;
const baseRenderer = new Copper.copperRenderer(container, {
  guiOpen: true,
  camera: true,
  performance: true,
  light: true,
});
baseRenderer.gui.closed = true;
baseRenderer.animate();

export default (context, inject) => {
  inject("baseRenderer", () => {
    return baseRenderer;
  }),
    inject("baseContainer", () => {
      return container;
    }),
    inject("three", () => {
      return THREE;
    }),
    inject("Copper", () => {
      return Copper;
    });
};
