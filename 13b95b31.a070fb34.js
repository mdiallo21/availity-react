(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{184:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(184)),a=["components"],c={title:"useProviders"},s={unversionedId:"components/hooks/use-providers",id:"components/hooks/use-providers",isDocsHomePage:!1,title:"useProviders",description:"Hook that returns providers.",source:"@site/docs/components/hooks/use-providers.md",slug:"/components/hooks/use-providers",permalink:"/availity-react/components/hooks/use-providers",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/hooks/use-providers.md",version:"current",sidebar:"someSidebar",previous:{title:"useOrganizations",permalink:"/availity-react/components/hooks/use-organizations"},next:{title:"useWindowDimensions",permalink:"/availity-react/components/hooks/use-window-dimensions"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]},{value:"<code>config: {customerId: number} &amp; AxiosRequestConfig</code>",id:"config-customerid-number--axiosrequestconfig",children:[]},{value:"<code>options?: QueryConfig</code>",id:"options-queryconfig",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hook that returns providers."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useProviders } from '@availity/hooks';\n\nconst Example = () => {\n  const { data, isFetching } = useProviders({ customerId: 01234 });\n\n  return (\n    <div>\n      {isFetching\n        ? 'Loading...'\n        : data?.data?.providers?.[0]?.lastName || 'Dr. Availity'}\n    </div>\n  );\n};\n")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h3",{id:"config-customerid-number--axiosrequestconfig"},Object(i.b)("inlineCode",{parentName:"h3"},"config: {customerId: number} & AxiosRequestConfig")),Object(i.b)("p",null,"The Customer ID to retrieve the providers and other config options that can be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"getProviders")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@availity/api-axios")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"More information about this config can be found ",Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/sdk-js/api/getting-started/#config-1"},"here"))),Object(i.b)("h3",{id:"options-queryconfig"},Object(i.b)("inlineCode",{parentName:"h3"},"options?: QueryConfig")),Object(i.b)("p",null,"Options to be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"useQuery")," hook such as ",Object(i.b)("inlineCode",{parentName:"p"},"enabled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"retry"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"onSuccess"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"More information on the options can be found ",Object(i.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/docs/api/#usequery"},"here"))))}l.isMDXComponent=!0}}]);