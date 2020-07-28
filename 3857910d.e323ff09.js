(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,O=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return n?r.a.createElement(O,i({ref:t},l,{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},539:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),c=(n(0),n(1791)),o={title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},i={id:"version-2.2.11/apis/canvas/createCanvasContext",title:"Taro.createCanvasContext(canvasId, component)",description:"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 [CanvasContext](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html) \u5bf9\u8c61",source:"@site/versioned_docs/version-2.2.11/apis/canvas/createCanvasContext.md",permalink:"/taro/docs/2.2.11/apis/canvas/createCanvasContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.11/apis/canvas/createCanvasContext.md",version:"2.2.11",sidebar_label:"createCanvasContext",sidebar:"version-2.2.11/API",previous:{title:"Taro.createOffscreenCanvas()",permalink:"/taro/docs/2.2.11/apis/canvas/createOffscreenCanvas"},next:{title:"Taro.canvasToTempFilePath(option, component)",permalink:"/taro/docs/2.2.11/apis/canvas/canvasToTempFilePath"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html"}),"CanvasContext")," \u5bf9\u8c61"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Tip"),": \u9700\u8981\u6307\u5b9a canvasId\uff0c\u8be5\u7ed8\u56fe\u4e0a\u4e0b\u6587\u53ea\u4f5c\u7528\u4e8e\u5bf9\u5e94\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"<canvas/>")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(canvasId: string, component?: Record<string, any>) => CanvasContext\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"canvasId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8981\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \u7ec4\u4ef6 canvas-id \u5c5e\u6027")),Object(c.b)("tr",null,Object(c.b)("td",null,"component"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",null,"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u8868\u793a\u5728\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\u67e5\u627e\u62e5\u6709 canvas-id \u7684 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"canvas")," \uff0c\u5982\u679c\u7701\u7565\u5219\u4e0d\u5728\u4efb\u4f55\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u67e5\u627e")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.createCanvasContext"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);