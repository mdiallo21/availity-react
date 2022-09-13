(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(184)),o=["components"],l={title:"Link"},p={unversionedId:"components/link",id:"components/link",isDocsHomePage:!1,title:"Link",description:"Simple link component that renders an ` tag with the href` formatted to leverage loadApp so that when the link is opened in a new tab, it gets loaded inside the home page's iframe",source:"@site/docs/components/link.mdx",slug:"/components/link",permalink:"/availity-react/components/link",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/link.mdx",version:"current",sidebar:"someSidebar",previous:{title:"json-viewer",permalink:"/availity-react/components/json-viewer/json-viewer"},next:{title:"List Group",permalink:"/availity-react/components/list-group"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Simple link component that renders an ",Object(i.b)("inlineCode",{parentName:"p"},"<a>")," tag with the ",Object(i.b)("inlineCode",{parentName:"p"},"href")," formatted to leverage loadApp so that when the link is opened in a new tab, it gets loaded inside the home page's iframe"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/link"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/link.svg?style=for-the-badge",alt:"Version"}))),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"npm"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/link\n")),Object(i.b)("p",null,"Yarn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/link\n")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AvLink from '@availity/link';\n\nconst Example = () => (\n  <AvLink href=\"/public/apps/my-app\" target=\"newBody\">\n    My Application\n  </AvLink>\n);\n")),Object(i.b)("h4",{id:"live-example"},"Live example"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/story/components-link--with-absolute-url"},"Storybook")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h4",{id:"href-string"},Object(i.b)("inlineCode",{parentName:"h4"},"href: string")),Object(i.b)("p",null,"The url of the page the link goes to."),Object(i.b)("h4",{id:"target-string"},Object(i.b)("inlineCode",{parentName:"h4"},"target?: string")),Object(i.b)("p",null,"Where to open the linked document."),Object(i.b)("h4",{id:"tag-reactcomponenttype--string"},Object(i.b)("inlineCode",{parentName:"h4"},"tag?: React.ComponentType | string")),Object(i.b)("p",null,"The tag to use in the link that gets rendered. ",Object(i.b)("strong",{parentName:"p"},"Default:")," ",Object(i.b)("inlineCode",{parentName:"p"},"<a>"),"."),Object(i.b)("h4",{id:"onclick-event-event-url-string--void"},Object(i.b)("inlineCode",{parentName:"h4"},"onClick: (event: Event, url: string) => void")),Object(i.b)("p",null,"Function to run onClick of the link. The first argument passed to ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," is the event. The second argument is the processed ",Object(i.b)("inlineCode",{parentName:"p"},"url"),"."),Object(i.b)("h4",{id:"loadapp-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"loadApp?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"url")," prop to ",Object(i.b)("inlineCode",{parentName:"p"},"AvLink")," is ",Object(i.b)("em",{parentName:"p"},"not")," formatted to leverage loadApp. ",Object(i.b)("strong",{parentName:"p"},"Default:")," ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."))}s.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);