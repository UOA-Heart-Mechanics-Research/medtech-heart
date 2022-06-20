import colors from "vuetify/es5/util/colors";
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/medtech-heart/",
        },
      }
    : {
        router: {
          // mode: "hash",
          mode: "history",
          base: "/",
        },
      };

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    //titleTemplate: '%s - medtech-heart-vue',
    title: "MedTechHeart",
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/medtech-heart/favicon2.ico",
      },
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A latest MedTechHeart App(v3.0.0). You can spin, zoom, drag, and open the heart using the gestures shown at the bottom. Vary the heart rate using the slider on the right. ",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keywords",
        content:
          "MedTechHeart3.0 ABIMedTechHeart ABIMedTechHeart3.0 HeartResearch",
      },
    ],
    script: [
      {
        "data-dojo-config": "async: 1, dojoBlankHtmlUrl: '/blank.html'",
        /*"packages":[
          {
            'name': 'js',
            'location':  location.pathname.replace(/\/[^/]+$/, '') + '/js'
          }
        ],*/
        src: "//ajax.googleapis.com/ajax/libs/dojo/1.11.2/dojo/dojo.js",
      },
      {
        src: "https://cdn.tailwindcss.com",
      },
      {
        hid: "chartMaker",
        type: "text/javascript",
        src: "js/LVPandECG.js",
      },
      {
        type: "text/javascript",
        src: "js/Add3DLabel.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/sass/global.scss", "@/assets/sass/base.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/topics",
    "@/plugins/current-content",
    "@/plugins/models",
    { src: "~/plugins/copper.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components/about",
      "~/components/model",
      "~/components/navigation",
      "~/components/topics",
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["@/assets/sass/variables.scss"],
    treeShake: true,
    theme: {
      options: { customProperties: true },
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: "#7d1e7d",
          info: colors.teal.lighten1,
          warning: "#695e01",
          subWarning: "#dede09",
          error: "#451306",
          subError: "#fc2400",
          // success: "#558B2F",
          // success: "#194b17",
          success: "#162415",
          subSuccess: "#27a425",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     Copper: "gltfloader-plugin-test",
    //   }),
    // ],
    extend(config) {
      config.module.rules.push({
        test: /\.md$/i,
        use: "raw-loader",
      });
    },
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },

  target: "static",

  ...routerBase,
  generate: {
    dir: "build",
    // subFolders: false,
    routes: [
      // "/",
      "/model-heart",
      "/model-heart#video-div",
      "/attack-healthy",
      "/attack-minor",
      "/attack-severe",
      "/electricity-healthy",
      "/electricity-fibrillation",
      "/failure-healthy",
      "/failure-compensated",
      "/failure-decompensated",
    ],
  },
  // generate:...generateBase,
};
