(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),i=(n(0),n(184)),c=["components"],r={title:"<SpacesLink />"},l={unversionedId:"components/spaces/spaces-link",id:"components/spaces/spaces-link",isDocsHomePage:!1,title:"<SpacesLink />",description:"The `` component is used to handle the complexities of configuration navigation. This includes standard links, legacy SSO links, and Magneto SSO links.",source:"@site/docs/components/spaces/spaces-link.md",slug:"/components/spaces/spaces-link",permalink:"/availity-react/components/spaces/spaces-link",editUrl:"https://github.com/availity/availity-react/edit/master/docusaurus/docs/components/spaces/spaces-link.md",version:"current"},p=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>spaceId?: string</code>",id:"spaceid-string",children:[]},{value:"<code>space?: SanitizedSpace</code>",id:"space-sanitizedspace",children:[]},{value:"<code>clientId?: string</code>",id:"clientid-string",children:[]},{value:"<code>tag?: React.ComponentType | string;</code>",id:"tag-reactcomponenttype--string",children:[]},{value:"<code>bodyTag?: React.ComponentType | string;</code>",id:"bodytag-reactcomponenttype--string",children:[]},{value:"<code>titleTag: React.ComponentType | string</code>",id:"titletag-reactcomponenttype--string",children:[]},{value:"<code>textTag: React.ComponentType | string</code>",id:"texttag-reactcomponenttype--string",children:[]},{value:"<code>linkStyle?: string</code>",id:"linkstyle-string",children:[]},{value:"<code>icon?: boolean</code>",id:"icon-boolean",children:[]},{value:"<code>description?: boolean</code>",id:"description-boolean",children:[]},{value:"<code>appIcon?: boolean</code>",id:"appicon-boolean",children:[]},{value:"<code>favorite?: boolean</code>",id:"favorite-boolean",children:[]},{value:"<code>body?: boolean</code>",id:"body-boolean",children:[]},{value:"<code>showDate?: boolean</code>",id:"showdate-boolean",children:[]},{value:"<code>showNew?: boolean</code>",id:"shownew-boolean",children:[]},{value:"<code>size?: string</code>",id:"size-string",children:[]},{value:"<code>stacked?: boolean</code>",id:"stacked-boolean",children:[]},{value:"<code>loading?: boolean</code>",id:"loading-boolean",children:[]},{value:"<code>maxDescriptionLength?: number</code>",id:"maxdescriptionlength-number",children:[]},{value:"<code>skeletonProps?: object</code>",id:"skeletonprops-object",children:[]},{value:"<code>linkAttributes?: object</code>",id:"linkattributes-object",children:[]},{value:"<code>card: boolean</code>",id:"card-boolean",children:[]},{value:"<code>role: string</code>",id:"role-string",children:[]},{value:"<code>analytics: object</code>",id:"analytics-object",children:[]}]}],d={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<SpacesLink />")," component is used to handle the complexities of configuration navigation. This includes standard links, legacy SSO links, and Magneto SSO links."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<SpacesLink />"),' also includes some additional functionality. Top Apps can be updated on click. Configuration favoriting can be handled. A "New!" badge can be displayed based on the configuration\'s activeDate. Images and Icons can also be displayed.'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: Using ",Object(i.b)("inlineCode",{parentName:"p"},"<SpacesLink />")," depends on ",Object(i.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/overview"},Object(i.b)("inlineCode",{parentName:"a"},"react-query")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Spaces, {\n  SpacesLink\n} from '@availity/spaces';\n\n<Spaces\n  spaceIds={['73162546201441126239486200007187']}\n  payerIds={['PayerID']}\n  clientId=\"my-client-id\"\n>\n  <SpacesLink spaceId=\"73162546201441126239486200007187\" body appIcon />\n</Spaces>;\n")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("h3",{id:"spaceid-string"},Object(i.b)("inlineCode",{parentName:"h3"},"spaceId?: string")),Object(i.b)("p",null,"If no ",Object(i.b)("inlineCode",{parentName:"p"},"spaceId")," is provided, the first space in the ",Object(i.b)("inlineCode",{parentName:"p"},"spaces")," array is used. Note: This is only to be used when the Spaces provider should only ever contain a single space."),Object(i.b)("h3",{id:"space-sanitizedspace"},Object(i.b)("inlineCode",{parentName:"h3"},"space?: SanitizedSpace")),Object(i.b)("p",null,"Use to directly pass a space to the component rather than have it fetched from the spaces API. This component does not have to be a child of a SpacesProvider."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: If you are wanting to take advantage of the sso links you will additionally need to pass the ",Object(i.b)("inlineCode",{parentName:"p"},"clientId")," in.")),Object(i.b)("h3",{id:"clientid-string"},Object(i.b)("inlineCode",{parentName:"h3"},"clientId?: string")),Object(i.b)("p",null,"Required when space is not provided, or space is provided and space contains an sso link."),Object(i.b)("h3",{id:"tag-reactcomponenttype--string"},Object(i.b)("inlineCode",{parentName:"h3"},"tag?: React.ComponentType | string;")),Object(i.b)("p",null,"Tag to overwrite the root component rendered."),Object(i.b)("h3",{id:"bodytag-reactcomponenttype--string"},Object(i.b)("inlineCode",{parentName:"h3"},"bodyTag?: React.ComponentType | string;")),Object(i.b)("p",null,"Tag to overwrite the body component that renders the title, description and date values. It defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"CardBody")," or ",Object(i.b)("inlineCode",{parentName:"p"},"div")," depending on the value of the ",Object(i.b)("inlineCode",{parentName:"p"},"linkStyle")," prop."),Object(i.b)("h3",{id:"titletag-reactcomponenttype--string"},Object(i.b)("inlineCode",{parentName:"h3"},"titleTag: React.ComponentType | string")),Object(i.b)("p",null,"Tag to overwrite the title component. If ",Object(i.b)("inlineCode",{parentName:"p"},"linkStyle")," prop is set to ",Object(i.b)("inlineCode",{parentName:"p"},'"card"'),", defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"CardTitle"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"linkStyle")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},'"list"'),", defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"ListGroupItemHeading"),". Otherwise, defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"div"),"."),Object(i.b)("h3",{id:"texttag-reactcomponenttype--string"},Object(i.b)("inlineCode",{parentName:"h3"},"textTag: React.ComponentType | string")),Object(i.b)("p",null,"Tag to overwrite the text component. If ",Object(i.b)("inlineCode",{parentName:"p"},"linkStyle")," prop is set to ",Object(i.b)("inlineCode",{parentName:"p"},'"card"'),", defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"CardText"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"linkStyle")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},'"list"'),", defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"ListGroupItemText"),". Otherwise, defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"div"),"."),Object(i.b)("h3",{id:"linkstyle-string"},Object(i.b)("inlineCode",{parentName:"h3"},"linkStyle?: string")),Object(i.b)("p",null,"When passed in, provides predefined styles for the component. Possible values are ",Object(i.b)("inlineCode",{parentName:"p"},"card"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"list"),"."),Object(i.b)("h3",{id:"icon-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"icon?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders an ",Object(i.b)("inlineCode",{parentName:"p"},"@availity/icon")," next to the title if present on the space."),Object(i.b)("h3",{id:"description-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"description?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders the ",Object(i.b)("inlineCode",{parentName:"p"},"Spaces")," description beneath the title."),Object(i.b)("h3",{id:"appicon-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"appIcon?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders an app icon to the left of the title and formats depending on the space information given."),Object(i.b)("h3",{id:"favorite-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"favorite?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders the ",Object(i.b)("inlineCode",{parentName:"p"},"FavoriteHeart")," component to the left of the Component. Note, this does require you to have wrapped your component somewhere in the ",Object(i.b)("inlineCode",{parentName:"p"},"Favorites")," Provider. This also requires the peerDependency ",Object(i.b)("a",{parentName:"p",href:"https://react-query.tanstack.com/overview"},Object(i.b)("inlineCode",{parentName:"a"},"react-query")),"."),Object(i.b)("h3",{id:"body-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"body?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders the title, and allow for the description and date info to be added on. ",Object(i.b)("em",{parentName:"p"},"Default:")," ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("h3",{id:"showdate-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"showDate?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders the ",Object(i.b)("inlineCode",{parentName:"p"},"activeDate")," of the space."),Object(i.b)("h3",{id:"shownew-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"showNew?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),', renders a "New!" badge if the ',Object(i.b)("inlineCode",{parentName:"p"},"activeDate")," is less than 30 days old."),Object(i.b)("h3",{id:"size-string"},Object(i.b)("inlineCode",{parentName:"h3"},"size?: string")),Object(i.b)("p",null,"Adjusts the icon size of the ",Object(i.b)("inlineCode",{parentName:"p"},"AppIcon")," if enabled."),Object(i.b)("h3",{id:"stacked-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"stacked?: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", renders the component vertically."),Object(i.b)("h3",{id:"loading-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"loading?: boolean")),Object(i.b)("p",null,"Optionally pass in your own loading state for the component if you are managing the state yourself."),Object(i.b)("h3",{id:"maxdescriptionlength-number"},Object(i.b)("inlineCode",{parentName:"h3"},"maxDescriptionLength?: number")),Object(i.b)("p",null,"Allows the description length to be truncated."),Object(i.b)("h3",{id:"skeletonprops-object"},Object(i.b)("inlineCode",{parentName:"h3"},"skeletonProps?: object")),Object(i.b)("p",null,"Dimensions passed to loader to show while the image is loading."),Object(i.b)("h3",{id:"linkattributes-object"},Object(i.b)("inlineCode",{parentName:"h3"},"linkAttributes?: object")),Object(i.b)("p",null,"Additional attributes you may want to tack onto the ",Object(i.b)("inlineCode",{parentName:"p"},"native-form")," when submitting a SAML sso. i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"spaceId")," or ",Object(i.b)("inlineCode",{parentName:"p"},"sourceApplicationId")),Object(i.b)("h4",{id:"children-reactreactnode--spacescontext-spacescontext--reactnode"},Object(i.b)("inlineCode",{parentName:"h4"},"children?: React.ReactNode | (spacesContext: SpacesContext) => ReactNode")),Object(i.b)("p",null,"Children can be a react child or render prop."),Object(i.b)("h3",{id:"card-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"card: boolean")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", utilizes the reactstrap ",Object(i.b)("inlineCode",{parentName:"p"},"Card")," component for styling."),Object(i.b)("h3",{id:"role-string"},Object(i.b)("inlineCode",{parentName:"h3"},"role: string")),Object(i.b)("p",null,"Allows the role of the root component to be overwritten. If ",Object(i.b)("inlineCode",{parentName:"p"},"linkStyle")," prop is set to ",Object(i.b)("inlineCode",{parentName:"p"},'"list"'),', defaults to "listitem".'),Object(i.b)("h3",{id:"analytics-object"},Object(i.b)("inlineCode",{parentName:"h3"},"analytics: object")),Object(i.b)("p",null,"When Analytics props are passed inside the analytics props, they will be passed down to the click item. For more information on Analytics props see: ",Object(i.b)("a",{parentName:"p",href:"https://availity.github.io/sdk-js/resources/analytics#autotrack-logged-events"},"Autotrack Logged Events")))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(n),h=o,u=b["".concat(c,".").concat(h)]||b[h]||s[h]||i;return n?a.a.createElement(u,r(r({ref:t},p),{},{components:n})):a.a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);