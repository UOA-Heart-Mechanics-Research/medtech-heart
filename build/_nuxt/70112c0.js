(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{413:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("651c9396",content,!0,{sourceMap:!1})},441:function(t,e,n){"use strict";n(413)},442:function(t,e,n){var r=n(24)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Helvetica&display=swap);"]),r.push([t.i,".navigate[data-v-80314b50]{padding-top:4rem;padding-bottom:2rem;align-items:center;grid-row-gap:1.5rem;row-gap:1.5rem}.navigate .button[data-v-80314b50]{width:80%;max-width:16rem;padding:1.2rem;border-radius:1.25rem;text-align:center}.navigate .button span[data-v-80314b50]{font-size:1.3rem;font-weight:600}.navigate .button.--active[data-v-80314b50]{color:#fff;background-color:rgba(150,30,150,.6)}.navigate .button.--inactive[data-v-80314b50]{color:#afafaf;background-color:hsla(0,0%,100%,.2)}.contributor[data-v-80314b50]{background-color:rgba(150,30,150,.3)}.about-panel[data-v-80314b50]{height:75vh;display:flex;flex-direction:column;justify-content:space-around}.feedback[data-v-80314b50]{padding:1rem;line-height:2rem}.feedback a[data-v-80314b50]{color:#ff0}.select[data-v-80314b50]{width:127px}.v-input__slot[data-v-80314b50]{background:#fff}.theme--dark.v-list[data-v-80314b50]{background:rgba(150,30,150,.5)}",""]),t.exports=r},492:function(t,e,n){"use strict";n.r(e);var r={name:"AboutUs",data:function(){return{teamSelected:!1,researchSelected:!0,select:"",items:["latest","version 2.0","version 1.0"]}},methods:{toggleNavigation:function(t){this.teamSelected=!this.teamSelected,this.researchSelected=!this.researchSelected,$nuxt.$emit("about-navigation",t)},onselectChange:function(select){"latest"===select&&(window.location.href="https://uoa-heart-mechanics-research.github.io/medtech-heart/"),"version 2.0"===select&&(window.location.href="https://uoa-heart-mechanics-research.github.io/medtech-heart/v2/"),"version 1.0"===select&&(window.location.href="https://uoa-heart-mechanics-research.github.io/medtech-heart/v1/")}}},o=(n(441),n(42)),c=n(62),l=n.n(c),d=n(386),v=n(271),h=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-2"},[n("h1",{staticClass:"pt-2 main-heading"},[t._v("About Us")]),t._v(" "),n("div",{staticClass:"about-panel"},[n("div",{staticClass:"navigate flexbox --vertical lg:-mt-10"},[n("div",{staticClass:"button",class:t.researchSelected?"button --active":"button --inactive"},[n("v-btn",{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("research")}}},[t._v("\n          Our Research\n        ")])],1),t._v(" "),n("div",{staticClass:"button",class:t.teamSelected?"button --active":"button --inactive"},[n("v-btn",{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("team")}}},[t._v(" Our Team ")])],1)]),t._v(" "),t._m(0),t._v(" "),n("div",[n("div",{staticClass:"mx-auto contributor",attrs:{"max-width":"344"}},[n("v-card-text",[n("div",{staticClass:"text-h6 text--darken-6"},[t._v("Website Developers")]),t._v(" "),n("div",{staticClass:"text--darken-4 pl-6"},[t._v("\n            Linkun Gao "),n("br"),t._v("\n            Riffat Nourin"),n("br"),t._v("\n            Alan Wu "),n("br"),t._v("\n            Dr Thiranja Prasad Babarenda Gamage "),n("br"),t._v("\n            Prof Martyn Nash "),n("br"),t._v("\n            Richard Christie "),n("br"),t._v("\n            Chinchien Lin "),n("br"),t._v("\n            Zhinuo Wang "),n("br")])])],1),t._v(" "),n("v-select",{staticClass:"select",attrs:{items:t.items,label:"Switch versions",dense:"",color:"#fff",height:"20px"},on:{change:function(e){return t.onselectChange(t.select)}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedback font-weight-medium text--primary"},[t._v("\n      Visit our\n      "),n("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScsab93B7uPg389gxCNfCSgG4sMNIFk_mxDFTFF_-UC2TcSJQ/viewform?usp=sf_link",target:"view_window"}},[t._v("Online form")]),t._v("\n      to give us your valuable feedback about this app.\n    ")])}],!1,null,"80314b50",null);e.default=component.exports;l()(component,{VBtn:d.a,VCardText:v.a,VSelect:h.a})}}]);