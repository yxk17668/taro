(window.webpackJsonp=window.webpackJsonp||[]).push([[935],{1075:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),c=(r(0),r(1791)),o={title:"Taro.createSelectorQuery()",sidebar_label:"createSelectorQuery"},i={id:"version-2.2.11/apis/wxml/createSelectorQuery",title:"Taro.createSelectorQuery()",description:"\u8fd4\u56de\u4e00\u4e2a SelectorQuery \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 `this.createSelectorQuery()` \u6765\u4ee3\u66ff\u3002",source:"@site/versioned_docs/version-2.2.11/apis/wxml/createSelectorQuery.md",permalink:"/taro/docs/2.2.11/apis/wxml/createSelectorQuery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.11/apis/wxml/createSelectorQuery.md",version:"2.2.11",sidebar_label:"createSelectorQuery",sidebar:"version-2.2.11/API",previous:{title:"DB",permalink:"/taro/docs/2.2.11/apis/cloud/DB"},next:{title:"Taro.createIntersectionObserver(component, options)",permalink:"/taro/docs/2.2.11/apis/wxml/createIntersectionObserver"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a SelectorQuery \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"this.createSelectorQuery()")," \u6765\u4ee3\u66ff\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => SelectorQuery\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const query = Taro.createSelectorQuery()\nquery.select('#the-id').boundingClientRect()\nquery.selectViewport().scrollOffset()\nquery.exec(function(res){\n  res[0].top       // #the-id\u8282\u70b9\u7684\u4e0a\u8fb9\u754c\u5750\u6807\n  res[1].scrollTop // \u663e\u793a\u533a\u57df\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.createSelectorQuery"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},1791:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return r?a.a.createElement(O,i({ref:t},b,{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);