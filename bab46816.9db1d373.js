(window.webpackJsonp=window.webpackJsonp||[]).push([[1214],{1351:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return r})),b.d(t,"metadata",(function(){return a})),b.d(t,"rightToc",(function(){return o})),b.d(t,"default",(function(){return i}));var l=b(1),n=b(9),c=(b(0),b(1791)),r={title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},a={id:"apis/media/video/chooseVideo",title:"Taro.chooseVideo(option)",description:"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002",source:"@site/docs/apis/media/video/chooseVideo.md",permalink:"/taro/docs/next/apis/media/video/chooseVideo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/video/chooseVideo.md",version:"next",sidebar_label:"chooseVideo",sidebar:"API",previous:{title:"Taro.createVideoContext(id, component)",permalink:"/taro/docs/next/apis/media/video/createVideoContext"},next:{title:"VideoContext",permalink:"/taro/docs/next/apis/media/video/VideoContext"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"camera",id:"camera",children:[]},{value:"sourceType",id:"sourcetype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function i(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},u,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<void>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,Object(c.b)("code",null,'"back" | "front"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u7684\u662f\u524d\u7f6e\u6216\u8005\u540e\u7f6e\u6444\u50cf\u5934\u3002\u90e8\u5206 Android \u624b\u673a\u4e0b\u7531\u4e8e\u7cfb\u7edf ROM \u4e0d\u652f\u6301\u65e0\u6cd5\u751f\u6548")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"compressed"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u538b\u7f29\u6240\u9009\u62e9\u7684\u89c6\u9891\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxDuration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),Object(c.b)("tr",null,Object(c.b)("td",null,"sourceType"),Object(c.b)("td",null,Object(c.b)("code",null,'("album" | "camera")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"duration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u6570\u636e\u91cf\u5927\u5c0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u5bbd\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"camera"},"camera"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"back"),Object(c.b)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u540e\u7f6e\u6444\u50cf\u5934")),Object(c.b)("tr",null,Object(c.b)("td",null,"front"),Object(c.b)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u524d\u7f6e\u6444\u50cf\u5934")))),Object(c.b)("h3",{id:"sourcetype"},"sourceType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"album"),Object(c.b)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444\u89c6\u9891")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseVideo({\n  sourceType: ['album','camera'],\n  maxDuration: 60,\n  camera: 'back',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.chooseVideo"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}i.isMDXComponent=!0},1791:function(e,t,b){"use strict";b.d(t,"a",(function(){return d})),b.d(t,"b",(function(){return s}));var l=b(0),n=b.n(l);function c(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function r(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function a(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?r(Object(b),!0).forEach((function(t){c(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):r(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function o(e,t){if(null==e)return{};var b,l,n=function(e,t){if(null==e)return{};var b,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var u=n.a.createContext({}),i=function(e){var t=n.a.useContext(u),b=t;return e&&(b="function"==typeof e?e(t):a({},t,{},e)),b},d=function(e){var t=i(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(l.forwardRef)((function(e,t){var b=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(b),j=l,s=d["".concat(r,".").concat(j)]||d[j]||O[j]||c;return b?n.a.createElement(s,a({ref:t},u,{components:b})):n.a.createElement(s,a({ref:t},u))}));function s(e,t){var b=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=b.length,r=new Array(c);r[0]=j;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<c;u++)r[u]=b[u];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,b)}j.displayName="MDXCreateElement"}}]);