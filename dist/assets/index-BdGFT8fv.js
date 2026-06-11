var G2=Object.defineProperty;var Q2=(t,e,n)=>e in t?G2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Nu=(t,e,n)=>Q2(t,typeof e!="symbol"?e+"":e,n);function Y2(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function J2(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Bg={exports:{}},Kl={},Mg={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),Z2=Symbol.for("react.portal"),eN=Symbol.for("react.fragment"),tN=Symbol.for("react.strict_mode"),nN=Symbol.for("react.profiler"),rN=Symbol.for("react.provider"),sN=Symbol.for("react.context"),aN=Symbol.for("react.forward_ref"),oN=Symbol.for("react.suspense"),iN=Symbol.for("react.memo"),lN=Symbol.for("react.lazy"),Mh=Symbol.iterator;function uN(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var Vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ug=Object.assign,Kg={};function la(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||Vg}la.prototype.isReactComponent={};la.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};la.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wg(){}Wg.prototype=la.prototype;function dp(t,e,n){this.props=t,this.context=e,this.refs=Kg,this.updater=n||Vg}var pp=dp.prototype=new Wg;pp.constructor=dp;Ug(pp,la.prototype);pp.isPureReactComponent=!0;var Vh=Array.isArray,qg=Object.prototype.hasOwnProperty,fp={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var r,s={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)qg.call(e,r)&&!Hg.hasOwnProperty(r)&&(s[r]=e[r]);var i=arguments.length-2;if(i===1)s.children=n;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)s[r]===void 0&&(s[r]=i[r]);return{$$typeof:jo,type:t,key:a,ref:o,props:s,_owner:fp.current}}function cN(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function dN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dN(""+t.key):e.toString(36)}function Ei(t,e,n,r,s){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case Z2:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Su(o,0):r,Vh(s)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),Ei(s,e,n,"",function(u){return u})):s!=null&&(hp(s)&&(s=cN(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Uh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Vh(t))for(var i=0;i<t.length;i++){a=t[i];var l=r+Su(a,i);o+=Ei(a,e,n,l,s)}else if(l=uN(t),typeof l=="function")for(t=l.call(t),i=0;!(a=t.next()).done;)a=a.value,l=r+Su(a,i++),o+=Ei(a,e,n,l,s);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ei(t,e,n){if(t==null)return t;var r=[],s=0;return Ei(t,r,"","",function(a){return e.call(n,a,s++)}),r}function pN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},Ti={transition:null},fN={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:fp};function Qg(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ei,forEach:function(t,e,n){ei(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ei(t,function(){e++}),e},toArray:function(t){return ei(t,function(e){return e})||[]},only:function(t){if(!hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=la;J.Fragment=eN;J.Profiler=nN;J.PureComponent=dp;J.StrictMode=tN;J.Suspense=oN;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fN;J.act=Qg;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ug({},t.props),s=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=fp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(l in e)qg.call(e,l)&&!Hg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&i!==void 0?i[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:jo,type:t.type,key:s,ref:a,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:sN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rN,_context:t},t.Consumer=t};J.createElement=Gg;J.createFactory=function(t){var e=Gg.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:aN,render:t}};J.isValidElement=hp;J.lazy=function(t){return{$$typeof:lN,_payload:{_status:-1,_result:t},_init:pN}};J.memo=function(t,e){return{$$typeof:iN,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Ti.transition;Ti.transition={};try{t()}finally{Ti.transition=e}};J.unstable_act=Qg;J.useCallback=function(t,e){return st.current.useCallback(t,e)};J.useContext=function(t){return st.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return st.current.useDeferredValue(t)};J.useEffect=function(t,e){return st.current.useEffect(t,e)};J.useId=function(){return st.current.useId()};J.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return st.current.useMemo(t,e)};J.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};J.useRef=function(t){return st.current.useRef(t)};J.useState=function(t){return st.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return st.current.useTransition()};J.version="18.3.1";Mg.exports=J;var D=Mg.exports;const Yg=X2(D),hN=Y2({__proto__:null,default:Yg},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mN=D,gN=Symbol.for("react.element"),yN=Symbol.for("react.fragment"),vN=Object.prototype.hasOwnProperty,bN=mN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wN={key:!0,ref:!0,__self:!0,__source:!0};function Xg(t,e,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vN.call(e,r)&&!wN.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:gN,type:t,key:a,ref:o,props:s,_owner:bN.current}}Kl.Fragment=yN;Kl.jsx=Xg;Kl.jsxs=Xg;Bg.exports=Kl;var N=Bg.exports,Jg={exports:{}},St={},Zg={exports:{}},ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,M){var Q=L.length;L.push(M);e:for(;0<Q;){var me=Q-1>>>1,Ee=L[me];if(0<s(Ee,M))L[me]=M,L[Q]=Ee,Q=me;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],Q=L.pop();if(Q!==M){L[0]=Q;e:for(var me=0,Ee=L.length,Tr=Ee>>>1;me<Tr;){var Xt=2*(me+1)-1,fs=L[Xt],Jt=Xt+1,$r=L[Jt];if(0>s(fs,Q))Jt<Ee&&0>s($r,fs)?(L[me]=$r,L[Jt]=Q,me=Jt):(L[me]=fs,L[Xt]=Q,me=Xt);else if(Jt<Ee&&0>s($r,Q))L[me]=$r,L[Jt]=Q,me=Jt;else break e}}return M}function s(L,M){var Q=L.sortIndex-M.sortIndex;return Q!==0?Q:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();t.unstable_now=function(){return o.now()-i}}var l=[],u=[],c=1,d=null,p=3,h=!1,g=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function k(L){if(v=!1,x(L),!g)if(n(l)!==null)g=!0,ce(E);else{var M=n(u);M!==null&&ee(k,M.startTime-L)}}function E(L,M){g=!1,v&&(v=!1,m(C),C=-1),h=!0;var Q=p;try{for(x(M),d=n(l);d!==null&&(!(d.expirationTime>M)||L&&!j());){var me=d.callback;if(typeof me=="function"){d.callback=null,p=d.priorityLevel;var Ee=me(d.expirationTime<=M);M=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(l)&&r(l),x(M)}else r(l);d=n(l)}if(d!==null)var Tr=!0;else{var Xt=n(u);Xt!==null&&ee(k,Xt.startTime-M),Tr=!1}return Tr}finally{d=null,p=Q,h=!1}}var $=!1,I=null,C=-1,A=5,P=-1;function j(){return!(t.unstable_now()-P<A)}function U(){if(I!==null){var L=t.unstable_now();P=L;var M=!0;try{M=I(!0,L)}finally{M?W():($=!1,I=null)}}else $=!1}var W;if(typeof y=="function")W=function(){y(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,re=V.port2;V.port1.onmessage=U,W=function(){re.postMessage(null)}}else W=function(){b(U,0)};function ce(L){I=L,$||($=!0,W())}function ee(L,M){C=b(function(){L(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,ce(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var Q=p;p=M;try{return L()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=p;p=L;try{return M()}finally{p=Q}},t.unstable_scheduleCallback=function(L,M,Q){var me=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?me+Q:me):Q=me,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Q+Ee,L={id:c++,callback:M,priorityLevel:L,startTime:Q,expirationTime:Ee,sortIndex:-1},Q>me?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(v?(m(C),C=-1):v=!0,ee(k,Q-me))):(L.sortIndex=Ee,e(l,L),g||h||(g=!0,ce(E))),L},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(L){var M=p;return function(){var Q=p;p=M;try{return L.apply(this,arguments)}finally{p=Q}}}})(ey);Zg.exports=ey;var xN=Zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kN=D,kt=xN;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ty=new Set,eo={};function ls(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(eo[t]=e,t=0;t<e.length;t++)ty.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,NN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh={},Wh={};function SN(t){return pc.call(Wh,t)?!0:pc.call(Kh,t)?!1:NN.test(t)?Wh[t]=!0:(Kh[t]=!0,!1)}function _N(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EN(t,e,n,r){if(e===null||typeof e>"u"||_N(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,s,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);Ue[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);Ue[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);Ue[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function yp(t,e,n,r){var s=Ue.hasOwnProperty(e)?Ue[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EN(e,n,s,r)&&(n=null),r||s===null?SN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=kN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),ry=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),wp=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),qh=Symbol.iterator;function va(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,_u;function Aa(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||""}return`
`+_u+t}var Eu=!1;function Tu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,i=a.length-1;1<=o&&0<=i&&s[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(s[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||s[o]!==a[i]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=i);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Aa(t):""}function TN(t){switch(t.tag){case 5:return Aa(t.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case ks:return"Portal";case fc:return"Profiler";case vp:return"StrictMode";case hc:return"Suspense";case mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ry:return(t.displayName||"Context")+".Consumer";case ny:return(t._context.displayName||"Context")+".Provider";case bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wp:return e=t.displayName||null,e!==null?e:gc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return gc(t(e))}catch{}}return null}function $N(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(e);case 8:return e===vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ay(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function IN(t){var e=ay(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ni(t){t._valueTracker||(t._valueTracker=IN(t))}function oy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ay(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yc(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iy(t,e){e=e.checked,e!=null&&yp(t,"checked",e,!1)}function vc(t,e){iy(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||Yi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Oa(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function ly(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function uy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?uy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ri,cy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ri.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CN=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){CN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function dy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function py(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=dy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var AN=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kc(t,e){if(e){if(AN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Nc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _c=null,js=null,Rs=null;function Xh(t){if(t=Fo(t)){if(typeof _c!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Ql(e),_c(t.stateNode,t.type,e))}}function fy(t){js?Rs?Rs.push(t):Rs=[t]:js=t}function hy(){if(js){var t=js,e=Rs;if(Rs=js=null,Xh(t),e)for(t=0;t<e.length;t++)Xh(e[t])}}function my(t,e){return t(e)}function gy(){}var $u=!1;function yy(t,e,n){if($u)return t(e,n);$u=!0;try{return my(t,e,n)}finally{$u=!1,(js!==null||Rs!==null)&&(gy(),hy())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Ql(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Ec=!1;if(In)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Ec=!1}function ON(t,e,n,r,s,a,o,i,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ba=!1,Xi=null,Ji=!1,Tc=null,DN={onError:function(t){Ba=!0,Xi=t}};function PN(t,e,n,r,s,a,o,i,l){Ba=!1,Xi=null,ON.apply(DN,arguments)}function jN(t,e,n,r,s,a,o,i,l){if(PN.apply(this,arguments),Ba){if(Ba){var u=Xi;Ba=!1,Xi=null}else throw Error(R(198));Ji||(Ji=!0,Tc=u)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jh(t){if(us(t)!==t)throw Error(R(188))}function RN(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Jh(s),t;if(a===r)return Jh(s),e;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,i=s.child;i;){if(i===n){o=!0,n=s,r=a;break}if(i===r){o=!0,r=s,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,r=s;break}if(i===r){o=!0,r=a,n=s;break}i=i.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function by(t){return t=RN(t),t!==null?wy(t):null}function wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wy(t);if(e!==null)return e;t=t.sibling}return null}var xy=kt.unstable_scheduleCallback,Zh=kt.unstable_cancelCallback,LN=kt.unstable_shouldYield,FN=kt.unstable_requestPaint,Te=kt.unstable_now,zN=kt.unstable_getCurrentPriorityLevel,kp=kt.unstable_ImmediatePriority,ky=kt.unstable_UserBlockingPriority,Zi=kt.unstable_NormalPriority,BN=kt.unstable_LowPriority,Ny=kt.unstable_IdlePriority,Wl=null,rn=null;function MN(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:KN,VN=Math.log,UN=Math.LN2;function KN(t){return t>>>=0,t===0?32:31-(VN(t)/UN|0)|0}var si=64,ai=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var i=o&~s;i!==0?r=Da(i):(a&=o,a!==0&&(r=Da(a)))}else o=n&~s,o!==0?r=Da(o):a!==0&&(r=Da(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,a=e&-e,s>=a||s===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),s=1<<n,r|=t[n],e&=~s;return r}function WN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Ut(a),i=1<<o,l=s[o];l===-1?(!(i&n)||i&r)&&(s[o]=WN(i,e)):l<=e&&(t.expiredLanes|=i),a&=~i}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sy(){var t=si;return si<<=1,!(si&4194240)&&(si=64),t}function Iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function HN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Ut(n),a=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~a}}function Np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var oe=0;function _y(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ey,Sp,Ty,$y,Iy,Ic=!1,oi=[],Zn=null,er=null,tr=null,ro=new Map,so=new Map,Wn=[],GN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function wa(t,e,n,r,s,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},e!==null&&(e=Fo(e),e!==null&&Sp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function QN(t,e,n,r,s){switch(e){case"focusin":return Zn=wa(Zn,t,e,n,r,s),!0;case"dragenter":return er=wa(er,t,e,n,r,s),!0;case"mouseover":return tr=wa(tr,t,e,n,r,s),!0;case"pointerover":var a=s.pointerId;return ro.set(a,wa(ro.get(a)||null,t,e,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,so.set(a,wa(so.get(a)||null,t,e,n,r,s)),!0}return!1}function Cy(t){var e=Rr(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=vy(n),e!==null){t.blockedOn=e,Iy(t.priority,function(){Ty(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sc=r,n.target.dispatchEvent(r),Sc=null}else return e=Fo(n),e!==null&&Sp(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){$i(t)&&n.delete(e)}function YN(){Ic=!1,Zn!==null&&$i(Zn)&&(Zn=null),er!==null&&$i(er)&&(er=null),tr!==null&&$i(tr)&&(tr=null),ro.forEach(tm),so.forEach(tm)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,YN)))}function ao(t){function e(s){return xa(s,t)}if(0<oi.length){xa(oi[0],t);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&xa(Zn,t),er!==null&&xa(er,t),tr!==null&&xa(tr,t),ro.forEach(e),so.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)Cy(n),n.blockedOn===null&&Wn.shift()}var Ls=Rn.ReactCurrentBatchConfig,tl=!0;function XN(t,e,n,r){var s=oe,a=Ls.transition;Ls.transition=null;try{oe=1,_p(t,e,n,r)}finally{oe=s,Ls.transition=a}}function JN(t,e,n,r){var s=oe,a=Ls.transition;Ls.transition=null;try{oe=4,_p(t,e,n,r)}finally{oe=s,Ls.transition=a}}function _p(t,e,n,r){if(tl){var s=Cc(t,e,n,r);if(s===null)zu(t,e,r,nl,n),em(t,r);else if(QN(s,t,e,n,r))r.stopPropagation();else if(em(t,r),e&4&&-1<GN.indexOf(t)){for(;s!==null;){var a=Fo(s);if(a!==null&&Ey(a),a=Cc(t,e,n,r),a===null&&zu(t,e,r,nl,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else zu(t,e,r,null,n)}}var nl=null;function Cc(t,e,n,r){if(nl=null,t=xp(r),t=Rr(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function Ay(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zN()){case kp:return 1;case ky:return 4;case Zi:case BN:return 16;case Ny:return 536870912;default:return 16}default:return 16}}var Gn=null,Ep=null,Ii=null;function Oy(){if(Ii)return Ii;var t,e=Ep,n=e.length,r,s="value"in Gn?Gn.value:Gn.textContent,a=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[a-r];r++);return Ii=s.slice(t,1<r?1-r:void 0)}function Ci(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ii(){return!0}function nm(){return!1}function _t(t){function e(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(n=t[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ii:nm,this.isPropagationStopped=nm,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=_t(ua),Lo=ke({},ua,{view:0,detail:0}),ZN=_t(Lo),Cu,Au,ka,ql=ke({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ka&&(ka&&t.type==="mousemove"?(Cu=t.screenX-ka.screenX,Au=t.screenY-ka.screenY):Au=Cu=0,ka=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),rm=_t(ql),eS=ke({},ql,{dataTransfer:0}),tS=_t(eS),nS=ke({},Lo,{relatedTarget:0}),Ou=_t(nS),rS=ke({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=_t(rS),aS=ke({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=_t(aS),iS=ke({},ua,{data:0}),sm=_t(iS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cS[t])?!!e[t]:!1}function $p(){return dS}var pS=ke({},Lo,{key:function(t){if(t.key){var e=lS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ci(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?Ci(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ci(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=_t(pS),hS=ke({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=_t(hS),mS=ke({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),gS=_t(mS),yS=ke({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=_t(yS),bS=ke({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=_t(bS),xS=[9,13,27,32],Ip=In&&"CompositionEvent"in window,Ma=null;In&&"documentMode"in document&&(Ma=document.documentMode);var kS=In&&"TextEvent"in window&&!Ma,Dy=In&&(!Ip||Ma&&8<Ma&&11>=Ma),om=" ",im=!1;function Py(t,e){switch(t){case"keyup":return xS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function NS(t,e){switch(t){case"compositionend":return jy(e);case"keypress":return e.which!==32?null:(im=!0,om);case"textInput":return t=e.data,t===om&&im?null:t;default:return null}}function SS(t,e){if(Ss)return t==="compositionend"||!Ip&&Py(t,e)?(t=Oy(),Ii=Ep=Gn=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dy&&e.locale!=="ko"?null:e.data;default:return null}}var _S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_S[t.type]:e==="textarea"}function Ry(t,e,n,r){fy(r),e=rl(e,"onChange"),0<e.length&&(n=new Tp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Va=null,oo=null;function ES(t){Hy(t,0)}function Hl(t){var e=Ts(t);if(oy(e))return t}function TS(t,e){if(t==="change")return e}var Ly=!1;if(In){var Du;if(In){var Pu="oninput"in document;if(!Pu){var um=document.createElement("div");um.setAttribute("oninput","return;"),Pu=typeof um.oninput=="function"}Du=Pu}else Du=!1;Ly=Du&&(!document.documentMode||9<document.documentMode)}function cm(){Va&&(Va.detachEvent("onpropertychange",Fy),oo=Va=null)}function Fy(t){if(t.propertyName==="value"&&Hl(oo)){var e=[];Ry(e,oo,t,xp(t)),yy(ES,e)}}function $S(t,e,n){t==="focusin"?(cm(),Va=e,oo=n,Va.attachEvent("onpropertychange",Fy)):t==="focusout"&&cm()}function IS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(oo)}function CS(t,e){if(t==="click")return Hl(e)}function AS(t,e){if(t==="input"||t==="change")return Hl(e)}function OS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:OS;function io(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!pc.call(e,s)||!Gt(t[s],e[s]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,e){var n=dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dm(n)}}function zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function By(){for(var t=window,e=Yi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yi(t.document)}return e}function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DS(t){var e=By(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zy(n.ownerDocument.documentElement,n)){if(r!==null&&Cp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!t.extend&&a>r&&(s=r,r=a,a=s),s=pm(n,a);var o=pm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PS=In&&"documentMode"in document&&11>=document.documentMode,_s=null,Ac=null,Ua=null,Oc=!1;function fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||_s==null||_s!==Yi(r)||(r=_s,"selectionStart"in r&&Cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ua&&io(Ua,r)||(Ua=r,r=rl(Ac,"onSelect"),0<r.length&&(e=new Tp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function li(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},ju={},My={};In&&(My=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Gl(t){if(ju[t])return ju[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in My)return ju[t]=e[n];return t}var Vy=Gl("animationend"),Uy=Gl("animationiteration"),Ky=Gl("animationstart"),Wy=Gl("transitionend"),qy=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){qy.set(t,e),ls(e,[t])}for(var Ru=0;Ru<hm.length;Ru++){var Lu=hm[Ru],jS=Lu.toLowerCase(),RS=Lu[0].toUpperCase()+Lu.slice(1);vr(jS,"on"+RS)}vr(Vy,"onAnimationEnd");vr(Uy,"onAnimationIteration");vr(Ky,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Wy,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jN(r,e,void 0,t),t.currentTarget=null}function Hy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var i=r[o],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==a&&s.isPropagationStopped())break e;mm(s,i,u),a=l}else for(o=0;o<r.length;o++){if(i=r[o],l=i.instance,u=i.currentTarget,i=i.listener,l!==a&&s.isPropagationStopped())break e;mm(s,i,u),a=l}}}if(Ji)throw t=Tc,Ji=!1,Tc=null,t}function pe(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var r=t+"__bubble";n.has(r)||(Gy(e,t,2,!1),n.add(r))}function Fu(t,e,n){var r=0;e&&(r|=4),Gy(n,t,r,e)}var ui="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ui]){t[ui]=!0,ty.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ui]||(e[ui]=!0,Fu("selectionchange",!1,e))}}function Gy(t,e,n,r){switch(Ay(e)){case 1:var s=XN;break;case 4:s=JN;break;default:s=_p}n=s.bind(null,e,n,t),s=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zu(t,e,n,r,s){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var i=r.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;i!==null;){if(o=Rr(i),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}i=i.parentNode}}r=r.return}yy(function(){var u=a,c=xp(n),d=[];e:{var p=qy.get(t);if(p!==void 0){var h=Tp,g=t;switch(t){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":h=fS;break;case"focusin":g="focus",h=Ou;break;case"focusout":g="blur",h=Ou;break;case"beforeblur":case"afterblur":h=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=gS;break;case Vy:case Uy:case Ky:h=sS;break;case Wy:h=vS;break;case"scroll":h=ZN;break;case"wheel":h=wS;break;case"copy":case"cut":case"paste":h=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=am}var v=(e&4)!==0,b=!v&&t==="scroll",m=v?p!==null?p+"Capture":null:p;v=[];for(var y=u,x;y!==null;){x=y;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,m!==null&&(k=no(y,m),k!=null&&v.push(uo(y,k,x)))),b)break;y=y.return}0<v.length&&(p=new h(p,g,null,n,c),d.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==Sc&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[Cn]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Rr(g):null,g!==null&&(b=us(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=rm,k="onMouseLeave",m="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=am,k="onPointerLeave",m="onPointerEnter",y="pointer"),b=h==null?p:Ts(h),x=g==null?p:Ts(g),p=new v(k,y+"leave",h,n,c),p.target=b,p.relatedTarget=x,k=null,Rr(c)===u&&(v=new v(m,y+"enter",g,n,c),v.target=x,v.relatedTarget=b,k=v),b=k,h&&g)t:{for(v=h,m=g,y=0,x=v;x;x=hs(x))y++;for(x=0,k=m;k;k=hs(k))x++;for(;0<y-x;)v=hs(v),y--;for(;0<x-y;)m=hs(m),x--;for(;y--;){if(v===m||m!==null&&v===m.alternate)break t;v=hs(v),m=hs(m)}v=null}else v=null;h!==null&&gm(d,p,h,v,!1),g!==null&&b!==null&&gm(d,b,g,v,!0)}}e:{if(p=u?Ts(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var E=TS;else if(lm(p))if(Ly)E=AS;else{E=IS;var $=$S}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=CS);if(E&&(E=E(t,u))){Ry(d,E,n,c);break e}$&&$(t,p,u),t==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&bc(p,"number",p.value)}switch($=u?Ts(u):window,t){case"focusin":(lm($)||$.contentEditable==="true")&&(_s=$,Ac=u,Ua=null);break;case"focusout":Ua=Ac=_s=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,fm(d,n,c);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":fm(d,n,c)}var I;if(Ip)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ss?Py(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Dy&&n.locale!=="ko"&&(Ss||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ss&&(I=Oy()):(Gn=c,Ep="value"in Gn?Gn.value:Gn.textContent,Ss=!0)),$=rl(u,C),0<$.length&&(C=new sm(C,t,null,n,c),d.push({event:C,listeners:$}),I?C.data=I:(I=jy(n),I!==null&&(C.data=I)))),(I=kS?NS(t,n):SS(t,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(c=new sm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}Hy(d,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=no(t,n),a!=null&&r.unshift(uo(t,a,s)),a=no(t,e),a!=null&&r.push(uo(t,a,s))),t=t.return}return r}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,r,s){for(var a=e._reactName,o=[];n!==null&&n!==r;){var i=n,l=i.alternate,u=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&u!==null&&(i=u,s?(l=no(n,a),l!=null&&o.unshift(uo(n,l,i))):s||(l=no(n,a),l!=null&&o.push(uo(n,l,i)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(zS,"")}function ci(t,e,n){if(e=ym(e),ym(t)!==e&&n)throw Error(R(425))}function sl(){}var Dc=null,Pc=null;function jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(VS)}:Rc;function VS(t){setTimeout(function(){throw t})}function Bu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ao(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ca=Math.random().toString(36).slice(2),nn="__reactFiber$"+ca,co="__reactProps$"+ca,Cn="__reactContainer$"+ca,Lc="__reactEvents$"+ca,US="__reactListeners$"+ca,KS="__reactHandles$"+ca;function Rr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bm(t);t!==null;){if(n=t[nn])return n;t=bm(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[nn]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Ql(t){return t[co]||null}var Fc=[],$s=-1;function br(t){return{current:t}}function he(t){0>$s||(t.current=Fc[$s],Fc[$s]=null,$s--)}function de(t,e){$s++,Fc[$s]=t.current,t.current=e}var ur={},Je=br(ur),ft=br(!1),Gr=ur;function Hs(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ht(t){return t=t.childContextTypes,t!=null}function al(){he(ft),he(Je)}function wm(t,e,n){if(Je.current!==ur)throw Error(R(168));de(Je,e),de(ft,n)}function Qy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(R(108,$N(t)||"Unknown",s));return ke({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Gr=Je.current,de(Je,t),de(ft,ft.current),!0}function xm(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Qy(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,he(ft),he(Je),de(Je,t)):he(ft),de(ft,n)}var hn=null,Yl=!1,Mu=!1;function Yy(t){hn===null?hn=[t]:hn.push(t)}function WS(t){Yl=!0,Yy(t)}function wr(){if(!Mu&&hn!==null){Mu=!0;var t=0,e=oe;try{var n=hn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,Yl=!1}catch(s){throw hn!==null&&(hn=hn.slice(t+1)),xy(kp,wr),s}finally{oe=e,Mu=!1}}return null}var Is=[],Cs=0,il=null,ll=0,$t=[],It=0,Qr=null,xn=1,kn="";function Ar(t,e){Is[Cs++]=ll,Is[Cs++]=il,il=t,ll=e}function Xy(t,e,n){$t[It++]=xn,$t[It++]=kn,$t[It++]=Qr,Qr=t;var r=xn;t=kn;var s=32-Ut(r)-1;r&=~(1<<s),n+=1;var a=32-Ut(e)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,xn=1<<32-Ut(e)+s|n<<s|r,kn=a+t}else xn=1<<a|n<<s|r,kn=t}function Ap(t){t.return!==null&&(Ar(t,1),Xy(t,1,0))}function Op(t){for(;t===il;)il=Is[--Cs],Is[Cs]=null,ll=Is[--Cs],Is[Cs]=null;for(;t===Qr;)Qr=$t[--It],$t[It]=null,kn=$t[--It],$t[It]=null,xn=$t[--It],$t[It]=null}var xt=null,bt=null,ve=!1,Bt=null;function Jy(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,bt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:xn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,bt=null,!0):!1;default:return!1}}function zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bc(t){if(ve){var e=bt;if(e){var n=e;if(!km(t,e)){if(zc(t))throw Error(R(418));e=nr(n.nextSibling);var r=xt;e&&km(t,e)?Jy(r,n):(t.flags=t.flags&-4097|2,ve=!1,xt=t)}}else{if(zc(t))throw Error(R(418));t.flags=t.flags&-4097|2,ve=!1,xt=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function di(t){if(t!==xt)return!1;if(!ve)return Nm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jc(t.type,t.memoizedProps)),e&&(e=bt)){if(zc(t))throw Zy(),Error(R(418));for(;e;)Jy(t,e),e=nr(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=xt?nr(t.stateNode.nextSibling):null;return!0}function Zy(){for(var t=bt;t;)t=nr(t.nextSibling)}function Gs(){bt=xt=null,ve=!1}function Dp(t){Bt===null?Bt=[t]:Bt.push(t)}var qS=Rn.ReactCurrentBatchConfig;function Na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var s=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var i=s.refs;o===null?delete i[a]:i[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function pi(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sm(t){var e=t._init;return e(t._payload)}function e0(t){function e(m,y){if(t){var x=m.deletions;x===null?(m.deletions=[y],m.flags|=16):x.push(y)}}function n(m,y){if(!t)return null;for(;y!==null;)e(m,y),y=y.sibling;return null}function r(m,y){for(m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function s(m,y){return m=or(m,y),m.index=0,m.sibling=null,m}function a(m,y,x){return m.index=x,t?(x=m.alternate,x!==null?(x=x.index,x<y?(m.flags|=2,y):x):(m.flags|=2,y)):(m.flags|=1048576,y)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function i(m,y,x,k){return y===null||y.tag!==6?(y=Gu(x,m.mode,k),y.return=m,y):(y=s(y,x),y.return=m,y)}function l(m,y,x,k){var E=x.type;return E===Ns?c(m,y,x.props.children,k,x.key):y!==null&&(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Vn&&Sm(E)===y.type)?(k=s(y,x.props),k.ref=Na(m,y,x),k.return=m,k):(k=Li(x.type,x.key,x.props,null,m.mode,k),k.ref=Na(m,y,x),k.return=m,k)}function u(m,y,x,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Qu(x,m.mode,k),y.return=m,y):(y=s(y,x.children||[]),y.return=m,y)}function c(m,y,x,k,E){return y===null||y.tag!==7?(y=Vr(x,m.mode,k,E),y.return=m,y):(y=s(y,x),y.return=m,y)}function d(m,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Gu(""+y,m.mode,x),y.return=m,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ti:return x=Li(y.type,y.key,y.props,null,m.mode,x),x.ref=Na(m,null,y),x.return=m,x;case ks:return y=Qu(y,m.mode,x),y.return=m,y;case Vn:var k=y._init;return d(m,k(y._payload),x)}if(Oa(y)||va(y))return y=Vr(y,m.mode,x,null),y.return=m,y;pi(m,y)}return null}function p(m,y,x,k){var E=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:i(m,y,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ti:return x.key===E?l(m,y,x,k):null;case ks:return x.key===E?u(m,y,x,k):null;case Vn:return E=x._init,p(m,y,E(x._payload),k)}if(Oa(x)||va(x))return E!==null?null:c(m,y,x,k,null);pi(m,x)}return null}function h(m,y,x,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(x)||null,i(y,m,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ti:return m=m.get(k.key===null?x:k.key)||null,l(y,m,k,E);case ks:return m=m.get(k.key===null?x:k.key)||null,u(y,m,k,E);case Vn:var $=k._init;return h(m,y,x,$(k._payload),E)}if(Oa(k)||va(k))return m=m.get(x)||null,c(y,m,k,E,null);pi(y,k)}return null}function g(m,y,x,k){for(var E=null,$=null,I=y,C=y=0,A=null;I!==null&&C<x.length;C++){I.index>C?(A=I,I=null):A=I.sibling;var P=p(m,I,x[C],k);if(P===null){I===null&&(I=A);break}t&&I&&P.alternate===null&&e(m,I),y=a(P,y,C),$===null?E=P:$.sibling=P,$=P,I=A}if(C===x.length)return n(m,I),ve&&Ar(m,C),E;if(I===null){for(;C<x.length;C++)I=d(m,x[C],k),I!==null&&(y=a(I,y,C),$===null?E=I:$.sibling=I,$=I);return ve&&Ar(m,C),E}for(I=r(m,I);C<x.length;C++)A=h(I,m,C,x[C],k),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?C:A.key),y=a(A,y,C),$===null?E=A:$.sibling=A,$=A);return t&&I.forEach(function(j){return e(m,j)}),ve&&Ar(m,C),E}function v(m,y,x,k){var E=va(x);if(typeof E!="function")throw Error(R(150));if(x=E.call(x),x==null)throw Error(R(151));for(var $=E=null,I=y,C=y=0,A=null,P=x.next();I!==null&&!P.done;C++,P=x.next()){I.index>C?(A=I,I=null):A=I.sibling;var j=p(m,I,P.value,k);if(j===null){I===null&&(I=A);break}t&&I&&j.alternate===null&&e(m,I),y=a(j,y,C),$===null?E=j:$.sibling=j,$=j,I=A}if(P.done)return n(m,I),ve&&Ar(m,C),E;if(I===null){for(;!P.done;C++,P=x.next())P=d(m,P.value,k),P!==null&&(y=a(P,y,C),$===null?E=P:$.sibling=P,$=P);return ve&&Ar(m,C),E}for(I=r(m,I);!P.done;C++,P=x.next())P=h(I,m,C,P.value,k),P!==null&&(t&&P.alternate!==null&&I.delete(P.key===null?C:P.key),y=a(P,y,C),$===null?E=P:$.sibling=P,$=P);return t&&I.forEach(function(U){return e(m,U)}),ve&&Ar(m,C),E}function b(m,y,x,k){if(typeof x=="object"&&x!==null&&x.type===Ns&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ti:e:{for(var E=x.key,$=y;$!==null;){if($.key===E){if(E=x.type,E===Ns){if($.tag===7){n(m,$.sibling),y=s($,x.props.children),y.return=m,m=y;break e}}else if($.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Vn&&Sm(E)===$.type){n(m,$.sibling),y=s($,x.props),y.ref=Na(m,$,x),y.return=m,m=y;break e}n(m,$);break}else e(m,$);$=$.sibling}x.type===Ns?(y=Vr(x.props.children,m.mode,k,x.key),y.return=m,m=y):(k=Li(x.type,x.key,x.props,null,m.mode,k),k.ref=Na(m,y,x),k.return=m,m=k)}return o(m);case ks:e:{for($=x.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(m,y.sibling),y=s(y,x.children||[]),y.return=m,m=y;break e}else{n(m,y);break}else e(m,y);y=y.sibling}y=Qu(x,m.mode,k),y.return=m,m=y}return o(m);case Vn:return $=x._init,b(m,y,$(x._payload),k)}if(Oa(x))return g(m,y,x,k);if(va(x))return v(m,y,x,k);pi(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(m,y.sibling),y=s(y,x),y.return=m,m=y):(n(m,y),y=Gu(x,m.mode,k),y.return=m,m=y),o(m)):n(m,y)}return b}var Qs=e0(!0),t0=e0(!1),ul=br(null),cl=null,As=null,Pp=null;function jp(){Pp=As=cl=null}function Rp(t){var e=ul.current;he(ul),t._currentValue=e}function Mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){cl=t,Pp=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Pp!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(cl===null)throw Error(R(308));As=t,cl.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Lr=null;function Lp(t){Lr===null?Lr=[t]:Lr.push(t)}function n0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Lp(e)):(n.next=s.next,s.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function Fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,An(t,n)}return s=r.interleaved,s===null?(e.next=e,Lp(r)):(e.next=s.next,s.next=e),r.interleaved=e,An(t,n)}function Ai(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Np(t,n)}}function _m(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=e:a=a.next=e}else s=a=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,r){var s=t.updateQueue;Un=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var l=i,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,i=c.lastBaseUpdate,i!==o&&(i===null?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;o=0,c=u=l=null,i=a;do{var p=i.lane,h=i.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var g=t,v=i;switch(p=e,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(h,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(h,d,p):g,p==null)break e;d=ke({},d,p);break e;case 2:Un=!0}}i.callback!==null&&i.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[i]:p.push(i))}else h={eventTime:h,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=p;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;p=i,i=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(c===null&&(l=d),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=c,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else a===null&&(s.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=d}}function Em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(R(191,s));s.call(r)}}}var zo={},sn=br(zo),po=br(zo),fo=br(zo);function Fr(t){if(t===zo)throw Error(R(174));return t}function zp(t,e){switch(de(fo,e),de(po,t),de(sn,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xc(e,t)}he(sn),de(sn,e)}function Ys(){he(sn),he(po),he(fo)}function s0(t){Fr(fo.current);var e=Fr(sn.current),n=xc(e,t.type);e!==n&&(de(po,t),de(sn,n))}function Bp(t){po.current===t&&(he(sn),he(po))}var be=br(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function Mp(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var Oi=Rn.ReactCurrentDispatcher,Uu=Rn.ReactCurrentBatchConfig,Yr=0,we=null,Ae=null,je=null,fl=!1,Ka=!1,ho=0,HS=0;function Ke(){throw Error(R(321))}function Vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Up(t,e,n,r,s,a){if(Yr=a,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oi.current=t===null||t.memoizedState===null?XS:JS,t=n(r,s),Ka){a=0;do{if(Ka=!1,ho=0,25<=a)throw Error(R(301));a+=1,je=Ae=null,e.updateQueue=null,Oi.current=ZS,t=n(r,s)}while(Ka)}if(Oi.current=hl,e=Ae!==null&&Ae.next!==null,Yr=0,je=Ae=we=null,fl=!1,e)throw Error(R(300));return t}function Kp(){var t=ho!==0;return ho=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?we.memoizedState=je=t:je=je.next=t,je}function Pt(){if(Ae===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=je===null?we.memoizedState:je.next;if(e!==null)je=e,Ae=t;else{if(t===null)throw Error(R(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},je===null?we.memoizedState=je=t:je=je.next=t}return je}function mo(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Pt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ae,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var i=o=null,l=null,u=a;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=d,o=r):l=l.next=d,we.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=i,Gt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do a=s.lane,we.lanes|=a,Xr|=a,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,a=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=t(a,o.action),o=o.next;while(o!==s);Gt(a,e.memoizedState)||(pt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function a0(){}function o0(t,e){var n=we,r=Pt(),s=e(),a=!Gt(r.memoizedState,s);if(a&&(r.memoizedState=s,pt=!0),r=r.queue,Wp(u0.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,go(9,l0.bind(null,n,r,s,e),void 0,null),Fe===null)throw Error(R(349));Yr&30||i0(n,e,s)}return s}function i0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l0(t,e,n,r){e.value=n,e.getSnapshot=r,c0(e)&&d0(t)}function u0(t,e,n){return n(function(){c0(e)&&d0(t)})}function c0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function d0(t){var e=An(t,1);e!==null&&Kt(e,t,1,-1)}function Tm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=YS.bind(null,we,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function p0(){return Pt().memoizedState}function Di(t,e,n,r){var s=en();we.flags|=t,s.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function Xl(t,e,n,r){var s=Pt();r=r===void 0?null:r;var a=void 0;if(Ae!==null){var o=Ae.memoizedState;if(a=o.destroy,r!==null&&Vp(r,o.deps)){s.memoizedState=go(e,n,a,r);return}}we.flags|=t,s.memoizedState=go(1|e,n,a,r)}function $m(t,e){return Di(8390656,8,t,e)}function Wp(t,e){return Xl(2048,8,t,e)}function f0(t,e){return Xl(4,2,t,e)}function h0(t,e){return Xl(4,4,t,e)}function m0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g0(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,m0.bind(null,e,t),n)}function qp(){}function y0(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v0(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b0(t,e,n){return Yr&21?(Gt(n,e)||(n=Sy(),we.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function GS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Uu.transition;Uu.transition={};try{t(!1),e()}finally{oe=n,Uu.transition=r}}function w0(){return Pt().memoizedState}function QS(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x0(t))k0(e,n);else if(n=n0(t,e,n,r),n!==null){var s=tt();Kt(n,t,r,s),N0(n,e,r)}}function YS(t,e,n){var r=ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(t))k0(e,s);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,i=a(o,n);if(s.hasEagerState=!0,s.eagerState=i,Gt(i,o)){var l=e.interleaved;l===null?(s.next=s,Lp(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=n0(t,e,s,r),n!==null&&(s=tt(),Kt(n,t,r,s),N0(n,e,r))}}function x0(t){var e=t.alternate;return t===we||e!==null&&e===we}function k0(t,e){Ka=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Np(t,n)}}var hl={readContext:Dt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},XS={readContext:Dt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:$m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Di(4194308,4,m0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Di(4194308,4,t,e)},useInsertionEffect:function(t,e){return Di(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:qp,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=GS.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=en();if(ve){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Fe===null)throw Error(R(349));Yr&30||i0(r,e,n)}s.memoizedState=n;var a={value:n,getSnapshot:e};return s.queue=a,$m(u0.bind(null,r,a,t),[t]),r.flags|=2048,go(9,l0.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=en(),e=Fe.identifierPrefix;if(ve){var n=kn,r=xn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:Dt,useCallback:y0,useContext:Dt,useEffect:Wp,useImperativeHandle:g0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:v0,useReducer:Ku,useRef:p0,useState:function(){return Ku(mo)},useDebugValue:qp,useDeferredValue:function(t){var e=Pt();return b0(e,Ae.memoizedState,t)},useTransition:function(){var t=Ku(mo)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:o0,useId:w0,unstable_isNewReconciler:!1},ZS={readContext:Dt,useCallback:y0,useContext:Dt,useEffect:Wp,useImperativeHandle:g0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:v0,useReducer:Wu,useRef:p0,useState:function(){return Wu(mo)},useDebugValue:qp,useDeferredValue:function(t){var e=Pt();return Ae===null?e.memoizedState=t:b0(e,Ae.memoizedState,t)},useTransition:function(){var t=Wu(mo)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:o0,useId:w0,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),s=ar(t),a=Sn(r,s);a.payload=e,n!=null&&(a.callback=n),e=rr(t,a,s),e!==null&&(Kt(e,t,s,r),Ai(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),s=ar(t),a=Sn(r,s);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=rr(t,a,s),e!==null&&(Kt(e,t,s,r),Ai(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=ar(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=rr(t,s,r),e!==null&&(Kt(e,t,r,n),Ai(e,t,r))}};function Im(t,e,n,r,s,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(s,a):!0}function S0(t,e,n){var r=!1,s=ur,a=e.contextType;return typeof a=="object"&&a!==null?a=Dt(a):(s=ht(e)?Gr:Je.current,r=e.contextTypes,a=(r=r!=null)?Hs(t,s):ur),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=a),e}function Cm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function Uc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Fp(t);var a=e.contextType;typeof a=="object"&&a!==null?s.context=Dt(a):(a=ht(e)?Gr:Je.current,s.context=Hs(t,a)),s.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Vc(t,e,a,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Jl.enqueueReplaceState(s,s.state,null),dl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=TN(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:s,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var e_=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,ed=r),Kc(t,e)},n}function E0(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Kc(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Kc(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new e_;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=h_.bind(null,t,e,n),e.then(t,t))}function Om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var t_=Rn.ReactCurrentOwner,pt=!1;function Ze(t,e,n,r){e.child=t===null?t0(e,null,n,r):Qs(e,t.child,n,r)}function Pm(t,e,n,r,s){n=n.render;var a=e.ref;return Fs(e,s),r=Up(t,e,n,r,a,s),n=Kp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,On(t,e,s)):(ve&&n&&Ap(e),e.flags|=1,Ze(t,e,r,s),e.child)}function jm(t,e,n,r,s){if(t===null){var a=n.type;return typeof a=="function"&&!ef(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,T0(t,e,a,r,s)):(t=Li(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return On(t,e,s)}return e.flags|=1,t=or(a,r),t.ref=e.ref,t.return=e,e.child=t}function T0(t,e,n,r,s){if(t!==null){var a=t.memoizedProps;if(io(a,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=a,(t.lanes&s)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,On(t,e,s)}return Wc(t,e,n,r,s)}function $0(t,e,n){var r=e.pendingProps,s=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ds,vt),vt|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Ds,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,de(Ds,vt),vt|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,de(Ds,vt),vt|=r;return Ze(t,e,s,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wc(t,e,n,r,s){var a=ht(n)?Gr:Je.current;return a=Hs(e,a),Fs(e,s),n=Up(t,e,n,r,a,s),r=Kp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,On(t,e,s)):(ve&&r&&Ap(e),e.flags|=1,Ze(t,e,n,s),e.child)}function Rm(t,e,n,r,s){if(ht(n)){var a=!0;ol(e)}else a=!1;if(Fs(e,s),e.stateNode===null)Pi(t,e),S0(e,n,r),Uc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,i=e.memoizedProps;o.props=i;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ht(n)?Gr:Je.current,u=Hs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==r||l!==u)&&Cm(e,o,r,u),Un=!1;var p=e.memoizedState;o.state=p,dl(e,r,o,s),l=e.memoizedState,i!==r||p!==l||ft.current||Un?(typeof c=="function"&&(Vc(e,n,c,r),l=e.memoizedState),(i=Un||Im(e,n,i,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=i):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,r0(t,e),i=e.memoizedProps,u=e.type===e.elementType?i:Ft(e.type,i),o.props=u,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ht(n)?Gr:Je.current,l=Hs(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||p!==l)&&Cm(e,o,r,l),Un=!1,p=e.memoizedState,o.state=p,dl(e,r,o,s);var g=e.memoizedState;i!==d||p!==g||ft.current||Un?(typeof h=="function"&&(Vc(e,n,h,r),g=e.memoizedState),(u=Un||Im(e,n,u,r,p,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return qc(t,e,n,r,a,s)}function qc(t,e,n,r,s,a){I0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&xm(e,n,!1),On(t,e,a);r=e.stateNode,t_.current=e;var i=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,a),e.child=Qs(e,null,i,a)):Ze(t,e,i,a),e.memoizedState=r.state,s&&xm(e,n,!0),e.child}function C0(t){var e=t.stateNode;e.pendingContext?wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wm(t,e.context,!1),zp(t,e.containerInfo)}function Lm(t,e,n,r,s){return Gs(),Dp(s),e.flags|=256,Ze(t,e,n,r),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var r=e.pendingProps,s=be.current,a=!1,o=(e.flags&128)!==0,i;if((i=o)||(i=t!==null&&t.memoizedState===null?!1:(s&2)!==0),i?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),de(be,s&1),t===null)return Bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=tu(o,r,0,null),t=Vr(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Gc(n),e.memoizedState=Hc,t):Hp(e,o));if(s=t.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return n_(t,e,o,r,i,s,n);if(a){a=r.fallback,o=e.mode,s=t.child,i=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=or(s,l),r.subtreeFlags=s.subtreeFlags&14680064),i!==null?a=or(i,a):(a=Vr(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?Gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Hc,r}return a=t.child,t=a.sibling,r=or(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hp(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fi(t,e,n,r){return r!==null&&Dp(r),Qs(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n_(t,e,n,r,s,a,o){if(n)return e.flags&256?(e.flags&=-257,r=qu(Error(R(422))),fi(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,s=e.mode,r=tu({mode:"visible",children:r.children},s,0,null),a=Vr(a,s,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Gc(o),e.memoizedState=Hc,a);if(!(e.mode&1))return fi(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(R(419)),r=qu(a,r,void 0),fi(t,e,o,r)}if(i=(o&t.childLanes)!==0,pt||i){if(r=Fe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,An(t,s),Kt(r,t,s,-1))}return Zp(),r=qu(Error(R(421))),fi(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=m_.bind(null,t),s._reactRetry=e,null):(t=a.treeContext,bt=nr(s.nextSibling),xt=e,ve=!0,Bt=null,t!==null&&($t[It++]=xn,$t[It++]=kn,$t[It++]=Qr,xn=t.id,kn=t.overflow,Qr=e),e=Hp(e,r.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mc(t.return,e,n)}function Hu(t,e,n,r,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function O0(t,e,n){var r=e.pendingProps,s=r.revealOrder,a=r.tail;if(Ze(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(be,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Hu(e,!1,s,n,a);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&pl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Hu(e,!0,n,null,a);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function r_(t,e,n){switch(e.tag){case 3:C0(e),Gs();break;case 5:s0(e);break;case 1:ht(e.type)&&ol(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;de(ul,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(de(be,be.current&1),t=On(t,e,n),t!==null?t.sibling:null);de(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return O0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,$0(t,e,n)}return On(t,e,n)}var D0,Qc,P0,j0;D0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qc=function(){};P0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Fr(sn.current);var a=null;switch(n){case"input":s=yc(t,s),r=yc(t,r),a=[];break;case"select":s=ke({},s,{value:void 0}),r=ke({},r,{value:void 0}),a=[];break;case"textarea":s=wc(t,s),r=wc(t,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sl)}kc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(i=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&i[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),a||i===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};j0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Sa(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function s_(t,e,n){var r=e.pendingProps;switch(Op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ht(e.type)&&al(),We(e),null;case 3:return r=e.stateNode,Ys(),he(ft),he(Je),Mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(di(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(rd(Bt),Bt=null))),Qc(t,e),We(e),null;case 5:Bp(e);var s=Fr(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return We(e),null}if(t=Fr(sn.current),di(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[nn]=e,r[co]=a,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<Pa.length;s++)pe(Pa[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Hh(r,a),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},pe("invalid",r);break;case"textarea":Qh(r,a),pe("invalid",r)}kc(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&ci(r.textContent,i,t),s=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&ci(r.textContent,i,t),s=["children",""+i]):eo.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ni(r),Gh(r,a,!0);break;case"textarea":ni(r),Yh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=sl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=uy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[co]=r,D0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nc(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Pa.length;s++)pe(Pa[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":Hh(t,r),s=yc(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ke({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Qh(t,r),s=wc(t,r),pe("invalid",t);break;default:s=r}kc(n,s),i=s;for(a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="style"?py(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cy(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(eo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&pe("scroll",t):l!=null&&yp(t,a,l,o))}switch(n){case"input":ni(t),Gh(t,r,!1);break;case"textarea":ni(t),Yh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Ps(t,!!r.multiple,a,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)j0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Fr(fo.current),Fr(sn.current),di(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(a=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:ci(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ci(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return We(e),null;case 13:if(he(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&bt!==null&&e.mode&1&&!(e.flags&128))Zy(),Gs(),e.flags|=98560,a=!1;else if(a=di(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(R(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[nn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),a=!1}else Bt!==null&&(rd(Bt),Bt=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Oe===0&&(Oe=3):Zp())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Ys(),Qc(t,e),t===null&&lo(e.stateNode.containerInfo),We(e),null;case 10:return Rp(e.type._context),We(e),null;case 17:return ht(e.type)&&al(),We(e),null;case 19:if(he(be),a=e.memoizedState,a===null)return We(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)Sa(a,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,Sa(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(be,be.current&1|2),e.child}t=t.sibling}a.tail!==null&&Te()>Js&&(e.flags|=128,r=!0,Sa(a,!1),e.lanes=4194304)}else{if(!r)if(t=pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ve)return We(e),null}else 2*Te()-a.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Sa(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Te(),e.sibling=null,n=be.current,de(be,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return Jp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function a_(t,e){switch(Op(e),e.tag){case 1:return ht(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),he(ft),he(Je),Mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(he(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(be),null;case 4:return Ys(),null;case 10:return Rp(e.type._context),null;case 22:case 23:return Jp(),null;case 24:return null;default:return null}}var hi=!1,He=!1,o_=typeof WeakSet=="function"?WeakSet:Set,B=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Yc(t,e,n){try{n()}catch(r){Se(t,e,r)}}var zm=!1;function i_(t,e){if(Dc=tl,t=By(),Cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var h;d!==n||s!==0&&d.nodeType!==3||(i=o+s),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===t)break t;if(p===n&&++u===s&&(i=o),p===a&&++c===r&&(l=o),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=i===-1||l===-1?null:{start:i,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},tl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,b=g.memoizedState,m=e.stateNode,y=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ft(e.type,v),b);m.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(k){Se(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return g=zm,zm=!1,g}function Wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var a=s.destroy;s.destroy=void 0,a!==void 0&&Yc(e,n,a)}s=s.next}while(s!==r)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R0(t){var e=t.alternate;e!==null&&(t.alternate=null,R0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[co],delete e[Lc],delete e[US],delete e[KS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L0(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(r!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}function Zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}var Be=null,zt=!1;function zn(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:He||Os(n,e);case 6:var r=Be,s=zt;Be=null,zn(t,e,n),Be=r,zt=s,Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?Bu(t.parentNode,n):t.nodeType===1&&Bu(t,n),ao(t)):Bu(Be,n.stateNode));break;case 4:r=Be,s=zt,Be=n.stateNode.containerInfo,zt=!0,zn(t,e,n),Be=r,zt=s;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Yc(n,e,o),s=s.next}while(s!==r)}zn(t,e,n);break;case 1:if(!He&&(Os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Se(n,e,i)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,zn(t,e,n),He=r):zn(t,e,n);break;default:zn(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new o_),e.forEach(function(r){var s=g_.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=t,o=e,i=o;e:for(;i!==null;){switch(i.tag){case 5:Be=i.stateNode,zt=!1;break e;case 3:Be=i.stateNode.containerInfo,zt=!0;break e;case 4:Be=i.stateNode.containerInfo,zt=!0;break e}i=i.return}if(Be===null)throw Error(R(160));F0(a,o,s),Be=null,zt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Se(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Zt(t),r&4){try{Wa(3,t,t.return),Zl(3,t)}catch(v){Se(t,t.return,v)}try{Wa(5,t,t.return)}catch(v){Se(t,t.return,v)}}break;case 1:Lt(e,t),Zt(t),r&512&&n!==null&&Os(n,n.return);break;case 5:if(Lt(e,t),Zt(t),r&512&&n!==null&&Os(n,n.return),t.flags&32){var s=t.stateNode;try{to(s,"")}catch(v){Se(t,t.return,v)}}if(r&4&&(s=t.stateNode,s!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,i=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&iy(s,a),Nc(i,o);var u=Nc(i,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?py(s,d):c==="dangerouslySetInnerHTML"?cy(s,d):c==="children"?to(s,d):yp(s,c,d,u)}switch(i){case"input":vc(s,a);break;case"textarea":ly(s,a);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Ps(s,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?Ps(s,!!a.multiple,a.defaultValue,!0):Ps(s,!!a.multiple,a.multiple?[]:"",!1))}s[co]=a}catch(v){Se(t,t.return,v)}}break;case 6:if(Lt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(R(162));s=t.stateNode,a=t.memoizedProps;try{s.nodeValue=a}catch(v){Se(t,t.return,v)}}break;case 3:if(Lt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(v){Se(t,t.return,v)}break;case 4:Lt(e,t),Zt(t);break;case 13:Lt(e,t),Zt(t),s=t.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Yp=Te())),r&4&&Mm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(He=(u=He)||c,Lt(e,t),He=u):Lt(e,t),Zt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(d=B=c;B!==null;){switch(p=B,h=p.child,p.tag){case 0:case 11:case 14:case 15:Wa(4,p,p.return);break;case 1:Os(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Os(p,p.return);break;case 22:if(p.memoizedState!==null){Um(d);continue}}h!==null?(h.return=p,B=h):Um(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{s=d.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=dy("display",o))}catch(v){Se(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Se(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Lt(e,t),Zt(t),r&4&&Mm(t);break;case 21:break;default:Lt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(to(s,""),r.flags&=-33);var a=Bm(t);Zc(t,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,i=Bm(t);Jc(t,i,o);break;default:throw Error(R(161))}}catch(l){Se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l_(t,e,n){B=t,B0(t)}function B0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||hi;if(!o){var i=s.alternate,l=i!==null&&i.memoizedState!==null||He;i=hi;var u=He;if(hi=o,(He=l)&&!u)for(B=s;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?Km(s):l!==null?(l.return=o,B=l):Km(s);for(;a!==null;)B=a,B0(a),a=a.sibling;B=s,hi=i,He=u}Vm(t)}else s.subtreeFlags&8772&&a!==null?(a.return=s,B=a):Vm(t)}}function Vm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:He||Zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!He)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Em(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Em(e,o,n)}break;case 5:var i=e.stateNode;if(n===null&&e.flags&4){n=i;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ao(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}He||e.flags&512&&Xc(e)}catch(p){Se(e,e.return,p)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Um(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Km(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){Se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Se(e,s,l)}}var a=e.return;try{Xc(e)}catch(l){Se(e,a,l)}break;case 5:var o=e.return;try{Xc(e)}catch(l){Se(e,o,l)}}}catch(l){Se(e,e.return,l)}if(e===t){B=null;break}var i=e.sibling;if(i!==null){i.return=e.return,B=i;break}B=e.return}}var u_=Math.ceil,ml=Rn.ReactCurrentDispatcher,Gp=Rn.ReactCurrentOwner,At=Rn.ReactCurrentBatchConfig,te=0,Fe=null,Ie=null,Me=0,vt=0,Ds=br(0),Oe=0,yo=null,Xr=0,eu=0,Qp=0,qa=null,dt=null,Yp=0,Js=1/0,fn=null,gl=!1,ed=null,sr=null,mi=!1,Qn=null,yl=0,Ha=0,td=null,ji=-1,Ri=0;function tt(){return te&6?Te():ji!==-1?ji:ji=Te()}function ar(t){return t.mode&1?te&2&&Me!==0?Me&-Me:qS.transition!==null?(Ri===0&&(Ri=Sy()),Ri):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Ay(t.type)),t):1}function Kt(t,e,n,r){if(50<Ha)throw Ha=0,td=null,Error(R(185));Ro(t,n,r),(!(te&2)||t!==Fe)&&(t===Fe&&(!(te&2)&&(eu|=n),Oe===4&&qn(t,Me)),mt(t,r),n===1&&te===0&&!(e.mode&1)&&(Js=Te()+500,Yl&&wr()))}function mt(t,e){var n=t.callbackNode;qN(t,e);var r=el(t,t===Fe?Me:0);if(r===0)n!==null&&Zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zh(n),e===1)t.tag===0?WS(Wm.bind(null,t)):Yy(Wm.bind(null,t)),MS(function(){!(te&6)&&wr()}),n=null;else{switch(_y(r)){case 1:n=kp;break;case 4:n=ky;break;case 16:n=Zi;break;case 536870912:n=Ny;break;default:n=Zi}n=G0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(ji=-1,Ri=0,te&6)throw Error(R(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=el(t,t===Fe?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vl(t,r);else{e=r;var s=te;te|=2;var a=U0();(Fe!==t||Me!==e)&&(fn=null,Js=Te()+500,Mr(t,e));do try{p_();break}catch(i){V0(t,i)}while(!0);jp(),ml.current=a,te=s,Ie!==null?e=0:(Fe=null,Me=0,e=Oe)}if(e!==0){if(e===2&&(s=$c(t),s!==0&&(r=s,e=nd(t,s))),e===1)throw n=yo,Mr(t,0),qn(t,r),mt(t,Te()),n;if(e===6)qn(t,r);else{if(s=t.current.alternate,!(r&30)&&!c_(s)&&(e=vl(t,r),e===2&&(a=$c(t),a!==0&&(r=a,e=nd(t,a))),e===1))throw n=yo,Mr(t,0),qn(t,r),mt(t,Te()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Or(t,dt,fn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=Yp+500-Te(),10<e)){if(el(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Rc(Or.bind(null,t,dt,fn),e);break}Or(t,dt,fn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Ut(r);a=1<<o,o=e[o],o>s&&(s=o),r&=~a}if(r=s,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u_(r/1960))-r,10<r){t.timeoutHandle=Rc(Or.bind(null,t,dt,fn),r);break}Or(t,dt,fn);break;case 5:Or(t,dt,fn);break;default:throw Error(R(329))}}}return mt(t,Te()),t.callbackNode===n?M0.bind(null,t):null}function nd(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=dt,dt=n,e!==null&&rd(e)),t}function rd(t){dt===null?dt=t:dt.push.apply(dt,t)}function c_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Gt(a(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~Qp,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function Wm(t){if(te&6)throw Error(R(327));zs();var e=el(t,0);if(!(e&1))return mt(t,Te()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=$c(t);r!==0&&(e=r,n=nd(t,r))}if(n===1)throw n=yo,Mr(t,0),qn(t,e),mt(t,Te()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,dt,fn),mt(t,Te()),null}function Xp(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&(Js=Te()+500,Yl&&wr())}}function Jr(t){Qn!==null&&Qn.tag===0&&!(te&6)&&zs();var e=te;te|=1;var n=At.transition,r=oe;try{if(At.transition=null,oe=1,t)return t()}finally{oe=r,At.transition=n,te=e,!(te&6)&&wr()}}function Jp(){vt=Ds.current,he(Ds)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BS(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(Op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Ys(),he(ft),he(Je),Mp();break;case 5:Bp(r);break;case 4:Ys();break;case 13:he(be);break;case 19:he(be);break;case 10:Rp(r.type._context);break;case 22:case 23:Jp()}n=n.return}if(Fe=t,Ie=t=or(t.current,null),Me=vt=e,Oe=0,yo=null,Qp=eu=Xr=0,dt=qa=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}Lr=null}return t}function V0(t,e){do{var n=Ie;try{if(jp(),Oi.current=hl,fl){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}fl=!1}if(Yr=0,je=Ae=we=null,Ka=!1,ho=0,Gp.current=null,n===null||n.return===null){Oe=1,yo=e,Ie=null;break}e:{var a=t,o=n.return,i=n,l=e;if(e=Me,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=i,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Om(o);if(h!==null){h.flags&=-257,Dm(h,o,i,a,e),h.mode&1&&Am(a,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Am(a,u,e),Zp();break e}l=Error(R(426))}}else if(ve&&i.mode&1){var b=Om(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Dm(b,o,i,a,e),Dp(Xs(l,i));break e}}a=l=Xs(l,i),Oe!==4&&(Oe=2),qa===null?qa=[a]:qa.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=_0(a,l,e);_m(a,m);break e;case 1:i=l;var y=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(sr===null||!sr.has(x)))){a.flags|=65536,e&=-e,a.lanes|=e;var k=E0(a,i,e);_m(a,k);break e}}a=a.return}while(a!==null)}W0(n)}catch(E){e=E,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function U0(){var t=ml.current;return ml.current=hl,t===null?hl:t}function Zp(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(Xr&268435455)&&!(eu&268435455)||qn(Fe,Me)}function vl(t,e){var n=te;te|=2;var r=U0();(Fe!==t||Me!==e)&&(fn=null,Mr(t,e));do try{d_();break}catch(s){V0(t,s)}while(!0);if(jp(),te=n,ml.current=r,Ie!==null)throw Error(R(261));return Fe=null,Me=0,Oe}function d_(){for(;Ie!==null;)K0(Ie)}function p_(){for(;Ie!==null&&!LN();)K0(Ie)}function K0(t){var e=H0(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?W0(t):Ie=e,Gp.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a_(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ie=null;return}}else if(n=s_(n,e,vt),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Oe===0&&(Oe=5)}function Or(t,e,n){var r=oe,s=At.transition;try{At.transition=null,oe=1,f_(t,e,n,r)}finally{At.transition=s,oe=r}return null}function f_(t,e,n,r){do zs();while(Qn!==null);if(te&6)throw Error(R(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(HN(t,a),t===Fe&&(Ie=Fe=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mi||(mi=!0,G0(Zi,function(){return zs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=At.transition,At.transition=null;var o=oe;oe=1;var i=te;te|=4,Gp.current=null,i_(t,n),z0(n,t),DS(Pc),tl=!!Dc,Pc=Dc=null,t.current=n,l_(n),FN(),te=i,oe=o,At.transition=a}else t.current=n;if(mi&&(mi=!1,Qn=t,yl=s),a=t.pendingLanes,a===0&&(sr=null),MN(n.stateNode),mt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(gl)throw gl=!1,t=ed,ed=null,t;return yl&1&&t.tag!==0&&zs(),a=t.pendingLanes,a&1?t===td?Ha++:(Ha=0,td=t):Ha=0,wr(),null}function zs(){if(Qn!==null){var t=_y(yl),e=At.transition,n=oe;try{if(At.transition=null,oe=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,yl=0,te&6)throw Error(R(331));var s=te;for(te|=4,B=t.current;B!==null;){var a=B,o=a.child;if(B.flags&16){var i=a.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Wa(8,c,a)}var d=c.child;if(d!==null)d.return=c,B=d;else for(;B!==null;){c=B;var p=c.sibling,h=c.return;if(R0(c),c===u){B=null;break}if(p!==null){p.return=h,B=p;break}B=h}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}B=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,B=o;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wa(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,B=m;break e}B=a.return}}var y=t.current;for(B=y;B!==null;){o=B;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,B=x;else e:for(o=y;B!==null;){if(i=B,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Zl(9,i)}}catch(E){Se(i,i.return,E)}if(i===o){B=null;break e}var k=i.sibling;if(k!==null){k.return=i.return,B=k;break e}B=i.return}}if(te=s,wr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{oe=n,At.transition=e}}return!1}function qm(t,e,n){e=Xs(n,e),e=_0(t,e,1),t=rr(t,e,1),e=tt(),t!==null&&(Ro(t,1,e),mt(t,e))}function Se(t,e,n){if(t.tag===3)qm(t,t,n);else for(;e!==null;){if(e.tag===3){qm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Xs(n,t),t=E0(e,t,1),e=rr(e,t,1),t=tt(),e!==null&&(Ro(e,1,t),mt(e,t));break}}e=e.return}}function h_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(Me&n)===n&&(Oe===4||Oe===3&&(Me&130023424)===Me&&500>Te()-Yp?Mr(t,0):Qp|=n),mt(t,e)}function q0(t,e){e===0&&(t.mode&1?(e=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):e=1);var n=tt();t=An(t,e),t!==null&&(Ro(t,e,n),mt(t,n))}function m_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q0(t,n)}function g_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),q0(t,n)}var H0;H0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,r_(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ve&&e.flags&1048576&&Xy(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pi(t,e),t=e.pendingProps;var s=Hs(e,Je.current);Fs(e,n),s=Up(null,e,r,t,s,n);var a=Kp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(a=!0,ol(e)):a=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fp(e),s.updater=Jl,e.stateNode=s,s._reactInternals=e,Uc(e,r,t,n),e=qc(null,e,r,!0,a,n)):(e.tag=0,ve&&a&&Ap(e),Ze(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pi(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=v_(r),t=Ft(r,t),s){case 0:e=Wc(null,e,r,t,n);break e;case 1:e=Rm(null,e,r,t,n);break e;case 11:e=Pm(null,e,r,t,n);break e;case 14:e=jm(null,e,r,Ft(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ft(r,s),Wc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ft(r,s),Rm(t,e,r,s,n);case 3:e:{if(C0(e),t===null)throw Error(R(387));r=e.pendingProps,a=e.memoizedState,s=a.element,r0(t,e),dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){s=Xs(Error(R(423)),e),e=Lm(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(R(424)),e),e=Lm(t,e,r,n,s);break e}else for(bt=nr(e.stateNode.containerInfo.firstChild),xt=e,ve=!0,Bt=null,n=t0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===s){e=On(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return s0(e),t===null&&Bc(e),r=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,o=s.children,jc(r,s)?o=null:a!==null&&jc(r,a)&&(e.flags|=32),I0(t,e),Ze(t,e,o,n),e.child;case 6:return t===null&&Bc(e),null;case 13:return A0(t,e,n);case 4:return zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ft(r,s),Pm(t,e,r,s,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,a=e.memoizedProps,o=s.value,de(ul,r._currentValue),r._currentValue=o,a!==null)if(Gt(a.value,o)){if(a.children===s.children&&!ft.current){e=On(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Mc(a.return,n,e),i.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(R(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Mc(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ze(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Fs(e,n),s=Dt(s),r=r(s),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,s=Ft(r,e.pendingProps),s=Ft(r.type,s),jm(t,e,r,s,n);case 15:return T0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ft(r,s),Pi(t,e),e.tag=1,ht(r)?(t=!0,ol(e)):t=!1,Fs(e,n),S0(e,r,s),Uc(e,r,s,n),qc(null,e,r,!0,t,n);case 19:return O0(t,e,n);case 22:return $0(t,e,n)}throw Error(R(156,e.tag))};function G0(t,e){return xy(t,e)}function y_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new y_(t,e,n,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v_(t){if(typeof t=="function")return ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bp)return 11;if(t===wp)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Li(t,e,n,r,s,a){var o=2;if(r=t,typeof t=="function")ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Vr(n.children,s,a,e);case vp:o=8,s|=8;break;case fc:return t=Ct(12,n,e,s|2),t.elementType=fc,t.lanes=a,t;case hc:return t=Ct(13,n,e,s),t.elementType=hc,t.lanes=a,t;case mc:return t=Ct(19,n,e,s),t.elementType=mc,t.lanes=a,t;case sy:return tu(n,s,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ny:o=10;break e;case ry:o=9;break e;case bp:o=11;break e;case wp:o=14;break e;case Vn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,s),e.elementType=t,e.type=r,e.lanes=a,e}function Vr(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function tu(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=sy,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function b_(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function tf(t,e,n,r,s,a,o,i,l){return t=new b_(t,e,n,i,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Ct(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(a),t}function w_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Q0(t){if(!t)return ur;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(ht(n))return Qy(t,n,e)}return e}function Y0(t,e,n,r,s,a,o,i,l){return t=tf(n,r,!0,t,s,a,o,i,l),t.context=Q0(null),n=t.current,r=tt(),s=ar(n),a=Sn(r,s),a.callback=e??null,rr(n,a,s),t.current.lanes=s,Ro(t,s,r),mt(t,r),t}function nu(t,e,n,r){var s=e.current,a=tt(),o=ar(s);return n=Q0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(s,e,o),t!==null&&(Kt(t,s,o,a),Ai(t,s,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){Hm(t,e),(t=t.alternate)&&Hm(t,e)}function x_(){return null}var X0=typeof reportError=="function"?reportError:function(t){console.error(t)};function rf(t){this._internalRoot=t}ru.prototype.render=rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));nu(t,e,null,null)};ru.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){nu(null,t,null,null)}),e[Cn]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=$y();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&Cy(t)}};function sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function k_(t,e,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var u=bl(o);a.call(u)}}var o=Y0(e,r,t,0,null,!1,!1,"",Gm);return t._reactRootContainer=o,t[Cn]=o.current,lo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var i=r;r=function(){var u=bl(l);i.call(u)}}var l=tf(t,0,!1,null,null,!1,!1,"",Gm);return t._reactRootContainer=l,t[Cn]=l.current,lo(t.nodeType===8?t.parentNode:t),Jr(function(){nu(e,l,n,r)}),l}function au(t,e,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var i=s;s=function(){var l=bl(o);i.call(l)}}nu(e,o,t,s)}else o=k_(n,e,t,s,r);return bl(o)}Ey=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(Np(e,n|1),mt(e,Te()),!(te&6)&&(Js=Te()+500,wr()))}break;case 13:Jr(function(){var r=An(t,1);if(r!==null){var s=tt();Kt(r,t,1,s)}}),nf(t,1)}};Sp=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=tt();Kt(e,t,134217728,n)}nf(t,134217728)}};Ty=function(t){if(t.tag===13){var e=ar(t),n=An(t,e);if(n!==null){var r=tt();Kt(n,t,e,r)}nf(t,e)}};$y=function(){return oe};Iy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};_c=function(t,e,n){switch(e){case"input":if(vc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ql(r);if(!s)throw Error(R(90));oy(r),vc(r,s)}}}break;case"textarea":ly(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};my=Xp;gy=Jr;var N_={usingClientEntryPoint:!1,Events:[Fo,Ts,Ql,fy,hy,Xp]},_a={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S_={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=by(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||x_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{Wl=gi.inject(S_),rn=gi}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(e))throw Error(R(200));return w_(t,e,null,n)};St.createRoot=function(t,e){if(!sf(t))throw Error(R(299));var n=!1,r="",s=X0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=tf(t,1,!1,null,null,n,!1,r,s),t[Cn]=e.current,lo(t.nodeType===8?t.parentNode:t),new rf(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=by(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Jr(t)};St.hydrate=function(t,e,n){if(!su(e))throw Error(R(200));return au(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!sf(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=X0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y0(e,null,t,1,n??null,s,!1,a,o),t[Cn]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ru(e)};St.render=function(t,e,n){if(!su(e))throw Error(R(200));return au(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!su(t))throw Error(R(40));return t._reactRootContainer?(Jr(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};St.unstable_batchedUpdates=Xp;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!su(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return au(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(t){console.error(t)}}J0(),Jg.exports=St;var __=Jg.exports,Z0,Qm=__;Z0=Qm.createRoot,Qm.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vo.apply(null,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const Ym="popstate";function E_(t){t===void 0&&(t={});function e(r,s){let{pathname:a,search:o,hash:i}=r.location;return sd("",{pathname:a,search:o,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:wl(s)}return $_(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function af(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function T_(){return Math.random().toString(36).substr(2,8)}function Xm(t,e){return{usr:t.state,key:t.key,idx:e}}function sd(t,e,n,r){return n===void 0&&(n=null),vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?da(e):e,{state:n,key:e&&e.key||r||T_()})}function wl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function da(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $_(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,i=Yn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(vo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){i=Yn.Pop;let b=c(),m=b==null?null:b-u;u=b,l&&l({action:i,location:v.location,delta:m})}function p(b,m){i=Yn.Push;let y=sd(v.location,b,m);u=c()+1;let x=Xm(y,u),k=v.createHref(y);try{o.pushState(x,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;s.location.assign(k)}a&&l&&l({action:i,location:v.location,delta:1})}function h(b,m){i=Yn.Replace;let y=sd(v.location,b,m);u=c();let x=Xm(y,u),k=v.createHref(y);o.replaceState(x,"",k),a&&l&&l({action:i,location:v.location,delta:0})}function g(b){let m=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof b=="string"?b:wl(b);return y=y.replace(/ $/,"%20"),_e(m,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,m)}let v={get action(){return i},get location(){return t(s,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Ym,d),l=b,()=>{s.removeEventListener(Ym,d),l=null}},createHref(b){return e(s,b)},createURL:g,encodeLocation(b){let m=g(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:h,go(b){return o.go(b)}};return v}var Jm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jm||(Jm={}));function I_(t,e,n){return n===void 0&&(n="/"),C_(t,e,n)}function C_(t,e,n,r){let s=typeof e=="string"?da(e):e,a=Zs(s.pathname||"/",n);if(a==null)return null;let o=ev(t);A_(o);let i=null,l=V_(a);for(let u=0;i==null&&u<o.length;++u)i=B_(o[u],l);return i}function ev(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,i)=>{let l={relativePath:i===void 0?a.path||"":i,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ir([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(_e(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ev(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:F_(u,a.index),routesMeta:c})};return t.forEach((a,o)=>{var i;if(a.path===""||!((i=a.path)!=null&&i.includes("?")))s(a,o);else for(let l of tv(a.path))s(a,o,l)}),e}function tv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=tv(r.join("/")),i=[];return i.push(...o.map(l=>l===""?a:[a,l].join("/"))),s&&i.push(...o),i.map(l=>t.startsWith("/")&&l===""?"/":l)}function A_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const O_=/^:[\w-]+$/,D_=3,P_=2,j_=1,R_=10,L_=-2,Zm=t=>t==="*";function F_(t,e){let n=t.split("/"),r=n.length;return n.some(Zm)&&(r+=L_),e&&(r+=P_),n.filter(s=>!Zm(s)).reduce((s,a)=>s+(O_.test(a)?D_:a===""?j_:R_),r)}function z_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function B_(t,e,n){let{routesMeta:r}=t,s={},a="/",o=[];for(let i=0;i<r.length;++i){let l=r[i],u=i===r.length-1,c=a==="/"?e:e.slice(a.length)||"/",d=ad({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!d)return null;Object.assign(s,d.params),o.push({params:s,pathname:ir([a,d.pathname]),pathnameBase:H_(ir([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=ir([a,d.pathnameBase]))}return o}function ad(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=M_(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:h}=c;if(p==="*"){let v=i[d]||"";o=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const g=i[d];return h&&!g?u[p]=void 0:u[p]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:t}}function M_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),af(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,l)=>(r.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function V_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return af(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Zs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const U_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K_=t=>U_.test(t);function W_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?da(t):t,a;if(n)if(K_(n))a=n;else{if(n.includes("//")){let o=n;n=sv(n),af(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=eg(n.substring(1),"/"):a=eg(n,e)}else a=e;return{pathname:a,search:G_(r),hash:Q_(s)}}function eg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Yu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nv(t,e){let n=q_(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rv(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=da(t):(s=vo({},t),_e(!s.pathname||!s.pathname.includes("?"),Yu("?","pathname","search",s)),_e(!s.pathname||!s.pathname.includes("#"),Yu("#","pathname","hash",s)),_e(!s.search||!s.search.includes("#"),Yu("#","search","hash",s)));let a=t===""||s.pathname==="",o=a?"/":s.pathname,i;if(o==null)i=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;s.pathname=p.join("/")}i=d>=0?e[d]:"/"}let l=W_(s,i),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sv=t=>t.replace(/\/\/+/g,"/"),ir=t=>sv(t.join("/")),H_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),G_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Q_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Y_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const av=["post","put","patch","delete"];new Set(av);const X_=["get",...av];new Set(X_);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bo.apply(null,arguments)}const ou=D.createContext(null),ov=D.createContext(null),xr=D.createContext(null),iu=D.createContext(null),cs=D.createContext({outlet:null,matches:[],isDataRoute:!1}),iv=D.createContext(null);function J_(t,e){let{relative:n}=e===void 0?{}:e;Bo()||_e(!1);let{basename:r,navigator:s}=D.useContext(xr),{hash:a,pathname:o,search:i}=lu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ir([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Bo(){return D.useContext(iu)!=null}function Mo(){return Bo()||_e(!1),D.useContext(iu).location}function lv(t){D.useContext(xr).static||D.useLayoutEffect(t)}function Z_(){let{isDataRoute:t}=D.useContext(cs);return t?pE():eE()}function eE(){Bo()||_e(!1);let t=D.useContext(ou),{basename:e,future:n,navigator:r}=D.useContext(xr),{matches:s}=D.useContext(cs),{pathname:a}=Mo(),o=JSON.stringify(nv(s,n.v7_relativeSplatPath)),i=D.useRef(!1);return lv(()=>{i.current=!0}),D.useCallback(function(u,c){if(c===void 0&&(c={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=rv(u,JSON.parse(o),a,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:ir([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,a,t])}function lu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(xr),{matches:s}=D.useContext(cs),{pathname:a}=Mo(),o=JSON.stringify(nv(s,r.v7_relativeSplatPath));return D.useMemo(()=>rv(t,JSON.parse(o),a,n==="path"),[t,o,a,n])}function tE(t,e){return nE(t,e)}function nE(t,e,n,r){Bo()||_e(!1);let{navigator:s}=D.useContext(xr),{matches:a}=D.useContext(cs),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Mo(),c;if(e){var d;let b=typeof e=="string"?da(e):e;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||_e(!1),c=b}else c=u;let p=c.pathname||"/",h=p;if(l!=="/"){let b=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=I_(t,{pathname:h}),v=iE(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},i,b.params),pathname:ir([l,s.encodeLocation?s.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ir([l,s.encodeLocation?s.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,r);return e&&v?D.createElement(iu.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Yn.Pop}},v):v}function rE(){let t=dE(),e=Y_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:s},n):null,null)}const sE=D.createElement(rE,null);class aE extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(cs.Provider,{value:this.props.routeContext},D.createElement(iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oE(t){let{routeContext:e,match:n,children:r}=t,s=D.useContext(ou);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(cs.Provider,{value:e},r)}function iE(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,i=(s=n)==null?void 0:s.errors;if(i!=null){let c=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);c>=0||_e(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:h}=n,g=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let h,g=!1,v=null,b=null;n&&(h=i&&d.route.id?i[d.route.id]:void 0,v=d.route.errorElement||sE,l&&(u<0&&p===0?(fE("route-fallback"),g=!0,b=null):u===p&&(g=!0,b=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,p+1)),y=()=>{let x;return h?x=v:g?x=b:d.route.Component?x=D.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=c,D.createElement(oE,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?D.createElement(aE,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:y(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):y()},null)}var uv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uv||{}),cv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cv||{});function lE(t){let e=D.useContext(ou);return e||_e(!1),e}function uE(t){let e=D.useContext(ov);return e||_e(!1),e}function cE(t){let e=D.useContext(cs);return e||_e(!1),e}function dv(t){let e=cE(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function dE(){var t;let e=D.useContext(iv),n=uE(),r=dv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function pE(){let{router:t}=lE(uv.UseNavigateStable),e=dv(cv.UseNavigateStable),n=D.useRef(!1);return lv(()=>{n.current=!0}),D.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,bo({fromRouteId:e},a)))},[t,e])}const tg={};function fE(t,e,n){tg[t]||(tg[t]=!0)}function hE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ys(t){_e(!1)}function mE(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Yn.Pop,navigator:a,static:o=!1,future:i}=t;Bo()&&_e(!1);let l=e.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:l,navigator:a,static:o,future:bo({v7_relativeSplatPath:!1},i)}),[l,i,a,o]);typeof r=="string"&&(r=da(r));let{pathname:c="/",search:d="",hash:p="",state:h=null,key:g="default"}=r,v=D.useMemo(()=>{let b=Zs(c,l);return b==null?null:{location:{pathname:b,search:d,hash:p,state:h,key:g},navigationType:s}},[l,c,d,p,h,g,s]);return v==null?null:D.createElement(xr.Provider,{value:u},D.createElement(iu.Provider,{children:n,value:v}))}function gE(t){let{children:e,location:n}=t;return tE(od(e),n)}new Promise(()=>{});function od(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,s)=>{if(!D.isValidElement(r))return;let a=[...e,s];if(r.type===D.Fragment){n.push.apply(n,od(r.props.children,a));return}r.type!==ys&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=od(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xl.apply(null,arguments)}function pv(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function yE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vE(t,e){return t.button===0&&(!e||e==="_self")&&!yE(t)}const bE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wE=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],xE="6";try{window.__reactRouterVersion=xE}catch{}const kE=D.createContext({isTransitioning:!1}),NE="startTransition",ng=hN[NE];function SE(t){let{basename:e,children:n,future:r,window:s}=t,a=D.useRef();a.current==null&&(a.current=E_({window:s,v5Compat:!0}));let o=a.current,[i,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=D.useCallback(d=>{u&&ng?ng(()=>l(d)):l(d)},[l,u]);return D.useLayoutEffect(()=>o.listen(c),[o,c]),D.useEffect(()=>hE(r),[r]),D.createElement(mE,{basename:e,children:n,location:i.location,navigationType:i.action,navigator:o,future:r})}const _E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fv=D.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:i,target:l,to:u,preventScrollReset:c,viewTransition:d}=e,p=pv(e,bE),{basename:h}=D.useContext(xr),g,v=!1;if(typeof u=="string"&&EE.test(u)&&(g=u,_E))try{let x=new URL(window.location.href),k=u.startsWith("//")?new URL(x.protocol+u):new URL(u),E=Zs(k.pathname,h);k.origin===x.origin&&E!=null?u=E+k.search+k.hash:v=!0}catch{}let b=J_(u,{relative:s}),m=IE(u,{replace:o,state:i,target:l,preventScrollReset:c,relative:s,viewTransition:d});function y(x){r&&r(x),x.defaultPrevented||m(x)}return D.createElement("a",xl({},p,{href:g||b,onClick:v||a?r:y,ref:n,target:l}))}),TE=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:a="",end:o=!1,style:i,to:l,viewTransition:u,children:c}=e,d=pv(e,wE),p=lu(l,{relative:d.relative}),h=Mo(),g=D.useContext(ov),{navigator:v,basename:b}=D.useContext(xr),m=g!=null&&CE(p)&&u===!0,y=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,x=h.pathname,k=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;s||(x=x.toLowerCase(),k=k?k.toLowerCase():null,y=y.toLowerCase()),k&&b&&(k=Zs(k,b)||k);const E=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let $=x===y||!o&&x.startsWith(y)&&x.charAt(E)==="/",I=k!=null&&(k===y||!o&&k.startsWith(y)&&k.charAt(y.length)==="/"),C={isActive:$,isPending:I,isTransitioning:m},A=$?r:void 0,P;typeof a=="function"?P=a(C):P=[a,$?"active":null,I?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let j=typeof i=="function"?i(C):i;return D.createElement(fv,xl({},d,{"aria-current":A,className:P,ref:n,style:j,to:l,viewTransition:u}),typeof c=="function"?c(C):c)});var id;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(id||(id={}));var rg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rg||(rg={}));function $E(t){let e=D.useContext(ou);return e||_e(!1),e}function IE(t,e){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}=e===void 0?{}:e,l=Z_(),u=Mo(),c=lu(t,{relative:o});return D.useCallback(d=>{if(vE(d,n)){d.preventDefault();let p=r!==void 0?r:wl(u)===wl(c);l(t,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[u,l,c,r,s,n,t,a,o,i])}function CE(t,e){e===void 0&&(e={});let n=D.useContext(kE);n==null&&_e(!1);let{basename:r}=$E(id.useViewTransitionState),s=lu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Zs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Zs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ad(s.pathname,o)!=null||ad(s.pathname,a)!=null}var AE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const OE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ot=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:a=2,absoluteStrokeWidth:o,children:i,...l},u)=>D.createElement("svg",{ref:u,...AE,width:s,height:s,stroke:r,strokeWidth:o?Number(a)*24/Number(s):a,className:`lucide lucide-${OE(t)}`,...l},[...e.map(([c,d])=>D.createElement(c,d)),...(Array.isArray(i)?i:[i])||[]]));return n.displayName=`${t}`,n},hv=ot("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),DE=ot("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),PE=ot("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),of=ot("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),jE=ot("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Vo=ot("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),RE=ot("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),mv=ot("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]),LE=ot("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]),gv=ot("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]),FE=ot("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),zE=ot("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),BE=ot("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),ME=ot("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]),VE=ot("WifiOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65",key:"11utq1"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76",key:"hxefdu"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68",key:"q734kn"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76",key:"piq4yl"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]),UE=[{to:"/identify",label:"Cámara",Icon:of},{to:"/listen",label:"Audio",Icon:mv},{to:"/journal",label:"Diario",Icon:PE},{to:"/settings",label:"Ajustes",Icon:zE}];function yv(){return N.jsx("nav",{className:"fixed bottom-0 left-0 right-0 h-16 bg-[#16213E] border-t border-[#2D6A4F] z-50",children:N.jsx("ul",{className:"mx-auto flex h-full max-w-4xl justify-between px-4",children:UE.map(({to:t,label:e,Icon:n})=>N.jsx("li",{className:"flex-1",children:N.jsx(TE,{to:t,className:({isActive:r})=>`group h-full flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${r?"text-[#52B788]":"text-[#4a5568]"}`,children:({isActive:r})=>N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"relative flex h-6 w-6 items-center justify-center",children:[r&&N.jsx("span",{className:"absolute top-0 h-1.5 w-1.5 rounded-full bg-[#52B788]"}),N.jsx(n,{className:"h-6 w-6"})]}),N.jsx("span",{className:"text-[10px] uppercase tracking-[0.2em]",children:e})]})})},t))})})}const KE=[{title:"EcoScan",desc:"Analiza ecosistemas por foto",icon:of,to:"/identify"},{title:"FloraID",desc:"Identifica plantas y árboles",icon:Vo,to:"/identify"},{title:"FaunaID",desc:"Identifica animales con protocolo de seguridad",icon:gv,to:"/identify"},{title:"BioListen",desc:"Detecta especies por sonido",icon:mv,to:"/listen"}];function WE({title:t,desc:e,Icon:n,to:r}){return N.jsxs(fv,{to:r,className:"field-card group flex min-h-[180px] flex-col justify-between transition duration-200 hover:-translate-y-1 hover:border-[#52B788]/60",children:[N.jsxs("div",{children:[N.jsx(n,{className:"h-12 w-12 text-[#52B788]"}),N.jsx("h3",{className:"mt-4 text-xl font-bold text-white",children:t}),N.jsx("p",{className:"mt-2 text-sm text-[#94a3b8]",children:e})]}),N.jsx("div",{className:"flex items-center justify-end text-[#94a3b8]",children:N.jsx(DE,{className:"h-5 w-5 transition group-hover:text-[#52B788]"})})]})}function qE(){return N.jsxs("div",{className:"min-h-screen bg-background px-4 pb-24 pt-6 text-textLight",children:[N.jsxs("section",{className:"relative overflow-hidden rounded-[28px] border border-[#2D6A4F]/50 bg-[#16213E] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)]",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/20 via-transparent to-[#1A1A2E]/80"}),N.jsxs("div",{className:"relative flex flex-col gap-4",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-3xl bg-[#2D6A4F]/20 text-[#52B788]",children:N.jsx(Vo,{className:"h-8 w-8"})}),N.jsxs("div",{children:[N.jsx("h1",{className:"text-[32px] font-bold text-[#52B788]",children:"WildLens"}),N.jsx("p",{className:"mt-1 text-base italic text-[#E8F5E9]/90",children:"Nature speaks. WildLens listens."})]})]}),N.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2 text-sm text-[#cbd5e1] ring-1 ring-[#2D6A4F]/20",children:[N.jsx(VE,{className:"h-4 w-4 text-[#52B788]"}),"Campeche, México · Offline Ready"]})]})]}),N.jsx("main",{className:"mt-8 grid gap-4 sm:grid-cols-2",children:KE.map(t=>N.jsx(WE,{title:t.title,desc:t.desc,Icon:t.icon,to:t.to},t.title))}),N.jsxs("footer",{className:"mt-8 flex flex-col gap-2 text-sm text-[#94a3b8]",children:[N.jsx("p",{children:"Base de datos: 12 fauna · 8 flora · 4 ecosistemas"}),N.jsx("p",{children:"v0.1.0 · Powered by Foundry IQ"})]}),N.jsx(yv,{})]})}function HE(){const t=D.useRef(null),[e,n]=D.useState(!1),[r,s]=D.useState(null),[a,o]=D.useState(!1),i=D.useRef(null);D.useEffect(()=>()=>{i.current&&i.current.getTracks().forEach(d=>d.stop())},[]);async function l(){s(null),o(!0);try{const d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});i.current=d,t.current&&(t.current.srcObject=d,await t.current.play()),n(!0)}catch(d){s((d==null?void 0:d.message)||"Permiso de cámara denegado o no disponible."),n(!1)}finally{o(!1)}}function u(){i.current&&(i.current.getTracks().forEach(d=>d.stop()),i.current=null),t.current&&(t.current.srcObject=null)}async function c(){if(!t.current)throw new Error("Video element not initialized");const d=t.current,p=d.videoWidth||640,h=d.videoHeight||480,g=document.createElement("canvas");g.width=p,g.height=h;const v=g.getContext("2d");if(!v)throw new Error("No se pudo crear el contexto de canvas");v.drawImage(d,0,0,p,h);const b=g.toDataURL("image/jpeg"),m=new Image;return m.src=b,await new Promise(y=>{m.onload=()=>y(),m.onerror=()=>y()}),{image:m,base64:b}}return{videoRef:t,startCamera:l,stopCamera:u,capturePhoto:c,hasPermission:e,error:r,isLoading:a}}/**
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
 */const GE=1e-7,QE=1e-4;class vv{refCount(e){return it("refCount")}incRef(e){return it("incRef")}timerAvailable(){return!0}time(e){return it("time")}read(e){return it("read")}readSync(e){return it("readSync")}readToGPU(e,n){return it("readToGPU")}numDataIds(){return it("numDataIds")}disposeData(e,n){return it("disposeData")}write(e,n,r){return it("write")}move(e,n,r,s,a){return it("move")}createTensorFromGPUData(e,n,r){return it("createTensorFromGPUData")}memory(){return it("memory")}floatPrecision(){return it("floatPrecision")}epsilon(){return this.floatPrecision()===32?GE:QE}dispose(){return it("dispose")}}function it(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function S(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function Rt(t,e,n=""){S(Dn(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function pa(t){S(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function $e(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function YE(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==null&&e[n]!==null&&t[n]!==e[n])return!1;return!0}function Dn(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function wo(t){return t%1===0}function Fi(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function uu(t,e){const n=e.length;return t=t==null?e.map((r,s)=>s):[].concat(t),S(t.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),S(t.every(r=>wo(r)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(r=>r<0?n+r:r)}function XE(t,e){const n=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||s?null:uu(e,t).sort();let o=0;for(let i=0;i<t.length;++i){if(a!=null){if(a[o]===i&&t[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${t[i]}' is not 1`);(a[o]==null||a[o]>i)&&t[i]===1&&(n.push(t[i]),r.push(i)),a[o]<=i&&o++}t[i]!==1&&(n.push(t[i]),r.push(i))}return{newShape:n,keptDims:r}}function JE(t,e){return bv(t,e)}function bv(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function ZE(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function eT(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function ld(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function tT(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function lf(t){return typeof t=="string"||t instanceof String}function nT(t){return typeof t=="boolean"}function rT(t){return typeof t=="number"}function cu(t){return Array.isArray(t)?cu(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":rT(t)?"float32":lf(t)?"string":nT(t)?"bool":"float32"}function ud(t){return!!(t&&t.constructor&&t.call&&t.apply)}function uf(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function wv(t,e,n,r=!1){const s=new Array;if(e.length===1){const a=e[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=n[t+o]}else{const a=e[0],o=e.slice(1),i=o.reduce((l,u)=>l*u)*(r?2:1);for(let l=0;l<a;l++)s[l]=wv(t+l*i,o,n,r)}return s}function cd(t,e,n=!1){if(t.length===0)return e[0];const r=t.reduce((s,a)=>s*a)*(n?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return wv(0,t,e,n)}function xv(t,e){const n=cf(t,e);for(let r=0;r<n.length;r++)n[r]=1;return n}function cf(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function Et(t){t.forEach(e=>{S(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function Zr(t){return t&&t.then&&typeof t.then=="function"}/**
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
 */const sg="tfjsflags";class kv{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=sT,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(X().getBool("IS_TEST")||X().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,r){if(this.flagRegistry[e]={evaluationFn:n,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];X().getBool("IS_TEST")||X().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(Zr(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);sg in e&&e[sg].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=oT(s,a)})}}function sT(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(aT(e,r[0],r[1]),r.join("="))),e}function aT(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function oT(t,e){const n=e.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:e}function X(){return df}let df=null;function iT(t){df=t}/**
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
 */let Xu;function Nv(){if(Xu==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");Xu=t}return Xu}function lT(){const t=Nv();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function pf(t,e){const n=lT();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}const Sv="Abs",_v="Acos",Ev="Acosh",ff="Add",Tv="AddN",$v="All",Iv="Any",Cv="ArgMax",Av="ArgMin",Ov="Asin",Dv="Asinh",Pv="Atan",jv="Atanh",Rv="Atan2",Lv="AvgPool",Fv="AvgPool3D",zv="BatchMatMul",Bv="BatchToSpaceND",Mv="Bincount",Vv="BitwiseAnd",Uv="BroadcastArgs",hf="Cast",Kv="Ceil",Wv="ClipByValue",qv="Complex",Hv="ComplexAbs",Gv="Concat",Qv="Conv2D",Yv="Conv2DBackpropFilter",Xv="Conv2DBackpropInput",Jv="Conv3D",Zv="Conv3DBackpropInputV2",eb="Cos",tb="Cosh",nb="Cumprod",rb="Cumsum",sb="CropAndResize",ab="DenseBincount",ob="DepthToSpace",ib="DepthwiseConv2dNative",lb="DepthwiseConv2dNativeBackpropFilter",ub="DepthwiseConv2dNativeBackpropInput",cb="Diag",db="Dilation2D",pb="RealDiv",fb="Einsum",hb="Elu",mb="Erf",gb="Equal",yb="Exp",vb="ExpandDims",bb="Expm1",wb="FFT",xb="Fill",kb="FlipLeftRight",Nb="Floor",Sb="FloorDiv",_b="FusedBatchNorm",Eb="GatherV2",Tb="GatherNd",$b="Greater",Ib="GreaterEqual",mf="Identity",Cb="IFFT",Ab="Imag",Ob="IsFinite",Db="IsInf",Pb="IsNan",jb="LeakyRelu",Rb="Less",Lb="LessEqual",Fb="LinSpace",zb="Log",Bb="Log1p",Mb="LogicalAnd",Vb="LogicalNot",Ub="LogicalOr",Kb="LRN",Wb="Max",qb="Maximum",Hb="MaxPool",Gb="MaxPool3D",Qb="MaxPoolWithArgmax",Yb="Mean",Xb="Min",Jb="Minimum",Zb="MirrorPad",ew="Mod",tw="Multinomial",nw="Multiply",rw="Neg",sw="NotEqual",aw="NonMaxSuppressionV3",ow="NonMaxSuppressionV4",iw="NonMaxSuppressionV5",lw="OnesLike",uw="OneHot",cw="Pack",dw="PadV2",pw="Pow",fw="Prelu",hw="Prod",mw="RaggedGather",gw="RaggedRange",yw="RaggedTensorToTensor",vw="Range",bw="Real",ww="Reciprocal",xw="Relu",kw="Reshape",Nw="ResizeNearestNeighbor",Sw="ResizeBilinear",_w="Relu6",Ew="Reverse",Tw="Round",$w="Rsqrt",Iw="ScatterNd",Cw="TensorScatterUpdate",Aw="SearchSorted",Ow="Select",Dw="Selu",Pw="Slice",jw="Sin",Rw="Sinh",Lw="Sign",Fw="Sigmoid",zw="Softplus",Bw="Sqrt",Mw="Sum",Vw="SpaceToBatchND",Uw="SplitV",Kw="Softmax",Ww="SparseFillEmptyRows",qw="SparseReshape",Hw="SparseSegmentMean",Gw="SparseSegmentSum",Qw="SparseToDense",Yw="SquaredDifference",Xw="StaticRegexReplace",Jw="StridedSlice",Zw="StringNGrams",e1="StringSplit",t1="StringToHashBucketFast",n1="Sub",r1="Tan",s1="Tanh",gf="Tile",a1="TopK",o1="Transform",zi="Transpose",i1="Unique",l1="Unpack",u1="UnsortedSegmentSum",c1="ZerosLike",d1="Step",dd="FromPixels",p1="RotateWithOffset",pd="_FusedMatMul",fd="FusedConv2D",hd="FusedDepthwiseConv2D";/**
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
 */function Ea(...t){X().getBool("IS_TEST")||X().getBool("PROD")||console.warn(...t)}/**
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
 */const f1=pf("kernelRegistry",()=>new Map),uT=pf("gradRegistry",()=>new Map);function kl(t,e){const n=cT(t,e);return f1.get(n)}function md(t){return uT.get(t)}function gd(t){const e=f1.entries(),n=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===t&&n.push(o)}return n}function cT(t,e){return`${e}_${t}`}/**
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
 */function h1(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}/**
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
 */function dT(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function m1(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=xo(t)),X().getBool("DEBUG")&&ZE(t,e),dT(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let r=0;r<n.length;++r)Math.round(t[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${e}`)}function Nl(){return X().platform.now()}function pT(t,e="utf-8"){return e=e||"utf-8",X().platform.encode(t,e)}function ag(t,e="utf-8"){return e=e||"utf-8",X().platform.decode(t,e)}function jt(t){return X().platform.isTypedArray!=null?X().platform.isTypedArray(t):h1(t)}function xo(t,e=[],n=!1){if(e==null&&(e=[]),typeof t=="boolean"||typeof t=="number"||typeof t=="string"||Zr(t)||t==null||jt(t)&&n)e.push(t);else if(Array.isArray(t)||jt(t))for(let r=0;r<t.length;++r)xo(t[r],e,n);else{let r=-1;for(const s of Object.keys(t))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)xo(t[s],e,n)}return e}/**
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
 */class fT{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new mT)}profileKernel(e,n,r){let s;const a=()=>{s=r()};let o;const i=Nl();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const u of s)u.dataSync();o=Promise.resolve({kernelMs:Nl()-i})}if(X().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<s.length;u++){const c=s[u];c.data().then(d=>{hT(d,c.dtype,e)})}return{kernelName:e,outputs:s,inputs:n,timeMs:o.then(u=>u.kernelMs),extraInfo:o.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:r,timeMs:s,inputs:a,extraInfo:o}=e;r.forEach(i=>{Promise.all([i.data(),s,o]).then(l=>{this.logger.logKernelProfile(n,i,l[0],l[1],a,l[2])})})}}function hT(t,e,n){if(e!=="float32")return!1;for(let r=0;r<t.length;r++){const s=t[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class mT{logKernelProfile(e,n,r,s,a,o){const i=typeof s=="number"?Fi(`${s}ms`,9):s.error,l=Fi(e,25),u=n.rank,c=n.size,d=Fi(n.shape.toString(),14);let p="";for(const h in a){const g=a[h];if(g!=null){const v=g.shape||n.shape,b=v.length;p+=`${h}: ${b}D ${b>0?v:""} `}}console.log(`%c${l}	%c${i}	%c${u}D ${d}	%c${c}	%c${p}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
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
 */function gT(t,e,n){const r={},s={};for(let l=0;l<e.length;l++)r[e[l].id]=!0;for(let l=0;l<t.length;l++){const u=t[l],c=u.inputs;for(const d in c){const p=c[d];let h=!1;for(let g=0;g<e.length;g++)if(r[p.id]){u.outputs.forEach(v=>r[v.id]=!0),h=!0,s[u.id]=!0;break}if(h)break}}const a={};a[n.id]=!0;const o={};for(let l=t.length-1;l>=0;l--){const u=t[l],c=u.inputs;for(let d=0;d<u.outputs.length;d++)if(a[u.outputs[d].id]){for(const p in c)a[c[p].id]=!0,o[u.id]=!0;break}}const i=[];for(let l=0;l<t.length;l++){const u=t[l];if(s[u.id]&&o[u.id]){const c={};for(const p in u.inputs){const h=u.inputs[p];r[h.id]&&(c[p]=h)}const d=Object.assign({},u);d.inputs=c,d.outputs=u.outputs,i.push(d)}}return i}function yT(t,e,n,r){for(let s=e.length-1;s>=0;s--){const a=e[s],o=[];if(a.outputs.forEach(l=>{const u=t[l.id];u!=null?o.push(u):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const l in a.inputs){if(!(l in i))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(i)}.`);const u=n(()=>i[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);const c=a.inputs[l];if(!Dn(u.shape,c.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(t[c.id]==null)t[c.id]=u;else{const d=t[c.id];t[c.id]=r(d,u),d.dispose()}}}}/**
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
 */const og=20,Ta=3,Ju=7;function vT(t,e,n,r){const s=uf(e),a=bT(t,e,n,s),o=e.length,i=Bi(t,e,n,s,a),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${o}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(i.map(u=>"    "+u).join(`
`)),l.join(`
`)}function bT(t,e,n,r){const s=$e(e),a=r[r.length-1],o=new Array(a).fill(0),i=e.length,l=n==="complex64"?Ra(t):t;if(i>1)for(let u=0;u<s/a;u++){const c=u*a;for(let d=0;d<a;d++)o[d]=Math.max(o[d],ja(l[c+d],0,n).length)}return o}function ja(t,e,n){let r;return Array.isArray(t)?r=`${parseFloat(t[0].toFixed(Ju))} + ${parseFloat(t[1].toFixed(Ju))}j`:lf(t)?r=`'${t}'`:n==="bool"?r=g1(t):r=parseFloat(t.toFixed(Ju)).toString(),Fi(r,e)}function g1(t){return t===0?"false":"true"}function Bi(t,e,n,r,s,a=!0){const o=n==="complex64"?2:1,i=e[0],l=e.length;if(l===0){if(n==="complex64"){const v=Ra(t);return[ja(v[0],0,n)]}return n==="bool"?[g1(t[0])]:[t[0].toString()]}if(l===1){if(i>og){const b=Ta*o;let m=Array.from(t.slice(0,b)),y=Array.from(t.slice((i-Ta)*o,i*o));return n==="complex64"&&(m=Ra(m),y=Ra(y)),["["+m.map((x,k)=>ja(x,s[k],n)).join(", ")+", ..., "+y.map((x,k)=>ja(x,s[i-Ta+k],n)).join(", ")+"]"]}return["["+(n==="complex64"?Ra(t):Array.from(t)).map((b,m)=>ja(b,s[m],n)).join(", ")+"]"]}const u=e.slice(1),c=r.slice(1),d=r[0]*o,p=[];if(i>og){for(let v=0;v<Ta;v++){const b=v*d,m=b+d;p.push(...Bi(t.slice(b,m),u,n,c,s,!1))}p.push("...");for(let v=i-Ta;v<i;v++){const b=v*d,m=b+d;p.push(...Bi(t.slice(b,m),u,n,c,s,v===i-1))}}else for(let v=0;v<i;v++){const b=v*d,m=b+d;p.push(...Bi(t.slice(b,m),u,n,c,s,v===i-1))}const h=l===2?",":"";p[0]="["+(i>0?p[0]+h:"");for(let v=1;v<p.length-1;v++)p[v]=" "+p[v]+h;let g=`,
`;for(let v=2;v<l;v++)g+=`
`;return p[p.length-1]=" "+p[p.length-1]+"]"+(a?"":g),p}function Ra(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}/**
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
 */class Sl{constructor(e,n,r){if(this.dtype=n,this.shape=e.slice(),this.size=$e(e),r!=null){const s=r.length;S(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||bv(n,this.size),this.strides=uf(e)}set(e,...n){n.length===0&&(n=[0]),S(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const s of e){if(s<0||s>=this.shape[n]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}n++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(e/this.strides[r]),e-=n[r]*this.strides[r];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return Mt().makeTensor(this.values,this.shape,this.dtype)}}let Mt=null,vs=null;function wT(t){Mt=t}function xT(t){vs=t}class Re{constructor(e,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=$e(e),this.strides=uf(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return vs.buffer(this.shape,this.dtype,e)}bufferSync(){return vs.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return cd(this.shape,e,this.dtype==="complex64")}arraySync(){return cd(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=Mt().read(this.dataId);if(this.dtype==="string"){const n=await e;try{return n.map(r=>ag(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Mt().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Mt().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>ag(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Mt().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Mt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return vs.print(this,e)}clone(){return this.throwIfDisposed(),vs.clone(this)}toString(e=!1){const n=this.dataSync();return vT(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),vs.cast(this,e)}variable(e=!0,n,r){return this.throwIfDisposed(),Mt().makeVariable(this,e,n,r)}}Object.defineProperty(Re,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function y1(){return pf("Tensor",()=>Re)}y1();class ko extends Re{constructor(e,n,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=n,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Dn(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Mt().disposeTensor(this),this.dataId=e.dataId,Mt().incRef(this,null)}dispose(){Mt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(ko,Symbol.hasInstance,{value:t=>t instanceof Re&&t.assign!=null&&t.assign instanceof Function});/**
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
 */var yd;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(yd||(yd={}));var vd;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(vd||(vd={}));var bd;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(bd||(bd={}));var wd;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(wd||(wd={}));var xd;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(xd||(xd={}));const kT={float32:wd,int32:vd,bool:bd,complex64:xd};function v1(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return kT[t][e]}function b1(t){return t!=null&&typeof t=="object"&&"texture"in t&&t.texture instanceof WebGLTexture}function w1(t){return typeof GPUBuffer<"u"&&t!=null&&typeof t=="object"&&"buffer"in t&&t.buffer instanceof GPUBuffer}/**
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
 */function Ne(t,e){if(t.dtype===e.dtype)return[t,e];const n=v1(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function NT(t,e){S(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function x1(t){const e=[];return k1(t,e,new Set),e}function k1(t,e,n){if(t==null)return;if(t instanceof Re){e.push(t);return}if(!ST(t))return;const r=t;for(const s in r){const a=r[s];n.has(a)||(n.add(a),k1(a,e,n))}}function ST(t){return Array.isArray(t)||typeof t=="object"}/**
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
 */function Zu(t){return t.kernelName!=null}class ig{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ea{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ig}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,r=1){return e in this.registryFactory?(Ea(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(e);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new fT(this.backendInstance),!0}setupRegisteredKernels(){gd(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){gd(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof vv)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[e]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Ea(`Initialization of backend ${e} failed`),Ea(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return Ea(`Initialization of backend ${e} failed`),Ea(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const r=this.state.tensorInfo.get(n),s=r.backend,a=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=e,e.move(n,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let r=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,n,r){e();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return ea.nextTensorId++}nextVariableId(){return ea.nextVariableId++}clone(e){const n=T.runKernel(mf,{x:e}),r={x:e},s=o=>({x:()=>{const i="float32",l={x:o},u={dtype:i};return T.runKernel(hf,l,u)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,a,{}),n}runKernel(e,n,r){if(this.backendName==null&&this.backend,!(kl(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,r){const s=this.backend.numDataIds();let a=0;r.forEach(l=>{a+=l.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let n,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let l;const u=Zu(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Zu(e)){const{kernelName:g,inputs:v,attrs:b}=e;this.backendName==null&&this.backend;const m=kl(g,this.backendName);S(m!=null,()=>`Cannot find registered kernel '${g}' for backend '${this.backendName}'`),i=()=>{const y=this.backend.numDataIds();l=m.kernelFunc({inputs:v,attrs:b,backend:this.backend});const x=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(g,y,x);const k=x.map(E=>E.rank!=null?E:this.makeTensorFromTensorInfo(E));if(s){const E=this.getTensorsForGradient(g,v,k);r=this.saveTensorsForBackwardMode(E)}return k}}else{const{forwardFunc:g}=e,v=b=>{s&&(r=b.map(m=>this.keep(this.clone(m))))};i=()=>{const b=this.backend.numDataIds();l=this.tidy(()=>g(this.backend,v));const m=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,b,m),m}}const{inputs:c,attrs:d}=e,p=Zu(e)?null:e.backwardsFunc;let h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(h=this.profiler.profileKernel(u,c,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),n=h.outputs)}),s&&this.addTapeNode(u,c,n,p,r,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(g=>c[g]!=null?c[g].shape:null),outputShapes:n.map(g=>g.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(l)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,n,r){const s=md(e);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let i;s.saveAllInputs?(S(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(u=>n[u])):i=a.map(u=>n[u]);const l=r.filter((u,c)=>o[c]);return i.concat(l)}return[]}makeTensor(e,n,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=e;r==="string"&&lf(e[0])&&(a=e.map(l=>pT(l)));const o=s.write(a,n,r),i=new Re(n,r,o,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const l=this.state.tensorInfo.get(o),u=tT(a);this.state.numBytes+=u-l.bytes,l.bytes=u}return i}makeTensorFromDataId(e,n,r,s){r=r||"float32";const a={dataId:e,shape:n,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(e,n){const{dataId:r,shape:s,dtype:a}=e,o=new Re(s,a,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(e,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const a=new ko(e,n,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*ld(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof ko||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*ld(e.dtype);this.state.numBytes-=r}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,r,s,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:r,saved:a},l=md(e);l!=null&&(s=l.gradFunc),s!=null&&(i.gradient=u=>(u=u.map((c,d)=>{if(c==null){const p=r[d],h=cf(p.size,p.dtype);return this.makeTensor(h,p.shape,p.dtype)}return c}),s(u.length>1?u:u[0],a,o))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=x1(e),r=new Set(n.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(e,n,r,s=!1){if(S(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));S(a instanceof Re,()=>"The result y returned by f() must be a tensor.");const o=gT(this.state.activeTape,n,a);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=r??_T(a.shape),yT(i,o,u=>this.tidy(u),ET);const l=n.map(u=>i[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const c of u.saved)c.dispose()}),this.state.activeTape=null),{value:a,grads:l}})}customGrad(e){return S(ud(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{S(n.every(i=>i instanceof Re),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,l)=>{s[l]=i});const a=(i,l)=>(r=e(...n,l),S(r.value instanceof Re,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),S(ud(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,l)=>{const u=r.gradFunc(i,l),c=Array.isArray(u)?u:[u];S(c.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),S(c.every(p=>p instanceof Re),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return c.forEach((p,h)=>{d[h]=()=>p}),d};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}async time(e){const n=Nl(),r=await this.backend.time(e);return r.wallMs=Nl()-n,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ig;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}ea.nextTensorId=0;ea.nextVariableId=0;function _T(t){const e=xv($e(t),"float32");return T.makeTensor(e,t,"float32")}function N1(){const t=Nv();if(t._tfengine==null){const e=new kv(t);t._tfengine=new ea(e)}return iT(t._tfengine.ENV),wT(()=>t._tfengine),t._tfengine}const T=N1();function ET(t,e){const n={a:t,b:e};return T.runKernel(ff,n)}/**
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
 */function TT(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
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
 */const nt=X();nt.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});nt.registerFlag("IS_BROWSER",()=>TT());nt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");nt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));nt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));nt.registerFlag("PROD",()=>!1);nt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>nt.getBool("DEBUG"));nt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);nt.registerFlag("IS_TEST",()=>!1);nt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>nt.getBool("DEBUG"));nt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);nt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);nt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
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
 */function kr(t,e){let n=t;if(jt(t))return e==="string"?[]:[t.length];if(b1(t)){const s=t.channels||"RGBA";return[t.height,t.width*s.length]}else if(w1(t))return[t.buffer.size/(e==null?4:ld(e))];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||jt(n)&&e!=="string";)r.push(n.length),n=n[0];return Array.isArray(t)&&X().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&S1(t,r,[]),r}function S1(t,e,n){if(n=n||[],!Array.isArray(t)&&!jt(t)){S(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}S(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),S(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const r=e.slice(1);for(let s=0;s<t.length;++s)S1(t[s],r,n.concat(s))}function lg(t,e,n,r){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function w(t,e,n,r="numeric"){if(t instanceof y1())return lg(r,t.dtype,e,n),t;let s=cu(t);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),lg(r,s,e,n),t==null||!jt(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const l=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${l}'`)}const a=kr(t,s);!jt(t)&&!Array.isArray(t)&&(t=[t]);const i=s!=="string"?m1(t,s):xo(t,[],!0);return T.makeTensor(i,a,s)}function _l(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((a,o)=>w(a,`${e}[${o}]`,n,r))}/**
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
 */const yf="__op";function _(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+yf;const s=(...a)=>{T.startScope(n);try{const o=r(...a);return Zr(o)&&console.error("Cannot return a Promise inside of tidy."),T.endScope(o),o}catch(o){throw T.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
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
 */function $T(t,e){const n=w(t,"real","complex"),r=w(e,"imag","complex");Rt(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return T.runKernel(qv,s)}const Pn=_({complex_:$T});/**
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
 */function Nr(t,e,n,r){if(r==null)r=cu(t);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(w1(t)||b1(t)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return T.backend.createTensorFromGPUData(t,e||n,r)}if(!jt(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Et(e);const s=$e(e),a=$e(n);S(s===a,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<n.length;++o){const i=n[o],l=o===n.length-1?i!==$e(e.slice(o)):!0;S(n[o]===e[o]||!l,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!jt(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=r!=="string"?m1(t,r):xo(t,[],!0),T.makeTensor(t,e,r)}/**
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
 */function Wt(t,e,n){const r=kr(t,n);return Nr(t,e,r,n)}/**
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
 */const es={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Qt{static join(e){return new Qt(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>jt(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let n=0;for(let r=0;r<e.length;r++){const s=e[r];r!==e.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=n+s.byteLength;this.shards.push({buffer:s,start:n,end:a}),n=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,n=isNaN(Number(n))?0:n,e=Math.max(0,e),n=Math.min(this.byteLength,n),n<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const s=n-e,a=new ArrayBuffer(s),o=new Uint8Array(a);let i=0;for(let l=r;l<this.shards.length;l++){const u=this.shards[l],d=e+i-u.start,p=i,g=Math.min(n,u.end)-u.start,v=new Uint8Array(u.buffer,d,g-d);if(o.set(v,p),i+=v.length,n<u.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function n(s){return e<s.start?-1:e>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=IT(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function IT(t,e){let n=0,r=t.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,a=e(t[s]);if(a===0)return s;a<0?r=s:n=s+1}return-1}/**
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
 */function ne(t,e){return T.tidy(t,e)}function Xe(t){x1(t).forEach(n=>n.dispose())}function Vt(t){return T.keep(t)}function _1(){return T.backendName}function E1(){return T.backend}/**
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
 */const cr=4;async function CT(t,e){const n=[],r=[],s=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);for(let o=0;o<s.length;++o){const i=s[o],l=Array.isArray(t)?t[o].tensor:t[i];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${l.dtype}`);const u={name:i,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const c=new Promise(async d=>{const p=await l.bytes(),h=p.reduce((b,m)=>b+m.length,0)+cr*p.length,g=new Uint8Array(h);let v=0;for(let b=0;b<p.length;b++){const m=p[b],y=new Uint8Array(new Uint32Array([m.length]).buffer);g.set(y,v),v+=cr,g.set(m,v),v+=m.length}d(g)});r.push(c)}else r.push(l.data());e!=null&&(u.group=e),n.push(u)}const a=await Promise.all(r);return{data:DT(a),specs:n}}function T1(t,e){const n=new Qt(t),r={};let s=0;for(const a of e){const o=AT(a,(i,l)=>n.slice(s+i,s+l));r[a.name]=$1(a,n.slice(s,s+o)),s+=o}return r}function AT(t,e){const n=$e(t.shape);let r;if("quantization"in t){const s=t.quantization;r=es[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=cr+new Uint32Array(e(s,s+cr))[0];return s}else r=es[t.dtype];return n*r}async function OT(t,e){const n=$e(t.shape);let r;if("quantization"in t){const s=t.quantization;r=es[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=cr+new Uint32Array(await e(s,s+cr))[0];return s}else r=es[t.dtype];return n*r}function $1(t,e){const n=t.name,r=t.dtype,s=t.shape,a=$e(s);let o,i=0;if("quantization"in t){const l=t.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${t.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${t.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${t.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const u=es[l.dtype],c=l.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){o=new Float32Array(c.length);for(let d=0;d<c.length;d++){const p=c[d];o[d]=p*l.scale+l.min}}else if(l.dtype==="float16")o=BT()(c);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(r==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);o=new Int32Array(c.length);for(let d=0;d<c.length;d++){const p=c[d];o[d]=Math.round(p*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*u}else if(r==="string"){const l=$e(t.shape);o=[];for(let u=0;u<l;u++){const c=new Uint32Array(e.slice(i,i+cr))[0];i+=cr;const d=new Uint8Array(e.slice(i,i+c));o.push(d),i+=c}}else{const l=es[r];if(r==="float32")o=new Float32Array(e);else if(r==="int32")o=new Int32Array(e);else if(r==="bool")o=new Uint8Array(e);else if(r==="complex64"){o=new Float32Array(e);const u=new Float32Array(o.length/2),c=new Float32Array(o.length/2);for(let g=0;g<u.length;g++)u[g]=o[g*2],c[g]=o[g*2+1];const d=Wt(u,s,"float32"),p=Wt(c,s,"float32"),h=Pn(d,p);return d.dispose(),p.dispose(),h}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*l}return Wt(o,s,r)}async function ug(t,e,n){let r=new Uint8Array(e);for(;r.byteLength<n;){const{done:s,value:a}=await t.read();if(s&&a==null){const i=n-r.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const o=new Uint8Array(r.length+a.byteLength);o.set(r,0),o.set(new Uint8Array(a),r.length),r=o}return r.buffer}async function I1(t,e){const n={},r=t.getReader();let s=new ArrayBuffer(0);for(const a of e){const o=await OT(a,async(u,c)=>(s=await ug(r,s,c),s.slice(u,c)));s=await ug(r,s,o);const i=s.slice(0,o);s=s.slice(o);const l=$1(a,i);if(n[a.name]=l,_1()==="webgpu"){const u=E1();"uploadToGPU"in u&&$e(l.shape)>=X().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&u.uploadToGPU(l.dataId)}}return n}function DT(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(a=>{if(e+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(e);let s=0;return n.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const vf=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function cg(t){return vf?Buffer.byteLength(t,"utf8"):new Blob([t]).size}function PT(t){if(vf)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let r=0,s=e.length;r<s;r++)n+=String.fromCharCode(e[r]);return btoa(n)}function jT(t){if(vf){const r=Buffer.from(t,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;++r)n.set([e.charCodeAt(r)],r);return n.buffer}function RT(t){return Qt.join(t)}function dg(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function C1(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(n.initializerSignature=t.initializerSignature),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function A1(t,e,n){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(r.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=n}return t.signature!=null&&(r.signature=t.signature),t.userDefinedMetadata!=null&&(r.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(r.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(r.initializerSignature=t.initializerSignature),r}async function bf(t,e){let n,r;return t.weightsManifest!=null&&([n,r]=await e(t.weightsManifest)),A1(t,n,r)}function Uo(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:cg(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:cg(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:new Qt(t.weightData).byteLength}}function kd(t){const e=[];for(const n of t)e.push(...n.weights);return e}function LT(){const t=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function FT(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function zT(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function BT(){const t=LT(),e=FT(),n=zT();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const i=r[o],l=t[n[i>>10]+(i&1023)]+e[i>>10];a[o]=l}return new Float32Array(s)}}/**
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
 */class ge{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ge.instance==null&&(ge.instance=new ge),ge.instance}static registerSaveRouter(e){ge.getInstance().saveRouters.push(e)}static registerLoadRouter(e){ge.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return ge.getHandlers(e,"save")}static getLoadHandlers(e,n){return ge.getHandlers(e,"load",n)}static getHandlers(e,n,r){const s=[];return(n==="load"?ge.getInstance().loadRouters:ge.getInstance().saveRouters).forEach(o=>{const i=o(e,r);i!==null&&s.push(i)}),s}}const MT=t=>ge.registerSaveRouter(t),VT=t=>ge.registerLoadRouter(t),UT=t=>ge.getSaveHandlers(t),KT=(t,e)=>ge.getLoadHandlers(t,e);/**
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
 */const Nd="tensorflowjs",Sd=1,zr="models_store",Xn="model_info_store";function O1(){if(!X().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function _d(t){const e=t.result;e.createObjectStore(zr,{keyPath:"modelPath"}),e.createObjectStore(Xn,{keyPath:"modelPath"})}class ts{constructor(e){if(this.indexedDB=O1(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,n){return new Promise((r,s)=>{const a=this.indexedDB.open(Nd,Sd);a.onupgradeneeded=()=>_d(a),a.onsuccess=()=>{const o=a.result;if(n==null){const i=o.transaction(zr,"readonly"),u=i.objectStore(zr).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=c=>(o.close(),s(u.error)),i.oncomplete=()=>o.close()}else{n.weightData=Qt.join(n.weightData);const i=Uo(n),l=o.transaction(Xn,"readwrite");let u=l.objectStore(Xn),c;try{c=u.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(p){return s(p)}let d;c.onsuccess=()=>{d=o.transaction(zr,"readwrite");const p=d.objectStore(zr);let h;try{h=p.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(g){return s(g)}h.onsuccess=()=>r({modelArtifactsInfo:i}),h.onerror=g=>{u=l.objectStore(Xn);const v=u.delete(this.modelPath);v.onsuccess=()=>(o.close(),s(h.error)),v.onerror=b=>(o.close(),s(h.error))}},c.onerror=p=>(o.close(),s(c.error)),l.oncomplete=()=>{d==null?o.close():d.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}ts.URL_SCHEME="indexeddb://";const D1=t=>X().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ts.URL_SCHEME)?WT(t.slice(ts.URL_SCHEME.length)):null;ge.registerSaveRouter(D1);ge.registerLoadRouter(D1);function WT(t){return new ts(t)}function qT(t){return t.startsWith(ts.URL_SCHEME)?t.slice(ts.URL_SCHEME.length):t}class HT{constructor(){this.indexedDB=O1()}async listModels(){return new Promise((e,n)=>{const r=this.indexedDB.open(Nd,Sd);r.onupgradeneeded=()=>_d(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(Xn,"readonly"),i=a.objectStore(Xn).getAll();i.onsuccess=()=>{const l={};for(const u of i.result)l[u.modelPath]=u.modelArtifactsInfo;e(l)},i.onerror=l=>(s.close(),n(i.error)),a.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(e){return e=qT(e),new Promise((n,r)=>{const s=this.indexedDB.open(Nd,Sd);s.onupgradeneeded=()=>_d(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(Xn,"readwrite"),i=o.objectStore(Xn),l=i.get(e);let u;l.onsuccess=()=>{if(l.result==null)return a.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const c=i.delete(e),d=()=>{u=a.transaction(zr,"readwrite");const h=u.objectStore(zr).delete(e);h.onsuccess=()=>n(l.result.modelArtifactsInfo),h.onerror=g=>r(l.error)};c.onsuccess=d,c.onerror=p=>(d(),a.close(),r(l.error))}},l.onerror=c=>(a.close(),r(l.error)),o.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
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
 */const bn="/",bs="tensorflowjs_models",P1="info",GT="model_topology",QT="weight_specs",YT="weight_data",XT="model_metadata";function j1(t){return{info:[bs,t,P1].join(bn),topology:[bs,t,GT].join(bn),weightSpecs:[bs,t,QT].join(bn),weightData:[bs,t,YT].join(bn),modelMetadata:[bs,t,XT].join(bn)}}function R1(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function JT(t){const e=t.split(bn);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(bn)}function ZT(t){return t.startsWith(ns.URL_SCHEME)?t.slice(ns.URL_SCHEME.length):t}class ns{constructor(e){if(!X().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=j1(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=Uo(e),a=Qt.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,PT(a));const o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw R1(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=jT(o),n}}ns.URL_SCHEME="localstorage://";const L1=t=>X().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ns.URL_SCHEME)?e3(t.slice(ns.URL_SCHEME.length)):null;ge.registerSaveRouter(L1);ge.registerLoadRouter(L1);function e3(t){return new ns(t)}class t3{constructor(){S(X().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),S(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},n=bs+bn,r=bn+P1;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(n)&&a.endsWith(r)){const o=JT(a);e[o]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=ZT(e);const n=j1(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return R1(n),r}}/**
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
 */const Bs="://";class qe{constructor(){this.managers={}}static getInstance(){return qe.instance==null&&(qe.instance=new qe),qe.instance}static registerManager(e,n){S(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Bs)&&(e=e.slice(0,e.indexOf(Bs))),S(e.length>0,()=>"scheme must not be an empty string.");const r=qe.getInstance();S(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=n}static getManager(e){const n=qe.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(qe.getInstance().managers)}}function Mi(t){if(t.indexOf(Bs)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${qe.getSchemes().join(",")}`);return{scheme:t.split(Bs)[0],path:t.split(Bs)[1]}}async function F1(t,e,n=!1){S(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=ge.getLoadHandlers(t);S(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),S(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const s=r[0],a=ge.getSaveHandlers(e);S(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),S(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const o=a[0],i=Mi(t).scheme,l=Mi(t).path,u=i===Mi(t).scheme,c=await s.load();n&&u&&await qe.getManager(i).removeModel(l);const d=await o.save(c);return n&&!u&&await qe.getManager(i).removeModel(l),d.modelArtifactsInfo}async function n3(){const t=qe.getSchemes(),e={};for(const n of t){const r=await qe.getManager(n).listModels();for(const s in r){const a=n+Bs+s;e[a]=r[s]}}return e}async function r3(t){const e=Mi(t);return qe.getManager(e.scheme).removeModel(e.path)}async function s3(t,e){return F1(t,e,!1)}async function a3(t,e){return F1(t,e,!0)}/**
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
 */class o3{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}setTimeoutCustom(e,n){if(typeof window>"u"||!X().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,n);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return h1(e)}}if(X().get("IS_BROWSER")){X().setPlatform("browser",new o3);try{qe.registerManager(ns.URL_SCHEME,new t3)}catch{}try{qe.registerManager(ts.URL_SCHEME,new HT)}catch{}}/**
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
 */const i3={importFetch:()=>require("node-fetch")};let ec;class l3{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return X().global.fetch!=null?X().global.fetch(e,n):(ec==null&&(ec=i3.importFetch()),ec(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}X().get("IS_NODE")&&!X().get("IS_BROWSER")&&X().setPlatform("node",new l3);/**
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
 */function an(t,e="float32",n){return e=e||"float32",Et(t),new Sl(t,e,n)}/**
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
 */function u3(t,e){const n=w(t,"x","cast");if(!eT(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:e};return T.runKernel(hf,r,s)}const xe=_({cast_:u3});/**
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
 */function c3(t){const n={x:w(t,"x","clone","string_or_numeric")};return T.runKernel(mf,n)}const _n=_({clone_:c3});/**
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
 */function wf(t,e=!1){console.log(t.toString(e))}/**
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
 */N1();const d3={buffer:an,cast:xe,clone:_n,print:wf};xT(d3);/**
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
 */function p3(t,e){let n=w(t,"a","add"),r=w(e,"b","add");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(ff,s)}const H=_({add_:p3});/**
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
 */function f3(t,e){let n=w(t,"a","floorDiv"),r=w(e,"b","floorDiv");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(Sb,s)}const xf=_({floorDiv_:f3});/**
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
 */function h3(t,e){let n=w(t,"a","div"),r=w(e,"b","div");if([n,r]=Ne(n,r),n.dtype==="int32"&&r.dtype==="int32")return xf(n,r);const s={a:n,b:r},a={};return T.runKernel(pb,s,a)}const ue=_({div_:h3});/**
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
 */function m3(t,e){let n=w(t,"a","mul"),r=w(e,"b","mul");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(nw,s)}const F=_({mul_:m3});/**
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
 */function g3(t){const e=w(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return T.runKernel(Hv,n)}else{const n={x:e};return T.runKernel(Sv,n)}}const ct=_({abs_:g3});/**
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
 */function y3(t){const n={x:w(t,"x","acos")};return T.runKernel(_v,n)}const z1=_({acos_:y3});/**
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
 */function v3(t){const n={x:w(t,"x","acosh")};return T.runKernel(Ev,n)}const B1=_({acosh_:v3});/**
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
 */function b3(t){S(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),S(t.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`);const e=t.map((s,a)=>w(s,`tensors${a}`,"addN")),n=e[0];e.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(s=>{if(!Dn(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return T.runKernel(Tv,r)}const M1=_({addN_:b3});/**
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
 */function w3(t,e=null,n=!1){const s={x:w(t,"x","all","bool")},a={axis:e,keepDims:n};return T.runKernel($v,s,a)}const V1=_({all_:w3});/**
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
 */function x3(t,e=null,n=!1){const s={x:w(t,"x","any","bool")},a={axis:e,keepDims:n};return T.runKernel(Iv,s,a)}const U1=_({any_:x3});/**
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
 */function k3(t,e=0){const r={x:w(t,"x","argMax")},s={axis:e};return T.runKernel(Cv,r,s)}const K1=_({argMax_:k3});/**
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
 */function N3(t,e=0){const r={x:w(t,"x","argMin")},s={axis:e};return T.runKernel(Av,r,s)}const W1=_({argMin_:N3});/**
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
 */function S3(t){const n={x:w(t,"x","asin")};return T.runKernel(Ov,n)}const q1=_({asin_:S3});/**
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
 */function _3(t){const n={x:w(t,"x","asinh")};return T.runKernel(Dv,n)}const H1=_({asinh_:_3});/**
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
 */function E3(t){const n={x:w(t,"x","atan")};return T.runKernel(Pv,n)}const G1=_({atan_:E3});/**
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
 */function T3(t,e){let n=w(t,"a","atan2"),r=w(e,"b","atan2");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(Rv,s)}const Q1=_({atan2_:T3});/**
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
 */function $3(t){const n={x:w(t,"x","atanh")};return T.runKernel(jv,n)}const Y1=_({atanh_:$3});/**
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
 */function I3(t,e,n,r,s,a,o="channelsLast"){const[i,l]=No(e);let u;if(o==="channelsLast")u=[i,l,t[3],t[3]];else if(o==="channelsFirst")u=[i,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${o}`);return kf(t,u,n,r,s,a,!1,o)}function kf(t,e,n,r,s,a,o=!1,i="channelsLast"){let[l,u,c,d]=[-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,d]=t;else if(i==="channelsFirst")[l,d,u,c]=t;else throw new Error(`Unknown dataFormat ${i}`);const[p,h,,g]=e,[v,b]=No(n),[m,y]=No(r),x=Ed(p,m),k=Ed(h,y),{padInfo:E,outHeight:$,outWidth:I}=O3(s,u,c,v,b,x,k,a,i),C=o?g*d:g;let A;return i==="channelsFirst"?A=[l,C,$,I]:i==="channelsLast"&&(A=[l,$,I,C]),{batchSize:l,dataFormat:i,inHeight:u,inWidth:c,inChannels:d,outHeight:$,outWidth:I,outChannels:C,padInfo:E,strideHeight:v,strideWidth:b,filterHeight:p,filterWidth:h,effectiveFilterHeight:x,effectiveFilterWidth:k,dilationHeight:m,dilationWidth:y,inShape:t,outShape:A,filterShape:e}}function C3(t,e,n,r,s){r==null&&(r=A3(t,e,n));const a=t[0],o=t[1],i=El((a-e+2*r)/n+1,s),l=El((o-e+2*r)/n+1,s);return[i,l]}function A3(t,e,n,r=1){const s=Ed(e,r);return Math.floor((t[0]*(n-1)-n+s)/2)}function No(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function Ed(t,e){return e<=1?t:t+(t-1)*(e-1)}function O3(t,e,n,r,s,a,o,i,l){let u,c,d;if(typeof t=="number"){u={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const h=C3([e,n],a,r,t,i);c=h[0],d=h[1]}else if(t==="same"){c=Math.ceil(e/r),d=Math.ceil(n/s);const p=Math.max(0,(c-1)*r+a-e),h=Math.max(0,(d-1)*s+o-n),g=Math.floor(p/2),v=p-g,b=Math.floor(h/2),m=h-b;u={top:g,bottom:v,left:b,right:m,type:"SAME"}}else if(t==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-a+1)/r),d=Math.ceil((n-o+1)/s);else if(typeof t=="object"){const p=l==="channelsLast"?t[1][0]:t[2][0],h=l==="channelsLast"?t[1][1]:t[2][1],g=l==="channelsLast"?t[2][0]:t[3][0],v=l==="channelsLast"?t[2][1]:t[3][1];u={top:p,bottom:h,left:g,right:v,type:p===0&&h===0&&g===0&&v===0?"VALID":"EXPLICIT"},c=El((e-a+p+h)/r+1,i),d=El((n-o+g+v)/s+1,i)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:u,outHeight:c,outWidth:d}}function El(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Tl(t){const[e,n,r]=No(t);return e===1&&n===1&&r===1}function Sr(t,e){return Tl(t)||Tl(e)}function ta(t){return No(t).every(e=>e>0)}function Yt(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")S(wo(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{S(wo(s),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
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
 */function D3(t,e){const r={x:w(t,"x","reshape","string_or_numeric")},s={shape:e};return T.runKernel(kw,r,s)}const O=_({reshape_:D3});/**
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
 */function P3(t,e,n,r,s){const a=w(t,"x","avgPool","float32"),o=1;S(Sr(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let i=a,l=!1;a.rank===3&&(l=!0,i=O(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Yt("avgPool",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s};let d=T.runKernel(Lv,u,c);return d=xe(d,a.dtype),l?O(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Nf=_({avgPool_:P3});/**
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
 */function j3(t,e,n,r,s,a="NDHWC"){const o=w(t,"x","avgPool3d","float32");let i=o,l=!1;o.rank===4&&(l=!0,i=O(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),S(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),S(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Yt("avgPool3d",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a};let d=T.runKernel(Fv,u,c);return d=xe(d,i.dtype),l?O(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const X1=_({avgPool3d_:j3});/**
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
 */function R3(t,e=0){S(t.length>=1,()=>"Pass at least one tensor to concat");const n=_l(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),n.length===1)return _n(n[0]);const r=n,s={axis:e};return T.runKernel(Gv,r,s)}const Ve=_({concat_:R3});/**
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
 */function L3(t,e,n=!1,r=!1){let s=w(t,"a","matMul"),a=w(e,"b","matMul");[s,a]=Ne(s,a);const o={a:s,b:a},i={transposeA:n,transposeB:r};return T.runKernel(zv,o,i)}const se=_({matMul_:L3});/**
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
 */function F3(t){const n={x:w(t,"x","sigmoid","float32")};return T.runKernel(Fw,n)}const Ur=_({sigmoid_:F3});/**
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
 */function z3(t,e,n){const r=w(t,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:e,size:n};return T.runKernel(Pw,s,a)}const ae=_({slice_:z3});/**
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
 */function B3(t){const n={x:w(t,"x","tanh","float32")};return T.runKernel(s1,n)}const $l=_({tanh_:B3});/**
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
 */function M3(t,e,n,r,s,a){const o=w(t,"forgetBias","basicLSTMCell"),i=w(e,"lstmKernel","basicLSTMCell"),l=w(n,"lstmBias","basicLSTMCell"),u=w(r,"data","basicLSTMCell"),c=w(s,"c","basicLSTMCell"),d=w(a,"h","basicLSTMCell"),p=Ve([u,d],1),h=se(p,i),g=H(h,l),v=g.shape[0],b=g.shape[1]/4,m=[v,b],y=ae(g,[0,0],m),x=ae(g,[0,b],m),k=ae(g,[0,b*2],m),E=ae(g,[0,b*3],m),$=H(F(Ur(y),$l(x)),F(c,Ur(H(o,k)))),I=F($l($),Ur(E));return[$,I]}const J1=_({basicLSTMCell_:M3});/**
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
 */function V3(t,e,n){const r=w(t,"x","batchToSpaceND"),s=e.reduce((i,l)=>i*l);S(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),S(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),S(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const a={x:r},o={blockShape:e,crops:n};return T.runKernel(Bv,a,o)}const Sf=_({batchToSpaceND_:V3});function U3(t){let e;return t.rank===0||t.rank===1?e=O(t,[1,1,1,t.size]):t.rank===2?e=O(t,[1,1,t.shape[0],t.shape[1]]):t.rank===3?e=O(t,[1,t.shape[0],t.shape[1],t.shape[2]]):e=t,e}/**
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
 */function K3(t,e,n,r,s,a){a==null&&(a=.001);const o=w(t,"x","batchNorm"),i=w(e,"mean","batchNorm"),l=w(n,"variance","batchNorm");let u;s!=null&&(u=w(s,"scale","batchNorm"));let c;r!=null&&(c=w(r,"offset","batchNorm")),S(i.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(c==null||i.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(u==null||i.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const p={x:U3(o),scale:u,offset:c,mean:i,variance:l},h={varianceEpsilon:a},g=T.runKernel(_b,p,h);return O(g,o.shape)}const Ko=_({batchNorm_:K3});function W3(t,e,n,r,s,a){const o=w(t,"x","batchNorm"),i=w(e,"mean","batchNorm"),l=w(n,"variance","batchNorm");let u;s!=null&&(u=w(s,"scale","batchNorm"));let c;return r!=null&&(c=w(r,"offset","batchNorm")),S(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),S(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),S(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&S(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),Ko(o,i,l,c,u,a)}const Z1=_({batchNorm2d_:W3});function q3(t,e,n,r,s,a){const o=w(t,"x","batchNorm"),i=w(e,"mean","batchNorm"),l=w(n,"variance","batchNorm");let u;s!=null&&(u=w(s,"scale","batchNorm"));let c;return r!=null&&(c=w(r,"offset","batchNorm")),S(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),S(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),S(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&S(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),Ko(o,i,l,c,u,a)}const ex=_({batchNorm3d_:q3});function H3(t,e,n,r,s,a){const o=w(t,"x","batchNorm"),i=w(e,"mean","batchNorm"),l=w(n,"variance","batchNorm");let u;s!=null&&(u=w(s,"scale","batchNorm"));let c;return r!=null&&(c=w(r,"offset","batchNorm")),S(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),S(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),S(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&S(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),Ko(o,i,l,c,u,a)}const tx=_({batchNorm4d_:H3});/**
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
 */function G3(t,e,n){const r=w(t,"x","bincount"),s=w(e,"weights","bincount");S(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),S(n>=0,()=>`size must be non-negative, but got ${n}.`),S(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:n};return T.runKernel(Mv,a,o)}const _f=_({bincount_:G3});/**
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
 */function Q3(t,e){const n=w(t,"x","bitwiseAnd"),r=w(e,"y","bitwiseAnd");if(!Dn(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return T.runKernel(Vv,s)}const nx=_({bitwiseAnd_:Q3});/**
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
 */function Y3(t,e){const n=w(t,"s0","broadcastArgs","int32"),r=w(e,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return T.runKernel(Uv,s)}const rx=_({broadcastArgs_:Y3});/**
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
 */function X3(t,e){let n=w(t,"broadcastTo","x");const r=n.shape;if(Et(e),e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const u=n.shape.slice();for(;u.length<e.length;)u.unshift(1);n=O(n,u)}const s=n.shape,a=Array.from(e);for(let u=e.length-1;u>=0;u--)if(s[u]===e[u])a[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(a.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return _n(n);const i={x:n},l={reps:a};return T.runKernel(gf,i,l)}const Ga=_({broadcastTo_:X3});/**
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
 */function J3(t){const n={x:w(t,"x","ceil","float32")};return T.runKernel(Kv,n)}const sx=_({ceil_:J3});/**
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
 */function fa(t,e,n){Et(t),n=n||cu(e);const r={shape:t,value:e,dtype:n};return T.runKernel(xb,{},r)}/**
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
 */function Z3(t,e,n){const r=w(t,"x","clipByValue");if(S(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`),e===n)return fa(r.shape,e,r.dtype);const s={x:r},a={clipValueMin:e,clipValueMax:n};return T.runKernel(Wv,s,a)}const ax=_({clipByValue_:Z3});function e$(t){return Ve(t,0)}const ox=_({concat1d_:e$});function t$(t,e){return Ve(t,e)}const ix=_({concat2d_:t$});function n$(t,e){return Ve(t,e)}const lx=_({concat3d_:n$});function r$(t,e){return Ve(t,e)}const ux=_({concat4d_:r$});/**
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
 */function s$(t,e,n,r,s="NHWC",a=[1,1],o){const i=w(t,"x","conv2d","float32"),l=w(e,"filter","conv2d","float32");let u=i,c=!1;i.rank===3&&(c=!0,u=O(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Yt("conv2d",r,o);const d=s==="NHWC"?u.shape[3]:u.shape[1];S(d===l.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${l.shape[2]}.`),S(Sr(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),S(ta(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),S(ta(n),()=>"Error in conv2D: Strides should be larger than 0.");const p={x:u,filter:l},h={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},g=T.runKernel(Qv,p,h);return c?O(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Wo=_({conv2d_:s$});function a$(t,e,n,r,s="NWC",a=1,o){const i=w(t,"x","conv1d"),l=w(e,"filter","conv1d");let u=i,c=!1;i.rank===2&&(c=!0,u=O(i,[1,i.shape[0],i.shape[1]])),S(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),S(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Yt("conv1d",r,o),S(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),S(Sr(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),S(ta(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),S(ta(n),()=>"Error in conv1D: Stride should be larger than 0."),S(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const d=O(l,[1,l.shape[0],l.shape[1],l.shape[2]]),p=O(u,[u.shape[0],1,u.shape[1],u.shape[2]]),b=Wo(p,d,[1,n],r,"NHWC",[1,a],o);return c?O(b,[b.shape[2],b.shape[3]]):O(b,[b.shape[0],b.shape[2],b.shape[3]])}const cx=_({conv1d_:a$});/**
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
 */function o$(t,e,n,r,s,a="NHWC",o){S(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let i=t,l=e,u=!1;e.rank===3&&(u=!0,l=O(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,t[0],t[1],t[2]]),S(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),S(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),S(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const c=a==="NHWC"?i[3]:i[1],d=a==="NHWC"?l.shape[3]:l.shape[1];S(c===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`),S(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),Yt("conv2dDerInput",s,o);const p={dy:l,filter:n},h={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},g=T.runKernel(Xv,p,h);return u?O(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const dx=_({conv2DBackpropInput_:o$});function i$(t,e,n,r,s,a){const o=w(t,"x","conv2dTranspose"),i=w(e,"filter","conv2dTranspose");return dx(n,o,i,r,s,"NHWC",a)}const px=_({conv2dTranspose_:i$});/**
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
 */function l$(t,e,n,r,s="NDHWC",a=[1,1,1]){const o=w(t,"x","conv3d"),i=w(e,"filter","conv3d");let l=o,u=!1;o.rank===4&&(u=!0,l=O(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),S(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),S(l.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${i.shape[3]}.`),S(Sr(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),S(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),S(ta(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),S(ta(n),()=>"Error in conv3D: Strides should be larger than 0.");const c={x:l,filter:i},d={strides:n,pad:r,dataFormat:s,dilations:a},p=T.runKernel(Jv,c,d);return u?O(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const fx=_({conv3d_:l$});/**
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
 */function u$(t,e,n,r,s){S(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let a=t,o=e,i=!1;e.rank===4&&(i=!0,o=O(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,t[0],t[1],t[2],t[3]]);const l=a[4],u=o.shape[4];S(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),S(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),S(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),S(l===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[3]}.`),S(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const c={dy:o,filter:n},d={pad:s,strides:r,inputShape:a},p=T.runKernel(Zv,c,d);return i?O(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const c$=_({conv3DBackpropInput_:u$});function d$(t,e,n,r,s){const a=w(t,"x","conv3dTranspose"),o=w(e,"filter","conv3dTranspose");return c$(n,a,o,r,s)}const hx=_({conv3dTranspose_:d$});/**
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
 */function p$(t){const n={x:w(t,"x","cos","float32")};return T.runKernel(eb,n)}const mx=_({cos_:p$});/**
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
 */function f$(t){const n={x:w(t,"x","cosh","float32")};return T.runKernel(tb,n)}const gx=_({cosh_:f$});/**
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
 */function h$(t,e=0,n=!1,r=!1){const a={x:w(t,"x","cumprod")},o={axis:e,exclusive:n,reverse:r};return T.runKernel(nb,a,o)}const yx=_({cumprod_:h$});/**
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
 */function m$(t,e=0,n=!1,r=!1){const a={x:w(t,"x","cumsum")},o={axis:e,exclusive:n,reverse:r};return T.runKernel(rb,a,o)}const vx=_({cumsum_:m$});/**
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
 */function g$(t,e,n,r=!1){const s=w(t,"x","denseBincount"),a=w(e,"weights","denseBincount");S(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),S(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),S(n>=0,()=>`size must be non-negative, but got ${n}.`),S(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},i={size:n,binaryOutput:r};return T.runKernel(ab,o,i)}const bx=_({denseBincount_:g$});/**
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
 */function y$(t,e,n="NHWC"){const r=w(t,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],a=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];S(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),S(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e}  for depthToSpace with input shape
    ${r.shape}`),S(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e} for depthToSpace with input shape
        ${r.shape}`),S(o%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},l={blockSize:e,dataFormat:n};return T.runKernel(ob,i,l)}const wx=_({depthToSpace_:y$});/**
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
 */function v$(t,e,n,r,s="NHWC",a=[1,1],o){const i=w(t,"x","depthwiseConv2d","float32"),l=w(e,"filter","depthwiseConv2d","float32");let u=i,c=!1;i.rank===3&&(c=!0,u=O(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),S(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const d=s==="NHWC"?u.shape[3]:u.shape[1];S(d===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${l.shape[2]}.`),Yt("depthwiseConv2d",r,o);const p={x:u,filter:l},h={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},g=T.runKernel(ib,p,h);return c?O(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const du=_({depthwiseConv2d_:v$});/**
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
 */function b$(t){const n={x:w(t,"x","diag")};return T.runKernel(cb,n)}const xx=_({diag_:b$});/**
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
 */function w$(t,e,n,r,s=[1,1],a="NHWC"){const o=w(t,"x","dilation2d"),i=w(e,"filter","dilation2d");S(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),S(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),S(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let l=o,u=!1;o.rank===3&&(l=O(o,[1,o.shape[0],o.shape[1],o.shape[2]]),u=!0),S(l.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${i.shape[2]}`);const c={x:l,filter:i},d={strides:n,pad:r,dilations:s},p=T.runKernel(db,c,d);return u?O(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const kx=_({dilation2d_:w$});/**
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
 */function x$(t,e){const n=[];for(let r=0;r<e.length;r++){const s=t[t.length-r-1],a=e.length-r-1,o=e[a];(s==null||s===1&&o>1)&&n.unshift(a)}return n}function Pe(t,e){const n=Math.max(t.length,e.length),r=new Array(n);for(let s=0;s<n;s++){let a=t[t.length-s-1];a==null&&(a=1);let o=e[e.length-s-1];if(o==null&&(o=1),a===1)r[n-s-1]=o;else if(o===1)r[n-s-1]=a;else if(a!==o){const i=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(i)}else r[n-s-1]=a}return r}/**
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
 */function k$(t,e){let n=w(t,"a","equal","string_or_numeric"),r=w(e,"b","equal","string_or_numeric");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(gb,s)}const Ef=_({equal_:k$});/**
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
 */function N$(t,e,n){const r=w(e,"a","where"),s=w(n,"b","where"),a=w(t,"condition","where","bool"),o=Pe(Pe(a.shape,r.shape),s.shape),i=Ga(a,o),l=Ga(r,o),u=Ga(s,o),c={condition:i,t:l,e:u};return T.runKernel(Ow,c)}const En=_({where_:N$});/**
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
 */function S$(t){const n={x:w(t,"x","zerosLike")};return T.runKernel(c1,n)}const gt=_({zerosLike_:S$});/**
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
 */function _$(t,e){let n=w(t,"a","div"),r=w(e,"b","div");[n,r]=Ne(n,r);const s=ue(n,r),a=gt(s),o=Ef(r,a);return En(o,a,s)}const Nx=_({divNoNan_:_$});/**
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
 */function E$(t,e){const n=w(t,"t1","dot"),r=w(e,"t2","dot");S((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(S(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),n.rank===1&&r.rank===1){const o=O(n,[1,-1]),i=O(r,[-1,1]),l=se(o,i);return O(l,[])}else if(n.rank===1&&r.rank===2){const o=O(n,[1,-1]),i=O(r,[r.shape[0],r.shape[1]]),l=se(o,i);return O(l,[l.size])}else if(n.rank===2&&r.rank===1){const o=O(r,[-1,1]),i=se(n,o);return O(i,[i.size])}else{const o=O(r,[r.shape[0],r.shape[1]]);return se(n,o)}}const Sx=_({dot_:E$});/**
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
 */function T$(t,...e){const n=e.map((s,a)=>w(s,`tensors${a}`,"einsum")),r={equation:t};return T.runKernel(fb,n,r)}const Dr=_({einsum_:T$});/**
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
 */function $$(t){const n={x:w(t,"x","elu","float32")};return T.runKernel(hb,n)}const Tf=_({elu_:$$});/**
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
 */function I$(t,e){const n=w(t,"x","ensureShape","string_or_numeric");if(!YE(n.shape,e))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${e}`);return t}const _x=_({ensureShape_:I$});/**
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
 */function C$(t){let e=w(t,"x","erf");S(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=xe(e,"float32"));const n={x:e};return T.runKernel(mb,n)}const Ex=_({erf_:C$});/**
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
 */function A$(t,e,n){const r=t.length+e.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(t[a++]):s.push(e[o++]);return s}function pu(t,e){const n=e.map(r=>1);return A$(t,n,e)}/**
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
 */function O$(t,e=null,n=!1){const s={x:w(t,"x","max")},a={reductionIndices:e,keepDims:n};return T.runKernel(Wb,s,a)}const Kr=_({max_:O$});/**
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
 */function D$(t,e=null,n=!1){const s={x:w(t,"x","min")},a={axis:e,keepDims:n};return T.runKernel(Xb,s,a)}const Il=_({min_:D$});/**
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
 */function P$(t,e){let n=w(t,"base","pow"),r=w(e,"exp","pow");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(pw,s)}const na=_({pow_:P$});/**
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
 */function Z(t,e){if((jt(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&jt(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Nr(t,[],[],e)}/**
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
 */function j$(t){const n={x:w(t,"x","sqrt","float32")};return T.runKernel(Bw,n)}const on=_({sqrt_:j$});/**
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
 */function R$(t){const e=w(t,"x","square"),n={};return T.runKernel("Square",{x:e},n)}const Ot=_({square_:R$});/**
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
 */function L$(t,e=null,n=!1){let r=w(t,"x","sum");r.dtype==="bool"&&(r=xe(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return T.runKernel(Mw,s,a)}const le=_({sum_:L$});/**
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
 */function F$(t,e="euclidean",n=null,r=!1){t=w(t,"x","norm");const s=Tx(t,e,n);let a=s.shape;if(r){const o=uu(n,t.shape);a=pu(s.shape,o)}return O(s,a)}function Tx(t,e,n=null){if(t.rank===0)return ct(t);if(t.rank!==1&&n===null)return Tx(O(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return le(ct(t),n);if(e===1/0)return Kr(ct(t),n);if(e===-1/0)return Il(ct(t),n);if(e==="euclidean"||e===2)return on(le(na(ct(t),Z(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Kr(le(ct(t),n[0]),n[1]-1);if(e===1/0)return Kr(le(ct(t),n[1]),n[0]);if(e===-1/0)return Il(le(ct(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return on(le(Ot(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const qo=_({norm_:F$});/**
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
 */function z$(t,e=null,n=!1){return qo(t,"euclidean",e,n)}const $x=_({euclideanNorm_:z$});/**
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
 */function B$(t){const n={x:w(t,"x","exp")};return T.runKernel(yb,n)}const dr=_({exp_:B$});/**
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
 */function M$(t,e=0){const n=w(t,"x","expandDims","string_or_numeric");S(e<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:e};return T.runKernel(vb,r,s)}const mn=_({expandDims_:M$});/**
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
 */function V$(t){const n={x:w(t,"x","expm1")};return T.runKernel(bb,n)}const Ix=_({expm1_:V$});/**
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
 */function U$(t,e){const n=w(t,"x","tile","string_or_numeric");S(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const r={x:n},s={reps:e};return T.runKernel(gf,r,s)}const Ms=_({tile_:U$});/**
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
 */function K$(t,e,n,r="float32"){e==null&&(e=t);const s=an([t,e],r),a=t<=e?t:e;for(let i=0;i<a;++i)s.set(1,i,i);const o=O(s.toTensor(),[t,e]);if(n==null)return o;if(n.length===1)return Ms(mn(o,0),[n[0],1,1]);if(n.length===2)return Ms(mn(mn(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Ms(mn(mn(mn(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const $f=_({eye_:K$});/**
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
 */function W$(t){const n={x:w(t,"x","floor","float32")};return T.runKernel(Nb,n)}const If=_({floor_:W$});/**
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
 */function q$(t,e,n=0,r=0){const s=w(t,"x","gather"),a=w(e,"indices","gather","int32"),o={x:s,indices:a},i={axis:n,batchDims:r};return T.runKernel(Eb,o,i)}const Cf=_({gather_:q$});/**
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
 */function H$(t,e){let n=w(t,"a","greater","string_or_numeric"),r=w(e,"b","greater","string_or_numeric");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel($b,s)}const Ho=_({greater_:H$});/**
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
 */function G$(t,e){let n=w(t,"a","greaterEqual","string_or_numeric"),r=w(e,"b","greaterEqual","string_or_numeric");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(Ib,s)}const Af=_({greaterEqual_:G$});/**
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
 */function Q$(t){const n={input:w(t,"input","imag")};return T.runKernel(Ab,n)}const Go=_({imag_:Q$});/**
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
 */function Y$(t){const n={x:w(t,"x","isFinite")};return T.runKernel(Ob,n)}const Cx=_({isFinite_:Y$});/**
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
 */function X$(t){const n={x:w(t,"x","isInf")};return T.runKernel(Db,n)}const Ax=_({isInf_:X$});/**
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
 */function J$(t){const n={x:w(t,"x","isNaN")};return T.runKernel(Pb,n)}const Ox=_({isNaN_:J$});/**
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
 */function Z$(t,e=.2){const r={x:w(t,"x","leakyRelu")},s={alpha:e};return T.runKernel(jb,r,s)}const Of=_({leakyRelu_:Z$});/**
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
 */function eI(t,e){let n=w(t,"a","less","string_or_numeric"),r=w(e,"b","less","string_or_numeric");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(Rb,s)}const Cl=_({less_:eI});/**
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
 */function tI(t,e){let n=w(t,"a","lessEqual","string_or_numeric"),r=w(e,"b","lessEqual","string_or_numeric");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(Lb,s)}const fu=_({lessEqual_:tI});/**
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
 */function Dx(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return T.runKernel(Fb,{},r)}/**
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
 */function nI(t,e=5,n=1,r=1,s=.5){const a=w(t,"x","localResponseNormalization");S(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),S(wo(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=O(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const l={x:o},u={depthRadius:e,bias:n,alpha:r,beta:s},c=T.runKernel(Kb,l,u);return i?O(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Px=_({localResponseNormalization_:nI});/**
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
 */function rI(t){const n={x:w(t,"x","log","float32")};return T.runKernel(zb,n)}const ra=_({log_:rI});/**
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
 */function sI(t){const n={x:w(t,"x","log1p")};return T.runKernel(Bb,n)}const Df=_({log1p_:sI});/**
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
 */function jx(t,e){S(ud(t),()=>"The f passed in variableGrads(f) must be a function"),S(e==null||Array.isArray(e)&&e.every(u=>u instanceof ko),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const u in T.registeredVariables)e.push(T.registeredVariables[u])}const r=n?e.filter(u=>!u.trainable):null,s=e.length;e=e.filter(u=>u.trainable),S(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const a=!0,{value:o,grads:i}=T.gradients(t,e,null,a);S(i.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),S(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const l={};return e.forEach((u,c)=>{i[c]!=null&&(l[u.name]=i[c])}),r!=null&&r.forEach(u=>l[u.name]=null),{value:o,grads:l}}function ln(t){return T.customGrad(t)}/**
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
 */function aI(t){const n={x:w(t,"x","neg")};return T.runKernel(rw,n)}const qt=_({neg_:aI});/**
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
 */function oI(t){const n={x:w(t,"x","softplus")};return T.runKernel(zw,n)}const Pf=_({softplus_:oI});/**
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
 */function iI(t){const e=w(t,"x","logSigmoid");return ln(r=>({value:qt(Pf(qt(r))),gradFunc:o=>F(o,Ur(qt(r)))}))(e)}const Rx=_({logSigmoid_:iI});/**
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
 */function lI(t,e){let n=w(t,"a","sub"),r=w(e,"b","sub");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(n1,s)}const Y=_({sub_:lI});/**
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
 */function uI(t,e=-1){const n=w(t,"logits","logSoftmax");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);return ln((s,a)=>{const i=Kr(s,e,!0),l=Y(s,i),u=Y(xe(l,"float32"),ra(le(dr(l),e,!0)));return a([u]),{value:u,gradFunc:(d,p)=>{const[h]=p,g=!0,v=dr(h);return Y(d,F(le(d,e,g),v))}}})(n)}const Lx=_({logSoftmax_:uI});/**
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
 */function cI(t,e=null,n=!1){const r=w(t,"x","logSumExp"),s=uu(e,r.shape),a=Kr(r,s,!0),o=Y(r,a),i=dr(o),l=le(i,s),u=ra(l),c=H(O(a,u.shape),u);if(n){const d=pu(c.shape,s);return O(c,d)}return c}const jf=_({logSumExp_:cI});/**
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
 */function dI(t,e){const n=w(t,"a","logicalAnd","bool"),r=w(e,"b","logicalAnd","bool");Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(Mb,s)}const So=_({logicalAnd_:dI});/**
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
 */function pI(t){const n={x:w(t,"x","logicalNot","bool")};return T.runKernel(Vb,n)}const Rf=_({logicalNot_:pI});/**
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
 */function fI(t,e){const n=w(t,"a","logicalOr","bool"),r=w(e,"b","logicalOr","bool");Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(Ub,s)}const Lf=_({logicalOr_:fI});/**
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
 */function hI(t,e){const n=w(t,"a","logicalXor","bool"),r=w(e,"b","logicalXor","bool");return Pe(n.shape,r.shape),So(Lf(t,e),Rf(So(t,e)))}const Fx=_({logicalXor_:hI});/**
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
 */const yi=2147483648;function mI(t,e,n="left"){const r=w(t,"sortedSequence","searchSorted"),s=w(e,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=O(r,[-1,a]),l=O(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if($e(l.shape)>=yi)throw new Error(`values tensor size must less than ${yi}`);if(i.shape[1]>=yi)throw new Error(`trailing dim_size must less than ${yi} for int32 output type, was ${i.shape[1]}`);const u={sortedSequence:i,values:l},c={side:n};return T.runKernel(Aw,u,c)}const hu=_({searchSorted_:mI});/**
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
 */function zx(t,e){return hu(t,e,"left")}/**
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
 */function gI(t,e,n,r,s){const a=w(t,"x","maxPool"),o=1;let i=a,l=!1;a.rank===3&&(l=!0,i=O(a,[1,a.shape[0],a.shape[1],a.shape[2]])),S(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),S(Sr(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Yt("maxPool",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s},d=T.runKernel(Hb,u,c);return l?O(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const Ff=_({maxPool_:gI});/**
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
 */function yI(t,e=[1,1,1],n,r,s,a="NDHWC"){const o=w(t,"x","maxPool3d");let i=o,l=!1;o.rank===4&&(l=!0,i=O(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),S(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),S(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Yt("maxPool3d",r,s);const u={x:i},c={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a},d=T.runKernel(Gb,u,c);return l?O(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Bx=_({maxPool3d_:yI});/**
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
 */function vI(t,e,n,r,s=!1){const o={x:w(t,"x","maxPoolWithArgmax")},i={filterSize:e,strides:n,pad:r,includeBatchInIndex:s},l=T.runKernel(Qb,o,i);return{result:l[0],indexes:l[1]}}const Mx=_({maxPoolWithArgmax_:vI});/**
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
 */function bI(t,e){let n=w(t,"a","maximum"),r=w(e,"b","maximum");[n,r]=Ne(n,r),n.dtype==="bool"&&(n=xe(n,"int32"),r=xe(r,"int32")),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(qb,s)}const zf=_({maximum_:bI});/**
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
 */function wI(t,e=null,n=!1){const s={x:w(t,"x","mean")},a={axis:e,keepDims:n};return T.runKernel(Yb,s,a)}const _o=_({mean_:wI});/**
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
 */function pr(t,e="float32"){if(Et(t),e==="complex64"){const r=pr(t,"float32"),s=pr(t,"float32");return Pn(r,s)}const n=cf($e(t),e);return T.makeTensor(n,t,e)}/**
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
 */function Jn(t,e="float32"){if(Et(t),e==="complex64"){const r=Jn(t,"float32"),s=pr(t,"float32");return Pn(r,s)}const n=xv($e(t),e);return T.makeTensor(n,t,e)}/**
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
 */function Vx(t,e,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(t===void 0)return[];let r=w(t,"x","meshgrid",t instanceof Re?t.dtype:"float32");if(e===void 0)return[r];let s=w(e,"y","meshgrid",e instanceof Re?e.dtype:"float32");const a=$e(r.shape),o=$e(s.shape);return n==="xy"?(r=O(r,[1,-1]),s=O(s,[-1,1]),[se(Jn([o,1],r.dtype),r),se(s,Jn([1,a],s.dtype))]):(r=O(r,[-1,1]),s=O(s,[1,-1]),[se(r,Jn([1,o],r.dtype)),se(Jn([a,1],s.dtype),s)])}/**
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
 */function xI(t,e){let n=w(t,"a","minimum"),r=w(e,"b","minimum");[n,r]=Ne(n,r),n.dtype==="bool"&&(n=xe(n,"int32"),r=xe(r,"int32")),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(Jb,s)}const Eo=_({minimum_:xI});/**
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
 */function kI(t,e,n){S(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=w(t,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)S(e[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),S(e[i][0]>=0&&e[i][0]<=r.shape[i]-s&&e[i][1]>=0&&e[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:e,mode:n},o={x:r};return T.runKernel(Zb,o,a)}const Ux=_({mirrorPad_:kI});/**
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
 */function NI(t,e){let n=w(t,"a","mod"),r=w(e,"b","mod");[n,r]=Ne(n,r);const s={a:n,b:r};return T.runKernel(ew,s)}const Kx=_({mod_:NI});/**
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
 */function SI(t,e=null,n=!1){t=w(t,"x","moments");const r=uu(e,t.shape),s=_o(t,r,n);let a=s.shape;n||(a=pu(s.shape,r));const o=Ot(Y(xe(t,"float32"),O(s,a))),i=_o(o,r,n);return{mean:s,variance:i}}const Wx=_({moments_:SI});function _I(t,e,n,r){const s=w(e,"data","multiRNNCell"),a=_l(n,"c","multiRNNCell"),o=_l(r,"h","multiRNNCell");let i=s;const l=[];for(let d=0;d<t.length;d++){const p=t[d](i,a[d],o[d]);l.push(p[0]),l.push(p[1]),i=p[1]}const u=[],c=[];for(let d=0;d<l.length;d+=2)u.push(l[d]),c.push(l[d+1]);return[u,c]}const qx=_({multiRNNCell_:_I});/**
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
 */function EI(t,e,n,r=!1){const s=w(t,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const l={logits:o===1?O(s,[1,-1]):s},u={numSamples:e,seed:n,normalized:r},c=T.runKernel(tw,l,u);return o===1?O(c,[c.size]):c}const Hx=_({multinomial_:EI});/**
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
 */function TI(t,e){let n=w(t,"a","notEqual","string_or_numeric"),r=w(e,"b","notEqual","string_or_numeric");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r};return T.runKernel(sw,s)}const Bf=_({notEqual_:TI});/**
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
 */function $I(t,e,n=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const o={indices:w(t,"indices","oneHot","int32")},i={dtype:s,depth:e,onValue:n,offValue:r};return T.runKernel(uw,o,i)}const Gx=_({oneHot_:$I});/**
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
 */function II(t){const n={x:w(t,"x","onesLike")};return T.runKernel(lw,n)}const Qx=_({onesLike_:II});function CI(t,e){const n=w(t,"v1","outerProduct"),r=w(e,"v2","outerProduct");S(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=O(n,[-1,1]),a=O(r,[1,-1]);return se(s,a)}const Yx=_({outerProduct_:CI});/**
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
 */function AI(t,e,n=0){const r=w(t,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:n},a={x:r};return T.runKernel(dw,a,s)}const ha=_({pad_:AI});function OI(t,e,n=0){return S(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),ha(t,[e],n)}const Xx=_({pad1d_:OI});function DI(t,e,n=0){return S(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ha(t,e,n)}const Jx=_({pad2d_:DI});function PI(t,e,n=0){return S(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ha(t,e,n)}const Zx=_({pad3d_:PI});function jI(t,e,n=0){return S(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ha(t,e,n)}const ek=_({pad4d_:jI});/**
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
 */function RI(t,e,n){const r=w(t,"x","spaceToBatchND");S(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),S(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),S(r.shape.reduce((o,i,l)=>l>0&&l<=e.length?o&&(i+n[l-1][0]+n[l-1][1])%e[l-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},a={blockShape:e,paddings:n};return T.runKernel(Vw,s,a)}const Mf=_({spaceToBatchND_:RI});/**
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
 */function LI(t,e,n,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const i=w(t,"x","maxPool");let l=i,u=!1;i.rank===3&&(u=!0,l=O(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(Sr(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const c=I3(l.shape,e,a,s,r),d=[c.dilationHeight,c.dilationWidth];let p;r==="same"?p=zI([c.filterHeight,c.filterWidth],d):p=[[0,0],[0,0]];const h=d[0]===1&&d[1]===1,[g,v]=FI([c.inHeight,c.inWidth],d,p),b=h?r:"valid",m=h?l:Mf(l,d,g),x=(n==="avg"?()=>Nf(m,e,a,b,o):()=>Ff(m,e,a,b,o))(),k=h?x:Sf(x,d,v);return u?O(k,[k.shape[1],k.shape[2],k.shape[3]]):k}function FI(t,e,n){const r=n.map(c=>c[0]),s=n.map(c=>c[1]),a=t.concat(r,s),o=e.map((c,d)=>(c-a[d]%c)%c),i=s.map((c,d)=>c+o[d]),l=e.map((c,d)=>[r[d],i[d]]),u=e.map((c,d)=>[0,o[d]]);return[l,u]}function zI(t,e){const r=t.map((o,i)=>o+(o-1)*(e[i]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,i)=>o-s[i]);return r.map((o,i)=>[s[i],a[i]])}const tk=_({pool_:LI});/**
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
 */function BI(t,e){const n=w(t,"x","prelu"),r=w(e,"alpha","prelu"),s={x:n,alpha:r};return T.runKernel(fw,s)}const Vf=_({prelu_:BI});/**
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
 */function MI(t,e=null,n=!1){let r=w(t,"x","prod");r.dtype==="bool"&&(r=xe(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return T.runKernel(hw,s,a)}const nk=_({prod_:MI});/**
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
 */function VI(t,e,n,r){const s=t.map((c,d)=>w(c,`tensors${d}`,"raggedGather","int32")),a=w(e,"paramsDenseValues","raggedGather"),o=w(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:a,indices:o},l={outputRaggedRank:r},u=T.runKernel(mw,i,l);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}const rk=_({raggedGather_:VI});/**
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
 */function UI(t,e,n){const r=w(t,"starts","raggedRange"),s=w(e,"limits","raggedRange",r.dtype),a=w(n,"deltas","raggedRange",r.dtype),o={starts:r,limits:s,deltas:a},i=T.runKernel(gw,o);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const sk=_({raggedRange_:UI});/**
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
 */function KI(t,e,n,r,s){const a=w(t,"shape","raggedTensorToTensor","int32"),o=w(e,"values","raggedTensorToTensor"),i=w(n,"defaultValue","raggedTensorToTensor",o.dtype),l=r.map((d,p)=>w(d,`tensors${p}`,"raggedTensorToTensor","int32")),u={shape:a,values:o,defaultValue:i,rowPartitionTensors:l},c={rowPartitionTypes:s};return T.runKernel(yw,u,c)}const ak=_({raggedTensorToTensor_:KI});/**
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
 */function WI(t,e,n){Et(t);const r=$e(t);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let a=0;a<r;a++)s[a]=e();return T.makeTensor(s,t,n)}const ok=_({rand_:WI});var Uf={exports:{}};Uf.exports;(function(t){(function(e,n,r){function s(l){var u=this,c=i();u.next=function(){var d=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=d-(u.c=d|0)},u.c=1,u.s0=c(" "),u.s1=c(" "),u.s2=c(" "),u.s0-=c(l),u.s0<0&&(u.s0+=1),u.s1-=c(l),u.s1<0&&(u.s1+=1),u.s2-=c(l),u.s2<0&&(u.s2+=1),c=null}function a(l,u){return u.c=l.c,u.s0=l.s0,u.s1=l.s1,u.s2=l.s2,u}function o(l,u){var c=new s(l),d=u&&u.state,p=c.next;return p.int32=function(){return c.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,d&&(typeof d=="object"&&a(d,c),p.state=function(){return a(c,{})}),p}function i(){var l=4022871197,u=function(c){c=String(c);for(var d=0;d<c.length;d++){l+=c.charCodeAt(d);var p=.02519603282416938*l;l=p>>>0,p-=l,p*=l,l=p>>>0,p-=l,l+=p*4294967296}return(l>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=o:this.alea=o})(is,t)})(Uf);var qI=Uf.exports,Kf={exports:{}};Kf.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var d=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^d^d>>>8},i===(i|0)?l.x=i:u+=i;for(var c=0;c<u.length+64;c++)l.x^=u.charCodeAt(c)|0,l.next()}function a(i,l){return l.x=i.x,l.y=i.y,l.z=i.z,l.w=i.w,l}function o(i,l){var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,h=(u.next()>>>0)/4294967296,g=(p+h)/(1<<21);while(g===0);return g},d.int32=u.next,d.quick=d,c&&(typeof c=="object"&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xor128=o})(is,t)})(Kf);var HI=Kf.exports,Wf={exports:{}};Wf.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.next=function(){var d=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(d^d<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,i===(i|0)?l.x=i:u+=i;for(var c=0;c<u.length+64;c++)l.x^=u.charCodeAt(c)|0,c==u.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function a(i,l){return l.x=i.x,l.y=i.y,l.z=i.z,l.w=i.w,l.v=i.v,l.d=i.d,l}function o(i,l){var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,h=(u.next()>>>0)/4294967296,g=(p+h)/(1<<21);while(g===0);return g},d.int32=u.next,d.quick=d,c&&(typeof c=="object"&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xorwow=o})(is,t)})(Wf);var GI=Wf.exports,qf={exports:{}};qf.exports;(function(t){(function(e,n,r){function s(i){var l=this;l.next=function(){var c=l.x,d=l.i,p,h;return p=c[d],p^=p>>>7,h=p^p<<24,p=c[d+1&7],h^=p^p>>>10,p=c[d+3&7],h^=p^p>>>3,p=c[d+4&7],h^=p^p<<7,p=c[d+7&7],p=p^p<<13,h^=p^p<<9,c[d]=h,l.i=d+1&7,h};function u(c,d){var p,h=[];if(d===(d|0))h[0]=d;else for(d=""+d,p=0;p<d.length;++p)h[p&7]=h[p&7]<<15^d.charCodeAt(p)+h[p+1&7]<<13;for(;h.length<8;)h.push(0);for(p=0;p<8&&h[p]===0;++p);for(p==8?h[7]=-1:h[p],c.x=h,c.i=0,p=256;p>0;--p)c.next()}u(l,i)}function a(i,l){return l.x=i.x.slice(),l.i=i.i,l}function o(i,l){i==null&&(i=+new Date);var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,h=(u.next()>>>0)/4294967296,g=(p+h)/(1<<21);while(g===0);return g},d.int32=u.next,d.quick=d,c&&(c.x&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xorshift7=o})(is,t)})(qf);var QI=qf.exports,Hf={exports:{}};Hf.exports;(function(t){(function(e,n,r){function s(i){var l=this;l.next=function(){var c=l.w,d=l.X,p=l.i,h,g;return l.w=c=c+1640531527|0,g=d[p+34&127],h=d[p=p+1&127],g^=g<<13,h^=h<<17,g^=g>>>15,h^=h>>>12,g=d[p]=g^h,l.i=p,g+(c^c>>>16)|0};function u(c,d){var p,h,g,v,b,m=[],y=128;for(d===(d|0)?(h=d,d=null):(d=d+"\0",h=0,y=Math.max(y,d.length)),g=0,v=-32;v<y;++v)d&&(h^=d.charCodeAt((v+32)%d.length)),v===0&&(b=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,v>=0&&(b=b+1640531527|0,p=m[v&127]^=h+b,g=p==0?g+1:0);for(g>=128&&(m[(d&&d.length||0)&127]=-1),g=127,v=4*128;v>0;--v)h=m[g+34&127],p=m[g=g+1&127],h^=h<<13,p^=p<<17,h^=h>>>15,p^=p>>>12,m[g]=h^p;c.w=b,c.X=m,c.i=g}u(l,i)}function a(i,l){return l.i=i.i,l.w=i.w,l.X=i.X.slice(),l}function o(i,l){i==null&&(i=+new Date);var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,h=(u.next()>>>0)/4294967296,g=(p+h)/(1<<21);while(g===0);return g},d.int32=u.next,d.quick=d,c&&(c.X&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.xor4096=o})(is,t)})(Hf);var YI=Hf.exports,Gf={exports:{}};Gf.exports;(function(t){(function(e,n,r){function s(i){var l=this,u="";l.next=function(){var d=l.b,p=l.c,h=l.d,g=l.a;return d=d<<25^d>>>7^p,p=p-h|0,h=h<<24^h>>>8^g,g=g-d|0,l.b=d=d<<20^d>>>12^p,l.c=p=p-h|0,l.d=h<<16^p>>>16^g,l.a=g-d|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,i===Math.floor(i)?(l.a=i/4294967296|0,l.b=i|0):u+=i;for(var c=0;c<u.length+20;c++)l.b^=u.charCodeAt(c)|0,l.next()}function a(i,l){return l.a=i.a,l.b=i.b,l.c=i.c,l.d=i.d,l}function o(i,l){var u=new s(i),c=l&&l.state,d=function(){return(u.next()>>>0)/4294967296};return d.double=function(){do var p=u.next()>>>11,h=(u.next()>>>0)/4294967296,g=(p+h)/(1<<21);while(g===0);return g},d.int32=u.next,d.quick=d,c&&(typeof c=="object"&&a(c,u),d.state=function(){return a(u,{})}),d}n&&n.exports?n.exports=o:this.tychei=o})(is,t)})(Gf);var XI=Gf.exports,ik={exports:{}};const JI={},ZI=Object.freeze(Object.defineProperty({__proto__:null,default:JI},Symbol.toStringTag,{value:"Module"})),eC=J2(ZI);(function(t){(function(e,n,r){var s=256,a=6,o=52,i="random",l=r.pow(s,a),u=r.pow(2,o),c=u*2,d=s-1,p;function h(k,E,$){var I=[];E=E==!0?{entropy:!0}:E||{};var C=m(b(E.entropy?[k,x(n)]:k??y(),3),I),A=new g(I),P=function(){for(var j=A.g(a),U=l,W=0;j<u;)j=(j+W)*s,U*=s,W=A.g(1);for(;j>=c;)j/=2,U/=2,W>>>=1;return(j+W)/U};return P.int32=function(){return A.g(4)|0},P.quick=function(){return A.g(4)/4294967296},P.double=P,m(x(A.S),n),(E.pass||$||function(j,U,W,V){return V&&(V.S&&v(V,A),j.state=function(){return v(A,{})}),W?(r[i]=j,U):j})(P,C,"global"in E?E.global:this==r,E.state)}function g(k){var E,$=k.length,I=this,C=0,A=I.i=I.j=0,P=I.S=[];for($||(k=[$++]);C<s;)P[C]=C++;for(C=0;C<s;C++)P[C]=P[A=d&A+k[C%$]+(E=P[C])],P[A]=E;(I.g=function(j){for(var U,W=0,V=I.i,re=I.j,ce=I.S;j--;)U=ce[V=d&V+1],W=W*s+ce[d&(ce[V]=ce[re=d&re+U])+(ce[re]=U)];return I.i=V,I.j=re,W})(s)}function v(k,E){return E.i=k.i,E.j=k.j,E.S=k.S.slice(),E}function b(k,E){var $=[],I=typeof k,C;if(E&&I=="object")for(C in k)try{$.push(b(k[C],E-1))}catch{}return $.length?$:I=="string"?k:k+"\0"}function m(k,E){for(var $=k+"",I,C=0;C<$.length;)E[d&C]=d&(I^=E[d&C]*19)+$.charCodeAt(C++);return x(E)}function y(){try{var k;return p&&(k=p.randomBytes)?k=k(s):(k=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(k)),x(k)}catch{var E=e.navigator,$=E&&E.plugins;return[+new Date,e,$,e.screen,x(n)]}}function x(k){return String.fromCharCode.apply(0,k)}if(m(r.random(),n),t.exports){t.exports=h;try{p=eC}catch{}}else r["seed"+i]=h})(typeof self<"u"?self:is,[],Math)})(ik);var tC=ik.exports,nC=qI,rC=HI,sC=GI,aC=QI,oC=YI,iC=XI,ds=tC;ds.alea=nC;ds.xor128=rC;ds.xorwow=sC;ds.xorshift7=aC;ds.xor4096=oC;ds.tychei=iC;var Qf=ds;/**
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
 */class Yf{constructor(e,n,r,s,a){this.mean=e,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=Qf.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,n,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class lC{constructor(e,n,r,s){this.alpha=e,this.beta=1/n,this.dtype=r;const a=s||Math.random();this.randu=Qf.alea(a.toString()),this.randn=new Yf(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,n,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,e=s*s,n=1-.331*e*e,r=.5*e+this.d*(1-o+Math.log(o)),a=this.randu(),a<n||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class uC{constructor(e=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=n-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${n} <= 1 and dtype is not float`);this.random=Qf.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
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
 */function cC(t,e,n=1,r="float32",s){if(Et(t),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new lC(e,n,r,s),o=an(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const lk=_({randomGamma_:cC});/**
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
 */function dC(t,e=0,n=1,r,s){if(Et(t),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new Yf(e,n,r,!1,s),o=an(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Xf=_({randomNormal_:dC});/**
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
 */function pC(t,e,n){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return Xf(t,0,1,e,n)}const uk=_({randomStandardNormal_:pC});/**
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
 */function fC(t,e=0,n=1,r="float32",s){Et(t);const a=an(t,r),o=new uC(e,n,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const mu=_({randomUniform_:fC});/**
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
 */function hC(t,e,n,r){return mu(t,e,n,"int32",r)}const ck=_({randomUniformInt_:hC});/**
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
 */function sa(t,e,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:t,stop:e,step:n,dtype:r};return T.runKernel(vw,{},s)}/**
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
 */function mC(t){const n={input:w(t,"input","real")};return T.runKernel(bw,n)}const aa=_({real_:mC});/**
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
 */function gC(t){const n={x:w(t,"x","reciprocal")};return T.runKernel(ww,n)}const dk=_({reciprocal_:gC});/**
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
 */function yC(t){const n={x:w(t,"x","relu")};return T.runKernel(xw,n)}const Qo=_({relu_:yC});/**
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
 */function vC(t){const n={x:w(t,"x","relu6")};return T.runKernel(_w,n)}const Jf=_({relu6_:vC});/**
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
 */function bC(t,e){const r={x:w(t,"x","reverse")},s={dims:e};return T.runKernel(Ew,r,s)}const fr=_({reverse_:bC});/**
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
 */function wC(t){const e=w(t,"x","reverse");return S(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),fr(e,0)}const pk=_({reverse1d_:wC});/**
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
 */function xC(t,e){const n=w(t,"x","reverse");return S(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),fr(n,e)}const fk=_({reverse2d_:xC});/**
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
 */function kC(t,e){const n=w(t,"x","reverse");return S(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),fr(n,e)}const hk=_({reverse3d_:kC});/**
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
 */function NC(t,e){const n=w(t,"x","reverse");return S(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),fr(n,e)}const mk=_({reverse4d_:NC});/**
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
 */function SC(t){const n={x:w(t,"x","round")};return T.runKernel(Tw,n)}const Zf=_({round_:SC});/**
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
 */function _C(t){const n={x:w(t,"x","rsqrt","float32")};return T.runKernel($w,n)}const gk=_({rsqrt_:_C});/**
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
 */function EC(t){const n={x:w(t,"x","selu")};return T.runKernel(Dw,n)}const yk=_({selu_:EC});function TC(t,e,n,r,s,a=[1,1],o="NHWC"){const i=w(t,"x","separableConv2d"),l=w(e,"depthwiseFilter","separableConv2d"),u=w(n,"pointwiseFilter","separableConv2d");let c=i,d=!1;if(i.rank===3&&(d=!0,c=O(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),S(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),S(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),S(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),S(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const p=l.shape[2],h=l.shape[3];S(u.shape[2]===p*h,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${p*h}, but got ${u.shape[2]}.`);const g=du(c,l,r,s,o,a),b=Wo(g,u,1,"valid",o);return d?O(b,[b.shape[1],b.shape[2],b.shape[3]]):b}const vk=_({separableConv2d_:TC});/**
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
 */async function $C(t,e){const n=w(t,"x","setdiff1d"),r=w(e,"y","setdiff1d");S(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),S(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),S(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),a=await r.data(),o=new Set(a);let i=0;for(let c=0;c<s.length;c++)o.has(s[c])||i++;const l=new Sl([i],n.dtype),u=new Sl([i],"int32");for(let c=0,d=0;c<s.length;c++)o.has(s[c])||(l.values[d]=s[c],u.values[d]=c,d++);return[l.toTensor(),u.toTensor()]}const bk=$C;/**
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
 */function IC(t){const n={x:w(t,"x","sign")};return T.runKernel(Lw,n)}const wk=_({sign_:IC});/**
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
 */function CC(t){const n={x:w(t,"x","sin","float32")};return T.runKernel(jw,n)}const xk=_({sin_:CC});/**
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
 */function AC(t){const n={x:w(t,"x","sinh")};return T.runKernel(Rw,n)}const kk=_({sinh_:AC});/**
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
 */function OC(t,e,n){const r=w(t,"x","slice1d");return S(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),ae(r,[e],[n])}const Nk=_({slice1d_:OC});/**
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
 */function DC(t,e,n){const r=w(t,"x","slice2d");return S(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),ae(r,e,n)}const Sk=_({slice2d_:DC});/**
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
 */function PC(t,e,n){const r=w(t,"x","slice3d");return S(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),ae(r,e,n)}const _k=_({slice3d_:PC});/**
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
 */function jC(t,e,n){const r=w(t,"x","slice4d");return S(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),ae(r,e,n)}const Ek=_({slice4d_:jC});/**
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
 */function RC(t,e=-1){const n=w(t,"logits","softmax","float32");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},s={dim:e};return T.runKernel(Kw,r,s)}const eh=_({softmax_:RC});/**
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
 */function LC(t){S(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return T.runKernel(wb,e)}const gu=_({fft_:LC});/**
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
 */function FC(t){S(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return T.runKernel(Cb,e)}const To=_({ifft_:FC});/**
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
 */function zC(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const s=O(t,[n,e]);r=To(s)}else{const s=[n,2*(e-1)],a=O(aa(t),[n,e]),o=O(Go(t),[n,e]),i=fr(ae(a,[0,1],[n,e-2]),1),l=F(fr(ae(o,[0,1],[n,e-2]),1),Z(-1)),u=Ve([a,i],1),c=Ve([o,l],1),d=O(Pn(u,c),[s[0],s[1]]);r=To(d)}if(r=aa(r),t.rank===3&&t.shape[0]!==0){const s=r,a=t.shape[0];r=O(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const th=_({irfft_:zC});/**
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
 */function BC(t,e,n=0){const s={x:w(t,"x","split")},a={numOrSizeSplits:e,axis:n};return T.runKernel(Uw,s,a)}const oa=_({split_:BC});/**
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
 */function MC(t,e){S(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const r=t.size/n;let s;if(e!=null&&e<n){const g=t.shape.map(b=>0),v=t.shape.map(b=>b);v[t.shape.length-1]=e,s=ae(t,g,v),n=e}else if(e!=null&&e>n){const g=t.shape.map(v=>v);g[t.shape.length-1]=e-n,s=Ve([t,pr(g)],t.shape.length-1),n=e}else s=t;const a=gt(s),o=O(Pn(s,a),[r,n]),i=gu(o),l=Math.floor(n/2)+1,u=aa(i),c=Go(i),d=oa(u,[l,n-l],u.shape.length-1),p=oa(c,[l,n-l],c.shape.length-1),h=s.shape.slice();return h[s.shape.length-1]=l,O(Pn(d[0],p[0]),h)}const yu=_({rfft_:MC});/**
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
 */function VC(t,e){let n=w(t,"a","squaredDifference"),r=w(e,"b","squaredDifference");[n,r]=Ne(n,r),Pe(n.shape,r.shape);const s={a:n,b:r},a={};return T.runKernel(Yw,s,a)}const nh=_({squaredDifference_:VC});/**
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
 */function UC(t,e){const n=w(t,"x","squeeze","string_or_numeric");return O(n,XE(n.shape,e).newShape)}const Yo=_({squeeze_:UC});/**
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
 */function KC(t,e=0){const n=_l(t,"tensors","stack","string_or_numeric");S(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&S(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:e};return T.runKernel(cw,r,s)}const un=_({stack_:KC});/**
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
 */function WC(t,e=0){const r={x:w(t,"x","step")},s={alpha:e};return T.runKernel(d1,r,s)}const rh=_({step_:WC});/**
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
 */function qC(t,e,n,r,s=0,a=0,o=0,i=0,l=0){const c={x:w(t,"x","stridedSlice","string_or_numeric")},d={begin:e,end:n,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:l};return T.runKernel(Jw,c,d)}const Tk=_({stridedSlice_:qC});/**
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
 */function HC(t){const n={x:w(t,"x","tan","float32")};return T.runKernel(r1,n)}const $k=_({tan_:HC});/**
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
 */function wt(t,e){pa(t);const n=kr(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Nr(t,null,n,e)}/**
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
 */function Vs(t,e,n){if(pa(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=kr(t,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Nr(t,e,r,n)}/**
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
 */function sh(t,e,n){if(pa(t),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=kr(t,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Nr(t,e,r,n)}/**
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
 */function Ik(t,e,n){if(pa(t),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=kr(t,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Nr(t,e,r,n)}/**
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
 */function Ck(t,e,n){if(pa(t),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=kr(t,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Nr(t,e,r,n)}/**
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
 */function Ak(t,e,n){if(pa(t),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=kr(t,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,Nr(t,e,r,n)}function GC(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,s=e.rank>1?e.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(t.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+t.length-r)throw new Error(a+` update.rank != ${s+t.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==e.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${e.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==t[o+r])throw new Error(a+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${t[o+s]})`)}function Ok(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}GC(n,e,t)}/**
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
 */function QC(t,e,n){const r=w(t,"tensor","tensorScatterupdate"),s=w(e,"indices","tensorScatterupdate","int32"),a=w(n,"updates","tensorScatterupdate");if(Ok(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const o={tensor:r,indices:s,updates:a},i={};return T.runKernel(Cw,o,i)}const Dk=_({tensorScatterUpdate_:QC});/**
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
 */function YC(t,e=1,n=!0){const r=w(t,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${e}`);const a={x:r},o={k:e,sorted:n},[i,l]=T.runKernel(a1,a,o);return{values:i,indices:l}}const Pk=_({topk_:YC});/**
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
 */function XC(t,e=0,n=1,r,s){if(Et(t),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new Yf(e,n,r,!0,s),o=an(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const jk=_({truncatedNormal_:XC});/**
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
 */function JC(t,e=0){const n=w(t,"x","unique","string_or_numeric");S(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:e},[a,o]=T.runKernel(i1,r,s);return{values:a,indices:o}}const Rk=_({unique_:JC});/**
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
 */function ZC(t,e,n){const r=w(t,"x","unsortedSegmentSum"),s=w(e,"segmentIds","unsortedSegmentSum","int32");S(wo(n),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:n};return T.runKernel(u1,a,o)}const Lk=_({unsortedSegmentSum_:ZC});/**
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
 */function e4(t,e=0){const n=w(t,"x","unstack","string_or_numeric");S(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:e};return T.runKernel(l1,r,s)}const _r=_({unstack_:e4});/**
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
 */function Fk(t,e){return hu(t,e,"right")}/**
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
 */function zk(t,e=!0,n,r){return T.makeVariable(t,e,n,r)}/**
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
 */function t4(t,e){const n=[];for(let a=0;a<e.length;a++)e[a]&&n.push(a);const r=an(t,"int32"),s=an([n.length,t.length],"int32");for(let a=0;a<n.length;a++){const o=r.indexToLoc(n[a]),i=a*t.length;s.values.set(o,i)}return s.toTensor()}/**
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
 */async function n4(t){const e=w(t,"condition","whereAsync","bool"),n=await e.data(),r=t4(e.shape,n);return t!==e&&e.dispose(),r}const ah=n4;/**
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
 */async function r4(t,e,n){const r=w(t,"tensor","boolMask"),s=w(e,"mask","boolMask","bool"),a=n??0,o=s.rank,i=r.shape;S(o>0,()=>"mask cannot be scalar"),Rt(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let v=a;v<a+o;v++)l*=i[v];const u=i.slice(0,a).concat([l],i.slice(a+o)),c=O(r,u),d=O(s,[-1]),p=await ah(d),h=Yo(p,[1]),g=Cf(c,h,a);return t!==r&&r.dispose(),e!==s&&s.dispose(),h.dispose(),c.dispose(),d.dispose(),p.dispose(),g}const Bk=r4;/**
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
 */function s4(t,e,n){const r=w(t,"x","transpose");if(e==null&&(e=r.shape.map((o,i)=>i).reverse()),S(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(o=>{S(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:e};return r.dtype==="complex64"?ne(()=>{let o=aa(r),i=Go(r);return o=T.runKernel(zi,{x:o},a),i=T.runKernel(zi,{x:i},a),n&&(i=qt(i)),Pn(o,i)}):T.runKernel(zi,s,a)}const Al=_({transpose_:s4});/**
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
 */function a4(t,e,n,r,s=!0){const a=w(t,"v","movingAverage"),o=w(e,"x","movingAverage"),i=w(n,"decay","movingAverage");NT(a,o),S(Dn(a.shape,o.shape),()=>"Shape mismatch in v and x");const l=Z(1),u=Y(l,i);let c=F(Y(o,a),u);if(s){S(r!=null,()=>"When using zeroDebias: true, step is required.");const d=w(r,"step","movingAverage");c=ue(c,Y(l,na(i,d)))}return H(a,c)}const Mk=_({movingAverage_:a4});/**
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
 */function o4(t,e,n){Et(n);const r=w(t,"indices","scatterND","int32"),s=w(e,"updates","scatterND");Ok(s,r,n);const a={indices:r,updates:s},o={shape:n};return T.runKernel(Iw,a,o)}const Vk=_({scatterND_:o4});function i4(t,e,n,r){if(t.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const s=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=e.size;if(!(e.rank===0||e.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
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
 */function l4(t,e,n,r=0){Et(n);const s=w(t,"sparseIndices","sparseToDense","int32"),a=w(e,"sparseValues","sparseToDense","string_or_numeric"),o=w(r,"defaultValue","sparseToDense",a.dtype);i4(s,a,n,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},l={outputShape:n};return T.runKernel(Qw,i,l)}const Uk=_({sparseToDense_:l4});/**
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
 */function u4(t,e){const n=w(e,"indices","gatherND","int32"),s={params:w(t,"x","gatherND","string_or_numeric"),indices:n};return T.runKernel(Tb,s)}const Kk=_({gatherND_:u4});/**
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
 */function c4(t,e){if(e==null)return t.shape.slice();if(Dn(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)e[r]==null&&t.shape[r]!=null?n.push(t.shape[r]):n.push(e[r]);return n}return e}/**
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
 */function d4(t,e,n,r){const s=w(t,"x","dropout");if(S(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),S(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return t instanceof Re?s.clone():s;const a=c4(s,n),o=1-e,i=ue(If(H(mu(a,0,1,"float32",r),o)),o);return F(s,i)}const Wk=_({dropout_:d4});/**
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
 */function oh(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function vu(t,e,n){const r=1-t%2,s=new Float32Array(t);for(let a=0;a<t;++a){const o=2*Math.PI*a/(t+r-1);s[a]=e-n*Math.cos(o)}return wt(s,"float32")}/**
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
 */async function p4(t,e,n=1){const r=w(t,"predictions","inTopK"),s=w(e,"targets","inTopK");S(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),S(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),Rt(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];S(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);const o=await r.data(),i=await s.data(),[l,u]=[o.length/a,a],c=JE("bool",l);for(let d=0;d<l;d++){const p=d*u,h=o.subarray(p,p+u),g=[];for(let v=0;v<h.length;v++)g.push({value:h[v],index:v});g.sort((v,b)=>b.value-v.value),c[d]=0;for(let v=0;v<n;v++)if(g[v].index===i[d]){c[d]=1;break}}return t!==r&&r.dispose(),e!==s&&s.dispose(),Wt(c,s.shape,"bool")}const qk=p4;/**
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
 */function f4(t,e,n,r,s,a="NHWC",o){let i=t;t.rank===3&&(i=O(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=O(e,[1,e.shape[0],e.shape[1],e.shape[2]])),S(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),S(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),S(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=a==="NHWC"?i.shape[3]:i.shape[1],c=a==="NHWC"?l.shape[3]:l.shape[1];S(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),S(c===n[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`),Yt("conv2dDerFilter",s,o);const d={x:i,dy:l},p={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:n};return T.runKernel(Yv,d,p)}const h4=_({conv2DBackpropFilter_:f4});/**
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
 */function ih(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return F(t,rh(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function lh(t,e){let n=e;const r=x$(t.shape,e.shape);return r.length>0&&(n=le(n,r)),O(n,t.shape)}function uh(t,e,n,r){if(e==="linear")return t;if(e==="relu")return Qo(t);if(e==="elu")return Tf(t);if(e==="relu6")return Jf(t);if(e==="prelu")return Vf(t,n);if(e==="leakyrelu")return Of(t,r);if(e==="sigmoid")return Ur(t);throw new Error(`Unknown fused activation ${e}.`)}const ch=(t,e)=>!(t>0)||e==="linear";/**
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
 */function m4({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",ch(T.state.gradientDepth,l)===!1){S(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=Wo(t,e,n,r,s,a,o);return i!=null&&($=H($,i)),uh($,l,u,c)}const d=w(t,"x","conv2d","float32"),p=w(e,"filter","conv2d","float32");let h=d,g=!1;d.rank===3&&(g=!0,h=O(d,[1,d.shape[0],d.shape[1],d.shape[2]])),S(h.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${h.rank}.`),S(p.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${p.rank}.`),Yt("fused conv2d",r,o);const v=s==="NHWC"?h.shape[3]:h.shape[1];S(p.shape[2]===v,()=>`Error in conv2d: depth of input (${v}) must match input depth for filter ${p.shape[2]}.`),S(Sr(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const b=kf(h.shape,p.shape,n,a,r,o);let m;i!=null&&(m=w(i,"bias","fused conv2d"),[m]=Ne(m,d),s==="NHWC"?Pe(b.outShape,m.shape):(S(m.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${m.shape.length}.`),S(m.shape.length===0||m.shape[0]===b.outChannels||m.shape[0]===1,()=>`Error in fused conv2d: bias shape (${m.shape}) is not compatible with the number of output channels (${b.outChannels})`)));let y;if(u!=null){const $=u.shape;if(S($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)S($[0]===1||$[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${b.outChannels}).`);else if($.length===3)try{Pe($,b.outShape)}catch{const C=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${b.outShape}).`;throw Error(C)}y=w(u,"prelu weights","fused conv2d")}const x=($,I)=>{S(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[C,A,P,j]=I,U=ih($,P,l);S(Tl(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const W=dx(A.shape,U,C,n,r),V=h4(A,U,C.shape,n,r),re=[W,V];if(j!=null){const ce=lh(j,U);re.push(ce)}return re},k={x:h,filter:p,bias:m,preluActivationWeights:y},E={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return i==null?ln((I,C,A)=>{let P=T.runKernel(fd,k,E);return A([C,I,P]),g&&(P=O(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:x}})(h,p):ln((I,C,A,P)=>{let j=T.runKernel(fd,k,E);return P([C,I,j,A]),g&&(j=O(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:x}})(h,p,m)}const g4=_({fusedConv2d_:m4});/**
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
 */function y4(t,e,n,r,s,a=[1,1],o){let i=t;t.rank===3&&(i=O(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l=e;l.rank===3&&(l=O(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={x:i,dy:l},c={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:n};return T.runKernel(lb,u,c)}const v4=_({depthwiseConv2dNativeBackpropFilter_:y4});/**
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
 */function b4(t,e,n,r,s,a=[1,1],o){let i=e,l=!1;e.rank===3&&(l=!0,i=O(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const u={dy:i,filter:n},c={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:t},d=T.runKernel(ub,u,c);return l?O(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const w4=_({depthwiseConv2dNativeBackpropInput_:b4});/**
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
 */function x4({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(ch(T.state.gradientDepth,l)===!1){let E=du(t,e,n,r,s,a,o);return i!=null&&(E=H(E,i)),uh(E,l,u,c)}const d=w(t,"x","depthwiseConv2d","float32"),p=w(e,"filter","depthwiseConv2d","float32");let h=d,g=!1;d.rank===3&&(g=!0,h=O(d,[1,d.shape[0],d.shape[1],d.shape[2]])),S(h.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`),S(p.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${p.rank}.`),S(h.shape[3]===p.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${p.shape[2]}.`),a==null&&(a=[1,1]),S(Sr(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),Yt("fused depthwiseConv2d",r,o);const v=kf(h.shape,p.shape,n,a,r,o,!0);let b;i!=null&&(b=w(i,"bias","fused conv2d"),[b]=Ne(b,d),Pe(v.outShape,b.shape));let m;u!=null&&(m=w(u,"prelu weights","fused depthwiseConv2d"));const y=(E,$)=>{S(Tl(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[I,C,A,P]=$,j=ih(E,A,l),U=w4(C.shape,j,I,n,r,a,o),W=v4(C,j,I.shape,n,r,a,o);if(P!=null){const V=lh(b,j);return[U,W,V]}return[U,W]},x={x:h,filter:p,bias:b,preluActivationWeights:m},k={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:l,leakyreluAlpha:c};return i==null?ln(($,I,C)=>{let A=T.runKernel(hd,x,k);return C([I,$,A]),g&&(A=O(A,[A.shape[1],A.shape[2],A.shape[3]])),{value:A,gradFunc:y}})(h,p):ln(($,I,C,A)=>{let P=T.runKernel(hd,x,k);return A([I,$,P,C]),g&&(P=O(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:y}})(h,p,b)}const k4=_({fusedDepthwiseConv2d_:x4});/**
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
 */function N4({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(ch(T.state.gradientDepth,a)===!1){let j=se(t,e,n,r);return s!=null&&(j=H(j,s)),uh(j,a,o,i)}let l=w(t,"a","fused matMul"),u=w(e,"b","fused matMul");[l,u]=Ne(l,u);const c=n?l.shape[l.rank-2]:l.shape[l.rank-1],d=r?u.shape[u.rank-1]:u.shape[u.rank-2],p=n?l.shape[l.rank-1]:l.shape[l.rank-2],h=r?u.shape[u.rank-2]:u.shape[u.rank-1],g=l.shape.slice(0,-2),v=u.shape.slice(0,-2),b=$e(g),m=$e(v);S(c===d,()=>`Error in fused matMul: inner shapes (${c}) and (${d}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`);const x=Pe(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([p,h]),k=n?O(l,[b,c,p]):O(l,[b,p,c]),E=r?O(u,[m,h,d]):O(u,[m,d,h]);let $;s!=null&&($=w(s,"bias","fused matMul"),[$]=Ne($,l),Pe(x,$.shape));let I;o!=null&&(I=w(o,"prelu weights","fused matMul"));const C=(j,U)=>{const[W,V,re,ce]=U,ee=ih(O(j,re.shape),re,a);let L,M;if(!n&&!r?(L=se(ee,V,!1,!0),M=se(W,ee,!0,!1)):!n&&r?(L=se(ee,V,!1,!1),M=se(ee,W,!0,!1)):n&&!r?(L=se(V,ee,!1,!0),M=se(W,ee,!1,!1)):(L=se(V,ee,!0,!0),M=se(ee,W,!0,!0)),s!=null){const Q=lh(ce,ee);return[L,M,Q]}else return[L,M]},A={a:k,b:E,bias:$,preluActivationWeights:I},P={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:i};return s==null?ln((U,W,V)=>{const re=T.runKernel(pd,A,P);return V([U,W,re]),{value:O(re,x),gradFunc:C}})(k,E):ln((U,W,V,re)=>{const ce=T.runKernel(pd,A,P);return re([U,W,ce,V]),{value:O(ce,x),gradFunc:C}})(k,E,$)}const S4=_({fusedMatMul_:N4});/**
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
 */const Hk=Object.freeze(Object.defineProperty({__proto__:null,conv2d:g4,depthwiseConv2d:k4,matMul:S4},Symbol.toStringTag,{value:"Module"}));/**
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
 */function _4(t){return vu(t,.54,.46)}const E4=_({hammingWindow_:_4});/**
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
 */function T4(t){return vu(t,.5,.5)}const Gk=_({hannWindow_:T4});/**
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
 */function $4(t,e,n,r=!1,s=0){let a=0;const o=[];for(;a+e<=t.size;)o.push(ae(t,a,e)),a+=n;if(r)for(;a<t.size;){const i=a+e-t.size,l=Ve([ae(t,a,e-i),fa([i],s)]);o.push(l),a+=n}return o.length===0?Vs([],[0,e]):O(Ve(o),[o.length,e])}const Qk=_({frame_:$4});/**
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
 */function I4(t,e,n,r,s=Gk){r==null&&(r=oh(e));const a=Qk(t,e,n),o=F(a,s(e));return yu(o,r)}const C4=_({stft_:I4});/**
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
 */function A4(t,e,n,r,s="bilinear",a=0){const o=w(t,"image","cropAndResize"),i=w(e,"boxes","cropAndResize","float32"),l=w(n,"boxInd","cropAndResize","int32"),u=i.shape[0];S(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),S(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${i.shape}.`),S(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${i.shape}.`),S(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),S(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),S(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const c={image:o,boxes:i,boxInd:l},d={method:s,extrapolationValue:a,cropSize:r};return T.runKernel(sb,c,d)}const O4=_({cropAndResize_:A4});/**
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
 */function D4(t){const e=w(t,"image","flipLeftRight","float32");S(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return T.runKernel(kb,n,{})}const P4=_({flipLeftRight_:D4});/**
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
 */function j4(t){const e=w(t,"image","grayscaleToRGB"),n=e.rank-1,r=e.shape[n];S(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),S(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,n),s[n]=3,Ms(e,s)}const R4=_({grayscaleToRGB_:j4});/**
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
 */function L4(t){const e=w(t,"image","RGBToGrayscale"),n=e.rank-1,r=e.shape[n];S(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),S(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=e.dtype,a=xe(e,"float32"),o=wt([.2989,.587,.114]);let i;switch(e.rank){case 2:i=Dr("ij,j->i",a,o);break;case 3:i=Dr("ijk,k->ij",a,o);break;case 4:i=Dr("ijkl,l->ijk",a,o);break;case 5:i=Dr("ijklm,m->ijkl",a,o);break;case 6:i=Dr("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return i=mn(i,-1),xe(i,s)}const F4=_({rgbToGrayscale_:L4});/**
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
 */function z4(t,e,n=0,r=.5){const s=w(t,"image","rotateWithOffset","float32");S(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:e,fillValue:n,center:r};return T.runKernel(p1,a,o)}const B4=_({rotateWithOffset_:z4});/**
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
 */function ma(t,e,n,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=t.shape[0];return n=Math.min(n,o),S(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),S(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),S(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),S(e.rank===1,()=>"scores must be a 1D tensor"),S(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`),S(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
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
 */function M4(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=w(t,"boxes","nonMaxSuppression","float32"),o=w(e,"scores","nonMaxSuppression","float32"),i=ma(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const l={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return T.runKernel(aw,{boxes:a,scores:o},l)}const V4=_({nonMaxSuppression_:M4});/**
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
 */function U4(t,e,n){const r=K4(t,e,n),s=r<0?-(r+1):r;t.splice(s,0,e)}function K4(t,e,n){return q4(t,e,n||W4)}function W4(t,e){return t>e?1:t<e?-1:0}function q4(t,e,n){let r=0,s=t.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(e,t[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}/**
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
 */function H4(t,e,n,r,s){return dh(t,e,n,r,s,0)}function G4(t,e,n,r,s,a){return dh(t,e,n,r,s,0,!1,a,!0)}function Q4(t,e,n,r,s,a){return dh(t,e,n,r,s,a,!0)}function dh(t,e,n,r,s,a,o=!1,i=!1,l=!1){const u=[];for(let b=0;b<e.length;b++)e[b]>s&&u.push({score:e[b],boxIndex:b,suppressBeginIndex:0});u.sort(pg);const c=a>0?-.5/a:0,d=[],p=[];for(;d.length<n&&u.length>0;){const b=u.pop(),{score:m,boxIndex:y,suppressBeginIndex:x}=b;if(m<s)break;let k=!1;for(let E=d.length-1;E>=x;--E){const $=Y4(t,y,d[E]);if($>=r){k=!0;break}if(b.score=b.score*X4(r,c,$),b.score<=s)break}b.suppressBeginIndex=d.length,k||(b.score===m?(d.push(y),p.push(b.score)):b.score>s&&U4(u,b,pg))}const h=d.length,g=n-h;i&&g>0&&(d.push(...new Array(g).fill(0)),p.push(...new Array(g).fill(0)));const v={selectedIndices:d};return o&&(v.selectedScores=p),l&&(v.validOutputs=h),v}function Y4(t,e,n){const r=t.subarray(e*4,e*4+4),s=t.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),d=Math.max(s[0],s[2]),p=Math.max(s[1],s[3]),h=(i-a)*(l-o),g=(d-u)*(p-c);if(h<=0||g<=0)return 0;const v=Math.max(a,u),b=Math.max(o,c),m=Math.min(i,d),y=Math.min(l,p),x=Math.max(m-v,0)*Math.max(y-b,0);return x/(h+g-x)}function X4(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function pg(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
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
 */async function J4(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=w(t,"boxes","nonMaxSuppressionAsync"),o=w(e,"scores","nonMaxSuppressionAsync"),i=ma(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const l=await Promise.all([a.data(),o.data()]),u=l[0],c=l[1],{selectedIndices:d}=H4(u,c,n,r,s);return a!==t&&a.dispose(),o!==e&&o.dispose(),wt(d,"int32")}const Z4=J4;/**
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
 */function eA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=w(t,"boxes","nonMaxSuppression"),i=w(e,"scores","nonMaxSuppression"),l=ma(o,i,n,r,s,a);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const u={boxes:o,scores:i},c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},d=T.runKernel(iw,u,c);return{selectedIndices:d[0],selectedScores:d[1]}}const tA=_({nonMaxSuppressionWithScore_:eA});/**
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
 */async function nA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=w(t,"boxes","nonMaxSuppressionAsync"),i=w(e,"scores","nonMaxSuppressionAsync"),l=ma(o,i,n,r,s,a);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,a=l.softNmsSigma;const u=await Promise.all([o.data(),i.data()]),c=u[0],d=u[1],{selectedIndices:p,selectedScores:h}=Q4(c,d,n,r,s,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:wt(p,"int32"),selectedScores:wt(h)}}const rA=nA;/**
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
 */function sA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=w(t,"boxes","nonMaxSuppression"),i=w(e,"scores","nonMaxSuppression"),l=ma(o,i,n,r,s,null),u=l.maxOutputSize,c=l.iouThreshold,d=l.scoreThreshold,p={boxes:o,scores:i},h={maxOutputSize:u,iouThreshold:c,scoreThreshold:d,padToMaxOutputSize:a},g=T.runKernel(ow,p,h);return{selectedIndices:g[0],validOutputs:g[1]}}const aA=_({nonMaxSuppressionPadded_:sA});/**
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
 */async function oA(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=w(t,"boxes","nonMaxSuppressionAsync"),i=w(e,"scores","nonMaxSuppressionAsync"),l=ma(o,i,n,r,s,null),u=l.maxOutputSize,c=l.iouThreshold,d=l.scoreThreshold,[p,h]=await Promise.all([o.data(),i.data()]),{selectedIndices:g,validOutputs:v}=G4(p,h,u,c,d,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:wt(g,"int32"),validOutputs:Z(v,"int32")}}const iA=oA;/**
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
 */function lA(t,e,n=!1,r=!1){const s=w(t,"images","resizeBilinear");S(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),S(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),S(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=O(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},l={alignCorners:n,halfPixelCenters:r,size:e},u=T.runKernel(Sw,i,l);return o?O(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const uA=_({resizeBilinear_:lA});/**
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
 */function cA(t,e,n=!1,r=!1){const s=w(t,"images","resizeNearestNeighbor");S(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),S(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),S(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),S(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=O(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},l={alignCorners:n,halfPixelCenters:r,size:e},u=T.runKernel(Nw,i,l);return o?O(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const dA=_({resizeNearestNeighbor_:cA});/**
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
 */function pA(t,e="binary",n=!1,r=.5){const s=w(t,"image","threshold"),a=.2989,o=.587,i=.114,l=s.shape[0]*s.shape[1];let u=F(wt([r]),255),c,d,p,h;if(S(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),S(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),S(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),S(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[c,d,p]=oa(s,[1,1,1],-1);const b=F(c,a),m=F(d,o),y=F(p,i);h=H(H(b,m),y)}else h=t;if(e==="otsu"){const b=_f(xe(Zf(h),"int32"),Wt([]),256);u=fA(b,l)}const g=n?fu(h,u):Ho(h,u);return xe(F(g,255),"int32")}function fA(t,e){let n=wt([-1]),r=wt([0]),s=wt([0]),a,o,i,l,u,c;for(let d=0;d<t.size-1;d++){a=ae(t,0,d+1),o=ae(t,d+1),u=ue(le(a),e),c=ue(le(o),e);const p=le(F(a,sa(0,a.size)));i=ue(p,le(a));const h=fa(o.shape,a.size),g=H(sa(0,o.size),h),v=F(o,g);l=ue(le(v),le(o));const b=Y(i,l),m=Y(i,l),y=F(u,c);s=F(F(y,b),m);const x=Ho(s,r);r=En(x,s,r),n=En(x,wt([d]),n)}return n}const hA=_({threshold_:pA});/**
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
 */function mA(t,e,n="nearest",r="constant",s=0,a){const o=w(t,"image","transform","float32"),i=w(e,"transforms","transform","float32");S(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),S(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),S(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const l={image:o,transforms:i},u={interpolation:n,fillMode:r,fillValue:s,outputShape:a};return T.runKernel(o1,l,u)}const gA=_({transform_:mA});/**
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
 */function yA(t,e,n){const r=w(t,"a","bandPart");S(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);let i,l;typeof e=="number"?(S(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),S(e<=a,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`),i=w(e<0?a:e,"numLower","bandPart")):(S(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=En(Cl(e,0),a,Eo(e,a))),typeof n=="number"?(S(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),S(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),l=w(n<0?o:n,"numUpper","bandPart")):(S(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=En(Cl(n,0),o,Eo(n,o)));const u=O(sa(0,a,1,"int32"),[-1,1]),c=sa(0,o,1,"int32"),d=Y(u,c),p=So(fu(d,i),Af(d,qt(l))),h=pr([a,o],r.dtype);return O(un(_r(O(r,[-1,a,o])).map(g=>En(p,g,h))),s)}const vA=_({bandPart_:yA});/**
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
 */function bA(t){let e;if(Array.isArray(t)){e=!1,S(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=t[0].shape[0];for(let a=1;a<t.length;++a)S(t[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[a].shape[0]} vs. ${s})`)}else e=!0,t=oa(t,t.shape[0],0).map(s=>Yo(s,[0]));S(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let s=0;s<t.length;++s)n.push(T.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const i=F(le(F(n[o],a)),n[o]);a=Y(a,i)}return ue(a,qo(a,"euclidean"))}));return e?un(n,0):n}const wA=_({gramSchmidt_:bA});/**
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
 */function xA(t,e=!1){if(S(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return fg(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((l,u)=>l*u),r=_r(O(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),s=[],a=[];r.forEach(l=>{const[u,c]=fg(l,e);s.push(u),a.push(c)});const o=O(un(s,0),t.shape),i=O(un(a,0),t.shape);return[o,i]}}function fg(t,e=!1){return T.tidy(()=>{S(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let s=$f(n),a=_n(t);const o=Vs([[1]],[1,1]);let i=_n(o);const l=n>=r?r:n;for(let u=0;u<l;++u){const c=a,d=i,p=s;[i,a,s]=T.tidy(()=>{const h=ae(a,[u,u],[n-u,1]),g=qo(h),v=ae(a,[u,u],[1,1]),b=En(Ho(v,0),Vs([[-1]]),Vs([[1]])),m=Y(v,F(b,g)),y=ue(h,m);y.shape[0]===1?i=_n(o):i=Ve([o,ae(y,[1,0],[y.shape[0]-1,y.shape[1]])],0);const x=qt(ue(se(b,m),g)),k=ae(a,[u,0],[n-u,r]),E=F(x,i),$=Al(i);if(u===0)a=Y(k,se(E,se($,k)));else{const A=Y(k,se(E,se($,k)));a=Ve([ae(a,[0,0],[u,r]),A],0)}const I=Al(E),C=ae(s,[0,u],[n,s.shape[1]-u]);if(u===0)s=Y(C,se(se(C,i),I));else{const A=Y(C,se(se(C,i),I));s=Ve([ae(s,[0,0],[n,u]),A],1)}return[i,a,s]}),Xe([c,d,p])}return!e&&n>r&&(s=ae(s,[0,0],[n,r]),a=ae(a,[0,0],[r,r])),[s,a]})}const kA=_({qr_:xA});/**
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
 */var Ge;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ge||(Ge={}));function NA(t,e,n=Ge.SUM_BY_NONZERO_WEIGHTS){const r=w(t,"losses","computeWeightedLoss");let s=null;e!=null&&(s=w(e,"weights","computeWeightedLoss"));const a=s==null?r:F(r,s);if(n===Ge.NONE)return a;if(n===Ge.SUM)return le(a);if(n===Ge.MEAN){if(s==null)return _o(a);{const o=r.size/s.size,i=ue(le(a),le(s));return o>1?ue(i,Z(o)):i}}if(n===Ge.SUM_BY_NONZERO_WEIGHTS){if(s==null)return ue(le(a),Z(r.size));{const o=F(s,Jn(r.shape)),i=xe(le(Bf(o,Z(0))),"float32");return ue(le(a),i)}}throw Error(`Unknown reduction: ${n}`)}const Ln=_({computeWeightedLoss_:NA});/**
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
 */function SA(t,e,n,r=Ge.SUM_BY_NONZERO_WEIGHTS){const s=w(t,"labels","absoluteDifference"),a=w(e,"predictions","absoluteDifference");let o=null;n!=null&&(o=w(n,"weights","absoluteDifference")),Rt(s.shape,a.shape,"Error in absoluteDifference: ");const i=ct(Y(s,a));return Ln(i,o,r)}const _A=_({absoluteDifference_:SA});function EA(t,e,n,r,s=Ge.SUM_BY_NONZERO_WEIGHTS){const a=w(t,"labels","cosineDistance"),o=w(e,"predictions","cosineDistance");let i=null;r!=null&&(i=w(r,"weights","cosineDistance")),Rt(a.shape,o.shape,"Error in cosineDistance: ");const l=Z(1),u=Y(l,le(F(a,o),n,!0));return Ln(u,i,s)}const TA=_({cosineDistance_:EA});function $A(t,e,n,r=Ge.SUM_BY_NONZERO_WEIGHTS){let s=w(t,"labels","hingeLoss");const a=w(e,"predictions","hingeLoss");let o=null;n!=null&&(o=w(n,"weights","hingeLoss")),Rt(s.shape,a.shape,"Error in hingeLoss: ");const i=Z(1);s=Y(F(Z(2),s),i);const l=Qo(Y(i,F(s,a)));return Ln(l,o,r)}const IA=_({hingeLoss_:$A});/**
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
 */function CA(t,e,n,r=1,s=Ge.SUM_BY_NONZERO_WEIGHTS){const a=w(t,"labels","huberLoss"),o=w(e,"predictions","huberLoss");let i=null;n!=null&&(i=w(n,"weights","huberLoss")),Rt(a.shape,o.shape,"Error in huberLoss: ");const l=Z(r),u=ct(Y(o,a)),c=Eo(u,l),d=Y(u,c),p=H(F(Z(.5),Ot(c)),F(l,d));return Ln(p,i,s)}const AA=_({huberLoss_:CA});/**
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
 */function OA(t,e,n,r=1e-7,s=Ge.SUM_BY_NONZERO_WEIGHTS){const a=w(t,"labels","logLoss"),o=w(e,"predictions","logLoss");let i=null;n!=null&&(i=w(n,"weights","logLoss")),Rt(a.shape,o.shape,"Error in logLoss: ");const l=Z(1),u=Z(r),c=qt(F(a,ra(H(o,u)))),d=F(Y(l,a),ra(H(Y(l,o),u))),p=Y(c,d);return Ln(p,i,s)}const DA=_({logLoss_:OA});/**
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
 */function PA(t,e,n,r=Ge.SUM_BY_NONZERO_WEIGHTS){const s=w(t,"labels","meanSquaredError"),a=w(e,"predictions","meanSquaredError");let o=null;n!=null&&(o=w(n,"weights","meanSquaredError")),Rt(s.shape,a.shape,"Error in meanSquaredError: ");const i=nh(s,a);return Ln(i,o,r)}const jA=_({meanSquaredError_:PA});/**
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
 */function RA(t,e){const n=w(t,"labels","sigmoidCrossEntropyWithLogits"),r=w(e,"logits","sigmoidCrossEntropyWithLogits");Rt(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Qo(r),a=F(r,n),o=Df(dr(qt(ct(r))));return H(Y(s,a),o)}function LA(t,e,n,r=0,s=Ge.SUM_BY_NONZERO_WEIGHTS){let a=w(t,"multiClassLabels","sigmoidCrossEntropy");const o=w(e,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=w(n,"weights","sigmoidCrossEntropy")),Rt(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const u=Z(r),c=Z(1),d=Z(.5);a=H(F(a,Y(c,u)),F(d,u))}const l=RA(a,o);return Ln(l,i,s)}const FA=_({sigmoidCrossEntropy_:LA});/**
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
 */function zA(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return ln((s,a,o)=>{const l=jf(a,[n],!0),u=Y(xe(a,"float32"),l);o([s,u]);const c=qt(F(u,s));return{value:le(c,[n]),gradFunc:(h,g)=>{const[v,b]=g,m=pu(h.shape,[n]);return[F(O(h,m),Y(xe(v,"float32"),dr(b))),F(O(h,m),Y(dr(b),xe(v,"float32")))]}}})(t,e)}function BA(t,e,n,r=0,s=Ge.SUM_BY_NONZERO_WEIGHTS){let a=w(t,"onehotLabels","softmaxCrossEntropy");const o=w(e,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=w(n,"weights","softmaxCrossEntropy")),Rt(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const u=Z(r),c=Z(1),d=Z(a.shape[1]);a=H(F(a,Y(c,u)),ue(u,d))}const l=zA(a,o);return Ln(l,i,s)}const MA=_({softmaxCrossEntropy_:BA});/**
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
 */function VA(t,e,n,r){const s=w(t,"indices","sparseFillEmptyRows","int32"),a=w(e,"values","sparseFillEmptyRows"),o=w(n,"denseShape","sparseFillEmptyRows","int32"),i=w(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const l={indices:s,values:a,denseShape:o,defaultValue:i},u=T.runKernel(Ww,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const UA=_({sparseFillEmptyRows_:VA});/**
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
 */function KA(t,e,n){const r=w(t,"inputIndices","sparseReshape","int32"),s=w(e,"inputShape","sparseReshape","int32"),a=w(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=T.runKernel(qw,o);return{outputIndices:i[0],outputShape:i[1]}}const WA=_({sparseReshape_:KA});/**
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
 */function qA(t,e,n){const r=w(t,"data","sparseSegmentMean"),s=w(e,"indices","sparseSegmentMean","int32"),a=w(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return T.runKernel(Hw,o)}const HA=_({sparseSegmentMean_:qA});/**
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
 */function GA(t,e,n){const r=w(t,"data","sparseSegmentSum"),s=w(e,"indices","sparseSegmentSum","int32"),a=w(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return T.runKernel(Gw,o)}const QA=_({sparseSegmentSum_:GA});/**
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
 */function YA(t,e,n,r,s,a,o,i){const l=w(t,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const u=w(e,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},d={data:l,dataSplits:u},p=T.runKernel(Zw,d,c);return{nGrams:p[0],nGramsSplits:p[1]}}const XA=_({stringNGrams_:YA});/**
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
 */function JA(t,e,n=!0){const r=w(t,"input","stringSplit","string"),s=w(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:n},o={input:r,delimiter:s},i=T.runKernel(e1,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const ZA=_({stringSplit_:JA});/**
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
 */function eO(t,e){const n=w(t,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return T.runKernel(t1,s,r)}const tO=_({stringToHashBucketFast_:eO});/**
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
 */function nO(t,e,n,r=!0){const s=w(t,"input","staticRegexReplace","string"),a={pattern:e,rewrite:n,replaceGlobal:r};return T.runKernel(Xw,{x:s},a)}const rO=_({staticRegexReplace_:nO});/**
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
 */const Yk={fft:gu,ifft:To,rfft:yu,irfft:th},Xk={hammingWindow:E4,hannWindow:Gk,frame:Qk,stft:C4},ph={flipLeftRight:P4,grayscaleToRGB:R4,resizeNearestNeighbor:dA,resizeBilinear:uA,rgbToGrayscale:F4,rotateWithOffset:B4,cropAndResize:O4,nonMaxSuppression:V4,nonMaxSuppressionAsync:Z4,nonMaxSuppressionWithScore:tA,nonMaxSuppressionWithScoreAsync:rA,nonMaxSuppressionPadded:aA,nonMaxSuppressionPaddedAsync:iA,threshold:hA,transform:gA},Jk={bandPart:vA,gramSchmidt:wA,qr:kA},Zk={absoluteDifference:_A,computeWeightedLoss:Ln,cosineDistance:TA,hingeLoss:IA,huberLoss:AA,logLoss:DA,meanSquaredError:jA,sigmoidCrossEntropy:FA,softmaxCrossEntropy:MA},e2={sparseFillEmptyRows:UA,sparseReshape:WA,sparseSegmentMean:HA,sparseSegmentSum:QA},t2={stringNGrams:XA,stringSplit:ZA,stringToHashBucketFast:tO,staticRegexReplace:rO};/**
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
 */const sO=new Map,aO=new Map;class oO{getClassName(){return this.constructor.className}static fromConfig(e,n){return new e(n)}}class Pr{constructor(){this.classNameMap={}}static getMap(){return Pr.instance==null&&(Pr.instance=new Pr),Pr.instance}static register(e){Pr.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function iO(t,e,n){S(t.className!=null,()=>"Class being registered does not have the static className property defined."),S(typeof t.className=="string",()=>"className is required to be a string, but got type "+typeof t.className),S(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof n>"u"&&(n=t.className);const r=n,s=e+">"+r;return Pr.register(t),sO.set(s,t),aO.set(t,s),t}/**
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
 */class Er extends oO{minimize(e,n=!1,r){const{value:s,grads:a}=this.computeGradients(e,r);if(r!=null){const o=r.map(i=>({name:i.name,tensor:a[i.name]}));this.applyGradients(o)}else this.applyGradients(a);return Xe(a),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,n){return jx(e,n)}dispose(){this.iterations_!=null&&Xe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:Z(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Er,Symbol.hasInstance,{value:t=>t.minimize!=null&&t.computeGradients!=null&&t.applyGradients!=null});/**
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
 */class n2 extends Er{static get className(){return"Adadelta"}constructor(e,n,r=null){super(),this.learningRate=e,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=T.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=T.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:ne(()=>gt(a).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:ne(()=>gt(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const l=this.accumulatedGrads[s].variable,u=this.accumulatedUpdates[s].variable;ne(()=>{const c=H(F(l,this.rho),F(Ot(i),1-this.rho)),d=F(ue(on(H(u,this.epsilon)),on(H(l,this.epsilon))),i),p=H(F(u,this.rho),F(Ot(d),1-this.rho));l.assign(c),u.assign(p);const h=H(F(d,-this.learningRate),a);a.assign(h)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Xe(this.accumulatedGrads.map(e=>e.variable)),Xe(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.rho,n.epsilon)}}/**
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
 */class r2 extends Er{static get className(){return"Adagrad"}constructor(e,n=.1){super(),this.learningRate=e,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=T.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:ne(()=>fa(a.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const i=this.accumulatedGrads[s].variable;ne(()=>{const l=H(i,Ot(o));i.assign(l);const u=H(F(ue(o,on(H(l,T.backend.epsilon()))),-this.learningRate),a);a.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Xe(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,n){return new e(n.learningRate,n.initialAccumulatorValue)}}/**
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
 */class s2 extends Er{static get className(){return"Adam"}constructor(e,n,r,s=null){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],ne(()=>{this.accBeta1=Z(n).variable(),this.accBeta2=Z(r).variable()}),s==null&&(this.epsilon=T.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);ne(()=>{const r=Y(1,this.accBeta1),s=Y(1,this.accBeta2);n.forEach((a,o)=>{const i=T.registeredVariables[a],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:ne(()=>gt(i).variable(l))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${a}/v`,variable:ne(()=>gt(i).variable(l))});const u=Array.isArray(e)?e[o].tensor:e[a];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,d=this.accumulatedSecondMoment[o].variable,p=H(F(c,this.beta1),F(u,1-this.beta1)),h=H(F(d,this.beta2),F(Ot(u),1-this.beta2)),g=ue(p,r),v=ue(h,s);c.assign(p),d.assign(h);const b=H(F(ue(g,H(on(v),this.epsilon)),-this.learningRate),i);i.assign(b)}),this.accBeta1.assign(F(this.accBeta1,this.beta1)),this.accBeta2.assign(F(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Xe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Xe(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e),ne(()=>{this.accBeta1.assign(na(this.beta1,this.iterations_+1)),this.accBeta2.assign(na(this.beta2,this.iterations_+1))});const n=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
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
 */class a2 extends Er{static get className(){return"Adamax"}constructor(e,n,r,s=null,a=0){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],ne(()=>{this.iteration=Z(0).variable(),this.accBeta1=Z(n).variable()}),s==null&&(this.epsilon=T.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);ne(()=>{const r=Y(1,this.accBeta1),s=ue(-this.learningRate,H(F(this.iteration,this.decay),1));n.forEach((a,o)=>{const i=T.registeredVariables[a],l=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:gt(i).variable(l)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${a}/v`,variable:gt(i).variable(l)});const u=Array.isArray(e)?e[o].tensor:e[a];if(u==null)return;const c=this.accumulatedFirstMoment[o].variable,d=this.accumulatedWeightedInfNorm[o].variable,p=H(F(c,this.beta1),F(u,1-this.beta1)),h=F(d,this.beta2),g=ct(u),v=zf(h,g);c.assign(p),d.assign(v);const b=H(F(ue(s,r),ue(p,H(v,this.epsilon))),i);i.assign(b)}),this.iteration.assign(H(this.iteration,1)),this.accBeta1.assign(F(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Xe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Xe(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
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
 */class fh extends Er{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const o=T.registeredVariables[r];ne(()=>{const i=H(F(this.c,a),o);o.assign(i)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Vt(Z(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,n){return new e(n.learningRate)}}/**
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
 */class o2 extends fh{static get className(){return"Momentum"}constructor(e,n,r=!1){super(e),this.learningRate=e,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=Z(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=T.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:ne(()=>gt(a).variable(!1))});const o=this.accumulations[s].variable,i=Array.isArray(e)?e[s].tensor:e[r];i!=null&&ne(()=>{let l;const u=H(F(this.m,o),i);this.useNesterov?l=H(F(this.c,H(i,F(u,this.m))),a):l=H(F(this.c,u),a),o.assign(u),a.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Xe(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)}}/**
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
 */class i2 extends Er{static get className(){return"RMSProp"}constructor(e,n=.9,r=0,s=null,a=!1){if(super(),this.learningRate=e,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,s==null&&(this.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=T.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:ne(()=>gt(a).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:ne(()=>gt(a).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:ne(()=>gt(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const l=this.accumulatedMeanSquares[s].variable,u=this.accumulatedMoments[s].variable;ne(()=>{const c=H(F(l,this.decay),F(Ot(i),1-this.decay));if(this.centered){const d=this.accumulatedMeanGrads[s].variable,p=H(F(d,this.decay),F(i,1-this.decay)),h=ue(F(i,this.learningRate),on(Y(c,H(Ot(p),this.epsilon)))),g=H(F(u,this.momentum),h);l.assign(c),d.assign(p),u.assign(g);const v=Y(a,g);a.assign(v)}else{const d=H(F(l,this.decay),F(Ot(i),1-this.decay)),p=H(F(u,this.momentum),ue(F(i,this.learningRate),on(H(d,this.epsilon))));l.assign(d),u.assign(p);const h=Y(a,p);a.assign(h)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Xe(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Xe(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Xe(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
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
 */const lO=[n2,r2,s2,a2,o2,i2,fh];function uO(){for(const t of lO)iO(t)}/**
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
 */const cO="model",dO=".json",pO=".weights.bin";function hg(t){return new Promise(e=>setTimeout(e)).then(t)}class rs{constructor(e){if(!X().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(rs.URL_SCHEME)&&(e=e.slice(rs.URL_SCHEME.length)),(e==null||e.length===0)&&(e=cO),this.modelJsonFileName=e+dO,this.weightDataFileName=e+pO}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=Qt.join(e.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=C1(e,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,await hg(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const l=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;l.download=this.weightDataFileName,l.href=r,await hg(()=>l.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Uo(e)}}}}rs.URL_SCHEME="downloads://";class fO{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,n)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:o});return}const l=bf(a,u=>this.loadWeights(u));e(l)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const n=[],r=[];for(const o of e)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(e),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[n,o])}loadWeightsFile(e,n){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;r(i)},a.onerror=o=>s(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],r=this.weightsFiles.map(a=>dg(a.name)),s={};for(const a of e)a.paths.forEach(o=>{const i=dg(o);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const hO=t=>X().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(rs.URL_SCHEME)?mO(t.slice(rs.URL_SCHEME.length)):null;ge.registerSaveRouter(hO);function mO(t="model"){return new rs(t)}function gO(t){return new fO(t)}/**
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
 */function mg(t,e,n,r){o(t),n=n??0,r=r??1,i(n,r);let s=0;const a=l=>(l.then(u=>{const c=n+ ++s/t.length*(r-n);return e(c),u}),l);function o(l){S(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function i(l,u){S(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),S(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),S(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(t.map(a))}/**
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
 */async function l2(t,e){e==null&&(e={});const n=e.fetchFunc==null?X().platform.fetch:e.fetchFunc,r=t.map(d=>n(d,e.requestInit,{isBinary:!0})),i=(e.onProgress==null?await Promise.all(r):await mg(r,e.onProgress,0,.5)).map(d=>d.arrayBuffer());return e.onProgress==null?await Promise.all(i):await mg(i,e.onProgress,.5,1)}function yO(t,e){var n;const r=e.fetchFunc==null?X().platform.fetch:e.fetchFunc;let s=0,a;return(n=e.onProgress)===null||n===void 0||n.call(e,0),new ReadableStream({pull:async o=>{for(var i;s<t.length;){a||(a=(await r(t[s],e.requestInit,{isBinary:!0})).body.getReader());const{done:l,value:u}=await a.read();if(l){s++,a=void 0,(i=e.onProgress)===null||i===void 0||i.call(e,s/t.length);continue}o.enqueue(u);return}o.close()}})}async function vO(t,e="",n,r){return u2(o=>l2(o,{requestInit:r}))(t,e,n)}function u2(t){return async(e,n="",r)=>{const s=e.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],i=[];if(e.forEach((h,g)=>{let v=0;h.weights.forEach(b=>{const m="quantization"in b?b.quantization.dtype:b.dtype,y=es[m]*$e(b.shape),x=()=>{s[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:b,groupOffset:v,sizeBytes:y})};r!=null?r.forEach((k,E)=>{k===b.name&&(x(),o[E]=!0)}):x(),i.push(b.name),v+=y})}),!o.every(h=>h)){const h=r.filter((g,v)=>!o[v]);throw new Error(`Could not find weights in manifest with names: ${h.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const l=s.reduce((h,g,v)=>(g&&h.push(v),h),[]),u=[];l.forEach(h=>{e[h].paths.forEach(g=>{const v=n+(n.endsWith("/")?"":"/")+g;u.push(v)})});const c=await t(u),d={};let p=0;return l.forEach(h=>{const g=e[h].paths.length,v=new Qt(c.slice(p,p+g));a[h].forEach(m=>{const y=v.slice(m.groupOffset,m.groupOffset+m.sizeBytes),x=T1(y,[m.manifestEntry]);for(const k in x)d[k]=x[k]}),p+=g}),d}}/**
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
 */const bO="application/octet-stream",wO="application/json";class hh{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(S(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=X().platform.fetch,S(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&S(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=C1(e,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:wO}),"model.json"),e.weightData!=null){const o=Qt.join(e.weightData);n.body.append("model.weights.bin",new Blob([o],{type:bO}),"model.weights.bin")}const a=await this.fetch(this.path,n);if(a.ok)return{modelArtifactsInfo:Uo(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await e.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return bf(e,n=>this.loadWeights(n))}async loadStream(){const e=await this.loadModelJSON(),n=await this.getWeightUrls(e.weightsManifest),r=kd(e.weightsManifest),s=()=>yO(n,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(e){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=xO(n),a=this.weightPathPrefix||r,o=[],i=[];for(const l of e)for(const u of l.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(u)):o.push(a+u+s);return this.weightUrlConverter&&o.push(...await Promise.all(i)),o}async loadWeights(e){const n=await this.getWeightUrls(e),r=kd(e),s=await l2(n,this.loadOptions);return[r,s]}}hh.URL_SCHEME_REGEX=/^https?:\/\//;function xO(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),s=n>e?t.substring(n):"";return[r+"/",s]}function Td(t){return t.match(hh.URL_SCHEME_REGEX)!=null}const c2=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(r=>Td(r)):n=Td(t),n)return mh(t,e)}return null};ge.registerSaveRouter(c2);ge.registerLoadRouter(c2);function mh(t,e){return new hh(t,e)}function kO(t,e){return mh(t,e)}/**
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
 */class tc{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class d2{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class NO{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function SO(t,e,n,r){const s=arguments;return new NO(p2(...s))}function p2(t,e,n,r){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new tc(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new tc({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new tc({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))}function _O(t){return new d2(t)}function EO(t){return new d2(t)}/**
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
 */const gh=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Qt,browserFiles:gO,browserHTTPRequest:kO,concatenateArrayBuffers:RT,copyModel:s3,decodeWeights:T1,decodeWeightsStream:I1,encodeWeights:CT,fromMemory:SO,fromMemorySync:p2,getLoadHandlers:KT,getModelArtifactsForJSON:bf,getModelArtifactsForJSONSync:A1,getModelArtifactsInfoForJSON:Uo,getSaveHandlers:UT,getWeightSpecs:kd,http:mh,isHTTPScheme:Td,listModels:n3,loadWeights:vO,moveModel:a3,registerLoadRouter:VT,registerSaveRouter:MT,removeModel:r3,weightsLoaderFactory:u2,withSaveHandler:_O,withSaveHandlerSync:EO},Symbol.toStringTag,{value:"Module"}));/**
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
 */let Ir;function TO(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(t==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&t instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)a=!0;else if(t.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);if(kl(dd,T.backendName)!=null){const g={pixels:t},v={numChannels:e};return T.runKernel(dd,g,v)}const[u,c]=s?[t.videoWidth,t.videoHeight]:[t.width,t.height];let d;if(o)d=t.getContext("2d").getImageData(0,0,u,c).data;else if(r||n)d=t.data;else if(a||s||i){if(Ir==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Ir=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Ir=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Ir.canvas.width=u,Ir.canvas.height=c,Ir.drawImage(t,0,0,u,c),d=Ir.getImageData(0,0,u,c).data}let p;if(e===4)p=new Int32Array(d);else{const g=u*c;p=new Int32Array(g*e);for(let v=0;v<g;v++)for(let b=0;b<e;++b)p[v*e+b]=d[v*4+b]}return sh(p,[c,u,e],"int32")}const $O=_({fromPixels_:TO});/**
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
 */uO();const IO=Object.freeze(Object.defineProperty({__proto__:null,Abs:Sv,Acos:_v,Acosh:Ev,AdadeltaOptimizer:n2,AdagradOptimizer:r2,AdamOptimizer:s2,AdamaxOptimizer:a2,Add:ff,AddN:Tv,All:$v,Any:Iv,ArgMax:Cv,ArgMin:Av,Asin:Ov,Asinh:Dv,Atan:Pv,Atan2:Rv,Atanh:jv,AvgPool:Lv,AvgPool3D:Fv,BatchMatMul:zv,BatchToSpaceND:Bv,Bincount:Mv,BitwiseAnd:Vv,BroadcastArgs:Uv,Cast:hf,Ceil:Kv,ClipByValue:Wv,Complex:qv,ComplexAbs:Hv,Concat:Gv,Conv2D:Qv,Conv2DBackpropFilter:Yv,Conv2DBackpropInput:Xv,Conv3D:Jv,Conv3DBackpropInputV2:Zv,Cos:eb,Cosh:tb,CropAndResize:sb,Cumprod:nb,Cumsum:rb,DenseBincount:ab,DepthToSpace:ob,DepthwiseConv2dNative:ib,DepthwiseConv2dNativeBackpropFilter:lb,DepthwiseConv2dNativeBackpropInput:ub,Diag:cb,Dilation2D:db,get ENV(){return df},Einsum:fb,Elu:hb,Environment:kv,Equal:gb,Erf:mb,Exp:yb,ExpandDims:vb,Expm1:bb,FFT:wb,Fill:xb,FlipLeftRight:kb,Floor:Nb,FloorDiv:Sb,FromPixels:dd,FusedBatchNorm:_b,FusedConv2D:fd,FusedDepthwiseConv2D:hd,GatherNd:Tb,GatherV2:Eb,Greater:$b,GreaterEqual:Ib,IFFT:Cb,Identity:mf,Imag:Ab,IsFinite:Ob,IsInf:Db,IsNan:Pb,KernelBackend:vv,LRN:Kb,LeakyRelu:jb,Less:Rb,LessEqual:Lb,LinSpace:Fb,Log:zb,Log1p:Bb,LogicalAnd:Mb,LogicalNot:Vb,LogicalOr:Ub,Max:Wb,MaxPool:Hb,MaxPool3D:Gb,MaxPoolWithArgmax:Qb,Maximum:qb,Mean:Yb,Min:Xb,Minimum:Jb,MirrorPad:Zb,Mod:ew,MomentumOptimizer:o2,Multinomial:tw,Multiply:nw,Neg:rw,NonMaxSuppressionV3:aw,NonMaxSuppressionV4:ow,NonMaxSuppressionV5:iw,NotEqual:sw,OP_SCOPE_SUFFIX:yf,OneHot:uw,OnesLike:lw,Optimizer:Er,Pack:cw,PadV2:dw,Pow:pw,Prelu:fw,Prod:hw,RMSPropOptimizer:i2,RaggedGather:mw,RaggedRange:gw,RaggedTensorToTensor:yw,Range:vw,get Rank(){return yd},Real:bw,RealDiv:pb,Reciprocal:ww,get Reduction(){return Ge},Relu:xw,Relu6:_w,Reshape:kw,ResizeBilinear:Sw,ResizeNearestNeighbor:Nw,Reverse:Ew,RotateWithOffset:p1,Round:Tw,Rsqrt:$w,SGDOptimizer:fh,ScatterNd:Iw,SearchSorted:Aw,Select:Ow,Selu:Dw,Sigmoid:Fw,Sign:Lw,Sin:jw,Sinh:Rw,Slice:Pw,Softmax:Kw,Softplus:zw,SpaceToBatchND:Vw,SparseFillEmptyRows:Ww,SparseReshape:qw,SparseSegmentMean:Hw,SparseSegmentSum:Gw,SparseToDense:Qw,SplitV:Uw,Sqrt:Bw,SquaredDifference:Yw,StaticRegexReplace:Xw,Step:d1,StridedSlice:Jw,StringNGrams:Zw,StringSplit:e1,StringToHashBucketFast:t1,Sub:n1,Sum:Mw,Tan:r1,Tanh:s1,Tensor:Re,TensorBuffer:Sl,TensorScatterUpdate:Cw,Tile:gf,TopK:a1,Transform:o1,Transpose:zi,Unique:i1,Unpack:l1,UnsortedSegmentSum:u1,Variable:ko,ZerosLike:c1,_FusedMatMul:pd,abs:ct,acos:z1,acosh:B1,add:H,addN:M1,all:V1,any:U1,argMax:K1,argMin:W1,asin:q1,asinh:H1,atan:G1,atan2:Q1,atanh:Y1,avgPool:Nf,avgPool3d:X1,backend:E1,basicLSTMCell:J1,batchNorm:Ko,batchNorm2d:Z1,batchNorm3d:ex,batchNorm4d:tx,batchToSpaceND:Sf,bincount:_f,bitwiseAnd:nx,booleanMaskAsync:Bk,broadcastArgs:rx,broadcastTo:Ga,buffer:an,cast:xe,ceil:sx,clipByValue:ax,clone:_n,complex:Pn,concat:Ve,concat1d:ox,concat2d:ix,concat3d:lx,concat4d:ux,conv1d:cx,conv2d:Wo,conv2dTranspose:px,conv3d:fx,conv3dTranspose:hx,cos:mx,cosh:gx,cosineWindow:vu,cumprod:yx,cumsum:vx,customGrad:ln,denseBincount:bx,depthToSpace:wx,depthwiseConv2d:du,diag:xx,dilation2d:kx,dispose:Xe,div:ue,divNoNan:Nx,dot:Sx,dropout:Wk,einsum:Dr,elu:Tf,enclosingPowerOfTwo:oh,ensureShape:_x,env:X,equal:Ef,erf:Ex,euclideanNorm:$x,exp:dr,expandDims:mn,expm1:Ix,eye:$f,fft:gu,fill:fa,floor:If,floorDiv:xf,fused:Hk,gather:Cf,gatherND:Kk,getBackend:_1,getGradient:md,getKernel:kl,getKernelsForBackend:gd,greater:Ho,greaterEqual:Af,ifft:To,imag:Go,image:ph,inTopKAsync:qk,io:gh,irfft:th,isFinite:Cx,isInf:Ax,isNaN:Ox,keep:Vt,leakyRelu:Of,less:Cl,lessEqual:fu,linalg:Jk,linspace:Dx,localResponseNormalization:Px,log:ra,log1p:Df,logSigmoid:Rx,logSoftmax:Lx,logSumExp:jf,logicalAnd:So,logicalNot:Rf,logicalOr:Lf,logicalXor:Fx,losses:Zk,lowerBound:zx,matMul:se,max:Kr,maxPool:Ff,maxPool3d:Bx,maxPoolWithArgmax:Mx,maximum:zf,mean:_o,meshgrid:Vx,min:Il,minimum:Eo,mirrorPad:Ux,mod:Kx,moments:Wx,movingAverage:Mk,mul:F,multiRNNCell:qx,multinomial:Hx,neg:qt,norm:qo,notEqual:Bf,oneHot:Gx,ones:Jn,onesLike:Qx,op:_,outerProduct:Yx,pad:ha,pad1d:Xx,pad2d:Jx,pad3d:Zx,pad4d:ek,pool:tk,pow:na,prelu:Vf,print:wf,prod:nk,raggedGather:rk,raggedRange:sk,raggedTensorToTensor:ak,rand:ok,randomGamma:lk,randomNormal:Xf,randomStandardNormal:uk,randomUniform:mu,randomUniformInt:ck,range:sa,real:aa,reciprocal:dk,relu:Qo,relu6:Jf,reshape:O,reverse:fr,reverse1d:pk,reverse2d:fk,reverse3d:hk,reverse4d:mk,rfft:yu,round:Zf,rsqrt:gk,scalar:Z,scatterND:Vk,searchSorted:hu,selu:yk,separableConv2d:vk,setdiff1dAsync:bk,sigmoid:Ur,sign:wk,signal:Xk,sin:xk,sinh:kk,slice:ae,slice1d:Nk,slice2d:Sk,slice3d:_k,slice4d:Ek,softmax:eh,softplus:Pf,spaceToBatchND:Mf,sparse:e2,sparseToDense:Uk,spectral:Yk,split:oa,sqrt:on,square:Ot,squaredDifference:nh,squeeze:Yo,stack:un,step:rh,stridedSlice:Tk,string:t2,sub:Y,sum:le,tan:$k,tanh:$l,tensor:Wt,tensor1d:wt,tensor2d:Vs,tensor3d:sh,tensor4d:Ik,tensor5d:Ck,tensor6d:Ak,tensorScatterUpdate:Dk,tidy:ne,tile:Ms,topk:Pk,transpose:Al,truncatedNormal:jk,unique:Rk,unsortedSegmentSum:Lk,unstack:_r,upcastType:v1,upperBound:Fk,variable:zk,variableGrads:jx,where:En,whereAsync:ah,zeros:pr,zerosLike:gt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const CO=X();CO.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
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
 */var lt;(function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"})(lt||(lt={}));var gg;(function(t){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))})(gg||(gg={}));/**
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
 */const AO={};function f2(t){return AO[t]}/**
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
 */function f(t,e,n,r,s){const a=e.inputParams[t];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,l=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd,u=i<0?e.inputNames.length+i:i;if(a.type==="tensor")return Le(e.inputNames[u],n,r,s);if(a.type==="tensors"){const p=e.inputs.slice(i,l);return e.inputNames.slice(i,l).filter((g,v)=>{var b;return((b=p[v])===null||b===void 0?void 0:b.op)!=="NoOp"}).map(g=>Le(g,n,r,s))}const c=Le(e.inputNames[u],n,r,s),d=c.dataSync();return a.type==="number"?d[0]:cd(c.shape,d)}const o=e.attrParams[t];return o&&o.value}function Le(t,e,n,r){const[s,a]=ut(t,n);if(r!=null){const i=r.getHashTableHandleByName(s);if(i!=null)return i}const o=n.currentContextIds.find(i=>!!e[Ol(s,i)]);return o!==void 0?e[Ol(s,o)][a]:void 0}function yg(t,e,n){return e[Ol(t,n.currentContextId)]}function gn(t,e){const[n,r,s]=ut(t,e);return[Ol(n,e&&e.currentContextId),r,s]}function Ol(t,e){return e?`${t}-${e}`:t}function ut(t,e){if(t==="")return["",0,void 0];const n=e!=null&&e.parseNodeNameCache!=null;if(n){const a=e.parseNodeNameCache.get(t);if(a!=null)return a}const r=t.split(":");let s;if(r.length===1)s=[t,0,void 0];else{const a=r[0],o=r.length===3?r[1]:void 0,i=Number(r[r.length-1]);s=[a,i,o]}return n&&e.parseNodeNameCache.set(t,s),s}function Vi(t,e,n){let r=f("pad",t,e,n);if(r==="explicit"){r=f("explicitPaddings",t,e,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function yn(t){return t.kept?t:_n(t)}/**
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
 */const OO=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],DO=Object.freeze(Object.defineProperty({__proto__:null,json:OO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const PO=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],jO=Object.freeze(Object.defineProperty({__proto__:null,json:PO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const RO=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],LO=Object.freeze(Object.defineProperty({__proto__:null,json:RO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const FO=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],zO=Object.freeze(Object.defineProperty({__proto__:null,json:FO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const BO=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],MO=Object.freeze(Object.defineProperty({__proto__:null,json:BO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const VO=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],UO=Object.freeze(Object.defineProperty({__proto__:null,json:VO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const KO=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],WO=Object.freeze(Object.defineProperty({__proto__:null,json:KO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const qO=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],HO=Object.freeze(Object.defineProperty({__proto__:null,json:qO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const GO=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],QO=Object.freeze(Object.defineProperty({__proto__:null,json:GO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const YO=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],XO=Object.freeze(Object.defineProperty({__proto__:null,json:YO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const JO=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],ZO=Object.freeze(Object.defineProperty({__proto__:null,json:JO},Symbol.toStringTag,{value:"Module"}));/**
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
 */const eD=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],tD=Object.freeze(Object.defineProperty({__proto__:null,json:eD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const nD=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],rD=Object.freeze(Object.defineProperty({__proto__:null,json:nD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const sD=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],aD=Object.freeze(Object.defineProperty({__proto__:null,json:sD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const oD=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],iD=Object.freeze(Object.defineProperty({__proto__:null,json:oD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const lD=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],uD=Object.freeze(Object.defineProperty({__proto__:null,json:lD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const cD=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],dD=Object.freeze(Object.defineProperty({__proto__:null,json:cD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const pD=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],fD=Object.freeze(Object.defineProperty({__proto__:null,json:pD},Symbol.toStringTag,{value:"Module"}));/**
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
 */const hD=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],mD=Object.freeze(Object.defineProperty({__proto__:null,json:hD},Symbol.toStringTag,{value:"Module"}));/**
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
 */class vg{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[DO,jO,LO,zO,MO,UO,WO,HO,QO,XO,ZO,tD,rD,aD,iD,uD,dD,fD,mD],n=[].concat(...e.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(e,n={}){const r=e.node,s=[],a=[],o=[],i=r.reduce((v,b)=>(v[b.name]=this.mapNode(b),b.op.startsWith("Placeholder")?s.push(v[b.name]):b.op==="Const"?a.push(v[b.name]):(b.input==null||b.input.length===0)&&o.push(v[b.name]),v),{});let l=[];const u=[];let c={},d={};n!=null&&(c=this.mapSignatureEntries(n.inputs),d=this.mapSignatureEntries(n.outputs));const p=Object.keys(i);p.forEach(v=>{const b=i[v];b.inputNames.forEach((m,y)=>{const[x,,k]=gn(m),E=i[x];if(E.outputs!=null){const $=E.outputs.indexOf(k);if($!==-1){const I=`${x}:${$}`;b.inputNames[y]=I}}b.inputs.push(E),E.children.push(b)})}),Object.keys(d).length===0?p.forEach(v=>{const b=i[v];b.children.length===0&&u.push(b)}):Object.keys(d).forEach(v=>{const[b]=gn(v),m=i[b];m!=null&&(m.signatureKey=d[v],u.push(m))}),Object.keys(c).length>0?Object.keys(c).forEach(v=>{const[b]=gn(v),m=i[b];m&&(m.signatureKey=c[v],l.push(m))}):l=s;let h={};e.library!=null&&e.library.function!=null&&(h=e.library.function.reduce((v,b)=>(v[b.signature.name]=this.mapFunction(b),v),{}));const g={nodes:i,inputs:l,outputs:u,weights:a,placeholders:s,signature:n,functions:h};return o.length>0&&(g.initNodes=o),g}mapSignatureEntries(e){return Object.keys(e||{}).reduce((n,r)=>(n[e[r].name]=r,n),{})}mapNode(e){const n=f2(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:n.category,inputNames:(e.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,a)=>{const o=a.type;let i;switch(a.type){case"string":i=$d(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=$d(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=jd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=jd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=Cd(e.attr,a.tfName,a.defaultValue||0),i===void 0&&a.tfDeprecatedName&&(i=Cd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=Pd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Pd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Id(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Id(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=Ld(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ld(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=Dd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Dd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=Rd(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Rd(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=Ad(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Ad(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=Od(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Od(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=bg(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=bg(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return s[a.name]={value:i,type:o},s},{})),r}mapFunction(e){const n=e.nodeDef,r=[],s=[];let a={};n!=null&&(a=n.reduce((d,p)=>(d[p.name]=this.mapNode(p),p.op==="Const"&&s.push(d[p.name]),d),{}));const o=[],i=[];e.signature.inputArg.forEach(d=>{const[p]=gn(d.name),h={name:p,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:yh(d.type),type:"dtype"}},children:[]};h.signatureKey=d.name,o.push(h),a[p]=h}),Object.keys(a).forEach(d=>{const p=a[d];p.inputNames.forEach((h,g)=>{const[v,,b]=gn(h),m=a[v];if(m.outputs!=null){const y=m.outputs.indexOf(b);if(y!==-1){const x=`${v}:${y}`;p.inputNames[g]=x}}p.inputs.push(m),m.children.push(p)})});const u=e.ret;e.signature.outputArg.forEach(d=>{const[p,h]=gn(u[d.name]),g=a[p];g!=null&&(g.defaultOutput=h,i.push(g))});const c=this.mapArgsToSignature(e);return{nodes:a,inputs:o,outputs:i,weights:s,placeholders:r,signature:c}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:e.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,e.ret),n),{})}}mapArgToTensorInfo(e,n){let r=e.name;return n!=null&&(r=n[r]),{name:r,dtype:e.type}}}function gD(t){const e=X().global;if(typeof e.atob<"u")return e.atob(t);if(typeof Buffer<"u")return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function h2(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):gD(t);return e?n:n.toLowerCase()}function $d(t,e,n,r=!1){const s=t[e];return s!=null?h2(s.s,r):n}function Id(t,e,n){const r=t[e];return r?r.b:n}function Cd(t,e,n){const r=t[e]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function yh(t){switch(typeof t=="string"&&(t=lt[t]),t){case lt.DT_FLOAT:case lt.DT_HALF:return"float32";case lt.DT_INT32:case lt.DT_INT64:case lt.DT_INT8:case lt.DT_UINT8:return"int32";case lt.DT_BOOL:return"bool";case lt.DT_DOUBLE:return"float32";case lt.DT_STRING:return"string";case lt.DT_COMPLEX64:case lt.DT_COMPLEX128:return"complex64";default:return null}}function bg(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function Ad(t,e,n){const r=t[e];return r&&r.type?yh(r.type):n}function Od(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(s=>yh(s)):n}function m2(t){if(!t.unknownRank)return t.dim!=null?t.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Dd(t,e,n){const r=t[e];return r&&r.shape?m2(r.shape):n}function Pd(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function jd(t,e,n,r=!1){const s=t[e];return s&&s.list&&s.list.s?s.list.s.map(a=>h2(a,r)):n}function Rd(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(s=>m2(s)):n}function Ld(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}/**
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
 */class yD{constructor(e,n,r){this.node=e,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(s=>this.getInput(s)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(e){return Le(e,this.tensorMap,this.context)}getAttr(e,n){const r=this.node.rawAttrs[e];if(r.tensor!=null)return Le(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Cd(this.node.rawAttrs,e,n);if(r.s!=null)return $d(this.node.rawAttrs,e,n);if(r.b!=null)return Id(this.node.rawAttrs,e,n);if(r.shape!=null)return Dd(this.node.rawAttrs,e,n);if(r.type!=null)return Ad(this.node.rawAttrs,e,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Pd(this.node.rawAttrs,e,n);if(r.list.s!=null)return jd(this.node.rawAttrs,e,n);if(r.list.shape!=null)return Rd(this.node.rawAttrs,e,n);if(r.list.b!=null)return Ld(this.node.rawAttrs,e,n);if(r.list.type!=null)return Od(this.node.rawAttrs,e,n)}return n}}/**
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
 */const ze=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:yf,abs:ct,acos:z1,acosh:B1,add:H,addN:M1,all:V1,any:U1,argMax:K1,argMin:W1,asin:q1,asinh:H1,atan:G1,atan2:Q1,atanh:Y1,avgPool:Nf,avgPool3d:X1,basicLSTMCell:J1,batchNorm:Ko,batchNorm2d:Z1,batchNorm3d:ex,batchNorm4d:tx,batchToSpaceND:Sf,bincount:_f,bitwiseAnd:nx,booleanMaskAsync:Bk,broadcastArgs:rx,broadcastTo:Ga,buffer:an,cast:xe,ceil:sx,clipByValue:ax,clone:_n,complex:Pn,concat:Ve,concat1d:ox,concat2d:ix,concat3d:lx,concat4d:ux,conv1d:cx,conv2d:Wo,conv2dTranspose:px,conv3d:fx,conv3dTranspose:hx,cos:mx,cosh:gx,cosineWindow:vu,cumprod:yx,cumsum:vx,denseBincount:bx,depthToSpace:wx,depthwiseConv2d:du,diag:xx,dilation2d:kx,div:ue,divNoNan:Nx,dot:Sx,dropout:Wk,einsum:Dr,elu:Tf,enclosingPowerOfTwo:oh,ensureShape:_x,equal:Ef,erf:Ex,euclideanNorm:$x,exp:dr,expandDims:mn,expm1:Ix,eye:$f,fft:gu,fill:fa,floor:If,floorDiv:xf,fused:Hk,gather:Cf,gatherND:Kk,greater:Ho,greaterEqual:Af,ifft:To,imag:Go,image:ph,inTopKAsync:qk,irfft:th,isFinite:Cx,isInf:Ax,isNaN:Ox,leakyRelu:Of,less:Cl,lessEqual:fu,linalg:Jk,linspace:Dx,localResponseNormalization:Px,log:ra,log1p:Df,logSigmoid:Rx,logSoftmax:Lx,logSumExp:jf,logicalAnd:So,logicalNot:Rf,logicalOr:Lf,logicalXor:Fx,losses:Zk,lowerBound:zx,matMul:se,max:Kr,maxPool:Ff,maxPool3d:Bx,maxPoolWithArgmax:Mx,maximum:zf,mean:_o,meshgrid:Vx,min:Il,minimum:Eo,mirrorPad:Ux,mod:Kx,moments:Wx,movingAverage:Mk,mul:F,multiRNNCell:qx,multinomial:Hx,neg:qt,norm:qo,notEqual:Bf,oneHot:Gx,ones:Jn,onesLike:Qx,op:_,outerProduct:Yx,pad:ha,pad1d:Xx,pad2d:Jx,pad3d:Zx,pad4d:ek,pool:tk,pow:na,prelu:Vf,print:wf,prod:nk,raggedGather:rk,raggedRange:sk,raggedTensorToTensor:ak,rand:ok,randomGamma:lk,randomNormal:Xf,randomStandardNormal:uk,randomUniform:mu,randomUniformInt:ck,range:sa,real:aa,reciprocal:dk,relu:Qo,relu6:Jf,reshape:O,reverse:fr,reverse1d:pk,reverse2d:fk,reverse3d:hk,reverse4d:mk,rfft:yu,round:Zf,rsqrt:gk,scalar:Z,scatterND:Vk,searchSorted:hu,selu:yk,separableConv2d:vk,setdiff1dAsync:bk,sigmoid:Ur,sign:wk,signal:Xk,sin:xk,sinh:kk,slice:ae,slice1d:Nk,slice2d:Sk,slice3d:_k,slice4d:Ek,softmax:eh,softplus:Pf,spaceToBatchND:Mf,sparse:e2,sparseToDense:Uk,spectral:Yk,split:oa,sqrt:on,square:Ot,squaredDifference:nh,squeeze:Yo,stack:un,step:rh,stridedSlice:Tk,string:t2,sub:Y,sum:le,tan:$k,tanh:$l,tensor:Wt,tensor1d:wt,tensor2d:Vs,tensor3d:sh,tensor4d:Ik,tensor5d:Ck,tensor6d:Ak,tensorScatterUpdate:Dk,tile:Ms,topk:Pk,transpose:Al,truncatedNormal:jk,unique:Rk,unsortedSegmentSum:Lk,unstack:_r,upperBound:Fk,variable:zk,where:En,whereAsync:ah,zeros:pr,zerosLike:gt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const vD=(t,e,n,r=ze)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(f("a",t,e,n),f("b",t,e,n))];case"AddN":return[r.addN(f("tensors",t,e,n))];case"FloorMod":case"Mod":return[r.mod(f("a",t,e,n),f("b",t,e,n))];case"Mul":return[r.mul(f("a",t,e,n),f("b",t,e,n))];case"RealDiv":case"Div":return[r.div(f("a",t,e,n),f("b",t,e,n))];case"DivNoNan":return[r.divNoNan(f("a",t,e,n),f("b",t,e,n))];case"FloorDiv":return[r.floorDiv(f("a",t,e,n),f("b",t,e,n))];case"Sub":return[r.sub(f("a",t,e,n),f("b",t,e,n))];case"Minimum":return[r.minimum(f("a",t,e,n),f("b",t,e,n))];case"Maximum":return[r.maximum(f("a",t,e,n),f("b",t,e,n))];case"Pow":return[r.pow(f("a",t,e,n),f("b",t,e,n))];case"SquaredDifference":return[r.squaredDifference(f("a",t,e,n),f("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const bD=(t,e,n,r=ze)=>{switch(t.op){case"Abs":case"ComplexAbs":return[r.abs(f("x",t,e,n))];case"Acos":return[r.acos(f("x",t,e,n))];case"Acosh":return[r.acosh(f("x",t,e,n))];case"Asin":return[r.asin(f("x",t,e,n))];case"Asinh":return[r.asinh(f("x",t,e,n))];case"Atan":return[r.atan(f("x",t,e,n))];case"Atan2":return[r.atan2(f("x",t,e,n),f("y",t,e,n))];case"Atanh":return[r.atanh(f("x",t,e,n))];case"Ceil":return[r.ceil(f("x",t,e,n))];case"Complex":return[r.complex(f("real",t,e,n),f("imag",t,e,n))];case"Cos":return[r.cos(f("x",t,e,n))];case"Cosh":return[r.cosh(f("x",t,e,n))];case"Elu":return[r.elu(f("x",t,e,n))];case"Erf":return[r.erf(f("x",t,e,n))];case"Exp":return[r.exp(f("x",t,e,n))];case"Expm1":return[r.expm1(f("x",t,e,n))];case"Floor":return[r.floor(f("x",t,e,n))];case"Log":return[r.log(f("x",t,e,n))];case"Log1p":return[r.log1p(f("x",t,e,n))];case"Imag":return[r.imag(f("x",t,e,n))];case"Neg":return[r.neg(f("x",t,e,n))];case"Reciprocal":return[r.reciprocal(f("x",t,e,n))];case"Real":return[r.real(f("x",t,e,n))];case"Relu":return[r.relu(f("x",t,e,n))];case"Round":return[r.round(f("x",t,e,n))];case"Selu":return[r.selu(f("x",t,e,n))];case"Sigmoid":return[r.sigmoid(f("x",t,e,n))];case"Sin":return[r.sin(f("x",t,e,n))];case"Sign":return[r.sign(f("x",t,e,n))];case"Sinh":return[r.sinh(f("x",t,e,n))];case"Softplus":return[r.softplus(f("x",t,e,n))];case"Sqrt":return[r.sqrt(f("x",t,e,n))];case"Square":return[r.square(f("x",t,e,n))];case"Tanh":return[r.tanh(f("x",t,e,n))];case"Tan":return[r.tan(f("x",t,e,n))];case"ClipByValue":return[r.clipByValue(f("x",t,e,n),f("clipValueMin",t,e,n),f("clipValueMax",t,e,n))];case"Relu6":return[r.relu6(f("x",t,e,n))];case"Rsqrt":return[r.rsqrt(Le(t.inputNames[0],e,n))];case"LeakyRelu":return[r.leakyRelu(f("x",t,e,n),f("alpha",t,e,n))];case"Prelu":return[r.prelu(f("x",t,e,n),f("alpha",t,e,n))];case"IsNan":return[r.isNaN(Le(t.inputNames[0],e,n))];case"IsInf":return[r.isInf(Le(t.inputNames[0],e,n))];case"IsFinite":return[r.isFinite(Le(t.inputNames[0],e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */function Tt(t,e,n=""){if(!(typeof t=="number"||typeof e=="number")){S(t.length===e.length,()=>n+` Shapes ${t} and ${e} must match`);for(let r=0;r<t.length;r++){const s=t[r],a=e[r];S(s<0||a<0||s===a,()=>n+` Shapes ${t} and ${e} must match`)}}}function wg(t){return!(typeof t=="number"||t.some(e=>e<0))}function $a(t,e,n){let r=Fd(t,n);const s=!wg(r);if(s&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&e.forEach(a=>{r=Fd(a.shape,r)}),!wg(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Fd(t,e){if(typeof t=="number")return e;if(typeof e=="number")return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let r=0;r<t.length;++r){const s=t[r],a=e[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[r]=s>=0?s:a}return n}/**
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
 */class wD{constructor(e,n,r,s,a,o,i){this.name=e,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=Z(0),Vt(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const n=this.tensors[e];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(e){return e.map(n=>this.read(n))}write(e,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),Tt(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=n,Vt(n),r.written=!0,this.tensors[e]=r}writeMany(e,n){if(e.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${n.length}.`);e.forEach((r,s)=>this.write(r,n[s]))}gather(e,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(e)e=e.slice(0,this.size());else{e=[];for(let s=0;s<this.size();s++)e.push(s)}if(e.length===0)return Wt([],[0].concat(this.elementShape));const r=this.readMany(e);return Tt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),un(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Wt([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return Tt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),Ve(r,0)}scatter(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,_r(n,0))}split(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=e.map(l=>(r+=l,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:n.size/r,o=[];ne(()=>{n=O(n,[1,r,a]);for(let l=0;l<e.length;++l){const c=[0,l===0?0:s[l-1],0],d=[1,e[l],a];o[l]=O(ae(n,c,d),this.elementShape)}return o});const i=[];for(let l=0;l<e.length;l++)i[l]=l;this.writeMany(i,o)}}/**
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
 */class ss{get id(){return this.idTensor.id}constructor(e,n,r,s=-1){this.tensors=e,this.elementShape=n,this.elementDtype=r,e!=null&&e.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);Tt(n,a.shape,"TensorList shape mismatch: "),Vt(a)}),this.idTensor=Z(0),this.maxNumElements=s,Vt(this.idTensor)}copy(){return new ss([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Tt(e,this.elementShape,"TensorList shape mismatch: ");const s=$a(this.elementShape,this.tensors,e);return ne(()=>{const a=this.tensors.map(o=>O(o,s));return un(a,0)})}popBack(e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=$a(this.elementShape,this.tensors,e),s=this.tensors.pop();return s.kept=!1,Tt(s.shape,e,"TensorList shape mismatch: "),O(s,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Tt(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Vt(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const n=new ss([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)n.tensors[r]=this.tensors[r];return n}getItem(e,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);Tt(this.tensors[e].shape,n,"TensorList shape mismatch: ");const s=$a(this.elementShape,this.tensors,n);return O(this.tensors[e],s)}setItem(e,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Tt(this.elementShape,n.shape,"TensorList shape mismatch: "),Vt(n),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=n}gather(e,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);Tt(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const s=$a(this.elementShape,this.tensors,r);return e.length===0?Wt([],[0].concat(s)):ne(()=>{const a=e.map(o=>O(this.tensors[o],s));return un(a,0)})}concat(e,n){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Tt(this.elementShape,n,"TensorList shape mismatch: ");const r=$a(this.elementShape,this.tensors,n);return this.size()===0?Wt([],[0].concat(r)):ne(()=>{const s=this.tensors.map(a=>O(a,r));return Ve(s,0)})}}function xD(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);const s=t.shape.slice(1);Tt(s,e,"TensorList shape mismatch: ");const a=_r(t);return new ss(a,e,r)}function kD(t,e,n,r){return new ss([],t,e,r)}function ND(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const s=Math.max(...e);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new ss([],n,t.dtype,r),o=_r(t,0);return e.forEach((i,l)=>{a.setItem(i,o[l])}),a}function SD(t,e,n){let r=0;const s=e.map(c=>(r+=c,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);const a=t.shape.slice(1),o=Fd(a,n),i=r===0?0:t.size/r,l=ne(()=>{const c=[];t=O(t,[1,r,i]);for(let d=0;d<e.length;++d){const h=[0,d===0?0:s[d-1],0],g=[1,e[d],i];c[d]=O(ae(t,h,g),o)}return t.dispose(),c}),u=new ss([],n,t.dtype,e.length);for(let c=0;c<l.length;c++)u.setItem(c,l[c]);return u}/**
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
 */const _D=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=f("thenBranch",t,e,n),s=f("elseBranch",t,e,n),a=f("cond",t,e,n),o=f("args",t,e,n);return(await a.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=f("body",t,e,n),s=f("cond",t,e,n),a=f("args",t,e,n),o=await n.functionMap[s].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),i=a.map(c=>c.id);let l=await o[0].data();o.forEach(c=>{!c.kept&&i.indexOf(c.id)===-1&&c.dispose()});let u=a;for(;l[0];){const c=u;u=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);const d=u.map(h=>h.id);c.forEach(h=>{!h.kept&&i.indexOf(h.id)===-1&&d.indexOf(h.id)===-1&&h.dispose()});const p=await n.functionMap[s].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);l=await p[0].data(),p.forEach(h=>{!h.kept&&i.indexOf(h.id)===-1&&d.indexOf(h.id)===-1&&h.dispose()})}return u}case"LoopCond":{const r=f("pred",t,e,n);return[yn(r)]}case"Switch":{const r=f("pred",t,e,n);let s=f("data",t,e,n);return s.kept||(s=yn(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=t.inputNames.find(s=>Le(s,e,n)!==void 0);if(r){const s=Le(r,e,n);return[yn(s)]}return}case"Enter":{const r=f("frameName",t,e,n),s=f("tensor",t,e,n);return n.enterFrame(r),[yn(s)]}case"Exit":{const r=f("tensor",t,e,n);return n.exitFrame(),[yn(r)]}case"NextIteration":{const r=f("tensor",t,e,n);return n.nextIteration(),[yn(r)]}case"TensorArrayV3":{const r=f("size",t,e,n),s=f("dtype",t,e,n),a=f("elementShape",t,e,n),o=f("dynamicSize",t,e,n),i=f("clearAfterRead",t,e,n),l=f("identicalElementShapes",t,e,n),u=f("name",t,e,n),c=new wD(u,s,r,a,l,o,i);return n.addTensorArray(c),[c.idTensor,Z(1)]}case"TensorArrayWriteV3":{const r=f("tensorArrayId",t,e,n),s=f("index",t,e,n),a=f("tensor",t,e,n),o=n.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=f("tensorArrayId",t,e,n),s=f("index",t,e,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=f("tensorArrayId",t,e,n),s=f("indices",t,e,n),a=f("dtype",t,e,n);return[n.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=f("tensorArrayId",t,e,n),s=f("indices",t,e,n),a=f("tensor",t,e,n),o=n.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=f("tensorArrayId",t,e,n),s=n.getTensorArray(r.id),a=f("dtype",t,e,n);return[s.concat(a)]}case"TensorArraySplitV3":{const r=f("tensorArrayId",t,e,n),s=f("tensor",t,e,n),a=f("lengths",t,e,n),o=n.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=f("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return[Z(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=f("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=f("tensorListId",t,e,n),s=f("index",t,e,n),a=f("tensor",t,e,n),o=n.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=f("tensorListId",t,e,n),s=f("index",t,e,n),a=f("elementShape",t,e,n),o=f("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=f("indices",t,e,n),s=f("tensor",t,e,n),a=f("elementShape",t,e,n),o=f("numElements",t,e,n),i=ND(s,r,a,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=f("elementShape",t,e,n),s=f("elementDType",t,e,n);let a;t.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=f(a,t,e,n),i=t.op==="TensorListReserve"?-1:o,l=kD(r,s,o,i);return n.addTensorList(l),[l.idTensor]}case"TensorListGather":{const r=f("tensorListId",t,e,n),s=f("indices",t,e,n),a=f("elementShape",t,e,n),o=f("elementDType",t,e,n);return[n.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=f("tensorListId",t,e,n),s=f("elementShape",t,e,n),a=f("elementDType",t,e,n),o=f("numElements",t,e,n);return[n.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=f("tensor",t,e,n),s=f("elementShape",t,e,n),a=f("elementDType",t,e,n),o=xD(r,s,a);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=f("tensorListId",t,e,n),s=n.getTensorList(r.id),a=f("dtype",t,e,n),o=f("elementShape",t,e,n);return[s.concat(a,o)]}case"TensorListPushBack":{const r=f("tensorListId",t,e,n),s=f("tensor",t,e,n),a=n.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=f("tensorListId",t,e,n),s=f("elementShape",t,e,n),a=f("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=f("tensor",t,e,n),s=f("elementShape",t,e,n),a=f("lengths",t,e,n),o=SD(r,a,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=f("tensorListId",t,e,n),s=n.getTensorList(r.id);return[Z(s.size(),"int32")]}case"TensorListResize":{const r=f("tensorListId",t,e,n),s=f("size",t,e,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */function xg(t,e,n){const[r,s]=f("fusedOps",t,e,n),a=r==="biasadd",o=!a,i=s==="prelu",l=r==="fusedbatchnorm",u=f("numArgs",t,e,n);if(a){if(i&&u!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&u!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=f("strides",t,e,n),d=Vi(t,e,n),p=f("dataFormat",t,e,n).toUpperCase(),h=f("dilations",t,e,n);let[g,v]=f("args",t,e,n);o&&(v=g,g=void 0);const b=f("leakyreluAlpha",t,e,n);return{stride:c,pad:d,dataFormat:p,dilations:h,biasArg:g,preluArg:v,activationFunc:s,leakyreluAlpha:b}}const ED=(t,e,n,r=ze)=>{switch(t.op){case"Conv1D":{const s=f("stride",t,e,n),a=f("pad",t,e,n),o=f("dataFormat",t,e,n).toUpperCase(),i=f("dilation",t,e,n);return[r.conv1d(f("x",t,e,n),f("filter",t,e,n),s,a,o,i)]}case"Conv2D":{const s=f("strides",t,e,n),a=Vi(t,e,n),o=f("dataFormat",t,e,n).toUpperCase(),i=f("dilations",t,e,n);return[r.conv2d(f("x",t,e,n),f("filter",t,e,n),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:d}=xg(t,e,n);return[r.fused.conv2d({x:f("x",t,e,n),filter:f("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:d})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:d}=xg(t,e,n);return[r.fused.depthwiseConv2d({x:f("x",t,e,n),filter:f("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:d})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=f("outputShape",t,e,n),a=f("strides",t,e,n),o=Vi(t,e,n);return[r.conv2dTranspose(f("x",t,e,n),f("filter",t,e,n),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=f("strides",t,e,n),a=Vi(t,e,n),o=f("dilations",t,e,n),i=f("dataFormat",t,e,n).toUpperCase();return[r.depthwiseConv2d(f("input",t,e,n),f("filter",t,e,n),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("dataFormat",t,e,n).toUpperCase(),i=f("dilations",t,e,n);return[r.conv3d(f("x",t,e,n),f("filter",t,e,n),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("kernelSize",t,e,n);return[r.avgPool(f("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("kernelSize",t,e,n);return[r.maxPool(f("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("kernelSize",t,e,n),i=f("includeBatchInIndex",t,e,n),{result:l,indexes:u}=r.maxPoolWithArgmax(f("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a,i);return[l,u]}case"AvgPool3D":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("kernelSize",t,e,n);return[r.avgPool3d(f("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("kernelSize",t,e,n);return[r.maxPool3d(f("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=f("strides",t,e,n),a=f("pad",t,e,n),o=f("dilations",t,e,n),i=s[1],l=s[2],u=o[1],c=o[2];return[r.dilation2d(f("x",t,e,n),f("filter",t,e,n),[i,l],a,[u,c],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const TD=(t,e,n,r=ze)=>{switch(t.op){case"Fill":{const s=f("shape",t,e,n),a=f("dtype",t,e,n),o=f("value",t,e,n);return[r.fill(s,o,a)]}case"LinSpace":{const s=f("start",t,e,n),a=f("stop",t,e,n),o=f("num",t,e,n);return[r.linspace(s,a,o)]}case"Multinomial":{const s=f("logits",t,e,n),a=f("numSamples",t,e,n),o=f("seed",t,e,n);return[r.multinomial(s,a,o)]}case"OneHot":{const s=f("indices",t,e,n),a=f("depth",t,e,n),o=f("onValue",t,e,n),i=f("offValue",t,e,n),l=f("dtype",t,e,n);return[r.oneHot(s,a,o,i,l)]}case"Ones":return[r.ones(f("shape",t,e,n),f("dtype",t,e,n))];case"OnesLike":return[r.onesLike(f("x",t,e,n))];case"RandomStandardNormal":return[r.randomStandardNormal(f("shape",t,e,n),f("dtype",t,e,n),f("seed",t,e,n))];case"RandomUniform":return[r.randomUniform(f("shape",t,e,n),f("minval",t,e,n),f("maxval",t,e,n),f("dtype",t,e,n))];case"RandomUniformInt":return[r.randomUniformInt(f("shape",t,e,n),f("minval",t,e,n),f("maxval",t,e,n),f("seed",t,e,n))];case"Range":{const s=f("start",t,e,n),a=f("stop",t,e,n),o=f("step",t,e,n);return[r.range(s,a,o,f("dtype",t,e,n))]}case"TruncatedNormal":{const s=f("shape",t,e,n),a=f("mean",t,e,n),o=f("stdDev",t,e,n),i=f("seed",t,e,n);return[r.truncatedNormal(s,a,o,f("dtype",t,e,n),i)]}case"Zeros":return[r.zeros(f("shape",t,e,n),f("dtype",t,e,n))];case"ZerosLike":return[r.zerosLike(f("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */function nc(t,e,n){const r=f("boxes",t,e,n),s=f("scores",t,e,n),a=f("maxOutputSize",t,e,n),o=f("iouThreshold",t,e,n),i=f("scoreThreshold",t,e,n),l=f("softNmsSigma",t,e,n);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:l}}const $D=async(t,e,n,r,s=ze)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u,softNmsSigma:c}=nc(t,e,n),d=await s.image.nonMaxSuppressionWithScoreAsync(a,o,i,l,u,c);return[d.selectedIndices,d.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u}=nc(t,e,n),c=f("padToMaxOutputSize",t,e,n),d=await s.image.nonMaxSuppressionPaddedAsync(a,o,i,l,u,c);return[d.selectedIndices,d.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:l,scoreThreshold:u}=nc(t,e,n);return[await s.image.nonMaxSuppressionAsync(a,o,i,l,u)]}case"Where":{const a=s.cast(f("condition",t,e,n),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(f("x",t,e,n),f("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const ID=(t,e,n,r=ze)=>{switch(t.op){case"LowerBound":{const s=f("sortedSequence",t,e,n),a=f("values",t,e,n);return[r.lowerBound(s,a)]}case"TopKV2":{const s=f("x",t,e,n),a=f("k",t,e,n),o=f("sorted",t,e,n),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=f("sortedSequence",t,e,n),a=f("values",t,e,n);return[r.upperBound(s,a)]}case"Unique":{const s=f("x",t,e,n),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=f("x",t,e,n),a=f("axis",t,e,n),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const CD=(t,e,n,r=ze)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const s=f("default",t,e,n);return[Le(t.name,e,n)||s];case"Placeholder":return[Le(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const c=f("x",t,e,n);return[yn(c)]}case"IdentityN":return f("x",t,e,n).map(c=>yn(c));case"Snapshot":const a=f("x",t,e,n);return[yn(a)];case"Shape":return[r.tensor1d(f("x",t,e,n).shape,"int32")];case"ShapeN":return f("x",t,e,n).map(c=>r.tensor1d(c.shape));case"Size":return[r.scalar(f("x",t,e,n).size,"int32")];case"Rank":return[r.scalar(f("x",t,e,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=f("x",t,e,n),i=f("data",t,e,n),l=f("message",t,e,n),u=f("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let c=0;c<i.length;c++)console.log(Array.prototype.slice.call(i[c].dataSync()).slice(0,u));return[o];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */class AD{get id(){return this.handle.id}constructor(e,n){this.keyDType=e,this.valueDType=n,this.handle=Z(0),this.tensorMap=new Map,Vt(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return Z(this.size(),"int32")}async import(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),ne(()=>{const s=_r(n),a=r.length,o=s.length;S(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const l=r[i],u=s[i];Vt(u),this.tensorMap.set(l,u)}return this.handle})}async find(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return ne(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],i=this.findWithDefault(o,n);s.push(i)}return un(s)})}findWithDefault(e,n){const r=this.tensorMap.get(e);return r??n}checkKeyAndValueTensor(e,n){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
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
 */const OD=async(t,e,n,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(t.name);if(s!=null)return[s];{const a=f("keyDType",t,e,n),o=f("valueDType",t,e,n),i=new AD(a,o);return r.addHashTable(t.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=f("tableHandle",t,e,n,r),a=f("keys",t,e,n),o=f("values",t,e,n);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=f("tableHandle",t,e,n,r),a=f("keys",t,e,n),o=f("defaultValue",t,e,n);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=f("tableHandle",t,e,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const DD=(t,e,n,r=ze)=>{switch(t.op){case"ResizeBilinear":{const s=f("images",t,e,n),a=f("size",t,e,n),o=f("alignCorners",t,e,n),i=f("halfPixelCenters",t,e,n);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=f("images",t,e,n),a=f("size",t,e,n),o=f("alignCorners",t,e,n),i=f("halfPixelCenters",t,e,n);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=f("image",t,e,n),a=f("boxes",t,e,n),o=f("boxInd",t,e,n),i=f("cropSize",t,e,n),l=f("method",t,e,n),u=f("extrapolationValue",t,e,n);return[r.image.cropAndResize(s,a,o,i,l,u)]}case"ImageProjectiveTransformV3":{const s=f("images",t,e,n),a=f("transforms",t,e,n),o=f("outputShape",t,e,n),i=f("fillValue",t,e,n),l=f("interpolation",t,e,n),u=f("fillMode",t,e,n);return[r.image.transform(s,a,l.toLowerCase(),u.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const PD=(t,e,n,r=ze)=>{switch(t.op){case"Equal":return[r.equal(f("a",t,e,n),f("b",t,e,n))];case"NotEqual":return[r.notEqual(f("a",t,e,n),f("b",t,e,n))];case"Greater":return[r.greater(f("a",t,e,n),f("b",t,e,n))];case"GreaterEqual":return[r.greaterEqual(f("a",t,e,n),f("b",t,e,n))];case"Less":return[r.less(f("a",t,e,n),f("b",t,e,n))];case"LessEqual":return[r.lessEqual(f("a",t,e,n),f("b",t,e,n))];case"LogicalAnd":return[r.logicalAnd(f("a",t,e,n),f("b",t,e,n))];case"LogicalNot":return[r.logicalNot(f("a",t,e,n))];case"LogicalOr":return[r.logicalOr(f("a",t,e,n),f("b",t,e,n))];case"Select":case"SelectV2":return[r.where(f("condition",t,e,n),f("a",t,e,n),f("b",t,e,n))];case"BitwiseAnd":return[r.bitwiseAnd(f("a",t,e,n),f("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const jD=(t,e,n,r=ze)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(f("a",t,e,n),f("b",t,e,n),f("transposeA",t,e,n),f("transposeB",t,e,n))];case"Einsum":return[r.einsum(f("equation",t,e,n),...f("tensors",t,e,n))];case"Transpose":return[r.transpose(f("x",t,e,n),f("perm",t,e,n))];case"_FusedMatMul":const[s,a]=f("fusedOps",t,e,n),o=s==="biasadd",i=a==="prelu",l=f("numArgs",t,e,n),u=f("leakyreluAlpha",t,e,n);if(o){if(i&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,d]=f("args",t,e,n);return[r.fused.matMul({a:f("a",t,e,n),b:f("b",t,e,n),transposeA:f("transposeA",t,e,n),transposeB:f("transposeB",t,e,n),bias:c,activation:a,preluActivationWeights:d,leakyreluAlpha:u})];case"MatrixBandPart":return[r.linalg.bandPart(f("a",t,e,n),f("numLower",t,e,n),f("numUpper",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const RD=(t,e,n,r=ze)=>{switch(t.op){case"EuclideanNorm":return[r.euclideanNorm(f("x",t,e,n),f("axis",t,e,n),f("keepDims",t,e,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(f("x",t,e,n),f("mean",t,e,n),f("variance",t,e,n),f("offset",t,e,n),f("scale",t,e,n),f("epsilon",t,e,n))];case"FusedBatchNormV3":return[r.batchNorm(f("x",t,e,n),f("mean",t,e,n),f("variance",t,e,n),f("offset",t,e,n),f("scale",t,e,n),f("epsilon",t,e,n))];case"LRN":return[r.localResponseNormalization(f("x",t,e,n),f("radius",t,e,n),f("bias",t,e,n),f("alpha",t,e,n),f("beta",t,e,n))];case"Softmax":return[r.softmax(f("x",t,e,n))];case"LogSoftmax":return[r.logSoftmax(f("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const LD=(t,e,n,r=ze)=>{switch(t.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(f("paramsNestedSplits",t,e,n),f("paramsDenseValues",t,e,n),f("indices",t,e,n),f("outputRaggedRank",t,e,n));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(f("starts",t,e,n),f("limits",t,e,n),f("splits",t,e,n));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(f("shape",t,e,n),f("values",t,e,n),f("defaultValue",t,e,n),f("rowPartitionTensors",t,e,n),f("rowPartitionTypes",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const FD=(t,e,n,r=ze)=>{switch(t.op){case"Max":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.max(f("x",t,e,n),i,l)]}case"Mean":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.mean(f("x",t,e,n),i,l)]}case"Min":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.min(f("x",t,e,n),i,l)]}case"Sum":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.sum(f("x",t,e,n),i,l)]}case"All":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.all(f("x",t,e,n),i,l)]}case"Any":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.any(f("x",t,e,n),i,l)]}case"ArgMax":{const i=f("axis",t,e,n);return[r.argMax(f("x",t,e,n),i)]}case"ArgMin":{const i=f("axis",t,e,n);return[r.argMin(f("x",t,e,n),i)]}case"Prod":{const i=f("axis",t,e,n),l=f("keepDims",t,e,n);return[r.prod(f("x",t,e,n),i,l)]}case"Cumprod":{const i=f("axis",t,e,n),l=f("exclusive",t,e,n),u=f("reverse",t,e,n);return[r.cumprod(f("x",t,e,n),i,l,u)]}case"Cumsum":{const i=f("axis",t,e,n),l=f("exclusive",t,e,n),u=f("reverse",t,e,n);return[r.cumsum(f("x",t,e,n),i,l,u)]}case"Bincount":const s=f("x",t,e,n),a=f("weights",t,e,n),o=f("size",t,e,n);return[r.bincount(s,a,o)];case"DenseBincount":{const i=f("x",t,e,n),l=f("weights",t,e,n),u=f("size",t,e,n),c=f("binaryOutput",t,e,n);return[r.denseBincount(i,l,u,c)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const zD=(t,e,n,r=ze)=>{switch(t.op){case"ConcatV2":case"Concat":{const s=f("n",t,e,n),a=f("axis",t,e,n);let o=f("tensors",t,e,n);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=f("x",t,e,n),a=f("indices",t,e,n);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=f("axis",t,e,n),a=f("batchDims",t,e,n),o=f("x",t,e,n),i=f("indices",t,e,n);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=f("dims",t,e,n),a=[];for(let i=0;i<s.length;i++)s[i]&&a.push(i);const o=f("x",t,e,n);return[r.reverse(o,a)]}case"ReverseV2":{const s=f("axis",t,e,n),a=f("x",t,e,n);return[r.reverse(a,s)]}case"Slice":{const s=f("begin",t,e,n),a=f("size",t,e,n);return[r.slice(f("x",t,e,n),s,a)]}case"StridedSlice":{const s=f("begin",t,e,n),a=f("end",t,e,n),o=f("strides",t,e,n),i=f("beginMask",t,e,n),l=f("endMask",t,e,n),u=f("ellipsisMask",t,e,n),c=f("newAxisMask",t,e,n),d=f("shrinkAxisMask",t,e,n),p=f("x",t,e,n);return[r.stridedSlice(p,s,a,o,i,l,u,c,d)]}case"Pack":return ne(()=>{const s=f("axis",t,e,n),a=f("tensors",t,e,n),o=a[0].shape,i=r.squeeze(a[0]).shape,l=a.map(u=>{const c=Dn(u.shape,o);if(!c&&!Dn(r.squeeze(u).shape,i))throw new Error("the input tensors shape does not match");return c?u:r.reshape(u,o)});return[r.stack(l,s)]});case"Unpack":{const s=f("axis",t,e,n),a=f("tensor",t,e,n);return r.unstack(a,s)}case"Tile":{const s=f("reps",t,e,n);return[r.tile(f("x",t,e,n),s)]}case"Split":case"SplitV":{const s=f("axis",t,e,n),a=f("numOrSizeSplits",t,e,n),o=f("x",t,e,n);return r.split(o,a,s)}case"ScatterNd":{const s=f("indices",t,e,n),a=f("values",t,e,n),o=f("shape",t,e,n);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=f("x",t,e,n),a=f("indices",t,e,n);return[r.gatherND(s,a)]}case"SparseToDense":{const s=f("sparseIndices",t,e,n),a=f("outputShape",t,e,n),o=f("sparseValues",t,e,n),i=f("defaultValue",t,e,n);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}case"TensorScatterUpdate":{const s=f("indices",t,e,n),a=f("values",t,e,n),o=f("tensor",t,e,n);return[r.tensorScatterUpdate(o,s,a)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const BD=(t,e,n,r=ze)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(f("indices",t,e,n),f("values",t,e,n),f("denseShape",t,e,n),f("defaultValue",t,e,n));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(f("inputIndices",t,e,n),f("inputShape",t,e,n),f("newShape",t,e,n));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(f("data",t,e,n),f("indices",t,e,n),f("segmentIds",t,e,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(f("data",t,e,n),f("indices",t,e,n),f("segmentIds",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const MD=(t,e,n,r=ze)=>{switch(t.op){case"FFT":return[r.fft(f("x",t,e,n))];case"IFFT":return[r.ifft(f("x",t,e,n))];case"RFFT":return[r.rfft(f("x",t,e,n))];case"IRFFT":return[r.irfft(f("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const VD=(t,e,n,r=ze)=>{switch(t.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(f("input",t,e,n),f("pattern",t,e,n),f("rewrite",t,e,n),f("replaceGlobal",t,e,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(f("data",t,e,n),f("dataSplits",t,e,n),f("separator",t,e,n),f("nGramWidths",t,e,n),f("leftPad",t,e,n),f("rightPad",t,e,n),f("padWidth",t,e,n),f("preserveShortSequences",t,e,n));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(f("input",t,e,n),f("delimiter",t,e,n),f("skipEmpty",t,e,n));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(f("input",t,e,n),f("numBuckets",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */const UD=(t,e,n,r=ze)=>{switch(t.op){case"Cast":return[r.cast(f("x",t,e,n),f("dtype",t,e,n))];case"ExpandDims":{const s=f("axis",t,e,n);return[r.expandDims(f("x",t,e,n),s)]}case"Squeeze":{const s=f("axis",t,e,n);return[r.squeeze(f("x",t,e,n),s)]}case"Reshape":return[r.reshape(f("x",t,e,n),f("shape",t,e,n))];case"EnsureShape":return[r.ensureShape(f("x",t,e,n),f("shape",t,e,n))];case"MirrorPad":return[r.mirrorPad(f("x",t,e,n),f("padding",t,e,n),f("mode",t,e,n))];case"PadV2":case"Pad":return[r.pad(f("x",t,e,n),f("padding",t,e,n),f("constantValue",t,e,n))];case"SpaceToBatchND":{const s=f("blockShape",t,e,n),a=f("paddings",t,e,n);return[r.spaceToBatchND(f("x",t,e,n),s,a)]}case"BatchToSpaceND":{const s=f("blockShape",t,e,n),a=f("crops",t,e,n);return[r.batchToSpaceND(f("x",t,e,n),s,a)]}case"DepthToSpace":{const s=f("blockSize",t,e,n),a=f("dataFormat",t,e,n).toUpperCase();return[r.depthToSpace(f("x",t,e,n),s,a)]}case"BroadcastTo":return[r.broadcastTo(f("x",t,e,n),f("shape",t,e,n))];case"BroadcastArgs":return[r.broadcastArgs(f("s0",t,e,n),f("s1",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
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
 */function kg(t,e,n,r,s=ne){const a=((o,i,l)=>{switch(o.category){case"arithmetic":return s(()=>vD(o,i,l));case"basic_math":return s(()=>bD(o,i,l));case"control":return _D(o,i,l);case"convolution":return s(()=>ED(o,i,l));case"creation":return s(()=>TD(o,i,l));case"dynamic":return $D(o,i,l);case"evaluation":return s(()=>ID(o,i,l));case"image":return s(()=>DD(o,i,l));case"graph":return s(()=>CD(o,i,l));case"logical":return s(()=>PD(o,i,l));case"matrices":return s(()=>jD(o,i,l));case"normalization":return s(()=>RD(o,i,l));case"ragged":return s(()=>LD(o,i,l));case"reduction":return s(()=>FD(o,i,l));case"slice_join":return s(()=>zD(o,i,l));case"sparse":return s(()=>BD(o,i,l));case"spectral":return s(()=>MD(o,i,l));case"string":return s(()=>VD(o,i,l));case"transformation":return s(()=>UD(o,i,l));case"hash_table":return OD(o,i,l,r);case"custom":const u=f2(o.op);if(u&&u.customExecutor)return u.customExecutor(new yD(o,i,l));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return Zr(a)?a.then(o=>[].concat(o)):[].concat(a)}class Ng{constructor(e={},n={},r={},s={},a){this.weightMap=e,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,n){return{id:e,frameName:n,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(e);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(e)}}/**
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
 */function Sg(t,e,n,r){const s=new Set,a=[];let o=null,i=null;const l=new Set,u=new Set(Object.keys(t).map(p=>ut(p)[0]));r=r||[];const c=new Set(r.map(p=>ut(p.name)[0])),d=[...e];for(;d.length>0;){const p=d.pop();if((jr(p)||XD(p)||JD(p))&&o==null&&(o=p,i=o.children.map(h=>h.name).filter(h=>s.has(h))),s.add(p.name),n[p.name]==null&&!u.has(p.name)&&!c.has(p.name)){if(p.inputs.length===0){a.push(p.name);continue}p.inputs.forEach(h=>{l.has(h.name)||(l.add(h.name),d.push(h))})}}return{inputs:t,outputs:e,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function KD(t,e){const{usedNodes:n,inputs:r}=e,s=Object.keys(r).map(b=>ut(b)[0]).map(b=>t.nodes[b]),a=t.initNodes||[],o=b=>n.has(typeof b=="string"?b:b.name);function i(b){return[...new Map(b.map(m=>[m.name,m])).values()]}const l=i([...s,...t.weights,...a]).filter(o),u=i([...l,...Object.values(t.nodes)]).filter(o),c=new Map(u.map(b=>[b.name,b])),d={};for(const b of u){d[b.name]=d[b.name]||0;for(const m of b.children)o(m)||(d[m.name]=Number.POSITIVE_INFINITY),d[m.name]=(d[m.name]||0)+1}const p=Object.entries(d).filter(([,b])=>b===0).map(([b])=>b),h=[...p];for(;p.length>0;){const b=p.pop(),m=c.get(b);for(const y of m.children.filter(o))--d[y.name]===0&&(h.push(y.name),p.push(y.name))}const g=h.map(b=>c.get(b)),v=WD(g,l);return qD(v,l),v}function WD(t,e){const n=new Map(t.map(o=>[o.name,o])),r=e.map(o=>o.name),s=new Set(r);for(;r.length>0;){const o=r.pop(),i=n.get(o);for(const l of i.children)!n.has(l.name)||s.has(l.name)||(s.add(l.name),r.push(l.name))}return t.filter(o=>s.has(o.name))}class vi extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function qD(t,e){const n=new Map(t.map((i,l)=>[i.name,l])),r=new Set(e.map(i=>i.name)),s=i=>r.has(typeof i=="string"?i:i.name),a=new Set(t.map(i=>i.name)),o=i=>a.has(typeof i=="string"?i:i.name);for(const i of t){for(const l of i.children.filter(o)){if(!n.has(l.name))throw new vi(`Child ${l.name} of node ${i.name} is unreachable.`);if(n.get(i.name)>n.get(l.name))throw new vi(`Node ${i.name} is scheduled to run after its child ${l.name}.`)}if(!s(i))for(const l of i.inputs){if(!n.has(l.name))throw new vi(`Input ${l.name} of node ${i.name} is unreachable.`);if(n.get(l.name)>n.get(i.name))throw new vi(`Node ${i.name} is scheduled to run before its input ${l.name}.`)}}}function HD(t){const e=new Map(t.map((i,l)=>[i.name,l])),n=Number.MAX_SAFE_INTEGER,r=t.map((i,l)=>jr(i)?n:l),s=i=>{const l=r[e.get(i.name)];return l??-1},a=t.map((i,l)=>i.children.map(s).reduce((u,c)=>Math.max(u,c),r[l])),o=new Map;for(let i=0;i<t.length;++i){const l=a[i];if(l===n)continue;const u=t[i],c=t[l];o.has(c.name)||o.set(c.name,[]),o.get(c.name).push(u)}return o}const GD=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),QD=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),YD=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function jr(t){return GD.has(t.op)}function XD(t){return QD.has(t.op)}function JD(t){return YD.has(t.op)}/**
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
 */class Dl{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const n=Object.keys(e).map(r=>e[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const n=e.signatureKey||e.name;return e.defaultOutput?`${n}:${e.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((e,n)=>(e[n]=this._functions[n].signature,e),{})}constructor(e,n){this.graph=e,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new Dl(e.functions[r],this)})}getCompilationKey(e,n){const r=e.map(a=>a.name).sort(),s=n.map(a=>a.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(e,n){const r=Sg(e,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const u=n.map(d=>d.name),c=Object.keys(e);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${c}]. Missing the following inputs: [${s}]`)}const i=KD(this.graph,r),l=HD(i);return{orderedNodes:i,nodeLiveUntilMap:l}}cloneAndKeepTensor(e){if(e==null)return null;const n=e.clone();return Vt(n),n}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([n,r])=>[n,this.cloneTensorList(r)]))}execute(e,n){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(p=>this.graph.nodes[ut(p)[0]]),a=n.map(p=>ut(p)[0]),o=new Set(a);let i=a.map(p=>this.graph.nodes[p]);i.length===0&&(i=this._outputs);const l=this.getCompilationKey(s,i);let u=this.compiledMap.get(l);u==null&&(u=this.compile(e,i),this.compiledMap.set(l,u));try{this.keepIntermediateTensors=X().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}const c={},d={};return ne(()=>{const p=new Ng(this.weightMap,c,d,this.functionExecutorMap,this.parseNodeNameCache),h=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(m=>{const[y,x]=ut(m,p),k=[];k[x]=e[m],h[y]=k,this.keepIntermediateTensors&&(this.clonedTensorsMap[y]=this.cloneTensorList(k))});const g=this.getFrozenTensorIds(h),{orderedNodes:v,nodeLiveUntilMap:b}=u;for(const m of v){if(h[m.name])continue;const y=kg(m,h,p,this._resourceManager);if(Zr(y))throw new Error(`The execution of the op '${m.op}' returned a promise. Please use model.executeAsync() instead.`);h[m.name]=y,this.keepIntermediateTensors&&(this.clonedTensorsMap[m.name]=this.cloneTensorList(y)),this.checkTensorForDisposalWithNodeLiveUntilInfo(m,h,p,g,o,b.get(m.name))}return this.parent==null&&p.dispose(g),n.map(m=>Le(m,h,p))})}getFrozenTensorIds(e){const n=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(e,n,r,s,a,o,i){if(!(jr(n)||o.has(e))){for(const l of r[e])l!=null&&(i[l.id]=(i[l.id]||0)+n.children.length);for(const l of n.inputs){if(jr(l))continue;const u=yg(l.name,r,s);if(u!=null)for(const c of u){if(!c||c.kept||a.has(c.id))continue;const d=i[c.id];d===1?(c.dispose(),delete i[c.id]):d!=null&&i[c.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,n,r,s,a,o){function i(l){return jr(l)||a.has(l.name)}if(!(jr(e)||o==null))for(const l of o){if(i(l))continue;const u=yg(l.name,n,r);for(const c of u)!c||c.kept||s.has(c.id)||c.dispose()}}async executeAsync(e,n){return this._executeAsync(e,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const n of e)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,n,r=!1,s={},a={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=X().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}const o=new Ng(this.weightMap,s,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const i=await this.executeWithControlFlow(e,o,n,r),l=n.map(p=>Le(p,i,o)),u=l.map(p=>p.id),c=Object.keys(e).map(p=>e[p].id),d=new Set([...u,...c,...this.weightIds]);return Object.values(i).forEach(p=>{p.forEach(h=>{h&&!h.isDisposed&&!d.has(h.id)&&h.dispose()})}),this.parent==null&&o.dispose(d),l}async executeFunctionAsync(e,n,r){const s=e.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(e,n,r,s){const a=Object.keys(e),o=a.map(k=>this.graph.nodes[ut(k)[0]]),i=r.map(k=>ut(k)[0]),l=new Set(i);let u=i.map(k=>this.graph.nodes[k]);u.length===0&&(u=this._outputs);const{usedNodes:c,missingInputs:d,dynamicNode:p,syncInputs:h}=Sg(e,u,this.weightMap,this._initNodes),g=[...o,...this.graph.weights,...this._initNodes||[]].map(k=>({node:k,contexts:n.currentContext})),v=Object.assign({},this.weightMap);Object.keys(e).forEach(k=>{const[E,$]=ut(k),I=[];I[$]=e[k],v[E]=I});const b={},m=this.getFrozenTensorIds(v),y={};for(;g.length>0;){const k=this.processStack(o,g,n,v,y,m,l,b,c);await Promise.all(k)}p==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const x=u.filter(k=>!jr(k)&&!Le(k.name,v,n)).map(k=>k.name);if(x.length>0){let k="";throw p!=null&&(k=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${h}]`),new Error(`Cannot compute the outputs [${x}] from the provided inputs [${a}]. Consider providing the following inputs: [${d}]. ${k}`)}return v}processStack(e,n,r,s,a,o,i,l,u){const c=[];for(;n.length>0;){const d=n.pop();r.currentContext=d.contexts;let p="";if(d.node.op==="Enter"&&f("isConstant",d.node,s,r)&&([p]=gn(d.node.name,r)),s[d.node.name]==null){const h=kg(d.node,s,r,this._resourceManager);p||([p]=gn(d.node.name,r));const g=r.currentContext;Zr(h)?c.push(h.then(v=>(s[p]=v,this.keepIntermediateTensors&&(this.clonedTensorsMap[p]=this.cloneTensorList(v)),r.currentContext=g,this.checkTensorForDisposal(p,d.node,s,r,o,i,l),this.processChildNodes(d.node,n,r,s,a,u),v))):(s[p]=h,this.keepIntermediateTensors&&(this.clonedTensorsMap[p]=this.cloneTensorList(h)),this.checkTensorForDisposal(p,d.node,s,r,o,i,l),this.processChildNodes(d.node,n,r,s,a,u))}else this.processChildNodes(d.node,n,r,s,a,u)}return c}processChildNodes(e,n,r,s,a,o){e.children.forEach(i=>{const[l]=gn(i.name,r);a[l]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(u=>!!Le(u,s,r))&&(a[l]=!0,n.push({contexts:r.currentContext,node:i})):i.inputNames.every(u=>!!Le(u,s,r))&&(a[l]=!0,n.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(n=>n.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(n=>{const r=e[n],[s]=ut(n),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((l,u)=>o[u]===-1||o[u]===l);S(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&S(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var n,r;const s={};for(const a in e){const o=(r=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||r===void 0?void 0:r[a];o!=null?s[o.name]=e[a]:s[a]=e[a]}return s}checkInputs(e){const n=Object.keys(e).filter(r=>{const[s]=ut(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(e){return e.map(n=>{var r,s;const a=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[n];return a!=null?a.name:n},{})}checkOutputs(e){e.forEach(n=>{const[r]=ut(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class ZD{constructor(e={},n={}){this.hashTableNameToHandle=e,this.hashTableMap=n}addHashTable(e,n){this.hashTableNameToHandle[e]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
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
 */const eP="?tfjs-format=file",tP="model.json";class nP{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,n={},r=gh){this.modelUrl=e,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new ZD}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const n=this.io.getLoadHandlers(e,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[e]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return Zr(e)?e.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(e)}loadSync(e){const n=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,n)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await I1(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,n)}loadWithWeightMap(e,n){this.artifacts=e;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(s=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new Dl(vg.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=vg.Instance.transformGraph(e.modelInitializer);this.initializer=new Dl(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,n){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const n=e instanceof Re?[e]:e,r={};return n.forEach((s,a)=>r[this.structuredOutputKeys[a]]=s),r}return e}predict(e,n){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,n){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var n;if(!(e instanceof Re)&&!Array.isArray(e)){const a=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(a!=null)for(const o in a){const i=a[o];i.resourceId!=null&&(e[o]=this.resourceIdToCapturedInput[i.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((a,o)=>{var i,l,u;const c=(u=(l=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||l===void 0?void 0:l[o])===null||u===void 0?void 0:u.resourceId;return c!=null?a[o]=this.resourceIdToCapturedInput[c]:a[o]=e[s++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,r=Object.keys(n);for(let s=0;s<r.length;s++){const a=r[s],o=n[a];this.resourceIdToCapturedInput[o.resourceId]=e[s]}}}execute(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=this.executor.execute(e,n);return r.length>1?r:r[0]}async executeAsync(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(e,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((n,r)=>(n[r]=[e[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Xe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function _g(t,e={},n=gh){if(t==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof t=="string"&&(t=rP(t));const r=new nP(t,e,n);return await r.load(),r}function rP(t){return t.endsWith("/")||(t=t+"/"),`${t}${tP}${eP}`}/**
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
    */function Pl(t,e,n,r){return new(n||(n=Promise))(function(s,a){function o(u){try{l(r.next(u))}catch(c){a(c)}}function i(u){try{l(r.throw(u))}catch(c){a(c)}}function l(u){var c;u.done?s(u.value):(c=u.value,c instanceof n?c:new n(function(d){d(c)})).then(o,i)}l((r=r.apply(t,[])).next())})}function jl(t,e){var n,r,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(l){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(s=2&c[0]?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[2&c[0],s.value]),c[0]){case 0:case 1:s=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){o.label=c[1];break}if(c[0]===6&&o.label<s[1]){o.label=s[1],s=c;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(c);break}s[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(d){c=[6,d],r=0}finally{n=s=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([l,u])}}}var sP={0:"tench, Tinca tinca",1:"goldfish, Carassius auratus",2:"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",3:"tiger shark, Galeocerdo cuvieri",4:"hammerhead, hammerhead shark",5:"electric ray, crampfish, numbfish, torpedo",6:"stingray",7:"cock",8:"hen",9:"ostrich, Struthio camelus",10:"brambling, Fringilla montifringilla",11:"goldfinch, Carduelis carduelis",12:"house finch, linnet, Carpodacus mexicanus",13:"junco, snowbird",14:"indigo bunting, indigo finch, indigo bird, Passerina cyanea",15:"robin, American robin, Turdus migratorius",16:"bulbul",17:"jay",18:"magpie",19:"chickadee",20:"water ouzel, dipper",21:"kite",22:"bald eagle, American eagle, Haliaeetus leucocephalus",23:"vulture",24:"great grey owl, great gray owl, Strix nebulosa",25:"European fire salamander, Salamandra salamandra",26:"common newt, Triturus vulgaris",27:"eft",28:"spotted salamander, Ambystoma maculatum",29:"axolotl, mud puppy, Ambystoma mexicanum",30:"bullfrog, Rana catesbeiana",31:"tree frog, tree-frog",32:"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",33:"loggerhead, loggerhead turtle, Caretta caretta",34:"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",35:"mud turtle",36:"terrapin",37:"box turtle, box tortoise",38:"banded gecko",39:"common iguana, iguana, Iguana iguana",40:"American chameleon, anole, Anolis carolinensis",41:"whiptail, whiptail lizard",42:"agama",43:"frilled lizard, Chlamydosaurus kingi",44:"alligator lizard",45:"Gila monster, Heloderma suspectum",46:"green lizard, Lacerta viridis",47:"African chameleon, Chamaeleo chamaeleon",48:"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",49:"African crocodile, Nile crocodile, Crocodylus niloticus",50:"American alligator, Alligator mississipiensis",51:"triceratops",52:"thunder snake, worm snake, Carphophis amoenus",53:"ringneck snake, ring-necked snake, ring snake",54:"hognose snake, puff adder, sand viper",55:"green snake, grass snake",56:"king snake, kingsnake",57:"garter snake, grass snake",58:"water snake",59:"vine snake",60:"night snake, Hypsiglena torquata",61:"boa constrictor, Constrictor constrictor",62:"rock python, rock snake, Python sebae",63:"Indian cobra, Naja naja",64:"green mamba",65:"sea snake",66:"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",67:"diamondback, diamondback rattlesnake, Crotalus adamanteus",68:"sidewinder, horned rattlesnake, Crotalus cerastes",69:"trilobite",70:"harvestman, daddy longlegs, Phalangium opilio",71:"scorpion",72:"black and gold garden spider, Argiope aurantia",73:"barn spider, Araneus cavaticus",74:"garden spider, Aranea diademata",75:"black widow, Latrodectus mactans",76:"tarantula",77:"wolf spider, hunting spider",78:"tick",79:"centipede",80:"black grouse",81:"ptarmigan",82:"ruffed grouse, partridge, Bonasa umbellus",83:"prairie chicken, prairie grouse, prairie fowl",84:"peacock",85:"quail",86:"partridge",87:"African grey, African gray, Psittacus erithacus",88:"macaw",89:"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",90:"lorikeet",91:"coucal",92:"bee eater",93:"hornbill",94:"hummingbird",95:"jacamar",96:"toucan",97:"drake",98:"red-breasted merganser, Mergus serrator",99:"goose",100:"black swan, Cygnus atratus",101:"tusker",102:"echidna, spiny anteater, anteater",103:"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",104:"wallaby, brush kangaroo",105:"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",106:"wombat",107:"jelly fish",108:"sea anemone, anemone",109:"brain coral",110:"flatworm, platyhelminth",111:"nematode, nematode worm, roundworm",112:"conch",113:"snail",114:"slug",115:"sea slug, nudibranch",116:"chiton, coat-of-mail shell, sea cradle, polyplacophore",117:"chambered nautilus, pearly nautilus, nautilus",118:"Dungeness crab, Cancer magister",119:"rock crab, Cancer irroratus",120:"fiddler crab",121:"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",122:"American lobster, Northern lobster, Maine lobster, Homarus americanus",123:"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",124:"crayfish, crawfish, crawdad, crawdaddy",125:"hermit crab",126:"isopod",127:"white stork, Ciconia ciconia",128:"black stork, Ciconia nigra",129:"spoonbill",130:"flamingo",131:"little blue heron, Egretta caerulea",132:"American egret, great white heron, Egretta albus",133:"bittern",134:"crane",135:"limpkin, Aramus pictus",136:"European gallinule, Porphyrio porphyrio",137:"American coot, marsh hen, mud hen, water hen, Fulica americana",138:"bustard",139:"ruddy turnstone, Arenaria interpres",140:"red-backed sandpiper, dunlin, Erolia alpina",141:"redshank, Tringa totanus",142:"dowitcher",143:"oystercatcher, oyster catcher",144:"pelican",145:"king penguin, Aptenodytes patagonica",146:"albatross, mollymawk",147:"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",148:"killer whale, killer, orca, grampus, sea wolf, Orcinus orca",149:"dugong, Dugong dugon",150:"sea lion",151:"Chihuahua",152:"Japanese spaniel",153:"Maltese dog, Maltese terrier, Maltese",154:"Pekinese, Pekingese, Peke",155:"Shih-Tzu",156:"Blenheim spaniel",157:"papillon",158:"toy terrier",159:"Rhodesian ridgeback",160:"Afghan hound, Afghan",161:"basset, basset hound",162:"beagle",163:"bloodhound, sleuthhound",164:"bluetick",165:"black-and-tan coonhound",166:"Walker hound, Walker foxhound",167:"English foxhound",168:"redbone",169:"borzoi, Russian wolfhound",170:"Irish wolfhound",171:"Italian greyhound",172:"whippet",173:"Ibizan hound, Ibizan Podenco",174:"Norwegian elkhound, elkhound",175:"otterhound, otter hound",176:"Saluki, gazelle hound",177:"Scottish deerhound, deerhound",178:"Weimaraner",179:"Staffordshire bullterrier, Staffordshire bull terrier",180:"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",181:"Bedlington terrier",182:"Border terrier",183:"Kerry blue terrier",184:"Irish terrier",185:"Norfolk terrier",186:"Norwich terrier",187:"Yorkshire terrier",188:"wire-haired fox terrier",189:"Lakeland terrier",190:"Sealyham terrier, Sealyham",191:"Airedale, Airedale terrier",192:"cairn, cairn terrier",193:"Australian terrier",194:"Dandie Dinmont, Dandie Dinmont terrier",195:"Boston bull, Boston terrier",196:"miniature schnauzer",197:"giant schnauzer",198:"standard schnauzer",199:"Scotch terrier, Scottish terrier, Scottie",200:"Tibetan terrier, chrysanthemum dog",201:"silky terrier, Sydney silky",202:"soft-coated wheaten terrier",203:"West Highland white terrier",204:"Lhasa, Lhasa apso",205:"flat-coated retriever",206:"curly-coated retriever",207:"golden retriever",208:"Labrador retriever",209:"Chesapeake Bay retriever",210:"German short-haired pointer",211:"vizsla, Hungarian pointer",212:"English setter",213:"Irish setter, red setter",214:"Gordon setter",215:"Brittany spaniel",216:"clumber, clumber spaniel",217:"English springer, English springer spaniel",218:"Welsh springer spaniel",219:"cocker spaniel, English cocker spaniel, cocker",220:"Sussex spaniel",221:"Irish water spaniel",222:"kuvasz",223:"schipperke",224:"groenendael",225:"malinois",226:"briard",227:"kelpie",228:"komondor",229:"Old English sheepdog, bobtail",230:"Shetland sheepdog, Shetland sheep dog, Shetland",231:"collie",232:"Border collie",233:"Bouvier des Flandres, Bouviers des Flandres",234:"Rottweiler",235:"German shepherd, German shepherd dog, German police dog, alsatian",236:"Doberman, Doberman pinscher",237:"miniature pinscher",238:"Greater Swiss Mountain dog",239:"Bernese mountain dog",240:"Appenzeller",241:"EntleBucher",242:"boxer",243:"bull mastiff",244:"Tibetan mastiff",245:"French bulldog",246:"Great Dane",247:"Saint Bernard, St Bernard",248:"Eskimo dog, husky",249:"malamute, malemute, Alaskan malamute",250:"Siberian husky",251:"dalmatian, coach dog, carriage dog",252:"affenpinscher, monkey pinscher, monkey dog",253:"basenji",254:"pug, pug-dog",255:"Leonberg",256:"Newfoundland, Newfoundland dog",257:"Great Pyrenees",258:"Samoyed, Samoyede",259:"Pomeranian",260:"chow, chow chow",261:"keeshond",262:"Brabancon griffon",263:"Pembroke, Pembroke Welsh corgi",264:"Cardigan, Cardigan Welsh corgi",265:"toy poodle",266:"miniature poodle",267:"standard poodle",268:"Mexican hairless",269:"timber wolf, grey wolf, gray wolf, Canis lupus",270:"white wolf, Arctic wolf, Canis lupus tundrarum",271:"red wolf, maned wolf, Canis rufus, Canis niger",272:"coyote, prairie wolf, brush wolf, Canis latrans",273:"dingo, warrigal, warragal, Canis dingo",274:"dhole, Cuon alpinus",275:"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",276:"hyena, hyaena",277:"red fox, Vulpes vulpes",278:"kit fox, Vulpes macrotis",279:"Arctic fox, white fox, Alopex lagopus",280:"grey fox, gray fox, Urocyon cinereoargenteus",281:"tabby, tabby cat",282:"tiger cat",283:"Persian cat",284:"Siamese cat, Siamese",285:"Egyptian cat",286:"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",287:"lynx, catamount",288:"leopard, Panthera pardus",289:"snow leopard, ounce, Panthera uncia",290:"jaguar, panther, Panthera onca, Felis onca",291:"lion, king of beasts, Panthera leo",292:"tiger, Panthera tigris",293:"cheetah, chetah, Acinonyx jubatus",294:"brown bear, bruin, Ursus arctos",295:"American black bear, black bear, Ursus americanus, Euarctos americanus",296:"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",297:"sloth bear, Melursus ursinus, Ursus ursinus",298:"mongoose",299:"meerkat, mierkat",300:"tiger beetle",301:"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",302:"ground beetle, carabid beetle",303:"long-horned beetle, longicorn, longicorn beetle",304:"leaf beetle, chrysomelid",305:"dung beetle",306:"rhinoceros beetle",307:"weevil",308:"fly",309:"bee",310:"ant, emmet, pismire",311:"grasshopper, hopper",312:"cricket",313:"walking stick, walkingstick, stick insect",314:"cockroach, roach",315:"mantis, mantid",316:"cicada, cicala",317:"leafhopper",318:"lacewing, lacewing fly",319:"dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk",320:"damselfly",321:"admiral",322:"ringlet, ringlet butterfly",323:"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",324:"cabbage butterfly",325:"sulphur butterfly, sulfur butterfly",326:"lycaenid, lycaenid butterfly",327:"starfish, sea star",328:"sea urchin",329:"sea cucumber, holothurian",330:"wood rabbit, cottontail, cottontail rabbit",331:"hare",332:"Angora, Angora rabbit",333:"hamster",334:"porcupine, hedgehog",335:"fox squirrel, eastern fox squirrel, Sciurus niger",336:"marmot",337:"beaver",338:"guinea pig, Cavia cobaya",339:"sorrel",340:"zebra",341:"hog, pig, grunter, squealer, Sus scrofa",342:"wild boar, boar, Sus scrofa",343:"warthog",344:"hippopotamus, hippo, river horse, Hippopotamus amphibius",345:"ox",346:"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",347:"bison",348:"ram, tup",349:"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",350:"ibex, Capra ibex",351:"hartebeest",352:"impala, Aepyceros melampus",353:"gazelle",354:"Arabian camel, dromedary, Camelus dromedarius",355:"llama",356:"weasel",357:"mink",358:"polecat, fitch, foulmart, foumart, Mustela putorius",359:"black-footed ferret, ferret, Mustela nigripes",360:"otter",361:"skunk, polecat, wood pussy",362:"badger",363:"armadillo",364:"three-toed sloth, ai, Bradypus tridactylus",365:"orangutan, orang, orangutang, Pongo pygmaeus",366:"gorilla, Gorilla gorilla",367:"chimpanzee, chimp, Pan troglodytes",368:"gibbon, Hylobates lar",369:"siamang, Hylobates syndactylus, Symphalangus syndactylus",370:"guenon, guenon monkey",371:"patas, hussar monkey, Erythrocebus patas",372:"baboon",373:"macaque",374:"langur",375:"colobus, colobus monkey",376:"proboscis monkey, Nasalis larvatus",377:"marmoset",378:"capuchin, ringtail, Cebus capucinus",379:"howler monkey, howler",380:"titi, titi monkey",381:"spider monkey, Ateles geoffroyi",382:"squirrel monkey, Saimiri sciureus",383:"Madagascar cat, ring-tailed lemur, Lemur catta",384:"indri, indris, Indri indri, Indri brevicaudatus",385:"Indian elephant, Elephas maximus",386:"African elephant, Loxodonta africana",387:"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",388:"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",389:"barracouta, snoek",390:"eel",391:"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",392:"rock beauty, Holocanthus tricolor",393:"anemone fish",394:"sturgeon",395:"gar, garfish, garpike, billfish, Lepisosteus osseus",396:"lionfish",397:"puffer, pufferfish, blowfish, globefish",398:"abacus",399:"abaya",400:"academic gown, academic robe, judge's robe",401:"accordion, piano accordion, squeeze box",402:"acoustic guitar",403:"aircraft carrier, carrier, flattop, attack aircraft carrier",404:"airliner",405:"airship, dirigible",406:"altar",407:"ambulance",408:"amphibian, amphibious vehicle",409:"analog clock",410:"apiary, bee house",411:"apron",412:"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin",413:"assault rifle, assault gun",414:"backpack, back pack, knapsack, packsack, rucksack, haversack",415:"bakery, bakeshop, bakehouse",416:"balance beam, beam",417:"balloon",418:"ballpoint, ballpoint pen, ballpen, Biro",419:"Band Aid",420:"banjo",421:"bannister, banister, balustrade, balusters, handrail",422:"barbell",423:"barber chair",424:"barbershop",425:"barn",426:"barometer",427:"barrel, cask",428:"barrow, garden cart, lawn cart, wheelbarrow",429:"baseball",430:"basketball",431:"bassinet",432:"bassoon",433:"bathing cap, swimming cap",434:"bath towel",435:"bathtub, bathing tub, bath, tub",436:"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon",437:"beacon, lighthouse, beacon light, pharos",438:"beaker",439:"bearskin, busby, shako",440:"beer bottle",441:"beer glass",442:"bell cote, bell cot",443:"bib",444:"bicycle-built-for-two, tandem bicycle, tandem",445:"bikini, two-piece",446:"binder, ring-binder",447:"binoculars, field glasses, opera glasses",448:"birdhouse",449:"boathouse",450:"bobsled, bobsleigh, bob",451:"bolo tie, bolo, bola tie, bola",452:"bonnet, poke bonnet",453:"bookcase",454:"bookshop, bookstore, bookstall",455:"bottlecap",456:"bow",457:"bow tie, bow-tie, bowtie",458:"brass, memorial tablet, plaque",459:"brassiere, bra, bandeau",460:"breakwater, groin, groyne, mole, bulwark, seawall, jetty",461:"breastplate, aegis, egis",462:"broom",463:"bucket, pail",464:"buckle",465:"bulletproof vest",466:"bullet train, bullet",467:"butcher shop, meat market",468:"cab, hack, taxi, taxicab",469:"caldron, cauldron",470:"candle, taper, wax light",471:"cannon",472:"canoe",473:"can opener, tin opener",474:"cardigan",475:"car mirror",476:"carousel, carrousel, merry-go-round, roundabout, whirligig",477:"carpenter's kit, tool kit",478:"carton",479:"car wheel",480:"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM",481:"cassette",482:"cassette player",483:"castle",484:"catamaran",485:"CD player",486:"cello, violoncello",487:"cellular telephone, cellular phone, cellphone, cell, mobile phone",488:"chain",489:"chainlink fence",490:"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour",491:"chain saw, chainsaw",492:"chest",493:"chiffonier, commode",494:"chime, bell, gong",495:"china cabinet, china closet",496:"Christmas stocking",497:"church, church building",498:"cinema, movie theater, movie theatre, movie house, picture palace",499:"cleaver, meat cleaver, chopper",500:"cliff dwelling",501:"cloak",502:"clog, geta, patten, sabot",503:"cocktail shaker",504:"coffee mug",505:"coffeepot",506:"coil, spiral, volute, whorl, helix",507:"combination lock",508:"computer keyboard, keypad",509:"confectionery, confectionary, candy store",510:"container ship, containership, container vessel",511:"convertible",512:"corkscrew, bottle screw",513:"cornet, horn, trumpet, trump",514:"cowboy boot",515:"cowboy hat, ten-gallon hat",516:"cradle",517:"crane",518:"crash helmet",519:"crate",520:"crib, cot",521:"Crock Pot",522:"croquet ball",523:"crutch",524:"cuirass",525:"dam, dike, dyke",526:"desk",527:"desktop computer",528:"dial telephone, dial phone",529:"diaper, nappy, napkin",530:"digital clock",531:"digital watch",532:"dining table, board",533:"dishrag, dishcloth",534:"dishwasher, dish washer, dishwashing machine",535:"disk brake, disc brake",536:"dock, dockage, docking facility",537:"dogsled, dog sled, dog sleigh",538:"dome",539:"doormat, welcome mat",540:"drilling platform, offshore rig",541:"drum, membranophone, tympan",542:"drumstick",543:"dumbbell",544:"Dutch oven",545:"electric fan, blower",546:"electric guitar",547:"electric locomotive",548:"entertainment center",549:"envelope",550:"espresso maker",551:"face powder",552:"feather boa, boa",553:"file, file cabinet, filing cabinet",554:"fireboat",555:"fire engine, fire truck",556:"fire screen, fireguard",557:"flagpole, flagstaff",558:"flute, transverse flute",559:"folding chair",560:"football helmet",561:"forklift",562:"fountain",563:"fountain pen",564:"four-poster",565:"freight car",566:"French horn, horn",567:"frying pan, frypan, skillet",568:"fur coat",569:"garbage truck, dustcart",570:"gasmask, respirator, gas helmet",571:"gas pump, gasoline pump, petrol pump, island dispenser",572:"goblet",573:"go-kart",574:"golf ball",575:"golfcart, golf cart",576:"gondola",577:"gong, tam-tam",578:"gown",579:"grand piano, grand",580:"greenhouse, nursery, glasshouse",581:"grille, radiator grille",582:"grocery store, grocery, food market, market",583:"guillotine",584:"hair slide",585:"hair spray",586:"half track",587:"hammer",588:"hamper",589:"hand blower, blow dryer, blow drier, hair dryer, hair drier",590:"hand-held computer, hand-held microcomputer",591:"handkerchief, hankie, hanky, hankey",592:"hard disc, hard disk, fixed disk",593:"harmonica, mouth organ, harp, mouth harp",594:"harp",595:"harvester, reaper",596:"hatchet",597:"holster",598:"home theater, home theatre",599:"honeycomb",600:"hook, claw",601:"hoopskirt, crinoline",602:"horizontal bar, high bar",603:"horse cart, horse-cart",604:"hourglass",605:"iPod",606:"iron, smoothing iron",607:"jack-o'-lantern",608:"jean, blue jean, denim",609:"jeep, landrover",610:"jersey, T-shirt, tee shirt",611:"jigsaw puzzle",612:"jinrikisha, ricksha, rickshaw",613:"joystick",614:"kimono",615:"knee pad",616:"knot",617:"lab coat, laboratory coat",618:"ladle",619:"lampshade, lamp shade",620:"laptop, laptop computer",621:"lawn mower, mower",622:"lens cap, lens cover",623:"letter opener, paper knife, paperknife",624:"library",625:"lifeboat",626:"lighter, light, igniter, ignitor",627:"limousine, limo",628:"liner, ocean liner",629:"lipstick, lip rouge",630:"Loafer",631:"lotion",632:"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system",633:"loupe, jeweler's loupe",634:"lumbermill, sawmill",635:"magnetic compass",636:"mailbag, postbag",637:"mailbox, letter box",638:"maillot",639:"maillot, tank suit",640:"manhole cover",641:"maraca",642:"marimba, xylophone",643:"mask",644:"matchstick",645:"maypole",646:"maze, labyrinth",647:"measuring cup",648:"medicine chest, medicine cabinet",649:"megalith, megalithic structure",650:"microphone, mike",651:"microwave, microwave oven",652:"military uniform",653:"milk can",654:"minibus",655:"miniskirt, mini",656:"minivan",657:"missile",658:"mitten",659:"mixing bowl",660:"mobile home, manufactured home",661:"Model T",662:"modem",663:"monastery",664:"monitor",665:"moped",666:"mortar",667:"mortarboard",668:"mosque",669:"mosquito net",670:"motor scooter, scooter",671:"mountain bike, all-terrain bike, off-roader",672:"mountain tent",673:"mouse, computer mouse",674:"mousetrap",675:"moving van",676:"muzzle",677:"nail",678:"neck brace",679:"necklace",680:"nipple",681:"notebook, notebook computer",682:"obelisk",683:"oboe, hautboy, hautbois",684:"ocarina, sweet potato",685:"odometer, hodometer, mileometer, milometer",686:"oil filter",687:"organ, pipe organ",688:"oscilloscope, scope, cathode-ray oscilloscope, CRO",689:"overskirt",690:"oxcart",691:"oxygen mask",692:"packet",693:"paddle, boat paddle",694:"paddlewheel, paddle wheel",695:"padlock",696:"paintbrush",697:"pajama, pyjama, pj's, jammies",698:"palace",699:"panpipe, pandean pipe, syrinx",700:"paper towel",701:"parachute, chute",702:"parallel bars, bars",703:"park bench",704:"parking meter",705:"passenger car, coach, carriage",706:"patio, terrace",707:"pay-phone, pay-station",708:"pedestal, plinth, footstall",709:"pencil box, pencil case",710:"pencil sharpener",711:"perfume, essence",712:"Petri dish",713:"photocopier",714:"pick, plectrum, plectron",715:"pickelhaube",716:"picket fence, paling",717:"pickup, pickup truck",718:"pier",719:"piggy bank, penny bank",720:"pill bottle",721:"pillow",722:"ping-pong ball",723:"pinwheel",724:"pirate, pirate ship",725:"pitcher, ewer",726:"plane, carpenter's plane, woodworking plane",727:"planetarium",728:"plastic bag",729:"plate rack",730:"plow, plough",731:"plunger, plumber's helper",732:"Polaroid camera, Polaroid Land camera",733:"pole",734:"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria",735:"poncho",736:"pool table, billiard table, snooker table",737:"pop bottle, soda bottle",738:"pot, flowerpot",739:"potter's wheel",740:"power drill",741:"prayer rug, prayer mat",742:"printer",743:"prison, prison house",744:"projectile, missile",745:"projector",746:"puck, hockey puck",747:"punching bag, punch bag, punching ball, punchball",748:"purse",749:"quill, quill pen",750:"quilt, comforter, comfort, puff",751:"racer, race car, racing car",752:"racket, racquet",753:"radiator",754:"radio, wireless",755:"radio telescope, radio reflector",756:"rain barrel",757:"recreational vehicle, RV, R.V.",758:"reel",759:"reflex camera",760:"refrigerator, icebox",761:"remote control, remote",762:"restaurant, eating house, eating place, eatery",763:"revolver, six-gun, six-shooter",764:"rifle",765:"rocking chair, rocker",766:"rotisserie",767:"rubber eraser, rubber, pencil eraser",768:"rugby ball",769:"rule, ruler",770:"running shoe",771:"safe",772:"safety pin",773:"saltshaker, salt shaker",774:"sandal",775:"sarong",776:"sax, saxophone",777:"scabbard",778:"scale, weighing machine",779:"school bus",780:"schooner",781:"scoreboard",782:"screen, CRT screen",783:"screw",784:"screwdriver",785:"seat belt, seatbelt",786:"sewing machine",787:"shield, buckler",788:"shoe shop, shoe-shop, shoe store",789:"shoji",790:"shopping basket",791:"shopping cart",792:"shovel",793:"shower cap",794:"shower curtain",795:"ski",796:"ski mask",797:"sleeping bag",798:"slide rule, slipstick",799:"sliding door",800:"slot, one-armed bandit",801:"snorkel",802:"snowmobile",803:"snowplow, snowplough",804:"soap dispenser",805:"soccer ball",806:"sock",807:"solar dish, solar collector, solar furnace",808:"sombrero",809:"soup bowl",810:"space bar",811:"space heater",812:"space shuttle",813:"spatula",814:"speedboat",815:"spider web, spider's web",816:"spindle",817:"sports car, sport car",818:"spotlight, spot",819:"stage",820:"steam locomotive",821:"steel arch bridge",822:"steel drum",823:"stethoscope",824:"stole",825:"stone wall",826:"stopwatch, stop watch",827:"stove",828:"strainer",829:"streetcar, tram, tramcar, trolley, trolley car",830:"stretcher",831:"studio couch, day bed",832:"stupa, tope",833:"submarine, pigboat, sub, U-boat",834:"suit, suit of clothes",835:"sundial",836:"sunglass",837:"sunglasses, dark glasses, shades",838:"sunscreen, sunblock, sun blocker",839:"suspension bridge",840:"swab, swob, mop",841:"sweatshirt",842:"swimming trunks, bathing trunks",843:"swing",844:"switch, electric switch, electrical switch",845:"syringe",846:"table lamp",847:"tank, army tank, armored combat vehicle, armoured combat vehicle",848:"tape player",849:"teapot",850:"teddy, teddy bear",851:"television, television system",852:"tennis ball",853:"thatch, thatched roof",854:"theater curtain, theatre curtain",855:"thimble",856:"thresher, thrasher, threshing machine",857:"throne",858:"tile roof",859:"toaster",860:"tobacco shop, tobacconist shop, tobacconist",861:"toilet seat",862:"torch",863:"totem pole",864:"tow truck, tow car, wrecker",865:"toyshop",866:"tractor",867:"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi",868:"tray",869:"trench coat",870:"tricycle, trike, velocipede",871:"trimaran",872:"tripod",873:"triumphal arch",874:"trolleybus, trolley coach, trackless trolley",875:"trombone",876:"tub, vat",877:"turnstile",878:"typewriter keyboard",879:"umbrella",880:"unicycle, monocycle",881:"upright, upright piano",882:"vacuum, vacuum cleaner",883:"vase",884:"vault",885:"velvet",886:"vending machine",887:"vestment",888:"viaduct",889:"violin, fiddle",890:"volleyball",891:"waffle iron",892:"wall clock",893:"wallet, billfold, notecase, pocketbook",894:"wardrobe, closet, press",895:"warplane, military plane",896:"washbasin, handbasin, washbowl, lavabo, wash-hand basin",897:"washer, automatic washer, washing machine",898:"water bottle",899:"water jug",900:"water tower",901:"whiskey jug",902:"whistle",903:"wig",904:"window screen",905:"window shade",906:"Windsor tie",907:"wine bottle",908:"wing",909:"wok",910:"wooden spoon",911:"wool, woolen, woollen",912:"worm fence, snake fence, snake-rail fence, Virginia fence",913:"wreck",914:"yawl",915:"yurt",916:"web site, website, internet site, site",917:"comic book",918:"crossword puzzle, crossword",919:"street sign",920:"traffic light, traffic signal, stoplight",921:"book jacket, dust cover, dust jacket, dust wrapper",922:"menu",923:"plate",924:"guacamole",925:"consomme",926:"hot pot, hotpot",927:"trifle",928:"ice cream, icecream",929:"ice lolly, lolly, lollipop, popsicle",930:"French loaf",931:"bagel, beigel",932:"pretzel",933:"cheeseburger",934:"hotdog, hot dog, red hot",935:"mashed potato",936:"head cabbage",937:"broccoli",938:"cauliflower",939:"zucchini, courgette",940:"spaghetti squash",941:"acorn squash",942:"butternut squash",943:"cucumber, cuke",944:"artichoke, globe artichoke",945:"bell pepper",946:"cardoon",947:"mushroom",948:"Granny Smith",949:"strawberry",950:"orange",951:"lemon",952:"fig",953:"pineapple, ananas",954:"banana",955:"jackfruit, jak, jack",956:"custard apple",957:"pomegranate",958:"hay",959:"carbonara",960:"chocolate sauce, chocolate syrup",961:"dough",962:"meat loaf, meatloaf",963:"pizza, pizza pie",964:"potpie",965:"burrito",966:"red wine",967:"espresso",968:"cup",969:"eggnog",970:"alp",971:"bubble",972:"cliff, drop, drop-off",973:"coral reef",974:"geyser",975:"lakeside, lakeshore",976:"promontory, headland, head, foreland",977:"sandbar, sand bar",978:"seashore, coast, seacoast, sea-coast",979:"valley, vale",980:"volcano",981:"ballplayer, baseball player",982:"groom, bridegroom",983:"scuba diver",984:"rapeseed",985:"daisy",986:"yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",987:"corn",988:"acorn",989:"hip, rose hip, rosehip",990:"buckeye, horse chestnut, conker",991:"coral fungus",992:"agaric",993:"gyromitra",994:"stinkhorn, carrion fungus",995:"earthstar",996:"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",997:"bolete",998:"ear, spike, capitulum",999:"toilet tissue, toilet paper, bathroom tissue"},Bn=224,aP={"1.00":"module_apply_default/MobilenetV1/Logits/global_pool","2.00":"module_apply_default/MobilenetV2/Logits/AvgPool"},ws={"1.00":{.25:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_025_224/classification/1",inputRange:[0,1]},"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_050_224/classification/1",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_075_224/classification/1",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1",inputRange:[0,1]}},"2.00":{"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_050_224/classification/2",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_075_224/classification/2",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",inputRange:[0,1]}}};function oP(t){return t===void 0&&(t={version:1,alpha:1}),Pl(this,void 0,void 0,function(){var e,n,r,s,a,o,i;return jl(this,function(l){switch(l.label){case 0:if(IO==null)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(e=t.version.toFixed(2),n=t.alpha?t.alpha.toFixed(2):"",r=-1,s=1,t.modelUrl==null){if(!(e in ws))throw new Error("Invalid version of MobileNet. Valid versions are: "+Object.keys(ws));if(!(n in ws[e]))throw new Error("MobileNet constructed with invalid alpha "+t.alpha+". Valid multipliers for this version are: "+Object.keys(ws[e])+".");o=ws[e][n].inputRange,r=o[0],s=o[1]}return t.inputRange!=null&&(i=t.inputRange,r=i[0],s=i[1]),[4,(a=new iP(e,n,t.modelUrl,r,s)).load()];case 1:return l.sent(),[2,a]}})})}var iP=function(){function t(e,n,r,s,a){s===void 0&&(s=-1),a===void 0&&(a=1),this.version=e,this.alpha=n,this.modelUrl=r,this.inputMin=s,this.inputMax=a,this.normalizationConstant=(a-s)/255}return t.prototype.load=function(){return Pl(this,void 0,void 0,function(){var e,n,r,s,a=this;return jl(this,function(o){switch(o.label){case 0:return this.modelUrl?(e=this,[4,_g(this.modelUrl)]):[3,2];case 1:return e.model=o.sent(),[3,4];case 2:return n=ws[this.version][this.alpha].url,r=this,[4,_g(n,{fromTFHub:!0})];case 3:r.model=o.sent(),o.label=4;case 4:return[4,(s=ne(function(){return a.model.predict(pr([1,Bn,Bn,3]))})).data()];case 5:return o.sent(),s.dispose(),[2]}})})},t.prototype.infer=function(e,n){var r=this;return n===void 0&&(n=!1),ne(function(){e instanceof Re||(e=$O(e));var s=H(F(xe(e,"float32"),r.normalizationConstant),r.inputMin),a=s;(e.shape[0]!==Bn||e.shape[1]!==Bn)&&(a=ph.resizeBilinear(s,[Bn,Bn],!0));var o,i=O(a,[-1,Bn,Bn,3]);if(n){var l=aP[r.version],u=r.model.execute(i,l);o=Yo(u,[1,2])}else{var c=r.model.predict(i);o=ae(c,[0,1],[-1,1e3])}return o})},t.prototype.classify=function(e,n){return n===void 0&&(n=3),Pl(this,void 0,void 0,function(){var r,s;return jl(this,function(a){switch(a.label){case 0:return[4,lP(r=this.infer(e),n)];case 1:return s=a.sent(),r.dispose(),[2,s]}})})},t}();function lP(t,e){return Pl(this,void 0,void 0,function(){var n,r,s,a,o,i,l;return jl(this,function(u){switch(u.label){case 0:return[4,(n=eh(t)).data()];case 1:for(r=u.sent(),n.dispose(),s=[],l=0;l<r.length;l++)s.push({value:r[l],index:l});for(s.sort(function(c,d){return d.value-c.value}),a=new Float32Array(e),o=new Int32Array(e),l=0;l<e;l++)a[l]=s[l].value,o[l]=s[l].index;for(i=[],l=0;l<o.length;l++)i.push({className:sP[o[l]],probability:a[l]});return[2,i]}})})}const hr=[{id:"fauna_001",commonName:"Jaguar",scientificName:"Panthera onca",category:"mammal",description:"El jaguar es el felino más grande de América. Es un depredador ápice con un papel clave en el control de poblaciones y el mantenimiento de la salud ecológica del bosque tropical.",isDangerous:!0,dangerLevel:5,encounterProtocol:[{action:"Retrocede lentamente",description:"Mantén la calma, retrocede sin darle la espalda al animal y evita movimientos bruscos. No corras ni lo acerques; busca un lugar elevado o un vehículo si es posible.",urgency:"critical"}],habitat:"Selva tropical y bosques densos en Calakmul y áreas protegidas",diet:"Carnívoro: ciervos, tapires, pecaríes, y otros mamíferos",sounds:[{type:"general",label:"gruñidos profundos"},{type:"alert",label:"ronquidos y vocalizaciones cortas"}],region:"campeche",conservationStatus:"EN"},{id:"fauna_002",commonName:"Tapir de Baird",scientificName:"Tapirus bairdii",category:"mammal",description:"El tapir de Baird es el mayor mamífero terrestre de Mesoamérica. Es un herbívoro principalmente nocturno que actúa como dispersor de semillas importante en la selva.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Aléjate con cuidado",description:"Observa a distancia y evita interponerte entre una cría y la madre. No molestes ni intentes alimentar al animal.",urgency:"high"}],habitat:"Bosque tropical húmedo, áreas ribereñas en Calakmul",diet:"Herbívoro: frutos, brotes y hojas",sounds:[{type:"general",label:"resoplidos y silbidos"}],region:"campeche",conservationStatus:"EN"},{id:"fauna_003",commonName:"Mono aullador",scientificName:"Alouatta palliata",category:"mammal",description:"El mono aullador produce vocalizaciones potentes que pueden escucharse a gran distancia. Vive en grupos sociales y se alimenta principalmente de hojas y frutas.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Mantén distancia",description:"No te acerques a los primates ni alimentes a los animales; respeta su espacio y observa desde lejos.",urgency:"low"}],habitat:"Copas de árboles en bosques secundarios y primarios",diet:"Folívoro/frugívoro: hojas, frutas y brotes",sounds:[{type:"general",label:"gruñidos y aullidos prolongados"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_004",commonName:"Coatí",scientificName:"Nasua narica",category:"mammal",description:"El coatí es un mamífero omnívoro y diurno, conocido por su larga cola anillada. Frecuenta bordes de bosque y áreas abiertas cerca de fuentes de alimento.",isDangerous:!1,dangerLevel:1,encounterProtocol:[{action:"No alimentes",description:"Evita acercarte o alimentar coatíes; pueden volverse agresivos si buscan comida. Guarda la comida en recipientes cerrados.",urgency:"medium"}],habitat:"Bosques secos y húmedos, bordes de selva y áreas agrícolas",diet:"Omnívoro: insectos, frutas, pequeños vertebrados",sounds:[{type:"general",label:"chillidos y gruñidos"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_005",commonName:"Pecarí de collar",scientificName:"Pecari tajacu",category:"mammal",description:"El pecarí de collar es un suido social que vive en pequeños grupos. Puede mostrarse defensivo si se siente acorralado o si hay crías presentes.",isDangerous:!0,dangerLevel:3,encounterProtocol:[{action:"Evita el acercamiento",description:"No te interpongas entre los individuos y su ruta de escape; retrocede lentamente y busca un lugar seguro si el grupo se agita.",urgency:"high"}],habitat:"Sabana, bordes de bosque y claros",diet:"Herbívoros/omnivoros: raíces, frutos y pequeños invertebrados",sounds:[{type:"alert",label:"gruñidos de alarma"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_006",commonName:"Guacamaya roja",scientificName:"Ara macao",category:"bird",description:"La guacamaya roja es un loro grande y colorido que habita bosques tropicales. Se alimenta de frutos, semillas y nueces y anida en cavidades de árboles grandes como la ceiba.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Observa desde lejos",description:"No intentes interactuar ni molestar; evita acercarte a nidos y respeta las zonas de anidación.",urgency:"low"}],habitat:"Selva tropical y claros con árboles grandes",diet:"Frugívoro/semívoro: frutos, semillas y nueces",sounds:[{type:"general",label:"graznidos y llamadas estridentes"}],region:"campeche",conservationStatus:"VU"},{id:"fauna_007",commonName:"Tucán pico multicolor",scientificName:"Ramphastos sulfuratus",category:"bird",description:"El tucán de pico multicolor es conocido por su gran pico y su papel en la dispersión de semillas. Habita selvas y bordes de bosque y suele posarse en los estratos medios y altos del dosel.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Mantén distancia",description:"Observa sin perturbar.",urgency:"low"}],habitat:"Dosel de bosques tropicales y bordes de selva",diet:"Frutas principalmente, ocasionalmente insectos y huevos",sounds:[{type:"general",label:"calls resonantes y croantes"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_008",commonName:"Flamenco rosa",scientificName:"Phoenicopterus ruber",category:"bird",description:"El flamenco rosa es una especie asociada a lagunas costeras y salinas. Se alimenta filtrando pequeños invertebrados y algas que le dan su color rosado característico.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"No molestar",description:"No acercarse a colonias ni interferir en la alimentación.",urgency:"low"}],habitat:"Lagunas costeras y humedales salinos, como Laguna de Términos",diet:"Filtrador: crustáceos, pequeños invertebrados y algas",sounds:[{type:"general",label:"calls comunitarias y croaks"}],region:"campeche",conservationStatus:"NT"},{id:"fauna_009",commonName:"Pavo ocelado",scientificName:"Meleagris ocellata",category:"bird",description:"El pavo ocelado es endémico de la península de Yucatán y presenta un plumaje distintivo con ocelos. Habita áreas boscosas y claros y es importante culturalmente en la región.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"Observar",description:"No perseguir ni alimentar.",urgency:"low"}],habitat:"Bosques caducifolios y selvas bajas de la península de Yucatán",diet:"Omnívoro: semillas, frutos, insectos",sounds:[{type:"general",label:"calls fuertes y arrullos"}],region:"campeche",conservationStatus:"VU"},{id:"fauna_010",commonName:"Cocodrilo de pantano",scientificName:"Crocodylus moreletii",category:"reptile",description:"El cocodrilo de pantano habita manglares, estuarios y cuerpos de agua dulce costeros. Es un depredador ambush que puede ser peligroso para humanos si se le provoca o se le sorprende cerca del agua.",isDangerous:!0,dangerLevel:4,encounterProtocol:[{action:"Mantén distancia del agua",description:"Evita acercarte a orillas, no nades en zonas donde hay actividad de cocodrilos y mantén a mascotas y niños lejos del borde del agua.",urgency:"critical"}],habitat:"Manglares y estuarios costeros, Laguna de Términos",diet:"Carnívoro: peces, aves, mamíferos pequeños",sounds:[{type:"general",label:"gruñidos bajos y bramidos"}],region:"campeche",conservationStatus:"NT"},{id:"fauna_011",commonName:"Nauyaca",scientificName:"Bothrops asper",category:"reptile",description:"Bothrops asper es una víbora venenosa ampliamente distribuida en Mesoamérica. Produce un veneno hemotóxico potente y es responsable de numerosos accidentes ofídicos en la región.",isDangerous:!0,dangerLevel:5,encounterProtocol:[{action:"Aléjate con calma",description:"Retrocede lentamente sin movimientos bruscos; no intentes manipularla. Busca asistencia médica inmediata en caso de mordedura y mantén a la persona inmóvil mientras se traslada al centro de salud.",urgency:"critical"}],habitat:"Bordes de bosque, pastizales y áreas perturbadas",diet:"Carnívoro: pequeños mamíferos, ranas y aves",sounds:[{type:"general",label:"silencio; no emite llamadas"}],region:"campeche",conservationStatus:"LC"},{id:"fauna_012",commonName:"Iguana verde",scientificName:"Iguana iguana",category:"reptile",description:"La iguana verde es un gran reptil herbívoro que habita en árboles cercanos a cuerpos de agua. En algunas comunidades se consume su carne, aunque las poblaciones pueden estar sujetas a presión por caza local.",isDangerous:!1,dangerLevel:0,encounterProtocol:[{action:"No molestar",description:"Observa desde la distancia y evita tocar.",urgency:"low"}],habitat:"Árboles ribereños, manglares y bordes de agua",diet:"Herbívoro: hojas, flores y frutos",sounds:[{type:"general",label:"silenciosa; siseos en estrés"}],region:"campeche",conservationStatus:"LC",isEdible:!0}],vh=[{id:"flora_001",commonName:"Ceiba",scientificName:"Ceiba pentandra",category:"tree",description:"La ceiba es un árbol emblemático y sagrado para la cultura maya; puede alcanzar grandes dimensiones y sirve como refugio y sitio de anidación para numerosas especies.",isEdible:!1,edibleParts:"Ninguna",isToxic:!1,toxicWarning:"",animalsDependent:"Aves, murciélagos y artrópodos que usan cavidades y flores",medicinalUses:"Usos tradicionales en rituales y medicina popular; la corteza tiene aplicaciones locales.",habitat:"Selvas y bordes de bosque en la península de Yucatán",region:"campeche",fruitsAvailable:"Marzo - Mayo"},{id:"flora_002",commonName:"Ramón",scientificName:"Brosimum alicastrum",category:"tree",description:"El ramón es un árbol nativo cuyo fruto seco y semillas son altamente nutritivos; fue una fuente alimentaria clave para las poblaciones mayas tradicionales.",isEdible:!0,edibleParts:"Semillas (ramón)",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y mamíferos que consumen semillas y frutos",medicinalUses:"Semillas usadas en preparados energéticos tradicionales",habitat:"Bosque tropical y áreas agrícolas tradicionales",region:"campeche",fruitsAvailable:"Septiembre - Diciembre"},{id:"flora_003",commonName:"Chico zapote",scientificName:"Manilkara zapota",category:"tree",description:"El chico zapote produce el fruto conocido como zapote, de pulpa dulce y nutritiva; es apreciado localmente y cultivado en huertos.",isEdible:!0,edibleParts:"Fruto (pulpa)",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y mamíferos frugívoros",medicinalUses:"Usos tradicionales en la medicina popular para problemas digestivos",habitat:"Huertos, bordes de selva y terrenos cultivados",region:"campeche",fruitsAvailable:"Todo el año (picos según zona)"},{id:"flora_004",commonName:"Mangle rojo",scientificName:"Rhizophora mangle",category:"tree",description:"El mangle rojo domina los manglares costeros y es esencial para la protección de la línea costera y como hábitat para numerosas especies marinas y aves.",isEdible:!1,edibleParts:"Ninguna",isToxic:!1,toxicWarning:"",animalsDependent:"Peces juveniles, crustáceos y aves costeras",medicinalUses:"Usos locales en tratamiento de heridas y como combustible",habitat:"Manglares y estuarios, especialmente en Laguna de Términos",region:"campeche",fruitsAvailable:"Producción de propagulos todo el año"},{id:"flora_005",commonName:"Guanacaste",scientificName:"Enterolobium cyclocarpum",category:"tree",description:"El guanacaste es un árbol de gran copa con vainas comestibles que son consumidas por fauna y en ocasiones por humanos; aporta sombra y mejoramiento del suelo.",isEdible:!0,edibleParts:"Vainas y semillas (cuando se procesan)",isToxic:!1,toxicWarning:"",animalsDependent:"Mamíferos que consumen las vainas y aves que anidan",medicinalUses:"Usos tradicionales en la medicina local y forraje",habitat:"Sabana y bordes de bosque",region:"campeche",fruitsAvailable:"Mayo - Julio"},{id:"flora_006",commonName:"Palma de corozo",scientificName:"Orbignya cohune",category:"tree",description:"La palma de corozo es utilizada por sus semillas oleaginosas; el aceite de corozo tiene usos alimentarios y tradicionales en la región.",isEdible:!0,edibleParts:"Semillas (aceite)",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y mamíferos que consumen frutos y semillas",medicinalUses:"Aceite usado en remedios tradicionales",habitat:"Bosques secos y zonas ribereñas",region:"campeche",fruitsAvailable:"Agosto - Noviembre"},{id:"flora_007",commonName:"Chechem",scientificName:"Metopium brownei",category:"tree",description:"El chechem es un árbol tropical cuya savia puede causar dermatitis severa en contacto con la piel; se reconoce por su madera y presencia en bosques secos.",isEdible:!1,edibleParts:"Ninguna",isToxic:!0,toxicWarning:"Savias y resinas pueden causar quemaduras y dermatitis al contacto; usar protección y evitar manipulación.",animalsDependent:"Algunas aves e insectos especializados",medicinalUses:"Uso tradicional muy limitado debido a su toxicidad",habitat:"Bosques secos y áreas pedregosas",region:"campeche",fruitsAvailable:"Marzo - Junio"},{id:"flora_008",commonName:"Xix",scientificName:"Piscidia piscipula",category:"tree",description:"Xix es un árbol con propiedades medicinales conocidas; extractos de la corteza se han usado tradicionalmente como sedante y para el manejo del dolor.",isEdible:!1,edibleParts:"Ninguna",isToxic:!1,toxicWarning:"",animalsDependent:"Aves y polinizadores que visitan sus flores",medicinalUses:"Extractos usados como sedante y analgésico tradicional",habitat:"Bosques costeros y áreas perturbadas",region:"campeche",fruitsAvailable:"Abril - Agosto"}],rc=[{id:"eco_001",name:"Selva tropical",description:"Bosque tropical húmedo del interior de Campeche, con alta biodiversidad y grandes árboles emergentes.",typicalSpecies:["fauna_001","fauna_002","fauna_006","flora_001"],risks:["Serpientes venenosas","Calor intenso","Desorientación en senderos densos"],curiosities:["Alberga sitios arqueológicos mayas como Calakmul"],migratory:["fauna_008"],zone:"Interior de Campeche, Calakmul y reservas protegidas"},{id:"eco_002",name:"Manglares",description:"Ecosistemas costeros dominados por mangle rojo y asociados a estuarios y lagunas.",typicalSpecies:["fauna_010","fauna_008","flora_004"],risks:["Cocodrilos","Suelos inestables","Mareas y corrientes"],curiosities:["Uno de los sistemas de manglar más extensos de México"],migratory:["fauna_008"],zone:"Zonas costeras y Laguna de Términos"},{id:"eco_003",name:"Humedales costeros",description:"Lagunas costeras y zonas inundables que sostienen aves acuáticas, peces y mamíferos marinos.",typicalSpecies:["fauna_008"],risks:["Cambios meteorológicos repentinos","Zonas de agua profunda"],curiosities:["Área importante para manatíes y aves migratorias"],migratory:["fauna_008","fauna_006"],zone:"Laguna de Términos, Isla del Carmen"},{id:"eco_004",name:"Sabana",description:"Áreas de transición con vegetación más abierta y pastizales, presentes en la parte norte de Campeche.",typicalSpecies:["fauna_004","fauna_005"],risks:["Poca sombra","Exposición al calor"],curiosities:["Zona de transición entre selva y costa; paisaje de mosaico ecológico"],migratory:[],zone:"Norte de Campeche, sabanas y claros"}],uP=[...hr,...vh];function cP(t){return uP.find(e=>e.id===t)}const dP=[{terms:["jungle","forest","tree","vegetation","rainforest"],ecosystemId:"eco_001"},{terms:["water","swamp","lake","wetland","lagoon"],ecosystemId:"eco_003"},{terms:["beach","coast","mangrove","sea","estuary"],ecosystemId:"eco_002"},{terms:["field","grass","savanna","plain","pasture","meadow"],ecosystemId:"eco_004"}];function pP(t){const e=t.map(n=>n.toLowerCase());for(const n of dP)if(e.some(r=>n.terms.some(s=>r.includes(s))))return rc.find(r=>r.id===n.ecosystemId)??rc[0];return rc[0]}function fP(t){const e={eco_001:["selva","bosque","calakmul","tropical"],eco_002:["manglar","laguna","costera","estuario"],eco_003:["humedal","laguna","costa","agua","mar"],eco_004:["sabana","sabanas","pastizal","norte"]},n=e[t]??e.eco_001,r=hr.filter(s=>{const a=(s.habitat??"").toLowerCase();return n.some(o=>a.includes(o))});return r.length>0?r:hr.slice(0,3)}function hP(){const[t,e]=D.useState(null),[n,r]=D.useState(!0),[s,a]=D.useState(null);D.useEffect(()=>{let u=!0;return r(!0),oP().then(c=>{u&&(e(c),r(!1))}).catch(c=>{u&&(a((c==null?void 0:c.message)||"No se pudo cargar el modelo de IA."),r(!1))}),()=>{u=!1}},[]);function o(u){return u.toLowerCase().replace(/[^a-záéíóúüñ0-9\s]/gi,"").split(/\s+/).filter(Boolean)}function i(u){const c={};return[...hr,...vh].forEach(p=>{const h=`${p.commonName??""} ${p.scientificName??""}`.toLowerCase();u.forEach(g=>{g.length>1&&h.includes(g)&&(c[p.id]={species:p,confidence:0,reason:`Coincidencia con '${g}'`})})}),Object.values(c)}async function l(u){if(!t)throw new Error("Modelo no cargado.");const c=await t.classify(u,5),d=c.flatMap(b=>o(b.className)).filter((b,m,y)=>y.indexOf(b)===m),p=i(d),h=pP(c.map(b=>b.className)),g=fP(h.id),v=[];return p.length>0&&p.forEach((b,m)=>{const y=c[m]||c[0];b.confidence=Math.round(((y==null?void 0:y.probability)??.5)*100),v.push(b)}),v.length===0&&g.slice(0,3).forEach((b,m)=>{var y;v.push({species:b,confidence:Math.round(((((y=c[m])==null?void 0:y.probability)??.5)-m*.05)*100),reason:`Ecosistema detectado: ${h.name}`})}),{results:v.slice(0,3),ecosystem:h,predictions:c.map(b=>({className:b.className,probability:b.probability}))}}return{classify:l,isModelLoading:n,modelError:s}}const Eg={LC:"bg-[#2D6A4F] text-white",NT:"bg-[#F4A261] text-black",VU:"bg-[#F4A261] text-black",EN:"bg-[#E63946] text-white",CR:"bg-[#8B0000] text-white"},mP={low:"bg-[#2D6A4F] text-white",medium:"bg-[#F4A261] text-black",high:"bg-[#E63946] text-white",critical:"bg-[#8B0000] text-white"};function zd({species:t,onClose:e,mode:n}){var o,i,l;const r=t.conservationStatus||"LC",s=t.isDangerous&&t.dangerLevel?t.dangerLevel:0,a=(o=t.encounterProtocol)==null?void 0:o[0];return N.jsxs("div",{className:"field-card max-w-3xl mx-auto text-textLight shadow-[0_24px_80px_rgba(0,0,0,0.18)]",children:[N.jsxs("div",{className:"flex items-start justify-between gap-4",children:[N.jsxs("div",{children:[N.jsx("h2",{className:"text-[22px] font-bold text-white",children:t.commonName}),N.jsx("p",{className:"mt-1 text-[14px] italic text-[#52B788]",children:t.scientificName})]}),N.jsx("div",{className:`rounded-full px-3 py-1 text-xs font-semibold ${Eg[r]||Eg.LC}`,children:r})]}),t.isDangerous&&a?N.jsxs("div",{className:"mt-4 rounded-2xl bg-[#641E16] p-4 text-white",children:[N.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]",children:[N.jsx(hv,{className:"h-4 w-4"}),"⚠️ PELIGROSO — Nivel ",s,"/5"]}),N.jsx("p",{className:"mt-3 font-semibold text-white",children:a.action}),N.jsx("p",{className:"mt-2 text-sm text-[#e0e8f0]/80",children:a.description}),N.jsx("span",{className:`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${mP[a.urgency||"high"]}`,children:(i=a.urgency)==null?void 0:i.toUpperCase()})]}):null,N.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-3",children:[N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsxs("div",{className:"flex items-center gap-2 text-[#52B788]",children:[N.jsx(RE,{className:"h-4 w-4"}),N.jsx("span",{className:"text-sm font-semibold",children:"Hábitat"})]}),N.jsx("p",{className:"mt-2 text-sm text-[#d1d5db]",children:t.habitat})]}),N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsxs("div",{className:"flex items-center gap-2 text-[#52B788]",children:[N.jsx(jE,{className:"h-4 w-4"}),N.jsx("span",{className:"text-sm font-semibold",children:"Alimentación"})]}),N.jsx("p",{className:"mt-2 text-sm text-[#d1d5db]",children:n==="fauna"?t.diet:t.edibleParts??"Ninguna"})]}),n==="flora"?N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsxs("div",{className:"flex items-center gap-2 text-[#52B788]",children:[N.jsx(Vo,{className:"h-4 w-4"}),N.jsx("span",{className:"text-sm font-semibold",children:"Información"})]}),N.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[t.isEdible?N.jsx("span",{className:"rounded-full bg-[#2D6A4F] px-3 py-1 text-xs font-semibold text-white",children:"Comestible"}):null,t.isToxic?N.jsx("span",{className:"rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white",children:"Tóxico"}):null]})]}):null]}),n==="fauna"?N.jsxs("div",{className:"mt-5 rounded-2xl bg-[#1f2744] p-4",children:[N.jsxs("div",{className:"flex items-center gap-2 text-[#52B788]",children:[N.jsx(ME,{className:"h-4 w-4"}),N.jsx("span",{className:"text-sm font-semibold",children:"Sonidos"})]}),N.jsx("div",{className:"mt-3 flex flex-wrap gap-3",children:(l=t.sounds)==null?void 0:l.map((u,c)=>N.jsx("button",{className:"rounded-2xl border border-[#52B788]/30 bg-[#16213E] px-3 py-2 text-sm text-[#d1d5db] transition hover:border-[#52B788]",children:u.label},c))})]}):null,N.jsxs("div",{className:"mt-5 rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("h3",{className:"text-sm font-semibold text-[#52B788]",children:"Descripción"}),N.jsx("p",{className:"mt-2 text-sm leading-6 text-[#cbd5e1]",children:t.description})]})]})}const gP={primary:"bg-[#2D6A4F] text-white hover:bg-[#52B788] focus:ring-[#52B788]/50",danger:"bg-[#E63946] text-white hover:bg-[#d62828] focus:ring-[#E63946]/50",secondary:"bg-[#16213E] border border-[#2D6A4F] text-[#52B788] hover:bg-[#1b2641] focus:ring-[#52B788]/40",ghost:"bg-transparent text-[#52B788] hover:bg-white/5 focus:ring-[#52B788]/40"},yP={sm:"px-3 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"};function Ia({variant:t="primary",size:e="md",icon:n,loading:r,disabled:s,children:a,...o}){return N.jsxs("button",{type:"button",disabled:s||r,className:`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out ${gP[t]} ${yP[e]} ${s||r?"cursor-not-allowed opacity-70":"hover:shadow-lg"}`,...o,children:[r?N.jsx("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"}):n,N.jsx("span",{children:a})]})}const fe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ce=Object.keys,Ye=Array.isArray;function rt(t,e){return typeof e!="object"||Ce(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||fe.Promise||(fe.Promise=Promise);const $o=Object.getPrototypeOf,vP={}.hasOwnProperty;function Nt(t,e){return vP.call(t,e)}function ia(t,e){typeof e=="function"&&(e=e($o(t))),(typeof Reflect>"u"?Ce:Reflect.ownKeys)(e).forEach(n=>{Tn(t,n,e[n])})}const g2=Object.defineProperty;function Tn(t,e,n,r){g2(t,e,rt(n&&Nt(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Us(t){return{from:function(e){return t.prototype=Object.create(e.prototype),Tn(t.prototype,"constructor",t),{extend:ia.bind(null,t.prototype)}}}}const bP=Object.getOwnPropertyDescriptor;function bh(t,e){let n;return bP(t,e)||(n=$o(t))&&bh(n,e)}const wP=[].slice;function Rl(t,e,n){return wP.call(t,e,n)}function y2(t,e){return e(t)}function La(t){if(!t)throw new Error("Assertion Failed")}function v2(t){fe.setImmediate?setImmediate(t):setTimeout(t,0)}function b2(t,e){return t.reduce((n,r,s)=>{var a=e(r,s);return a&&(n[a[0]]=a[1]),n},{})}function $n(t,e){if(typeof e=="string"&&Nt(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var a=$n(t,e[r]);n.push(a)}return n}var o=e.indexOf(".");if(o!==-1){var i=t[e.substr(0,o)];return i==null?void 0:$n(i,e.substr(o+1))}}function Ht(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){La(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)Ht(t,e[r],n[r])}else{var a=e.indexOf(".");if(a!==-1){var o=e.substr(0,a),i=e.substr(a+1);if(i==="")n===void 0?Ye(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Nt(t,o)||(l=t[o]={}),Ht(l,i,n)}}else n===void 0?Ye(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function w2(t){var e={};for(var n in t)Nt(t,n)&&(e[n]=t[n]);return e}const xP=[].concat;function x2(t){return xP.apply([],t)}const k2="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(x2([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>fe[t]),kP=k2.map(t=>fe[t]);b2(k2,t=>[t,!0]);let Kn=null;function Xo(t){Kn=typeof WeakMap<"u"&&new WeakMap;const e=Bd(t);return Kn=null,e}function Bd(t){if(!t||typeof t!="object")return t;let e=Kn&&Kn.get(t);if(e)return e;if(Ye(t)){e=[],Kn&&Kn.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Bd(t[n]))}else if(kP.indexOf(t.constructor)>=0)e=t;else{const a=$o(t);for(var s in e=a===Object.prototype?{}:Object.create(a),Kn&&Kn.set(t,e),t)Nt(t,s)&&(e[s]=Bd(t[s]))}return e}const{toString:NP}={};function Md(t){return NP.call(t).slice(8,-1)}const Vd=typeof Symbol<"u"?Symbol.iterator:"@@iterator",SP=typeof Vd=="symbol"?function(t){var e;return t!=null&&(e=t[Vd])&&e.apply(t)}:function(){return null},xs={};function wn(t){var e,n,r,s;if(arguments.length===1){if(Ye(t))return t.slice();if(this===xs&&typeof t=="string")return[t];if(s=SP(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const wh=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var cn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function N2(t,e){cn=t,S2=e}var S2=()=>!0;const _P=!new Error("").stack;function ps(){if(_P)try{throw ps.arguments,new Error}catch(t){return t}return new Error}function Ud(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(S2).map(r=>`
`+r).join("")):""}var _2=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],xh=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(_2),EP={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ks(t,e){this._e=ps(),this.name=t,this.message=e}function E2(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Ll(t,e,n,r){this._e=ps(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=E2(t,e)}function Qa(t,e){this._e=ps(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=E2(t,e)}Us(Ks).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Ud(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Us(Ll).from(Ks),Us(Qa).from(Ks);var kh=xh.reduce((t,e)=>(t[e]=e+"Error",t),{});const TP=Ks;var G=xh.reduce((t,e)=>{var n=e+"Error";function r(s,a){this._e=ps(),this.name=n,s?typeof s=="string"?(this.message=`${s}${a?`
 `+a:""}`,this.inner=a||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=EP[e]||n,this.inner=null)}return Us(r).from(TP),t[e]=r,t},{});G.Syntax=SyntaxError,G.Type=TypeError,G.Range=RangeError;var Tg=_2.reduce((t,e)=>(t[e+"Error"]=G[e],t),{}),Ui=xh.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=G[e]),t),{});function ie(){}function Io(t){return t}function $P(t,e){return t==null||t===Io?e:function(n){return e(t(n))}}function as(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function IP(t,e){return t===ie?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var a=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?as(r,this.onsuccess):r),s&&(this.onerror=this.onerror?as(s,this.onerror):s),a!==void 0?a:n}}function CP(t,e){return t===ie?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?as(n,this.onsuccess):n),r&&(this.onerror=this.onerror?as(r,this.onerror):r)}}function AP(t,e){return t===ie?e:function(n){var r=t.apply(this,arguments);rt(n,r);var s=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?as(s,this.onsuccess):s),a&&(this.onerror=this.onerror?as(a,this.onerror):a),r===void 0?o===void 0?void 0:o:rt(r,o)}}function OP(t,e){return t===ie?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function Nh(t,e){return t===ie?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,a=new Array(s);s--;)a[s]=arguments[s];return n.then(function(){return e.apply(r,a)})}return e.apply(this,arguments)}}Ui.ModifyError=Ll,Ui.DexieError=Ks,Ui.BulkError=Qa;var Co={};const T2=100,[Kd,Fl,Wd]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,$o(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,$o(e),t]})(),$2=Fl&&Fl.then,Ki=Kd&&Kd.constructor,Sh=!!Wd;var qd=!1,DP=Wd?()=>{Wd.then(bi)}:fe.setImmediate?setImmediate.bind(null,bi):fe.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{bi(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(bi,0)},Ya=function(t,e){Fa.push([t,e]),zl&&(DP(),zl=!1)},Hd=!0,zl=!0,Wr=[],Wi=[],Gd=null,Qd=Io,Ws={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Cg,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Cg(t[0],t[1])}catch{}})}},K=Ws,Fa=[],qr=0,qi=[];function z(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=ie,this._lib=!1;var e=this._PSD=K;if(cn&&(this._stackHolder=ps(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==Co)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Xd(this,this._value))}this._state=null,this._value=null,++e.ref,C2(this,t)}const Yd={get:function(){var t=K,e=Bl;function n(r,s){var a=!t.global&&(t!==K||e!==Bl);const o=a&&!jn();var i=new z((l,u)=>{_h(this,new I2(Ml(r,t,a,o),Ml(s,t,a,o),l,u,t))});return cn&&D2(i,this),i}return n.prototype=Co,n},set:function(t){Tn(this,"then",t&&t.prototype===Co?Yd:{get:function(){return t},set:Yd.set})}};function I2(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function C2(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&Jo();n&&typeof n.then=="function"?C2(t,(s,a)=>{n instanceof z?n._then(s,a):n.then(s,a)}):(t._state=!0,t._value=n,A2(t)),r&&Zo()}},Xd.bind(null,t))}catch(n){Xd(t,n)}}function Xd(t,e){if(Wi.push(e),t._state===null){var n=t._lib&&Jo();e=Qd(e),t._state=!1,t._value=e,cn&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,a){try{r.apply(null,a)}catch{}}(()=>{var r=bh(e,"stack");e._promise=t,Tn(e,"stack",{get:()=>qd?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Wr.some(s=>s._value===r._value)||Wr.push(r)}(t),A2(t),n&&Zo()}}function A2(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)_h(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),qr===0&&(++qr,Ya(()=>{--qr==0&&Eh()},[]))}function _h(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++qr,Ya(PP,[n,t,e])}else t._listeners.push(e)}function PP(t,e,n){try{Gd=e;var r,s=e._value;e._state?r=t(s):(Wi.length&&(Wi=[]),r=t(s),Wi.indexOf(s)===-1&&function(a){for(var o=Wr.length;o;)if(Wr[--o]._value===a._value)return void Wr.splice(o,1)}(e)),n.resolve(r)}catch(a){n.reject(a)}finally{Gd=null,--qr==0&&Eh(),--n.psd.ref||n.psd.finalize()}}function O2(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,a,o=t._value;o!=null?(s=o.name||"Error",a=o.message||o,r=Ud(o,0)):(s=o,a=""),e.push(s+(a?": "+a:"")+r)}return cn&&((r=Ud(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&O2(t._prev,e,n)),e}function D2(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function bi(){Jo()&&Zo()}function Jo(){var t=Hd;return Hd=!1,zl=!1,t}function Zo(){var t,e,n;do for(;Fa.length>0;)for(t=Fa,Fa=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(Fa.length>0);Hd=!0,zl=!0}function Eh(){var t=Wr;Wr=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=qi.slice(0),n=e.length;n;)e[--n]()}function wi(t){return new z(Co,!1,t)}function ye(t,e){var n=K;return function(){var r=Jo(),s=K;try{return gr(n,!0),t.apply(this,arguments)}catch(a){e&&e(a)}finally{gr(s,!1),r&&Zo()}}}ia(z.prototype,{then:Yd,_then:function(t,e){_h(this,new I2(null,null,t,e,K))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):wi(r)):this.then(null,r=>r&&r.name===e?n(r):wi(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),wi(e)))},stack:{get:function(){if(this._stack)return this._stack;try{qd=!0;var t=O2(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{qd=!1}}},timeout:function(t,e){return t<1/0?new z((n,r)=>{var s=setTimeout(()=>r(new G.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Tn(z.prototype,Symbol.toStringTag,"Dexie.Promise"),Ws.env=P2(),ia(z,{all:function(){var t=wn.apply(null,arguments).map(xi);return new z(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,a)=>z.resolve(s).then(o=>{t[a]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof z)return t;if(t&&typeof t.then=="function")return new z((n,r)=>{t.then(n,r)});var e=new z(Co,!0,t);return D2(e,Gd),e},reject:wi,race:function(){var t=wn.apply(null,arguments).map(xi);return new z((e,n)=>{t.map(r=>z.resolve(r).then(e,n))})},PSD:{get:()=>K,set:t=>K=t},totalEchoes:{get:()=>Bl},newPSD:mr,usePSD:ya,scheduler:{get:()=>Ya,set:t=>{Ya=t}},rejectionMapper:{get:()=>Qd,set:t=>{Qd=t}},follow:(t,e)=>new z((n,r)=>mr((s,a)=>{var o=K;o.unhandleds=[],o.onunhandled=a,o.finalize=as(function(){(function(i){function l(){i(),qi.splice(qi.indexOf(l),1)}qi.push(l),++qr,Ya(()=>{--qr==0&&Eh()},[])})(()=>{this.unhandleds.length===0?s():a(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Ki&&(Ki.allSettled&&Tn(z,"allSettled",function(){const t=wn.apply(null,arguments).map(xi);return new z(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,a)=>z.resolve(s).then(o=>r[a]={status:"fulfilled",value:o},o=>r[a]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Ki.any&&typeof AggregateError<"u"&&Tn(z,"any",function(){const t=wn.apply(null,arguments).map(xi);return new z((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((a,o)=>z.resolve(a).then(i=>e(i),i=>{s[o]=i,--r||n(new AggregateError(s))}))})}));const Qe={awaits:0,echoes:0,id:0};var jP=0,Hi=[],sc=0,Bl=0,RP=0;function mr(t,e,n,r){var s=K,a=Object.create(s);a.parent=s,a.ref=0,a.global=!1,a.id=++RP;var o=Ws.env;a.env=Sh?{Promise:z,PromiseProp:{value:z,configurable:!0,writable:!0},all:z.all,race:z.race,allSettled:z.allSettled,any:z.any,resolve:z.resolve,reject:z.reject,nthen:$g(o.nthen,a),gthen:$g(o.gthen,a)}:{},e&&rt(a,e),++s.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()};var i=ya(a,t,n,r);return a.ref===0&&a.finalize(),i}function ga(){return Qe.id||(Qe.id=++jP),++Qe.awaits,Qe.echoes+=T2,Qe.id}function jn(){return!!Qe.awaits&&(--Qe.awaits==0&&(Qe.id=0),Qe.echoes=Qe.awaits*T2,!0)}function xi(t){return Qe.echoes&&t&&t.constructor===Ki?(ga(),t.then(e=>(jn(),e),e=>(jn(),De(e)))):t}function LP(t){++Bl,Qe.echoes&&--Qe.echoes!=0||(Qe.echoes=Qe.id=0),Hi.push(K),gr(t,!0)}function FP(){var t=Hi[Hi.length-1];Hi.pop(),gr(t,!1)}function gr(t,e){var n=K;if((e?!Qe.echoes||sc++&&t===K:!sc||--sc&&t===K)||j2(e?LP.bind(null,t):FP),t!==K&&(K=t,n===Ws&&(Ws.env=P2()),Sh)){var r=Ws.env.Promise,s=t.env;Fl.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(fe,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function P2(){var t=fe.Promise;return Sh?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(fe,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:Fl.then,gthen:t.prototype.then}:{}}function ya(t,e,n,r,s){var a=K;try{return gr(t,!0),e(n,r,s)}finally{gr(a,!1)}}function j2(t){$2.call(Kd,t)}function Ml(t,e,n,r){return typeof t!="function"?t:function(){var s=K;n&&ga(),gr(e,!0);try{return t.apply(this,arguments)}finally{gr(s,!1),r&&j2(jn)}}}function $g(t,e){return function(n,r){return t.call(this,Ml(n,e),Ml(r,e))}}(""+$2).indexOf("[native code]")===-1&&(ga=jn=ie);const Ig="unhandledrejection";function Cg(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(fe.document&&document.createEvent?((r=document.createEvent("Event")).initEvent(Ig,!0,!0),rt(r,s)):fe.CustomEvent&&rt(r=new CustomEvent(Ig,{detail:s}),s),r&&fe.dispatchEvent&&(dispatchEvent(r),!fe.PromiseRejectionEvent&&fe.onunhandledrejection))try{fe.onunhandledrejection(r)}catch{}cn&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var De=z.reject;function Jd(t,e,n,r){if(t.idbdb&&(t._state.openComplete||K.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===kh.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Jd(t,e,n,r))):De(a)}return s._promise(e,(a,o)=>mr(()=>(K.trans=s,r(a,o,s)))).then(a=>s._completion.then(()=>a))}if(t._state.openComplete)return De(new G.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return De(new G.DatabaseClosed);t.open().catch(ie)}return t._state.dbReadyPromise.then(()=>Jd(t,e,n,r))}const Ag="3.2.7",Br="￿",Zd=-1/0,pn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",R2="String expected.",Xa=[],bu=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),zP=bu,BP=bu,L2=t=>!/(dexie\.js|dexie\.min\.js)/.test(t),wu="__dbnames",ac="readonly",oc="readwrite";function os(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const F2={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function ki(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Xo(e))[t],e)}class MP{_trans(e,n,r){const s=this._tx||K.trans,a=this.name;function o(l,u,c){if(!c.schema[a])throw new G.NotFound("Table "+a+" not part of transaction");return n(c.idbtrans,c)}const i=Jo();try{return s&&s.db===this.db?s===K.trans?s._promise(e,o,r):mr(()=>s._promise(e,o,r),{trans:s,transless:K.transless||K}):Jd(this.db,e,[this.name],o)}finally{i&&Zo()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(Ye(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=Ce(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(u=>{if(u.compound&&n.every(c=>u.keyPath.indexOf(c)>=0)){for(let c=0;c<n.length;++c)if(n.indexOf(u.keyPath[c])===-1)return!1;return!0}return!1}).sort((u,c)=>u.keyPath.length-c.keyPath.length)[0];if(r&&this.db._maxKey!==Br){const u=r.keyPath.slice(0,n.length);return this.where(u).equals(u.map(c=>e[c]))}!r&&cn&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,a=this.db._deps.indexedDB;function o(u,c){try{return a.cmp(u,c)===0}catch{return!1}}const[i,l]=n.reduce(([u,c],d)=>{const p=s[d],h=e[d];return[u||p,u||!p?os(c,p&&p.multi?g=>{const v=$n(g,d);return Ye(v)&&v.some(b=>o(h,b))}:g=>o(h,$n(g,d))):c]},[null,null]);return i?this.where(i.name).equals(e[i.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,Ye(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var a in r)if(Nt(r,a))try{s[a]=r[a]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){rt(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let a=e;return s&&r&&(a=ki(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[a]})).then(o=>o.numFailures?z.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Ht(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||Ye(e))return this.where(":id").equals(e).modify(n);{const r=$n(e,this.schema.primKey.keyPath);if(r===void 0)return De(new G.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?Ce(n).forEach(s=>{Ht(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let a=e;return s&&r&&(a=ki(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[a],keys:n!=null?[n]:null})).then(o=>o.numFailures?z.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{Ht(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?z.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:F2})).then(e=>e.numFailures?z.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,a=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:i,keyPath:l}=this.schema.primKey;if(l&&s)throw new G.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&i?e.map(ki(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:c,wantResults:a}).then(({numFailures:d,results:p,lastResult:h,failures:g})=>{if(d===0)return a?p:h;throw new Qa(`${this.name}.bulkAdd(): ${d} of ${u} operations failed`,g)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,a=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:i,keyPath:l}=this.schema.primKey;if(l&&s)throw new G.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");const u=e.length;let c=l&&i?e.map(ki(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:c,wantResults:a}).then(({numFailures:d,results:p,lastResult:h,failures:g})=>{if(d===0)return a?p:h;throw new Qa(`${this.name}.bulkPut(): ${d} of ${u} operations failed`,g)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:a})=>{if(r===0)return s;throw new Qa(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,a)})}}function Ja(t){var e={},n=function(o,i){if(i){for(var l=arguments.length,u=new Array(l-1);--l;)u[l-1]=arguments[l];return e[o].subscribe.apply(null,u),t}if(typeof o=="string")return e[o]};n.addEventType=a;for(var r=1,s=arguments.length;r<s;++r)a(arguments[r]);return n;function a(o,i,l){if(typeof o!="object"){var u;i||(i=OP),l||(l=ie);var c={subscribers:[],fire:l,subscribe:function(d){c.subscribers.indexOf(d)===-1&&(c.subscribers.push(d),c.fire=i(c.fire,d))},unsubscribe:function(d){c.subscribers=c.subscribers.filter(function(p){return p!==d}),c.fire=c.subscribers.reduce(i,l)}};return e[o]=n[o]=c,c}Ce(u=o).forEach(function(d){var p=u[d];if(Ye(p))a(d,u[d][0],u[d][1]);else{if(p!=="asap")throw new G.InvalidArgument("Invalid event config");var h=a(d,Io,function(){for(var g=arguments.length,v=new Array(g);g--;)v[g]=arguments[g];h.subscribers.forEach(function(b){v2(function(){b.apply(null,v)})})})}})}}function Ca(t,e){return Us(e).from({prototype:t}),e}function ms(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function ic(t,e){t.filter=os(t.filter,e)}function lc(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>os(r(),e()):e,t.justLimit=n&&!r}function Gi(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new G.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function Og(t,e,n){const r=Gi(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function Ni(t,e,n,r){const s=t.replayFilter?os(t.filter,t.replayFilter()):t.filter;if(t.or){const a={},o=(i,l,u)=>{if(!s||s(l,u,p=>l.stop(p),p=>l.fail(p))){var c=l.primaryKey,d=""+c;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(c)),Nt(a,d)||(a[d]=!0,e(i,l,u))}};return Promise.all([t.or._iterate(o,n),Dg(Og(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return Dg(Og(t,r,n),os(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function Dg(t,e,n,r){var s=ye(r?(a,o,i)=>n(r(a),o,i):n);return t.then(a=>{if(a)return a.start(()=>{var o=()=>a.continue();e&&!e(a,i=>o=i,i=>{a.stop(i),o=ie},i=>{a.fail(i),o=ie})||s(a.value,a,i=>o=i),o()})})}function et(t,e){try{const n=Pg(t),r=Pg(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,a){const o=s.length,i=a.length,l=o<i?o:i;for(let u=0;u<l;++u)if(s[u]!==a[u])return s[u]<a[u]?-1:1;return o===i?0:o<i?-1:1}(jg(t),jg(e));case"Array":return function(s,a){const o=s.length,i=a.length,l=o<i?o:i;for(let u=0;u<l;++u){const c=et(s[u],a[u]);if(c!==0)return c}return o===i?0:o<i?-1:1}(t,e)}}catch{}return NaN}function Pg(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Md(t);return n==="ArrayBuffer"?"binary":n}function jg(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class VP{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,De.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,De.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=os(n.algorithm,e)}_iterate(e,n){return Ni(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&rt(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>Ni(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(ms(r,!0))return s.count({trans:n,query:{index:Gi(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var a=0;return Ni(r,()=>(++a,!1),n,s).then(()=>a)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],a=r.length-1;function o(u,c){return c?o(u[r[c]],c-1):u[s]}var i=this._ctx.dir==="next"?1:-1;function l(u,c){var d=o(u,a),p=o(c,a);return d<p?-i:d>p?i:0}return this.toArray(function(u){return u.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&ms(r,!0)&&r.limit>0){const{valueMapper:s}=r,a=Gi(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:a,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return Ni(r,a=>s.push(a),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,ms(n)?lc(n,()=>{var r=e;return(s,a)=>r===0||(r===1?(--r,!1):(a(()=>{s.advance(r),r=0}),!1))}):lc(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),lc(this._ctx,()=>{var n=e;return function(r,s,a){return--n<=0&&s(a),n>=0}},!0),this}until(e,n){return ic(this._ctx,function(r,s,a){return!e(r.value)||(s(a),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return ic(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=os(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,a){r.push(a.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&ms(n,!0)&&n.limit>0)return this._read(s=>{var a=Gi(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:a,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,a){r.push(a.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return ic(this._ctx,function(s){var a=s.primaryKey.toString(),o=Nt(r,a);return r[a]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var a=Ce(e),o=a.length;s=function(v){for(var b=!1,m=0;m<o;++m){var y=a[m],x=e[y];$n(v,y)!==x&&(Ht(v,y,x),b=!0)}return b}}const i=n.table.core,{outbound:l,extractKey:u}=i.schema.primaryKey,c=this.db._options.modifyChunkSize||200,d=[];let p=0;const h=[],g=(v,b)=>{const{failures:m,numFailures:y}=b;p+=v-y;for(let x of Ce(m))d.push(m[x])};return this.clone().primaryKeys().then(v=>{const b=m=>{const y=Math.min(c,v.length-m);return i.getMany({trans:r,keys:v.slice(m,m+y),cache:"immutable"}).then(x=>{const k=[],E=[],$=l?[]:null,I=[];for(let A=0;A<y;++A){const P=x[A],j={value:Xo(P),primKey:v[m+A]};s.call(j,j.value,j)!==!1&&(j.value==null?I.push(v[m+A]):l||et(u(P),u(j.value))===0?(E.push(j.value),l&&$.push(v[m+A])):(I.push(v[m+A]),k.push(j.value)))}const C=ms(n)&&n.limit===1/0&&(typeof e!="function"||e===uc)&&{index:n.index,range:n.range};return Promise.resolve(k.length>0&&i.mutate({trans:r,type:"add",values:k}).then(A=>{for(let P in A.failures)I.splice(parseInt(P),1);g(k.length,A)})).then(()=>(E.length>0||C&&typeof e=="object")&&i.mutate({trans:r,type:"put",keys:$,values:E,criteria:C,changeSpec:typeof e!="function"&&e}).then(A=>g(E.length,A))).then(()=>(I.length>0||C&&e===uc)&&i.mutate({trans:r,type:"delete",keys:I,criteria:C}).then(A=>g(I.length,A))).then(()=>v.length>m+y&&b(m+c))})};return b(0).then(()=>{if(d.length>0)throw new Ll("Error modifying one or more objects",d,p,h);return v.length})})})}delete(){var e=this._ctx,n=e.range;return ms(e)&&(e.isPrimKey&&!BP||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,a=n;return e.table.core.count({trans:r,query:{index:s,range:a}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:a}).then(({failures:i,lastResult:l,results:u,numFailures:c})=>{if(c)throw new Ll("Could not delete some values",Object.keys(i).map(d=>i[d]),o-c);return o-c}))}):this.modify(uc)}}const uc=(t,e)=>e.value=null;function UP(t,e){return t<e?-1:t===e?0:1}function KP(t,e){return t>e?-1:t===e?0:1}function yt(t,e,n){var r=t instanceof B2?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function gs(t){return new t.Collection(t,()=>z2("")).limit(0)}function WP(t,e,n,r,s,a){for(var o=Math.min(t.length,r.length),i=-1,l=0;l<o;++l){var u=e[l];if(u!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):i>=0?t.substr(0,i)+e[i]+n.substr(i+1):null;s(t[l],u)<0&&(i=l)}return o<r.length&&a==="next"?t+n.substr(t.length):o<t.length&&a==="prev"?t.substr(0,n.length):i<0?null:t.substr(0,i)+r[i]+n.substr(i+1)}function Si(t,e,n,r){var s,a,o,i,l,u,c,d=n.length;if(!n.every(v=>typeof v=="string"))return yt(t,R2);function p(v){s=function(m){return m==="next"?y=>y.toUpperCase():y=>y.toLowerCase()}(v),a=function(m){return m==="next"?y=>y.toLowerCase():y=>y.toUpperCase()}(v),o=v==="next"?UP:KP;var b=n.map(function(m){return{lower:a(m),upper:s(m)}}).sort(function(m,y){return o(m.lower,y.lower)});i=b.map(function(m){return m.upper}),l=b.map(function(m){return m.lower}),u=v,c=v==="next"?"":r}p("next");var h=new t.Collection(t,()=>Mn(i[0],l[d-1]+r));h._ondirectionchange=function(v){p(v)};var g=0;return h._addAlgorithm(function(v,b,m){var y=v.key;if(typeof y!="string")return!1;var x=a(y);if(e(x,l,g))return!0;for(var k=null,E=g;E<d;++E){var $=WP(y,x,i[E],l[E],o,u);$===null&&k===null?g=E+1:(k===null||o(k,$)>0)&&(k=$)}return b(k!==null?function(){v.continue(k+c)}:m),!1}),h}function Mn(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function z2(t){return{type:1,lower:t,upper:t}}class B2{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?gs(this):new this.Collection(this,()=>Mn(e,n,!r,!s))}catch{return yt(this,pn)}}equals(e){return e==null?yt(this,pn):new this.Collection(this,()=>z2(e))}above(e){return e==null?yt(this,pn):new this.Collection(this,()=>Mn(e,void 0,!0))}aboveOrEqual(e){return e==null?yt(this,pn):new this.Collection(this,()=>Mn(e,void 0,!1))}below(e){return e==null?yt(this,pn):new this.Collection(this,()=>Mn(void 0,e,!1,!0))}belowOrEqual(e){return e==null?yt(this,pn):new this.Collection(this,()=>Mn(void 0,e))}startsWith(e){return typeof e!="string"?yt(this,R2):this.between(e,e+Br,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Si(this,(n,r)=>n.indexOf(r[0])===0,[e],Br)}equalsIgnoreCase(e){return Si(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=wn.apply(xs,arguments);return e.length===0?gs(this):Si(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=wn.apply(xs,arguments);return e.length===0?gs(this):Si(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Br)}anyOf(){const e=wn.apply(xs,arguments);let n=this._cmp;try{e.sort(n)}catch{return yt(this,pn)}if(e.length===0)return gs(this);const r=new this.Collection(this,()=>Mn(e[0],e[e.length-1]));r._ondirectionchange=a=>{n=a==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((a,o,i)=>{const l=a.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(i),!1;return n(l,e[s])===0||(o(()=>{a.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[Zd,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=wn.apply(xs,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return yt(this,pn)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[Zd,s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,a=this._descending,o=this._min,i=this._max;if(e.length===0)return gs(this);if(!e.every(y=>y[0]!==void 0&&y[1]!==void 0&&s(y[0],y[1])<=0))return yt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",G.InvalidArgument);const l=!n||n.includeLowers!==!1,u=n&&n.includeUppers===!0;let c,d=s;function p(y,x){return d(y[0],x[0])}try{c=e.reduce(function(y,x){let k=0,E=y.length;for(;k<E;++k){const $=y[k];if(r(x[0],$[1])<0&&r(x[1],$[0])>0){$[0]=o($[0],x[0]),$[1]=i($[1],x[1]);break}}return k===E&&y.push(x),y},[]),c.sort(p)}catch{return yt(this,pn)}let h=0;const g=u?y=>s(y,c[h][1])>0:y=>s(y,c[h][1])>=0,v=l?y=>a(y,c[h][0])>0:y=>a(y,c[h][0])>=0;let b=g;const m=new this.Collection(this,()=>Mn(c[0][0],c[c.length-1][1],!l,!u));return m._ondirectionchange=y=>{y==="next"?(b=g,d=s):(b=v,d=a),c.sort(p)},m._addAlgorithm((y,x,k)=>{for(var E=y.key;b(E);)if(++h,h===c.length)return x(k),!1;return!!function($){return!g($)&&!v($)}(E)||(this._cmp(E,c[h][1])===0||this._cmp(E,c[h][0])===0||x(()=>{d===s?y.continue(c[h][0]):y.continue(c[h][1])}),!1)}),m}startsWithAnyOf(){const e=wn.apply(xs,arguments);return e.every(n=>typeof n=="string")?e.length===0?gs(this):this.inAnyRange(e.map(n=>[n,n+Br])):yt(this,"startsWithAnyOf() only works with strings")}}function tn(t){return ye(function(e){return Ao(e),t(e.target.error),!1})}function Ao(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const Oo="storagemutated",Hn="x-storagemutated-1",yr=Ja(null,Oo);class qP{_lock(){return La(!K.global),++this._reculock,this._reculock!==1||K.global||(K.lockOwnerFor=this),this}_unlock(){if(La(!K.global),--this._reculock==0)for(K.global||(K.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{ya(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&K.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(La(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new G.DatabaseClosed(r);case"MissingAPIError":throw new G.MissingAPI(r.message,r);default:throw new G.OpenFailed(r)}if(!this.active)throw new G.TransactionInactive;return La(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=ye(s=>{Ao(s),this._reject(e.error)}),e.onabort=ye(s=>{Ao(s),this.active&&this._reject(new G.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=ye(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&yr.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return De(new G.ReadOnly("Transaction is readonly"));if(!this.active)return De(new G.TransactionInactive);if(this._locked())return new z((a,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(a,o)},K])});if(r)return mr(()=>{var a=new z((o,i)=>{this._lock();const l=n(o,i,this);l&&l.then&&l.then(o,i)});return a.finally(()=>this._unlock()),a._lib=!0,a});var s=new z((a,o)=>{var i=n(a,o,this);i&&i.then&&i.then(a,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=z.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var a=n._waitingFor;return new z((o,i)=>{r.then(l=>n._waitingQueue.push(ye(o.bind(null,l))),l=>n._waitingQueue.push(ye(i.bind(null,l)))).finally(()=>{n._waitingFor===a&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new G.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Nt(n,e))return n[e];const r=this.schema[e];if(!r)throw new G.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function ep(t,e,n,r,s,a,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:a,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+M2(e)}}function M2(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function V2(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:b2(n,r=>[r.name,r])}}let Do=t=>{try{return t.only([[]]),Do=()=>[[]],[[]]}catch{return Do=()=>Br,Br}};function tp(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?r=>r[e]:r=>$n(r,e)}(t):e=>$n(e,t)}function Rg(t){return[].slice.call(t)}let HP=0;function Za(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function GP(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:u,upper:c,lowerOpen:d,upperOpen:p}=l;return u===void 0?c===void 0?null:e.upperBound(c,!!p):c===void 0?e.lowerBound(u,!!d):e.bound(u,c,!!d,!!p)}const{schema:s,hasGetAll:a}=function(l,u){const c=Rg(l.objectStoreNames);return{schema:{name:l.name,tables:c.map(d=>u.objectStore(d)).map(d=>{const{keyPath:p,autoIncrement:h}=d,g=Ye(p),v=p==null,b={},m={name:d.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:v,compound:g,keyPath:p,autoIncrement:h,unique:!0,extractKey:tp(p)},indexes:Rg(d.indexNames).map(y=>d.index(y)).map(y=>{const{name:x,unique:k,multiEntry:E,keyPath:$}=y,I={name:x,compound:Ye($),keyPath:$,unique:k,multiEntry:E,extractKey:tp($)};return b[Za($)]=I,I}),getIndexByKeyPath:y=>b[Za(y)]};return b[":id"]=m.primaryKey,p!=null&&(b[Za(p)]=m.primaryKey),m})},hasGetAll:c.length>0&&"getAll"in u.objectStore(c[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(u){const c=u.name;return{name:c,schema:u,mutate:function({trans:d,type:p,keys:h,values:g,range:v}){return new Promise((b,m)=>{b=ye(b);const y=d.objectStore(c),x=y.keyPath==null,k=p==="put"||p==="add";if(!k&&p!=="delete"&&p!=="deleteRange")throw new Error("Invalid operation type: "+p);const{length:E}=h||g||{length:1};if(h&&g&&h.length!==g.length)throw new Error("Given keys array must have same length as given values array.");if(E===0)return b({numFailures:0,failures:{},results:[],lastResult:void 0});let $;const I=[],C=[];let A=0;const P=U=>{++A,Ao(U)};if(p==="deleteRange"){if(v.type===4)return b({numFailures:A,failures:C,results:[],lastResult:void 0});v.type===3?I.push($=y.clear()):I.push($=y.delete(r(v)))}else{const[U,W]=k?x?[g,h]:[g,null]:[h,null];if(k)for(let V=0;V<E;++V)I.push($=W&&W[V]!==void 0?y[p](U[V],W[V]):y[p](U[V])),$.onerror=P;else for(let V=0;V<E;++V)I.push($=y[p](U[V])),$.onerror=P}const j=U=>{const W=U.target.result;I.forEach((V,re)=>V.error!=null&&(C[re]=V.error)),b({numFailures:A,failures:C,results:p==="delete"?h:I.map(V=>V.result),lastResult:W})};$.onerror=U=>{P(U),j(U)},$.onsuccess=j})},getMany:({trans:d,keys:p})=>new Promise((h,g)=>{h=ye(h);const v=d.objectStore(c),b=p.length,m=new Array(b);let y,x=0,k=0;const E=I=>{const C=I.target;m[C._pos]=C.result,++k===x&&h(m)},$=tn(g);for(let I=0;I<b;++I)p[I]!=null&&(y=v.get(p[I]),y._pos=I,y.onsuccess=E,y.onerror=$,++x);x===0&&h(m)}),get:({trans:d,key:p})=>new Promise((h,g)=>{h=ye(h);const v=d.objectStore(c).get(p);v.onsuccess=b=>h(b.target.result),v.onerror=tn(g)}),query:function(d){return p=>new Promise((h,g)=>{h=ye(h);const{trans:v,values:b,limit:m,query:y}=p,x=m===1/0?void 0:m,{index:k,range:E}=y,$=v.objectStore(c),I=k.isPrimaryKey?$:$.index(k.name),C=r(E);if(m===0)return h({result:[]});if(d){const A=b?I.getAll(C,x):I.getAllKeys(C,x);A.onsuccess=P=>h({result:P.target.result}),A.onerror=tn(g)}else{let A=0;const P=b||!("openKeyCursor"in I)?I.openCursor(C):I.openKeyCursor(C),j=[];P.onsuccess=U=>{const W=P.result;return W?(j.push(b?W.value:W.primaryKey),++A===m?h({result:j}):void W.continue()):h({result:j})},P.onerror=tn(g)}})}(a),openCursor:function({trans:d,values:p,query:h,reverse:g,unique:v}){return new Promise((b,m)=>{b=ye(b);const{index:y,range:x}=h,k=d.objectStore(c),E=y.isPrimaryKey?k:k.index(y.name),$=g?v?"prevunique":"prev":v?"nextunique":"next",I=p||!("openKeyCursor"in E)?E.openCursor(r(x),$):E.openKeyCursor(r(x),$);I.onerror=tn(m),I.onsuccess=ye(C=>{const A=I.result;if(!A)return void b(null);A.___id=++HP,A.done=!1;const P=A.continue.bind(A);let j=A.continuePrimaryKey;j&&(j=j.bind(A));const U=A.advance.bind(A),W=()=>{throw new Error("Cursor not stopped")};A.trans=d,A.stop=A.continue=A.continuePrimaryKey=A.advance=()=>{throw new Error("Cursor not started")},A.fail=ye(m),A.next=function(){let V=1;return this.start(()=>V--?this.continue():this.stop()).then(()=>this)},A.start=V=>{const re=new Promise((ee,L)=>{ee=ye(ee),I.onerror=tn(L),A.fail=L,A.stop=M=>{A.stop=A.continue=A.continuePrimaryKey=A.advance=W,ee(M)}}),ce=()=>{if(I.result)try{V()}catch(ee){A.fail(ee)}else A.done=!0,A.start=()=>{throw new Error("Cursor behind last entry")},A.stop()};return I.onsuccess=ye(ee=>{I.onsuccess=ce,ce()}),A.continue=P,A.continuePrimaryKey=j,A.advance=U,ce(),re},b(A)},m)})},count({query:d,trans:p}){const{index:h,range:g}=d;return new Promise((v,b)=>{const m=p.objectStore(c),y=h.isPrimaryKey?m:m.index(h.name),x=r(g),k=x?y.count(x):y.count();k.onsuccess=ye(E=>v(E.target.result)),k.onerror=tn(b)})}}}(l)),i={};return o.forEach(l=>i[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!i[l])throw new Error(`Table '${l}' not found`);return i[l]},MIN_KEY:-1/0,MAX_KEY:Do(e),schema:s}}function np({_novip:t},e){const n=e.db,r=function(s,a,{IDBKeyRange:o,indexedDB:i},l){return{dbcore:function(c,d){return d.reduce((p,{create:h})=>({...p,...h(p)}),c)}(GP(a,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const a=s.name;t.core.schema.tables.some(o=>o.name===a)&&(s.core=t.core.table(a),t[a]instanceof t.Table&&(t[a].core=s.core))})}function Vl({_novip:t},e,n,r){n.forEach(s=>{const a=r[s];e.forEach(o=>{const i=bh(o,s);(!i||"value"in i&&i.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?Tn(o,s,{get(){return this.table(s)},set(l){g2(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,a))})})}function rp({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function QP(t,e){return t._cfg.version-e._cfg.version}function YP(t,e,n,r){const s=t._dbSchema,a=t._createTransaction("readwrite",t._storeNames,s);a.create(n),a._completion.catch(r);const o=a._reject.bind(a),i=K.transless||K;mr(()=>{K.trans=a,K.transless=i,e===0?(Ce(s).forEach(l=>{cc(n,l,s[l].primKey,s[l].indexes)}),np(t,n),z.follow(()=>t.on.populate.fire(a)).catch(o)):function({_novip:l},u,c,d){const p=[],h=l._versions;let g=l._dbSchema=ap(l,l.idbdb,d),v=!1;const b=h.filter(y=>y._cfg.version>=u);function m(){return p.length?z.resolve(p.shift()(c.idbtrans)).then(m):z.resolve()}return b.forEach(y=>{p.push(()=>{const x=g,k=y._cfg.dbschema;op(l,x,d),op(l,k,d),g=l._dbSchema=k;const E=U2(x,k);E.add.forEach(I=>{cc(d,I[0],I[1].primKey,I[1].indexes)}),E.change.forEach(I=>{if(I.recreate)throw new G.Upgrade("Not yet support for changing primary key");{const C=d.objectStore(I.name);I.add.forEach(A=>sp(C,A)),I.change.forEach(A=>{C.deleteIndex(A.name),sp(C,A)}),I.del.forEach(A=>C.deleteIndex(A))}});const $=y._cfg.contentUpgrade;if($&&y._cfg.version>u){np(l,d),c._memoizedTables={},v=!0;let I=w2(k);E.del.forEach(j=>{I[j]=x[j]}),rp(l,[l.Transaction.prototype]),Vl(l,[l.Transaction.prototype],Ce(I),I),c.schema=I;const C=wh($);let A;C&&ga();const P=z.follow(()=>{if(A=$(c),A&&C){var j=jn.bind(null,null);A.then(j,j)}});return A&&typeof A.then=="function"?z.resolve(A):P.then(()=>A)}}),p.push(x=>{(!v||!zP)&&function(k,E){[].slice.call(E.db.objectStoreNames).forEach($=>k[$]==null&&E.db.deleteObjectStore($))}(y._cfg.dbschema,x),rp(l,[l.Transaction.prototype]),Vl(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),c.schema=l._dbSchema})}),m().then(()=>{var y,x;x=d,Ce(y=g).forEach(k=>{x.db.objectStoreNames.contains(k)||cc(x,k,y[k].primKey,y[k].indexes)})})}(t,e,a,n).catch(o)})}function U2(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],a=e[r];if(s){const o={name:r,def:a,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(a.primKey.keyPath||"")||s.primKey.auto!==a.primKey.auto&&!bu)o.recreate=!0,n.change.push(o);else{const i=s.idxByName,l=a.idxByName;let u;for(u in i)l[u]||o.del.push(u);for(u in l){const c=i[u],d=l[u];c?c.src!==d.src&&o.change.push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,a])}return n}function cc(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(a=>sp(s,a)),s}function sp(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function ap(t,e,n){const r={};return Rl(e.objectStoreNames,0).forEach(s=>{const a=n.objectStore(s);let o=a.keyPath;const i=ep(M2(o),o||"",!1,!1,!!a.autoIncrement,o&&typeof o!="string",!0),l=[];for(let c=0;c<a.indexNames.length;++c){const d=a.index(a.indexNames[c]);o=d.keyPath;var u=ep(d.name,o,!!d.unique,!!d.multiEntry,!1,o&&typeof o!="string",!1);l.push(u)}r[s]=V2(s,i,l)}),r}function op({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const a=r[s],o=n.objectStore(a);t._hasGetAll="getAll"in o;for(let i=0;i<o.indexNames.length;++i){const l=o.indexNames[i],u=o.index(l).keyPath,c=typeof u=="string"?u:"["+Rl(u).join("+")+"]";if(e[a]){const d=e[a].idxByName[c];d&&(d.name=l,delete e[a].idxByName[c],e[a].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&fe.WorkerGlobalScope&&fe instanceof fe.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class XP{_parseStoresSpec(e,n){Ce(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,i)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),u=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return ep(l,u||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),Ye(u),i===0)}),a=s.shift();if(a.multi)throw new G.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new G.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new G.Schema("Index must have a name and cannot be an empty string")}),n[r]=V2(r,a,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?rt(this._cfg.storesSource,e):e;const r=n._versions,s={};let a={};return r.forEach(o=>{rt(s,o._cfg.storesSource),a=o._cfg.dbschema={},o._parseStoresSpec(s,a)}),n._dbSchema=a,rp(n,[n._allTables,n,n.Transaction.prototype]),Vl(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],Ce(a),a),n._storeNames=Ce(a),this}upgrade(e){return this._cfg.contentUpgrade=Nh(this._cfg.contentUpgrade||ie,e),this}}function Th(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Hr(wu,{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function $h(t){return t&&typeof t.databases=="function"}function ip(t){return mr(function(){return K.letThrough=!0,t()})}function JP(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function ZP(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?De(e.dbOpenError):t);cn&&(e.openCanceller._stackHolder=ps()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new G.DatabaseClosed("db.open() was cancelled")}let a=e.dbReadyResolve,o=null,i=!1;const l=()=>new z((u,c)=>{if(s(),!n)throw new G.MissingAPI;const d=t.name,p=e.autoSchema?n.open(d):n.open(d,Math.round(10*t.verno));if(!p)throw new G.MissingAPI;p.onerror=tn(c),p.onblocked=ye(t._fireOnBlocked),p.onupgradeneeded=ye(h=>{if(o=p.transaction,e.autoSchema&&!t._options.allowEmptyDB){p.onerror=Ao,o.abort(),p.result.close();const v=n.deleteDatabase(d);v.onsuccess=v.onerror=ye(()=>{c(new G.NoSuchDatabase(`Database ${d} doesnt exist`))})}else{o.onerror=tn(c);var g=h.oldVersion>Math.pow(2,62)?0:h.oldVersion;i=g<1,t._novip.idbdb=p.result,YP(t,g/10,o,c)}},c),p.onsuccess=ye(()=>{o=null;const h=t._novip.idbdb=p.result,g=Rl(h.objectStoreNames);if(g.length>0)try{const b=h.transaction((v=g).length===1?v[0]:v,"readonly");e.autoSchema?function({_novip:m},y,x){m.verno=y.version/10;const k=m._dbSchema=ap(0,y,x);m._storeNames=Rl(y.objectStoreNames,0),Vl(m,[m._allTables],Ce(k),k)}(t,h,b):(op(t,t._dbSchema,b),function(m,y){const x=U2(ap(0,m.idbdb,y),m._dbSchema);return!(x.add.length||x.change.some(k=>k.add.length||k.change.length))}(t,b)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),np(t,b)}catch{}var v;Xa.push(t),h.onversionchange=ye(b=>{e.vcFired=!0,t.on("versionchange").fire(b)}),h.onclose=ye(b=>{t.on("close").fire(b)}),i&&function({indexedDB:b,IDBKeyRange:m},y){!$h(b)&&y!==wu&&Th(b,m).put({name:y}).catch(ie)}(t._deps,d),u()},c)}).catch(u=>u&&u.name==="UnknownError"&&e.PR1398_maxLoop>0?(e.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),l()):z.reject(u));return z.race([r,(typeof navigator>"u"?z.resolve():JP()).then(l)]).then(()=>(s(),e.onReadyBeingFired=[],z.resolve(ip(()=>t.on.ready.fire(t.vip))).then(function u(){if(e.onReadyBeingFired.length>0){let c=e.onReadyBeingFired.reduce(Nh,ie);return e.onReadyBeingFired=[],z.resolve(ip(()=>c(t.vip))).then(u)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(u=>{e.dbOpenError=u;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),De(u)}).finally(()=>{e.openComplete=!0,a()})}function lp(t){var e=a=>t.next(a),n=s(e),r=s(a=>t.throw(a));function s(a){return o=>{var i=a(o),l=i.value;return i.done?l:l&&typeof l.then=="function"?l.then(n,r):Ye(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function ej(t,e,n){var r=arguments.length;if(r<2)throw new G.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];return n=s.pop(),[t,x2(s),n]}function K2(t,e,n,r,s){return z.resolve().then(()=>{const a=K.transless||K,o=t._createTransaction(e,n,t._dbSchema,r),i={trans:o,transless:a};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===kh.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>K2(t,e,n,null,s))):De(d)}const l=wh(s);let u;l&&ga();const c=z.follow(()=>{if(u=s.call(o,o),u)if(l){var d=jn.bind(null,null);u.then(d,d)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=lp(u))},i);return(u&&typeof u.then=="function"?z.resolve(u).then(d=>o.active?d:De(new G.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(d=>(r&&o._resolve(),o._completion.then(()=>d))).catch(d=>(o._reject(d),De(d)))})}function _i(t,e,n){const r=Ye(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const tj={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},a=[];function o(c,d,p){const h=Za(c),g=s[h]=s[h]||[],v=c==null?0:typeof c=="string"?1:c.length,b=d>0,m={...p,isVirtual:b,keyTail:d,keyLength:v,extractKey:tp(c),unique:!b&&p.unique};return g.push(m),m.isPrimaryKey||a.push(m),v>1&&o(v===2?c[0]:c.slice(0,v-1),d+1,p),g.sort((y,x)=>y.keyTail-x.keyTail),m}const i=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[i];for(const c of r.indexes)o(c.keyPath,0,c);function l(c){const d=c.query.index;return d.isVirtual?{...c,query:{index:d,range:(p=c.query.range,h=d.keyTail,{type:p.type===1?2:p.type,lower:_i(p.lower,p.lowerOpen?t.MAX_KEY:t.MIN_KEY,h),lowerOpen:!0,upper:_i(p.upper,p.upperOpen?t.MIN_KEY:t.MAX_KEY,h),upperOpen:!0})}}:c;var p,h}return{...n,schema:{...r,primaryKey:i,indexes:a,getIndexByKeyPath:function(c){const d=s[Za(c)];return d&&d[0]}},count:c=>n.count(l(c)),query:c=>n.query(l(c)),openCursor(c){const{keyTail:d,isVirtual:p,keyLength:h}=c.query.index;return p?n.openCursor(l(c)).then(g=>g&&function(v){return Object.create(v,{continue:{value:function(m){m!=null?v.continue(_i(m,c.reverse?t.MAX_KEY:t.MIN_KEY,d)):c.unique?v.continue(v.key.slice(0,h).concat(c.reverse?t.MIN_KEY:t.MAX_KEY,d)):v.continue()}},continuePrimaryKey:{value(m,y){v.continuePrimaryKey(_i(m,t.MAX_KEY,d),y)}},primaryKey:{get:()=>v.primaryKey},key:{get(){const m=v.key;return h===1?m[0]:m.slice(0,h)}},value:{get:()=>v.value}})}(g)):n.openCursor(c)}}}}}};function Ih(t,e,n,r){return n=n||{},r=r||"",Ce(t).forEach(s=>{if(Nt(e,s)){var a=t[s],o=e[s];if(typeof a=="object"&&typeof o=="object"&&a&&o){const i=Md(a);i!==Md(o)?n[r+s]=e[s]:i==="Object"?Ih(a,o,n,r+s+"."):a!==o&&(n[r+s]=e[s])}else a!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),Ce(e).forEach(s=>{Nt(t,s)||(n[r+s]=e[s])}),n}const nj={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(a){const o=K.trans,{deleting:i,creating:l,updating:u}=o.table(e).hook;switch(a.type){case"add":if(l.fire===ie)break;return o._promise("readwrite",()=>c(a),!0);case"put":if(l.fire===ie&&u.fire===ie)break;return o._promise("readwrite",()=>c(a),!0);case"delete":if(i.fire===ie)break;return o._promise("readwrite",()=>c(a),!0);case"deleteRange":if(i.fire===ie)break;return o._promise("readwrite",()=>function(p){return d(p.trans,p.range,1e4)}(a),!0)}return n.mutate(a);function c(p){const h=K.trans,g=p.keys||function(v,b){return b.type==="delete"?b.keys:b.keys||b.values.map(v.extractKey)}(r,p);if(!g)throw new Error("Keys missing");return(p=p.type==="add"||p.type==="put"?{...p,keys:g}:{...p}).type!=="delete"&&(p.values=[...p.values]),p.keys&&(p.keys=[...p.keys]),function(v,b,m){return b.type==="add"?Promise.resolve([]):v.getMany({trans:b.trans,keys:m,cache:"immutable"})}(n,p,g).then(v=>{const b=g.map((m,y)=>{const x=v[y],k={onerror:null,onsuccess:null};if(p.type==="delete")i.fire.call(k,m,x,h);else if(p.type==="add"||x===void 0){const E=l.fire.call(k,m,p.values[y],h);m==null&&E!=null&&(m=E,p.keys[y]=m,r.outbound||Ht(p.values[y],r.keyPath,m))}else{const E=Ih(x,p.values[y]),$=u.fire.call(k,E,m,x,h);if($){const I=p.values[y];Object.keys($).forEach(C=>{Nt(I,C)?I[C]=$[C]:Ht(I,C,$[C])})}}return k});return n.mutate(p).then(({failures:m,results:y,numFailures:x,lastResult:k})=>{for(let E=0;E<g.length;++E){const $=y?y[E]:g[E],I=b[E];$==null?I.onerror&&I.onerror(m[E]):I.onsuccess&&I.onsuccess(p.type==="put"&&v[E]?p.values[E]:$)}return{failures:m,results:y,numFailures:x,lastResult:k}}).catch(m=>(b.forEach(y=>y.onerror&&y.onerror(m)),Promise.reject(m)))})}function d(p,h,g){return n.query({trans:p,values:!1,query:{index:r,range:h},limit:g}).then(({result:v})=>c({type:"delete",keys:v,trans:p}).then(b=>b.numFailures>0?Promise.reject(b.failures[0]):v.length<g?{failures:[],numFailures:0,lastResult:void 0}:d(p,{...h,lower:v[v.length-1],lowerOpen:!0},g)))}}}}})};function W2(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,a=0;s<e.keys.length&&a<t.length;++s)et(e.keys[s],t[a])===0&&(r.push(n?Xo(e.values[s]):e.values[s]),++a);return r.length===t.length?r:null}catch{return null}}const rj={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=W2(r.keys,r.trans._cache,r.cache==="clone");return s?z.resolve(s):n.getMany(r).then(a=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Xo(a):a},a))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Ch(t){return!("from"in t)}const vn=function(t,e){if(!this){const n=new vn;return t&&"d"in t&&rt(n,t),n}rt(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function Po(t,e,n){const r=et(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Ch(t))return rt(t,{from:e,to:n,d:1});const s=t.l,a=t.r;if(et(n,t.from)<0)return s?Po(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},Lg(t);if(et(e,t.to)>0)return a?Po(a,e,n):t.r={from:e,to:n,d:1,l:null,r:null},Lg(t);et(e,t.from)<0&&(t.from=e,t.l=null,t.d=a?a.d+1:1),et(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&Ul(t,s),a&&o&&Ul(t,a)}function Ul(t,e){Ch(e)||function n(r,{from:s,to:a,l:o,r:i}){Po(r,s,a),o&&n(r,o),i&&n(r,i)}(t,e)}function sj(t,e){const n=up(e);let r=n.next();if(r.done)return!1;let s=r.value;const a=up(t);let o=a.next(s.from),i=o.value;for(;!r.done&&!o.done;){if(et(i.from,s.to)<=0&&et(i.to,s.from)>=0)return!0;et(s.from,i.from)<0?s=(r=n.next(i.from)).value:i=(o=a.next(s.from)).value}return!1}function up(t){let e=Ch(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&et(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||et(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function Lg(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const a=s==="r"?"l":"r",o={...t},i=t[s];t.from=i.from,t.to=i.to,t[s]=i[s],o[s]=i[a],t[a]=o,o.d=Fg(o)}t.d=Fg(t)}function Fg({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}ia(vn.prototype,{add(t){return Ul(this,t),this},addKey(t){return Po(this,t,t),this},addKeys(t){return t.forEach(e=>Po(this,e,e)),this},[Vd](){return up(this)}});const aj={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new vn(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:a}=s,{primaryKey:o}=a,{extractKey:i,outbound:l}=o,u={...s,mutate:p=>{const h=p.trans,g=h.mutatedParts||(h.mutatedParts={}),v=$=>{const I=`idb://${e}/${r}/${$}`;return g[I]||(g[I]=new vn)},b=v(""),m=v(":dels"),{type:y}=p;let[x,k]=p.type==="deleteRange"?[p.range]:p.type==="delete"?[p.keys]:p.values.length<50?[[],p.values]:[];const E=p.trans._cache;return s.mutate(p).then($=>{if(Ye(x)){y!=="delete"&&(x=$.results),b.addKeys(x);const I=W2(x,E);I||y==="add"||m.addKeys(x),(I||k)&&function(C,A,P,j){function U(W){const V=C(W.name||"");function re(ee){return ee!=null?W.extractKey(ee):null}const ce=ee=>W.multiEntry&&Ye(ee)?ee.forEach(L=>V.addKey(L)):V.addKey(ee);(P||j).forEach((ee,L)=>{const M=P&&re(P[L]),Q=j&&re(j[L]);et(M,Q)!==0&&(M!=null&&ce(M),Q!=null&&ce(Q))})}A.indexes.forEach(U)}(v,a,I,k)}else if(x){const I={from:x.lower,to:x.upper};m.add(I),b.add(I)}else b.add(n),m.add(n),a.indexes.forEach(I=>v(I.name).add(n));return $})}},c=({query:{index:p,range:h}})=>{var g,v;return[p,new vn((g=h.lower)!==null&&g!==void 0?g:t.MIN_KEY,(v=h.upper)!==null&&v!==void 0?v:t.MAX_KEY)]},d={get:p=>[o,new vn(p.key)],getMany:p=>[o,new vn().addKeys(p.keys)],count:c,query:c,openCursor:c};return Ce(d).forEach(p=>{u[p]=function(h){const{subscr:g}=K;if(g){const v=k=>{const E=`idb://${e}/${r}/${k}`;return g[E]||(g[E]=new vn)},b=v(""),m=v(":dels"),[y,x]=d[p](h);if(v(y.name||"").add(x),!y.isPrimaryKey){if(p!=="count"){const k=p==="query"&&l&&h.values&&s.query({...h,values:!1});return s[p].apply(this,arguments).then(E=>{if(p==="query"){if(l&&h.values)return k.then(({result:I})=>(b.addKeys(I),E));const $=h.values?E.result.map(i):E.result;h.values?b.addKeys($):m.addKeys($)}else if(p==="openCursor"){const $=E,I=h.values;return $&&Object.create($,{key:{get:()=>(m.addKey($.primaryKey),$.key)},primaryKey:{get(){const C=$.primaryKey;return m.addKey(C),C}},value:{get:()=>(I&&b.addKey($.primaryKey),$.value)}})}return E})}m.add(n)}}return s[p].apply(this,arguments)}}),u}}}};class Hr{constructor(e,n){this._middlewares={},this.verno=0;const r=Hr.dependencies;this._options=n={addons:Hr.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const a={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ie,dbReadyPromise:null,cancelOpen:ie,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;a.dbReadyPromise=new z(i=>{a.dbReadyResolve=i}),a.openCanceller=new z((i,l)=>{a.cancelOpen=l}),this._state=a,this.name=e,this.on=Ja(this,"populate","blocked","versionchange","close",{ready:[Nh,ie]}),this.on.ready.subscribe=y2(this.on.ready.subscribe,i=>(l,u)=>{Hr.vip(()=>{const c=this._state;if(c.openComplete)c.dbOpenError||z.resolve().then(l),u&&i(l);else if(c.onReadyBeingFired)c.onReadyBeingFired.push(l),u&&i(l);else{i(l);const d=this;u||i(function p(){d.on.ready.unsubscribe(l),d.on.ready.unsubscribe(p)})}})}),this.Collection=(o=this,Ca(VP.prototype,function(i,l){this.db=o;let u=F2,c=null;if(l)try{u=l()}catch(g){c=g}const d=i._ctx,p=d.table,h=p.hook.reading.fire;this._ctx={table:p,index:d.index,isPrimKey:!d.index||p.schema.primKey.keyPath&&d.index===p.schema.primKey.name,range:u,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:c,or:d.or,valueMapper:h!==Io?h:null}})),this.Table=function(i){return Ca(MP.prototype,function(l,u,c){this.db=i,this._tx=c,this.name=l,this.schema=u,this.hook=i._allTables[l]?i._allTables[l].hook:Ja(null,{creating:[IP,ie],reading:[$P,Io],updating:[AP,ie],deleting:[CP,ie]})})}(this),this.Transaction=function(i){return Ca(qP.prototype,function(l,u,c,d,p){this.db=i,this.mode=l,this.storeNames=u,this.schema=c,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=Ja(this,"complete","error","abort"),this.parent=p||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new z((h,g)=>{this._resolve=h,this._reject=g}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},h=>{var g=this.active;return this.active=!1,this.on.error.fire(h),this.parent?this.parent._reject(h):g&&this.idbtrans&&this.idbtrans.abort(),De(h)})})}(this),this.Version=function(i){return Ca(XP.prototype,function(l){this.db=i,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(i){return Ca(B2.prototype,function(l,u,c){this.db=i,this._ctx={table:l,index:u===":id"?null:u,or:c};const d=i._deps.indexedDB;if(!d)throw new G.MissingAPI;this._cmp=this._ascending=d.cmp.bind(d),this._descending=(p,h)=>d.cmp(h,p),this._max=(p,h)=>d.cmp(p,h)>0?p:h,this._min=(p,h)=>d.cmp(p,h)<0?p:h,this._IDBKeyRange=i._deps.IDBKeyRange})}(this),this.on("versionchange",i=>{i.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",i=>{!i.newVersion||i.newVersion<i.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${i.oldVersion/10}`)}),this._maxKey=Do(n.IDBKeyRange),this._createTransaction=(i,l,u,c)=>new this.Transaction(i,l,u,this._options.chromeTransactionDurability,c),this._fireOnBlocked=i=>{this.on("blocked").fire(i),Xa.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(i))},this.use(tj),this.use(nj),this.use(aj),this.use(rj),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(i=>i(this))}version(e){if(isNaN(e)||e<.1)throw new G.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new G.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(QP),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||K.letThrough||this._vip)?e():new z((n,r)=>{if(this._state.openComplete)return r(new G.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new G.DatabaseClosed);this.open().catch(ie)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const a=this._middlewares[e]||(this._middlewares[e]=[]);return a.push({stack:e,create:n,level:r??10,name:s}),a.sort((o,i)=>o.level-i.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return ZP(this)}_close(){const e=this._state,n=Xa.indexOf(this);if(n>=0&&Xa.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new z(r=>{e.dbReadyResolve=r}),e.openCanceller=new z((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new G.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new z((r,s)=>{const a=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=ye(()=>{(function({indexedDB:i,IDBKeyRange:l},u){!$h(i)&&u!==wu&&Th(i,l).delete(u).catch(ie)})(this._deps,this.name),r()}),o.onerror=tn(s),o.onblocked=this._fireOnBlocked};if(e)throw new G.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(a):a()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return Ce(this._allTables).map(e=>this._allTables[e])}transaction(){const e=ej.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=K.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const a=e.indexOf("?")!==-1;let o,i;e=e.replace("!","").replace("?","");try{if(i=n.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return c}),e=="r"||e===ac)o=ac;else{if(e!="rw"&&e!=oc)throw new G.InvalidArgument("Invalid transaction mode: "+e);o=oc}if(s){if(s.mode===ac&&o===oc){if(!a)throw new G.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&i.forEach(u=>{if(s&&s.storeNames.indexOf(u)===-1){if(!a)throw new G.SubTransaction("Table "+u+" not included in parent transaction.");s=null}}),a&&s&&!s.active&&(s=null)}}catch(u){return s?s._promise(null,(c,d)=>{d(u)}):De(u)}const l=K2.bind(null,this,o,i,s,r);return s?s._promise(o,l,"lock"):K.trans?ya(K.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Nt(this._allTables,e))throw new G.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const oj=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class ij{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[oj](){return this}}function q2(t,e){return Ce(e).forEach(n=>{Ul(t[n]||(t[n]=new vn),e[n])}),t}function lj(t){let e,n=!1;const r=new ij(s=>{const a=wh(t);let o=!1,i={},l={};const u={get closed(){return o},unsubscribe:()=>{o=!0,yr.storagemutated.unsubscribe(h)}};s.start&&s.start(u);let c=!1,d=!1;function p(){return Ce(l).some(v=>i[v]&&sj(i[v],l[v]))}const h=v=>{q2(i,v),p()&&g()},g=()=>{if(c||o)return;i={};const v={},b=function(m){a&&ga();const y=()=>mr(t,{subscr:m,trans:null}),x=K.trans?ya(K.transless,y):y();return a&&x.then(jn,jn),x}(v);d||(yr(Oo,h),d=!0),c=!0,Promise.resolve(b).then(m=>{n=!0,e=m,c=!1,o||(p()?g():(i={},l=v,s.next&&s.next(m)))},m=>{c=!1,n=!1,s.error&&s.error(m),u.unsubscribe()})};return g(),u});return r.hasValue=()=>n,r.getValue=()=>e,r}let cp;try{cp={indexedDB:fe.indexedDB||fe.mozIndexedDB||fe.webkitIndexedDB||fe.msIndexedDB,IDBKeyRange:fe.IDBKeyRange||fe.webkitIDBKeyRange}}catch{cp={indexedDB:null,IDBKeyRange:null}}const Cr=Hr;function Qi(t){let e=Nn;try{Nn=!0,yr.storagemutated.fire(t)}finally{Nn=e}}ia(Cr,{...Ui,delete:t=>new Cr(t,{addons:[]}).delete(),exists:t=>new Cr(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return $h(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!==wu)):Th(e,n).toCollection().primaryKeys()}(Cr.dependencies).then(t)}catch{return De(new G.MissingAPI)}},defineClass:()=>function(t){rt(this,t)},ignoreTransaction:t=>K.trans?ya(K.transless,t):t(),vip:ip,async:function(t){return function(){try{var e=lp(t.apply(this,arguments));return e&&typeof e.then=="function"?e:z.resolve(e)}catch(n){return De(n)}}},spawn:function(t,e,n){try{var r=lp(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:z.resolve(r)}catch(s){return De(s)}},currentTransaction:{get:()=>K.trans||null},waitFor:function(t,e){const n=z.resolve(typeof t=="function"?Cr.ignoreTransaction(t):t).timeout(e||6e4);return K.trans?K.trans.waitFor(n):n},Promise:z,debug:{get:()=>cn,set:t=>{N2(t,t==="dexie"?()=>!0:L2)}},derive:Us,extend:rt,props:ia,override:y2,Events:Ja,on:yr,liveQuery:lj,extendObservabilitySet:q2,getByKeyPath:$n,setByKeyPath:Ht,delByKeyPath:function(t,e){typeof e=="string"?Ht(t,e,void 0):"length"in e&&[].map.call(e,function(n){Ht(t,n,void 0)})},shallowClone:w2,deepClone:Xo,getObjectDiff:Ih,cmp:et,asap:v2,minKey:Zd,addons:[],connections:Xa,errnames:kh,dependencies:cp,semVer:Ag,version:Ag.split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),Cr.maxKey=Do(Cr.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(yr(Oo,t=>{if(!Nn){let e;bu?(e=document.createEvent("CustomEvent"),e.initCustomEvent(Hn,!0,!0,t)):e=new CustomEvent(Hn,{detail:t}),Nn=!0,dispatchEvent(e),Nn=!1}}),addEventListener(Hn,({detail:t})=>{Nn||Qi(t)}));let Nn=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel(Hn);typeof t.unref=="function"&&t.unref(),yr(Oo,e=>{Nn||t.postMessage(e)}),t.onmessage=e=>{e.data&&Qi(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){yr(Oo,e=>{try{Nn||(typeof localStorage<"u"&&localStorage.setItem(Hn,JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:Hn,changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key===Hn){const n=JSON.parse(e.newValue);n&&Qi(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type===Hn&&Qi(e.changedParts)})}z.rejectionMapper=function(t,e){if(!t||t instanceof Ks||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Tg[t.name])return t;var n=new Tg[t.name](e||t.message,t);return"stack"in t&&Tn(n,"stack",{get:function(){return this.inner.stack}}),n},N2(cn,L2);class uj extends Hr{constructor(){super("WildLensDB");Nu(this,"species");Nu(this,"journalEntries");this.version(1).stores({species:"id, commonName, scientificName, category, region",journalEntries:"id, speciesId, date"})}}const cj=new uj,dj=[{id:"ecoscan",label:"🌄 EcoScan",icon:LE},{id:"flora",label:"🌿 FloraID",icon:Vo},{id:"fauna",label:"🦎 FaunaID",icon:gv}];function pj(){var Q,me,Ee,Tr,Xt,fs,Jt,$r,Ah,Oh,Dh,Ph,jh,Rh,Lh,Fh,zh;const[t,e]=D.useState("ecoscan"),[n,r]=D.useState(null),[s,a]=D.useState(null),[o,i]=D.useState(null),[l,u]=D.useState(!1),[c,d]=D.useState(null),p=D.useRef(null),{videoRef:h,startCamera:g,stopCamera:v,capturePhoto:b,hasPermission:m,error:y,isLoading:x}=HE(),{classify:k,isModelLoading:E,modelError:$}=hP();D.useEffect(()=>(g(),()=>v()),[]),D.useEffect(()=>{!s||E||$||(u(!0),d(null),k(s).then(q=>i(q)).catch(()=>i(null)).finally(()=>u(!1)))},[s,t,E,$]);const I=vh.slice(0,3),C=hr.slice(0,3);async function A(){try{const{image:q,base64:dn}=await b();r(dn),a(q)}catch(q){console.error(q)}}function P(q){var xu;const dn=(xu=q.target.files)==null?void 0:xu[0];if(!dn)return;const Fn=new FileReader;Fn.onload=()=>{const Bh=Fn.result,ku=new Image;ku.src=Bh,ku.onload=()=>{r(Bh),a(ku)}},Fn.readAsDataURL(dn)}function j(){r(null),a(null),i(null),d(null)}async function U(){var dn,Fn;const q=(Fn=(dn=o==null?void 0:o.results)==null?void 0:dn[0])==null?void 0:Fn.species;if(!q){d("No hay especie para guardar.");return}try{await cj.journalEntries.add({id:`journal_${Date.now()}`,speciesId:q.id,date:new Date().toISOString()}),d("Guardado en diario")}catch{d("No se pudo guardar en diario.")}}const W=(Q=o==null?void 0:o.results)==null?void 0:Q.find(q=>["tree","plant","bush"].includes(q.species.category)),V=(me=o==null?void 0:o.results)==null?void 0:me.find(q=>["mammal","bird","reptile","amphibian","insect"].includes(q.species.category)),re=((Ee=o==null?void 0:o.results)==null?void 0:Ee.filter(q=>q!==W&&["tree","plant","bush"].includes(q.species.category)).slice(0,2))??[],ce=((Tr=o==null?void 0:o.results)==null?void 0:Tr.filter(q=>q!==V&&["mammal","bird","reptile","amphibian","insect"].includes(q.species.category)).slice(0,2))??[],ee=W??{species:I[0],confidence:0},L=V??{species:C[0],confidence:0},M=(Xt=o==null?void 0:o.ecosystem)!=null&&Xt.typicalSpecies?o.ecosystem.typicalSpecies.map(q=>cP(q)).filter(Boolean):[];return N.jsxs("div",{className:"min-h-screen bg-background px-4 pb-32 pt-6 text-textLight",children:[N.jsx("div",{className:"mb-6 rounded-[28px] border border-[#2D6A4F]/50 bg-[#16213E]/80 p-4 shadow-[0_32px_80px_rgba(0,0,0,0.28)]",children:N.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[N.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-3xl bg-[#2D6A4F]/20 text-[#52B788]",children:N.jsx(Vo,{className:"h-8 w-8"})}),N.jsxs("div",{children:[N.jsx("h1",{className:"text-2xl font-bold text-[#52B788]",children:"WildLens Identify"}),N.jsx("p",{className:"mt-1 text-sm italic text-[#E8F5E9]/85",children:"Usa la cámara para reconocer ecosistemas y especies con IA."})]})]})}),N.jsx("div",{className:"mb-6 flex flex-wrap gap-2 rounded-full bg-[#16213E] p-1 border border-[#2D6A4F]",children:dj.map(q=>{const dn=t===q.id,Fn=q.icon;return N.jsxs("button",{onClick:()=>e(q.id),className:`flex min-w-[110px] items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${dn?"bg-[#52B788]/15 text-[#52B788]":"text-[#94a3b8] hover:bg-white/5"}`,children:[N.jsx(Fn,{className:"h-5 w-5"}),q.label]},q.id)})}),N.jsxs("section",{className:"field-card mb-6",children:[N.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-3",children:[N.jsxs("div",{children:[N.jsx("h2",{className:"text-xl font-semibold text-white",children:"Captura tu foto"}),N.jsx("p",{className:"text-sm text-[#94a3b8]",children:"Selecciona cámara o sube una imagen para comenzar la identificación."})]}),N.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[N.jsx(Ia,{variant:"secondary",size:"sm",icon:N.jsx(BE,{className:"h-4 w-4"}),onClick:()=>{var q;return(q=p.current)==null?void 0:q.click()},children:"Subir foto"}),N.jsx(Ia,{variant:"primary",size:"sm",icon:N.jsx(of,{className:"h-4 w-4"}),onClick:A,disabled:x||!m,children:"Tomar foto"}),n?N.jsx(Ia,{variant:"ghost",size:"sm",icon:N.jsx(FE,{className:"h-4 w-4"}),onClick:j,children:"Nueva foto"}):null]})]}),N.jsx("input",{ref:p,type:"file",accept:"image/*",className:"hidden",onChange:P}),N.jsx("div",{className:"relative overflow-hidden rounded-[24px] border border-[#2D6A4F] bg-[#0f172a] p-3",children:n?N.jsx("img",{src:n,alt:"Preview",className:"h-full w-full rounded-[20px] object-cover"}):N.jsxs("div",{className:"relative overflow-hidden rounded-[20px] border border-[#2D6A4F]/70 bg-[#0b1224] p-2",children:[N.jsx("video",{ref:h,className:"h-72 w-full rounded-[20px] bg-black object-cover",muted:!0,playsInline:!0}),!m&&!x?N.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/60 text-center text-sm text-[#cbd5e1]",children:N.jsxs("div",{children:[N.jsx("p",{children:"Permite el uso de cámara para ver el visor."}),N.jsx(Ia,{variant:"secondary",size:"sm",onClick:g,children:"Iniciar cámara"})]})}):null,x?N.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/70 text-white",children:"Cargando cámara..."}):null]})}),y||$?N.jsx("div",{className:"mt-3 rounded-2xl bg-[#941b0c] p-3 text-sm text-white",children:y||$}):null]}),E?N.jsx("div",{className:"field-card flex items-center justify-center p-10 text-sm text-[#94a3b8]",children:N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-t-[#52B788] border-white"}),"Cargando modelo de IA..."]})}):l?N.jsx("div",{className:"field-card flex items-center justify-center p-10 text-sm text-[#94a3b8]",children:N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"h-6 w-6 animate-spin rounded-full border-2 border-t-[#52B788] border-white"}),"Analizando imagen..."]})}):n&&o?N.jsxs("section",{className:"space-y-6",children:[t==="ecoscan"?N.jsxs("div",{className:"field-card",children:[N.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[N.jsxs("div",{children:[N.jsx("div",{className:"inline-flex items-center gap-2 rounded-full bg-[#2D6A4F]/15 px-3 py-1 text-xs text-[#52B788]",children:"Ecosistema detectado"}),N.jsx("h3",{className:"mt-4 text-2xl font-bold text-white",children:((fs=o.ecosystem)==null?void 0:fs.name)??"Selva tropical"}),N.jsx("p",{className:"mt-2 max-w-2xl text-sm text-[#cbd5e1]",children:(Jt=o.ecosystem)==null?void 0:Jt.description})]}),N.jsxs("div",{className:"rounded-3xl bg-[#0f172a] px-4 py-3 text-sm text-[#94a3b8]",children:["Zona: ",($r=o.ecosystem)==null?void 0:$r.zone]})]}),N.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2",children:[N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("h4",{className:"text-sm font-semibold text-[#52B788]",children:"Posibles especies en esta zona"}),N.jsx("div",{className:"mt-4 space-y-3",children:(M.length?M:C).slice(0,4).map(q=>N.jsxs("div",{className:"flex items-center justify-between rounded-2xl bg-[#16213E] p-3",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2D6A4F]/20 text-[#52B788]",children:"•"}),N.jsxs("div",{children:[N.jsx("p",{className:"font-semibold text-white",children:q.commonName}),N.jsx("p",{className:"text-xs text-[#94a3b8]",children:q.scientificName})]})]}),q.isDangerous?N.jsxs("span",{className:"rounded-full bg-[#E63946]/10 px-2 py-1 text-[11px] font-semibold text-[#E63946]",children:["Peligro ",q.dangerLevel,"/5"]}):null]},q.id))})]}),N.jsxs("div",{className:"space-y-4",children:[N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("h4",{className:"text-sm font-semibold text-[#52B788]",children:"Riesgos detectados"}),N.jsx("ul",{className:"mt-3 list-disc space-y-2 pl-5 text-sm text-[#cbd5e1]",children:(((Ah=o.ecosystem)==null?void 0:Ah.risks)??["Riesgos no disponibles"]).map(q=>N.jsx("li",{children:q},q))})]}),N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("h4",{className:"text-sm font-semibold text-[#52B788]",children:"Curiosidades"}),N.jsx("p",{className:"mt-3 text-sm text-[#cbd5e1]",children:((Dh=(Oh=o.ecosystem)==null?void 0:Oh.curiosities)==null?void 0:Dh[0])??"Información cultural local disponible."})]}),(jh=(Ph=o.ecosystem)==null?void 0:Ph.migratory)!=null&&jh.length?N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("h4",{className:"text-sm font-semibold text-[#52B788]",children:"Especies migratorias"}),N.jsx("p",{className:"mt-3 text-sm text-[#cbd5e1]",children:o.ecosystem.migratory.join(", ")})]}):null]})]})]}):null,t==="flora"?N.jsxs("div",{className:"space-y-6",children:[N.jsxs("div",{className:"field-card",children:[N.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white",children:ee.species.commonName}),N.jsx("p",{className:"mt-1 text-sm italic text-[#52B788]",children:ee.species.scientificName}),N.jsxs("p",{className:"mt-2 text-sm text-[#cbd5e1]",children:["Confianza: ",ee.confidence,"%"]})]}),N.jsxs("div",{className:"flex flex-wrap gap-2",children:[ee.species.isEdible?N.jsx("span",{className:"rounded-full bg-[#2D6A4F] px-3 py-1 text-xs font-semibold text-white",children:"COMESTIBLE"}):null,ee.species.isToxic?N.jsx("span",{className:"rounded-full bg-[#E63946] px-3 py-1 text-xs font-semibold text-white",children:"⚠️ TÓXICO"}):null]})]}),N.jsx(zd,{species:ee.species,mode:"flora"})]}),N.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:(re.length?re:I.slice(1,3)).map(q=>N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("p",{className:"text-sm font-semibold text-white",children:q.species.commonName}),N.jsx("p",{className:"mt-2 text-xs text-[#94a3b8]",children:q.species.scientificName}),N.jsx("p",{className:"mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]",children:q.reason})]},q.species.id))})]}):null,t==="fauna"?N.jsxs("div",{className:"space-y-6",children:[L.species.isDangerous?N.jsxs("div",{className:"rounded-2xl bg-[#641E16] p-4 text-white",children:[N.jsxs("div",{className:"flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em]",children:[N.jsx(hv,{className:"h-4 w-4"})," PELIGROSO — Nivel ",L.species.dangerLevel,"/5"]}),N.jsx("p",{className:"mt-3 text-sm text-[#f8eaea]",children:(Lh=(Rh=L.species.encounterProtocol)==null?void 0:Rh[0])==null?void 0:Lh.action}),N.jsx("p",{className:"mt-2 text-sm text-[#f8eaea]/90",children:(zh=(Fh=L.species.encounterProtocol)==null?void 0:Fh[0])==null?void 0:zh.description})]}):null,N.jsxs("div",{className:"field-card",children:[N.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white",children:L.species.commonName}),N.jsx("p",{className:"mt-1 text-sm italic text-[#52B788]",children:L.species.scientificName}),N.jsxs("p",{className:"mt-2 text-sm text-[#cbd5e1]",children:["Confianza: ",L.confidence,"%"]})]})}),N.jsx(zd,{species:L.species,mode:"fauna"})]}),N.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:(ce.length?ce:C.slice(1,3)).map(q=>N.jsxs("div",{className:"rounded-2xl bg-[#1f2744] p-4",children:[N.jsx("p",{className:"text-sm font-semibold text-white",children:q.species.commonName}),N.jsx("p",{className:"mt-2 text-xs text-[#94a3b8]",children:q.species.scientificName}),N.jsx("p",{className:"mt-3 text-[11px] uppercase tracking-[0.2em] text-[#52B788]",children:q.reason})]},q.species.id))})]}):null,N.jsx("div",{className:"rounded-2xl bg-[#0f172a] p-4 text-sm text-[#94a3b8]",children:"⚠️ Identificación asistida por IA. Verifica con expertos locales."}),N.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[N.jsx(Ia,{variant:"primary",size:"md",onClick:U,children:"Guardar en diario"}),c?N.jsx("p",{className:"text-sm text-[#94a3b8]",children:c}):null]})]}):null]})}function fj({frequencyData:t,isRecording:e}){const n=Array.from({length:32},(r,s)=>{const a=t?t[Math.floor(t.length/32*s)]:0,o=Math.max(2,Math.min(100,a/255*100));return{value:a,height:o}});return N.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-4",children:[N.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-textLight/70",children:"BioListen"}),N.jsx("p",{className:"text-base text-textLight",children:"Visualizador de espectro"})]}),N.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-semibold ${e?"bg-red-500/15 text-red-300":"bg-green-500/10 text-emerald-300"}`,children:e?"Grabando":"Listo"})]}),N.jsx("div",{className:"flex h-24 items-end gap-1 overflow-hidden rounded-2xl bg-black/5 px-1 py-2",children:n.map((r,s)=>N.jsx("div",{className:"h-full w-full rounded-full bg-gradient-to-t from-emerald-500/80 to-cyan-400",style:{height:`${r.height}%`,opacity:r.value?1:.4}},s))})]})}function hj(t){let e=0,n=0;for(let r=0;r<t.length;r+=1)t[r]>e&&(e=t[r],n=r);return n}function H2(t){if(!t.length)return 0;let e=0;for(let n=0;n<t.length;n+=1)e+=t[n];return e/t.length}function mj(t){const e=Math.floor(t.length*.25);let n=0,r=0;for(let s=0;s<t.length;s+=1)r+=t[s],s>=e&&(n+=t[s]);return r?n/r:0}function gj(t){const e=[];let n=H2(t);for(let r=1;r<t.length;r+=1)t[r]>n*1.2&&t[r-1]<=n*1.2&&e.push(r);return e.length/Math.max(1,t.length/50)}function dc(t){const e=[];for(const n of t){const r=hr.find(s=>{var a,o;return((a=s.commonName)==null?void 0:a.toLowerCase().includes(n.toLowerCase()))||((o=s.scientificName)==null?void 0:o.toLowerCase().includes(n.toLowerCase()))});r&&!e.includes(r)&&e.push(r)}return e}function zg(t,e=3){return hr.filter(r=>r.category===t).slice(0,e)}function yj(){return{analyzeAudio:D.useCallback((e,n)=>{const r=hj(e),s=H2(e),a=mj(e),o=gj(e),i=[],l=dc(["guacamaya","tucán","flamenco","pavo"]),u=dc(["jaguar","tapir","coati","pecari"]),c=dc(["cocodrilo","nauyaca","iguana"]);if(a>.25&&o>.5)l.slice(0,3).forEach((d,p)=>{i.push({species:d,confidence:Math.max(30,Math.round(75-p*12-s*.05)),reasoning:`Alta presencia de frecuencias agudas y patrón rítmico sugiere aves como ${d.commonName}.`})});else if(s>120&&r<e.length*.2)u.slice(0,3).forEach((d,p)=>{i.push({species:d,confidence:Math.max(35,Math.round(70-p*10+(s-120)*.2)),reasoning:`Baja frecuencia y gran amplitud indican posibles mamíferos grandes como ${d.commonName}.`})});else if(a>.55&&o<.4){const d=hr.find(p=>{var h,g;return((h=p.commonName)==null?void 0:h.toLowerCase().includes("ig"))||((g=p.scientificName)==null?void 0:g.toLowerCase().includes("ig"))});d&&i.push({species:d,confidence:55,reasoning:"Frecuencias muy altas y cambios rápidos sugieren animales más pequeños o reptiles de alta tonalidad."}),zg("reptile",2).forEach((p,h)=>{i.push({species:p,confidence:Math.max(30,50-h*8),reasoning:`Frecuencia media y cambios rápidos pueden corresponder a ${p.commonName}.`})})}else[...l,...c].slice(0,3).forEach((p,h)=>{i.push({species:p,confidence:Math.max(25,Math.round(60-h*10)),reasoning:`Patrón sonoro de frecuencia media sugiere ${p.commonName}.`})});return i.length<3&&zg("bird",3).forEach(d=>{i.some(p=>p.species.id===d.id)||i.push({species:d,confidence:35,reasoning:"Si no hay coincidencias claras, se sugiere un ave común de Campeche."})}),i.slice(0,3)},[])}}function vj(){const t=D.useRef(null),e=D.useRef([]),n=D.useRef(null),r=D.useRef(null),s=D.useRef(null),a=D.useRef(null),o=D.useRef(null),[i,l]=D.useState(!1),[u,c]=D.useState(!1),[d,p]=D.useState(null),[h,g]=D.useState(null),[v,b]=D.useState(0),[m,y]=D.useState(null),[x,k]=D.useState(null),E=D.useRef(0),$=10,I=D.useRef(null);D.useEffect(()=>()=>{P()},[]);function C(){const j=r.current,U=s.current;j&&U&&(j.getByteFrequencyData(U),y(new Uint8Array(U)),a.current=requestAnimationFrame(C))}async function A(){k(null),p(null),g(null),b(0),E.current=0,y(null);try{const j=await navigator.mediaDevices.getUserMedia({audio:!0});o.current=j,l(!0),e.current=[];const U=new MediaRecorder(j);t.current=U,n.current=new(window.AudioContext||window.webkitAudioContext);const W=n.current.createMediaStreamSource(j);r.current=n.current.createAnalyser(),r.current.fftSize=2048,W.connect(r.current),s.current=new Uint8Array(r.current.frequencyBinCount),C(),U.ondataavailable=V=>{V.data.size>0&&e.current.push(V.data)},U.onstop=async()=>{const V=new Blob(e.current,{type:"audio/webm"});p(V);const re=new FileReader;re.onloadend=()=>{g(re.result)},re.readAsDataURL(V)},U.start(),c(!0),I.current=window.setInterval(()=>{E.current+=1,b(E.current),E.current>=$&&P()},1e3)}catch(j){k((j==null?void 0:j.message)||"Permiso de micrófono denegado o no disponible."),l(!1)}}function P(){t.current&&t.current.state!=="inactive"&&t.current.stop(),o.current&&(o.current.getTracks().forEach(j=>j.stop()),o.current=null),n.current&&(n.current.close().catch(()=>{}),n.current=null),a.current&&(cancelAnimationFrame(a.current),a.current=null),I.current&&(window.clearInterval(I.current),I.current=null),c(!1)}return{startRecording:A,stopRecording:P,isRecording:u,audioBlob:d,audioBase64:h,audioDuration:v,frequencyData:m,hasPermission:i,error:x}}function bj(){const{startRecording:t,stopRecording:e,isRecording:n,audioDuration:r,frequencyData:s,audioBlob:a,hasPermission:o,error:i}=vj(),{analyzeAudio:l}=yj(),[u,c]=D.useState(null),[d,p]=D.useState(!1),[h,g]=D.useState(null),v=!!(a&&s&&!n),b=D.useMemo(()=>a?r===0?"Grabación lista":`Duración: ${r}s`:"Sin grabación",[a,r]),m=async()=>{s&&(p(!0),window.setTimeout(()=>{const x=l(s,r);c(x),p(!1)},500))},y=()=>{c(null),g(null),e()};return N.jsxs("div",{className:"min-h-screen p-4",children:[N.jsxs("div",{className:"mx-auto max-w-4xl space-y-6",children:[N.jsx("div",{className:"rounded-[2rem] border border-border bg-surface p-6 shadow-[0_28px_120px_rgba(0,0,0,0.22)]",children:N.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm uppercase tracking-[0.4em] text-accent/70",children:"BioListen"}),N.jsx("h2",{className:"mt-2 text-3xl font-bold text-white",children:"Detecta animales por su sonido"}),N.jsx("p",{className:"mt-3 max-w-2xl text-textLight/80",children:"Graba hasta 10 segundos de audio en el campo y deja que WildLens ofrezca posibles especies con base en patrones de frecuencia y ritmo."})]}),N.jsxs("div",{className:"rounded-3xl bg-[#111827] p-4 text-right sm:text-left",children:[N.jsx("p",{className:"text-sm text-textLight/70",children:"Estado"}),N.jsx("p",{className:"mt-1 text-xl font-semibold text-white",children:n?"Grabando":a?"Listo para analizar":"Esperando grabación"}),N.jsx("p",{className:"mt-2 text-sm text-textLight/80",children:b})]})]})}),N.jsx(fj,{frequencyData:s,isRecording:n}),N.jsxs("div",{className:"grid gap-4 lg:grid-cols-[1.4fr_0.9fr]",children:[N.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-6",children:[N.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-xl font-bold text-white",children:"Grabación de campo"}),N.jsx("p",{className:"mt-2 text-textLight/80",children:"Usa el micrófono de tu dispositivo para capturar sonidos de fauna y analizar su firma acústica."})]}),N.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[N.jsx("button",{className:`rounded-3xl px-5 py-3 text-sm font-semibold transition ${n?"bg-red-500 text-white hover:bg-red-400":"bg-emerald-500 text-black hover:bg-emerald-400"}`,onClick:n?e:t,children:n?"Detener":"Iniciar grabación"}),N.jsx("button",{className:"rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-white/20",onClick:y,children:"Reiniciar"})]})]}),N.jsxs("div",{className:"mt-6 grid gap-4 sm:grid-cols-2",children:[N.jsxs("div",{className:"rounded-3xl bg-[#111827] p-4",children:[N.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-textLight/70",children:"Permiso"}),N.jsx("p",{className:"mt-2 text-lg font-semibold text-white",children:o?"Concedido":"No solicitado"})]}),N.jsxs("div",{className:"rounded-3xl bg-[#111827] p-4",children:[N.jsx("p",{className:"text-sm uppercase tracking-[0.2em] text-textLight/70",children:"Último resultado"}),N.jsx("p",{className:"mt-2 text-lg font-semibold text-white",children:u!=null&&u.length?`${u.length} sugerencias`:"Aún no analizado"})]})]}),N.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[N.jsx("button",{className:"rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50",onClick:m,disabled:!v||d,children:d?"Analizando…":"Analizar grabación"}),i?N.jsx("span",{className:"text-sm text-rose-300",children:i}):null]})]}),N.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-6",children:[N.jsx("h3",{className:"text-xl font-bold text-white",children:"Consejos rápidos"}),N.jsxs("ul",{className:"mt-4 space-y-3 text-textLight/80",children:[N.jsx("li",{children:"• Mantén el micrófono estable y apunta hacia la fuente del sonido."}),N.jsx("li",{children:"• Graba en intervalos cortos para capturar solo la llamada animal."}),N.jsx("li",{children:"• Usa el botón de análisis después de detener la grabación."})]})]})]}),u?N.jsxs("div",{className:"rounded-3xl border border-border bg-surface p-6",children:[N.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white",children:"Resultados sugeridos"}),N.jsx("p",{className:"mt-2 text-textLight/80",children:"WildLens propone especies según el perfil de audio grabado."})]}),N.jsx("span",{className:"rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200",children:"Confianza aproximada"})]}),N.jsx("div",{className:"mt-6 grid gap-4 lg:grid-cols-3",children:u.map(x=>N.jsxs("button",{type:"button",onClick:()=>g(x.species),className:"rounded-3xl border border-white/10 bg-[#0f172a] p-5 text-left transition hover:border-cyan-400/30",children:[N.jsxs("div",{className:"flex items-center justify-between gap-3",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-lg font-semibold text-white",children:x.species.commonName}),N.jsx("p",{className:"mt-1 text-sm text-textLight/70",children:x.species.scientificName})]}),N.jsxs("span",{className:"rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-textLight",children:[x.confidence,"%"]})]}),N.jsx("p",{className:"mt-4 text-sm leading-6 text-textLight/70",children:x.reasoning})]},x.species.id))})]}):null]}),h?N.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:N.jsxs("div",{className:"relative w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1220] p-6 shadow-2xl",children:[N.jsx("button",{className:"absolute right-5 top-5 rounded-full bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10",onClick:()=>g(null),children:"Cerrar"}),N.jsx(zd,{species:h,mode:"fauna"})]})}):null]})}function wj(){return N.jsxs("div",{className:"min-h-screen p-4",children:[N.jsx("h2",{className:"text-2xl text-accent",children:"Journal"}),N.jsx("p",{className:"text-textLight/80 mt-2",children:"Field journal entries will appear here."})]})}function xj(){return N.jsxs("div",{className:"min-h-screen p-4",children:[N.jsx("h2",{className:"text-2xl text-accent",children:"Settings"}),N.jsx("p",{className:"text-textLight/80 mt-2",children:"Offline sync and device preferences."})]})}function kj(){return N.jsxs("div",{className:"min-h-screen bg-background text-textLight",children:[N.jsxs(gE,{children:[N.jsx(ys,{path:"/",element:N.jsx(qE,{})}),N.jsx(ys,{path:"/identify",element:N.jsx(pj,{})}),N.jsx(ys,{path:"/listen",element:N.jsx(bj,{})}),N.jsx(ys,{path:"/journal",element:N.jsx(wj,{})}),N.jsx(ys,{path:"/settings",element:N.jsx(xj,{})})]}),N.jsx(yv,{})]})}Z0(document.getElementById("root")).render(N.jsx(Yg.StrictMode,{children:N.jsx(SE,{children:N.jsx(kj,{})})}));
