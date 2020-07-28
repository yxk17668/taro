(window.webpackJsonp=window.webpackJsonp||[]).push([[1225],{1362:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),c=(n(0),n(1791)),b={title:"Radio",sidebar_label:"Radio"},l={id:"version-3.0.5/components/forms/radio",title:"Radio",description:"\u5355\u9009\u9879\u76ee",source:"@site/versioned_docs/version-3.0.5/components/forms/radio.md",permalink:"/taro/docs/components/forms/radio",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.5/components/forms/radio.md",version:"3.0.5",sidebar_label:"Radio",sidebar:"version-3.0.5/components",previous:{title:"PickerView",permalink:"/taro/docs/components/forms/picker-view"},next:{title:"Slider",permalink:"/taro/docs/components/forms/slider"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RadioProps",id:"radioprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5355\u9009\u9879\u76ee"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RadioProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageRadio extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='container'>\n        <Head title='Radio' />\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n            <Radio value='\u9009\u4e2d' checked>\u9009\u4e2d</Radio>\n            <Radio style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Radio>\n          </View>\n          <View className='page-section'>\n            <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n            <View className='radio-list'>\n              <RadioGroup>\n                {this.state.list.map((item, i) => {\n                  return (\n                    <Label className='radio-list__label' for={i} key={i}>\n                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>\n                    </Label>\n                  )\n                })}\n              </RadioGroup>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n")),Object(c.b)("h2",{id:"radioprops"},"RadioProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,Object(c.b)("code",null,"<Radio/>")," \u6807\u8bc6\u3002\u5f53\u8be5",Object(c.b)("code",null,"<Radio/>")," \u9009\u4e2d\u65f6\uff0c",Object(c.b)("code",null,"<RadioGroup/>"),"\u7684 change \u4e8b\u4ef6\u4f1a\u643a\u5e26",Object(c.b)("code",null,"<Radio/>"),"\u7684 value")),Object(c.b)("tr",null,Object(c.b)("td",null,"checked"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u524d\u662f\u5426\u9009\u4e2d")),Object(c.b)("tr",null,Object(c.b)("td",null,"disabled"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(c.b)("tr",null,Object(c.b)("td",null,"color"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"#09BB07"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"Radio \u7684\u989c\u8272\uff0c\u540c css \u7684 color")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.value"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.checked"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.disabled"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.color"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Radio"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0},1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},O=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=d(n),j=a,s=O["".concat(b,".").concat(j)]||O[j]||p[j]||c;return n?r.a.createElement(s,l({ref:t},i,{components:n})):r.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var i=2;i<c;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);