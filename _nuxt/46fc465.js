(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{439:function(t,e,d){var content=d(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(24).default)("7ca0632c",content,!0,{sourceMap:!1})},445:function(t,e,d){"use strict";d(439)},446:function(t,e,d){var n=d(23)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),n.push([t.i,"#ecgDescription[data-v-6605e161],#lvpDescription[data-v-6605e161]{width:90%}.item[data-v-6605e161],.trace-box-lg[data-v-6605e161]{min-width:280px;max-width:25vw}.rightECG-sm[data-v-6605e161]{width:50vw;height:20vw;min-height:80px}.rightECG-md[data-v-6605e161]{width:20vw;min-height:150px}.graph-text-md[data-v-6605e161]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:15vw}.graph-text-sm[data-v-6605e161]{width:100vw}.graph-text-sm p[data-v-6605e161]{width:100%}.graph-comm[data-v-6605e161]{display:flex;justify-content:center;align-items:center;flex-direction:column}.EGC-lg[data-v-6605e161]{height:20vh;margin-bottom:10vh}.EGC-sm[data-v-6605e161]{width:100vw}.LVP-lg[data-v-6605e161]{height:20vh}.LVP-sm[data-v-6605e161]{width:100vw}",""]),t.exports=n},448:function(t,e,d){"use strict";d.r(e);d(64);var n={data:function(){return{idleTime:0,idleTimeLimit:3e5,oldTime:new Date,render:void 0,ecgd:""}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var t=this;window.ecgDone=!1,window.lvpDone=!1,ecgName=null,lvpName=null,loadChart(this.$ecg(),this.$lvp(),this.$category(),1),setTimeout((function(){t.updateEcg()}),200)},methods:{updateEcg:function(){var t=this;if(this.baseRenderer=this.$baseRenderer(),this.baseRenderer){this.baseRenderer.preRenderCallbackFunctions.length=0;this.baseRenderer.addPreRenderCallbackFunction((function(){var e=t.baseRenderer.getCurrentScene().getCurrentTime();updateIndicator(e)}))}}}},r=(d(445),d(36)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"d-flex",class:t.$vuetify.breakpoint.smAndUp||t.$vuetify.breakpoint.width<=430?"flex-column trace-box-lg":"trace-box-sm"},[d("div",{staticClass:"graph-comm",class:t.mdAndUp?"EGC-lg":"EGC-sm"},[d("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      Electrocardiogram (ECG)\n    ")]),t._v(" "),d("div",{ref:"rightECG",staticClass:"w-full",class:t.mdAndUp?"rightECG-md":"rightECG-sm",attrs:{id:"rightECG"}}),t._v(" "),d("div",{staticClass:"text-caption text-xl-body-2",class:t.mdAndUp?"graph-text-md":"graph-text-sm",attrs:{id:"ecgDescription"},domProps:{innerHTML:t._s(this.$ecg().description)}})]),t._v(" "),d("div",{staticClass:"graph-comm",class:t.mdAndUp?"LVP-lg":"LVP-sm"},[d("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[t._v("\n      Pressure (mmHg)\n    ")]),t._v(" "),d("div",{ref:"rightLVP",staticClass:"w-full",class:t.mdAndUp?"rightECG-md":"rightECG-sm",attrs:{id:"rightLVP"}}),t._v(" "),d("div",{staticClass:"text-caption text-xl-body-2",class:t.mdAndUp?"graph-text-md":"graph-text-sm",attrs:{id:"lvpDescription"}},[t._v("\n      "+t._s(t.$lvp().description)+"\n    ")])])])}),[],!1,null,"6605e161",null);e.default=component.exports}}]);