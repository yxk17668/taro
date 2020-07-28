(window.webpackJsonp=window.webpackJsonp||[]).push([[827],{1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,i({ref:t},s,{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},967:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(1791)),c={title:"\u5f02\u6b65\u7f16\u7a0b"},i={id:"version-1.3.42/async-await",title:"\u5f02\u6b65\u7f16\u7a0b",description:"Taro \u652f\u6301\u4f7f\u7528 `async functions` \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f `async functions` \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 `@tarojs/async-await`",source:"@site/versioned_docs/version-1.3.42/async-await.md",permalink:"/taro/docs/1.3.42/async-await",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/async-await.md",version:"1.3.42",sidebar:"version-1.3.42/docs",previous:{title:"\u57fa\u4e8e Taro \u5f00\u53d1\u7b2c\u4e09\u65b9\u591a\u7aef UI \u5e93",permalink:"/taro/docs/1.3.42/ui-lib"},next:{title:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u548c\u63d2\u4ef6",permalink:"/taro/docs/1.3.42/mini-third-party"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/async-await")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add @tarojs/async-await\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save @tarojs/async-await\n")),Object(o.b)("p",null,"\u968f\u540e\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",Object(o.b)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u76f4\u63a5 ",Object(o.b)("inlineCode",{parentName:"p"},"import")," \uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u529f\u80fd\u4e86"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// src/app.js\nimport '@tarojs/async-await'\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/async-await")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/1.3.42/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}l.isMDXComponent=!0}}]);