(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{1791:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,O=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?a.a.createElement(O,i({ref:t},b,{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},531:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(9),o=(r(0),r(1791)),c={title:"Taro.getOpenUserInfo()",sidebar_label:"getOpenUserInfo"},i={id:"version-2.2.11/apis/alipay/getOpenUserInfo",title:"Taro.getOpenUserInfo()",description:"\u6b64\u63a5\u53e3\u53ef\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u7684\u57fa\u7840\u4fe1\u606f\uff08\u5934\u50cf\u56fe\u7247\u5730\u5740\u3001\u6635\u79f0\u3001\u6027\u522b\u3001\u56fd\u5bb6\u7801\u3001\u7701\u4efd\u3001\u6240\u5728\u5e02\u533a\uff09\uff0c\u63a5\u5165\u65b9\u6cd5\u8bf7\u53c2\u8003 \u83b7\u53d6\u4f1a\u5458\u57fa\u7840\u4fe1\u606f\u4ecb\u7ecd\u3002\u5982\u9700\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u6807\u8bc6\uff08user_id\uff09\uff0c\u8bf7\u8c03\u7528 my.getAuthCode \u548c alipay.system.oauth.token \u63a5\u53e3\u3002",source:"@site/versioned_docs/version-2.2.11/apis/alipay/getOpenUserInfo.md",permalink:"/taro/docs/2.2.11/apis/alipay/getOpenUserInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.11/apis/alipay/getOpenUserInfo.md",version:"2.2.11",sidebar_label:"getOpenUserInfo",sidebar:"version-2.2.11/API",previous:{title:"RewardedVideoAd",permalink:"/taro/docs/2.2.11/apis/ad/RewardedVideoAd"},next:{title:"Taro.setPageInfo(option)",permalink:"/taro/docs/2.2.11/apis/swan/setPageInfo"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6b64\u63a5\u53e3\u53ef\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u7684\u57fa\u7840\u4fe1\u606f\uff08\u5934\u50cf\u56fe\u7247\u5730\u5740\u3001\u6635\u79f0\u3001\u6027\u522b\u3001\u56fd\u5bb6\u7801\u3001\u7701\u4efd\u3001\u6240\u5728\u5e02\u533a\uff09\uff0c\u63a5\u5165\u65b9\u6cd5\u8bf7\u53c2\u8003 \u83b7\u53d6\u4f1a\u5458\u57fa\u7840\u4fe1\u606f\u4ecb\u7ecd\u3002\u5982\u9700\u83b7\u53d6\u652f\u4ed8\u5b9d\u4f1a\u5458\u6807\u8bc6\uff08user_id\uff09\uff0c\u8bf7\u8c03\u7528 my.getAuthCode \u548c alipay.system.oauth.token \u63a5\u53e3\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/api/ch8chh"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => Promise<string>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getOpenUserInfo"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);