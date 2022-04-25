"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[7279],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=p(a),m=r,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6443:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={title:"classified_traces"},o=void 0,p={unversionedId:"flashbots-data/mev-inspect-py/data/classified_traces",id:"flashbots-data/mev-inspect-py/data/classified_traces",isDocsHomePage:!1,title:"classified_traces",description:"description",source:"@site/docs/flashbots-data/mev-inspect-py/data/classified_traces.md",sourceDirName:"flashbots-data/mev-inspect-py/data",slug:"/flashbots-data/mev-inspect-py/data/classified_traces",permalink:"/flashbots-data/mev-inspect-py/data/classified_traces",tags:[],version:"current",frontMatter:{title:"classified_traces"},sidebar:"docs",previous:{title:"exploring",permalink:"/flashbots-data/mev-inspect-py/exploring"},next:{title:"transfers",permalink:"/flashbots-data/mev-inspect-py/data/transfers"}},u=[{value:"description",id:"description",children:[]},{value:"fields",id:"fields",children:[]}],c={toc:u};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("p",null,"a ",(0,l.kt)("strong",{parentName:"p"},"classified trace")," represents a single trace"),(0,l.kt)("p",null,"classified traces optionally include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a classification for the call (ex: transfer, swap, liquidation)"),(0,l.kt)("li",{parentName:"ul"},"decoded function name and inputs")),(0,l.kt)("h3",{id:"fields"},"fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Nullable"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classified_at"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp without time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"not null"),(0,l.kt)("td",{parentName:"tr",align:null},"when this trace was added to the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block_number"),(0,l.kt)("td",{parentName:"tr",align:null},"numeric"),(0,l.kt)("td",{parentName:"tr",align:null},"not null"),(0,l.kt)("td",{parentName:"tr",align:null},"block number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_hash"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(66)"),(0,l.kt)("td",{parentName:"tr",align:null},"not null"),(0,l.kt)("td",{parentName:"tr",align:null},"transaction hash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_address"),(0,l.kt)("td",{parentName:"tr",align:null},"integer[]"),(0,l.kt)("td",{parentName:"tr",align:null},"not null"),(0,l.kt)("td",{parentName:"tr",align:null},"trace address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_type"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,l.kt)("td",{parentName:"tr",align:null},"not null"),(0,l.kt)("td",{parentName:"tr",align:null},"the type of call in the trace - one of ",(0,l.kt)("inlineCode",{parentName:"td"},"call"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"create"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"delegate_call"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"reward"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"suicide"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classification"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,l.kt)("td",{parentName:"tr",align:null},"not null"),(0,l.kt)("td",{parentName:"tr",align:null},"classification for the trace - one of ",(0,l.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"swap"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"burn"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"transfer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"liquidate"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the protocol associated with the trace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"abi_name"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(1024)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the ABI used to decode this trace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function_name"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(2048)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the name of the function called")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function_signature"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(2048)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the signature of the function called")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inputs"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"inputs of the function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from_address"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"from address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to_address"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"to address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gas"),(0,l.kt)("td",{parentName:"tr",align:null},"numeric"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"gas")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"numeric"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ETH value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gas_used"),(0,l.kt)("td",{parentName:"tr",align:null},"numeric"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"gas used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"character varying(256)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"error")))))}s.isMDXComponent=!0}}]);