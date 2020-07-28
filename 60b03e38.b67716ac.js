(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1791:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,j=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return t?a.a.createElement(j,i({ref:n},l,{components:t})):a.a.createElement(j,i({ref:n},l))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},815:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(9),o=(t(0),t(1791)),c={title:"\u9879\u76ee\u7ec4\u7ec7"},i={id:"spec-for-taro",title:"\u9879\u76ee\u7ec4\u7ec7",description:"### \u6587\u4ef6\u7ec4\u7ec7\u5f62\u5f0f",source:"@site/docs/spec-for-taro.md",permalink:"/taro/docs/next/spec-for-taro",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/spec-for-taro.md",version:"next"},p=[{value:"\u6587\u4ef6\u7ec4\u7ec7\u5f62\u5f0f",id:"\u6587\u4ef6\u7ec4\u7ec7\u5f62\u5f0f",children:[]},{value:"\u6587\u4ef6\u547d\u540d",id:"\u6587\u4ef6\u547d\u540d",children:[]},{value:"\u6587\u4ef6\u540e\u7f00",id:"\u6587\u4ef6\u540e\u7f00",children:[]}],l={rightToc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u6587\u4ef6\u7ec4\u7ec7\u5f62\u5f0f"},"\u6587\u4ef6\u7ec4\u7ec7\u5f62\u5f0f"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u6587\u4ef6\u7ec4\u7ec7\u89c4\u8303\u4e3a\u6700\u4f73\u5b9e\u8df5\u7684\u5efa\u8bae")),Object(o.b)("p",null,"\u6240\u6709\u9879\u76ee\u6e90\u4ee3\u7801\u8bf7\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55 ",Object(o.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\uff0c\u9879\u76ee\u6240\u9700\u6700\u57fa\u672c\u7684\u6587\u4ef6\u5305\u62ec ",Object(o.b)("strong",{parentName:"p"},"\u5165\u53e3\u6587\u4ef6")," \u4ee5\u53ca ",Object(o.b)("strong",{parentName:"p"},"\u9875\u9762\u6587\u4ef6")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5165\u53e3\u6587\u4ef6\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"app.js")),Object(o.b)("li",{parentName:"ul"},"\u9875\u9762\u6587\u4ef6\u5efa\u8bae\u653e\u7f6e\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"src/pages")," \u76ee\u5f55\u4e0b")),Object(o.b)("p",null,"\u4e00\u4e2a\u53ef\u9760\u7684 Taro \u9879\u76ee\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u7ec4\u7ec7"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 config                 \u914d\u7f6e\u76ee\u5f55\n|   \u251c\u2500\u2500 dev.js             \u5f00\u53d1\u65f6\u914d\u7f6e\n|   \u251c\u2500\u2500 index.js           \u9ed8\u8ba4\u914d\u7f6e\n|   \u2514\u2500\u2500 prod.js            \u6253\u5305\u65f6\u914d\u7f6e\n\u251c\u2500\u2500 src                    \u6e90\u7801\u76ee\u5f55\n|   \u251c\u2500\u2500 components         \u516c\u5171\u7ec4\u4ef6\u76ee\u5f55\n|   \u251c\u2500\u2500 pages              \u9875\u9762\u6587\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 index          index \u9875\u9762\u76ee\u5f55\n|   |   |   \u251c\u2500\u2500 banner     \u9875\u9762 index \u79c1\u6709\u7ec4\u4ef6\n|   |   |   \u251c\u2500\u2500 index.js   index \u9875\u9762\u903b\u8f91\n|   |   |   \u2514\u2500\u2500 index.css  index \u9875\u9762\u6837\u5f0f\n|   \u251c\u2500\u2500 utils              \u516c\u5171\u65b9\u6cd5\u5e93\n|   \u251c\u2500\u2500 app.css            \u9879\u76ee\u603b\u901a\u7528\u6837\u5f0f\n|   \u2514\u2500\u2500 app.js             \u9879\u76ee\u5165\u53e3\u6587\u4ef6\n\u2514\u2500\u2500 package.json\n")),Object(o.b)("h3",{id:"\u6587\u4ef6\u547d\u540d"},"\u6587\u4ef6\u547d\u540d"),Object(o.b)("p",null,"Taro \u4e2d\u666e\u901a JS/TS \u6587\u4ef6\u4ee5\u5c0f\u5199\u5b57\u6bcd\u547d\u540d\uff0c\u591a\u4e2a\u5355\u8bcd\u4ee5\u4e0b\u5212\u7ebf\u8fde\u63a5\uff0c\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"util.js"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"util_helper.js")),Object(o.b)("p",null,"Taro \u7ec4\u4ef6\u6587\u4ef6\u547d\u540d\u9075\u5faa Pascal \u547d\u540d\u6cd5\uff0c\u4f8b\u5982 ",Object(o.b)("inlineCode",{parentName:"p"},"ReservationCard.jsx")),Object(o.b)("h3",{id:"\u6587\u4ef6\u540e\u7f00"},"\u6587\u4ef6\u540e\u7f00"),Object(o.b)("p",null,"Taro \u4e2d\u666e\u901a JS/TS \u6587\u4ef6\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},".js")," \u6216\u8005 ",Object(o.b)("inlineCode",{parentName:"p"},".ts")," \u4f5c\u4e3a\u6587\u4ef6\u540e\u7f00"),Object(o.b)("p",null,"Taro \u7ec4\u4ef6\u5219\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},".jsx")," \u6216\u8005 ",Object(o.b)("inlineCode",{parentName:"p"},".tsx"),"  \u4f5c\u4e3a\u6587\u4ef6\u540e\u7f00\uff0c\u5f53\u7136\u8fd9\u4e0d\u662f\u5f3a\u5236\u7ea6\u675f\uff0c\u53ea\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5b9e\u8df5\u7684\u5efa\u8bae\uff0c\u7ec4\u4ef6\u6587\u4ef6\u4f9d\u7136\u53ef\u4ee5\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},".js")," \u6216\u8005 ",Object(o.b)("inlineCode",{parentName:"p"},".ts")," \u4f5c\u4e3a\u6587\u4ef6\u540e\u7f00"))}b.isMDXComponent=!0}}]);