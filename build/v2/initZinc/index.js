var render;
var renderDom;
var canvas;

function initZinc() {
  // 01cfe938
  renderDom = document.getElementById("zincDom");

  //   console.dir(renderDom);
  render = new Zinc.Renderer(renderDom, window);
  Zinc.defaultMaterialColor = 0xffff9c;
  canvas = render.initialiseVisualisation();
  render.getThreeJSRenderer().setClearColor(0x000000, 1);

  // zincRenderer.getThreeJSRenderer().setClearColor(0x050505, 1);
  var defaultScene = render.getSceneByName("default");
  render.setCurrentScene(defaultScene);
  render.animate();

  return canvas;
}
