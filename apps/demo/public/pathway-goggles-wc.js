(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function o0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tg={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),a0=Symbol.for("react.portal"),l0=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),c0=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),d0=Symbol.for("react.context"),h0=Symbol.for("react.forward_ref"),p0=Symbol.for("react.suspense"),m0=Symbol.for("react.memo"),g0=Symbol.for("react.lazy"),Jd=Symbol.iterator;function _0(t){return t===null||typeof t!="object"?null:(t=Jd&&t[Jd]||t["@@iterator"],typeof t=="function"?t:null)}var ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,rg={};function no(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||ng}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sg(){}sg.prototype=no.prototype;function Wf(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||ng}var Xf=Wf.prototype=new sg;Xf.constructor=Wf;ig(Xf,no.prototype);Xf.isPureReactComponent=!0;var eh=Array.isArray,og=Object.prototype.hasOwnProperty,jf={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)og.call(e,i)&&!ag.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:s,ref:o,props:r,_owner:jf.current}}function v0(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function x0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var th=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x0(""+t.key):e.toString(36)}function fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case a0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,eh(r)?(n="",t!=null&&(n=t.replace(th,"$&/")+"/"),fl(r,e,n,"",function(u){return u})):r!=null&&(Yf(r)&&(r=v0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(th,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",eh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=fl(s,e,n,l,r)}else if(l=_0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(t,e,n){if(t==null)return t;var i=[],r=0;return fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function y0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},dl={transition:null},S0={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:dl,ReactCurrentOwner:jf};function ug(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!Yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=no;Qe.Fragment=l0;Qe.Profiler=c0;Qe.PureComponent=Wf;Qe.StrictMode=u0;Qe.Suspense=p0;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;Qe.act=ug;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ig({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)og.call(e,l)&&!ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:d0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:f0,_context:t},t.Consumer=t};Qe.createElement=lg;Qe.createFactory=function(t){var e=lg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:h0,render:t}};Qe.isValidElement=Yf;Qe.lazy=function(t){return{$$typeof:g0,_payload:{_status:-1,_result:t},_init:y0}};Qe.memo=function(t,e){return{$$typeof:m0,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};Qe.unstable_act=ug;Qe.useCallback=function(t,e){return on.current.useCallback(t,e)};Qe.useContext=function(t){return on.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return on.current.useEffect(t,e)};Qe.useId=function(){return on.current.useId()};Qe.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return on.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Qe.useRef=function(t){return on.current.useRef(t)};Qe.useState=function(t){return on.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return on.current.useTransition()};Qe.version="18.3.1";tg.exports=Qe;var Ye=tg.exports;const _r=o0(Ye);var cg={exports:{}},Cn={},fg={exports:{}},dg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,$){var Z=N.length;N.push($);e:for(;0<Z;){var ae=Z-1>>>1,Ce=N[ae];if(0<r(Ce,$))N[ae]=$,N[Z]=Ce,Z=ae;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var $=N[0],Z=N.pop();if(Z!==$){N[0]=Z;e:for(var ae=0,Ce=N.length,Xe=Ce>>>1;ae<Xe;){var X=2*(ae+1)-1,re=N[X],me=X+1,de=N[me];if(0>r(re,Z))me<Ce&&0>r(de,re)?(N[ae]=de,N[me]=Z,ae=me):(N[ae]=re,N[X]=Z,ae=X);else if(me<Ce&&0>r(de,Z))N[ae]=de,N[me]=Z,ae=me;else break e}}return $}function r(N,$){var Z=N.sortIndex-$.sortIndex;return Z!==0?Z:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=N)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function S(N){if(x=!1,_(N),!g)if(n(l)!==null)g=!0,j(R);else{var $=n(u);$!==null&&K(S,$.startTime-N)}}function R(N,$){g=!1,x&&(x=!1,c(L),L=-1),p=!0;var Z=h;try{for(_($),d=n(l);d!==null&&(!(d.expirationTime>$)||N&&!D());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var Ce=ae(d.expirationTime<=$);$=t.unstable_now(),typeof Ce=="function"?d.callback=Ce:d===n(l)&&i(l),_($)}else i(l);d=n(l)}if(d!==null)var Xe=!0;else{var X=n(u);X!==null&&K(S,X.startTime-$),Xe=!1}return Xe}finally{d=null,h=Z,p=!1}}var T=!1,w=null,L=-1,C=5,M=-1;function D(){return!(t.unstable_now()-M<C)}function z(){if(w!==null){var N=t.unstable_now();M=N;var $=!0;try{$=w(!0,N)}finally{$?H():(T=!1,w=null)}}else T=!1}var H;if(typeof v=="function")H=function(){v(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=z,H=function(){q.postMessage(null)}}else H=function(){m(z,0)};function j(N){w=N,T||(T=!0,H())}function K(N,$){L=m(function(){N(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Z=h;h=$;try{return N()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=h;h=N;try{return $()}finally{h=Z}},t.unstable_scheduleCallback=function(N,$,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,N){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Z+Ce,N={id:f++,callback:$,priorityLevel:N,startTime:Z,expirationTime:Ce,sortIndex:-1},Z>ae?(N.sortIndex=Z,e(u,N),n(l)===null&&N===n(u)&&(x?(c(L),L=-1):x=!0,K(S,Z-ae))):(N.sortIndex=Ce,e(l,N),g||p||(g=!0,j(R))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var $=h;return function(){var Z=h;h=$;try{return N.apply(this,arguments)}finally{h=Z}}}})(dg);fg.exports=dg;var M0=fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=Ye,An=M0;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hg=new Set,Bo={};function Zr(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Bo[t]=e,t=0;t<e.length;t++)hg.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,w0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nh={},ih={};function T0(t){return zc.call(ih,t)?!0:zc.call(nh,t)?!1:w0.test(t)?ih[t]=!0:(nh[t]=!0,!1)}function A0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C0(t,e,n,i){if(e===null||typeof e>"u"||A0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var $f=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($f,qf);Xt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($f,qf);Xt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($f,qf);Xt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C0(e,n,r,i)&&(n=null),i||r===null?T0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Zf=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),rh=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,bu;function So(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+t}var Lu=!1;function Du(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function R0(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case kc:return"Profiler";case Zf:return"StrictMode";case Bc:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mg:return(t.displayName||"Context")+".Consumer";case pg:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jf:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function P0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===Zf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b0(t){var e=_g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=b0(t))}function vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gc(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xg(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function Wc(t,e){xg(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xc(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xc(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Mo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function yg(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,Mg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){L0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function wg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Eg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var D0=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(D0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,Us=null,Is=null;function uh(t){if(t=la(t)){if(typeof Zc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=lu(e),Zc(t.stateNode,t.type,e))}}function Tg(t){Us?Is?Is.push(t):Is=[t]:Us=t}function Ag(){if(Us){var t=Us,e=Is;if(Is=Us=null,uh(t),e)for(t=0;t<e.length;t++)uh(e[t])}}function Cg(t,e){return t(e)}function Rg(){}var Nu=!1;function Pg(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return Cg(t,e,n)}finally{Nu=!1,(Us!==null||Is!==null)&&(Rg(),Ag())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var i=lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Qc=!1;if(Ni)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Qc=!1}function N0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Po=!1,Al=null,Cl=!1,Jc=null,U0={onError:function(t){Po=!0,Al=t}};function I0(t,e,n,i,r,s,o,a,l){Po=!1,Al=null,N0.apply(U0,arguments)}function O0(t,e,n,i,r,s,o,a,l){if(I0.apply(this,arguments),Po){if(Po){var u=Al;Po=!1,Al=null}else throw Error(se(198));Cl||(Cl=!0,Jc=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ch(t){if(Qr(t)!==t)throw Error(se(188))}function F0(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ch(r),t;if(s===i)return ch(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Lg(t){return t=F0(t),t!==null?Dg(t):null}function Dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dg(t);if(e!==null)return e;t=t.sibling}return null}var Ng=An.unstable_scheduleCallback,fh=An.unstable_cancelCallback,z0=An.unstable_shouldYield,k0=An.unstable_requestPaint,Ct=An.unstable_now,B0=An.unstable_getCurrentPriorityLevel,td=An.unstable_ImmediatePriority,Ug=An.unstable_UserBlockingPriority,Rl=An.unstable_NormalPriority,H0=An.unstable_LowPriority,Ig=An.unstable_IdlePriority,ru=null,ui=null;function V0(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:X0,G0=Math.log,W0=Math.LN2;function X0(t){return t>>>=0,t===0?32:31-(G0(t)/W0|0)|0}var xa=64,ya=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function j0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=j0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function $0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zg,id,kg,Bg,Hg,tf=!1,Sa=[],ir=null,rr=null,sr=null,Go=new Map,Wo=new Map,Ki=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=la(e),e!==null&&id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function K0(t,e,n,i,r){switch(e){case"focusin":return ir=uo(ir,t,e,n,i,r),!0;case"dragenter":return rr=uo(rr,t,e,n,i,r),!0;case"mouseover":return sr=uo(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,uo(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,uo(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function Vg(t){var e=Ir(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Hg(t.priority,function(){kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kc=i,n.target.dispatchEvent(i),Kc=null}else return e=la(n),e!==null&&id(e),t.blockedOn=n,!1;e.shift()}return!0}function hh(t,e,n){hl(t)&&n.delete(e)}function Z0(){tf=!1,ir!==null&&hl(ir)&&(ir=null),rr!==null&&hl(rr)&&(rr=null),sr!==null&&hl(sr)&&(sr=null),Go.forEach(hh),Wo.forEach(hh)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,tf||(tf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Z0)))}function Xo(t){function e(r){return co(r,t)}if(0<Sa.length){co(Sa[0],t);for(var n=1;n<Sa.length;n++){var i=Sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&co(ir,t),rr!==null&&co(rr,t),sr!==null&&co(sr,t),Go.forEach(e),Wo.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&Ki.shift()}var Os=ki.ReactCurrentBatchConfig,bl=!0;function Q0(t,e,n,i){var r=at,s=Os.transition;Os.transition=null;try{at=1,rd(t,e,n,i)}finally{at=r,Os.transition=s}}function J0(t,e,n,i){var r=at,s=Os.transition;Os.transition=null;try{at=4,rd(t,e,n,i)}finally{at=r,Os.transition=s}}function rd(t,e,n,i){if(bl){var r=nf(t,e,n,i);if(r===null)Wu(t,e,i,Ll,n),dh(t,i);else if(K0(r,t,e,n,i))i.stopPropagation();else if(dh(t,i),e&4&&-1<q0.indexOf(t)){for(;r!==null;){var s=la(r);if(s!==null&&zg(s),s=nf(t,e,n,i),s===null&&Wu(t,e,i,Ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var Ll=null;function nf(t,e,n,i){if(Ll=null,t=ed(i),t=Ir(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function Gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case td:return 1;case Ug:return 4;case Rl:case H0:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var Ji=null,sd=null,pl=null;function Wg(){if(pl)return pl;var t,e=sd,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function ph(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:ph,this.isPropagationStopped=ph,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=Rn(io),aa=Mt({},io,{view:0,detail:0}),ex=Rn(aa),Iu,Ou,fo,su=Mt({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Iu=t.screenX-fo.screenX,Ou=t.screenY-fo.screenY):Ou=Iu=0,fo=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),mh=Rn(su),tx=Mt({},su,{dataTransfer:0}),nx=Rn(tx),ix=Mt({},aa,{relatedTarget:0}),Fu=Rn(ix),rx=Mt({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=Rn(rx),ox=Mt({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=Rn(ox),lx=Mt({},io,{data:0}),gh=Rn(lx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fx[t])?!!e[t]:!1}function ad(){return dx}var hx=Mt({},aa,{key:function(t){if(t.key){var e=ux[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),px=Rn(hx),mx=Mt({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=Rn(mx),gx=Mt({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),_x=Rn(gx),vx=Mt({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=Rn(vx),yx=Mt({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=Rn(yx),Mx=[9,13,27,32],ld=Ni&&"CompositionEvent"in window,bo=null;Ni&&"documentMode"in document&&(bo=document.documentMode);var Ex=Ni&&"TextEvent"in window&&!bo,Xg=Ni&&(!ld||bo&&8<bo&&11>=bo),vh=" ",xh=!1;function jg(t,e){switch(t){case"keyup":return Mx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function wx(t,e){switch(t){case"compositionend":return Yg(e);case"keypress":return e.which!==32?null:(xh=!0,vh);case"textInput":return t=e.data,t===vh&&xh?null:t;default:return null}}function Tx(t,e){if(Ms)return t==="compositionend"||!ld&&jg(t,e)?(t=Wg(),pl=sd=Ji=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var Ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ax[t.type]:e==="textarea"}function $g(t,e,n,i){Tg(i),e=Dl(e,"onChange"),0<e.length&&(n=new od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Lo=null,jo=null;function Cx(t){s_(t,0)}function ou(t){var e=Ts(t);if(vg(e))return t}function Rx(t,e){if(t==="change")return e}var qg=!1;if(Ni){var zu;if(Ni){var ku="oninput"in document;if(!ku){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),ku=typeof Sh.oninput=="function"}zu=ku}else zu=!1;qg=zu&&(!document.documentMode||9<document.documentMode)}function Mh(){Lo&&(Lo.detachEvent("onpropertychange",Kg),jo=Lo=null)}function Kg(t){if(t.propertyName==="value"&&ou(jo)){var e=[];$g(e,jo,t,ed(t)),Pg(Cx,e)}}function Px(t,e,n){t==="focusin"?(Mh(),Lo=e,jo=n,Lo.attachEvent("onpropertychange",Kg)):t==="focusout"&&Mh()}function bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(jo)}function Lx(t,e){if(t==="click")return ou(e)}function Dx(t,e){if(t==="input"||t==="change")return ou(e)}function Nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:Nx;function Yo(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zc.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=Eh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eh(n)}}function Zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qg(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ux(t){var e=Qg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zg(n.ownerDocument.documentElement,n)){if(i!==null&&ud(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wh(n,s);var o=wh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ix=Ni&&"documentMode"in document&&11>=document.documentMode,Es=null,rf=null,Do=null,sf=!1;function Th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||Es==null||Es!==Tl(i)||(i=Es,"selectionStart"in i&&ud(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&Yo(Do,i)||(Do=i,i=Dl(rf,"onSelect"),0<i.length&&(e=new od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Bu={},Jg={};Ni&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function au(t){if(Bu[t])return Bu[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jg)return Bu[t]=e[n];return t}var e_=au("animationend"),t_=au("animationiteration"),n_=au("animationstart"),i_=au("transitionend"),r_=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){r_.set(t,e),Zr(e,[t])}for(var Hu=0;Hu<Ah.length;Hu++){var Vu=Ah[Hu],Ox=Vu.toLowerCase(),Fx=Vu[0].toUpperCase()+Vu.slice(1);vr(Ox,"on"+Fx)}vr(e_,"onAnimationEnd");vr(t_,"onAnimationIteration");vr(n_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(i_,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Ch(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,O0(i,e,void 0,t),t.currentTarget=null}function s_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ch(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ch(r,a,u),s=l}}}if(Cl)throw t=Jc,Cl=!1,Jc=null,t}function dt(t,e){var n=e[cf];n===void 0&&(n=e[cf]=new Set);var i=t+"__bubble";n.has(i)||(o_(e,t,2,!1),n.add(i))}function Gu(t,e,n){var i=0;e&&(i|=4),o_(n,t,i,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[wa]){t[wa]=!0,hg.forEach(function(n){n!=="selectionchange"&&(zx.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,Gu("selectionchange",!1,e))}}function o_(t,e,n,i){switch(Gg(e)){case 1:var r=Q0;break;case 4:r=J0;break;default:r=rd}n=r.bind(null,e,n,t),r=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Pg(function(){var u=s,f=ed(n),d=[];e:{var h=r_.get(t);if(h!==void 0){var p=od,g=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":p=px;break;case"focusin":g="focus",p=Fu;break;case"focusout":g="blur",p=Fu;break;case"beforeblur":case"afterblur":p=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_x;break;case e_:case t_:case n_:p=sx;break;case i_:p=xx;break;case"scroll":p=ex;break;case"wheel":p=Sx;break;case"copy":case"cut":case"paste":p=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=_h}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,c!==null&&(S=Vo(v,c),S!=null&&x.push(qo(v,S,_)))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Kc&&(g=n.relatedTarget||n.fromElement)&&(Ir(g)||g[Ui]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Ir(g):null,g!==null&&(m=Qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=mh,S="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=_h,S="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?h:Ts(p),_=g==null?h:Ts(g),h=new x(S,v+"leave",p,n,f),h.target=m,h.relatedTarget=_,S=null,Ir(f)===u&&(x=new x(c,v+"enter",g,n,f),x.target=_,x.relatedTarget=m,S=x),m=S,p&&g)t:{for(x=p,c=g,v=0,_=x;_;_=es(_))v++;for(_=0,S=c;S;S=es(S))_++;for(;0<v-_;)x=es(x),v--;for(;0<_-v;)c=es(c),_--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=es(x),c=es(c)}x=null}else x=null;p!==null&&Rh(d,h,p,x,!1),g!==null&&m!==null&&Rh(d,m,g,x,!0)}}e:{if(h=u?Ts(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=Rx;else if(yh(h))if(qg)R=Dx;else{R=bx;var T=Px}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Lx);if(R&&(R=R(t,u))){$g(d,R,n,f);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Xc(h,"number",h.value)}switch(T=u?Ts(u):window,t){case"focusin":(yh(T)||T.contentEditable==="true")&&(Es=T,rf=u,Do=null);break;case"focusout":Do=rf=Es=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Th(d,n,f);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":Th(d,n,f)}var w;if(ld)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ms?jg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Xg&&n.locale!=="ko"&&(Ms||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ms&&(w=Wg()):(Ji=f,sd="value"in Ji?Ji.value:Ji.textContent,Ms=!0)),T=Dl(u,L),0<T.length&&(L=new gh(L,t,null,n,f),d.push({event:L,listeners:T}),w?L.data=w:(w=Yg(n),w!==null&&(L.data=w)))),(w=Ex?wx(t,n):Tx(t,n))&&(u=Dl(u,"onBeforeInput"),0<u.length&&(f=new gh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}s_(d,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(t,n),s!=null&&i.unshift(qo(t,s,r)),s=Vo(t,e),s!=null&&i.push(qo(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Vo(n,s),l!=null&&o.unshift(qo(n,l,a))):r||(l=Vo(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kx=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(kx,`
`).replace(Bx,"")}function Ta(t,e,n){if(e=Ph(e),Ph(t)!==e&&n)throw Error(se(425))}function Nl(){}var of=null,af=null;function lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(t){return bh.resolve(null).then(t).catch(Gx)}:uf;function Gx(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),si="__reactFiber$"+ro,Ko="__reactProps$"+ro,Ui="__reactContainer$"+ro,cf="__reactEvents$"+ro,Wx="__reactListeners$"+ro,Xx="__reactHandles$"+ro;function Ir(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lh(t);t!==null;){if(n=t[si])return n;t=Lh(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[si]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function lu(t){return t[Ko]||null}var ff=[],As=-1;function xr(t){return{current:t}}function pt(t){0>As||(t.current=ff[As],ff[As]=null,As--)}function ct(t,e){As++,ff[As]=t.current,t.current=e}var pr={},Qt=xr(pr),dn=xr(!1),Gr=pr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Ul(){pt(dn),pt(Qt)}function Dh(t,e,n){if(Qt.current!==pr)throw Error(se(168));ct(Qt,e),ct(dn,n)}function a_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,P0(t)||"Unknown",r));return Mt({},n,i)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Gr=Qt.current,ct(Qt,t),ct(dn,dn.current),!0}function Nh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=a_(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,pt(dn),pt(Qt),ct(Qt,t)):pt(dn),ct(dn,n)}var Ei=null,uu=!1,ju=!1;function l_(t){Ei===null?Ei=[t]:Ei.push(t)}function jx(t){uu=!0,l_(t)}function yr(){if(!ju&&Ei!==null){ju=!0;var t=0,e=at;try{var n=Ei;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,uu=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),Ng(td,yr),r}finally{at=e,ju=!1}}return null}var Cs=[],Rs=0,Ol=null,Fl=0,Ln=[],Dn=0,Wr=null,Ci=1,Ri="";function br(t,e){Cs[Rs++]=Fl,Cs[Rs++]=Ol,Ol=t,Fl=e}function u_(t,e,n){Ln[Dn++]=Ci,Ln[Dn++]=Ri,Ln[Dn++]=Wr,Wr=t;var i=Ci;t=Ri;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-qn(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function cd(t){t.return!==null&&(br(t,1),u_(t,1,0))}function fd(t){for(;t===Ol;)Ol=Cs[--Rs],Cs[Rs]=null,Fl=Cs[--Rs],Cs[Rs]=null;for(;t===Wr;)Wr=Ln[--Dn],Ln[Dn]=null,Ri=Ln[--Dn],Ln[Dn]=null,Ci=Ln[--Dn],Ln[Dn]=null}var wn=null,En=null,_t=!1,Xn=null;function c_(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(_t){var e=En;if(e){var n=e;if(!Uh(t,e)){if(df(t))throw Error(se(418));e=or(n.nextSibling);var i=wn;e&&Uh(t,e)?c_(i,n):(t.flags=t.flags&-4097|2,_t=!1,wn=t)}}else{if(df(t))throw Error(se(418));t.flags=t.flags&-4097|2,_t=!1,wn=t}}}function Ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Aa(t){if(t!==wn)return!1;if(!_t)return Ih(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lf(t.type,t.memoizedProps)),e&&(e=En)){if(df(t))throw f_(),Error(se(418));for(;e;)c_(t,e),e=or(e.nextSibling)}if(Ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?or(t.stateNode.nextSibling):null;return!0}function f_(){for(var t=En;t;)t=or(t.nextSibling)}function Ws(){En=wn=null,_t=!1}function dd(t){Xn===null?Xn=[t]:Xn.push(t)}var Yx=ki.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oh(t){var e=t._init;return e(t._payload)}function d_(t){function e(c,v){if(t){var _=c.deletions;_===null?(c.deletions=[v],c.flags|=16):_.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=cr(c,v),c.index=0,c.sibling=null,c}function s(c,v,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<v?(c.flags|=2,v):_):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,_,S){return v===null||v.tag!==6?(v=Ju(_,c.mode,S),v.return=c,v):(v=r(v,_),v.return=c,v)}function l(c,v,_,S){var R=_.type;return R===Ss?f(c,v,_.props.children,S,_.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$i&&Oh(R)===v.type)?(S=r(v,_.props),S.ref=ho(c,v,_),S.return=c,S):(S=Ml(_.type,_.key,_.props,null,c.mode,S),S.ref=ho(c,v,_),S.return=c,S)}function u(c,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ec(_,c.mode,S),v.return=c,v):(v=r(v,_.children||[]),v.return=c,v)}function f(c,v,_,S,R){return v===null||v.tag!==7?(v=Hr(_,c.mode,S,R),v.return=c,v):(v=r(v,_),v.return=c,v)}function d(c,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ju(""+v,c.mode,_),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:return _=Ml(v.type,v.key,v.props,null,c.mode,_),_.ref=ho(c,null,v),_.return=c,_;case ys:return v=ec(v,c.mode,_),v.return=c,v;case $i:var S=v._init;return d(c,S(v._payload),_)}if(Mo(v)||ao(v))return v=Hr(v,c.mode,_,null),v.return=c,v;Ca(c,v)}return null}function h(c,v,_,S){var R=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(c,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ga:return _.key===R?l(c,v,_,S):null;case ys:return _.key===R?u(c,v,_,S):null;case $i:return R=_._init,h(c,v,R(_._payload),S)}if(Mo(_)||ao(_))return R!==null?null:f(c,v,_,S,null);Ca(c,_)}return null}function p(c,v,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(_)||null,a(v,c,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ga:return c=c.get(S.key===null?_:S.key)||null,l(v,c,S,R);case ys:return c=c.get(S.key===null?_:S.key)||null,u(v,c,S,R);case $i:var T=S._init;return p(c,v,_,T(S._payload),R)}if(Mo(S)||ao(S))return c=c.get(_)||null,f(v,c,S,R,null);Ca(v,S)}return null}function g(c,v,_,S){for(var R=null,T=null,w=v,L=v=0,C=null;w!==null&&L<_.length;L++){w.index>L?(C=w,w=null):C=w.sibling;var M=h(c,w,_[L],S);if(M===null){w===null&&(w=C);break}t&&w&&M.alternate===null&&e(c,w),v=s(M,v,L),T===null?R=M:T.sibling=M,T=M,w=C}if(L===_.length)return n(c,w),_t&&br(c,L),R;if(w===null){for(;L<_.length;L++)w=d(c,_[L],S),w!==null&&(v=s(w,v,L),T===null?R=w:T.sibling=w,T=w);return _t&&br(c,L),R}for(w=i(c,w);L<_.length;L++)C=p(w,c,L,_[L],S),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?L:C.key),v=s(C,v,L),T===null?R=C:T.sibling=C,T=C);return t&&w.forEach(function(D){return e(c,D)}),_t&&br(c,L),R}function x(c,v,_,S){var R=ao(_);if(typeof R!="function")throw Error(se(150));if(_=R.call(_),_==null)throw Error(se(151));for(var T=R=null,w=v,L=v=0,C=null,M=_.next();w!==null&&!M.done;L++,M=_.next()){w.index>L?(C=w,w=null):C=w.sibling;var D=h(c,w,M.value,S);if(D===null){w===null&&(w=C);break}t&&w&&D.alternate===null&&e(c,w),v=s(D,v,L),T===null?R=D:T.sibling=D,T=D,w=C}if(M.done)return n(c,w),_t&&br(c,L),R;if(w===null){for(;!M.done;L++,M=_.next())M=d(c,M.value,S),M!==null&&(v=s(M,v,L),T===null?R=M:T.sibling=M,T=M);return _t&&br(c,L),R}for(w=i(c,w);!M.done;L++,M=_.next())M=p(w,c,L,M.value,S),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?L:M.key),v=s(M,v,L),T===null?R=M:T.sibling=M,T=M);return t&&w.forEach(function(z){return e(c,z)}),_t&&br(c,L),R}function m(c,v,_,S){if(typeof _=="object"&&_!==null&&_.type===Ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ga:e:{for(var R=_.key,T=v;T!==null;){if(T.key===R){if(R=_.type,R===Ss){if(T.tag===7){n(c,T.sibling),v=r(T,_.props.children),v.return=c,c=v;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$i&&Oh(R)===T.type){n(c,T.sibling),v=r(T,_.props),v.ref=ho(c,T,_),v.return=c,c=v;break e}n(c,T);break}else e(c,T);T=T.sibling}_.type===Ss?(v=Hr(_.props.children,c.mode,S,_.key),v.return=c,c=v):(S=Ml(_.type,_.key,_.props,null,c.mode,S),S.ref=ho(c,v,_),S.return=c,c=S)}return o(c);case ys:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(c,v.sibling),v=r(v,_.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=ec(_,c.mode,S),v.return=c,c=v}return o(c);case $i:return T=_._init,m(c,v,T(_._payload),S)}if(Mo(_))return g(c,v,_,S);if(ao(_))return x(c,v,_,S);Ca(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,_),v.return=c,c=v):(n(c,v),v=Ju(_,c.mode,S),v.return=c,c=v),o(c)):n(c,v)}return m}var Xs=d_(!0),h_=d_(!1),zl=xr(null),kl=null,Ps=null,hd=null;function pd(){hd=Ps=kl=null}function md(t){var e=zl.current;pt(zl),t._currentValue=e}function pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){kl=t,hd=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(hd!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(kl===null)throw Error(se(308));Ps=t,kl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Or=null;function gd(t){Or===null?Or=[t]:Or.push(t)}function p_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function _d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}function Fh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=Mt({},d,h);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ua={},ci=xr(ua),Zo=xr(ua),Qo=xr(ua);function Fr(t){if(t===ua)throw Error(se(174));return t}function vd(t,e){switch(ct(Qo,e),ct(Zo,t),ct(ci,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}pt(ci),ct(ci,e)}function js(){pt(ci),pt(Zo),pt(Qo)}function g_(t){Fr(Qo.current);var e=Fr(ci.current),n=Yc(e,t.type);e!==n&&(ct(Zo,t),ct(ci,n))}function xd(t){Zo.current===t&&(pt(ci),pt(Zo))}var xt=xr(0);function Hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function yd(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var _l=ki.ReactCurrentDispatcher,$u=ki.ReactCurrentBatchConfig,Xr=0,yt=null,Lt=null,Ft=null,Vl=!1,No=!1,Jo=0,$x=0;function Yt(){throw Error(se(321))}function Sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Md(t,e,n,i,r,s){if(Xr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?Qx:Jx,t=n(i,r),No){s=0;do{if(No=!1,Jo=0,25<=s)throw Error(se(301));s+=1,Ft=Lt=null,e.updateQueue=null,_l.current=ey,t=n(i,r)}while(No)}if(_l.current=Gl,e=Lt!==null&&Lt.next!==null,Xr=0,Ft=Lt=yt=null,Vl=!1,e)throw Error(se(300));return t}function Ed(){var t=Jo!==0;return Jo=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?yt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function zn(){if(Lt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ft===null?yt.memoizedState:Ft.next;if(e!==null)Ft=e,Lt=t;else{if(t===null)throw Error(se(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ft===null?yt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function ea(t,e){return typeof e=="function"?e(t):e}function qu(t){var e=zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Xr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,yt.lanes|=f,jr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=zn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function __(){}function v_(t,e){var n=yt,i=zn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,wd(S_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,ta(9,y_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(se(349));Xr&30||x_(n,e,r)}return r}function x_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function y_(t,e,n,i){e.value=n,e.getSnapshot=i,M_(e)&&E_(t)}function S_(t,e,n){return n(function(){M_(e)&&E_(t)})}function M_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function E_(t){var e=Ii(t,1);e!==null&&Kn(e,t,1,-1)}function kh(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=Zx.bind(null,yt,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function w_(){return zn().memoizedState}function vl(t,e,n,i){var r=ii();yt.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function cu(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Sd(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}yt.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function Bh(t,e){return vl(8390656,8,t,e)}function wd(t,e){return cu(2048,8,t,e)}function T_(t,e){return cu(4,2,t,e)}function A_(t,e){return cu(4,4,t,e)}function C_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,C_.bind(null,e,t),n)}function Td(){}function P_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function b_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function L_(t,e,n){return Xr&21?(Zn(n,e)||(n=Og(),yt.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function qx(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=$u.transition;$u.transition={};try{t(!1),e()}finally{at=n,$u.transition=i}}function D_(){return zn().memoizedState}function Kx(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},N_(t))U_(e,n);else if(n=p_(t,e,n,i),n!==null){var r=sn();Kn(n,t,i,r),I_(n,e,i)}}function Zx(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(N_(t))U_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=p_(t,e,r,i),n!==null&&(r=sn(),Kn(n,t,i,r),I_(n,e,i))}}function N_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function U_(t,e){No=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nd(t,n)}}var Gl={readContext:Fn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},Qx={readContext:Fn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Bh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,C_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Kx.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:kh,useDebugValue:Td,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=kh(!1),e=t[0];return t=qx.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=ii();if(_t){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),zt===null)throw Error(se(349));Xr&30||x_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bh(S_.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,y_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=zt.identifierPrefix;if(_t){var n=Ri,i=Ci;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Jx={readContext:Fn,useCallback:P_,useContext:Fn,useEffect:wd,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:A_,useMemo:b_,useReducer:qu,useRef:w_,useState:function(){return qu(ea)},useDebugValue:Td,useDeferredValue:function(t){var e=zn();return L_(e,Lt.memoizedState,t)},useTransition:function(){var t=qu(ea)[0],e=zn().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:v_,useId:D_,unstable_isNewReconciler:!1},ey={readContext:Fn,useCallback:P_,useContext:Fn,useEffect:wd,useImperativeHandle:R_,useInsertionEffect:T_,useLayoutEffect:A_,useMemo:b_,useReducer:Ku,useRef:w_,useState:function(){return Ku(ea)},useDebugValue:Td,useDeferredValue:function(t){var e=zn();return Lt===null?e.memoizedState=t:L_(e,Lt.memoizedState,t)},useTransition:function(){var t=Ku(ea)[0],e=zn().memoizedState;return[t,e]},useMutableSource:__,useSyncExternalStore:v_,useId:D_,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ur(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Kn(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ur(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Kn(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=ur(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Kn(e,t,i,n),gl(e,t,i))}};function Hh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,i)||!Yo(r,s):!0}function O_(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=hn(e)?Gr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Gs(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_d(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=hn(e)?Gr:Qt.current,r.context=Gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fu.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=R0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ty=typeof WeakMap=="function"?WeakMap:Map;function F_(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xl||(Xl=!0,Cf=i),_f(t,e)},n}function z_(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_f(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ty;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=my.bind(null,t,e,n),e.then(t,t))}function Wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var ny=ki.ReactCurrentOwner,fn=!1;function nn(t,e,n,i){e.child=t===null?h_(e,null,n,i):Xs(e,t.child,n,i)}function jh(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=Md(t,e,n,i,s,r),n=Ed(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(_t&&n&&cd(e),e.flags|=1,nn(t,e,i,r),e.child)}function Yh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k_(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function k_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Yo(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return vf(t,e,n,i,r)}function B_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Ls,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Ls,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Ls,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Ls,Mn),Mn|=i;return nn(t,e,r,n),e.child}function H_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vf(t,e,n,i,r){var s=hn(n)?Gr:Qt.current;return s=Gs(e,s),Fs(e,r),n=Md(t,e,n,i,s,r),i=Ed(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(_t&&i&&cd(e),e.flags|=1,nn(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(hn(n)){var s=!0;Il(e)}else s=!1;if(Fs(e,r),e.stateNode===null)xl(t,e),O_(e,n,i),gf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fn(u):(u=hn(n)?Gr:Qt.current,u=Gs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Vh(e,o,i,u),qi=!1;var h=e.memoizedState;o.state=h,Bl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||qi?(typeof f=="function"&&(mf(e,n,f,i),l=e.memoizedState),(a=qi||Hh(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,m_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Gn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=hn(n)?Gr:Qt.current,l=Gs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Vh(e,o,i,l),qi=!1,h=e.memoizedState,o.state=h,Bl(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||dn.current||qi?(typeof p=="function"&&(mf(e,n,p,i),g=e.memoizedState),(u=qi||Hh(e,n,u,i,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return xf(t,e,n,i,s,r)}function xf(t,e,n,i,r,s){H_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Nh(e,n,!1),Oi(t,e,s);i=e.stateNode,ny.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Nh(e,n,!0),e.child}function V_(t){var e=t.stateNode;e.pendingContext?Dh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dh(t,e.context,!1),vd(t,e.containerInfo)}function qh(t,e,n,i,r){return Ws(),dd(r),e.flags|=256,nn(t,e,n,i),e.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function G_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(xt,r&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sf(n),e.memoizedState=yf,t):Ad(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yf,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ad(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,i){return i!==null&&dd(i),Xs(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(se(422))),Ra(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pu({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Sf(o),e.memoizedState=yf,s);if(!(e.mode&1))return Ra(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Zu(s,i,void 0),Ra(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),Kn(i,t,r,-1))}return Dd(),i=Zu(Error(se(421))),Ra(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=gy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=or(r.nextSibling),wn=e,_t=!0,Xn=null,t!==null&&(Ln[Dn++]=Ci,Ln[Dn++]=Ri,Ln[Dn++]=Wr,Ci=t.id,Ri=t.overflow,Wr=e),e=Ad(e,i.children),e.flags|=4096,e)}function Kh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pf(t.return,e,n)}function Qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function W_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kh(t,n,e);else if(t.tag===19)Kh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qu(e,!0,n,null,s);break;case"together":Qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ry(t,e,n){switch(e.tag){case 3:V_(e),Ws();break;case 5:g_(e);break;case 1:hn(e.type)&&Il(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?G_(t,e,n):(ct(xt,xt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);ct(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return W_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,B_(t,e,n)}return Oi(t,e,n)}var X_,Mf,j_,Y_;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};j_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(ci.current);var s=null;switch(n){case"input":r=Gc(t,r),i=Gc(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=jc(t,r),i=jc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nl)}$c(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function po(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sy(t,e,n){var i=e.pendingProps;switch(fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return hn(e.type)&&Ul(),$t(e),null;case 3:return i=e.stateNode,js(),pt(dn),pt(Qt),yd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(bf(Xn),Xn=null))),Mf(t,e),$t(e),null;case 5:xd(e);var r=Fr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)j_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return $t(e),null}if(t=Fr(ci.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<wo.length;r++)dt(wo[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":sh(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":ah(i,s),dt("invalid",i)}$c(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":_a(i),oh(i,s,!0);break;case"textarea":_a(i),lh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[si]=e,t[Ko]=i,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qc(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wo.length;r++)dt(wo[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":sh(t,i),r=Gc(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":ah(t,i),r=jc(t,i),dt("invalid",t);break;default:r=i}$c(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Kf(t,s,l,o))}switch(n){case"input":_a(t),oh(t,i,!1);break;case"textarea":_a(t),lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)Y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Fr(Qo.current),Fr(ci.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return $t(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&En!==null&&e.mode&1&&!(e.flags&128))f_(),Ws(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[si]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else Xn!==null&&(bf(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Dt===0&&(Dt=3):Dd())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return js(),Mf(t,e),t===null&&$o(e.stateNode.containerInfo),$t(e),null;case 10:return md(e.type._context),$t(e),null;case 17:return hn(e.type)&&Ul(),$t(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)po(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hl(t),o!==null){for(e.flags|=128,po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>$s&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return $t(e),null}else 2*Ct()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=xt.current,ct(xt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Ld(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function oy(t,e){switch(fd(e),e.tag){case 1:return hn(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),pt(dn),pt(Qt),yd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return js(),null;case 10:return md(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Pa=!1,Zt=!1,ay=typeof WeakSet=="function"?WeakSet:Set,ye=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Ef(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Zh=!1;function ly(t,e){if(of=bl,t=Qg(),ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(af={focusedElem:t,selectionRange:n},bl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Gn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=Zh,Zh=!1,g}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ef(e,n,s)}r=r.next}while(r!==i)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $_(t){var e=t.alternate;e!==null&&(t.alternate=null,$_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ko],delete e[cf],delete e[Wx],delete e[Xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}var Ht=null,Wn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)K_(t,e,n),n=n.sibling}function K_(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:Zt||bs(n,e);case 6:var i=Ht,r=Wn;Ht=null,Hi(t,e,n),Ht=i,Wn=r,Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Wn?(t=Ht,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),Xo(t)):Xu(Ht,n.stateNode));break;case 4:i=Ht,r=Wn,Ht=n.stateNode.containerInfo,Wn=!0,Hi(t,e,n),Ht=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ef(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Zt&&(bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Hi(t,e,n),Zt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Jh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ay),e.forEach(function(i){var r=_y.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Wn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Wn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Ht===null)throw Error(se(160));K_(s,o,r),Ht=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Z_(e,t),e=e.sibling}function Z_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Jn(t),i&4){try{Uo(3,t,t.return),du(3,t)}catch(x){Tt(t,t.return,x)}try{Uo(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:kn(e,t),Jn(t),i&512&&n!==null&&bs(n,n.return);break;case 5:if(kn(e,t),Jn(t),i&512&&n!==null&&bs(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xg(r,s),qc(a,o);var u=qc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?wg(r,d):f==="dangerouslySetInnerHTML"?Mg(r,d):f==="children"?Ho(r,d):Kf(r,f,d,u)}switch(a){case"input":Wc(r,s);break;case"textarea":yg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(kn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(kn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:kn(e,t),Jn(t);break;case 13:kn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pd=Ct())),i&4&&Jh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||f,kn(e,t),Zt=u):kn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ye=t,f=t.child;f!==null;){for(d=ye=f;ye!==null;){switch(h=ye,p=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:bs(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:bs(h,h.return);break;case 22:if(h.memoizedState!==null){tp(d);continue}}p!==null?(p.return=h,ye=p):tp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Eg("display",o))}catch(x){Tt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),Jn(t),i&4&&Jh(t);break;case 21:break;default:kn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=Qh(t);Af(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Qh(t);Tf(t,a,o);break;default:throw Error(se(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uy(t,e,n){ye=t,Q_(t)}function Q_(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Pa;var u=Zt;if(Pa=o,(Zt=l)&&!u)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?np(r):l!==null?(l.return=o,ye=l):np(r);for(;s!==null;)ye=s,Q_(s),s=s.sibling;ye=r,Pa=a,Zt=u}ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):ep(t)}}function ep(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Xo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Zt||e.flags&512&&wf(e)}catch(h){Tt(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function tp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function np(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{wf(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{wf(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var cy=Math.ceil,Wl=ki.ReactCurrentDispatcher,Cd=ki.ReactCurrentOwner,On=ki.ReactCurrentBatchConfig,et=0,zt=null,bt=null,Wt=0,Mn=0,Ls=xr(0),Dt=0,na=null,jr=0,hu=0,Rd=0,Io=null,un=null,Pd=0,$s=1/0,Mi=null,Xl=!1,Cf=null,lr=null,ba=!1,er=null,jl=0,Oo=0,Rf=null,yl=-1,Sl=0;function sn(){return et&6?Ct():yl!==-1?yl:yl=Ct()}function ur(t){return t.mode&1?et&2&&Wt!==0?Wt&-Wt:Yx.transition!==null?(Sl===0&&(Sl=Og()),Sl):(t=at,t!==0||(t=window.event,t=t===void 0?16:Gg(t.type)),t):1}function Kn(t,e,n,i){if(50<Oo)throw Oo=0,Rf=null,Error(se(185));oa(t,n,i),(!(et&2)||t!==zt)&&(t===zt&&(!(et&2)&&(hu|=n),Dt===4&&Zi(t,Wt)),pn(t,i),n===1&&et===0&&!(e.mode&1)&&($s=Ct()+500,uu&&yr()))}function pn(t,e){var n=t.callbackNode;Y0(t,e);var i=Pl(t,t===zt?Wt:0);if(i===0)n!==null&&fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fh(n),e===1)t.tag===0?jx(ip.bind(null,t)):l_(ip.bind(null,t)),Vx(function(){!(et&6)&&yr()}),n=null;else{switch(Fg(i)){case 1:n=td;break;case 4:n=Ug;break;case 16:n=Rl;break;case 536870912:n=Ig;break;default:n=Rl}n=ov(n,J_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J_(t,e){if(yl=-1,Sl=0,et&6)throw Error(se(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=Pl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=et;et|=2;var s=tv();(zt!==t||Wt!==e)&&(Mi=null,$s=Ct()+500,Br(t,e));do try{hy();break}catch(a){ev(t,a)}while(!0);pd(),Wl.current=s,et=r,bt!==null?e=0:(zt=null,Wt=0,e=Dt)}if(e!==0){if(e===2&&(r=ef(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=na,Br(t,0),Zi(t,i),pn(t,Ct()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!fy(r)&&(e=Yl(t,i),e===2&&(s=ef(t),s!==0&&(i=s,e=Pf(t,s))),e===1))throw n=na,Br(t,0),Zi(t,i),pn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Lr(t,un,Mi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Pd+500-Ct(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Lr.bind(null,t,un,Mi),e);break}Lr(t,un,Mi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cy(i/1960))-i,10<i){t.timeoutHandle=uf(Lr.bind(null,t,un,Mi),i);break}Lr(t,un,Mi);break;case 5:Lr(t,un,Mi);break;default:throw Error(se(329))}}}return pn(t,Ct()),t.callbackNode===n?J_.bind(null,t):null}function Pf(t,e){var n=Io;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=un,un=n,e!==null&&bf(e)),t}function bf(t){un===null?un=t:un.push.apply(un,t)}function fy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Rd,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function ip(t){if(et&6)throw Error(se(327));zs();var e=Pl(t,0);if(!(e&1))return pn(t,Ct()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=ef(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=na,Br(t,0),Zi(t,e),pn(t,Ct()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,un,Mi),pn(t,Ct()),null}function bd(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&($s=Ct()+500,uu&&yr())}}function Yr(t){er!==null&&er.tag===0&&!(et&6)&&zs();var e=et;et|=1;var n=On.transition,i=at;try{if(On.transition=null,at=1,t)return t()}finally{at=i,On.transition=n,et=e,!(et&6)&&yr()}}function Ld(){Mn=Ls.current,pt(Ls)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hx(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(fd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:js(),pt(dn),pt(Qt),yd();break;case 5:xd(i);break;case 4:js();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:md(i.type._context);break;case 22:case 23:Ld()}n=n.return}if(zt=t,bt=t=cr(t.current,null),Wt=Mn=e,Dt=0,na=null,Rd=hu=jr=0,un=Io=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Or=null}return t}function ev(t,e){do{var n=bt;try{if(pd(),_l.current=Gl,Vl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Xr=0,Ft=Lt=yt=null,No=!1,Jo=0,Cd.current=null,n===null||n.return===null){Dt=1,na=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Wh(o);if(p!==null){p.flags&=-257,Xh(p,o,a,s,e),p.mode&1&&Gh(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Gh(s,u,e),Dd();break e}l=Error(se(426))}}else if(_t&&a.mode&1){var m=Wh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Xh(m,o,a,s,e),dd(Ys(l,a));break e}}s=l=Ys(l,a),Dt!==4&&(Dt=2),Io===null?Io=[s]:Io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=F_(s,l,e);Fh(s,c);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(lr===null||!lr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=z_(s,a,e);Fh(s,S);break e}}s=s.return}while(s!==null)}iv(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function tv(){var t=Wl.current;return Wl.current=Gl,t===null?Gl:t}function Dd(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),zt===null||!(jr&268435455)&&!(hu&268435455)||Zi(zt,Wt)}function Yl(t,e){var n=et;et|=2;var i=tv();(zt!==t||Wt!==e)&&(Mi=null,Br(t,e));do try{dy();break}catch(r){ev(t,r)}while(!0);if(pd(),et=n,Wl.current=i,bt!==null)throw Error(se(261));return zt=null,Wt=0,Dt}function dy(){for(;bt!==null;)nv(bt)}function hy(){for(;bt!==null&&!z0();)nv(bt)}function nv(t){var e=sv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?iv(t):bt=e,Cd.current=null}function iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,bt=null;return}}else if(n=sy(n,e,Mn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Lr(t,e,n){var i=at,r=On.transition;try{On.transition=null,at=1,py(t,e,n,i)}finally{On.transition=r,at=i}return null}function py(t,e,n,i){do zs();while(er!==null);if(et&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($0(t,s),t===zt&&(bt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,ov(Rl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=at;at=1;var a=et;et|=4,Cd.current=null,ly(t,n),Z_(n,t),Ux(af),bl=!!of,af=of=null,t.current=n,uy(n),k0(),et=a,at=o,On.transition=s}else t.current=n;if(ba&&(ba=!1,er=t,jl=r),s=t.pendingLanes,s===0&&(lr=null),V0(n.stateNode),pn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xl)throw Xl=!1,t=Cf,Cf=null,t;return jl&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===Rf?Oo++:(Oo=0,Rf=t):Oo=0,yr(),null}function zs(){if(er!==null){var t=Fg(jl),e=On.transition,n=at;try{if(On.transition=null,at=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,jl=0,et&6)throw Error(se(331));var r=et;for(et|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ye=u;ye!==null;){var f=ye;switch(f.tag){case 0:case 11:case 15:Uo(8,f,s)}var d=f.child;if(d!==null)d.return=f,ye=d;else for(;ye!==null;){f=ye;var h=f.sibling,p=f.return;if($_(f),f===u){ye=null;break}if(h!==null){h.return=p,ye=h;break}ye=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ye=c;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){o=ye;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ye=_;else e:for(o=v;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(R){Tt(a,a.return,R)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if(et=r,yr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(ru,t)}catch{}i=!0}return i}finally{at=n,On.transition=e}}return!1}function rp(t,e,n){e=Ys(n,e),e=F_(t,e,1),t=ar(t,e,1),e=sn(),t!==null&&(oa(t,1,e),pn(t,e))}function Tt(t,e,n){if(t.tag===3)rp(t,t,n);else for(;e!==null;){if(e.tag===3){rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=Ys(n,t),t=z_(e,t,1),e=ar(e,t,1),t=sn(),e!==null&&(oa(e,1,t),pn(e,t));break}}e=e.return}}function my(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Dt===4||Dt===3&&(Wt&130023424)===Wt&&500>Ct()-Pd?Br(t,0):Rd|=n),pn(t,e)}function rv(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=sn();t=Ii(t,e),t!==null&&(oa(t,e,n),pn(t,n))}function gy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rv(t,n)}function _y(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),rv(t,n)}var sv;sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,ry(t,e,n);fn=!!(t.flags&131072)}else fn=!1,_t&&e.flags&1048576&&u_(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=Gs(e,Qt.current);Fs(e,n),r=Md(null,e,i,t,r,n);var s=Ed();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_d(e),r.updater=fu,e.stateNode=r,r._reactInternals=e,gf(e,i,t,n),e=xf(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&cd(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xy(i),t=Gn(i,t),r){case 0:e=vf(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=jh(null,e,i,t,n);break e;case 14:e=Yh(null,e,i,Gn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),vf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),$h(t,e,i,r,n);case 3:e:{if(V_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,m_(t,e),Bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(se(423)),e),e=qh(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(se(424)),e),e=qh(t,e,i,n,r);break e}else for(En=or(e.stateNode.containerInfo.firstChild),wn=e,_t=!0,Xn=null,n=h_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Oi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return g_(e),t===null&&hf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,lf(i,r)?o=null:s!==null&&lf(i,s)&&(e.flags|=32),H_(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&hf(e),null;case 13:return G_(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),jh(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(zl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!dn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=Fn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Yh(t,e,i,r,n);case 15:return k_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xl(t,e),e.tag=1,hn(i)?(t=!0,Il(e)):t=!1,Fs(e,n),O_(e,i,r),gf(e,i,r,n),xf(null,e,i,!0,t,n);case 19:return W_(t,e,n);case 22:return B_(t,e,n)}throw Error(se(156,e.tag))};function ov(t,e){return Ng(t,e)}function vy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new vy(t,e,n,i)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xy(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Jf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Hr(n.children,r,s,e);case Zf:o=8,r|=8;break;case kc:return t=Un(12,n,e,r|2),t.elementType=kc,t.lanes=s,t;case Bc:return t=Un(13,n,e,r),t.elementType=Bc,t.lanes=s,t;case Hc:return t=Un(19,n,e,r),t.elementType=Hc,t.lanes=s,t;case gg:return pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pg:o=10;break e;case mg:o=9;break e;case Qf:o=11;break e;case Jf:o=14;break e;case $i:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function pu(t,e,n,i){return t=Un(22,t,i,e),t.elementType=gg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ju(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,i,r,s,o,a,l){return t=new yy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_d(s),t}function Sy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return pr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(hn(n))return a_(t,n,e)}return e}function lv(t,e,n,i,r,s,o,a,l){return t=Ud(n,i,!0,t,r,s,o,a,l),t.context=av(null),n=t.current,i=sn(),r=ur(n),s=bi(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,oa(t,r,i),pn(t,i),t}function mu(t,e,n,i){var r=e.current,s=sn(),o=ur(r);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(Kn(t,r,o,s),gl(t,r,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Id(t,e){sp(t,e),(t=t.alternate)&&sp(t,e)}function My(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Od(t){this._internalRoot=t}gu.prototype.render=Od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));mu(t,e,null,null)};gu.prototype.unmount=Od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){mu(null,t,null,null)}),e[Ui]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&Vg(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function op(){}function Ey(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=$l(o);s.call(u)}}var o=lv(e,i,t,0,null,!1,!1,"",op);return t._reactRootContainer=o,t[Ui]=o.current,$o(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=$l(l);a.call(u)}}var l=Ud(t,0,!1,null,null,!1,!1,"",op);return t._reactRootContainer=l,t[Ui]=l.current,$o(t.nodeType===8?t.parentNode:t),Yr(function(){mu(e,l,n,i)}),l}function vu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$l(o);a.call(l)}}mu(e,o,t,r)}else o=Ey(n,e,t,r,i);return $l(o)}zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(nd(e,n|1),pn(e,Ct()),!(et&6)&&($s=Ct()+500,yr()))}break;case 13:Yr(function(){var i=Ii(t,1);if(i!==null){var r=sn();Kn(i,t,1,r)}}),Id(t,1)}};id=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=sn();Kn(e,t,134217728,n)}Id(t,134217728)}};kg=function(t){if(t.tag===13){var e=ur(t),n=Ii(t,e);if(n!==null){var i=sn();Kn(n,t,e,i)}Id(t,e)}};Bg=function(){return at};Hg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Zc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lu(i);if(!r)throw Error(se(90));vg(i),Wc(i,r)}}}break;case"textarea":yg(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};Cg=bd;Rg=Yr;var wy={usingClientEntryPoint:!1,Events:[la,Ts,lu,Tg,Ag,bd]},mo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ty={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lg(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||My,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{ru=La.inject(Ty),ui=La}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(se(200));return Sy(t,e,null,n)};Cn.createRoot=function(t,e){if(!Fd(t))throw Error(se(299));var n=!1,i="",r=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,$o(t.nodeType===8?t.parentNode:t),new Od(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Lg(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Yr(t)};Cn.hydrate=function(t,e,n){if(!_u(e))throw Error(se(200));return vu(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n??null,r,!1,s,o),t[Ui]=e.current,$o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gu(e)};Cn.render=function(t,e,n){if(!_u(e))throw Error(se(200));return vu(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!_u(t))throw Error(se(40));return t._reactRootContainer?(Yr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};Cn.unstable_batchedUpdates=bd;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return vu(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),cg.exports=Cn;var Ay=cg.exports,fv,ap=Ay;fv=ap.createRoot,ap.hydrateRoot;var Cy=Object.defineProperty,Ry=(t,e,n)=>e in t?Cy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Da=(t,e,n)=>Ry(t,typeof e!="symbol"?e+"":e,n);const Py={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},by={stringify:t=>t.name,parse:(t,e,n)=>{const i=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof global<"u"&&t in global)return global[t]})();return typeof i=="function"?i.bind(n):void 0}},Ly={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},Dy={stringify:t=>`${t}`,parse:t=>parseFloat(t)},Ny={stringify:t=>t,parse:t=>t},tc={string:Ny,number:Dy,boolean:Py,function:by,json:Ly};function Uy(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,i)=>`${n}-${i.toLowerCase()}`)}const Na=Symbol.for("r2wc.render"),Ua=Symbol.for("r2wc.connected"),Er=Symbol.for("r2wc.context"),mi=Symbol.for("r2wc.props");function Iy(t,e,n){var i,r,s;e.props||(e.props=t.propTypes?Object.keys(t.propTypes):[]),e.events||(e.events=[]);const o=Array.isArray(e.props)?e.props.slice():Object.keys(e.props),a=Array.isArray(e.events)?e.events.slice():Object.keys(e.events),l={},u={},f={},d={};for(const p of o){l[p]=Array.isArray(e.props)?"string":e.props[p];const g=Uy(p);f[p]=g,d[g]=p}for(const p of a)u[p]=Array.isArray(e.events)?{}:e.events[p];class h extends HTMLElement{constructor(){super(),Da(this,s,!0),Da(this,r),Da(this,i,{}),Da(this,"container"),e.shadow?this.container=this.attachShadow({mode:e.shadow}):this.container=this,this[mi].container=this.container;for(const g of o){const x=f[g],m=this.getAttribute(x),c=l[g],v=c?tc[c]:null;v!=null&&v.parse&&m&&(this[mi][g]=v.parse(m,x,this))}for(const g of a)this[mi][g]=x=>{const m=g.replace(/^on/,"").toLowerCase();this.dispatchEvent(new CustomEvent(m,{detail:x,...u[g]}))}}static get observedAttributes(){return Object.keys(d)}connectedCallback(){this[Ua]=!0,this[Na]()}disconnectedCallback(){this[Ua]=!1,this[Er]&&n.unmount(this[Er]),delete this[Er]}attributeChangedCallback(g,x,m){const c=d[g],v=l[c],_=v?tc[v]:null;c in l&&_!=null&&_.parse&&m&&(this[mi][c]=_.parse(m,g,this),this[Na]())}[(s=Ua,r=Er,i=mi,Na)](){this[Ua]&&(this[Er]?n.update(this[Er],this[mi]):this[Er]=n.mount(this.container,t,this[mi]))}}for(const p of o){const g=f[p],x=l[p];Object.defineProperty(h.prototype,p,{enumerable:!0,configurable:!0,get(){return this[mi][p]},set(m){this[mi][p]=m;const c=x?tc[x]:null;if(c!=null&&c.stringify){const v=c.stringify(m,g,this);this.getAttribute(g)!==v&&this.setAttribute(g,v)}else this[Na]()}})}return h}function Oy(t,e,n){const i=fv(t),r=_r.createElement(e,n);return i.render(r),{root:i,ReactComponent:e}}function Fy({root:t,ReactComponent:e},n){const i=_r.createElement(e,n);t.render(i)}function zy({root:t}){t.unmount()}function ky(t,e={}){return Iy(t,e,{mount:Oy,update:Fy,unmount:zy})}var dv={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=Ye,Hy=Symbol.for("react.element"),Vy=Symbol.for("react.fragment"),Gy=Object.prototype.hasOwnProperty,Wy=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xy={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Gy.call(e,i)&&!Xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hy,type:t,key:s,ref:o,props:r,_owner:Wy.current}}xu.Fragment=Vy;xu.jsx=hv;xu.jsxs=hv;dv.exports=xu;var De=dv.exports;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="165",ts={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jy=0,lp=1,Yy=2,pv=1,$y=2,Si=3,mr=0,mn=1,Ai=2,fr=0,ks=1,up=2,cp=3,fp=4,qy=5,Nr=100,Ky=101,Zy=102,Qy=103,Jy=104,eS=200,tS=201,nS=202,iS=203,Lf=204,Df=205,rS=206,sS=207,oS=208,aS=209,lS=210,uS=211,cS=212,fS=213,dS=214,hS=0,pS=1,mS=2,ql=3,gS=4,_S=5,vS=6,xS=7,mv=0,yS=1,SS=2,dr=0,MS=1,ES=2,wS=3,TS=4,AS=5,CS=6,RS=7,gv=300,qs=301,Ks=302,Nf=303,Uf=304,yu=306,If=1e3,zr=1001,Of=1002,In=1003,PS=1004,Ia=1005,jn=1006,nc=1007,kr=1008,gr=1009,bS=1010,LS=1011,Kl=1012,_v=1013,Zs=1014,tr=1015,Su=1016,vv=1017,xv=1018,Qs=1020,DS=35902,NS=1021,US=1022,li=1023,IS=1024,OS=1025,Bs=1026,Js=1027,FS=1028,yv=1029,zS=1030,Sv=1031,Mv=1033,ic=33776,rc=33777,sc=33778,oc=33779,dp=35840,hp=35841,pp=35842,mp=35843,gp=36196,_p=37492,vp=37496,xp=37808,yp=37809,Sp=37810,Mp=37811,Ep=37812,wp=37813,Tp=37814,Ap=37815,Cp=37816,Rp=37817,Pp=37818,bp=37819,Lp=37820,Dp=37821,ac=36492,Np=36494,Up=36495,kS=36283,Ip=36284,Op=36285,Fp=36286,BS=3200,HS=3201,VS=0,GS=1,Qi="",ri="srgb",Sr="srgb-linear",kd="display-p3",Mu="display-p3-linear",Zl="linear",ht="srgb",Ql="rec709",Jl="p3",is=7680,zp=519,WS=512,XS=513,jS=514,Ev=515,YS=516,$S=517,qS=518,KS=519,Ff=35044,kp="300 es",Pi=2e3,eu=2001;class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bp=1234567;const Fo=Math.PI/180,ia=180/Math.PI;function Li(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function Bd(t,e){return(t%e+e)%e}function ZS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function QS(t,e,n){return t!==e?(n-t)/(e-t):0}function zo(t,e,n){return(1-n)*t+n*e}function JS(t,e,n,i){return zo(t,e,1-Math.exp(-n*i))}function eM(t,e=1){return e-Math.abs(Bd(t,e*2)-e)}function tM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function nM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function iM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function rM(t,e){return t+Math.random()*(e-t)}function sM(t){return t*(.5-Math.random())}function oM(t){t!==void 0&&(Bp=t);let e=Bp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aM(t){return t*Fo}function lM(t){return t*ia}function uM(t){return(t&t-1)===0&&t!==0}function cM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*f,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*f,a*u);break;case"XZX":t.set(a*f,l*g,l*p,a*u);break;case"YXY":t.set(l*p,a*f,l*g,a*u);break;case"ZYZ":t.set(l*g,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wv={DEG2RAD:Fo,RAD2DEG:ia,generateUUID:Li,clamp:Gt,euclideanModulo:Bd,mapLinear:ZS,inverseLerp:QS,lerp:zo,damp:JS,pingpong:eM,smoothstep:tM,smootherstep:nM,randInt:iM,randFloat:rM,randFloatSpread:sM,seededRandom:oM,degToRad:aM,radToDeg:lM,isPowerOfTwo:uM,ceilPowerOfTwo:cM,floorPowerOfTwo:fM,setQuaternionFromProperEuler:dM,normalize:st,denormalize:Yn};class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],c=r[6],v=r[1],_=r[4],S=r[7],R=r[2],T=r[5],w=r[8];return s[0]=o*x+a*v+l*R,s[3]=o*m+a*_+l*T,s[6]=o*c+a*S+l*w,s[1]=u*x+f*v+d*R,s[4]=u*m+f*_+d*T,s[7]=u*c+f*S+d*w,s[2]=h*x+p*v+g*R,s[5]=h*m+p*_+g*T,s[8]=h*c+p*S+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,p=u*s-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lc.makeScale(e,n)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lc=new qe;function Tv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hM(){const t=tu("canvas");return t.style.display="block",t}const Hp={};function Hd(t){t in Hp||(Hp[t]=!0,console.warn(t))}function pM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Vp=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gp=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[Sr]:{transfer:Zl,primaries:Ql,toReference:t=>t,fromReference:t=>t},[ri]:{transfer:ht,primaries:Ql,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Mu]:{transfer:Zl,primaries:Jl,toReference:t=>t.applyMatrix3(Gp),fromReference:t=>t.applyMatrix3(Vp)},[kd]:{transfer:ht,primaries:Jl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gp),fromReference:t=>t.applyMatrix3(Vp).convertLinearToSRGB()}},mM=new Set([Sr,Mu]),ot={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!mM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Oa[e].toReference,r=Oa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Oa[t].primaries},getTransfer:function(t){return t===Qi?Zl:Oa[t].transfer}};function Hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class gM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=tu("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _M=0;class Av{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cc(r[o].image)):s.push(cc(r[o]))}else s=cc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class gn extends Jr{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=zr,r=zr,s=jn,o=kr,a=li,l=gr,u=gn.DEFAULT_ANISOTROPY,f=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Li(),this.name="",this.source=new Av(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=gv;gn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,S=(p+1)/2,R=(c+1)/2,T=(f+h)/4,w=(d+x)/4,L=(g+m)/4;return _>S&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Av(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends xM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cv extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==h||u!==p||f!==g){let m=1-a;const c=l*h+u*p+f*g+d*x,v=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),T=Math.atan2(R,c*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*v;if(l=l*m+h*S,u=u*m+p*S,f=f*m+g*S,d=d*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=R,u*=R,f*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*d+l*p-u*h,e[n+1]=l*g+f*h+u*d-a*p,e[n+2]=u*g+f*p+a*h-l*d,e[n+3]=f*g-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*p*g,this._y=u*p*d-h*f*g,this._z=u*f*g+h*p*d,this._w=u*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+u*p*g,this._y=u*p*d-h*f*g,this._z=u*f*g-h*p*d,this._w=u*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-u*p*g,this._y=u*p*d+h*f*g,this._z=u*f*g+h*p*d,this._w=u*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-u*p*g,this._y=u*p*d+h*f*g,this._z=u*f*g-h*p*d,this._w=u*f*d+h*p*g;break;case"YZX":this._x=h*f*d+u*p*g,this._y=u*p*d+h*f*g,this._z=u*f*g-h*p*d,this._w=u*f*d-h*p*g;break;case"XZY":this._x=h*f*d-u*p*g,this._y=u*p*d-h*f*g,this._z=u*f*g+h*p*d,this._w=u*f*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new U,Wp=new qr;class di{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),za.subVectors(this.max,go),ss.subVectors(e.a,go),os.subVectors(e.b,go),as.subVectors(e.c,go),Vi.subVectors(os,ss),Gi.subVectors(as,os),wr.subVectors(ss,as);let n=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-wr.z,wr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,wr.z,0,-wr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-wr.y,wr.x,0];return!dc(n,ss,os,as,za)||(n=[1,0,0,0,1,0,0,0,1],!dc(n,ss,os,as,za))?!1:(ka.crossVectors(Vi,Gi),n=[ka.x,ka.y,ka.z],dc(n,ss,os,as,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new U,new U,new U,new U,new U,new U,new U,new U],Bn=new U,Fa=new di,ss=new U,os=new U,as=new U,Vi=new U,Gi=new U,wr=new U,go=new U,za=new U,ka=new U,Tr=new U;function dc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),u=n.dot(Tr),f=i.dot(Tr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const SM=new di,_o=new U,hc=new U;class so{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(hc)),this.expandByPoint(_o.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new U,pc=new U,Ba=new U,Wi=new U,mc=new U,Ha=new U,gc=new U;class ca{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pc.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(pc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=Wi.dot(this.direction),l=-Wi.dot(Ba),u=Wi.lengthSq(),f=Math.abs(1-o*o);let d,h,p,g;if(f>0)if(d=o*l-a,h=o*a-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const x=1/f;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pc).addScaledVector(Ba,h),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){mc.subVectors(n,e),Ha.subVectors(i,e),gc.crossVectors(mc,Ha);let o=this.direction.dot(gc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(Wi,Ha));if(l<0)return null;const u=a*this.direction.dot(mc.cross(Wi));if(u<0||l+u>o)return null;const f=-a*Wi.dot(gc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,u,f,d,h,p,g,x,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,u,f,d,h,p,g,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=g,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,g=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,g=u*f,x=u*d;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,g=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,g=a*f,x=a*d;n[0]=l*f,n[4]=g*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+g,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,EM)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Xi.crossVectors(i,yn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Xi.crossVectors(i,yn)),Xi.normalize(),Va.crossVectors(yn,Xi),r[0]=Xi.x,r[4]=Va.x,r[8]=yn.x,r[1]=Xi.y,r[5]=Va.y,r[9]=yn.y,r[2]=Xi.z,r[6]=Va.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],c=i[14],v=i[3],_=i[7],S=i[11],R=i[15],T=r[0],w=r[4],L=r[8],C=r[12],M=r[1],D=r[5],z=r[9],H=r[13],Y=r[2],q=r[6],j=r[10],K=r[14],N=r[3],$=r[7],Z=r[11],ae=r[15];return s[0]=o*T+a*M+l*Y+u*N,s[4]=o*w+a*D+l*q+u*$,s[8]=o*L+a*z+l*j+u*Z,s[12]=o*C+a*H+l*K+u*ae,s[1]=f*T+d*M+h*Y+p*N,s[5]=f*w+d*D+h*q+p*$,s[9]=f*L+d*z+h*j+p*Z,s[13]=f*C+d*H+h*K+p*ae,s[2]=g*T+x*M+m*Y+c*N,s[6]=g*w+x*D+m*q+c*$,s[10]=g*L+x*z+m*j+c*Z,s[14]=g*C+x*H+m*K+c*ae,s[3]=v*T+_*M+S*Y+R*N,s[7]=v*w+_*D+S*q+R*$,s[11]=v*L+_*z+S*j+R*Z,s[15]=v*C+_*H+S*K+R*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],c=e[15];return g*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],c=e[15],v=d*m*u-x*h*u+x*l*p-a*m*p-d*l*c+a*h*c,_=g*h*u-f*m*u-g*l*p+o*m*p+f*l*c-o*h*c,S=f*x*u-g*d*u+g*a*p-o*x*p-f*a*c+o*d*c,R=g*d*l-f*x*l-g*a*h+o*x*h+f*a*m-o*d*m,T=n*v+i*_+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*c-i*h*c)*w,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(f*m*s-g*h*s+g*r*p-n*m*p-f*r*c+n*h*c)*w,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*c-n*l*c)*w,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*w,e[8]=S*w,e[9]=(g*d*s-f*x*s-g*i*p+n*x*p+f*i*c-n*d*c)*w,e[10]=(o*x*s-g*a*s+g*i*u-n*x*u-o*i*c+n*a*c)*w,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*p-n*a*p)*w,e[12]=R*w,e[13]=(f*x*r-g*d*r+g*i*h-n*x*h-f*i*m+n*d*m)*w,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,p=s*f,g=s*d,x=o*f,m=o*d,c=a*d,v=l*u,_=l*f,S=l*d,R=i.x,T=i.y,w=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+S)*R,r[2]=(g-_)*R,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+c))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*w,r[9]=(m-v)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const u=1/s,f=1/o,d=1/a;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=f,Hn.elements[5]*=f,Hn.elements[6]*=f,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Pi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Pi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===eu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Pi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*f;let g,x;if(a===Pi)g=(o+s)*d,x=-2*d;else if(a===eu)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ls=new U,Hn=new St,MM=new U(0,0,0),EM=new U(1,1,1),Xi=new U,Va=new U,yn=new U,Xp=new St,jp=new qr;class Fi{constructor(e=0,n=0,i=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wM=0;const Yp=new U,us=new qr,vi=new St,Ga=new U,vo=new U,TM=new U,AM=new qr,$p=new U(1,0,0),qp=new U(0,1,0),Kp=new U(0,0,1),Zp={type:"added"},CM={type:"removed"},cs={type:"childadded",child:null},_c={type:"childremoved",child:null};class _n extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new U,n=new Fi,i=new qr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis(Kp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis(Kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(vo,Ga,this.up):vi.lookAt(Ga,vo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(vi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CM),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,TM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new U(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new U,xi=new U,vc=new U,yi=new U,fs=new U,ds=new U,Qp=new U,xc=new U,yc=new U,Sc=new U;class oi{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),xi.subVectors(i,n),vc.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(xi),l=Vn.dot(vc),u=xi.dot(xi),f=xi.dot(vc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),xi.subVectors(e,n),Vn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),ds.subVectors(s,i),xc.subVectors(e,i);const l=fs.dot(xc),u=ds.dot(xc);if(l<=0&&u<=0)return n.copy(i);yc.subVectors(e,r);const f=fs.dot(yc),d=ds.dot(yc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(fs,o);Sc.subVectors(e,s);const p=fs.dot(Sc),g=ds.dot(Sc);if(g>=0&&p<=g)return n.copy(s);const x=p*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(ds,a);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return Qp.subVectors(s,r),a=(d-f)/(d-f+(p-g)),n.copy(r).addScaledVector(Qp,a);const c=1/(m+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Mc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=Bd(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mc(o,s,e+1/3),this.g=Mc(o,s,e),this.b=Mc(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const i=Rv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ot.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Gt(Kt.r*255,0,255))*65536+Math.round(Gt(Kt.g*255,0,255))*256+Math.round(Gt(Kt.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=ri){ot.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Wa);const i=zo(ji.h,Wa.h,n),r=zo(ji.s,Wa.s,n),s=zo(ji.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Je;Je.NAMES=Rv;let RM=0;class fa extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ks,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=Df,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lf&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pv extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new U,Xa=new ke;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ff,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yn(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yn(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yn(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ff&&(e.usage=this.usage),e}}class bv extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lv extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fi extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PM=0;const bn=new St,Ec=new _n,hs=new U,Sn=new di,xo=new di,Ot=new U;class Qn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tv(e)?Lv:bv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Sn.min,xo.min),Sn.expandByPoint(Ot),Ot.addVectors(Sn.max,xo.max),Sn.expandByPoint(Ot)):(Sn.expandByPoint(xo.min),Sn.expandByPoint(xo.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ot.fromBufferAttribute(a,u),l&&(hs.fromBufferAttribute(e,u),Ot.add(hs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;const u=new U,f=new U,d=new U,h=new ke,p=new ke,g=new ke,x=new U,m=new U;function c(L,C,M){u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,M),f.sub(u),d.sub(u),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(D),a[L].add(x),a[C].add(x),a[M].add(x),l[L].add(m),l[C].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,C=v.length;L<C;++L){const M=v[L],D=M.start,z=M.count;for(let H=D,Y=D+z;H<Y;H+=3)c(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new U,S=new U,R=new U,T=new U;function w(L){R.fromBufferAttribute(r,L),T.copy(R);const C=a[L];_.copy(C),_.sub(R.multiplyScalar(R.dot(C))).normalize(),S.crossVectors(T,C);const D=S.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,D)}for(let L=0,C=v.length;L<C;++L){const M=v[L],D=M.start,z=M.count;for(let H=D,Y=D+z;H<Y;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,f=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)h[g++]=u[p++]}return new Tn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jp=new St,Ar=new ca,ja=new so,em=new U,ps=new U,ms=new U,gs=new U,wc=new U,Ya=new U,$a=new ke,qa=new ke,Ka=new ke,tm=new U,nm=new U,im=new U,Za=new U,Qa=new U;class $n extends _n{constructor(e=new Qn,n=new Pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(wc.fromBufferAttribute(d,e),o?Ya.addScaledVector(wc,f):Ya.addScaledVector(wc.sub(n),f))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(ja.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(ja,em)===null||Ar.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],c=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=_;S<R;S+=3){const T=a.getX(S),w=a.getX(S+1),L=a.getX(S+2);r=Ja(this,c,e,i,u,f,d,T,w,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,c=x;m<c;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Ja(this,o,e,i,u,f,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],c=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=_;S<R;S+=3){const T=S,w=S+1,L=S+2;r=Ja(this,c,e,i,u,f,d,T,w,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,c=x;m<c;m+=3){const v=m,_=m+1,S=m+2;r=Ja(this,o,e,i,u,f,d,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bM(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Qa);return u<n.near||u>n.far?null:{distance:u,point:Qa.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ps),t.getVertexPosition(l,ms),t.getVertexPosition(u,gs);const f=bM(t,e,n,i,ps,ms,gs,Za);if(f){r&&($a.fromBufferAttribute(r,a),qa.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,u),f.uv=oi.getInterpolation(Za,ps,ms,gs,$a,qa,Ka,new ke)),s&&($a.fromBufferAttribute(s,a),qa.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,u),f.uv1=oi.getInterpolation(Za,ps,ms,gs,$a,qa,Ka,new ke)),o&&(tm.fromBufferAttribute(o,a),nm.fromBufferAttribute(o,l),im.fromBufferAttribute(o,u),f.normal=oi.getInterpolation(Za,ps,ms,gs,tm,nm,im,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new U,materialIndex:0};oi.getNormal(ps,ms,gs,d.normal),f.face=d}return f}class da extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fi(u,3)),this.setAttribute("normal",new fi(f,3)),this.setAttribute("uv",new fi(d,2));function g(x,m,c,v,_,S,R,T,w,L,C){const M=S/w,D=R/L,z=S/2,H=R/2,Y=T/2,q=w+1,j=L+1;let K=0,N=0;const $=new U;for(let Z=0;Z<j;Z++){const ae=Z*D-H;for(let Ce=0;Ce<q;Ce++){const Xe=Ce*M-z;$[x]=Xe*v,$[m]=ae*_,$[c]=Y,u.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[c]=T>0?1:-1,f.push($.x,$.y,$.z),d.push(Ce/w),d.push(1-Z/L),K+=1}}for(let Z=0;Z<L;Z++)for(let ae=0;ae<w;ae++){const Ce=h+ae+q*Z,Xe=h+ae+q*(Z+1),X=h+(ae+1)+q*(Z+1),re=h+(ae+1)+q*Z;l.push(Ce,Xe,re),l.push(Xe,X,re),N+=6}a.addGroup(p,N,C),p+=N,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=eo(t[n]);for(const r in i)e[r]=i[r]}return e}function LM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Gd={clone:eo,merge:tn};var DM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DM,this.fragmentShader=NM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new U,rm=new ke,sm=new ke;class Nn extends Nv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,rm,sm),n.subVectors(sm,rm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,vs=1;class UM extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(_s,vs,e,n);r.layers=this.layers,this.add(r);const s=new Nn(_s,vs,e,n);s.layers=this.layers,this.add(s);const o=new Nn(_s,vs,e,n);o.layers=this.layers,this.add(o);const a=new Nn(_s,vs,e,n);a.layers=this.layers,this.add(a);const l=new Nn(_s,vs,e,n);l.layers=this.layers,this.add(l);const u=new Nn(_s,vs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uv extends gn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IM extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new da(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:fr});s.uniforms.tEquirect.value=n;const o=new $n(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=jn),new UM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tc=new U,OM=new U,FM=new qe;class wi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tc.subVectors(i,n).cross(OM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FM.getNormalMatrix(e),r=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new so,el=new U;class Wd{constructor(e=new wi,n=new wi,i=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],c=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-p,S-c).normalize(),i[1].setComponents(l+s,h+u,m+p,S+c).normalize(),i[2].setComponents(l+o,h+f,m+g,S+v).normalize(),i[3].setComponents(l-o,h-f,m-g,S-v).normalize(),i[4].setComponents(l-a,h-d,m-x,S-_).normalize(),n===Pi)i[5].setComponents(l+a,h+d,m+x,S+_).normalize();else if(n===eu)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zM(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let p=0,g=h.length;p<g;p++){const x=h[p];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Eu extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let c=0;c<f;c++){const v=c*h-o;for(let _=0;_<u;_++){const S=_*d-s;g.push(S,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const _=v+u*c,S=v+u*(c+1),R=v+1+u*(c+1),T=v+1+u*c;p.push(_,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(x,3)),this.setAttribute("uv",new fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.width,e.height,e.widthSegments,e.heightSegments)}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,lE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",gE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ME=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ew=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:kM,alphahash_pars_fragment:BM,alphamap_fragment:HM,alphamap_pars_fragment:VM,alphatest_fragment:GM,alphatest_pars_fragment:WM,aomap_fragment:XM,aomap_pars_fragment:jM,batching_pars_vertex:YM,batching_vertex:$M,begin_vertex:qM,beginnormal_vertex:KM,bsdfs:ZM,iridescence_fragment:QM,bumpmap_pars_fragment:JM,clipping_planes_fragment:eE,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:nE,clipping_planes_vertex:iE,color_fragment:rE,color_pars_fragment:sE,color_pars_vertex:oE,color_vertex:aE,common:lE,cube_uv_reflection_fragment:uE,defaultnormal_vertex:cE,displacementmap_pars_vertex:fE,displacementmap_vertex:dE,emissivemap_fragment:hE,emissivemap_pars_fragment:pE,colorspace_fragment:mE,colorspace_pars_fragment:gE,envmap_fragment:_E,envmap_common_pars_fragment:vE,envmap_pars_fragment:xE,envmap_pars_vertex:yE,envmap_physical_pars_fragment:LE,envmap_vertex:SE,fog_vertex:ME,fog_pars_vertex:EE,fog_fragment:wE,fog_pars_fragment:TE,gradientmap_pars_fragment:AE,lightmap_pars_fragment:CE,lights_lambert_fragment:RE,lights_lambert_pars_fragment:PE,lights_pars_begin:bE,lights_toon_fragment:DE,lights_toon_pars_fragment:NE,lights_phong_fragment:UE,lights_phong_pars_fragment:IE,lights_physical_fragment:OE,lights_physical_pars_fragment:FE,lights_fragment_begin:zE,lights_fragment_maps:kE,lights_fragment_end:BE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:VE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:WE,map_fragment:XE,map_pars_fragment:jE,map_particle_fragment:YE,map_particle_pars_fragment:$E,metalnessmap_fragment:qE,metalnessmap_pars_fragment:KE,morphinstance_vertex:ZE,morphcolor_vertex:QE,morphnormal_vertex:JE,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:ow,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:uw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:fw,opaque_fragment:dw,packing:hw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:gw,dithering_pars_fragment:_w,roughnessmap_fragment:vw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:Ew,skinbase_vertex:ww,skinning_pars_vertex:Tw,skinning_vertex:Aw,skinnormal_vertex:Cw,specularmap_fragment:Rw,specularmap_pars_fragment:Pw,tonemapping_fragment:bw,tonemapping_pars_fragment:Lw,transmission_fragment:Dw,transmission_pars_fragment:Nw,uv_pars_fragment:Uw,uv_pars_vertex:Iw,uv_vertex:Ow,worldpos_vertex:Fw,background_vert:zw,background_frag:kw,backgroundCube_vert:Bw,backgroundCube_frag:Hw,cube_vert:Vw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distanceRGBA_vert:jw,distanceRGBA_frag:Yw,equirect_vert:$w,equirect_frag:qw,linedashed_vert:Kw,linedashed_frag:Zw,meshbasic_vert:Qw,meshbasic_frag:Jw,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:r1,meshnormal_frag:s1,meshphong_vert:o1,meshphong_frag:a1,meshphysical_vert:l1,meshphysical_frag:u1,meshtoon_vert:c1,meshtoon_frag:f1,points_vert:d1,points_frag:h1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:_1},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},cn={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};cn.physical={uniforms:tn([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const tl={r:0,b:0,g:0},Rr=new Fi,v1=new St;function x1(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,f,d=null,h=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function x(v){let _=!1;const S=g(v);S===null?c(a,l):S&&S.isColor&&(c(S,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===yu)?(f===void 0&&(f=new $n(new da(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:eo(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Rr.copy(_.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(Rr)),f.material.toneMapped=ot.getTransfer(S.colorSpace)!==ht,(d!==S||h!==S.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new $n(new Eu(2,2),new zi({name:"BackgroundMaterial",uniforms:eo(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=ot.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function c(v,_){v.getRGB(tl,Dv(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:x,addToRenderList:m}}function y1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,D,z,H,Y){let q=!1;const j=d(H,z,D);s!==j&&(s=j,u(s.object)),q=p(M,H,z,Y),q&&g(M,H,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(M,D,z,H),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function d(M,D,z){const H=z.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let q=Y[D.id];q===void 0&&(q={},Y[D.id]=q);let j=q[H];return j===void 0&&(j=h(l()),q[H]=j),j}function h(M){const D=[],z=[],H=[];for(let Y=0;Y<n;Y++)D[Y]=0,z[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,D,z,H){const Y=s.attributes,q=D.attributes;let j=0;const K=z.getAttributes();for(const N in K)if(K[N].location>=0){const Z=Y[N];let ae=q[N];if(ae===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;j++}return s.attributesNum!==j||s.index!==H}function g(M,D,z,H){const Y={},q=D.attributes;let j=0;const K=z.getAttributes();for(const N in K)if(K[N].location>=0){let Z=q[N];Z===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),Y[N]=ae,j++}s.attributes=Y,s.attributesNum=j,s.index=H}function x(){const M=s.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){c(M,0)}function c(M,D){const z=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;z[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),Y[M]!==D&&(t.vertexAttribDivisor(M,D),Y[M]=D)}function v(){const M=s.newAttributes,D=s.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==M[z]&&(t.disableVertexAttribArray(z),D[z]=0)}function _(M,D,z,H,Y,q,j){j===!0?t.vertexAttribIPointer(M,D,z,Y,q):t.vertexAttribPointer(M,D,z,H,Y,q)}function S(M,D,z,H){x();const Y=H.attributes,q=z.getAttributes(),j=D.defaultAttributeValues;for(const K in q){const N=q[K];if(N.location>=0){let $=Y[K];if($===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const Z=$.normalized,ae=$.itemSize,Ce=e.get($);if(Ce===void 0)continue;const Xe=Ce.buffer,X=Ce.type,re=Ce.bytesPerElement,me=X===t.INT||X===t.UNSIGNED_INT||$.gpuType===_v;if($.isInterleavedBufferAttribute){const de=$.data,We=de.stride,Ve=$.offset;if(de.isInstancedInterleavedBuffer){for(let Ke=0;Ke<N.locationSize;Ke++)c(N.location+Ke,de.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ke=0;Ke<N.locationSize;Ke++)m(N.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let Ke=0;Ke<N.locationSize;Ke++)_(N.location+Ke,ae/N.locationSize,X,Z,We*re,(Ve+ae/N.locationSize*Ke)*re,me)}else{if($.isInstancedBufferAttribute){for(let de=0;de<N.locationSize;de++)c(N.location+de,$.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<N.locationSize;de++)m(N.location+de);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let de=0;de<N.locationSize;de++)_(N.location+de,ae/N.locationSize,X,Z,ae*re,ae/N.locationSize*de*re,me)}}else if(j!==void 0){const Z=j[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}v()}function R(){L();for(const M in i){const D=i[M];for(const z in D){const H=D[z];for(const Y in H)f(H[Y].object),delete H[Y];delete D[z]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const z in D){const H=D[z];for(const Y in H)f(H[Y].object),delete H[Y];delete D[z]}delete i[M.id]}function w(M){for(const D in i){const z=i[D];if(z[M.id]===void 0)continue;const H=z[M.id];for(const Y in H)f(H[Y].object),delete H[Y];delete z[M.id]}}function L(){C(),o=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function S1(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function a(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<d;p++)this.render(u[p],f[p]);else{h.multiDrawArraysWEBGL(i,u,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}}function l(u,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x];for(let x=0;x<h.length;x++)n.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function M1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==li&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const w=T===Su&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==gr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==tr&&!w)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:c,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:R}}function E1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,_=v*4;let S=c.clippingState||null;l.value=S,S=f(g,h,_,p);for(let R=0;R!==_;++R)S[R]=n[R];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const c=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,S=p;_!==x;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function w1(t){let e=new WeakMap;function n(o,a){return a===Nf?o.mapping=qs:a===Uf&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nf||a===Uf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new IM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class T1 extends Nv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,om=[.125,.215,.35,.446,.526,.582],Ur=20,Ac=new T1,am=new Je;let Cc=null,Rc=0,Pc=0,bc=!1;const Dr=(1+Math.sqrt(5))/2,xs=1/Dr,lm=[new U(-Dr,xs,0),new U(Dr,xs,0),new U(-xs,0,Dr),new U(xs,0,Dr),new U(0,Dr,-xs),new U(0,Dr,xs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Pc),this._renderer.xr.enabled=bc,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Su,format:li,colorSpace:Sr,depthBuffer:!1},r=cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(s)),this._blurMaterial=C1(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Ac)}_sceneToCubeUV(e,n,i,r){const a=new Nn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(am),f.toneMapping=dr,f.autoClear=!1;const p=new Pv({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new $n(new da,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(am),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;nl(r,v*_,c>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qs||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lm[(r-s-1)%lm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new $n(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),x=s/g,m=isFinite(s)?1+Math.floor(f*x):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const c=[];let v=0;for(let w=0;w<Ur;++w){const L=w/x,C=Math.exp(-L*L/2);c.push(C),w===0?v+=C:w<m&&(v+=2*C)}for(let w=0;w<c.length;w++)c[w]=c[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const S=this._sizeLods[r],R=3*S*(r>_-Ds?r-_+Ds:0),T=4*(this._cubeSize-S);nl(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(d,Ac)}}function A1(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+om.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=om[o-t+Ds-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,x=3,m=2,c=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),S=new Float32Array(c*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,L=T>2?0:-1,C=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(C,x*g*T),_.set(h,m*g*T);const M=[T,T,T,T,T,T];S.set(M,c*g*T)}const R=new Qn;R.setAttribute("position",new Tn(v,x)),R.setAttribute("uv",new Tn(_,m)),R.setAttribute("faceIndex",new Tn(S,c)),e.push(R),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cm(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function C1(t,e,n){const i=new Float32Array(Ur),r=new U(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function fm(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function dm(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nf||l===Uf,f=l===qs||l===Ks;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new um(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new um(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function P1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hd("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,S=v.length;_<S;_+=3){const R=v[_+0],T=v[_+1],w=v[_+2];h.push(R,T,T,w,w,R)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const R=_+0,T=_+1,w=_+2;h.push(R,T,T,w,w,R)}}else return;const m=new(Tv(h)?Lv:bv)(h,1);m.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function L1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(h[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let c=0;c<g;c++)m+=p[c];n.update(m,i,1)}}function d(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let c=0;for(let v=0;v<g;v++)c+=p[v];for(let v=0;v<x.length;v++)n.update(c,i,x[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function D1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N1(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*T*4*d),L=new Cv(w,R,T,d);L.type=tr,L.needsUpdate=!0;const C=S*4;for(let D=0;D<d;D++){const z=c[D],H=v[D],Y=_[D],q=R*T*4*D;for(let j=0;j<z.count;j++){const K=j*C;g===!0&&(r.fromBufferAttribute(z,j),w[q+K+0]=r.x,w[q+K+1]=r.y,w[q+K+2]=r.z,w[q+K+3]=0),x===!0&&(r.fromBufferAttribute(H,j),w[q+K+4]=r.x,w[q+K+5]=r.y,w[q+K+6]=r.z,w[q+K+7]=0),m===!0&&(r.fromBufferAttribute(Y,j),w[q+K+8]=r.x,w[q+K+9]=r.y,w[q+K+10]=r.z,w[q+K+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new ke(R,T)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function U1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Ov extends gn{constructor(e,n,i,r,s,o,a,l,u,f=Bs){if(f!==Bs&&f!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Bs&&(i=Zs),i===void 0&&f===Js&&(i=Qs),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Fv=new gn,zv=new Ov(1,1);zv.compareFunction=Ev;const kv=new Cv,Bv=new yM,Hv=new Uv,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),_m=new Float32Array(4);function oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hm[r];if(s===void 0&&(s=new Float32Array(r),hm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wu(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function I1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function k1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;_m.set(i),t.uniformMatrix2fv(this.addr,!1,_m),Ut(n,i)}}function B1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),Ut(n,i)}}function H1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),Ut(n,i)}}function V1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function j1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function K1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?zv:Fv;n.setTexture2D(e||s,r)}function Z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bv,r)}function Q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hv,r)}function J1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kv,r)}function eT(t){switch(t){case 5126:return I1;case 35664:return O1;case 35665:return F1;case 35666:return z1;case 35674:return k1;case 35675:return B1;case 35676:return H1;case 5124:case 35670:return V1;case 35667:case 35671:return G1;case 35668:case 35672:return W1;case 35669:case 35673:return X1;case 5125:return j1;case 36294:return Y1;case 36295:return $1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return J1}}function tT(t,e){t.uniform1fv(this.addr,e)}function nT(t,e){const n=oo(e,this.size,2);t.uniform2fv(this.addr,n)}function iT(t,e){const n=oo(e,this.size,3);t.uniform3fv(this.addr,n)}function rT(t,e){const n=oo(e,this.size,4);t.uniform4fv(this.addr,n)}function sT(t,e){const n=oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oT(t,e){const n=oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aT(t,e){const n=oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lT(t,e){t.uniform1iv(this.addr,e)}function uT(t,e){t.uniform2iv(this.addr,e)}function cT(t,e){t.uniform3iv(this.addr,e)}function fT(t,e){t.uniform4iv(this.addr,e)}function dT(t,e){t.uniform1uiv(this.addr,e)}function hT(t,e){t.uniform2uiv(this.addr,e)}function pT(t,e){t.uniform3uiv(this.addr,e)}function mT(t,e){t.uniform4uiv(this.addr,e)}function gT(t,e,n){const i=this.cache,r=e.length,s=wu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fv,s[o])}function _T(t,e,n){const i=this.cache,r=e.length,s=wu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Bv,s[o])}function vT(t,e,n){const i=this.cache,r=e.length,s=wu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Hv,s[o])}function xT(t,e,n){const i=this.cache,r=e.length,s=wu(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||kv,s[o])}function yT(t){switch(t){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return oT;case 35676:return aT;case 5124:case 35670:return lT;case 35667:case 35671:return uT;case 35668:case 35672:return cT;case 35669:case 35673:return fT;case 5125:return dT;case 36294:return hT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return xT}}class ST{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eT(n.type)}}class MT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yT(n.type)}}class ET{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function vm(t,e){t.seq.push(e),t.map[e.id]=e}function wT(t,e,n){const i=t.name,r=i.length;for(Lc.lastIndex=0;;){const s=Lc.exec(i),o=Lc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vm(n,u===void 0?new ST(a,t,e):new MT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new ET(a),vm(n,d)),n=d}}}class El{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);wT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const TT=37297;let AT=0;function CT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function RT(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Jl&&n===Ql?i="LinearDisplayP3ToLinearSRGB":e===Ql&&n===Jl&&(i="LinearSRGBToLinearDisplayP3"),t){case Sr:case Mu:return[i,"LinearTransferOETF"];case ri:case kd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+CT(t.getShaderSource(e),o)}else return r}function PT(t,e){const n=RT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bT(t,e){let n;switch(e){case MS:n="Linear";break;case ES:n="Reinhard";break;case wS:n="OptimizedCineon";break;case TS:n="ACESFilmic";break;case CS:n="AgX";break;case RS:n="Neutral";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function LT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function DT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function To(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(t){return t.replace(UT,OT)}const IT=new Map;function OT(t,e){let n=$e[e];if(n===void 0){const i=IT.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zf(n)}const FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(t){return t.replace(FT,zT)}function zT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===pv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$y?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function BT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qs:case Ks:e="ENVMAP_TYPE_CUBE";break;case yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function VT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mv:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case SS:e="ENVMAP_BLENDING_ADD";break}return e}function GT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kT(n),u=BT(n),f=HT(n),d=VT(n),h=GT(n),p=LT(n),g=DT(s),x=r.createProgram();let m,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(To).join(`
`),c.length>0&&(c+=`
`)):(m=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),c=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?$e.tonemapping_pars_fragment:"",n.toneMapping!==dr?bT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,PT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(To).join(`
`)),o=zf(o),o=Sm(o,n),o=Mm(o,n),a=zf(a),a=Sm(a,n),a=Mm(a,n),o=Em(o),a=Em(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=v+m+o,S=v+c+a,R=xm(r,r.VERTEX_SHADER,_),T=xm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,R),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(D){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),H=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(T).trim();let q=!0,j=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,T);else{const K=ym(r,R,"vertex"),N=ym(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+K+`
`+N)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||Y==="")&&(j=!1);j&&(D.diagnostics={runnable:q,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(R),r.deleteShader(T),L=new El(r,x),C=NT(r,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,TT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let XT=0;class jT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YT(e),n.set(e,i)),i}}class YT{constructor(e){this.id=XT++,this.code=e,this.usedTimes=0}}function $T(t,e,n,i,r,s,o){const a=new Vd,l=new jT,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(C){return u.add(C),C===0?"uv":`uv${C}`}function m(C,M,D,z,H){const Y=z.fog,q=H.geometry,j=C.isMeshStandardMaterial?z.environment:null,K=(C.isMeshStandardMaterial?n:e).get(C.envMap||j),N=K&&K.mapping===yu?K.image.height:null,$=g[C.type];C.precision!==null&&(p=r.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const Z=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=Z!==void 0?Z.length:0;let Ce=0;q.morphAttributes.position!==void 0&&(Ce=1),q.morphAttributes.normal!==void 0&&(Ce=2),q.morphAttributes.color!==void 0&&(Ce=3);let Xe,X,re,me;if($){const Fe=cn[$];Xe=Fe.vertexShader,X=Fe.fragmentShader}else Xe=C.vertexShader,X=C.fragmentShader,l.update(C),re=l.getVertexShaderID(C),me=l.getFragmentShaderID(C);const de=t.getRenderTarget(),We=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,Ke=!!C.map,b=!!C.matcap,ge=!!K,ue=!!C.aoMap,Se=!!C.lightMap,le=!!C.bumpMap,xe=!!C.normalMap,_e=!!C.displacementMap,Ae=!!C.emissiveMap,tt=!!C.metalnessMap,P=!!C.roughnessMap,E=C.anisotropy>0,k=C.clearcoat>0,Q=C.dispersion>0,J=C.iridescence>0,te=C.sheen>0,Ee=C.transmission>0,ie=E&&!!C.anisotropyMap,ce=k&&!!C.clearcoatMap,Le=k&&!!C.clearcoatNormalMap,oe=k&&!!C.clearcoatRoughnessMap,we=J&&!!C.iridescenceMap,je=J&&!!C.iridescenceThicknessMap,Ne=te&&!!C.sheenColorMap,pe=te&&!!C.sheenRoughnessMap,Be=!!C.specularMap,He=!!C.specularColorMap,ft=!!C.specularIntensityMap,y=Ee&&!!C.transmissionMap,G=Ee&&!!C.thicknessMap,F=!!C.gradientMap,W=!!C.alphaMap,ne=C.alphaTest>0,ee=!!C.alphaHash,Me=!!C.extensions;let Ze=dr;C.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ze=t.toneMapping);const Ge={shaderID:$,shaderType:C.type,shaderName:C.name,vertexShader:Xe,fragmentShader:X,defines:C.defines,customVertexShaderID:re,customFragmentShaderID:me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:We,instancingColor:We&&H.instanceColor!==null,instancingMorph:We&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Sr,alphaToCoverage:!!C.alphaToCoverage,map:Ke,matcap:b,envMap:ge,envMapMode:ge&&K.mapping,envMapCubeUVHeight:N,aoMap:ue,lightMap:Se,bumpMap:le,normalMap:xe,displacementMap:h&&_e,emissiveMap:Ae,normalMapObjectSpace:xe&&C.normalMapType===GS,normalMapTangentSpace:xe&&C.normalMapType===VS,metalnessMap:tt,roughnessMap:P,anisotropy:E,anisotropyMap:ie,clearcoat:k,clearcoatMap:ce,clearcoatNormalMap:Le,clearcoatRoughnessMap:oe,dispersion:Q,iridescence:J,iridescenceMap:we,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:pe,specularMap:Be,specularColorMap:He,specularIntensityMap:ft,transmission:Ee,transmissionMap:y,thicknessMap:G,gradientMap:F,opaque:C.transparent===!1&&C.blending===ks&&C.alphaToCoverage===!1,alphaMap:W,alphaTest:ne,alphaHash:ee,combine:C.combine,mapUv:Ke&&x(C.map.channel),aoMapUv:ue&&x(C.aoMap.channel),lightMapUv:Se&&x(C.lightMap.channel),bumpMapUv:le&&x(C.bumpMap.channel),normalMapUv:xe&&x(C.normalMap.channel),displacementMapUv:_e&&x(C.displacementMap.channel),emissiveMapUv:Ae&&x(C.emissiveMap.channel),metalnessMapUv:tt&&x(C.metalnessMap.channel),roughnessMapUv:P&&x(C.roughnessMap.channel),anisotropyMapUv:ie&&x(C.anisotropyMap.channel),clearcoatMapUv:ce&&x(C.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(C.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(C.iridescenceMap.channel),iridescenceThicknessMapUv:je&&x(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(C.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(C.sheenRoughnessMap.channel),specularMapUv:Be&&x(C.specularMap.channel),specularColorMapUv:He&&x(C.specularColorMap.channel),specularIntensityMapUv:ft&&x(C.specularIntensityMap.channel),transmissionMapUv:y&&x(C.transmissionMap.channel),thicknessMapUv:G&&x(C.thicknessMap.channel),alphaMapUv:W&&x(C.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xe||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Ke||W),fog:!!Y,useFog:C.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ke&&C.map.isVideoTexture===!0&&ot.getTransfer(C.map.colorSpace)===ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ai,flipSided:C.side===mn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Me&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Me&&C.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ge.vertexUv1s=u.has(1),Ge.vertexUv2s=u.has(2),Ge.vertexUv3s=u.has(3),u.clear(),Ge}function c(C){const M=[];if(C.shaderID?M.push(C.shaderID):(M.push(C.customVertexShaderID),M.push(C.customFragmentShaderID)),C.defines!==void 0)for(const D in C.defines)M.push(D),M.push(C.defines[D]);return C.isRawShaderMaterial===!1&&(v(M,C),_(M,C),M.push(t.outputColorSpace)),M.push(C.customProgramCacheKey),M.join()}function v(C,M){C.push(M.precision),C.push(M.outputColorSpace),C.push(M.envMapMode),C.push(M.envMapCubeUVHeight),C.push(M.mapUv),C.push(M.alphaMapUv),C.push(M.lightMapUv),C.push(M.aoMapUv),C.push(M.bumpMapUv),C.push(M.normalMapUv),C.push(M.displacementMapUv),C.push(M.emissiveMapUv),C.push(M.metalnessMapUv),C.push(M.roughnessMapUv),C.push(M.anisotropyMapUv),C.push(M.clearcoatMapUv),C.push(M.clearcoatNormalMapUv),C.push(M.clearcoatRoughnessMapUv),C.push(M.iridescenceMapUv),C.push(M.iridescenceThicknessMapUv),C.push(M.sheenColorMapUv),C.push(M.sheenRoughnessMapUv),C.push(M.specularMapUv),C.push(M.specularColorMapUv),C.push(M.specularIntensityMapUv),C.push(M.transmissionMapUv),C.push(M.thicknessMapUv),C.push(M.combine),C.push(M.fogExp2),C.push(M.sizeAttenuation),C.push(M.morphTargetsCount),C.push(M.morphAttributeCount),C.push(M.numDirLights),C.push(M.numPointLights),C.push(M.numSpotLights),C.push(M.numSpotLightMaps),C.push(M.numHemiLights),C.push(M.numRectAreaLights),C.push(M.numDirLightShadows),C.push(M.numPointLightShadows),C.push(M.numSpotLightShadows),C.push(M.numSpotLightShadowsWithMaps),C.push(M.numLightProbes),C.push(M.shadowMapType),C.push(M.toneMapping),C.push(M.numClippingPlanes),C.push(M.numClipIntersection),C.push(M.depthPacking)}function _(C,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),C.push(a.mask)}function S(C){const M=g[C.type];let D;if(M){const z=cn[M];D=Gd.clone(z.uniforms)}else D=C.uniforms;return D}function R(C,M){let D;for(let z=0,H=f.length;z<H;z++){const Y=f[z];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new WT(t,M,C,s),f.push(D)),D}function T(C){if(--C.usedTimes===0){const M=f.indexOf(C);f[M]=f[f.length-1],f.pop(),C.destroy()}}function w(C){l.remove(C)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:f,dispose:L}}function qT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function KT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,x,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=g,c.renderOrder=d.renderOrder,c.z=x,c.group=m),e++,c}function a(d,h,p,g,x,m){const c=o(d,h,p,g,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,g,x,m){const c=o(d,h,p,g,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||KT),i.length>1&&i.sort(h||Tm),r.length>1&&r.sort(h||Tm)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function ZT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Am,t.set(i,[o])):r>=s.length?(o=new Am,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function QT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Je};break;case"SpotLight":n={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function JT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eA=0;function tA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nA(t){const e=new QT,n=JT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new St,o=new St;function a(u){let f=0,d=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,x=0,m=0,c=0,v=0,_=0,S=0,R=0,T=0,w=0;u.sort(tA);for(let C=0,M=u.length;C<M;C++){const D=u[C],z=D.color,H=D.intensity,Y=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*H,d+=z.g*H,h+=z.b*H;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],H);w++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,N=n.get(D);N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=j,p++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(z).multiplyScalar(H),j.distance=Y,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[x]=j;const K=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,K.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[x]=K.matrix,D.castShadow){const N=n.get(D);N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=q,S++}x++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(z).multiplyScalar(H),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const K=D.shadow,N=n.get(D);N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=D.shadow.matrix,_++}i.point[g]=j,g++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(H),j.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[c]=j,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==c||L.numDirectionalShadows!==v||L.numPointShadows!==_||L.numSpotShadows!==S||L.numSpotMaps!==R||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=c,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=c,L.numDirectionalShadows=v,L.numPointShadows=_,L.numSpotShadows=S,L.numSpotMaps=R,L.numLightProbes=w,i.version=eA++)}function l(u,f){let d=0,h=0,p=0,g=0,x=0;const m=f.matrixWorldInverse;for(let c=0,v=u.length;c<v;c++){const _=u[c];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Cm(t){const e=new nA(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cm(t),e.set(r,[a])):s>=o.length?(a=new Cm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class rA extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sA extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lA(t,e,n){let i=new Wd;const r=new ke,s=new ke,o=new At,a=new rA({depthPacking:HS}),l=new sA,u={},f=n.maxTextureSize,d={[mr]:mn,[mn]:mr,[Ai]:Ai},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:oA,fragmentShader:aA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pv;let c=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const C=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),z=t.state;z.setBlending(fr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=c!==Si&&this.type===Si,Y=c===Si&&this.type!==Si;for(let q=0,j=T.length;q<j;q++){const K=T[q],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();if(r.multiply($),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,N.mapSize.y=s.y)),N.map===null||H===!0||Y===!0){const ae=this.type!==Si?{minFilter:In,magFilter:In}:{};N.map!==null&&N.map.dispose(),N.map=new $r(r.x,r.y,ae),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let ae=0;ae<Z;ae++){const Ce=N.getViewport(ae);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),z.viewport(o),N.updateMatrices(K,ae),i=N.getFrustum(),S(w,L,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===Si&&v(N,L),N.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(C,M,D)};function v(T,w){const L=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $r(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,L,p,x,null)}function _(T,w,L,C){let M=null;const D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=M.uuid,H=w.uuid;let Y=u[z];Y===void 0&&(Y={},u[z]=Y);let q=Y[H];q===void 0&&(q=M.clone(),Y[H]=q,w.addEventListener("dispose",R)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,C===Si?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=L}return M}function S(T,w,L,C,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Si)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const H=e.update(T),Y=T.material;if(Array.isArray(Y)){const q=H.groups;for(let j=0,K=q.length;j<K;j++){const N=q[j],$=Y[N.materialIndex];if($&&$.visible){const Z=_(T,$,C,M);T.onBeforeShadow(t,T,w,L,H,Z,N),t.renderBufferDirect(L,null,H,Z,T,N),T.onAfterShadow(t,T,w,L,H,Z,N)}}}else if(Y.visible){const q=_(T,Y,C,M);T.onBeforeShadow(t,T,w,L,H,q,null),t.renderBufferDirect(L,null,H,q,T,null),T.onAfterShadow(t,T,w,L,H,q,null)}}const z=T.children;for(let H=0,Y=z.length;H<Y;H++)S(z[H],w,L,C,M)}function R(T){T.target.removeEventListener("dispose",R);for(const L in u){const C=u[L],M=T.target.uuid;M in C&&(C[M].dispose(),delete C[M])}}}function uA(t){function e(){let y=!1;const G=new At;let F=null;const W=new At(0,0,0,0);return{setMask:function(ne){F!==ne&&!y&&(t.colorMask(ne,ne,ne,ne),F=ne)},setLocked:function(ne){y=ne},setClear:function(ne,ee,Me,Ze,Ge){Ge===!0&&(ne*=Ze,ee*=Ze,Me*=Ze),G.set(ne,ee,Me,Ze),W.equals(G)===!1&&(t.clearColor(ne,ee,Me,Ze),W.copy(G))},reset:function(){y=!1,F=null,W.set(-1,0,0,0)}}}function n(){let y=!1,G=null,F=null,W=null;return{setTest:function(ne){ne?me(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ne){G!==ne&&!y&&(t.depthMask(ne),G=ne)},setFunc:function(ne){if(F!==ne){switch(ne){case hS:t.depthFunc(t.NEVER);break;case pS:t.depthFunc(t.ALWAYS);break;case mS:t.depthFunc(t.LESS);break;case ql:t.depthFunc(t.LEQUAL);break;case gS:t.depthFunc(t.EQUAL);break;case _S:t.depthFunc(t.GEQUAL);break;case vS:t.depthFunc(t.GREATER);break;case xS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}F=ne}},setLocked:function(ne){y=ne},setClear:function(ne){W!==ne&&(t.clearDepth(ne),W=ne)},reset:function(){y=!1,G=null,F=null,W=null}}}function i(){let y=!1,G=null,F=null,W=null,ne=null,ee=null,Me=null,Ze=null,Ge=null;return{setTest:function(Fe){y||(Fe?me(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Fe){G!==Fe&&!y&&(t.stencilMask(Fe),G=Fe)},setFunc:function(Fe,Pe,Ie){(F!==Fe||W!==Pe||ne!==Ie)&&(t.stencilFunc(Fe,Pe,Ie),F=Fe,W=Pe,ne=Ie)},setOp:function(Fe,Pe,Ie){(ee!==Fe||Me!==Pe||Ze!==Ie)&&(t.stencilOp(Fe,Pe,Ie),ee=Fe,Me=Pe,Ze=Ie)},setLocked:function(Fe){y=Fe},setClear:function(Fe){Ge!==Fe&&(t.clearStencil(Fe),Ge=Fe)},reset:function(){y=!1,G=null,F=null,W=null,ne=null,ee=null,Me=null,Ze=null,Ge=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],p=null,g=!1,x=null,m=null,c=null,v=null,_=null,S=null,R=null,T=new Je(0,0,0),w=0,L=!1,C=null,M=null,D=null,z=null,H=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=j>=2);let N=null,$={};const Z=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Ce=new At().fromArray(Z),Xe=new At().fromArray(ae);function X(y,G,F,W){const ne=new Uint8Array(4),ee=t.createTexture();t.bindTexture(y,ee),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<F;Me++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(G,0,t.RGBA,1,1,W,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(G+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return ee}const re={};re[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(t.DEPTH_TEST),s.setFunc(ql),le(!1),xe(lp),me(t.CULL_FACE),ue(fr);function me(y){u[y]!==!0&&(t.enable(y),u[y]=!0)}function de(y){u[y]!==!1&&(t.disable(y),u[y]=!1)}function We(y,G){return f[y]!==G?(t.bindFramebuffer(y,G),f[y]=G,y===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=G),y===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=G),!0):!1}function Ve(y,G){let F=h,W=!1;if(y){F=d.get(G),F===void 0&&(F=[],d.set(G,F));const ne=y.textures;if(F.length!==ne.length||F[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Me=ne.length;ee<Me;ee++)F[ee]=t.COLOR_ATTACHMENT0+ee;F.length=ne.length,W=!0}}else F[0]!==t.BACK&&(F[0]=t.BACK,W=!0);W&&t.drawBuffers(F)}function Ke(y){return p!==y?(t.useProgram(y),p=y,!0):!1}const b={[Nr]:t.FUNC_ADD,[Ky]:t.FUNC_SUBTRACT,[Zy]:t.FUNC_REVERSE_SUBTRACT};b[Qy]=t.MIN,b[Jy]=t.MAX;const ge={[eS]:t.ZERO,[tS]:t.ONE,[nS]:t.SRC_COLOR,[Lf]:t.SRC_ALPHA,[lS]:t.SRC_ALPHA_SATURATE,[oS]:t.DST_COLOR,[rS]:t.DST_ALPHA,[iS]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[aS]:t.ONE_MINUS_DST_COLOR,[sS]:t.ONE_MINUS_DST_ALPHA,[uS]:t.CONSTANT_COLOR,[cS]:t.ONE_MINUS_CONSTANT_COLOR,[fS]:t.CONSTANT_ALPHA,[dS]:t.ONE_MINUS_CONSTANT_ALPHA};function ue(y,G,F,W,ne,ee,Me,Ze,Ge,Fe){if(y===fr){g===!0&&(de(t.BLEND),g=!1);return}if(g===!1&&(me(t.BLEND),g=!0),y!==qy){if(y!==x||Fe!==L){if((m!==Nr||_!==Nr)&&(t.blendEquation(t.FUNC_ADD),m=Nr,_=Nr),Fe)switch(y){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case up:t.blendFunc(t.ONE,t.ONE);break;case cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case up:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}c=null,v=null,S=null,R=null,T.set(0,0,0),w=0,x=y,L=Fe}return}ne=ne||G,ee=ee||F,Me=Me||W,(G!==m||ne!==_)&&(t.blendEquationSeparate(b[G],b[ne]),m=G,_=ne),(F!==c||W!==v||ee!==S||Me!==R)&&(t.blendFuncSeparate(ge[F],ge[W],ge[ee],ge[Me]),c=F,v=W,S=ee,R=Me),(Ze.equals(T)===!1||Ge!==w)&&(t.blendColor(Ze.r,Ze.g,Ze.b,Ge),T.copy(Ze),w=Ge),x=y,L=!1}function Se(y,G){y.side===Ai?de(t.CULL_FACE):me(t.CULL_FACE);let F=y.side===mn;G&&(F=!F),le(F),y.blending===ks&&y.transparent===!1?ue(fr):ue(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const W=y.stencilWrite;o.setTest(W),W&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ae(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(y){C!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),C=y)}function xe(y){y!==jy?(me(t.CULL_FACE),y!==M&&(y===lp?t.cullFace(t.BACK):y===Yy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),M=y}function _e(y){y!==D&&(q&&t.lineWidth(y),D=y)}function Ae(y,G,F){y?(me(t.POLYGON_OFFSET_FILL),(z!==G||H!==F)&&(t.polygonOffset(G,F),z=G,H=F)):de(t.POLYGON_OFFSET_FILL)}function tt(y){y?me(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function P(y){y===void 0&&(y=t.TEXTURE0+Y-1),N!==y&&(t.activeTexture(y),N=y)}function E(y,G,F){F===void 0&&(N===null?F=t.TEXTURE0+Y-1:F=N);let W=$[F];W===void 0&&(W={type:void 0,texture:void 0},$[F]=W),(W.type!==y||W.texture!==G)&&(N!==F&&(t.activeTexture(F),N=F),t.bindTexture(y,G||re[y]),W.type=y,W.texture=G)}function k(){const y=$[N];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Le(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ne(y){Ce.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),Ce.copy(y))}function pe(y){Xe.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),Xe.copy(y))}function Be(y,G){let F=l.get(G);F===void 0&&(F=new WeakMap,l.set(G,F));let W=F.get(y);W===void 0&&(W=t.getUniformBlockIndex(G,y.name),F.set(y,W))}function He(y,G){const W=l.get(G).get(y);a.get(G)!==W&&(t.uniformBlockBinding(G,W,y.__bindingPointIndex),a.set(G,W))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},N=null,$={},f={},d=new WeakMap,h=[],p=null,g=!1,x=null,m=null,c=null,v=null,_=null,S=null,R=null,T=new Je(0,0,0),w=0,L=!1,C=null,M=null,D=null,z=null,H=null,Ce.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:de,bindFramebuffer:We,drawBuffers:Ve,useProgram:Ke,setBlending:ue,setMaterial:Se,setFlipSided:le,setCullFace:xe,setLineWidth:_e,setPolygonOffset:Ae,setScissorTest:tt,activeTexture:P,bindTexture:E,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:we,texImage3D:je,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:Le,texStorage3D:oe,texSubImage2D:te,texSubImage3D:Ee,compressedTexSubImage2D:ie,compressedTexSubImage3D:ce,scissor:Ne,viewport:pe,reset:ft}}function cA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):tu("canvas")}function x(P,E,k){let Q=1;const J=tt(P);if((J.width>k||J.height>k)&&(Q=k/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(Q*J.width),Ee=Math.floor(Q*J.height);d===void 0&&(d=g(te,Ee));const ie=E?g(te,Ee):d;return ie.width=te,ie.height=Ee,ie.getContext("2d").drawImage(P,0,0,te,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+Ee+")."),ie}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==In&&P.minFilter!==jn}function c(P){t.generateMipmap(P)}function v(P,E,k,Q,J=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=E;if(E===t.RED&&(k===t.FLOAT&&(te=t.R32F),k===t.HALF_FLOAT&&(te=t.R16F),k===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(te=t.R8UI),k===t.UNSIGNED_SHORT&&(te=t.R16UI),k===t.UNSIGNED_INT&&(te=t.R32UI),k===t.BYTE&&(te=t.R8I),k===t.SHORT&&(te=t.R16I),k===t.INT&&(te=t.R32I)),E===t.RG&&(k===t.FLOAT&&(te=t.RG32F),k===t.HALF_FLOAT&&(te=t.RG16F),k===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(te=t.RG8UI),k===t.UNSIGNED_SHORT&&(te=t.RG16UI),k===t.UNSIGNED_INT&&(te=t.RG32UI),k===t.BYTE&&(te=t.RG8I),k===t.SHORT&&(te=t.RG16I),k===t.INT&&(te=t.RG32I)),E===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),E===t.RGBA){const Ee=J?Zl:ot.getTransfer(Q);k===t.FLOAT&&(te=t.RGBA32F),k===t.HALF_FLOAT&&(te=t.RGBA16F),k===t.UNSIGNED_BYTE&&(te=Ee===ht?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function _(P,E){let k;return P?E===null||E===Zs||E===Qs?k=t.DEPTH24_STENCIL8:E===tr?k=t.DEPTH32F_STENCIL8:E===Kl&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zs||E===Qs?k=t.DEPTH_COMPONENT24:E===tr?k=t.DEPTH_COMPONENT32F:E===Kl&&(k=t.DEPTH_COMPONENT16),k}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),w(E),E.isVideoTexture&&f.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),C(E)}function w(P){const E=i.get(P);if(E.__webglInit===void 0)return;const k=P.source,Q=h.get(k);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(P),Object.keys(Q).length===0&&h.delete(k)}i.remove(P)}function L(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const k=P.source,Q=h.get(k);delete Q[E.__cacheKey],o.memory.textures--}function C(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let Q=0,J=k.length;Q<J;Q++){const te=i.get(k[Q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(P)}let M=0;function D(){M=0}function z(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Y(P,E){const k=i.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(k,P,E);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function q(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){Xe(k,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function j(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){Xe(k,P,E);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function K(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){X(k,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const N={[If]:t.REPEAT,[zr]:t.CLAMP_TO_EDGE,[Of]:t.MIRRORED_REPEAT},$={[In]:t.NEAREST,[PS]:t.NEAREST_MIPMAP_NEAREST,[Ia]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[nc]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},Z={[WS]:t.NEVER,[KS]:t.ALWAYS,[XS]:t.LESS,[Ev]:t.LEQUAL,[jS]:t.EQUAL,[qS]:t.GEQUAL,[YS]:t.GREATER,[$S]:t.NOTEQUAL};function ae(P,E){if(E.type===tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===nc||E.magFilter===Ia||E.magFilter===kr||E.minFilter===jn||E.minFilter===nc||E.minFilter===Ia||E.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,N[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,N[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,N[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==Ia&&E.minFilter!==kr||E.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const Q=E.source;let J=h.get(Q);J===void 0&&(J={},h.set(Q,J));const te=H(E);if(te!==P.__cacheKey){J[te]===void 0&&(J[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[te].usedTimes++;const Ee=J[P.__cacheKey];Ee!==void 0&&(J[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&L(E)),P.__cacheKey=te,P.__webglTexture=J[te].texture}return k}function Xe(P,E,k){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const J=Ce(P,E),te=E.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+k);const Ee=i.get(te);if(te.version!==Ee.__version||J===!0){n.activeTexture(t.TEXTURE0+k);const ie=ot.getPrimaries(ot.workingColorSpace),ce=E.colorSpace===Qi?null:ot.getPrimaries(E.colorSpace),Le=E.colorSpace===Qi||ie===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let oe=x(E.image,!1,r.maxTextureSize);oe=Ae(E,oe);const we=s.convert(E.format,E.colorSpace),je=s.convert(E.type);let Ne=v(E.internalFormat,we,je,E.colorSpace,E.isVideoTexture);ae(Q,E);let pe;const Be=E.mipmaps,He=E.isVideoTexture!==!0,ft=Ee.__version===void 0||J===!0,y=te.dataReady,G=S(E,oe);if(E.isDepthTexture)Ne=_(E.format===Js,E.type),ft&&(He?n.texStorage2D(t.TEXTURE_2D,1,Ne,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,oe.width,oe.height,0,we,je,null));else if(E.isDataTexture)if(Be.length>0){He&&ft&&n.texStorage2D(t.TEXTURE_2D,G,Ne,Be[0].width,Be[0].height);for(let F=0,W=Be.length;F<W;F++)pe=Be[F],He?y&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,pe.width,pe.height,we,je,pe.data):n.texImage2D(t.TEXTURE_2D,F,Ne,pe.width,pe.height,0,we,je,pe.data);E.generateMipmaps=!1}else He?(ft&&n.texStorage2D(t.TEXTURE_2D,G,Ne,oe.width,oe.height),y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,we,je,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,oe.width,oe.height,0,we,je,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,G,Ne,Be[0].width,Be[0].height,oe.depth);for(let F=0,W=Be.length;F<W;F++)if(pe=Be[F],E.format!==li)if(we!==null)if(He){if(y)if(E.layerUpdates.size>0){for(const ne of E.layerUpdates){const ee=pe.width*pe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,ne,pe.width,pe.height,1,we,pe.data.slice(ee*ne,ee*(ne+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,oe.depth,we,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,Ne,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?y&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,pe.width,pe.height,oe.depth,we,je,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,F,Ne,pe.width,pe.height,oe.depth,0,we,je,pe.data)}else{He&&ft&&n.texStorage2D(t.TEXTURE_2D,G,Ne,Be[0].width,Be[0].height);for(let F=0,W=Be.length;F<W;F++)pe=Be[F],E.format!==li?we!==null?He?y&&n.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,pe.width,pe.height,we,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,F,Ne,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?y&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,pe.width,pe.height,we,je,pe.data):n.texImage2D(t.TEXTURE_2D,F,Ne,pe.width,pe.height,0,we,je,pe.data)}else if(E.isDataArrayTexture)if(He){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,G,Ne,oe.width,oe.height,oe.depth),y)if(E.layerUpdates.size>0){let F;switch(je){case t.UNSIGNED_BYTE:switch(we){case t.ALPHA:F=1;break;case t.LUMINANCE:F=1;break;case t.LUMINANCE_ALPHA:F=2;break;case t.RGB:F=3;break;case t.RGBA:F=4;break;default:throw new Error(`Unknown texel size for format ${we}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:F=1;break;default:throw new Error(`Unknown texel size for type ${je}.`)}const W=oe.width*oe.height*F;for(const ne of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,we,je,oe.data.slice(W*ne,W*(ne+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,je,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,we,je,oe.data);else if(E.isData3DTexture)He?(ft&&n.texStorage3D(t.TEXTURE_3D,G,Ne,oe.width,oe.height,oe.depth),y&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,je,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,we,je,oe.data);else if(E.isFramebufferTexture){if(ft)if(He)n.texStorage2D(t.TEXTURE_2D,G,Ne,oe.width,oe.height);else{let F=oe.width,W=oe.height;for(let ne=0;ne<G;ne++)n.texImage2D(t.TEXTURE_2D,ne,Ne,F,W,0,we,je,null),F>>=1,W>>=1}}else if(Be.length>0){if(He&&ft){const F=tt(Be[0]);n.texStorage2D(t.TEXTURE_2D,G,Ne,F.width,F.height)}for(let F=0,W=Be.length;F<W;F++)pe=Be[F],He?y&&n.texSubImage2D(t.TEXTURE_2D,F,0,0,we,je,pe):n.texImage2D(t.TEXTURE_2D,F,Ne,we,je,pe);E.generateMipmaps=!1}else if(He){if(ft){const F=tt(oe);n.texStorage2D(t.TEXTURE_2D,G,Ne,F.width,F.height)}y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,je,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ne,we,je,oe);m(E)&&c(Q),Ee.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function X(P,E,k){if(E.image.length!==6)return;const Q=Ce(P,E),J=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+k);const te=i.get(J);if(J.version!==te.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const Ee=ot.getPrimaries(ot.workingColorSpace),ie=E.colorSpace===Qi?null:ot.getPrimaries(E.colorSpace),ce=E.colorSpace===Qi||Ee===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,we=[];for(let W=0;W<6;W++)!Le&&!oe?we[W]=x(E.image[W],!0,r.maxCubemapSize):we[W]=oe?E.image[W].image:E.image[W],we[W]=Ae(E,we[W]);const je=we[0],Ne=s.convert(E.format,E.colorSpace),pe=s.convert(E.type),Be=v(E.internalFormat,Ne,pe,E.colorSpace),He=E.isVideoTexture!==!0,ft=te.__version===void 0||Q===!0,y=J.dataReady;let G=S(E,je);ae(t.TEXTURE_CUBE_MAP,E);let F;if(Le){He&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,G,Be,je.width,je.height);for(let W=0;W<6;W++){F=we[W].mipmaps;for(let ne=0;ne<F.length;ne++){const ee=F[ne];E.format!==li?Ne!==null?He?y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,ee.width,ee.height,Ne,ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,Be,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,ee.width,ee.height,Ne,pe,ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,Be,ee.width,ee.height,0,Ne,pe,ee.data)}}}else{if(F=E.mipmaps,He&&ft){F.length>0&&G++;const W=tt(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,G,Be,W.width,W.height)}for(let W=0;W<6;W++)if(oe){He?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,we[W].width,we[W].height,Ne,pe,we[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Be,we[W].width,we[W].height,0,Ne,pe,we[W].data);for(let ne=0;ne<F.length;ne++){const Me=F[ne].image[W].image;He?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,Me.width,Me.height,Ne,pe,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,Be,Me.width,Me.height,0,Ne,pe,Me.data)}}else{He?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ne,pe,we[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Be,Ne,pe,we[W]);for(let ne=0;ne<F.length;ne++){const ee=F[ne];He?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,Ne,pe,ee.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,Be,Ne,pe,ee.image[W])}}}m(E)&&c(t.TEXTURE_CUBE_MAP),te.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function re(P,E,k,Q,J,te){const Ee=s.convert(k.format,k.colorSpace),ie=s.convert(k.type),ce=v(k.internalFormat,Ee,ie,k.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>te),we=Math.max(1,E.height>>te);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,te,ce,oe,we,E.depth,0,Ee,ie,null):n.texImage2D(J,te,ce,oe,we,0,Ee,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,i.get(k).__webglTexture,0,le(E)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,i.get(k).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(P,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,te=_(E.stencilBuffer,J),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=le(E);xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,te,E.width,E.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,te,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,P)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const te=Q[J],Ee=s.convert(te.format,te.colorSpace),ie=s.convert(te.type),ce=v(te.internalFormat,Ee,ie,te.colorSpace),Le=le(E);k&&xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ce,E.width,E.height):xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,J=le(E);if(E.depthTexture.format===Bs)xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Js)xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function We(P){const E=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]=t.createRenderbuffer(),me(E.__webglDepthbuffer[Q],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),me(E.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(P,E,k){const Q=i.get(P);E!==void 0&&re(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&We(P)}function Ke(P){const E=P.texture,k=i.get(P),Q=i.get(E);P.addEventListener("dispose",T);const J=P.textures,te=P.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),te){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let ce=0;ce<E.mipmaps.length;ce++)k.__webglFramebuffer[ie][ce]=t.createFramebuffer()}else k.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)k.__webglFramebuffer[ie]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ie=0,ce=J.length;ie<ce;ie++){const Le=i.get(J[ie]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&xe(P)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){const ce=J[ie];k.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const Le=s.convert(ce.format,ce.colorSpace),oe=s.convert(ce.type),we=v(ce.internalFormat,Le,oe,ce.colorSpace,P.isXRRenderTarget===!0),je=le(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,we,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),me(k.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)re(k.__webglFramebuffer[ie][ce],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ce);else re(k.__webglFramebuffer[ie],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(E)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ie=0,ce=J.length;ie<ce;ie++){const Le=J[ie],oe=i.get(Le);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ae(t.TEXTURE_2D,Le),re(k.__webglFramebuffer,P,Le,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,0),m(Le)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,Q.__webglTexture),ae(ie,E),E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)re(k.__webglFramebuffer[ce],P,E,t.COLOR_ATTACHMENT0,ie,ce);else re(k.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ie,0);m(E)&&c(ie),n.unbindTexture()}P.depthBuffer&&We(P)}function b(P){const E=P.textures;for(let k=0,Q=E.length;k<Q;k++){const J=E[k];if(m(J)){const te=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(J).__webglTexture;n.bindTexture(te,Ee),c(te),n.unbindTexture()}}}const ge=[],ue=[];function Se(P){if(P.samples>0){if(xe(P)===!1){const E=P.textures,k=P.width,Q=P.height;let J=t.COLOR_BUFFER_BIT;const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(P),ie=E.length>1;if(ie)for(let ce=0;ce<E.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ce]);const Le=i.get(E[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,J,t.NEAREST),l===!0&&(ge.length=0,ue.length=0,ge.push(t.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ge.push(te),ue.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let ce=0;ce<E.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ce]);const Le=i.get(E[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function le(P){return Math.min(r.maxSamples,P.samples)}function xe(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(P){const E=o.render.frame;f.get(P)!==E&&(f.set(P,E),P.update())}function Ae(P,E){const k=P.colorSpace,Q=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Sr&&k!==Qi&&(ot.getTransfer(k)===ht?(Q!==li||J!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Ve,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=re,this.useMultisampledRTT=xe}function fA(t,e){function n(i,r=Qi){let s;const o=ot.getTransfer(r);if(i===gr)return t.UNSIGNED_BYTE;if(i===vv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===DS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bS)return t.BYTE;if(i===LS)return t.SHORT;if(i===Kl)return t.UNSIGNED_SHORT;if(i===_v)return t.INT;if(i===Zs)return t.UNSIGNED_INT;if(i===tr)return t.FLOAT;if(i===Su)return t.HALF_FLOAT;if(i===NS)return t.ALPHA;if(i===US)return t.RGB;if(i===li)return t.RGBA;if(i===IS)return t.LUMINANCE;if(i===OS)return t.LUMINANCE_ALPHA;if(i===Bs)return t.DEPTH_COMPONENT;if(i===Js)return t.DEPTH_STENCIL;if(i===FS)return t.RED;if(i===yv)return t.RED_INTEGER;if(i===zS)return t.RG;if(i===Sv)return t.RG_INTEGER;if(i===Mv)return t.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dp||i===hp||i===pp||i===mp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gp||i===_p||i===vp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gp||i===_p)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xp||i===yp||i===Sp||i===Mp||i===Ep||i===wp||i===Tp||i===Ap||i===Cp||i===Rp||i===Pp||i===bp||i===Lp||i===Dp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ep)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ap)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dp)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===Np||i===Up)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ac)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Np)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Up)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kS||i===Ip||i===Op||i===Fp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ac)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ip)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Op)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class dA extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class il extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new gn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new zi({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Eu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class _A extends Jr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,g=null;const x=new gA,m=n.getContextAttributes();let c=null,v=null;const _=[],S=[],R=new ke;let T=null;const w=new Nn;w.layers.enable(1),w.viewport=new At;const L=new Nn;L.layers.enable(2),L.viewport=new At;const C=[w,L],M=new dA;M.layers.enable(1),M.layers.enable(2);let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=_[X];return re===void 0&&(re=new Dc,_[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=_[X];return re===void 0&&(re=new Dc,_[X]=re),re.getGripSpace()},this.getHand=function(X){let re=_[X];return re===void 0&&(re=new Dc,_[X]=re),re.getHandSpace()};function H(X){const re=S.indexOf(X.inputSource);if(re===-1)return;const me=_[re];me!==void 0&&(me.update(X.inputSource,X.frame,u||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let X=0;X<_.length;X++){const re=S[X];re!==null&&(S[X]=null,_[X].disconnect(re))}D=null,z=null,x.reset(),e.setRenderTarget(c),p=null,h=null,d=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new $r(p.framebufferWidth,p.framebufferHeight,{format:li,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,me=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Js:Bs,me=m.stencil?Qs:Zs);const We={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new $r(h.textureWidth,h.textureHeight,{format:li,type:gr,depthTexture:new Ov(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(X){for(let re=0;re<X.removed.length;re++){const me=X.removed[re],de=S.indexOf(me);de>=0&&(S[de]=null,_[de].disconnect(me))}for(let re=0;re<X.added.length;re++){const me=X.added[re];let de=S.indexOf(me);if(de===-1){for(let Ve=0;Ve<_.length;Ve++)if(Ve>=S.length){S.push(me),de=Ve;break}else if(S[Ve]===null){S[Ve]=me,de=Ve;break}if(de===-1)break}const We=_[de];We&&We.connect(me)}}const j=new U,K=new U;function N(X,re,me){j.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const de=j.distanceTo(K),We=re.projectionMatrix.elements,Ve=me.projectionMatrix.elements,Ke=We[14]/(We[10]-1),b=We[14]/(We[10]+1),ge=(We[9]+1)/We[5],ue=(We[9]-1)/We[5],Se=(We[8]-1)/We[0],le=(Ve[8]+1)/Ve[0],xe=Ke*Se,_e=Ke*le,Ae=de/(-Se+le),tt=Ae*-Se;re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(tt),X.translateZ(Ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const P=Ke+Ae,E=b+Ae,k=xe-tt,Q=_e+(de-tt),J=ge*b/E*P,te=ue*b/E*P;X.projectionMatrix.makePerspective(k,Q,J,te,P,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function $(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;x.texture!==null&&(X.near=x.depthNear,X.far=x.depthFar),M.near=L.near=w.near=X.near,M.far=L.far=w.far=X.far,(D!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far,w.near=D,w.far=z,L.near=D,L.far=z,w.updateProjectionMatrix(),L.updateProjectionMatrix(),X.updateProjectionMatrix());const re=X.parent,me=M.cameras;$(M,re);for(let de=0;de<me.length;de++)$(me[de],re);me.length===2?N(M,w,L):M.projectionMatrix.copy(w.projectionMatrix),Z(X,M,re)};function Z(X,re,me){me===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ae=null;function Ce(X,re){if(f=re.getViewerPose(u||o),g=re,f!==null){const me=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;me.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let Ve=0;Ve<me.length;Ve++){const Ke=me[Ve];let b=null;if(p!==null)b=p.getViewport(Ke);else{const ue=d.getViewSubImage(h,Ke);b=ue.viewport,Ve===0&&(e.setRenderTargetTextures(v,ue.colorTexture,h.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(v))}let ge=C[Ve];ge===void 0&&(ge=new Nn,ge.layers.enable(Ve),ge.viewport=new At,C[Ve]=ge),ge.matrix.fromArray(Ke.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ke.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(b.x,b.y,b.width,b.height),Ve===0&&(M.matrix.copy(ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(ge)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")){const Ve=d.getDepthInformation(me[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,r.renderState)}}for(let me=0;me<_.length;me++){const de=S[me],We=_[me];de!==null&&We!==void 0&&We.update(de,re,u||o)}ae&&ae(X,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Xe=new Iv;Xe.setAnimationLoop(Ce),this.setAnimationLoop=function(X){ae=X},this.dispose=function(){}}}const Pr=new Fi,vA=new St;function xA(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Dv(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,_,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),d(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),g(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===mn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===mn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,Pr.copy(S),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(Pr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===mn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function u(v,_){let S=r[v.id];S===void 0&&(g(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(v,R);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function f(v){const _=d();v.__bindingPointIndex=_;const S=t.createBuffer(),R=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,w=S.length;T<w;T++){const L=Array.isArray(S[T])?S[T]:[S[T]];for(let C=0,M=L.length;C<M;C++){const D=L[C];if(p(D,T,C,R)===!0){const z=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let q=0;q<H.length;q++){const j=H[q],K=x(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,R){const T=v.value,w=_+"_"+S;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const L=R[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(v){const _=v.uniforms;let S=0;const R=16;for(let w=0,L=_.length;w<L;w++){const C=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,D=C.length;M<D;M++){const z=C[M],H=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,q=H.length;Y<q;Y++){const j=H[Y],K=x(j),N=S%R;N!==0&&R-N<K.boundary&&(S+=R-N),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=K.storage}}}const T=S%R;return T>0&&(S+=R-T),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class SA{constructor(e={}){const{canvas:n=hM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=dr,this.toneMappingExposure=1;const _=this;let S=!1,R=0,T=0,w=null,L=-1,C=null;const M=new At,D=new At;let z=null;const H=new Je(0);let Y=0,q=n.width,j=n.height,K=1,N=null,$=null;const Z=new At(0,0,q,j),ae=new At(0,0,q,j);let Ce=!1;const Xe=new Wd;let X=!1,re=!1;const me=new St,de=new U,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ke(){return w===null?K:1}let b=i;function ge(A,I){return n.getContext(A,I)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",G,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",W,!1),b===null){const I="webgl2";if(b=ge(I,A),b===null)throw ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,Se,le,xe,_e,Ae,tt,P,E,k,Q,J,te,Ee,ie,ce,Le,oe,we,je,Ne,pe,Be,He;function ft(){ue=new P1(b),ue.init(),pe=new fA(b,ue),Se=new M1(b,ue,e,pe),le=new uA(b),xe=new D1(b),_e=new qT,Ae=new cA(b,ue,le,_e,Se,pe,xe),tt=new w1(_),P=new R1(_),E=new zM(b),Be=new y1(b,E),k=new b1(b,E,xe,Be),Q=new U1(b,k,E,xe),we=new N1(b,Se,Ae),ce=new E1(_e),J=new $T(_,tt,P,ue,Se,Be,ce),te=new xA(_,_e),Ee=new ZT,ie=new iA(ue),oe=new x1(_,tt,P,le,Q,h,l),Le=new lA(_,Q,Se),He=new yA(b,xe,Se,le),je=new S1(b,ue,xe),Ne=new L1(b,ue,xe),xe.programs=J.programs,_.capabilities=Se,_.extensions=ue,_.properties=_e,_.renderLists=Ee,_.shadowMap=Le,_.state=le,_.info=xe}ft();const y=new _A(_,b);this.xr=y,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(q,j,!1))},this.getSize=function(A){return A.set(q,j)},this.setSize=function(A,I,B=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,j=I,n.width=Math.floor(A*K),n.height=Math.floor(I*K),B===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(q*K,j*K).floor()},this.setDrawingBufferSize=function(A,I,B){q=A,j=I,K=B,n.width=Math.floor(A*B),n.height=Math.floor(I*B),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,I,B,V){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,I,B,V),le.viewport(M.copy(Z).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,I,B,V){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,I,B,V),le.scissor(D.copy(ae).multiplyScalar(K).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){le.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(A=!0,I=!0,B=!0){let V=0;if(A){let O=!1;if(w!==null){const fe=w.texture.format;O=fe===Mv||fe===Sv||fe===yv}if(O){const fe=w.texture.type,ve=fe===gr||fe===Zs||fe===Kl||fe===Qs||fe===vv||fe===xv,Te=oe.getClearColor(),Re=oe.getClearAlpha(),Oe=Te.r,ze=Te.g,Ue=Te.b;ve?(p[0]=Oe,p[1]=ze,p[2]=Ue,p[3]=Re,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=Oe,g[1]=ze,g[2]=Ue,g[3]=Re,b.clearBufferiv(b.COLOR,0,g))}else V|=b.COLOR_BUFFER_BIT}I&&(V|=b.DEPTH_BUFFER_BIT),B&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",G,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",W,!1),Ee.dispose(),ie.dispose(),_e.dispose(),tt.dispose(),P.dispose(),Q.dispose(),Be.dispose(),He.dispose(),J.dispose(),y.dispose(),y.removeEventListener("sessionstart",Pe),y.removeEventListener("sessionend",Ie),it.stop()};function G(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=xe.autoReset,I=Le.enabled,B=Le.autoUpdate,V=Le.needsUpdate,O=Le.type;ft(),xe.autoReset=A,Le.enabled=I,Le.autoUpdate=B,Le.needsUpdate=V,Le.type=O}function W(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const I=A.target;I.removeEventListener("dispose",ne),ee(I)}function ee(A){Me(A),_e.remove(A)}function Me(A){const I=_e.get(A).programs;I!==void 0&&(I.forEach(function(B){J.releaseProgram(B)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,B,V,O,fe){I===null&&(I=We);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Te=n0(A,I,B,V,O);le.setMaterial(V,ve);let Re=B.index,Oe=1;if(V.wireframe===!0){if(Re=k.getWireframeAttribute(B),Re===void 0)return;Oe=2}const ze=B.drawRange,Ue=B.attributes.position;let nt=ze.start*Oe,Et=(ze.start+ze.count)*Oe;fe!==null&&(nt=Math.max(nt,fe.start*Oe),Et=Math.min(Et,(fe.start+fe.count)*Oe)),Re!==null?(nt=Math.max(nt,0),Et=Math.min(Et,Re.count)):Ue!=null&&(nt=Math.max(nt,0),Et=Math.min(Et,Ue.count));const wt=Et-nt;if(wt<0||wt===1/0)return;Be.setup(O,V,Te,B,Re);let xn,rt=je;if(Re!==null&&(xn=E.get(Re),rt=Ne,rt.setIndex(xn)),O.isMesh)V.wireframe===!0?(le.setLineWidth(V.wireframeLinewidth*Ke()),rt.setMode(b.LINES)):rt.setMode(b.TRIANGLES);else if(O.isLine){let be=V.linewidth;be===void 0&&(be=1),le.setLineWidth(be*Ke()),O.isLineSegments?rt.setMode(b.LINES):O.isLineLoop?rt.setMode(b.LINE_LOOP):rt.setMode(b.LINE_STRIP)}else O.isPoints?rt.setMode(b.POINTS):O.isSprite&&rt.setMode(b.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)rt.renderInstances(nt,wt,O.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jt=Math.min(B.instanceCount,be);rt.renderInstances(nt,wt,Jt)}else rt.render(nt,wt)};function Ze(A,I,B){A.transparent===!0&&A.side===Ai&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,ha(A,I,B),A.side=mr,A.needsUpdate=!0,ha(A,I,B),A.side=Ai):ha(A,I,B)}this.compile=function(A,I,B=null){B===null&&(B=A),m=ie.get(B),m.init(I),v.push(m),B.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==B&&A.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const V=new Set;return A.traverse(function(O){const fe=O.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const Te=fe[ve];Ze(Te,B,O),V.add(Te)}else Ze(fe,B,O),V.add(fe)}),v.pop(),m=null,V},this.compileAsync=function(A,I,B=null){const V=this.compile(A,I,B);return new Promise(O=>{function fe(){if(V.forEach(function(ve){_e.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){O(A);return}setTimeout(fe,10)}ue.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ge=null;function Fe(A){Ge&&Ge(A)}function Pe(){it.stop()}function Ie(){it.start()}const it=new Iv;it.setAnimationLoop(Fe),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(A){Ge=A,y.setAnimationLoop(A),A===null?it.stop():it.start()},y.addEventListener("sessionstart",Pe),y.addEventListener("sessionend",Ie),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(I),I=y.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,I,w),m=ie.get(A,v.length),m.init(I),v.push(m),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xe.setFromProjectionMatrix(me),re=this.localClippingEnabled,X=ce.init(this.clippingPlanes,re),x=Ee.get(A,c.length),x.init(),c.push(x),y.enabled===!0&&y.isPresenting===!0){const fe=_.xr.getDepthSensingMesh();fe!==null&&mt(fe,I,-1/0,_.sortObjects)}mt(A,I,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,$),Ve=y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1,Ve&&oe.addToRenderList(x,A),this.info.render.frame++,X===!0&&ce.beginShadows();const B=m.state.shadowsArray;Le.render(B,A,I),X===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,O=x.transmissive;if(m.setupLights(),I.isArrayCamera){const fe=I.cameras;if(O.length>0)for(let ve=0,Te=fe.length;ve<Te;ve++){const Re=fe[ve];Rt(V,O,A,Re)}Ve&&oe.render(A);for(let ve=0,Te=fe.length;ve<Te;ve++){const Re=fe[ve];vt(x,A,Re,Re.viewport)}}else O.length>0&&Rt(V,O,A,I),Ve&&oe.render(A),vt(x,A,I);w!==null&&(Ae.updateMultisampleRenderTarget(w),Ae.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(_,A,I),Be.resetDefaultState(),L=-1,C=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&ce.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function mt(A,I,B,V){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){V&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const ve=Q.update(A),Te=A.material;Te.visible&&x.push(A,ve,Te,B,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const ve=Q.update(A),Te=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),de.copy(ve.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Te)){const Re=ve.groups;for(let Oe=0,ze=Re.length;Oe<ze;Oe++){const Ue=Re[Oe],nt=Te[Ue.materialIndex];nt&&nt.visible&&x.push(A,ve,nt,B,de.z,Ue)}}else Te.visible&&x.push(A,ve,Te,B,de.z,null)}}const fe=A.children;for(let ve=0,Te=fe.length;ve<Te;ve++)mt(fe[ve],I,B,V)}function vt(A,I,B,V){const O=A.opaque,fe=A.transmissive,ve=A.transparent;m.setupLightsView(B),X===!0&&ce.setGlobalState(_.clippingPlanes,B),V&&le.viewport(M.copy(V)),O.length>0&&gt(O,I,B),fe.length>0&&gt(fe,I,B),ve.length>0&&gt(ve,I,B),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Rt(A,I,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new $r(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Su:gr,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const fe=m.state.transmissionRenderTarget[V.id],ve=V.viewport||M;fe.setSize(ve.z,ve.w);const Te=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),Ve?oe.render(B):_.clear();const Re=_.toneMapping;_.toneMapping=dr;const Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),X===!0&&ce.setGlobalState(_.clippingPlanes,V),gt(A,B,V),Ae.updateMultisampleRenderTarget(fe),Ae.updateRenderTargetMipmap(fe),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ue=0,nt=I.length;Ue<nt;Ue++){const Et=I[Ue],wt=Et.object,xn=Et.geometry,rt=Et.material,be=Et.group;if(rt.side===Ai&&wt.layers.test(V.layers)){const Jt=rt.side;rt.side=mn,rt.needsUpdate=!0,hi(wt,B,V,xn,rt,be),rt.side=Jt,rt.needsUpdate=!0,ze=!0}}ze===!0&&(Ae.updateMultisampleRenderTarget(fe),Ae.updateRenderTargetMipmap(fe))}_.setRenderTarget(Te),_.setClearColor(H,Y),Oe!==void 0&&(V.viewport=Oe),_.toneMapping=Re}function gt(A,I,B){const V=I.isScene===!0?I.overrideMaterial:null;for(let O=0,fe=A.length;O<fe;O++){const ve=A[O],Te=ve.object,Re=ve.geometry,Oe=V===null?ve.material:V,ze=ve.group;Te.layers.test(B.layers)&&hi(Te,I,B,Re,Oe,ze)}}function hi(A,I,B,V,O,fe){A.onBeforeRender(_,I,B,V,O,fe),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(_,I,B,V,A,fe),O.transparent===!0&&O.side===Ai&&O.forceSinglePass===!1?(O.side=mn,O.needsUpdate=!0,_.renderBufferDirect(B,I,V,O,A,fe),O.side=mr,O.needsUpdate=!0,_.renderBufferDirect(B,I,V,O,A,fe),O.side=Ai):_.renderBufferDirect(B,I,V,O,A,fe),A.onAfterRender(_,I,B,V,O,fe)}function ha(A,I,B){I.isScene!==!0&&(I=We);const V=_e.get(A),O=m.state.lights,fe=m.state.shadowsArray,ve=O.state.version,Te=J.getParameters(A,O.state,fe,I,B),Re=J.getProgramCacheKey(Te);let Oe=V.programs;V.environment=A.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(A.isMeshStandardMaterial?P:tt).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?I.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",ne),Oe=new Map,V.programs=Oe);let ze=Oe.get(Re);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===ve)return Zd(A,Te),ze}else Te.uniforms=J.getUniforms(A),A.onBuild(B,Te,_),A.onBeforeCompile(Te,_),ze=J.acquireProgram(Te,Re),Oe.set(Re,ze),V.uniforms=Te.uniforms;const Ue=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),Zd(A,Te),V.needsLights=r0(A),V.lightsStateVersion=ve,V.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function Kd(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=El.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function Zd(A,I){const B=_e.get(A);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function n0(A,I,B,V,O){I.isScene!==!0&&(I=We),Ae.resetTextureUnits();const fe=I.fog,ve=V.isMeshStandardMaterial?I.environment:null,Te=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sr,Re=(V.isMeshStandardMaterial?P:tt).get(V.envMap||ve),Oe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,Et=!!B.morphAttributes.color;let wt=dr;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(wt=_.toneMapping);const xn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=xn!==void 0?xn.length:0,be=_e.get(V),Jt=m.state.lights;if(X===!0&&(re===!0||A!==C)){const Pn=A===C&&V.id===L;ce.setState(V,A,Pn)}let lt=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Jt.state.version||be.outputColorSpace!==Te||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==Re||V.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ce.numPlanes||be.numIntersection!==ce.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==ze||be.morphTargets!==Ue||be.morphNormals!==nt||be.morphColors!==Et||be.toneMapping!==wt||be.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,be.__version=V.version);let pi=be.currentProgram;lt===!0&&(pi=ha(V,I,O));let pa=!1,Mr=!1,Au=!1;const It=pi.getUniforms(),Bi=be.uniforms;if(le.useProgram(pi.program)&&(pa=!0,Mr=!0,Au=!0),V.id!==L&&(L=V.id,Mr=!0),pa||C!==A){It.setValue(b,"projectionMatrix",A.projectionMatrix),It.setValue(b,"viewMatrix",A.matrixWorldInverse);const Pn=It.map.cameraPosition;Pn!==void 0&&Pn.setValue(b,de.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&It.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&It.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Mr=!0,Au=!0)}if(O.isSkinnedMesh){It.setOptional(b,O,"bindMatrix"),It.setOptional(b,O,"bindMatrixInverse");const Pn=O.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),It.setValue(b,"boneTexture",Pn.boneTexture,Ae))}O.isBatchedMesh&&(It.setOptional(b,O,"batchingTexture"),It.setValue(b,"batchingTexture",O._matricesTexture,Ae),It.setOptional(b,O,"batchingColorTexture"),O._colorsTexture!==null&&It.setValue(b,"batchingColorTexture",O._colorsTexture,Ae));const Cu=B.morphAttributes;if((Cu.position!==void 0||Cu.normal!==void 0||Cu.color!==void 0)&&we.update(O,B,pi),(Mr||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,It.setValue(b,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bi.envMap.value=Re,Bi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Bi.envMapIntensity.value=I.environmentIntensity),Mr&&(It.setValue(b,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&i0(Bi,Au),fe&&V.fog===!0&&te.refreshFogUniforms(Bi,fe),te.refreshMaterialUniforms(Bi,V,K,j,m.state.transmissionRenderTarget[A.id]),El.upload(b,Kd(be),Bi,Ae)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(El.upload(b,Kd(be),Bi,Ae),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&It.setValue(b,"center",O.center),It.setValue(b,"modelViewMatrix",O.modelViewMatrix),It.setValue(b,"normalMatrix",O.normalMatrix),It.setValue(b,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pn=V.uniformsGroups;for(let Ru=0,s0=Pn.length;Ru<s0;Ru++){const Qd=Pn[Ru];He.update(Qd,pi),He.bind(Qd,pi)}}return pi}function i0(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function r0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,I,B){_e.get(A.texture).__webglTexture=I,_e.get(A.depthTexture).__webglTexture=B;const V=_e.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,I){const B=_e.get(A);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,B=0){w=A,R=I,T=B;let V=!0,O=null,fe=!1,ve=!1;if(A){const Re=_e.get(A);Re.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(b.FRAMEBUFFER,null),V=!1):Re.__webglFramebuffer===void 0?Ae.setupRenderTarget(A):Re.__hasExternalTextures&&Ae.rebindTextures(A,_e.get(A.texture).__webglTexture,_e.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const ze=_e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?O=ze[I][B]:O=ze[I],fe=!0):A.samples>0&&Ae.useMultisampledRTT(A)===!1?O=_e.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[B]:O=ze,M.copy(A.viewport),D.copy(A.scissor),z=A.scissorTest}else M.copy(Z).multiplyScalar(K).floor(),D.copy(ae).multiplyScalar(K).floor(),z=Ce;if(le.bindFramebuffer(b.FRAMEBUFFER,O)&&V&&le.drawBuffers(A,O),le.viewport(M),le.scissor(D),le.setScissorTest(z),fe){const Re=_e.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,Re.__webglTexture,B)}else if(ve){const Re=_e.get(A.texture),Oe=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,Oe)}L=-1},this.readRenderTargetPixels=function(A,I,B,V,O,fe,ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){le.bindFramebuffer(b.FRAMEBUFFER,Te);try{const Re=A.texture,Oe=Re.format,ze=Re.type;if(!Se.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-V&&B>=0&&B<=A.height-O&&b.readPixels(I,B,V,O,pe.convert(Oe),pe.convert(ze),fe)}finally{const Re=w!==null?_e.get(w).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,I,B,V,O,fe,ve){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=_e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){le.bindFramebuffer(b.FRAMEBUFFER,Te);try{const Re=A.texture,Oe=Re.format,ze=Re.type;if(!Se.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=A.width-V&&B>=0&&B<=A.height-O){const Ue=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ue),b.bufferData(b.PIXEL_PACK_BUFFER,fe.byteLength,b.STREAM_READ),b.readPixels(I,B,V,O,pe.convert(Oe),pe.convert(ze),0),b.flush();const nt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);await pM(b,nt,4);try{b.bindBuffer(b.PIXEL_PACK_BUFFER,Ue),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,fe)}finally{b.deleteBuffer(Ue),b.deleteSync(nt)}return fe}}finally{const Re=w!==null?_e.get(w).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,I=null,B=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,A=arguments[1]);const V=Math.pow(2,-B),O=Math.floor(A.image.width*V),fe=Math.floor(A.image.height*V),ve=I!==null?I.x:0,Te=I!==null?I.y:0;Ae.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,ve,Te,O,fe),le.unbindTexture()},this.copyTextureToTexture=function(A,I,B=null,V=null,O=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1],I=arguments[2],O=arguments[3]||0,B=null);let fe,ve,Te,Re,Oe,ze;B!==null?(fe=B.max.x-B.min.x,ve=B.max.y-B.min.y,Te=B.min.x,Re=B.min.y):(fe=A.image.width,ve=A.image.height,Te=0,Re=0),V!==null?(Oe=V.x,ze=V.y):(Oe=0,ze=0);const Ue=pe.convert(I.format),nt=pe.convert(I.type);Ae.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const Et=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(b.UNPACK_SKIP_PIXELS),rt=b.getParameter(b.UNPACK_SKIP_ROWS),be=b.getParameter(b.UNPACK_SKIP_IMAGES),Jt=A.isCompressedTexture?A.mipmaps[O]:A.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Jt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Jt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Te),b.pixelStorei(b.UNPACK_SKIP_ROWS,Re),A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,O,Oe,ze,fe,ve,Ue,nt,Jt.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,O,Oe,ze,Jt.width,Jt.height,Ue,Jt.data):b.texSubImage2D(b.TEXTURE_2D,O,Oe,ze,Ue,nt,Jt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Et),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(b.UNPACK_SKIP_ROWS,rt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,be),O===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(A,I,B=null,V=null,O=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,A=arguments[2],I=arguments[3],O=arguments[4]||0);let fe,ve,Te,Re,Oe,ze,Ue,nt,Et;const wt=A.isCompressedTexture?A.mipmaps[O]:A.image;B!==null?(fe=B.max.x-B.min.x,ve=B.max.y-B.min.y,Te=B.max.z-B.min.z,Re=B.min.x,Oe=B.min.y,ze=B.min.z):(fe=wt.width,ve=wt.height,Te=wt.depth,Re=0,Oe=0,ze=0),V!==null?(Ue=V.x,nt=V.y,Et=V.z):(Ue=0,nt=0,Et=0);const xn=pe.convert(I.format),rt=pe.convert(I.type);let be;if(I.isData3DTexture)Ae.setTexture3D(I,0),be=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Ae.setTexture2DArray(I,0),be=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const Jt=b.getParameter(b.UNPACK_ROW_LENGTH),lt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),pi=b.getParameter(b.UNPACK_SKIP_PIXELS),pa=b.getParameter(b.UNPACK_SKIP_ROWS),Mr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Re),b.pixelStorei(b.UNPACK_SKIP_ROWS,Oe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ze),A.isDataTexture||A.isData3DTexture?b.texSubImage3D(be,O,Ue,nt,Et,fe,ve,Te,xn,rt,wt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(be,O,Ue,nt,Et,fe,ve,Te,xn,wt.data):b.texSubImage3D(be,O,Ue,nt,Et,fe,ve,Te,xn,rt,wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Jt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,lt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,pi),b.pixelStorei(b.UNPACK_SKIP_ROWS,pa),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Mr),O===0&&I.generateMipmaps&&b.generateMipmap(be),le.unbindTexture()},this.initRenderTarget=function(A){_e.get(A).__webglFramebuffer===void 0&&Ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ae.setTextureCube(A,0):A.isData3DTexture?Ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ae.setTexture2DArray(A,0):Ae.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,le.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kd?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===Mu?"display-p3":"srgb"}}class MA extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class EA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ff,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new U;class nr{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Yn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Yn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Yn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Yn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Tn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vv extends fa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rm=new St,kf=new ca,rl=new so,sl=new U;class Pm extends _n{constructor(e=new Qn,n=new Vv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;Rm.copy(r).invert(),kf.copy(e.ray).applyMatrix4(Rm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=u.getX(g);sl.fromBufferAttribute(d,m),bm(sl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,x=p;g<x;g++)sl.fromBufferAttribute(d,g),bm(sl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bm(t,e,n,i,r,s,o){const a=kf.distanceSqToPoint(t);if(a<n){const l=new U;kf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class wA extends Qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new U,s=new U;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,f=l.length;u<f;++u){const d=l[u],h=d.start,p=d.count;for(let g=h,x=h+p;g<x;g+=3)for(let m=0;m<3;m++){const c=a.getX(g+m),v=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,c),s.fromBufferAttribute(o,v),Lm(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const f=3*a+u,d=3*a+(u+1)%3;r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,d),Lm(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new fi(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Lm(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class TA extends Qn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Bf extends EA{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const Dm=new St;class AA{constructor(e,n,i=0,r=1/0){this.ray=new ca(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dm),this}intersectObject(e,n=!0,i=[]){return Hf(e,this,i,n),i.sort(Nm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Hf(e[r],this,i,n);return i.sort(Nm),i}}function Nm(t,e){return t.distance-e.distance}function Hf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Hf(s[o],e,n,!0)}}class Um{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Im=new U,ol=new U;class CA{constructor(e=new U,n=new U){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){Im.subVectors(e,this.start),ol.subVectors(this.end,this.start);const i=ol.dot(ol);let s=ol.dot(Im)/i;return n&&(s=Gt(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);function RA(t,e,n){var i,r=1;t==null&&(t=0),e==null&&(e=0),n==null&&(n=0);function s(){var o,a=i.length,l,u=0,f=0,d=0;for(o=0;o<a;++o)l=i[o],u+=l.x||0,f+=l.y||0,d+=l.z||0;for(u=(u/a-t)*r,f=(f/a-e)*r,d=(d/a-n)*r,o=0;o<a;++o)l=i[o],u&&(l.x-=u),f&&(l.y-=f),d&&(l.z-=d)}return s.initialize=function(o){i=o},s.x=function(o){return arguments.length?(t=+o,s):t},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(n=+o,s):n},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function PA(t){const e=+this._x.call(null,t);return Gv(this.cover(e),e,t)}function Gv(t,e,n){if(isNaN(e))return t;var i,r=t._root,s={data:n},o=t._x0,a=t._x1,l,u,f,d,h;if(!r)return t._root=s,t;for(;r.length;)if((f=e>=(l=(o+a)/2))?o=l:a=l,i=r,!(r=r[d=+f]))return i[d]=s,t;if(u=+t._x.call(null,r.data),e===u)return s.next=r,i?i[d]=s:t._root=s,t;do i=i?i[d]=new Array(2):t._root=new Array(2),(f=e>=(l=(o+a)/2))?o=l:a=l;while((d=+f)==(h=+(u>=l)));return i[h]=r,i[d]=s,t}function bA(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e);let i=1/0,r=-1/0;for(let s=0,o;s<e;++s)isNaN(o=+this._x.call(null,t[s]))||(n[s]=o,o<i&&(i=o),o>r&&(r=o));if(i>r)return this;this.cover(i).cover(r);for(let s=0;s<e;++s)Gv(this,n[s],t[s]);return this}function LA(t){if(isNaN(t=+t))return this;var e=this._x0,n=this._x1;if(isNaN(e))n=(e=Math.floor(t))+1;else{for(var i=n-e||1,r=this._root,s,o;e>t||t>=n;)switch(o=+(t<e),s=new Array(2),s[o]=r,r=s,i*=2,o){case 0:n=e+i;break;case 1:e=n-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=n,this}function DA(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function NA(t){return arguments.length?this.cover(+t[0][0]).cover(+t[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Di(t,e,n){this.node=t,this.x0=e,this.x1=n}function UA(t,e){var n,i=this._x0,r,s,o=this._x1,a=[],l=this._root,u,f;for(l&&a.push(new Di(l,i,o)),e==null?e=1/0:(i=t-e,o=t+e);u=a.pop();)if(!(!(l=u.node)||(r=u.x0)>o||(s=u.x1)<i))if(l.length){var d=(r+s)/2;a.push(new Di(l[1],d,s),new Di(l[0],r,d)),(f=+(t>=d))&&(u=a[a.length-1],a[a.length-1]=a[a.length-1-f],a[a.length-1-f]=u)}else{var h=Math.abs(t-+this._x.call(null,l.data));h<e&&(e=h,i=t-h,o=t+h,n=l.data)}return n}function IA(t){if(isNaN(l=+this._x.call(null,t)))return this;var e,n=this._root,i,r,s,o=this._x0,a=this._x1,l,u,f,d,h;if(!n)return this;if(n.length)for(;;){if((f=l>=(u=(o+a)/2))?o=u:a=u,e=n,!(n=n[d=+f]))return this;if(!n.length)break;e[d+1&1]&&(i=e,h=d)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,r?(s?r.next=s:delete r.next,this):e?(s?e[d]=s:delete e[d],(n=e[0]||e[1])&&n===(e[1]||e[0])&&!n.length&&(i?i[h]=n:this._root=n),this):(this._root=s,this)}function OA(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function FA(){return this._root}function zA(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function kA(t){var e=[],n,i=this._root,r,s,o;for(i&&e.push(new Di(i,this._x0,this._x1));n=e.pop();)if(!t(i=n.node,s=n.x0,o=n.x1)&&i.length){var a=(s+o)/2;(r=i[1])&&e.push(new Di(r,a,o)),(r=i[0])&&e.push(new Di(r,s,a))}return this}function BA(t){var e=[],n=[],i;for(this._root&&e.push(new Di(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.x1,l=(o+a)/2;(s=r[0])&&e.push(new Di(s,o,l)),(s=r[1])&&e.push(new Di(s,l,a))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.x1);return this}function HA(t){return t[0]}function VA(t){return arguments.length?(this._x=t,this):this._x}function Wv(t,e){var n=new jd(e??HA,NaN,NaN);return t==null?n:n.addAll(t)}function jd(t,e,n){this._x=t,this._x0=e,this._x1=n,this._root=void 0}function Om(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var vn=Wv.prototype=jd.prototype;vn.copy=function(){var t=new jd(this._x,this._x0,this._x1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=Om(e),t;for(n=[{source:e,target:t._root=new Array(2)}];e=n.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=Om(i));return t};vn.add=PA;vn.addAll=bA;vn.cover=LA;vn.data=DA;vn.extent=NA;vn.find=UA;vn.remove=IA;vn.removeAll=OA;vn.root=FA;vn.size=zA;vn.visit=kA;vn.visitAfter=BA;vn.x=VA;function GA(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Xv(this.cover(e,n),e,n,t)}function Xv(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,s=t._root,o={data:i},a=t._x0,l=t._y0,u=t._x1,f=t._y1,d,h,p,g,x,m,c,v;if(!s)return t._root=o,t;for(;s.length;)if((x=e>=(d=(a+u)/2))?a=d:u=d,(m=n>=(h=(l+f)/2))?l=h:f=h,r=s,!(s=s[c=m<<1|x]))return r[c]=o,t;if(p=+t._x.call(null,s.data),g=+t._y.call(null,s.data),e===p&&n===g)return o.next=s,r?r[c]=o:t._root=o,t;do r=r?r[c]=new Array(4):t._root=new Array(4),(x=e>=(d=(a+u)/2))?a=d:u=d,(m=n>=(h=(l+f)/2))?l=h:f=h;while((c=m<<1|x)===(v=(g>=h)<<1|p>=d));return r[v]=s,r[c]=o,t}function WA(t){var e,n,i=t.length,r,s,o=new Array(i),a=new Array(i),l=1/0,u=1/0,f=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(s=+this._y.call(null,e))||(o[n]=r,a[n]=s,r<l&&(l=r),r>f&&(f=r),s<u&&(u=s),s>d&&(d=s));if(l>f||u>d)return this;for(this.cover(l,u).cover(f,d),n=0;n<i;++n)Xv(this,o[n],a[n],t[n]);return this}function XA(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,s=(i=Math.floor(e))+1;else{for(var o=r-n||1,a=this._root,l,u;n>t||t>=r||i>e||e>=s;)switch(u=(e<i)<<1|t<n,l=new Array(4),l[u]=a,a=l,o*=2,u){case 0:r=n+o,s=i+o;break;case 1:n=r-o,s=i+o;break;case 2:r=n+o,i=s-o;break;case 3:n=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=n,this._y0=i,this._x1=r,this._y1=s,this}function jA(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function YA(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function rn(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}function $A(t,e,n){var i,r=this._x0,s=this._y0,o,a,l,u,f=this._x1,d=this._y1,h=[],p=this._root,g,x;for(p&&h.push(new rn(p,r,s,f,d)),n==null?n=1/0:(r=t-n,s=e-n,f=t+n,d=e+n,n*=n);g=h.pop();)if(!(!(p=g.node)||(o=g.x0)>f||(a=g.y0)>d||(l=g.x1)<r||(u=g.y1)<s))if(p.length){var m=(o+l)/2,c=(a+u)/2;h.push(new rn(p[3],m,c,l,u),new rn(p[2],o,c,m,u),new rn(p[1],m,a,l,c),new rn(p[0],o,a,m,c)),(x=(e>=c)<<1|t>=m)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-x],h[h.length-1-x]=g)}else{var v=t-+this._x.call(null,p.data),_=e-+this._y.call(null,p.data),S=v*v+_*_;if(S<n){var R=Math.sqrt(n=S);r=t-R,s=e-R,f=t+R,d=e+R,i=p.data}}return i}function qA(t){if(isNaN(f=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,u=this._y1,f,d,h,p,g,x,m,c;if(!n)return this;if(n.length)for(;;){if((g=f>=(h=(o+l)/2))?o=h:l=h,(x=d>=(p=(a+u)/2))?a=p:u=p,e=n,!(n=n[m=x<<1|g]))return this;if(!n.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,c=m)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,r?(s?r.next=s:delete r.next,this):e?(s?e[m]=s:delete e[m],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[c]=n:this._root=n),this):(this._root=s,this)}function KA(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function ZA(){return this._root}function QA(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function JA(t){var e=[],n,i=this._root,r,s,o,a,l;for(i&&e.push(new rn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,s=n.x0,o=n.y0,a=n.x1,l=n.y1)&&i.length){var u=(s+a)/2,f=(o+l)/2;(r=i[3])&&e.push(new rn(r,u,f,a,l)),(r=i[2])&&e.push(new rn(r,s,f,u,l)),(r=i[1])&&e.push(new rn(r,u,o,a,f)),(r=i[0])&&e.push(new rn(r,s,o,u,f))}return this}function eC(t){var e=[],n=[],i;for(this._root&&e.push(new rn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,u=i.y1,f=(o+l)/2,d=(a+u)/2;(s=r[0])&&e.push(new rn(s,o,a,f,d)),(s=r[1])&&e.push(new rn(s,f,a,l,d)),(s=r[2])&&e.push(new rn(s,o,d,f,u)),(s=r[3])&&e.push(new rn(s,f,d,l,u))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function tC(t){return t[0]}function nC(t){return arguments.length?(this._x=t,this):this._x}function iC(t){return t[1]}function rC(t){return arguments.length?(this._y=t,this):this._y}function jv(t,e,n){var i=new Yd(e??tC,n??iC,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function Yd(t,e,n,i,r,s){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Fm(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var ln=jv.prototype=Yd.prototype;ln.copy=function(){var t=new Yd(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=Fm(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Fm(i));return t};ln.add=GA;ln.addAll=WA;ln.cover=XA;ln.data=jA;ln.extent=YA;ln.find=$A;ln.remove=qA;ln.removeAll=KA;ln.root=ZA;ln.size=QA;ln.visit=JA;ln.visitAfter=eC;ln.x=nC;ln.y=rC;function sC(t){const e=+this._x.call(null,t),n=+this._y.call(null,t),i=+this._z.call(null,t);return Yv(this.cover(e,n,i),e,n,i,t)}function Yv(t,e,n,i,r){if(isNaN(e)||isNaN(n)||isNaN(i))return t;var s,o=t._root,a={data:r},l=t._x0,u=t._y0,f=t._z0,d=t._x1,h=t._y1,p=t._z1,g,x,m,c,v,_,S,R,T,w,L;if(!o)return t._root=a,t;for(;o.length;)if((S=e>=(g=(l+d)/2))?l=g:d=g,(R=n>=(x=(u+h)/2))?u=x:h=x,(T=i>=(m=(f+p)/2))?f=m:p=m,s=o,!(o=o[w=T<<2|R<<1|S]))return s[w]=a,t;if(c=+t._x.call(null,o.data),v=+t._y.call(null,o.data),_=+t._z.call(null,o.data),e===c&&n===v&&i===_)return a.next=o,s?s[w]=a:t._root=a,t;do s=s?s[w]=new Array(8):t._root=new Array(8),(S=e>=(g=(l+d)/2))?l=g:d=g,(R=n>=(x=(u+h)/2))?u=x:h=x,(T=i>=(m=(f+p)/2))?f=m:p=m;while((w=T<<2|R<<1|S)===(L=(_>=m)<<2|(v>=x)<<1|c>=g));return s[L]=o,s[w]=a,t}function oC(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let s=1/0,o=1/0,a=1/0,l=-1/0,u=-1/0,f=-1/0;for(let d=0,h,p,g,x;d<e;++d)isNaN(p=+this._x.call(null,h=t[d]))||isNaN(g=+this._y.call(null,h))||isNaN(x=+this._z.call(null,h))||(n[d]=p,i[d]=g,r[d]=x,p<s&&(s=p),p>l&&(l=p),g<o&&(o=g),g>u&&(u=g),x<a&&(a=x),x>f&&(f=x));if(s>l||o>u||a>f)return this;this.cover(s,o,a).cover(l,u,f);for(let d=0;d<e;++d)Yv(this,n[d],i[d],r[d],t[d]);return this}function aC(t,e,n){if(isNaN(t=+t)||isNaN(e=+e)||isNaN(n=+n))return this;var i=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(t))+1,a=(r=Math.floor(e))+1,l=(s=Math.floor(n))+1;else{for(var u=o-i||1,f=this._root,d,h;i>t||t>=o||r>e||e>=a||s>n||n>=l;)switch(h=(n<s)<<2|(e<r)<<1|t<i,d=new Array(8),d[h]=f,f=d,u*=2,h){case 0:o=i+u,a=r+u,l=s+u;break;case 1:i=o-u,a=r+u,l=s+u;break;case 2:o=i+u,r=a-u,l=s+u;break;case 3:i=o-u,r=a-u,l=s+u;break;case 4:o=i+u,a=r+u,s=l-u;break;case 5:i=o-u,a=r+u,s=l-u;break;case 6:o=i+u,r=a-u,s=l-u;break;case 7:i=o-u,r=a-u,s=l-u;break}this._root&&this._root.length&&(this._root=f)}return this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function lC(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function uC(t){return arguments.length?this.cover(+t[0][0],+t[0][1],+t[0][2]).cover(+t[1][0],+t[1][1],+t[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function ut(t,e,n,i,r,s,o){this.node=t,this.x0=e,this.y0=n,this.z0=i,this.x1=r,this.y1=s,this.z1=o}function cC(t,e,n,i){var r,s=this._x0,o=this._y0,a=this._z0,l,u,f,d,h,p,g=this._x1,x=this._y1,m=this._z1,c=[],v=this._root,_,S;for(v&&c.push(new ut(v,s,o,a,g,x,m)),i==null?i=1/0:(s=t-i,o=e-i,a=n-i,g=t+i,x=e+i,m=n+i,i*=i);_=c.pop();)if(!(!(v=_.node)||(l=_.x0)>g||(u=_.y0)>x||(f=_.z0)>m||(d=_.x1)<s||(h=_.y1)<o||(p=_.z1)<a))if(v.length){var R=(l+d)/2,T=(u+h)/2,w=(f+p)/2;c.push(new ut(v[7],R,T,w,d,h,p),new ut(v[6],l,T,w,R,h,p),new ut(v[5],R,u,w,d,T,p),new ut(v[4],l,u,w,R,T,p),new ut(v[3],R,T,f,d,h,w),new ut(v[2],l,T,f,R,h,w),new ut(v[1],R,u,f,d,T,w),new ut(v[0],l,u,f,R,T,w)),(S=(n>=w)<<2|(e>=T)<<1|t>=R)&&(_=c[c.length-1],c[c.length-1]=c[c.length-1-S],c[c.length-1-S]=_)}else{var L=t-+this._x.call(null,v.data),C=e-+this._y.call(null,v.data),M=n-+this._z.call(null,v.data),D=L*L+C*C+M*M;if(D<i){var z=Math.sqrt(i=D);s=t-z,o=e-z,a=n-z,g=t+z,x=e+z,m=n+z,r=v.data}}return r}const fC=(t,e,n,i,r,s)=>Math.sqrt((t-i)**2+(e-r)**2+(n-s)**2);function dC(t,e,n,i){const r=[],s=t-i,o=e-i,a=n-i,l=t+i,u=e+i,f=n+i;return this.visit((d,h,p,g,x,m,c)=>{if(!d.length)do{const v=d.data;fC(t,e,n,this._x(v),this._y(v),this._z(v))<=i&&r.push(v)}while(d=d.next);return h>l||p>u||g>f||x<s||m<o||c<a}),r}function hC(t){if(isNaN(h=+this._x.call(null,t))||isNaN(p=+this._y.call(null,t))||isNaN(g=+this._z.call(null,t)))return this;var e,n=this._root,i,r,s,o=this._x0,a=this._y0,l=this._z0,u=this._x1,f=this._y1,d=this._z1,h,p,g,x,m,c,v,_,S,R,T;if(!n)return this;if(n.length)for(;;){if((v=h>=(x=(o+u)/2))?o=x:u=x,(_=p>=(m=(a+f)/2))?a=m:f=m,(S=g>=(c=(l+d)/2))?l=c:d=c,e=n,!(n=n[R=S<<2|_<<1|v]))return this;if(!n.length)break;(e[R+1&7]||e[R+2&7]||e[R+3&7]||e[R+4&7]||e[R+5&7]||e[R+6&7]||e[R+7&7])&&(i=e,T=R)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,r?(s?r.next=s:delete r.next,this):e?(s?e[R]=s:delete e[R],(n=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&n===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[T]=n:this._root=n),this):(this._root=s,this)}function pC(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function mC(){return this._root}function gC(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function _C(t){var e=[],n,i=this._root,r,s,o,a,l,u,f;for(i&&e.push(new ut(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();)if(!t(i=n.node,s=n.x0,o=n.y0,a=n.z0,l=n.x1,u=n.y1,f=n.z1)&&i.length){var d=(s+l)/2,h=(o+u)/2,p=(a+f)/2;(r=i[7])&&e.push(new ut(r,d,h,p,l,u,f)),(r=i[6])&&e.push(new ut(r,s,h,p,d,u,f)),(r=i[5])&&e.push(new ut(r,d,o,p,l,h,f)),(r=i[4])&&e.push(new ut(r,s,o,p,d,h,f)),(r=i[3])&&e.push(new ut(r,d,h,a,l,u,p)),(r=i[2])&&e.push(new ut(r,s,h,a,d,u,p)),(r=i[1])&&e.push(new ut(r,d,o,a,l,h,p)),(r=i[0])&&e.push(new ut(r,s,o,a,d,h,p))}return this}function vC(t){var e=[],n=[],i;for(this._root&&e.push(new ut(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.z0,u=i.x1,f=i.y1,d=i.z1,h=(o+u)/2,p=(a+f)/2,g=(l+d)/2;(s=r[0])&&e.push(new ut(s,o,a,l,h,p,g)),(s=r[1])&&e.push(new ut(s,h,a,l,u,p,g)),(s=r[2])&&e.push(new ut(s,o,p,l,h,f,g)),(s=r[3])&&e.push(new ut(s,h,p,l,u,f,g)),(s=r[4])&&e.push(new ut(s,o,a,g,h,p,d)),(s=r[5])&&e.push(new ut(s,h,a,g,u,p,d)),(s=r[6])&&e.push(new ut(s,o,p,g,h,f,d)),(s=r[7])&&e.push(new ut(s,h,p,g,u,f,d))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function xC(t){return t[0]}function yC(t){return arguments.length?(this._x=t,this):this._x}function SC(t){return t[1]}function MC(t){return arguments.length?(this._y=t,this):this._y}function EC(t){return t[2]}function wC(t){return arguments.length?(this._z=t,this):this._z}function $v(t,e,n,i){var r=new $d(e??xC,n??SC,i??EC,NaN,NaN,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function $d(t,e,n,i,r,s,o,a,l){this._x=t,this._y=e,this._z=n,this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function zm(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var jt=$v.prototype=$d.prototype;jt.copy=function(){var t=new $d(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=zm(e),t;for(n=[{source:e,target:t._root=new Array(8)}];e=n.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=zm(i));return t};jt.add=sC;jt.addAll=oC;jt.cover=aC;jt.data=lC;jt.extent=uC;jt.find=cC;jt.findAllWithinRadius=dC;jt.remove=hC;jt.removeAll=pC;jt.root=mC;jt.size=gC;jt.visit=_C;jt.visitAfter=vC;jt.x=yC;jt.y=MC;jt.z=wC;function ko(t){return function(){return t}}function Ti(t){return(t()-.5)*1e-6}function TC(t){return t.index}function km(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function AC(t){var e=TC,n=h,i,r=ko(30),s,o,a,l,u,f,d=1;t==null&&(t=[]);function h(c){return 1/Math.min(l[c.source.index],l[c.target.index])}function p(c){for(var v=0,_=t.length;v<d;++v)for(var S=0,R,T,w,L=0,C=0,M=0,D,z;S<_;++S)R=t[S],T=R.source,w=R.target,L=w.x+w.vx-T.x-T.vx||Ti(f),a>1&&(C=w.y+w.vy-T.y-T.vy||Ti(f)),a>2&&(M=w.z+w.vz-T.z-T.vz||Ti(f)),D=Math.sqrt(L*L+C*C+M*M),D=(D-s[S])/D*c*i[S],L*=D,C*=D,M*=D,w.vx-=L*(z=u[S]),a>1&&(w.vy-=C*z),a>2&&(w.vz-=M*z),T.vx+=L*(z=1-z),a>1&&(T.vy+=C*z),a>2&&(T.vz+=M*z)}function g(){if(o){var c,v=o.length,_=t.length,S=new Map(o.map((T,w)=>[e(T,w,o),T])),R;for(c=0,l=new Array(v);c<_;++c)R=t[c],R.index=c,typeof R.source!="object"&&(R.source=km(S,R.source)),typeof R.target!="object"&&(R.target=km(S,R.target)),l[R.source.index]=(l[R.source.index]||0)+1,l[R.target.index]=(l[R.target.index]||0)+1;for(c=0,u=new Array(_);c<_;++c)R=t[c],u[c]=l[R.source.index]/(l[R.source.index]+l[R.target.index]);i=new Array(_),x(),s=new Array(_),m()}}function x(){if(o)for(var c=0,v=t.length;c<v;++c)i[c]=+n(t[c],c,t)}function m(){if(o)for(var c=0,v=t.length;c<v;++c)s[c]=+r(t[c],c,t)}return p.initialize=function(c,...v){o=c,f=v.find(_=>typeof _=="function")||Math.random,a=v.find(_=>[1,2,3].includes(_))||2,g()},p.links=function(c){return arguments.length?(t=c,g(),p):t},p.id=function(c){return arguments.length?(e=c,p):e},p.iterations=function(c){return arguments.length?(d=+c,p):d},p.strength=function(c){return arguments.length?(n=typeof c=="function"?c:ko(+c),x(),p):n},p.distance=function(c){return arguments.length?(r=typeof c=="function"?c:ko(+c),m(),p):r},p}var CC={value:()=>{}};function qv(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new wl(n)}function wl(t){this._=t}function RC(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}wl.prototype=qv.prototype={constructor:wl,on:function(t,e){var n=this._,i=RC(t+"",n),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(t=i[s]).type)&&(r=PC(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(t=i[s]).type)n[r]=Bm(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Bm(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new wl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,s;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(s=this._[t],i=0,r=s.length;i<r;++i)s[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,s=i.length;r<s;++r)i[r].value.apply(e,n)}};function PC(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Bm(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=CC,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var to=0,Ao=0,yo=0,Kv=1e3,nu,Co,iu=0,Kr=0,Tu=0,ra=typeof performance=="object"&&performance.now?performance:Date,Zv=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Qv(){return Kr||(Zv(bC),Kr=ra.now()+Tu)}function bC(){Kr=0}function Vf(){this._call=this._time=this._next=null}Vf.prototype=Jv.prototype={constructor:Vf,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Qv():+n)+(e==null?0:+e),!this._next&&Co!==this&&(Co?Co._next=this:nu=this,Co=this),this._call=t,this._time=n,Gf()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gf())}};function Jv(t,e,n){var i=new Vf;return i.restart(t,e,n),i}function LC(){Qv(),++to;for(var t=nu,e;t;)(e=Kr-t._time)>=0&&t._call.call(void 0,e),t=t._next;--to}function Hm(){Kr=(iu=ra.now())+Tu,to=Ao=0;try{LC()}finally{to=0,NC(),Kr=0}}function DC(){var t=ra.now(),e=t-iu;e>Kv&&(Tu-=e,iu=t)}function NC(){for(var t,e=nu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:nu=n);Co=t,Gf(i)}function Gf(t){if(!to){Ao&&(Ao=clearTimeout(Ao));var e=t-Kr;e>24?(t<1/0&&(Ao=setTimeout(Hm,t-ra.now()-Tu)),yo&&(yo=clearInterval(yo))):(yo||(iu=ra.now(),yo=setInterval(DC,Kv)),to=1,Zv(Hm))}}const UC=1664525,IC=1013904223,Vm=4294967296;function OC(){let t=1;return()=>(t=(UC*t+IC)%Vm)/Vm}var Gm=3;function Nc(t){return t.x}function Wm(t){return t.y}function FC(t){return t.z}var zC=10,kC=Math.PI*(3-Math.sqrt(5)),BC=Math.PI*20/(9+Math.sqrt(221));function HC(t,e){e=e||2;var n=Math.min(Gm,Math.max(1,Math.round(e))),i,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,u=new Map,f=Jv(p),d=qv("tick","end"),h=OC();t==null&&(t=[]);function p(){g(),d.call("tick",i),r<s&&(f.stop(),d.call("end",i))}function g(c){var v,_=t.length,S;c===void 0&&(c=1);for(var R=0;R<c;++R)for(r+=(a-r)*o,u.forEach(function(T){T(r)}),v=0;v<_;++v)S=t[v],S.fx==null?S.x+=S.vx*=l:(S.x=S.fx,S.vx=0),n>1&&(S.fy==null?S.y+=S.vy*=l:(S.y=S.fy,S.vy=0)),n>2&&(S.fz==null?S.z+=S.vz*=l:(S.z=S.fz,S.vz=0));return i}function x(){for(var c=0,v=t.length,_;c<v;++c){if(_=t[c],_.index=c,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||n>1&&isNaN(_.y)||n>2&&isNaN(_.z)){var S=zC*(n>2?Math.cbrt(.5+c):n>1?Math.sqrt(.5+c):c),R=c*kC,T=c*BC;n===1?_.x=S:n===2?(_.x=S*Math.cos(R),_.y=S*Math.sin(R)):(_.x=S*Math.sin(R)*Math.cos(T),_.y=S*Math.cos(R),_.z=S*Math.sin(R)*Math.sin(T))}(isNaN(_.vx)||n>1&&isNaN(_.vy)||n>2&&isNaN(_.vz))&&(_.vx=0,n>1&&(_.vy=0),n>2&&(_.vz=0))}}function m(c){return c.initialize&&c.initialize(t,h,n),c}return x(),i={tick:g,restart:function(){return f.restart(p),i},stop:function(){return f.stop(),i},numDimensions:function(c){return arguments.length?(n=Math.min(Gm,Math.max(1,Math.round(c))),u.forEach(m),i):n},nodes:function(c){return arguments.length?(t=c,x(),u.forEach(m),i):t},alpha:function(c){return arguments.length?(r=+c,i):r},alphaMin:function(c){return arguments.length?(s=+c,i):s},alphaDecay:function(c){return arguments.length?(o=+c,i):+o},alphaTarget:function(c){return arguments.length?(a=+c,i):a},velocityDecay:function(c){return arguments.length?(l=1-c,i):1-l},randomSource:function(c){return arguments.length?(h=c,u.forEach(m),i):h},force:function(c,v){return arguments.length>1?(v==null?u.delete(c):u.set(c,m(v)),i):u.get(c)},find:function(){var c=Array.prototype.slice.call(arguments),v=c.shift()||0,_=(n>1?c.shift():null)||0,S=(n>2?c.shift():null)||0,R=c.shift()||1/0,T=0,w=t.length,L,C,M,D,z,H;for(R*=R,T=0;T<w;++T)z=t[T],L=v-z.x,C=_-(z.y||0),M=S-(z.z||0),D=L*L+C*C+M*M,D<R&&(H=z,R=D);return H},on:function(c,v){return arguments.length>1?(d.on(c,v),i):d.on(c)}}}function VC(){var t,e,n,i,r,s=ko(-30),o,a=1,l=1/0,u=.81;function f(g){var x,m=t.length,c=(e===1?Wv(t,Nc):e===2?jv(t,Nc,Wm):e===3?$v(t,Nc,Wm,FC):null).visitAfter(h);for(r=g,x=0;x<m;++x)n=t[x],c.visit(p)}function d(){if(t){var g,x=t.length,m;for(o=new Array(x),g=0;g<x;++g)m=t[g],o[m.index]=+s(m,g,t)}}function h(g){var x=0,m,c,v=0,_,S,R,T,w=g.length;if(w){for(_=S=R=T=0;T<w;++T)(m=g[T])&&(c=Math.abs(m.value))&&(x+=m.value,v+=c,_+=c*(m.x||0),S+=c*(m.y||0),R+=c*(m.z||0));x*=Math.sqrt(4/w),g.x=_/v,e>1&&(g.y=S/v),e>2&&(g.z=R/v)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do x+=o[m.data.index];while(m=m.next)}g.value=x}function p(g,x,m,c,v){if(!g.value)return!0;var _=[m,c,v][e-1],S=g.x-n.x,R=e>1?g.y-n.y:0,T=e>2?g.z-n.z:0,w=_-x,L=S*S+R*R+T*T;if(w*w/u<L)return L<l&&(S===0&&(S=Ti(i),L+=S*S),e>1&&R===0&&(R=Ti(i),L+=R*R),e>2&&T===0&&(T=Ti(i),L+=T*T),L<a&&(L=Math.sqrt(a*L)),n.vx+=S*g.value*r/L,e>1&&(n.vy+=R*g.value*r/L),e>2&&(n.vz+=T*g.value*r/L)),!0;if(g.length||L>=l)return;(g.data!==n||g.next)&&(S===0&&(S=Ti(i),L+=S*S),e>1&&R===0&&(R=Ti(i),L+=R*R),e>2&&T===0&&(T=Ti(i),L+=T*T),L<a&&(L=Math.sqrt(a*L)));do g.data!==n&&(w=o[g.data.index]*r/L,n.vx+=S*w,e>1&&(n.vy+=R*w),e>2&&(n.vz+=T*w));while(g=g.next)}return f.initialize=function(g,...x){t=g,i=x.find(m=>typeof m=="function")||Math.random,e=x.find(m=>[1,2,3].includes(m))||2,d()},f.strength=function(g){return arguments.length?(s=typeof g=="function"?g:ko(+g),d(),f):s},f.distanceMin=function(g){return arguments.length?(a=g*g,f):Math.sqrt(a)},f.distanceMax=function(g){return arguments.length?(l=g*g,f):Math.sqrt(l)},f.theta=function(g){return arguments.length?(u=g*g,f):Math.sqrt(u)},f}const Xm={type:"change"},Uc={type:"start"},jm={type:"end"},al=new ca,Ym=new wi,GC=Math.cos(70*wv.DEG2RAD);class WC extends Jr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ce),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xm),i.update(),s=r.NONE},this.update=function(){const y=new U,G=new qr().setFromUnitVectors(e.up,new U(0,1,0)),F=G.clone().invert(),W=new U,ne=new qr,ee=new U,Me=2*Math.PI;return function(Ge=null){const Fe=i.object.position;y.copy(Fe).sub(i.target),y.applyQuaternion(G),a.setFromVector3(y),i.autoRotate&&s===r.NONE&&z(M(Ge)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=i.minAzimuthAngle,Ie=i.maxAzimuthAngle;isFinite(Pe)&&isFinite(Ie)&&(Pe<-Math.PI?Pe+=Me:Pe>Math.PI&&(Pe-=Me),Ie<-Math.PI?Ie+=Me:Ie>Math.PI&&(Ie-=Me),Pe<=Ie?a.theta=Math.max(Pe,Math.min(Ie,a.theta)):a.theta=a.theta>(Pe+Ie)/2?Math.max(Pe,a.theta):Math.min(Ie,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let it=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const mt=a.radius;a.radius=Z(a.radius*u),it=mt!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(F),Fe.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&T){let mt=null;if(i.object.isPerspectiveCamera){const vt=y.length();mt=Z(vt*u);const Rt=vt-mt;i.object.position.addScaledVector(S,Rt),i.object.updateMatrixWorld(),it=!!Rt}else if(i.object.isOrthographicCamera){const vt=new U(R.x,R.y,0);vt.unproject(i.object);const Rt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),it=Rt!==i.object.zoom;const gt=new U(R.x,R.y,0);gt.unproject(i.object),i.object.position.sub(gt).add(vt),i.object.updateMatrixWorld(),mt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;mt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(mt).add(i.object.position):(al.origin.copy(i.object.position),al.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(al.direction))<GC?e.lookAt(i.target):(Ym.setFromNormalAndCoplanarPoint(i.object.up,i.target),al.intersectPlane(Ym,i.target))))}else if(i.object.isOrthographicCamera){const mt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),mt!==i.object.zoom&&(i.object.updateProjectionMatrix(),it=!0)}return u=1,T=!1,it||W.distanceToSquared(i.object.position)>o||8*(1-ne.dot(i.object.quaternion))>o||ee.distanceToSquared(i.target)>o?(i.dispatchEvent(Xm),W.copy(i.object.position),ne.copy(i.object.quaternion),ee.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",we),i.domElement.removeEventListener("pointerdown",tt),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",E),i.domElement.getRootNode().removeEventListener("keydown",Ee,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Um,l=new Um;let u=1;const f=new U,d=new ke,h=new ke,p=new ke,g=new ke,x=new ke,m=new ke,c=new ke,v=new ke,_=new ke,S=new U,R=new ke;let T=!1;const w=[],L={};let C=!1;function M(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function D(y){const G=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*G)}function z(y){l.theta-=y}function H(y){l.phi-=y}const Y=function(){const y=new U;return function(F,W){y.setFromMatrixColumn(W,0),y.multiplyScalar(-F),f.add(y)}}(),q=function(){const y=new U;return function(F,W){i.screenSpacePanning===!0?y.setFromMatrixColumn(W,1):(y.setFromMatrixColumn(W,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(F),f.add(y)}}(),j=function(){const y=new U;return function(F,W){const ne=i.domElement;if(i.object.isPerspectiveCamera){const ee=i.object.position;y.copy(ee).sub(i.target);let Me=y.length();Me*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*F*Me/ne.clientHeight,i.object.matrix),q(2*W*Me/ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(F*(i.object.right-i.object.left)/i.object.zoom/ne.clientWidth,i.object.matrix),q(W*(i.object.top-i.object.bottom)/i.object.zoom/ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(y,G){if(!i.zoomToCursor)return;T=!0;const F=i.domElement.getBoundingClientRect(),W=y-F.left,ne=G-F.top,ee=F.width,Me=F.height;R.x=W/ee*2-1,R.y=-(ne/Me)*2+1,S.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function ae(y){d.set(y.clientX,y.clientY)}function Ce(y){$(y.clientX,y.clientX),c.set(y.clientX,y.clientY)}function Xe(y){g.set(y.clientX,y.clientY)}function X(y){h.set(y.clientX,y.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const G=i.domElement;z(2*Math.PI*p.x/G.clientHeight),H(2*Math.PI*p.y/G.clientHeight),d.copy(h),i.update()}function re(y){v.set(y.clientX,y.clientY),_.subVectors(v,c),_.y>0?K(D(_.y)):_.y<0&&N(D(_.y)),c.copy(v),i.update()}function me(y){x.set(y.clientX,y.clientY),m.subVectors(x,g).multiplyScalar(i.panSpeed),j(m.x,m.y),g.copy(x),i.update()}function de(y){$(y.clientX,y.clientY),y.deltaY<0?N(D(y.deltaY)):y.deltaY>0&&K(D(y.deltaY)),i.update()}function We(y){let G=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,i.keyPanSpeed),G=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(0,-i.keyPanSpeed),G=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(i.keyPanSpeed,0),G=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):j(-i.keyPanSpeed,0),G=!0;break}G&&(y.preventDefault(),i.update())}function Ve(y){if(w.length===1)d.set(y.pageX,y.pageY);else{const G=He(y),F=.5*(y.pageX+G.x),W=.5*(y.pageY+G.y);d.set(F,W)}}function Ke(y){if(w.length===1)g.set(y.pageX,y.pageY);else{const G=He(y),F=.5*(y.pageX+G.x),W=.5*(y.pageY+G.y);g.set(F,W)}}function b(y){const G=He(y),F=y.pageX-G.x,W=y.pageY-G.y,ne=Math.sqrt(F*F+W*W);c.set(0,ne)}function ge(y){i.enableZoom&&b(y),i.enablePan&&Ke(y)}function ue(y){i.enableZoom&&b(y),i.enableRotate&&Ve(y)}function Se(y){if(w.length==1)h.set(y.pageX,y.pageY);else{const F=He(y),W=.5*(y.pageX+F.x),ne=.5*(y.pageY+F.y);h.set(W,ne)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const G=i.domElement;z(2*Math.PI*p.x/G.clientHeight),H(2*Math.PI*p.y/G.clientHeight),d.copy(h)}function le(y){if(w.length===1)x.set(y.pageX,y.pageY);else{const G=He(y),F=.5*(y.pageX+G.x),W=.5*(y.pageY+G.y);x.set(F,W)}m.subVectors(x,g).multiplyScalar(i.panSpeed),j(m.x,m.y),g.copy(x)}function xe(y){const G=He(y),F=y.pageX-G.x,W=y.pageY-G.y,ne=Math.sqrt(F*F+W*W);v.set(0,ne),_.set(0,Math.pow(v.y/c.y,i.zoomSpeed)),K(_.y),c.copy(v);const ee=(y.pageX+G.x)*.5,Me=(y.pageY+G.y)*.5;$(ee,Me)}function _e(y){i.enableZoom&&xe(y),i.enablePan&&le(y)}function Ae(y){i.enableZoom&&xe(y),i.enableRotate&&Se(y)}function tt(y){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",P),i.domElement.addEventListener("pointerup",E)),!pe(y)&&(je(y),y.pointerType==="touch"?Le(y):k(y)))}function P(y){i.enabled!==!1&&(y.pointerType==="touch"?oe(y):Q(y))}function E(y){switch(Ne(y),w.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",E),i.dispatchEvent(jm),s=r.NONE;break;case 1:const G=w[0],F=L[G];Le({pointerId:G,pageX:F.x,pageY:F.y});break}}function k(y){let G;switch(y.button){case 0:G=i.mouseButtons.LEFT;break;case 1:G=i.mouseButtons.MIDDLE;break;case 2:G=i.mouseButtons.RIGHT;break;default:G=-1}switch(G){case ts.DOLLY:if(i.enableZoom===!1)return;Ce(y),s=r.DOLLY;break;case ts.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Xe(y),s=r.PAN}else{if(i.enableRotate===!1)return;ae(y),s=r.ROTATE}break;case ts.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;ae(y),s=r.ROTATE}else{if(i.enablePan===!1)return;Xe(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uc)}function Q(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(y);break;case r.DOLLY:if(i.enableZoom===!1)return;re(y);break;case r.PAN:if(i.enablePan===!1)return;me(y);break}}function J(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(Uc),de(te(y)),i.dispatchEvent(jm))}function te(y){const G=y.deltaMode,F={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(G){case 1:F.deltaY*=16;break;case 2:F.deltaY*=100;break}return y.ctrlKey&&!C&&(F.deltaY*=10),F}function Ee(y){y.key==="Control"&&(C=!0,i.domElement.getRootNode().addEventListener("keyup",ie,{passive:!0,capture:!0}))}function ie(y){y.key==="Control"&&(C=!1,i.domElement.getRootNode().removeEventListener("keyup",ie,{passive:!0,capture:!0}))}function ce(y){i.enabled===!1||i.enablePan===!1||We(y)}function Le(y){switch(Be(y),w.length){case 1:switch(i.touches.ONE){case ns.ROTATE:if(i.enableRotate===!1)return;Ve(y),s=r.TOUCH_ROTATE;break;case ns.PAN:if(i.enablePan===!1)return;Ke(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ns.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ge(y),s=r.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uc)}function oe(y){switch(Be(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ae(y),i.update();break;default:s=r.NONE}}function we(y){i.enabled!==!1&&y.preventDefault()}function je(y){w.push(y.pointerId)}function Ne(y){delete L[y.pointerId];for(let G=0;G<w.length;G++)if(w[G]==y.pointerId){w.splice(G,1);return}}function pe(y){for(let G=0;G<w.length;G++)if(w[G]==y.pointerId)return!0;return!1}function Be(y){let G=L[y.pointerId];G===void 0&&(G=new ke,L[y.pointerId]=G),G.set(y.pageX,y.pageY)}function He(y){const G=y.pointerId===w[0]?w[1]:w[0];return L[G]}i.domElement.addEventListener("contextmenu",we),i.domElement.addEventListener("pointerdown",tt),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",J,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}const XC=_r.forwardRef(({onGenerate:t,onReset:e,isGenerating:n},i)=>{const[r,s]=Ye.useState(""),o=()=>{r.trim()&&(t(r),s(""))};return De.jsxs("div",{ref:i,style:{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",width:"60%",maxWidth:"800px",background:"rgba(0,0,0,0.7)",padding:"15px",borderRadius:"10px",display:"flex",gap:"10px"},children:[De.jsx("textarea",{value:r,onChange:a=>s(a.target.value),placeholder:"Enter a prompt to generate a workflow...",style:{width:"100%",height:"50px",borderRadius:"5px",border:"none",padding:"10px",fontFamily:"sans-serif",fontSize:"16px"},disabled:n}),De.jsx("button",{onClick:o,disabled:n||!r.trim(),children:n?"Generating...":"Generate"}),De.jsx("button",{onClick:e,disabled:n,children:"Reset"})]})}),jC=_r.forwardRef(({testCases:t,selectedCase:e,onCaseChange:n,onPromptSelect:i,onShowOverview:r},s)=>{const o=t.find(u=>u.name===e),[a,l]=Ye.useState(null);return De.jsxs("div",{ref:s,style:{position:"absolute",top:10,left:10,padding:10,background:"rgba(0,0,0,0.7)",color:"white",borderRadius:5,fontFamily:"sans-serif",fontSize:"14px"},children:[De.jsx("div",{style:{marginBottom:10},children:De.jsx("button",{onClick:r,children:"Show Overview"})}),De.jsxs("div",{children:[De.jsx("strong",{children:"Test Case:"}),De.jsx("select",{value:e,onChange:u=>n(u.target.value),style:{marginLeft:5},"aria-label":"Select Test Case",children:t.map(u=>De.jsx("option",{value:u.name,children:u.name},u.name))})]}),o&&De.jsxs("div",{style:{marginTop:10},children:[De.jsx("strong",{children:"Prompts:"}),De.jsx("ul",{style:{listStyle:"none",padding:0,margin:"5px 0 0"},children:o.prompts.map(u=>De.jsx("li",{onClick:()=>i(u.name),onMouseEnter:()=>l(u.name),onMouseLeave:()=>l(null),style:{cursor:"pointer",padding:"2px 5px",borderRadius:3,background:a===u.name?"#555":"transparent"},children:u.name},u.name))})]})]})}),YC=_r.forwardRef(({onSearch:t,results:e,onResultClick:n},i)=>De.jsxs("div",{ref:i,style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",padding:"8px",background:"rgba(0,0,0,0.7)",borderRadius:5,width:"300px",zIndex:101},children:[De.jsx("input",{type:"text",placeholder:"Search nodes...",onChange:r=>t(r.target.value),style:{width:"100%",boxSizing:"border-box",background:"rgba(255,255,255,0.1)",color:"white",border:"1px solid #555",borderRadius:3,padding:"4px 8px",fontFamily:"sans-serif",fontSize:"14px"}}),e.length>0&&De.jsx("div",{style:{marginTop:"8px",maxHeight:"150px",overflowY:"auto"},children:e.map(r=>De.jsx("div",{onClick:()=>n(r.id),style:{padding:"4px 8px",cursor:"pointer",color:"white"},onMouseOver:s=>s.currentTarget.style.backgroundColor="#555",onMouseOut:s=>s.currentTarget.style.backgroundColor="transparent",children:r.name},r.id))})]})),$C=_r.forwardRef(({nodeCount:t,edgeCount:e,workflowCount:n},i)=>De.jsxs("div",{ref:i,style:{position:"absolute",top:10,right:10,padding:10,background:"rgba(0,0,0,0.7)",color:"white",borderRadius:5,fontFamily:"sans-serif",fontSize:"14px",width:"180px"},children:[De.jsx("h3",{style:{margin:"0 0 10px",fontSize:"16px"},children:"Statistics"}),De.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[De.jsx("span",{children:"Nodes:"}),De.jsx("span",{style:{textAlign:"right"},children:t}),De.jsx("span",{children:"Edges:"}),De.jsx("span",{style:{textAlign:"right"},children:e}),De.jsx("span",{children:"Workflows:"}),De.jsx("span",{style:{textAlign:"right"},children:n})]})]})),qC=_r.forwardRef(({prompts:t,onPromptSelect:e},n)=>{const[i,r]=Ye.useState(null);return t.length===0?null:De.jsxs("div",{ref:n,style:{position:"absolute",bottom:80,left:10,padding:10,background:"rgba(0,0,0,0.7)",color:"white",borderRadius:5,fontFamily:"sans-serif",fontSize:"14px",maxHeight:"30vh",overflowY:"auto"},children:[De.jsx("h3",{style:{margin:"0 0 10px",fontSize:"16px"},children:"My Prompts"}),De.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:t.map((s,o)=>De.jsx("li",{onClick:()=>e(s),onMouseEnter:()=>r(s),onMouseLeave:()=>r(null),style:{cursor:"pointer",padding:"2px 5px",borderRadius:3,background:i===s?"#555":"transparent"},children:s},`${s}-${o}`))})]})}),KC=({nodes:t})=>t.length===0?null:De.jsx("div",{className:"workflow-display",children:t.map((e,n)=>De.jsxs(_r.Fragment,{children:[De.jsx("span",{className:"workflow-node",children:e.label}),n<t.length-1&&De.jsx("span",{className:"workflow-arrow",children:" → "})]},n))}),$m=new di,ll=new U;class e0 extends TA{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new fi(e,3)),this.setAttribute("uv",new fi(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Bf(n,6,1);return this.setAttribute("instanceStart",new nr(i,3,0)),this.setAttribute("instanceEnd",new nr(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new Bf(n,6,1);return this.setAttribute("instanceColorStart",new nr(i,3,0)),this.setAttribute("instanceColorEnd",new nr(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new wA(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),$m.setFromBufferAttribute(n),this.boundingBox.union($m))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ll.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ll)),ll.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(ll));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}he.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};cn.line={uniforms:Gd.merge([he.common,he.fog,he.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class qd extends zi{constructor(e){super({type:"LineMaterial",uniforms:Gd.clone(cn.line.uniforms),vertexShader:cn.line.vertexShader,fragmentShader:cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ic=new At,qm=new U,Km=new U,kt=new At,Bt=new At,ei=new At,Oc=new U,Fc=new St,Vt=new CA,Zm=new U,ul=new di,cl=new so,ti=new At;let ai,Vr;function Qm(t,e,n){return ti.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),ti.multiplyScalar(1/ti.w),ti.x=Vr/n.width,ti.y=Vr/n.height,ti.applyMatrix4(t.projectionMatrixInverse),ti.multiplyScalar(1/ti.w),Math.abs(Math.max(ti.x,ti.y))}function ZC(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Vt.start.fromBufferAttribute(r,a),Vt.end.fromBufferAttribute(s,a),Vt.applyMatrix4(n);const u=new U,f=new U;ai.distanceSqToSegment(Vt.start,Vt.end,f,u),f.distanceTo(u)<Vr*.5&&e.push({point:f,pointOnLine:u,distance:ai.origin.distanceTo(f),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function QC(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,f=Math.min(a.instanceCount,l.count),d=-e.near;ai.at(1,ei),ei.w=1,ei.applyMatrix4(e.matrixWorldInverse),ei.applyMatrix4(i),ei.multiplyScalar(1/ei.w),ei.x*=s.x/2,ei.y*=s.y/2,ei.z=0,Oc.copy(ei),Fc.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,p=f;h<p;h++){if(kt.fromBufferAttribute(l,h),Bt.fromBufferAttribute(u,h),kt.w=1,Bt.w=1,kt.applyMatrix4(Fc),Bt.applyMatrix4(Fc),kt.z>d&&Bt.z>d)continue;if(kt.z>d){const _=kt.z-Bt.z,S=(kt.z-d)/_;kt.lerp(Bt,S)}else if(Bt.z>d){const _=Bt.z-kt.z,S=(Bt.z-d)/_;Bt.lerp(kt,S)}kt.applyMatrix4(i),Bt.applyMatrix4(i),kt.multiplyScalar(1/kt.w),Bt.multiplyScalar(1/Bt.w),kt.x*=s.x/2,kt.y*=s.y/2,Bt.x*=s.x/2,Bt.y*=s.y/2,Vt.start.copy(kt),Vt.start.z=0,Vt.end.copy(Bt),Vt.end.z=0;const x=Vt.closestPointToPointParameter(Oc,!0);Vt.at(x,Zm);const m=wv.lerp(kt.z,Bt.z,x),c=m>=-1&&m<=1,v=Oc.distanceTo(Zm)<Vr*.5;if(c&&v){Vt.start.fromBufferAttribute(l,h),Vt.end.fromBufferAttribute(u,h),Vt.start.applyMatrix4(o),Vt.end.applyMatrix4(o);const _=new U,S=new U;ai.distanceSqToSegment(Vt.start,Vt.end,S,_),n.push({point:S,pointOnLine:_,distance:ai.origin.distanceTo(S),object:t,face:null,faceIndex:h,uv:null,uv1:null})}}}class JC extends $n{constructor(e=new e0,n=new qd({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)qm.fromBufferAttribute(n,o),Km.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+qm.distanceTo(Km);const s=new Bf(r,2,1);return e.setAttribute("instanceDistanceStart",new nr(s,1,0)),e.setAttribute("instanceDistanceEnd",new nr(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ai=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Vr=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),cl.copy(a.boundingSphere).applyMatrix4(o);let u;if(i)u=Vr*.5;else{const d=Math.max(r.near,cl.distanceToPoint(ai.origin));u=Qm(r,d,l.resolution)}if(cl.radius+=u,ai.intersectsSphere(cl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ul.copy(a.boundingBox).applyMatrix4(o);let f;if(i)f=Vr*.5;else{const d=Math.max(r.near,ul.distanceToPoint(ai.origin));f=Qm(r,d,l.resolution)}ul.expandByScalar(f),ai.intersectsBox(ul)!==!1&&(i?ZC(this,n):QC(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(Ic),this.material.uniforms.resolution.value.set(Ic.z,Ic.w))}}class t0 extends e0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const n=e.length-3,i=new Float32Array(2*n);for(let r=0;r<n;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}}class Jm extends JC{constructor(e=new t0,n=new qd({color:Math.random()*16777215})){super(e,n),this.isLine2=!0,this.type="Line2"}}const eg=[{name:"Sample Case 1",prompts:[{name:"How to write a file in python?"},{name:"How to read a file in python?"}]},{name:"Sample Case 2",prompts:[{name:"Create a simple web server"},{name:"What is a closure in javascript?"}]}],ni=t=>{const e=t.match(/^([a-f0-9-]+)__/);return e?e[1]:null},eR=({apiUrl:t})=>{const e=Ye.useRef(null),n=Ye.useRef(null),i=Ye.useRef(null),r=Ye.useRef(null),s=Ye.useRef(null),o=Ye.useRef(null),a=Ye.useRef([]),l=Ye.useRef(null),u=Ye.useRef(null),f=Ye.useRef(null),d=Ye.useRef(null),h=Ye.useRef([]),p=Ye.useRef(null),g=Ye.useRef(!1),[x,m]=Ye.useState([]),[c,v]=Ye.useState([]),[_,S]=Ye.useState([]),[R,T]=Ye.useState(!1),[w,L]=Ye.useState(eg[0].name),[C,M]=Ye.useState(null),[D,z]=Ye.useState(null),[H,Y]=Ye.useState([]),[q,j]=Ye.useState([]),[K,N]=Ye.useState([]),[$,Z]=Ye.useState([]),ae=Ye.useRef(C);Ye.useEffect(()=>{ae.current=C},[C]);const Ce=Ye.useRef(D);Ye.useEffect(()=>{Ce.current=D},[D]),Ye.useEffect(()=>{if(!D){Z([]);return}const b=c.filter(_e=>ni(_e.id)===D),ge=_.filter(_e=>ni(_e.source)===D&&ni(_e.target)===D),ue=b.find(_e=>_e.type==="Intent");if(!ue){Z([]);return}const Se=[ue],le=new Map(ge.map(_e=>[_e.source,_e.target]));let xe=ue;for(;le.has(xe.id)&&Se.length<b.length;){const _e=le.get(xe.id),Ae=b.find(tt=>tt.id===_e);if(Ae)Se.push(Ae),xe=Ae;else break}Z(Se)},[D,c,_]),Ye.useEffect(()=>{},[D]),Ye.useEffect(()=>{fetch(`${t}/graph`).then(b=>b.json()).then(b=>{b&&b.nodes?(v(b.nodes.map(ge=>({id:ge.key,...ge.attributes}))),S(b.edges.map(ge=>({source:ge.source,target:ge.target,...ge.attributes})))):(v([]),S([]))})},[t]);const Xe=async b=>{K.includes(b)||N(Se=>[...Se,b]),T(!0),z(null);const ue=await(await fetch(`${t}/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:b})})).json();ue.graph&&ue.graph.nodes&&(v(ue.graph.nodes.map(Se=>({id:Se.key,...Se.attributes}))),S(ue.graph.edges.map(Se=>({source:Se.source,target:Se.target,...Se.attributes}))),ue.highlightedNodeId&&z(ni(ue.highlightedNodeId))),T(!1)},X=()=>{z(null);const b=u.current,ge=f.current,ue=h.current;if(!b||!ge||!ue||ue.length===0)return;const Se=new di;if(ue.forEach(ie=>{ie.x!==void 0&&ie.y!==void 0&&Se.expandByPoint(new U(ie.x,ie.y,0))}),Se.isEmpty())return;const le=new U;Se.getCenter(le);const xe=new U;Se.getSize(xe);const _e=Math.max(xe.x,xe.y),Ae=b.fov*(Math.PI/180),tt=Math.abs(_e/1.5/Math.tan(Ae/2)),P=b.position.clone(),E=new U(le.x,le.y,le.z+Math.max(tt,50)),k=ge.target.clone(),Q=le;let J=null;const te=1e3,Ee=ie=>{J===null&&(J=ie);const ce=ie-J,Le=Math.min(ce/te,1);b.position.lerpVectors(P,E,Le),ge.target.lerpVectors(k,Q,Le),ge.update(),Le<1&&requestAnimationFrame(Ee)};requestAnimationFrame(Ee)},re=async b=>{if(window.confirm(`Are you sure you want to delete workflow ${b}?`))try{const ue=await fetch(`${t}/workflow/${b}`,{method:"DELETE"});if(!ue.ok)throw new Error(`Server error: ${ue.statusText}`);const Se=await ue.json();if(Se.graph&&Se.graph.nodes)v(Se.graph.nodes.map(le=>({id:le.key,...le.attributes}))),S(Se.graph.edges.map(le=>({source:le.source,target:le.target,...le.attributes})));else{const le=c.filter(Ae=>ni(Ae.id)!==b),xe=new Set(le.map(Ae=>Ae.id)),_e=_.filter(Ae=>xe.has(Ae.source)&&xe.has(Ae.target));v(le),S(_e)}}catch(ue){console.error("Failed to delete workflow:",ue),alert("Error: Could not delete workflow. See console for details.")}finally{z(null)}},me=async()=>{T(!0),await fetch(`${t}/reset`,{method:"POST"}),v([]),S([]),N([]),z(null),T(!1)},de=b=>{if(!b){Y([]),j([]);return}const ge=h.current.filter(ue=>ue.name.toLowerCase().includes(b.toLowerCase())).map(ue=>({id:ue.id,name:ue.name}));j(ge),Y(ge.map(ue=>ue.id))},We=b=>{const ge=h.current.find(le=>le.id===b),ue=u.current,Se=f.current;if(ge&&ue&&Se){const le=new U(ge.x,ge.y,ge.z),xe=new U().subVectors(ue.position,Se.target).normalize(),_e=100,Ae=ue.position.clone(),tt=new U().addVectors(le,xe.multiplyScalar(_e)),P=Se.target.clone(),E=le;let k=null;const Q=500,J=te=>{k===null&&(k=te);const Ee=te-k,ie=Math.min(Ee/Q,1);ue.position.lerpVectors(Ae,tt,ie),Se.target.lerpVectors(P,E,ie),Se.update(),ie<1&&requestAnimationFrame(J)};requestAnimationFrame(J)}};Ye.useEffect(()=>{if(!e.current||c.length===0)return;const b=e.current,ge=b.clientWidth,ue=b.clientHeight,Se=new MA;Se.background=new Je(0);const le=new Nn(75,ge/ue,.1,1e4),xe=new SA({antialias:!0});xe.setSize(ge,ue),b.appendChild(xe.domElement),l.current=Se,u.current=le;const _e=new WC(le,xe.domElement);_e.enableDamping=!0,_e.dampingFactor=.05,_e.screenSpacePanning=!1,_e.minDistance=0,_e.maxDistance=1/0,_e.enableZoom=!1,_e.minPolarAngle=Math.PI/4,_e.maxPolarAngle=3*Math.PI/4,f.current=_e;const Ae=.02,tt=ee=>{ee.preventDefault();const Me=ee.deltaY>0?1:-1,Ze=1-Me*Ae,Ge=u.current,Fe=f.current;if(!Ge||!Fe)return;let Pe;if(p.current)Pe=p.current;else{const vt=new wi,Rt=new ca;vt.setFromNormalAndCoplanarPoint(Ge.getWorldDirection(new U),Fe.target);const gt=new ke(ee.clientX/xe.domElement.clientWidth*2-1,-(ee.clientY/xe.domElement.clientHeight)*2+1);Rt.origin.copy(Ge.position),Rt.direction.set(gt.x,gt.y,.5).unproject(Ge).sub(Rt.origin).normalize();const hi=new U;Rt.intersectPlane(vt,hi),Pe=hi}const Ie=new U().lerpVectors(Ge.position,Pe,1-Ze);if(Me>0&&Ie.distanceTo(Pe)<1)return;const it=new U().subVectors(Ie,Ge.position),mt=Fe.target.clone().add(it);Ge.position.copy(Ie),Fe.target.copy(mt),Fe.update()};xe.domElement.addEventListener("wheel",tt,{passive:!1});const P=c.map(ee=>({...ee,name:ee.label}));h.current=P;const E=_.map(ee=>({...ee})),k=HC(P,3).force("link",AC(E).id(ee=>ee.id).distance(50)).force("charge",VC().strength(-300)).force("center",RA(0,0,0));k.tick(500);const Q=new Float32Array(P.length*3),J=new Float32Array(P.length*3),te=new Qn;te.setAttribute("position",new Tn(Q,3)),te.setAttribute("color",new Tn(J,3));const Ee=new Vv({size:10,sizeAttenuation:!1,vertexColors:!0}),ie=new Pm(te,Ee);Se.add(ie),d.current=ie;const ce=new qd({color:16777215,linewidth:2,transparent:!0,opacity:.6});ce.resolution.set(ge,ue);const Le=[],oe=new AA;oe.params.Points.threshold=10;const we=new Je(65535),je=new Je(16776960),Ne=new Je(16777215);let pe=0;const Be=new ke,He=ee=>{if(g.current)return;const Me=new ke(ee.clientX/ge*2-1,-(ee.clientY/ue)*2+1);oe.setFromCamera(Me,le);const Ze=oe.intersectObjects([ie,...Le]);if(Ze.length>0){const Ge=Ze[0];let Fe=null;if(p.current=Ge.point,Ge.object.type==="Points"&&Ge.index!==void 0){const Pe=P[Ge.index].id;Fe=ni(Pe)}else Ge.object.userData.workflowId&&(Fe=Ge.object.userData.workflowId);M(Fe)}else M(null),p.current=null};xe.domElement.addEventListener("mousemove",He);const ft=ee=>{if(g.current=!0,pe=Date.now(),Be.set(ee.clientX,ee.clientY),p.current&&f.current&&u.current){const Me=f.current,Ze=p.current;Me.target.copy(Ze),Me.update()}};xe.domElement.addEventListener("mousedown",ft);const y=ee=>{g.current=!1;const Me=new ke(ee.clientX,ee.clientY),Ze=Be.distanceTo(Me),Ge=Date.now()-pe;Ze<5&&Ge<200&&(ae.current?Ce.current===ae.current?z(null):z(ae.current):z(null))};xe.domElement.addEventListener("mouseup",y);const G=()=>{const ee=[];n.current&&ee.push(n.current.getBoundingClientRect()),i.current&&ee.push(i.current.getBoundingClientRect()),r.current&&ee.push(r.current.getBoundingClientRect()),s.current&&ee.push(s.current.getBoundingClientRect()),o.current&&ee.push(o.current.getBoundingClientRect()),a.current=ee};if(G(),!D){const ee=new di;P.forEach(Ie=>{Ie.x!==void 0&&Ie.y!==void 0&&ee.expandByPoint(new U(Ie.x,Ie.y,0))});const Me=new U;ee.getCenter(Me);const Ze=new U;ee.getSize(Ze);const Ge=Math.max(Ze.x,Ze.y),Fe=le.fov*(Math.PI/180),Pe=Math.abs(Ge/1.5/Math.tan(Fe/2));le.position.set(Me.x,Me.y,Me.z+Math.max(Pe,50)),_e.target.copy(Me),_e.update()}let F;const W=()=>{F=requestAnimationFrame(W),_e.update(),k.tick();const ee=ie.geometry.attributes.position.array,Me=ie.geometry.attributes.color.array;P.forEach((Pe,Ie)=>{ee[Ie*3]=Pe.x??0,ee[Ie*3+1]=Pe.y??0,ee[Ie*3+2]=Pe.z??0;const it=ni(Pe.id),mt=D&&it===D||!D&&it&&it===ae.current,Rt=H.includes(Pe.id)?je:mt?we:Ne;Me[Ie*3]=Rt.r,Me[Ie*3+1]=Rt.g,Me[Ie*3+2]=Rt.b}),ie.geometry.attributes.position.needsUpdate=!0,ie.geometry.attributes.color.needsUpdate=!0;const Ze=[],Ge=new Wd,Fe=new St;Fe.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),Ge.setFromProjectionMatrix(Fe),P.forEach(Pe=>{if(Pe.x&&Pe.y&&Pe.z){const Ie=new U(Pe.x,Pe.y,Pe.z);if(!Ge.containsPoint(Ie))return;const it=Ie.clone().project(le),mt=(it.x*.5+.5)*ge,vt=(it.y*-.5+.5)*ue;a.current.some(gt=>mt>gt.left&&mt<gt.right&&vt>gt.top&&vt<gt.bottom)||Ze.push({id:Pe.id,name:Pe.name,x:mt,y:vt,type:Pe.type})}}),m(Ze),Le.forEach(Pe=>{Se.remove(Pe),Pe.geometry.dispose(),Pe.material&&Pe.material.dispose()}),Le.length=0,E.forEach(Pe=>{const Ie=Pe.source,it=Pe.target;if(Ie.x&&Ie.y&&Ie.z&&it.x&&it.y&&it.z){const mt=new t0;mt.setPositions([Ie.x,Ie.y,Ie.z,it.x,it.y,it.z]);const vt=ni(Ie.id),Rt=D&&vt===D||!D&&vt&&vt===ae.current,gt=ce.clone();gt.color=Rt?we:Ne,gt.opacity=Rt?1:.6,Pe.type==="Similarity"&&(gt.dashed=!0,gt.dashSize=3,gt.gapSize=3,gt.color=new Je(5592405),gt.opacity=.8);const hi=new Jm(mt,gt);vt&&(hi.userData.workflowId=vt),Se.add(hi),Le.push(hi)}}),xe.render(Se,le)};W();const ne=()=>{if(!e.current)return;const ee=e.current;le.aspect=ee.clientWidth/ee.clientHeight,le.updateProjectionMatrix(),xe.setSize(ee.clientWidth,ee.clientHeight),ce.resolution.set(ee.clientWidth,ee.clientHeight),G()};return window.addEventListener("resize",ne),()=>{cancelAnimationFrame(F),window.removeEventListener("resize",ne),xe.domElement.removeEventListener("wheel",tt),xe.domElement.removeEventListener("mousemove",He),xe.domElement.removeEventListener("mousedown",ft),xe.domElement.removeEventListener("mouseup",y),Se.traverse(ee=>{(ee instanceof $n||ee instanceof Jm||ee instanceof Pm)&&(ee.geometry&&ee.geometry.dispose(),ee.material&&ee.material.dispose())}),_e.dispose(),ce.dispose(),Ee.dispose(),xe.dispose(),e.current&&e.current.contains(xe.domElement)&&e.current.removeChild(xe.domElement),k.stop()}},[c,_]),Ye.useEffect(()=>{const b=async ge=>{const ue=ge.target;ue&&(ue.tagName==="INPUT"||ue.tagName==="TEXTAREA")||(ge.key==="Delete"||ge.key==="Backspace")&&D&&await re(D)};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[D,c,_]);const Ve=new Set(c.map(b=>ni(b.id)).filter(b=>b)).size,Ke=()=>De.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",zIndex:1e3},children:[De.jsx("div",{style:{border:"4px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",borderTop:"4px solid white",width:"40px",height:"40px",animation:"spin 1s linear infinite",marginBottom:"20px"}}),De.jsx("p",{children:"Generating..."}),De.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]});return De.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[R&&De.jsx(Ke,{}),De.jsx("div",{ref:e,style:{width:"100%",height:"100%"}}),De.jsx($C,{ref:s,nodeCount:c.length,edgeCount:_.length,workflowCount:Ve}),De.jsx(jC,{ref:n,testCases:eg,selectedCase:w,onCaseChange:L,onPromptSelect:Xe,onShowOverview:X}),De.jsx(YC,{ref:r,onSearch:de,results:q,onResultClick:We}),De.jsx(qC,{ref:o,prompts:K,onPromptSelect:Xe}),De.jsx(XC,{ref:i,onGenerate:Xe,onReset:me,isGenerating:R}),De.jsx(KC,{nodes:$}),x.map((b,ge)=>{const ue=ni(b.id),Se=ue?ue===C:!1,le=H.includes(b.id);return De.jsx("div",{style:{position:"absolute",left:b.x,top:b.y,color:b.type==="Intent"?"cyan":"white",fontWeight:D&&ue===D||Se||le?"bold":"normal",transform:"translate(-50%, -50%)",pointerEvents:"none",textShadow:"1px 1px 2px black",padding:"2px 5px"},children:b.name},ge)}),De.jsx("style",{children:`
        .workflow-display {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          font-family: monospace;
          z-index: 100;
        }
        .workflow-node {
          background: #333;
          padding: 5px 10px;
          border-radius: 5px;
        }
        .workflow-arrow {
          margin: 0 10px;
        }
      `})]})},tR=ky(eR,{props:{apiUrl:"string"}});customElements.define("pathway-goggles",tR);
