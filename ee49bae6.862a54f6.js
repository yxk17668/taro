(window.webpackJsonp=window.webpackJsonp||[]).push([[1544],{1680:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),a=(t(0),t(1791)),c={title:"\u51fd\u6570\u5f0f\u7ec4\u4ef6"},l={id:"functional-component",title:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",description:"## \u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6",source:"@site/docs/functional-component.md",permalink:"/taro/docs/next/functional-component",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/functional-component.md",version:"next"},b=[{value:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6",children:[]},{value:"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6",children:[]},{value:"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6",id:"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6",children:[]}],i={rightToc:b};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u81ea ",Object(a.b)("inlineCode",{parentName:"p"},"v1.3.0-beta.0")," \u8d77\u652f\u6301")),Object(a.b)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u975e\u5e38\u7b80\u5355\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Welcome(props) {\n  return <View>Hello, {props.name}</View>;\n}\n")),Object(a.b)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570 ",Object(a.b)("inlineCode",{parentName:"p"},"props"),"\uff0c\u5e76\u4e14\u8fd4\u56de\u7684\u662f\u4e00\u4e2a JSX \u5143\u7d20\u3002\u8fd9\u6837\u7684\u51fd\u6570\u5c31\u662f\u51fd\u6570\u5f0f\u7ec4\u4ef6\u3002\u76f8\u5bf9\u4e8e\u7684 ES6 Class \u7ec4\u4ef6\u662f\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class Welcome extends React.Component {\n  render() {\n    return <View>Hello, {this.props.name}</View>;\n  }\n}\n")),Object(a.b)("p",null,"\u5728 Taro \u4e2d\u4f7f\u7528\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u51fd\u6570\u7684\u547d\u540d\u9700\u8981\u9075\u5faa",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://baike.baidu.com/item/%E5%B8%95%E6%96%AF%E5%8D%A1%E5%91%BD%E5%90%8D%E6%B3%95/9464494?fr=aladdin"}),"\u5e15\u65af\u5361\u5f0f\u547d\u540d\u6cd5"),"\uff1b"),Object(a.b)("li",{parentName:"ol"},"\u4e00\u4e2a\u6587\u4ef6\u4e2d\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216\u4e00\u4e2a Class \u7ec4\u4ef6")),Object(a.b)("h2",{id:"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u81ea ",Object(a.b)("inlineCode",{parentName:"p"},"v1.3.0-beta.0")," \u8d77\u652f\u6301")),Object(a.b)("p",null,"\u7531\u4e8e\u4e00\u4e2a\u6587\u4ef6\u4e0d\u80fd\u5b9a\u4e49\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u4f46\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u7ec4\u4ef6\u5185\u90e8\u7684\u62bd\u8c61\u7ec4\u4ef6\uff0c\u8fd9\u65f6\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6\u5c31\u662f\u4f60\u60f3\u8981\u7b54\u6848\u3002\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a Class \u7ec4\u4ef6\uff0c\u5b83\u5305\u62ec\u4e86\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"Header")," \u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"Footer"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"class SomePage extends Taro.Component {\n  renderHeader () {\n    const { header } = this.state\n    return <View>{header}</View>\n  }\n\n  renderFooter (footer) {\n    return <View>{footer}</View>\n  }\n\n  render () {\n    return (\n      <View>\n        {this.renderHeader()}\n        {...}\n        {this.renderFooter('footer')}\n      </View>\n    )\n  }\n}\n")),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"renderHeader")," \u6216 ",Object(a.b)("inlineCode",{parentName:"p"},"renderFooter")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee\u7c7b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"this"),"\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u4e0d\u9650\u91cf\u7684\u53c2\u6570\uff0c\u8fd9\u7c7b\u578b\u7684\u51fd\u6570\u4e5f\u53ef\u4ee5\u8c03\u7528\u65e0\u9650\u6b21\u6570\u3002\u4f46\u8fd9\u6837\u7684\u5199\u6cd5\u4e5f\u5b58\u5728\u4e00\u4e9b\u9650\u5236\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u51fd\u6570\u7684\u547d\u540d\u5fc5\u987b\u4ee5 ",Object(a.b)("inlineCode",{parentName:"li"},"render")," \u5f00\u5934\uff0c",Object(a.b)("inlineCode",{parentName:"li"},"render")," \u540e\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u9700\u8981\u5927\u5199"),Object(a.b)("li",{parentName:"ol"},"\u51fd\u6570\u7684\u53c2\u6570\u4e0d\u5f97\u4f20\u5165 JSX \u5143\u7d20\u6216 JSX \u5143\u7d20\u5f15\u7528"),Object(a.b)("li",{parentName:"ol"},"\u51fd\u6570\u4e0d\u80fd\u9012\u5f52\u5730\u8c03\u7528\u81ea\u8eab")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5f62\u5982 ",Object(a.b)("inlineCode",{parentName:"p"},"renderHeader")," \u8fd9\u6837\u7684\u51fd\u6570\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4f1a\u7f16\u8bd1\u6210 ",Object(a.b)("inlineCode",{parentName:"p"},"template"),"\uff0c\u800c\u5c0f\u7a0b\u5e8f\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"template")," \u662f\u65e0\u6cd5\u505a\u5230\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u7684\u3002\u5f53\u4f60\u6709\u8fd9\u6837\u7684\u9700\u6c42\u65f6\uff0c\u53ef\u4ee5\u65b0\u5efa\u4e24\u4e2a\u4e00\u6a21\u4e00\u6837\u7684\u7ec4\u4ef6\u548c\u6587\u4ef6\uff1aComponentA \u548c ComponentB\uff0c\u5728 ComponentA \u4e2d\u8c03\u7528 ComponentB\uff0c\u5728 ComponentB \u4e2d\u8c03\u7528 ComponnetA\u3002")),Object(a.b)("h2",{id:"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6"},"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u81ea ",Object(a.b)("inlineCode",{parentName:"p"},"v1.3.0-beta.2")," \u8d77\u652f\u6301")),Object(a.b)("p",null,"\u5728\u4e00\u4e2a\u666e\u901a\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u53e6\u5916\u7684\u62bd\u8c61\u7ec4\u4ef6\u591a\u6b21\u8c03\u7528\uff0c\u540c\u65f6\u6211\u4eec\u8fd8\u5e0c\u671b\u8fd9\u4e2a\u62bd\u8c61\u7ec4\u4ef6\u80fd\u8bbf\u95ee\u5230\u6211\u4eec\u5f53\u524d\u4f5c\u7528\u57df\u7684\u503c\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Header ({ user }) {\n  const name = user.name\n  const renderTitle = () => {\n    // renderTitle \u6bcf\u6b21\u90fd\u80fd\u83b7\u53d6\u5230\u5f53\u524d\u4f5c\u7528\u57df `name` \u7684\u503c\n    return <View>Welcome, {name}</View>\n  }\n  return (\n    <View>\n      {/* \u91cd\u8981\u4eba\u58eb\u6211\u4eec\u8981\u6b22\u8fce\u4ed6\u4e09\u6b21 */ }\n      {renderTitle()}\n      {renderTitle()}\n      {renderTitle()}\n    </View>\n  )\n}\n")),Object(a.b)("p",null,"\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6\u9075\u5faa\u6240\u6709\u7c7b\u51fd\u6570\u5f0f\u7684\u9650\u5236\uff0c\u5305\u62ec\u547d\u540d\uff0c\u4f20\u53c2\uff0c\u8c03\u7528\uff0c\u5e76\u4e14\u5b83\u53ea\u80fd\u5728\u4e00\u4e2a\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ee5\u53ca ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.Component")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u4e2d\u5b9a\u4e49\u53ca\u8c03\u7528\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u4e00\u822c\u60c5\u51b5\u4e0b\u53ea\u5efa\u8bae\u5728\u666e\u901a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u95ed\u5305\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u800c\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.Component")," \u4e2d\u53ef\u4ee5\u663e\u5f0f\u5730\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u51fd\u6570\u5f0f\u7ec4\u4ef6\u548c\u5b83\u7684\u53c2\u6570\u548c\u7b7e\u540d\uff0c\u8fd9\u6837\u51fd\u6570\u7684\u4f5c\u7528\u57df\u66f4\u4e3a\u6e05\u6670\u4e5f\u66f4\u6613\u7ef4\u62a4\u3002")))}p.isMDXComponent=!0},1791:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return O}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),p=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?o.a.createElement(O,l({ref:n},i,{components:t})):o.a.createElement(O,l({ref:n},i))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);