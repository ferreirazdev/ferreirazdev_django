function N0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lr={},$0={get exports(){return Lr},set exports(e){Lr=e}},Eo={},V={},R0={get exports(){return V},set exports(e){V=e}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),T0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),L0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),lu=Symbol.iterator;function B0(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var Dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fc=Object.assign,Uc={};function lr(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Dc}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=lr.prototype;function Ka(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Dc}var Za=Ka.prototype=new Vc;Za.constructor=Ka;Fc(Za,lr.prototype);Za.isPureReactComponent=!0;var au=Array.isArray,Bc=Object.prototype.hasOwnProperty,Ja={current:null},Hc={key:!0,ref:!0,__self:!0,__source:!0};function Wc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Bc.call(t,r)&&!Hc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ii,type:e,key:o,ref:l,props:i,_owner:Ja.current}}function H0(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function W0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var su=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?W0(""+e.key):t.toString(36)}function Ii(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ii:case T0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+dl(l,0):r,au(i)?(n="",e!=null&&(n=e.replace(su,"$&/")+"/"),Ii(i,t,n,"",function(c){return c})):i!=null&&(qa(i)&&(i=H0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(su,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",au(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+dl(o,a);l+=Ii(o,t,n,s,i)}else if(s=B0(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+dl(o,a++),l+=Ii(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function di(e,t,n){if(e==null)return e;var r=[],i=0;return Ii(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ai={transition:null},Q0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Ja};B.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=lr;B.Fragment=I0;B.Profiler=L0;B.PureComponent=Ka;B.StrictMode=A0;B.Suspense=F0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ja.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Bc.call(t,s)&&!Hc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ii,type:e.type,key:i,ref:o,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M0,_context:e},e.Consumer=e};B.createElement=Wc;B.createFactory=function(e){var t=Wc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:D0,render:e}};B.isValidElement=qa;B.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:Y0}};B.memo=function(e,t){return{$$typeof:U0,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return Be.current.useCallback(e,t)};B.useContext=function(e){return Be.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};B.useEffect=function(e,t){return Be.current.useEffect(e,t)};B.useId=function(){return Be.current.useId()};B.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Be.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};B.useRef=function(e){return Be.current.useRef(e)};B.useState=function(e){return Be.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Be.current.useTransition()};B.version="18.2.0";(function(e){e.exports=B})(R0);const nt=O0(V),uu=N0({__proto__:null,default:nt},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=V,G0=Symbol.for("react.element"),K0=Symbol.for("react.fragment"),Z0=Object.prototype.hasOwnProperty,J0=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q0={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Z0.call(t,r)&&!q0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:G0,type:e,key:o,ref:l,props:i,_owner:J0.current}}Eo.Fragment=K0;Eo.jsx=Yc;Eo.jsxs=Yc;(function(e){e.exports=Eo})($0);const ba=Lr.Fragment,E=Lr.jsx,ie=Lr.jsxs;var Hl={},Wl={},b0={get exports(){return Wl},set exports(e){Wl=e}},lt={},Yl={},ep={get exports(){return Yl},set exports(e){Yl=e}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var M=N.length;N.push(L);e:for(;0<M;){var te=M-1>>>1,$=N[te];if(0<i($,L))N[te]=L,N[M]=$,M=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],M=N.pop();if(M!==L){N[0]=M;e:for(var te=0,$=N.length,R=$>>>1;te<R;){var I=2*(te+1)-1,j=N[I],v=I+1,H=N[v];if(0>i(j,M))v<$&&0>i(H,j)?(N[te]=H,N[v]=M,te=v):(N[te]=j,N[I]=M,te=I);else if(v<$&&0>i(H,M))N[te]=H,N[v]=M,te=v;else break e}}return L}function i(N,L){var M=N.sortIndex-L.sortIndex;return M!==0?M:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],m=1,p=null,h=3,S=!1,y=!1,g=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(N){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=N)r(c),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(c)}}function w(N){if(g=!1,d(N),!y)if(n(s)!==null)y=!0,It(x);else{var L=n(c);L!==null&&Fe(w,L.startTime-N)}}function x(N,L){y=!1,g&&(g=!1,f(T),T=-1),S=!0;var M=h;try{for(d(L),p=n(s);p!==null&&(!(p.expirationTime>L)||N&&!Se());){var te=p.callback;if(typeof te=="function"){p.callback=null,h=p.priorityLevel;var $=te(p.expirationTime<=L);L=e.unstable_now(),typeof $=="function"?p.callback=$:p===n(s)&&r(s),d(L)}else r(s);p=n(s)}if(p!==null)var R=!0;else{var I=n(c);I!==null&&Fe(w,I.startTime-L),R=!1}return R}finally{p=null,h=M,S=!1}}var P=!1,C=null,T=-1,Y=5,D=-1;function Se(){return!(e.unstable_now()-D<Y)}function ve(){if(C!==null){var N=e.unstable_now();D=N;var L=!0;try{L=C(!0,N)}finally{L?Ee():(P=!1,C=null)}}else P=!1}var Ee;if(typeof u=="function")Ee=function(){u(ve)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Te=be.port2;be.port1.onmessage=ve,Ee=function(){Te.postMessage(null)}}else Ee=function(){z(ve,0)};function It(N){C=N,P||(P=!0,Ee())}function Fe(N,L){T=z(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||S||(y=!0,It(x))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return N()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=h;h=N;try{return L()}finally{h=M}},e.unstable_scheduleCallback=function(N,L,M){var te=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?te+M:te):M=te,N){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=M+$,N={id:m++,callback:L,priorityLevel:N,startTime:M,expirationTime:$,sortIndex:-1},M>te?(N.sortIndex=M,t(c,N),n(s)===null&&N===n(c)&&(g?(f(T),T=-1):g=!0,Fe(w,M-te))):(N.sortIndex=$,t(s,N),y||S||(y=!0,It(x))),N},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(N){var L=h;return function(){var M=h;h=L;try{return N.apply(this,arguments)}finally{h=M}}}})(Qc);(function(e){e.exports=Qc})(ep);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=V,ot=Yl;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gc=new Set,Mr={};function Pn(e,t){Zn(e,t),Zn(e+"Capture",t)}function Zn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},fu={};function np(e){return Ql.call(fu,e)?!0:Ql.call(cu,e)?!1:tp.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function rp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ip(e,t,n,r){if(t===null||typeof t>"u"||rp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(es,ts);Re[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(es,ts);Re[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(es,ts);Re[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ip(t,n,i,r)&&(n=null),r||i===null?np(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),is=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),os=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Jc=Symbol.for("react.offscreen"),du=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,pl;function xr(e){if(pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pl=t&&t[1]||""}return`
`+pl+e}var ml=!1;function hl(e,t){if(!e||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function op(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=hl(e.type,!1),e;case 11:return e=hl(e.type.render,!1),e;case 1:return e=hl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case $n:return"Portal";case Xl:return"Profiler";case rs:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zc:return(e.displayName||"Context")+".Consumer";case Kc:return(e._context.displayName||"Context")+".Provider";case is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case os:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(e){var t=qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=ap(e))}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ef(e,t){t=t.checked,t!=null&&ns(e,"checked",t,!1)}function ql(e,t){ef(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function Hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(kr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function tf(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function lf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var up=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(e,t){if(t){if(up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,Wn=null,Yn=null;function vu(e){if(e=ai(e)){if(typeof oa!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Oo(t),oa(e.stateNode,e.type,t))}}function af(e){Wn?Yn?Yn.push(e):Yn=[e]:Wn=e}function sf(){if(Wn){var e=Wn,t=Yn;if(Yn=Wn=null,vu(e),t)for(e=0;e<t.length;e++)vu(t[e])}}function uf(e,t){return e(t)}function cf(){}var gl=!1;function ff(e,t,n){if(gl)return e(t,n);gl=!0;try{return uf(e,t,n)}finally{gl=!1,(Wn!==null||Yn!==null)&&(cf(),sf())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var la=!1;if(Ut)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){la=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{la=!1}function cp(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var zr=!1,Zi=null,Ji=!1,aa=null,fp={onError:function(e){zr=!0,Zi=e}};function dp(e,t,n,r,i,o,l,a,s){zr=!1,Zi=null,cp.apply(fp,arguments)}function pp(e,t,n,r,i,o,l,a,s){if(dp.apply(this,arguments),zr){if(zr){var c=Zi;zr=!1,Zi=null}else throw Error(k(198));Ji||(Ji=!0,aa=c)}}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function df(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(Nn(e)!==e)throw Error(k(188))}function mp(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yu(i),e;if(o===r)return yu(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function pf(e){return e=mp(e),e!==null?mf(e):null}function mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mf(e);if(t!==null)return t;e=e.sibling}return null}var hf=ot.unstable_scheduleCallback,wu=ot.unstable_cancelCallback,hp=ot.unstable_shouldYield,gp=ot.unstable_requestPaint,pe=ot.unstable_now,vp=ot.unstable_getCurrentPriorityLevel,as=ot.unstable_ImmediatePriority,gf=ot.unstable_UserBlockingPriority,qi=ot.unstable_NormalPriority,yp=ot.unstable_LowPriority,vf=ot.unstable_IdlePriority,_o=null,$t=null;function wp(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:kp,Sp=Math.log,xp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(Sp(e)/xp|0)|0}var gi=64,vi=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Cr(a):(o&=l,o!==0&&(r=Cr(o)))}else l=n&~i,l!==0?r=Cr(l):o!==0&&(r=Cr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function Cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ep(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-kt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Cp(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yf(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function _p(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sf,us,xf,kf,Cf,ua=!1,yi=[],bt=null,en=null,tn=null,Fr=new Map,Ur=new Map,Kt=[],zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(t.pointerId)}}function mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ai(t),t!==null&&us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Pp(e,t,n,r,i){switch(t){case"focusin":return bt=mr(bt,e,t,n,r,i),!0;case"dragenter":return en=mr(en,e,t,n,r,i),!0;case"mouseover":return tn=mr(tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fr.set(o,mr(Fr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ur.set(o,mr(Ur.get(o)||null,e,t,n,r,i)),!0}return!1}function Ef(e){var t=vn(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=df(n),t!==null){e.blockedOn=t,Cf(e.priority,function(){xf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ia=r,n.target.dispatchEvent(r),ia=null}else return t=ai(n),t!==null&&us(t),e.blockedOn=n,!1;t.shift()}return!0}function xu(e,t,n){Li(e)&&n.delete(t)}function Np(){ua=!1,bt!==null&&Li(bt)&&(bt=null),en!==null&&Li(en)&&(en=null),tn!==null&&Li(tn)&&(tn=null),Fr.forEach(xu),Ur.forEach(xu)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,ua||(ua=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Np)))}function Vr(e){function t(i){return hr(i,e)}if(0<yi.length){hr(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&hr(bt,e),en!==null&&hr(en,e),tn!==null&&hr(tn,e),Fr.forEach(t),Ur.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Ef(n),n.blockedOn===null&&Kt.shift()}var Qn=Wt.ReactCurrentBatchConfig,eo=!0;function Op(e,t,n,r){var i=q,o=Qn.transition;Qn.transition=null;try{q=1,cs(e,t,n,r)}finally{q=i,Qn.transition=o}}function $p(e,t,n,r){var i=q,o=Qn.transition;Qn.transition=null;try{q=4,cs(e,t,n,r)}finally{q=i,Qn.transition=o}}function cs(e,t,n,r){if(eo){var i=ca(e,t,n,r);if(i===null)Pl(e,t,r,to,n),Su(e,r);else if(Pp(i,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<zp.indexOf(e)){for(;i!==null;){var o=ai(i);if(o!==null&&Sf(o),o=ca(e,t,n,r),o===null&&Pl(e,t,r,to,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pl(e,t,r,null,n)}}var to=null;function ca(e,t,n,r){if(to=null,e=ls(r),e=vn(e),e!==null)if(t=Nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=df(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function _f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case as:return 1;case gf:return 4;case qi:case yp:return 16;case vf:return 536870912;default:return 16}default:return 16}}var Jt=null,fs=null,Mi=null;function zf(){if(Mi)return Mi;var e,t=fs,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function ku(){return!1}function at(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wi:ku,this.isPropagationStopped=ku,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=at(ar),li=ue({},ar,{view:0,detail:0}),Rp=at(li),yl,wl,gr,zo=ue({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(yl=e.screenX-gr.screenX,wl=e.screenY-gr.screenY):wl=yl=0,gr=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),Cu=at(zo),Tp=ue({},zo,{dataTransfer:0}),Ip=at(Tp),Ap=ue({},li,{relatedTarget:0}),Sl=at(Ap),Lp=ue({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Mp=at(Lp),jp=ue({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=at(jp),Fp=ue({},ar,{data:0}),Eu=at(Fp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bp[e])?!!t[e]:!1}function ps(){return Hp}var Wp=ue({},li,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=at(Wp),Qp=ue({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=at(Qp),Xp=ue({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Gp=at(Xp),Kp=ue({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=at(Kp),Jp=ue({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=at(Jp),bp=[9,13,27,32],ms=Ut&&"CompositionEvent"in window,Pr=null;Ut&&"documentMode"in document&&(Pr=document.documentMode);var e1=Ut&&"TextEvent"in window&&!Pr,Pf=Ut&&(!ms||Pr&&8<Pr&&11>=Pr),zu=String.fromCharCode(32),Pu=!1;function Nf(e,t){switch(e){case"keyup":return bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tn=!1;function t1(e,t){switch(e){case"compositionend":return Of(t);case"keypress":return t.which!==32?null:(Pu=!0,zu);case"textInput":return e=t.data,e===zu&&Pu?null:e;default:return null}}function n1(e,t){if(Tn)return e==="compositionend"||!ms&&Nf(e,t)?(e=zf(),Mi=fs=Jt=null,Tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pf&&t.locale!=="ko"?null:t.data;default:return null}}var r1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r1[e.type]:t==="textarea"}function $f(e,t,n,r){af(r),t=no(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Br=null;function i1(e){Vf(e,0)}function Po(e){var t=Ln(e);if(bc(t))return e}function o1(e,t){if(e==="change")return t}var Rf=!1;if(Ut){var xl;if(Ut){var kl="oninput"in document;if(!kl){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),kl=typeof Ou.oninput=="function"}xl=kl}else xl=!1;Rf=xl&&(!document.documentMode||9<document.documentMode)}function $u(){Nr&&(Nr.detachEvent("onpropertychange",Tf),Br=Nr=null)}function Tf(e){if(e.propertyName==="value"&&Po(Br)){var t=[];$f(t,Br,e,ls(e)),ff(i1,t)}}function l1(e,t,n){e==="focusin"?($u(),Nr=t,Br=n,Nr.attachEvent("onpropertychange",Tf)):e==="focusout"&&$u()}function a1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(Br)}function s1(e,t){if(e==="click")return Po(t)}function u1(e,t){if(e==="input"||e==="change")return Po(t)}function c1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:c1;function Hr(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ql.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=Ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ru(n)}}function If(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?If(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f1(e){var t=Af(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&If(n.ownerDocument.documentElement,n)){if(r!==null&&hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Tu(n,o);var l=Tu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var d1=Ut&&"documentMode"in document&&11>=document.documentMode,In=null,fa=null,Or=null,da=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;da||In==null||In!==Ki(r)||(r=In,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Or&&Hr(Or,r)||(Or=r,r=no(fa,"onSelect"),0<r.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var An={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},Cl={},Lf={};Ut&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function No(e){if(Cl[e])return Cl[e];if(!An[e])return e;var t=An[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lf)return Cl[e]=t[n];return e}var Mf=No("animationend"),jf=No("animationiteration"),Df=No("animationstart"),Ff=No("transitionend"),Uf=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Uf.set(e,t),Pn(t,[e])}for(var El=0;El<Au.length;El++){var _l=Au[El],p1=_l.toLowerCase(),m1=_l[0].toUpperCase()+_l.slice(1);dn(p1,"on"+m1)}dn(Mf,"onAnimationEnd");dn(jf,"onAnimationIteration");dn(Df,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Ff,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pp(r,t,void 0,e),e.currentTarget=null}function Vf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Lu(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Lu(i,a,c),o=s}}}if(Ji)throw e=aa,Ji=!1,aa=null,e}function re(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(Bf(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),Bf(n,e,r,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[xi]){e[xi]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,zl("selectionchange",!1,t))}}function Bf(e,t,n,r){switch(_f(t)){case 1:var i=Op;break;case 4:i=$p;break;default:i=cs}n=i.bind(null,t,n,e),i=void 0,!la||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Pl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=vn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ff(function(){var c=o,m=ls(n),p=[];e:{var h=Uf.get(e);if(h!==void 0){var S=ds,y=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":S=Yp;break;case"focusin":y="focus",S=Sl;break;case"focusout":y="blur",S=Sl;break;case"beforeblur":case"afterblur":S=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Gp;break;case Mf:case jf:case Df:S=Mp;break;case Ff:S=Zp;break;case"scroll":S=Rp;break;case"wheel":S=qp;break;case"copy":case"cut":case"paste":S=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=_u}var g=(t&4)!==0,z=!g&&e==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var u=c,d;u!==null;){d=u;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,f!==null&&(w=Dr(u,f),w!=null&&g.push(Yr(u,w,d)))),z)break;u=u.return}0<g.length&&(h=new S(h,y,null,n,m),p.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==ia&&(y=n.relatedTarget||n.fromElement)&&(vn(y)||y[Vt]))break e;if((S||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,S?(y=n.relatedTarget||n.toElement,S=c,y=y?vn(y):null,y!==null&&(z=Nn(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(S=null,y=c),S!==y)){if(g=Cu,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=_u,w="onPointerLeave",f="onPointerEnter",u="pointer"),z=S==null?h:Ln(S),d=y==null?h:Ln(y),h=new g(w,u+"leave",S,n,m),h.target=z,h.relatedTarget=d,w=null,vn(m)===c&&(g=new g(f,u+"enter",y,n,m),g.target=d,g.relatedTarget=z,w=g),z=w,S&&y)t:{for(g=S,f=y,u=0,d=g;d;d=On(d))u++;for(d=0,w=f;w;w=On(w))d++;for(;0<u-d;)g=On(g),u--;for(;0<d-u;)f=On(f),d--;for(;u--;){if(g===f||f!==null&&g===f.alternate)break t;g=On(g),f=On(f)}g=null}else g=null;S!==null&&Mu(p,h,S,g,!1),y!==null&&z!==null&&Mu(p,z,y,g,!0)}}e:{if(h=c?Ln(c):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var x=o1;else if(Nu(h))if(Rf)x=u1;else{x=a1;var P=l1}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=s1);if(x&&(x=x(e,c))){$f(p,x,n,m);break e}P&&P(e,h,c),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&bl(h,"number",h.value)}switch(P=c?Ln(c):window,e){case"focusin":(Nu(P)||P.contentEditable==="true")&&(In=P,fa=c,Or=null);break;case"focusout":Or=fa=In=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,Iu(p,n,m);break;case"selectionchange":if(d1)break;case"keydown":case"keyup":Iu(p,n,m)}var C;if(ms)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Tn?Nf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Pf&&n.locale!=="ko"&&(Tn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Tn&&(C=zf()):(Jt=m,fs="value"in Jt?Jt.value:Jt.textContent,Tn=!0)),P=no(c,T),0<P.length&&(T=new Eu(T,e,null,n,m),p.push({event:T,listeners:P}),C?T.data=C:(C=Of(n),C!==null&&(T.data=C)))),(C=e1?t1(e,n):n1(e,n))&&(c=no(c,"onBeforeInput"),0<c.length&&(m=new Eu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=C))}Vf(p,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function no(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dr(e,n),o!=null&&r.unshift(Yr(e,o,i)),o=Dr(e,t),o!=null&&r.push(Yr(e,o,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=Dr(n,o),s!=null&&l.unshift(Yr(n,s,a))):i||(s=Dr(n,o),s!=null&&l.push(Yr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var g1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(g1,`
`).replace(v1,"")}function ki(e,t,n){if(t=ju(t),ju(e)!==t&&n)throw Error(k(425))}function ro(){}var pa=null,ma=null;function ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,y1=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(S1)}:ga;function S1(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vr(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+sr,Qr="__reactProps$"+sr,Vt="__reactContainer$"+sr,va="__reactEvents$"+sr,x1="__reactListeners$"+sr,k1="__reactHandles$"+sr;function vn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[Ot])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function ai(e){return e=e[Ot]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Oo(e){return e[Qr]||null}var ya=[],Mn=-1;function pn(e){return{current:e}}function oe(e){0>Mn||(e.current=ya[Mn],ya[Mn]=null,Mn--)}function ne(e,t){Mn++,ya[Mn]=e.current,e.current=t}var fn={},De=pn(fn),Ge=pn(!1),kn=fn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function io(){oe(Ge),oe(De)}function Uu(e,t,n){if(De.current!==fn)throw Error(k(168));ne(De,t),ne(Ge,n)}function Hf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,lp(e)||"Unknown",i));return ue({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,kn=De.current,ne(De,e),ne(Ge,Ge.current),!0}function Vu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Hf(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,oe(Ge),oe(De),ne(De,e)):oe(Ge),ne(Ge,n)}var Lt=null,$o=!1,Ol=!1;function Wf(e){Lt===null?Lt=[e]:Lt.push(e)}function C1(e){$o=!0,Wf(e)}function mn(){if(!Ol&&Lt!==null){Ol=!0;var e=0,t=q;try{var n=Lt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,$o=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),hf(as,mn),i}finally{q=t,Ol=!1}}return null}var jn=[],Dn=0,lo=null,ao=0,ut=[],ct=0,Cn=null,Mt=1,jt="";function hn(e,t){jn[Dn++]=ao,jn[Dn++]=lo,lo=e,ao=t}function Yf(e,t,n){ut[ct++]=Mt,ut[ct++]=jt,ut[ct++]=Cn,Cn=e;var r=Mt;e=jt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var o=32-kt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Mt=1<<32-kt(t)+i|n<<i|r,jt=o+e}else Mt=1<<o|n<<i|r,jt=e}function gs(e){e.return!==null&&(hn(e,1),Yf(e,1,0))}function vs(e){for(;e===lo;)lo=jn[--Dn],jn[Dn]=null,ao=jn[--Dn],jn[Dn]=null;for(;e===Cn;)Cn=ut[--ct],ut[ct]=null,jt=ut[--ct],ut[ct]=null,Mt=ut[--ct],ut[ct]=null}var rt=null,tt=null,le=!1,St=null;function Qf(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,tt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Mt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,tt=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sa(e){if(le){var t=tt;if(t){var n=t;if(!Bu(e,t)){if(wa(e))throw Error(k(418));t=nn(n.nextSibling);var r=rt;t&&Bu(e,t)?Qf(r,n):(e.flags=e.flags&-4097|2,le=!1,rt=e)}}else{if(wa(e))throw Error(k(418));e.flags=e.flags&-4097|2,le=!1,rt=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function Ci(e){if(e!==rt)return!1;if(!le)return Hu(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ha(e.type,e.memoizedProps)),t&&(t=tt)){if(wa(e))throw Xf(),Error(k(418));for(;t;)Qf(e,t),t=nn(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=rt?nn(e.stateNode.nextSibling):null;return!0}function Xf(){for(var e=tt;e;)e=nn(e.nextSibling)}function qn(){tt=rt=null,le=!1}function ys(e){St===null?St=[e]:St.push(e)}var E1=Wt.ReactCurrentBatchConfig;function yt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var so=pn(null),uo=null,Fn=null,ws=null;function Ss(){ws=Fn=uo=null}function xs(e){var t=so.current;oe(so),e._currentValue=t}function xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){uo=e,ws=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(uo===null)throw Error(k(308));Fn=e,uo.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var yn=null;function ks(e){yn===null?yn=[e]:yn.push(e)}function Gf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ks(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,ks(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Wu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function co(e,t,n,r){var i=e.updateQueue;Gt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;l=0,m=c=s=null,a=o;do{var h=a.lane,S=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(h=t,S=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){p=y.call(S,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,h=typeof y=="function"?y.call(S,p,h):y,h==null)break e;p=ue({},p,h);break e;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else S={eventTime:S,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=S,s=p):m=m.next=S,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(m===null&&(s=p),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_n|=l,e.lanes=l,e.memoizedState=p}}function Yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Zf=new Xc.Component().refs;function ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=ln(e),o=Ft(r,i);o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(Ct(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=ln(e),o=Ft(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(Ct(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=ln(e),i=Ft(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(Ct(t,e,r,n),Di(t,e,r))}};function Qu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(i,o):!0}function Jf(e,t,n){var r=!1,i=fn,o=t.contextType;return typeof o=="object"&&o!==null?o=pt(o):(i=Ke(t)?kn:De.current,r=t.contextTypes,o=(r=r!=null)?Jn(e,i):fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function Ca(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Zf,Cs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=pt(o):(o=Ke(t)?kn:De.current,i.context=Jn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ka(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Zf&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function qf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=an(f,u),f.index=0,f.sibling=null,f}function o(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,w){return u===null||u.tag!==6?(u=Ml(d,f.mode,w),u.return=f,u):(u=i(u,d),u.return=f,u)}function s(f,u,d,w){var x=d.type;return x===Rn?m(f,u,d.props.children,w,d.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Xt&&Gu(x)===u.type)?(w=i(u,d.props),w.ref=vr(f,u,d),w.return=f,w):(w=Wi(d.type,d.key,d.props,null,f.mode,w),w.ref=vr(f,u,d),w.return=f,w)}function c(f,u,d,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=jl(d,f.mode,w),u.return=f,u):(u=i(u,d.children||[]),u.return=f,u)}function m(f,u,d,w,x){return u===null||u.tag!==7?(u=xn(d,f.mode,w,x),u.return=f,u):(u=i(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ml(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case pi:return d=Wi(u.type,u.key,u.props,null,f.mode,d),d.ref=vr(f,null,u),d.return=f,d;case $n:return u=jl(u,f.mode,d),u.return=f,u;case Xt:var w=u._init;return p(f,w(u._payload),d)}if(kr(u)||dr(u))return u=xn(u,f.mode,d,null),u.return=f,u;Ei(f,u)}return null}function h(f,u,d,w){var x=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:a(f,u,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:return d.key===x?s(f,u,d,w):null;case $n:return d.key===x?c(f,u,d,w):null;case Xt:return x=d._init,h(f,u,x(d._payload),w)}if(kr(d)||dr(d))return x!==null?null:m(f,u,d,w,null);Ei(f,d)}return null}function S(f,u,d,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(d)||null,a(u,f,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pi:return f=f.get(w.key===null?d:w.key)||null,s(u,f,w,x);case $n:return f=f.get(w.key===null?d:w.key)||null,c(u,f,w,x);case Xt:var P=w._init;return S(f,u,d,P(w._payload),x)}if(kr(w)||dr(w))return f=f.get(d)||null,m(u,f,w,x,null);Ei(u,w)}return null}function y(f,u,d,w){for(var x=null,P=null,C=u,T=u=0,Y=null;C!==null&&T<d.length;T++){C.index>T?(Y=C,C=null):Y=C.sibling;var D=h(f,C,d[T],w);if(D===null){C===null&&(C=Y);break}e&&C&&D.alternate===null&&t(f,C),u=o(D,u,T),P===null?x=D:P.sibling=D,P=D,C=Y}if(T===d.length)return n(f,C),le&&hn(f,T),x;if(C===null){for(;T<d.length;T++)C=p(f,d[T],w),C!==null&&(u=o(C,u,T),P===null?x=C:P.sibling=C,P=C);return le&&hn(f,T),x}for(C=r(f,C);T<d.length;T++)Y=S(C,f,T,d[T],w),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?T:Y.key),u=o(Y,u,T),P===null?x=Y:P.sibling=Y,P=Y);return e&&C.forEach(function(Se){return t(f,Se)}),le&&hn(f,T),x}function g(f,u,d,w){var x=dr(d);if(typeof x!="function")throw Error(k(150));if(d=x.call(d),d==null)throw Error(k(151));for(var P=x=null,C=u,T=u=0,Y=null,D=d.next();C!==null&&!D.done;T++,D=d.next()){C.index>T?(Y=C,C=null):Y=C.sibling;var Se=h(f,C,D.value,w);if(Se===null){C===null&&(C=Y);break}e&&C&&Se.alternate===null&&t(f,C),u=o(Se,u,T),P===null?x=Se:P.sibling=Se,P=Se,C=Y}if(D.done)return n(f,C),le&&hn(f,T),x;if(C===null){for(;!D.done;T++,D=d.next())D=p(f,D.value,w),D!==null&&(u=o(D,u,T),P===null?x=D:P.sibling=D,P=D);return le&&hn(f,T),x}for(C=r(f,C);!D.done;T++,D=d.next())D=S(C,f,T,D.value,w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?T:D.key),u=o(D,u,T),P===null?x=D:P.sibling=D,P=D);return e&&C.forEach(function(ve){return t(f,ve)}),le&&hn(f,T),x}function z(f,u,d,w){if(typeof d=="object"&&d!==null&&d.type===Rn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:e:{for(var x=d.key,P=u;P!==null;){if(P.key===x){if(x=d.type,x===Rn){if(P.tag===7){n(f,P.sibling),u=i(P,d.props.children),u.return=f,f=u;break e}}else if(P.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Xt&&Gu(x)===P.type){n(f,P.sibling),u=i(P,d.props),u.ref=vr(f,P,d),u.return=f,f=u;break e}n(f,P);break}else t(f,P);P=P.sibling}d.type===Rn?(u=xn(d.props.children,f.mode,w,d.key),u.return=f,f=u):(w=Wi(d.type,d.key,d.props,null,f.mode,w),w.ref=vr(f,u,d),w.return=f,f=w)}return l(f);case $n:e:{for(P=d.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=i(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=jl(d,f.mode,w),u.return=f,f=u}return l(f);case Xt:return P=d._init,z(f,u,P(d._payload),w)}if(kr(d))return y(f,u,d,w);if(dr(d))return g(f,u,d,w);Ei(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,d),u.return=f,f=u):(n(f,u),u=Ml(d,f.mode,w),u.return=f,f=u),l(f)):n(f,u)}return z}var bn=qf(!0),bf=qf(!1),si={},Rt=pn(si),Xr=pn(si),Gr=pn(si);function wn(e){if(e===si)throw Error(k(174));return e}function Es(e,t){switch(ne(Gr,t),ne(Xr,e),ne(Rt,si),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ta(t,e)}oe(Rt),ne(Rt,t)}function er(){oe(Rt),oe(Xr),oe(Gr)}function ed(e){wn(Gr.current);var t=wn(Rt.current),n=ta(t,e.type);t!==n&&(ne(Xr,e),ne(Rt,n))}function _s(e){Xr.current===e&&(oe(Rt),oe(Xr))}var ae=pn(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function zs(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Fi=Wt.ReactCurrentDispatcher,Rl=Wt.ReactCurrentBatchConfig,En=0,se=null,ye=null,xe=null,po=!1,$r=!1,Kr=0,_1=0;function Ae(){throw Error(k(321))}function Ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Ns(e,t,n,r,i,o){if(En=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?O1:$1,e=n(r,i),$r){o=0;do{if($r=!1,Kr=0,25<=o)throw Error(k(301));o+=1,xe=ye=null,t.updateQueue=null,Fi.current=R1,e=n(r,i)}while($r)}if(Fi.current=mo,t=ye!==null&&ye.next!==null,En=0,xe=ye=se=null,po=!1,t)throw Error(k(300));return e}function Os(){var e=Kr!==0;return Kr=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?se.memoizedState=xe=e:xe=xe.next=e,xe}function mt(){if(ye===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=xe===null?se.memoizedState:xe.next;if(t!==null)xe=t,ye=e;else{if(e===null)throw Error(k(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},xe===null?se.memoizedState=xe=e:xe=xe.next=e}return xe}function Zr(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=mt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var m=c.lane;if((En&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,se.lanes|=m,_n|=m}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Et(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,_n|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=mt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Et(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function td(){}function nd(e,t){var n=se,r=mt(),i=t(),o=!Et(r.memoizedState,i);if(o&&(r.memoizedState=i,Xe=!0),r=r.queue,$s(od.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Jr(9,id.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(k(349));En&30||rd(n,t,i)}return i}function rd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function id(e,t,n,r){t.value=n,t.getSnapshot=r,ld(t)&&ad(e)}function od(e,t,n){return n(function(){ld(t)&&ad(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function ad(e){var t=Bt(e,1);t!==null&&Ct(t,e,1,-1)}function Ku(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:e},t.queue=e,e=e.dispatch=N1.bind(null,se,e),[t.memoizedState,e]}function Jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sd(){return mt().memoizedState}function Ui(e,t,n,r){var i=zt();se.flags|=e,i.memoizedState=Jr(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var i=mt();r=r===void 0?null:r;var o=void 0;if(ye!==null){var l=ye.memoizedState;if(o=l.destroy,r!==null&&Ps(r,l.deps)){i.memoizedState=Jr(t,n,o,r);return}}se.flags|=e,i.memoizedState=Jr(1|t,n,o,r)}function Zu(e,t){return Ui(8390656,8,e,t)}function $s(e,t){return To(2048,8,e,t)}function ud(e,t){return To(4,2,e,t)}function cd(e,t){return To(4,4,e,t)}function fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,fd.bind(null,t,e),n)}function Rs(){}function pd(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function md(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hd(e,t,n){return En&21?(Et(n,t)||(n=yf(),se.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function z1(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{q=n,Rl.transition=r}}function gd(){return mt().memoizedState}function P1(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vd(e))yd(t,n);else if(n=Gf(e,t,n,r),n!==null){var i=Ve();Ct(n,e,r,i),wd(n,t,r)}}function N1(e,t,n){var r=ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vd(e))yd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,l)){var s=t.interleaved;s===null?(i.next=i,ks(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Gf(e,t,i,r),n!==null&&(i=Ve(),Ct(n,e,r,i),wd(n,t,r))}}function vd(e){var t=e.alternate;return e===se||t!==null&&t===se}function yd(e,t){$r=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var mo={readContext:pt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},O1={readContext:pt,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Zu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=P1.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Ku,useDebugValue:Rs,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Ku(!1),t=e[0];return e=z1.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=zt();if(le){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ke===null)throw Error(k(349));En&30||rd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Zu(od.bind(null,r,o,e),[e]),r.flags|=2048,Jr(9,id.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=ke.identifierPrefix;if(le){var n=jt,r=Mt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$1={readContext:pt,useCallback:pd,useContext:pt,useEffect:$s,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:md,useReducer:Tl,useRef:sd,useState:function(){return Tl(Zr)},useDebugValue:Rs,useDeferredValue:function(e){var t=mt();return hd(t,ye.memoizedState,e)},useTransition:function(){var e=Tl(Zr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:nd,useId:gd,unstable_isNewReconciler:!1},R1={readContext:pt,useCallback:pd,useContext:pt,useEffect:$s,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:cd,useMemo:md,useReducer:Il,useRef:sd,useState:function(){return Il(Zr)},useDebugValue:Rs,useDeferredValue:function(e){var t=mt();return ye===null?t.memoizedState=e:hd(t,ye.memoizedState,e)},useTransition:function(){var e=Il(Zr)[0],t=mt().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:nd,useId:gd,unstable_isNewReconciler:!1};function tr(e,t){try{var n="",r=t;do n+=op(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function Sd(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,Aa=r),Ea(e,t)},n}function xd(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ea(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new T1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Q1.bind(null,e,t,n),t.then(e,e))}function qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var I1=Wt.ReactCurrentOwner,Xe=!1;function Ue(e,t,n,r){t.child=e===null?bf(t,null,n,r):bn(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var o=t.ref;return Xn(t,i),r=Ns(e,t,n,r,o,i),n=Os(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(le&&n&&gs(t),t.flags|=1,Ue(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,kd(e,t,o,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(l,r)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function kd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hr(o,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return _a(e,t,n,r,i)}function Cd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Vn,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Vn,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(Vn,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(Vn,et),et|=r;return Ue(e,t,i,n),t.child}function Ed(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=Ke(n)?kn:De.current;return o=Jn(t,o),Xn(t,i),n=Ns(e,t,n,r,o,i),r=Os(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(le&&r&&gs(t),t.flags|=1,Ue(e,t,n,i),t.child)}function nc(e,t,n,r,i){if(Ke(n)){var o=!0;oo(t)}else o=!1;if(Xn(t,i),t.stateNode===null)Vi(e,t),Jf(t,n,r),Ca(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Ke(n)?kn:De.current,c=Jn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Xu(t,l,r,c),Gt=!1;var h=t.memoizedState;l.state=h,co(t,r,l,i),s=t.memoizedState,a!==r||h!==s||Ge.current||Gt?(typeof m=="function"&&(ka(t,n,m,r),s=t.memoizedState),(a=Gt||Qu(t,n,a,r,h,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:yt(t.type,a),l.props=c,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=pt(s):(s=Ke(n)?kn:De.current,s=Jn(t,s));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&Xu(t,l,r,s),Gt=!1,h=t.memoizedState,l.state=h,co(t,r,l,i);var y=t.memoizedState;a!==p||h!==y||Ge.current||Gt?(typeof S=="function"&&(ka(t,n,S,r),y=t.memoizedState),(c=Gt||Qu(t,n,c,r,h,y,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return za(e,t,n,r,o,i)}function za(e,t,n,r,i,o){Ed(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Vu(t,n,!1),Ht(e,t,o);r=t.stateNode,I1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=bn(t,e.child,null,o),t.child=bn(t,null,a,o)):Ue(e,t,a,o),t.memoizedState=r.state,i&&Vu(t,n,!0),t.child}function _d(e){var t=e.stateNode;t.pendingContext?Uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uu(e,t.context,!1),Es(e,t.containerInfo)}function rc(e,t,n,r,i){return qn(),ys(i),t.flags|=256,Ue(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(ae,i&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Lo(l,r,0,null),e=xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Na(n),t.memoizedState=Pa,e):Ts(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return A1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=an(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=an(a,o):(o=xn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Na(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ts(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&ys(r),bn(t,e.child,null,n),e=Ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function A1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Al(Error(k(422))),_i(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=xn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bn(t,e.child,null,l),t.child.memoizedState=Na(l),t.memoizedState=Pa,o);if(!(t.mode&1))return _i(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Al(o,r,void 0),_i(e,t,l,r)}if(a=(l&e.childLanes)!==0,Xe||a){if(r=ke,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),Ct(r,e,i,-1))}return Ds(),r=Al(Error(k(421))),_i(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=X1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=nn(i.nextSibling),rt=t,le=!0,St=null,e!==null&&(ut[ct++]=Mt,ut[ct++]=jt,ut[ct++]=Cn,Mt=e.id,jt=e.overflow,Cn=t),t=Ts(t,r.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xa(e.return,t,n)}function Ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ue(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ll(t,!0,n,null,o);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function L1(e,t,n){switch(t.tag){case 3:_d(t),qn();break;case 5:ed(t);break;case 1:Ke(t.type)&&oo(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(so,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?zd(e,t,n):(ne(ae,ae.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Cd(e,t,n)}return Ht(e,t,n)}var Nd,Oa,Od,$d;Nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};Od=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(Rt.current);var o=null;switch(n){case"input":i=Jl(e,i),r=Jl(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=ea(e,i),r=ea(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}na(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&re("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};$d=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function M1(e,t,n){var r=t.pendingProps;switch(vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ke(t.type)&&io(),Le(t),null;case 3:return r=t.stateNode,er(),oe(Ge),oe(De),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(ja(St),St=null))),Oa(e,t),Le(t),null;case 5:_s(t);var i=wn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Le(t),null}if(e=wn(Rt.current),Ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ot]=t,r[Qr]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)re(Er[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":pu(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":hu(r,o),re("invalid",r)}na(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),i=["children",""+a]):Mr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":mi(r),mu(r,o,!0);break;case"textarea":mi(r),gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ro)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ot]=t,e[Qr]=r,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(l=ra(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)re(Er[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":pu(e,r),i=Jl(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":hu(e,r),i=ea(e,r),re("invalid",e);break;default:i=r}na(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?lf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&rf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jr(e,s):typeof s=="number"&&jr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&re("scroll",e):s!=null&&ns(e,o,s,l))}switch(n){case"input":mi(e),mu(e,r,!1);break;case"textarea":mi(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)$d(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=wn(Gr.current),wn(Rt.current),Ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(o=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Le(t),null;case 13:if(oe(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&tt!==null&&t.mode&1&&!(t.flags&128))Xf(),qn(),t.flags|=98560,o=!1;else if(o=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ot]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else St!==null&&(ja(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?we===0&&(we=3):Ds())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return er(),Oa(e,t),e===null&&Wr(t.stateNode.containerInfo),Le(t),null;case 10:return xs(t.type._context),Le(t),null;case 17:return Ke(t.type)&&io(),Le(t),null;case 19:if(oe(ae),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)yr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=fo(e),l!==null){for(t.flags|=128,yr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>nr&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=fo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!le)return Le(t),null}else 2*pe()-o.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=ae.current,ne(ae,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function j1(e,t){switch(vs(t),t.tag){case 1:return Ke(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),oe(Ge),oe(De),zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _s(t),null;case 13:if(oe(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ae),null;case 4:return er(),null;case 10:return xs(t.type._context),null;case 22:case 23:return js(),null;case 24:return null;default:return null}}var zi=!1,je=!1,D1=typeof WeakSet=="function"?WeakSet:Set,A=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function $a(e,t,n){try{n()}catch(r){fe(e,t,r)}}var oc=!1;function F1(e,t){if(pa=eo,e=Af(),hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(S=p.firstChild)!==null;)h=p,p=S;for(;;){if(p===e)break t;if(h===n&&++c===i&&(a=l),h===o&&++m===r&&(s=l),(S=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=S}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:e,selectionRange:n},eo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,z=y.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:yt(t.type,g),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return y=oc,oc=!1,y}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&$a(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Qr],delete t[va],delete t[x1],delete t[k1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var Ne=null,wt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Id(e,t,n),n=n.sibling}function Id(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:je||Un(n,t);case 6:var r=Ne,i=wt;Ne=null,Qt(e,t,n),Ne=r,wt=i,Ne!==null&&(wt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(wt?(e=Ne,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),Vr(e)):Nl(Ne,n.stateNode));break;case 4:r=Ne,i=wt,Ne=n.stateNode.containerInfo,wt=!0,Qt(e,t,n),Ne=r,wt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&$a(n,t,l),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!je&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Qt(e,t,n),je=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D1),t.forEach(function(r){var i=G1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,wt=!1;break e;case 3:Ne=a.stateNode.containerInfo,wt=!0;break e;case 4:Ne=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Ne===null)throw Error(k(160));Id(o,l,i),Ne=null,wt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){fe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ad(t,e),t=t.sibling}function Ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),_t(e),r&4){try{Rr(3,e,e.return),Io(3,e)}catch(g){fe(e,e.return,g)}try{Rr(5,e,e.return)}catch(g){fe(e,e.return,g)}}break;case 1:vt(t,e),_t(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(vt(t,e),_t(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(g){fe(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ef(i,o),ra(a,l);var c=ra(a,o);for(l=0;l<s.length;l+=2){var m=s[l],p=s[l+1];m==="style"?lf(i,p):m==="dangerouslySetInnerHTML"?rf(i,p):m==="children"?jr(i,p):ns(i,m,p,c)}switch(a){case"input":ql(i,o);break;case"textarea":tf(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Hn(i,!!o.multiple,S,!1):h!==!!o.multiple&&(o.defaultValue!=null?Hn(i,!!o.multiple,o.defaultValue,!0):Hn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qr]=o}catch(g){fe(e,e.return,g)}}break;case 6:if(vt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){fe(e,e.return,g)}}break;case 3:if(vt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(g){fe(e,e.return,g)}break;case 4:vt(t,e),_t(e);break;case 13:vt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ls=pe())),r&4&&ac(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(je=(c=je)||m,vt(t,e),je=c):vt(t,e),_t(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(p=A=m;A!==null;){switch(h=A,S=h.child,h.tag){case 0:case 11:case 14:case 15:Rr(4,h,h.return);break;case 1:Un(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){fe(r,n,g)}}break;case 5:Un(h,h.return);break;case 22:if(h.memoizedState!==null){uc(p);continue}}S!==null?(S.return=h,A=S):uc(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=of("display",l))}catch(g){fe(e,e.return,g)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){fe(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:vt(t,e),_t(e),r&4&&ac(e);break;case 21:break;default:vt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var o=lc(e);Ia(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=lc(e);Ta(e,a,l);break;default:throw Error(k(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U1(e,t,n){A=e,Ld(e)}function Ld(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||zi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||je;a=zi;var c=je;if(zi=l,(je=s)&&!c)for(A=i;A!==null;)l=A,s=l.child,l.tag===22&&l.memoizedState!==null?cc(i):s!==null?(s.return=l,A=s):cc(i);for(;o!==null;)A=o,Ld(o),o=o.sibling;A=i,zi=a,je=c}sc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):sc(e)}}function sc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Vr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}je||t.flags&512&&Ra(t)}catch(h){fe(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function uc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function cc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){fe(t,i,s)}}var o=t.return;try{Ra(t)}catch(s){fe(t,o,s)}break;case 5:var l=t.return;try{Ra(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var V1=Math.ceil,ho=Wt.ReactCurrentDispatcher,Is=Wt.ReactCurrentOwner,dt=Wt.ReactCurrentBatchConfig,W=0,ke=null,ge=null,$e=0,et=0,Vn=pn(0),we=0,qr=null,_n=0,Ao=0,As=0,Tr=null,Qe=null,Ls=0,nr=1/0,At=null,go=!1,Aa=null,on=null,Pi=!1,qt=null,vo=0,Ir=0,La=null,Bi=-1,Hi=0;function Ve(){return W&6?pe():Bi!==-1?Bi:Bi=pe()}function ln(e){return e.mode&1?W&2&&$e!==0?$e&-$e:E1.transition!==null?(Hi===0&&(Hi=yf()),Hi):(e=q,e!==0||(e=window.event,e=e===void 0?16:_f(e.type)),e):1}function Ct(e,t,n,r){if(50<Ir)throw Ir=0,La=null,Error(k(185));oi(e,n,r),(!(W&2)||e!==ke)&&(e===ke&&(!(W&2)&&(Ao|=n),we===4&&Zt(e,$e)),Ze(e,r),n===1&&W===0&&!(t.mode&1)&&(nr=pe()+500,$o&&mn()))}function Ze(e,t){var n=e.callbackNode;Ep(e,t);var r=bi(e,e===ke?$e:0);if(r===0)n!==null&&wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wu(n),t===1)e.tag===0?C1(fc.bind(null,e)):Wf(fc.bind(null,e)),w1(function(){!(W&6)&&mn()}),n=null;else{switch(wf(r)){case 1:n=as;break;case 4:n=gf;break;case 16:n=qi;break;case 536870912:n=vf;break;default:n=qi}n=Hd(n,Md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Md(e,t){if(Bi=-1,Hi=0,W&6)throw Error(k(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=bi(e,e===ke?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yo(e,r);else{t=r;var i=W;W|=2;var o=Dd();(ke!==e||$e!==t)&&(At=null,nr=pe()+500,Sn(e,t));do try{W1();break}catch(a){jd(e,a)}while(1);Ss(),ho.current=o,W=i,ge!==null?t=0:(ke=null,$e=0,t=we)}if(t!==0){if(t===2&&(i=sa(e),i!==0&&(r=i,t=Ma(e,i))),t===1)throw n=qr,Sn(e,0),Zt(e,r),Ze(e,pe()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!B1(i)&&(t=yo(e,r),t===2&&(o=sa(e),o!==0&&(r=o,t=Ma(e,o))),t===1))throw n=qr,Sn(e,0),Zt(e,r),Ze(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:gn(e,Qe,At);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Ls+500-pe(),10<t)){if(bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ga(gn.bind(null,e,Qe,At),t);break}gn(e,Qe,At);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-kt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V1(r/1960))-r,10<r){e.timeoutHandle=ga(gn.bind(null,e,Qe,At),r);break}gn(e,Qe,At);break;case 5:gn(e,Qe,At);break;default:throw Error(k(329))}}}return Ze(e,pe()),e.callbackNode===n?Md.bind(null,e):null}function Ma(e,t){var n=Tr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=yo(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ja(t)),e}function ja(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function B1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~As,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(W&6)throw Error(k(327));Gn();var t=bi(e,0);if(!(t&1))return Ze(e,pe()),null;var n=yo(e,t);if(e.tag!==0&&n===2){var r=sa(e);r!==0&&(t=r,n=Ma(e,r))}if(n===1)throw n=qr,Sn(e,0),Zt(e,t),Ze(e,pe()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Qe,At),Ze(e,pe()),null}function Ms(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(nr=pe()+500,$o&&mn())}}function zn(e){qt!==null&&qt.tag===0&&!(W&6)&&Gn();var t=W;W|=1;var n=dt.transition,r=q;try{if(dt.transition=null,q=1,e)return e()}finally{q=r,dt.transition=n,W=t,!(W&6)&&mn()}}function js(){et=Vn.current,oe(Vn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,y1(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:er(),oe(Ge),oe(De),zs();break;case 5:_s(r);break;case 4:er();break;case 13:oe(ae);break;case 19:oe(ae);break;case 10:xs(r.type._context);break;case 22:case 23:js()}n=n.return}if(ke=e,ge=e=an(e.current,null),$e=et=t,we=0,qr=null,As=Ao=_n=0,Qe=Tr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}yn=null}return e}function jd(e,t){do{var n=ge;try{if(Ss(),Fi.current=mo,po){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(En=0,xe=ye=se=null,$r=!1,Kr=0,Is.current=null,n===null||n.return===null){we=1,qr=t,ge=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=$e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=qu(l);if(S!==null){S.flags&=-257,bu(S,l,a,o,t),S.mode&1&&Ju(o,c,t),t=S,s=c;var y=t.updateQueue;if(y===null){var g=new Set;g.add(s),t.updateQueue=g}else y.add(s);break e}else{if(!(t&1)){Ju(o,c,t),Ds();break e}s=Error(k(426))}}else if(le&&a.mode&1){var z=qu(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),bu(z,l,a,o,t),ys(tr(s,a));break e}}o=s=tr(s,a),we!==4&&(we=2),Tr===null?Tr=[o]:Tr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Sd(o,s,t);Wu(o,f);break e;case 1:a=s;var u=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(on===null||!on.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=xd(o,a,t);Wu(o,w);break e}}o=o.return}while(o!==null)}Ud(n)}catch(x){t=x,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function Dd(){var e=ho.current;return ho.current=mo,e===null?mo:e}function Ds(){(we===0||we===3||we===2)&&(we=4),ke===null||!(_n&268435455)&&!(Ao&268435455)||Zt(ke,$e)}function yo(e,t){var n=W;W|=2;var r=Dd();(ke!==e||$e!==t)&&(At=null,Sn(e,t));do try{H1();break}catch(i){jd(e,i)}while(1);if(Ss(),W=n,ho.current=r,ge!==null)throw Error(k(261));return ke=null,$e=0,we}function H1(){for(;ge!==null;)Fd(ge)}function W1(){for(;ge!==null&&!hp();)Fd(ge)}function Fd(e){var t=Bd(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Ud(e):ge=t,Is.current=null}function Ud(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=j1(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}else if(n=M1(n,t,et),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function gn(e,t,n){var r=q,i=dt.transition;try{dt.transition=null,q=1,Y1(e,t,n,r)}finally{dt.transition=i,q=r}return null}function Y1(e,t,n,r){do Gn();while(qt!==null);if(W&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(_p(e,o),e===ke&&(ge=ke=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pi||(Pi=!0,Hd(qi,function(){return Gn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var l=q;q=1;var a=W;W|=4,Is.current=null,F1(e,n),Ad(n,e),f1(ma),eo=!!pa,ma=pa=null,e.current=n,U1(n),gp(),W=a,q=l,dt.transition=o}else e.current=n;if(Pi&&(Pi=!1,qt=e,vo=i),o=e.pendingLanes,o===0&&(on=null),wp(n.stateNode),Ze(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=Aa,Aa=null,e;return vo&1&&e.tag!==0&&Gn(),o=e.pendingLanes,o&1?e===La?Ir++:(Ir=0,La=e):Ir=0,mn(),null}function Gn(){if(qt!==null){var e=wf(vo),t=dt.transition,n=q;try{if(dt.transition=null,q=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,vo=0,W&6)throw Error(k(331));var i=W;for(W|=4,A=e.current;A!==null;){var o=A,l=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(A=c;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:Rr(8,m,o)}var p=m.child;if(p!==null)p.return=m,A=p;else for(;A!==null;){m=A;var h=m.sibling,S=m.return;if(Rd(m),m===c){A=null;break}if(h!==null){h.return=S,A=h;break}A=S}}}var y=o.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var z=g.sibling;g.sibling=null,g=z}while(g!==null)}}A=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,A=l;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,A=f;break e}A=o.return}}var u=e.current;for(A=u;A!==null;){l=A;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,A=d;else e:for(l=u;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Io(9,a)}}catch(x){fe(a,a.return,x)}if(a===l){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(W=i,mn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{q=n,dt.transition=t}}return!1}function dc(e,t,n){t=tr(n,t),t=Sd(e,t,1),e=rn(e,t,1),t=Ve(),e!==null&&(oi(e,1,t),Ze(e,t))}function fe(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=tr(n,e),e=xd(t,e,1),t=rn(t,e,1),e=Ve(),t!==null&&(oi(t,1,e),Ze(t,e));break}}t=t.return}}function Q1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&($e&n)===n&&(we===4||we===3&&($e&130023424)===$e&&500>pe()-Ls?Sn(e,0):As|=n),Ze(e,t)}function Vd(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=Ve();e=Bt(e,t),e!==null&&(oi(e,t,n),Ze(e,n))}function X1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vd(e,n)}function G1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Vd(e,n)}var Bd;Bd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,L1(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,le&&t.flags&1048576&&Yf(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=Jn(t,De.current);Xn(t,n),i=Ns(null,t,r,e,i,n);var o=Os();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cs(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,Ca(t,r,e,n),t=za(null,t,r,!0,o,n)):(t.tag=0,le&&o&&gs(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Z1(r),e=yt(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=ec(null,t,r,e,n);break e;case 14:t=tc(null,t,r,yt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),nc(e,t,r,i,n);case 3:e:{if(_d(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kf(e,t),co(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=tr(Error(k(423)),t),t=rc(e,t,r,n,i);break e}else if(r!==i){i=tr(Error(k(424)),t),t=rc(e,t,r,n,i);break e}else for(tt=nn(t.stateNode.containerInfo.firstChild),rt=t,le=!0,St=null,n=bf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===i){t=Ht(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return ed(t),e===null&&Sa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ha(r,i)?l=null:o!==null&&ha(r,o)&&(t.flags|=32),Ed(e,t),Ue(e,t,l,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return zd(e,t,n);case 4:return Es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),ec(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ne(so,r._currentValue),r._currentValue=l,o!==null)if(Et(o.value,l)){if(o.children===i.children&&!Ge.current){t=Ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ft(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),xa(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),xa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=pt(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=yt(r,t.pendingProps),i=yt(r.type,i),tc(e,t,r,i,n);case 15:return kd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:yt(r,i),Vi(e,t),t.tag=1,Ke(r)?(e=!0,oo(t)):e=!1,Xn(t,n),Jf(t,r,i),Ca(t,r,i,n),za(null,t,r,!0,e,n);case 19:return Pd(e,t,n);case 22:return Cd(e,t,n)}throw Error(k(156,t.tag))};function Hd(e,t){return hf(e,t)}function K1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new K1(e,t,n,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z1(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===is)return 11;if(e===os)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Fs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Rn:return xn(n.children,i,o,t);case rs:l=8,i|=8;break;case Xl:return e=ft(12,n,t,i|2),e.elementType=Xl,e.lanes=o,e;case Gl:return e=ft(13,n,t,i),e.elementType=Gl,e.lanes=o,e;case Kl:return e=ft(19,n,t,i),e.elementType=Kl,e.lanes=o,e;case Jc:return Lo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kc:l=10;break e;case Zc:l=9;break e;case is:l=11;break e;case os:l=14;break e;case Xt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ft(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=ft(22,e,r,t),e.elementType=Jc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ml(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Us(e,t,n,r,i,o,l,a,s){return e=new J1(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(o),e}function q1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wd(e){if(!e)return fn;e=e._reactInternals;e:{if(Nn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Hf(e,n,t)}return t}function Yd(e,t,n,r,i,o,l,a,s){return e=Us(n,r,!0,e,i,o,l,a,s),e.context=Wd(null),n=e.current,r=Ve(),i=ln(n),o=Ft(r,i),o.callback=t??null,rn(n,o,i),e.current.lanes=i,oi(e,i,r),Ze(e,r),e}function Mo(e,t,n,r){var i=t.current,o=Ve(),l=ln(i);return n=Wd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,l),e!==null&&(Ct(e,i,l,o),Di(e,i,l)),l}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vs(e,t){pc(e,t),(e=e.alternate)&&pc(e,t)}function b1(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}jo.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Mo(e,t,null,null)};jo.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Mo(null,e,null,null)}),t[Vt]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=kf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Ef(e)}};function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function em(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=wo(l);o.call(c)}}var l=Yd(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=l,e[Vt]=l.current,Wr(e.nodeType===8?e.parentNode:e),zn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=wo(s);a.call(c)}}var s=Us(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=s,e[Vt]=s.current,Wr(e.nodeType===8?e.parentNode:e),zn(function(){Mo(t,s,n,r)}),s}function Fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=wo(l);a.call(s)}}Mo(t,l,e,i)}else l=em(n,t,e,i,r);return wo(l)}Sf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(ss(t,n|1),Ze(t,pe()),!(W&6)&&(nr=pe()+500,mn()))}break;case 13:zn(function(){var r=Bt(e,1);if(r!==null){var i=Ve();Ct(r,e,1,i)}}),Vs(e,1)}};us=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ve();Ct(t,e,134217728,n)}Vs(e,134217728)}};xf=function(e){if(e.tag===13){var t=ln(e),n=Bt(e,t);if(n!==null){var r=Ve();Ct(n,e,t,r)}Vs(e,t)}};kf=function(){return q};Cf=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};oa=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Oo(r);if(!i)throw Error(k(90));bc(r),ql(r,i)}}}break;case"textarea":tf(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}};uf=Ms;cf=zn;var tm={usingClientEntryPoint:!1,Events:[ai,Ln,Oo,af,sf,Ms]},wr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nm={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||b1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{_o=Ni.inject(nm),$t=Ni}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hs(t))throw Error(k(200));return q1(e,t,null,n)};lt.createRoot=function(e,t){if(!Hs(e))throw Error(k(299));var n=!1,r="",i=Qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Us(e,1,!1,null,null,n,!1,r,i),e[Vt]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Bs(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=pf(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return zn(e)};lt.hydrate=function(e,t,n){if(!Do(t))throw Error(k(200));return Fo(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!Hs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Qd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Yd(t,null,e,1,n??null,i,!1,o,l),e[Vt]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};lt.render=function(e,t,n){if(!Do(t))throw Error(k(200));return Fo(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Do(e))throw Error(k(40));return e._reactRootContainer?(zn(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};lt.unstable_batchedUpdates=Ms;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Fo(e,t,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=lt})(b0);var hc=Wl;Hl.createRoot=hc.createRoot,Hl.hydrateRoot=hc.hydrateRoot;var br={},rm={get exports(){return br},set exports(e){br=e}},b={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Uo=Symbol.for("react.fragment"),Vo=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),Ho=Symbol.for("react.provider"),Wo=Symbol.for("react.context"),im=Symbol.for("react.server_context"),Yo=Symbol.for("react.forward_ref"),Qo=Symbol.for("react.suspense"),Xo=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Ko=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),Xd;Xd=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ws:switch(e=e.type,e){case Uo:case Bo:case Vo:case Qo:case Xo:return e;default:switch(e=e&&e.$$typeof,e){case im:case Wo:case Yo:case Ko:case Go:case Ho:return e;default:return t}}case Ys:return t}}}b.ContextConsumer=Wo;b.ContextProvider=Ho;b.Element=Ws;b.ForwardRef=Yo;b.Fragment=Uo;b.Lazy=Ko;b.Memo=Go;b.Portal=Ys;b.Profiler=Bo;b.StrictMode=Vo;b.Suspense=Qo;b.SuspenseList=Xo;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(e){return ht(e)===Wo};b.isContextProvider=function(e){return ht(e)===Ho};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ws};b.isForwardRef=function(e){return ht(e)===Yo};b.isFragment=function(e){return ht(e)===Uo};b.isLazy=function(e){return ht(e)===Ko};b.isMemo=function(e){return ht(e)===Go};b.isPortal=function(e){return ht(e)===Ys};b.isProfiler=function(e){return ht(e)===Bo};b.isStrictMode=function(e){return ht(e)===Vo};b.isSuspense=function(e){return ht(e)===Qo};b.isSuspenseList=function(e){return ht(e)===Xo};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Uo||e===Bo||e===Vo||e===Qo||e===Xo||e===om||typeof e=="object"&&e!==null&&(e.$$typeof===Ko||e.$$typeof===Go||e.$$typeof===Ho||e.$$typeof===Wo||e.$$typeof===Yo||e.$$typeof===Xd||e.getModuleId!==void 0)};b.typeOf=ht;(function(e){e.exports=b})(rm);function lm(e){function t($,R,I,j,v){for(var H=0,O=0,ce=0,G=0,J,U,_e=0,Ye=0,Q,Ie=Q=J=0,K=0,ze=0,cr=0,Pe=0,fi=I.length,fr=fi-1,gt,F="",de="",cl="",fl="",Yt;K<fi;){if(U=I.charCodeAt(K),K===fr&&O+G+ce+H!==0&&(O!==0&&(U=O===47?10:47),G=ce=H=0,fi++,fr++),O+G+ce+H===0){if(K===fr&&(0<ze&&(F=F.replace(h,"")),0<F.trim().length)){switch(U){case 32:case 9:case 59:case 13:case 10:break;default:F+=I.charAt(K)}U=59}switch(U){case 123:for(F=F.trim(),J=F.charCodeAt(0),Q=1,Pe=++K;K<fi;){switch(U=I.charCodeAt(K)){case 123:Q++;break;case 125:Q--;break;case 47:switch(U=I.charCodeAt(K+1)){case 42:case 47:e:{for(Ie=K+1;Ie<fr;++Ie)switch(I.charCodeAt(Ie)){case 47:if(U===42&&I.charCodeAt(Ie-1)===42&&K+2!==Ie){K=Ie+1;break e}break;case 10:if(U===47){K=Ie+1;break e}}K=Ie}}break;case 91:U++;case 40:U++;case 34:case 39:for(;K++<fr&&I.charCodeAt(K)!==U;);}if(Q===0)break;K++}switch(Q=I.substring(Pe,K),J===0&&(J=(F=F.replace(p,"").trim()).charCodeAt(0)),J){case 64:switch(0<ze&&(F=F.replace(h,"")),U=F.charCodeAt(1),U){case 100:case 109:case 115:case 45:ze=R;break;default:ze=It}if(Q=t(R,ze,Q,U,v+1),Pe=Q.length,0<N&&(ze=n(It,F,cr),Yt=a(3,Q,ze,R,Ee,ve,Pe,U,v,j),F=ze.join(""),Yt!==void 0&&(Pe=(Q=Yt.trim()).length)===0&&(U=0,Q="")),0<Pe)switch(U){case 115:F=F.replace(P,l);case 100:case 109:case 45:Q=F+"{"+Q+"}";break;case 107:F=F.replace(u,"$1 $2"),Q=F+"{"+Q+"}",Q=Te===1||Te===2&&o("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=F+Q,j===112&&(Q=(de+=Q,""))}else Q="";break;default:Q=t(R,n(R,F,cr),Q,j,v+1)}cl+=Q,Q=cr=ze=Ie=J=0,F="",U=I.charCodeAt(++K);break;case 125:case 59:if(F=(0<ze?F.replace(h,""):F).trim(),1<(Pe=F.length))switch(Ie===0&&(J=F.charCodeAt(0),J===45||96<J&&123>J)&&(Pe=(F=F.replace(" ",":")).length),0<N&&(Yt=a(1,F,R,$,Ee,ve,de.length,j,v,j))!==void 0&&(Pe=(F=Yt.trim()).length)===0&&(F="\0\0"),J=F.charCodeAt(0),U=F.charCodeAt(1),J){case 0:break;case 64:if(U===105||U===99){fl+=F+I.charAt(K);break}default:F.charCodeAt(Pe-1)!==58&&(de+=i(F,J,U,F.charCodeAt(2)))}cr=ze=Ie=J=0,F="",U=I.charCodeAt(++K)}}switch(U){case 13:case 10:O===47?O=0:1+J===0&&j!==107&&0<F.length&&(ze=1,F+="\0"),0<N*M&&a(0,F,R,$,Ee,ve,de.length,j,v,j),ve=1,Ee++;break;case 59:case 125:if(O+G+ce+H===0){ve++;break}default:switch(ve++,gt=I.charAt(K),U){case 9:case 32:if(G+H+O===0)switch(_e){case 44:case 58:case 9:case 32:gt="";break;default:U!==32&&(gt=" ")}break;case 0:gt="\\0";break;case 12:gt="\\f";break;case 11:gt="\\v";break;case 38:G+O+H===0&&(ze=cr=1,gt="\f"+gt);break;case 108:if(G+O+H+be===0&&0<Ie)switch(K-Ie){case 2:_e===112&&I.charCodeAt(K-3)===58&&(be=_e);case 8:Ye===111&&(be=Ye)}break;case 58:G+O+H===0&&(Ie=K);break;case 44:O+ce+G+H===0&&(ze=1,gt+="\r");break;case 34:case 39:O===0&&(G=G===U?0:G===0?U:G);break;case 91:G+O+ce===0&&H++;break;case 93:G+O+ce===0&&H--;break;case 41:G+O+H===0&&ce--;break;case 40:if(G+O+H===0){if(J===0)switch(2*_e+3*Ye){case 533:break;default:J=1}ce++}break;case 64:O+ce+G+H+Ie+Q===0&&(Q=1);break;case 42:case 47:if(!(0<G+H+ce))switch(O){case 0:switch(2*U+3*I.charCodeAt(K+1)){case 235:O=47;break;case 220:Pe=K,O=42}break;case 42:U===47&&_e===42&&Pe+2!==K&&(I.charCodeAt(Pe+2)===33&&(de+=I.substring(Pe,K+1)),gt="",O=0)}}O===0&&(F+=gt)}Ye=_e,_e=U,K++}if(Pe=de.length,0<Pe){if(ze=R,0<N&&(Yt=a(2,de,ze,$,Ee,ve,Pe,j,v,j),Yt!==void 0&&(de=Yt).length===0))return fl+de+cl;if(de=ze.join(",")+"{"+de+"}",Te*be!==0){switch(Te!==2||o(de,2)||(be=0),be){case 111:de=de.replace(w,":-moz-$1")+de;break;case 112:de=de.replace(d,"::-webkit-input-$1")+de.replace(d,"::-moz-$1")+de.replace(d,":-ms-input-$1")+de}be=0}}return fl+de+cl}function n($,R,I){var j=R.trim().split(z);R=j;var v=j.length,H=$.length;switch(H){case 0:case 1:var O=0;for($=H===0?"":$[0]+" ";O<v;++O)R[O]=r($,R[O],I).trim();break;default:var ce=O=0;for(R=[];O<v;++O)for(var G=0;G<H;++G)R[ce++]=r($[G]+" ",j[O],I).trim()}return R}function r($,R,I){var j=R.charCodeAt(0);switch(33>j&&(j=(R=R.trim()).charCodeAt(0)),j){case 38:return R.replace(f,"$1"+$.trim());case 58:return $.trim()+R.replace(f,"$1"+$.trim());default:if(0<1*I&&0<R.indexOf("\f"))return R.replace(f,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+R}function i($,R,I,j){var v=$+";",H=2*R+3*I+4*j;if(H===944){$=v.indexOf(":",9)+1;var O=v.substring($,v.length-1).trim();return O=v.substring(0,$).trim()+O+";",Te===1||Te===2&&o(O,1)?"-webkit-"+O+O:O}if(Te===0||Te===2&&!o(v,1))return v;switch(H){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(Se,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return O=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+v+"-ms-flex-pack"+O+v;case 1005:return y.test(v)?v.replace(S,":-webkit-")+v.replace(S,":-moz-")+v:v;case 1e3:switch(O=v.substring(13).trim(),R=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(R)){case 226:O=v.replace(x,"tb");break;case 232:O=v.replace(x,"tb-rl");break;case 220:O=v.replace(x,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+O+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(R=(v=$).length-10,O=(v.charCodeAt(R)===33?v.substring(0,R):v).substring($.indexOf(":",7)+1).trim(),H=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:v=v.replace(O,"-webkit-"+O)+";"+v;break;case 207:case 102:v=v.replace(O,"-webkit-"+(102<H?"inline-":"")+"box")+";"+v.replace(O,"-webkit-"+O)+";"+v.replace(O,"-ms-"+O+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return O=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+O+"-ms-flex-"+O+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(T,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(T,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(D.test($)===!0)return(O=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),R,I,j).replace(":fill-available",":stretch"):v.replace(O,"-webkit-"+O)+v.replace(O,"-moz-"+O.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,I+j===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+v}return v}function o($,R){var I=$.indexOf(R===1?":":"{"),j=$.substring(0,R!==3?I:10);return I=$.substring(I+1,$.length-1),L(R!==2?j:j.replace(Y,"$1"),I,R)}function l($,R){var I=i(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return I!==R+";"?I.replace(C," or ($1)").substring(4):"("+R+")"}function a($,R,I,j,v,H,O,ce,G,J){for(var U=0,_e=R,Ye;U<N;++U)switch(Ye=Fe[U].call(m,$,_e,I,j,v,H,O,ce,G,J)){case void 0:case!1:case!0:case null:break;default:_e=Ye}if(_e!==R)return _e}function s($){switch($){case void 0:case null:N=Fe.length=0;break;default:if(typeof $=="function")Fe[N++]=$;else if(typeof $=="object")for(var R=0,I=$.length;R<I;++R)s($[R]);else M=!!$|0}return s}function c($){return $=$.prefix,$!==void 0&&(L=null,$?typeof $!="function"?Te=1:(Te=2,L=$):Te=0),c}function m($,R){var I=$;if(33>I.charCodeAt(0)&&(I=I.trim()),te=I,I=[te],0<N){var j=a(-1,R,I,I,Ee,ve,0,0,0,0);j!==void 0&&typeof j=="string"&&(R=j)}var v=t(It,I,R,0,0);return 0<N&&(j=a(-2,v,I,I,Ee,ve,v.length,0,0,0),j!==void 0&&(v=j)),te="",be=0,ve=Ee=1,v}var p=/^\0+/g,h=/[\0\r\f]/g,S=/: */g,y=/zoo|gra/,g=/([,: ])(transform)/g,z=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,u=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,w=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,T=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,Se=/([^-])(image-set\()/,ve=1,Ee=1,be=0,Te=1,It=[],Fe=[],N=0,L=null,M=0,te="";return m.use=s,m.set=c,e!==void 0&&c(e),m}var am={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Gd(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var sm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gc=Gd(function(e){return sm.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Da={},um={get exports(){return Da},set exports(e){Da=e}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,Qs=Ce?Symbol.for("react.element"):60103,Xs=Ce?Symbol.for("react.portal"):60106,Zo=Ce?Symbol.for("react.fragment"):60107,Jo=Ce?Symbol.for("react.strict_mode"):60108,qo=Ce?Symbol.for("react.profiler"):60114,bo=Ce?Symbol.for("react.provider"):60109,el=Ce?Symbol.for("react.context"):60110,Gs=Ce?Symbol.for("react.async_mode"):60111,tl=Ce?Symbol.for("react.concurrent_mode"):60111,nl=Ce?Symbol.for("react.forward_ref"):60112,rl=Ce?Symbol.for("react.suspense"):60113,cm=Ce?Symbol.for("react.suspense_list"):60120,il=Ce?Symbol.for("react.memo"):60115,ol=Ce?Symbol.for("react.lazy"):60116,fm=Ce?Symbol.for("react.block"):60121,dm=Ce?Symbol.for("react.fundamental"):60117,pm=Ce?Symbol.for("react.responder"):60118,mm=Ce?Symbol.for("react.scope"):60119;function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qs:switch(e=e.type,e){case Gs:case tl:case Zo:case qo:case Jo:case rl:return e;default:switch(e=e&&e.$$typeof,e){case el:case nl:case ol:case il:case bo:return e;default:return t}}case Xs:return t}}}function Kd(e){return st(e)===tl}ee.AsyncMode=Gs;ee.ConcurrentMode=tl;ee.ContextConsumer=el;ee.ContextProvider=bo;ee.Element=Qs;ee.ForwardRef=nl;ee.Fragment=Zo;ee.Lazy=ol;ee.Memo=il;ee.Portal=Xs;ee.Profiler=qo;ee.StrictMode=Jo;ee.Suspense=rl;ee.isAsyncMode=function(e){return Kd(e)||st(e)===Gs};ee.isConcurrentMode=Kd;ee.isContextConsumer=function(e){return st(e)===el};ee.isContextProvider=function(e){return st(e)===bo};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qs};ee.isForwardRef=function(e){return st(e)===nl};ee.isFragment=function(e){return st(e)===Zo};ee.isLazy=function(e){return st(e)===ol};ee.isMemo=function(e){return st(e)===il};ee.isPortal=function(e){return st(e)===Xs};ee.isProfiler=function(e){return st(e)===qo};ee.isStrictMode=function(e){return st(e)===Jo};ee.isSuspense=function(e){return st(e)===rl};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Zo||e===tl||e===qo||e===Jo||e===rl||e===cm||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===il||e.$$typeof===bo||e.$$typeof===el||e.$$typeof===nl||e.$$typeof===dm||e.$$typeof===pm||e.$$typeof===mm||e.$$typeof===fm)};ee.typeOf=st;(function(e){e.exports=ee})(um);var Ks=Da,hm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zs={};Zs[Ks.ForwardRef]=vm;Zs[Ks.Memo]=Zd;function vc(e){return Ks.isMemo(e)?Zd:Zs[e.$$typeof]||hm}var ym=Object.defineProperty,wm=Object.getOwnPropertyNames,yc=Object.getOwnPropertySymbols,Sm=Object.getOwnPropertyDescriptor,xm=Object.getPrototypeOf,wc=Object.prototype;function Jd(e,t,n){if(typeof t!="string"){if(wc){var r=xm(t);r&&r!==wc&&Jd(e,r,n)}var i=wm(t);yc&&(i=i.concat(yc(t)));for(var o=vc(e),l=vc(t),a=0;a<i.length;++a){var s=i[a];if(!gm[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var c=Sm(t,s);try{ym(e,s,c)}catch{}}}}return e}var km=Jd;function Dt(){return(Dt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Sc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Fa=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!br.typeOf(e)},So=Object.freeze([]),sn=Object.freeze({});function ei(e){return typeof e=="function"}function xc(e){return e.displayName||e.name||"Component"}function Js(e){return e&&typeof e.styledComponentId=="string"}var rr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",qs=typeof window<"u"&&"HTMLElement"in window,Cm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function ui(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Em=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&ui(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),c=0,m=r.length;c<m;c++)this.tag.insertRule(s,r[c])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Yi=new Map,xo=new Map,Ar=1,Oi=function(e){if(Yi.has(e))return Yi.get(e);for(;xo.has(Ar);)Ar++;var t=Ar++;return Yi.set(e,t),xo.set(t,e),t},_m=function(e){return xo.get(e)},zm=function(e,t){t>=Ar&&(Ar=t+1),Yi.set(e,t),xo.set(t,e)},Pm="style["+rr+'][data-styled-version="5.3.9"]',Nm=new RegExp("^"+rr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Om=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},$m=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(Nm);if(a){var s=0|parseInt(a[1],10),c=a[2];s!==0&&(zm(c,s),Om(e,c,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Rm=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,c=s.length;c>=0;c--){var m=s[c];if(m&&m.nodeType===1&&m.hasAttribute(rr))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(rr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=Rm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Tm=function(){function e(n){var r=this.element=qd(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}ui(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Im=function(){function e(n){var r=this.element=qd(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Am=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),kc=qs,Lm={isServer:!qs,useCSSOMInjection:!Cm},bd=function(){function e(n,r,i){n===void 0&&(n=sn),r===void 0&&(r={}),this.options=Dt({},Lm,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&qs&&kc&&(kc=!1,function(o){for(var l=document.querySelectorAll(Pm),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(rr)!=="active"&&($m(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Oi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Dt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Am(l):o?new Tm(l):new Im(l),new Em(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Oi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Oi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Oi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=_m(l);if(a!==void 0){var s=n.names.get(a),c=r.getGroup(l);if(s&&c&&s.size){var m=rr+".g"+l+'[id="'+a+'"]',p="";s!==void 0&&s.forEach(function(h){h.length>0&&(p+=h+",")}),o+=""+c+m+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),Mm=/(a)(d)/gi,Cc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ua(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cc(t%52)+n;return(Cc(t%52)+n).replace(Mm,"$1-$2")}var Bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},e0=function(e){return Bn(5381,e)};function jm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ei(n)&&!Js(n))return!1}return!0}var Dm=e0("5.3.9"),Fm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jm(t),this.componentId=n,this.baseHash=Bn(Dm,n),this.baseStyle=r,bd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=ir(this.rules,t,n,r).join(""),a=Ua(Bn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,m=Bn(this.baseHash,r.hash),p="",h=0;h<c;h++){var S=this.rules[h];if(typeof S=="string")p+=S;else if(S){var y=ir(S,t,n,r),g=Array.isArray(y)?y.join(""):y;m=Bn(m,g+h),p+=g}}if(p){var z=Ua(m>>>0);if(!n.hasNameForId(i,z)){var f=r(p,"."+z,void 0,i);n.insertRules(i,z,f)}o.push(z)}}return o.join(" ")},e}(),Um=/^\s*\/\/.*$/gm,Vm=[":","[",".","#"];function Bm(e){var t,n,r,i,o=e===void 0?sn:e,l=o.options,a=l===void 0?sn:l,s=o.plugins,c=s===void 0?So:s,m=new lm(a),p=[],h=function(g){function z(f){if(f)try{g(f+"}")}catch{}}return function(f,u,d,w,x,P,C,T,Y,D){switch(f){case 1:if(Y===0&&u.charCodeAt(0)===64)return g(u+";"),"";break;case 2:if(T===0)return u+"/*|*/";break;case 3:switch(T){case 102:case 112:return g(d[0]+u),"";default:return u+(D===0?"/*|*/":"")}case-2:u.split("/*|*/}").forEach(z)}}}(function(g){p.push(g)}),S=function(g,z,f){return z===0&&Vm.indexOf(f[n.length])!==-1||f.match(i)?g:"."+t};function y(g,z,f,u){u===void 0&&(u="&");var d=g.replace(Um,""),w=z&&f?f+" "+z+" { "+d+" }":d;return t=u,n=z,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(f||!z?"":z,w)}return m.use([].concat(c,[function(g,z,f){g===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,S))},h,function(g){if(g===-2){var z=p;return p=[],z}}])),y.hash=c.length?c.reduce(function(g,z){return z.name||ui(15),Bn(g,z.name)},5381).toString():"",y}var t0=nt.createContext();t0.Consumer;var n0=nt.createContext(),Hm=(n0.Consumer,new bd),Va=Bm();function Wm(){return V.useContext(t0)||Hm}function Ym(){return V.useContext(n0)||Va}var Qm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Va);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return ui(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Va),this.name+t.hash},e}(),Xm=/([A-Z])/,Gm=/([A-Z])/g,Km=/^ms-/,Zm=function(e){return"-"+e.toLowerCase()};function Ec(e){return Xm.test(e)?e.replace(Gm,Zm).replace(Km,"-ms-"):e}var _c=function(e){return e==null||e===!1||e===""};function ir(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=ir(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(_c(e))return"";if(Js(e))return"."+e.styledComponentId;if(ei(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var s=e(t);return ir(s,t,n,r)}var c;return e instanceof Qm?n?(e.inject(n,r),e.getName(r)):e:Fa(e)?function m(p,h){var S,y,g=[];for(var z in p)p.hasOwnProperty(z)&&!_c(p[z])&&(Array.isArray(p[z])&&p[z].isCss||ei(p[z])?g.push(Ec(z)+":",p[z],";"):Fa(p[z])?g.push.apply(g,m(p[z],z)):g.push(Ec(z)+": "+(S=z,(y=p[z])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||S in am?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(g,["}"]):g}(e):e.toString()}var zc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Jm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ei(e)||Fa(e)?zc(ir(Sc(So,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:zc(ir(Sc(e,n)))}var qm=function(e,t,n){return n===void 0&&(n=sn),e.theme!==n.theme&&e.theme||t||n.theme},bm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eh=/(^-|-$)/g;function Dl(e){return e.replace(bm,"-").replace(eh,"")}var th=function(e){return Ua(e0(e)>>>0)};function $i(e){return typeof e=="string"&&!0}var Ba=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},nh=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function rh(e,t,n){var r=e[n];Ba(t)&&Ba(r)?r0(r,t):e[n]=t}function r0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Ba(l))for(var a in l)nh(a)&&rh(e,l[a],a)}return e}var i0=nt.createContext();i0.Consumer;var Fl={};function o0(e,t,n){var r=Js(e),i=!$i(e),o=t.attrs,l=o===void 0?So:o,a=t.componentId,s=a===void 0?function(u,d){var w=typeof u!="string"?"sc":Dl(u);Fl[w]=(Fl[w]||0)+1;var x=w+"-"+th("5.3.9"+w+Fl[w]);return d?d+"-"+x:x}(t.displayName,t.parentComponentId):a,c=t.displayName,m=c===void 0?function(u){return $i(u)?"styled."+u:"Styled("+xc(u)+")"}(e):c,p=t.displayName&&t.componentId?Dl(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(u,d,w){return e.shouldForwardProp(u,d,w)&&t.shouldForwardProp(u,d,w)}:e.shouldForwardProp);var y,g=new Fm(n,p,r?e.componentStyle:void 0),z=g.isStatic&&l.length===0,f=function(u,d){return function(w,x,P,C){var T=w.attrs,Y=w.componentStyle,D=w.defaultProps,Se=w.foldedComponentIds,ve=w.shouldForwardProp,Ee=w.styledComponentId,be=w.target,Te=function(j,v,H){j===void 0&&(j=sn);var O=Dt({},v,{theme:j}),ce={};return H.forEach(function(G){var J,U,_e,Ye=G;for(J in ei(Ye)&&(Ye=Ye(O)),Ye)O[J]=ce[J]=J==="className"?(U=ce[J],_e=Ye[J],U&&_e?U+" "+_e:U||_e):Ye[J]}),[O,ce]}(qm(x,V.useContext(i0),D)||sn,x,T),It=Te[0],Fe=Te[1],N=function(j,v,H,O){var ce=Wm(),G=Ym(),J=v?j.generateAndInjectStyles(sn,ce,G):j.generateAndInjectStyles(H,ce,G);return J}(Y,C,It),L=P,M=Fe.$as||x.$as||Fe.as||x.as||be,te=$i(M),$=Fe!==x?Dt({},x,{},Fe):x,R={};for(var I in $)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?R.as=$[I]:(ve?ve(I,gc,M):!te||gc(I))&&(R[I]=$[I]));return x.style&&Fe.style!==x.style&&(R.style=Dt({},x.style,{},Fe.style)),R.className=Array.prototype.concat(Se,Ee,N!==Ee?N:null,x.className,Fe.className).filter(Boolean).join(" "),R.ref=L,V.createElement(M,R)}(y,u,d,z)};return f.displayName=m,(y=nt.forwardRef(f)).attrs=h,y.componentStyle=g,y.displayName=m,y.shouldForwardProp=S,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):So,y.styledComponentId=p,y.target=r?e.target:e,y.withComponent=function(u){var d=t.componentId,w=function(P,C){if(P==null)return{};var T,Y,D={},Se=Object.keys(P);for(Y=0;Y<Se.length;Y++)T=Se[Y],C.indexOf(T)>=0||(D[T]=P[T]);return D}(t,["componentId"]),x=d&&d+"-"+($i(u)?u:Dl(xc(u)));return o0(u,Dt({},w,{attrs:h,componentId:x}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(u){this._foldedDefaultProps=r?r0({},e.defaultProps,u):u}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),i&&km(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Ha=function(e){return function t(n,r,i){if(i===void 0&&(i=sn),!br.isValidElementType(r))return ui(1,String(r));var o=function(){return n(r,i,Jm.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Dt({},i,{},l))},o.attrs=function(l){return t(n,r,Dt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(o0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Ha[e]=Ha(e)});const We=Ha;var l0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pc=nt.createContext&&nt.createContext(l0),un=globalThis&&globalThis.__assign||function(){return un=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},un.apply(this,arguments)},ih=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function a0(e){return e&&e.map(function(t,n){return nt.createElement(t.tag,un({key:n},t.attr),a0(t.child))})}function qe(e){return function(t){return nt.createElement(oh,un({attr:un({},e.attr)},t),a0(e.child))}}function oh(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=ih(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),nt.createElement("svg",un({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:un(un({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&nt.createElement("title",null,o),e.children)};return Pc!==void 0?nt.createElement(Pc.Consumer,null,function(n){return t(n)}):t(l0)}function lh(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.29 5.64 1.93 12l6.36 6.36 1.42-1.41L4.76 12l4.95-4.95-1.42-1.41zm6 1.41L19.24 12l-4.95 4.95 1.42 1.41L22.07 12l-6.36-6.36-1.42 1.41z"}}]})(e)}function ah(){const[e,t]=V.useState(!1);return ie(sh,{bar:e,children:[E(uh,{children:E("span",{className:"green",children:E(lh,{})})}),ie(ch,{bar:e,children:[E("span",{children:E("a",{href:"#home",children:"INICIO"})}),E("span",{children:E("a",{href:"#service",children:"SERVIÇOS"})}),E("span",{children:E("a",{href:"#footer",children:"CONTATO"})})]}),E("div",{onClick:()=>t(!e),className:"bars",children:E("div",{className:"bar"})})]})}const sh=We.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${e=>e.bar?"transparent":"#000"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }
                :before{
                    transform: ${e=>e.bar?"rotate(45deg)":"translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }
                :after{
                    transform: ${e=>e.bar?"rotate(-45deg)":"translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`,uh=We.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #01be96;
    span{
        font-size: 2rem;
    }
    h1{
        font-weight: 600;
        font-size: 1.2rem;
        color: #000;
    }
`,ch=We.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${e=>e.bar?"100vh":0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        a{
            text-decoration: none;
            position: relative;
            font-weight: 600;
            font-size: 0.9rem;
            color: #000;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`;function fh(e){return qe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function dh(e){return qe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function s0(e){return qe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"}}]})(e)}function ph(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function mh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var hh=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(mh(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ph(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Me="-ms-",ko="-moz-",X="-webkit-",u0="comm",bs="rule",eu="decl",gh="@import",c0="@keyframes",vh=Math.abs,ll=String.fromCharCode,yh=Object.assign;function wh(e,t){return Oe(e,0)^45?(((t<<2^Oe(e,0))<<2^Oe(e,1))<<2^Oe(e,2))<<2^Oe(e,3):0}function f0(e){return e.trim()}function Sh(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function Wa(e,t){return e.indexOf(t)}function Oe(e,t){return e.charCodeAt(t)|0}function ti(e,t,n){return e.slice(t,n)}function Pt(e){return e.length}function tu(e){return e.length}function Ri(e,t){return t.push(e),e}function xh(e,t){return e.map(t).join("")}var al=1,or=1,d0=0,Je=0,he=0,ur="";function sl(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:al,column:or,length:l,return:""}}function Sr(e,t){return yh(sl("",null,null,"",null,null,0),e,{length:-e.length},t)}function kh(){return he}function Ch(){return he=Je>0?Oe(ur,--Je):0,or--,he===10&&(or=1,al--),he}function it(){return he=Je<d0?Oe(ur,Je++):0,or++,he===10&&(or=1,al++),he}function Tt(){return Oe(ur,Je)}function Qi(){return Je}function ci(e,t){return ti(ur,e,t)}function ni(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function p0(e){return al=or=1,d0=Pt(ur=e),Je=0,[]}function m0(e){return ur="",e}function Xi(e){return f0(ci(Je-1,Ya(e===91?e+2:e===40?e+1:e)))}function Eh(e){for(;(he=Tt())&&he<33;)it();return ni(e)>2||ni(he)>3?"":" "}function _h(e,t){for(;--t&&it()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return ci(e,Qi()+(t<6&&Tt()==32&&it()==32))}function Ya(e){for(;it();)switch(he){case e:return Je;case 34:case 39:e!==34&&e!==39&&Ya(he);break;case 40:e===41&&Ya(e);break;case 92:it();break}return Je}function zh(e,t){for(;it()&&e+he!==47+10;)if(e+he===42+42&&Tt()===47)break;return"/*"+ci(t,Je-1)+"*"+ll(e===47?e:it())}function Ph(e){for(;!ni(Tt());)it();return ci(e,Je)}function Nh(e){return m0(Gi("",null,null,null,[""],e=p0(e),0,[0],e))}function Gi(e,t,n,r,i,o,l,a,s){for(var c=0,m=0,p=l,h=0,S=0,y=0,g=1,z=1,f=1,u=0,d="",w=i,x=o,P=r,C=d;z;)switch(y=u,u=it()){case 40:if(y!=108&&Oe(C,p-1)==58){Wa(C+=Z(Xi(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Xi(u);break;case 9:case 10:case 13:case 32:C+=Eh(y);break;case 92:C+=_h(Qi()-1,7);continue;case 47:switch(Tt()){case 42:case 47:Ri(Oh(zh(it(),Qi()),t,n),s);break;default:C+="/"}break;case 123*g:a[c++]=Pt(C)*f;case 125*g:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+m:S>0&&Pt(C)-p&&Ri(S>32?Oc(C+";",r,n,p-1):Oc(Z(C," ","")+";",r,n,p-2),s);break;case 59:C+=";";default:if(Ri(P=Nc(C,t,n,c,m,i,a,d,w=[],x=[],p),o),u===123)if(m===0)Gi(C,t,P,P,w,o,p,a,x);else switch(h===99&&Oe(C,3)===110?100:h){case 100:case 109:case 115:Gi(e,P,P,r&&Ri(Nc(e,P,P,0,0,i,a,d,i,w=[],p),x),i,x,p,a,r?w:x);break;default:Gi(C,P,P,P,[""],x,0,a,x)}}c=m=S=0,g=f=1,d=C="",p=l;break;case 58:p=1+Pt(C),S=y;default:if(g<1){if(u==123)--g;else if(u==125&&g++==0&&Ch()==125)continue}switch(C+=ll(u),u*g){case 38:f=m>0?1:(C+="\f",-1);break;case 44:a[c++]=(Pt(C)-1)*f,f=1;break;case 64:Tt()===45&&(C+=Xi(it())),h=Tt(),m=p=Pt(d=C+=Ph(Qi())),u++;break;case 45:y===45&&Pt(C)==2&&(g=0)}}return o}function Nc(e,t,n,r,i,o,l,a,s,c,m){for(var p=i-1,h=i===0?o:[""],S=tu(h),y=0,g=0,z=0;y<r;++y)for(var f=0,u=ti(e,p+1,p=vh(g=l[y])),d=e;f<S;++f)(d=f0(g>0?h[f]+" "+u:Z(u,/&\f/g,h[f])))&&(s[z++]=d);return sl(e,t,n,i===0?bs:a,s,c,m)}function Oh(e,t,n){return sl(e,t,n,u0,ll(kh()),ti(e,2,-2),0)}function Oc(e,t,n,r){return sl(e,t,n,eu,ti(e,0,r),ti(e,r+1,-1),r)}function Kn(e,t){for(var n="",r=tu(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function $h(e,t,n,r){switch(e.type){case gh:case eu:return e.return=e.return||e.value;case u0:return"";case c0:return e.return=e.value+"{"+Kn(e.children,r)+"}";case bs:e.value=e.props.join(",")}return Pt(n=Kn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rh(e){var t=tu(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Th(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ih=function(t,n,r){for(var i=0,o=0;i=o,o=Tt(),i===38&&o===12&&(n[r]=1),!ni(o);)it();return ci(t,Je)},Ah=function(t,n){var r=-1,i=44;do switch(ni(i)){case 0:i===38&&Tt()===12&&(n[r]=1),t[r]+=Ih(Je-1,n,r);break;case 2:t[r]+=Xi(i);break;case 4:if(i===44){t[++r]=Tt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ll(i)}while(i=it());return t},Lh=function(t,n){return m0(Ah(p0(t),n))},$c=new WeakMap,Mh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!$c.get(r))&&!i){$c.set(t,!0);for(var o=[],l=Lh(n,o),a=r.props,s=0,c=0;s<l.length;s++)for(var m=0;m<a.length;m++,c++)t.props[c]=o[s]?l[s].replace(/&\f/g,a[m]):a[m]+" "+l[s]}}},jh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function h0(e,t){switch(wh(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+ko+e+Me+e+e;case 6828:case 4268:return X+e+Me+e+e;case 6165:return X+e+Me+"flex-"+e+e;case 5187:return X+e+Z(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Me+"flex-$1$2")+e;case 5443:return X+e+Me+"flex-item-"+Z(e,/flex-|-self/,"")+e;case 4675:return X+e+Me+"flex-line-pack"+Z(e,/align-content|flex-|-self/,"")+e;case 5548:return X+e+Me+Z(e,"shrink","negative")+e;case 5292:return X+e+Me+Z(e,"basis","preferred-size")+e;case 6060:return X+"box-"+Z(e,"-grow","")+X+e+Me+Z(e,"grow","positive")+e;case 4554:return X+Z(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(e)-1-t>6)switch(Oe(e,t+1)){case 109:if(Oe(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+ko+(Oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wa(e,"stretch")?h0(Z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Oe(e,t+1)!==115)break;case 6444:switch(Oe(e,Pt(e)-3-(~Wa(e,"!important")&&10))){case 107:return Z(e,":",":"+X)+e;case 101:return Z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(Oe(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Me+"$2box$3")+e}break;case 5936:switch(Oe(e,t+11)){case 114:return X+e+Me+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Me+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Me+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return X+e+Me+e+e}return e}var Dh=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case eu:t.return=h0(t.value,t.length);break;case c0:return Kn([Sr(t,{value:Z(t.value,"@","@"+X)})],i);case bs:if(t.length)return xh(t.props,function(o){switch(Sh(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Kn([Sr(t,{props:[Z(o,/:(read-\w+)/,":"+ko+"$1")]})],i);case"::placeholder":return Kn([Sr(t,{props:[Z(o,/:(plac\w+)/,":"+X+"input-$1")]}),Sr(t,{props:[Z(o,/:(plac\w+)/,":"+ko+"$1")]}),Sr(t,{props:[Z(o,/:(plac\w+)/,Me+"input-$1")]})],i)}return""})}},Fh=[Dh],Uh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var z=g.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||Fh,o={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var z=g.getAttribute("data-emotion").split(" "),f=1;f<z.length;f++)o[z[f]]=!0;a.push(g)});var s,c=[Mh,jh];{var m,p=[$h,Th(function(g){m.insert(g)})],h=Rh(c.concat(i,p)),S=function(z){return Kn(Nh(z),h)};s=function(z,f,u,d){m=u,S(z?z+"{"+f.styles+"}":f.styles),d&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new hh({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return y.sheet.hydrate(a),y},Vh=!0;function g0(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var nu=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Vh===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},v0=function(t,n,r){nu(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Bh(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Hh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wh=/[A-Z]|^ms/g,Yh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,y0=function(t){return t.charCodeAt(1)===45},Rc=function(t){return t!=null&&typeof t!="boolean"},Ul=Gd(function(e){return y0(e)?e:e.replace(Wh,"-$&").toLowerCase()}),Tc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Yh,function(r,i,o){return Nt={name:i,styles:o,next:Nt},i})}return Hh[t]!==1&&!y0(t)&&typeof n=="number"&&n!==0?n+"px":n};function ri(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Nt={name:n.name,styles:n.styles,next:Nt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Nt={name:r.name,styles:r.styles,next:Nt},r=r.next;var i=n.styles+";";return i}return Qh(e,t,n)}case"function":{if(e!==void 0){var o=Nt,l=n(e);return Nt=o,ri(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Qh(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ri(e,t,n[i])+";";else for(var o in n){var l=n[o];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=o+"{"+t[l]+"}":Rc(l)&&(r+=Ul(o)+":"+Tc(o,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)Rc(l[a])&&(r+=Ul(o)+":"+Tc(o,l[a])+";");else{var s=ri(e,t,l);switch(o){case"animation":case"animationName":{r+=Ul(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Ic=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Nt,ru=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Nt=void 0;var l=t[0];l==null||l.raw===void 0?(i=!1,o+=ri(r,n,l)):o+=l[0];for(var a=1;a<t.length;a++)o+=ri(r,n,t[a]),i&&(o+=l[a]);Ic.lastIndex=0;for(var s="",c;(c=Ic.exec(o))!==null;)s+="-"+c[1];var m=Bh(o)+s;return{name:m,styles:o,next:Nt}},Xh=function(t){return t()},Gh=uu["useInsertionEffect"]?uu["useInsertionEffect"]:!1,w0=Gh||Xh,iu={}.hasOwnProperty,S0=V.createContext(typeof HTMLElement<"u"?Uh({key:"css"}):null);S0.Provider;var x0=function(t){return V.forwardRef(function(n,r){var i=V.useContext(S0);return t(n,i,r)})},k0=V.createContext({}),Qa="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Kh=function(t,n){var r={};for(var i in n)iu.call(n,i)&&(r[i]=n[i]);return r[Qa]=t,r},Zh=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return nu(n,r,i),w0(function(){return v0(n,r,i)}),null},Jh=x0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Qa],o=[r],l="";typeof e.className=="string"?l=g0(t.registered,o,e.className):e.className!=null&&(l=e.className+" ");var a=ru(o,void 0,V.useContext(k0));l+=t.key+"-"+a.name;var s={};for(var c in e)iu.call(e,c)&&c!=="css"&&c!==Qa&&(s[c]=e[c]);return s.ref=n,s.className=l,V.createElement(V.Fragment,null,V.createElement(Zh,{cache:t,serialized:a,isStringTag:typeof i=="string"}),V.createElement(i,s))});function C0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ru(t)}var _=function(){var t=C0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},qh=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var l=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))l=e(o);else{l="";for(var a in o)o[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=o}l&&(i&&(i+=" "),i+=l)}}return i};function bh(e,t,n){var r=[],i=g0(e,r,n);return r.length<2?n:i+t(r)}var eg=function(t){var n=t.cache,r=t.serializedArr;return w0(function(){for(var i=0;i<r.length;i++)v0(n,r[i],!1)}),null},Vl=x0(function(e,t){var n=!1,r=[],i=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];var h=ru(m,t.registered);return r.push(h),nu(t,h,!1),t.key+"-"+h.name},o=function(){for(var c=arguments.length,m=new Array(c),p=0;p<c;p++)m[p]=arguments[p];return bh(t.registered,i,qh(m))},l={css:i,cx:o,theme:V.useContext(k0)},a=e.children(l);return n=!0,V.createElement(V.Fragment,null,V.createElement(eg,{cache:t,serializedArr:r}),a)});function Xa(){return Xa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}function tg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Ga=new Map,Ti=new WeakMap;let Ac=0,ng;function rg(e){return e?(Ti.has(e)||(Ac+=1,Ti.set(e,Ac.toString())),Ti.get(e)):"0"}function ig(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?rg(e.root):e[t]}`).toString()}function og(e){let t=ig(e),n=Ga.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(l=>{l.forEach(a=>{var s;const c=a.isIntersecting&&i.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(s=r.get(a.target))==null||s.forEach(m=>{m(c,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Ga.set(t,n)}return n}function E0(e,t,n={},r=ng){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:i,observer:o,elements:l}=og(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),o.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),Ga.delete(i))}}const lg=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Lc(e){return typeof e.children!="function"}class Mc extends V.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()},this.handleChange=(n,r)=>{n&&this.props.triggerOnce&&this.unobserve(),Lc(this.props)||this.setState({inView:n,entry:r}),this.props.onChange&&this.props.onChange(n,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o,fallbackInView:l}=this.props;this._unobserveCb=E0(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Lc(this.props)){const{inView:o,entry:l}=this.state;return this.props.children({inView:o,entry:l,ref:this.handleNode})}const t=this.props,{children:n,as:r}=t,i=tg(t,lg);return V.createElement(r||"div",Xa({ref:this.handleNode},i),n)}}function _0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:l,initialInView:a,fallbackInView:s,onChange:c}={}){var m;const[p,h]=V.useState(null),S=V.useRef(),[y,g]=V.useState({inView:!!a,entry:void 0});S.current=c,V.useEffect(()=>{if(l||!p)return;let d;return d=E0(p,(w,x)=>{g({inView:w,entry:x}),S.current&&S.current(w,x),x.isIntersecting&&o&&d&&(d(),d=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,p,i,r,o,l,n,s,t]);const z=(m=y.entry)==null?void 0:m.target,f=V.useRef();!p&&z&&!o&&!l&&f.current!==z&&(f.current=z,g({inView:!!a,entry:void 0}));const u=[h,y.inView,y.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var ag=ba;function me(e,t,n){return iu.call(t,"css")?E(Jh,Kh(e,t),n):E(e,t,n)}_`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;_`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;_`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;_`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;_`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var sg=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ug=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cg=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fg=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,dg=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ou=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pg=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,mg=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hg=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gg=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vg=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yg=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wg=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Sg({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ou,iterationCount:i=1}){return C0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function xg(e){return e==null}function kg(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function z0(e,t){return n=>n?e():t()}function Co(e){return z0(e,()=>null)}var ul=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:o=0,keyframes:l=ou,triggerOnce:a=!1,className:s,style:c,childClassName:m,childStyle:p,children:h,onVisibilityChange:S}=e,y=V.useMemo(()=>Sg({keyframes:l,duration:i}),[i,l]);return xg(h)?null:kg(h)?me(Eg,{...e,animationStyles:y,children:String(h)}):br.isFragment(h)?me(P0,{...e,animationStyles:y}):me(ag,{children:V.Children.map(h,(g,z)=>{if(!V.isValidElement(g))return null;const f=r+(t?z*i*n:0);switch(g.type){case"ol":case"ul":return me(Vl,{children:({cx:u})=>me(g.type,{...g.props,className:u(s,g.props.className),style:Object.assign({},c,g.props.style),children:me(ul,{...e,children:g.props.children})})});case"li":return me(Mc,{threshold:o,triggerOnce:a,onChange:S,children:({inView:u,ref:d})=>me(Vl,{children:({cx:w})=>me(g.type,{...g.props,ref:d,className:w(m,g.props.className),css:Co(()=>y)(u),style:Object.assign({},p,g.props.style,{animationDelay:f+"ms"})})})});default:return me(Mc,{threshold:o,triggerOnce:a,onChange:S,children:({inView:u,ref:d})=>me("div",{ref:d,className:s,css:Co(()=>y)(u),style:Object.assign({},c,{animationDelay:f+"ms"}),children:me(Vl,{children:({cx:w})=>me(g.type,{...g.props,className:w(m,g.props.className),style:Object.assign({},p,g.props.style)})})})})}})})},Cg={display:"inline-block",whiteSpace:"pre"},Eg=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:o=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:c,children:m,onVisibilityChange:p}=e,{ref:h,inView:S}=_0({triggerOnce:a,threshold:l,onChange:p});return z0(()=>me("div",{ref:h,className:s,style:Object.assign({},c,Cg),children:m.split("").map((y,g)=>me("span",{css:Co(()=>t)(S),style:{animationDelay:i+g*o*r+"ms"},children:y},g))}),()=>me(P0,{...e,children:m}))(n)},P0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:o,children:l,onVisibilityChange:a}=e,{ref:s,inView:c}=_0({triggerOnce:r,threshold:n,onChange:a});return me("div",{ref:s,className:i,css:Co(()=>t)(c),style:o,children:l})};_`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;_`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;_`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var _g=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,zg=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Pg=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ng=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Og=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,$g=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Rg=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Tg=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ig=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ag=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Lg=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Mg=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,jg=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Dg(e,t,n){switch(n){case"bottom-left":return t?zg:ug;case"bottom-right":return t?Pg:cg;case"down":return e?t?Og:dg:t?Ng:fg;case"left":return e?t?Rg:pg:t?$g:ou;case"right":return e?t?Ig:hg:t?Tg:mg;case"top-left":return t?Ag:gg;case"top-right":return t?Lg:vg;case"up":return e?t?jg:wg:t?Mg:yg;default:return t?_g:sg}}var Fg=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,o=V.useMemo(()=>Dg(t,r,n),[t,n,r]);return me(ul,{keyframes:o,...i})};_`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;_`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;_`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;_`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;var Ug=_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vg=_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Bg=_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Hg=_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Wg=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Yg=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Qg=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Xg=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Gg(e,t){switch(t){case"down":return e?Wg:Ug;case"right":return e?Qg:Bg;case"up":return e?Xg:Hg;case"left":default:return e?Yg:Vg}}var xt=e=>{const{direction:t,reverse:n=!1,...r}=e,i=V.useMemo(()=>Gg(n,t),[t,n]);return me(ul,{keyframes:i,...r})},Kg=_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Zg=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Jg=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,qg=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,bg=_`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,ev=_`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,tv=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,nv=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,rv=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,iv=_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function ov(e,t){switch(t){case"down":return e?tv:Zg;case"left":return e?nv:Jg;case"right":return e?rv:qg;case"up":return e?iv:bg;default:return e?ev:Kg}}var jc=e=>{const{direction:t,reverse:n=!1,...r}=e,i=V.useMemo(()=>ov(n,t),[t,n]);return me(ul,{keyframes:i,...r})};const lv="/assets/profile-baa55f4d.jpg";function av(){return ie(sv,{id:"home",children:[E(xt,{direction:"left",children:ie(uv,{children:[ie("div",{className:"title",children:[E("h1",{children:"Flávio Ferreira"}),E("h4",{children:"(ferreirazdev)"})]}),E("h3",{children:"Desenvolvedor Full Stack"}),ie("div",{className:"description",children:[E("p",{children:"Atuando no mercado há mais de 2 anos, desenvolvendo projetos de alta escalabilidade, que impactam de milhões de usuários por ano."}),E("p",{children:"Utilizando sempre as melhores tecnologias e arquiteturas do mercado para atingir os melhores resultados."}),E("p",{className:"stack",children:"Stack: Golang, Django, React, AWS, Google Cloud, Docker, Kubernetes"})]}),ie("button",{children:["Fale Comigo! ",E(s0,{})," "]}),E(cv,{children:ie("div",{className:"social-icons",children:[E("span",{children:E("a",{href:"https://github.com/ferreirazdev",children:E(fh,{})})}),E("span",{children:E("a",{href:"https://www.linkedin.com/in/flavioferreiraz/",children:E(dh,{})})})]})})]})}),E(xt,{direction:"right",children:E(fv,{children:E("img",{src:lv,alt:"profile"})})})]})}const sv=We.div`
  display: flex;
  gap: 2rem;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`,uv=We.div`
  flex: 1;
  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    font-family: 'Secular One', sans-serif;
    letter-spacing: 2px;
    font-weight: 500;
  }
  h4 {
    font-weight: 500;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    padding-top: 1.2rem;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .description {
    margin-top: 0.5rem;
    max-width: 500px;
  }
  .stack {
    margin-top: 1.5rem;
    font-style: italic;
    text-decoration: underline;
  }
  p {
    line-height: 1.5em;
    margin-top: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`,cv=We.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`,fv=We.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius: 50%;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;function dv(){return E(ba,{children:ie(pv,{children:[E(ah,{}),E(av,{})]})})}const pv=We.div`
  height: 100vh;
  margin-bottom: -100px;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;function mv(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"7.5 4.21 12 6.81 16.5 4.21"}},{tag:"polyline",attr:{points:"7.5 19.79 7.5 14.6 3 12"}},{tag:"polyline",attr:{points:"21 12 16.5 14.6 16.5 19.79"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(e)}function hv(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function gv(e){return qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function vv(e){return qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM456 216c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm576-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm96-152c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48z"}}]})(e)}function yv(e){return qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M384 912h496c17.7 0 32-14.3 32-32V340H384v572zm496-800H384v164h528V144c0-17.7-14.3-32-32-32zm-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z"}}]})(e)}function wv(e){return qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}function Sv(e){return qe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(e)}const Bl=e=>{const{Icon:t,disc:n,title:r}=e;return ie(xv,{children:[E("span",{className:"green",children:E(t,{})}),E("h1",{children:r}),E("p",{children:n})]})},xv=We.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        color: #fff;
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    p{
        color: #fff;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 1.5em;
        font-family: 'Roboto', sans-serif;
    }
`;function kv(){return ie(Cv,{id:"service",children:[ie(xt,{direction:"down",children:[ie("h4",{children:["meus ",E("span",{className:"green",children:"serviços"})]}),E("h1",{children:"Como posso te ajudar?"})]}),ie(Ev,{children:[E(xt,{direction:"left",children:E(Bl,{Icon:yv,title:"Landing Pages",disc:`Sites institucionais (como este que você está agora) 
                        sobre serviços empresariais/pessoais que deseja apresentar
                        ao mundo.`})}),E(xt,{direction:"up",children:E(Bl,{Icon:mv,title:"Web Applications",disc:`Sistemas web complexos com implementação de regras particulares 
                        ao seu negócio/projeto, junto a processamento e armazenamento de dados.
                        Ex: Lojas Virtuais, Redes Sociais...`})}),E(xt,{direction:"right",children:E(Bl,{Icon:vv,title:"Services",disc:`Serviços isolados, mais voltados ao backend, que envolvem processamentos de dados.
                            Ex: Microservices, Web Services, CLI App, Chatbot, Web Scraper...`})})]})]})}const Cv=We.div`
  width: 100%;
  max-width: 1280px;
  color: #fff;
  background: #191923;
  margin: 0 auto;
  padding: 3rem 6rem;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    padding-top: 1rem;
    font-size: 1.5rem;
  }
  h4 {
    font-weight: 500;
  }
`,Ev=We.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;function _v(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}}]})(e)}function zv(e){return qe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"}}]})(e)}function Pv(e){return qe({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"}}]})(e)}function Nv(){return ie(Ov,{id:"footer",children:[ie($v,{children:[E(xt,{direction:"left",delay:1,children:E("h1",{children:"Contato"})}),ie("div",{className:"links",children:[ie("div",{className:"buttonRedirect",children:[E("span",{children:E(s0,{})}),E(xt,{direction:"left",children:E("a",{href:"tel:+4733378901",children:"Enviar uma mensagem"})})]}),ie("div",{className:"buttonRedirect",children:[E(xt,{direction:"left",children:E("span",{children:E(Pv,{})})}),E(xt,{children:E("a",{href:"mailto:miladamiri@gmail.com",children:"ferreirazdev@gmail.com"})})]})]}),E("div",{className:"profiles",children:ie("div",{className:"icons",children:[E(jc,{children:E("span",{children:E("a",{href:"/",children:E(gv,{})})})}),E(jc,{children:E("span",{children:E("a",{href:"/",children:E(wv,{})})})})]})}),E(Fg,{children:E(Rv,{onClick:()=>{window.scroll({top:0,behavior:"smooth"})},children:E(Sv,{})})})]}),E(Tv,{children:E(xt,{direction:"right",children:ie("form",{children:[ie("div",{className:"name",children:[E("span",{children:E(zv,{})}),E("input",{type:"text",placeholder:"Fullname..."})]}),ie("div",{className:"email",children:[E("span",{children:E(_v,{})}),E("input",{type:"email",placeholder:"Email..."})]}),ie("div",{className:"message",children:[E("span",{className:"messageIcon",children:E(hv,{})}),E("textarea",{cols:30,rows:10,placeholder:"Message..."})]}),E("button",{children:"Submit"})]})})})]})}const Ov=We.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`,$v=We.div`
  flex: 1;

  .links {
    margin-top: 1rem;
    h1 {
      font-size: 0.5rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-align: center;
        text-decoration: none;
        color: #fff;
        font-size: 0.8rem;
        font-family: 'Roboto', sans-serif;
         letter-spacing: 1px;
      }
    }

    .buttonRedirect {
      padding: 0.4rem 1rem;
      margin-top: 0.5rem;
      cursor: pointer;
      background-color: #01be96;
      width: 45%;
      border: none;
      color: #fff;
      filter: drop-shadow(0px 10px 10px #01be9551);
      :hover {
        filter: drop-shadow(0px 10px 10px #01be9570);
      }
    }
  }

  .profiles {
    margin-top: 1rem;
    h1 {
      font-size: 0.5rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #01be96;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`,Rv=We.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`,Tv=We.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    color: #fff;
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid #fff;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;function Iv(){return ie(ba,{children:[E(dv,{}),E(kv,{}),E(Nv,{})]})}Hl.createRoot(document.getElementById("root")).render(E(nt.StrictMode,{children:E(Iv,{})}));
