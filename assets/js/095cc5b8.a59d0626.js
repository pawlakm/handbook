"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"videosipgw",title:"Configuring a video SIP gateway",sidebar_label:"Video SIP gateway"},p=void 0,l={unversionedId:"devops-guide/videosipgw",id:"devops-guide/videosipgw",title:"Configuring a video SIP gateway",description:"This document describes how you can configure jitsi-meet to use sipgw jibri and enable rooms in 'Add people dialog'",source:"@site/docs/devops-guide/video-sipgw.md",sourceDirName:"devops-guide",slug:"/devops-guide/videosipgw",permalink:"/handbook/docs/devops-guide/videosipgw",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/video-sipgw.md",tags:[],version:"current",lastUpdatedAt:1651504568,formattedLastUpdatedAt:"5/2/2022",frontMatter:{id:"videosipgw",title:"Configuring a video SIP gateway",sidebar_label:"Video SIP gateway"},sidebar:"docs",previous:{title:"Speaker Stats",permalink:"/handbook/docs/devops-guide/speakerstats"},next:{title:"Cloud API",permalink:"/handbook/docs/devops-guide/cloud-api"}},d={},c=[{value:"People search service",id:"people-search-service",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how you can configure jitsi-meet to use sipgw jibri and enable rooms in 'Add people dialog'\nYou will need a working deployment of jibri configured to use a regular sip video device, for more info check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jibri/blob/master/README.md"},"jibri documentation"),"."),(0,i.kt)("p",null,"This feature is available for non-guests of the system, so this relies on setting in config.js ",(0,i.kt)("inlineCode",{parentName:"p"},"enableUserRolesBasedOnToken: true")," and providing a jwt token when accessing the conference."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jicofo configuration:\nedit /etc/jitsi/jicofo/sip-communicator.properties (or similar), set the appropriate MUC to look for the Jibri Controllers. This should be the same MUC as is referenced in jibri's config.json file. Restart Jicofo after setting this property.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  org.jitsi.jicofo.jibri.SIP_BREWERY=TheSipBrewery@conference.yourdomain.com\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jitsi Meet configuration:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"config.js: add ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  enableUserRolesBasedOnToken: true,\n  peopleSearchQueryTypes: ['conferenceRooms'],\n  peopleSearchUrl: 'https://api.yourdomain.com/testpath/searchpeople',\n")),(0,i.kt)("p",null,"The combination of the above settings and providing a jwt token will enable a button under invite option which will show the dialog 'Add people'."),(0,i.kt)("h2",{id:"people-search-service"},"People search service"),(0,i.kt)("p",null,"When searching in the dialog, a request for results is made to the ",(0,i.kt)("inlineCode",{parentName:"p"},"peopleSearchUrl")," service."),(0,i.kt)("p",null,"The request is in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.yourdomain.com/testpath/searchpeople?query=testroomname&queryTypes=[%22conferenceRooms%22]&jwt=somejwt\n")),(0,i.kt)("p",null,"The parameters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"query - The text entered by the user."),(0,i.kt)("li",{parentName:"ul"},"queryTypes - What type of results we want people, rooms, conferenceRooms. This is the value from config.js ",(0,i.kt)("inlineCode",{parentName:"li"},"peopleSearchQueryTypes")),(0,i.kt)("li",{parentName:"ul"},"jwt - The token used by the user to access the conference.")),(0,i.kt)("p",null,"The response of the service is a json in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n   {\n       "id": "address@sip.domain.com",\n       "name": "Some room name",\n       "type": "videosipgw"\n   },\n  {\n      "id": "address2@sip.domain.com",\n      "name": "Some room name2",\n      "type": "videosipgw"\n  }\n]\n')),(0,i.kt)("p",null,"Type should be ",(0,i.kt)("inlineCode",{parentName:"p"},"videosipgw"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is the name shown to the user and ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is the sip address to be called by the sipgw jibri."))}m.isMDXComponent=!0}}]);