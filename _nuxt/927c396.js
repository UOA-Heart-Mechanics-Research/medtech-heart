(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{386:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("3daf0577",content,!0,{sourceMap:!1})},392:function(t,e,n){"use strict";n(386)},393:function(t,e,n){var d=n(24)(!1);d.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),d.push([t.i,"#ecgDescription[data-v-03c1bbf6],#lvpDescription[data-v-03c1bbf6]{width:90%}.item[data-v-03c1bbf6],.trace-box[data-v-03c1bbf6]{min-width:280px;max-width:25vw}.rightEGC-sm[data-v-03c1bbf6]{min-height:80px}.rightEGC-md[data-v-03c1bbf6]{min-height:100px}",""]),t.exports=d},395:function(t,e,n){"use strict";n.r(e);var d={data:function(){return{idleTime:0,idleTimeLimit:3e5,oldTime:new Date,render:void 0}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){window.ecgDone=!1,window.lvpDone=!1,ecgName=null,lvpName=null,loadChart(this.$ecg(),this.$lvp(),this.$category(),1),this.updateEcg()},methods:{updateEcg:function(){var t=this;if(this.baseRenderer=this.$baseRenderer(),this.baseRenderer){this.baseRenderer.addPreRenderCallbackFunction((function(){var e=t.baseRenderer.getCurrentScene().getCurrentTime();updateIndicator(e)}))}}}},c=(n(392),n(42)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex",class:t.$vuetify.breakpoint.smAndUp||t.$vuetify.breakpoint.width<=430?"flex-column trace-box":""},[n("div",{staticClass:"mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      ECG\n    ")]),t._v(" "),n("div",{ref:"rightECG",staticClass:"w-full",class:t.mdAndUp?"rightEGC-md":"rightEGC-sm",attrs:{id:"rightECG"}}),t._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"ecgDescription"}},[t._v("\n      "+t._s(t.$ecg().description)+"\n    ")])]),t._v(" "),n("div",{staticClass:"mt-4 lg:mt-0 flex flex-col items-center space-y-10 lg:space-y-4"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      Pressure (mmHg)\n    ")]),t._v(" "),n("div",{ref:"rightLVP",staticClass:"w-full",class:t.mdAndUp?"rightEGC-md":"rightEGC-sm",attrs:{id:"rightLVP"}}),t._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",attrs:{id:"lvpDescription"}},[t._v("\n      "+t._s(t.$lvp().description)+"\n    ")])])])}),[],!1,null,"03c1bbf6",null);e.default=component.exports}}]);