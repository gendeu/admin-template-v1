_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var r=n("o0o1"),o=n.n(r);function a(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}var i=n("1OyB"),c=n("vuIU"),u=n("Ji7U"),s=n("md7G"),f=n("foSv"),p=n("q1tI"),l=n.n(p),d=n("i8i4"),h=n.n(d),m=n("8Bbg"),v=n.n(m),y=n("8Kt/"),b=n.n(y),g=n("nOHt"),x=n.n(g),w=n("rePB"),O=n("R/WZ"),_=n("wx14"),k=n("Ff2n"),P=(n("17x9"),n("iuhU")),j=n("H2TA"),C=n("NqtD");function M(t){var e,n,r;return e=t,n=0,r=1,t=(Math.min(Math.max(n,e),r)-n)/(r-n),t=(t-=1)*t*t+1}var S=p.forwardRef((function(t,e){var n,r=t.classes,o=t.className,a=t.color,i=void 0===a?"primary":a,c=t.disableShrink,u=void 0!==c&&c,s=t.size,f=void 0===s?40:s,l=t.style,d=t.thickness,h=void 0===d?3.6:d,m=t.value,v=void 0===m?0:m,y=t.variant,b=void 0===y?"indeterminate":y,g=Object(k.a)(t,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),x={},w={},O={};if("determinate"===b||"static"===b){var j=2*Math.PI*((44-h)/2);x.strokeDasharray=j.toFixed(3),O["aria-valuenow"]=Math.round(v),"static"===b?(x.strokeDashoffset="".concat(((100-v)/100*j).toFixed(3),"px"),w.transform="rotate(-90deg)"):(x.strokeDashoffset="".concat((n=(100-v)/100,n*n*j).toFixed(3),"px"),w.transform="rotate(".concat((270*M(v/70)).toFixed(3),"deg)"))}return(p.createElement("div",Object(_.a)({className:Object(P.a)(r.root,o,"inherit"!==i&&r["color".concat(Object(C.a)(i))],{indeterminate:r.indeterminate,static:r.static}[b]),style:Object(_.a)({width:f,height:f},w,l),ref:e,role:"progressbar"},O,g),p.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},p.createElement("circle",{className:Object(P.a)(r.circle,u&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[b]),style:x,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h}))))})),I=Object(j.a)((function(t){return{root:{display:"inline-block"},static:{transition:t.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:t.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(S),D=n("jfJP"),E=l.a.createElement;function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(w.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R=Object(O.a)({progress:{color:D.o,width:"6rem !important",height:"6rem !important"},wrapperDiv:{margin:"100px auto",padding:"0px",maxWidth:"360px",textAlign:"center",position:"relative",zIndex:"9999",top:"0"},iconWrapper:{display:"block"},title:N(N({},D.y),{},{color:"#FFFFFF"})});function T(t){var e=R();return E("div",null,E("div",{className:e.wrapperDiv},E("div",{className:e.iconWrapper},E(I,{className:e.progress})),E("h4",{className:e.title},"Loading page contents for: ",t.path)))}n("dEJJ");var H=l.a.createElement;function q(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}x.a.events.on("routeChangeStart",(function(t){console.log("Loading: ".concat(t)),document.body.classList.add("body-page-transition"),h.a.render(H(T,{path:t}),document.getElementById("page-transition"))})),x.a.events.on("routeChangeComplete",(function(){h.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")})),x.a.events.on("routeChangeError",(function(){h.a.unmountComponentAtNode(document.getElementById("page-transition")),document.body.classList.remove("body-page-transition")}));var B=function(t){Object(u.a)(n,t);var e=q(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=document.createComment("\n\n=========================================================\n* * NextJS Material Dashboard v1.0.0 based on Material Dashboard React v1.9.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard\n* Copyright 2020 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n");document.insertBefore(t,document.documentElement)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=e.layout||function(t){var e=t.children;return H(l.a.Fragment,null,e)};return H(l.a.Fragment,null,H(b.a,null,H("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),H("title",null,"NextJS Material Dashboard by Creative Tim")),H(r,null,H(e,n)))}}],[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,e.router,r=e.ctx,a={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:a=t.sent;case 6:return t.abrupt("return",{pageProps:a});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}()}]),n}(v.a)},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var l=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?a=!1:(p.add(f),r[s]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}h.rewind=function(){};var m=h;e.default=m},B5Ud:function(t,e,n){"use strict";var r=n("vJKn"),o=n("/GRZ"),a=n("i2R6"),i=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("qVT1");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var p=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=y,e.default=void 0;var l=p(n("q1tI")),d=n("g/15");function h(t){return m.apply(this,arguments)}function m(){return(m=s(r.mark((function t(e){var n,o,a;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=t.sent,t.abrupt("return",{pageProps:a});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps,e.NextWebVitalsMetric=d.NextWebVitalsMetric;var v=function(t){i(n,t);var e=f(n);function n(){return o(this,n),e.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return(l.default.createElement(n,Object.assign({},r,o||a?{}:{url:y(e)})))}}]),n}(l.default.Component);function y(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=v,v.origGetInitialProps=h,v.getInitialProps=h},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=n("qXWd"),c=n("48fX"),u=n("tCBg"),s=n("T0f4");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var p=n("q1tI"),l=!1,d=function(t){c(n,t);var e=f(n);function n(t){var a;return o(this,n),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,l&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);e.default=d},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("U8pU"),o=n("JX7q");function a(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!==typeof e?Object(o.a)(t):e}},o0o1:function(t,e,n){t.exports=n("ls82")},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),o=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}}},[[0,0,2,1,3,4]]]);