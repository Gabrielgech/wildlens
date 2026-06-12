var ck=Object.defineProperty;var dk=(t,e,n)=>e in t?ck(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Au=(t,e,n)=>dk(t,typeof e!="symbol"?e+"":e,n);function pk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function hk(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Zg={exports:{}},Yl={},ey={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),mk=Symbol.for("react.portal"),gk=Symbol.for("react.fragment"),yk=Symbol.for("react.strict_mode"),vk=Symbol.for("react.profiler"),bk=Symbol.for("react.provider"),wk=Symbol.for("react.context"),xk=Symbol.for("react.forward_ref"),Nk=Symbol.for("react.suspense"),kk=Symbol.for("react.memo"),Sk=Symbol.for("react.lazy"),Jh=Symbol.iterator;function Ek(t){return t===null||typeof t!="object"?null:(t=Jh&&t[Jh]||t["@@iterator"],typeof t=="function"?t:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ny=Object.assign,ry={};function ua(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}ua.prototype.isReactComponent={};ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=ua.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}var yp=gp.prototype=new sy;yp.constructor=gp;ny(yp,ua.prototype);yp.isPureReactComponent=!0;var Zh=Array.isArray,ay=Object.prototype.hasOwnProperty,vp={current:null},oy={key:!0,ref:!0,__self:!0,__source:!0};function iy(t,e,n){var r,s={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)ay.call(e,r)&&!oy.hasOwnProperty(r)&&(s[r]=e[r]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:Ro,type:t,key:a,ref:o,props:s,_owner:vp.current}}function _k(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function Tk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var em=/\/+/g;function Iu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Tk(""+t.key):e.toString(36)}function $i(t,e,n,r,s){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case mk:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Iu(o,0):r,Zh(s)?(n="",t!=null&&(n=t.replace(em,"$&/")+"/"),$i(s,e,n,"",function(u){return u})):s!=null&&(bp(s)&&(s=_k(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(em,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Zh(t))for(var i=0;i<t.length;i++){a=t[i];var l=r+Iu(a,i);o+=$i(a,e,n,l,s)}else if(l=Ek(t),typeof l=="function")for(t=l.call(t),i=0;!(a=t.next()).done;)a=a.value,l=r+Iu(a,i++),o+=$i(a,e,n,l,s);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ri(t,e,n){if(t==null)return t;var r=[],s=0;return $i(t,r,"","",function(a){return e.call(n,a,s++)}),r}function Ck(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Ai={transition:null},$k={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:vp};function ly(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ri,forEach:function(t,e,n){ri(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ri(t,function(){e++}),e},toArray:function(t){return ri(t,function(e){return e})||[]},only:function(t){if(!bp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=ua;J.Fragment=gk;J.Profiler=vk;J.PureComponent=gp;J.StrictMode=yk;J.Suspense=Nk;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$k;J.act=ly;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ny({},t.props),s=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=vp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(l in e)ay.call(e,l)&&!oy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&i!==void 0?i[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:Ro,type:t.type,key:s,ref:a,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:wk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bk,_context:t},t.Consumer=t};J.createElement=iy;J.createFactory=function(t){var e=iy.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:xk,render:t}};J.isValidElement=bp;J.lazy=function(t){return{$$typeof:Sk,_payload:{_status:-1,_result:t},_init:Ck}};J.memo=function(t,e){return{$$typeof:kk,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Ai.transition;Ai.transition={};try{t()}finally{Ai.transition=e}};J.unstable_act=ly;J.useCallback=function(t,e){return lt.current.useCallback(t,e)};J.useContext=function(t){return lt.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};J.useEffect=function(t,e){return lt.current.useEffect(t,e)};J.useId=function(){return lt.current.useId()};J.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return lt.current.useMemo(t,e)};J.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};J.useRef=function(t){return lt.current.useRef(t)};J.useState=function(t){return lt.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return lt.current.useTransition()};J.version="18.3.1";ey.exports=J;var A=ey.exports;const wp=fk(A),Ak=pk({__proto__:null,default:wp},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ik=A,Dk=Symbol.for("react.element"),jk=Symbol.for("react.fragment"),Ok=Object.prototype.hasOwnProperty,Pk=Ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fk={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ok.call(e,r)&&!Fk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Dk,type:t,key:a,ref:o,props:s,_owner:Pk.current}}Yl.Fragment=jk;Yl.jsx=uy;Yl.jsxs=uy;Zg.exports=Yl;var v=Zg.exports,cy={exports:{}},Tt={},dy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,U){var Q=L.length;L.push(U);e:for(;0<Q;){var me=Q-1>>>1,$e=L[me];if(0<s($e,U))L[me]=U,L[Q]=$e,Q=me;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var U=L[0],Q=L.pop();if(Q!==U){L[0]=Q;e:for(var me=0,$e=L.length,Bt=$e>>>1;me<Bt;){var He=2*(me+1)-1,hs=L[He],tn=He+1,$r=L[tn];if(0>s(hs,Q))tn<$e&&0>s($r,hs)?(L[me]=$r,L[tn]=Q,me=tn):(L[me]=hs,L[He]=Q,me=He);else if(tn<$e&&0>s($r,Q))L[me]=$r,L[tn]=Q,me=tn;else break e}}return U}function s(L,U){var Q=L.sortIndex-U.sortIndex;return Q!==0?Q:L.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();t.unstable_now=function(){return o.now()-i}}var l=[],u=[],c=1,d=null,p=3,f=!1,m=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=L)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function k(L){if(g=!1,x(L),!m)if(n(l)!==null)m=!0,de(_);else{var U=n(u);U!==null&&re(k,U.startTime-L)}}function _(L,U){m=!1,g&&(g=!1,y(I),I=-1),f=!0;var Q=p;try{for(x(U),d=n(l);d!==null&&(!(d.expirationTime>U)||L&&!P());){var me=d.callback;if(typeof me=="function"){d.callback=null,p=d.priorityLevel;var $e=me(d.expirationTime<=U);U=t.unstable_now(),typeof $e=="function"?d.callback=$e:d===n(l)&&r(l),x(U)}else r(l);d=n(l)}if(d!==null)var Bt=!0;else{var He=n(u);He!==null&&re(k,He.startTime-U),Bt=!1}return Bt}finally{d=null,p=Q,f=!1}}var $=!1,T=null,I=-1,D=5,O=-1;function P(){return!(t.unstable_now()-O<D)}function V(){if(T!==null){var L=t.unstable_now();O=L;var U=!0;try{U=T(!0,L)}finally{U?W():($=!1,T=null)}}else $=!1}var W;if(typeof b=="function")W=function(){b(V)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ne=K.port2;K.port1.onmessage=V,W=function(){ne.postMessage(null)}}else W=function(){w(V,0)};function de(L){T=L,$||($=!0,W())}function re(L,U){I=w(function(){L(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,de(_))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var Q=p;p=U;try{return L()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,U){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=p;p=L;try{return U()}finally{p=Q}},t.unstable_scheduleCallback=function(L,U,Q){var me=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?me+Q:me):Q=me,L){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=Q+$e,L={id:c++,callback:U,priorityLevel:L,startTime:Q,expirationTime:$e,sortIndex:-1},Q>me?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(g?(y(I),I=-1):g=!0,re(k,Q-me))):(L.sortIndex=$e,e(l,L),m||f||(m=!0,de(_))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var U=p;return function(){var Q=p;p=U;try{return L.apply(this,arguments)}finally{p=Q}}}})(py);dy.exports=py;var Lk=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rk=A,Et=Lk;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fy=new Set,no={};function us(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(no[t]=e,t=0;t<e.length;t++)fy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm={},nm={};function Bk(t){return yc.call(nm,t)?!0:yc.call(tm,t)?!1:zk.test(t)?nm[t]=!0:(tm[t]=!0,!1)}function Mk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vk(t,e,n,r){if(e===null||typeof e>"u"||Mk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,s,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var xp=/[\-:]([a-z])/g;function Np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xp,Np);qe[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xp,Np);qe[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xp,Np);qe[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function kp(t,e,n,r){var s=qe.hasOwnProperty(e)?qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vk(e,n,s,r)&&(n=null),r||s===null?Bk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=Rk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),my=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),rm=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Du;function ja(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var ju=!1;function Ou(t,e){if(!t||ju)return"";ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,i=a.length-1;1<=o&&0<=i&&s[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(s[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||s[o]!==a[i]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=i);break}}}finally{ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ja(t):""}function Uk(t){switch(t.tag){case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ks:return"Portal";case vc:return"Profiler";case Sp:return"StrictMode";case bc:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case my:return(t.displayName||"Context")+".Consumer";case hy:return(t._context.displayName||"Context")+".Provider";case Ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:xc(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return xc(t(e))}catch{}}return null}function Kk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xc(e);case 8:return e===Sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wk(t){var e=yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ai(t){t._valueTracker||(t._valueTracker=Wk(t))}function vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function el(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function by(t,e){e=e.checked,e!=null&&kp(t,"checked",e,!1)}function kc(t,e){by(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sc(t,e,n){(e!=="number"||el(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Oa(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function wy(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oi,Ny=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qk=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){qk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function ky(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function Sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ky(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Hk=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tc(t,e){if(e){if(Hk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Cc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function Tp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ac=null,Fs=null,Ls=null;function lm(t){if(t=Mo(t)){if(typeof Ac!="function")throw Error(F(280));var e=t.stateNode;e&&(e=nu(e),Ac(t.stateNode,t.type,e))}}function Ey(t){Fs?Ls?Ls.push(t):Ls=[t]:Fs=t}function _y(){if(Fs){var t=Fs,e=Ls;if(Ls=Fs=null,lm(t),e)for(t=0;t<e.length;t++)lm(e[t])}}function Ty(t,e){return t(e)}function Cy(){}var Pu=!1;function $y(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Ty(t,e,n)}finally{Pu=!1,(Fs!==null||Ls!==null)&&(Cy(),_y())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ic=!1;if(In)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{Ic=!1}function Gk(t,e,n,r,s,a,o,i,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Va=!1,tl=null,nl=!1,Dc=null,Qk={onError:function(t){Va=!0,tl=t}};function Xk(t,e,n,r,s,a,o,i,l){Va=!1,tl=null,Gk.apply(Qk,arguments)}function Yk(t,e,n,r,s,a,o,i,l){if(Xk.apply(this,arguments),Va){if(Va){var u=tl;Va=!1,tl=null}else throw Error(F(198));nl||(nl=!0,Dc=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ay(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function um(t){if(cs(t)!==t)throw Error(F(188))}function Jk(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return um(s),t;if(a===r)return um(s),e;a=a.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,i=s.child;i;){if(i===n){o=!0,n=s,r=a;break}if(i===r){o=!0,r=s,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,r=s;break}if(i===r){o=!0,r=a,n=s;break}i=i.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Iy(t){return t=Jk(t),t!==null?Dy(t):null}function Dy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dy(t);if(e!==null)return e;t=t.sibling}return null}var jy=Et.unstable_scheduleCallback,cm=Et.unstable_cancelCallback,Zk=Et.unstable_shouldYield,eS=Et.unstable_requestPaint,Ae=Et.unstable_now,tS=Et.unstable_getCurrentPriorityLevel,Cp=Et.unstable_ImmediatePriority,Oy=Et.unstable_UserBlockingPriority,rl=Et.unstable_NormalPriority,nS=Et.unstable_LowPriority,Py=Et.unstable_IdlePriority,Jl=null,on=null;function rS(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:oS,sS=Math.log,aS=Math.LN2;function oS(t){return t>>>=0,t===0?32:31-(sS(t)/aS|0)|0}var ii=64,li=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var i=o&~s;i!==0?r=Pa(i):(a&=o,a!==0&&(r=Pa(a)))}else o=n&~s,o!==0?r=Pa(o):a!==0&&(r=Pa(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,a=e&-e,s>=a||s===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),s=1<<n,r|=t[n],e&=~s;return r}function iS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Ht(a),i=1<<o,l=s[o];l===-1?(!(i&n)||i&r)&&(s[o]=iS(i,e)):l<=e&&(t.expiredLanes|=i),a&=~i}}function jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fy(){var t=ii;return ii<<=1,!(ii&4194240)&&(ii=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function uS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Ht(n),a=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~a}}function $p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var oe=0;function Ly(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ry,Ap,zy,By,My,Oc=!1,ui=[],nr=null,rr=null,sr=null,ao=new Map,oo=new Map,Gn=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Na(t,e,n,r,s,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},e!==null&&(e=Mo(e),e!==null&&Ap(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function dS(t,e,n,r,s){switch(e){case"focusin":return nr=Na(nr,t,e,n,r,s),!0;case"dragenter":return rr=Na(rr,t,e,n,r,s),!0;case"mouseover":return sr=Na(sr,t,e,n,r,s),!0;case"pointerover":var a=s.pointerId;return ao.set(a,Na(ao.get(a)||null,t,e,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,oo.set(a,Na(oo.get(a)||null,t,e,n,r,s)),!0}return!1}function Vy(t){var e=Lr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ay(n),e!==null){t.blockedOn=e,My(t.priority,function(){zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ii(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=Mo(n),e!==null&&Ap(e),t.blockedOn=n,!1;e.shift()}return!0}function pm(t,e,n){Ii(t)&&n.delete(e)}function pS(){Oc=!1,nr!==null&&Ii(nr)&&(nr=null),rr!==null&&Ii(rr)&&(rr=null),sr!==null&&Ii(sr)&&(sr=null),ao.forEach(pm),oo.forEach(pm)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,Oc||(Oc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,pS)))}function io(t){function e(s){return ka(s,t)}if(0<ui.length){ka(ui[0],t);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&ka(nr,t),rr!==null&&ka(rr,t),sr!==null&&ka(sr,t),ao.forEach(e),oo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Vy(n),n.blockedOn===null&&Gn.shift()}var Rs=Rn.ReactCurrentBatchConfig,al=!0;function fS(t,e,n,r){var s=oe,a=Rs.transition;Rs.transition=null;try{oe=1,Ip(t,e,n,r)}finally{oe=s,Rs.transition=a}}function hS(t,e,n,r){var s=oe,a=Rs.transition;Rs.transition=null;try{oe=4,Ip(t,e,n,r)}finally{oe=s,Rs.transition=a}}function Ip(t,e,n,r){if(al){var s=Pc(t,e,n,r);if(s===null)qu(t,e,r,ol,n),dm(t,r);else if(dS(s,t,e,n,r))r.stopPropagation();else if(dm(t,r),e&4&&-1<cS.indexOf(t)){for(;s!==null;){var a=Mo(s);if(a!==null&&Ry(a),a=Pc(t,e,n,r),a===null&&qu(t,e,r,ol,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else qu(t,e,r,null,n)}}var ol=null;function Pc(t,e,n,r){if(ol=null,t=Tp(r),t=Lr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ay(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function Uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tS()){case Cp:return 1;case Oy:return 4;case rl:case nS:return 16;case Py:return 536870912;default:return 16}default:return 16}}var Yn=null,Dp=null,Di=null;function Ky(){if(Di)return Di;var t,e=Dp,n=e.length,r,s="value"in Yn?Yn.value:Yn.textContent,a=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[a-r];r++);return Di=s.slice(t,1<r?1-r:void 0)}function ji(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function fm(){return!1}function Ct(t){function e(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(n=t[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ci:fm,this.isPropagationStopped=fm,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jp=Ct(ca),Bo=ke({},ca,{view:0,detail:0}),mS=Ct(Bo),Lu,Ru,Sa,Zl=ke({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(Lu=t.screenX-Sa.screenX,Ru=t.screenY-Sa.screenY):Ru=Lu=0,Sa=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),hm=Ct(Zl),gS=ke({},Zl,{dataTransfer:0}),yS=Ct(gS),vS=ke({},Bo,{relatedTarget:0}),zu=Ct(vS),bS=ke({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=Ct(bS),xS=ke({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NS=Ct(xS),kS=ke({},ca,{data:0}),mm=Ct(kS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ES={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_S[t])?!!e[t]:!1}function Op(){return TS}var CS=ke({},Bo,{key:function(t){if(t.key){var e=SS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ji(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ES[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Op,charCode:function(t){return t.type==="keypress"?ji(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ji(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$S=Ct(CS),AS=ke({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=Ct(AS),IS=ke({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Op}),DS=Ct(IS),jS=ke({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Ct(jS),PS=ke({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Ct(PS),LS=[9,13,27,32],Pp=In&&"CompositionEvent"in window,Ua=null;In&&"documentMode"in document&&(Ua=document.documentMode);var RS=In&&"TextEvent"in window&&!Ua,Wy=In&&(!Pp||Ua&&8<Ua&&11>=Ua),ym=" ",vm=!1;function qy(t,e){switch(t){case"keyup":return LS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function zS(t,e){switch(t){case"compositionend":return Hy(e);case"keypress":return e.which!==32?null:(vm=!0,ym);case"textInput":return t=e.data,t===ym&&vm?null:t;default:return null}}function BS(t,e){if(Es)return t==="compositionend"||!Pp&&qy(t,e)?(t=Ky(),Di=Dp=Yn=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MS[t.type]:e==="textarea"}function Gy(t,e,n,r){Ey(r),e=il(e,"onChange"),0<e.length&&(n=new jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ka=null,lo=null;function VS(t){a0(t,0)}function eu(t){var e=Cs(t);if(vy(e))return t}function US(t,e){if(t==="change")return e}var Qy=!1;if(In){var Bu;if(In){var Mu="oninput"in document;if(!Mu){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),Mu=typeof wm.oninput=="function"}Bu=Mu}else Bu=!1;Qy=Bu&&(!document.documentMode||9<document.documentMode)}function xm(){Ka&&(Ka.detachEvent("onpropertychange",Xy),lo=Ka=null)}function Xy(t){if(t.propertyName==="value"&&eu(lo)){var e=[];Gy(e,lo,t,Tp(t)),$y(VS,e)}}function KS(t,e,n){t==="focusin"?(xm(),Ka=e,lo=n,Ka.attachEvent("onpropertychange",Xy)):t==="focusout"&&xm()}function WS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(lo)}function qS(t,e){if(t==="click")return eu(e)}function HS(t,e){if(t==="input"||t==="change")return eu(e)}function GS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:GS;function uo(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yc.call(e,s)||!Jt(t[s],e[s]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jy(){for(var t=window,e=el();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=el(t.document)}return e}function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QS(t){var e=Jy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yy(n.ownerDocument.documentElement,n)){if(r!==null&&Fp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!t.extend&&a>r&&(s=r,r=a,a=s),s=km(n,a);var o=km(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XS=In&&"documentMode"in document&&11>=document.documentMode,_s=null,Fc=null,Wa=null,Lc=!1;function Sm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lc||_s==null||_s!==el(r)||(r=_s,"selectionStart"in r&&Fp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&uo(Wa,r)||(Wa=r,r=il(Fc,"onSelect"),0<r.length&&(e=new jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function di(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Vu={},Zy={};In&&(Zy=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function tu(t){if(Vu[t])return Vu[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zy)return Vu[t]=e[n];return t}var e0=tu("animationend"),t0=tu("animationiteration"),n0=tu("animationstart"),r0=tu("transitionend"),s0=new Map,Em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){s0.set(t,e),us(e,[t])}for(var Uu=0;Uu<Em.length;Uu++){var Ku=Em[Uu],YS=Ku.toLowerCase(),JS=Ku[0].toUpperCase()+Ku.slice(1);wr(YS,"on"+JS)}wr(e0,"onAnimationEnd");wr(t0,"onAnimationIteration");wr(n0,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(r0,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));us("onBeforeInput",["compositionend","keypress","textInput","paste"]);us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function _m(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Yk(r,e,void 0,t),t.currentTarget=null}function a0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var i=r[o],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==a&&s.isPropagationStopped())break e;_m(s,i,u),a=l}else for(o=0;o<r.length;o++){if(i=r[o],l=i.instance,u=i.currentTarget,i=i.listener,l!==a&&s.isPropagationStopped())break e;_m(s,i,u),a=l}}}if(nl)throw t=Dc,nl=!1,Dc=null,t}function pe(t,e){var n=e[Vc];n===void 0&&(n=e[Vc]=new Set);var r=t+"__bubble";n.has(r)||(o0(e,t,2,!1),n.add(r))}function Wu(t,e,n){var r=0;e&&(r|=4),o0(n,t,r,e)}var pi="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[pi]){t[pi]=!0,fy.forEach(function(n){n!=="selectionchange"&&(ZS.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pi]||(e[pi]=!0,Wu("selectionchange",!1,e))}}function o0(t,e,n,r){switch(Uy(e)){case 1:var s=fS;break;case 4:s=hS;break;default:s=Ip}n=s.bind(null,e,n,t),s=void 0,!Ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function qu(t,e,n,r,s){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;i!==null;){if(o=Lr(i),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}i=i.parentNode}}r=r.return}$y(function(){var u=a,c=Tp(n),d=[];e:{var p=s0.get(t);if(p!==void 0){var f=jp,m=t;switch(t){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":f=$S;break;case"focusin":m="focus",f=zu;break;case"focusout":m="blur",f=zu;break;case"beforeblur":case"afterblur":f=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=DS;break;case e0:case t0:case n0:f=wS;break;case r0:f=OS;break;case"scroll":f=mS;break;case"wheel":f=FS;break;case"copy":case"cut":case"paste":f=NS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=gm}var g=(e&4)!==0,w=!g&&t==="scroll",y=g?p!==null?p+"Capture":null:p;g=[];for(var b=u,x;b!==null;){x=b;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,y!==null&&(k=so(b,y),k!=null&&g.push(po(b,k,x)))),w)break;b=b.return}0<g.length&&(p=new f(p,m,null,n,c),d.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",p&&n!==$c&&(m=n.relatedTarget||n.fromElement)&&(Lr(m)||m[Dn]))break e;if((f||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=u,m=m?Lr(m):null,m!==null&&(w=cs(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=u),f!==m)){if(g=hm,k="onMouseLeave",y="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(g=gm,k="onPointerLeave",y="onPointerEnter",b="pointer"),w=f==null?p:Cs(f),x=m==null?p:Cs(m),p=new g(k,b+"leave",f,n,c),p.target=w,p.relatedTarget=x,k=null,Lr(c)===u&&(g=new g(y,b+"enter",m,n,c),g.target=x,g.relatedTarget=w,k=g),w=k,f&&m)t:{for(g=f,y=m,b=0,x=g;x;x=ms(x))b++;for(x=0,k=y;k;k=ms(k))x++;for(;0<b-x;)g=ms(g),b--;for(;0<x-b;)y=ms(y),x--;for(;b--;){if(g===y||y!==null&&g===y.alternate)break t;g=ms(g),y=ms(y)}g=null}else g=null;f!==null&&Tm(d,p,f,g,!1),m!==null&&w!==null&&Tm(d,w,m,g,!0)}}e:{if(p=u?Cs(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var _=US;else if(bm(p))if(Qy)_=HS;else{_=WS;var $=KS}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=qS);if(_&&(_=_(t,u))){Gy(d,_,n,c);break e}$&&$(t,p,u),t==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Sc(p,"number",p.value)}switch($=u?Cs(u):window,t){case"focusin":(bm($)||$.contentEditable==="true")&&(_s=$,Fc=u,Wa=null);break;case"focusout":Wa=Fc=_s=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Sm(d,n,c);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":Sm(d,n,c)}var T;if(Pp)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Es?qy(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Wy&&n.locale!=="ko"&&(Es||I!=="onCompositionStart"?I==="onCompositionEnd"&&Es&&(T=Ky()):(Yn=c,Dp="value"in Yn?Yn.value:Yn.textContent,Es=!0)),$=il(u,I),0<$.length&&(I=new mm(I,t,null,n,c),d.push({event:I,listeners:$}),T?I.data=T:(T=Hy(n),T!==null&&(I.data=T)))),(T=RS?zS(t,n):BS(t,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(c=new mm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}a0(d,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=so(t,n),a!=null&&r.unshift(po(t,a,s)),a=so(t,e),a!=null&&r.push(po(t,a,s))),t=t.return}return r}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tm(t,e,n,r,s){for(var a=e._reactName,o=[];n!==null&&n!==r;){var i=n,l=i.alternate,u=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&u!==null&&(i=u,s?(l=so(n,a),l!=null&&o.unshift(po(n,l,i))):s||(l=so(n,a),l!=null&&o.push(po(n,l,i)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eE=/\r\n?/g,tE=/\u0000|\uFFFD/g;function Cm(t){return(typeof t=="string"?t:""+t).replace(eE,`
`).replace(tE,"")}function fi(t,e,n){if(e=Cm(e),Cm(t)!==e&&n)throw Error(F(425))}function ll(){}var Rc=null,zc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,nE=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,rE=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(sE)}:Mc;function sE(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);io(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),an="__reactFiber$"+da,fo="__reactProps$"+da,Dn="__reactContainer$"+da,Vc="__reactEvents$"+da,aE="__reactListeners$"+da,oE="__reactHandles$"+da;function Lr(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Am(t);t!==null;){if(n=t[an])return n;t=Am(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[an]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function nu(t){return t[fo]||null}var Uc=[],$s=-1;function xr(t){return{current:t}}function he(t){0>$s||(t.current=Uc[$s],Uc[$s]=null,$s--)}function ce(t,e){$s++,Uc[$s]=t.current,t.current=e}var pr={},nt=xr(pr),gt=xr(!1),Qr=pr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function yt(t){return t=t.childContextTypes,t!=null}function ul(){he(gt),he(nt)}function Im(t,e,n){if(nt.current!==pr)throw Error(F(168));ce(nt,e),ce(gt,n)}function i0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,Kk(t)||"Unknown",s));return ke({},n,r)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Qr=nt.current,ce(nt,t),ce(gt,gt.current),!0}function Dm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=i0(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,he(gt),he(nt),ce(nt,t)):he(gt),ce(gt,n)}var gn=null,ru=!1,Gu=!1;function l0(t){gn===null?gn=[t]:gn.push(t)}function iE(t){ru=!0,l0(t)}function Nr(){if(!Gu&&gn!==null){Gu=!0;var t=0,e=oe;try{var n=gn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,ru=!1}catch(s){throw gn!==null&&(gn=gn.slice(t+1)),jy(Cp,Nr),s}finally{oe=e,Gu=!1}}return null}var As=[],Is=0,dl=null,pl=0,It=[],Dt=0,Xr=null,kn=1,Sn="";function Dr(t,e){As[Is++]=pl,As[Is++]=dl,dl=t,pl=e}function u0(t,e,n){It[Dt++]=kn,It[Dt++]=Sn,It[Dt++]=Xr,Xr=t;var r=kn;t=Sn;var s=32-Ht(r)-1;r&=~(1<<s),n+=1;var a=32-Ht(e)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,kn=1<<32-Ht(e)+s|n<<s|r,Sn=a+t}else kn=1<<a|n<<s|r,Sn=t}function Lp(t){t.return!==null&&(Dr(t,1),u0(t,1,0))}function Rp(t){for(;t===dl;)dl=As[--Is],As[Is]=null,pl=As[--Is],As[Is]=null;for(;t===Xr;)Xr=It[--Dt],It[Dt]=null,Sn=It[--Dt],It[Dt]=null,kn=It[--Dt],It[Dt]=null}var St=null,Nt=null,ve=!1,Kt=null;function c0(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Nt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:kn,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Nt=null,!0):!1;default:return!1}}function Kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(ve){var e=Nt;if(e){var n=e;if(!jm(t,e)){if(Kc(t))throw Error(F(418));e=ar(n.nextSibling);var r=St;e&&jm(t,e)?c0(r,n):(t.flags=t.flags&-4097|2,ve=!1,St=t)}}else{if(Kc(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,St=t}}}function Om(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function hi(t){if(t!==St)return!1;if(!ve)return Om(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=Nt)){if(Kc(t))throw d0(),Error(F(418));for(;e;)c0(t,e),e=ar(e.nextSibling)}if(Om(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=St?ar(t.stateNode.nextSibling):null;return!0}function d0(){for(var t=Nt;t;)t=ar(t.nextSibling)}function Qs(){Nt=St=null,ve=!1}function zp(t){Kt===null?Kt=[t]:Kt.push(t)}var lE=Rn.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var i=s.refs;o===null?delete i[a]:i[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function mi(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pm(t){var e=t._init;return e(t._payload)}function p0(t){function e(y,b){if(t){var x=y.deletions;x===null?(y.deletions=[b],y.flags|=16):x.push(b)}}function n(y,b){if(!t)return null;for(;b!==null;)e(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function s(y,b){return y=ur(y,b),y.index=0,y.sibling=null,y}function a(y,b,x){return y.index=x,t?(x=y.alternate,x!==null?(x=x.index,x<b?(y.flags|=2,b):x):(y.flags|=2,b)):(y.flags|=1048576,b)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function i(y,b,x,k){return b===null||b.tag!==6?(b=tc(x,y.mode,k),b.return=y,b):(b=s(b,x),b.return=y,b)}function l(y,b,x,k){var _=x.type;return _===Ss?c(y,b,x.props.children,k,x.key):b!==null&&(b.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Wn&&Pm(_)===b.type)?(k=s(b,x.props),k.ref=Ea(y,b,x),k.return=y,k):(k=Bi(x.type,x.key,x.props,null,y.mode,k),k.ref=Ea(y,b,x),k.return=y,k)}function u(y,b,x,k){return b===null||b.tag!==4||b.stateNode.containerInfo!==x.containerInfo||b.stateNode.implementation!==x.implementation?(b=nc(x,y.mode,k),b.return=y,b):(b=s(b,x.children||[]),b.return=y,b)}function c(y,b,x,k,_){return b===null||b.tag!==7?(b=Ur(x,y.mode,k,_),b.return=y,b):(b=s(b,x),b.return=y,b)}function d(y,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return b=tc(""+b,y.mode,x),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case si:return x=Bi(b.type,b.key,b.props,null,y.mode,x),x.ref=Ea(y,null,b),x.return=y,x;case ks:return b=nc(b,y.mode,x),b.return=y,b;case Wn:var k=b._init;return d(y,k(b._payload),x)}if(Oa(b)||wa(b))return b=Ur(b,y.mode,x,null),b.return=y,b;mi(y,b)}return null}function p(y,b,x,k){var _=b!==null?b.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return _!==null?null:i(y,b,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case si:return x.key===_?l(y,b,x,k):null;case ks:return x.key===_?u(y,b,x,k):null;case Wn:return _=x._init,p(y,b,_(x._payload),k)}if(Oa(x)||wa(x))return _!==null?null:c(y,b,x,k,null);mi(y,x)}return null}function f(y,b,x,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(x)||null,i(b,y,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case si:return y=y.get(k.key===null?x:k.key)||null,l(b,y,k,_);case ks:return y=y.get(k.key===null?x:k.key)||null,u(b,y,k,_);case Wn:var $=k._init;return f(y,b,x,$(k._payload),_)}if(Oa(k)||wa(k))return y=y.get(x)||null,c(b,y,k,_,null);mi(b,k)}return null}function m(y,b,x,k){for(var _=null,$=null,T=b,I=b=0,D=null;T!==null&&I<x.length;I++){T.index>I?(D=T,T=null):D=T.sibling;var O=p(y,T,x[I],k);if(O===null){T===null&&(T=D);break}t&&T&&O.alternate===null&&e(y,T),b=a(O,b,I),$===null?_=O:$.sibling=O,$=O,T=D}if(I===x.length)return n(y,T),ve&&Dr(y,I),_;if(T===null){for(;I<x.length;I++)T=d(y,x[I],k),T!==null&&(b=a(T,b,I),$===null?_=T:$.sibling=T,$=T);return ve&&Dr(y,I),_}for(T=r(y,T);I<x.length;I++)D=f(T,y,I,x[I],k),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?I:D.key),b=a(D,b,I),$===null?_=D:$.sibling=D,$=D);return t&&T.forEach(function(P){return e(y,P)}),ve&&Dr(y,I),_}function g(y,b,x,k){var _=wa(x);if(typeof _!="function")throw Error(F(150));if(x=_.call(x),x==null)throw Error(F(151));for(var $=_=null,T=b,I=b=0,D=null,O=x.next();T!==null&&!O.done;I++,O=x.next()){T.index>I?(D=T,T=null):D=T.sibling;var P=p(y,T,O.value,k);if(P===null){T===null&&(T=D);break}t&&T&&P.alternate===null&&e(y,T),b=a(P,b,I),$===null?_=P:$.sibling=P,$=P,T=D}if(O.done)return n(y,T),ve&&Dr(y,I),_;if(T===null){for(;!O.done;I++,O=x.next())O=d(y,O.value,k),O!==null&&(b=a(O,b,I),$===null?_=O:$.sibling=O,$=O);return ve&&Dr(y,I),_}for(T=r(y,T);!O.done;I++,O=x.next())O=f(T,y,I,O.value,k),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?I:O.key),b=a(O,b,I),$===null?_=O:$.sibling=O,$=O);return t&&T.forEach(function(V){return e(y,V)}),ve&&Dr(y,I),_}function w(y,b,x,k){if(typeof x=="object"&&x!==null&&x.type===Ss&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case si:e:{for(var _=x.key,$=b;$!==null;){if($.key===_){if(_=x.type,_===Ss){if($.tag===7){n(y,$.sibling),b=s($,x.props.children),b.return=y,y=b;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Wn&&Pm(_)===$.type){n(y,$.sibling),b=s($,x.props),b.ref=Ea(y,$,x),b.return=y,y=b;break e}n(y,$);break}else e(y,$);$=$.sibling}x.type===Ss?(b=Ur(x.props.children,y.mode,k,x.key),b.return=y,y=b):(k=Bi(x.type,x.key,x.props,null,y.mode,k),k.ref=Ea(y,b,x),k.return=y,y=k)}return o(y);case ks:e:{for($=x.key;b!==null;){if(b.key===$)if(b.tag===4&&b.stateNode.containerInfo===x.containerInfo&&b.stateNode.implementation===x.implementation){n(y,b.sibling),b=s(b,x.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else e(y,b);b=b.sibling}b=nc(x,y.mode,k),b.return=y,y=b}return o(y);case Wn:return $=x._init,w(y,b,$(x._payload),k)}if(Oa(x))return m(y,b,x,k);if(wa(x))return g(y,b,x,k);mi(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,b!==null&&b.tag===6?(n(y,b.sibling),b=s(b,x),b.return=y,y=b):(n(y,b),b=tc(x,y.mode,k),b.return=y,y=b),o(y)):n(y,b)}return w}var Xs=p0(!0),f0=p0(!1),fl=xr(null),hl=null,Ds=null,Bp=null;function Mp(){Bp=Ds=hl=null}function Vp(t){var e=fl.current;he(fl),t._currentValue=e}function qc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){hl=t,Bp=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Bp!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(hl===null)throw Error(F(308));Ds=t,hl.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Rr=null;function Up(t){Rr===null?Rr=[t]:Rr.push(t)}function h0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Up(e)):(n.next=s.next,s.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,jn(t,n)}return s=r.interleaved,s===null?(e.next=e,Up(r)):(e.next=s.next,s.next=e),r.interleaved=e,jn(t,n)}function Oi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$p(t,n)}}function Fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=e:a=a.next=e}else s=a=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ml(t,e,n,r){var s=t.updateQueue;qn=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var l=i,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==o&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;o=0,c=u=l=null,i=a;do{var p=i.lane,f=i.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:f,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var m=t,g=i;switch(p=e,f=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,p=typeof m=="function"?m.call(f,d,p):m,p==null)break e;d=ke({},d,p);break e;case 2:qn=!0}}i.callback!==null&&i.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[i]:p.push(i))}else f={eventTime:f,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=p;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;p=i,i=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(c===null&&(l=d),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=c,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else a===null&&(s.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=d}}function Lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Vo={},ln=xr(Vo),ho=xr(Vo),mo=xr(Vo);function zr(t){if(t===Vo)throw Error(F(174));return t}function Wp(t,e){switch(ce(mo,e),ce(ho,t),ce(ln,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_c(e,t)}he(ln),ce(ln,e)}function Ys(){he(ln),he(ho),he(mo)}function g0(t){zr(mo.current);var e=zr(ln.current),n=_c(e,t.type);e!==n&&(ce(ho,t),ce(ln,n))}function qp(t){ho.current===t&&(he(ln),he(ho))}var we=xr(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qu=[];function Hp(){for(var t=0;t<Qu.length;t++)Qu[t]._workInProgressVersionPrimary=null;Qu.length=0}var Pi=Rn.ReactCurrentDispatcher,Xu=Rn.ReactCurrentBatchConfig,Yr=0,xe=null,Oe=null,Re=null,yl=!1,qa=!1,go=0,uE=0;function Ge(){throw Error(F(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Qp(t,e,n,r,s,a){if(Yr=a,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pi.current=t===null||t.memoizedState===null?fE:hE,t=n(r,s),qa){a=0;do{if(qa=!1,go=0,25<=a)throw Error(F(301));a+=1,Re=Oe=null,e.updateQueue=null,Pi.current=mE,t=n(r,s)}while(qa)}if(Pi.current=vl,e=Oe!==null&&Oe.next!==null,Yr=0,Re=Oe=xe=null,yl=!1,e)throw Error(F(300));return t}function Xp(){var t=go!==0;return go=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?xe.memoizedState=Re=t:Re=Re.next=t,Re}function Lt(){if(Oe===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Re===null?xe.memoizedState:Re.next;if(e!==null)Re=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Re===null?xe.memoizedState=Re=t:Re=Re.next=t}return Re}function yo(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=Lt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=o=null,l=null,u=a;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=d,o=r):l=l.next=d,xe.lanes|=c,Jr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=i,Jt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do a=s.lane,xe.lanes|=a,Jr|=a,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ju(t){var e=Lt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,a=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=t(a,o.action),o=o.next;while(o!==s);Jt(a,e.memoizedState)||(mt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function y0(){}function v0(t,e){var n=xe,r=Lt(),s=e(),a=!Jt(r.memoizedState,s);if(a&&(r.memoizedState=s,mt=!0),r=r.queue,Yp(x0.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,vo(9,w0.bind(null,n,r,s,e),void 0,null),Me===null)throw Error(F(349));Yr&30||b0(n,e,s)}return s}function b0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,r){e.value=n,e.getSnapshot=r,N0(e)&&k0(t)}function x0(t,e,n){return n(function(){N0(e)&&k0(t)})}function N0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function k0(t){var e=jn(t,1);e!==null&&Gt(e,t,1,-1)}function Rm(t){var e=rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=pE.bind(null,xe,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S0(){return Lt().memoizedState}function Fi(t,e,n,r){var s=rn();xe.flags|=t,s.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var s=Lt();r=r===void 0?null:r;var a=void 0;if(Oe!==null){var o=Oe.memoizedState;if(a=o.destroy,r!==null&&Gp(r,o.deps)){s.memoizedState=vo(e,n,a,r);return}}xe.flags|=t,s.memoizedState=vo(1|e,n,a,r)}function zm(t,e){return Fi(8390656,8,t,e)}function Yp(t,e){return su(2048,8,t,e)}function E0(t,e){return su(4,2,t,e)}function _0(t,e){return su(4,4,t,e)}function T0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,T0.bind(null,e,t),n)}function Jp(){}function $0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function A0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I0(t,e,n){return Yr&21?(Jt(n,e)||(n=Fy(),xe.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function cE(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Xu.transition;Xu.transition={};try{t(!1),e()}finally{oe=n,Xu.transition=r}}function D0(){return Lt().memoizedState}function dE(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j0(t))O0(e,n);else if(n=h0(t,e,n,r),n!==null){var s=at();Gt(n,t,r,s),P0(n,e,r)}}function pE(t,e,n){var r=lr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j0(t))O0(e,s);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,i=a(o,n);if(s.hasEagerState=!0,s.eagerState=i,Jt(i,o)){var l=e.interleaved;l===null?(s.next=s,Up(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=h0(t,e,s,r),n!==null&&(s=at(),Gt(n,t,r,s),P0(n,e,r))}}function j0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function O0(t,e){qa=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$p(t,n)}}var vl={readContext:Ft,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},fE={readContext:Ft,useCallback:function(t,e){return rn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fi(4194308,4,T0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fi(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fi(4,2,t,e)},useMemo:function(t,e){var n=rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dE.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=rn();return t={current:t},e.memoizedState=t},useState:Rm,useDebugValue:Jp,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=Rm(!1),e=t[0];return t=cE.bind(null,t[1]),rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=rn();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Me===null)throw Error(F(349));Yr&30||b0(r,e,n)}s.memoizedState=n;var a={value:n,getSnapshot:e};return s.queue=a,zm(x0.bind(null,r,a,t),[t]),r.flags|=2048,vo(9,w0.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=rn(),e=Me.identifierPrefix;if(ve){var n=Sn,r=kn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hE={readContext:Ft,useCallback:$0,useContext:Ft,useEffect:Yp,useImperativeHandle:C0,useInsertionEffect:E0,useLayoutEffect:_0,useMemo:A0,useReducer:Yu,useRef:S0,useState:function(){return Yu(yo)},useDebugValue:Jp,useDeferredValue:function(t){var e=Lt();return I0(e,Oe.memoizedState,t)},useTransition:function(){var t=Yu(yo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:v0,useId:D0,unstable_isNewReconciler:!1},mE={readContext:Ft,useCallback:$0,useContext:Ft,useEffect:Yp,useImperativeHandle:C0,useInsertionEffect:E0,useLayoutEffect:_0,useMemo:A0,useReducer:Ju,useRef:S0,useState:function(){return Ju(yo)},useDebugValue:Jp,useDeferredValue:function(t){var e=Lt();return Oe===null?e.memoizedState=t:I0(e,Oe.memoizedState,t)},useTransition:function(){var t=Ju(yo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:v0,useId:D0,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),s=lr(t),a=_n(r,s);a.payload=e,n!=null&&(a.callback=n),e=or(t,a,s),e!==null&&(Gt(e,t,s,r),Oi(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),s=lr(t),a=_n(r,s);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=or(t,a,s),e!==null&&(Gt(e,t,s,r),Oi(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=lr(t),s=_n(n,r);s.tag=2,e!=null&&(s.callback=e),e=or(t,s,r),e!==null&&(Gt(e,t,r,n),Oi(e,t,r))}};function Bm(t,e,n,r,s,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(s,a):!0}function F0(t,e,n){var r=!1,s=pr,a=e.contextType;return typeof a=="object"&&a!==null?a=Ft(a):(s=yt(e)?Qr:nt.current,r=e.contextTypes,a=(r=r!=null)?Gs(t,s):pr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=a),e}function Mm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Gc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Kp(t);var a=e.contextType;typeof a=="object"&&a!==null?s.context=Ft(a):(a=yt(e)?Qr:nt.current,s.context=Gs(t,a)),s.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Hc(t,e,a,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&au.enqueueReplaceState(s,s.state,null),ml(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=Uk(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:s,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gE=typeof WeakMap=="function"?WeakMap:Map;function L0(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wl||(wl=!0,ad=r),Qc(t,e)},n}function R0(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qc(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Qc(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=AE.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Km(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var yE=Rn.ReactCurrentOwner,mt=!1;function rt(t,e,n,r){e.child=t===null?f0(e,null,n,r):Xs(e,t.child,n,r)}function Wm(t,e,n,r,s){n=n.render;var a=e.ref;return zs(e,s),r=Qp(t,e,n,r,a,s),n=Xp(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,On(t,e,s)):(ve&&n&&Lp(e),e.flags|=1,rt(t,e,r,s),e.child)}function qm(t,e,n,r,s){if(t===null){var a=n.type;return typeof a=="function"&&!of(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,z0(t,e,a,r,s)):(t=Bi(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return On(t,e,s)}return e.flags|=1,t=ur(a,r),t.ref=e.ref,t.return=e,e.child=t}function z0(t,e,n,r,s){if(t!==null){var a=t.memoizedProps;if(uo(a,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=a,(t.lanes&s)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,On(t,e,s)}return Xc(t,e,n,r,s)}function B0(t,e,n){var r=e.pendingProps,s=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Os,xt),xt|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Os,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ce(Os,xt),xt|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,ce(Os,xt),xt|=r;return rt(t,e,s,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,s){var a=yt(n)?Qr:nt.current;return a=Gs(e,a),zs(e,s),n=Qp(t,e,n,r,a,s),r=Xp(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,On(t,e,s)):(ve&&r&&Lp(e),e.flags|=1,rt(t,e,n,s),e.child)}function Hm(t,e,n,r,s){if(yt(n)){var a=!0;cl(e)}else a=!1;if(zs(e,s),e.stateNode===null)Li(t,e),F0(e,n,r),Gc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,i=e.memoizedProps;o.props=i;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=yt(n)?Qr:nt.current,u=Gs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||l!==u)&&Mm(e,o,r,u),qn=!1;var p=e.memoizedState;o.state=p,ml(e,r,o,s),l=e.memoizedState,i!==r||p!==l||gt.current||qn?(typeof c=="function"&&(Hc(e,n,c,r),l=e.memoizedState),(i=qn||Bm(e,n,i,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m0(t,e),i=e.memoizedProps,u=e.type===e.elementType?i:Vt(e.type,i),o.props=u,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=yt(n)?Qr:nt.current,l=Gs(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||p!==l)&&Mm(e,o,r,l),qn=!1,p=e.memoizedState,o.state=p,ml(e,r,o,s);var m=e.memoizedState;i!==d||p!==m||gt.current||qn?(typeof f=="function"&&(Hc(e,n,f,r),m=e.memoizedState),(u=qn||Bm(e,n,u,r,p,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Yc(t,e,n,r,a,s)}function Yc(t,e,n,r,s,a){M0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Dm(e,n,!1),On(t,e,a);r=e.stateNode,yE.current=e;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,a),e.child=Xs(e,null,i,a)):rt(t,e,i,a),e.memoizedState=r.state,s&&Dm(e,n,!0),e.child}function V0(t){var e=t.stateNode;e.pendingContext?Im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Im(t,e.context,!1),Wp(t,e.containerInfo)}function Gm(t,e,n,r,s){return Qs(),zp(s),e.flags|=256,rt(t,e,n,r),e.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function U0(t,e,n){var r=e.pendingProps,s=we.current,a=!1,o=(e.flags&128)!==0,i;if((i=o)||(i=t!==null&&t.memoizedState===null?!1:(s&2)!==0),i?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ce(we,s&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=lu(o,r,0,null),t=Ur(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Zc(n),e.memoizedState=Jc,t):Zp(e,o));if(s=t.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return vE(t,e,o,r,i,s,n);if(a){a=r.fallback,o=e.mode,s=t.child,i=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ur(s,l),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=ur(i,a):(a=Ur(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?Zc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Jc,r}return a=t.child,t=a.sibling,r=ur(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zp(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gi(t,e,n,r){return r!==null&&zp(r),Xs(e,t.child,null,n),t=Zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vE(t,e,n,r,s,a,o){if(n)return e.flags&256?(e.flags&=-257,r=Zu(Error(F(422))),gi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,s=e.mode,r=lu({mode:"visible",children:r.children},s,0,null),a=Ur(a,s,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Zc(o),e.memoizedState=Jc,a);if(!(e.mode&1))return gi(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(F(419)),r=Zu(a,r,void 0),gi(t,e,o,r)}if(i=(o&t.childLanes)!==0,mt||i){if(r=Me,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,jn(t,s),Gt(r,t,s,-1))}return af(),r=Zu(Error(F(421))),gi(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=IE.bind(null,t),s._reactRetry=e,null):(t=a.treeContext,Nt=ar(s.nextSibling),St=e,ve=!0,Kt=null,t!==null&&(It[Dt++]=kn,It[Dt++]=Sn,It[Dt++]=Xr,kn=t.id,Sn=t.overflow,Xr=e),e=Zp(e,r.children),e.flags|=4096,e)}function Qm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qc(t.return,e,n)}function ec(t,e,n,r,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function K0(t,e,n){var r=e.pendingProps,s=r.revealOrder,a=r.tail;if(rt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qm(t,n,e);else if(t.tag===19)Qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ec(e,!1,s,n,a);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&gl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ec(e,!0,n,null,a);break;case"together":ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Li(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bE(t,e,n){switch(e.tag){case 3:V0(e),Qs();break;case 5:g0(e);break;case 1:yt(e.type)&&cl(e);break;case 4:Wp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ce(fl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?U0(t,e,n):(ce(we,we.current&1),t=On(t,e,n),t!==null?t.sibling:null);ce(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return K0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ce(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,B0(t,e,n)}return On(t,e,n)}var W0,ed,q0,H0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};q0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,zr(ln.current);var a=null;switch(n){case"input":s=Nc(t,s),r=Nc(t,r),a=[];break;case"select":s=ke({},s,{value:void 0}),r=ke({},r,{value:void 0}),a=[];break;case"textarea":s=Ec(t,s),r=Ec(t,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ll)}Tc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(i=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&i[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),a||i===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};H0=function(t,e,n,r){n!==r&&(e.flags|=4)};function _a(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wE(t,e,n){var r=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return yt(e.type)&&ul(),Qe(e),null;case 3:return r=e.stateNode,Ys(),he(gt),he(nt),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(ld(Kt),Kt=null))),ed(t,e),Qe(e),null;case 5:qp(e);var s=zr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Qe(e),null}if(t=zr(ln.current),hi(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[an]=e,r[fo]=a,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<Fa.length;s++)pe(Fa[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":sm(r,a),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},pe("invalid",r);break;case"textarea":om(r,a),pe("invalid",r)}Tc(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&fi(r.textContent,i,t),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&fi(r.textContent,i,t),s=["children",""+i]):no.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ai(r),am(r,a,!0);break;case"textarea":ai(r),im(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ll)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[fo]=r,W0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Fa.length;s++)pe(Fa[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":sm(t,r),s=Nc(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ke({},r,{value:void 0}),pe("invalid",t);break;case"textarea":om(t,r),s=Ec(t,r),pe("invalid",t);break;default:s=r}Tc(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="style"?Sy(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ny(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(no.hasOwnProperty(a)?l!=null&&a==="onScroll"&&pe("scroll",t):l!=null&&kp(t,a,l,o))}switch(n){case"input":ai(t),am(t,r,!1);break;case"textarea":ai(t),im(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Ps(t,!!r.multiple,a,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)H0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=zr(mo.current),zr(ln.current),hi(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(a=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:fi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fi(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return Qe(e),null;case 13:if(he(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Nt!==null&&e.mode&1&&!(e.flags&128))d0(),Qs(),e.flags|=98560,a=!1;else if(a=hi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(F(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[an]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),a=!1}else Kt!==null&&(ld(Kt),Kt=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Pe===0&&(Pe=3):af())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Ys(),ed(t,e),t===null&&co(e.stateNode.containerInfo),Qe(e),null;case 10:return Vp(e.type._context),Qe(e),null;case 17:return yt(e.type)&&ul(),Qe(e),null;case 19:if(he(we),a=e.memoizedState,a===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)_a(a,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gl(t),o!==null){for(e.flags|=128,_a(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(we,we.current&1|2),e.child}t=t.sibling}a.tail!==null&&Ae()>Zs&&(e.flags|=128,r=!0,_a(a,!1),e.lanes=4194304)}else{if(!r)if(t=gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ve)return Qe(e),null}else 2*Ae()-a.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,_a(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ae(),e.sibling=null,n=we.current,ce(we,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function xE(t,e){switch(Rp(e),e.tag){case 1:return yt(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),he(gt),he(nt),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qp(e),null;case 13:if(he(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(we),null;case 4:return Ys(),null;case 10:return Vp(e.type._context),null;case 22:case 23:return sf(),null;case 24:return null;default:return null}}var yi=!1,Ye=!1,NE=typeof WeakSet=="function"?WeakSet:Set,B=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Xm=!1;function kE(t,e){if(Rc=al,t=Jy(),Fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var f;d!==n||s!==0&&d.nodeType!==3||(i=o+s),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===t)break t;if(p===n&&++u===s&&(i=o),p===a&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}n=i===-1||l===-1?null:{start:i,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:t,selectionRange:n},al=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,w=m.memoizedState,y=e.stateNode,b=y.getSnapshotBeforeUpdate(e.elementType===e.type?g:Vt(e.type,g),w);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){Te(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return m=Xm,Xm=!1,m}function Ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var a=s.destroy;s.destroy=void 0,a!==void 0&&td(e,n,a)}s=s.next}while(s!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[fo],delete e[Vc],delete e[aE],delete e[oE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ll));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var Ue=null,Ut=!1;function Mn(t,e,n){for(n=n.child;n!==null;)X0(t,e,n),n=n.sibling}function X0(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Ye||js(n,e);case 6:var r=Ue,s=Ut;Ue=null,Mn(t,e,n),Ue=r,Ut=s,Ue!==null&&(Ut?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ut?(t=Ue,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),io(t)):Hu(Ue,n.stateNode));break;case 4:r=Ue,s=Ut,Ue=n.stateNode.containerInfo,Ut=!0,Mn(t,e,n),Ue=r,Ut=s;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&td(n,e,o),s=s.next}while(s!==r)}Mn(t,e,n);break;case 1:if(!Ye&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Te(n,e,i)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,Mn(t,e,n),Ye=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NE),e.forEach(function(r){var s=DE.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=t,o=e,i=o;e:for(;i!==null;){switch(i.tag){case 5:Ue=i.stateNode,Ut=!1;break e;case 3:Ue=i.stateNode.containerInfo,Ut=!0;break e;case 4:Ue=i.stateNode.containerInfo,Ut=!0;break e}i=i.return}if(Ue===null)throw Error(F(160));X0(a,o,s),Ue=null,Ut=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Te(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y0(e,t),e=e.sibling}function Y0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),nn(t),r&4){try{Ha(3,t,t.return),ou(3,t)}catch(g){Te(t,t.return,g)}try{Ha(5,t,t.return)}catch(g){Te(t,t.return,g)}}break;case 1:Mt(e,t),nn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(Mt(e,t),nn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var s=t.stateNode;try{ro(s,"")}catch(g){Te(t,t.return,g)}}if(r&4&&(s=t.stateNode,s!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,i=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&by(s,a),Cc(i,o);var u=Cc(i,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Sy(s,d):c==="dangerouslySetInnerHTML"?Ny(s,d):c==="children"?ro(s,d):kp(s,c,d,u)}switch(i){case"input":kc(s,a);break;case"textarea":wy(s,a);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?Ps(s,!!a.multiple,f,!1):p!==!!a.multiple&&(a.defaultValue!=null?Ps(s,!!a.multiple,a.defaultValue,!0):Ps(s,!!a.multiple,a.multiple?[]:"",!1))}s[fo]=a}catch(g){Te(t,t.return,g)}}break;case 6:if(Mt(e,t),nn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,a=t.memoizedProps;try{s.nodeValue=a}catch(g){Te(t,t.return,g)}}break;case 3:if(Mt(e,t),nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(g){Te(t,t.return,g)}break;case 4:Mt(e,t),nn(t);break;case 13:Mt(e,t),nn(t),s=t.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(nf=Ae())),r&4&&Jm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(u=Ye)||c,Mt(e,t),Ye=u):Mt(e,t),nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(p=B,f=p.child,p.tag){case 0:case 11:case 14:case 15:Ha(4,p,p.return);break;case 1:js(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){Te(r,n,g)}}break;case 5:js(p,p.return);break;case 22:if(p.memoizedState!==null){eg(d);continue}}f!==null?(f.return=p,B=f):eg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{s=d.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=ky("display",o))}catch(g){Te(t,t.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Te(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mt(e,t),nn(t),r&4&&Jm(t);break;case 21:break;default:Mt(e,t),nn(t)}}function nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ro(s,""),r.flags&=-33);var a=Ym(t);sd(t,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Ym(t);rd(t,i,o);break;default:throw Error(F(161))}}catch(l){Te(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SE(t,e,n){B=t,J0(t)}function J0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yi;if(!o){var i=s.alternate,l=i!==null&&i.memoizedState!==null||Ye;i=yi;var u=Ye;if(yi=o,(Ye=l)&&!u)for(B=s;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?tg(s):l!==null?(l.return=o,B=l):tg(s);for(;a!==null;)B=a,J0(a),a=a.sibling;B=s,yi=i,Ye=u}Zm(t)}else s.subtreeFlags&8772&&a!==null?(a.return=s,B=a):Zm(t)}}function Zm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Lm(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lm(e,o,n)}break;case 5:var i=e.stateNode;if(n===null&&e.flags&4){n=i;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&io(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ye||e.flags&512&&nd(e)}catch(p){Te(e,e.return,p)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function eg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function tg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){Te(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Te(e,s,l)}}var a=e.return;try{nd(e)}catch(l){Te(e,a,l)}break;case 5:var o=e.return;try{nd(e)}catch(l){Te(e,o,l)}}}catch(l){Te(e,e.return,l)}if(e===t){B=null;break}var i=e.sibling;if(i!==null){i.return=e.return,B=i;break}B=e.return}}var EE=Math.ceil,bl=Rn.ReactCurrentDispatcher,ef=Rn.ReactCurrentOwner,Ot=Rn.ReactCurrentBatchConfig,ee=0,Me=null,De=null,Ke=0,xt=0,Os=xr(0),Pe=0,bo=null,Jr=0,iu=0,tf=0,Ga=null,ht=null,nf=0,Zs=1/0,mn=null,wl=!1,ad=null,ir=null,vi=!1,Jn=null,xl=0,Qa=0,od=null,Ri=-1,zi=0;function at(){return ee&6?Ae():Ri!==-1?Ri:Ri=Ae()}function lr(t){return t.mode&1?ee&2&&Ke!==0?Ke&-Ke:lE.transition!==null?(zi===0&&(zi=Fy()),zi):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Uy(t.type)),t):1}function Gt(t,e,n,r){if(50<Qa)throw Qa=0,od=null,Error(F(185));zo(t,n,r),(!(ee&2)||t!==Me)&&(t===Me&&(!(ee&2)&&(iu|=n),Pe===4&&Qn(t,Ke)),vt(t,r),n===1&&ee===0&&!(e.mode&1)&&(Zs=Ae()+500,ru&&Nr()))}function vt(t,e){var n=t.callbackNode;lS(t,e);var r=sl(t,t===Me?Ke:0);if(r===0)n!==null&&cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cm(n),e===1)t.tag===0?iE(ng.bind(null,t)):l0(ng.bind(null,t)),rE(function(){!(ee&6)&&Nr()}),n=null;else{switch(Ly(r)){case 1:n=Cp;break;case 4:n=Oy;break;case 16:n=rl;break;case 536870912:n=Py;break;default:n=rl}n=ov(n,Z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z0(t,e){if(Ri=-1,zi=0,ee&6)throw Error(F(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var r=sl(t,t===Me?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nl(t,r);else{e=r;var s=ee;ee|=2;var a=tv();(Me!==t||Ke!==e)&&(mn=null,Zs=Ae()+500,Vr(t,e));do try{CE();break}catch(i){ev(t,i)}while(!0);Mp(),bl.current=a,ee=s,De!==null?e=0:(Me=null,Ke=0,e=Pe)}if(e!==0){if(e===2&&(s=jc(t),s!==0&&(r=s,e=id(t,s))),e===1)throw n=bo,Vr(t,0),Qn(t,r),vt(t,Ae()),n;if(e===6)Qn(t,r);else{if(s=t.current.alternate,!(r&30)&&!_E(s)&&(e=Nl(t,r),e===2&&(a=jc(t),a!==0&&(r=a,e=id(t,a))),e===1))throw n=bo,Vr(t,0),Qn(t,r),vt(t,Ae()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:jr(t,ht,mn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=nf+500-Ae(),10<e)){if(sl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Mc(jr.bind(null,t,ht,mn),e);break}jr(t,ht,mn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Ht(r);a=1<<o,o=e[o],o>s&&(s=o),r&=~a}if(r=s,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EE(r/1960))-r,10<r){t.timeoutHandle=Mc(jr.bind(null,t,ht,mn),r);break}jr(t,ht,mn);break;case 5:jr(t,ht,mn);break;default:throw Error(F(329))}}}return vt(t,Ae()),t.callbackNode===n?Z0.bind(null,t):null}function id(t,e){var n=Ga;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=ht,ht=n,e!==null&&ld(e)),t}function ld(t){ht===null?ht=t:ht.push.apply(ht,t)}function _E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Jt(a(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~tf,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function ng(t){if(ee&6)throw Error(F(327));Bs();var e=sl(t,0);if(!(e&1))return vt(t,Ae()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var r=jc(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=bo,Vr(t,0),Qn(t,e),vt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,ht,mn),vt(t,Ae()),null}function rf(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Zs=Ae()+500,ru&&Nr())}}function Zr(t){Jn!==null&&Jn.tag===0&&!(ee&6)&&Bs();var e=ee;ee|=1;var n=Ot.transition,r=oe;try{if(Ot.transition=null,oe=1,t)return t()}finally{oe=r,Ot.transition=n,ee=e,!(ee&6)&&Nr()}}function sf(){xt=Os.current,he(Os)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nE(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ul();break;case 3:Ys(),he(gt),he(nt),Hp();break;case 5:qp(r);break;case 4:Ys();break;case 13:he(we);break;case 19:he(we);break;case 10:Vp(r.type._context);break;case 22:case 23:sf()}n=n.return}if(Me=t,De=t=ur(t.current,null),Ke=xt=e,Pe=0,bo=null,tf=iu=Jr=0,ht=Ga=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}Rr=null}return t}function ev(t,e){do{var n=De;try{if(Mp(),Pi.current=vl,yl){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}yl=!1}if(Yr=0,Re=Oe=xe=null,qa=!1,go=0,ef.current=null,n===null||n.return===null){Pe=1,bo=e,De=null;break}e:{var a=t,o=n.return,i=n,l=e;if(e=Ke,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=i,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Um(o);if(f!==null){f.flags&=-257,Km(f,o,i,a,e),f.mode&1&&Vm(a,u,e),e=f,l=u;var m=e.updateQueue;if(m===null){var g=new Set;g.add(l),e.updateQueue=g}else m.add(l);break e}else{if(!(e&1)){Vm(a,u,e),af();break e}l=Error(F(426))}}else if(ve&&i.mode&1){var w=Um(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Km(w,o,i,a,e),zp(Js(l,i));break e}}a=l=Js(l,i),Pe!==4&&(Pe=2),Ga===null?Ga=[a]:Ga.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var y=L0(a,l,e);Fm(a,y);break e;case 1:i=l;var b=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ir===null||!ir.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var k=R0(a,i,e);Fm(a,k);break e}}a=a.return}while(a!==null)}rv(n)}catch(_){e=_,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function tv(){var t=bl.current;return bl.current=vl,t===null?vl:t}function af(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Me===null||!(Jr&268435455)&&!(iu&268435455)||Qn(Me,Ke)}function Nl(t,e){var n=ee;ee|=2;var r=tv();(Me!==t||Ke!==e)&&(mn=null,Vr(t,e));do try{TE();break}catch(s){ev(t,s)}while(!0);if(Mp(),ee=n,bl.current=r,De!==null)throw Error(F(261));return Me=null,Ke=0,Pe}function TE(){for(;De!==null;)nv(De)}function CE(){for(;De!==null&&!Zk();)nv(De)}function nv(t){var e=av(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?rv(t):De=e,ef.current=null}function rv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xE(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,De=null;return}}else if(n=wE(n,e,xt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Pe===0&&(Pe=5)}function jr(t,e,n){var r=oe,s=Ot.transition;try{Ot.transition=null,oe=1,$E(t,e,n,r)}finally{Ot.transition=s,oe=r}return null}function $E(t,e,n,r){do Bs();while(Jn!==null);if(ee&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(uS(t,a),t===Me&&(De=Me=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,ov(rl,function(){return Bs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ot.transition,Ot.transition=null;var o=oe;oe=1;var i=ee;ee|=4,ef.current=null,kE(t,n),Y0(n,t),QS(zc),al=!!Rc,zc=Rc=null,t.current=n,SE(n),eS(),ee=i,oe=o,Ot.transition=a}else t.current=n;if(vi&&(vi=!1,Jn=t,xl=s),a=t.pendingLanes,a===0&&(ir=null),rS(n.stateNode),vt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(wl)throw wl=!1,t=ad,ad=null,t;return xl&1&&t.tag!==0&&Bs(),a=t.pendingLanes,a&1?t===od?Qa++:(Qa=0,od=t):Qa=0,Nr(),null}function Bs(){if(Jn!==null){var t=Ly(xl),e=Ot.transition,n=oe;try{if(Ot.transition=null,oe=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,xl=0,ee&6)throw Error(F(331));var s=ee;for(ee|=4,B=t.current;B!==null;){var a=B,o=a.child;if(B.flags&16){var i=a.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Ha(8,c,a)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var p=c.sibling,f=c.return;if(G0(c),c===u){B=null;break}if(p!==null){p.return=f,B=p;break}B=f}}}var m=a.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}B=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,B=o;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ha(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,B=y;break e}B=a.return}}var b=t.current;for(B=b;B!==null;){o=B;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,B=x;else e:for(o=b;B!==null;){if(i=B,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ou(9,i)}}catch(_){Te(i,i.return,_)}if(i===o){B=null;break e}var k=i.sibling;if(k!==null){k.return=i.return,B=k;break e}B=i.return}}if(ee=s,Nr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{oe=n,Ot.transition=e}}return!1}function rg(t,e,n){e=Js(n,e),e=L0(t,e,1),t=or(t,e,1),e=at(),t!==null&&(zo(t,1,e),vt(t,e))}function Te(t,e,n){if(t.tag===3)rg(t,t,n);else for(;e!==null;){if(e.tag===3){rg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Js(n,t),t=R0(e,t,1),e=or(e,t,1),t=at(),e!==null&&(zo(e,1,t),vt(e,t));break}}e=e.return}}function AE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Ke&n)===n&&(Pe===4||Pe===3&&(Ke&130023424)===Ke&&500>Ae()-nf?Vr(t,0):tf|=n),vt(t,e)}function sv(t,e){e===0&&(t.mode&1?(e=li,li<<=1,!(li&130023424)&&(li=4194304)):e=1);var n=at();t=jn(t,e),t!==null&&(zo(t,e,n),vt(t,n))}function IE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sv(t,n)}function DE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),sv(t,n)}var av;av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,bE(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&u0(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Li(t,e),t=e.pendingProps;var s=Gs(e,nt.current);zs(e,n),s=Qp(null,e,r,t,s,n);var a=Xp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(a=!0,cl(e)):a=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Kp(e),s.updater=au,e.stateNode=s,s._reactInternals=e,Gc(e,r,t,n),e=Yc(null,e,r,!0,a,n)):(e.tag=0,ve&&a&&Lp(e),rt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Li(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=OE(r),t=Vt(r,t),s){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=Hm(null,e,r,t,n);break e;case 11:e=Wm(null,e,r,t,n);break e;case 14:e=qm(null,e,r,Vt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Vt(r,s),Xc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Vt(r,s),Hm(t,e,r,s,n);case 3:e:{if(V0(e),t===null)throw Error(F(387));r=e.pendingProps,a=e.memoizedState,s=a.element,m0(t,e),ml(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){s=Js(Error(F(423)),e),e=Gm(t,e,r,n,s);break e}else if(r!==s){s=Js(Error(F(424)),e),e=Gm(t,e,r,n,s);break e}else for(Nt=ar(e.stateNode.containerInfo.firstChild),St=e,ve=!0,Kt=null,n=f0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===s){e=On(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return g0(e),t===null&&Wc(e),r=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,o=s.children,Bc(r,s)?o=null:a!==null&&Bc(r,a)&&(e.flags|=32),M0(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return U0(t,e,n);case 4:return Wp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Vt(r,s),Wm(t,e,r,s,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,a=e.memoizedProps,o=s.value,ce(fl,r._currentValue),r._currentValue=o,a!==null)if(Jt(a.value,o)){if(a.children===s.children&&!gt.current){e=On(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=_n(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qc(a.return,n,e),i.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),qc(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}rt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,zs(e,n),s=Ft(s),r=r(s),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,s=Vt(r,e.pendingProps),s=Vt(r.type,s),qm(t,e,r,s,n);case 15:return z0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Vt(r,s),Li(t,e),e.tag=1,yt(r)?(t=!0,cl(e)):t=!1,zs(e,n),F0(e,r,s),Gc(e,r,s,n),Yc(null,e,r,!0,t,n);case 19:return K0(t,e,n);case 22:return B0(t,e,n)}throw Error(F(156,e.tag))};function ov(t,e){return jy(t,e)}function jE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new jE(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OE(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ep)return 11;if(t===_p)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bi(t,e,n,r,s,a){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Ur(n.children,s,a,e);case Sp:o=8,s|=8;break;case vc:return t=jt(12,n,e,s|2),t.elementType=vc,t.lanes=a,t;case bc:return t=jt(13,n,e,s),t.elementType=bc,t.lanes=a,t;case wc:return t=jt(19,n,e,s),t.elementType=wc,t.lanes=a,t;case gy:return lu(n,s,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hy:o=10;break e;case my:o=9;break e;case Ep:o=11;break e;case _p:o=14;break e;case Wn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=a,e}function Ur(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=gy,t.lanes=n,t.stateNode={isHidden:!1},t}function tc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function nc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PE(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,s,a,o,i,l){return t=new PE(t,e,n,i,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=jt(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(a),t}function FE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return pr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(yt(n))return i0(t,n,e)}return e}function lv(t,e,n,r,s,a,o,i,l){return t=lf(n,r,!0,t,s,a,o,i,l),t.context=iv(null),n=t.current,r=at(),s=lr(n),a=_n(r,s),a.callback=e??null,or(n,a,s),t.current.lanes=s,zo(t,s,r),vt(t,r),t}function uu(t,e,n,r){var s=e.current,a=at(),o=lr(s);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(s,e,o),t!==null&&(Gt(t,s,o,a),Oi(t,s,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uf(t,e){sg(t,e),(t=t.alternate)&&sg(t,e)}function LE(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}cu.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));uu(t,e,null,null)};cu.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){uu(null,t,null,null)}),e[Dn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=By();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&Vy(t)}};function df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function RE(t,e,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var u=kl(o);a.call(u)}}var o=lv(e,r,t,0,null,!1,!1,"",ag);return t._reactRootContainer=o,t[Dn]=o.current,co(t.nodeType===8?t.parentNode:t),Zr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var u=kl(l);i.call(u)}}var l=lf(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=l,t[Dn]=l.current,co(t.nodeType===8?t.parentNode:t),Zr(function(){uu(e,l,n,r)}),l}function pu(t,e,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var i=s;s=function(){var l=kl(o);i.call(l)}}uu(e,o,t,s)}else o=RE(n,e,t,s,r);return kl(o)}Ry=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&($p(e,n|1),vt(e,Ae()),!(ee&6)&&(Zs=Ae()+500,Nr()))}break;case 13:Zr(function(){var r=jn(t,1);if(r!==null){var s=at();Gt(r,t,1,s)}}),uf(t,1)}};Ap=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=at();Gt(e,t,134217728,n)}uf(t,134217728)}};zy=function(t){if(t.tag===13){var e=lr(t),n=jn(t,e);if(n!==null){var r=at();Gt(n,t,e,r)}uf(t,e)}};By=function(){return oe};My=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Ac=function(t,e,n){switch(e){case"input":if(kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=nu(r);if(!s)throw Error(F(90));vy(r),kc(r,s)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};Ty=rf;Cy=Zr;var zE={usingClientEntryPoint:!1,Events:[Mo,Cs,nu,Ey,_y,rf]},Ta={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BE={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||LE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Jl=bi.inject(BE),on=bi}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(e))throw Error(F(200));return FE(t,e,null,n)};Tt.createRoot=function(t,e){if(!df(t))throw Error(F(299));var n=!1,r="",s=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,s),t[Dn]=e.current,co(t.nodeType===8?t.parentNode:t),new cf(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Iy(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Zr(t)};Tt.hydrate=function(t,e,n){if(!du(e))throw Error(F(200));return pu(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!df(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n??null,s,!1,a,o),t[Dn]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new cu(e)};Tt.render=function(t,e,n){if(!du(e))throw Error(F(200));return pu(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!du(t))throw Error(F(40));return t._reactRootContainer?(Zr(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Tt.unstable_batchedUpdates=rf;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!du(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return pu(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),cy.exports=Tt;var ME=cy.exports,dv,og=ME;dv=og.createRoot,og.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(null,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const ig="popstate";function VE(t){t===void 0&&(t={});function e(r,s){let{pathname:a,search:o,hash:i}=r.location;return ud("",{pathname:a,search:o,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Sl(s)}return KE(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UE(){return Math.random().toString(36).substr(2,8)}function lg(t,e){return{usr:t.state,key:t.key,idx:e}}function ud(t,e,n,r){return n===void 0&&(n=null),wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pa(e):e,{state:n,key:e&&e.key||r||UE()})}function Sl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KE(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,i=Zn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(wo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){i=Zn.Pop;let w=c(),y=w==null?null:w-u;u=w,l&&l({action:i,location:g.location,delta:y})}function p(w,y){i=Zn.Push;let b=ud(g.location,w,y);u=c()+1;let x=lg(b,u),k=g.createHref(b);try{o.pushState(x,"",k)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;s.location.assign(k)}a&&l&&l({action:i,location:g.location,delta:1})}function f(w,y){i=Zn.Replace;let b=ud(g.location,w,y);u=c();let x=lg(b,u),k=g.createHref(b);o.replaceState(x,"",k),a&&l&&l({action:i,location:g.location,delta:0})}function m(w){let y=s.location.origin!=="null"?s.location.origin:s.location.href,b=typeof w=="string"?w:Sl(w);return b=b.replace(/ $/,"%20"),Ce(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let g={get action(){return i},get location(){return t(s,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(ig,d),l=w,()=>{s.removeEventListener(ig,d),l=null}},createHref(w){return e(s,w)},createURL:m,encodeLocation(w){let y=m(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:f,go(w){return o.go(w)}};return g}var ug;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ug||(ug={}));function WE(t,e,n){return n===void 0&&(n="/"),qE(t,e,n)}function qE(t,e,n,r){let s=typeof e=="string"?pa(e):e,a=ea(s.pathname||"/",n);if(a==null)return null;let o=pv(t);HE(o);let i=null,l=s_(a);for(let u=0;i==null&&u<o.length;++u)i=n_(o[u],l);return i}function pv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,i)=>{let l={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=cr([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(Ce(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pv(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:e_(u,a.index),routesMeta:c})};return t.forEach((a,o)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,o);else for(let l of fv(a.path))s(a,o,l)}),e}function fv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=fv(r.join("/")),i=[];return i.push(...o.map(l=>l===""?a:[a,l].join("/"))),s&&i.push(...o),i.map(l=>t.startsWith("/")&&l===""?"/":l)}function HE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:t_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const GE=/^:[\w-]+$/,QE=3,XE=2,YE=1,JE=10,ZE=-2,cg=t=>t==="*";function e_(t,e){let n=t.split("/"),r=n.length;return n.some(cg)&&(r+=ZE),e&&(r+=XE),n.filter(s=>!cg(s)).reduce((s,a)=>s+(GE.test(a)?QE:a===""?YE:JE),r)}function t_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function n_(t,e,n){let{routesMeta:r}=t,s={},a="/",o=[];for(let i=0;i<r.length;++i){let l=r[i],u=i===r.length-1,c=a==="/"?e:e.slice(a.length)||"/",d=cd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d)return null;Object.assign(s,d.params),o.push({params:s,pathname:cr([a,d.pathname]),pathnameBase:u_(cr([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=cr([a,d.pathnameBase]))}return o}function cd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=r_(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:f}=c;if(p==="*"){let g=i[d]||"";o=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}const m=i[d];return f&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:t}}function r_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,l)=>(r.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function s_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ea(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const a_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o_=t=>a_.test(t);function i_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?pa(t):t,a;if(n)if(o_(n))a=n;else{if(n.includes("//")){let o=n;n=gv(n),pf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=dg(n.substring(1),"/"):a=dg(n,e)}else a=e;return{pathname:a,search:c_(r),hash:d_(s)}}function dg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function rc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hv(t,e){let n=l_(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mv(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=pa(t):(s=wo({},t),Ce(!s.pathname||!s.pathname.includes("?"),rc("?","pathname","search",s)),Ce(!s.pathname||!s.pathname.includes("#"),rc("#","pathname","hash",s)),Ce(!s.search||!s.search.includes("#"),rc("#","search","hash",s)));let a=t===""||s.pathname==="",o=a?"/":s.pathname,i;if(o==null)i=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;s.pathname=p.join("/")}i=d>=0?e[d]:"/"}let l=i_(s,i),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gv=t=>t.replace(/\/\/+/g,"/"),cr=t=>gv(t.join("/")),u_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),c_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,d_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function p_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const yv=["post","put","patch","delete"];new Set(yv);const f_=["get",...yv];new Set(f_);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xo.apply(null,arguments)}const fu=A.createContext(null),vv=A.createContext(null),kr=A.createContext(null),hu=A.createContext(null),ds=A.createContext({outlet:null,matches:[],isDataRoute:!1}),bv=A.createContext(null);function h_(t,e){let{relative:n}=e===void 0?{}:e;Uo()||Ce(!1);let{basename:r,navigator:s}=A.useContext(kr),{hash:a,pathname:o,search:i}=mu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:cr([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Uo(){return A.useContext(hu)!=null}function Ko(){return Uo()||Ce(!1),A.useContext(hu).location}function wv(t){A.useContext(kr).static||A.useLayoutEffect(t)}function xv(){let{isDataRoute:t}=A.useContext(ds);return t?T_():m_()}function m_(){Uo()||Ce(!1);let t=A.useContext(fu),{basename:e,future:n,navigator:r}=A.useContext(kr),{matches:s}=A.useContext(ds),{pathname:a}=Ko(),o=JSON.stringify(hv(s,n.v7_relativeSplatPath)),i=A.useRef(!1);return wv(()=>{i.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=mv(u,JSON.parse(o),a,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:cr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,a,t])}function mu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(kr),{matches:s}=A.useContext(ds),{pathname:a}=Ko(),o=JSON.stringify(hv(s,r.v7_relativeSplatPath));return A.useMemo(()=>mv(t,JSON.parse(o),a,n==="path"),[t,o,a,n])}function g_(t,e){return y_(t,e)}function y_(t,e,n,r){Uo()||Ce(!1);let{navigator:s}=A.useContext(kr),{matches:a}=A.useContext(ds),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ko(),c;if(e){var d;let w=typeof e=="string"?pa(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||Ce(!1),c=w}else c=u;let p=c.pathname||"/",f=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=WE(t,{pathname:f}),g=N_(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:cr([l,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:cr([l,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return e&&g?A.createElement(hu.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Zn.Pop}},g):g}function v_(){let t=__(),e=p_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:s},n):null,null)}const b_=A.createElement(v_,null);class w_ extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(ds.Provider,{value:this.props.routeContext},A.createElement(bv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x_(t){let{routeContext:e,match:n,children:r}=t,s=A.useContext(fu);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(ds.Provider,{value:e},r)}function N_(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,i=(s=n)==null?void 0:s.errors;if(i!=null){let c=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);c>=0||Ce(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:f}=n,m=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let f,m=!1,g=null,w=null;n&&(f=i&&d.route.id?i[d.route.id]:void 0,g=d.route.errorElement||b_,l&&(u<0&&p===0?(C_("route-fallback"),m=!0,w=null):u===p&&(m=!0,w=d.route.hydrateFallbackElement||null)));let y=e.concat(o.slice(0,p+1)),b=()=>{let x;return f?x=g:m?x=w:d.route.Component?x=A.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=c,A.createElement(x_,{match:d,routeContext:{outlet:c,matches:y,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?A.createElement(w_,{location:n.location,revalidation:n.revalidation,component:g,error:f,children:b(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):b()},null)}var Nv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Nv||{}),kv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kv||{});function k_(t){let e=A.useContext(fu);return e||Ce(!1),e}function S_(t){let e=A.useContext(vv);return e||Ce(!1),e}function E_(t){let e=A.useContext(ds);return e||Ce(!1),e}function Sv(t){let e=E_(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function __(){var t;let e=A.useContext(bv),n=S_(),r=Sv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function T_(){let{router:t}=k_(Nv.UseNavigateStable),e=Sv(kv.UseNavigateStable),n=A.useRef(!1);return wv(()=>{n.current=!0}),A.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,xo({fromRouteId:e},a)))},[t,e])}const pg={};function C_(t,e,n){pg[t]||(pg[t]=!0)}function $_(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function vs(t){Ce(!1)}function A_(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Zn.Pop,navigator:a,static:o=!1,future:i}=t;Uo()&&Ce(!1);let l=e.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:a,static:o,future:xo({v7_relativeSplatPath:!1},i)}),[l,i,a,o]);typeof r=="string"&&(r=pa(r));let{pathname:c="/",search:d="",hash:p="",state:f=null,key:m="default"}=r,g=A.useMemo(()=>{let w=ea(c,l);return w==null?null:{location:{pathname:w,search:d,hash:p,state:f,key:m},navigationType:s}},[l,c,d,p,f,m,s]);return g==null?null:A.createElement(kr.Provider,{value:u},A.createElement(hu.Provider,{children:n,value:g}))}function I_(t){let{children:e,location:n}=t;return g_(dd(e),n)}new Promise(()=>{});function dd(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,s)=>{if(!A.isValidElement(r))return;let a=[...e,s];if(r.type===A.Fragment){n.push.apply(n,dd(r.props.children,a));return}r.type!==vs&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dd(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(null,arguments)}function Ev(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function D_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function j_(t,e){return t.button===0&&(!e||e==="_self")&&!D_(t)}const O_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],P_=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],F_="6";try{window.__reactRouterVersion=F_}catch{}const L_=A.createContext({isTransitioning:!1}),R_="startTransition",fg=Ak[R_];function z_(t){let{basename:e,children:n,future:r,window:s}=t,a=A.useRef();a.current==null&&(a.current=VE({window:s,v5Compat:!0}));let o=a.current,[i,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(d=>{u&&fg?fg(()=>l(d)):l(d)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.useEffect(()=>$_(r),[r]),A.createElement(A_,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:o,future:r})}const B_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_v=A.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:i,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,p=Ev(e,O_),{basename:f}=A.useContext(kr),m,g=!1;if(typeof u=="string"&&M_.test(u)&&(m=u,B_))try{let x=new URL(window.location.href),k=u.startsWith("//")?new URL(x.protocol+u):new URL(u),_=ea(k.pathname,f);k.origin===x.origin&&_!=null?u=_+k.search+k.hash:g=!0}catch{}let w=h_(u,{relative:s}),y=K_(u,{replace:o,state:i,target:l,preventScrollReset:c,relative:s,viewTransition:d});function b(x){r&&r(x),x.defaultPrevented||y(x)}return A.createElement("a",El({},p,{href:m||w,onClick:g||a?r:b,ref:n,target:l}))}),V_=A.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:a="",end:o=!1,style:i,to:l,viewTransition:u,children:c}=e,d=Ev(e,P_),p=mu(l,{relative:d.relative}),f=Ko(),m=A.useContext(vv),{navigator:g,basename:w}=A.useContext(kr),y=m!=null&&W_(p)&&u===!0,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=f.pathname,k=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;s||(x=x.toLowerCase(),k=k?k.toLowerCase():null,b=b.toLowerCase()),k&&w&&(k=ea(k,w)||k);const _=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let $=x===b||!o&&x.startsWith(b)&&x.charAt(_)==="/",T=k!=null&&(k===b||!o&&k.startsWith(b)&&k.charAt(b.length)==="/"),I={isActive:$,isPending:T,isTransitioning:y},D=$?r:void 0,O;typeof a=="function"?O=a(I):O=[a,$?"active":null,T?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let P=typeof i=="function"?i(I):i;return A.createElement(_v,El({},d,{"aria-current":D,className:O,ref:n,style:P,to:l,viewTransition:u}),typeof c=="function"?c(I):c)});var pd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(pd||(pd={}));var hg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hg||(hg={}));function U_(t){let e=A.useContext(fu);return e||Ce(!1),e}function K_(t,e){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}=e===void 0?{}:e,l=xv(),u=Ko(),c=mu(t,{relative:o});return A.useCallback(d=>{if(j_(d,n)){d.preventDefault();let p=r!==void 0?r:Sl(u)===Sl(c);l(t,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[u,l,c,r,s,n,t,a,o,i])}function W_(t,e){e===void 0&&(e={});let n=A.useContext(L_);n==null&&Ce(!1);let{basename:r}=U_(pd.useViewTransitionState),s=mu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=ea(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ea(n.nextLocation.pathname,r)||n.nextLocation.pathname;return cd(s.pathname,o)!=null||cd(s.pathname,a)!=null}var q_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const H_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ee=(t,e)=>{const n=A.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:o,children:i,...l},u)=>A.createElement("svg",{ref:u,...q_,width:s,height:s,stroke:r,strokeWidth:o?Number(a)*24/Number(s):a,className:`lucide lucide-${H_(t)}`,...l},[...e.map(([c,d])=>A.createElement(c,d)),...(Array.isArray(i)?i:[i])||[]]));return n.displayName=`${t}`,n},Tv=Ee("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),G_=Ee("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Cv=Ee("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),_l=Ee("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),Q_=Ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),X_=Ee("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Y_=Ee("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]),J_=Ee("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Z_=Ee("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Wo=Ee("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),gu=Ee("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),$v=Ee("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),eT=Ee("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]),Av=Ee("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]),Iv=Ee("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),tT=Ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),nT=Ee("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),rT=Ee("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),sT=Ee("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),aT=Ee("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),oT=Ee("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),iT=Ee("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),lT=Ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),uT=[{to:"/identify",label:"Cámara",Icon:_l},{to:"/listen",label:"Audio",Icon:$v},{to:"/journal",label:"Diario",Icon:Cv},{to:"/settings",label:"Ajustes",Icon:tT}];function Dv(){return v.jsx("nav",{className:"fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#C8E6C9] z-50 shadow-[0_-2px_8px_rgba(45,106,79,0.08)]",children:v.jsx("ul",{className:"mx-auto flex h-full max-w-4xl justify-between px-4",children:uT.map(({to:t,label:e,Icon:n})=>v.jsx("li",{className:"flex-1",children:v.jsx(V_,{to:t,className:({isActive:r})=>`group h-full flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${r?"text-[#2D6A4F]":"text-[#9E9E9E]"}`,children:({isActive:r})=>v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"relative flex h-6 w-6 items-center justify-center",children:[r&&v.jsx("span",{className:"absolute top-0 h-1.5 w-1.5 rounded-full bg-[#2D6A4F]"}),v.jsx(n,{className:"h-6 w-6"})]}),v.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em]",children:e})]})})},t))})})}function cT({zone:t,hasGPS:e,onClick:n}){const r=e?t?t.name:"Campeche, México":"Ubicación no disponible",s=e?"bg-green-500":"bg-slate-500";return v.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-800 transition hover:bg-green-100",children:[v.jsx("span",{className:`inline-flex h-2.5 w-2.5 rounded-full ${s}`}),v.jsxs("span",{children:["📍 ",r]})]})}const jv=[{id:"calakmul",name:"Calakmul / Selva Maya",zone:"selva",bounds:{minLat:17.5,maxLat:19,minLng:-90.5,maxLng:-89}},{id:"laguna_terminos",name:"Laguna de Términos",zone:"humedal",bounds:{minLat:18.3,maxLat:19,minLng:-92,maxLng:-90.8}},{id:"ciudad_campeche",name:"Ciudad de Campeche",zone:"costa",bounds:{minLat:19.7,maxLat:20,minLng:-90.6,maxLng:-90.2}},{id:"hopelchen",name:"Hopelchén / Zona Maya",zone:"selva",bounds:{minLat:19.5,maxLat:20.5,minLng:-90.3,maxLng:-89.5}},{id:"champoton",name:"Champotón / Costa Sur",zone:"costa",bounds:{minLat:19,maxLat:19.5,minLng:-91,maxLng:-90.4}}];function dT(t,e){return jv.find(n=>t>=n.bounds.minLat&&t<=n.bounds.maxLat&&e>=n.bounds.minLng&&e<=n.bounds.maxLng)??null}function pT(){const[t,e]=A.useState(null),[n,r]=A.useState(null),[s,a]=A.useState(!1),[o,i]=A.useState(!0),[l,u]=A.useState(null),c=A.useCallback(()=>{if(i(!0),u(null),!navigator.geolocation){a(!1),e(null),r(null),u("Geolocalización no soportada"),i(!1);return}navigator.geolocation.getCurrentPosition(d=>{const{latitude:p,longitude:f}=d.coords,m={lat:p,lng:f},g=dT(p,f);e(m),r(g),a(!0),u(null),i(!1)},d=>{e(null),r(null),a(!1),u(d.message||"Permiso de ubicación denegado"),i(!1)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:3e5})},[]);return A.useEffect(()=>{c()},[c]),{coords:t,zone:n,hasGPS:s,isLoading:o,error:l,refreshLocation:c,setZone:r}}function fT({currentZone:t,hasGPS:e,onUseGPS:n,onSelect:r,onClose:s}){return v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:v.jsxs("div",{className:"w-full max-w-3xl overflow-hidden rounded-[2rem] bg-[#0b1220] shadow-2xl",children:[v.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 p-5",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-textLight/70",children:"Seleccionar ubicación"}),v.jsx("h2",{className:"mt-2 text-2xl font-bold text-white",children:"Elige tu zona"})]}),v.jsx("button",{type:"button",onClick:s,className:"rounded-full bg-white/5 p-2 text-white transition hover:bg-white/10",children:v.jsx(lT,{className:"h-5 w-5"})})]}),v.jsxs("div",{className:"space-y-4 p-5",children:[e?v.jsxs("button",{type:"button",onClick:n,className:"inline-flex items-center gap-2 rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400",children:[v.jsx(gu,{className:"h-4 w-4"})," Usar GPS"]}):null,v.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:jv.map(a=>{const o=(t==null?void 0:t.id)===a.id;return v.jsxs("button",{type:"button",onClick:()=>r(a),className:`rounded-[1.5rem] border p-4 text-left transition ${o?"border-emerald-400 bg-emerald-500/10":"border-white/10 bg-[#111827] hover:border-emerald-400/50"}`,children:[v.jsx("p",{className:"text-lg font-semibold text-white",children:a.name}),v.jsx("span",{className:"mt-3 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-textLight",children:a.zone})]},a.id)})}),v.jsx("div",{className:"flex justify-end gap-3 pt-3",children:v.jsx("button",{type:"button",onClick:s,className:"rounded-3xl bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10",children:"Cancelar"})})]})]})})}const ff=wp.createContext({coords:null,zone:null,hasGPS:!1,isOnline:!0,refreshLocation:()=>{},setZone:()=>{}}),hT=[{title:"EcoScan",desc:"Analiza ecosistemas por foto",icon:_l,to:"/identify"},{title:"FloraID",desc:"Identifica plantas y árboles",icon:Wo,to:"/identify"},{title:"FaunaID",desc:"Identifica animales con protocolo de seguridad",icon:Av,to:"/identify"},{title:"BioListen",desc:"Detecta especies por sonido",icon:$v,to:"/listen"}];function mT({title:t,desc:e,Icon:n,to:r,index:s}){return v.jsxs(_v,{to:r,className:"field-card group flex min-h-[180px] flex-col justify-between transition duration-200 hover:-translate-y-1 hover:border-[#2D6A4F] border-l-4 border-l-[#2D6A4F] animate-fade-slide-in",style:{animationDelay:`${s*.1}s`},children:[v.jsxs("div",{children:[v.jsx(n,{className:"h-12 w-12 text-[#2D6A4F]"}),v.jsx("h3",{className:"mt-4 text-xl font-bold text-[#1A3326]",children:t}),v.jsx("p",{className:"mt-2 text-sm text-[#4A7C59]",children:e})]}),v.jsx("div",{className:"flex items-center justify-end text-[#4A7C59]",children:v.jsx(G_,{className:"h-5 w-5 transition group-hover:text-[#2D6A4F]"})})]})}function gT(){const{zone:t,hasGPS:e,setZone:n,refreshLocation:r}=A.useContext(ff),[s,a]=A.useState(!1);return v.jsxs("div",{className:"min-h-screen bg-background px-4 pb-24 pt-6 text-textLight",children:[v.jsx("section",{className:"relative overflow-hidden rounded-[28px] border border-[#C8E6C9] bg-gradient-to-br from-[#E8F5E9] to-[#F8FBF0] p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:v.jsxs("div",{className:"relative flex flex-col gap-4",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8F5E9] text-[#2D6A4F]",children:v.jsx(Wo,{className:"h-8 w-8"})}),v.jsxs("div",{children:[v.jsx("h1",{className:"text-[32px] font-bold text-[#2D6A4F]",children:"WildLens"}),v.jsx("p",{className:"mt-1 text-base italic text-[#4A7C59]",children:"Nature speaks. WildLens listens."})]})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.jsx(cT,{zone:t,hasGPS:e,onClick:()=>a(!0)}),t?v.jsxs("span",{className:"rounded-full bg-[#E8F5E9] px-4 py-2 text-sm text-[#2D6A4F] font-medium",children:["Zona actual: ",t.name]}):null]})]})}),s?v.jsx(fT,{currentZone:t,hasGPS:e,onUseGPS:()=>{a(!1),r()},onSelect:o=>{n(o),a(!1)},onClose:()=>a(!1)}):null,v.jsx("main",{className:"mt-8 grid gap-4 sm:grid-cols-2",children:hT.map((o,i)=>v.jsx(mT,{title:o.title,desc:o.desc,Icon:o.icon,to:o.to,index:i},o.title))}),v.jsxs("footer",{className:"mt-8 flex flex-col gap-2 text-sm text-[#4A7C59]",children:[v.jsx("p",{children:"Base de datos: 12 fauna · 8 flora · 4 ecosistemas"}),v.jsx("p",{children:"v0.1.0 · Powered by Foundry IQ"})]}),v.jsx(Dv,{})]})}function yT(){const t=A.useRef(null),[e,n]=A.useState(!1),[r,s]=A.useState(null),[a,o]=A.useState(!1),i=A.useRef(null);A.useEffect(()=>()=>{i.current&&i.current.getTracks().forEach(d=>d.stop())},[]);async function l(){s(null),o(!0);try{const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});i.current=d,t.current&&(t.current.srcObject=d,await t.current.play()),n(!0)}catch(d){s((d==null?void 0:d.message)||"Permiso de cámara denegado o no disponible."),n(!1)}finally{o(!1)}}function u(){i.current&&(i.current.getTracks().forEach(d=>d.stop()),i.current=null),t.current&&(t.current.srcObject=null)}async function c(){if(!t.current)throw new Error("Video element not initialized");const d=t.current,p=d.videoWidth||640,f=d.videoHeight||480,m=document.createElement("canvas");m.width=p,m.height=f;const g=m.getContext("2d");if(!g)throw new Error("No se pudo crear el contexto de canvas");g.drawImage(d,0,0,p,f);const w=m.toDataURL("image/jpeg"),y=new Image;return y.src=w,await new Promise(b=>{y.onload=()=>b(),y.onerror=()=>b()}),{image:y,base64:w}}return{videoRef:t,startCamera:l,stopCamera:u,capturePhoto:c,hasPermission:e,error:r,isLoading:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vT=1e-7,bT=1e-4;class Ov{refCount(e){return ct("refCount")}incRef(e){return ct("incRef")}timerAvailable(){return!0}time(e){return ct("time")}read(e){return ct("read")}readSync(e){return ct("readSync")}readToGPU(e,n){return ct("readToGPU")}numDataIds(){return ct("numDataIds")}disposeData(e,n){return ct("disposeData")}write(e,n,r){return ct("write")}move(e,n,r,s,a){return ct("move")}createTensorFromGPUData(e,n,r){return ct("createTensorFromGPUData")}memory(){return ct("memory")}floatPrecision(){return ct("floatPrecision")}epsilon(){return this.floatPrecision()===32?vT:bT}dispose(){return ct("dispose")}}function ct(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function zt(t,e,n=""){S(Pn(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function fa(t){S(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ie(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function wT(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==null&&e[n]!==null&&t[n]!==e[n])return!1;return!0}function Pn(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function No(t){return t%1===0}function Mi(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function yu(t,e){const n=e.length;return t=t==null?e.map((r,s)=>s):[].concat(t),S(t.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),S(t.every(r=>No(r)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(r=>r<0?n+r:r)}function xT(t,e){const n=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||s?null:yu(e,t).sort();let o=0;for(let i=0;i<t.length;++i){if(a!=null){if(a[o]===i&&t[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${t[i]}' is not 1`);(a[o]==null||a[o]>i)&&t[i]===1&&(n.push(t[i]),r.push(i)),a[o]<=i&&o++}t[i]!==1&&(n.push(t[i]),r.push(i))}return{newShape:n,keptDims:r}}function NT(t,e){return Pv(t,e)}function Pv(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function kT(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function ST(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function fd(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function ET(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function hf(t){return typeof t=="string"||t instanceof String}function _T(t){return typeof t=="boolean"}function TT(t){return typeof t=="number"}function vu(t){return Array.isArray(t)?vu(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":TT(t)?"float32":hf(t)?"string":_T(t)?"bool":"float32"}function hd(t){return!!(t&&t.constructor&&t.call&&t.apply)}function mf(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function Fv(t,e,n,r=!1){const s=new Array;if(e.length===1){const a=e[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=n[t+o]}else{const a=e[0],o=e.slice(1),i=o.reduce((l,u)=>l*u)*(r?2:1);for(let l=0;l<a;l++)s[l]=Fv(t+l*i,o,n,r)}return s}function md(t,e,n=!1){if(t.length===0)return e[0];const r=t.reduce((s,a)=>s*a)*(n?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return Fv(0,t,e,n)}function Lv(t,e){const n=gf(t,e);for(let r=0;r<n.length;r++)n[r]=1;return n}function gf(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function $t(t){t.forEach(e=>{S(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function es(t){return t&&t.then&&typeof t.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mg="tfjsflags";class Rv{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=CT,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(Y().getBool("IS_TEST")||Y().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,r){if(this.flagRegistry[e]={evaluationFn:n,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];Y().getBool("IS_TEST")||Y().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(es(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);mg in e&&e[mg].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=AT(s,a)})}}function CT(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>($T(e,r[0],r[1]),r.join("="))),e}function $T(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function AT(t,e){const n=e.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:e}function Y(){return yf}let yf=null;function IT(t){yf=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let sc;function zv(){if(sc==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");sc=t}return sc}function DT(){const t=zv();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function vf(t,e){const n=DT();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}const Bv="Abs",Mv="Acos",Vv="Acosh",bf="Add",Uv="AddN",Kv="All",Wv="Any",qv="ArgMax",Hv="ArgMin",Gv="Asin",Qv="Asinh",Xv="Atan",Yv="Atanh",Jv="Atan2",Zv="AvgPool",eb="AvgPool3D",tb="BatchMatMul",nb="BatchToSpaceND",rb="Bincount",sb="BitwiseAnd",ab="BroadcastArgs",wf="Cast",ob="Ceil",ib="ClipByValue",lb="Complex",ub="ComplexAbs",cb="Concat",db="Conv2D",pb="Conv2DBackpropFilter",fb="Conv2DBackpropInput",hb="Conv3D",mb="Conv3DBackpropInputV2",gb="Cos",yb="Cosh",vb="Cumprod",bb="Cumsum",wb="CropAndResize",xb="DenseBincount",Nb="DepthToSpace",kb="DepthwiseConv2dNative",Sb="DepthwiseConv2dNativeBackpropFilter",Eb="DepthwiseConv2dNativeBackpropInput",_b="Diag",Tb="Dilation2D",Cb="RealDiv",$b="Einsum",Ab="Elu",Ib="Erf",Db="Equal",jb="Exp",Ob="ExpandDims",Pb="Expm1",Fb="FFT",Lb="Fill",Rb="FlipLeftRight",zb="Floor",Bb="FloorDiv",Mb="FusedBatchNorm",Vb="GatherV2",Ub="GatherNd",Kb="Greater",Wb="GreaterEqual",xf="Identity",qb="IFFT",Hb="Imag",Gb="IsFinite",Qb="IsInf",Xb="IsNan",Yb="LeakyRelu",Jb="Less",Zb="LessEqual",ew="LinSpace",tw="Log",nw="Log1p",rw="LogicalAnd",sw="LogicalNot",aw="LogicalOr",ow="LRN",iw="Max",lw="Maximum",uw="MaxPool",cw="MaxPool3D",dw="MaxPoolWithArgmax",pw="Mean",fw="Min",hw="Minimum",mw="MirrorPad",gw="Mod",yw="Multinomial",vw="Multiply",bw="Neg",ww="NotEqual",xw="NonMaxSuppressionV3",Nw="NonMaxSuppressionV4",kw="NonMaxSuppressionV5",Sw="OnesLike",Ew="OneHot",_w="Pack",Tw="PadV2",Cw="Pow",$w="Prelu",Aw="Prod",Iw="RaggedGather",Dw="RaggedRange",jw="RaggedTensorToTensor",Ow="Range",Pw="Real",Fw="Reciprocal",Lw="Relu",Rw="Reshape",zw="ResizeNearestNeighbor",Bw="ResizeBilinear",Mw="Relu6",Vw="Reverse",Uw="Round",Kw="Rsqrt",Ww="ScatterNd",qw="TensorScatterUpdate",Hw="SearchSorted",Gw="Select",Qw="Selu",Xw="Slice",Yw="Sin",Jw="Sinh",Zw="Sign",e1="Sigmoid",t1="Softplus",n1="Sqrt",r1="Sum",s1="SpaceToBatchND",a1="SplitV",o1="Softmax",i1="SparseFillEmptyRows",l1="SparseReshape",u1="SparseSegmentMean",c1="SparseSegmentSum",d1="SparseToDense",p1="SquaredDifference",f1="StaticRegexReplace",h1="StridedSlice",m1="StringNGrams",g1="StringSplit",y1="StringToHashBucketFast",v1="Sub",b1="Tan",w1="Tanh",Nf="Tile",x1="TopK",N1="Transform",Vi="Transpose",k1="Unique",S1="Unpack",E1="UnsortedSegmentSum",_1="ZerosLike",T1="Step",gd="FromPixels",C1="RotateWithOffset",yd="_FusedMatMul",vd="FusedConv2D",bd="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ca(...t){Y().getBool("IS_TEST")||Y().getBool("PROD")||console.warn(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $1=vf("kernelRegistry",()=>new Map),jT=vf("gradRegistry",()=>new Map);function Tl(t,e){const n=OT(t,e);return $1.get(n)}function wd(t){return jT.get(t)}function xd(t){const e=$1.entries(),n=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===t&&n.push(o)}return n}function OT(t,e){return`${e}_${t}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A1(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PT(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function I1(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=ko(t)),Y().getBool("DEBUG")&&kT(t,e),PT(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let r=0;r<n.length;++r)Math.round(t[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${e}`)}function Cl(){return Y().platform.now()}function FT(t,e="utf-8"){return e=e||"utf-8",Y().platform.encode(t,e)}function gg(t,e="utf-8"){return e=e||"utf-8",Y().platform.decode(t,e)}function Rt(t){return Y().platform.isTypedArray!=null?Y().platform.isTypedArray(t):A1(t)}function ko(t,e=[],n=!1){if(e==null&&(e=[]),typeof t=="boolean"||typeof t=="number"||typeof t=="string"||es(t)||t==null||Rt(t)&&n)e.push(t);else if(Array.isArray(t)||Rt(t))for(let r=0;r<t.length;++r)ko(t[r],e,n);else{let r=-1;for(const s of Object.keys(t))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)ko(t[s],e,n)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class LT{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new zT)}profileKernel(e,n,r){let s;const a=()=>{s=r()};let o;const i=Cl();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const u of s)u.dataSync();o=Promise.resolve({kernelMs:Cl()-i})}if(Y().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<s.length;u++){const c=s[u];c.data().then(d=>{RT(d,c.dtype,e)})}return{kernelName:e,outputs:s,inputs:n,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:r,timeMs:s,inputs:a,extraInfo:o}=e;r.forEach(i=>{Promise.all([i.data(),s,o]).then(l=>{this.logger.logKernelProfile(n,i,l[0],l[1],a,l[2])})})}}function RT(t,e,n){if(e!=="float32")return!1;for(let r=0;r<t.length;r++){const s=t[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class zT{logKernelProfile(e,n,r,s,a,o){const i=typeof s=="number"?Mi(`${s}ms`,9):s.error,l=Mi(e,25),u=n.rank,c=n.size,d=Mi(n.shape.toString(),14);let p="";for(const f in a){const m=a[f];if(m!=null){const g=m.shape||n.shape,w=g.length;p+=`${f}: ${w}D ${w>0?g:""} `}}console.log(`%c${l}	%c${i}	%c${u}D ${d}	%c${c}	%c${p}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BT(t,e,n){const r={},s={};for(let l=0;l<e.length;l++)r[e[l].id]=!0;for(let l=0;l<t.length;l++){const u=t[l],c=u.inputs;for(const d in c){const p=c[d];let f=!1;for(let m=0;m<e.length;m++)if(r[p.id]){u.outputs.forEach(g=>r[g.id]=!0),f=!0,s[u.id]=!0;break}if(f)break}}const a={};a[n.id]=!0;const o={};for(let l=t.length-1;l>=0;l--){const u=t[l],c=u.inputs;for(let d=0;d<u.outputs.length;d++)if(a[u.outputs[d].id]){for(const p in c)a[c[p].id]=!0,o[u.id]=!0;break}}const i=[];for(let l=0;l<t.length;l++){const u=t[l];if(s[u.id]&&o[u.id]){const c={};for(const p in u.inputs){const f=u.inputs[p];r[f.id]&&(c[p]=f)}const d=Object.assign({},u);d.inputs=c,d.outputs=u.outputs,i.push(d)}}return i}function MT(t,e,n,r){for(let s=e.length-1;s>=0;s--){const a=e[s],o=[];if(a.outputs.forEach(l=>{const u=t[l.id];u!=null?o.push(u):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const l in a.inputs){if(!(l in i))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(i)}.`);const u=n(()=>i[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const c=a.inputs[l];if(!Pn(u.shape,c.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(t[c.id]==null)t[c.id]=u;else{const d=t[c.id];t[c.id]=r(d,u),d.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yg=20,$a=3,ac=7;function VT(t,e,n,r){const s=mf(e),a=UT(t,e,n,s),o=e.length,i=Ui(t,e,n,s,a),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${o}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(i.map(u=>"    "+u).join(`
`)),l.join(`
`)}function UT(t,e,n,r){const s=Ie(e),a=r[r.length-1],o=new Array(a).fill(0),i=e.length,l=n==="complex64"?Ra(t):t;if(i>1)for(let u=0;u<s/a;u++){const c=u*a;for(let d=0;d<a;d++)o[d]=Math.max(o[d],La(l[c+d],0,n).length)}return o}function La(t,e,n){let r;return Array.isArray(t)?r=`${parseFloat(t[0].toFixed(ac))} + ${parseFloat(t[1].toFixed(ac))}j`:hf(t)?r=`'${t}'`:n==="bool"?r=D1(t):r=parseFloat(t.toFixed(ac)).toString(),Mi(r,e)}function D1(t){return t===0?"false":"true"}function Ui(t,e,n,r,s,a=!0){const o=n==="complex64"?2:1,i=e[0],l=e.length;if(l===0){if(n==="complex64"){const g=Ra(t);return[La(g[0],0,n)]}return n==="bool"?[D1(t[0])]:[t[0].toString()]}if(l===1){if(i>yg){const w=$a*o;let y=Array.from(t.slice(0,w)),b=Array.from(t.slice((i-$a)*o,i*o));return n==="complex64"&&(y=Ra(y),b=Ra(b)),["["+y.map((x,k)=>La(x,s[k],n)).join(", ")+", ..., "+b.map((x,k)=>La(x,s[i-$a+k],n)).join(", ")+"]"]}return["["+(n==="complex64"?Ra(t):Array.from(t)).map((w,y)=>La(w,s[y],n)).join(", ")+"]"]}const u=e.slice(1),c=r.slice(1),d=r[0]*o,p=[];if(i>yg){for(let g=0;g<$a;g++){const w=g*d,y=w+d;p.push(...Ui(t.slice(w,y),u,n,c,s,!1))}p.push("...");for(let g=i-$a;g<i;g++){const w=g*d,y=w+d;p.push(...Ui(t.slice(w,y),u,n,c,s,g===i-1))}}else for(let g=0;g<i;g++){const w=g*d,y=w+d;p.push(...Ui(t.slice(w,y),u,n,c,s,g===i-1))}const f=l===2?",":"";p[0]="["+(i>0?p[0]+f:"");for(let g=1;g<p.length-1;g++)p[g]=" "+p[g]+f;let m=`,
`;for(let g=2;g<l;g++)m+=`
`;return p[p.length-1]=" "+p[p.length-1]+"]"+(a?"":m),p}function Ra(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $l{constructor(e,n,r){if(this.dtype=n,this.shape=e.slice(),this.size=Ie(e),r!=null){const s=r.length;S(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Pv(n,this.size),this.strides=mf(e)}set(e,...n){n.length===0&&(n=[0]),S(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const s of e){if(s<0||s>=this.shape[n]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}n++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(e/this.strides[r]),e-=n[r]*this.strides[r];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return Wt().makeTensor(this.values,this.shape,this.dtype)}}let Wt=null,bs=null;function KT(t){Wt=t}function WT(t){bs=t}class ze{constructor(e,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=Ie(e),this.strides=mf(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return bs.buffer(this.shape,this.dtype,e)}bufferSync(){return bs.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return md(this.shape,e,this.dtype==="complex64")}arraySync(){return md(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=Wt().read(this.dataId);if(this.dtype==="string"){const n=await e;try{return n.map(r=>gg(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Wt().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Wt().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>gg(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Wt().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Wt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return bs.print(this,e)}clone(){return this.throwIfDisposed(),bs.clone(this)}toString(e=!1){const n=this.dataSync();return VT(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),bs.cast(this,e)}variable(e=!0,n,r){return this.throwIfDisposed(),Wt().makeVariable(this,e,n,r)}}Object.defineProperty(ze,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function j1(){return vf("Tensor",()=>ze)}j1();class So extends ze{constructor(e,n,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=n,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Pn(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Wt().disposeTensor(this),this.dataId=e.dataId,Wt().incRef(this,null)}dispose(){Wt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(So,Symbol.hasInstance,{value:t=>t instanceof ze&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Nd;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(Nd||(Nd={}));var kd;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(kd||(kd={}));var Sd;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(Sd||(Sd={}));var Ed;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(Ed||(Ed={}));var _d;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(_d||(_d={}));const qT={float32:Ed,int32:kd,bool:Sd,complex64:_d};function O1(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return qT[t][e]}function P1(t){return t!=null&&typeof t=="object"&&"texture"in t&&t.texture instanceof WebGLTexture}function F1(t){return typeof GPUBuffer<"u"&&t!=null&&typeof t=="object"&&"buffer"in t&&t.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Se(t,e){if(t.dtype===e.dtype)return[t,e];const n=O1(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function HT(t,e){S(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function L1(t){const e=[];return R1(t,e,new Set),e}function R1(t,e,n){if(t==null)return;if(t instanceof ze){e.push(t);return}if(!GT(t))return;const r=t;for(const s in r){const a=r[s];n.has(a)||(n.add(a),R1(a,e,n))}}function GT(t){return Array.isArray(t)||typeof t=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oc(t){return t.kernelName!=null}class vg{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ta{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new vg}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,r=1){return e in this.registryFactory?(Ca(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(e);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new LT(this.backendInstance),!0}setupRegisteredKernels(){xd(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){xd(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Ov)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[e]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Ca(`Initialization of backend ${e} failed`),Ca(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Ca(`Initialization of backend ${e} failed`),Ca(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const r=this.state.tensorInfo.get(n),s=r.backend,a=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=e,e.move(n,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let r=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,n,r){e();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return ta.nextTensorId++}nextVariableId(){return ta.nextVariableId++}clone(e){const n=C.runKernel(xf,{x:e}),r={x:e},s=o=>({x:()=>{const i="float32",l={x:o},u={dtype:i};return C.runKernel(wf,l,u)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,a,{}),n}runKernel(e,n,r){if(this.backendName==null&&this.backend,!(Tl(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,r){const s=this.backend.numDataIds();let a=0;r.forEach(l=>{a+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let n,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let l;const u=oc(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(oc(e)){const{kernelName:m,inputs:g,attrs:w}=e;this.backendName==null&&this.backend;const y=Tl(m,this.backendName);S(y!=null,()=>`Cannot find registered kernel '${m}' for backend '${this.backendName}'`),i=()=>{const b=this.backend.numDataIds();l=y.kernelFunc({inputs:g,attrs:w,backend:this.backend});const x=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(m,b,x);const k=x.map(_=>_.rank!=null?_:this.makeTensorFromTensorInfo(_));if(s){const _=this.getTensorsForGradient(m,g,k);r=this.saveTensorsForBackwardMode(_)}return k}}else{const{forwardFunc:m}=e,g=w=>{s&&(r=w.map(y=>this.keep(this.clone(y))))};i=()=>{const w=this.backend.numDataIds();l=this.tidy(()=>m(this.backend,g));const y=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,w,y),y}}const{inputs:c,attrs:d}=e,p=oc(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(f=this.profiler.profileKernel(u,c,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),n=f.outputs)}),s&&this.addTapeNode(u,c,n,p,r,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(m=>c[m]!=null?c[m].shape:null),outputShapes:n.map(m=>m.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,n,r){const s=wd(e);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let i;s.saveAllInputs?(S(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(u=>n[u])):i=a.map(u=>n[u]);const l=r.filter((u,c)=>o[c]);return i.concat(l)}return[]}makeTensor(e,n,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=e;r==="string"&&hf(e[0])&&(a=e.map(l=>FT(l)));const o=s.write(a,n,r),i=new ze(n,r,o,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const l=this.state.tensorInfo.get(o),u=ET(a);this.state.numBytes+=u-l.bytes,l.bytes=u}return i}makeTensorFromDataId(e,n,r,s){r=r||"float32";const a={dataId:e,shape:n,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(e,n){const{dataId:r,shape:s,dtype:a}=e,o=new ze(s,a,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(e,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const a=new So(e,n,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*fd(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof So||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*fd(e.dtype);this.state.numBytes-=r}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,r,s,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:r,saved:a},l=wd(e);l!=null&&(s=l.gradFunc),s!=null&&(i.gradient=u=>(u=u.map((c,d)=>{if(c==null){const p=r[d],f=gf(p.size,p.dtype);return this.makeTensor(f,p.shape,p.dtype)}return c}),s(u.length>1?u:u[0],a,o))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=L1(e),r=new Set(n.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(e,n,r,s=!1){if(S(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));S(a instanceof ze,()=>"The result y returned by f() must be a tensor.");const o=BT(this.state.activeTape,n,a);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=r??QT(a.shape),MT(i,o,u=>this.tidy(u),XT);const l=n.map(u=>i[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const c of u.saved)c.dispose()}),this.state.activeTape=null),{value:a,grads:l}})}customGrad(e){return S(hd(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{S(n.every(i=>i instanceof ze),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,l)=>{s[l]=i});const a=(i,l)=>(r=e(...n,l),S(r.value instanceof ze,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),S(hd(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,l)=>{const u=r.gradFunc(i,l),c=Array.isArray(u)?u:[u];S(c.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),S(c.every(p=>p instanceof ze),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return c.forEach((p,f)=>{d[f]=()=>p}),d};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}async time(e){const n=Cl(),r=await this.backend.time(e);return r.wallMs=Cl()-n,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new vg;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}ta.nextTensorId=0;ta.nextVariableId=0;function QT(t){const e=Lv(Ie(t),"float32");return C.makeTensor(e,t,"float32")}function z1(){const t=zv();if(t._tfengine==null){const e=new Rv(t);t._tfengine=new ta(e)}return IT(t._tfengine.ENV),KT(()=>t._tfengine),t._tfengine}const C=z1();function XT(t,e){const n={a:t,b:e};return C.runKernel(bf,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YT(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ot=Y();ot.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ot.registerFlag("IS_BROWSER",()=>YT());ot.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ot.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ot.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));ot.registerFlag("PROD",()=>!1);ot.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ot.getBool("DEBUG"));ot.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ot.registerFlag("IS_TEST",()=>!1);ot.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>ot.getBool("DEBUG"));ot.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ot.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ot.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sr(t,e){let n=t;if(Rt(t))return e==="string"?[]:[t.length];if(P1(t)){const s=t.channels||"RGBA";return[t.height,t.width*s.length]}else if(F1(t))return[t.buffer.size/(e==null?4:fd(e))];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||Rt(n)&&e!=="string";)r.push(n.length),n=n[0];return Array.isArray(t)&&Y().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&B1(t,r,[]),r}function B1(t,e,n){if(n=n||[],!Array.isArray(t)&&!Rt(t)){S(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}S(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),S(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const r=e.slice(1);for(let s=0;s<t.length;++s)B1(t[s],r,n.concat(s))}function bg(t,e,n,r){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function N(t,e,n,r="numeric"){if(t instanceof j1())return bg(r,t.dtype,e,n),t;let s=vu(t);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),bg(r,s,e,n),t==null||!Rt(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const l=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${l}'`)}const a=Sr(t,s);!Rt(t)&&!Array.isArray(t)&&(t=[t]);const i=s!=="string"?I1(t,s):ko(t,[],!0);return C.makeTensor(i,a,s)}function Al(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((a,o)=>N(a,`${e}[${o}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kf="__op";function E(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+kf;const s=(...a)=>{C.startScope(n);try{const o=r(...a);return es(o)&&console.error("Cannot return a Promise inside of tidy."),C.endScope(o),o}catch(o){throw C.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JT(t,e){const n=N(t,"real","complex"),r=N(e,"imag","complex");zt(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return C.runKernel(lb,s)}const Fn=E({complex_:JT});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Er(t,e,n,r){if(r==null)r=vu(t);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(F1(t)||P1(t)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return C.backend.createTensorFromGPUData(t,e||n,r)}if(!Rt(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){$t(e);const s=Ie(e),a=Ie(n);S(s===a,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<n.length;++o){const i=n[o],l=o===n.length-1?i!==Ie(e.slice(o)):!0;S(n[o]===e[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!Rt(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=r!=="string"?I1(t,r):ko(t,[],!0),C.makeTensor(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qt(t,e,n){const r=Sr(t,n);return Er(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ts={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Zt{static join(e){return new Zt(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>Rt(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let n=0;for(let r=0;r<e.length;r++){const s=e[r];r!==e.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=n+s.byteLength;this.shards.push({buffer:s,start:n,end:a}),n=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,n=isNaN(Number(n))?0:n,e=Math.max(0,e),n=Math.min(this.byteLength,n),n<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const s=n-e,a=new ArrayBuffer(s),o=new Uint8Array(a);let i=0;for(let l=r;l<this.shards.length;l++){const u=this.shards[l],d=e+i-u.start,p=i,m=Math.min(n,u.end)-u.start,g=new Uint8Array(u.buffer,d,m-d);if(o.set(g,p),i+=g.length,n<u.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function n(s){return e<s.start?-1:e>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=ZT(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function ZT(t,e){let n=0,r=t.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,a=e(t[s]);if(a===0)return s;a<0?r=s:n=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function te(t,e){return C.tidy(t,e)}function tt(t){L1(t).forEach(n=>n.dispose())}function qt(t){return C.keep(t)}function M1(){return C.backendName}function V1(){return C.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fr=4;async function e3(t,e){const n=[],r=[],s=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);for(let o=0;o<s.length;++o){const i=s[o],l=Array.isArray(t)?t[o].tensor:t[i];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${l.dtype}`);const u={name:i,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const c=new Promise(async d=>{const p=await l.bytes(),f=p.reduce((w,y)=>w+y.length,0)+fr*p.length,m=new Uint8Array(f);let g=0;for(let w=0;w<p.length;w++){const y=p[w],b=new Uint8Array(new Uint32Array([y.length]).buffer);m.set(b,g),g+=fr,m.set(y,g),g+=y.length}d(m)});r.push(c)}else r.push(l.data());e!=null&&(u.group=e),n.push(u)}const a=await Promise.all(r);return{data:r3(a),specs:n}}function U1(t,e){const n=new Zt(t),r={};let s=0;for(const a of e){const o=t3(a,(i,l)=>n.slice(s+i,s+l));r[a.name]=K1(a,n.slice(s,s+o)),s+=o}return r}function t3(t,e){const n=Ie(t.shape);let r;if("quantization"in t){const s=t.quantization;r=ts[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=fr+new Uint32Array(e(s,s+fr))[0];return s}else r=ts[t.dtype];return n*r}async function n3(t,e){const n=Ie(t.shape);let r;if("quantization"in t){const s=t.quantization;r=ts[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=fr+new Uint32Array(await e(s,s+fr))[0];return s}else r=ts[t.dtype];return n*r}function K1(t,e){const n=t.name,r=t.dtype,s=t.shape,a=Ie(s);let o,i=0;if("quantization"in t){const l=t.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${t.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${t.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${t.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const u=ts[l.dtype],c=l.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){o=new Float32Array(c.length);for(let d=0;d<c.length;d++){const p=c[d];o[d]=p*l.scale+l.min}}else if(l.dtype==="float16")o=c3()(c);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(r==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);o=new Int32Array(c.length);for(let d=0;d<c.length;d++){const p=c[d];o[d]=Math.round(p*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*u}else if(r==="string"){const l=Ie(t.shape);o=[];for(let u=0;u<l;u++){const c=new Uint32Array(e.slice(i,i+fr))[0];i+=fr;const d=new Uint8Array(e.slice(i,i+c));o.push(d),i+=c}}else{const l=ts[r];if(r==="float32")o=new Float32Array(e);else if(r==="int32")o=new Int32Array(e);else if(r==="bool")o=new Uint8Array(e);else if(r==="complex64"){o=new Float32Array(e);const u=new Float32Array(o.length/2),c=new Float32Array(o.length/2);for(let m=0;m<u.length;m++)u[m]=o[m*2],c[m]=o[m*2+1];const d=Qt(u,s,"float32"),p=Qt(c,s,"float32"),f=Fn(d,p);return d.dispose(),p.dispose(),f}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*l}return Qt(o,s,r)}async function wg(t,e,n){let r=new Uint8Array(e);for(;r.byteLength<n;){const{done:s,value:a}=await t.read();if(s&&a==null){const i=n-r.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const o=new Uint8Array(r.length+a.byteLength);o.set(r,0),o.set(new Uint8Array(a),r.length),r=o}return r.buffer}async function W1(t,e){const n={},r=t.getReader();let s=new ArrayBuffer(0);for(const a of e){const o=await n3(a,async(u,c)=>(s=await wg(r,s,c),s.slice(u,c)));s=await wg(r,s,o);const i=s.slice(0,o);s=s.slice(o);const l=K1(a,i);if(n[a.name]=l,M1()==="webgpu"){const u=V1();"uploadToGPU"in u&&Ie(l.shape)>=Y().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&u.uploadToGPU(l.dataId)}}return n}function r3(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(a=>{if(e+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(e);let s=0;return n.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const Sf=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function xg(t){return Sf?Buffer.byteLength(t,"utf8"):new Blob([t]).size}function s3(t){if(Sf)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let r=0,s=e.length;r<s;r++)n+=String.fromCharCode(e[r]);return btoa(n)}function a3(t){if(Sf){const r=Buffer.from(t,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;++r)n.set([e.charCodeAt(r)],r);return n.buffer}function o3(t){return Zt.join(t)}function Ng(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function q1(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(n.initializerSignature=t.initializerSignature),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function H1(t,e,n){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(r.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=n}return t.signature!=null&&(r.signature=t.signature),t.userDefinedMetadata!=null&&(r.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(r.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(r.initializerSignature=t.initializerSignature),r}async function Ef(t,e){let n,r;return t.weightsManifest!=null&&([n,r]=await e(t.weightsManifest)),H1(t,n,r)}function qo(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:xg(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:xg(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:new Zt(t.weightData).byteLength}}function Td(t){const e=[];for(const n of t)e.push(...n.weights);return e}function i3(){const t=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function l3(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function u3(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function c3(){const t=i3(),e=l3(),n=u3();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const i=r[o],l=t[n[i>>10]+(i&1023)]+e[i>>10];a[o]=l}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ge{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ge.instance==null&&(ge.instance=new ge),ge.instance}static registerSaveRouter(e){ge.getInstance().saveRouters.push(e)}static registerLoadRouter(e){ge.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return ge.getHandlers(e,"save")}static getLoadHandlers(e,n){return ge.getHandlers(e,"load",n)}static getHandlers(e,n,r){const s=[];return(n==="load"?ge.getInstance().loadRouters:ge.getInstance().saveRouters).forEach(o=>{const i=o(e,r);i!==null&&s.push(i)}),s}}const d3=t=>ge.registerSaveRouter(t),p3=t=>ge.registerLoadRouter(t),f3=t=>ge.getSaveHandlers(t),h3=(t,e)=>ge.getLoadHandlers(t,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cd="tensorflowjs",$d=1,Br="models_store",er="model_info_store";function G1(){if(!Y().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Ad(t){const e=t.result;e.createObjectStore(Br,{keyPath:"modelPath"}),e.createObjectStore(er,{keyPath:"modelPath"})}class ns{constructor(e){if(this.indexedDB=G1(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,n){return new Promise((r,s)=>{const a=this.indexedDB.open(Cd,$d);a.onupgradeneeded=()=>Ad(a),a.onsuccess=()=>{const o=a.result;if(n==null){const i=o.transaction(Br,"readonly"),u=i.objectStore(Br).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=c=>(o.close(),s(u.error)),i.oncomplete=()=>o.close()}else{n.weightData=Zt.join(n.weightData);const i=qo(n),l=o.transaction(er,"readwrite");let u=l.objectStore(er),c;try{c=u.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(p){return s(p)}let d;c.onsuccess=()=>{d=o.transaction(Br,"readwrite");const p=d.objectStore(Br);let f;try{f=p.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(m){return s(m)}f.onsuccess=()=>r({modelArtifactsInfo:i}),f.onerror=m=>{u=l.objectStore(er);const g=u.delete(this.modelPath);g.onsuccess=()=>(o.close(),s(f.error)),g.onerror=w=>(o.close(),s(f.error))}},c.onerror=p=>(o.close(),s(c.error)),l.oncomplete=()=>{d==null?o.close():d.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}ns.URL_SCHEME="indexeddb://";const Q1=t=>Y().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ns.URL_SCHEME)?m3(t.slice(ns.URL_SCHEME.length)):null;ge.registerSaveRouter(Q1);ge.registerLoadRouter(Q1);function m3(t){return new ns(t)}function g3(t){return t.startsWith(ns.URL_SCHEME)?t.slice(ns.URL_SCHEME.length):t}class y3{constructor(){this.indexedDB=G1()}async listModels(){return new Promise((e,n)=>{const r=this.indexedDB.open(Cd,$d);r.onupgradeneeded=()=>Ad(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(er,"readonly"),i=a.objectStore(er).getAll();i.onsuccess=()=>{const l={};for(const u of i.result)l[u.modelPath]=u.modelArtifactsInfo;e(l)},i.onerror=l=>(s.close(),n(i.error)),a.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(e){return e=g3(e),new Promise((n,r)=>{const s=this.indexedDB.open(Cd,$d);s.onupgradeneeded=()=>Ad(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(er,"readwrite"),i=o.objectStore(er),l=i.get(e);let u;l.onsuccess=()=>{if(l.result==null)return a.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const c=i.delete(e),d=()=>{u=a.transaction(Br,"readwrite");const f=u.objectStore(Br).delete(e);f.onsuccess=()=>n(l.result.modelArtifactsInfo),f.onerror=m=>r(l.error)};c.onsuccess=d,c.onerror=p=>(d(),a.close(),r(l.error))}},l.onerror=c=>(a.close(),r(l.error)),o.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xn="/",ws="tensorflowjs_models",X1="info",v3="model_topology",b3="weight_specs",w3="weight_data",x3="model_metadata";function Y1(t){return{info:[ws,t,X1].join(xn),topology:[ws,t,v3].join(xn),weightSpecs:[ws,t,b3].join(xn),weightData:[ws,t,w3].join(xn),modelMetadata:[ws,t,x3].join(xn)}}function J1(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function N3(t){const e=t.split(xn);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(xn)}function k3(t){return t.startsWith(rs.URL_SCHEME)?t.slice(rs.URL_SCHEME.length):t}class rs{constructor(e){if(!Y().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Y1(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=qo(e),a=Zt.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,s3(a));const o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw J1(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=a3(o),n}}rs.URL_SCHEME="localstorage://";const Z1=t=>Y().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(rs.URL_SCHEME)?S3(t.slice(rs.URL_SCHEME.length)):null;ge.registerSaveRouter(Z1);ge.registerLoadRouter(Z1);function S3(t){return new rs(t)}class E3{constructor(){S(Y().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),S(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},n=ws+xn,r=xn+X1;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(n)&&a.endsWith(r)){const o=N3(a);e[o]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=k3(e);const n=Y1(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return J1(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ms="://";class Xe{constructor(){this.managers={}}static getInstance(){return Xe.instance==null&&(Xe.instance=new Xe),Xe.instance}static registerManager(e,n){S(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Ms)&&(e=e.slice(0,e.indexOf(Ms))),S(e.length>0,()=>"scheme must not be an empty string.");const r=Xe.getInstance();S(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=n}static getManager(e){const n=Xe.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(Xe.getInstance().managers)}}function Ki(t){if(t.indexOf(Ms)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Xe.getSchemes().join(",")}`);return{scheme:t.split(Ms)[0],path:t.split(Ms)[1]}}async function ex(t,e,n=!1){S(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=ge.getLoadHandlers(t);S(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),S(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const s=r[0],a=ge.getSaveHandlers(e);S(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),S(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const o=a[0],i=Ki(t).scheme,l=Ki(t).path,u=i===Ki(t).scheme,c=await s.load();n&&u&&await Xe.getManager(i).removeModel(l);const d=await o.save(c);return n&&!u&&await Xe.getManager(i).removeModel(l),d.modelArtifactsInfo}async function _3(){const t=Xe.getSchemes(),e={};for(const n of t){const r=await Xe.getManager(n).listModels();for(const s in r){const a=n+Ms+s;e[a]=r[s]}}return e}async function T3(t){const e=Ki(t);return Xe.getManager(e.scheme).removeModel(e.path)}async function C3(t,e){return ex(t,e,!1)}async function $3(t,e){return ex(t,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class A3{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}setTimeoutCustom(e,n){if(typeof window>"u"||!Y().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,n);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return A1(e)}}if(Y().get("IS_BROWSER")){Y().setPlatform("browser",new A3);try{Xe.registerManager(rs.URL_SCHEME,new E3)}catch{}try{Xe.registerManager(ns.URL_SCHEME,new y3)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I3={importFetch:()=>require("node-fetch")};let ic;class D3{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return Y().global.fetch!=null?Y().global.fetch(e,n):(ic==null&&(ic=I3.importFetch()),ic(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}Y().get("IS_NODE")&&!Y().get("IS_BROWSER")&&Y().setPlatform("node",new D3);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function un(t,e="float32",n){return e=e||"float32",$t(t),new $l(t,e,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j3(t,e){const n=N(t,"x","cast");if(!ST(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:e};return C.runKernel(wf,r,s)}const Ne=E({cast_:j3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O3(t){const n={x:N(t,"x","clone","string_or_numeric")};return C.runKernel(xf,n)}const Tn=E({clone_:O3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _f(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */z1();const P3={buffer:un,cast:Ne,clone:Tn,print:_f};WT(P3);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F3(t,e){let n=N(t,"a","add"),r=N(e,"b","add");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(bf,s)}const H=E({add_:F3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L3(t,e){let n=N(t,"a","floorDiv"),r=N(e,"b","floorDiv");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(Bb,s)}const Tf=E({floorDiv_:L3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R3(t,e){let n=N(t,"a","div"),r=N(e,"b","div");if([n,r]=Se(n,r),n.dtype==="int32"&&r.dtype==="int32")return Tf(n,r);const s={a:n,b:r},a={};return C.runKernel(Cb,s,a)}const ue=E({div_:R3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z3(t,e){let n=N(t,"a","mul"),r=N(e,"b","mul");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(vw,s)}const R=E({mul_:z3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B3(t){const e=N(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return C.runKernel(ub,n)}else{const n={x:e};return C.runKernel(Bv,n)}}const ft=E({abs_:B3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M3(t){const n={x:N(t,"x","acos")};return C.runKernel(Mv,n)}const tx=E({acos_:M3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V3(t){const n={x:N(t,"x","acosh")};return C.runKernel(Vv,n)}const nx=E({acosh_:V3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U3(t){S(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),S(t.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`);const e=t.map((s,a)=>N(s,`tensors${a}`,"addN")),n=e[0];e.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(s=>{if(!Pn(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return C.runKernel(Uv,r)}const rx=E({addN_:U3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K3(t,e=null,n=!1){const s={x:N(t,"x","all","bool")},a={axis:e,keepDims:n};return C.runKernel(Kv,s,a)}const sx=E({all_:K3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W3(t,e=null,n=!1){const s={x:N(t,"x","any","bool")},a={axis:e,keepDims:n};return C.runKernel(Wv,s,a)}const ax=E({any_:W3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q3(t,e=0){const r={x:N(t,"x","argMax")},s={axis:e};return C.runKernel(qv,r,s)}const ox=E({argMax_:q3});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H3(t,e=0){const r={x:N(t,"x","argMin")},s={axis:e};return C.runKernel(Hv,r,s)}const ix=E({argMin_:H3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G3(t){const n={x:N(t,"x","asin")};return C.runKernel(Gv,n)}const lx=E({asin_:G3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q3(t){const n={x:N(t,"x","asinh")};return C.runKernel(Qv,n)}const ux=E({asinh_:Q3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X3(t){const n={x:N(t,"x","atan")};return C.runKernel(Xv,n)}const cx=E({atan_:X3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y3(t,e){let n=N(t,"a","atan2"),r=N(e,"b","atan2");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(Jv,s)}const dx=E({atan2_:Y3});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J3(t){const n={x:N(t,"x","atanh")};return C.runKernel(Yv,n)}const px=E({atanh_:J3});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z3(t,e,n,r,s,a,o="channelsLast"){const[i,l]=Eo(e);let u;if(o==="channelsLast")u=[i,l,t[3],t[3]];else if(o==="channelsFirst")u=[i,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${o}`);return Cf(t,u,n,r,s,a,!1,o)}function Cf(t,e,n,r,s,a,o=!1,i="channelsLast"){let[l,u,c,d]=[-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,d]=t;else if(i==="channelsFirst")[l,d,u,c]=t;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,,m]=e,[g,w]=Eo(n),[y,b]=Eo(r),x=Id(p,y),k=Id(f,b),{padInfo:_,outHeight:$,outWidth:T}=nC(s,u,c,g,w,x,k,a,i),I=o?m*d:m;let D;return i==="channelsFirst"?D=[l,I,$,T]:i==="channelsLast"&&(D=[l,$,T,I]),{batchSize:l,dataFormat:i,inHeight:u,inWidth:c,inChannels:d,outHeight:$,outWidth:T,outChannels:I,padInfo:_,strideHeight:g,strideWidth:w,filterHeight:p,filterWidth:f,effectiveFilterHeight:x,effectiveFilterWidth:k,dilationHeight:y,dilationWidth:b,inShape:t,outShape:D,filterShape:e}}function eC(t,e,n,r,s){r==null&&(r=tC(t,e,n));const a=t[0],o=t[1],i=Il((a-e+2*r)/n+1,s),l=Il((o-e+2*r)/n+1,s);return[i,l]}function tC(t,e,n,r=1){const s=Id(e,r);return Math.floor((t[0]*(n-1)-n+s)/2)}function Eo(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function Id(t,e){return e<=1?t:t+(t-1)*(e-1)}function nC(t,e,n,r,s,a,o,i,l){let u,c,d;if(typeof t=="number"){u={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const f=eC([e,n],a,r,t,i);c=f[0],d=f[1]}else if(t==="same"){c=Math.ceil(e/r),d=Math.ceil(n/s);const p=Math.max(0,(c-1)*r+a-e),f=Math.max(0,(d-1)*s+o-n),m=Math.floor(p/2),g=p-m,w=Math.floor(f/2),y=f-w;u={top:m,bottom:g,left:w,right:y,type:"SAME"}}else if(t==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-a+1)/r),d=Math.ceil((n-o+1)/s);else if(typeof t=="object"){const p=l==="channelsLast"?t[1][0]:t[2][0],f=l==="channelsLast"?t[1][1]:t[2][1],m=l==="channelsLast"?t[2][0]:t[3][0],g=l==="channelsLast"?t[2][1]:t[3][1];u={top:p,bottom:f,left:m,right:g,type:p===0&&f===0&&m===0&&g===0?"VALID":"EXPLICIT"},c=Il((e-a+p+f)/r+1,i),d=Il((n-o+m+g)/s+1,i)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:u,outHeight:c,outWidth:d}}function Il(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Dl(t){const[e,n,r]=Eo(t);return e===1&&n===1&&r===1}function _r(t,e){return Dl(t)||Dl(e)}function na(t){return Eo(t).every(e=>e>0)}function en(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")S(No(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{S(No(s),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rC(t,e){const r={x:N(t,"x","reshape","string_or_numeric")},s={shape:e};return C.runKernel(Rw,r,s)}const j=E({reshape_:rC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sC(t,e,n,r,s){const a=N(t,"x","avgPool","float32"),o=1;S(_r(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let i=a,l=!1;a.rank===3&&(l=!0,i=j(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),en("avgPool",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s};let d=C.runKernel(Zv,u,c);return d=Ne(d,a.dtype),l?j(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const $f=E({avgPool_:sC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aC(t,e,n,r,s,a="NDHWC"){const o=N(t,"x","avgPool3d","float32");let i=o,l=!1;o.rank===4&&(l=!0,i=j(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),S(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),S(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),en("avgPool3d",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a};let d=C.runKernel(eb,u,c);return d=Ne(d,i.dtype),l?j(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const fx=E({avgPool3d_:aC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oC(t,e=0){S(t.length>=1,()=>"Pass at least one tensor to concat");const n=Al(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),n.length===1)return Tn(n[0]);const r=n,s={axis:e};return C.runKernel(cb,r,s)}const We=E({concat_:oC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iC(t,e,n=!1,r=!1){let s=N(t,"a","matMul"),a=N(e,"b","matMul");[s,a]=Se(s,a);const o={a:s,b:a},i={transposeA:n,transposeB:r};return C.runKernel(tb,o,i)}const se=E({matMul_:iC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lC(t){const n={x:N(t,"x","sigmoid","float32")};return C.runKernel(e1,n)}const Kr=E({sigmoid_:lC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uC(t,e,n){const r=N(t,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:e,size:n};return C.runKernel(Xw,s,a)}const ae=E({slice_:uC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cC(t){const n={x:N(t,"x","tanh","float32")};return C.runKernel(w1,n)}const jl=E({tanh_:cC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dC(t,e,n,r,s,a){const o=N(t,"forgetBias","basicLSTMCell"),i=N(e,"lstmKernel","basicLSTMCell"),l=N(n,"lstmBias","basicLSTMCell"),u=N(r,"data","basicLSTMCell"),c=N(s,"c","basicLSTMCell"),d=N(a,"h","basicLSTMCell"),p=We([u,d],1),f=se(p,i),m=H(f,l),g=m.shape[0],w=m.shape[1]/4,y=[g,w],b=ae(m,[0,0],y),x=ae(m,[0,w],y),k=ae(m,[0,w*2],y),_=ae(m,[0,w*3],y),$=H(R(Kr(b),jl(x)),R(c,Kr(H(o,k)))),T=R(jl($),Kr(_));return[$,T]}const hx=E({basicLSTMCell_:dC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pC(t,e,n){const r=N(t,"x","batchToSpaceND"),s=e.reduce((i,l)=>i*l);S(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),S(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),S(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const a={x:r},o={blockShape:e,crops:n};return C.runKernel(nb,a,o)}const Af=E({batchToSpaceND_:pC});function fC(t){let e;return t.rank===0||t.rank===1?e=j(t,[1,1,1,t.size]):t.rank===2?e=j(t,[1,1,t.shape[0],t.shape[1]]):t.rank===3?e=j(t,[1,t.shape[0],t.shape[1],t.shape[2]]):e=t,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hC(t,e,n,r,s,a){a==null&&(a=.001);const o=N(t,"x","batchNorm"),i=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;r!=null&&(c=N(r,"offset","batchNorm")),S(i.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(c==null||i.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(u==null||i.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const p={x:fC(o),scale:u,offset:c,mean:i,variance:l},f={varianceEpsilon:a},m=C.runKernel(Mb,p,f);return j(m,o.shape)}const Ho=E({batchNorm_:hC});function mC(t,e,n,r,s,a){const o=N(t,"x","batchNorm"),i=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),S(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),S(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),S(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&S(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),Ho(o,i,l,c,u,a)}const mx=E({batchNorm2d_:mC});function gC(t,e,n,r,s,a){const o=N(t,"x","batchNorm"),i=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),S(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),S(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),S(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&S(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),Ho(o,i,l,c,u,a)}const gx=E({batchNorm3d_:gC});function yC(t,e,n,r,s,a){const o=N(t,"x","batchNorm"),i=N(e,"mean","batchNorm"),l=N(n,"variance","batchNorm");let u;s!=null&&(u=N(s,"scale","batchNorm"));let c;return r!=null&&(c=N(r,"offset","batchNorm")),S(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),S(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),S(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&S(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),Ho(o,i,l,c,u,a)}const yx=E({batchNorm4d_:yC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vC(t,e,n){const r=N(t,"x","bincount"),s=N(e,"weights","bincount");S(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),S(n>=0,()=>`size must be non-negative, but got ${n}.`),S(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:n};return C.runKernel(rb,a,o)}const If=E({bincount_:vC});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bC(t,e){const n=N(t,"x","bitwiseAnd"),r=N(e,"y","bitwiseAnd");if(!Pn(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return C.runKernel(sb,s)}const vx=E({bitwiseAnd_:bC});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wC(t,e){const n=N(t,"s0","broadcastArgs","int32"),r=N(e,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return C.runKernel(ab,s)}const bx=E({broadcastArgs_:wC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xC(t,e){let n=N(t,"broadcastTo","x");const r=n.shape;if($t(e),e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const u=n.shape.slice();for(;u.length<e.length;)u.unshift(1);n=j(n,u)}const s=n.shape,a=Array.from(e);for(let u=e.length-1;u>=0;u--)if(s[u]===e[u])a[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(a.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return Tn(n);const i={x:n},l={reps:a};return C.runKernel(Nf,i,l)}const Xa=E({broadcastTo_:xC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NC(t){const n={x:N(t,"x","ceil","float32")};return C.runKernel(ob,n)}const wx=E({ceil_:NC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ha(t,e,n){$t(t),n=n||vu(e);const r={shape:t,value:e,dtype:n};return C.runKernel(Lb,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kC(t,e,n){const r=N(t,"x","clipByValue");if(S(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`),e===n)return ha(r.shape,e,r.dtype);const s={x:r},a={clipValueMin:e,clipValueMax:n};return C.runKernel(ib,s,a)}const xx=E({clipByValue_:kC});function SC(t){return We(t,0)}const Nx=E({concat1d_:SC});function EC(t,e){return We(t,e)}const kx=E({concat2d_:EC});function _C(t,e){return We(t,e)}const Sx=E({concat3d_:_C});function TC(t,e){return We(t,e)}const Ex=E({concat4d_:TC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CC(t,e,n,r,s="NHWC",a=[1,1],o){const i=N(t,"x","conv2d","float32"),l=N(e,"filter","conv2d","float32");let u=i,c=!1;i.rank===3&&(c=!0,u=j(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),en("conv2d",r,o);const d=s==="NHWC"?u.shape[3]:u.shape[1];S(d===l.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${l.shape[2]}.`),S(_r(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),S(na(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),S(na(n),()=>"Error in conv2D: Strides should be larger than 0.");const p={x:u,filter:l},f={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},m=C.runKernel(db,p,f);return c?j(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Go=E({conv2d_:CC});function $C(t,e,n,r,s="NWC",a=1,o){const i=N(t,"x","conv1d"),l=N(e,"filter","conv1d");let u=i,c=!1;i.rank===2&&(c=!0,u=j(i,[1,i.shape[0],i.shape[1]])),S(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),S(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),en("conv1d",r,o),S(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),S(_r(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),S(na(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),S(na(n),()=>"Error in conv1D: Stride should be larger than 0."),S(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const d=j(l,[1,l.shape[0],l.shape[1],l.shape[2]]),p=j(u,[u.shape[0],1,u.shape[1],u.shape[2]]),w=Go(p,d,[1,n],r,"NHWC",[1,a],o);return c?j(w,[w.shape[2],w.shape[3]]):j(w,[w.shape[0],w.shape[2],w.shape[3]])}const _x=E({conv1d_:$C});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AC(t,e,n,r,s,a="NHWC",o){S(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let i=t,l=e,u=!1;e.rank===3&&(u=!0,l=j(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,t[0],t[1],t[2]]),S(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),S(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),S(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const c=a==="NHWC"?i[3]:i[1],d=a==="NHWC"?l.shape[3]:l.shape[1];S(c===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`),S(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),en("conv2dDerInput",s,o);const p={dy:l,filter:n},f={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},m=C.runKernel(fb,p,f);return u?j(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const Tx=E({conv2DBackpropInput_:AC});function IC(t,e,n,r,s,a){const o=N(t,"x","conv2dTranspose"),i=N(e,"filter","conv2dTranspose");return Tx(n,o,i,r,s,"NHWC",a)}const Cx=E({conv2dTranspose_:IC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DC(t,e,n,r,s="NDHWC",a=[1,1,1]){const o=N(t,"x","conv3d"),i=N(e,"filter","conv3d");let l=o,u=!1;o.rank===4&&(u=!0,l=j(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),S(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),S(l.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${i.shape[3]}.`),S(_r(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),S(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),S(na(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),S(na(n),()=>"Error in conv3D: Strides should be larger than 0.");const c={x:l,filter:i},d={strides:n,pad:r,dataFormat:s,dilations:a},p=C.runKernel(hb,c,d);return u?j(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const $x=E({conv3d_:DC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jC(t,e,n,r,s){S(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let a=t,o=e,i=!1;e.rank===4&&(i=!0,o=j(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,t[0],t[1],t[2],t[3]]);const l=a[4],u=o.shape[4];S(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),S(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),S(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),S(l===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[3]}.`),S(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const c={dy:o,filter:n},d={pad:s,strides:r,inputShape:a},p=C.runKernel(mb,c,d);return i?j(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const OC=E({conv3DBackpropInput_:jC});function PC(t,e,n,r,s){const a=N(t,"x","conv3dTranspose"),o=N(e,"filter","conv3dTranspose");return OC(n,a,o,r,s)}const Ax=E({conv3dTranspose_:PC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FC(t){const n={x:N(t,"x","cos","float32")};return C.runKernel(gb,n)}const Ix=E({cos_:FC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LC(t){const n={x:N(t,"x","cosh","float32")};return C.runKernel(yb,n)}const Dx=E({cosh_:LC});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RC(t,e=0,n=!1,r=!1){const a={x:N(t,"x","cumprod")},o={axis:e,exclusive:n,reverse:r};return C.runKernel(vb,a,o)}const jx=E({cumprod_:RC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zC(t,e=0,n=!1,r=!1){const a={x:N(t,"x","cumsum")},o={axis:e,exclusive:n,reverse:r};return C.runKernel(bb,a,o)}const Ox=E({cumsum_:zC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BC(t,e,n,r=!1){const s=N(t,"x","denseBincount"),a=N(e,"weights","denseBincount");S(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),S(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),S(n>=0,()=>`size must be non-negative, but got ${n}.`),S(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},i={size:n,binaryOutput:r};return C.runKernel(xb,o,i)}const Px=E({denseBincount_:BC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MC(t,e,n="NHWC"){const r=N(t,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],a=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];S(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),S(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e}  for depthToSpace with input shape
    ${r.shape}`),S(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e} for depthToSpace with input shape
        ${r.shape}`),S(o%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},l={blockSize:e,dataFormat:n};return C.runKernel(Nb,i,l)}const Fx=E({depthToSpace_:MC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VC(t,e,n,r,s="NHWC",a=[1,1],o){const i=N(t,"x","depthwiseConv2d","float32"),l=N(e,"filter","depthwiseConv2d","float32");let u=i,c=!1;i.rank===3&&(c=!0,u=j(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const d=s==="NHWC"?u.shape[3]:u.shape[1];S(d===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${l.shape[2]}.`),en("depthwiseConv2d",r,o);const p={x:u,filter:l},f={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},m=C.runKernel(kb,p,f);return c?j(m,[m.shape[1],m.shape[2],m.shape[3]]):m}const bu=E({depthwiseConv2d_:VC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UC(t){const n={x:N(t,"x","diag")};return C.runKernel(_b,n)}const Lx=E({diag_:UC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KC(t,e,n,r,s=[1,1],a="NHWC"){const o=N(t,"x","dilation2d"),i=N(e,"filter","dilation2d");S(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),S(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),S(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let l=o,u=!1;o.rank===3&&(l=j(o,[1,o.shape[0],o.shape[1],o.shape[2]]),u=!0),S(l.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${i.shape[2]}`);const c={x:l,filter:i},d={strides:n,pad:r,dilations:s},p=C.runKernel(Tb,c,d);return u?j(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Rx=E({dilation2d_:KC});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WC(t,e){const n=[];for(let r=0;r<e.length;r++){const s=t[t.length-r-1],a=e.length-r-1,o=e[a];(s==null||s===1&&o>1)&&n.unshift(a)}return n}function Le(t,e){const n=Math.max(t.length,e.length),r=new Array(n);for(let s=0;s<n;s++){let a=t[t.length-s-1];a==null&&(a=1);let o=e[e.length-s-1];if(o==null&&(o=1),a===1)r[n-s-1]=o;else if(o===1)r[n-s-1]=a;else if(a!==o){const i=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(i)}else r[n-s-1]=a}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qC(t,e){let n=N(t,"a","equal","string_or_numeric"),r=N(e,"b","equal","string_or_numeric");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Db,s)}const Df=E({equal_:qC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HC(t,e,n){const r=N(e,"a","where"),s=N(n,"b","where"),a=N(t,"condition","where","bool"),o=Le(Le(a.shape,r.shape),s.shape),i=Xa(a,o),l=Xa(r,o),u=Xa(s,o),c={condition:i,t:l,e:u};return C.runKernel(Gw,c)}const Cn=E({where_:HC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GC(t){const n={x:N(t,"x","zerosLike")};return C.runKernel(_1,n)}const bt=E({zerosLike_:GC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QC(t,e){let n=N(t,"a","div"),r=N(e,"b","div");[n,r]=Se(n,r);const s=ue(n,r),a=bt(s),o=Df(r,a);return Cn(o,a,s)}const zx=E({divNoNan_:QC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XC(t,e){const n=N(t,"t1","dot"),r=N(e,"t2","dot");S((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(S(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),n.rank===1&&r.rank===1){const o=j(n,[1,-1]),i=j(r,[-1,1]),l=se(o,i);return j(l,[])}else if(n.rank===1&&r.rank===2){const o=j(n,[1,-1]),i=j(r,[r.shape[0],r.shape[1]]),l=se(o,i);return j(l,[l.size])}else if(n.rank===2&&r.rank===1){const o=j(r,[-1,1]),i=se(n,o);return j(i,[i.size])}else{const o=j(r,[r.shape[0],r.shape[1]]);return se(n,o)}}const Bx=E({dot_:XC});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YC(t,...e){const n=e.map((s,a)=>N(s,`tensors${a}`,"einsum")),r={equation:t};return C.runKernel($b,n,r)}const Or=E({einsum_:YC});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JC(t){const n={x:N(t,"x","elu","float32")};return C.runKernel(Ab,n)}const jf=E({elu_:JC});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZC(t,e){const n=N(t,"x","ensureShape","string_or_numeric");if(!wT(n.shape,e))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${e}`);return t}const Mx=E({ensureShape_:ZC});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e$(t){let e=N(t,"x","erf");S(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=Ne(e,"float32"));const n={x:e};return C.runKernel(Ib,n)}const Vx=E({erf_:e$});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(t,e,n){const r=t.length+e.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(t[a++]):s.push(e[o++]);return s}function wu(t,e){const n=e.map(r=>1);return t$(t,n,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n$(t,e=null,n=!1){const s={x:N(t,"x","max")},a={reductionIndices:e,keepDims:n};return C.runKernel(iw,s,a)}const Wr=E({max_:n$});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r$(t,e=null,n=!1){const s={x:N(t,"x","min")},a={axis:e,keepDims:n};return C.runKernel(fw,s,a)}const Ol=E({min_:r$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s$(t,e){let n=N(t,"base","pow"),r=N(e,"exp","pow");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(Cw,s)}const ra=E({pow_:s$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z(t,e){if((Rt(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Rt(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Er(t,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a$(t){const n={x:N(t,"x","sqrt","float32")};return C.runKernel(n1,n)}const cn=E({sqrt_:a$});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o$(t){const e=N(t,"x","square"),n={};return C.runKernel("Square",{x:e},n)}const Pt=E({square_:o$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i$(t,e=null,n=!1){let r=N(t,"x","sum");r.dtype==="bool"&&(r=Ne(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return C.runKernel(r1,s,a)}const le=E({sum_:i$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l$(t,e="euclidean",n=null,r=!1){t=N(t,"x","norm");const s=Ux(t,e,n);let a=s.shape;if(r){const o=yu(n,t.shape);a=wu(s.shape,o)}return j(s,a)}function Ux(t,e,n=null){if(t.rank===0)return ft(t);if(t.rank!==1&&n===null)return Ux(j(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return le(ft(t),n);if(e===1/0)return Wr(ft(t),n);if(e===-1/0)return Ol(ft(t),n);if(e==="euclidean"||e===2)return cn(le(ra(ft(t),Z(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Wr(le(ft(t),n[0]),n[1]-1);if(e===1/0)return Wr(le(ft(t),n[1]),n[0]);if(e===-1/0)return Ol(le(ft(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return cn(le(Pt(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Qo=E({norm_:l$});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u$(t,e=null,n=!1){return Qo(t,"euclidean",e,n)}const Kx=E({euclideanNorm_:u$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c$(t){const n={x:N(t,"x","exp")};return C.runKernel(jb,n)}const hr=E({exp_:c$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d$(t,e=0){const n=N(t,"x","expandDims","string_or_numeric");S(e<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:e};return C.runKernel(Ob,r,s)}const yn=E({expandDims_:d$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p$(t){const n={x:N(t,"x","expm1")};return C.runKernel(Pb,n)}const Wx=E({expm1_:p$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f$(t,e){const n=N(t,"x","tile","string_or_numeric");S(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const r={x:n},s={reps:e};return C.runKernel(Nf,r,s)}const Vs=E({tile_:f$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h$(t,e,n,r="float32"){e==null&&(e=t);const s=un([t,e],r),a=t<=e?t:e;for(let i=0;i<a;++i)s.set(1,i,i);const o=j(s.toTensor(),[t,e]);if(n==null)return o;if(n.length===1)return Vs(yn(o,0),[n[0],1,1]);if(n.length===2)return Vs(yn(yn(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Vs(yn(yn(yn(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Of=E({eye_:h$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m$(t){const n={x:N(t,"x","floor","float32")};return C.runKernel(zb,n)}const Pf=E({floor_:m$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g$(t,e,n=0,r=0){const s=N(t,"x","gather"),a=N(e,"indices","gather","int32"),o={x:s,indices:a},i={axis:n,batchDims:r};return C.runKernel(Vb,o,i)}const Ff=E({gather_:g$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y$(t,e){let n=N(t,"a","greater","string_or_numeric"),r=N(e,"b","greater","string_or_numeric");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Kb,s)}const Xo=E({greater_:y$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v$(t,e){let n=N(t,"a","greaterEqual","string_or_numeric"),r=N(e,"b","greaterEqual","string_or_numeric");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Wb,s)}const Lf=E({greaterEqual_:v$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b$(t){const n={input:N(t,"input","imag")};return C.runKernel(Hb,n)}const Yo=E({imag_:b$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w$(t){const n={x:N(t,"x","isFinite")};return C.runKernel(Gb,n)}const qx=E({isFinite_:w$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x$(t){const n={x:N(t,"x","isInf")};return C.runKernel(Qb,n)}const Hx=E({isInf_:x$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N$(t){const n={x:N(t,"x","isNaN")};return C.runKernel(Xb,n)}const Gx=E({isNaN_:N$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k$(t,e=.2){const r={x:N(t,"x","leakyRelu")},s={alpha:e};return C.runKernel(Yb,r,s)}const Rf=E({leakyRelu_:k$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S$(t,e){let n=N(t,"a","less","string_or_numeric"),r=N(e,"b","less","string_or_numeric");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Jb,s)}const Pl=E({less_:S$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E$(t,e){let n=N(t,"a","lessEqual","string_or_numeric"),r=N(e,"b","lessEqual","string_or_numeric");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(Zb,s)}const xu=E({lessEqual_:E$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qx(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return C.runKernel(ew,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _$(t,e=5,n=1,r=1,s=.5){const a=N(t,"x","localResponseNormalization");S(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),S(No(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=j(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const l={x:o},u={depthRadius:e,bias:n,alpha:r,beta:s},c=C.runKernel(ow,l,u);return i?j(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Xx=E({localResponseNormalization_:_$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T$(t){const n={x:N(t,"x","log","float32")};return C.runKernel(tw,n)}const sa=E({log_:T$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C$(t){const n={x:N(t,"x","log1p")};return C.runKernel(nw,n)}const zf=E({log1p_:C$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yx(t,e){S(hd(t),()=>"The f passed in variableGrads(f) must be a function"),S(e==null||Array.isArray(e)&&e.every(u=>u instanceof So),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const u in C.registeredVariables)e.push(C.registeredVariables[u])}const r=n?e.filter(u=>!u.trainable):null,s=e.length;e=e.filter(u=>u.trainable),S(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const a=!0,{value:o,grads:i}=C.gradients(t,e,null,a);S(i.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),S(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const l={};return e.forEach((u,c)=>{i[c]!=null&&(l[u.name]=i[c])}),r!=null&&r.forEach(u=>l[u.name]=null),{value:o,grads:l}}function dn(t){return C.customGrad(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $$(t){const n={x:N(t,"x","neg")};return C.runKernel(bw,n)}const Xt=E({neg_:$$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A$(t){const n={x:N(t,"x","softplus")};return C.runKernel(t1,n)}const Bf=E({softplus_:A$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I$(t){const e=N(t,"x","logSigmoid");return dn(r=>({value:Xt(Bf(Xt(r))),gradFunc:o=>R(o,Kr(Xt(r)))}))(e)}const Jx=E({logSigmoid_:I$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D$(t,e){let n=N(t,"a","sub"),r=N(e,"b","sub");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(v1,s)}const X=E({sub_:D$});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j$(t,e=-1){const n=N(t,"logits","logSoftmax");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);return dn((s,a)=>{const i=Wr(s,e,!0),l=X(s,i),u=X(Ne(l,"float32"),sa(le(hr(l),e,!0)));return a([u]),{value:u,gradFunc:(d,p)=>{const[f]=p,m=!0,g=hr(f);return X(d,R(le(d,e,m),g))}}})(n)}const Zx=E({logSoftmax_:j$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O$(t,e=null,n=!1){const r=N(t,"x","logSumExp"),s=yu(e,r.shape),a=Wr(r,s,!0),o=X(r,a),i=hr(o),l=le(i,s),u=sa(l),c=H(j(a,u.shape),u);if(n){const d=wu(c.shape,s);return j(c,d)}return c}const Mf=E({logSumExp_:O$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P$(t,e){const n=N(t,"a","logicalAnd","bool"),r=N(e,"b","logicalAnd","bool");Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(rw,s)}const _o=E({logicalAnd_:P$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F$(t){const n={x:N(t,"x","logicalNot","bool")};return C.runKernel(sw,n)}const Vf=E({logicalNot_:F$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L$(t,e){const n=N(t,"a","logicalOr","bool"),r=N(e,"b","logicalOr","bool");Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(aw,s)}const Uf=E({logicalOr_:L$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R$(t,e){const n=N(t,"a","logicalXor","bool"),r=N(e,"b","logicalXor","bool");return Le(n.shape,r.shape),_o(Uf(t,e),Vf(_o(t,e)))}const e2=E({logicalXor_:R$});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wi=2147483648;function z$(t,e,n="left"){const r=N(t,"sortedSequence","searchSorted"),s=N(e,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=j(r,[-1,a]),l=j(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ie(l.shape)>=wi)throw new Error(`values tensor size must less than ${wi}`);if(i.shape[1]>=wi)throw new Error(`trailing dim_size must less than ${wi} for int32 output type, was ${i.shape[1]}`);const u={sortedSequence:i,values:l},c={side:n};return C.runKernel(Hw,u,c)}const Nu=E({searchSorted_:z$});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t2(t,e){return Nu(t,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B$(t,e,n,r,s){const a=N(t,"x","maxPool"),o=1;let i=a,l=!1;a.rank===3&&(l=!0,i=j(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),S(_r(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),en("maxPool",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s},d=C.runKernel(uw,u,c);return l?j(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Kf=E({maxPool_:B$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M$(t,e=[1,1,1],n,r,s,a="NDHWC"){const o=N(t,"x","maxPool3d");let i=o,l=!1;o.rank===4&&(l=!0,i=j(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),S(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),en("maxPool3d",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a},d=C.runKernel(cw,u,c);return l?j(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const n2=E({maxPool3d_:M$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V$(t,e,n,r,s=!1){const o={x:N(t,"x","maxPoolWithArgmax")},i={filterSize:e,strides:n,pad:r,includeBatchInIndex:s},l=C.runKernel(dw,o,i);return{result:l[0],indexes:l[1]}}const r2=E({maxPoolWithArgmax_:V$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U$(t,e){let n=N(t,"a","maximum"),r=N(e,"b","maximum");[n,r]=Se(n,r),n.dtype==="bool"&&(n=Ne(n,"int32"),r=Ne(r,"int32")),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(lw,s)}const Wf=E({maximum_:U$});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K$(t,e=null,n=!1){const s={x:N(t,"x","mean")},a={axis:e,keepDims:n};return C.runKernel(pw,s,a)}const To=E({mean_:K$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mr(t,e="float32"){if($t(t),e==="complex64"){const r=mr(t,"float32"),s=mr(t,"float32");return Fn(r,s)}const n=gf(Ie(t),e);return C.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tr(t,e="float32"){if($t(t),e==="complex64"){const r=tr(t,"float32"),s=mr(t,"float32");return Fn(r,s)}const n=Lv(Ie(t),e);return C.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s2(t,e,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(t===void 0)return[];let r=N(t,"x","meshgrid",t instanceof ze?t.dtype:"float32");if(e===void 0)return[r];let s=N(e,"y","meshgrid",e instanceof ze?e.dtype:"float32");const a=Ie(r.shape),o=Ie(s.shape);return n==="xy"?(r=j(r,[1,-1]),s=j(s,[-1,1]),[se(tr([o,1],r.dtype),r),se(s,tr([1,a],s.dtype))]):(r=j(r,[-1,1]),s=j(s,[1,-1]),[se(r,tr([1,o],r.dtype)),se(tr([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W$(t,e){let n=N(t,"a","minimum"),r=N(e,"b","minimum");[n,r]=Se(n,r),n.dtype==="bool"&&(n=Ne(n,"int32"),r=Ne(r,"int32")),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(hw,s)}const Co=E({minimum_:W$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q$(t,e,n){S(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=N(t,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)S(e[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),S(e[i][0]>=0&&e[i][0]<=r.shape[i]-s&&e[i][1]>=0&&e[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:e,mode:n},o={x:r};return C.runKernel(mw,o,a)}const a2=E({mirrorPad_:q$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H$(t,e){let n=N(t,"a","mod"),r=N(e,"b","mod");[n,r]=Se(n,r);const s={a:n,b:r};return C.runKernel(gw,s)}const o2=E({mod_:H$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G$(t,e=null,n=!1){t=N(t,"x","moments");const r=yu(e,t.shape),s=To(t,r,n);let a=s.shape;n||(a=wu(s.shape,r));const o=Pt(X(Ne(t,"float32"),j(s,a))),i=To(o,r,n);return{mean:s,variance:i}}const i2=E({moments_:G$});function Q$(t,e,n,r){const s=N(e,"data","multiRNNCell"),a=Al(n,"c","multiRNNCell"),o=Al(r,"h","multiRNNCell");let i=s;const l=[];for(let d=0;d<t.length;d++){const p=t[d](i,a[d],o[d]);l.push(p[0]),l.push(p[1]),i=p[1]}const u=[],c=[];for(let d=0;d<l.length;d+=2)u.push(l[d]),c.push(l[d+1]);return[u,c]}const l2=E({multiRNNCell_:Q$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X$(t,e,n,r=!1){const s=N(t,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const l={logits:o===1?j(s,[1,-1]):s},u={numSamples:e,seed:n,normalized:r},c=C.runKernel(yw,l,u);return o===1?j(c,[c.size]):c}const u2=E({multinomial_:X$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y$(t,e){let n=N(t,"a","notEqual","string_or_numeric"),r=N(e,"b","notEqual","string_or_numeric");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r};return C.runKernel(ww,s)}const qf=E({notEqual_:Y$});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J$(t,e,n=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const o={indices:N(t,"indices","oneHot","int32")},i={dtype:s,depth:e,onValue:n,offValue:r};return C.runKernel(Ew,o,i)}const c2=E({oneHot_:J$});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z$(t){const n={x:N(t,"x","onesLike")};return C.runKernel(Sw,n)}const d2=E({onesLike_:Z$});function e4(t,e){const n=N(t,"v1","outerProduct"),r=N(e,"v2","outerProduct");S(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=j(n,[-1,1]),a=j(r,[1,-1]);return se(s,a)}const p2=E({outerProduct_:e4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t4(t,e,n=0){const r=N(t,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:n},a={x:r};return C.runKernel(Tw,a,s)}const ma=E({pad_:t4});function n4(t,e,n=0){return S(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),ma(t,[e],n)}const f2=E({pad1d_:n4});function r4(t,e,n=0){return S(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ma(t,e,n)}const h2=E({pad2d_:r4});function s4(t,e,n=0){return S(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ma(t,e,n)}const m2=E({pad3d_:s4});function a4(t,e,n=0){return S(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ma(t,e,n)}const g2=E({pad4d_:a4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o4(t,e,n){const r=N(t,"x","spaceToBatchND");S(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),S(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),S(r.shape.reduce((o,i,l)=>l>0&&l<=e.length?o&&(i+n[l-1][0]+n[l-1][1])%e[l-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},a={blockShape:e,paddings:n};return C.runKernel(s1,s,a)}const Hf=E({spaceToBatchND_:o4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i4(t,e,n,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const i=N(t,"x","maxPool");let l=i,u=!1;i.rank===3&&(u=!0,l=j(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(_r(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const c=Z3(l.shape,e,a,s,r),d=[c.dilationHeight,c.dilationWidth];let p;r==="same"?p=u4([c.filterHeight,c.filterWidth],d):p=[[0,0],[0,0]];const f=d[0]===1&&d[1]===1,[m,g]=l4([c.inHeight,c.inWidth],d,p),w=f?r:"valid",y=f?l:Hf(l,d,m),x=(n==="avg"?()=>$f(y,e,a,w,o):()=>Kf(y,e,a,w,o))(),k=f?x:Af(x,d,g);return u?j(k,[k.shape[1],k.shape[2],k.shape[3]]):k}function l4(t,e,n){const r=n.map(c=>c[0]),s=n.map(c=>c[1]),a=t.concat(r,s),o=e.map((c,d)=>(c-a[d]%c)%c),i=s.map((c,d)=>c+o[d]),l=e.map((c,d)=>[r[d],i[d]]),u=e.map((c,d)=>[0,o[d]]);return[l,u]}function u4(t,e){const r=t.map((o,i)=>o+(o-1)*(e[i]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,i)=>o-s[i]);return r.map((o,i)=>[s[i],a[i]])}const y2=E({pool_:i4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c4(t,e){const n=N(t,"x","prelu"),r=N(e,"alpha","prelu"),s={x:n,alpha:r};return C.runKernel($w,s)}const Gf=E({prelu_:c4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d4(t,e=null,n=!1){let r=N(t,"x","prod");r.dtype==="bool"&&(r=Ne(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return C.runKernel(Aw,s,a)}const v2=E({prod_:d4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p4(t,e,n,r){const s=t.map((c,d)=>N(c,`tensors${d}`,"raggedGather","int32")),a=N(e,"paramsDenseValues","raggedGather"),o=N(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:a,indices:o},l={outputRaggedRank:r},u=C.runKernel(Iw,i,l);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}const b2=E({raggedGather_:p4});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f4(t,e,n){const r=N(t,"starts","raggedRange"),s=N(e,"limits","raggedRange",r.dtype),a=N(n,"deltas","raggedRange",r.dtype),o={starts:r,limits:s,deltas:a},i=C.runKernel(Dw,o);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const w2=E({raggedRange_:f4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h4(t,e,n,r,s){const a=N(t,"shape","raggedTensorToTensor","int32"),o=N(e,"values","raggedTensorToTensor"),i=N(n,"defaultValue","raggedTensorToTensor",o.dtype),l=r.map((d,p)=>N(d,`tensors${p}`,"raggedTensorToTensor","int32")),u={shape:a,values:o,defaultValue:i,rowPartitionTensors:l},c={rowPartitionTypes:s};return C.runKernel(jw,u,c)}const x2=E({raggedTensorToTensor_:h4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m4(t,e,n){$t(t);const r=Ie(t);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let a=0;a<r;a++)s[a]=e();return C.makeTensor(s,t,n)}const N2=E({rand_:m4});var Qf={exports:{}};Qf.exports;(function(t){(function(e,n,r){function s(l){var u=this,c=i();u.next=function(){var d=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=d-(u.c=d|0)},u.c=1,u.s0=c(" "),u.s1=c(" "),u.s2=c(" "),u.s0-=c(l),u.s0<0&&(u.s0+=1),u.s1-=c(l),u.s1<0&&(u.s1+=1),u.s2-=c(l),u.s2<0&&(u.s2+=1),c=null}function a(l,u){return u.c=l.c,u.s0=l.s0,u.s1=l.s1,u.s2=l.s2,u}function o(l,u){var c=new s(l),d=u&&u.state,p=c.next;return p.int32=function(){return c.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,d&&(typeof d=="object"&&a(d,c),p.state=function(){return a(c,{})}),p}function i(){var l=4022871197,u=function(c){c=String(c);for(var d=0;d<c.length;d++){l+=c.charCodeAt(d);var p=.02519603282416938*l;l=p>>>0,p-=l,p*=l,l=p>>>0,p-=l,l+=p*4294967296}return(l>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=o:this.alea=o})(ls,t)})(Qf);var g4=Qf.exports,Xf={exports:{}};Xf.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var d=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^d^d>>>8},i===(i|0)?l.x=i:u+=i;for(var c=0;c<u.length+64;c++)l.x^=u.charCodeAt(c)|0,l.next()}function a(i,l){return l.x=i.x,l.y=i.y,l.z=i.z,l.w=i.w,l}function o(i,l){var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,f=(u.next()>>>0)/4294967296,m=(p+f)/(1<<21);while(m===0);return m},d.int32=u.next,d.quick=d,c&&(typeof c=="object"&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xor128=o})(ls,t)})(Xf);var y4=Xf.exports,Yf={exports:{}};Yf.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.next=function(){var d=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(d^d<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,i===(i|0)?l.x=i:u+=i;for(var c=0;c<u.length+64;c++)l.x^=u.charCodeAt(c)|0,c==u.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function a(i,l){return l.x=i.x,l.y=i.y,l.z=i.z,l.w=i.w,l.v=i.v,l.d=i.d,l}function o(i,l){var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,f=(u.next()>>>0)/4294967296,m=(p+f)/(1<<21);while(m===0);return m},d.int32=u.next,d.quick=d,c&&(typeof c=="object"&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xorwow=o})(ls,t)})(Yf);var v4=Yf.exports,Jf={exports:{}};Jf.exports;(function(t){(function(e,n,r){function s(i){var l=this;l.next=function(){var c=l.x,d=l.i,p,f;return p=c[d],p^=p>>>7,f=p^p<<24,p=c[d+1&7],f^=p^p>>>10,p=c[d+3&7],f^=p^p>>>3,p=c[d+4&7],f^=p^p<<7,p=c[d+7&7],p=p^p<<13,f^=p^p<<9,c[d]=f,l.i=d+1&7,f};function u(c,d){var p,f=[];if(d===(d|0))f[0]=d;else for(d=""+d,p=0;p<d.length;++p)f[p&7]=f[p&7]<<15^d.charCodeAt(p)+f[p+1&7]<<13;for(;f.length<8;)f.push(0);for(p=0;p<8&&f[p]===0;++p);for(p==8?f[7]=-1:f[p],c.x=f,c.i=0,p=256;p>0;--p)c.next()}u(l,i)}function a(i,l){return l.x=i.x.slice(),l.i=i.i,l}function o(i,l){i==null&&(i=+new Date);var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,f=(u.next()>>>0)/4294967296,m=(p+f)/(1<<21);while(m===0);return m},d.int32=u.next,d.quick=d,c&&(c.x&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xorshift7=o})(ls,t)})(Jf);var b4=Jf.exports,Zf={exports:{}};Zf.exports;(function(t){(function(e,n,r){function s(i){var l=this;l.next=function(){var c=l.w,d=l.X,p=l.i,f,m;return l.w=c=c+1640531527|0,m=d[p+34&127],f=d[p=p+1&127],m^=m<<13,f^=f<<17,m^=m>>>15,f^=f>>>12,m=d[p]=m^f,l.i=p,m+(c^c>>>16)|0};function u(c,d){var p,f,m,g,w,y=[],b=128;for(d===(d|0)?(f=d,d=null):(d=d+"\0",f=0,b=Math.max(b,d.length)),m=0,g=-32;g<b;++g)d&&(f^=d.charCodeAt((g+32)%d.length)),g===0&&(w=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,g>=0&&(w=w+1640531527|0,p=y[g&127]^=f+w,m=p==0?m+1:0);for(m>=128&&(y[(d&&d.length||0)&127]=-1),m=127,g=4*128;g>0;--g)f=y[m+34&127],p=y[m=m+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,y[m]=f^p;c.w=w,c.X=y,c.i=m}u(l,i)}function a(i,l){return l.i=i.i,l.w=i.w,l.X=i.X.slice(),l}function o(i,l){i==null&&(i=+new Date);var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,f=(u.next()>>>0)/4294967296,m=(p+f)/(1<<21);while(m===0);return m},d.int32=u.next,d.quick=d,c&&(c.X&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xor4096=o})(ls,t)})(Zf);var w4=Zf.exports,eh={exports:{}};eh.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.next=function(){var d=l.b,p=l.c,f=l.d,m=l.a;return d=d<<25^d>>>7^p,p=p-f|0,f=f<<24^f>>>8^m,m=m-d|0,l.b=d=d<<20^d>>>12^p,l.c=p=p-f|0,l.d=f<<16^p>>>16^m,l.a=m-d|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,i===Math.floor(i)?(l.a=i/4294967296|0,l.b=i|0):u+=i;for(var c=0;c<u.length+20;c++)l.b^=u.charCodeAt(c)|0,l.next()}function a(i,l){return l.a=i.a,l.b=i.b,l.c=i.c,l.d=i.d,l}function o(i,l){var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,f=(u.next()>>>0)/4294967296,m=(p+f)/(1<<21);while(m===0);return m},d.int32=u.next,d.quick=d,c&&(typeof c=="object"&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.tychei=o})(ls,t)})(eh);var x4=eh.exports,k2={exports:{}};const N4={},k4=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),S4=hk(k4);(function(t){(function(e,n,r){var s=256,a=6,o=52,i="random",l=r.pow(s,a),u=r.pow(2,o),c=u*2,d=s-1,p;function f(k,_,$){var T=[];_=_==!0?{entropy:!0}:_||{};var I=y(w(_.entropy?[k,x(n)]:k??b(),3),T),D=new m(T),O=function(){for(var P=D.g(a),V=l,W=0;P<u;)P=(P+W)*s,V*=s,W=D.g(1);for(;P>=c;)P/=2,V/=2,W>>>=1;return(P+W)/V};return O.int32=function(){return D.g(4)|0},O.quick=function(){return D.g(4)/4294967296},O.double=O,y(x(D.S),n),(_.pass||$||function(P,V,W,K){return K&&(K.S&&g(K,D),P.state=function(){return g(D,{})}),W?(r[i]=P,V):P})(O,I,"global"in _?_.global:this==r,_.state)}function m(k){var _,$=k.length,T=this,I=0,D=T.i=T.j=0,O=T.S=[];for($||(k=[$++]);I<s;)O[I]=I++;for(I=0;I<s;I++)O[I]=O[D=d&D+k[I%$]+(_=O[I])],O[D]=_;(T.g=function(P){for(var V,W=0,K=T.i,ne=T.j,de=T.S;P--;)V=de[K=d&K+1],W=W*s+de[d&(de[K]=de[ne=d&ne+V])+(de[ne]=V)];return T.i=K,T.j=ne,W})(s)}function g(k,_){return _.i=k.i,_.j=k.j,_.S=k.S.slice(),_}function w(k,_){var $=[],T=typeof k,I;if(_&&T=="object")for(I in k)try{$.push(w(k[I],_-1))}catch{}return $.length?$:T=="string"?k:k+"\0"}function y(k,_){for(var $=k+"",T,I=0;I<$.length;)_[d&I]=d&(T^=_[d&I]*19)+$.charCodeAt(I++);return x(_)}function b(){try{var k;return p&&(k=p.randomBytes)?k=k(s):(k=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(k)),x(k)}catch{var _=e.navigator,$=_&&_.plugins;return[+new Date,e,$,e.screen,x(n)]}}function x(k){return String.fromCharCode.apply(0,k)}if(y(r.random(),n),t.exports){t.exports=f;try{p=S4}catch{}}else r["seed"+i]=f})(typeof self<"u"?self:ls,[],Math)})(k2);var E4=k2.exports,_4=g4,T4=y4,C4=v4,$4=b4,A4=w4,I4=x4,ps=E4;ps.alea=_4;ps.xor128=T4;ps.xorwow=C4;ps.xorshift7=$4;ps.xor4096=A4;ps.tychei=I4;var th=ps;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nh{constructor(e,n,r,s,a){this.mean=e,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=th.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,n,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class D4{constructor(e,n,r,s){this.alpha=e,this.beta=1/n,this.dtype=r;const a=s||Math.random();this.randu=th.alea(a.toString()),this.randn=new nh(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,n,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,e=s*s,n=1-.331*e*e,r=.5*e+this.d*(1-o+Math.log(o)),a=this.randu(),a<n||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class j4{constructor(e=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=n-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${n} <= 1 and dtype is not float`);this.random=th.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O4(t,e,n=1,r="float32",s){if($t(t),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new D4(e,n,r,s),o=un(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const S2=E({randomGamma_:O4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P4(t,e=0,n=1,r,s){if($t(t),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new nh(e,n,r,!1,s),o=un(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const rh=E({randomNormal_:P4});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F4(t,e,n){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return rh(t,0,1,e,n)}const E2=E({randomStandardNormal_:F4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L4(t,e=0,n=1,r="float32",s){$t(t);const a=un(t,r),o=new j4(e,n,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const ku=E({randomUniform_:L4});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R4(t,e,n,r){return ku(t,e,n,"int32",r)}const _2=E({randomUniformInt_:R4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aa(t,e,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:t,stop:e,step:n,dtype:r};return C.runKernel(Ow,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z4(t){const n={input:N(t,"input","real")};return C.runKernel(Pw,n)}const oa=E({real_:z4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B4(t){const n={x:N(t,"x","reciprocal")};return C.runKernel(Fw,n)}const T2=E({reciprocal_:B4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M4(t){const n={x:N(t,"x","relu")};return C.runKernel(Lw,n)}const Jo=E({relu_:M4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V4(t){const n={x:N(t,"x","relu6")};return C.runKernel(Mw,n)}const sh=E({relu6_:V4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U4(t,e){const r={x:N(t,"x","reverse")},s={dims:e};return C.runKernel(Vw,r,s)}const gr=E({reverse_:U4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K4(t){const e=N(t,"x","reverse");return S(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),gr(e,0)}const C2=E({reverse1d_:K4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W4(t,e){const n=N(t,"x","reverse");return S(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),gr(n,e)}const $2=E({reverse2d_:W4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q4(t,e){const n=N(t,"x","reverse");return S(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),gr(n,e)}const A2=E({reverse3d_:q4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H4(t,e){const n=N(t,"x","reverse");return S(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),gr(n,e)}const I2=E({reverse4d_:H4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G4(t){const n={x:N(t,"x","round")};return C.runKernel(Uw,n)}const ah=E({round_:G4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q4(t){const n={x:N(t,"x","rsqrt","float32")};return C.runKernel(Kw,n)}const D2=E({rsqrt_:Q4});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X4(t){const n={x:N(t,"x","selu")};return C.runKernel(Qw,n)}const j2=E({selu_:X4});function Y4(t,e,n,r,s,a=[1,1],o="NHWC"){const i=N(t,"x","separableConv2d"),l=N(e,"depthwiseFilter","separableConv2d"),u=N(n,"pointwiseFilter","separableConv2d");let c=i,d=!1;if(i.rank===3&&(d=!0,c=j(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),S(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),S(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),S(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const p=l.shape[2],f=l.shape[3];S(u.shape[2]===p*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${p*f}, but got ${u.shape[2]}.`);const m=bu(c,l,r,s,o,a),w=Go(m,u,1,"valid",o);return d?j(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const O2=E({separableConv2d_:Y4});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function J4(t,e){const n=N(t,"x","setdiff1d"),r=N(e,"y","setdiff1d");S(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),S(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),S(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),a=await r.data(),o=new Set(a);let i=0;for(let c=0;c<s.length;c++)o.has(s[c])||i++;const l=new $l([i],n.dtype),u=new $l([i],"int32");for(let c=0,d=0;c<s.length;c++)o.has(s[c])||(l.values[d]=s[c],u.values[d]=c,d++);return[l.toTensor(),u.toTensor()]}const P2=J4;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z4(t){const n={x:N(t,"x","sign")};return C.runKernel(Zw,n)}const F2=E({sign_:Z4});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eA(t){const n={x:N(t,"x","sin","float32")};return C.runKernel(Yw,n)}const L2=E({sin_:eA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tA(t){const n={x:N(t,"x","sinh")};return C.runKernel(Jw,n)}const R2=E({sinh_:tA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nA(t,e,n){const r=N(t,"x","slice1d");return S(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),ae(r,[e],[n])}const z2=E({slice1d_:nA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rA(t,e,n){const r=N(t,"x","slice2d");return S(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),ae(r,e,n)}const B2=E({slice2d_:rA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sA(t,e,n){const r=N(t,"x","slice3d");return S(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),ae(r,e,n)}const M2=E({slice3d_:sA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aA(t,e,n){const r=N(t,"x","slice4d");return S(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),ae(r,e,n)}const V2=E({slice4d_:aA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oA(t,e=-1){const n=N(t,"logits","softmax","float32");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},s={dim:e};return C.runKernel(o1,r,s)}const oh=E({softmax_:oA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iA(t){S(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return C.runKernel(Fb,e)}const Su=E({fft_:iA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lA(t){S(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return C.runKernel(qb,e)}const $o=E({ifft_:lA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uA(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const s=j(t,[n,e]);r=$o(s)}else{const s=[n,2*(e-1)],a=j(oa(t),[n,e]),o=j(Yo(t),[n,e]),i=gr(ae(a,[0,1],[n,e-2]),1),l=R(gr(ae(o,[0,1],[n,e-2]),1),Z(-1)),u=We([a,i],1),c=We([o,l],1),d=j(Fn(u,c),[s[0],s[1]]);r=$o(d)}if(r=oa(r),t.rank===3&&t.shape[0]!==0){const s=r,a=t.shape[0];r=j(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const ih=E({irfft_:uA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cA(t,e,n=0){const s={x:N(t,"x","split")},a={numOrSizeSplits:e,axis:n};return C.runKernel(a1,s,a)}const ia=E({split_:cA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dA(t,e){S(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const r=t.size/n;let s;if(e!=null&&e<n){const m=t.shape.map(w=>0),g=t.shape.map(w=>w);g[t.shape.length-1]=e,s=ae(t,m,g),n=e}else if(e!=null&&e>n){const m=t.shape.map(g=>g);m[t.shape.length-1]=e-n,s=We([t,mr(m)],t.shape.length-1),n=e}else s=t;const a=bt(s),o=j(Fn(s,a),[r,n]),i=Su(o),l=Math.floor(n/2)+1,u=oa(i),c=Yo(i),d=ia(u,[l,n-l],u.shape.length-1),p=ia(c,[l,n-l],c.shape.length-1),f=s.shape.slice();return f[s.shape.length-1]=l,j(Fn(d[0],p[0]),f)}const Eu=E({rfft_:dA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pA(t,e){let n=N(t,"a","squaredDifference"),r=N(e,"b","squaredDifference");[n,r]=Se(n,r),Le(n.shape,r.shape);const s={a:n,b:r},a={};return C.runKernel(p1,s,a)}const lh=E({squaredDifference_:pA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fA(t,e){const n=N(t,"x","squeeze","string_or_numeric");return j(n,xT(n.shape,e).newShape)}const Zo=E({squeeze_:fA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hA(t,e=0){const n=Al(t,"tensors","stack","string_or_numeric");S(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&S(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:e};return C.runKernel(_w,r,s)}const pn=E({stack_:hA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mA(t,e=0){const r={x:N(t,"x","step")},s={alpha:e};return C.runKernel(T1,r,s)}const uh=E({step_:mA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gA(t,e,n,r,s=0,a=0,o=0,i=0,l=0){const c={x:N(t,"x","stridedSlice","string_or_numeric")},d={begin:e,end:n,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:l};return C.runKernel(h1,c,d)}const U2=E({stridedSlice_:gA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yA(t){const n={x:N(t,"x","tan","float32")};return C.runKernel(b1,n)}const K2=E({tan_:yA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kt(t,e){fa(t);const n=Sr(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Er(t,null,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Us(t,e,n){if(fa(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Sr(t,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Er(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ch(t,e,n){if(fa(t),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Sr(t,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Er(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W2(t,e,n){if(fa(t),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Sr(t,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Er(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q2(t,e,n){if(fa(t),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Sr(t,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Er(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H2(t,e,n){if(fa(t),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Sr(t,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Er(t,e,r,n)}function vA(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,s=e.rank>1?e.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(t.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+t.length-r)throw new Error(a+` update.rank != ${s+t.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==e.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${e.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==t[o+r])throw new Error(a+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${t[o+s]})`)}function G2(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}vA(n,e,t)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bA(t,e,n){const r=N(t,"tensor","tensorScatterupdate"),s=N(e,"indices","tensorScatterupdate","int32"),a=N(n,"updates","tensorScatterupdate");if(G2(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const o={tensor:r,indices:s,updates:a},i={};return C.runKernel(qw,o,i)}const Q2=E({tensorScatterUpdate_:bA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wA(t,e=1,n=!0){const r=N(t,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${e}`);const a={x:r},o={k:e,sorted:n},[i,l]=C.runKernel(x1,a,o);return{values:i,indices:l}}const X2=E({topk_:wA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xA(t,e=0,n=1,r,s){if($t(t),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new nh(e,n,r,!0,s),o=un(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Y2=E({truncatedNormal_:xA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NA(t,e=0){const n=N(t,"x","unique","string_or_numeric");S(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:e},[a,o]=C.runKernel(k1,r,s);return{values:a,indices:o}}const J2=E({unique_:NA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kA(t,e,n){const r=N(t,"x","unsortedSegmentSum"),s=N(e,"segmentIds","unsortedSegmentSum","int32");S(No(n),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:n};return C.runKernel(E1,a,o)}const Z2=E({unsortedSegmentSum_:kA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SA(t,e=0){const n=N(t,"x","unstack","string_or_numeric");S(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:e};return C.runKernel(S1,r,s)}const Tr=E({unstack_:SA});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eN(t,e){return Nu(t,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tN(t,e=!0,n,r){return C.makeVariable(t,e,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function EA(t,e){const n=[];for(let a=0;a<e.length;a++)e[a]&&n.push(a);const r=un(t,"int32"),s=un([n.length,t.length],"int32");for(let a=0;a<n.length;a++){const o=r.indexToLoc(n[a]),i=a*t.length;s.values.set(o,i)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function _A(t){const e=N(t,"condition","whereAsync","bool"),n=await e.data(),r=EA(e.shape,n);return t!==e&&e.dispose(),r}const dh=_A;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function TA(t,e,n){const r=N(t,"tensor","boolMask"),s=N(e,"mask","boolMask","bool"),a=n??0,o=s.rank,i=r.shape;S(o>0,()=>"mask cannot be scalar"),zt(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let g=a;g<a+o;g++)l*=i[g];const u=i.slice(0,a).concat([l],i.slice(a+o)),c=j(r,u),d=j(s,[-1]),p=await dh(d),f=Zo(p,[1]),m=Ff(c,f,a);return t!==r&&r.dispose(),e!==s&&s.dispose(),f.dispose(),c.dispose(),d.dispose(),p.dispose(),m}const nN=TA;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CA(t,e,n){const r=N(t,"x","transpose");if(e==null&&(e=r.shape.map((o,i)=>i).reverse()),S(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(o=>{S(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:e};return r.dtype==="complex64"?te(()=>{let o=oa(r),i=Yo(r);return o=C.runKernel(Vi,{x:o},a),i=C.runKernel(Vi,{x:i},a),n&&(i=Xt(i)),Fn(o,i)}):C.runKernel(Vi,s,a)}const Fl=E({transpose_:CA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $A(t,e,n,r,s=!0){const a=N(t,"v","movingAverage"),o=N(e,"x","movingAverage"),i=N(n,"decay","movingAverage");HT(a,o),S(Pn(a.shape,o.shape),()=>"Shape mismatch in v and x");const l=Z(1),u=X(l,i);let c=R(X(o,a),u);if(s){S(r!=null,()=>"When using zeroDebias: true, step is required.");const d=N(r,"step","movingAverage");c=ue(c,X(l,ra(i,d)))}return H(a,c)}const rN=E({movingAverage_:$A});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AA(t,e,n){$t(n);const r=N(t,"indices","scatterND","int32"),s=N(e,"updates","scatterND");G2(s,r,n);const a={indices:r,updates:s},o={shape:n};return C.runKernel(Ww,a,o)}const sN=E({scatterND_:AA});function IA(t,e,n,r){if(t.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const s=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=e.size;if(!(e.rank===0||e.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DA(t,e,n,r=0){$t(n);const s=N(t,"sparseIndices","sparseToDense","int32"),a=N(e,"sparseValues","sparseToDense","string_or_numeric"),o=N(r,"defaultValue","sparseToDense",a.dtype);IA(s,a,n,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},l={outputShape:n};return C.runKernel(d1,i,l)}const aN=E({sparseToDense_:DA});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jA(t,e){const n=N(e,"indices","gatherND","int32"),s={params:N(t,"x","gatherND","string_or_numeric"),indices:n};return C.runKernel(Ub,s)}const oN=E({gatherND_:jA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OA(t,e){if(e==null)return t.shape.slice();if(Pn(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)e[r]==null&&t.shape[r]!=null?n.push(t.shape[r]):n.push(e[r]);return n}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PA(t,e,n,r){const s=N(t,"x","dropout");if(S(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),S(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return t instanceof ze?s.clone():s;const a=OA(s,n),o=1-e,i=ue(Pf(H(ku(a,0,1,"float32",r),o)),o);return R(s,i)}const iN=E({dropout_:PA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ph(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function _u(t,e,n){const r=1-t%2,s=new Float32Array(t);for(let a=0;a<t;++a){const o=2*Math.PI*a/(t+r-1);s[a]=e-n*Math.cos(o)}return kt(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function FA(t,e,n=1){const r=N(t,"predictions","inTopK"),s=N(e,"targets","inTopK");S(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),S(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),zt(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];S(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);const o=await r.data(),i=await s.data(),[l,u]=[o.length/a,a],c=NT("bool",l);for(let d=0;d<l;d++){const p=d*u,f=o.subarray(p,p+u),m=[];for(let g=0;g<f.length;g++)m.push({value:f[g],index:g});m.sort((g,w)=>w.value-g.value),c[d]=0;for(let g=0;g<n;g++)if(m[g].index===i[d]){c[d]=1;break}}return t!==r&&r.dispose(),e!==s&&s.dispose(),Qt(c,s.shape,"bool")}const lN=FA;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LA(t,e,n,r,s,a="NHWC",o){let i=t;t.rank===3&&(i=j(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=j(e,[1,e.shape[0],e.shape[1],e.shape[2]])),S(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),S(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),S(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=a==="NHWC"?i.shape[3]:i.shape[1],c=a==="NHWC"?l.shape[3]:l.shape[1];S(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),S(c===n[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`),en("conv2dDerFilter",s,o);const d={x:i,dy:l},p={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:n};return C.runKernel(pb,d,p)}const RA=E({conv2DBackpropFilter_:LA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fh(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return R(t,uh(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function hh(t,e){let n=e;const r=WC(t.shape,e.shape);return r.length>0&&(n=le(n,r)),j(n,t.shape)}function mh(t,e,n,r){if(e==="linear")return t;if(e==="relu")return Jo(t);if(e==="elu")return jf(t);if(e==="relu6")return sh(t);if(e==="prelu")return Gf(t,n);if(e==="leakyrelu")return Rf(t,r);if(e==="sigmoid")return Kr(t);throw new Error(`Unknown fused activation ${e}.`)}const gh=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zA({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",gh(C.state.gradientDepth,l)===!1){S(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=Go(t,e,n,r,s,a,o);return i!=null&&($=H($,i)),mh($,l,u,c)}const d=N(t,"x","conv2d","float32"),p=N(e,"filter","conv2d","float32");let f=d,m=!1;d.rank===3&&(m=!0,f=j(d,[1,d.shape[0],d.shape[1],d.shape[2]])),S(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),S(p.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${p.rank}.`),en("fused conv2d",r,o);const g=s==="NHWC"?f.shape[3]:f.shape[1];S(p.shape[2]===g,()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${p.shape[2]}.`),S(_r(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const w=Cf(f.shape,p.shape,n,a,r,o);let y;i!=null&&(y=N(i,"bias","fused conv2d"),[y]=Se(y,d),s==="NHWC"?Le(w.outShape,y.shape):(S(y.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${y.shape.length}.`),S(y.shape.length===0||y.shape[0]===w.outChannels||y.shape[0]===1,()=>`Error in fused conv2d: bias shape (${y.shape}) is not compatible with the number of output channels (${w.outChannels})`)));let b;if(u!=null){const $=u.shape;if(S($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)S($[0]===1||$[0]===w.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${w.outChannels}).`);else if($.length===3)try{Le($,w.outShape)}catch{const I=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${w.outShape}).`;throw Error(I)}b=N(u,"prelu weights","fused conv2d")}const x=($,T)=>{S(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[I,D,O,P]=T,V=fh($,O,l);S(Dl(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const W=Tx(D.shape,V,I,n,r),K=RA(D,V,I.shape,n,r),ne=[W,K];if(P!=null){const de=hh(P,V);ne.push(de)}return ne},k={x:f,filter:p,bias:y,preluActivationWeights:b},_={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return i==null?dn((T,I,D)=>{let O=C.runKernel(vd,k,_);return D([I,T,O]),m&&(O=j(O,[O.shape[1],O.shape[2],O.shape[3]])),{value:O,gradFunc:x}})(f,p):dn((T,I,D,O)=>{let P=C.runKernel(vd,k,_);return O([I,T,P,D]),m&&(P=j(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:x}})(f,p,y)}const BA=E({fusedConv2d_:zA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MA(t,e,n,r,s,a=[1,1],o){let i=t;t.rank===3&&(i=j(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=j(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={x:i,dy:l},c={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:n};return C.runKernel(Sb,u,c)}const VA=E({depthwiseConv2dNativeBackpropFilter_:MA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UA(t,e,n,r,s,a=[1,1],o){let i=e,l=!1;e.rank===3&&(l=!0,i=j(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={dy:i,filter:n},c={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:t},d=C.runKernel(Eb,u,c);return l?j(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const KA=E({depthwiseConv2dNativeBackpropInput_:UA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WA({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(gh(C.state.gradientDepth,l)===!1){let _=bu(t,e,n,r,s,a,o);return i!=null&&(_=H(_,i)),mh(_,l,u,c)}const d=N(t,"x","depthwiseConv2d","float32"),p=N(e,"filter","depthwiseConv2d","float32");let f=d,m=!1;d.rank===3&&(m=!0,f=j(d,[1,d.shape[0],d.shape[1],d.shape[2]])),S(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),S(p.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${p.rank}.`),S(f.shape[3]===p.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${p.shape[2]}.`),a==null&&(a=[1,1]),S(_r(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),en("fused depthwiseConv2d",r,o);const g=Cf(f.shape,p.shape,n,a,r,o,!0);let w;i!=null&&(w=N(i,"bias","fused conv2d"),[w]=Se(w,d),Le(g.outShape,w.shape));let y;u!=null&&(y=N(u,"prelu weights","fused depthwiseConv2d"));const b=(_,$)=>{S(Dl(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[T,I,D,O]=$,P=fh(_,D,l),V=KA(I.shape,P,T,n,r,a,o),W=VA(I,P,T.shape,n,r,a,o);if(O!=null){const K=hh(w,P);return[V,W,K]}return[V,W]},x={x:f,filter:p,bias:w,preluActivationWeights:y},k={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return i==null?dn(($,T,I)=>{let D=C.runKernel(bd,x,k);return I([T,$,D]),m&&(D=j(D,[D.shape[1],D.shape[2],D.shape[3]])),{value:D,gradFunc:b}})(f,p):dn(($,T,I,D)=>{let O=C.runKernel(bd,x,k);return D([T,$,O,I]),m&&(O=j(O,[O.shape[1],O.shape[2],O.shape[3]])),{value:O,gradFunc:b}})(f,p,w)}const qA=E({fusedDepthwiseConv2d_:WA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function HA({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(gh(C.state.gradientDepth,a)===!1){let P=se(t,e,n,r);return s!=null&&(P=H(P,s)),mh(P,a,o,i)}let l=N(t,"a","fused matMul"),u=N(e,"b","fused matMul");[l,u]=Se(l,u);const c=n?l.shape[l.rank-2]:l.shape[l.rank-1],d=r?u.shape[u.rank-1]:u.shape[u.rank-2],p=n?l.shape[l.rank-1]:l.shape[l.rank-2],f=r?u.shape[u.rank-2]:u.shape[u.rank-1],m=l.shape.slice(0,-2),g=u.shape.slice(0,-2),w=Ie(m),y=Ie(g);S(c===d,()=>`Error in fused matMul: inner shapes (${c}) and (${d}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`);const x=Le(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([p,f]),k=n?j(l,[w,c,p]):j(l,[w,p,c]),_=r?j(u,[y,f,d]):j(u,[y,d,f]);let $;s!=null&&($=N(s,"bias","fused matMul"),[$]=Se($,l),Le(x,$.shape));let T;o!=null&&(T=N(o,"prelu weights","fused matMul"));const I=(P,V)=>{const[W,K,ne,de]=V,re=fh(j(P,ne.shape),ne,a);let L,U;if(!n&&!r?(L=se(re,K,!1,!0),U=se(W,re,!0,!1)):!n&&r?(L=se(re,K,!1,!1),U=se(re,W,!0,!1)):n&&!r?(L=se(K,re,!1,!0),U=se(W,re,!1,!1)):(L=se(K,re,!0,!0),U=se(re,W,!0,!0)),s!=null){const Q=hh(de,re);return[L,U,Q]}else return[L,U]},D={a:k,b:_,bias:$,preluActivationWeights:T},O={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:i};return s==null?dn((V,W,K)=>{const ne=C.runKernel(yd,D,O);return K([V,W,ne]),{value:j(ne,x),gradFunc:I}})(k,_):dn((V,W,K,ne)=>{const de=C.runKernel(yd,D,O);return ne([V,W,de,K]),{value:j(de,x),gradFunc:I}})(k,_,$)}const GA=E({fusedMatMul_:HA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uN=Object.freeze(Object.defineProperty({__proto__:null,conv2d:BA,depthwiseConv2d:qA,matMul:GA},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function QA(t){return _u(t,.54,.46)}const XA=E({hammingWindow_:QA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YA(t){return _u(t,.5,.5)}const cN=E({hannWindow_:YA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function JA(t,e,n,r=!1,s=0){let a=0;const o=[];for(;a+e<=t.size;)o.push(ae(t,a,e)),a+=n;if(r)for(;a<t.size;){const i=a+e-t.size,l=We([ae(t,a,e-i),ha([i],s)]);o.push(l),a+=n}return o.length===0?Us([],[0,e]):j(We(o),[o.length,e])}const dN=E({frame_:JA});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZA(t,e,n,r,s=cN){r==null&&(r=ph(e));const a=dN(t,e,n),o=R(a,s(e));return Eu(o,r)}const eI=E({stft_:ZA});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tI(t,e,n,r,s="bilinear",a=0){const o=N(t,"image","cropAndResize"),i=N(e,"boxes","cropAndResize","float32"),l=N(n,"boxInd","cropAndResize","int32"),u=i.shape[0];S(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),S(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${i.shape}.`),S(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${i.shape}.`),S(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),S(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),S(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const c={image:o,boxes:i,boxInd:l},d={method:s,extrapolationValue:a,cropSize:r};return C.runKernel(wb,c,d)}const nI=E({cropAndResize_:tI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rI(t){const e=N(t,"image","flipLeftRight","float32");S(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return C.runKernel(Rb,n,{})}const sI=E({flipLeftRight_:rI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aI(t){const e=N(t,"image","grayscaleToRGB"),n=e.rank-1,r=e.shape[n];S(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),S(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,n),s[n]=3,Vs(e,s)}const oI=E({grayscaleToRGB_:aI});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iI(t){const e=N(t,"image","RGBToGrayscale"),n=e.rank-1,r=e.shape[n];S(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),S(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=e.dtype,a=Ne(e,"float32"),o=kt([.2989,.587,.114]);let i;switch(e.rank){case 2:i=Or("ij,j->i",a,o);break;case 3:i=Or("ijk,k->ij",a,o);break;case 4:i=Or("ijkl,l->ijk",a,o);break;case 5:i=Or("ijklm,m->ijkl",a,o);break;case 6:i=Or("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return i=yn(i,-1),Ne(i,s)}const lI=E({rgbToGrayscale_:iI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uI(t,e,n=0,r=.5){const s=N(t,"image","rotateWithOffset","float32");S(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:e,fillValue:n,center:r};return C.runKernel(C1,a,o)}const cI=E({rotateWithOffset_:uI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ga(t,e,n,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=t.shape[0];return n=Math.min(n,o),S(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),S(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),S(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),S(e.rank===1,()=>"scores must be a 1D tensor"),S(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`),S(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dI(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=N(t,"boxes","nonMaxSuppression","float32"),o=N(e,"scores","nonMaxSuppression","float32"),i=ga(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const l={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return C.runKernel(xw,{boxes:a,scores:o},l)}const pI=E({nonMaxSuppression_:dI});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fI(t,e,n){const r=hI(t,e,n),s=r<0?-(r+1):r;t.splice(s,0,e)}function hI(t,e,n){return gI(t,e,n||mI)}function mI(t,e){return t>e?1:t<e?-1:0}function gI(t,e,n){let r=0,s=t.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(e,t[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yI(t,e,n,r,s){return yh(t,e,n,r,s,0)}function vI(t,e,n,r,s,a){return yh(t,e,n,r,s,0,!1,a,!0)}function bI(t,e,n,r,s,a){return yh(t,e,n,r,s,a,!0)}function yh(t,e,n,r,s,a,o=!1,i=!1,l=!1){const u=[];for(let w=0;w<e.length;w++)e[w]>s&&u.push({score:e[w],boxIndex:w,suppressBeginIndex:0});u.sort(kg);const c=a>0?-.5/a:0,d=[],p=[];for(;d.length<n&&u.length>0;){const w=u.pop(),{score:y,boxIndex:b,suppressBeginIndex:x}=w;if(y<s)break;let k=!1;for(let _=d.length-1;_>=x;--_){const $=wI(t,b,d[_]);if($>=r){k=!0;break}if(w.score=w.score*xI(r,c,$),w.score<=s)break}w.suppressBeginIndex=d.length,k||(w.score===y?(d.push(b),p.push(w.score)):w.score>s&&fI(u,w,kg))}const f=d.length,m=n-f;i&&m>0&&(d.push(...new Array(m).fill(0)),p.push(...new Array(m).fill(0)));const g={selectedIndices:d};return o&&(g.selectedScores=p),l&&(g.validOutputs=f),g}function wI(t,e,n){const r=t.subarray(e*4,e*4+4),s=t.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),d=Math.max(s[0],s[2]),p=Math.max(s[1],s[3]),f=(i-a)*(l-o),m=(d-u)*(p-c);if(f<=0||m<=0)return 0;const g=Math.max(a,u),w=Math.max(o,c),y=Math.min(i,d),b=Math.min(l,p),x=Math.max(y-g,0)*Math.max(b-w,0);return x/(f+m-x)}function xI(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function kg(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function NI(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=N(t,"boxes","nonMaxSuppressionAsync"),o=N(e,"scores","nonMaxSuppressionAsync"),i=ga(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const l=await Promise.all([a.data(),o.data()]),u=l[0],c=l[1],{selectedIndices:d}=yI(u,c,n,r,s);return a!==t&&a.dispose(),o!==e&&o.dispose(),kt(d,"int32")}const kI=NI;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SI(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=N(t,"boxes","nonMaxSuppression"),i=N(e,"scores","nonMaxSuppression"),l=ga(o,i,n,r,s,a);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const u={boxes:o,scores:i},c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},d=C.runKernel(kw,u,c);return{selectedIndices:d[0],selectedScores:d[1]}}const EI=E({nonMaxSuppressionWithScore_:SI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function _I(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=N(t,"boxes","nonMaxSuppressionAsync"),i=N(e,"scores","nonMaxSuppressionAsync"),l=ga(o,i,n,r,s,a);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const u=await Promise.all([o.data(),i.data()]),c=u[0],d=u[1],{selectedIndices:p,selectedScores:f}=bI(c,d,n,r,s,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:kt(p,"int32"),selectedScores:kt(f)}}const TI=_I;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CI(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=N(t,"boxes","nonMaxSuppression"),i=N(e,"scores","nonMaxSuppression"),l=ga(o,i,n,r,s,null),u=l.maxOutputSize,c=l.iouThreshold,d=l.scoreThreshold,p={boxes:o,scores:i},f={maxOutputSize:u,iouThreshold:c,scoreThreshold:d,padToMaxOutputSize:a},m=C.runKernel(Nw,p,f);return{selectedIndices:m[0],validOutputs:m[1]}}const $I=E({nonMaxSuppressionPadded_:CI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function AI(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=N(t,"boxes","nonMaxSuppressionAsync"),i=N(e,"scores","nonMaxSuppressionAsync"),l=ga(o,i,n,r,s,null),u=l.maxOutputSize,c=l.iouThreshold,d=l.scoreThreshold,[p,f]=await Promise.all([o.data(),i.data()]),{selectedIndices:m,validOutputs:g}=vI(p,f,u,c,d,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:kt(m,"int32"),validOutputs:Z(g,"int32")}}const II=AI;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DI(t,e,n=!1,r=!1){const s=N(t,"images","resizeBilinear");S(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),S(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),S(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=j(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},l={alignCorners:n,halfPixelCenters:r,size:e},u=C.runKernel(Bw,i,l);return o?j(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const jI=E({resizeBilinear_:DI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OI(t,e,n=!1,r=!1){const s=N(t,"images","resizeNearestNeighbor");S(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),S(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),S(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),S(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=j(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},l={alignCorners:n,halfPixelCenters:r,size:e},u=C.runKernel(zw,i,l);return o?j(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const PI=E({resizeNearestNeighbor_:OI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FI(t,e="binary",n=!1,r=.5){const s=N(t,"image","threshold"),a=.2989,o=.587,i=.114,l=s.shape[0]*s.shape[1];let u=R(kt([r]),255),c,d,p,f;if(S(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),S(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),S(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),S(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[c,d,p]=ia(s,[1,1,1],-1);const w=R(c,a),y=R(d,o),b=R(p,i);f=H(H(w,y),b)}else f=t;if(e==="otsu"){const w=If(Ne(ah(f),"int32"),Qt([]),256);u=LI(w,l)}const m=n?xu(f,u):Xo(f,u);return Ne(R(m,255),"int32")}function LI(t,e){let n=kt([-1]),r=kt([0]),s=kt([0]),a,o,i,l,u,c;for(let d=0;d<t.size-1;d++){a=ae(t,0,d+1),o=ae(t,d+1),u=ue(le(a),e),c=ue(le(o),e);const p=le(R(a,aa(0,a.size)));i=ue(p,le(a));const f=ha(o.shape,a.size),m=H(aa(0,o.size),f),g=R(o,m);l=ue(le(g),le(o));const w=X(i,l),y=X(i,l),b=R(u,c);s=R(R(b,w),y);const x=Xo(s,r);r=Cn(x,s,r),n=Cn(x,kt([d]),n)}return n}const RI=E({threshold_:FI});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zI(t,e,n="nearest",r="constant",s=0,a){const o=N(t,"image","transform","float32"),i=N(e,"transforms","transform","float32");S(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),S(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),S(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const l={image:o,transforms:i},u={interpolation:n,fillMode:r,fillValue:s,outputShape:a};return C.runKernel(N1,l,u)}const BI=E({transform_:zI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MI(t,e,n){const r=N(t,"a","bandPart");S(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);let i,l;typeof e=="number"?(S(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),S(e<=a,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`),i=N(e<0?a:e,"numLower","bandPart")):(S(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=Cn(Pl(e,0),a,Co(e,a))),typeof n=="number"?(S(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),S(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),l=N(n<0?o:n,"numUpper","bandPart")):(S(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=Cn(Pl(n,0),o,Co(n,o)));const u=j(aa(0,a,1,"int32"),[-1,1]),c=aa(0,o,1,"int32"),d=X(u,c),p=_o(xu(d,i),Lf(d,Xt(l))),f=mr([a,o],r.dtype);return j(pn(Tr(j(r,[-1,a,o])).map(m=>Cn(p,m,f))),s)}const VI=E({bandPart_:MI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UI(t){let e;if(Array.isArray(t)){e=!1,S(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=t[0].shape[0];for(let a=1;a<t.length;++a)S(t[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[a].shape[0]} vs. ${s})`)}else e=!0,t=ia(t,t.shape[0],0).map(s=>Zo(s,[0]));S(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let s=0;s<t.length;++s)n.push(C.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const i=R(le(R(n[o],a)),n[o]);a=X(a,i)}return ue(a,Qo(a,"euclidean"))}));return e?pn(n,0):n}const KI=E({gramSchmidt_:UI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WI(t,e=!1){if(S(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return Sg(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((l,u)=>l*u),r=Tr(j(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),s=[],a=[];r.forEach(l=>{const[u,c]=Sg(l,e);s.push(u),a.push(c)});const o=j(pn(s,0),t.shape),i=j(pn(a,0),t.shape);return[o,i]}}function Sg(t,e=!1){return C.tidy(()=>{S(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let s=Of(n),a=Tn(t);const o=Us([[1]],[1,1]);let i=Tn(o);const l=n>=r?r:n;for(let u=0;u<l;++u){const c=a,d=i,p=s;[i,a,s]=C.tidy(()=>{const f=ae(a,[u,u],[n-u,1]),m=Qo(f),g=ae(a,[u,u],[1,1]),w=Cn(Xo(g,0),Us([[-1]]),Us([[1]])),y=X(g,R(w,m)),b=ue(f,y);b.shape[0]===1?i=Tn(o):i=We([o,ae(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const x=Xt(ue(se(w,y),m)),k=ae(a,[u,0],[n-u,r]),_=R(x,i),$=Fl(i);if(u===0)a=X(k,se(_,se($,k)));else{const D=X(k,se(_,se($,k)));a=We([ae(a,[0,0],[u,r]),D],0)}const T=Fl(_),I=ae(s,[0,u],[n,s.shape[1]-u]);if(u===0)s=X(I,se(se(I,i),T));else{const D=X(I,se(se(I,i),T));s=We([ae(s,[0,0],[n,u]),D],1)}return[i,a,s]}),tt([c,d,p])}return!e&&n>r&&(s=ae(s,[0,0],[n,r]),a=ae(a,[0,0],[r,r])),[s,a]})}const qI=E({qr_:WI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Je;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Je||(Je={}));function HI(t,e,n=Je.SUM_BY_NONZERO_WEIGHTS){const r=N(t,"losses","computeWeightedLoss");let s=null;e!=null&&(s=N(e,"weights","computeWeightedLoss"));const a=s==null?r:R(r,s);if(n===Je.NONE)return a;if(n===Je.SUM)return le(a);if(n===Je.MEAN){if(s==null)return To(a);{const o=r.size/s.size,i=ue(le(a),le(s));return o>1?ue(i,Z(o)):i}}if(n===Je.SUM_BY_NONZERO_WEIGHTS){if(s==null)return ue(le(a),Z(r.size));{const o=R(s,tr(r.shape)),i=Ne(le(qf(o,Z(0))),"float32");return ue(le(a),i)}}throw Error(`Unknown reduction: ${n}`)}const zn=E({computeWeightedLoss_:HI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GI(t,e,n,r=Je.SUM_BY_NONZERO_WEIGHTS){const s=N(t,"labels","absoluteDifference"),a=N(e,"predictions","absoluteDifference");let o=null;n!=null&&(o=N(n,"weights","absoluteDifference")),zt(s.shape,a.shape,"Error in absoluteDifference: ");const i=ft(X(s,a));return zn(i,o,r)}const QI=E({absoluteDifference_:GI});function XI(t,e,n,r,s=Je.SUM_BY_NONZERO_WEIGHTS){const a=N(t,"labels","cosineDistance"),o=N(e,"predictions","cosineDistance");let i=null;r!=null&&(i=N(r,"weights","cosineDistance")),zt(a.shape,o.shape,"Error in cosineDistance: ");const l=Z(1),u=X(l,le(R(a,o),n,!0));return zn(u,i,s)}const YI=E({cosineDistance_:XI});function JI(t,e,n,r=Je.SUM_BY_NONZERO_WEIGHTS){let s=N(t,"labels","hingeLoss");const a=N(e,"predictions","hingeLoss");let o=null;n!=null&&(o=N(n,"weights","hingeLoss")),zt(s.shape,a.shape,"Error in hingeLoss: ");const i=Z(1);s=X(R(Z(2),s),i);const l=Jo(X(i,R(s,a)));return zn(l,o,r)}const ZI=E({hingeLoss_:JI});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eD(t,e,n,r=1,s=Je.SUM_BY_NONZERO_WEIGHTS){const a=N(t,"labels","huberLoss"),o=N(e,"predictions","huberLoss");let i=null;n!=null&&(i=N(n,"weights","huberLoss")),zt(a.shape,o.shape,"Error in huberLoss: ");const l=Z(r),u=ft(X(o,a)),c=Co(u,l),d=X(u,c),p=H(R(Z(.5),Pt(c)),R(l,d));return zn(p,i,s)}const tD=E({huberLoss_:eD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nD(t,e,n,r=1e-7,s=Je.SUM_BY_NONZERO_WEIGHTS){const a=N(t,"labels","logLoss"),o=N(e,"predictions","logLoss");let i=null;n!=null&&(i=N(n,"weights","logLoss")),zt(a.shape,o.shape,"Error in logLoss: ");const l=Z(1),u=Z(r),c=Xt(R(a,sa(H(o,u)))),d=R(X(l,a),sa(H(X(l,o),u))),p=X(c,d);return zn(p,i,s)}const rD=E({logLoss_:nD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sD(t,e,n,r=Je.SUM_BY_NONZERO_WEIGHTS){const s=N(t,"labels","meanSquaredError"),a=N(e,"predictions","meanSquaredError");let o=null;n!=null&&(o=N(n,"weights","meanSquaredError")),zt(s.shape,a.shape,"Error in meanSquaredError: ");const i=lh(s,a);return zn(i,o,r)}const aD=E({meanSquaredError_:sD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oD(t,e){const n=N(t,"labels","sigmoidCrossEntropyWithLogits"),r=N(e,"logits","sigmoidCrossEntropyWithLogits");zt(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Jo(r),a=R(r,n),o=zf(hr(Xt(ft(r))));return H(X(s,a),o)}function iD(t,e,n,r=0,s=Je.SUM_BY_NONZERO_WEIGHTS){let a=N(t,"multiClassLabels","sigmoidCrossEntropy");const o=N(e,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=N(n,"weights","sigmoidCrossEntropy")),zt(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const u=Z(r),c=Z(1),d=Z(.5);a=H(R(a,X(c,u)),R(d,u))}const l=oD(a,o);return zn(l,i,s)}const lD=E({sigmoidCrossEntropy_:iD});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uD(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return dn((s,a,o)=>{const l=Mf(a,[n],!0),u=X(Ne(a,"float32"),l);o([s,u]);const c=Xt(R(u,s));return{value:le(c,[n]),gradFunc:(f,m)=>{const[g,w]=m,y=wu(f.shape,[n]);return[R(j(f,y),X(Ne(g,"float32"),hr(w))),R(j(f,y),X(hr(w),Ne(g,"float32")))]}}})(t,e)}function cD(t,e,n,r=0,s=Je.SUM_BY_NONZERO_WEIGHTS){let a=N(t,"onehotLabels","softmaxCrossEntropy");const o=N(e,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=N(n,"weights","softmaxCrossEntropy")),zt(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const u=Z(r),c=Z(1),d=Z(a.shape[1]);a=H(R(a,X(c,u)),ue(u,d))}const l=uD(a,o);return zn(l,i,s)}const dD=E({softmaxCrossEntropy_:cD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pD(t,e,n,r){const s=N(t,"indices","sparseFillEmptyRows","int32"),a=N(e,"values","sparseFillEmptyRows"),o=N(n,"denseShape","sparseFillEmptyRows","int32"),i=N(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const l={indices:s,values:a,denseShape:o,defaultValue:i},u=C.runKernel(i1,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const fD=E({sparseFillEmptyRows_:pD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hD(t,e,n){const r=N(t,"inputIndices","sparseReshape","int32"),s=N(e,"inputShape","sparseReshape","int32"),a=N(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=C.runKernel(l1,o);return{outputIndices:i[0],outputShape:i[1]}}const mD=E({sparseReshape_:hD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gD(t,e,n){const r=N(t,"data","sparseSegmentMean"),s=N(e,"indices","sparseSegmentMean","int32"),a=N(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return C.runKernel(u1,o)}const yD=E({sparseSegmentMean_:gD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vD(t,e,n){const r=N(t,"data","sparseSegmentSum"),s=N(e,"indices","sparseSegmentSum","int32"),a=N(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return C.runKernel(c1,o)}const bD=E({sparseSegmentSum_:vD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wD(t,e,n,r,s,a,o,i){const l=N(t,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const u=N(e,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},d={data:l,dataSplits:u},p=C.runKernel(m1,d,c);return{nGrams:p[0],nGramsSplits:p[1]}}const xD=E({stringNGrams_:wD});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ND(t,e,n=!0){const r=N(t,"input","stringSplit","string"),s=N(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:n},o={input:r,delimiter:s},i=C.runKernel(g1,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const kD=E({stringSplit_:ND});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SD(t,e){const n=N(t,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return C.runKernel(y1,s,r)}const ED=E({stringToHashBucketFast_:SD});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _D(t,e,n,r=!0){const s=N(t,"input","staticRegexReplace","string"),a={pattern:e,rewrite:n,replaceGlobal:r};return C.runKernel(f1,{x:s},a)}const TD=E({staticRegexReplace_:_D});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pN={fft:Su,ifft:$o,rfft:Eu,irfft:ih},fN={hammingWindow:XA,hannWindow:cN,frame:dN,stft:eI},vh={flipLeftRight:sI,grayscaleToRGB:oI,resizeNearestNeighbor:PI,resizeBilinear:jI,rgbToGrayscale:lI,rotateWithOffset:cI,cropAndResize:nI,nonMaxSuppression:pI,nonMaxSuppressionAsync:kI,nonMaxSuppressionWithScore:EI,nonMaxSuppressionWithScoreAsync:TI,nonMaxSuppressionPadded:$I,nonMaxSuppressionPaddedAsync:II,threshold:RI,transform:BI},hN={bandPart:VI,gramSchmidt:KI,qr:qI},mN={absoluteDifference:QI,computeWeightedLoss:zn,cosineDistance:YI,hingeLoss:ZI,huberLoss:tD,logLoss:rD,meanSquaredError:aD,sigmoidCrossEntropy:lD,softmaxCrossEntropy:dD},gN={sparseFillEmptyRows:fD,sparseReshape:mD,sparseSegmentMean:yD,sparseSegmentSum:bD},yN={stringNGrams:xD,stringSplit:kD,stringToHashBucketFast:ED,staticRegexReplace:TD};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const CD=new Map,$D=new Map;class AD{getClassName(){return this.constructor.className}static fromConfig(e,n){return new e(n)}}class Pr{constructor(){this.classNameMap={}}static getMap(){return Pr.instance==null&&(Pr.instance=new Pr),Pr.instance}static register(e){Pr.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function ID(t,e,n){S(t.className!=null,()=>"Class being registered does not have the static className property defined."),S(typeof t.className=="string",()=>"className is required to be a string, but got type "+typeof t.className),S(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof n>"u"&&(n=t.className);const r=n,s=e+">"+r;return Pr.register(t),CD.set(s,t),$D.set(t,s),t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cr extends AD{minimize(e,n=!1,r){const{value:s,grads:a}=this.computeGradients(e,r);if(r!=null){const o=r.map(i=>({name:i.name,tensor:a[i.name]}));this.applyGradients(o)}else this.applyGradients(a);return tt(a),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,n){return Yx(e,n)}dispose(){this.iterations_!=null&&tt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Z(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Cr,Symbol.hasInstance,{value:t=>t.minimize!=null&&t.computeGradients!=null&&t.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vN extends Cr{static get className(){return"Adadelta"}constructor(e,n,r=null){super(),this.learningRate=e,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:te(()=>bt(a).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:te(()=>bt(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const l=this.accumulatedGrads[s].variable,u=this.accumulatedUpdates[s].variable;te(()=>{const c=H(R(l,this.rho),R(Pt(i),1-this.rho)),d=R(ue(cn(H(u,this.epsilon)),cn(H(l,this.epsilon))),i),p=H(R(u,this.rho),R(Pt(d),1-this.rho));l.assign(c),u.assign(p);const f=H(R(d,-this.learningRate),a);a.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(tt(this.accumulatedGrads.map(e=>e.variable)),tt(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bN extends Cr{static get className(){return"Adagrad"}constructor(e,n=.1){super(),this.learningRate=e,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:te(()=>ha(a.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const i=this.accumulatedGrads[s].variable;te(()=>{const l=H(i,Pt(o));i.assign(l);const u=H(R(ue(o,cn(H(l,C.backend.epsilon()))),-this.learningRate),a);a.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&tt(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,n){return new e(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wN extends Cr{static get className(){return"Adam"}constructor(e,n,r,s=null){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],te(()=>{this.accBeta1=Z(n).variable(),this.accBeta2=Z(r).variable()}),s==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);te(()=>{const r=X(1,this.accBeta1),s=X(1,this.accBeta2);n.forEach((a,o)=>{const i=C.registeredVariables[a],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:te(()=>bt(i).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${a}/v`,variable:te(()=>bt(i).variable(l))});const u=Array.isArray(e)?e[o].tensor:e[a];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,d=this.accumulatedSecondMoment[o].variable,p=H(R(c,this.beta1),R(u,1-this.beta1)),f=H(R(d,this.beta2),R(Pt(u),1-this.beta2)),m=ue(p,r),g=ue(f,s);c.assign(p),d.assign(f);const w=H(R(ue(m,H(cn(g),this.epsilon)),-this.learningRate),i);i.assign(w)}),this.accBeta1.assign(R(this.accBeta1,this.beta1)),this.accBeta2.assign(R(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&tt(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&tt(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e),te(()=>{this.accBeta1.assign(ra(this.beta1,this.iterations_+1)),this.accBeta2.assign(ra(this.beta2,this.iterations_+1))});const n=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xN extends Cr{static get className(){return"Adamax"}constructor(e,n,r,s=null,a=0){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],te(()=>{this.iteration=Z(0).variable(),this.accBeta1=Z(n).variable()}),s==null&&(this.epsilon=C.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);te(()=>{const r=X(1,this.accBeta1),s=ue(-this.learningRate,H(R(this.iteration,this.decay),1));n.forEach((a,o)=>{const i=C.registeredVariables[a],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:bt(i).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${a}/v`,variable:bt(i).variable(l)});const u=Array.isArray(e)?e[o].tensor:e[a];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,d=this.accumulatedWeightedInfNorm[o].variable,p=H(R(c,this.beta1),R(u,1-this.beta1)),f=R(d,this.beta2),m=ft(u),g=Wf(f,m);c.assign(p),d.assign(g);const w=H(R(ue(s,r),ue(p,H(g,this.epsilon))),i);i.assign(w)}),this.iteration.assign(H(this.iteration,1)),this.accBeta1.assign(R(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&tt(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&tt(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bh extends Cr{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const o=C.registeredVariables[r];te(()=>{const i=H(R(this.c,a),o);o.assign(i)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=qt(Z(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,n){return new e(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class NN extends bh{static get className(){return"Momentum"}constructor(e,n,r=!1){super(e),this.learningRate=e,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=Z(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:te(()=>bt(a).variable(!1))});const o=this.accumulations[s].variable,i=Array.isArray(e)?e[s].tensor:e[r];i!=null&&te(()=>{let l;const u=H(R(this.m,o),i);this.useNesterov?l=H(R(this.c,H(i,R(u,this.m))),a):l=H(R(this.c,u),a),o.assign(u),a.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&tt(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kN extends Cr{static get className(){return"RMSProp"}constructor(e,n=.9,r=0,s=null,a=!1){if(super(),this.learningRate=e,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,s==null&&(this.epsilon=C.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=C.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:te(()=>bt(a).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:te(()=>bt(a).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:te(()=>bt(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const l=this.accumulatedMeanSquares[s].variable,u=this.accumulatedMoments[s].variable;te(()=>{const c=H(R(l,this.decay),R(Pt(i),1-this.decay));if(this.centered){const d=this.accumulatedMeanGrads[s].variable,p=H(R(d,this.decay),R(i,1-this.decay)),f=ue(R(i,this.learningRate),cn(X(c,H(Pt(p),this.epsilon)))),m=H(R(u,this.momentum),f);l.assign(c),d.assign(p),u.assign(m);const g=X(a,m);a.assign(g)}else{const d=H(R(l,this.decay),R(Pt(i),1-this.decay)),p=H(R(u,this.momentum),ue(R(i,this.learningRate),cn(H(d,this.epsilon))));l.assign(d),u.assign(p);const f=X(a,p);a.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&tt(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&tt(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&tt(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DD=[vN,bN,wN,xN,NN,kN,bh];function jD(){for(const t of DD)ID(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OD="model",PD=".json",FD=".weights.bin";function Eg(t){return new Promise(e=>setTimeout(e)).then(t)}class ss{constructor(e){if(!Y().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(ss.URL_SCHEME)&&(e=e.slice(ss.URL_SCHEME.length)),(e==null||e.length===0)&&(e=OD),this.modelJsonFileName=e+PD,this.weightDataFileName=e+FD}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=Zt.join(e.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=q1(e,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,await Eg(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=r,await Eg(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:qo(e)}}}}ss.URL_SCHEME="downloads://";class LD{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,n)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:o});return}const l=Ef(a,u=>this.loadWeights(u));e(l)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const n=[],r=[];for(const o of e)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(e),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[n,o])}loadWeightsFile(e,n){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;r(i)},a.onerror=o=>s(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],r=this.weightsFiles.map(a=>Ng(a.name)),s={};for(const a of e)a.paths.forEach(o=>{const i=Ng(o);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const RD=t=>Y().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ss.URL_SCHEME)?zD(t.slice(ss.URL_SCHEME.length)):null;ge.registerSaveRouter(RD);function zD(t="model"){return new ss(t)}function BD(t){return new LD(t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(t,e,n,r){o(t),n=n??0,r=r??1,i(n,r);let s=0;const a=l=>(l.then(u=>{const c=n+ ++s/t.length*(r-n);return e(c),u}),l);function o(l){S(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function i(l,u){S(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),S(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),S(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(t.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function SN(t,e){e==null&&(e={});const n=e.fetchFunc==null?Y().platform.fetch:e.fetchFunc,r=t.map(d=>n(d,e.requestInit,{isBinary:!0})),i=(e.onProgress==null?await Promise.all(r):await _g(r,e.onProgress,0,.5)).map(d=>d.arrayBuffer());return e.onProgress==null?await Promise.all(i):await _g(i,e.onProgress,.5,1)}function MD(t,e){var n;const r=e.fetchFunc==null?Y().platform.fetch:e.fetchFunc;let s=0,a;return(n=e.onProgress)===null||n===void 0||n.call(e,0),new ReadableStream({pull:async o=>{for(var i;s<t.length;){a||(a=(await r(t[s],e.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:u}=await a.read();if(l){s++,a=void 0,(i=e.onProgress)===null||i===void 0||i.call(e,s/t.length);continue}o.enqueue(u);return}o.close()}})}async function VD(t,e="",n,r){return EN(o=>SN(o,{requestInit:r}))(t,e,n)}function EN(t){return async(e,n="",r)=>{const s=e.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],i=[];if(e.forEach((f,m)=>{let g=0;f.weights.forEach(w=>{const y="quantization"in w?w.quantization.dtype:w.dtype,b=ts[y]*Ie(w.shape),x=()=>{s[m]=!0,a[m]==null&&(a[m]=[]),a[m].push({manifestEntry:w,groupOffset:g,sizeBytes:b})};r!=null?r.forEach((k,_)=>{k===w.name&&(x(),o[_]=!0)}):x(),i.push(w.name),g+=b})}),!o.every(f=>f)){const f=r.filter((m,g)=>!o[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const l=s.reduce((f,m,g)=>(m&&f.push(g),f),[]),u=[];l.forEach(f=>{e[f].paths.forEach(m=>{const g=n+(n.endsWith("/")?"":"/")+m;u.push(g)})});const c=await t(u),d={};let p=0;return l.forEach(f=>{const m=e[f].paths.length,g=new Zt(c.slice(p,p+m));a[f].forEach(y=>{const b=g.slice(y.groupOffset,y.groupOffset+y.sizeBytes),x=U1(b,[y.manifestEntry]);for(const k in x)d[k]=x[k]}),p+=m}),d}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UD="application/octet-stream",KD="application/json";class wh{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(S(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=Y().platform.fetch,S(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&S(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=q1(e,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:KD}),"model.json"),e.weightData!=null){const o=Zt.join(e.weightData);n.body.append("model.weights.bin",new Blob([o],{type:UD}),"model.weights.bin")}const a=await this.fetch(this.path,n);if(a.ok)return{modelArtifactsInfo:qo(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await e.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return Ef(e,n=>this.loadWeights(n))}async loadStream(){const e=await this.loadModelJSON(),n=await this.getWeightUrls(e.weightsManifest),r=Td(e.weightsManifest),s=()=>MD(n,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(e){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=WD(n),a=this.weightPathPrefix||r,o=[],i=[];for(const l of e)for(const u of l.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(u)):o.push(a+u+s);return this.weightUrlConverter&&o.push(...await Promise.all(i)),o}async loadWeights(e){const n=await this.getWeightUrls(e),r=Td(e),s=await SN(n,this.loadOptions);return[r,s]}}wh.URL_SCHEME_REGEX=/^https?:\/\//;function WD(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),s=n>e?t.substring(n):"";return[r+"/",s]}function Dd(t){return t.match(wh.URL_SCHEME_REGEX)!=null}const _N=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(r=>Dd(r)):n=Dd(t),n)return xh(t,e)}return null};ge.registerSaveRouter(_N);ge.registerLoadRouter(_N);function xh(t,e){return new wh(t,e)}function qD(t,e){return xh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lc{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class TN{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class HD{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function GD(t,e,n,r){const s=arguments;return new HD(CN(...s))}function CN(t,e,n,r){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new lc(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new lc({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new lc({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))}function QD(t){return new TN(t)}function XD(t){return new TN(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nh=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Zt,browserFiles:BD,browserHTTPRequest:qD,concatenateArrayBuffers:o3,copyModel:C3,decodeWeights:U1,decodeWeightsStream:W1,encodeWeights:e3,fromMemory:GD,fromMemorySync:CN,getLoadHandlers:h3,getModelArtifactsForJSON:Ef,getModelArtifactsForJSONSync:H1,getModelArtifactsInfoForJSON:qo,getSaveHandlers:f3,getWeightSpecs:Td,http:xh,isHTTPScheme:Dd,listModels:_3,loadWeights:VD,moveModel:$3,registerLoadRouter:p3,registerSaveRouter:d3,removeModel:T3,weightsLoaderFactory:EN,withSaveHandler:QD,withSaveHandlerSync:XD},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Ar;function YD(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(t==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&t instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)a=!0;else if(t.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);if(Tl(gd,C.backendName)!=null){const m={pixels:t},g={numChannels:e};return C.runKernel(gd,m,g)}const[u,c]=s?[t.videoWidth,t.videoHeight]:[t.width,t.height];let d;if(o)d=t.getContext("2d").getImageData(0,0,u,c).data;else if(r||n)d=t.data;else if(a||s||i){if(Ar==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Ar=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Ar=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Ar.canvas.width=u,Ar.canvas.height=c,Ar.drawImage(t,0,0,u,c),d=Ar.getImageData(0,0,u,c).data}let p;if(e===4)p=new Int32Array(d);else{const m=u*c;p=new Int32Array(m*e);for(let g=0;g<m;g++)for(let w=0;w<e;++w)p[g*e+w]=d[g*4+w]}return ch(p,[c,u,e],"int32")}const JD=E({fromPixels_:YD});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */jD();const ZD=Object.freeze(Object.defineProperty({__proto__:null,Abs:Bv,Acos:Mv,Acosh:Vv,AdadeltaOptimizer:vN,AdagradOptimizer:bN,AdamOptimizer:wN,AdamaxOptimizer:xN,Add:bf,AddN:Uv,All:Kv,Any:Wv,ArgMax:qv,ArgMin:Hv,Asin:Gv,Asinh:Qv,Atan:Xv,Atan2:Jv,Atanh:Yv,AvgPool:Zv,AvgPool3D:eb,BatchMatMul:tb,BatchToSpaceND:nb,Bincount:rb,BitwiseAnd:sb,BroadcastArgs:ab,Cast:wf,Ceil:ob,ClipByValue:ib,Complex:lb,ComplexAbs:ub,Concat:cb,Conv2D:db,Conv2DBackpropFilter:pb,Conv2DBackpropInput:fb,Conv3D:hb,Conv3DBackpropInputV2:mb,Cos:gb,Cosh:yb,CropAndResize:wb,Cumprod:vb,Cumsum:bb,DenseBincount:xb,DepthToSpace:Nb,DepthwiseConv2dNative:kb,DepthwiseConv2dNativeBackpropFilter:Sb,DepthwiseConv2dNativeBackpropInput:Eb,Diag:_b,Dilation2D:Tb,get ENV(){return yf},Einsum:$b,Elu:Ab,Environment:Rv,Equal:Db,Erf:Ib,Exp:jb,ExpandDims:Ob,Expm1:Pb,FFT:Fb,Fill:Lb,FlipLeftRight:Rb,Floor:zb,FloorDiv:Bb,FromPixels:gd,FusedBatchNorm:Mb,FusedConv2D:vd,FusedDepthwiseConv2D:bd,GatherNd:Ub,GatherV2:Vb,Greater:Kb,GreaterEqual:Wb,IFFT:qb,Identity:xf,Imag:Hb,IsFinite:Gb,IsInf:Qb,IsNan:Xb,KernelBackend:Ov,LRN:ow,LeakyRelu:Yb,Less:Jb,LessEqual:Zb,LinSpace:ew,Log:tw,Log1p:nw,LogicalAnd:rw,LogicalNot:sw,LogicalOr:aw,Max:iw,MaxPool:uw,MaxPool3D:cw,MaxPoolWithArgmax:dw,Maximum:lw,Mean:pw,Min:fw,Minimum:hw,MirrorPad:mw,Mod:gw,MomentumOptimizer:NN,Multinomial:yw,Multiply:vw,Neg:bw,NonMaxSuppressionV3:xw,NonMaxSuppressionV4:Nw,NonMaxSuppressionV5:kw,NotEqual:ww,OP_SCOPE_SUFFIX:kf,OneHot:Ew,OnesLike:Sw,Optimizer:Cr,Pack:_w,PadV2:Tw,Pow:Cw,Prelu:$w,Prod:Aw,RMSPropOptimizer:kN,RaggedGather:Iw,RaggedRange:Dw,RaggedTensorToTensor:jw,Range:Ow,get Rank(){return Nd},Real:Pw,RealDiv:Cb,Reciprocal:Fw,get Reduction(){return Je},Relu:Lw,Relu6:Mw,Reshape:Rw,ResizeBilinear:Bw,ResizeNearestNeighbor:zw,Reverse:Vw,RotateWithOffset:C1,Round:Uw,Rsqrt:Kw,SGDOptimizer:bh,ScatterNd:Ww,SearchSorted:Hw,Select:Gw,Selu:Qw,Sigmoid:e1,Sign:Zw,Sin:Yw,Sinh:Jw,Slice:Xw,Softmax:o1,Softplus:t1,SpaceToBatchND:s1,SparseFillEmptyRows:i1,SparseReshape:l1,SparseSegmentMean:u1,SparseSegmentSum:c1,SparseToDense:d1,SplitV:a1,Sqrt:n1,SquaredDifference:p1,StaticRegexReplace:f1,Step:T1,StridedSlice:h1,StringNGrams:m1,StringSplit:g1,StringToHashBucketFast:y1,Sub:v1,Sum:r1,Tan:b1,Tanh:w1,Tensor:ze,TensorBuffer:$l,TensorScatterUpdate:qw,Tile:Nf,TopK:x1,Transform:N1,Transpose:Vi,Unique:k1,Unpack:S1,UnsortedSegmentSum:E1,Variable:So,ZerosLike:_1,_FusedMatMul:yd,abs:ft,acos:tx,acosh:nx,add:H,addN:rx,all:sx,any:ax,argMax:ox,argMin:ix,asin:lx,asinh:ux,atan:cx,atan2:dx,atanh:px,avgPool:$f,avgPool3d:fx,backend:V1,basicLSTMCell:hx,batchNorm:Ho,batchNorm2d:mx,batchNorm3d:gx,batchNorm4d:yx,batchToSpaceND:Af,bincount:If,bitwiseAnd:vx,booleanMaskAsync:nN,broadcastArgs:bx,broadcastTo:Xa,buffer:un,cast:Ne,ceil:wx,clipByValue:xx,clone:Tn,complex:Fn,concat:We,concat1d:Nx,concat2d:kx,concat3d:Sx,concat4d:Ex,conv1d:_x,conv2d:Go,conv2dTranspose:Cx,conv3d:$x,conv3dTranspose:Ax,cos:Ix,cosh:Dx,cosineWindow:_u,cumprod:jx,cumsum:Ox,customGrad:dn,denseBincount:Px,depthToSpace:Fx,depthwiseConv2d:bu,diag:Lx,dilation2d:Rx,dispose:tt,div:ue,divNoNan:zx,dot:Bx,dropout:iN,einsum:Or,elu:jf,enclosingPowerOfTwo:ph,ensureShape:Mx,env:Y,equal:Df,erf:Vx,euclideanNorm:Kx,exp:hr,expandDims:yn,expm1:Wx,eye:Of,fft:Su,fill:ha,floor:Pf,floorDiv:Tf,fused:uN,gather:Ff,gatherND:oN,getBackend:M1,getGradient:wd,getKernel:Tl,getKernelsForBackend:xd,greater:Xo,greaterEqual:Lf,ifft:$o,imag:Yo,image:vh,inTopKAsync:lN,io:Nh,irfft:ih,isFinite:qx,isInf:Hx,isNaN:Gx,keep:qt,leakyRelu:Rf,less:Pl,lessEqual:xu,linalg:hN,linspace:Qx,localResponseNormalization:Xx,log:sa,log1p:zf,logSigmoid:Jx,logSoftmax:Zx,logSumExp:Mf,logicalAnd:_o,logicalNot:Vf,logicalOr:Uf,logicalXor:e2,losses:mN,lowerBound:t2,matMul:se,max:Wr,maxPool:Kf,maxPool3d:n2,maxPoolWithArgmax:r2,maximum:Wf,mean:To,meshgrid:s2,min:Ol,minimum:Co,mirrorPad:a2,mod:o2,moments:i2,movingAverage:rN,mul:R,multiRNNCell:l2,multinomial:u2,neg:Xt,norm:Qo,notEqual:qf,oneHot:c2,ones:tr,onesLike:d2,op:E,outerProduct:p2,pad:ma,pad1d:f2,pad2d:h2,pad3d:m2,pad4d:g2,pool:y2,pow:ra,prelu:Gf,print:_f,prod:v2,raggedGather:b2,raggedRange:w2,raggedTensorToTensor:x2,rand:N2,randomGamma:S2,randomNormal:rh,randomStandardNormal:E2,randomUniform:ku,randomUniformInt:_2,range:aa,real:oa,reciprocal:T2,relu:Jo,relu6:sh,reshape:j,reverse:gr,reverse1d:C2,reverse2d:$2,reverse3d:A2,reverse4d:I2,rfft:Eu,round:ah,rsqrt:D2,scalar:Z,scatterND:sN,searchSorted:Nu,selu:j2,separableConv2d:O2,setdiff1dAsync:P2,sigmoid:Kr,sign:F2,signal:fN,sin:L2,sinh:R2,slice:ae,slice1d:z2,slice2d:B2,slice3d:M2,slice4d:V2,softmax:oh,softplus:Bf,spaceToBatchND:Hf,sparse:gN,sparseToDense:aN,spectral:pN,split:ia,sqrt:cn,square:Pt,squaredDifference:lh,squeeze:Zo,stack:pn,step:uh,stridedSlice:U2,string:yN,sub:X,sum:le,tan:K2,tanh:jl,tensor:Qt,tensor1d:kt,tensor2d:Us,tensor3d:ch,tensor4d:W2,tensor5d:q2,tensor6d:H2,tensorScatterUpdate:Q2,tidy:te,tile:Vs,topk:X2,transpose:Fl,truncatedNormal:Y2,unique:J2,unsortedSegmentSum:Z2,unstack:Tr,upcastType:O1,upperBound:eN,variable:tN,variableGrads:Yx,where:Cn,whereAsync:dh,zeros:mr,zerosLike:bt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ej=Y();ej.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var dt;(function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"})(dt||(dt={}));var Tg;(function(t){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))})(Tg||(Tg={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tj={};function $N(t){return tj[t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h(t,e,n,r,s){const a=e.inputParams[t];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,l=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd,u=i<0?e.inputNames.length+i:i;if(a.type==="tensor")return Be(e.inputNames[u],n,r,s);if(a.type==="tensors"){const p=e.inputs.slice(i,l);return e.inputNames.slice(i,l).filter((m,g)=>{var w;return((w=p[g])===null||w===void 0?void 0:w.op)!=="NoOp"}).map(m=>Be(m,n,r,s))}const c=Be(e.inputNames[u],n,r,s),d=c.dataSync();return a.type==="number"?d[0]:md(c.shape,d)}const o=e.attrParams[t];return o&&o.value}function Be(t,e,n,r){const[s,a]=pt(t,n);if(r!=null){const i=r.getHashTableHandleByName(s);if(i!=null)return i}const o=n.currentContextIds.find(i=>!!e[Ll(s,i)]);return o!==void 0?e[Ll(s,o)][a]:void 0}function Cg(t,e,n){return e[Ll(t,n.currentContextId)]}function vn(t,e){const[n,r,s]=pt(t,e);return[Ll(n,e&&e.currentContextId),r,s]}function Ll(t,e){return e?`${t}-${e}`:t}function pt(t,e){if(t==="")return["",0,void 0];const n=e!=null&&e.parseNodeNameCache!=null;if(n){const a=e.parseNodeNameCache.get(t);if(a!=null)return a}const r=t.split(":");let s;if(r.length===1)s=[t,0,void 0];else{const a=r[0],o=r.length===3?r[1]:void 0,i=Number(r[r.length-1]);s=[a,i,o]}return n&&e.parseNodeNameCache.set(t,s),s}function Wi(t,e,n){let r=h("pad",t,e,n);if(r==="explicit"){r=h("explicitPaddings",t,e,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function bn(t){return t.kept?t:Tn(t)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nj=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],rj=Object.freeze(Object.defineProperty({__proto__:null,json:nj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sj=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],aj=Object.freeze(Object.defineProperty({__proto__:null,json:sj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oj=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],ij=Object.freeze(Object.defineProperty({__proto__:null,json:oj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lj=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],uj=Object.freeze(Object.defineProperty({__proto__:null,json:lj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cj=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],dj=Object.freeze(Object.defineProperty({__proto__:null,json:cj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pj=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],fj=Object.freeze(Object.defineProperty({__proto__:null,json:pj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hj=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],mj=Object.freeze(Object.defineProperty({__proto__:null,json:hj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gj=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],yj=Object.freeze(Object.defineProperty({__proto__:null,json:gj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vj=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],bj=Object.freeze(Object.defineProperty({__proto__:null,json:vj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wj=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],xj=Object.freeze(Object.defineProperty({__proto__:null,json:wj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nj=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],kj=Object.freeze(Object.defineProperty({__proto__:null,json:Nj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sj=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],Ej=Object.freeze(Object.defineProperty({__proto__:null,json:Sj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _j=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],Tj=Object.freeze(Object.defineProperty({__proto__:null,json:_j},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cj=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],$j=Object.freeze(Object.defineProperty({__proto__:null,json:Cj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Aj=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],Ij=Object.freeze(Object.defineProperty({__proto__:null,json:Aj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dj=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],jj=Object.freeze(Object.defineProperty({__proto__:null,json:Dj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oj=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Pj=Object.freeze(Object.defineProperty({__proto__:null,json:Oj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fj=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],Lj=Object.freeze(Object.defineProperty({__proto__:null,json:Fj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rj=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],zj=Object.freeze(Object.defineProperty({__proto__:null,json:Rj},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $g{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[rj,aj,ij,uj,dj,fj,mj,yj,bj,xj,kj,Ej,Tj,$j,Ij,jj,Pj,Lj,zj],n=[].concat(...e.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(e,n={}){const r=e.node,s=[],a=[],o=[],i=r.reduce((g,w)=>(g[w.name]=this.mapNode(w),w.op.startsWith("Placeholder")?s.push(g[w.name]):w.op==="Const"?a.push(g[w.name]):(w.input==null||w.input.length===0)&&o.push(g[w.name]),g),{});let l=[];const u=[];let c={},d={};n!=null&&(c=this.mapSignatureEntries(n.inputs),d=this.mapSignatureEntries(n.outputs));const p=Object.keys(i);p.forEach(g=>{const w=i[g];w.inputNames.forEach((y,b)=>{const[x,,k]=vn(y),_=i[x];if(_.outputs!=null){const $=_.outputs.indexOf(k);if($!==-1){const T=`${x}:${$}`;w.inputNames[b]=T}}w.inputs.push(_),_.children.push(w)})}),Object.keys(d).length===0?p.forEach(g=>{const w=i[g];w.children.length===0&&u.push(w)}):Object.keys(d).forEach(g=>{const[w]=vn(g),y=i[w];y!=null&&(y.signatureKey=d[g],u.push(y))}),Object.keys(c).length>0?Object.keys(c).forEach(g=>{const[w]=vn(g),y=i[w];y&&(y.signatureKey=c[g],l.push(y))}):l=s;let f={};e.library!=null&&e.library.function!=null&&(f=e.library.function.reduce((g,w)=>(g[w.signature.name]=this.mapFunction(w),g),{}));const m={nodes:i,inputs:l,outputs:u,weights:a,placeholders:s,signature:n,functions:f};return o.length>0&&(m.initNodes=o),m}mapSignatureEntries(e){return Object.keys(e||{}).reduce((n,r)=>(n[e[r].name]=r,n),{})}mapNode(e){const n=$N(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:n.category,inputNames:(e.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,a)=>{const o=a.type;let i;switch(a.type){case"string":i=jd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=jd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=Bd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Bd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=Pd(e.attr,a.tfName,a.defaultValue||0),i===void 0&&a.tfDeprecatedName&&(i=Pd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=zd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=zd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Od(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Od(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=Vd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Vd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=Rd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Rd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=Md(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Md(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=Fd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Fd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=Ld(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ld(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=Ag(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ag(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return s[a.name]={value:i,type:o},s},{})),r}mapFunction(e){const n=e.nodeDef,r=[],s=[];let a={};n!=null&&(a=n.reduce((d,p)=>(d[p.name]=this.mapNode(p),p.op==="Const"&&s.push(d[p.name]),d),{}));const o=[],i=[];e.signature.inputArg.forEach(d=>{const[p]=vn(d.name),f={name:p,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:kh(d.type),type:"dtype"}},children:[]};f.signatureKey=d.name,o.push(f),a[p]=f}),Object.keys(a).forEach(d=>{const p=a[d];p.inputNames.forEach((f,m)=>{const[g,,w]=vn(f),y=a[g];if(y.outputs!=null){const b=y.outputs.indexOf(w);if(b!==-1){const x=`${g}:${b}`;p.inputNames[m]=x}}p.inputs.push(y),y.children.push(p)})});const u=e.ret;e.signature.outputArg.forEach(d=>{const[p,f]=vn(u[d.name]),m=a[p];m!=null&&(m.defaultOutput=f,i.push(m))});const c=this.mapArgsToSignature(e);return{nodes:a,inputs:o,outputs:i,weights:s,placeholders:r,signature:c}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:e.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,e.ret),n),{})}}mapArgToTensorInfo(e,n){let r=e.name;return n!=null&&(r=n[r]),{name:r,dtype:e.type}}}function Bj(t){const e=Y().global;if(typeof e.atob<"u")return e.atob(t);if(typeof Buffer<"u")return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function AN(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):Bj(t);return e?n:n.toLowerCase()}function jd(t,e,n,r=!1){const s=t[e];return s!=null?AN(s.s,r):n}function Od(t,e,n){const r=t[e];return r?r.b:n}function Pd(t,e,n){const r=t[e]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function kh(t){switch(typeof t=="string"&&(t=dt[t]),t){case dt.DT_FLOAT:case dt.DT_HALF:return"float32";case dt.DT_INT32:case dt.DT_INT64:case dt.DT_INT8:case dt.DT_UINT8:return"int32";case dt.DT_BOOL:return"bool";case dt.DT_DOUBLE:return"float32";case dt.DT_STRING:return"string";case dt.DT_COMPLEX64:case dt.DT_COMPLEX128:return"complex64";default:return null}}function Ag(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function Fd(t,e,n){const r=t[e];return r&&r.type?kh(r.type):n}function Ld(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(s=>kh(s)):n}function IN(t){if(!t.unknownRank)return t.dim!=null?t.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Rd(t,e,n){const r=t[e];return r&&r.shape?IN(r.shape):n}function zd(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function Bd(t,e,n,r=!1){const s=t[e];return s&&s.list&&s.list.s?s.list.s.map(a=>AN(a,r)):n}function Md(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(s=>IN(s)):n}function Vd(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Mj{constructor(e,n,r){this.node=e,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(s=>this.getInput(s)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(e){return Be(e,this.tensorMap,this.context)}getAttr(e,n){const r=this.node.rawAttrs[e];if(r.tensor!=null)return Be(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Pd(this.node.rawAttrs,e,n);if(r.s!=null)return jd(this.node.rawAttrs,e,n);if(r.b!=null)return Od(this.node.rawAttrs,e,n);if(r.shape!=null)return Rd(this.node.rawAttrs,e,n);if(r.type!=null)return Fd(this.node.rawAttrs,e,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return zd(this.node.rawAttrs,e,n);if(r.list.s!=null)return Bd(this.node.rawAttrs,e,n);if(r.list.shape!=null)return Md(this.node.rawAttrs,e,n);if(r.list.b!=null)return Vd(this.node.rawAttrs,e,n);if(r.list.type!=null)return Ld(this.node.rawAttrs,e,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ve=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:kf,abs:ft,acos:tx,acosh:nx,add:H,addN:rx,all:sx,any:ax,argMax:ox,argMin:ix,asin:lx,asinh:ux,atan:cx,atan2:dx,atanh:px,avgPool:$f,avgPool3d:fx,basicLSTMCell:hx,batchNorm:Ho,batchNorm2d:mx,batchNorm3d:gx,batchNorm4d:yx,batchToSpaceND:Af,bincount:If,bitwiseAnd:vx,booleanMaskAsync:nN,broadcastArgs:bx,broadcastTo:Xa,buffer:un,cast:Ne,ceil:wx,clipByValue:xx,clone:Tn,complex:Fn,concat:We,concat1d:Nx,concat2d:kx,concat3d:Sx,concat4d:Ex,conv1d:_x,conv2d:Go,conv2dTranspose:Cx,conv3d:$x,conv3dTranspose:Ax,cos:Ix,cosh:Dx,cosineWindow:_u,cumprod:jx,cumsum:Ox,denseBincount:Px,depthToSpace:Fx,depthwiseConv2d:bu,diag:Lx,dilation2d:Rx,div:ue,divNoNan:zx,dot:Bx,dropout:iN,einsum:Or,elu:jf,enclosingPowerOfTwo:ph,ensureShape:Mx,equal:Df,erf:Vx,euclideanNorm:Kx,exp:hr,expandDims:yn,expm1:Wx,eye:Of,fft:Su,fill:ha,floor:Pf,floorDiv:Tf,fused:uN,gather:Ff,gatherND:oN,greater:Xo,greaterEqual:Lf,ifft:$o,imag:Yo,image:vh,inTopKAsync:lN,irfft:ih,isFinite:qx,isInf:Hx,isNaN:Gx,leakyRelu:Rf,less:Pl,lessEqual:xu,linalg:hN,linspace:Qx,localResponseNormalization:Xx,log:sa,log1p:zf,logSigmoid:Jx,logSoftmax:Zx,logSumExp:Mf,logicalAnd:_o,logicalNot:Vf,logicalOr:Uf,logicalXor:e2,losses:mN,lowerBound:t2,matMul:se,max:Wr,maxPool:Kf,maxPool3d:n2,maxPoolWithArgmax:r2,maximum:Wf,mean:To,meshgrid:s2,min:Ol,minimum:Co,mirrorPad:a2,mod:o2,moments:i2,movingAverage:rN,mul:R,multiRNNCell:l2,multinomial:u2,neg:Xt,norm:Qo,notEqual:qf,oneHot:c2,ones:tr,onesLike:d2,op:E,outerProduct:p2,pad:ma,pad1d:f2,pad2d:h2,pad3d:m2,pad4d:g2,pool:y2,pow:ra,prelu:Gf,print:_f,prod:v2,raggedGather:b2,raggedRange:w2,raggedTensorToTensor:x2,rand:N2,randomGamma:S2,randomNormal:rh,randomStandardNormal:E2,randomUniform:ku,randomUniformInt:_2,range:aa,real:oa,reciprocal:T2,relu:Jo,relu6:sh,reshape:j,reverse:gr,reverse1d:C2,reverse2d:$2,reverse3d:A2,reverse4d:I2,rfft:Eu,round:ah,rsqrt:D2,scalar:Z,scatterND:sN,searchSorted:Nu,selu:j2,separableConv2d:O2,setdiff1dAsync:P2,sigmoid:Kr,sign:F2,signal:fN,sin:L2,sinh:R2,slice:ae,slice1d:z2,slice2d:B2,slice3d:M2,slice4d:V2,softmax:oh,softplus:Bf,spaceToBatchND:Hf,sparse:gN,sparseToDense:aN,spectral:pN,split:ia,sqrt:cn,square:Pt,squaredDifference:lh,squeeze:Zo,stack:pn,step:uh,stridedSlice:U2,string:yN,sub:X,sum:le,tan:K2,tanh:jl,tensor:Qt,tensor1d:kt,tensor2d:Us,tensor3d:ch,tensor4d:W2,tensor5d:q2,tensor6d:H2,tensorScatterUpdate:Q2,tile:Vs,topk:X2,transpose:Fl,truncatedNormal:Y2,unique:J2,unsortedSegmentSum:Z2,unstack:Tr,upperBound:eN,variable:tN,where:Cn,whereAsync:dh,zeros:mr,zerosLike:bt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vj=(t,e,n,r=Ve)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(h("a",t,e,n),h("b",t,e,n))];case"AddN":return[r.addN(h("tensors",t,e,n))];case"FloorMod":case"Mod":return[r.mod(h("a",t,e,n),h("b",t,e,n))];case"Mul":return[r.mul(h("a",t,e,n),h("b",t,e,n))];case"RealDiv":case"Div":return[r.div(h("a",t,e,n),h("b",t,e,n))];case"DivNoNan":return[r.divNoNan(h("a",t,e,n),h("b",t,e,n))];case"FloorDiv":return[r.floorDiv(h("a",t,e,n),h("b",t,e,n))];case"Sub":return[r.sub(h("a",t,e,n),h("b",t,e,n))];case"Minimum":return[r.minimum(h("a",t,e,n),h("b",t,e,n))];case"Maximum":return[r.maximum(h("a",t,e,n),h("b",t,e,n))];case"Pow":return[r.pow(h("a",t,e,n),h("b",t,e,n))];case"SquaredDifference":return[r.squaredDifference(h("a",t,e,n),h("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uj=(t,e,n,r=Ve)=>{switch(t.op){case"Abs":case"ComplexAbs":return[r.abs(h("x",t,e,n))];case"Acos":return[r.acos(h("x",t,e,n))];case"Acosh":return[r.acosh(h("x",t,e,n))];case"Asin":return[r.asin(h("x",t,e,n))];case"Asinh":return[r.asinh(h("x",t,e,n))];case"Atan":return[r.atan(h("x",t,e,n))];case"Atan2":return[r.atan2(h("x",t,e,n),h("y",t,e,n))];case"Atanh":return[r.atanh(h("x",t,e,n))];case"Ceil":return[r.ceil(h("x",t,e,n))];case"Complex":return[r.complex(h("real",t,e,n),h("imag",t,e,n))];case"Cos":return[r.cos(h("x",t,e,n))];case"Cosh":return[r.cosh(h("x",t,e,n))];case"Elu":return[r.elu(h("x",t,e,n))];case"Erf":return[r.erf(h("x",t,e,n))];case"Exp":return[r.exp(h("x",t,e,n))];case"Expm1":return[r.expm1(h("x",t,e,n))];case"Floor":return[r.floor(h("x",t,e,n))];case"Log":return[r.log(h("x",t,e,n))];case"Log1p":return[r.log1p(h("x",t,e,n))];case"Imag":return[r.imag(h("x",t,e,n))];case"Neg":return[r.neg(h("x",t,e,n))];case"Reciprocal":return[r.reciprocal(h("x",t,e,n))];case"Real":return[r.real(h("x",t,e,n))];case"Relu":return[r.relu(h("x",t,e,n))];case"Round":return[r.round(h("x",t,e,n))];case"Selu":return[r.selu(h("x",t,e,n))];case"Sigmoid":return[r.sigmoid(h("x",t,e,n))];case"Sin":return[r.sin(h("x",t,e,n))];case"Sign":return[r.sign(h("x",t,e,n))];case"Sinh":return[r.sinh(h("x",t,e,n))];case"Softplus":return[r.softplus(h("x",t,e,n))];case"Sqrt":return[r.sqrt(h("x",t,e,n))];case"Square":return[r.square(h("x",t,e,n))];case"Tanh":return[r.tanh(h("x",t,e,n))];case"Tan":return[r.tan(h("x",t,e,n))];case"ClipByValue":return[r.clipByValue(h("x",t,e,n),h("clipValueMin",t,e,n),h("clipValueMax",t,e,n))];case"Relu6":return[r.relu6(h("x",t,e,n))];case"Rsqrt":return[r.rsqrt(Be(t.inputNames[0],e,n))];case"LeakyRelu":return[r.leakyRelu(h("x",t,e,n),h("alpha",t,e,n))];case"Prelu":return[r.prelu(h("x",t,e,n),h("alpha",t,e,n))];case"IsNan":return[r.isNaN(Be(t.inputNames[0],e,n))];case"IsInf":return[r.isInf(Be(t.inputNames[0],e,n))];case"IsFinite":return[r.isFinite(Be(t.inputNames[0],e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function At(t,e,n=""){if(!(typeof t=="number"||typeof e=="number")){S(t.length===e.length,()=>n+` Shapes ${t} and ${e} must match`);for(let r=0;r<t.length;r++){const s=t[r],a=e[r];S(s<0||a<0||s===a,()=>n+` Shapes ${t} and ${e} must match`)}}}function Ig(t){return!(typeof t=="number"||t.some(e=>e<0))}function Aa(t,e,n){let r=Ud(t,n);const s=!Ig(r);if(s&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&e.forEach(a=>{r=Ud(a.shape,r)}),!Ig(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Ud(t,e){if(typeof t=="number")return e;if(typeof e=="number")return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let r=0;r<t.length;++r){const s=t[r],a=e[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[r]=s>=0?s:a}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kj{constructor(e,n,r,s,a,o,i){this.name=e,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=Z(0),qt(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const n=this.tensors[e];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(e){return e.map(n=>this.read(n))}write(e,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),At(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=n,qt(n),r.written=!0,this.tensors[e]=r}writeMany(e,n){if(e.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${n.length}.`);e.forEach((r,s)=>this.write(r,n[s]))}gather(e,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(e)e=e.slice(0,this.size());else{e=[];for(let s=0;s<this.size();s++)e.push(s)}if(e.length===0)return Qt([],[0].concat(this.elementShape));const r=this.readMany(e);return At(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),pn(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Qt([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return At(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),We(r,0)}scatter(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,Tr(n,0))}split(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=e.map(l=>(r+=l,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:n.size/r,o=[];te(()=>{n=j(n,[1,r,a]);for(let l=0;l<e.length;++l){const c=[0,l===0?0:s[l-1],0],d=[1,e[l],a];o[l]=j(ae(n,c,d),this.elementShape)}return o});const i=[];for(let l=0;l<e.length;l++)i[l]=l;this.writeMany(i,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class as{get id(){return this.idTensor.id}constructor(e,n,r,s=-1){this.tensors=e,this.elementShape=n,this.elementDtype=r,e!=null&&e.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);At(n,a.shape,"TensorList shape mismatch: "),qt(a)}),this.idTensor=Z(0),this.maxNumElements=s,qt(this.idTensor)}copy(){return new as([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);At(e,this.elementShape,"TensorList shape mismatch: ");const s=Aa(this.elementShape,this.tensors,e);return te(()=>{const a=this.tensors.map(o=>j(o,s));return pn(a,0)})}popBack(e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=Aa(this.elementShape,this.tensors,e),s=this.tensors.pop();return s.kept=!1,At(s.shape,e,"TensorList shape mismatch: "),j(s,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(At(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");qt(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const n=new as([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)n.tensors[r]=this.tensors[r];return n}getItem(e,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);At(this.tensors[e].shape,n,"TensorList shape mismatch: ");const s=Aa(this.elementShape,this.tensors,n);return j(this.tensors[e],s)}setItem(e,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);At(this.elementShape,n.shape,"TensorList shape mismatch: "),qt(n),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=n}gather(e,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);At(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const s=Aa(this.elementShape,this.tensors,r);return e.length===0?Qt([],[0].concat(s)):te(()=>{const a=e.map(o=>j(this.tensors[o],s));return pn(a,0)})}concat(e,n){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);At(this.elementShape,n,"TensorList shape mismatch: ");const r=Aa(this.elementShape,this.tensors,n);return this.size()===0?Qt([],[0].concat(r)):te(()=>{const s=this.tensors.map(a=>j(a,r));return We(s,0)})}}function Wj(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);const s=t.shape.slice(1);At(s,e,"TensorList shape mismatch: ");const a=Tr(t);return new as(a,e,r)}function qj(t,e,n,r){return new as([],t,e,r)}function Hj(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const s=Math.max(...e);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new as([],n,t.dtype,r),o=Tr(t,0);return e.forEach((i,l)=>{a.setItem(i,o[l])}),a}function Gj(t,e,n){let r=0;const s=e.map(c=>(r+=c,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);const a=t.shape.slice(1),o=Ud(a,n),i=r===0?0:t.size/r,l=te(()=>{const c=[];t=j(t,[1,r,i]);for(let d=0;d<e.length;++d){const f=[0,d===0?0:s[d-1],0],m=[1,e[d],i];c[d]=j(ae(t,f,m),o)}return t.dispose(),c}),u=new as([],n,t.dtype,e.length);for(let c=0;c<l.length;c++)u.setItem(c,l[c]);return u}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qj=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=h("thenBranch",t,e,n),s=h("elseBranch",t,e,n),a=h("cond",t,e,n),o=h("args",t,e,n);return(await a.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=h("body",t,e,n),s=h("cond",t,e,n),a=h("args",t,e,n),o=await n.functionMap[s].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),i=a.map(c=>c.id);let l=await o[0].data();o.forEach(c=>{!c.kept&&i.indexOf(c.id)===-1&&c.dispose()});let u=a;for(;l[0];){const c=u;u=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);const d=u.map(f=>f.id);c.forEach(f=>{!f.kept&&i.indexOf(f.id)===-1&&d.indexOf(f.id)===-1&&f.dispose()});const p=await n.functionMap[s].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);l=await p[0].data(),p.forEach(f=>{!f.kept&&i.indexOf(f.id)===-1&&d.indexOf(f.id)===-1&&f.dispose()})}return u}case"LoopCond":{const r=h("pred",t,e,n);return[bn(r)]}case"Switch":{const r=h("pred",t,e,n);let s=h("data",t,e,n);return s.kept||(s=bn(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=t.inputNames.find(s=>Be(s,e,n)!==void 0);if(r){const s=Be(r,e,n);return[bn(s)]}return}case"Enter":{const r=h("frameName",t,e,n),s=h("tensor",t,e,n);return n.enterFrame(r),[bn(s)]}case"Exit":{const r=h("tensor",t,e,n);return n.exitFrame(),[bn(r)]}case"NextIteration":{const r=h("tensor",t,e,n);return n.nextIteration(),[bn(r)]}case"TensorArrayV3":{const r=h("size",t,e,n),s=h("dtype",t,e,n),a=h("elementShape",t,e,n),o=h("dynamicSize",t,e,n),i=h("clearAfterRead",t,e,n),l=h("identicalElementShapes",t,e,n),u=h("name",t,e,n),c=new Kj(u,s,r,a,l,o,i);return n.addTensorArray(c),[c.idTensor,Z(1)]}case"TensorArrayWriteV3":{const r=h("tensorArrayId",t,e,n),s=h("index",t,e,n),a=h("tensor",t,e,n),o=n.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=h("tensorArrayId",t,e,n),s=h("index",t,e,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=h("tensorArrayId",t,e,n),s=h("indices",t,e,n),a=h("dtype",t,e,n);return[n.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=h("tensorArrayId",t,e,n),s=h("indices",t,e,n),a=h("tensor",t,e,n),o=n.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=h("tensorArrayId",t,e,n),s=n.getTensorArray(r.id),a=h("dtype",t,e,n);return[s.concat(a)]}case"TensorArraySplitV3":{const r=h("tensorArrayId",t,e,n),s=h("tensor",t,e,n),a=h("lengths",t,e,n),o=n.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=h("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return[Z(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=h("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=h("tensorListId",t,e,n),s=h("index",t,e,n),a=h("tensor",t,e,n),o=n.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=h("tensorListId",t,e,n),s=h("index",t,e,n),a=h("elementShape",t,e,n),o=h("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=h("indices",t,e,n),s=h("tensor",t,e,n),a=h("elementShape",t,e,n),o=h("numElements",t,e,n),i=Hj(s,r,a,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=h("elementShape",t,e,n),s=h("elementDType",t,e,n);let a;t.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=h(a,t,e,n),i=t.op==="TensorListReserve"?-1:o,l=qj(r,s,o,i);return n.addTensorList(l),[l.idTensor]}case"TensorListGather":{const r=h("tensorListId",t,e,n),s=h("indices",t,e,n),a=h("elementShape",t,e,n),o=h("elementDType",t,e,n);return[n.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=h("tensorListId",t,e,n),s=h("elementShape",t,e,n),a=h("elementDType",t,e,n),o=h("numElements",t,e,n);return[n.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=h("tensor",t,e,n),s=h("elementShape",t,e,n),a=h("elementDType",t,e,n),o=Wj(r,s,a);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=h("tensorListId",t,e,n),s=n.getTensorList(r.id),a=h("dtype",t,e,n),o=h("elementShape",t,e,n);return[s.concat(a,o)]}case"TensorListPushBack":{const r=h("tensorListId",t,e,n),s=h("tensor",t,e,n),a=n.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=h("tensorListId",t,e,n),s=h("elementShape",t,e,n),a=h("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=h("tensor",t,e,n),s=h("elementShape",t,e,n),a=h("lengths",t,e,n),o=Gj(r,a,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=h("tensorListId",t,e,n),s=n.getTensorList(r.id);return[Z(s.size(),"int32")]}case"TensorListResize":{const r=h("tensorListId",t,e,n),s=h("size",t,e,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(t,e,n){const[r,s]=h("fusedOps",t,e,n),a=r==="biasadd",o=!a,i=s==="prelu",l=r==="fusedbatchnorm",u=h("numArgs",t,e,n);if(a){if(i&&u!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&u!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=h("strides",t,e,n),d=Wi(t,e,n),p=h("dataFormat",t,e,n).toUpperCase(),f=h("dilations",t,e,n);let[m,g]=h("args",t,e,n);o&&(g=m,m=void 0);const w=h("leakyreluAlpha",t,e,n);return{stride:c,pad:d,dataFormat:p,dilations:f,biasArg:m,preluArg:g,activationFunc:s,leakyreluAlpha:w}}const Xj=(t,e,n,r=Ve)=>{switch(t.op){case"Conv1D":{const s=h("stride",t,e,n),a=h("pad",t,e,n),o=h("dataFormat",t,e,n).toUpperCase(),i=h("dilation",t,e,n);return[r.conv1d(h("x",t,e,n),h("filter",t,e,n),s,a,o,i)]}case"Conv2D":{const s=h("strides",t,e,n),a=Wi(t,e,n),o=h("dataFormat",t,e,n).toUpperCase(),i=h("dilations",t,e,n);return[r.conv2d(h("x",t,e,n),h("filter",t,e,n),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:d}=Dg(t,e,n);return[r.fused.conv2d({x:h("x",t,e,n),filter:h("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:d})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:d}=Dg(t,e,n);return[r.fused.depthwiseConv2d({x:h("x",t,e,n),filter:h("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:d})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=h("outputShape",t,e,n),a=h("strides",t,e,n),o=Wi(t,e,n);return[r.conv2dTranspose(h("x",t,e,n),h("filter",t,e,n),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=h("strides",t,e,n),a=Wi(t,e,n),o=h("dilations",t,e,n),i=h("dataFormat",t,e,n).toUpperCase();return[r.depthwiseConv2d(h("input",t,e,n),h("filter",t,e,n),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("dataFormat",t,e,n).toUpperCase(),i=h("dilations",t,e,n);return[r.conv3d(h("x",t,e,n),h("filter",t,e,n),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("kernelSize",t,e,n);return[r.avgPool(h("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("kernelSize",t,e,n);return[r.maxPool(h("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("kernelSize",t,e,n),i=h("includeBatchInIndex",t,e,n),{result:l,indexes:u}=r.maxPoolWithArgmax(h("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a,i);return[l,u]}case"AvgPool3D":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("kernelSize",t,e,n);return[r.avgPool3d(h("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("kernelSize",t,e,n);return[r.maxPool3d(h("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=h("strides",t,e,n),a=h("pad",t,e,n),o=h("dilations",t,e,n),i=s[1],l=s[2],u=o[1],c=o[2];return[r.dilation2d(h("x",t,e,n),h("filter",t,e,n),[i,l],a,[u,c],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yj=(t,e,n,r=Ve)=>{switch(t.op){case"Fill":{const s=h("shape",t,e,n),a=h("dtype",t,e,n),o=h("value",t,e,n);return[r.fill(s,o,a)]}case"LinSpace":{const s=h("start",t,e,n),a=h("stop",t,e,n),o=h("num",t,e,n);return[r.linspace(s,a,o)]}case"Multinomial":{const s=h("logits",t,e,n),a=h("numSamples",t,e,n),o=h("seed",t,e,n);return[r.multinomial(s,a,o)]}case"OneHot":{const s=h("indices",t,e,n),a=h("depth",t,e,n),o=h("onValue",t,e,n),i=h("offValue",t,e,n),l=h("dtype",t,e,n);return[r.oneHot(s,a,o,i,l)]}case"Ones":return[r.ones(h("shape",t,e,n),h("dtype",t,e,n))];case"OnesLike":return[r.onesLike(h("x",t,e,n))];case"RandomStandardNormal":return[r.randomStandardNormal(h("shape",t,e,n),h("dtype",t,e,n),h("seed",t,e,n))];case"RandomUniform":return[r.randomUniform(h("shape",t,e,n),h("minval",t,e,n),h("maxval",t,e,n),h("dtype",t,e,n))];case"RandomUniformInt":return[r.randomUniformInt(h("shape",t,e,n),h("minval",t,e,n),h("maxval",t,e,n),h("seed",t,e,n))];case"Range":{const s=h("start",t,e,n),a=h("stop",t,e,n),o=h("step",t,e,n);return[r.range(s,a,o,h("dtype",t,e,n))]}case"TruncatedNormal":{const s=h("shape",t,e,n),a=h("mean",t,e,n),o=h("stdDev",t,e,n),i=h("seed",t,e,n);return[r.truncatedNormal(s,a,o,h("dtype",t,e,n),i)]}case"Zeros":return[r.zeros(h("shape",t,e,n),h("dtype",t,e,n))];case"ZerosLike":return[r.zerosLike(h("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uc(t,e,n){const r=h("boxes",t,e,n),s=h("scores",t,e,n),a=h("maxOutputSize",t,e,n),o=h("iouThreshold",t,e,n),i=h("scoreThreshold",t,e,n),l=h("softNmsSigma",t,e,n);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:l}}const Jj=async(t,e,n,r,s=Ve)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u,softNmsSigma:c}=uc(t,e,n),d=await s.image.nonMaxSuppressionWithScoreAsync(a,o,i,l,u,c);return[d.selectedIndices,d.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u}=uc(t,e,n),c=h("padToMaxOutputSize",t,e,n),d=await s.image.nonMaxSuppressionPaddedAsync(a,o,i,l,u,c);return[d.selectedIndices,d.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u}=uc(t,e,n);return[await s.image.nonMaxSuppressionAsync(a,o,i,l,u)]}case"Where":{const a=s.cast(h("condition",t,e,n),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(h("x",t,e,n),h("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zj=(t,e,n,r=Ve)=>{switch(t.op){case"LowerBound":{const s=h("sortedSequence",t,e,n),a=h("values",t,e,n);return[r.lowerBound(s,a)]}case"TopKV2":{const s=h("x",t,e,n),a=h("k",t,e,n),o=h("sorted",t,e,n),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=h("sortedSequence",t,e,n),a=h("values",t,e,n);return[r.upperBound(s,a)]}case"Unique":{const s=h("x",t,e,n),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=h("x",t,e,n),a=h("axis",t,e,n),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eO=(t,e,n,r=Ve)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const s=h("default",t,e,n);return[Be(t.name,e,n)||s];case"Placeholder":return[Be(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const c=h("x",t,e,n);return[bn(c)]}case"IdentityN":return h("x",t,e,n).map(c=>bn(c));case"Snapshot":const a=h("x",t,e,n);return[bn(a)];case"Shape":return[r.tensor1d(h("x",t,e,n).shape,"int32")];case"ShapeN":return h("x",t,e,n).map(c=>r.tensor1d(c.shape));case"Size":return[r.scalar(h("x",t,e,n).size,"int32")];case"Rank":return[r.scalar(h("x",t,e,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=h("x",t,e,n),i=h("data",t,e,n),l=h("message",t,e,n),u=h("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let c=0;c<i.length;c++)console.log(Array.prototype.slice.call(i[c].dataSync()).slice(0,u));return[o];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tO{get id(){return this.handle.id}constructor(e,n){this.keyDType=e,this.valueDType=n,this.handle=Z(0),this.tensorMap=new Map,qt(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return Z(this.size(),"int32")}async import(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),te(()=>{const s=Tr(n),a=r.length,o=s.length;S(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const l=r[i],u=s[i];qt(u),this.tensorMap.set(l,u)}return this.handle})}async find(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return te(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],i=this.findWithDefault(o,n);s.push(i)}return pn(s)})}findWithDefault(e,n){const r=this.tensorMap.get(e);return r??n}checkKeyAndValueTensor(e,n){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nO=async(t,e,n,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(t.name);if(s!=null)return[s];{const a=h("keyDType",t,e,n),o=h("valueDType",t,e,n),i=new tO(a,o);return r.addHashTable(t.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=h("tableHandle",t,e,n,r),a=h("keys",t,e,n),o=h("values",t,e,n);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=h("tableHandle",t,e,n,r),a=h("keys",t,e,n),o=h("defaultValue",t,e,n);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=h("tableHandle",t,e,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rO=(t,e,n,r=Ve)=>{switch(t.op){case"ResizeBilinear":{const s=h("images",t,e,n),a=h("size",t,e,n),o=h("alignCorners",t,e,n),i=h("halfPixelCenters",t,e,n);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=h("images",t,e,n),a=h("size",t,e,n),o=h("alignCorners",t,e,n),i=h("halfPixelCenters",t,e,n);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=h("image",t,e,n),a=h("boxes",t,e,n),o=h("boxInd",t,e,n),i=h("cropSize",t,e,n),l=h("method",t,e,n),u=h("extrapolationValue",t,e,n);return[r.image.cropAndResize(s,a,o,i,l,u)]}case"ImageProjectiveTransformV3":{const s=h("images",t,e,n),a=h("transforms",t,e,n),o=h("outputShape",t,e,n),i=h("fillValue",t,e,n),l=h("interpolation",t,e,n),u=h("fillMode",t,e,n);return[r.image.transform(s,a,l.toLowerCase(),u.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sO=(t,e,n,r=Ve)=>{switch(t.op){case"Equal":return[r.equal(h("a",t,e,n),h("b",t,e,n))];case"NotEqual":return[r.notEqual(h("a",t,e,n),h("b",t,e,n))];case"Greater":return[r.greater(h("a",t,e,n),h("b",t,e,n))];case"GreaterEqual":return[r.greaterEqual(h("a",t,e,n),h("b",t,e,n))];case"Less":return[r.less(h("a",t,e,n),h("b",t,e,n))];case"LessEqual":return[r.lessEqual(h("a",t,e,n),h("b",t,e,n))];case"LogicalAnd":return[r.logicalAnd(h("a",t,e,n),h("b",t,e,n))];case"LogicalNot":return[r.logicalNot(h("a",t,e,n))];case"LogicalOr":return[r.logicalOr(h("a",t,e,n),h("b",t,e,n))];case"Select":case"SelectV2":return[r.where(h("condition",t,e,n),h("a",t,e,n),h("b",t,e,n))];case"BitwiseAnd":return[r.bitwiseAnd(h("a",t,e,n),h("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aO=(t,e,n,r=Ve)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(h("a",t,e,n),h("b",t,e,n),h("transposeA",t,e,n),h("transposeB",t,e,n))];case"Einsum":return[r.einsum(h("equation",t,e,n),...h("tensors",t,e,n))];case"Transpose":return[r.transpose(h("x",t,e,n),h("perm",t,e,n))];case"_FusedMatMul":const[s,a]=h("fusedOps",t,e,n),o=s==="biasadd",i=a==="prelu",l=h("numArgs",t,e,n),u=h("leakyreluAlpha",t,e,n);if(o){if(i&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,d]=h("args",t,e,n);return[r.fused.matMul({a:h("a",t,e,n),b:h("b",t,e,n),transposeA:h("transposeA",t,e,n),transposeB:h("transposeB",t,e,n),bias:c,activation:a,preluActivationWeights:d,leakyreluAlpha:u})];case"MatrixBandPart":return[r.linalg.bandPart(h("a",t,e,n),h("numLower",t,e,n),h("numUpper",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oO=(t,e,n,r=Ve)=>{switch(t.op){case"EuclideanNorm":return[r.euclideanNorm(h("x",t,e,n),h("axis",t,e,n),h("keepDims",t,e,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(h("x",t,e,n),h("mean",t,e,n),h("variance",t,e,n),h("offset",t,e,n),h("scale",t,e,n),h("epsilon",t,e,n))];case"FusedBatchNormV3":return[r.batchNorm(h("x",t,e,n),h("mean",t,e,n),h("variance",t,e,n),h("offset",t,e,n),h("scale",t,e,n),h("epsilon",t,e,n))];case"LRN":return[r.localResponseNormalization(h("x",t,e,n),h("radius",t,e,n),h("bias",t,e,n),h("alpha",t,e,n),h("beta",t,e,n))];case"Softmax":return[r.softmax(h("x",t,e,n))];case"LogSoftmax":return[r.logSoftmax(h("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iO=(t,e,n,r=Ve)=>{switch(t.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(h("paramsNestedSplits",t,e,n),h("paramsDenseValues",t,e,n),h("indices",t,e,n),h("outputRaggedRank",t,e,n));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(h("starts",t,e,n),h("limits",t,e,n),h("splits",t,e,n));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(h("shape",t,e,n),h("values",t,e,n),h("defaultValue",t,e,n),h("rowPartitionTensors",t,e,n),h("rowPartitionTypes",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lO=(t,e,n,r=Ve)=>{switch(t.op){case"Max":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.max(h("x",t,e,n),i,l)]}case"Mean":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.mean(h("x",t,e,n),i,l)]}case"Min":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.min(h("x",t,e,n),i,l)]}case"Sum":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.sum(h("x",t,e,n),i,l)]}case"All":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.all(h("x",t,e,n),i,l)]}case"Any":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.any(h("x",t,e,n),i,l)]}case"ArgMax":{const i=h("axis",t,e,n);return[r.argMax(h("x",t,e,n),i)]}case"ArgMin":{const i=h("axis",t,e,n);return[r.argMin(h("x",t,e,n),i)]}case"Prod":{const i=h("axis",t,e,n),l=h("keepDims",t,e,n);return[r.prod(h("x",t,e,n),i,l)]}case"Cumprod":{const i=h("axis",t,e,n),l=h("exclusive",t,e,n),u=h("reverse",t,e,n);return[r.cumprod(h("x",t,e,n),i,l,u)]}case"Cumsum":{const i=h("axis",t,e,n),l=h("exclusive",t,e,n),u=h("reverse",t,e,n);return[r.cumsum(h("x",t,e,n),i,l,u)]}case"Bincount":const s=h("x",t,e,n),a=h("weights",t,e,n),o=h("size",t,e,n);return[r.bincount(s,a,o)];case"DenseBincount":{const i=h("x",t,e,n),l=h("weights",t,e,n),u=h("size",t,e,n),c=h("binaryOutput",t,e,n);return[r.denseBincount(i,l,u,c)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uO=(t,e,n,r=Ve)=>{switch(t.op){case"ConcatV2":case"Concat":{const s=h("n",t,e,n),a=h("axis",t,e,n);let o=h("tensors",t,e,n);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=h("x",t,e,n),a=h("indices",t,e,n);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=h("axis",t,e,n),a=h("batchDims",t,e,n),o=h("x",t,e,n),i=h("indices",t,e,n);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=h("dims",t,e,n),a=[];for(let i=0;i<s.length;i++)s[i]&&a.push(i);const o=h("x",t,e,n);return[r.reverse(o,a)]}case"ReverseV2":{const s=h("axis",t,e,n),a=h("x",t,e,n);return[r.reverse(a,s)]}case"Slice":{const s=h("begin",t,e,n),a=h("size",t,e,n);return[r.slice(h("x",t,e,n),s,a)]}case"StridedSlice":{const s=h("begin",t,e,n),a=h("end",t,e,n),o=h("strides",t,e,n),i=h("beginMask",t,e,n),l=h("endMask",t,e,n),u=h("ellipsisMask",t,e,n),c=h("newAxisMask",t,e,n),d=h("shrinkAxisMask",t,e,n),p=h("x",t,e,n);return[r.stridedSlice(p,s,a,o,i,l,u,c,d)]}case"Pack":return te(()=>{const s=h("axis",t,e,n),a=h("tensors",t,e,n),o=a[0].shape,i=r.squeeze(a[0]).shape,l=a.map(u=>{const c=Pn(u.shape,o);if(!c&&!Pn(r.squeeze(u).shape,i))throw new Error("the input tensors shape does not match");return c?u:r.reshape(u,o)});return[r.stack(l,s)]});case"Unpack":{const s=h("axis",t,e,n),a=h("tensor",t,e,n);return r.unstack(a,s)}case"Tile":{const s=h("reps",t,e,n);return[r.tile(h("x",t,e,n),s)]}case"Split":case"SplitV":{const s=h("axis",t,e,n),a=h("numOrSizeSplits",t,e,n),o=h("x",t,e,n);return r.split(o,a,s)}case"ScatterNd":{const s=h("indices",t,e,n),a=h("values",t,e,n),o=h("shape",t,e,n);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=h("x",t,e,n),a=h("indices",t,e,n);return[r.gatherND(s,a)]}case"SparseToDense":{const s=h("sparseIndices",t,e,n),a=h("outputShape",t,e,n),o=h("sparseValues",t,e,n),i=h("defaultValue",t,e,n);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}case"TensorScatterUpdate":{const s=h("indices",t,e,n),a=h("values",t,e,n),o=h("tensor",t,e,n);return[r.tensorScatterUpdate(o,s,a)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cO=(t,e,n,r=Ve)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(h("indices",t,e,n),h("values",t,e,n),h("denseShape",t,e,n),h("defaultValue",t,e,n));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(h("inputIndices",t,e,n),h("inputShape",t,e,n),h("newShape",t,e,n));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(h("data",t,e,n),h("indices",t,e,n),h("segmentIds",t,e,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(h("data",t,e,n),h("indices",t,e,n),h("segmentIds",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dO=(t,e,n,r=Ve)=>{switch(t.op){case"FFT":return[r.fft(h("x",t,e,n))];case"IFFT":return[r.ifft(h("x",t,e,n))];case"RFFT":return[r.rfft(h("x",t,e,n))];case"IRFFT":return[r.irfft(h("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pO=(t,e,n,r=Ve)=>{switch(t.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(h("input",t,e,n),h("pattern",t,e,n),h("rewrite",t,e,n),h("replaceGlobal",t,e,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(h("data",t,e,n),h("dataSplits",t,e,n),h("separator",t,e,n),h("nGramWidths",t,e,n),h("leftPad",t,e,n),h("rightPad",t,e,n),h("padWidth",t,e,n),h("preserveShortSequences",t,e,n));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(h("input",t,e,n),h("delimiter",t,e,n),h("skipEmpty",t,e,n));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(h("input",t,e,n),h("numBuckets",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fO=(t,e,n,r=Ve)=>{switch(t.op){case"Cast":return[r.cast(h("x",t,e,n),h("dtype",t,e,n))];case"ExpandDims":{const s=h("axis",t,e,n);return[r.expandDims(h("x",t,e,n),s)]}case"Squeeze":{const s=h("axis",t,e,n);return[r.squeeze(h("x",t,e,n),s)]}case"Reshape":return[r.reshape(h("x",t,e,n),h("shape",t,e,n))];case"EnsureShape":return[r.ensureShape(h("x",t,e,n),h("shape",t,e,n))];case"MirrorPad":return[r.mirrorPad(h("x",t,e,n),h("padding",t,e,n),h("mode",t,e,n))];case"PadV2":case"Pad":return[r.pad(h("x",t,e,n),h("padding",t,e,n),h("constantValue",t,e,n))];case"SpaceToBatchND":{const s=h("blockShape",t,e,n),a=h("paddings",t,e,n);return[r.spaceToBatchND(h("x",t,e,n),s,a)]}case"BatchToSpaceND":{const s=h("blockShape",t,e,n),a=h("crops",t,e,n);return[r.batchToSpaceND(h("x",t,e,n),s,a)]}case"DepthToSpace":{const s=h("blockSize",t,e,n),a=h("dataFormat",t,e,n).toUpperCase();return[r.depthToSpace(h("x",t,e,n),s,a)]}case"BroadcastTo":return[r.broadcastTo(h("x",t,e,n),h("shape",t,e,n))];case"BroadcastArgs":return[r.broadcastArgs(h("s0",t,e,n),h("s1",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(t,e,n,r,s=te){const a=((o,i,l)=>{switch(o.category){case"arithmetic":return s(()=>Vj(o,i,l));case"basic_math":return s(()=>Uj(o,i,l));case"control":return Qj(o,i,l);case"convolution":return s(()=>Xj(o,i,l));case"creation":return s(()=>Yj(o,i,l));case"dynamic":return Jj(o,i,l);case"evaluation":return s(()=>Zj(o,i,l));case"image":return s(()=>rO(o,i,l));case"graph":return s(()=>eO(o,i,l));case"logical":return s(()=>sO(o,i,l));case"matrices":return s(()=>aO(o,i,l));case"normalization":return s(()=>oO(o,i,l));case"ragged":return s(()=>iO(o,i,l));case"reduction":return s(()=>lO(o,i,l));case"slice_join":return s(()=>uO(o,i,l));case"sparse":return s(()=>cO(o,i,l));case"spectral":return s(()=>dO(o,i,l));case"string":return s(()=>pO(o,i,l));case"transformation":return s(()=>fO(o,i,l));case"hash_table":return nO(o,i,l,r);case"custom":const u=$N(o.op);if(u&&u.customExecutor)return u.customExecutor(new Mj(o,i,l));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return es(a)?a.then(o=>[].concat(o)):[].concat(a)}class Og{constructor(e={},n={},r={},s={},a){this.weightMap=e,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,n){return{id:e,frameName:n,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(e);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pg(t,e,n,r){const s=new Set,a=[];let o=null,i=null;const l=new Set,u=new Set(Object.keys(t).map(p=>pt(p)[0]));r=r||[];const c=new Set(r.map(p=>pt(p.name)[0])),d=[...e];for(;d.length>0;){const p=d.pop();if((Fr(p)||xO(p)||NO(p))&&o==null&&(o=p,i=o.children.map(f=>f.name).filter(f=>s.has(f))),s.add(p.name),n[p.name]==null&&!u.has(p.name)&&!c.has(p.name)){if(p.inputs.length===0){a.push(p.name);continue}p.inputs.forEach(f=>{l.has(f.name)||(l.add(f.name),d.push(f))})}}return{inputs:t,outputs:e,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function hO(t,e){const{usedNodes:n,inputs:r}=e,s=Object.keys(r).map(w=>pt(w)[0]).map(w=>t.nodes[w]),a=t.initNodes||[],o=w=>n.has(typeof w=="string"?w:w.name);function i(w){return[...new Map(w.map(y=>[y.name,y])).values()]}const l=i([...s,...t.weights,...a]).filter(o),u=i([...l,...Object.values(t.nodes)]).filter(o),c=new Map(u.map(w=>[w.name,w])),d={};for(const w of u){d[w.name]=d[w.name]||0;for(const y of w.children)o(y)||(d[y.name]=Number.POSITIVE_INFINITY),d[y.name]=(d[y.name]||0)+1}const p=Object.entries(d).filter(([,w])=>w===0).map(([w])=>w),f=[...p];for(;p.length>0;){const w=p.pop(),y=c.get(w);for(const b of y.children.filter(o))--d[b.name]===0&&(f.push(b.name),p.push(b.name))}const m=f.map(w=>c.get(w)),g=mO(m,l);return gO(g,l),g}function mO(t,e){const n=new Map(t.map(o=>[o.name,o])),r=e.map(o=>o.name),s=new Set(r);for(;r.length>0;){const o=r.pop(),i=n.get(o);for(const l of i.children)!n.has(l.name)||s.has(l.name)||(s.add(l.name),r.push(l.name))}return t.filter(o=>s.has(o.name))}class xi extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function gO(t,e){const n=new Map(t.map((i,l)=>[i.name,l])),r=new Set(e.map(i=>i.name)),s=i=>r.has(typeof i=="string"?i:i.name),a=new Set(t.map(i=>i.name)),o=i=>a.has(typeof i=="string"?i:i.name);for(const i of t){for(const l of i.children.filter(o)){if(!n.has(l.name))throw new xi(`Child ${l.name} of node ${i.name} is unreachable.`);if(n.get(i.name)>n.get(l.name))throw new xi(`Node ${i.name} is scheduled to run after its child ${l.name}.`)}if(!s(i))for(const l of i.inputs){if(!n.has(l.name))throw new xi(`Input ${l.name} of node ${i.name} is unreachable.`);if(n.get(l.name)>n.get(i.name))throw new xi(`Node ${i.name} is scheduled to run before its input ${l.name}.`)}}}function yO(t){const e=new Map(t.map((i,l)=>[i.name,l])),n=Number.MAX_SAFE_INTEGER,r=t.map((i,l)=>Fr(i)?n:l),s=i=>{const l=r[e.get(i.name)];return l??-1},a=t.map((i,l)=>i.children.map(s).reduce((u,c)=>Math.max(u,c),r[l])),o=new Map;for(let i=0;i<t.length;++i){const l=a[i];if(l===n)continue;const u=t[i],c=t[l];o.has(c.name)||o.set(c.name,[]),o.get(c.name).push(u)}return o}const vO=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),bO=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),wO=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function Fr(t){return vO.has(t.op)}function xO(t){return bO.has(t.op)}function NO(t){return wO.has(t.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rl{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const n=Object.keys(e).map(r=>e[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const n=e.signatureKey||e.name;return e.defaultOutput?`${n}:${e.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((e,n)=>(e[n]=this._functions[n].signature,e),{})}constructor(e,n){this.graph=e,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new Rl(e.functions[r],this)})}getCompilationKey(e,n){const r=e.map(a=>a.name).sort(),s=n.map(a=>a.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(e,n){const r=Pg(e,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const u=n.map(d=>d.name),c=Object.keys(e);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${c}]. Missing the following inputs: [${s}]`)}const i=hO(this.graph,r),l=yO(i);return{orderedNodes:i,nodeLiveUntilMap:l}}cloneAndKeepTensor(e){if(e==null)return null;const n=e.clone();return qt(n),n}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([n,r])=>[n,this.cloneTensorList(r)]))}execute(e,n){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(p=>this.graph.nodes[pt(p)[0]]),a=n.map(p=>pt(p)[0]),o=new Set(a);let i=a.map(p=>this.graph.nodes[p]);i.length===0&&(i=this._outputs);const l=this.getCompilationKey(s,i);let u=this.compiledMap.get(l);u==null&&(u=this.compile(e,i),this.compiledMap.set(l,u));try{this.keepIntermediateTensors=Y().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}const c={},d={};return te(()=>{const p=new Og(this.weightMap,c,d,this.functionExecutorMap,this.parseNodeNameCache),f=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(y=>{const[b,x]=pt(y,p),k=[];k[x]=e[y],f[b]=k,this.keepIntermediateTensors&&(this.clonedTensorsMap[b]=this.cloneTensorList(k))});const m=this.getFrozenTensorIds(f),{orderedNodes:g,nodeLiveUntilMap:w}=u;for(const y of g){if(f[y.name])continue;const b=jg(y,f,p,this._resourceManager);if(es(b))throw new Error(`The execution of the op '${y.op}' returned a promise. Please use model.executeAsync() instead.`);f[y.name]=b,this.keepIntermediateTensors&&(this.clonedTensorsMap[y.name]=this.cloneTensorList(b)),this.checkTensorForDisposalWithNodeLiveUntilInfo(y,f,p,m,o,w.get(y.name))}return this.parent==null&&p.dispose(m),n.map(y=>Be(y,f,p))})}getFrozenTensorIds(e){const n=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(e,n,r,s,a,o,i){if(!(Fr(n)||o.has(e))){for(const l of r[e])l!=null&&(i[l.id]=(i[l.id]||0)+n.children.length);for(const l of n.inputs){if(Fr(l))continue;const u=Cg(l.name,r,s);if(u!=null)for(const c of u){if(!c||c.kept||a.has(c.id))continue;const d=i[c.id];d===1?(c.dispose(),delete i[c.id]):d!=null&&i[c.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,n,r,s,a,o){function i(l){return Fr(l)||a.has(l.name)}if(!(Fr(e)||o==null))for(const l of o){if(i(l))continue;const u=Cg(l.name,n,r);for(const c of u)!c||c.kept||s.has(c.id)||c.dispose()}}async executeAsync(e,n){return this._executeAsync(e,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const n of e)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,n,r=!1,s={},a={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=Y().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}const o=new Og(this.weightMap,s,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const i=await this.executeWithControlFlow(e,o,n,r),l=n.map(p=>Be(p,i,o)),u=l.map(p=>p.id),c=Object.keys(e).map(p=>e[p].id),d=new Set([...u,...c,...this.weightIds]);return Object.values(i).forEach(p=>{p.forEach(f=>{f&&!f.isDisposed&&!d.has(f.id)&&f.dispose()})}),this.parent==null&&o.dispose(d),l}async executeFunctionAsync(e,n,r){const s=e.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(e,n,r,s){const a=Object.keys(e),o=a.map(k=>this.graph.nodes[pt(k)[0]]),i=r.map(k=>pt(k)[0]),l=new Set(i);let u=i.map(k=>this.graph.nodes[k]);u.length===0&&(u=this._outputs);const{usedNodes:c,missingInputs:d,dynamicNode:p,syncInputs:f}=Pg(e,u,this.weightMap,this._initNodes),m=[...o,...this.graph.weights,...this._initNodes||[]].map(k=>({node:k,contexts:n.currentContext})),g=Object.assign({},this.weightMap);Object.keys(e).forEach(k=>{const[_,$]=pt(k),T=[];T[$]=e[k],g[_]=T});const w={},y=this.getFrozenTensorIds(g),b={};for(;m.length>0;){const k=this.processStack(o,m,n,g,b,y,l,w,c);await Promise.all(k)}p==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const x=u.filter(k=>!Fr(k)&&!Be(k.name,g,n)).map(k=>k.name);if(x.length>0){let k="";throw p!=null&&(k=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${f}]`),new Error(`Cannot compute the outputs [${x}] from the provided inputs [${a}]. Consider providing the following inputs: [${d}]. ${k}`)}return g}processStack(e,n,r,s,a,o,i,l,u){const c=[];for(;n.length>0;){const d=n.pop();r.currentContext=d.contexts;let p="";if(d.node.op==="Enter"&&h("isConstant",d.node,s,r)&&([p]=vn(d.node.name,r)),s[d.node.name]==null){const f=jg(d.node,s,r,this._resourceManager);p||([p]=vn(d.node.name,r));const m=r.currentContext;es(f)?c.push(f.then(g=>(s[p]=g,this.keepIntermediateTensors&&(this.clonedTensorsMap[p]=this.cloneTensorList(g)),r.currentContext=m,this.checkTensorForDisposal(p,d.node,s,r,o,i,l),this.processChildNodes(d.node,n,r,s,a,u),g))):(s[p]=f,this.keepIntermediateTensors&&(this.clonedTensorsMap[p]=this.cloneTensorList(f)),this.checkTensorForDisposal(p,d.node,s,r,o,i,l),this.processChildNodes(d.node,n,r,s,a,u))}else this.processChildNodes(d.node,n,r,s,a,u)}return c}processChildNodes(e,n,r,s,a,o){e.children.forEach(i=>{const[l]=vn(i.name,r);a[l]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(u=>!!Be(u,s,r))&&(a[l]=!0,n.push({contexts:r.currentContext,node:i})):i.inputNames.every(u=>!!Be(u,s,r))&&(a[l]=!0,n.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(n=>n.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(n=>{const r=e[n],[s]=pt(n),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((l,u)=>o[u]===-1||o[u]===l);S(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&S(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var n,r;const s={};for(const a in e){const o=(r=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||r===void 0?void 0:r[a];o!=null?s[o.name]=e[a]:s[a]=e[a]}return s}checkInputs(e){const n=Object.keys(e).filter(r=>{const[s]=pt(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(e){return e.map(n=>{var r,s;const a=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[n];return a!=null?a.name:n},{})}checkOutputs(e){e.forEach(n=>{const[r]=pt(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class kO{constructor(e={},n={}){this.hashTableNameToHandle=e,this.hashTableMap=n}addHashTable(e,n){this.hashTableNameToHandle[e]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SO="?tfjs-format=file",EO="model.json";class _O{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,n={},r=Nh){this.modelUrl=e,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new kO}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const n=this.io.getLoadHandlers(e,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[e]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return es(e)?e.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(e)}loadSync(e){const n=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,n)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await W1(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,n)}loadWithWeightMap(e,n){this.artifacts=e;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(s=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new Rl($g.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=$g.Instance.transformGraph(e.modelInitializer);this.initializer=new Rl(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,n){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const n=e instanceof ze?[e]:e,r={};return n.forEach((s,a)=>r[this.structuredOutputKeys[a]]=s),r}return e}predict(e,n){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,n){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var n;if(!(e instanceof ze)&&!Array.isArray(e)){const a=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(a!=null)for(const o in a){const i=a[o];i.resourceId!=null&&(e[o]=this.resourceIdToCapturedInput[i.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((a,o)=>{var i,l,u;const c=(u=(l=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||l===void 0?void 0:l[o])===null||u===void 0?void 0:u.resourceId;return c!=null?a[o]=this.resourceIdToCapturedInput[c]:a[o]=e[s++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,r=Object.keys(n);for(let s=0;s<r.length;s++){const a=r[s],o=n[a];this.resourceIdToCapturedInput[o.resourceId]=e[s]}}}execute(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=this.executor.execute(e,n);return r.length>1?r:r[0]}async executeAsync(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(e,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((n,r)=>(n[r]=[e[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&tt(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function Fg(t,e={},n=Nh){if(t==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof t=="string"&&(t=TO(t));const r=new _O(t,e,n);return await r.load(),r}function TO(t){return t.endsWith("/")||(t=t+"/"),`${t}${EO}${SO}`}/**
    * @license
    * Copyright 2023 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */function zl(t,e,n,r){return new(n||(n=Promise))(function(s,a){function o(u){try{l(r.next(u))}catch(c){a(c)}}function i(u){try{l(r.throw(u))}catch(c){a(c)}}function l(u){var c;u.done?s(u.value):(c=u.value,c instanceof n?c:new n(function(d){d(c)})).then(o,i)}l((r=r.apply(t,[])).next())})}function Bl(t,e){var n,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(l){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&c[0]?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[2&c[0],s.value]),c[0]){case 0:case 1:s=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){o.label=c[1];break}if(c[0]===6&&o.label<s[1]){o.label=s[1],s=c;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(c);break}s[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(d){c=[6,d],r=0}finally{n=s=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([l,u])}}}var CO={0:"tench, Tinca tinca",1:"goldfish, Carassius auratus",2:"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",3:"tiger shark, Galeocerdo cuvieri",4:"hammerhead, hammerhead shark",5:"electric ray, crampfish, numbfish, torpedo",6:"stingray",7:"cock",8:"hen",9:"ostrich, Struthio camelus",10:"brambling, Fringilla montifringilla",11:"goldfinch, Carduelis carduelis",12:"house finch, linnet, Carpodacus mexicanus",13:"junco, snowbird",14:"indigo bunting, indigo finch, indigo bird, Passerina cyanea",15:"robin, American robin, Turdus migratorius",16:"bulbul",17:"jay",18:"magpie",19:"chickadee",20:"water ouzel, dipper",21:"kite",22:"bald eagle, American eagle, Haliaeetus leucocephalus",23:"vulture",24:"great grey owl, great gray owl, Strix nebulosa",25:"European fire salamander, Salamandra salamandra",26:"common newt, Triturus vulgaris",27:"eft",28:"spotted salamander, Ambystoma maculatum",29:"axolotl, mud puppy, Ambystoma mexicanum",30:"bullfrog, Rana catesbeiana",31:"tree frog, tree-frog",32:"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",33:"loggerhead, loggerhead turtle, Caretta caretta",34:"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",35:"mud turtle",36:"terrapin",37:"box turtle, box tortoise",38:"banded gecko",39:"common iguana, iguana, Iguana iguana",40:"American chameleon, anole, Anolis carolinensis",41:"whiptail, whiptail lizard",42:"agama",43:"frilled lizard, Chlamydosaurus kingi",44:"alligator lizard",45:"Gila monster, Heloderma suspectum",46:"green lizard, Lacerta viridis",47:"African chameleon, Chamaeleo chamaeleon",48:"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",49:"African crocodile, Nile crocodile, Crocodylus niloticus",50:"American alligator, Alligator mississipiensis",51:"triceratops",52:"thunder snake, worm snake, Carphophis amoenus",53:"ringneck snake, ring-necked snake, ring snake",54:"hognose snake, puff adder, sand viper",55:"green snake, grass snake",56:"king snake, kingsnake",57:"garter snake, grass snake",58:"water snake",59:"vine snake",60:"night snake, Hypsiglena torquata",61:"boa constrictor, Constrictor constrictor",62:"rock python, rock snake, Python sebae",63:"Indian cobra, Naja naja",64:"green mamba",65:"sea snake",66:"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",67:"diamondback, diamondback rattlesnake, Crotalus adamanteus",68:"sidewinder, horned rattlesnake, Crotalus cerastes",69:"trilobite",70:"harvestman, daddy longlegs, Phalangium opilio",71:"scorpion",72:"black and gold garden spider, Argiope aurantia",73:"barn spider, Araneus cavaticus",74:"garden spider, Aranea diademata",75:"black widow, Latrodectus mactans",76:"tarantula",77:"wolf spider, hunting spider",78:"tick",79:"centipede",80:"black grouse",81:"ptarmigan",82:"ruffed grouse, partridge, Bonasa umbellus",83:"prairie chicken, prairie grouse, prairie fowl",84:"peacock",85:"quail",86:"partridge",87:"African grey, African gray, Psittacus erithacus",88:"macaw",89:"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",90:"lorikeet",91:"coucal",92:"bee eater",93:"hornbill",94:"hummingbird",95:"jacamar",96:"toucan",97:"drake",98:"red-breasted merganser, Mergus serrator",99:"goose",100:"black swan, Cygnus atratus",101:"tusker",102:"echidna, spiny anteater, anteater",103:"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",104:"wallaby, brush kangaroo",105:"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",106:"wombat",107:"jelly fish",108:"sea anemone, anemone",109:"brain coral",110:"flatworm, platyhelminth",111:"nematode, nematode worm, roundworm",112:"conch",113:"snail",114:"slug",115:"sea slug, nudibranch",116:"chiton, coat-of-mail shell, sea cradle, polyplacophore",117:"chambered nautilus, pearly nautilus, nautilus",118:"Dungeness crab, Cancer magister",119:"rock crab, Cancer irroratus",120:"fiddler crab",121:"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",122:"American lobster, Northern lobster, Maine lobster, Homarus americanus",123:"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",124:"crayfish, crawfish, crawdad, crawdaddy",125:"hermit crab",126:"isopod",127:"white stork, Ciconia ciconia",128:"black stork, Ciconia nigra",129:"spoonbill",130:"flamingo",131:"little blue heron, Egretta caerulea",132:"American egret, great white heron, Egretta albus",133:"bittern",134:"crane",135:"limpkin, Aramus pictus",136:"European gallinule, Porphyrio porphyrio",137:"American coot, marsh hen, mud hen, water hen, Fulica americana",138:"bustard",139:"ruddy turnstone, Arenaria interpres",140:"red-backed sandpiper, dunlin, Erolia alpina",141:"redshank, Tringa totanus",142:"dowitcher",143:"oystercatcher, oyster catcher",144:"pelican",145:"king penguin, Aptenodytes patagonica",146:"albatross, mollymawk",147:"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",148:"killer whale, killer, orca, grampus, sea wolf, Orcinus orca",149:"dugong, Dugong dugon",150:"sea lion",151:"Chihuahua",152:"Japanese spaniel",153:"Maltese dog, Maltese terrier, Maltese",154:"Pekinese, Pekingese, Peke",155:"Shih-Tzu",156:"Blenheim spaniel",157:"papillon",158:"toy terrier",159:"Rhodesian ridgeback",160:"Afghan hound, Afghan",161:"basset, basset hound",162:"beagle",163:"bloodhound, sleuthhound",164:"bluetick",165:"black-and-tan coonhound",166:"Walker hound, Walker foxhound",167:"English foxhound",168:"redbone",169:"borzoi, Russian wolfhound",170:"Irish wolfhound",171:"Italian greyhound",172:"whippet",173:"Ibizan hound, Ibizan Podenco",174:"Norwegian elkhound, elkhound",175:"otterhound, otter hound",176:"Saluki, gazelle hound",177:"Scottish deerhound, deerhound",178:"Weimaraner",179:"Staffordshire bullterrier, Staffordshire bull terrier",180:"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",181:"Bedlington terrier",182:"Border terrier",183:"Kerry blue terrier",184:"Irish terrier",185:"Norfolk terrier",186:"Norwich terrier",187:"Yorkshire terrier",188:"wire-haired fox terrier",189:"Lakeland terrier",190:"Sealyham terrier, Sealyham",191:"Airedale, Airedale terrier",192:"cairn, cairn terrier",193:"Australian terrier",194:"Dandie Dinmont, Dandie Dinmont terrier",195:"Boston bull, Boston terrier",196:"miniature schnauzer",197:"giant schnauzer",198:"standard schnauzer",199:"Scotch terrier, Scottish terrier, Scottie",200:"Tibetan terrier, chrysanthemum dog",201:"silky terrier, Sydney silky",202:"soft-coated wheaten terrier",203:"West Highland white terrier",204:"Lhasa, Lhasa apso",205:"flat-coated retriever",206:"curly-coated retriever",207:"golden retriever",208:"Labrador retriever",209:"Chesapeake Bay retriever",210:"German short-haired pointer",211:"vizsla, Hungarian pointer",212:"English setter",213:"Irish setter, red setter",214:"Gordon setter",215:"Brittany spaniel",216:"clumber, clumber spaniel",217:"English springer, English springer spaniel",218:"Welsh springer spaniel",219:"cocker spaniel, English cocker spaniel, cocker",220:"Sussex spaniel",221:"Irish water spaniel",222:"kuvasz",223:"schipperke",224:"groenendael",225:"malinois",226:"briard",227:"kelpie",228:"komondor",229:"Old English sheepdog, bobtail",230:"Shetland sheepdog, Shetland sheep dog, Shetland",231:"collie",232:"Border collie",233:"Bouvier des Flandres, Bouviers des Flandres",234:"Rottweiler",235:"German shepherd, German shepherd dog, German police dog, alsatian",236:"Doberman, Doberman pinscher",237:"miniature pinscher",238:"Greater Swiss Mountain dog",239:"Bernese mountain dog",240:"Appenzeller",241:"EntleBucher",242:"boxer",243:"bull mastiff",244:"Tibetan mastiff",245:"French bulldog",246:"Great Dane",247:"Saint Bernard, St Bernard",248:"Eskimo dog, husky",249:"malamute, malemute, Alaskan malamute",250:"Siberian husky",251:"dalmatian, coach dog, carriage dog",252:"affenpinscher, monkey pinscher, monkey dog",253:"basenji",254:"pug, pug-dog",255:"Leonberg",256:"Newfoundland, Newfoundland dog",257:"Great Pyrenees",258:"Samoyed, Samoyede",259:"Pomeranian",260:"chow, chow chow",261:"keeshond",262:"Brabancon griffon",263:"Pembroke, Pembroke Welsh corgi",264:"Cardigan, Cardigan Welsh corgi",265:"toy poodle",266:"miniature poodle",267:"standard poodle",268:"Mexican hairless",269:"timber wolf, grey wolf, gray wolf, Canis lupus",270:"white wolf, Arctic wolf, Canis lupus tundrarum",271:"red wolf, maned wolf, Canis rufus, Canis niger",272:"coyote, prairie wolf, brush wolf, Canis latrans",273:"dingo, warrigal, warragal, Canis dingo",274:"dhole, Cuon alpinus",275:"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",276:"hyena, hyaena",277:"red fox, Vulpes vulpes",278:"kit fox, Vulpes macrotis",279:"Arctic fox, white fox, Alopex lagopus",280:"grey fox, gray fox, Urocyon cinereoargenteus",281:"tabby, tabby cat",282:"tiger cat",283:"Persian cat",284:"Siamese cat, Siamese",285:"Egyptian cat",286:"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",287:"lynx, catamount",288:"leopard, Panthera pardus",289:"snow leopard, ounce, Panthera uncia",290:"jaguar, panther, Panthera onca, Felis onca",291:"lion, king of beasts, Panthera leo",292:"tiger, Panthera tigris",293:"cheetah, chetah, Acinonyx jubatus",294:"brown bear, bruin, Ursus arctos",295:"American black bear, black bear, Ursus americanus, Euarctos americanus",296:"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",297:"sloth bear, Melursus ursinus, Ursus ursinus",298:"mongoose",299:"meerkat, mierkat",300:"tiger beetle",301:"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",302:"ground beetle, carabid beetle",303:"long-horned beetle, longicorn, longicorn beetle",304:"leaf beetle, chrysomelid",305:"dung beetle",306:"rhinoceros beetle",307:"weevil",308:"fly",309:"bee",310:"ant, emmet, pismire",311:"grasshopper, hopper",312:"cricket",313:"walking stick, walkingstick, stick insect",314:"cockroach, roach",315:"mantis, mantid",316:"cicada, cicala",317:"leafhopper",318:"lacewing, lacewing fly",319:"dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk",320:"damselfly",321:"admiral",322:"ringlet, ringlet butterfly",323:"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",324:"cabbage butterfly",325:"sulphur butterfly, sulfur butterfly",326:"lycaenid, lycaenid butterfly",327:"starfish, sea star",328:"sea urchin",329:"sea cucumber, holothurian",330:"wood rabbit, cottontail, cottontail rabbit",331:"hare",332:"Angora, Angora rabbit",333:"hamster",334:"porcupine, hedgehog",335:"fox squirrel, eastern fox squirrel, Sciurus niger",336:"marmot",337:"beaver",338:"guinea pig, Cavia cobaya",339:"sorrel",340:"zebra",341:"hog, pig, grunter, squealer, Sus scrofa",342:"wild boar, boar, Sus scrofa",343:"warthog",344:"hippopotamus, hippo, river horse, Hippopotamus amphibius",345:"ox",346:"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",347:"bison",348:"ram, tup",349:"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",350:"ibex, Capra ibex",351:"hartebeest",352:"impala, Aepyceros melampus",353:"gazelle",354:"Arabian camel, dromedary, Camelus dromedarius",355:"llama",356:"weasel",357:"mink",358:"polecat, fitch, foulmart, foumart, Mustela putorius",359:"black-footed ferret, ferret, Mustela nigripes",360:"otter",361:"skunk, polecat, wood pussy",362:"badger",363:"armadillo",364:"three-toed sloth, ai, Bradypus tridactylus",365:"orangutan, orang, orangutang, Pongo pygmaeus",366:"gorilla, Gorilla gorilla",367:"chimpanzee, chimp, Pan troglodytes",368:"gibbon, Hylobates lar",369:"siamang, Hylobates syndactylus, Symphalangus syndactylus",370:"guenon, guenon monkey",371:"patas, hussar monkey, Erythrocebus patas",372:"baboon",373:"macaque",374:"langur",375:"colobus, colobus monkey",376:"proboscis monkey, Nasalis larvatus",377:"marmoset",378:"capuchin, ringtail, Cebus capucinus",379:"howler monkey, howler",380:"titi, titi monkey",381:"spider monkey, Ateles geoffroyi",382:"squirrel monkey, Saimiri sciureus",383:"Madagascar cat, ring-tailed lemur, Lemur catta",384:"indri, indris, Indri indri, Indri brevicaudatus",385:"Indian elephant, Elephas maximus",386:"African elephant, Loxodonta africana",387:"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",388:"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",389:"barracouta, snoek",390:"eel",391:"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",392:"rock beauty, Holocanthus tricolor",393:"anemone fish",394:"sturgeon",395:"gar, garfish, garpike, billfish, Lepisosteus osseus",396:"lionfish",397:"puffer, pufferfish, blowfish, globefish",398:"abacus",399:"abaya",400:"academic gown, academic robe, judge's robe",401:"accordion, piano accordion, squeeze box",402:"acoustic guitar",403:"aircraft carrier, carrier, flattop, attack aircraft carrier",404:"airliner",405:"airship, dirigible",406:"altar",407:"ambulance",408:"amphibian, amphibious vehicle",409:"analog clock",410:"apiary, bee house",411:"apron",412:"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin",413:"assault rifle, assault gun",414:"backpack, back pack, knapsack, packsack, rucksack, haversack",415:"bakery, bakeshop, bakehouse",416:"balance beam, beam",417:"balloon",418:"ballpoint, ballpoint pen, ballpen, Biro",419:"Band Aid",420:"banjo",421:"bannister, banister, balustrade, balusters, handrail",422:"barbell",423:"barber chair",424:"barbershop",425:"barn",426:"barometer",427:"barrel, cask",428:"barrow, garden cart, lawn cart, wheelbarrow",429:"baseball",430:"basketball",431:"bassinet",432:"bassoon",433:"bathing cap, swimming cap",434:"bath towel",435:"bathtub, bathing tub, bath, tub",436:"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon",437:"beacon, lighthouse, beacon light, pharos",438:"beaker",439:"bearskin, busby, shako",440:"beer bottle",441:"beer glass",442:"bell cote, bell cot",443:"bib",444:"bicycle-built-for-two, tandem bicycle, tandem",445:"bikini, two-piece",446:"binder, ring-binder",447:"binoculars, field glasses, opera glasses",448:"birdhouse",449:"boathouse",450:"bobsled, bobsleigh, bob",451:"bolo tie, bolo, bola tie, bola",452:"bonnet, poke bonnet",453:"bookcase",454:"bookshop, bookstore, bookstall",455:"bottlecap",456:"bow",457:"bow tie, bow-tie, bowtie",458:"brass, memorial tablet, plaque",459:"brassiere, bra, bandeau",460:"breakwater, groin, groyne, mole, bulwark, seawall, jetty",461:"breastplate, aegis, egis",462:"broom",463:"bucket, pail",464:"buckle",465:"bulletproof vest",466:"bullet train, bullet",467:"butcher shop, meat market",468:"cab, hack, taxi, taxicab",469:"caldron, cauldron",470:"candle, taper, wax light",471:"cannon",472:"canoe",473:"can opener, tin opener",474:"cardigan",475:"car mirror",476:"carousel, carrousel, merry-go-round, roundabout, whirligig",477:"carpenter's kit, tool kit",478:"carton",479:"car wheel",480:"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM",481:"cassette",482:"cassette player",483:"castle",484:"catamaran",485:"CD player",486:"cello, violoncello",487:"cellular telephone, cellular phone, cellphone, cell, mobile phone",488:"chain",489:"chainlink fence",490:"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour",491:"chain saw, chainsaw",492:"chest",493:"chiffonier, commode",494:"chime, bell, gong",495:"china cabinet, china closet",496:"Christmas stocking",497:"church, church building",498:"cinema, movie theater, movie theatre, movie house, picture palace",499:"cleaver, meat cleaver, chopper",500:"cliff dwelling",501:"cloak",502:"clog, geta, patten, sabot",503:"cocktail shaker",504:"coffee mug",505:"coffeepot",506:"coil, spiral, volute, whorl, helix",507:"combination lock",508:"computer keyboard, keypad",509:"confectionery, confectionary, candy store",510:"container ship, containership, container vessel",511:"convertible",512:"corkscrew, bottle screw",513:"cornet, horn, trumpet, trump",514:"cowboy boot",515:"cowboy hat, ten-gallon hat",516:"cradle",517:"crane",518:"crash helmet",519:"crate",520:"crib, cot",521:"Crock Pot",522:"croquet ball",523:"crutch",524:"cuirass",525:"dam, dike, dyke",526:"desk",527:"desktop computer",528:"dial telephone, dial phone",529:"diaper, nappy, napkin",530:"digital clock",531:"digital watch",532:"dining table, board",533:"dishrag, dishcloth",534:"dishwasher, dish washer, dishwashing machine",535:"disk brake, disc brake",536:"dock, dockage, docking facility",537:"dogsled, dog sled, dog sleigh",538:"dome",539:"doormat, welcome mat",540:"drilling platform, offshore rig",541:"drum, membranophone, tympan",542:"drumstick",543:"dumbbell",544:"Dutch oven",545:"electric fan, blower",546:"electric guitar",547:"electric locomotive",548:"entertainment center",549:"envelope",550:"espresso maker",551:"face powder",552:"feather boa, boa",553:"file, file cabinet, filing cabinet",554:"fireboat",555:"fire engine, fire truck",556:"fire screen, fireguard",557:"flagpole, flagstaff",558:"flute, transverse flute",559:"folding chair",560:"football helmet",561:"forklift",562:"fountain",563:"fountain pen",564:"four-poster",565:"freight car",566:"French horn, horn",567:"frying pan, frypan, skillet",568:"fur coat",569:"garbage truck, dustcart",570:"gasmask, respirator, gas helmet",571:"gas pump, gasoline pump, petrol pump, island dispenser",572:"goblet",573:"go-kart",574:"golf ball",575:"golfcart, golf cart",576:"gondola",577:"gong, tam-tam",578:"gown",579:"grand piano, grand",580:"greenhouse, nursery, glasshouse",581:"grille, radiator grille",582:"grocery store, grocery, food market, market",583:"guillotine",584:"hair slide",585:"hair spray",586:"half track",587:"hammer",588:"hamper",589:"hand blower, blow dryer, blow drier, hair dryer, hair drier",590:"hand-held computer, hand-held microcomputer",591:"handkerchief, hankie, hanky, hankey",592:"hard disc, hard disk, fixed disk",593:"harmonica, mouth organ, harp, mouth harp",594:"harp",595:"harvester, reaper",596:"hatchet",597:"holster",598:"home theater, home theatre",599:"honeycomb",600:"hook, claw",601:"hoopskirt, crinoline",602:"horizontal bar, high bar",603:"horse cart, horse-cart",604:"hourglass",605:"iPod",606:"iron, smoothing iron",607:"jack-o'-lantern",608:"jean, blue jean, denim",609:"jeep, landrover",610:"jersey, T-shirt, tee shirt",611:"jigsaw puzzle",612:"jinrikisha, ricksha, rickshaw",613:"joystick",614:"kimono",615:"knee pad",616:"knot",617:"lab coat, laboratory coat",618:"ladle",619:"lampshade, lamp shade",620:"laptop, laptop computer",621:"lawn mower, mower",622:"lens cap, lens cover",623:"letter opener, paper knife, paperknife",624:"library",625:"lifeboat",626:"lighter, light, igniter, ignitor",627:"limousine, limo",628:"liner, ocean liner",629:"lipstick, lip rouge",630:"Loafer",631:"lotion",632:"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system",633:"loupe, jeweler's loupe",634:"lumbermill, sawmill",635:"magnetic compass",636:"mailbag, postbag",637:"mailbox, letter box",638:"maillot",639:"maillot, tank suit",640:"manhole cover",641:"maraca",642:"marimba, xylophone",643:"mask",644:"matchstick",645:"maypole",646:"maze, labyrinth",647:"measuring cup",648:"medicine chest, medicine cabinet",649:"megalith, megalithic structure",650:"microphone, mike",651:"microwave, microwave oven",652:"military uniform",653:"milk can",654:"minibus",655:"miniskirt, mini",656:"minivan",657:"missile",658:"mitten",659:"mixing bowl",660:"mobile home, manufactured home",661:"Model T",662:"modem",663:"monastery",664:"monitor",665:"moped",666:"mortar",667:"mortarboard",668:"mosque",669:"mosquito net",670:"motor scooter, scooter",671:"mountain bike, all-terrain bike, off-roader",672:"mountain tent",673:"mouse, computer mouse",674:"mousetrap",675:"moving van",676:"muzzle",677:"nail",678:"neck brace",679:"necklace",680:"nipple",681:"notebook, notebook computer",682:"obelisk",683:"oboe, hautboy, hautbois",684:"ocarina, sweet potato",685:"odometer, hodometer, mileometer, milometer",686:"oil filter",687:"organ, pipe organ",688:"oscilloscope, scope, cathode-ray oscilloscope, CRO",689:"overskirt",690:"oxcart",691:"oxygen mask",692:"packet",693:"paddle, boat paddle",694:"paddlewheel, paddle wheel",695:"padlock",696:"paintbrush",697:"pajama, pyjama, pj's, jammies",698:"palace",699:"panpipe, pandean pipe, syrinx",700:"paper towel",701:"parachute, chute",702:"parallel bars, bars",703:"park bench",704:"parking meter",705:"passenger car, coach, carriage",706:"patio, terrace",707:"pay-phone, pay-station",708:"pedestal, plinth, footstall",709:"pencil box, pencil case",710:"pencil sharpener",711:"perfume, essence",712:"Petri dish",713:"photocopier",714:"pick, plectrum, plectron",715:"pickelhaube",716:"picket fence, paling",717:"pickup, pickup truck",718:"pier",719:"piggy bank, penny bank",720:"pill bottle",721:"pillow",722:"ping-pong ball",723:"pinwheel",724:"pirate, pirate ship",725:"pitcher, ewer",726:"plane, carpenter's plane, woodworking plane",727:"planetarium",728:"plastic bag",729:"plate rack",730:"plow, plough",731:"plunger, plumber's helper",732:"Polaroid camera, Polaroid Land camera",733:"pole",734:"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria",735:"poncho",736:"pool table, billiard table, snooker table",737:"pop bottle, soda bottle",738:"pot, flowerpot",739:"potter's wheel",740:"power drill",741:"prayer rug, prayer mat",742:"printer",743:"prison, prison house",744:"projectile, missile",745:"projector",746:"puck, hockey puck",747:"punching bag, punch bag, punching ball, punchball",748:"purse",749:"quill, quill pen",750:"quilt, comforter, comfort, puff",751:"racer, race car, racing car",752:"racket, racquet",753:"radiator",754:"radio, wireless",755:"radio telescope, radio reflector",756:"rain barrel",757:"recreational vehicle, RV, R.V.",758:"reel",759:"reflex camera",760:"refrigerator, icebox",761:"remote control, remote",762:"restaurant, eating house, eating place, eatery",763:"revolver, six-gun, six-shooter",764:"rifle",765:"rocking chair, rocker",766:"rotisserie",767:"rubber eraser, rubber, pencil eraser",768:"rugby ball",769:"rule, ruler",770:"running shoe",771:"safe",772:"safety pin",773:"saltshaker, salt shaker",774:"sandal",775:"sarong",776:"sax, saxophone",777:"scabbard",778:"scale, weighing machine",779:"school bus",780:"schooner",781:"scoreboard",782:"screen, CRT screen",783:"screw",784:"screwdriver",785:"seat belt, seatbelt",786:"sewing machine",787:"shield, buckler",788:"shoe shop, shoe-shop, shoe store",789:"shoji",790:"shopping basket",791:"shopping cart",792:"shovel",793:"shower cap",794:"shower curtain",795:"ski",796:"ski mask",797:"sleeping bag",798:"slide rule, slipstick",799:"sliding door",800:"slot, one-armed bandit",801:"snorkel",802:"snowmobile",803:"snowplow, snowplough",804:"soap dispenser",805:"soccer ball",806:"sock",807:"solar dish, solar collector, solar furnace",808:"sombrero",809:"soup bowl",810:"space bar",811:"space heater",812:"space shuttle",813:"spatula",814:"speedboat",815:"spider web, spider's web",816:"spindle",817:"sports car, sport car",818:"spotlight, spot",819:"stage",820:"steam locomotive",821:"steel arch bridge",822:"steel drum",823:"stethoscope",824:"stole",825:"stone wall",826:"stopwatch, stop watch",827:"stove",828:"strainer",829:"streetcar, tram, tramcar, trolley, trolley car",830:"stretcher",831:"studio couch, day bed",832:"stupa, tope",833:"submarine, pigboat, sub, U-boat",834:"suit, suit of clothes",835:"sundial",836:"sunglass",837:"sunglasses, dark glasses, shades",838:"sunscreen, sunblock, sun blocker",839:"suspension bridge",840:"swab, swob, mop",841:"sweatshirt",842:"swimming trunks, bathing trunks",843:"swing",844:"switch, electric switch, electrical switch",845:"syringe",846:"table lamp",847:"tank, army tank, armored combat vehicle, armoured combat vehicle",848:"tape player",849:"teapot",850:"teddy, teddy bear",851:"television, television system",852:"tennis ball",853:"thatch, thatched roof",854:"theater curtain, theatre curtain",855:"thimble",856:"thresher, thrasher, threshing machine",857:"throne",858:"tile roof",859:"toaster",860:"tobacco shop, tobacconist shop, tobacconist",861:"toilet seat",862:"torch",863:"totem pole",864:"tow truck, tow car, wrecker",865:"toyshop",866:"tractor",867:"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi",868:"tray",869:"trench coat",870:"tricycle, trike, velocipede",871:"trimaran",872:"tripod",873:"triumphal arch",874:"trolleybus, trolley coach, trackless trolley",875:"trombone",876:"tub, vat",877:"turnstile",878:"typewriter keyboard",879:"umbrella",880:"unicycle, monocycle",881:"upright, upright piano",882:"vacuum, vacuum cleaner",883:"vase",884:"vault",885:"velvet",886:"vending machine",887:"vestment",888:"viaduct",889:"violin, fiddle",890:"volleyball",891:"waffle iron",892:"wall clock",893:"wallet, billfold, notecase, pocketbook",894:"wardrobe, closet, press",895:"warplane, military plane",896:"washbasin, handbasin, washbowl, lavabo, wash-hand basin",897:"washer, automatic washer, washing machine",898:"water bottle",899:"water jug",900:"water tower",901:"whiskey jug",902:"whistle",903:"wig",904:"window screen",905:"window shade",906:"Windsor tie",907:"wine bottle",908:"wing",909:"wok",910:"wooden spoon",911:"wool, woolen, woollen",912:"worm fence, snake fence, snake-rail fence, Virginia fence",913:"wreck",914:"yawl",915:"yurt",916:"web site, website, internet site, site",917:"comic book",918:"crossword puzzle, crossword",919:"street sign",920:"traffic light, traffic signal, stoplight",921:"book jacket, dust cover, dust jacket, dust wrapper",922:"menu",923:"plate",924:"guacamole",925:"consomme",926:"hot pot, hotpot",927:"trifle",928:"ice cream, icecream",929:"ice lolly, lolly, lollipop, popsicle",930:"French loaf",931:"bagel, beigel",932:"pretzel",933:"cheeseburger",934:"hotdog, hot dog, red hot",935:"mashed potato",936:"head cabbage",937:"broccoli",938:"cauliflower",939:"zucchini, courgette",940:"spaghetti squash",941:"acorn squash",942:"butternut squash",943:"cucumber, cuke",944:"artichoke, globe artichoke",945:"bell pepper",946:"cardoon",947:"mushroom",948:"Granny Smith",949:"strawberry",950:"orange",951:"lemon",952:"fig",953:"pineapple, ananas",954:"banana",955:"jackfruit, jak, jack",956:"custard apple",957:"pomegranate",958:"hay",959:"carbonara",960:"chocolate sauce, chocolate syrup",961:"dough",962:"meat loaf, meatloaf",963:"pizza, pizza pie",964:"potpie",965:"burrito",966:"red wine",967:"espresso",968:"cup",969:"eggnog",970:"alp",971:"bubble",972:"cliff, drop, drop-off",973:"coral reef",974:"geyser",975:"lakeside, lakeshore",976:"promontory, headland, head, foreland",977:"sandbar, sand bar",978:"seashore, coast, seacoast, sea-coast",979:"valley, vale",980:"volcano",981:"ballplayer, baseball player",982:"groom, bridegroom",983:"scuba diver",984:"rapeseed",985:"daisy",986:"yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",987:"corn",988:"acorn",989:"hip, rose hip, rosehip",990:"buckeye, horse chestnut, conker",991:"coral fungus",992:"agaric",993:"gyromitra",994:"stinkhorn, carrion fungus",995:"earthstar",996:"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",997:"bolete",998:"ear, spike, capitulum",999:"toilet tissue, toilet paper, bathroom tissue"},Vn=224,$O={"1.00":"module_apply_default/MobilenetV1/Logits/global_pool","2.00":"module_apply_default/MobilenetV2/Logits/AvgPool"},xs={"1.00":{.25:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_025_224/classification/1",inputRange:[0,1]},"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_050_224/classification/1",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_075_224/classification/1",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1",inputRange:[0,1]}},"2.00":{"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_050_224/classification/2",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_075_224/classification/2",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",inputRange:[0,1]}}};function AO(t){return t===void 0&&(t={version:1,alpha:1}),zl(this,void 0,void 0,function(){var e,n,r,s,a,o,i;return Bl(this,function(l){switch(l.label){case 0:if(ZD==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(e=t.version.toFixed(2),n=t.alpha?t.alpha.toFixed(2):"",r=-1,s=1,t.modelUrl==null){if(!(e in xs))throw new Error("Invalid version of MobileNet. Valid versions are: "+Object.keys(xs));if(!(n in xs[e]))throw new Error("MobileNet constructed with invalid alpha "+t.alpha+". Valid multipliers for this version are: "+Object.keys(xs[e])+".");o=xs[e][n].inputRange,r=o[0],s=o[1]}return t.inputRange!=null&&(i=t.inputRange,r=i[0],s=i[1]),[4,(a=new IO(e,n,t.modelUrl,r,s)).load()];case 1:return l.sent(),[2,a]}})})}var IO=function(){function t(e,n,r,s,a){s===void 0&&(s=-1),a===void 0&&(a=1),this.version=e,this.alpha=n,this.modelUrl=r,this.inputMin=s,this.inputMax=a,this.normalizationConstant=(a-s)/255}return t.prototype.load=function(){return zl(this,void 0,void 0,function(){var e,n,r,s,a=this;return Bl(this,function(o){switch(o.label){case 0:return this.modelUrl?(e=this,[4,Fg(this.modelUrl)]):[3,2];case 1:return e.model=o.sent(),[3,4];case 2:return n=xs[this.version][this.alpha].url,r=this,[4,Fg(n,{fromTFHub:!0})];case 3:r.model=o.sent(),o.label=4;case 4:return[4,(s=te(function(){return a.model.predict(mr([1,Vn,Vn,3]))})).data()];case 5:return o.sent(),s.dispose(),[2]}})})},t.prototype.infer=function(e,n){var r=this;return n===void 0&&(n=!1),te(function(){e instanceof ze||(e=JD(e));var s=H(R(Ne(e,"float32"),r.normalizationConstant),r.inputMin),a=s;(e.shape[0]!==Vn||e.shape[1]!==Vn)&&(a=vh.resizeBilinear(s,[Vn,Vn],!0));var o,i=j(a,[-1,Vn,Vn,3]);if(n){var l=$O[r.version],u=r.model.execute(i,l);o=Zo(u,[1,2])}else{var c=r.model.predict(i);o=ae(c,[0,1],[-1,1e3])}return o})},t.prototype.classify=function(e,n){return n===void 0&&(n=3),zl(this,void 0,void 0,function(){var r,s;return Bl(this,function(a){switch(a.label){case 0:return[4,DO(r=this.infer(e),n)];case 1:return s=a.sent(),r.dispose(),[2,s]}})})},t}();function DO(t,e){return zl(this,void 0,void 0,function(){var n,r,s,a,o,i,l;return Bl(this,function(u){switch(u.label){case 0:return[4,(n=oh(t)).data()];case 1:for(r=u.sent(),n.dispose(),s=[],l=0;l<r.length;l++)s.push({value:r[l],index:l});for(s.sort(function(c,d){return d.value-c.value}),a=new Float32Array(e),o=new Int32Array(e),l=0;l<e;l++)a[l]=s[l].value,o[l]=s[l].index;for(i=[],l=0;l<o.length;l++)i.push({className:CO[o[l]],probability:a[l]});return[2,i]}})})}const _e=[{id:"fauna_001",commonName:"Jaguar",scientificName:"Panthera onca",category:"mammal",description:"El jaguar es el felino más grande de América. Es un depredador ápice con un papel clave en el control de poblaciones y el mantenimiento de la salud ecológica del bosque tropical.",isDangerous:!0,dangerLevel:5,encounterProtocol:[{action:"Retrocede lentamente",description:"Mantén la calma, retrocede sin darle la espalda al animal y evita movimientos bruscos. No corras ni lo acerques; busca un lugar elevado o un vehículo si es posible.",urgency:"critical"}],habitat:"Selva tropical y bosques densos en Calakmul y áreas protegidas",diet:"Carnívoro: ciervos, tapires, pecaríes, y otros mamíferos",sounds:[{type:"general",label:"gruñidos profundos"},{type:"alert",label:"ronquidos y vocalizaciones cortas"}],region:"campeche",conservationStatus:"EN"},{id:"fauna_002",commonName:"Tapir de Baird",scientificName:"Tapirus bairdii",category:"mammal",description:"El tapir de Baird es el mayor mamífero terrestre de Mesoamérica. Es un herbívoro principalmente nocturno que actúa como dispersor de semillas importante en la selva.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Aléjate con cuidado",description:"Observa a distancia y evita interponerte entre una cría y la madre. No molestes ni intentes alimentar al animal.",urgency:"high"}],habitat:"Bosque tropical húmedo, áreas ribereñas en Calakmul",diet:"Herbívoro: frutos, brotes y hojas",sounds:[{type:"general",label:"resoplidos y silbidos"}],region:"campeche",conservationStatus:"EN"},{id:"fauna_003",commonName:"Mono aullador",scientificName:"Alouatta palliata",category:"mammal",description:"El mono aullador produce vocalizaciones potentes que pueden escucharse a gran distancia. Vive en grupos sociales y se alimenta principalmente de hojas y frutas.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Mantén distancia",description:"No te acerques a los primates ni alimentes a los animales; respeta su espacio y observa desde lejos.",urgency:"low"}],habitat:"Copas de árboles en bosques secundarios y primarios",diet:"Folívoro/frugívoro: hojas, frutas y brotes",sounds:[{type:"general",label:"gruñidos y aullidos prolongados"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_004",commonName:"Coatí",scientificName:"Nasua narica",category:"mammal",description:"El coatí es un mamífero omnívoro y diurno, conocido por su larga cola anillada. Frecuenta bordes de bosque y áreas abiertas cerca de fuentes de alimento.",isDangerous:!1,dangerLevel:1,encounterProtocol:[{action:"No alimentes",description:"Evita acercarte o alimentar coatíes; pueden volverse agresivos si buscan comida. Guarda la comida en recipientes cerrados.",urgency:"medium"}],habitat:"Bosques secos y húmedos, bordes de selva y áreas agrícolas",diet:"Omnívoro: insectos, frutas, pequeños vertebrados",sounds:[{type:"general",label:"chillidos y gruñidos"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_005",commonName:"Pecarí de collar",scientificName:"Pecari tajacu",category:"mammal",description:"El pecarí de collar es un suido social que vive en pequeños grupos. Puede mostrarse defensivo si se siente acorralado o si hay crías presentes.",isDangerous:!0,dangerLevel:3,encounterProtocol:[{action:"Evita el acercamiento",description:"No te interpongas entre los individuos y su ruta de escape; retrocede lentamente y busca un lugar seguro si el grupo se agita.",urgency:"high"}],habitat:"Sabana, bordes de bosque y claros",diet:"Herbívoros/omnivoros: raíces, frutos y pequeños invertebrados",sounds:[{type:"alert",label:"gruñidos de alarma"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_006",commonName:"Guacamaya roja",scientificName:"Ara macao",category:"bird",description:"La guacamaya roja es un loro grande y colorido que habita bosques tropicales. Se alimenta de frutos, semillas y nueces y anida en cavidades de árboles grandes como la ceiba.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Observa desde lejos",description:"No intentes interactuar ni molestar; evita acercarte a nidos y respeta las zonas de anidación.",urgency:"low"}],habitat:"Selva tropical y claros con árboles grandes",diet:"Frugívoro/semívoro: frutos, semillas y nueces",sounds:[{type:"general",label:"graznidos y llamadas estridentes"}],region:"campeche",conservationStatus:"VU"},{id:"fauna_007",commonName:"Tucán pico multicolor",scientificName:"Ramphastos sulfuratus",category:"bird",description:"El tucán de pico multicolor es conocido por su gran pico y su papel en la dispersión de semillas. Habita selvas y bordes de bosque y suele posarse en los estratos medios y altos del dosel.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Mantén distancia",description:"Observa sin perturbar.",urgency:"low"}],habitat:"Dosel de bosques tropicales y bordes de selva",diet:"Frutas principalmente, ocasionalmente insectos y huevos",sounds:[{type:"general",label:"calls resonantes y croantes"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_008",commonName:"Flamenco rosa",scientificName:"Phoenicopterus ruber",category:"bird",description:"El flamenco rosa es una especie asociada a lagunas costeras y salinas. Se alimenta filtrando pequeños invertebrados y algas que le dan su color rosado característico.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"No molestar",description:"No acercarse a colonias ni interferir en la alimentación.",urgency:"low"}],habitat:"Lagunas costeras y humedales salinos, como Laguna de Términos",diet:"Filtrador: crustáceos, pequeños invertebrados y algas",sounds:[{type:"general",label:"calls comunitarias y croaks"}],region:"campeche",conservationStatus:"NT"},{id:"fauna_009",commonName:"Pavo ocelado",scientificName:"Meleagris ocellata",category:"bird",description:"El pavo ocelado es endémico de la península de Yucatán y presenta un plumaje distintivo con ocelos. Habita áreas boscosas y claros y es importante culturalmente en la región.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Observar",description:"No perseguir ni alimentar.",urgency:"low"}],habitat:"Bosques caducifolios y selvas bajas de la península de Yucatán",diet:"Omnívoro: semillas, frutos, insectos",sounds:[{type:"general",label:"calls fuertes y arrullos"}],region:"campeche",conservationStatus:"VU"},{id:"fauna_010",commonName:"Cocodrilo de pantano",scientificName:"Crocodylus moreletii",category:"reptile",description:"El cocodrilo de pantano habita manglares, estuarios y cuerpos de agua dulce costeros. Es un depredador ambush que puede ser peligroso para humanos si se le provoca o se le sorprende cerca del agua.",isDangerous:!0,dangerLevel:4,encounterProtocol:[{action:"Mantén distancia del agua",description:"Evita acercarte a orillas, no nades en zonas donde hay actividad de cocodrilos y mantén a mascotas y niños lejos del borde del agua.",urgency:"critical"}],habitat:"Manglares y estuarios costeros, Laguna de Términos",diet:"Carnívoro: peces, aves, mamíferos pequeños",sounds:[{type:"general",label:"gruñidos bajos y bramidos"}],region:"campeche",conservationStatus:"NT"},{id:"fauna_011",commonName:"Nauyaca",scientificName:"Bothrops asper",category:"reptile",description:"Bothrops asper es una víbora venenosa ampliamente distribuida en Mesoamérica. Produce un veneno hemotóxico potente y es responsable de numerosos accidentes ofídicos en la región.",isDangerous:!0,dangerLevel:5,encounterProtocol:[{action:"Aléjate con calma",description:"Retrocede lentamente sin movimientos bruscos; no intentes manipularla. Busca asistencia médica inmediata en caso de mordedura y mantén a la persona inmóvil mientras se traslada al centro de salud.",urgency:"critical"}],habitat:"Bordes de bosque, pastizales y áreas perturbadas",diet:"Carnívoro: pequeños mamíferos, ranas y aves",sounds:[{type:"general",label:"silencio; no emite llamadas"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_012",commonName:"Iguana verde",scientificName:"Iguana iguana",category:"reptile",description:"La iguana verde es un gran reptil herbívoro que habita en árboles cercanos a cuerpos de agua. En algunas comunidades se consume su carne, aunque las poblaciones pueden estar sujetas a presión por caza local.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"No molestar",description:"Observa desde la distancia y evita tocar.",urgency:"low"}],habitat:"Árboles ribereños, manglares y bordes de agua",diet:"Herbívoro: hojas, flores y frutos",sounds:[{type:"general",label:"silenciosa; siseos en estrés"}],region:"campeche",conservationStatus:"LC",isEdible:!0}],Ao=[{id:"flora_001",commonName:"Ceiba",scientificName:"Ceiba pentandra",category:"tree",description:"La ceiba es un árbol emblemático y sagrado para la cultura maya; puede alcanzar grandes dimensiones y sirve como refugio y sitio de anidación para numerosas especies.",isEdible:!1,edibleParts:"Ninguna",isToxic:!1,toxicWarning:"",animalsDependent:"Aves, murciélagos y artrópodos que usan cavidades y flores",medicinalUses:"Usos tradicionales en rituales y medicina popular; la corteza tiene aplicaciones locales.",habitat:"Selvas y bordes de bosque en la península de Yucatán",region:"campeche",fruitsAvailable:"Marzo - Mayo"},{id:"flora_002",commonName:"Ramón",scientificName:"Brosimum alicastrum",category:"tree",description:"El ramón es un árbol nativo cuyo fruto seco y semillas son altamente nutritivos; fue una fuente alimentaria clave para las poblaciones mayas tradicionales.",isEdible:!0,edibleParts:"Semillas (ramón)",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y mamíferos que consumen semillas y frutos",medicinalUses:"Semillas usadas en preparados energéticos tradicionales",habitat:"Bosque tropical y áreas agrícolas tradicionales",region:"campeche",fruitsAvailable:"Septiembre - Diciembre"},{id:"flora_003",commonName:"Chico zapote",scientificName:"Manilkara zapota",category:"tree",description:"El chico zapote produce el fruto conocido como zapote, de pulpa dulce y nutritiva; es apreciado localmente y cultivado en huertos.",isEdible:!0,edibleParts:"Fruto (pulpa)",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y mamíferos frugívoros",medicinalUses:"Usos tradicionales en la medicina popular para problemas digestivos",habitat:"Huertos, bordes de selva y terrenos cultivados",region:"campeche",fruitsAvailable:"Todo el año (picos según zona)"},{id:"flora_004",commonName:"Mangle rojo",scientificName:"Rhizophora mangle",category:"tree",description:"El mangle rojo domina los manglares costeros y es esencial para la protección de la línea costera y como hábitat para numerosas especies marinas y aves.",isEdible:!1,edibleParts:"Ninguna",isToxic:!1,toxicWarning:"",animalsDependent:"Peces juveniles, crustáceos y aves costeras",medicinalUses:"Usos locales en tratamiento de heridas y como combustible",habitat:"Manglares y estuarios, especialmente en Laguna de Términos",region:"campeche",fruitsAvailable:"Producción de propagulos todo el año"},{id:"flora_005",commonName:"Guanacaste",scientificName:"Enterolobium cyclocarpum",category:"tree",description:"El guanacaste es un árbol de gran copa con vainas comestibles que son consumidas por fauna y en ocasiones por humanos; aporta sombra y mejoramiento del suelo.",isEdible:!0,edibleParts:"Vainas y semillas (cuando se procesan)",isToxic:!1,toxicWarning:"",animalsDependent:"Mamíferos que consumen las vainas y aves que anidan",medicinalUses:"Usos tradicionales en la medicina local y forraje",habitat:"Sabana y bordes de bosque",region:"campeche",fruitsAvailable:"Mayo - Julio"},{id:"flora_006",commonName:"Palma de corozo",scientificName:"Orbignya cohune",category:"tree",description:"La palma de corozo es utilizada por sus semillas oleaginosas; el aceite de corozo tiene usos alimentarios y tradicionales en la región.",isEdible:!0,edibleParts:"Semillas (aceite)",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y mamíferos que consumen frutos y semillas",medicinalUses:"Aceite usado en remedios tradicionales",habitat:"Bosques secos y zonas ribereñas",region:"campeche",fruitsAvailable:"Agosto - Noviembre"},{id:"flora_007",commonName:"Chechem",scientificName:"Metopium brownei",category:"tree",description:"El chechem es un árbol tropical cuya savia puede causar dermatitis severa en contacto con la piel; se reconoce por su madera y presencia en bosques secos.",isEdible:!1,edibleParts:"Ninguna",isToxic:!0,toxicWarning:"Savias y resinas pueden causar quemaduras y dermatitis al contacto; usar protección y evitar manipulación.",animalsDependent:"Algunas aves e insectos especializados",medicinalUses:"Uso tradicional muy limitado debido a su toxicidad",habitat:"Bosques secos y áreas pedregosas",region:"campeche",fruitsAvailable:"Marzo - Junio"},{id:"flora_008",commonName:"Xix",scientificName:"Piscidia piscipula",category:"tree",description:"Xix es un árbol con propiedades medicinales conocidas; extractos de la corteza se han usado tradicionalmente como sedante y para el manejo del dolor.",isEdible:!1,edibleParts:"Ninguna",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y polinizadores que visitan sus flores",medicinalUses:"Extractos usados como sedante y analgésico tradicional",habitat:"Bosques costeros y áreas perturbadas",region:"campeche",fruitsAvailable:"Abril - Agosto"}],qi=[{id:"eco_001",name:"Selva tropical",description:"Bosque tropical húmedo del interior de Campeche, con alta biodiversidad y grandes árboles emergentes.",typicalSpecies:["fauna_001","fauna_002","fauna_006","flora_001"],risks:["Serpientes venenosas","Calor intenso","Desorientación en senderos densos"],curiosities:["Alberga sitios arqueológicos mayas como Calakmul"],migratory:["fauna_008"],zone:"Interior de Campeche, Calakmul y reservas protegidas"},{id:"eco_002",name:"Manglares",description:"Ecosistemas costeros dominados por mangle rojo y asociados a estuarios y lagunas.",typicalSpecies:["fauna_010","fauna_008","flora_004"],risks:["Cocodrilos","Suelos inestables","Mareas y corrientes"],curiosities:["Uno de los sistemas de manglar más extensos de México"],migratory:["fauna_008"],zone:"Zonas costeras y Laguna de Términos"},{id:"eco_003",name:"Humedales costeros",description:"Lagunas costeras y zonas inundables que sostienen aves acuáticas, peces y mamíferos marinos.",typicalSpecies:["fauna_008"],risks:["Cambios meteorológicos repentinos","Zonas de agua profunda"],curiosities:["Área importante para manatíes y aves migratorias"],migratory:["fauna_008","fauna_006"],zone:"Laguna de Términos, Isla del Carmen"},{id:"eco_004",name:"Sabana",description:"Áreas de transición con vegetación más abierta y pastizales, presentes en la parte norte de Campeche.",typicalSpecies:["fauna_004","fauna_005"],risks:["Poca sombra","Exposición al calor"],curiosities:["Zona de transición entre selva y costa; paisaje de mosaico ecológico"],migratory:[],zone:"Norte de Campeche, sabanas y claros"}],DN=[..._e,...Ao];function Kd(t){return DN.find(e=>e.id===t)}function jO(t){return _e.sort((n,r)=>{const s=(n.commonName||n.scientificName||"").toLowerCase(),a=(r.commonName||r.scientificName||"").toLowerCase();return s.localeCompare(a)})}const OO=[{terms:["jungle","forest","tree","vegetation","rainforest"],ecosystemId:"eco_001"},{terms:["water","swamp","lake","wetland","lagoon"],ecosystemId:"eco_003"},{terms:["beach","coast","mangrove","sea","estuary"],ecosystemId:"eco_002"},{terms:["field","grass","savanna","plain","pasture","meadow"],ecosystemId:"eco_004"}];function PO(t){const e=t.map(n=>n.toLowerCase());for(const n of OO)if(e.some(r=>n.terms.some(s=>r.includes(s))))return qi.find(r=>r.id===n.ecosystemId)??qi[0];return qi[0]}function FO(t){const e={eco_001:["selva","bosque","calakmul","tropical"],eco_002:["manglar","laguna","costera","estuario"],eco_003:["humedal","laguna","costa","agua","mar"],eco_004:["sabana","sabanas","pastizal","norte"]},n=e[t]??e.eco_001,r=_e.filter(s=>{const a=(s.habitat??"").toLowerCase();return n.some(o=>a.includes(o))});return r.length>0?r:_e.slice(0,3)}function LO(){const[t,e]=A.useState(null),[n,r]=A.useState(!0),[s,a]=A.useState(null);A.useEffect(()=>{let c=!0;return r(!0),(async()=>{try{const p=new Promise((m,g)=>setTimeout(()=>g(new Error("Timeout loading model")),1e4)),f=await Promise.race([AO({version:2,alpha:1}),p]);c&&(e(f),r(!1))}catch(p){c&&(console.error(p),a("IA local no disponible - usa selección manual"),r(!1))}})(),()=>{c=!1}},[]);function o(c){return c.toLowerCase().replace(/[^a-záéíóúüñ0-9\s]/gi,"").split(/\s+/).filter(Boolean)}function i(c){const d={};return[..._e,...Ao].forEach(f=>{const m=`${f.commonName??""} ${f.scientificName??""}`.toLowerCase();c.forEach(g=>{g.length>1&&m.includes(g)&&(d[f.id]={species:f,confidence:0,reason:`Coincidencia con '${g}'`})})}),Object.values(d)}function l(c,d){const p=c.map(m=>m.className.toLowerCase()).join(" "),f=[];if(/cat|tiger|leopard|feline|pantera/.test(p)){const m=_e.find(w=>w.id==="jaguar"),g=_e.find(w=>w.id==="ocelot");m&&f.push({species:m,confidence:Math.round(65+Math.random()*20),reason:"Características de felino detectadas en la imagen"}),g&&f.push({species:g,confidence:Math.round(45+Math.random()*15),reason:"Posible felino mediano detectado"})}if(/deer|horse|pig|boar|ungulate/.test(p)){const m=_e.find(w=>w.id==="tapir"),g=_e.find(w=>w.id==="peccary");m&&f.push({species:m,confidence:Math.round(70+Math.random()*15),reason:"Característica de mamífero ungulado detectada"}),g&&f.push({species:g,confidence:Math.round(50+Math.random()*10),reason:"Posible mamífero terrestre detectado"})}if(/monkey|primate|ape|howler/.test(p)){const m=_e.find(g=>{var w;return(w=g.commonName)==null?void 0:w.toLowerCase().includes("mono")});m&&f.push({species:m,confidence:Math.round(75+Math.random()*10),reason:"Características de primate detectadas"})}if(/bird|macaw|parrot|toucan|ara|ave/.test(p)){const m=_e.find(w=>{var y;return w.id==="macaw"||((y=w.commonName)==null?void 0:y.toLowerCase().includes("guacamaya"))}),g=_e.find(w=>{var y;return(y=w.commonName)==null?void 0:y.toLowerCase().includes("tucán")});m&&f.push({species:m,confidence:Math.round(72+Math.random()*13),reason:"Características de ave tropical detectadas"}),g&&f.push({species:g,confidence:Math.round(60+Math.random()*15),reason:"Posible ave de selva detectada"})}if(/crocodile|alligator|lizard|reptile|crocodylus/.test(p)){const m=_e.find(w=>{var y;return(y=w.commonName)==null?void 0:y.toLowerCase().includes("cocodrilo")}),g=_e.find(w=>{var y;return(y=w.commonName)==null?void 0:y.toLowerCase().includes("iguana")});m&&f.push({species:m,confidence:Math.round(68+Math.random()*17),reason:"Características de reptil grande detectadas"}),g&&f.push({species:g,confidence:Math.round(50+Math.random()*15),reason:"Posible reptil detectado"})}if(/snake|worm|serpent|bothrops|nauyaca|viper/.test(p)){const m=_e.find(g=>{var w;return(w=g.commonName)==null?void 0:w.toLowerCase().includes("nauyaca")});m&&f.push({species:m,confidence:Math.round(65+Math.random()*20),reason:"Características de serpiente detectadas"})}return/tree|plant|flower|leaf|vegetation|flora|botanical/.test(p)&&Ao.slice(0,3).forEach((g,w)=>{f.push({species:g,confidence:Math.round(55-w*15+Math.random()*10),reason:"Característica de planta detectada"})}),/water|river|lake|fish|aquatic|wetland/.test(p)&&_e.filter(g=>{var w;return(w=g.habitat)==null?void 0:w.toLowerCase().includes("agua")}).slice(0,3).forEach((g,w)=>{f.push({species:g,confidence:Math.round(60-w*10+Math.random()*10),reason:"Hábitat acuático detectado"})}),f.length===0&&FO(d.id).slice(0,3).forEach((g,w)=>{f.push({species:g,confidence:Math.round(45-w*10+Math.random()*15),reason:`Especie común en ${d.name}`})}),f.slice(0,3)}async function u(c){if(!t||!c)return{results:[],predictions:[],suggestManualSelection:!0};try{const d=await t.classify(c,5),p=d.flatMap(b=>o(b.className)).filter((b,x,k)=>k.indexOf(b)===x),f=i(p),m=PO(d.map(b=>b.className));let g=[],w=!1;return f.length>0&&f.slice(0,3).forEach((b,x)=>{const k=d[x]||d[0];b.confidence=Math.round(((k==null?void 0:k.probability)??.5)*100),g.push(b)}),((g.length>0?Math.max(...g.map(b=>b.confidence)):0)<40||g.length===0)&&(g=l(d,m),w=!0),g.length===0&&(g=_e.slice(0,3).map((x,k)=>({species:x,confidence:40-k*10,reason:"Especie común de Campeche (fallback)"})),w=!0),{results:g.slice(0,3),ecosystem:m,predictions:d.map(b=>({className:b.className,probability:Math.round(b.probability*100)})),suggestManualSelection:w}}catch(d){return console.error(d),{results:[],predictions:[],suggestManualSelection:!0}}}return{classify:u,isModelLoading:n,modelError:s}}const RO={birds:880,fauna:880,mammals:220,reptiles:110};function zO(t,e){const n=(e||"").toLowerCase(),r=RO[n]??440;switch(t){case"alert":return{type:"sawtooth",frequency:660,duration:.95};case"mating":return{type:"sine",frequency:r,duration:1.5};case"juvenile":return{type:"sine",frequency:r*1.5,duration:1};default:return{type:"sine",frequency:n==="birds"||n==="fauna"?880:n==="mammals"?220:n==="reptiles"?110:440,duration:n==="birds"||n==="fauna"?1.5:n==="mammals"?2:1}}}function BO(){const t=A.useRef(null),e=A.useRef(null),n=A.useRef(null),r=A.useRef(null),s=A.useRef(null),[a,o]=A.useState(!1),[i,l]=A.useState(null),u=A.useCallback(()=>{s.current&&(window.clearTimeout(s.current),s.current=null),n.current&&(n.current.stop(),n.current.disconnect(),n.current=null),e.current&&(e.current.stop(),e.current.disconnect(),e.current=null),r.current&&(r.current.disconnect(),r.current=null),o(!1),l(null)},[]),c=A.useCallback((d,p)=>{if(a&&i===d){u();return}u();const f=window.AudioContext||window.webkitAudioContext,m=t.current??new f;t.current=m;const g=m.createGain();g.gain.setValueAtTime(.001,m.currentTime),g.connect(m.destination);const w=m.createOscillator(),{type:y,frequency:b,duration:x}=zO(d,p);if(w.type=y,w.frequency.setValueAtTime(b,m.currentTime),w.connect(g),d==="mating"){const k=m.createOscillator(),_=m.createGain();k.frequency.setValueAtTime(3,m.currentTime),_.gain.setValueAtTime(12,m.currentTime),k.connect(_),_.connect(w.frequency),k.start(),n.current=k}if(w.start(),g.gain.exponentialRampToValueAtTime(.3,m.currentTime+.05),d==="alert"){const T=m.currentTime;for(let I=0;I<3;I+=1){const D=T+I*.35;g.gain.setValueAtTime(.001,D),g.gain.exponentialRampToValueAtTime(.25,D+.03),g.gain.setValueAtTime(.25,D+.3-.03),g.gain.exponentialRampToValueAtTime(.001,D+.3)}s.current=window.setTimeout(u,Math.round((.3*3+.05*2)*1e3))}else{const k=m.currentTime+x;g.gain.setValueAtTime(.3,m.currentTime+.05),g.gain.exponentialRampToValueAtTime(1e-4,k),s.current=window.setTimeout(u,Math.round((x+.05)*1e3))}r.current=g,e.current=w,o(!0),l(d)},[i,a,u]);return A.useEffect(()=>()=>u(),[u]),{playSound:c,stopSound:u,isPlaying:a,currentSoundType:i}}const Lg={LC:"bg-[#2D6A4F] text-white",NT:"bg-[#F4A261] text-white",VU:"bg-[#F4A261] text-white",EN:"bg-[#E63946] text-white",CR:"bg-[#8B0000] text-white"},MO={low:"bg-[#2D6A4F] text-white",medium:"bg-[#F4A261] text-white",high:"bg-[#E63946] text-white",critical:"bg-[#8B0000] text-white"};function Ml({species:t,onClose:e,mode:n}){var p,f,m;const{playSound:r,stopSound:s,isPlaying:a,currentSoundType:o}=BO(),i=t.conservationStatus||"LC",l=t.isDangerous&&t.dangerLevel?t.dangerLevel:0,u=(p=t.encounterProtocol)==null?void 0:p[0],c=A.useMemo(()=>(t.category||"").toLowerCase(),[t.category]),d=a?o:null;return v.jsxs("div",{className:"field-card max-w-3xl mx-auto text-[#1A3326] shadow-[0_2px_8px_rgba(45,106,79,0.08)] animate-fade-slide-up",children:[v.jsxs("div",{className:"flex items-start justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("h2",{className:"text-[22px] font-bold text-[#1A3326]",children:t.commonName}),v.jsx("p",{className:"mt-1 text-[14px] italic text-[#2D6A4F]",children:t.scientificName})]}),v.jsx("div",{className:`rounded-full px-3 py-1 text-xs font-semibold ${Lg[i]||Lg.LC}`,children:i})]}),t.isDangerous&&u?v.jsxs("div",{className:"mt-4 rounded-2xl bg-[#FFEBEE] p-4 text-[#E63946] border border-[#FFCDD2]",children:[v.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]",children:[v.jsx(Tv,{className:"h-4 w-4"}),"⚠️ PELIGROSO — Nivel ",l,"/5"]}),v.jsx("p",{className:"mt-3 font-semibold text-[#C62828]",children:u.action}),v.jsx("p",{className:"mt-2 text-sm text-[#B71C1C]",children:u.description}),v.jsx("span",{className:`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${MO[u.urgency||"high"]}`,children:(f=u.urgency)==null?void 0:f.toUpperCase()})]}):null,v.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-3",children:[v.jsxs("div",{className:"rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsxs("div",{className:"flex items-center gap-2 text-[#2D6A4F]",children:[v.jsx(gu,{className:"h-4 w-4"}),v.jsx("span",{className:"text-sm font-semibold",children:"Hábitat"})]}),v.jsx("p",{className:"mt-2 text-sm text-[#4A7C59]",children:t.habitat})]}),v.jsxs("div",{className:"rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsxs("div",{className:"flex items-center gap-2 text-[#2D6A4F]",children:[v.jsx(X_,{className:"h-4 w-4"}),v.jsx("span",{className:"text-sm font-semibold",children:"Alimentación"})]}),v.jsx("p",{className:"mt-2 text-sm text-[#4A7C59]",children:n==="fauna"?t.diet:t.edibleParts??"Ninguna"})]}),n==="flora"?v.jsxs("div",{className:"rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsxs("div",{className:"flex items-center gap-2 text-[#2D6A4F]",children:[v.jsx(Wo,{className:"h-4 w-4"}),v.jsx("span",{className:"text-sm font-semibold",children:"Información"})]}),v.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[t.isEdible?v.jsx("span",{className:"rounded-full bg-[#2D6A4F] px-3 py-1 text-xs font-semibold text-white",children:"Comestible"}):null,t.isToxic?v.jsx("span",{className:"rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white",children:"Tóxico"}):null]})]}):null]}),n==="fauna"?v.jsxs("div",{className:"mt-5 rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsxs("div",{className:"flex items-center gap-2 text-[#2D6A4F]",children:[v.jsx(oT,{className:"h-4 w-4"}),v.jsx("span",{className:"text-sm font-semibold",children:"Sonidos"})]}),v.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:(m=t.sounds)==null?void 0:m.map((g,w)=>{const y=a&&d===g.type;return v.jsx("button",{type:"button",onClick:()=>y?s():r(g.type,c),className:`rounded-2xl border px-4 py-3 text-sm transition focus:outline-none ${y?"border-[#2D6A4F] bg-[#E8F5E9] text-[#2D6A4F] shadow-[0_0_12px_rgba(45,106,79,0.2)] animate-pulse":"border-[#C8E6C9] bg-white text-[#4A7C59] hover:border-[#2D6A4F]"}`,children:v.jsxs("div",{className:"flex items-center gap-2",children:[y?v.jsx("span",{className:"inline-flex h-2.5 w-2.5 rounded-full bg-[#2D6A4F] animate-pulse"}):null,y?v.jsxs(v.Fragment,{children:[v.jsx(sT,{className:"h-4 w-4"}),v.jsx("span",{children:"Reproduciendo..."})]}):g.label]})},w)})})]}):null,v.jsxs("div",{className:"mt-5 rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsx("h3",{className:"text-sm font-semibold text-[#2D6A4F]",children:"Descripción"}),v.jsx("p",{className:"mt-2 text-sm leading-6 text-[#4A7C59]",children:t.description})]})]})}const VO={primary:"bg-[#2D6A4F] text-white hover:bg-[#52B788] focus:ring-[#52B788]/50",danger:"bg-[#E63946] text-white hover:bg-[#d62828] focus:ring-[#E63946]/50",secondary:"bg-[#16213E] border border-[#2D6A4F] text-[#52B788] hover:bg-[#1b2641] focus:ring-[#52B788]/40",ghost:"bg-transparent text-[#52B788] hover:bg-white/5 focus:ring-[#52B788]/40"},UO={sm:"px-3 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"};function Un({variant:t="primary",size:e="md",icon:n,loading:r,disabled:s,children:a,...o}){return v.jsxs("button",{type:"button",disabled:s||r,className:`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out ${VO[t]} ${UO[e]} ${s||r?"cursor-not-allowed opacity-70":"hover:shadow-lg"}`,...o,children:[r?v.jsx("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"}):n,v.jsx("span",{children:a})]})}const fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,je=Object.keys,et=Array.isArray;function it(t,e){return typeof e!="object"||je(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||fe.Promise||(fe.Promise=Promise);const Io=Object.getPrototypeOf,KO={}.hasOwnProperty;function _t(t,e){return KO.call(t,e)}function la(t,e){typeof e=="function"&&(e=e(Io(t))),(typeof Reflect>"u"?je:Reflect.ownKeys)(e).forEach(n=>{$n(t,n,e[n])})}const jN=Object.defineProperty;function $n(t,e,n,r){jN(t,e,it(n&&_t(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ks(t){return{from:function(e){return t.prototype=Object.create(e.prototype),$n(t.prototype,"constructor",t),{extend:la.bind(null,t.prototype)}}}}const WO=Object.getOwnPropertyDescriptor;function Sh(t,e){let n;return WO(t,e)||(n=Io(t))&&Sh(n,e)}const qO=[].slice;function Vl(t,e,n){return qO.call(t,e,n)}function ON(t,e){return e(t)}function za(t){if(!t)throw new Error("Assertion Failed")}function PN(t){fe.setImmediate?setImmediate(t):setTimeout(t,0)}function FN(t,e){return t.reduce((n,r,s)=>{var a=e(r,s);return a&&(n[a[0]]=a[1]),n},{})}function An(t,e){if(typeof e=="string"&&_t(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var a=An(t,e[r]);n.push(a)}return n}var o=e.indexOf(".");if(o!==-1){var i=t[e.substr(0,o)];return i==null?void 0:An(i,e.substr(o+1))}}function Yt(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){za(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Yt(t,e[r],n[r])}else{var a=e.indexOf(".");if(a!==-1){var o=e.substr(0,a),i=e.substr(a+1);if(i==="")n===void 0?et(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&_t(t,o)||(l=t[o]={}),Yt(l,i,n)}}else n===void 0?et(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function LN(t){var e={};for(var n in t)_t(t,n)&&(e[n]=t[n]);return e}const HO=[].concat;function RN(t){return HO.apply([],t)}const zN="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(RN([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>fe[t]),GO=zN.map(t=>fe[t]);FN(zN,t=>[t,!0]);let Hn=null;function ei(t){Hn=typeof WeakMap<"u"&&new WeakMap;const e=Wd(t);return Hn=null,e}function Wd(t){if(!t||typeof t!="object")return t;let e=Hn&&Hn.get(t);if(e)return e;if(et(t)){e=[],Hn&&Hn.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Wd(t[n]))}else if(GO.indexOf(t.constructor)>=0)e=t;else{const a=Io(t);for(var s in e=a===Object.prototype?{}:Object.create(a),Hn&&Hn.set(t,e),t)_t(t,s)&&(e[s]=Wd(t[s]))}return e}const{toString:QO}={};function qd(t){return QO.call(t).slice(8,-1)}const Hd=typeof Symbol<"u"?Symbol.iterator:"@@iterator",XO=typeof Hd=="symbol"?function(t){var e;return t!=null&&(e=t[Hd])&&e.apply(t)}:function(){return null},Ns={};function Nn(t){var e,n,r,s;if(arguments.length===1){if(et(t))return t.slice();if(this===Ns&&typeof t=="string")return[t];if(s=XO(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const Eh=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var fn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function BN(t,e){fn=t,MN=e}var MN=()=>!0;const YO=!new Error("").stack;function fs(){if(YO)try{throw fs.arguments,new Error}catch(t){return t}return new Error}function Gd(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(MN).map(r=>`
`+r).join("")):""}var VN=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],_h=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(VN),JO={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ws(t,e){this._e=fs(),this.name=t,this.message=e}function UN(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Ul(t,e,n,r){this._e=fs(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=UN(t,e)}function Ya(t,e){this._e=fs(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=UN(t,e)}Ks(Ws).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Gd(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ks(Ul).from(Ws),Ks(Ya).from(Ws);var Th=_h.reduce((t,e)=>(t[e]=e+"Error",t),{});const ZO=Ws;var G=_h.reduce((t,e)=>{var n=e+"Error";function r(s,a){this._e=fs(),this.name=n,s?typeof s=="string"?(this.message=`${s}${a?`
 `+a:""}`,this.inner=a||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=JO[e]||n,this.inner=null)}return Ks(r).from(ZO),t[e]=r,t},{});G.Syntax=SyntaxError,G.Type=TypeError,G.Range=RangeError;var Rg=VN.reduce((t,e)=>(t[e+"Error"]=G[e],t),{}),Hi=_h.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=G[e]),t),{});function ie(){}function Do(t){return t}function eP(t,e){return t==null||t===Do?e:function(n){return e(t(n))}}function os(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function tP(t,e){return t===ie?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var a=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?os(r,this.onsuccess):r),s&&(this.onerror=this.onerror?os(s,this.onerror):s),a!==void 0?a:n}}function nP(t,e){return t===ie?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?os(n,this.onsuccess):n),r&&(this.onerror=this.onerror?os(r,this.onerror):r)}}function rP(t,e){return t===ie?e:function(n){var r=t.apply(this,arguments);it(n,r);var s=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?os(s,this.onsuccess):s),a&&(this.onerror=this.onerror?os(a,this.onerror):a),r===void 0?o===void 0?void 0:o:it(r,o)}}function sP(t,e){return t===ie?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Ch(t,e){return t===ie?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,a=new Array(s);s--;)a[s]=arguments[s];return n.then(function(){return e.apply(r,a)})}return e.apply(this,arguments)}}Hi.ModifyError=Ul,Hi.DexieError=Ws,Hi.BulkError=Ya;var jo={};const KN=100,[Qd,Kl,Xd]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,Io(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,Io(e),t]})(),WN=Kl&&Kl.then,Gi=Qd&&Qd.constructor,$h=!!Xd;var Yd=!1,aP=Xd?()=>{Xd.then(Ni)}:fe.setImmediate?setImmediate.bind(null,Ni):fe.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Ni(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Ni,0)},Ja=function(t,e){Ba.push([t,e]),Wl&&(aP(),Wl=!1)},Jd=!0,Wl=!0,qr=[],Qi=[],Zd=null,ep=Do,qs={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Mg,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Mg(t[0],t[1])}catch{}})}},q=qs,Ba=[],Hr=0,Xi=[];function z(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=ie,this._lib=!1;var e=this._PSD=q;if(fn&&(this._stackHolder=fs(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==jo)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&np(this,this._value))}this._state=null,this._value=null,++e.ref,HN(this,t)}const tp={get:function(){var t=q,e=ql;function n(r,s){var a=!t.global&&(t!==q||e!==ql);const o=a&&!Ln();var i=new z((l,u)=>{Ah(this,new qN(Hl(r,t,a,o),Hl(s,t,a,o),l,u,t))});return fn&&XN(i,this),i}return n.prototype=jo,n},set:function(t){$n(this,"then",t&&t.prototype===jo?tp:{get:function(){return t},set:tp.set})}};function qN(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function HN(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&ti();n&&typeof n.then=="function"?HN(t,(s,a)=>{n instanceof z?n._then(s,a):n.then(s,a)}):(t._state=!0,t._value=n,GN(t)),r&&ni()}},np.bind(null,t))}catch(n){np(t,n)}}function np(t,e){if(Qi.push(e),t._state===null){var n=t._lib&&ti();e=ep(e),t._state=!1,t._value=e,fn&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,a){try{r.apply(null,a)}catch{}}(()=>{var r=Sh(e,"stack");e._promise=t,$n(e,"stack",{get:()=>Yd?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){qr.some(s=>s._value===r._value)||qr.push(r)}(t),GN(t),n&&ni()}}function GN(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)Ah(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),Hr===0&&(++Hr,Ja(()=>{--Hr==0&&Ih()},[]))}function Ah(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Hr,Ja(oP,[n,t,e])}else t._listeners.push(e)}function oP(t,e,n){try{Zd=e;var r,s=e._value;e._state?r=t(s):(Qi.length&&(Qi=[]),r=t(s),Qi.indexOf(s)===-1&&function(a){for(var o=qr.length;o;)if(qr[--o]._value===a._value)return void qr.splice(o,1)}(e)),n.resolve(r)}catch(a){n.reject(a)}finally{Zd=null,--Hr==0&&Ih(),--n.psd.ref||n.psd.finalize()}}function QN(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,a,o=t._value;o!=null?(s=o.name||"Error",a=o.message||o,r=Gd(o,0)):(s=o,a=""),e.push(s+(a?": "+a:"")+r)}return fn&&((r=Gd(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&QN(t._prev,e,n)),e}function XN(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Ni(){ti()&&ni()}function ti(){var t=Jd;return Jd=!1,Wl=!1,t}function ni(){var t,e,n;do for(;Ba.length>0;)for(t=Ba,Ba=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(Ba.length>0);Jd=!0,Wl=!0}function Ih(){var t=qr;qr=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Xi.slice(0),n=e.length;n;)e[--n]()}function ki(t){return new z(jo,!1,t)}function ye(t,e){var n=q;return function(){var r=ti(),s=q;try{return vr(n,!0),t.apply(this,arguments)}catch(a){e&&e(a)}finally{vr(s,!1),r&&ni()}}}la(z.prototype,{then:tp,_then:function(t,e){Ah(this,new qN(null,null,t,e,q))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):ki(r)):this.then(null,r=>r&&r.name===e?n(r):ki(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),ki(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Yd=!0;var t=QN(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Yd=!1}}},timeout:function(t,e){return t<1/0?new z((n,r)=>{var s=setTimeout(()=>r(new G.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&$n(z.prototype,Symbol.toStringTag,"Dexie.Promise"),qs.env=YN(),la(z,{all:function(){var t=Nn.apply(null,arguments).map(Si);return new z(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,a)=>z.resolve(s).then(o=>{t[a]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof z)return t;if(t&&typeof t.then=="function")return new z((n,r)=>{t.then(n,r)});var e=new z(jo,!0,t);return XN(e,Zd),e},reject:ki,race:function(){var t=Nn.apply(null,arguments).map(Si);return new z((e,n)=>{t.map(r=>z.resolve(r).then(e,n))})},PSD:{get:()=>q,set:t=>q=t},totalEchoes:{get:()=>ql},newPSD:yr,usePSD:va,scheduler:{get:()=>Ja,set:t=>{Ja=t}},rejectionMapper:{get:()=>ep,set:t=>{ep=t}},follow:(t,e)=>new z((n,r)=>yr((s,a)=>{var o=q;o.unhandleds=[],o.onunhandled=a,o.finalize=os(function(){(function(i){function l(){i(),Xi.splice(Xi.indexOf(l),1)}Xi.push(l),++Hr,Ja(()=>{--Hr==0&&Ih()},[])})(()=>{this.unhandleds.length===0?s():a(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Gi&&(Gi.allSettled&&$n(z,"allSettled",function(){const t=Nn.apply(null,arguments).map(Si);return new z(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,a)=>z.resolve(s).then(o=>r[a]={status:"fulfilled",value:o},o=>r[a]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Gi.any&&typeof AggregateError<"u"&&$n(z,"any",function(){const t=Nn.apply(null,arguments).map(Si);return new z((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((a,o)=>z.resolve(a).then(i=>e(i),i=>{s[o]=i,--r||n(new AggregateError(s))}))})}));const Ze={awaits:0,echoes:0,id:0};var iP=0,Yi=[],cc=0,ql=0,lP=0;function yr(t,e,n,r){var s=q,a=Object.create(s);a.parent=s,a.ref=0,a.global=!1,a.id=++lP;var o=qs.env;a.env=$h?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject,nthen:zg(o.nthen,a),gthen:zg(o.gthen,a)}:{},e&&it(a,e),++s.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()};var i=va(a,t,n,r);return a.ref===0&&a.finalize(),i}function ya(){return Ze.id||(Ze.id=++iP),++Ze.awaits,Ze.echoes+=KN,Ze.id}function Ln(){return!!Ze.awaits&&(--Ze.awaits==0&&(Ze.id=0),Ze.echoes=Ze.awaits*KN,!0)}function Si(t){return Ze.echoes&&t&&t.constructor===Gi?(ya(),t.then(e=>(Ln(),e),e=>(Ln(),Fe(e)))):t}function uP(t){++ql,Ze.echoes&&--Ze.echoes!=0||(Ze.echoes=Ze.id=0),Yi.push(q),vr(t,!0)}function cP(){var t=Yi[Yi.length-1];Yi.pop(),vr(t,!1)}function vr(t,e){var n=q;if((e?!Ze.echoes||cc++&&t===q:!cc||--cc&&t===q)||JN(e?uP.bind(null,t):cP),t!==q&&(q=t,n===qs&&(qs.env=YN()),$h)){var r=qs.env.Promise,s=t.env;Kl.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(fe,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function YN(){var t=fe.Promise;return $h?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(fe,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:Kl.then,gthen:t.prototype.then}:{}}function va(t,e,n,r,s){var a=q;try{return vr(t,!0),e(n,r,s)}finally{vr(a,!1)}}function JN(t){WN.call(Qd,t)}function Hl(t,e,n,r){return typeof t!="function"?t:function(){var s=q;n&&ya(),vr(e,!0);try{return t.apply(this,arguments)}finally{vr(s,!1),r&&JN(Ln)}}}function zg(t,e){return function(n,r){return t.call(this,Hl(n,e),Hl(r,e))}}(""+WN).indexOf("[native code]")===-1&&(ya=Ln=ie);const Bg="unhandledrejection";function Mg(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(fe.document&&document.createEvent?((r=document.createEvent("Event")).initEvent(Bg,!0,!0),it(r,s)):fe.CustomEvent&&it(r=new CustomEvent(Bg,{detail:s}),s),r&&fe.dispatchEvent&&(dispatchEvent(r),!fe.PromiseRejectionEvent&&fe.onunhandledrejection))try{fe.onunhandledrejection(r)}catch{}fn&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var Fe=z.reject;function rp(t,e,n,r){if(t.idbdb&&(t._state.openComplete||q.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===Th.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>rp(t,e,n,r))):Fe(a)}return s._promise(e,(a,o)=>yr(()=>(q.trans=s,r(a,o,s)))).then(a=>s._completion.then(()=>a))}if(t._state.openComplete)return Fe(new G.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return Fe(new G.DatabaseClosed);t.open().catch(ie)}return t._state.dbReadyPromise.then(()=>rp(t,e,n,r))}const Vg="3.2.7",Mr="￿",sp=-1/0,hn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ZN="String expected.",Za=[],Tu=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),dP=Tu,pP=Tu,ek=t=>!/(dexie\.js|dexie\.min\.js)/.test(t),Cu="__dbnames",dc="readonly",pc="readwrite";function is(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const tk={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ei(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=ei(e))[t],e)}class fP{_trans(e,n,r){const s=this._tx||q.trans,a=this.name;function o(l,u,c){if(!c.schema[a])throw new G.NotFound("Table "+a+" not part of transaction");return n(c.idbtrans,c)}const i=ti();try{return s&&s.db===this.db?s===q.trans?s._promise(e,o,r):yr(()=>s._promise(e,o,r),{trans:s,transless:q.transless||q}):rp(this.db,e,[this.name],o)}finally{i&&ni()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(et(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=je(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>{if(u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)){for(let c=0;c<n.length;++c)if(n.indexOf(u.keyPath[c])===-1)return!1;return!0}return!1}).sort((u,c)=>u.keyPath.length-c.keyPath.length)[0];if(r&&this.db._maxKey!==Mr){const u=r.keyPath.slice(0,n.length);return this.where(u).equals(u.map(c=>e[c]))}!r&&fn&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,a=this.db._deps.indexedDB;function o(u,c){try{return a.cmp(u,c)===0}catch{return!1}}const[i,l]=n.reduce(([u,c],d)=>{const p=s[d],f=e[d];return[u||p,u||!p?is(c,p&&p.multi?m=>{const g=An(m,d);return et(g)&&g.some(w=>o(f,w))}:m=>o(f,An(m,d))):c]},[null,null]);return i?this.where(i.name).equals(e[i.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,et(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var a in r)if(_t(r,a))try{s[a]=r[a]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){it(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let a=e;return s&&r&&(a=Ei(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[a]})).then(o=>o.numFailures?z.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Yt(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||et(e))return this.where(":id").equals(e).modify(n);{const r=An(e,this.schema.primKey.keyPath);if(r===void 0)return Fe(new G.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?je(n).forEach(s=>{Yt(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let a=e;return s&&r&&(a=Ei(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[a],keys:n!=null?[n]:null})).then(o=>o.numFailures?z.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Yt(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?z.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:tk})).then(e=>e.numFailures?z.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,a=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:i,keyPath:l}=this.schema.primKey;if(l&&s)throw new G.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&i?e.map(Ei(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:a}).then(({numFailures:d,results:p,lastResult:f,failures:m})=>{if(d===0)return a?p:f;throw new Ya(`${this.name}.bulkAdd(): ${d} of ${u} operations failed`,m)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,a=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:i,keyPath:l}=this.schema.primKey;if(l&&s)throw new G.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&i?e.map(Ei(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:a}).then(({numFailures:d,results:p,lastResult:f,failures:m})=>{if(d===0)return a?p:f;throw new Ya(`${this.name}.bulkPut(): ${d} of ${u} operations failed`,m)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:a})=>{if(r===0)return s;throw new Ya(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,a)})}}function eo(t){var e={},n=function(o,i){if(i){for(var l=arguments.length,u=new Array(l-1);--l;)u[l-1]=arguments[l];return e[o].subscribe.apply(null,u),t}if(typeof o=="string")return e[o]};n.addEventType=a;for(var r=1,s=arguments.length;r<s;++r)a(arguments[r]);return n;function a(o,i,l){if(typeof o!="object"){var u;i||(i=sP),l||(l=ie);var c={subscribers:[],fire:l,subscribe:function(d){c.subscribers.indexOf(d)===-1&&(c.subscribers.push(d),c.fire=i(c.fire,d))},unsubscribe:function(d){c.subscribers=c.subscribers.filter(function(p){return p!==d}),c.fire=c.subscribers.reduce(i,l)}};return e[o]=n[o]=c,c}je(u=o).forEach(function(d){var p=u[d];if(et(p))a(d,u[d][0],u[d][1]);else{if(p!=="asap")throw new G.InvalidArgument("Invalid event config");var f=a(d,Do,function(){for(var m=arguments.length,g=new Array(m);m--;)g[m]=arguments[m];f.subscribers.forEach(function(w){PN(function(){w.apply(null,g)})})})}})}}function Ia(t,e){return Ks(e).from({prototype:t}),e}function gs(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function fc(t,e){t.filter=is(t.filter,e)}function hc(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>is(r(),e()):e,t.justLimit=n&&!r}function Ji(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new G.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Ug(t,e,n){const r=Ji(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function _i(t,e,n,r){const s=t.replayFilter?is(t.filter,t.replayFilter()):t.filter;if(t.or){const a={},o=(i,l,u)=>{if(!s||s(l,u,p=>l.stop(p),p=>l.fail(p))){var c=l.primaryKey,d=""+c;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(c)),_t(a,d)||(a[d]=!0,e(i,l,u))}};return Promise.all([t.or._iterate(o,n),Kg(Ug(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Kg(Ug(t,r,n),is(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Kg(t,e,n,r){var s=ye(r?(a,o,i)=>n(r(a),o,i):n);return t.then(a=>{if(a)return a.start(()=>{var o=()=>a.continue();e&&!e(a,i=>o=i,i=>{a.stop(i),o=ie},i=>{a.fail(i),o=ie})||s(a.value,a,i=>o=i),o()})})}function st(t,e){try{const n=Wg(t),r=Wg(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,a){const o=s.length,i=a.length,l=o<i?o:i;for(let u=0;u<l;++u)if(s[u]!==a[u])return s[u]<a[u]?-1:1;return o===i?0:o<i?-1:1}(qg(t),qg(e));case"Array":return function(s,a){const o=s.length,i=a.length,l=o<i?o:i;for(let u=0;u<l;++u){const c=st(s[u],a[u]);if(c!==0)return c}return o===i?0:o<i?-1:1}(t,e)}}catch{}return NaN}function Wg(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=qd(t);return n==="ArrayBuffer"?"binary":n}function qg(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class hP{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,Fe.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,Fe.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=is(n.algorithm,e)}_iterate(e,n){return _i(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&it(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>_i(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(gs(r,!0))return s.count({trans:n,query:{index:Ji(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var a=0;return _i(r,()=>(++a,!1),n,s).then(()=>a)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],a=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[s]}var i=this._ctx.dir==="next"?1:-1;function l(u,c){var d=o(u,a),p=o(c,a);return d<p?-i:d>p?i:0}return this.toArray(function(u){return u.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&gs(r,!0)&&r.limit>0){const{valueMapper:s}=r,a=Ji(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:a,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return _i(r,a=>s.push(a),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,gs(n)?hc(n,()=>{var r=e;return(s,a)=>r===0||(r===1?(--r,!1):(a(()=>{s.advance(r),r=0}),!1))}):hc(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),hc(this._ctx,()=>{var n=e;return function(r,s,a){return--n<=0&&s(a),n>=0}},!0),this}until(e,n){return fc(this._ctx,function(r,s,a){return!e(r.value)||(s(a),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return fc(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=is(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,a){r.push(a.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&gs(n,!0)&&n.limit>0)return this._read(s=>{var a=Ji(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:a,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,a){r.push(a.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return fc(this._ctx,function(s){var a=s.primaryKey.toString(),o=_t(r,a);return r[a]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var a=je(e),o=a.length;s=function(g){for(var w=!1,y=0;y<o;++y){var b=a[y],x=e[b];An(g,b)!==x&&(Yt(g,b,x),w=!0)}return w}}const i=n.table.core,{outbound:l,extractKey:u}=i.schema.primaryKey,c=this.db._options.modifyChunkSize||200,d=[];let p=0;const f=[],m=(g,w)=>{const{failures:y,numFailures:b}=w;p+=g-b;for(let x of je(y))d.push(y[x])};return this.clone().primaryKeys().then(g=>{const w=y=>{const b=Math.min(c,g.length-y);return i.getMany({trans:r,keys:g.slice(y,y+b),cache:"immutable"}).then(x=>{const k=[],_=[],$=l?[]:null,T=[];for(let D=0;D<b;++D){const O=x[D],P={value:ei(O),primKey:g[y+D]};s.call(P,P.value,P)!==!1&&(P.value==null?T.push(g[y+D]):l||st(u(O),u(P.value))===0?(_.push(P.value),l&&$.push(g[y+D])):(T.push(g[y+D]),k.push(P.value)))}const I=gs(n)&&n.limit===1/0&&(typeof e!="function"||e===mc)&&{index:n.index,range:n.range};return Promise.resolve(k.length>0&&i.mutate({trans:r,type:"add",values:k}).then(D=>{for(let O in D.failures)T.splice(parseInt(O),1);m(k.length,D)})).then(()=>(_.length>0||I&&typeof e=="object")&&i.mutate({trans:r,type:"put",keys:$,values:_,criteria:I,changeSpec:typeof e!="function"&&e}).then(D=>m(_.length,D))).then(()=>(T.length>0||I&&e===mc)&&i.mutate({trans:r,type:"delete",keys:T,criteria:I}).then(D=>m(T.length,D))).then(()=>g.length>y+b&&w(y+c))})};return w(0).then(()=>{if(d.length>0)throw new Ul("Error modifying one or more objects",d,p,f);return g.length})})})}delete(){var e=this._ctx,n=e.range;return gs(e)&&(e.isPrimKey&&!pP||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,a=n;return e.table.core.count({trans:r,query:{index:s,range:a}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:a}).then(({failures:i,lastResult:l,results:u,numFailures:c})=>{if(c)throw new Ul("Could not delete some values",Object.keys(i).map(d=>i[d]),o-c);return o-c}))}):this.modify(mc)}}const mc=(t,e)=>e.value=null;function mP(t,e){return t<e?-1:t===e?0:1}function gP(t,e){return t>e?-1:t===e?0:1}function wt(t,e,n){var r=t instanceof rk?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function ys(t){return new t.Collection(t,()=>nk("")).limit(0)}function yP(t,e,n,r,s,a){for(var o=Math.min(t.length,r.length),i=-1,l=0;l<o;++l){var u=e[l];if(u!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):i>=0?t.substr(0,i)+e[i]+n.substr(i+1):null;s(t[l],u)<0&&(i=l)}return o<r.length&&a==="next"?t+n.substr(t.length):o<t.length&&a==="prev"?t.substr(0,n.length):i<0?null:t.substr(0,i)+r[i]+n.substr(i+1)}function Ti(t,e,n,r){var s,a,o,i,l,u,c,d=n.length;if(!n.every(g=>typeof g=="string"))return wt(t,ZN);function p(g){s=function(y){return y==="next"?b=>b.toUpperCase():b=>b.toLowerCase()}(g),a=function(y){return y==="next"?b=>b.toLowerCase():b=>b.toUpperCase()}(g),o=g==="next"?mP:gP;var w=n.map(function(y){return{lower:a(y),upper:s(y)}}).sort(function(y,b){return o(y.lower,b.lower)});i=w.map(function(y){return y.upper}),l=w.map(function(y){return y.lower}),u=g,c=g==="next"?"":r}p("next");var f=new t.Collection(t,()=>Kn(i[0],l[d-1]+r));f._ondirectionchange=function(g){p(g)};var m=0;return f._addAlgorithm(function(g,w,y){var b=g.key;if(typeof b!="string")return!1;var x=a(b);if(e(x,l,m))return!0;for(var k=null,_=m;_<d;++_){var $=yP(b,x,i[_],l[_],o,u);$===null&&k===null?m=_+1:(k===null||o(k,$)>0)&&(k=$)}return w(k!==null?function(){g.continue(k+c)}:y),!1}),f}function Kn(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function nk(t){return{type:1,lower:t,upper:t}}class rk{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?ys(this):new this.Collection(this,()=>Kn(e,n,!r,!s))}catch{return wt(this,hn)}}equals(e){return e==null?wt(this,hn):new this.Collection(this,()=>nk(e))}above(e){return e==null?wt(this,hn):new this.Collection(this,()=>Kn(e,void 0,!0))}aboveOrEqual(e){return e==null?wt(this,hn):new this.Collection(this,()=>Kn(e,void 0,!1))}below(e){return e==null?wt(this,hn):new this.Collection(this,()=>Kn(void 0,e,!1,!0))}belowOrEqual(e){return e==null?wt(this,hn):new this.Collection(this,()=>Kn(void 0,e))}startsWith(e){return typeof e!="string"?wt(this,ZN):this.between(e,e+Mr,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Ti(this,(n,r)=>n.indexOf(r[0])===0,[e],Mr)}equalsIgnoreCase(e){return Ti(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=Nn.apply(Ns,arguments);return e.length===0?ys(this):Ti(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=Nn.apply(Ns,arguments);return e.length===0?ys(this):Ti(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Mr)}anyOf(){const e=Nn.apply(Ns,arguments);let n=this._cmp;try{e.sort(n)}catch{return wt(this,hn)}if(e.length===0)return ys(this);const r=new this.Collection(this,()=>Kn(e[0],e[e.length-1]));r._ondirectionchange=a=>{n=a==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((a,o,i)=>{const l=a.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(i),!1;return n(l,e[s])===0||(o(()=>{a.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[sp,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=Nn.apply(Ns,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return wt(this,hn)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[sp,s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,a=this._descending,o=this._min,i=this._max;if(e.length===0)return ys(this);if(!e.every(b=>b[0]!==void 0&&b[1]!==void 0&&s(b[0],b[1])<=0))return wt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",G.InvalidArgument);const l=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,d=s;function p(b,x){return d(b[0],x[0])}try{c=e.reduce(function(b,x){let k=0,_=b.length;for(;k<_;++k){const $=b[k];if(r(x[0],$[1])<0&&r(x[1],$[0])>0){$[0]=o($[0],x[0]),$[1]=i($[1],x[1]);break}}return k===_&&b.push(x),b},[]),c.sort(p)}catch{return wt(this,hn)}let f=0;const m=u?b=>s(b,c[f][1])>0:b=>s(b,c[f][1])>=0,g=l?b=>a(b,c[f][0])>0:b=>a(b,c[f][0])>=0;let w=m;const y=new this.Collection(this,()=>Kn(c[0][0],c[c.length-1][1],!l,!u));return y._ondirectionchange=b=>{b==="next"?(w=m,d=s):(w=g,d=a),c.sort(p)},y._addAlgorithm((b,x,k)=>{for(var _=b.key;w(_);)if(++f,f===c.length)return x(k),!1;return!!function($){return!m($)&&!g($)}(_)||(this._cmp(_,c[f][1])===0||this._cmp(_,c[f][0])===0||x(()=>{d===s?b.continue(c[f][0]):b.continue(c[f][1])}),!1)}),y}startsWithAnyOf(){const e=Nn.apply(Ns,arguments);return e.every(n=>typeof n=="string")?e.length===0?ys(this):this.inAnyRange(e.map(n=>[n,n+Mr])):wt(this,"startsWithAnyOf() only works with strings")}}function sn(t){return ye(function(e){return Oo(e),t(e.target.error),!1})}function Oo(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const Po="storagemutated",Xn="x-storagemutated-1",br=eo(null,Po);class vP{_lock(){return za(!q.global),++this._reculock,this._reculock!==1||q.global||(q.lockOwnerFor=this),this}_unlock(){if(za(!q.global),--this._reculock==0)for(q.global||(q.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{va(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&q.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(za(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new G.DatabaseClosed(r);case"MissingAPIError":throw new G.MissingAPI(r.message,r);default:throw new G.OpenFailed(r)}if(!this.active)throw new G.TransactionInactive;return za(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=ye(s=>{Oo(s),this._reject(e.error)}),e.onabort=ye(s=>{Oo(s),this.active&&this._reject(new G.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=ye(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&br.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return Fe(new G.ReadOnly("Transaction is readonly"));if(!this.active)return Fe(new G.TransactionInactive);if(this._locked())return new z((a,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(a,o)},q])});if(r)return yr(()=>{var a=new z((o,i)=>{this._lock();const l=n(o,i,this);l&&l.then&&l.then(o,i)});return a.finally(()=>this._unlock()),a._lib=!0,a});var s=new z((a,o)=>{var i=n(a,o,this);i&&i.then&&i.then(a,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=z.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var a=n._waitingFor;return new z((o,i)=>{r.then(l=>n._waitingQueue.push(ye(o.bind(null,l))),l=>n._waitingQueue.push(ye(i.bind(null,l)))).finally(()=>{n._waitingFor===a&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new G.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(_t(n,e))return n[e];const r=this.schema[e];if(!r)throw new G.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function ap(t,e,n,r,s,a,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:a,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+sk(e)}}function sk(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function ak(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:FN(n,r=>[r.name,r])}}let Fo=t=>{try{return t.only([[]]),Fo=()=>[[]],[[]]}catch{return Fo=()=>Mr,Mr}};function op(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?r=>r[e]:r=>An(r,e)}(t):e=>An(e,t)}function Hg(t){return[].slice.call(t)}let bP=0;function to(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function wP(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:d,upperOpen:p}=l;return u===void 0?c===void 0?null:e.upperBound(c,!!p):c===void 0?e.lowerBound(u,!!d):e.bound(u,c,!!d,!!p)}const{schema:s,hasGetAll:a}=function(l,u){const c=Hg(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(d=>u.objectStore(d)).map(d=>{const{keyPath:p,autoIncrement:f}=d,m=et(p),g=p==null,w={},y={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:g,compound:m,keyPath:p,autoIncrement:f,unique:!0,extractKey:op(p)},indexes:Hg(d.indexNames).map(b=>d.index(b)).map(b=>{const{name:x,unique:k,multiEntry:_,keyPath:$}=b,T={name:x,compound:et($),keyPath:$,unique:k,multiEntry:_,extractKey:op($)};return w[to($)]=T,T}),getIndexByKeyPath:b=>w[to(b)]};return w[":id"]=y.primaryKey,p!=null&&(w[to(p)]=y.primaryKey),y})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:d,type:p,keys:f,values:m,range:g}){return new Promise((w,y)=>{w=ye(w);const b=d.objectStore(c),x=b.keyPath==null,k=p==="put"||p==="add";if(!k&&p!=="delete"&&p!=="deleteRange")throw new Error("Invalid operation type: "+p);const{length:_}=f||m||{length:1};if(f&&m&&f.length!==m.length)throw new Error("Given keys array must have same length as given values array.");if(_===0)return w({numFailures:0,failures:{},results:[],lastResult:void 0});let $;const T=[],I=[];let D=0;const O=V=>{++D,Oo(V)};if(p==="deleteRange"){if(g.type===4)return w({numFailures:D,failures:I,results:[],lastResult:void 0});g.type===3?T.push($=b.clear()):T.push($=b.delete(r(g)))}else{const[V,W]=k?x?[m,f]:[m,null]:[f,null];if(k)for(let K=0;K<_;++K)T.push($=W&&W[K]!==void 0?b[p](V[K],W[K]):b[p](V[K])),$.onerror=O;else for(let K=0;K<_;++K)T.push($=b[p](V[K])),$.onerror=O}const P=V=>{const W=V.target.result;T.forEach((K,ne)=>K.error!=null&&(I[ne]=K.error)),w({numFailures:D,failures:I,results:p==="delete"?f:T.map(K=>K.result),lastResult:W})};$.onerror=V=>{O(V),P(V)},$.onsuccess=P})},getMany:({trans:d,keys:p})=>new Promise((f,m)=>{f=ye(f);const g=d.objectStore(c),w=p.length,y=new Array(w);let b,x=0,k=0;const _=T=>{const I=T.target;y[I._pos]=I.result,++k===x&&f(y)},$=sn(m);for(let T=0;T<w;++T)p[T]!=null&&(b=g.get(p[T]),b._pos=T,b.onsuccess=_,b.onerror=$,++x);x===0&&f(y)}),get:({trans:d,key:p})=>new Promise((f,m)=>{f=ye(f);const g=d.objectStore(c).get(p);g.onsuccess=w=>f(w.target.result),g.onerror=sn(m)}),query:function(d){return p=>new Promise((f,m)=>{f=ye(f);const{trans:g,values:w,limit:y,query:b}=p,x=y===1/0?void 0:y,{index:k,range:_}=b,$=g.objectStore(c),T=k.isPrimaryKey?$:$.index(k.name),I=r(_);if(y===0)return f({result:[]});if(d){const D=w?T.getAll(I,x):T.getAllKeys(I,x);D.onsuccess=O=>f({result:O.target.result}),D.onerror=sn(m)}else{let D=0;const O=w||!("openKeyCursor"in T)?T.openCursor(I):T.openKeyCursor(I),P=[];O.onsuccess=V=>{const W=O.result;return W?(P.push(w?W.value:W.primaryKey),++D===y?f({result:P}):void W.continue()):f({result:P})},O.onerror=sn(m)}})}(a),openCursor:function({trans:d,values:p,query:f,reverse:m,unique:g}){return new Promise((w,y)=>{w=ye(w);const{index:b,range:x}=f,k=d.objectStore(c),_=b.isPrimaryKey?k:k.index(b.name),$=m?g?"prevunique":"prev":g?"nextunique":"next",T=p||!("openKeyCursor"in _)?_.openCursor(r(x),$):_.openKeyCursor(r(x),$);T.onerror=sn(y),T.onsuccess=ye(I=>{const D=T.result;if(!D)return void w(null);D.___id=++bP,D.done=!1;const O=D.continue.bind(D);let P=D.continuePrimaryKey;P&&(P=P.bind(D));const V=D.advance.bind(D),W=()=>{throw new Error("Cursor not stopped")};D.trans=d,D.stop=D.continue=D.continuePrimaryKey=D.advance=()=>{throw new Error("Cursor not started")},D.fail=ye(y),D.next=function(){let K=1;return this.start(()=>K--?this.continue():this.stop()).then(()=>this)},D.start=K=>{const ne=new Promise((re,L)=>{re=ye(re),T.onerror=sn(L),D.fail=L,D.stop=U=>{D.stop=D.continue=D.continuePrimaryKey=D.advance=W,re(U)}}),de=()=>{if(T.result)try{K()}catch(re){D.fail(re)}else D.done=!0,D.start=()=>{throw new Error("Cursor behind last entry")},D.stop()};return T.onsuccess=ye(re=>{T.onsuccess=de,de()}),D.continue=O,D.continuePrimaryKey=P,D.advance=V,de(),ne},w(D)},y)})},count({query:d,trans:p}){const{index:f,range:m}=d;return new Promise((g,w)=>{const y=p.objectStore(c),b=f.isPrimaryKey?y:y.index(f.name),x=r(m),k=x?b.count(x):b.count();k.onsuccess=ye(_=>g(_.target.result)),k.onerror=sn(w)})}}}(l)),i={};return o.forEach(l=>i[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!i[l])throw new Error(`Table '${l}' not found`);return i[l]},MIN_KEY:-1/0,MAX_KEY:Fo(e),schema:s}}function ip({_novip:t},e){const n=e.db,r=function(s,a,{IDBKeyRange:o,indexedDB:i},l){return{dbcore:function(c,d){return d.reduce((p,{create:f})=>({...p,...f(p)}),c)}(wP(a,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const a=s.name;t.core.schema.tables.some(o=>o.name===a)&&(s.core=t.core.table(a),t[a]instanceof t.Table&&(t[a].core=s.core))})}function Gl({_novip:t},e,n,r){n.forEach(s=>{const a=r[s];e.forEach(o=>{const i=Sh(o,s);(!i||"value"in i&&i.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?$n(o,s,{get(){return this.table(s)},set(l){jN(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,a))})})}function lp({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function xP(t,e){return t._cfg.version-e._cfg.version}function NP(t,e,n,r){const s=t._dbSchema,a=t._createTransaction("readwrite",t._storeNames,s);a.create(n),a._completion.catch(r);const o=a._reject.bind(a),i=q.transless||q;yr(()=>{q.trans=a,q.transless=i,e===0?(je(s).forEach(l=>{gc(n,l,s[l].primKey,s[l].indexes)}),ip(t,n),z.follow(()=>t.on.populate.fire(a)).catch(o)):function({_novip:l},u,c,d){const p=[],f=l._versions;let m=l._dbSchema=cp(l,l.idbdb,d),g=!1;const w=f.filter(b=>b._cfg.version>=u);function y(){return p.length?z.resolve(p.shift()(c.idbtrans)).then(y):z.resolve()}return w.forEach(b=>{p.push(()=>{const x=m,k=b._cfg.dbschema;dp(l,x,d),dp(l,k,d),m=l._dbSchema=k;const _=ok(x,k);_.add.forEach(T=>{gc(d,T[0],T[1].primKey,T[1].indexes)}),_.change.forEach(T=>{if(T.recreate)throw new G.Upgrade("Not yet support for changing primary key");{const I=d.objectStore(T.name);T.add.forEach(D=>up(I,D)),T.change.forEach(D=>{I.deleteIndex(D.name),up(I,D)}),T.del.forEach(D=>I.deleteIndex(D))}});const $=b._cfg.contentUpgrade;if($&&b._cfg.version>u){ip(l,d),c._memoizedTables={},g=!0;let T=LN(k);_.del.forEach(P=>{T[P]=x[P]}),lp(l,[l.Transaction.prototype]),Gl(l,[l.Transaction.prototype],je(T),T),c.schema=T;const I=Eh($);let D;I&&ya();const O=z.follow(()=>{if(D=$(c),D&&I){var P=Ln.bind(null,null);D.then(P,P)}});return D&&typeof D.then=="function"?z.resolve(D):O.then(()=>D)}}),p.push(x=>{(!g||!dP)&&function(k,_){[].slice.call(_.db.objectStoreNames).forEach($=>k[$]==null&&_.db.deleteObjectStore($))}(b._cfg.dbschema,x),lp(l,[l.Transaction.prototype]),Gl(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),y().then(()=>{var b,x;x=d,je(b=m).forEach(k=>{x.db.objectStoreNames.contains(k)||gc(x,k,b[k].primKey,b[k].indexes)})})}(t,e,a,n).catch(o)})}function ok(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],a=e[r];if(s){const o={name:r,def:a,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(a.primKey.keyPath||"")||s.primKey.auto!==a.primKey.auto&&!Tu)o.recreate=!0,n.change.push(o);else{const i=s.idxByName,l=a.idxByName;let u;for(u in i)l[u]||o.del.push(u);for(u in l){const c=i[u],d=l[u];c?c.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,a])}return n}function gc(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(a=>up(s,a)),s}function up(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function cp(t,e,n){const r={};return Vl(e.objectStoreNames,0).forEach(s=>{const a=n.objectStore(s);let o=a.keyPath;const i=ap(sk(o),o||"",!1,!1,!!a.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<a.indexNames.length;++c){const d=a.index(a.indexNames[c]);o=d.keyPath;var u=ap(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(u)}r[s]=ak(s,i,l)}),r}function dp({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const a=r[s],o=n.objectStore(a);t._hasGetAll="getAll"in o;for(let i=0;i<o.indexNames.length;++i){const l=o.indexNames[i],u=o.index(l).keyPath,c=typeof u=="string"?u:"["+Vl(u).join("+")+"]";if(e[a]){const d=e[a].idxByName[c];d&&(d.name=l,delete e[a].idxByName[c],e[a].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&fe.WorkerGlobalScope&&fe instanceof fe.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class kP{_parseStoresSpec(e,n){je(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,i)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return ap(l,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),et(u),i===0)}),a=s.shift();if(a.multi)throw new G.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new G.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new G.Schema("Index must have a name and cannot be an empty string")}),n[r]=ak(r,a,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?it(this._cfg.storesSource,e):e;const r=n._versions,s={};let a={};return r.forEach(o=>{it(s,o._cfg.storesSource),a=o._cfg.dbschema={},o._parseStoresSpec(s,a)}),n._dbSchema=a,lp(n,[n._allTables,n,n.Transaction.prototype]),Gl(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],je(a),a),n._storeNames=je(a),this}upgrade(e){return this._cfg.contentUpgrade=Ch(this._cfg.contentUpgrade||ie,e),this}}function Dh(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Gr(Cu,{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function jh(t){return t&&typeof t.databases=="function"}function pp(t){return yr(function(){return q.letThrough=!0,t()})}function SP(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function EP(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?Fe(e.dbOpenError):t);fn&&(e.openCanceller._stackHolder=fs()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new G.DatabaseClosed("db.open() was cancelled")}let a=e.dbReadyResolve,o=null,i=!1;const l=()=>new z((u,c)=>{if(s(),!n)throw new G.MissingAPI;const d=t.name,p=e.autoSchema?n.open(d):n.open(d,Math.round(10*t.verno));if(!p)throw new G.MissingAPI;p.onerror=sn(c),p.onblocked=ye(t._fireOnBlocked),p.onupgradeneeded=ye(f=>{if(o=p.transaction,e.autoSchema&&!t._options.allowEmptyDB){p.onerror=Oo,o.abort(),p.result.close();const g=n.deleteDatabase(d);g.onsuccess=g.onerror=ye(()=>{c(new G.NoSuchDatabase(`Database ${d} doesnt exist`))})}else{o.onerror=sn(c);var m=f.oldVersion>Math.pow(2,62)?0:f.oldVersion;i=m<1,t._novip.idbdb=p.result,NP(t,m/10,o,c)}},c),p.onsuccess=ye(()=>{o=null;const f=t._novip.idbdb=p.result,m=Vl(f.objectStoreNames);if(m.length>0)try{const w=f.transaction((g=m).length===1?g[0]:g,"readonly");e.autoSchema?function({_novip:y},b,x){y.verno=b.version/10;const k=y._dbSchema=cp(0,b,x);y._storeNames=Vl(b.objectStoreNames,0),Gl(y,[y._allTables],je(k),k)}(t,f,w):(dp(t,t._dbSchema,w),function(y,b){const x=ok(cp(0,y.idbdb,b),y._dbSchema);return!(x.add.length||x.change.some(k=>k.add.length||k.change.length))}(t,w)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),ip(t,w)}catch{}var g;Za.push(t),f.onversionchange=ye(w=>{e.vcFired=!0,t.on("versionchange").fire(w)}),f.onclose=ye(w=>{t.on("close").fire(w)}),i&&function({indexedDB:w,IDBKeyRange:y},b){!jh(w)&&b!==Cu&&Dh(w,y).put({name:b}).catch(ie)}(t._deps,d),u()},c)}).catch(u=>u&&u.name==="UnknownError"&&e.PR1398_maxLoop>0?(e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),l()):z.reject(u));return z.race([r,(typeof navigator>"u"?z.resolve():SP()).then(l)]).then(()=>(s(),e.onReadyBeingFired=[],z.resolve(pp(()=>t.on.ready.fire(t.vip))).then(function u(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(Ch,ie);return e.onReadyBeingFired=[],z.resolve(pp(()=>c(t.vip))).then(u)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(u=>{e.dbOpenError=u;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),Fe(u)}).finally(()=>{e.openComplete=!0,a()})}function fp(t){var e=a=>t.next(a),n=s(e),r=s(a=>t.throw(a));function s(a){return o=>{var i=a(o),l=i.value;return i.done?l:l&&typeof l.then=="function"?l.then(n,r):et(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function _P(t,e,n){var r=arguments.length;if(r<2)throw new G.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];return n=s.pop(),[t,RN(s),n]}function ik(t,e,n,r,s){return z.resolve().then(()=>{const a=q.transless||q,o=t._createTransaction(e,n,t._dbSchema,r),i={trans:o,transless:a};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===Th.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>ik(t,e,n,null,s))):Fe(d)}const l=Eh(s);let u;l&&ya();const c=z.follow(()=>{if(u=s.call(o,o),u)if(l){var d=Ln.bind(null,null);u.then(d,d)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=fp(u))},i);return(u&&typeof u.then=="function"?z.resolve(u).then(d=>o.active?d:Fe(new G.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),Fe(d)))})}function Ci(t,e,n){const r=et(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const TP={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},a=[];function o(c,d,p){const f=to(c),m=s[f]=s[f]||[],g=c==null?0:typeof c=="string"?1:c.length,w=d>0,y={...p,isVirtual:w,keyTail:d,keyLength:g,extractKey:op(c),unique:!w&&p.unique};return m.push(y),y.isPrimaryKey||a.push(y),g>1&&o(g===2?c[0]:c.slice(0,g-1),d+1,p),m.sort((b,x)=>b.keyTail-x.keyTail),y}const i=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[i];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const d=c.query.index;return d.isVirtual?{...c,query:{index:d,range:(p=c.query.range,f=d.keyTail,{type:p.type===1?2:p.type,lower:Ci(p.lower,p.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Ci(p.upper,p.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:c;var p,f}return{...n,schema:{...r,primaryKey:i,indexes:a,getIndexByKeyPath:function(c){const d=s[to(c)];return d&&d[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:d,isVirtual:p,keyLength:f}=c.query.index;return p?n.openCursor(l(c)).then(m=>m&&function(g){return Object.create(g,{continue:{value:function(y){y!=null?g.continue(Ci(y,c.reverse?t.MAX_KEY:t.MIN_KEY,d)):c.unique?g.continue(g.key.slice(0,f).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,d)):g.continue()}},continuePrimaryKey:{value(y,b){g.continuePrimaryKey(Ci(y,t.MAX_KEY,d),b)}},primaryKey:{get:()=>g.primaryKey},key:{get(){const y=g.key;return f===1?y[0]:y.slice(0,f)}},value:{get:()=>g.value}})}(m)):n.openCursor(c)}}}}}};function Oh(t,e,n,r){return n=n||{},r=r||"",je(t).forEach(s=>{if(_t(e,s)){var a=t[s],o=e[s];if(typeof a=="object"&&typeof o=="object"&&a&&o){const i=qd(a);i!==qd(o)?n[r+s]=e[s]:i==="Object"?Oh(a,o,n,r+s+"."):a!==o&&(n[r+s]=e[s])}else a!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),je(e).forEach(s=>{_t(t,s)||(n[r+s]=e[s])}),n}const CP={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(a){const o=q.trans,{deleting:i,creating:l,updating:u}=o.table(e).hook;switch(a.type){case"add":if(l.fire===ie)break;return o._promise("readwrite",()=>c(a),!0);case"put":if(l.fire===ie&&u.fire===ie)break;return o._promise("readwrite",()=>c(a),!0);case"delete":if(i.fire===ie)break;return o._promise("readwrite",()=>c(a),!0);case"deleteRange":if(i.fire===ie)break;return o._promise("readwrite",()=>function(p){return d(p.trans,p.range,1e4)}(a),!0)}return n.mutate(a);function c(p){const f=q.trans,m=p.keys||function(g,w){return w.type==="delete"?w.keys:w.keys||w.values.map(g.extractKey)}(r,p);if(!m)throw new Error("Keys missing");return(p=p.type==="add"||p.type==="put"?{...p,keys:m}:{...p}).type!=="delete"&&(p.values=[...p.values]),p.keys&&(p.keys=[...p.keys]),function(g,w,y){return w.type==="add"?Promise.resolve([]):g.getMany({trans:w.trans,keys:y,cache:"immutable"})}(n,p,m).then(g=>{const w=m.map((y,b)=>{const x=g[b],k={onerror:null,onsuccess:null};if(p.type==="delete")i.fire.call(k,y,x,f);else if(p.type==="add"||x===void 0){const _=l.fire.call(k,y,p.values[b],f);y==null&&_!=null&&(y=_,p.keys[b]=y,r.outbound||Yt(p.values[b],r.keyPath,y))}else{const _=Oh(x,p.values[b]),$=u.fire.call(k,_,y,x,f);if($){const T=p.values[b];Object.keys($).forEach(I=>{_t(T,I)?T[I]=$[I]:Yt(T,I,$[I])})}}return k});return n.mutate(p).then(({failures:y,results:b,numFailures:x,lastResult:k})=>{for(let _=0;_<m.length;++_){const $=b?b[_]:m[_],T=w[_];$==null?T.onerror&&T.onerror(y[_]):T.onsuccess&&T.onsuccess(p.type==="put"&&g[_]?p.values[_]:$)}return{failures:y,results:b,numFailures:x,lastResult:k}}).catch(y=>(w.forEach(b=>b.onerror&&b.onerror(y)),Promise.reject(y)))})}function d(p,f,m){return n.query({trans:p,values:!1,query:{index:r,range:f},limit:m}).then(({result:g})=>c({type:"delete",keys:g,trans:p}).then(w=>w.numFailures>0?Promise.reject(w.failures[0]):g.length<m?{failures:[],numFailures:0,lastResult:void 0}:d(p,{...f,lower:g[g.length-1],lowerOpen:!0},m)))}}}}})};function lk(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,a=0;s<e.keys.length&&a<t.length;++s)st(e.keys[s],t[a])===0&&(r.push(n?ei(e.values[s]):e.values[s]),++a);return r.length===t.length?r:null}catch{return null}}const $P={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=lk(r.keys,r.trans._cache,r.cache==="clone");return s?z.resolve(s):n.getMany(r).then(a=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?ei(a):a},a))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Ph(t){return!("from"in t)}const wn=function(t,e){if(!this){const n=new wn;return t&&"d"in t&&it(n,t),n}it(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Lo(t,e,n){const r=st(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Ph(t))return it(t,{from:e,to:n,d:1});const s=t.l,a=t.r;if(st(n,t.from)<0)return s?Lo(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Gg(t);if(st(e,t.to)>0)return a?Lo(a,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Gg(t);st(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),st(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&Ql(t,s),a&&o&&Ql(t,a)}function Ql(t,e){Ph(e)||function n(r,{from:s,to:a,l:o,r:i}){Lo(r,s,a),o&&n(r,o),i&&n(r,i)}(t,e)}function AP(t,e){const n=hp(e);let r=n.next();if(r.done)return!1;let s=r.value;const a=hp(t);let o=a.next(s.from),i=o.value;for(;!r.done&&!o.done;){if(st(i.from,s.to)<=0&&st(i.to,s.from)>=0)return!0;st(s.from,i.from)<0?s=(r=n.next(i.from)).value:i=(o=a.next(s.from)).value}return!1}function hp(t){let e=Ph(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&st(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||st(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Gg(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const a=s==="r"?"l":"r",o={...t},i=t[s];t.from=i.from,t.to=i.to,t[s]=i[s],o[s]=i[a],t[a]=o,o.d=Qg(o)}t.d=Qg(t)}function Qg({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}la(wn.prototype,{add(t){return Ql(this,t),this},addKey(t){return Lo(this,t,t),this},addKeys(t){return t.forEach(e=>Lo(this,e,e)),this},[Hd](){return hp(this)}});const IP={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new wn(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:a}=s,{primaryKey:o}=a,{extractKey:i,outbound:l}=o,u={...s,mutate:p=>{const f=p.trans,m=f.mutatedParts||(f.mutatedParts={}),g=$=>{const T=`idb://${e}/${r}/${$}`;return m[T]||(m[T]=new wn)},w=g(""),y=g(":dels"),{type:b}=p;let[x,k]=p.type==="deleteRange"?[p.range]:p.type==="delete"?[p.keys]:p.values.length<50?[[],p.values]:[];const _=p.trans._cache;return s.mutate(p).then($=>{if(et(x)){b!=="delete"&&(x=$.results),w.addKeys(x);const T=lk(x,_);T||b==="add"||y.addKeys(x),(T||k)&&function(I,D,O,P){function V(W){const K=I(W.name||"");function ne(re){return re!=null?W.extractKey(re):null}const de=re=>W.multiEntry&&et(re)?re.forEach(L=>K.addKey(L)):K.addKey(re);(O||P).forEach((re,L)=>{const U=O&&ne(O[L]),Q=P&&ne(P[L]);st(U,Q)!==0&&(U!=null&&de(U),Q!=null&&de(Q))})}D.indexes.forEach(V)}(g,a,T,k)}else if(x){const T={from:x.lower,to:x.upper};y.add(T),w.add(T)}else w.add(n),y.add(n),a.indexes.forEach(T=>g(T.name).add(n));return $})}},c=({query:{index:p,range:f}})=>{var m,g;return[p,new wn((m=f.lower)!==null&&m!==void 0?m:t.MIN_KEY,(g=f.upper)!==null&&g!==void 0?g:t.MAX_KEY)]},d={get:p=>[o,new wn(p.key)],getMany:p=>[o,new wn().addKeys(p.keys)],count:c,query:c,openCursor:c};return je(d).forEach(p=>{u[p]=function(f){const{subscr:m}=q;if(m){const g=k=>{const _=`idb://${e}/${r}/${k}`;return m[_]||(m[_]=new wn)},w=g(""),y=g(":dels"),[b,x]=d[p](f);if(g(b.name||"").add(x),!b.isPrimaryKey){if(p!=="count"){const k=p==="query"&&l&&f.values&&s.query({...f,values:!1});return s[p].apply(this,arguments).then(_=>{if(p==="query"){if(l&&f.values)return k.then(({result:T})=>(w.addKeys(T),_));const $=f.values?_.result.map(i):_.result;f.values?w.addKeys($):y.addKeys($)}else if(p==="openCursor"){const $=_,T=f.values;return $&&Object.create($,{key:{get:()=>(y.addKey($.primaryKey),$.key)},primaryKey:{get(){const I=$.primaryKey;return y.addKey(I),I}},value:{get:()=>(T&&w.addKey($.primaryKey),$.value)}})}return _})}y.add(n)}}return s[p].apply(this,arguments)}}),u}}}};class Gr{constructor(e,n){this._middlewares={},this.verno=0;const r=Gr.dependencies;this._options=n={addons:Gr.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const a={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ie,dbReadyPromise:null,cancelOpen:ie,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;a.dbReadyPromise=new z(i=>{a.dbReadyResolve=i}),a.openCanceller=new z((i,l)=>{a.cancelOpen=l}),this._state=a,this.name=e,this.on=eo(this,"populate","blocked","versionchange","close",{ready:[Ch,ie]}),this.on.ready.subscribe=ON(this.on.ready.subscribe,i=>(l,u)=>{Gr.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||z.resolve().then(l),u&&i(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),u&&i(l);else{i(l);const d=this;u||i(function p(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(p)})}})}),this.Collection=(o=this,Ia(hP.prototype,function(i,l){this.db=o;let u=tk,c=null;if(l)try{u=l()}catch(m){c=m}const d=i._ctx,p=d.table,f=p.hook.reading.fire;this._ctx={table:p,index:d.index,isPrimKey:!d.index||p.schema.primKey.keyPath&&d.index===p.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:d.or,valueMapper:f!==Do?f:null}})),this.Table=function(i){return Ia(fP.prototype,function(l,u,c){this.db=i,this._tx=c,this.name=l,this.schema=u,this.hook=i._allTables[l]?i._allTables[l].hook:eo(null,{creating:[tP,ie],reading:[eP,Do],updating:[rP,ie],deleting:[nP,ie]})})}(this),this.Transaction=function(i){return Ia(vP.prototype,function(l,u,c,d,p){this.db=i,this.mode=l,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=eo(this,"complete","error","abort"),this.parent=p||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z((f,m)=>{this._resolve=f,this._reject=m}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var m=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):m&&this.idbtrans&&this.idbtrans.abort(),Fe(f)})})}(this),this.Version=function(i){return Ia(kP.prototype,function(l){this.db=i,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(i){return Ia(rk.prototype,function(l,u,c){this.db=i,this._ctx={table:l,index:u===":id"?null:u,or:c};const d=i._deps.indexedDB;if(!d)throw new G.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(p,f)=>d.cmp(f,p),this._max=(p,f)=>d.cmp(p,f)>0?p:f,this._min=(p,f)=>d.cmp(p,f)<0?p:f,this._IDBKeyRange=i._deps.IDBKeyRange})}(this),this.on("versionchange",i=>{i.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",i=>{!i.newVersion||i.newVersion<i.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${i.oldVersion/10}`)}),this._maxKey=Fo(n.IDBKeyRange),this._createTransaction=(i,l,u,c)=>new this.Transaction(i,l,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=i=>{this.on("blocked").fire(i),Za.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(i))},this.use(TP),this.use(CP),this.use(IP),this.use($P),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(i=>i(this))}version(e){if(isNaN(e)||e<.1)throw new G.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new G.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(xP),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||q.letThrough||this._vip)?e():new z((n,r)=>{if(this._state.openComplete)return r(new G.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new G.DatabaseClosed);this.open().catch(ie)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const a=this._middlewares[e]||(this._middlewares[e]=[]);return a.push({stack:e,create:n,level:r??10,name:s}),a.sort((o,i)=>o.level-i.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return EP(this)}_close(){const e=this._state,n=Za.indexOf(this);if(n>=0&&Za.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new z(r=>{e.dbReadyResolve=r}),e.openCanceller=new z((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new G.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new z((r,s)=>{const a=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=ye(()=>{(function({indexedDB:i,IDBKeyRange:l},u){!jh(i)&&u!==Cu&&Dh(i,l).delete(u).catch(ie)})(this._deps,this.name),r()}),o.onerror=sn(s),o.onblocked=this._fireOnBlocked};if(e)throw new G.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(a):a()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return je(this._allTables).map(e=>this._allTables[e])}transaction(){const e=_P.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=q.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const a=e.indexOf("?")!==-1;let o,i;e=e.replace("!","").replace("?","");try{if(i=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e===dc)o=dc;else{if(e!="rw"&&e!=pc)throw new G.InvalidArgument("Invalid transaction mode: "+e);o=pc}if(s){if(s.mode===dc&&o===pc){if(!a)throw new G.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&i.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!a)throw new G.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),a&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(c,d)=>{d(u)}):Fe(u)}const l=ik.bind(null,this,o,i,s,r);return s?s._promise(o,l,"lock"):q.trans?va(q.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!_t(this._allTables,e))throw new G.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const DP=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class jP{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[DP](){return this}}function uk(t,e){return je(e).forEach(n=>{Ql(t[n]||(t[n]=new wn),e[n])}),t}function OP(t){let e,n=!1;const r=new jP(s=>{const a=Eh(t);let o=!1,i={},l={};const u={get closed(){return o},unsubscribe:()=>{o=!0,br.storagemutated.unsubscribe(f)}};s.start&&s.start(u);let c=!1,d=!1;function p(){return je(l).some(g=>i[g]&&AP(i[g],l[g]))}const f=g=>{uk(i,g),p()&&m()},m=()=>{if(c||o)return;i={};const g={},w=function(y){a&&ya();const b=()=>yr(t,{subscr:y,trans:null}),x=q.trans?va(q.transless,b):b();return a&&x.then(Ln,Ln),x}(g);d||(br(Po,f),d=!0),c=!0,Promise.resolve(w).then(y=>{n=!0,e=y,c=!1,o||(p()?m():(i={},l=g,s.next&&s.next(y)))},y=>{c=!1,n=!1,s.error&&s.error(y),u.unsubscribe()})};return m(),u});return r.hasValue=()=>n,r.getValue=()=>e,r}let mp;try{mp={indexedDB:fe.indexedDB||fe.mozIndexedDB||fe.webkitIndexedDB||fe.msIndexedDB,IDBKeyRange:fe.IDBKeyRange||fe.webkitIDBKeyRange}}catch{mp={indexedDB:null,IDBKeyRange:null}}const Ir=Gr;function Zi(t){let e=En;try{En=!0,br.storagemutated.fire(t)}finally{En=e}}la(Ir,{...Hi,delete:t=>new Ir(t,{addons:[]}).delete(),exists:t=>new Ir(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return jh(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!==Cu)):Dh(e,n).toCollection().primaryKeys()}(Ir.dependencies).then(t)}catch{return Fe(new G.MissingAPI)}},defineClass:()=>function(t){it(this,t)},ignoreTransaction:t=>q.trans?va(q.transless,t):t(),vip:pp,async:function(t){return function(){try{var e=fp(t.apply(this,arguments));return e&&typeof e.then=="function"?e:z.resolve(e)}catch(n){return Fe(n)}}},spawn:function(t,e,n){try{var r=fp(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:z.resolve(r)}catch(s){return Fe(s)}},currentTransaction:{get:()=>q.trans||null},waitFor:function(t,e){const n=z.resolve(typeof t=="function"?Ir.ignoreTransaction(t):t).timeout(e||6e4);return q.trans?q.trans.waitFor(n):n},Promise:z,debug:{get:()=>fn,set:t=>{BN(t,t==="dexie"?()=>!0:ek)}},derive:Ks,extend:it,props:la,override:ON,Events:eo,on:br,liveQuery:OP,extendObservabilitySet:uk,getByKeyPath:An,setByKeyPath:Yt,delByKeyPath:function(t,e){typeof e=="string"?Yt(t,e,void 0):"length"in e&&[].map.call(e,function(n){Yt(t,n,void 0)})},shallowClone:LN,deepClone:ei,getObjectDiff:Oh,cmp:st,asap:PN,minKey:sp,addons:[],connections:Za,errnames:Th,dependencies:mp,semVer:Vg,version:Vg.split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Ir.maxKey=Fo(Ir.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(br(Po,t=>{if(!En){let e;Tu?(e=document.createEvent("CustomEvent"),e.initCustomEvent(Xn,!0,!0,t)):e=new CustomEvent(Xn,{detail:t}),En=!0,dispatchEvent(e),En=!1}}),addEventListener(Xn,({detail:t})=>{En||Zi(t)}));let En=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel(Xn);typeof t.unref=="function"&&t.unref(),br(Po,e=>{En||t.postMessage(e)}),t.onmessage=e=>{e.data&&Zi(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){br(Po,e=>{try{En||(typeof localStorage<"u"&&localStorage.setItem(Xn,JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:Xn,changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key===Xn){const n=JSON.parse(e.newValue);n&&Zi(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type===Xn&&Zi(e.changedParts)})}z.rejectionMapper=function(t,e){if(!t||t instanceof Ws||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Rg[t.name])return t;var n=new Rg[t.name](e||t.message,t);return"stack"in t&&$n(n,"stack",{get:function(){return this.inner.stack}}),n},BN(fn,ek);class PP extends Gr{constructor(){super("WildLensDB");Au(this,"species");Au(this,"journalEntries");this.version(1).stores({species:"id, commonName, scientificName, category, region",journalEntries:"id, speciesId, date"})}}const Xl=new PP,FP=[{id:"ecoscan",label:"🌄 EcoScan",icon:eT},{id:"flora",label:"🌿 FloraID",icon:Wo},{id:"fauna",label:"🦎 FaunaID",icon:Av}];function LP(){var tn,$r,Fh,Lh,Rh,zh,Bh,Mh,Vh,Uh,Kh,Wh,qh,Hh,Gh,Qh,Xh;const[t,e]=A.useState("ecoscan"),[n,r]=A.useState(null),[s,a]=A.useState(null),[o,i]=A.useState(null),[l,u]=A.useState(!1),[c,d]=A.useState(null),[p,f]=A.useState(!1),[m,g]=A.useState(""),w=A.useRef(null),{videoRef:y,startCamera:b,stopCamera:x,capturePhoto:k,hasPermission:_,error:$,isLoading:T}=yT(),{classify:I,isModelLoading:D,modelError:O}=LO();A.useEffect(()=>(b(),()=>x()),[]);const P=Ao.slice(0,3),V=_e.slice(0,3);async function W(M){if(!(D||O)){u(!0),d(null);try{const be=await I(M);i(be)}catch(be){console.error(be),i(null)}finally{u(!1)}}}async function K(){try{u(!0);const{base64:M}=await k(),be=new Image;be.crossOrigin="anonymous",be.onload=()=>{r(M),a(be),W(be)},be.src=M}catch(M){console.error(M),u(!1)}}function ne(M){var $u;const be=($u=M.target.files)==null?void 0:$u[0];if(!be)return;u(!0);const Bn=new FileReader;Bn.onload=()=>{const Yh=Bn.result,ba=new Image;ba.crossOrigin="anonymous",ba.onload=()=>{r(Yh),a(ba),W(ba)},ba.src=Yh},Bn.readAsDataURL(be)}const de=()=>{s&&W(s)};function re(){r(null),a(null),i(null),d(null)}async function L(){var be,Bn;const M=(Bn=(be=o==null?void 0:o.results)==null?void 0:be[0])==null?void 0:Bn.species;if(!M){d("No hay especie para guardar.");return}try{await Xl.journalEntries.add({id:`journal_${Date.now()}`,speciesId:M.id,date:new Date().toISOString()}),d("Guardado en diario")}catch{d("No se pudo guardar en diario.")}}const U=(tn=o==null?void 0:o.results)==null?void 0:tn.find(M=>["tree","plant","bush"].includes(M.species.category)),Q=($r=o==null?void 0:o.results)==null?void 0:$r.find(M=>["mammal","bird","reptile","amphibian","insect"].includes(M.species.category)),me=((Fh=o==null?void 0:o.results)==null?void 0:Fh.filter(M=>M!==U&&["tree","plant","bush"].includes(M.species.category)).slice(0,2))??[],$e=((Lh=o==null?void 0:o.results)==null?void 0:Lh.filter(M=>M!==Q&&["mammal","bird","reptile","amphibian","insect"].includes(M.species.category)).slice(0,2))??[],Bt=U??{species:P[0],confidence:0},He=Q??{species:V[0],confidence:0},hs=(Rh=o==null?void 0:o.ecosystem)!=null&&Rh.typicalSpecies?o.ecosystem.typicalSpecies.map(M=>Kd(M)).filter(Boolean):[];return v.jsxs("div",{className:"min-h-screen bg-background px-4 pb-32 pt-6 text-textLight",children:[v.jsx("div",{className:"mb-6 rounded-[28px] border border-[#C8E6C9] bg-white p-4 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-3xl bg-[#E8F5E9] text-[#2D6A4F]",children:v.jsx(Wo,{className:"h-8 w-8"})}),v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-bold text-[#2D6A4F]",children:"WildLens Identify"}),v.jsx("p",{className:"mt-1 text-sm italic text-[#4A7C59]",children:"Usa la cámara para reconocer ecosistemas y especies con IA."})]})]})}),v.jsx("div",{className:"mb-6 flex flex-wrap gap-2 rounded-full bg-white p-1 border border-[#C8E6C9]",children:FP.map(M=>{const be=t===M.id,Bn=M.icon;return v.jsxs("button",{onClick:()=>e(M.id),className:`flex min-w-[110px] items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${be?"bg-[#E8F5E9] text-[#2D6A4F] border-b-2 border-[#2D6A4F]":"text-[#9E9E9E] hover:bg-[#F8FBF0]"}`,children:[v.jsx(Bn,{className:"h-5 w-5"}),M.label]},M.id)})}),v.jsxs("section",{className:"field-card mb-6",children:[v.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-3",children:[v.jsxs("div",{children:[v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Captura tu foto"}),v.jsx("p",{className:"text-sm text-[#4A7C59]",children:"Selecciona cámara o sube una imagen para comenzar la identificación."})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[v.jsx(Un,{variant:"secondary",size:"sm",icon:v.jsx(aT,{className:"h-4 w-4"}),onClick:()=>{var M;return(M=w.current)==null?void 0:M.click()},children:"Subir foto"}),v.jsx(Un,{variant:"primary",size:"sm",icon:v.jsx(_l,{className:"h-4 w-4"}),onClick:K,disabled:T||!_,children:"Tomar foto"}),n?v.jsx(Un,{variant:"ghost",size:"sm",icon:v.jsx(Iv,{className:"h-4 w-4"}),onClick:re,children:"Nueva foto"}):null]})]}),v.jsx("input",{ref:w,type:"file",accept:"image/*",className:"hidden",onChange:ne}),v.jsx("div",{className:"relative overflow-hidden rounded-[24px] border border-[#C8E6C9] bg-[#F1F8E9] p-3",children:n?v.jsxs(v.Fragment,{children:[v.jsx("img",{src:n,alt:"Preview",className:"h-72 w-full rounded-[20px] object-cover"}),v.jsx(Un,{variant:"primary",size:"md",className:"absolute bottom-4 right-4",onClick:de,disabled:!s||l||D,children:D?"Preparando IA...":l?v.jsxs("span",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"}),"Analizando..."]}):"Analizar imagen"})]}):v.jsx("div",{className:"flex h-72 items-center justify-center rounded-[20px] border-2 border-dashed border-[#C8E6C9] bg-white",children:v.jsx("div",{className:"text-center",children:!_&&!T?v.jsxs("div",{className:"flex flex-col items-center gap-3",children:[v.jsx(_l,{className:"h-12 w-12 text-[#2D6A4F]"}),v.jsx("p",{className:"text-sm font-medium text-[#1A3326]",children:"Permite el uso de cámara"}),v.jsx("p",{className:"text-xs text-[#4A7C59]",children:"o sube una foto para identificar"}),v.jsxs("div",{className:"flex gap-2 pt-2",children:[v.jsx(Un,{variant:"primary",size:"sm",onClick:b,children:"Usar cámara"}),v.jsx(Un,{variant:"secondary",size:"sm",onClick:()=>{var M;return(M=w.current)==null?void 0:M.click()},children:"Subir foto"})]})]}):T?v.jsxs("div",{className:"flex flex-col items-center gap-3",children:[v.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-2 border-[#C8E6C9] border-t-[#2D6A4F]"}),v.jsx("p",{className:"text-sm text-[#4A7C59]",children:"Iniciando cámara..."})]}):v.jsx("div",{className:"flex h-full items-center justify-center",children:v.jsx("video",{ref:y,className:"h-full w-full rounded-[20px] bg-[#E8F5E9] object-cover",muted:!0,playsInline:!0})})})})}),$||O?v.jsx("div",{className:"mt-3 rounded-2xl bg-[#FFEBEE] p-3 text-sm text-[#E63946]",children:$||O}):null]}),D?v.jsx("div",{className:"field-card flex items-center justify-center p-10 text-sm text-[#4A7C59]",children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-t-[#2D6A4F] border-[#E8F5E9]"}),"Preparando IA local... (solo la primera vez)"]})}):l?v.jsx("div",{className:"field-card flex items-center justify-center p-10 text-sm text-[#4A7C59]",children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-t-[#2D6A4F] border-[#E8F5E9]"}),"Analizando imagen..."]})}):n&&o?v.jsxs("section",{className:"space-y-6",children:[v.jsxs("div",{className:"animate-fade-slide-up w-full",children:[t==="ecoscan"?v.jsxs("div",{className:"field-card",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[v.jsxs("div",{children:[v.jsx("div",{className:"inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] px-3 py-1 text-xs text-[#2D6A4F]",children:"Ecosistema detectado"}),v.jsx("h3",{className:"mt-4 text-2xl font-bold text-[#1A3326]",children:((zh=o.ecosystem)==null?void 0:zh.name)??"Selva tropical"}),v.jsx("p",{className:"mt-2 max-w-2xl text-sm text-[#4A7C59]",children:(Bh=o.ecosystem)==null?void 0:Bh.description})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] px-4 py-3 text-sm text-[#2D6A4F] font-medium",children:["Zona: ",(Mh=o.ecosystem)==null?void 0:Mh.zone]})]}),v.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2",children:[v.jsxs("div",{className:"rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsx("h4",{className:"text-sm font-semibold text-[#2D6A4F]",children:"Posibles especies en esta zona"}),v.jsx("div",{className:"mt-4 space-y-3",children:(hs.length?hs:V).slice(0,4).map((M,be)=>v.jsxs("div",{className:"flex items-center justify-between rounded-2xl bg-white p-3 border border-[#C8E6C9] animate-fade-slide-up",style:{animationDelay:`${be*.1}s`},children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#2D6A4F]",children:"•"}),v.jsxs("div",{children:[v.jsx("p",{className:"font-semibold text-[#1A3326]",children:M.commonName}),v.jsx("p",{className:"text-xs text-[#4A7C59]",children:M.scientificName})]})]}),M.isDangerous?v.jsxs("span",{className:"rounded-full bg-[#FFEBEE] px-2 py-1 text-[11px] font-semibold text-[#E63946]",children:["Peligro ",M.dangerLevel,"/5"]}):null]},M.id))})]}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"rounded-2xl bg-[#FFF3E0] p-4 border border-[#FFE0B2]",children:[v.jsx("h4",{className:"text-sm font-semibold text-[#F4A261]",children:"Riesgos detectados"}),v.jsx("ul",{className:"mt-3 list-disc space-y-2 pl-5 text-sm text-[#D97706]",children:(((Vh=o.ecosystem)==null?void 0:Vh.risks)??["Riesgos no disponibles"]).map(M=>v.jsx("li",{children:M},M))})]}),v.jsxs("div",{className:"rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsx("h4",{className:"text-sm font-semibold text-[#2D6A4F]",children:"Curiosidades"}),v.jsx("p",{className:"mt-3 text-sm text-[#4A7C59]",children:((Kh=(Uh=o.ecosystem)==null?void 0:Uh.curiosities)==null?void 0:Kh[0])??"Información cultural local disponible."})]}),(qh=(Wh=o.ecosystem)==null?void 0:Wh.migratory)!=null&&qh.length?v.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[v.jsx("h4",{className:"text-sm font-semibold text-[#52B788]",children:"Especies migratorias"}),v.jsx("p",{className:"mt-3 text-sm text-[#cbd5e1]",children:o.ecosystem.migratory.join(", ")})]}):null]})]})]}):null,t==="flora"?v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"field-card",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-2xl font-bold text-white",children:Bt.species.commonName}),v.jsx("p",{className:"mt-1 text-sm italic text-[#52B788]",children:Bt.species.scientificName}),v.jsxs("p",{className:"mt-2 text-sm text-[#cbd5e1]",children:["Confianza: ",Bt.confidence,"%"]})]}),v.jsxs("div",{className:"flex flex-wrap gap-2",children:[Bt.species.isEdible?v.jsx("span",{className:"rounded-full bg-[#2D6A4F] px-3 py-1 text-xs font-semibold text-white",children:"COMESTIBLE"}):null,Bt.species.isToxic?v.jsx("span",{className:"rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white",children:"⚠️ TÓXICO"}):null]})]}),v.jsx(Ml,{species:Bt.species,mode:"flora"})]}),v.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:(me.length?me:P.slice(1,3)).map((M,be)=>v.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4 animate-fade-slide-up",style:{animationDelay:`${be*.1}s`},children:[v.jsx("p",{className:"text-sm font-semibold text-white",children:M.species.commonName}),v.jsx("p",{className:"mt-2 text-xs text-[#94a3b8]",children:M.species.scientificName}),v.jsx("p",{className:"mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]",children:M.reason})]},M.species.id))})]}):null,t==="fauna"?v.jsxs("div",{className:"space-y-6",children:[He.species.isDangerous?v.jsxs("div",{className:"rounded-2xl bg-[#641E16] p-4 text-white",children:[v.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]",children:[v.jsx(Tv,{className:"h-4 w-4"})," PELIGROSO — Nivel ",He.species.dangerLevel,"/5"]}),v.jsx("p",{className:"mt-3 text-sm text-[#f8eaea]",children:(Gh=(Hh=He.species.encounterProtocol)==null?void 0:Hh[0])==null?void 0:Gh.action}),v.jsx("p",{className:"mt-2 text-sm text-[#f8eaea]/90",children:(Xh=(Qh=He.species.encounterProtocol)==null?void 0:Qh[0])==null?void 0:Xh.description})]}):null,v.jsxs("div",{className:"field-card",children:[v.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:v.jsxs("div",{children:[v.jsx("h3",{className:"text-2xl font-bold text-white",children:He.species.commonName}),v.jsx("p",{className:"mt-1 text-sm italic text-[#52B788]",children:He.species.scientificName}),v.jsxs("p",{className:"mt-2 text-sm text-[#cbd5e1]",children:["Confianza: ",He.confidence,"%"]})]})}),v.jsx(Ml,{species:He.species,mode:"fauna"})]}),v.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:($e.length?$e:V.slice(1,3)).map((M,be)=>v.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4 animate-fade-slide-up",style:{animationDelay:`${be*.1}s`},children:[v.jsx("p",{className:"text-sm font-semibold text-white",children:M.species.commonName}),v.jsx("p",{className:"mt-2 text-xs text-[#94a3b8]",children:M.species.scientificName}),v.jsx("p",{className:"mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]",children:M.reason})]},M.species.id))})]}):null]},t),v.jsx("div",{className:"rounded-2xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:v.jsxs("p",{className:"text-sm text-[#2D6A4F]",children:["🔬 ",v.jsx("strong",{children:"Identificación asistida por IA"})," · Precisión estimada basada en características visuales generales"]})}),o!=null&&o.suggestManualSelection?v.jsx("div",{className:"rounded-2xl bg-[#FFF3E0] p-4 border border-[#FFE0B2]",children:v.jsx("p",{className:"text-sm font-medium text-[#D97706]",children:"¿No es correcto? Selecciona manualmente de nuestra base de datos."})}):null,v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.jsx(Un,{variant:"primary",size:"md",onClick:L,children:"Guardar en diario"}),v.jsx(Un,{variant:"secondary",size:"md",onClick:()=>f(!p),icon:v.jsx(Q_,{className:`h-4 w-4 transition-transform ${p?"rotate-180":""}`}),children:"Seleccionar manualmente"}),c?v.jsx("p",{className:"text-sm text-[#4A7C59]",children:c}):null]}),p?v.jsxs("div",{className:"rounded-2xl bg-[#F1F8E9] p-4 border border-[#C8E6C9]",children:[v.jsx("h4",{className:"font-semibold text-[#1A3326] mb-3",children:"Buscar especie"}),v.jsx("input",{type:"text",placeholder:"Buscar por nombre común o científico...",value:m,onChange:M=>g(M.target.value),className:"w-full rounded-lg border border-[#C8E6C9] bg-white px-3 py-2 text-[#1A3326] placeholder-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"}),v.jsx("div",{className:"mt-3 max-h-96 space-y-2 overflow-y-auto",children:jO().filter(M=>!m||(M.commonName||"").toLowerCase().includes(m.toLowerCase())||(M.scientificName||"").toLowerCase().includes(m.toLowerCase())).slice(0,20).map(M=>v.jsxs("button",{onClick:()=>{i({...o,results:[{species:M,confidence:100,reason:"Selección manual"},...o.results.slice(1)]}),f(!1),g("")},className:"w-full rounded-lg bg-white p-2 text-left transition-colors hover:bg-[#E8F5E9]",children:[v.jsx("p",{className:"font-medium text-[#1A3326]",children:M.commonName}),v.jsx("p",{className:"text-xs text-[#4A7C59]",children:M.scientificName})]},M.id))})]}):null]}):null]})}function RP({frequencyData:t,isRecording:e}){const n=Array.from({length:32},(r,s)=>{const a=t?t[Math.floor(t.length/32*s)]:0,o=Math.max(2,Math.min(100,a/255*100));return{value:a,height:o}});return v.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-4",children:[v.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-textLight/70",children:"BioListen"}),v.jsx("p",{className:"text-base text-textLight",children:"Visualizador de espectro"})]}),v.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${e?"bg-red-500/15 text-red-300":"bg-green-500/10 text-emerald-300"}`,children:e?"Grabando":"Listo"})]}),v.jsx("div",{className:"flex h-24 items-end gap-1 overflow-hidden rounded-2xl bg-black/5 px-1 py-2",children:n.map((r,s)=>v.jsx("div",{className:"h-full w-full rounded-full bg-gradient-to-t from-emerald-500/80 to-cyan-400",style:{height:`${r.height}%`,opacity:r.value?1:.4}},s))})]})}function Da(t){const e=[];for(const n of t){const r=_e.find(s=>{var a,o;return((a=s.commonName)==null?void 0:a.toLowerCase().includes(n.toLowerCase()))||((o=s.scientificName)==null?void 0:o.toLowerCase().includes(n.toLowerCase()))});r&&!e.includes(r)&&e.push(r)}return e}function Xg(t,e=3){return _e.filter(r=>r.category===t).slice(0,e)}function zP(){return{analyzeAudio:A.useCallback((e,n)=>{if(!e||e.length===0)return Xg("bird",3).map((l,u)=>({species:l,confidence:40-u*8,reasoning:"Sin datos de audio. Usando especies por defecto.",suggestManualSelection:!0}));let r=0,s=0;for(let i=0;i<e.length;i++)e[i]>r&&(r=e[i],s=i);const a=s*(44100/2)/e.length,o=[];return a>8e3?_e.filter(l=>{var u,c;return l.category==="insect"||((u=l.commonName)==null?void 0:u.toLowerCase().includes("rana"))||((c=l.commonName)==null?void 0:c.toLowerCase().includes("lithobates"))}).slice(0,3).forEach((l,u)=>o.push({species:l,confidence:60-u*5,reasoning:"Frecuencia alta (Insectos/Ranas)"})):a>=3e3&&a<=8e3?Da(["Ara","Ramphastos","guacamaya","tucán"]).slice(0,3).forEach((l,u)=>o.push({species:l,confidence:70-u*5,reasoning:"Frecuencia media-alta (Aves pequeñas)"})):a>=1e3&&a<3e3?Da(["Phoenicopterus","Meleagris","pavo","flamenco"]).slice(0,3).forEach((l,u)=>o.push({species:l,confidence:75-u*5,reasoning:"Frecuencia media (Aves medianas)"})):a>=300&&a<1e3?Da(["Amazona","Nasua narica","coatí"]).slice(0,3).forEach((l,u)=>o.push({species:l,confidence:65-u*5,reasoning:"Frecuencia baja (Aves grandes/Coatí)"})):a>=80&&a<300?Da(["tapir","peccary","howler","mono","pecari"]).slice(0,3).forEach((l,u)=>o.push({species:l,confidence:60-u*5,reasoning:"Frecuencia muy baja (Mamíferos medianos)"})):Da(["jaguar","puma"]).slice(0,3).forEach((l,u)=>o.push({species:l,confidence:40-u*5,reasoning:"Frecuencia extremadamente baja (Mamífero grande)"})),o.length===0&&Xg("bird",3).forEach((l,u)=>o.push({species:l,confidence:30-u*5,reasoning:"Fallback"})),o.slice(0,3).map(i=>({...i,suggestManualSelection:i.confidence<50}))},[])}}function BP(){const t=A.useRef(null),e=A.useRef([]),n=A.useRef(null),r=A.useRef(null),s=A.useRef(null),a=A.useRef(null),o=A.useRef(null),[i,l]=A.useState(!1),[u,c]=A.useState(!1),[d,p]=A.useState(null),[f,m]=A.useState(null),[g,w]=A.useState(0),[y,b]=A.useState(null),[x,k]=A.useState(null),_=A.useRef(0),$=10,T=A.useRef(null);A.useEffect(()=>()=>{O()},[]);function I(){const P=r.current,V=s.current;P&&V&&(P.getByteFrequencyData(V),b(new Uint8Array(V)),a.current=requestAnimationFrame(I))}async function D(){k(null),p(null),m(null),w(0),_.current=0,b(null);try{const P=await navigator.mediaDevices.getUserMedia({audio:!0});o.current=P,l(!0),e.current=[];const V=new MediaRecorder(P);t.current=V,n.current=new(window.AudioContext||window.webkitAudioContext);const W=n.current.createMediaStreamSource(P);r.current=n.current.createAnalyser(),r.current.fftSize=2048,W.connect(r.current),s.current=new Uint8Array(r.current.frequencyBinCount),I(),V.ondataavailable=K=>{K.data.size>0&&e.current.push(K.data)},V.onstop=async()=>{const K=new Blob(e.current,{type:"audio/webm"});p(K);const ne=new FileReader;ne.onloadend=()=>{m(ne.result)},ne.readAsDataURL(K)},V.start(),c(!0),T.current=window.setInterval(()=>{_.current+=1,w(_.current),_.current>=$&&O()},1e3)}catch(P){k((P==null?void 0:P.message)||"Permiso de micrófono denegado o no disponible."),l(!1)}}function O(){t.current&&t.current.state!=="inactive"&&t.current.stop(),o.current&&(o.current.getTracks().forEach(P=>P.stop()),o.current=null),n.current&&(n.current.close().catch(()=>{}),n.current=null),a.current&&(cancelAnimationFrame(a.current),a.current=null),T.current&&(window.clearInterval(T.current),T.current=null),c(!1)}return{startRecording:D,stopRecording:O,isRecording:u,audioBlob:d,audioBase64:f,audioDuration:g,frequencyData:y,hasPermission:i,error:x}}function MP(){const{startRecording:t,stopRecording:e,isRecording:n,audioDuration:r,frequencyData:s,audioBlob:a,hasPermission:o,error:i}=BP(),{analyzeAudio:l}=zP(),[u,c]=A.useState(null),[d,p]=A.useState(!1),[f,m]=A.useState(null),[g,w]=A.useState(!1),[y,b]=A.useState(""),x=!!(a&&s&&!n),k=A.useMemo(()=>a?r===0?"Grabación lista":`Duración: ${r}s`:"Sin grabación",[a,r]),_=async()=>{s&&(p(!0),window.setTimeout(()=>{const T=l(s,r);c(T),p(!1)},500))},$=()=>{c(null),m(null),e()};return v.jsxs("div",{className:"min-h-screen p-4 bg-[#F8FBF0]",children:[v.jsxs("div",{className:"mx-auto max-w-4xl space-y-6",children:[v.jsx("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:v.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.4em] text-[#2D6A4F]",children:"BioListen"}),v.jsx("h2",{className:"mt-2 text-3xl font-bold text-[#1A3326]",children:"Detecta animales por su sonido"}),v.jsx("p",{className:"mt-3 max-w-2xl text-[#4A7C59]",children:"Graba hasta 10 segundos de audio en el campo y deja que WildLens ofrezca posibles especies con base en patrones de frecuencia y ritmo."})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 text-right sm:text-left border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm text-[#4A7C59]",children:"Estado"}),v.jsx("p",{className:"mt-1 text-xl font-semibold text-[#2D6A4F]",children:n?"Grabando":a?"Listo para analizar":"Esperando grabación"}),v.jsx("p",{className:"mt-2 text-sm text-[#4A7C59]",children:k})]})]})}),v.jsx(RP,{frequencyData:s,isRecording:n}),v.jsxs("div",{className:"grid gap-4 lg:grid-cols-[1.4fr_0.9fr]",children:[v.jsxs("div",{className:"rounded-3xl border border-[#C8E6C9] bg-white p-6",children:[v.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold text-[#1A3326]",children:"Grabación de campo"}),v.jsx("p",{className:"mt-2 text-[#4A7C59]",children:"Usa el micrófono de tu dispositivo para capturar sonidos de fauna y analizar su firma acústica."})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.jsx("button",{className:`rounded-3xl px-5 py-3 text-sm font-semibold transition ${n?"bg-[#E63946] text-white hover:bg-[#D62828]":"bg-[#52B788] text-white hover:bg-[#2D6A4F] animate-pulse-green"}`,onClick:n?e:t,children:n?"Detener":"Iniciar grabación"}),v.jsx("button",{className:"rounded-3xl border border-[#C8E6C9] bg-[#F1F8E9] px-5 py-3 text-sm text-[#2D6A4F] transition hover:border-[#2D6A4F]",onClick:$,children:"Reiniciar"})]})]}),v.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2",children:[v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-[#4A7C59]",children:"Permiso"}),v.jsx("p",{className:"mt-2 text-lg font-semibold text-[#2D6A4F]",children:o?"Concedido":"No solicitado"})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-[#4A7C59]",children:"Último resultado"}),v.jsx("p",{className:"mt-2 text-lg font-semibold text-[#2D6A4F]",children:u!=null&&u.length?`${u.length} sugerencias`:"Aún no analizado"})]})]}),v.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[v.jsx("button",{className:"rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50",onClick:_,disabled:!x||d,children:d?v.jsxs("span",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"}),"Procesando audio..."]}):"Analizar sonido"}),i?v.jsx("span",{className:"text-sm text-rose-300",children:i}):null]})]}),v.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-6",children:[v.jsx("h3",{className:"text-xl font-bold text-white",children:"Consejos rápidos"}),v.jsxs("ul",{className:"mt-4 space-y-3 text-textLight/80",children:[v.jsx("li",{children:"• Mantén el micrófono estable y apunta hacia la fuente del sonido."}),v.jsx("li",{children:"• Graba en intervalos cortos para capturar solo la llamada animal."}),v.jsx("li",{children:"• Usa el botón de análisis después de detener la grabación."})]})]})]}),u?v.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-6",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-2xl font-bold text-white",children:"Resultados sugeridos"}),v.jsx("p",{className:"mt-2 text-textLight/80",children:"WildLens propone especies según el perfil de audio grabado."})]}),v.jsx("span",{className:"rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200",children:"Confianza aproximada"})]}),v.jsx("div",{className:"mt-6 grid gap-4 lg:grid-cols-3",children:u.map((T,I)=>v.jsxs("button",{type:"button",onClick:()=>m(T.species),className:"rounded-3xl border border-white/10 bg-[#0f172a] p-5 text-left transition hover:border-cyan-400/30 animate-fade-slide-up",style:{animationDelay:`${I*.1}s`},children:[v.jsxs("div",{className:"flex items-center justify-between gap-3",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-lg font-semibold text-white",children:T.species.commonName}),v.jsx("p",{className:"mt-1 text-sm text-textLight/70",children:T.species.scientificName})]}),v.jsxs("span",{className:"rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-textLight",children:[T.confidence,"%"]})]}),v.jsx("p",{className:"mt-4 text-sm leading-6 text-textLight/70",children:T.reasoning})]},T.species.id))})]}):null]}),f?v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:v.jsxs("div",{className:"relative w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-2xl",children:[v.jsx("button",{className:"absolute right-5 top-5 rounded-full bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10",onClick:()=>m(null),children:"Cerrar"}),v.jsx(Ml,{species:f,mode:"fauna"})]})}):null]})}const VP=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];function Yg(t){const e=new Date(t);return Number.isNaN(e.getTime())?t:`${e.getDate()} de ${VP[e.getMonth()]}, ${e.getFullYear()}`}function UP(){const t=xv(),[e,n]=A.useState([]),[r,s]=A.useState(!0),[a,o]=A.useState("all"),[i,l]=A.useState(null);A.useEffect(()=>{let f=!0;return Xl.journalEntries.toArray().then(m=>{if(!f)return;const g=m.sort((w,y)=>new Date(y.date).getTime()-new Date(w.date).getTime());n(g)}).catch(()=>{f&&n([])}).finally(()=>{f&&s(!1)}),()=>{f=!1}},[]);const u=A.useMemo(()=>e.filter(f=>{var g;const m=f.speciesId?Kd(f.speciesId):void 0;return m?a==="all"?!0:((g=m.category)==null?void 0:g.toLowerCase())===a:!1}),[a,e]),c=e.length,d=new Set(e.map(f=>f.speciesId)).size,p=c?Yg(e[0].date):null;return v.jsx("div",{className:"min-h-screen p-4 bg-[#F8FBF0]",children:v.jsxs("div",{className:"mx-auto max-w-6xl space-y-6",children:[v.jsx("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:v.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.4em] text-[#2D6A4F]",children:"Mi Diario de Campo"}),v.jsxs("h1",{className:"mt-3 text-3xl font-bold text-[#1A3326]",children:[c," avistamientos registrados"]})]}),v.jsx("button",{type:"button",onClick:()=>t("/identify"),className:"rounded-3xl bg-[#52B788] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]",children:"Ir a Identificar"})]})}),r?v.jsx("div",{className:"flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#C8E6C9] bg-white",children:v.jsxs("div",{className:"flex flex-col items-center gap-4",children:[v.jsx("div",{className:"h-14 w-14 animate-spin rounded-full border-4 border-[#E8F5E9] border-t-[#2D6A4F]"}),v.jsx("p",{className:"text-lg text-[#4A7C59]",children:"Cargando tus registros..."})]})}):u.length===0?v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-10 text-center",children:[v.jsx(Y_,{className:"mx-auto h-20 w-20 text-[#2D6A4F]"}),v.jsx("h2",{className:"mt-6 text-3xl font-bold text-[#1A3326]",children:"Tu diario está vacío"}),v.jsx("p",{className:"mt-3 max-w-2xl mx-auto text-[#4A7C59]",children:"Identifica especies con EcoScan, FloraID o FaunaID para guardar tus avistamientos aquí."}),v.jsx("button",{type:"button",onClick:()=>t("/identify"),className:"mt-8 rounded-3xl bg-[#52B788] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]",children:"Ir a Identificar"})]}):v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6",children:v.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-[#4A7C59]",children:"Filtrar"}),v.jsx("div",{className:"mt-4 flex flex-wrap gap-3",children:["all","fauna","flora"].map(f=>v.jsx("button",{type:"button",onClick:()=>o(f),className:`rounded-full px-4 py-2 text-sm font-semibold transition ${a===f?"bg-[#2D6A4F] text-white":"bg-[#F1F8E9] text-[#2D6A4F] hover:bg-[#E8F5E9]"}`,children:f==="all"?"Todos":f==="fauna"?"Fauna":"Flora"},f))})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 text-sm text-[#4A7C59] border border-[#C8E6C9]",children:[v.jsxs("p",{children:["Total de entradas: ",v.jsx("span",{className:"font-semibold text-[#2D6A4F]",children:u.length})]}),v.jsxs("p",{className:"mt-2",children:["Especies únicas: ",v.jsx("span",{className:"font-semibold text-[#2D6A4F]",children:d})]}),v.jsxs("p",{className:"mt-2",children:["Último registro: ",v.jsx("span",{className:"font-semibold text-[#2D6A4F]",children:p})]})]})]})}),v.jsx("div",{className:"grid gap-6",children:u.map(f=>{const m=f.speciesId?Kd(f.speciesId):void 0;return v.jsx("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)] border-l-4 border-l-[#2D6A4F]",children:v.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",children:[v.jsxs("div",{className:"flex-1",children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.24em] text-[#2D6A4F]",children:Yg(f.date)}),v.jsxs("div",{className:"mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-xl font-bold text-[#1A3326]",children:(m==null?void 0:m.commonName)??"Especie desconocida"}),m!=null&&m.scientificName?v.jsx("p",{className:"text-sm italic text-[#4A7C59]",children:m.scientificName}):null]}),m?v.jsx("span",{className:"rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F]",children:m.category==="flora"?"Flora":"Fauna"}):null]}),f.location?v.jsxs("div",{className:"mt-4 flex items-center gap-2 text-[#4A7C59]",children:[v.jsx(gu,{className:"h-4 w-4"}),v.jsxs("span",{children:[f.location.lat.toFixed(4),", ",f.location.lng.toFixed(4)]})]}):null]}),v.jsxs("div",{className:"grid gap-3 sm:auto-rows-min sm:w-72",children:[f.photoUrl?v.jsx("img",{src:f.photoUrl,alt:(m==null?void 0:m.commonName)??"Registro",className:"h-40 w-full rounded-3xl object-cover"}):v.jsx("div",{className:"flex h-40 items-center justify-center rounded-3xl bg-white/5 text-sm text-textLight/70",children:"Sin foto"}),v.jsxs("button",{type:"button",onClick:()=>m&&l(m),className:"inline-flex items-center justify-center gap-2 rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400",children:[v.jsx(Z_,{className:"h-4 w-4"})," Ver ficha"]})]})]})},f.id)})})]}),i?v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:v.jsxs("div",{className:"relative w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-2xl",children:[v.jsx("button",{type:"button",className:"absolute right-5 top-5 rounded-full bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10",onClick:()=>l(null),children:"Cerrar"}),v.jsx(Ml,{species:i,mode:i.category==="flora"?"flora":"fauna"})]})}):null]})})}async function KP(t){return{answer:"WildLens Demo: Se recomienda mantener vigilancia en poblaciones de jaguar y flora endémica. Por ejemplo, el jaguar (Panthera onca) está listado como EN en la península.",sources:["CONABIO","IUCN Red List 2024"],confidence:.78}}function Jg(t){return t.toLowerCase()}function WP(t){const e=t.split(/\n|\.|;/).map(r=>r.trim());let n=0;return e.forEach(r=>{const s=r.match(/(.+?)\s*\(?\s*(LC|NT|VU|EN|CR)\s*\)?/i);if(s){const a=s[1].trim().toLowerCase(),o=s[2].toUpperCase(),i=DN.find(l=>Jg(l.commonName||"").includes(a)||Jg(l.scientificName||"").includes(a));i&&i.conservationStatus!==o&&(i.conservationStatus=o,n+=1)}}),n}async function qP(){const t=await KP();return{updated:WP(t.answer),timestamp:new Date,sources:t.sources}}async function HP(t){return t.toLowerCase().includes("selva")?{alert:"Actividad de jaguar reportada en zona norte de Calakmul. Mantén distancia si avistas huellas frescas.",severity:"medium",source:"CONANP Campeche 2024"}:t.toLowerCase().includes("costa")?{alert:"Aumento de corrientes marinas y nidos de tortuga en la costa sur. Respeta las áreas protegidas.",severity:"low",source:"CONANP Campeche 2024"}:{alert:"Monitorea la calidad hídrica en humedales y evita alterar la vegetación ribereña.",severity:"low",source:"CONABIO 2024"}}function GP({lastSync:t,isSyncing:e,isOnline:n}){const r=t?t.toLocaleString("es-MX",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}):null,s=e?"🔄 Sincronizando con Foundry IQ...":n?"🔬 Foundry IQ · Modo Demo":"📴 Modo offline · Datos locales",a=e?"bg-sky-500 text-black animate-pulse":n?"bg-blue-500 text-black":"bg-slate-600 text-white";return v.jsxs("div",{className:`inline-flex flex-col rounded-3xl px-4 py-3 text-sm font-semibold ${a}`,children:[v.jsx("span",{children:s}),t&&n&&!e?v.jsxs("span",{className:"mt-1 text-xs font-normal text-black/80",children:["Última sincronización: ",r]}):null]})}function QP(){const[t,e]=A.useState(0),[n,r]=A.useState(null),[s,a]=A.useState(!1),[o,i]=A.useState(""),[l,u]=A.useState([]),[c,d]=A.useState(null),[p,f]=A.useState(!1),m="v0.1.0",{zone:g,isOnline:w}=A.useContext(ff);A.useEffect(()=>{Xl.journalEntries.count().then(x=>e(x))},[]),A.useEffect(()=>{(async()=>{const k=(g==null?void 0:g.name)??"Campeche";try{const _=await HP(k);d(_)}catch{d(null)}})()},[g,w]);const y=async()=>{a(!0),i("");try{const x=await qP();r(x.timestamp),u(x.sources),i(`${x.updated} especies actualizadas · Fuentes: ${x.sources.join(", ")}`)}catch{i("No se pudo sincronizar. Usa el modo offline o verifica tu conexión.")}finally{a(!1)}},b=async()=>{window.confirm("¿Seguro que quieres borrar todo tu diario de campo?")&&(await Xl.journalEntries.clear(),alert("Diario borrado correctamente."))};return v.jsx("div",{className:"min-h-screen p-4 bg-[#F8FBF0]",children:v.jsxs("div",{className:"mx-auto max-w-5xl space-y-6",children:[v.jsx("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:v.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-sm uppercase tracking-[0.4em] text-[#2D6A4F]",children:"Configuración"}),v.jsx("h1",{className:"mt-3 text-3xl font-bold text-[#1A3326]",children:"WildLens"}),v.jsx("p",{className:"mt-2 text-[#4A7C59]",children:"Explora biodiversidad en Campeche incluso sin conexión."})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 text-right text-sm text-[#4A7C59] border border-[#C8E6C9]",children:[v.jsx("p",{className:"font-semibold text-[#2D6A4F]",children:m}),v.jsx("p",{children:"Edición de Hackathon Agents League 2026"})]})]})}),v.jsxs("div",{className:"grid gap-6 xl:grid-cols-2",children:[v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:[v.jsxs("div",{className:"flex items-center gap-3 text-[#2D6A4F]",children:[v.jsx(gu,{className:"h-5 w-5"}),v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Región"})]}),v.jsx("p",{className:"mt-4 text-[#4A7C59]",children:"Campeche, México"})]}),v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:[v.jsxs("div",{className:"flex items-center gap-3 text-[#2D6A4F]",children:[v.jsx(J_,{className:"h-5 w-5"}),v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Base de datos"})]}),v.jsxs("div",{className:"mt-4 grid gap-3",children:[v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Fauna"}),v.jsx("p",{className:"mt-2 text-2xl font-semibold text-[#2D6A4F]",children:_e.length})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Flora"}),v.jsx("p",{className:"mt-2 text-2xl font-semibold text-[#2D6A4F]",children:Ao.length})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Ecosistemas"}),v.jsx("p",{className:"mt-2 text-2xl font-semibold text-[#2D6A4F]",children:qi.length})]})]})]})]}),v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:[v.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-3 text-[#2D6A4F]",children:[v.jsx(Cv,{className:"h-5 w-5"}),v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Foundry IQ"})]}),v.jsx("p",{className:"mt-3 text-[#4A7C59]",children:"Sincroniza datos científicos con WildLens y mantén el catálogo actualizado."})]}),v.jsx(GP,{lastSync:n,isSyncing:s,isOnline:w})]}),v.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-[1.5fr_0.9fr]",children:[v.jsxs("div",{className:"rounded-3xl bg-[#F1F8E9] p-5 text-[#4A7C59] border border-[#C8E6C9]",children:[v.jsxs("button",{type:"button",onClick:y,className:"inline-flex items-center gap-2 rounded-3xl bg-[#52B788] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2D6A4F]",children:[v.jsx(Iv,{className:"h-4 w-4"})," Sincronizar ahora"]}),o?v.jsx("p",{className:"mt-4 text-sm text-[#1A3326]",children:o}):null,v.jsxs("div",{className:"mt-4 rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Alerta ecológica"}),v.jsx("p",{className:"mt-2 text-[#1A3326]",children:(c==null?void 0:c.alert)||"Sin alertas disponibles por el momento."}),c?v.jsxs("p",{className:"mt-2 text-xs text-[#4A7C59]",children:[c.source," · ",c.severity.toUpperCase()]}):null]})]}),v.jsxs("div",{className:"rounded-3xl bg-[#F1F8E9] p-5 text-[#4A7C59] border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Fuentes científicas"}),v.jsx("button",{type:"button",onClick:()=>f(x=>!x),className:"mt-4 rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-[#2D6A4F] transition hover:bg-[#E8F5E9] border border-[#C8E6C9]",children:p?"Ocultar fuentes":"Mostrar fuentes"}),p?v.jsx("ul",{className:"mt-4 space-y-2 text-sm text-[#4A7C59]",children:l.length>0?l.map(x=>v.jsx("li",{className:"rounded-2xl bg-white p-3 border border-[#C8E6C9]",children:x},x)):v.jsx("li",{className:"rounded-2xl bg-white p-3 border border-[#C8E6C9]",children:"No hay fuentes registradas aún."})}):null]})]})]}),v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:[v.jsxs("div",{className:"flex items-center gap-3 text-[#2D6A4F]",children:[v.jsx(rT,{className:"h-5 w-5"}),v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Acerca de"})]}),v.jsx("p",{className:"mt-4 text-[#4A7C59]",children:"WildLens es un proyecto de ciencia ciudadana que combina inteligencia artificial con biodiversidad. Desarrollado para el Hackathon Agents League 2026."}),v.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2",children:[v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Powered by"}),v.jsx("p",{className:"mt-2 text-[#2D6A4F] font-semibold",children:"Foundry IQ"})]}),v.jsxs("div",{className:"rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("p",{className:"text-sm uppercase text-[#4A7C59]",children:"Asistente"}),v.jsx("p",{className:"mt-2 text-[#2D6A4F] font-semibold",children:"GitHub Copilot"})]})]})]}),v.jsxs("div",{className:"grid gap-6 xl:grid-cols-2",children:[v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:[v.jsxs("div",{className:"flex items-center gap-3 text-[#2D6A4F]",children:[v.jsx(iT,{className:"h-5 w-5"}),v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Estado offline"})]}),v.jsxs("div",{className:"mt-4 flex items-center gap-3 rounded-3xl bg-[#E8F5E9] p-4 border border-[#C8E6C9]",children:[v.jsx("span",{className:`inline-flex h-3.5 w-3.5 rounded-full ${w?"bg-[#52B788]":"bg-[#C8E6C9]"}`}),v.jsx("p",{className:"text-[#4A7C59]",children:w?"Disponible sin internet":"Offline activado"})]})]}),v.jsxs("div",{className:"rounded-[2rem] border border-[#C8E6C9] bg-white p-6 shadow-[0_2px_8px_rgba(45,106,79,0.08)]",children:[v.jsxs("div",{className:"flex items-center gap-3 text-[#2D6A4F]",children:[v.jsx(nT,{className:"h-5 w-5"}),v.jsx("h2",{className:"text-xl font-semibold text-[#1A3326]",children:"Diario"})]}),v.jsxs("p",{className:"mt-4 text-[#4A7C59]",children:["Entradas guardadas: ",v.jsx("span",{className:"font-semibold text-[#2D6A4F]",children:t})]}),v.jsx("button",{type:"button",onClick:b,className:"mt-6 rounded-3xl bg-rose-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-rose-400",children:"Limpiar diario"})]})]})]})})}function XP(){const[t,e]=A.useState(typeof navigator<"u"?navigator.onLine:!0);return A.useEffect(()=>{const n=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",n),window.addEventListener("offline",r),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}},[]),{isOnline:t}}function YP(){const t=pT(),{isOnline:e}=XP(),[n,r]=A.useState(null),s=A.useRef(!0);return A.useEffect(()=>{if(s.current){s.current=!1;return}r(e?"🔗 Conectado — sincronizando con Foundry IQ":"📴 Modo campo activado — sin internet")},[e]),A.useEffect(()=>{if(!n)return;const a=window.setTimeout(()=>r(null),3e3);return()=>window.clearTimeout(a)},[n]),v.jsx(ff.Provider,{value:{...t,isOnline:e},children:v.jsxs("div",{className:"min-h-screen bg-background text-textLight",children:[n?v.jsx("div",{className:"fixed inset-x-0 top-4 z-50 mx-auto max-w-3xl rounded-3xl bg-slate-900/95 px-6 py-3 text-center text-sm text-white shadow-xl shadow-black/30",children:n}):null,v.jsxs(I_,{children:[v.jsx(vs,{path:"/",element:v.jsx(gT,{})}),v.jsx(vs,{path:"/identify",element:v.jsx(LP,{})}),v.jsx(vs,{path:"/listen",element:v.jsx(MP,{})}),v.jsx(vs,{path:"/journal",element:v.jsx(UP,{})}),v.jsx(vs,{path:"/settings",element:v.jsx(QP,{})})]}),v.jsx(Dv,{})]})})}dv(document.getElementById("root")).render(v.jsx(wp.StrictMode,{children:v.jsx(z_,{children:v.jsx(YP,{})})}));
