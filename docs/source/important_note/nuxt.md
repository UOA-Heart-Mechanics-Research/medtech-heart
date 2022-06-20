# About this project

To clearly understand this project, we should learn nuxt.js vuetify and vue.
nuxt documentation: https://nuxtjs.org/docs
vuetify documentation: https://vuetifyjs.com/
vue: https://vuejs.org/guide/introduction.html

## Start

the project start at layouts/default.vue
In this file, it define the project base layout, left panel and right panel.

### Left panel

It consist panel topic infomation and navagition bar.

## Data transfer

### markdown

All the markdown files are stored in assets/markdown folder. It consist different topic html content, we can use raw loader to load it in nuxt. Also we create a topics.json to store each topic key infomation, such as topic name, icon, and subtopic info. These info include url to static folder's files.

#### vuex - store

In the store folder we created a index.js file to use vuex in our project.
We defined some global objects in this file, and setter/getter methods.

Thus, we can thougth these methods to get objects in any files by using ** context.store.getters ** in nuxt.

##### Getter

```bash
    // to define the objects that we want to use and store
    export const state = () => ({
        currentContent: {},
        chartLoaded:''
    })

    export const getters = {
        getCurrentContent: state => state.currentContent,
        getChartLoaded: state => state.chartLoaded
    }
```

Also, for easily to manage the getters methods, we create a current-content.js file under plugins foler. We use the inject function provided by nuxt.js to specify the information we need and propagate it throughout the project. Through this.$name(), the name is we defined in inject function.

```bash
    /*
    * In plugins/current-content.js, we use different keys to define all the
    * specific information that is available via vuex.
    */


    export default (context,inject) => {
        // the context inject parameters are default provided by nuxt.js,
        // like event parameter in the HTML Events functions

        inject('parentTopic', () => {return context.store.getters.getCurrentContent.parentTopic}),
        inject('heading', () => {return context.store.getters.getCurrentContent.heading}),
        inject('title', () => {return context.store.getters.getCurrentContent.title}),
        inject('category', () => {return context.store.getters.getCurrentContent.category}),
        inject('dataFile', () => {return context.store.getters.getCurrentContent.dataFile}),
        inject('demoIcon', () => {return context.store.getters.getCurrentContent.demoIcon}),
        inject('ecg', () => {return context.store.getters.getCurrentContent.ecg}),
        inject('lvp', () => {return context.store.getters.getCurrentContent.lvp}),
        inject('model', () => {return context.store.getters.getCurrentContent.model})
    }

    // In the other vue files, we can through below code to get any infos that we want
    this.$model()
    this.$category()

    // any unclear here, see nuxt.js documentation
```

##### Setter

```bash
    export const mutations = {
            setCurrentContent(state,newContent){
            state.currentContent=newContent
        },
            setChartLoaded(state,currentChart){
            state.chartLoaded=currentChart
        }
    }
```

We defined the setter functions in vuex mutations method, so in the whole project we can use **store.commit** under nuxt **asyncData** method.

```bash
    // {route, $getContentBySlug, error, store}
    => const {route, $getContentBySlug, error, store} = context
    async asyncData({route, $getContentBySlug, error, store}) {
    const slug = route.params.slug
    let content=$getContentBySlug(slug)
    if(content===null){
      error({ statusCode: 404, message: 'Unexpected Error, Page not found' })
    }
    store.commit('setCurrentContent',content)
  },
```

More info see here:
Nuxt-vuex-store: https://nuxtjs.org/docs/directory-structure/store
Nuxt-context: https://nuxtjs.org/docs/concepts/context-helpers, this will give you more ideas on how to use context and asyncData in nuxt.js.

Notice: when we define the inject function in plugins folder, the inject
function name will as a keyword stored in nuxt context. Then we can use $name to call it or as a parameter for nuxt asyncData function.

nuxt start -> nuxt.config.js -> layouts -> pages -> index.vue(redirect('/model-heart')) -> \_slug(model-heart)-> LeftPanel.vue -> Panel -> Navigation.vue ->
