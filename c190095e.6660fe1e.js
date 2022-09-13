(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(184)),a=["components"],s={title:"useWindowDimensions"},c={unversionedId:"components/hooks/use-window-dimensions",id:"components/hooks/use-window-dimensions",isDocsHomePage:!1,title:"useWindowDimensions",description:"Hook that returns the window's current dimensions",source:"@site/docs/components/hooks/use-window-dimensions.md",slug:"/components/hooks/use-window-dimensions",permalink:"/availity-react/components/hooks/use-window-dimensions",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/hooks/use-window-dimensions.md",version:"current",sidebar:"someSidebar",previous:{title:"useProviders",permalink:"/availity-react/components/hooks/use-providers"},next:{title:"Icon",permalink:"/availity-react/components/icon"}},u=[{value:"Example",id:"example",children:[]}],p={toc:u};function l(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hook that returns the window's current dimensions"),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useWindowDimensions } from '@availity/hooks';\n\nconst Example = () => {\n  const { height, width } = useWindowDimensions();\n  return (\n    <div>\n      {' '}\n      Current Window Dimensions: height: {height}, width: {width}\n    </div>\n  );\n};\n")))}l.isMDXComponent=!0},184:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,f=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return t?o.a.createElement(f,s(s({ref:n},u),{},{components:t})):o.a.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);