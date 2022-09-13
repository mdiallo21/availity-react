(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(184)),o=["components"],l={title:"<DateField />"},c={unversionedId:"form/date/components/date-field",id:"form/date/components/date-field",isDocsHomePage:!1,title:"<DateField />",description:"The same as Date but with a Label that appears above input and a Feedback that appears below the input.",source:"@site/docs/form/date/components/date-field.md",slug:"/form/date/components/date-field",permalink:"/availity-react/form/date/components/date-field",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/form/date/components/date-field.md",version:"current",sidebar:"someSidebar",previous:{title:"<Date />",permalink:"/availity-react/form/date/components/date"},next:{title:"<DateRange />",permalink:"/availity-react/form/date/components/date-range"}},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[]}],b={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The same as ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," but with a ",Object(i.b)("inlineCode",{parentName:"p"},"Label")," that appears above input and a ",Object(i.b)("inlineCode",{parentName:"p"},"Feedback")," that appears below the input."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Form } from '@availity/form';\nimport { DateField } from '@availity/date';\nimport '@availity/date/styles.scss';\nimport { avDate } from '@availity/yup';\nimport { Button } from 'reactstrap';\nimport * as yup from 'yup';\n\nconst Example = () => (\n  <Form\n    initialValues={{\n      dateOfService: '',\n    }}\n    onSubmit={(values) => console.log(values)}\n    validationSchema={yup.object().shape({\n      dateOfService: avDate().required(),\n    })}\n  >\n    <DateField\n      label=\"Date of Service\"\n      id=\"dateOfService\"\n      name=\"dateOfService\"\n      min={{ value: 7, units: 'day' }}\n      max={{ value: 7, units: 'day' }}\n    />\n    <Button color=\"primary\" type=\"submit\">\n      Submit\n    </Button>\n  </Form>\n);\n")),Object(i.b)("h4",{id:"live-example"},"Live example"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/availity-react/storybook/?path=/docs/form-components-date--date-field"},"Storybook")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("p",null,"Extends ",Object(i.b)("a",{parentName:"p",href:"/form/date/components/date/#props"},"Date Props"),"."),Object(i.b)("h4",{id:"name-string"},Object(i.b)("inlineCode",{parentName:"h4"},"name: string")),Object(i.b)("p",null,"The name of the field. Will be the key of the selected date that comes through in the values of the ",Object(i.b)("inlineCode",{parentName:"p"},"onSubmit")," callback."),Object(i.b)("h4",{id:"label-string"},Object(i.b)("inlineCode",{parentName:"h4"},"label?: string")),Object(i.b)("p",null,"The text that renders inside the ",Object(i.b)("inlineCode",{parentName:"p"},"Label")," above the input."),Object(i.b)("h4",{id:"labelclass-string"},Object(i.b)("inlineCode",{parentName:"h4"},"labelClass?: string")),Object(i.b)("p",null,"The name of the class for the label. Will be passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"className")," prop of the label in the field."),Object(i.b)("h4",{id:"labelhidden-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"labelHidden?: boolean")),Object(i.b)("p",null,"Used to control if the label is displayed. When set to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", the label in the field won't be visible."),Object(i.b)("h4",{id:"labelattrs-reacthtmlattributeshtmllabelelement"},Object(i.b)("inlineCode",{parentName:"h4"},"labelAttrs?: React.HTMLAttributes<HTMLLabelElement>")),Object(i.b)("p",null,"Pass additional attributes to the label"),Object(i.b)("h4",{id:"helpid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"helpId?: string")),Object(i.b)("p",null,"Help topic id, adds ",Object(i.b)("inlineCode",{parentName:"p"},"<FieldHelpIcon/>")," next to the label (should not be within label for accessibility)."),Object(i.b)("h4",{id:"required-boolean"},Object(i.b)("inlineCode",{parentName:"h4"},"required?: boolean")),Object(i.b)("p",null,"Will add ",Object(i.b)("inlineCode",{parentName:"p"},"<RequiredAsterisk />")," to label."))}d.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);