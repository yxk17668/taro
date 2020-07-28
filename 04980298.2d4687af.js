(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{176:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return a})),b.d(t,"metadata",(function(){return r})),b.d(t,"rightToc",(function(){return O})),b.d(t,"default",(function(){return o}));var n=b(1),c=b(9),l=(b(0),b(1791)),a={title:"MovableView",sidebar_label:"MovableView"},r={id:"version-3.0.5/components/viewContainer/movable-view",title:"MovableView",description:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002",source:"@site/versioned_docs/version-3.0.5/components/viewContainer/movable-view.md",permalink:"/taro/docs/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.5/components/viewContainer/movable-view.md",version:"3.0.5",sidebar_label:"MovableView",sidebar:"version-3.0.5/components",previous:{title:"Swiper",permalink:"/taro/docs/components/viewContainer/swiper"},next:{title:"CoverView",permalink:"/taro/docs/components/viewContainer/cover-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"MovableViewProps",id:"movableviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TChangeSource",id:"tchangesource",children:[]},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",children:[]},{value:"onScaleEventDeatil",id:"onscaleeventdeatil",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function o(e){var t=e.components,b=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MovableViewProps>\n")),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>\n      </MovableArea>\n    )\n  }\n}\n")),Object(l.b)("h2",{id:"movableviewprops"},"MovableViewProps"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"direction"),Object(l.b)("td",null,Object(l.b)("code",null,'"all" | "vertical" | "horizontal" | "none"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"none")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"movable-view \u7684\u79fb\u52a8\u65b9\u5411\uff0c\u5c5e\u6027\u503c\u6709",Object(l.b)("code",null,"all"),"\u3001",Object(l.b)("code",null,"vertical"),"\u3001",Object(l.b)("code",null,"horizontal"),"\u3001",Object(l.b)("code",null,"none"))),Object(l.b)("tr",null,Object(l.b)("td",null,"inertia"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"movable-view \u662f\u5426\u5e26\u6709\u60ef\u6027")),Object(l.b)("tr",null,Object(l.b)("td",null,"outOfBounds"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8d85\u8fc7\u53ef\u79fb\u52a8\u533a\u57df\u540e\uff0cmovable-view \u662f\u5426\u8fd8\u53ef\u4ee5\u79fb\u52a8")),Object(l.b)("tr",null,Object(l.b)("td",null,"x"),Object(l.b)("td",null,Object(l.b)("code",null,"string | number")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5b9a\u4e49 x \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c x \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 x \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),Object(l.b)("tr",null,Object(l.b)("td",null,"y"),Object(l.b)("td",null,Object(l.b)("code",null,"string | number")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5b9a\u4e49 y \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c y \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 y \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),Object(l.b)("tr",null,Object(l.b)("td",null,"damping"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"20")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u963b\u5c3c\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236x\u6216y\u6539\u53d8\u65f6\u7684\u52a8\u753b\u548c\u8fc7\u754c\u56de\u5f39\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u79fb\u52a8\u8d8a\u5feb")),Object(l.b)("tr",null,Object(l.b)("td",null,"friction"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"2")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6469\u64e6\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u60ef\u6027\u6ed1\u52a8\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u6469\u64e6\u529b\u8d8a\u5927\uff0c\u6ed1\u52a8\u8d8a\u5feb\u505c\u6b62\uff1b\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5426\u5219\u4f1a\u88ab\u8bbe\u7f6e\u6210\u9ed8\u8ba4\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"disabled"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(l.b)("tr",null,Object(l.b)("td",null,"scale"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u652f\u6301\u53cc\u6307\u7f29\u653e\uff0c\u9ed8\u8ba4\u7f29\u653e\u624b\u52bf\u751f\u6548\u533a\u57df\u662f\u5728 movable-view \u5185")),Object(l.b)("tr",null,Object(l.b)("td",null,"scaleMin"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0.5")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5c0f\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"scaleMax"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"10")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5927\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"scaleValue"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"1")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.5 - 10")),Object(l.b)("tr",null,Object(l.b)("td",null,"animation"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"true")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u4f7f\u7528\u52a8\u753b")),Object(l.b)("tr",null,Object(l.b)("td",null,"onChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(l.b)("tr",null,Object(l.b)("td",null,"onScale"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onScaleEventDeatil>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7f29\u653e\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(l.b)("tr",null,Object(l.b)("td",null,"onHTouchMove"),Object(l.b)("td",null,Object(l.b)("code",null,"TouchEventFunction")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u6a2a\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")),Object(l.b)("tr",null,Object(l.b)("td",null,"onVTouchMove"),Object(l.b)("td",null,Object(l.b)("code",null,"TouchEventFunction")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u7eb5\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.direction"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.inertia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.outOfBounds"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.damping"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.friction"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.disabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scale"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleMin"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleMax"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleValue"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.animation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onScale"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onHTouchMove"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableViewProps.onVTouchMove"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"tchangesource"},"TChangeSource"),Object(l.b)("p",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"touch"),Object(l.b)("td",null,"\u62d6\u52a8")),Object(l.b)("tr",null,Object(l.b)("td",null,"touch-out-of-bounds"),Object(l.b)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4")),Object(l.b)("tr",null,Object(l.b)("td",null,"out-of-bounds"),Object(l.b)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4\u540e\u7684\u56de\u5f39")),Object(l.b)("tr",null,Object(l.b)("td",null,"friction"),Object(l.b)("td",null,"\u60ef\u6027")),Object(l.b)("tr",null,Object(l.b)("td",null),Object(l.b)("td",null,"setData")))),Object(l.b)("h3",{id:"onchangeeventdeatil"},"onChangeEventDeatil"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"x"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"X \u5750\u6807")),Object(l.b)("tr",null,Object(l.b)("td",null,"y"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"Y \u5750\u6807")),Object(l.b)("tr",null,Object(l.b)("td",null,"source"),Object(l.b)("td",null,Object(l.b)("code",null,'"" | "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction"')),Object(l.b)("td",null,"\u89e6\u53d1\u4e8b\u4ef6")))),Object(l.b)("h3",{id:"onscaleeventdeatil"},"onScaleEventDeatil"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"x"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"X \u5750\u6807")),Object(l.b)("tr",null,Object(l.b)("td",null,"y"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"Y \u5750\u6807")),Object(l.b)("tr",null,Object(l.b)("td",null,"scale"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u7f29\u653e\u6bd4\u4f8b")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"MovableView"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0},1791:function(e,t,b){"use strict";b.d(t,"a",(function(){return d})),b.d(t,"b",(function(){return p}));var n=b(0),c=b.n(n);function l(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function a(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,n)}return b}function r(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?a(Object(b),!0).forEach((function(t){l(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):a(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function O(e,t){if(null==e)return{};var b,n,c=function(e,t){if(null==e)return{};var b,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||(c[b]=e[b]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(c[b]=e[b])}return c}var j=c.a.createContext({}),o=function(e){var t=c.a.useContext(j),b=t;return e&&(b="function"==typeof e?e(t):r({},t,{},e)),b},d=function(e){var t=o(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var b=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),d=o(b),u=n,p=d["".concat(a,".").concat(u)]||d[u]||i[u]||l;return b?c.a.createElement(p,r({ref:t},j,{components:b})):c.a.createElement(p,r({ref:t},j))}));function p(e,t){var b=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=b.length,a=new Array(l);a[0]=u;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:n,a[1]=r;for(var j=2;j<l;j++)a[j]=b[j];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,b)}u.displayName="MDXCreateElement"}}]);