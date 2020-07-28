(window.webpackJsonp=window.webpackJsonp||[]).push([[1433],{1569:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),c=n(9),b=(n(0),n(1791)),a={title:"Taro.checkIsSupportSoterAuthentication(option)",sidebar_label:"checkIsSupportSoterAuthentication"},l={id:"apis/open-api/soter/checkIsSupportSoterAuthentication",title:"Taro.checkIsSupportSoterAuthentication(option)",description:"\u83b7\u53d6\u672c\u673a\u652f\u6301\u7684 SOTER \u751f\u7269\u8ba4\u8bc1\u65b9\u5f0f",source:"@site/docs/apis/open-api/soter/checkIsSupportSoterAuthentication.md",permalink:"/taro/docs/next/apis/open-api/soter/checkIsSupportSoterAuthentication",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/soter/checkIsSupportSoterAuthentication.md",version:"next",sidebar_label:"checkIsSupportSoterAuthentication",sidebar:"API",previous:{title:"Taro.startSoterAuthentication(option)",permalink:"/taro/docs/next/apis/open-api/soter/startSoterAuthentication"},next:{title:"Taro.checkIsSoterEnrolledInDevice(option)",permalink:"/taro/docs/next/apis/open-api/soter/checkIsSoterEnrolledInDevice"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"requestAuthModes",id:"requestauthmodes",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u83b7\u53d6\u672c\u673a\u652f\u6301\u7684 SOTER \u751f\u7269\u8ba4\u8bc1\u65b9\u5f0f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"supportMode"),Object(b.b)("td",null,Object(b.b)("code",null,'("fingerPrint" | "facial" | "speech")[]')),Object(b.b)("td",null,"\u8be5\u8bbe\u5907\u652f\u6301\u7684\u53ef\u88abSOTER\u8bc6\u522b\u7684\u751f\u7269\u8bc6\u522b\u65b9\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"errMsg"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u8c03\u7528\u4fe1\u606f")))),Object(b.b)("h3",{id:"requestauthmodes"},"requestAuthModes"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"fingerPrint"),Object(b.b)("td",null,"\u6307\u7eb9\u8bc6\u522b")),Object(b.b)("tr",null,Object(b.b)("td",null,"facial"),Object(b.b)("td",null,"\u4eba\u8138\u8bc6\u522b")),Object(b.b)("tr",null,Object(b.b)("td",null,"speech"),Object(b.b)("td",null,"\u58f0\u7eb9\u8bc6\u522b",Object(b.b)("br",null),"API \u652f\u6301\u5ea6: \u6682\u672a\u652f\u6301")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"requestAuthModes.speech"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.checkIsSupportSoterAuthentication({\n  success: function (res) {\n    // res.supportMode = [] \u4e0d\u5177\u5907\u4efb\u4f55\u88abSOTER\u652f\u6301\u7684\u751f\u7269\u8bc6\u522b\u65b9\u5f0f\n    // res.supportMode = ['fingerPrint'] \u53ea\u652f\u6301\u6307\u7eb9\u8bc6\u522b\n    // res.supportMode = ['fingerPrint', 'facial'] \u652f\u6301\u6307\u7eb9\u8bc6\u522b\u548c\u4eba\u8138\u8bc6\u522b\n  }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.checkIsSupportSoterAuthentication"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,j=p["".concat(a,".").concat(s)]||p[s]||O[s]||b;return n?c.a.createElement(j,l({ref:t},i,{components:n})):c.a.createElement(j,l({ref:t},i))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,a=new Array(b);a[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<b;i++)a[i]=n[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);