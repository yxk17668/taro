(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{1791:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o({},r,{},e)),t},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return t?a.a.createElement(m,o({ref:r},s,{components:t})):a.a.createElement(m,o({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},664:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(9),i=(t(0),t(1791)),c={title:"Taro.writeBLECharacteristicValue(OBJECT)",sidebar_label:"writeBLECharacteristicValue"},o={id:"version-1.3.42/apis/device/ble/writeBLECharacteristicValue",title:"Taro.writeBLECharacteristicValue(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.writeBLECharacteristicValue`](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.writeBLECharacteristicValue.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002\r",source:"@site/versioned_docs/version-1.3.42/apis/device/ble/writeBLECharacteristicValue.md",permalink:"/taro/docs/1.3.42/apis/device/ble/writeBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/ble/writeBLECharacteristicValue.md",version:"1.3.42",sidebar_label:"writeBLECharacteristicValue",sidebar:"version-1.3.42/API",previous:{title:"Taro.readBLECharacteristicValue(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/ble/readBLECharacteristicValue"},next:{title:"Taro.getScreenBrightness(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/brightness/getScreenBrightness"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],s={rightToc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.writeBLECharacteristicValue.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.writeBLECharacteristicValue")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.writeBLECharacteristicValue(params).then(...)\n")))}p.isMDXComponent=!0}}]);