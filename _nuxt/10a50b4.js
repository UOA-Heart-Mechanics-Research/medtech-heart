(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9],{440:function(e,t,o){var content=o(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("0d470c96",content,!0,{sourceMap:!1})},449:function(e,t,o){e.exports=o.p+"img/Annie-Jones.807272e.png"},450:function(e,t,o){e.exports=o.p+"img/Liz-Broadbent.bd68ff2.png"},451:function(e){e.exports=JSON.parse('{"healthy":{"heading":"View of a Healthy Heart","link":"videos/1_healthy_heart.mp4"},"blocked":{"heading":"View of a Healthy Heart","link":"videos/2_blocked_arteries.mp4"},"exercise":{"heading":"Lifestyle Factors: Exercise","link":"videos/5_exercise_v2.mp4"},"diet":{"heading":"Lifestyle Factors: Diet","link":"videos/6_diet_v2.mp4"},"smoking":{"heading":"Lifestyle Factors: Smoking","link":"videos/7_smoking_v2.mp4"},"statin":{"heading":"How your static medication will help?","link":"videos/3_Statins.mp4"},"aspirin":{"heading":"How your aspirin medication will help?","link":"videos/4_aspirin.mp4"}}')},452:function(e,t,o){"use strict";o(440)},453:function(e,t,o){var r=o(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,".video-player[data-v-aec5ba12]{grid-row-gap:1rem;row-gap:1rem;width:100vw;background-color:#000}#outer-credits[data-v-aec5ba12]{position:fixed;padding-top:3px;padding-bottom:10px;bottom:0}.video-player-container[data-v-aec5ba12]{width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}.video-player-container video[data-v-aec5ba12]{width:60vw;height:auto;-o-object-fit:cover;object-fit:cover}.display-video[data-v-aec5ba12]{display:block;margin-top:0;width:100%;flex-grow:1}.display-video.--sm[data-v-aec5ba12]{height:30rem}.display-video.--xs[data-v-aec5ba12]{height:20rem}.credits[data-v-aec5ba12]{width:100vw;padding-left:10px;padding-right:30px;justify-content:space-between;align-items:center;grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem}.credit-button[data-v-aec5ba12]{flex-grow:1;grid-row-gap:.5rem;row-gap:.5rem;align-items:center}.button[data-v-aec5ba12]{width:90%;max-width:20rem}.img-icon[data-v-aec5ba12]{height:4rem;width:4rem}.annie-liz[data-v-aec5ba12]{padding:2px;text-align:center;justify-content:center}.annie-liz span[data-v-aec5ba12]{font-size:.8rem;font-style:italic;color:#afafaf}",""]),e.exports=r},459:function(e,t,o){var content=o(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("53ced67f",content,!0,{sourceMap:!1})},468:function(e,t,o){"use strict";o.r(t);o(35);var r=o(451),n={data:function(){return{videoFound:!1,videos:r,selectedVideo:{},credits1:"Movie credits to Annie Jones and Dr. Liz Broadbent,",credits2:" University of Auckland"}},props:{videoId:{type:String,required:!0}},methods:{refreshVideo:function(e){this.videoFound=!1,e&&(this.selectedVideo=this.videos[e],this.selectedVideo&&(this.videoFound=!0))},close:function(){window.history.back(),this.$emit("close-video")},getVideoStyle:function(){return this.$vuetify.breakpoint.mdAndUp?"display-video":"display-video --"+this.$vuetify.breakpoint.name}},watch:{videoId:function(e){this.refreshVideo(e)}},created:function(){this.refreshVideo(this.videoId)}},d=(o(452),o(36)),c=o(63),l=o.n(c),v=o(437),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.videoFound?r("div",{staticClass:"container-default video-player flexbox --vertical",class:e.$vuetify.breakpoint.mdAndUp?"full-height":""},[r("div",{staticClass:"video-player-container"},[r("video",{attrs:{src:e.selectedVideo.link,autoplay:"",controls:""}})]),e._v(" "),r("div",{attrs:{id:"outer-credits"}},[r("div",{staticClass:"credits flexbox"},[r("img",{staticClass:"img-icon",attrs:{src:o(449)}}),e._v(" "),r("div",{staticClass:"credit-button flexbox --vertical"},[r("div",{staticClass:"annie-liz flexbox d-none d-sm-block"},[r("span",[e._v(e._s(e.credits1)+" "+e._s(e.credits2))])]),e._v(" "),r("div",{staticClass:"button"},[r("v-btn",{staticClass:"bg-secondary",attrs:{elevation:"8",small:"",block:""},on:{click:e.close}},[r("span",[e._v(" Click to Close")])])],1)]),e._v(" "),r("img",{staticClass:"img-icon",attrs:{src:o(450)}})]),e._v(" "),r("div",{staticClass:"pt-2 annie-liz flexbox d-sm-none"},[r("span",[e._v(e._s(e.credits1)),r("br"),e._v(e._s(e.credits2))])])])]):e._e(),e._v(" "),e.videoFound?e._e():r("div",{staticClass:"error-message"},[r("h3",[e._v("Specified video was not found")])])])}),[],!1,null,"aec5ba12",null);t.default=component.exports;l()(component,{VBtn:v.a})},475:function(e,t,o){"use strict";o(459)},476:function(e,t,o){var r=o(23)(!1);r.push([e.i,"#video-div[data-v-010e64c8]{width:100vw;height:100vh}",""]),e.exports=r},477:function(e,t,o){var content=o(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(24).default)("3f95a174",content,!0,{sourceMap:!1})},478:function(e,t,o){var r=o(23)(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),r.push([e.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),e.exports=r},539:function(e,t,o){"use strict";o.r(t);var r={layout:"default",data:function(){return{currentVideoId:null,showVideo:!1,overlay:!1,lastOffset:0,outerWidth:0}},methods:{closeVideo:function(){this.showVideo=!1,this.$vuetify.breakpoint.mdAndUp||this.$vuetify.goTo(this.lastOffset,{})}},mounted:function(){this.currentVideoId=this.$route.params.videoId?this.$route.params.videoId:"",this.showVideo=!0,this.lastOffset=window.pageYOffset},beforeDestroy:function(){this.showVideo=!1}},n=(o(475),o(36)),d=o(63),c=o.n(d),l=(o(15),o(11),o(17),o(7),o(20),o(14),o(21),o(1)),v=(o(41),o(477),o(61)),f=o(52),h=o(124),y=o(33);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var w=Object(y.a)(v.a,f.a,h.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"video-div"}},[o("v-overlay",{attrs:{color:"black",value:e.showVideo,absolute:!!e.$vuetify.breakpoint.mdAndUp,opacity:"1"}},[o("div",[o("video-player",{attrs:{videoId:e.currentVideoId},on:{"close-video":function(t){return e.closeVideo()}}})],1)])],1)}),[],!1,null,"010e64c8",null);t.default=component.exports;c()(component,{VideoPlayer:o(468).default}),c()(component,{VOverlay:w})}}]);