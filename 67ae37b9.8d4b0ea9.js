(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(184)),i=["components"],p={title:"Progress"},c={unversionedId:"components/progress",id:"components/progress",isDocsHomePage:!1,title:"Progress",description:"Availity Progress Bar",source:"@site/docs/components/progress.mdx",slug:"/components/progress",permalink:"/availity-react/components/progress",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/progress.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Badge",permalink:"/availity-react/components/badge"},next:{title:"Getting Started",permalink:"/availity-react/components/spaces/index"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Availity Progress Bar"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/progress"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/progress.svg?style=for-the-badge",alt:"Version"}))),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"npm"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/progress\n")),Object(o.b)("p",null,"Yarn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/progress\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Progress from '@availity/progress';\n\nconst Example = () => (\n  <>\n    <p>50% Complete</p>\n    <Progress animated={false} striped complete={false} value={50} max={100} />\n  </>\n);\n")),Object(o.b)("h4",{id:"live-example"},"Live example"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/story/components-progress--default"},"Storybook")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("h4",{id:"tag-reactcomponenttype--string"},Object(o.b)("inlineCode",{parentName:"h4"},"tag?: React.ComponentType | string")),Object(o.b)("p",null,"The tag to render the progress bar as. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"<div>"),"."),Object(o.b)("h4",{id:"animated-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"animated?: boolean")),Object(o.b)("p",null,'Triggers the "animated" style in the progress bar.'),Object(o.b)("h4",{id:"striped-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"striped?: boolean")),Object(o.b)("p",null,'Triggers the "striped" style in the progress bar.'),Object(o.b)("h4",{id:"complete-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"complete?: boolean")),Object(o.b)("p",null,'Triggers the "complete" style in the progress bar. When true, a checkmark appears at the end of the progress bar'),Object(o.b)("h4",{id:"value-number"},Object(o.b)("inlineCode",{parentName:"h4"},"value?: number")),Object(o.b)("p",null,"The amount of the progress bar that should be filled (relative to the ",Object(o.b)("inlineCode",{parentName:"p"},"max"),") ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"."),Object(o.b)("h4",{id:"max-number"},Object(o.b)("inlineCode",{parentName:"h4"},"max? number")),Object(o.b)("p",null,"The maximum amount of the progress bar. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"100"),"."),Object(o.b)("h4",{id:"color-string"},Object(o.b)("inlineCode",{parentName:"h4"},"color?: string")),Object(o.b)("p",null,"The color of the progress bar. ",Object(o.b)("strong",{parentName:"p"},"Default:")," ",Object(o.b)("inlineCode",{parentName:"p"},"success"),"."))}b.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);