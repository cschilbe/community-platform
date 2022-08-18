"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[660],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={id:"overview",title:"Overview"},c=void 0,p={unversionedId:"Frontend Development/overview",id:"Frontend Development/overview",title:"Overview",description:"Tech Stack",source:"@site/docs/Frontend Development/overview.md",sourceDirName:"Frontend Development",slug:"/Frontend Development/overview",permalink:"/community-platform/Frontend Development/overview",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Frontend Development/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"mainSidebar",previous:{title:"Contributing Designs",permalink:"/community-platform/Design/contributing-designs"},next:{title:"Modules",permalink:"/community-platform/Frontend Development/modules"}},s={},u=[{value:"Tech Stack",id:"tech-stack",level:2},{value:"Styling",id:"styling",level:2},{value:"Components",id:"components",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,i.kt)("p",null,"The platform is built in ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mobx.js.org/index.html"},"Mobx"),",",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/basic-types.html"},"Typescript")," and ",(0,i.kt)("a",{parentName:"p",href:"https://theme-ui.com"},"theme-ui")),(0,i.kt)("h2",{id:"styling"},"Styling"),(0,i.kt)("p",null,"For styling we use the popular ",(0,i.kt)("em",{parentName:"p"},"CSS in JS")," library ",(0,i.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"emotion"),".\nAlongside this we use ",(0,i.kt)("a",{parentName:"p",href:"https://theme-ui.com/"},"theme-ui")," to encourage a theme orientated constraint-based design approach."),(0,i.kt)("p",null,"If you never used it before don't worry, it makes a lot of sense and you'll just need a bit of further reading and to dive into our codebase. I recommend ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee"},"this article")," to understand more about the Design System philosophy behind it."),(0,i.kt)("p",null,"In the long term, we would like to allow easy theme swapping by simply changing the theme file for anyone."),(0,i.kt)("p",null,"All of the current themes can be within ",(0,i.kt)("inlineCode",{parentName:"p"},"src/themes/"),", currently there are 3 available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Precious Plastic"),(0,i.kt)("li",{parentName:"ul"},"Project Kamp"),(0,i.kt)("li",{parentName:"ul"},"Fixing Fashion")),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"You can find all the basic stateless components in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/packages/components"),", there are more information available within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/tree/master/packages/components"},"README for this package")))}d.isMDXComponent=!0}}]);