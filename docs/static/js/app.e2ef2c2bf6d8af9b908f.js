webpackJsonp([0],{"/FmF":function(t,e){},ME1E:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("7+uW"),s={name:"SlideOut",props:{size:{type:[String,Number],default:400},zIndex:{type:Number,default:1997},visible:{type:Boolean,default:!1},title:{type:String},closeOnMaskClick:{type:Boolean,default:!0},customClass:{type:String},showMask:{type:Boolean,default:!0},maskColor:{type:String,default:"rgba(0, 0, 0, 0.5)"},dock:{type:String,default:"right"},appendTo:{type:[String,HTMLElement],default:null},disableAnimation:{type:Boolean,default:!1}},data:function(){return{isVisible:!1}},watch:{visible:function(t){this.toggle(t)}},computed:{dockOn:function(){return this.dock||"right"},containerStyle:function(){var t={"z-index":this.zIndex},e=this.isVisible?"0":"100%";switch(this.dockOn){case"left":t.right=e;break;case"right":t.left=e;break;case"top":t.bottom=e;break;case"bottom":t.top=e}return t},maskStyle:function(){return{"background-color":this.maskColor}},layoutStyle:function(){var t={},e="number"==typeof this.size?this.size+"px":this.size,i=this.isVisible||this.disableAnimation?0:"number"!=typeof this.size&&/%$/.test(this.size)?-parseInt(this.size)+"%":-parseInt(this.size)+"px";switch(this.dockOn){case"right":t.width=e,t.right=i;break;case"left":t.width=e,t.left=i;break;case"bottom":t.height=e,t.bottom=i;break;case"top":t.height=e,t.top=i}return t},containerClasses:function(){return[this.customClass,"dock-"+this.dockOn,this.isVisible?"visible":"",this.disableAnimation?"":"enable-animation",this.title||this.$slots.header?"slide-show-header":"",this.$slots.footer?"slide-show-footer":""]}},methods:{getArgs:function(){var t=this;return{wait:!1,set close(e){e&&t.setVisibleValue(!1)},get close(){}}},toggle:function(t){if(t!==this.isVisible){if(t)return this.setVisibleValue(!0),void this.$emit("open");var e=this.getArgs();this.$emit("close",e),e.wait||this.setVisibleValue(!1)}},setVisibleValue:function(t){this.isVisible=t,this.$emit("update:visible",t)},appendComponentTo:function(){if(this.appendTo){var t=this.appendTo;if("string"==typeof t&&!(t=document.querySelector(t)))throw new Error("SlideOut 找不到指定的AppendTo节点: "+this.appendTo);t&&t.appendChild(this.$el)}},onMaskClick:function(){this.closeOnMaskClick&&this.toggle(!1)}},mounted:function(){this.appendComponentTo()},beforeDestroy:function(){this.isVisible&&this.setVisibleValue(!1)}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide",class:t.containerClasses,style:t.containerStyle},[t.showMask?i("div",{staticClass:"slide-mask",style:t.maskStyle,on:{click:t.onMaskClick}}):t._e(),t._v(" "),i("div",{staticClass:"slide-layout",style:t.layoutStyle},[t.$slots.header||t.title?i("div",{staticClass:"slide-header"},[t._t("header",[i("div",{staticClass:"title-text left"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),i("div",{staticClass:"right"},[i("button",{staticClass:"slide-btn-close",on:{click:function(e){return t.toggle(!1)}}},[i("svg",{attrs:{version:"1.1",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"}},[i("path",{attrs:{d:"M493.45411 71.89033 197.751365 361.596502c-9.624195 9.380648-9.624195 24.707728 0 34.138518 9.576099 9.381671 25.222451 9.381671 34.848693 0l253.612115-248.494561 0 786.690176c0 13.3214 11.047614 24.142863 24.642237 24.142863 13.597693 0 24.645306-10.821463 24.645306-24.142863L535.499715 147.240459l253.632581 248.494561c9.603729 9.381671 25.248034 9.381671 34.847669 0 4.836145-4.76349 7.194866-10.939143 7.194866-17.116843 0-6.1777-2.405793-12.355399-7.194866-17.116843L528.255731 71.797209c-9.602705-9.383718-25.244964-9.383718-34.849716 0L493.45411 71.89033z"}})])])])],{title:t.title})],2):t._e(),t._v(" "),i("div",{staticClass:"slide-content"},[t._t("default")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.$slots.footer,expression:"$slots.footer"}],staticClass:"slide-footer"},[t._t("footer")],2)])])},staticRenderFns:[]};var l={name:"Demo",components:{SlideOut:i("VU/8")(s,n,!1,function(t){i("ME1E")},"data-v-299dc61e",null).exports},data:function(){return{text:{header:"Here is header",content:"Here is content",footer:"Here is footer",wait:""},position:null,demo1Visible:!1,demo2Visible:!1,demo3Visible:!1,demo4Visible:!1,demo5Visible:!1,demo6Visible:!1,demo7Visible:!1,demo8Visible:!1,demo9Visible:!1,demo10Visible:!1,demo11Visible:!1,demo12Visible:!1,demo13Visible:!1,demo14Visible:!1}},methods:{showDemo1:function(t){this.position=t,this.demo1Visible=!0},onOpen:function(){this.text.wait="I am opened"},onClose:function(t){t.wait=!0,this.text.wait="I will close after 3 seconds...",setTimeout(function(){t.close=!0},3e3)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"demo"}},[i("slide-out",{attrs:{visible:t.demo1Visible,dock:t.position,title:t.text.header},on:{"update:visible":function(e){t.demo1Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo2Visible},on:{"update:visible":function(e){t.demo2Visible=e}}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.text.header))]),t._v(" "),i("div",[t._v("Close button would be removed while use slot "),i("b",[t._v("header")])]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo3Visible,size:"50%",title:t.text.header},on:{"update:visible":function(e){t.demo3Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo4Visible,size:"200px",title:t.text.header},on:{"update:visible":function(e){t.demo4Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo5Visible},on:{"update:visible":function(e){t.demo5Visible=e}}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.text.header))]),t._v(" "),i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo6Visible},on:{"update:visible":function(e){t.demo6Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo7Visible,title:t.text.header},on:{"update:visible":function(e){t.demo7Visible=e}}},[i("div",[t._v(t._s(t.text.content))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo8Visible,"close-on-mask-click":!1,title:t.text.header},on:{"update:visible":function(e){t.demo8Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo9Visible,title:t.text.header,"disable-animation":""},on:{"update:visible":function(e){t.demo9Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo10Visible,title:t.text.header,"mask-color":"rgba(89, 150, 105, 0.5)"},on:{"update:visible":function(e){t.demo10Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo11Visible,title:t.text.header,"show-mask":!1},on:{"update:visible":function(e){t.demo11Visible=e}}},[i("div",[t._v(t._s(t.text.content))]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo12Visible,title:t.text.header,"append-to":"#customize"},on:{"update:visible":function(e){t.demo12Visible=e}}},[i("div",[t._v("\n            "+t._s(t.text.content)+"\n            "),i("p",[t._v("Element "),i("b",[t._v("#customize")]),t._v(" SHOULD NOT be "),i("b",[t._v("position: static")])])]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.text.footer))])]),t._v(" "),i("slide-out",{attrs:{visible:t.demo13Visible,title:t.text.header},on:{"update:visible":function(e){t.demo13Visible=e},open:t.onOpen,close:t.onClose}},[i("div",[t._v(t._s(t.text.wait))])]),t._v(" "),i("div",{staticClass:"demo-block"},[i("h3",[t._v("Dock position")]),t._v(" "),i("ul",[i("li",[i("button",{on:{click:function(e){return t.showDemo1("top")}}},[t._v("Top")]),t._v(" "),i("button",{on:{click:function(e){return t.showDemo1("right")}}},[t._v("Right")]),t._v(" "),i("button",{on:{click:function(e){return t.showDemo1("bottom")}}},[t._v("Bottom")]),t._v(" "),i("button",{on:{click:function(e){return t.showDemo1("left")}}},[t._v("Left")])])])]),t._v(" "),i("div",{staticClass:"demo-block",attrs:{id:"customize"}},[i("h3",[t._v("Customize")]),t._v(" "),i("ul",[i("li",[i("button",{on:{click:function(e){t.demo2Visible=!0}}},[t._v("Header")]),t._v(" "),i("button",{on:{click:function(e){t.demo12Visible=!0}}},[t._v("Append to specified element "),i("b",[t._v("#customize")])])]),t._v(" "),i("li",[i("button",{on:{click:function(e){t.demo3Visible=!0}}},[t._v("Size: 50%")]),t._v(" "),i("button",{on:{click:function(e){t.demo4Visible=!0}}},[t._v("Size: 200px")])]),t._v(" "),i("li",[i("button",{on:{click:function(e){t.demo5Visible=!0}}},[t._v("No close button")]),t._v(" "),i("button",{on:{click:function(e){t.demo6Visible=!0}}},[t._v("No Header")]),t._v(" "),i("button",{on:{click:function(e){t.demo7Visible=!0}}},[t._v("No Footer")])]),t._v(" "),i("li",[i("button",{on:{click:function(e){t.demo8Visible=!0}}},[t._v("Disable close on mask click")]),t._v(" "),i("button",{on:{click:function(e){t.demo9Visible=!0}}},[t._v("Disable animation")])]),t._v(" "),i("li",[i("button",{on:{click:function(e){t.demo10Visible=!0}}},[i("span",[t._v("Mask color")]),t._v(" "),i("span",{staticStyle:{width:"14px",height:"14px",background:"rgba(89, 150, 105, 0.5)",display:"inline-block","vertical-align":"-2px"}})]),t._v(" "),i("button",{on:{click:function(e){t.demo11Visible=!0}}},[t._v("No Mask")])])])]),t._v(" "),i("div",{staticClass:"demo-block"},[i("h3",[t._v("Event")]),t._v(" "),i("ul",[i("li",[i("button",{on:{click:function(e){t.demo13Visible=!0}}},[t._v("Event after open and before close")])])])])],1)},staticRenderFns:[]};var r={name:"App",components:{Demo:i("VU/8")(l,a,!1,function(t){i("UUS+")},"data-v-f980ea6c",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("a",{attrs:{href:"https://github.com/hyjiacan/vue-slideout.git"}},[this._v("Github")]),this._v(" "),e("a",{attrs:{href:"https://gitee.com/hyjiacan/vue-slideout.git"}},[this._v("Gitee")]),this._v(" "),e("demo")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("\n    SlideOut\n    "),e("small",[this._v("A Slide-Out component for Vue.js 2.0")])])}]};var c=i("VU/8")(r,d,!1,function(t){i("/FmF")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:c},template:"<App/>"})},"UUS+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e2ef2c2bf6d8af9b908f.js.map