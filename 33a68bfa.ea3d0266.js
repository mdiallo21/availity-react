(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(u,l(l({ref:t},b),{},{components:n})):a.a.createElement(u,l({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(184)),o=["components"],l={title:"Tree"},c={unversionedId:"components/tree",id:"components/tree",isDocsHomePage:!1,title:"Tree",description:"Version",source:"@site/docs/components/tree.mdx",slug:"/components/tree",permalink:"/availity-react/components/tree",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/tree.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Training Link",permalink:"/availity-react/components/training-link"},next:{title:"Getting Started",permalink:"/availity-react/components/typography/index"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Types",id:"types",children:[]}],s={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/tree"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/tree.svg?style=for-the-badge",alt:"Version"}))),Object(i.b)("p",null,"This component builds out a hierarchical tree of objects, with the ability to expand/collapse, select, and search."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"npm"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/tree\n")),Object(i.b)("p",null,"Yarn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/tree\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Tree, { TreeItem } from '@availity/tree';\n\nconst Example = () => (\n  const [valueList, setValueList] = useState<TreeItem[]>([]);\n  const [tree, setTree] = useState<TreeItem[]>([]);\n\n  const onSelected = (selectedItems: TreeItem[]) => {\n    setTentativeSelectList(selectedItems.map((item) => ({ code: item.id, value: item.name })));\n  };\n\n   return (\n        <>\n            <Tree\n                items={tree}\n                expandAll\n                enableSearch\n                searchLabel={treeLabel}\n                selectedItems={valueList}\n                onItemsSelected={onSelected}\n            />\n        </>\n    );\n);\n")),Object(i.b)("h4",{id:"storybook"},"Storybook"),Object(i.b)("p",null,"Checkout the ",Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/story/components-tree--default"},"Storybook")," for interactive examples"),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("h4",{id:"items-treeitem"},Object(i.b)("inlineCode",{parentName:"h4"},"items: TreeItem[]")),Object(i.b)("p",null,"Required. The list of items to display in the tree."),Object(i.b)("h4",{id:"enablesearch-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"enableSearch?: boolean")),Object(i.b)("p",null,"Defaults to false. When enabled, there is a search input box that will display and allow for the user to limit the items in the tree based on the typed search value."),Object(i.b)("h4",{id:"searchlabel-string"},Object(i.b)("inlineCode",{parentName:"h4"},"searchLabel?: string")),Object(i.b)("p",null,"The label that displays above the text box."),Object(i.b)("h4",{id:"expandall-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"expandAll?: boolean")),Object(i.b)("p",null,"Defaults to false. When true, the tree view will be entirely expanded on initial load. "),Object(i.b)("h4",{id:"onitemsselected-selectedids-avtreeitem--void"},Object(i.b)("inlineCode",{parentName:"h4"},"onItemsSelected?: (selectedIds: AvTreeItem[]) => void")),Object(i.b)("p",null,"Whenever an item is selected in the tree, it fires this event to let the parent know of the items that are selected."),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("h4",{id:"buildtree"},"buildTree"),Object(i.b)("p",null,"Whenever the items are in a flat array, call this method to build the hierarchical list that is ready for the tree."),Object(i.b)("h3",{id:"types"},"Types"),Object(i.b)("h4",{id:"treeitem"},"TreeItem"),Object(i.b)("h5",{id:"id-string"},Object(i.b)("inlineCode",{parentName:"h5"},"id: string")),Object(i.b)("h5",{id:"parentid-string"},Object(i.b)("inlineCode",{parentName:"h5"},"parentId: string")),Object(i.b)("h5",{id:"isexpanded-boolean"},Object(i.b)("inlineCode",{parentName:"h5"},"isExpanded: boolean")),Object(i.b)("h5",{id:"isselected-boolean"},Object(i.b)("inlineCode",{parentName:"h5"},"isSelected: boolean")),Object(i.b)("h5",{id:"ishidden-boolean"},Object(i.b)("inlineCode",{parentName:"h5"},"isHidden: boolean")),Object(i.b)("h5",{id:"isdisabled-boolean"},Object(i.b)("inlineCode",{parentName:"h5"},"isDisabled: boolean")),Object(i.b)("h5",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h5"},"name: string")),Object(i.b)("h5",{id:"children-treeitem"},Object(i.b)("inlineCode",{parentName:"h5"},"children: TreeItem[]")),Object(i.b)("h5",{id:"areallchildrenselected-boolean"},Object(i.b)("inlineCode",{parentName:"h5"},"areAllChildrenSelected: boolean")))}d.isMDXComponent=!0}}]);