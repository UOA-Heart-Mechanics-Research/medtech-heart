(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,8],{438:function(e,t,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("e1e8a2ea",content,!0,{sourceMap:!1})},439:function(e,t,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("349a6cf0",content,!0,{sourceMap:!1})},441:function(e,t,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("31a7a086",content,!0,{sourceMap:!1})},442:function(e,t,n){e.exports=n.p+"img/gestures-icons.104494d.png"},443:function(e,t,n){"use strict";n(438)},444:function(e,t,n){var o=n(23)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),o.push([e.i,".baseModelControl[data-v-522b9f87]{width:100vw;height:120px;display:flex;flex-direction:row;justify-content:center;align-content:center}.baseModelControl .baseModelCB[data-v-522b9f87]{width:240px;height:70px;position:relative}.baseModelControl .baseModelCB-md[data-v-522b9f87]{width:280px;height:100px}.baseModelControl-md[data-v-522b9f87]{position:fixed;bottom:10px;padding-left:100px}.baseModelControl-sm[data-v-522b9f87]{order:-1;height:60px}.baseDom-md[data-v-522b9f87]{height:100vh}.baseDom-md[data-v-522b9f87],.baseDom-sm[data-v-522b9f87]{width:100vw;margin:0;padding:0}.baseDom-sm[data-v-522b9f87]{height:100vw}.outer-model[data-v-522b9f87]{height:100%}.hidden-input[data-v-522b9f87]{width:1px;height:1px}",""]),e.exports=o},445:function(e,t,n){"use strict";n(439)},446:function(e,t,n){var o=n(23)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),o.push([e.i,"#ecgDescription[data-v-095aa0d0],#lvpDescription[data-v-095aa0d0]{width:90%}.item[data-v-095aa0d0],.trace-box-lg[data-v-095aa0d0]{min-width:280px;max-width:25vw}.rightECG-sm[data-v-095aa0d0]{width:40vw;height:20vw;min-height:80px}.rightECG-md[data-v-095aa0d0]{width:20vw;min-height:150px}.graph-text-md[data-v-095aa0d0]{width:15vw}.graph-text-sm[data-v-095aa0d0]{width:100vw}.graph-comm[data-v-095aa0d0]{display:flex;justify-content:center;align-items:center;flex-direction:column}.EGC-lg[data-v-095aa0d0]{height:20vh;margin-bottom:10vh}.EGC-sm[data-v-095aa0d0]{width:100vw}.LVP-lg[data-v-095aa0d0]{height:20vh}.LVP-sm[data-v-095aa0d0]{width:100vw}",""]),e.exports=o},447:function(e,t,n){"use strict";n.r(t);n(41),n(35),n(70);var o={data:function(){return{heartRate:2500,threeDControlsHeight:0,Copper:null,THREE:null,baseRenderer:null,oldCam:null,scene:null,modelToSceneArray:[],container:null,isModelHalfed:!1,modelName:"",modelURLsArray:{NoInfarct_highres:["heartInfarct/noInfarct.glb","modelView/noInfarct_view_setmodel.json"],NormalElectricity_highres:["heartElectricity/normalActivity.glb","modelView/noInfarct_view_setmodel.json"],CompensatedFailure_highres:["heartFailure/compensated.glb","modelView/noInfarct_view_setmodel.json"],SmallInfarct_highres:["heartInfarct/smallInfarct.glb","modelView/noInfarct_view_setmodel.json"],LargeInfarct_highres:["heartInfarct/largeInfarct.glb","modelView/noInfarct_view_setmodel.json"],ArrythmiaElectricity_highres:["heartElectricity/arrythmiaActivity.glb","modelView/arrythmiaActivity_view.json"],DecompensatedFailure_highres:["heartFailure/decompensated.glb","modelView/noInfarct_view_setmodel.json"]}}},props:{totalHeight:{type:Number},availableHeight:{type:Number}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;this.THREE=this.$three(),this.modelName=this.$model().name,this.container=this.$refs.baseDomObject;var t=this.$baseContainer();this.isModelHalfed=this.$isHalfModel(),setTimeout((function(){e.mdAndUp?t.style.height="100vh":t.style.height="100vw",e.container.appendChild(t),e.start()}),100),window.addEventListener("resize",(function(){e.mdAndUp?t.style.height="100vh":t.style.height="100vw",e.scene.onWindowResize()})),window.addEventListener("touchstart",(function(t){t.preventDefault(),t.stopPropagation(),3===t.touches.length&&(e.scene.controls.noZoom=!0,e.scene.controls.noRotate=!0,e.scene.controls.staticMoving=!1)}),!1),window.addEventListener("touchend",(function(){e.scene.controls.staticMoving=!0,setTimeout((function(){e.scene.controls.noZoom=!1,e.scene.controls.noRotate=!1}),100)}),!1)},methods:{start:function(){this.Copper=this.$Copper(),this.baseRenderer=this.$baseRenderer(),this.modelToSceneArray=this.$modelToSceneArray(),"NoInfarct"!==this.modelName&&"SmallInfarct"!==this.modelName&&"LargeInfarct"!==this.modelName&&"CompensatedFailure"!==this.modelName&&"DecompensatedFailure"!==this.modelName&&"NormalElectricity"!==this.modelName||(this.oldCam=this.$perviousCamera()),"ArrythmiaElectricity"===this.$model().name?this.loadModel(this.modelName,.25):this.loadModel(this.modelName,1),this.heartRate=this.$heartBeat(),this.updateSlider(this.heartRate)},loadModel:function(e,t){var n=this,o="_highres",r=this.modelURLsArray[e+o][0],d=this.modelURLsArray[e+o][1];this.scene=this.baseRenderer.getSceneByName(e),void 0===this.scene?(this.scene=this.baseRenderer.createScene(e),this.scene.controls.staticMoving=!0,this.baseRenderer.setCurrentScene(this.scene),this.scene.loadGltf(r,(function(content){"ArrythmiaElectricity"===e?n.scene.setModelPosition(content,{x:5,y:2}):n.scene.setModelPosition(content,{y:3}),n.oldCam&&n.oldCam.near&&n.shareCameraSettings(n.oldCam)})),this.$store.commit("setModelToSceneArray",this.scene),this.scene.loadViewUrl(d),this.scene.updateBackground("#000","#000"),this.Copper.setHDRFilePath("environment/footprint_court_2k.hdr"),this.baseRenderer.updateEnvironment(),this.addLabel(this.modelName)):(this.meshReady(this.oldCam),this.baseRenderer.setCurrentScene(this.scene),"ArrythmiaElectricity"===e&&this.isModelHalfed!=this.scene.isHalfed&&this.showHalf()),this.scene.onWindowResize()},meshReady:function(e){this.oldCam&&e.near&&this.shareCameraSettings(e)},shareCameraSettings:function(e){if(null!==e&&null!==e.near&&void 0!==e.near){var t=this.scene.setViewPoint(e,[-.9551143646240234,2.91867446899414,2.7563438415527344]);this.scene.updateCamera(t),this.isModelHalfed!=this.scene.isHalfed&&this.showHalf(),this.scene.isHalfed=this.isModelHalfed}},onResetAllModelsView:function(){for(var e in this.heartRate=2500,this.isModelHalfed=!1,$nuxt.$emit("beat-reset",2500),this.$store.commit("setHeartBeat",2500),this.$store.commit("setPreviousCamera",{}),this.$store.commit("setIsHalfModel",!1),this.modelToSceneArray)this.modelToSceneArray.hasOwnProperty(e)&&(this.modelToSceneArray[e].resetView(),this.modelToSceneArray[e].isHalfed&&this.showHalf(this.modelToSceneArray[e]))},convertHeartRate:function(e){return"ArrythmiaElectricity"===this.modelName?e/2e3:e/500},updateSlider:function(e){var t=this.convertHeartRate(e);this.scene&&this.scene.setPlayRate(t)},addLabel:function(e){"NoInfarct"===e||"NormalElectricity"===e?(this.Copper.addLabelToScene(this.scene,"right ventricle",-45.323991175632,44.1417335930078,10.421283,60),this.Copper.addLabelToScene(this.scene,"left ventricle",-55.056679,4.82123313284426,5.421283,60)):"SmallInfarct"===e?this.Copper.addLabelToScene(this.scene,"damaged tissue",30,-40,0,60):"LargeInfarct"===e&&this.Copper.addLabelToScene(this.scene,"damaged tissue",15,-45,0,60)},onHalfHeartPressed:function(){this.isModelHalfed=!this.isModelHalfed,this.showHalf()},showHalf:function(e){var t;t=e||this.baseRenderer.getSceneByName(this.modelName),this.$store.commit("setIsHalfModel",this.isModelHalfed),"NormalElectricity"===this.modelName?t.content.traverse((function(e){"Ant"===e.name&&t.updateModelChildrenVisualisation(e)})):"ArrythmiaElectricity"===this.modelName?t.content.traverse((function(e){"Post"===e.name&&t.updateModelChildrenVisualisation(e)})):t.content.traverse((function(e){"Post_top"!==e.name&&"Post_inner"!==e.name&&"Post_NonInfarct"!==e.name&&"Post_top_1"!==e.name&&"Post_inner_1"!==e.name&&"Post_NonInfarct_1"!==e.name||t.updateModelChildrenVisualisation(e)}))}},watch:{heartRate:function(e){this.updateSlider(e)}},created:function(){var e=this;this.$nuxt.$on("beat-update-onTime",(function(t){e.updateSlider(t)})),this.$nuxt.$on("beat-change",(function(t){e.heartRate=t,e.$store.commit("setHeartBeat",t)}))},beforeDestroy:function(){if(this.oldCam){var e=this.baseRenderer.getCurrentScene().camera,t=new this.THREE.Vector3,n=new this.THREE.Vector3;t.copy(e.position),n.copy(e.up);var o={position:t,up:n,near:e.near,far:e.far};this.$store.commit("setPreviousCamera",o)}this.$nuxt.$off("beat-change")}},r=(n(443),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},[o("div",{staticClass:"flex flex-col justify-center items-center"},[o("div",{ref:"baseDomObject",class:e.mdAndUp?"baseDom-md":"baseDom-sm",on:{dblclick:e.onHalfHeartPressed}}),e._v(" "),o("div",{ref:"threeDControls",staticClass:"baseModelControl",class:e.mdAndUp?"baseModelControl-md":"baseModelControl-sm"},[o("div",{staticClass:"baseModelCB",class:e.mdAndUp?"baseModelCB-md":""},[o("button",{staticClass:"absolute top-0 left-0 w-1/5 h-full hover:bg-gray-50/10",on:{click:e.onResetAllModelsView}}),e._v(" "),o("img",{staticClass:"h-full w-full md:object-contain",attrs:{src:n(442)}}),e._v(" "),o("button",{staticClass:"absolute top-0 right-0 w-1/4 h-full hover:bg-gray-50/10",on:{click:e.onHalfHeartPressed}})])])])])}),[],!1,null,"522b9f87",null);t.default=component.exports},448:function(e,t,n){"use strict";n.r(t);n(70);var o={data:function(){return{idleTime:0,idleTimeLimit:3e5,oldTime:new Date,render:void 0}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}},mounted:function(){var e=this;window.ecgDone=!1,window.lvpDone=!1,ecgName=null,lvpName=null,loadChart(this.$ecg(),this.$lvp(),this.$category(),1),setTimeout((function(){e.updateEcg()}),200)},methods:{updateEcg:function(){var e=this;if(this.baseRenderer=this.$baseRenderer(),this.baseRenderer){this.baseRenderer.preRenderCallbackFunctions.length=0;this.baseRenderer.addPreRenderCallbackFunction((function(){var t=e.baseRenderer.getCurrentScene().getCurrentTime();updateIndicator(t)}))}}}},r=(n(445),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex",class:e.$vuetify.breakpoint.smAndUp||e.$vuetify.breakpoint.width<=430?"flex-column trace-box-lg":"trace-box-sm"},[n("div",{staticClass:"graph-comm",class:e.mdAndUp?"EGC-lg":"EGC-sm"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[e._v("\n      ECG\n    ")]),e._v(" "),n("div",{ref:"rightECG",staticClass:"w-full",class:e.mdAndUp?"rightECG-md":"rightECG-sm",attrs:{id:"rightECG"}}),e._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",class:e.mdAndUp?"graph-text-md":"graph-text-sm",attrs:{id:"ecgDescription"}},[e._v("\n      "+e._s(e.$ecg().description)+"\n    ")])]),e._v(" "),n("div",{staticClass:"graph-comm",class:e.mdAndUp?"LVP-lg":"LVP-sm"},[n("div",{staticClass:"font-weight-bold text-subtitle-2 text-xl-h6 text-sm-subtitle-2 text-md-body-1"},[e._v("\n      Pressure (mmHg)\n    ")]),e._v(" "),n("div",{ref:"rightLVP",staticClass:"w-full",class:e.mdAndUp?"rightECG-md":"rightECG-sm",attrs:{id:"rightLVP"}}),e._v(" "),n("div",{staticClass:"text-caption text-xl-body-2",class:e.mdAndUp?"graph-text-md":"graph-text-sm",attrs:{id:"lvpDescription"}},[e._v("\n      "+e._s(e.$lvp().description)+"\n    ")])])])}),[],!1,null,"095aa0d0",null);t.default=component.exports},454:function(e,t,n){"use strict";n(441)},455:function(e,t,n){var o=n(23)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Bad+Script&family=Raleway:wght@100;300&display=swap);"]),o.push([e.i,".model-panel[data-v-40223e1b]{width:100vw;height:auto}.model-rate[data-v-40223e1b]{position:relative;width:100%;text-align:center}.rate-mdAndUp[data-v-40223e1b]{display:flex;justify-content:center;align-items:center;width:100%;max-height:20%}.rate-mdAndUp .heart-rate[data-v-40223e1b]{margin-top:10px;width:60%;height:100px}.logo-mdAndUp[data-v-40223e1b]{width:50%}.logo-md[data-v-40223e1b]{display:block;height:10%}.trace-main[data-v-40223e1b]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:25px 3px}.tracePanel-md[data-v-40223e1b]{position:fixed;top:0;right:0;height:100%;min-width:280px;max-width:25vw}.tracePanel-sm[data-v-40223e1b]{width:100vw;height:auto}.trace-md[data-v-40223e1b]{min-height:60%}.trace-sm[data-v-40223e1b]{width:100%;margin-bottom:100px;padding-right:10px}",""]),e.exports=o},469:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{}},computed:{mdAndUp:function(){return this.$vuetify.breakpoint.mdAndUp}}},r=(n(454),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"model-panel"},[n("model"),e._v(" "),n("div",{staticClass:"mr-24 ml-4 d-flex d-sm-none"},[n("heart-rate")],1)],1),e._v(" "),n("div",{staticClass:"trace-main",class:e.mdAndUp?"tracePanel-md":"tracePanel-sm"},[n("div",{staticClass:"d-none d-sm-flex rate-mdAndUp"},[n("div",{staticClass:"heart-rate"},[n("heart-rate")],1)]),e._v(" "),n("div",{class:e.mdAndUp?"trace-md":"trace-sm"},[n("traces")],1),e._v(" "),n("div",{staticClass:"d-none d-md-flex justify-center",class:e.mdAndUp?"logo-md":"logo-sm"},[n("div",{staticClass:"logo-mdAndUp"},[n("logo")],1)])])])}),[],!1,null,"40223e1b",null);t.default=component.exports;installComponents(component,{Model:n(447).default,HeartRate:n(467).default,Traces:n(448).default,Logo:n(294).default})}}]);