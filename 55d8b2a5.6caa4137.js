(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(184)),o=["components"],s={title:"useAuthorize"},c={unversionedId:"components/authorize/useAuthorize",id:"components/authorize/useAuthorize",isDocsHomePage:!1,title:"useAuthorize",description:"The useAuthorize hook accepts a list of permissions, with optional parameters, and will return whether the user is authorized or not.",source:"@site/docs/components/authorize/useAuthorize.mdx",slug:"/components/authorize/useAuthorize",permalink:"/availity-react/components/authorize/useAuthorize",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/authorize/useAuthorize.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Authorize",permalink:"/availity-react/components/authorize/authorize"},next:{title:"Avatar",permalink:"/availity-react/components/avatar"}},l=[{value:"Args",id:"args",children:[]},{value:"Return Object",id:"return-object",children:[]},{value:"Example",id:"example",children:[]},{value:"Storybook",id:"storybook",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"useAuthorize")," hook accepts a list of permissions, with optional parameters, and will return whether the user is authorized or not."),Object(i.b)("p",null,"This package uses ",Object(i.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," to handle data fetching. This means you must add a ",Object(i.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClientProvider#_top"},"QueryClientProvider")," to your app if you do not already have one. The default setup should cover most use-cases. However, there are 2 options we recommend looking into in order to determine what is correct for your app. These settings are ",Object(i.b)("inlineCode",{parentName:"p"},"refetchOnWindowFocus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"staleTime"),". The first option sets whether the to refetch the query when the window is focused, and the other is the default marker for how long the query is valid."),Object(i.b)("h2",{id:"args"},"Args"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"permissions")),": (string | string[])[]. Required.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"string"),": The permission ID, eg: ",Object(i.b)("inlineCode",{parentName:"li"},"'1234'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"array"),": The array can contain Permission ID's as well as other arrays which contain Permission ID's eg: ",Object(i.b)("inlineCode",{parentName:"li"},"['1234', '2345', ['3456', '4567'], ['5678', '6789']]"),". The items in a nested array indicate Permission ID's that must ",Object(i.b)("em",{parentName:"li"},"all")," be granted to the user to be considered authorized - they act as an ",Object(i.b)("inlineCode",{parentName:"li"},'"AND"'),". The items in the top of the array act as an ",Object(i.b)("inlineCode",{parentName:"li"},'"OR"')," - if ",Object(i.b)("em",{parentName:"li"},"any")," are granted to the user, the user is considered authorized. For example, ",Object(i.b)("inlineCode",{parentName:"li"},"['1234', '2345', ['3456', '4567'], ['5678', '6789']]")," is equivalent to ",Object(i.b)("inlineCode",{parentName:"li"},"'1234' || '2345' || ('3456' && '4567') || ('5678' && '6789')"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"options"))," Object. Optional. Additional options",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"organizationId")),": String. Optional. When present, the permission is validated to ensure it is assigned to the organization."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"customerId")),": String. Optional. When present, the permission is validated to ensure it is assigned to the customer."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"region")),": String or Boolean. Optional. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),". When a string, the permission is validated to ensure it is assigned in the provided region. When true, the permission is validated to ensure it is assigned in the current region."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"resources")),": (string | string[])[]. Optional.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"string"),": The Resource ID, eg: ",Object(i.b)("inlineCode",{parentName:"li"},"'12345'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"array"),": The array can contain Resource ID's as well as other arrays which contain Resource ID's eg: ",Object(i.b)("inlineCode",{parentName:"li"},"['12345', '23456', ['34567', '45678'], ['56789', '67890']]"),". The items in a nested array indicate the Resource ID's that must ",Object(i.b)("em",{parentName:"li"},"all")," be granted to the user to be considered authorized - they act as an ",Object(i.b)("inlineCode",{parentName:"li"},'"AND"'),". The items in the top of the array act as an ",Object(i.b)("inlineCode",{parentName:"li"},'"OR"')," - if ",Object(i.b)("em",{parentName:"li"},"any")," are granted to the user, the user is considered authorized. For example, ",Object(i.b)("inlineCode",{parentName:"li"},"['12345', '23456', ['34567', '45678'], ['56789', '67890']]")," is equivalent to ",Object(i.b)("inlineCode",{parentName:"li"},"'12345' || '23456' || ('34567' && '45678') || ('56789' && '67890')"),".")))))),Object(i.b)("h2",{id:"return-object"},"Return Object"),Object(i.b)("p",null,"An object with two properties is returned from the call"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"type ReturnObject = {\n  /* Result of permission check */\n  authorized: boolean;\n  /* State of the api call */\n  isLoading: boolean;\n};\n")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useAuthorize } from '@availity/authorize';\n\nconst Component = () => {\n  const { authorized, isLoading } = useAuthorize(['1234', '5678'], {\n    region: 'FL',\n  });\n\n  return authorized && <SomeAuthorizedComponent />;\n};\n")),Object(i.b)("h2",{id:"storybook"},"Storybook"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/story/components-authorize--use-authorize"},"Live Example")))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);