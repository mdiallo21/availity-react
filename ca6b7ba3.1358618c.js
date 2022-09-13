(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(184)),o=["components"],c={title:"Icon"},l={unversionedId:"components/icon",id:"components/icon",isDocsHomePage:!1,title:"Icon",description:"Simple icon component that is a wrapper for the icons in the availity uikit. Icon List",source:"@site/docs/components/icon.mdx",slug:"/components/icon",permalink:"/availity-react/components/icon",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/icon.mdx",version:"current",sidebar:"someSidebar",previous:{title:"useWindowDimensions",permalink:"/availity-react/components/hooks/use-window-dimensions"},next:{title:"Getting Started",permalink:"/availity-react/components/json-viewer/index"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],s={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Simple icon component that is a wrapper for the icons in the availity uikit. ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"http://availity.github.io/availity-uikit/v3/icons"},"Icon List"))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/icon"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/icon.svg?style=for-the-badge",alt:"Version"}))),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"npm"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/icon --save\n")),Object(r.b)("p",null,"Yarn"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/icon\n")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Icon from \'@availity/icon\';\n\nconst Example = () => <Icon name="home" size="3x" color="primary" />;\n')),Object(r.b)("h4",{id:"live-example"},"Live example"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/docs/components-icon--default"},"Storybook")),Object(r.b)("h4",{id:"all-icons-that-are-passed-on-onclick-function-will-have-a-style-of-cursor-pointer-on-hover"},"All icons that are passed on ",Object(r.b)("inlineCode",{parentName:"h4"},"onClick")," function will have a ",Object(r.b)("inlineCode",{parentName:"h4"},"style")," of ",Object(r.b)("inlineCode",{parentName:"h4"},"{cursor: 'pointer'}")," on hover."),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("h4",{id:"name-string"},Object(r.b)("inlineCode",{parentName:"h4"},"name: string")),Object(r.b)("p",null,"The name of the icon. ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"http://availity.github.io/availity-uikit/v3/icons"},"Icon List"))),Object(r.b)("h4",{id:"size-string"},Object(r.b)("inlineCode",{parentName:"h4"},"size?: string")),Object(r.b)("p",null,"The size of the icon. Potential values: ",Object(r.b)("inlineCode",{parentName:"p"},'"lg"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"xl"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"2x"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"3x"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"4x"'),", ",Object(r.b)("inlineCode",{parentName:"p"},'"5x"')),Object(r.b)("h4",{id:"color-string"},Object(r.b)("inlineCode",{parentName:"h4"},"color?: string")),Object(r.b)("p",null,"The text color of the icon. Uses Availity UI Kit variants."),Object(r.b)("h4",{id:"aria-label-string"},Object(r.b)("inlineCode",{parentName:"h4"},"aria-label?: string")),Object(r.b)("p",null,"See: ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute"},"aria-label"),". ",Object(r.b)("strong",{parentName:"p"},"Default:")," ",Object(r.b)("inlineCode",{parentName:"p"},"name")))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return n?i.a.createElement(d,c(c({ref:t},p),{},{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);