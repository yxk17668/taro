(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var c=n(0),r=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(c.forwardRef)((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=c,s=p["".concat(a,".").concat(d)]||p[d]||O[d]||l;return n?r.a.createElement(s,b({ref:t},i,{components:n})):r.a.createElement(s,b({ref:t},i))}));function s(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,a=new Array(l);a[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:c,a[1]=b;for(var i=2;i<l;i++)a[i]=n[i];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var c=n(1),r=n(9),l=(n(0),n(1791)),a={title:"Taro.checkIsSupportFacialRecognition(option)",sidebar_label:"checkIsSupportFacialRecognition"},b={id:"version-2.2.11/apis/open-api/facial/checkIsSupportFacialRecognition",title:"Taro.checkIsSupportFacialRecognition(option)",description:"\u68c0\u67e5\u662f\u5426\u652f\u6301\u9762\u90e8\u8bc6\u522b",source:"@site/versioned_docs/version-2.2.11/apis/open-api/facial/checkIsSupportFacialRecognition.md",permalink:"/taro/docs/2.2.11/apis/open-api/facial/checkIsSupportFacialRecognition",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.11/apis/open-api/facial/checkIsSupportFacialRecognition.md",version:"2.2.11",sidebar_label:"checkIsSupportFacialRecognition",sidebar:"version-2.2.11/API",previous:{title:"Taro.checkIsSoterEnrolledInDevice(option)",permalink:"/taro/docs/2.2.11/apis/open-api/soter/checkIsSoterEnrolledInDevice"},next:{title:"Taro.startFacialRecognitionVerify(option)",permalink:"/taro/docs/2.2.11/apis/open-api/facial/startFacialRecognitionVerify"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u68c0\u67e5\u662f\u5426\u652f\u6301\u9762\u90e8\u8bc6\u522b"),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"checkAliveType"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4ea4\u4e92\u65b9\u5f0f")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(l.b)("tr",null,Object(l.b)("td",null,"errCode"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u9519\u8bef\u7801")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.checkIsSupportFacialRecognition"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);