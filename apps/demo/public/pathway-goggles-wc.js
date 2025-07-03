(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function QS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $0={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=Symbol.for("react.element"),JS=Symbol.for("react.portal"),eM=Symbol.for("react.fragment"),tM=Symbol.for("react.strict_mode"),nM=Symbol.for("react.profiler"),iM=Symbol.for("react.provider"),rM=Symbol.for("react.context"),sM=Symbol.for("react.forward_ref"),oM=Symbol.for("react.suspense"),aM=Symbol.for("react.memo"),lM=Symbol.for("react.lazy"),Pm=Symbol.iterator;function uM(n){return n===null||typeof n!="object"?null:(n=Pm&&n[Pm]||n["@@iterator"],typeof n=="function"?n:null)}var q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,Z0={};function ga(n,e,t){this.props=n,this.context=e,this.refs=Z0,this.updater=t||q0}ga.prototype.isReactComponent={};ga.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ga.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Q0(){}Q0.prototype=ga.prototype;function np(n,e,t){this.props=n,this.context=e,this.refs=Z0,this.updater=t||q0}var ip=np.prototype=new Q0;ip.constructor=np;K0(ip,ga.prototype);ip.isPureReactComponent=!0;var bm=Array.isArray,J0=Object.prototype.hasOwnProperty,rp={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J0.call(e,i)&&!ev.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Dl,type:n,key:s,ref:o,props:r,_owner:rp.current}}function cM(n,e){return{$$typeof:Dl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function sp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Dl}function fM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Lm=/\/+/g;function vf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?fM(""+n.key):e.toString(36)}function Bu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Dl:case JS:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+vf(o,0):i,bm(r)?(t="",n!=null&&(t=n.replace(Lm,"$&/")+"/"),Bu(r,e,t,"",function(u){return u})):r!=null&&(sp(r)&&(r=cM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+vf(s,a);o+=Bu(s,e,t,l,r)}else if(l=uM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+vf(s,a++),o+=Bu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(n,e,t){if(n==null)return n;var i=[],r=0;return Bu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function hM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Sn={current:null},Hu={transition:null},dM={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:Hu,ReactCurrentOwner:rp};function nv(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Gl,forEach:function(n,e,t){Gl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Gl(n,function(){e++}),e},toArray:function(n){return Gl(n,function(e){return e})||[]},only:function(n){if(!sp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Qe.Component=ga;Qe.Fragment=eM;Qe.Profiler=nM;Qe.PureComponent=np;Qe.StrictMode=tM;Qe.Suspense=oM;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dM;Qe.act=nv;Qe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=K0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rp.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)J0.call(e,l)&&!ev.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Dl,type:n.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(n){return n={$$typeof:rM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:iM,_context:n},n.Consumer=n};Qe.createElement=tv;Qe.createFactory=function(n){var e=tv.bind(null,n);return e.type=n,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(n){return{$$typeof:sM,render:n}};Qe.isValidElement=sp;Qe.lazy=function(n){return{$$typeof:lM,_payload:{_status:-1,_result:n},_init:hM}};Qe.memo=function(n,e){return{$$typeof:aM,type:n,compare:e===void 0?null:e}};Qe.startTransition=function(n){var e=Hu.transition;Hu.transition={};try{n()}finally{Hu.transition=e}};Qe.unstable_act=nv;Qe.useCallback=function(n,e){return Sn.current.useCallback(n,e)};Qe.useContext=function(n){return Sn.current.useContext(n)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(n){return Sn.current.useDeferredValue(n)};Qe.useEffect=function(n,e){return Sn.current.useEffect(n,e)};Qe.useId=function(){return Sn.current.useId()};Qe.useImperativeHandle=function(n,e,t){return Sn.current.useImperativeHandle(n,e,t)};Qe.useInsertionEffect=function(n,e){return Sn.current.useInsertionEffect(n,e)};Qe.useLayoutEffect=function(n,e){return Sn.current.useLayoutEffect(n,e)};Qe.useMemo=function(n,e){return Sn.current.useMemo(n,e)};Qe.useReducer=function(n,e,t){return Sn.current.useReducer(n,e,t)};Qe.useRef=function(n){return Sn.current.useRef(n)};Qe.useState=function(n){return Sn.current.useState(n)};Qe.useSyncExternalStore=function(n,e,t){return Sn.current.useSyncExternalStore(n,e,t)};Qe.useTransition=function(){return Sn.current.useTransition()};Qe.version="18.3.1";$0.exports=Qe;var Ye=$0.exports;const ls=QS(Ye);var iv={exports:{}},Jn={},rv={exports:{}},sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,K){var Z=N.length;N.push(K);e:for(;0<Z;){var se=Z-1>>>1,Se=N[se];if(0<r(Se,K))N[se]=K,N[Z]=Se,Z=se;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],Z=N.pop();if(Z!==K){N[0]=Z;e:for(var se=0,Se=N.length,Ge=Se>>>1;se<Ge;){var X=2*(se+1)-1,ne=N[X],ge=X+1,he=N[ge];if(0>r(ne,Z))ge<Se&&0>r(he,ne)?(N[se]=he,N[ge]=Z,se=ge):(N[se]=ne,N[X]=Z,se=X);else if(ge<Se&&0>r(he,Z))N[se]=he,N[ge]=Z,se=ge;else break e}}return K}function r(N,K){var Z=N.sortIndex-K.sortIndex;return Z!==0?Z:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=N)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function y(N){if(g=!1,x(N),!_)if(t(l)!==null)_=!0,V(M);else{var K=t(u);K!==null&&q(y,K.startTime-N)}}function M(N,K){_=!1,g&&(g=!1,f(P),P=-1),p=!0;var Z=d;try{for(x(K),h=t(l);h!==null&&(!(h.expirationTime>K)||N&&!b());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Se=se(h.expirationTime<=K);K=n.unstable_now(),typeof Se=="function"?h.callback=Se:h===t(l)&&i(l),x(K)}else i(l);h=t(l)}if(h!==null)var Ge=!0;else{var X=t(u);X!==null&&q(y,X.startTime-K),Ge=!1}return Ge}finally{h=null,d=Z,p=!1}}var T=!1,E=null,P=-1,w=5,A=-1;function b(){return!(n.unstable_now()-A<w)}function I(){if(E!==null){var N=n.unstable_now();A=N;var K=!0;try{K=E(!0,N)}finally{K?F():(T=!1,E=null)}}else T=!1}var F;if(typeof v=="function")F=function(){v(I)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=I,F=function(){$.postMessage(null)}}else F=function(){m(I,0)};function V(N){E=N,T||(T=!0,F())}function q(N,K){P=m(function(){N(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,V(M))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Z=d;d=K;try{return N()}finally{d=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=d;d=N;try{return K()}finally{d=Z}},n.unstable_scheduleCallback=function(N,K,Z){var se=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,N={id:c++,callback:K,priorityLevel:N,startTime:Z,expirationTime:Se,sortIndex:-1},Z>se?(N.sortIndex=Z,e(u,N),t(l)===null&&N===t(u)&&(g?(f(P),P=-1):g=!0,q(y,Z-se))):(N.sortIndex=Se,e(l,N),_||p||(_=!0,V(M))),N},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(N){var K=d;return function(){var Z=d;d=K;try{return N.apply(this,arguments)}finally{d=Z}}}})(sv);rv.exports=sv;var pM=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mM=Ye,Kn=pM;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,ol={};function Qs(n,e){Zo(n,e),Zo(n+"Capture",e)}function Zo(n,e){for(ol[n]=e,n=0;n<e.length;n++)ov.add(e[n])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,_M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Nm={};function gM(n){return Ih.call(Nm,n)?!0:Ih.call(Dm,n)?!1:_M.test(n)?Nm[n]=!0:(Dm[n]=!0,!1)}function vM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function xM(n,e,t,i){if(e===null||typeof e>"u"||vM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){rn[n]=new Mn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];rn[e]=new Mn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){rn[n]=new Mn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){rn[n]=new Mn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){rn[n]=new Mn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){rn[n]=new Mn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){rn[n]=new Mn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){rn[n]=new Mn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){rn[n]=new Mn(n,5,!1,n.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function ap(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(op,ap);rn[e]=new Mn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(op,ap);rn[e]=new Mn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(op,ap);rn[e]=new Mn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){rn[n]=new Mn(n,1,!1,n.toLowerCase(),null,!1,!1)});rn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){rn[n]=new Mn(n,1,!1,n.toLowerCase(),null,!0,!0)});function lp(n,e,t,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xM(e,t,r,i)&&(t=null),i||r===null?gM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Er=mM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wl=Symbol.for("react.element"),wo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),Fh=Symbol.for("react.suspense"),zh=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),uv=Symbol.for("react.offscreen"),Um=Symbol.iterator;function Ma(n){return n===null||typeof n!="object"?null:(n=Um&&n[Um]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,xf;function Oa(n){if(xf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xf=e&&e[1]||""}return`
`+xf+n}var yf=!1;function Sf(n,e){if(!n||yf)return"";yf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{yf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Oa(n):""}function yM(n){switch(n.tag){case 5:return Oa(n.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return n=Sf(n.type,!1),n;case 11:return n=Sf(n.type.render,!1),n;case 1:return n=Sf(n.type,!0),n;default:return""}}function kh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case To:return"Fragment";case wo:return"Portal";case Oh:return"Profiler";case up:return"StrictMode";case Fh:return"Suspense";case zh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case lv:return(n.displayName||"Context")+".Consumer";case av:return(n._context.displayName||"Context")+".Provider";case cp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fp:return e=n.displayName||null,e!==null?e:kh(n.type)||"Memo";case Dr:e=n._payload,n=n._init;try{return kh(n(e))}catch{}}return null}function SM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kh(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ns(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MM(n){var e=cv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Xl(n){n._valueTracker||(n._valueTracker=MM(n))}function fv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=cv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ic(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Bh(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Im(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ns(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(n,e){e=e.checked,e!=null&&lp(n,"checked",e,!1)}function Hh(n,e){hv(n,e);var t=ns(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Vh(n,e.type,ns(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Om(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Vh(n,e,t){(e!=="number"||ic(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Fa=Array.isArray;function ko(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ns(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Gh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Fm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Fa(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ns(t)}}function dv(n,e){var t=ns(e.value),i=ns(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function zm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function pv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?pv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var jl,mv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function al(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EM=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(n){EM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Xa[e]=Xa[n]})});function _v(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Xa.hasOwnProperty(n)&&Xa[n]?(""+e).trim():e+"px"}function gv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=_v(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var wM=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(n,e){if(e){if(wM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function jh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yh=null;function hp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $h=null,Bo=null,Ho=null;function km(n){if(n=Il(n)){if(typeof $h!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=Yc(e),$h(n.stateNode,n.type,e))}}function vv(n){Bo?Ho?Ho.push(n):Ho=[n]:Bo=n}function xv(){if(Bo){var n=Bo,e=Ho;if(Ho=Bo=null,km(n),e)for(n=0;n<e.length;n++)km(e[n])}}function yv(n,e){return n(e)}function Sv(){}var Mf=!1;function Mv(n,e,t){if(Mf)return n(e,t);Mf=!0;try{return yv(n,e,t)}finally{Mf=!1,(Bo!==null||Ho!==null)&&(Sv(),xv())}}function ll(n,e){var t=n.stateNode;if(t===null)return null;var i=Yc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var qh=!1;if(mr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){qh=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{qh=!1}function TM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ja=!1,rc=null,sc=!1,Kh=null,AM={onError:function(n){ja=!0,rc=n}};function CM(n,e,t,i,r,s,o,a,l){ja=!1,rc=null,TM.apply(AM,arguments)}function RM(n,e,t,i,r,s,o,a,l){if(CM.apply(this,arguments),ja){if(ja){var u=rc;ja=!1,rc=null}else throw Error(ae(198));sc||(sc=!0,Kh=u)}}function Js(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ev(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(n){if(Js(n)!==n)throw Error(ae(188))}function PM(n){var e=n.alternate;if(!e){if(e=Js(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Bm(r),n;if(s===i)return Bm(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function wv(n){return n=PM(n),n!==null?Tv(n):null}function Tv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Tv(n);if(e!==null)return e;n=n.sibling}return null}var Av=Kn.unstable_scheduleCallback,Hm=Kn.unstable_cancelCallback,bM=Kn.unstable_shouldYield,LM=Kn.unstable_requestPaint,It=Kn.unstable_now,DM=Kn.unstable_getCurrentPriorityLevel,dp=Kn.unstable_ImmediatePriority,Cv=Kn.unstable_UserBlockingPriority,oc=Kn.unstable_NormalPriority,NM=Kn.unstable_LowPriority,Rv=Kn.unstable_IdlePriority,Gc=null,Gi=null;function UM(n){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(Gc,n,void 0,(n.current.flags&128)===128)}catch{}}var Ai=Math.clz32?Math.clz32:FM,IM=Math.log,OM=Math.LN2;function FM(n){return n>>>=0,n===0?32:31-(IM(n)/OM|0)|0}var Yl=64,$l=4194304;function za(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ac(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=za(a):(s&=o,s!==0&&(i=za(s)))}else o=t&~r,o!==0?i=za(o):s!==0&&(i=za(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ai(e),r=1<<t,i|=n[t],e&=~r;return i}function zM(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kM(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ai(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=zM(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Zh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pv(){var n=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),n}function Ef(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nl(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ai(e),n[e]=t}function BM(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ai(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function pp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ai(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var lt=0;function bv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Lv,mp,Dv,Nv,Uv,Qh=!1,ql=[],Wr=null,Xr=null,jr=null,ul=new Map,cl=new Map,Ur=[],HM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(n,e){switch(n){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function wa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Il(e),e!==null&&mp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function VM(n,e,t,i,r){switch(e){case"focusin":return Wr=wa(Wr,n,e,t,i,r),!0;case"dragenter":return Xr=wa(Xr,n,e,t,i,r),!0;case"mouseover":return jr=wa(jr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ul.set(s,wa(ul.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,cl.set(s,wa(cl.get(s)||null,n,e,t,i,r)),!0}return!1}function Iv(n){var e=bs(n.target);if(e!==null){var t=Js(e);if(t!==null){if(e=t.tag,e===13){if(e=Ev(t),e!==null){n.blockedOn=e,Uv(n.priority,function(){Dv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Jh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Yh=i,t.target.dispatchEvent(i),Yh=null}else return e=Il(t),e!==null&&mp(e),n.blockedOn=t,!1;e.shift()}return!0}function Gm(n,e,t){Vu(n)&&t.delete(e)}function GM(){Qh=!1,Wr!==null&&Vu(Wr)&&(Wr=null),Xr!==null&&Vu(Xr)&&(Xr=null),jr!==null&&Vu(jr)&&(jr=null),ul.forEach(Gm),cl.forEach(Gm)}function Ta(n,e){n.blockedOn===e&&(n.blockedOn=null,Qh||(Qh=!0,Kn.unstable_scheduleCallback(Kn.unstable_NormalPriority,GM)))}function fl(n){function e(r){return Ta(r,n)}if(0<ql.length){Ta(ql[0],n);for(var t=1;t<ql.length;t++){var i=ql[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Wr!==null&&Ta(Wr,n),Xr!==null&&Ta(Xr,n),jr!==null&&Ta(jr,n),ul.forEach(e),cl.forEach(e),t=0;t<Ur.length;t++)i=Ur[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ur.length&&(t=Ur[0],t.blockedOn===null);)Iv(t),t.blockedOn===null&&Ur.shift()}var Vo=Er.ReactCurrentBatchConfig,lc=!0;function WM(n,e,t,i){var r=lt,s=Vo.transition;Vo.transition=null;try{lt=1,_p(n,e,t,i)}finally{lt=r,Vo.transition=s}}function XM(n,e,t,i){var r=lt,s=Vo.transition;Vo.transition=null;try{lt=4,_p(n,e,t,i)}finally{lt=r,Vo.transition=s}}function _p(n,e,t,i){if(lc){var r=Jh(n,e,t,i);if(r===null)Nf(n,e,i,uc,t),Vm(n,i);else if(VM(r,n,e,t,i))i.stopPropagation();else if(Vm(n,i),e&4&&-1<HM.indexOf(n)){for(;r!==null;){var s=Il(r);if(s!==null&&Lv(s),s=Jh(n,e,t,i),s===null&&Nf(n,e,i,uc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nf(n,e,i,null,t)}}var uc=null;function Jh(n,e,t,i){if(uc=null,n=hp(i),n=bs(n),n!==null)if(e=Js(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ev(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return uc=n,null}function Ov(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DM()){case dp:return 1;case Cv:return 4;case oc:case NM:return 16;case Rv:return 536870912;default:return 16}default:return 16}}var Fr=null,gp=null,Gu=null;function Fv(){if(Gu)return Gu;var n,e=gp,t=e.length,i,r="value"in Fr?Fr.value:Fr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Gu=r.slice(n,1<i?1-i:void 0)}function Wu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Kl(){return!0}function Wm(){return!1}function ei(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kl:Wm,this.isPropagationStopped=Wm,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vp=ei(va),Ul=Rt({},va,{view:0,detail:0}),jM=ei(Ul),wf,Tf,Aa,Wc=Rt({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(wf=n.screenX-Aa.screenX,Tf=n.screenY-Aa.screenY):Tf=wf=0,Aa=n),wf)},movementY:function(n){return"movementY"in n?n.movementY:Tf}}),Xm=ei(Wc),YM=Rt({},Wc,{dataTransfer:0}),$M=ei(YM),qM=Rt({},Ul,{relatedTarget:0}),Af=ei(qM),KM=Rt({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),ZM=ei(KM),QM=Rt({},va,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),JM=ei(QM),eE=Rt({},va,{data:0}),jm=ei(eE),tE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=iE[n])?!!e[n]:!1}function xp(){return rE}var sE=Rt({},Ul,{key:function(n){if(n.key){var e=tE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Wu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?nE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(n){return n.type==="keypress"?Wu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),oE=ei(sE),aE=Rt({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=ei(aE),lE=Rt({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),uE=ei(lE),cE=Rt({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),fE=ei(cE),hE=Rt({},Wc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dE=ei(hE),pE=[9,13,27,32],yp=mr&&"CompositionEvent"in window,Ya=null;mr&&"documentMode"in document&&(Ya=document.documentMode);var mE=mr&&"TextEvent"in window&&!Ya,zv=mr&&(!yp||Ya&&8<Ya&&11>=Ya),$m=" ",qm=!1;function kv(n,e){switch(n){case"keyup":return pE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ao=!1;function _E(n,e){switch(n){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(qm=!0,$m);case"textInput":return n=e.data,n===$m&&qm?null:n;default:return null}}function gE(n,e){if(Ao)return n==="compositionend"||!yp&&kv(n,e)?(n=Fv(),Gu=gp=Fr=null,Ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zv&&e.locale!=="ko"?null:e.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!vE[n.type]:e==="textarea"}function Hv(n,e,t,i){vv(i),e=cc(e,"onChange"),0<e.length&&(t=new vp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var $a=null,hl=null;function xE(n){Qv(n,0)}function Xc(n){var e=Po(n);if(fv(e))return n}function yE(n,e){if(n==="change")return e}var Vv=!1;if(mr){var Cf;if(mr){var Rf="oninput"in document;if(!Rf){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Rf=typeof Zm.oninput=="function"}Cf=Rf}else Cf=!1;Vv=Cf&&(!document.documentMode||9<document.documentMode)}function Qm(){$a&&($a.detachEvent("onpropertychange",Gv),hl=$a=null)}function Gv(n){if(n.propertyName==="value"&&Xc(hl)){var e=[];Hv(e,hl,n,hp(n)),Mv(xE,e)}}function SE(n,e,t){n==="focusin"?(Qm(),$a=e,hl=t,$a.attachEvent("onpropertychange",Gv)):n==="focusout"&&Qm()}function ME(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xc(hl)}function EE(n,e){if(n==="click")return Xc(e)}function wE(n,e){if(n==="input"||n==="change")return Xc(e)}function TE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Pi=typeof Object.is=="function"?Object.is:TE;function dl(n,e){if(Pi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ih.call(e,r)||!Pi(n[r],e[r]))return!1}return!0}function Jm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function e_(n,e){var t=Jm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jm(t)}}function Wv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Wv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var n=window,e=ic();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ic(n.document)}return e}function Sp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function AE(n){var e=Xv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Wv(t.ownerDocument.documentElement,t)){if(i!==null&&Sp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=e_(t,s);var o=e_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var CE=mr&&"documentMode"in document&&11>=document.documentMode,Co=null,ed=null,qa=null,td=!1;function t_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;td||Co==null||Co!==ic(i)||(i=Co,"selectionStart"in i&&Sp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qa&&dl(qa,i)||(qa=i,i=cc(ed,"onSelect"),0<i.length&&(e=new vp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Co)))}function Zl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ro={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Pf={},jv={};mr&&(jv=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function jc(n){if(Pf[n])return Pf[n];if(!Ro[n])return n;var e=Ro[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in jv)return Pf[n]=e[t];return n}var Yv=jc("animationend"),$v=jc("animationiteration"),qv=jc("animationstart"),Kv=jc("transitionend"),Zv=new Map,n_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(n,e){Zv.set(n,e),Qs(e,[n])}for(var bf=0;bf<n_.length;bf++){var Lf=n_[bf],RE=Lf.toLowerCase(),PE=Lf[0].toUpperCase()+Lf.slice(1);us(RE,"on"+PE)}us(Yv,"onAnimationEnd");us($v,"onAnimationIteration");us(qv,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(Kv,"onTransitionEnd");Zo("onMouseEnter",["mouseout","mouseover"]);Zo("onMouseLeave",["mouseout","mouseover"]);Zo("onPointerEnter",["pointerout","pointerover"]);Zo("onPointerLeave",["pointerout","pointerover"]);Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function i_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,RM(i,e,void 0,n),n.currentTarget=null}function Qv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;i_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;i_(r,a,u),s=l}}}if(sc)throw n=Kh,sc=!1,Kh=null,n}function mt(n,e){var t=e[od];t===void 0&&(t=e[od]=new Set);var i=n+"__bubble";t.has(i)||(Jv(e,n,2,!1),t.add(i))}function Df(n,e,t){var i=0;e&&(i|=4),Jv(t,n,i,e)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function pl(n){if(!n[Ql]){n[Ql]=!0,ov.forEach(function(t){t!=="selectionchange"&&(bE.has(t)||Df(t,!1,n),Df(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ql]||(e[Ql]=!0,Df("selectionchange",!1,e))}}function Jv(n,e,t,i){switch(Ov(e)){case 1:var r=WM;break;case 4:r=XM;break;default:r=_p}t=r.bind(null,e,t,n),r=void 0,!qh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Nf(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=bs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mv(function(){var u=s,c=hp(t),h=[];e:{var d=Zv.get(n);if(d!==void 0){var p=vp,_=n;switch(n){case"keypress":if(Wu(t)===0)break e;case"keydown":case"keyup":p=oE;break;case"focusin":_="focus",p=Af;break;case"focusout":_="blur",p=Af;break;case"beforeblur":case"afterblur":p=Af;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uE;break;case Yv:case $v:case qv:p=ZM;break;case Kv:p=fE;break;case"scroll":p=jM;break;case"wheel":p=dE;break;case"copy":case"cut":case"paste":p=JM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ym}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?d!==null?d+"Capture":null:d;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=ll(v,f),y!=null&&g.push(ml(v,y,x)))),m)break;v=v.return}0<g.length&&(d=new p(d,_,null,t,c),h.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Yh&&(_=t.relatedTarget||t.fromElement)&&(bs(_)||_[_r]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?bs(_):null,_!==null&&(m=Js(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=Xm,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=Ym,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Po(p),x=_==null?d:Po(_),d=new g(y,v+"leave",p,t,c),d.target=m,d.relatedTarget=x,y=null,bs(c)===u&&(g=new g(f,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,f=_,v=0,x=g;x;x=no(x))v++;for(x=0,y=f;y;y=no(y))x++;for(;0<v-x;)g=no(g),v--;for(;0<x-v;)f=no(f),x--;for(;v--;){if(g===f||f!==null&&g===f.alternate)break t;g=no(g),f=no(f)}g=null}else g=null;p!==null&&r_(h,d,p,g,!1),_!==null&&m!==null&&r_(h,m,_,g,!0)}}e:{if(d=u?Po(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=yE;else if(Km(d))if(Vv)M=wE;else{M=ME;var T=SE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=EE);if(M&&(M=M(n,u))){Hv(h,M,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Vh(d,"number",d.value)}switch(T=u?Po(u):window,n){case"focusin":(Km(T)||T.contentEditable==="true")&&(Co=T,ed=u,qa=null);break;case"focusout":qa=ed=Co=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,t_(h,t,c);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":t_(h,t,c)}var E;if(yp)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ao?kv(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(zv&&t.locale!=="ko"&&(Ao||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ao&&(E=Fv()):(Fr=c,gp="value"in Fr?Fr.value:Fr.textContent,Ao=!0)),T=cc(u,P),0<T.length&&(P=new jm(P,n,null,t,c),h.push({event:P,listeners:T}),E?P.data=E:(E=Bv(t),E!==null&&(P.data=E)))),(E=mE?_E(n,t):gE(n,t))&&(u=cc(u,"onBeforeInput"),0<u.length&&(c=new jm("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=E))}Qv(h,e)})}function ml(n,e,t){return{instance:n,listener:e,currentTarget:t}}function cc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ll(n,t),s!=null&&i.unshift(ml(n,s,r)),s=ll(n,e),s!=null&&i.push(ml(n,s,r))),n=n.return}return i}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function r_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ll(t,s),l!=null&&o.unshift(ml(t,l,a))):r||(l=ll(t,s),l!=null&&o.push(ml(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var LE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function s_(n){return(typeof n=="string"?n:""+n).replace(LE,`
`).replace(DE,"")}function Jl(n,e,t){if(e=s_(e),s_(n)!==e&&t)throw Error(ae(425))}function fc(){}var nd=null,id=null;function rd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,NE=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,UE=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(n){return o_.resolve(null).then(n).catch(IE)}:sd;function IE(n){setTimeout(function(){throw n})}function Uf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),fl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);fl(e)}function Yr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function a_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var xa=Math.random().toString(36).slice(2),Fi="__reactFiber$"+xa,_l="__reactProps$"+xa,_r="__reactContainer$"+xa,od="__reactEvents$"+xa,OE="__reactListeners$"+xa,FE="__reactHandles$"+xa;function bs(n){var e=n[Fi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[_r]||t[Fi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=a_(n);n!==null;){if(t=n[Fi])return t;n=a_(n)}return e}n=t,t=n.parentNode}return null}function Il(n){return n=n[Fi]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Po(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function Yc(n){return n[_l]||null}var ad=[],bo=-1;function cs(n){return{current:n}}function gt(n){0>bo||(n.current=ad[bo],ad[bo]=null,bo--)}function dt(n,e){bo++,ad[bo]=n.current,n.current=e}var is={},dn=cs(is),Cn=cs(!1),Gs=is;function Qo(n,e){var t=n.type.contextTypes;if(!t)return is;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(n){return n=n.childContextTypes,n!=null}function hc(){gt(Cn),gt(dn)}function l_(n,e,t){if(dn.current!==is)throw Error(ae(168));dt(dn,e),dt(Cn,t)}function ex(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,SM(n)||"Unknown",r));return Rt({},t,i)}function dc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||is,Gs=dn.current,dt(dn,n),dt(Cn,Cn.current),!0}function u_(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=ex(n,e,Gs),i.__reactInternalMemoizedMergedChildContext=n,gt(Cn),gt(dn),dt(dn,n)):gt(Cn),dt(Cn,t)}var rr=null,$c=!1,If=!1;function tx(n){rr===null?rr=[n]:rr.push(n)}function zE(n){$c=!0,tx(n)}function fs(){if(!If&&rr!==null){If=!0;var n=0,e=lt;try{var t=rr;for(lt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}rr=null,$c=!1}catch(r){throw rr!==null&&(rr=rr.slice(n+1)),Av(dp,fs),r}finally{lt=e,If=!1}}return null}var Lo=[],Do=0,pc=null,mc=0,ri=[],si=0,Ws=null,ur=1,cr="";function ws(n,e){Lo[Do++]=mc,Lo[Do++]=pc,pc=n,mc=e}function nx(n,e,t){ri[si++]=ur,ri[si++]=cr,ri[si++]=Ws,Ws=n;var i=ur;n=cr;var r=32-Ai(i)-1;i&=~(1<<r),t+=1;var s=32-Ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ur=1<<32-Ai(e)+r|t<<r|i,cr=s+n}else ur=1<<s|t<<r|i,cr=n}function Mp(n){n.return!==null&&(ws(n,1),nx(n,1,0))}function Ep(n){for(;n===pc;)pc=Lo[--Do],Lo[Do]=null,mc=Lo[--Do],Lo[Do]=null;for(;n===Ws;)Ws=ri[--si],ri[si]=null,cr=ri[--si],ri[si]=null,ur=ri[--si],ri[si]=null}var Yn=null,Xn=null,yt=!1,Mi=null;function ix(n,e){var t=ai(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function c_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Yn=n,Xn=Yr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Yn=n,Xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ws!==null?{id:ur,overflow:cr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ai(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Yn=n,Xn=null,!0):!1;default:return!1}}function ld(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ud(n){if(yt){var e=Xn;if(e){var t=e;if(!c_(n,e)){if(ld(n))throw Error(ae(418));e=Yr(t.nextSibling);var i=Yn;e&&c_(n,e)?ix(i,t):(n.flags=n.flags&-4097|2,yt=!1,Yn=n)}}else{if(ld(n))throw Error(ae(418));n.flags=n.flags&-4097|2,yt=!1,Yn=n}}}function f_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function eu(n){if(n!==Yn)return!1;if(!yt)return f_(n),yt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!rd(n.type,n.memoizedProps)),e&&(e=Xn)){if(ld(n))throw rx(),Error(ae(418));for(;e;)ix(n,e),e=Yr(e.nextSibling)}if(f_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Xn=Yr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Xn=null}}else Xn=Yn?Yr(n.stateNode.nextSibling):null;return!0}function rx(){for(var n=Xn;n;)n=Yr(n.nextSibling)}function Jo(){Xn=Yn=null,yt=!1}function wp(n){Mi===null?Mi=[n]:Mi.push(n)}var kE=Er.ReactCurrentBatchConfig;function Ca(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function tu(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function h_(n){var e=n._init;return e(n._payload)}function sx(n){function e(f,v){if(n){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Zr(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,y){return v===null||v.tag!==6?(v=Vf(x,f.mode,y),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,y){var M=x.type;return M===To?c(f,v,x.props.children,y,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Dr&&h_(M)===v.type)?(y=r(v,x.props),y.ref=Ca(f,v,x),y.return=f,y):(y=Zu(x.type,x.key,x.props,null,f.mode,y),y.ref=Ca(f,v,x),y.return=f,y)}function u(f,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Gf(x,f.mode,y),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function c(f,v,x,y,M){return v===null||v.tag!==7?(v=Fs(x,f.mode,y,M),v.return=f,v):(v=r(v,x),v.return=f,v)}function h(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vf(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wl:return x=Zu(v.type,v.key,v.props,null,f.mode,x),x.ref=Ca(f,null,v),x.return=f,x;case wo:return v=Gf(v,f.mode,x),v.return=f,v;case Dr:var y=v._init;return h(f,y(v._payload),x)}if(Fa(v)||Ma(v))return v=Fs(v,f.mode,x,null),v.return=f,v;tu(f,v)}return null}function d(f,v,x,y){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(f,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:return x.key===M?l(f,v,x,y):null;case wo:return x.key===M?u(f,v,x,y):null;case Dr:return M=x._init,d(f,v,M(x._payload),y)}if(Fa(x)||Ma(x))return M!==null?null:c(f,v,x,y,null);tu(f,x)}return null}function p(f,v,x,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(v,f,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:return f=f.get(y.key===null?x:y.key)||null,l(v,f,y,M);case wo:return f=f.get(y.key===null?x:y.key)||null,u(v,f,y,M);case Dr:var T=y._init;return p(f,v,x,T(y._payload),M)}if(Fa(y)||Ma(y))return f=f.get(x)||null,c(v,f,y,M,null);tu(v,y)}return null}function _(f,v,x,y){for(var M=null,T=null,E=v,P=v=0,w=null;E!==null&&P<x.length;P++){E.index>P?(w=E,E=null):w=E.sibling;var A=d(f,E,x[P],y);if(A===null){E===null&&(E=w);break}n&&E&&A.alternate===null&&e(f,E),v=s(A,v,P),T===null?M=A:T.sibling=A,T=A,E=w}if(P===x.length)return t(f,E),yt&&ws(f,P),M;if(E===null){for(;P<x.length;P++)E=h(f,x[P],y),E!==null&&(v=s(E,v,P),T===null?M=E:T.sibling=E,T=E);return yt&&ws(f,P),M}for(E=i(f,E);P<x.length;P++)w=p(E,f,P,x[P],y),w!==null&&(n&&w.alternate!==null&&E.delete(w.key===null?P:w.key),v=s(w,v,P),T===null?M=w:T.sibling=w,T=w);return n&&E.forEach(function(b){return e(f,b)}),yt&&ws(f,P),M}function g(f,v,x,y){var M=Ma(x);if(typeof M!="function")throw Error(ae(150));if(x=M.call(x),x==null)throw Error(ae(151));for(var T=M=null,E=v,P=v=0,w=null,A=x.next();E!==null&&!A.done;P++,A=x.next()){E.index>P?(w=E,E=null):w=E.sibling;var b=d(f,E,A.value,y);if(b===null){E===null&&(E=w);break}n&&E&&b.alternate===null&&e(f,E),v=s(b,v,P),T===null?M=b:T.sibling=b,T=b,E=w}if(A.done)return t(f,E),yt&&ws(f,P),M;if(E===null){for(;!A.done;P++,A=x.next())A=h(f,A.value,y),A!==null&&(v=s(A,v,P),T===null?M=A:T.sibling=A,T=A);return yt&&ws(f,P),M}for(E=i(f,E);!A.done;P++,A=x.next())A=p(E,f,P,A.value,y),A!==null&&(n&&A.alternate!==null&&E.delete(A.key===null?P:A.key),v=s(A,v,P),T===null?M=A:T.sibling=A,T=A);return n&&E.forEach(function(I){return e(f,I)}),yt&&ws(f,P),M}function m(f,v,x,y){if(typeof x=="object"&&x!==null&&x.type===To&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wl:e:{for(var M=x.key,T=v;T!==null;){if(T.key===M){if(M=x.type,M===To){if(T.tag===7){t(f,T.sibling),v=r(T,x.props.children),v.return=f,f=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Dr&&h_(M)===T.type){t(f,T.sibling),v=r(T,x.props),v.ref=Ca(f,T,x),v.return=f,f=v;break e}t(f,T);break}else e(f,T);T=T.sibling}x.type===To?(v=Fs(x.props.children,f.mode,y,x.key),v.return=f,f=v):(y=Zu(x.type,x.key,x.props,null,f.mode,y),y.ref=Ca(f,v,x),y.return=f,f=y)}return o(f);case wo:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=Gf(x,f.mode,y),v.return=f,f=v}return o(f);case Dr:return T=x._init,m(f,v,T(x._payload),y)}if(Fa(x))return _(f,v,x,y);if(Ma(x))return g(f,v,x,y);tu(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,x),v.return=f,f=v):(t(f,v),v=Vf(x,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return m}var ea=sx(!0),ox=sx(!1),_c=cs(null),gc=null,No=null,Tp=null;function Ap(){Tp=No=gc=null}function Cp(n){var e=_c.current;gt(_c),n._currentValue=e}function cd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Go(n,e){gc=n,Tp=No=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(An=!0),n.firstContext=null)}function di(n){var e=n._currentValue;if(Tp!==n)if(n={context:n,memoizedValue:e,next:null},No===null){if(gc===null)throw Error(ae(308));No=n,gc.dependencies={lanes:0,firstContext:n}}else No=No.next=n;return e}var Ls=null;function Rp(n){Ls===null?Ls=[n]:Ls.push(n)}function ax(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rp(e)):(t.next=r.next,r.next=t),e.interleaved=t,gr(n,i)}function gr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Nr=!1;function Pp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gr(n,t)}return r=i.interleaved,r===null?(e.next=e,Rp(i)):(e.next=r.next,r.next=e),i.interleaved=e,gr(n,t)}function Xu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pp(n,t)}}function d_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function vc(n,e,t,i){var r=n.updateQueue;Nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(d=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Rt({},h,d);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);js|=o,n.lanes=o,n.memoizedState=h}}function p_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ol={},Wi=cs(Ol),gl=cs(Ol),vl=cs(Ol);function Ds(n){if(n===Ol)throw Error(ae(174));return n}function bp(n,e){switch(dt(vl,e),dt(gl,n),dt(Wi,Ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Wh(e,n)}gt(Wi),dt(Wi,e)}function ta(){gt(Wi),gt(gl),gt(vl)}function ux(n){Ds(vl.current);var e=Ds(Wi.current),t=Wh(e,n.type);e!==t&&(dt(gl,n),dt(Wi,t))}function Lp(n){gl.current===n&&(gt(Wi),gt(gl))}var Et=cs(0);function xc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Of=[];function Dp(){for(var n=0;n<Of.length;n++)Of[n]._workInProgressVersionPrimary=null;Of.length=0}var ju=Er.ReactCurrentDispatcher,Ff=Er.ReactCurrentBatchConfig,Xs=0,At=null,Ht=null,Yt=null,yc=!1,Ka=!1,xl=0,BE=0;function on(){throw Error(ae(321))}function Np(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Pi(n[t],e[t]))return!1;return!0}function Up(n,e,t,i,r,s){if(Xs=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=n===null||n.memoizedState===null?WE:XE,n=t(i,r),Ka){s=0;do{if(Ka=!1,xl=0,25<=s)throw Error(ae(301));s+=1,Yt=Ht=null,e.updateQueue=null,ju.current=jE,n=t(i,r)}while(Ka)}if(ju.current=Sc,e=Ht!==null&&Ht.next!==null,Xs=0,Yt=Ht=At=null,yc=!1,e)throw Error(ae(300));return n}function Ip(){var n=xl!==0;return xl=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?At.memoizedState=Yt=n:Yt=Yt.next=n,Yt}function pi(){if(Ht===null){var n=At.alternate;n=n!==null?n.memoizedState:null}else n=Ht.next;var e=Yt===null?At.memoizedState:Yt.next;if(e!==null)Yt=e,Ht=n;else{if(n===null)throw Error(ae(310));Ht=n,n={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Yt===null?At.memoizedState=Yt=n:Yt=Yt.next=n}return Yt}function yl(n,e){return typeof e=="function"?e(n):e}function zf(n){var e=pi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=Ht,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Xs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,At.lanes|=c,js|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Pi(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,At.lanes|=s,js|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function kf(n){var e=pi(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Pi(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function cx(){}function fx(n,e){var t=At,i=pi(),r=e(),s=!Pi(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Op(px.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(t.flags|=2048,Sl(9,dx.bind(null,t,i,r,e),void 0,null),$t===null)throw Error(ae(349));Xs&30||hx(t,e,r)}return r}function hx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function dx(n,e,t,i){e.value=t,e.getSnapshot=i,mx(e)&&_x(n)}function px(n,e,t){return t(function(){mx(e)&&_x(n)})}function mx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Pi(n,t)}catch{return!0}}function _x(n){var e=gr(n,1);e!==null&&Ci(e,n,1,-1)}function m_(n){var e=Ui();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:n},e.queue=n,n=n.dispatch=GE.bind(null,At,n),[e.memoizedState,n]}function Sl(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function gx(){return pi().memoizedState}function Yu(n,e,t,i){var r=Ui();At.flags|=n,r.memoizedState=Sl(1|e,t,void 0,i===void 0?null:i)}function qc(n,e,t,i){var r=pi();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&Np(i,o.deps)){r.memoizedState=Sl(e,t,s,i);return}}At.flags|=n,r.memoizedState=Sl(1|e,t,s,i)}function __(n,e){return Yu(8390656,8,n,e)}function Op(n,e){return qc(2048,8,n,e)}function vx(n,e){return qc(4,2,n,e)}function xx(n,e){return qc(4,4,n,e)}function yx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Sx(n,e,t){return t=t!=null?t.concat([n]):null,qc(4,4,yx.bind(null,e,n),t)}function Fp(){}function Mx(n,e){var t=pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Ex(n,e){var t=pi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Np(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function wx(n,e,t){return Xs&21?(Pi(t,e)||(t=Pv(),At.lanes|=t,js|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,An=!0),n.memoizedState=t)}function HE(n,e){var t=lt;lt=t!==0&&4>t?t:4,n(!0);var i=Ff.transition;Ff.transition={};try{n(!1),e()}finally{lt=t,Ff.transition=i}}function Tx(){return pi().memoizedState}function VE(n,e,t){var i=Kr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Ax(n))Cx(e,t);else if(t=ax(n,e,t,i),t!==null){var r=yn();Ci(t,n,i,r),Rx(t,e,i)}}function GE(n,e,t){var i=Kr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ax(n))Cx(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Rp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ax(n,e,r,i),t!==null&&(r=yn(),Ci(t,n,i,r),Rx(t,e,i))}}function Ax(n){var e=n.alternate;return n===At||e!==null&&e===At}function Cx(n,e){Ka=yc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Rx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,pp(n,t)}}var Sc={readContext:di,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},WE={readContext:di,useCallback:function(n,e){return Ui().memoizedState=[n,e===void 0?null:e],n},useContext:di,useEffect:__,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Yu(4194308,4,yx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Yu(4194308,4,n,e)},useInsertionEffect:function(n,e){return Yu(4,2,n,e)},useMemo:function(n,e){var t=Ui();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ui();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=VE.bind(null,At,n),[i.memoizedState,n]},useRef:function(n){var e=Ui();return n={current:n},e.memoizedState=n},useState:m_,useDebugValue:Fp,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=m_(!1),e=n[0];return n=HE.bind(null,n[1]),Ui().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=At,r=Ui();if(yt){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),$t===null)throw Error(ae(349));Xs&30||hx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,__(px.bind(null,i,s,n),[n]),i.flags|=2048,Sl(9,dx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ui(),e=$t.identifierPrefix;if(yt){var t=cr,i=ur;t=(i&~(1<<32-Ai(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=xl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=BE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},XE={readContext:di,useCallback:Mx,useContext:di,useEffect:Op,useImperativeHandle:Sx,useInsertionEffect:vx,useLayoutEffect:xx,useMemo:Ex,useReducer:zf,useRef:gx,useState:function(){return zf(yl)},useDebugValue:Fp,useDeferredValue:function(n){var e=pi();return wx(e,Ht.memoizedState,n)},useTransition:function(){var n=zf(yl)[0],e=pi().memoizedState;return[n,e]},useMutableSource:cx,useSyncExternalStore:fx,useId:Tx,unstable_isNewReconciler:!1},jE={readContext:di,useCallback:Mx,useContext:di,useEffect:Op,useImperativeHandle:Sx,useInsertionEffect:vx,useLayoutEffect:xx,useMemo:Ex,useReducer:kf,useRef:gx,useState:function(){return kf(yl)},useDebugValue:Fp,useDeferredValue:function(n){var e=pi();return Ht===null?e.memoizedState=n:wx(e,Ht.memoizedState,n)},useTransition:function(){var n=kf(yl)[0],e=pi().memoizedState;return[n,e]},useMutableSource:cx,useSyncExternalStore:fx,useId:Tx,unstable_isNewReconciler:!1};function yi(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function fd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Kc={isMounted:function(n){return(n=n._reactInternals)?Js(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=yn(),r=Kr(n),s=hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=$r(n,s,r),e!==null&&(Ci(e,n,r,i),Xu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=yn(),r=Kr(n),s=hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=$r(n,s,r),e!==null&&(Ci(e,n,r,i),Xu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=yn(),i=Kr(n),r=hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=$r(n,r,i),e!==null&&(Ci(e,n,i,t),Xu(e,n,i))}};function g_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!dl(t,i)||!dl(r,s):!0}function Px(n,e,t){var i=!1,r=is,s=e.contextType;return typeof s=="object"&&s!==null?s=di(s):(r=Rn(e)?Gs:dn.current,i=e.contextTypes,s=(i=i!=null)?Qo(n,r):is),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function v_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Kc.enqueueReplaceState(e,e.state,null)}function hd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Pp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=di(s):(s=Rn(e)?Gs:dn.current,r.context=Qo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kc.enqueueReplaceState(r,r.state,null),vc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function na(n,e){try{var t="",i=e;do t+=yM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Bf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function dd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var YE=typeof WeakMap=="function"?WeakMap:Map;function bx(n,e,t){t=hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ec||(Ec=!0,Ed=i),dd(n,e)},t}function Lx(n,e,t){t=hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){dd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){dd(n,e),typeof i!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function x_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new YE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=a1.bind(null,n,e,t),e.then(n,n))}function y_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function S_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=hr(-1,1),e.tag=2,$r(t,e,1))),t.lanes|=1),n)}var $E=Er.ReactCurrentOwner,An=!1;function gn(n,e,t,i){e.child=n===null?ox(e,null,t,i):ea(e,n.child,t,i)}function M_(n,e,t,i,r){t=t.render;var s=e.ref;return Go(e,r),i=Up(n,e,t,i,s,r),t=Ip(),n!==null&&!An?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vr(n,e,r)):(yt&&t&&Mp(e),e.flags|=1,gn(n,e,i,r),e.child)}function E_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Xp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Dx(n,e,s,i,r)):(n=Zu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:dl,t(o,i)&&n.ref===e.ref)return vr(n,e,r)}return e.flags|=1,n=Zr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Dx(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(dl(s,i)&&n.ref===e.ref)if(An=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(An=!0);else return e.lanes=n.lanes,vr(n,e,r)}return pd(n,e,t,i,r)}function Nx(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Io,Vn),Vn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,dt(Io,Vn),Vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,dt(Io,Vn),Vn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,dt(Io,Vn),Vn|=i;return gn(n,e,r,t),e.child}function Ux(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function pd(n,e,t,i,r){var s=Rn(t)?Gs:dn.current;return s=Qo(e,s),Go(e,r),t=Up(n,e,t,i,s,r),i=Ip(),n!==null&&!An?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vr(n,e,r)):(yt&&i&&Mp(e),e.flags|=1,gn(n,e,t,r),e.child)}function w_(n,e,t,i,r){if(Rn(t)){var s=!0;dc(e)}else s=!1;if(Go(e,r),e.stateNode===null)$u(n,e),Px(e,t,i),hd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=di(u):(u=Rn(t)?Gs:dn.current,u=Qo(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&v_(e,o,i,u),Nr=!1;var d=e.memoizedState;o.state=d,vc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Cn.current||Nr?(typeof c=="function"&&(fd(e,t,c,i),l=e.memoizedState),(a=Nr||g_(e,t,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lx(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:yi(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=di(l):(l=Rn(t)?Gs:dn.current,l=Qo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&v_(e,o,i,l),Nr=!1,d=e.memoizedState,o.state=d,vc(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||Cn.current||Nr?(typeof p=="function"&&(fd(e,t,p,i),_=e.memoizedState),(u=Nr||g_(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return md(n,e,t,i,s,r)}function md(n,e,t,i,r,s){Ux(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&u_(e,t,!1),vr(n,e,s);i=e.stateNode,$E.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ea(e,n.child,null,s),e.child=ea(e,null,a,s)):gn(n,e,a,s),e.memoizedState=i.state,r&&u_(e,t,!0),e.child}function Ix(n){var e=n.stateNode;e.pendingContext?l_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&l_(n,e.context,!1),bp(n,e.containerInfo)}function T_(n,e,t,i,r){return Jo(),wp(r),e.flags|=256,gn(n,e,t,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function gd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ox(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),dt(Et,r&1),n===null)return ud(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jc(o,i,0,null),n=Fs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=gd(t),e.memoizedState=_d,n):zp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qE(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=Fs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?gd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=_d,i}return s=n.child,n=s.sibling,i=Zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function zp(n,e){return e=Jc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function nu(n,e,t,i){return i!==null&&wp(i),ea(e,n.child,null,t),n=zp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function qE(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Bf(Error(ae(422))),nu(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jc({mode:"visible",children:i.children},r,0,null),s=Fs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ea(e,n.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=_d,s);if(!(e.mode&1))return nu(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Bf(s,i,void 0),nu(n,e,o,i)}if(a=(o&n.childLanes)!==0,An||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gr(n,r),Ci(i,n,r,-1))}return Wp(),i=Bf(Error(ae(421))),nu(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=l1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Xn=Yr(r.nextSibling),Yn=e,yt=!0,Mi=null,n!==null&&(ri[si++]=ur,ri[si++]=cr,ri[si++]=Ws,ur=n.id,cr=n.overflow,Ws=e),e=zp(e,i.children),e.flags|=4096,e)}function A_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),cd(n.return,e,t)}function Hf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Fx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&A_(n,t,e);else if(n.tag===19)A_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(dt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&xc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Hf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&xc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Hf(e,!0,t,null,s);break;case"together":Hf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $u(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function vr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),js|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Zr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function KE(n,e,t){switch(e.tag){case 3:Ix(e),Jo();break;case 5:ux(e);break;case 1:Rn(e.type)&&dc(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(_c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?Ox(n,e,t):(dt(Et,Et.current&1),n=vr(n,e,t),n!==null?n.sibling:null);dt(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Fx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Nx(n,e,t)}return vr(n,e,t)}var zx,vd,kx,Bx;zx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vd=function(){};kx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ds(Wi.current);var s=null;switch(t){case"input":r=Bh(n,r),i=Bh(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Gh(n,r),i=Gh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=fc)}Xh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ol.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ol.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bx=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ra(n,e){if(!yt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function an(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ZE(n,e,t){var i=e.pendingProps;switch(Ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Rn(e.type)&&hc(),an(e),null;case 3:return i=e.stateNode,ta(),gt(Cn),gt(dn),Dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(eu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(Ad(Mi),Mi=null))),vd(n,e),an(e),null;case 5:Lp(e);var r=Ds(vl.current);if(t=e.type,n!==null&&e.stateNode!=null)kx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return an(e),null}if(n=Ds(Wi.current),eu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Fi]=e,i[_l]=s,n=(e.mode&1)!==0,t){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ka.length;r++)mt(ka[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Im(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Fm(i,s),mt("invalid",i)}Xh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jl(i.textContent,a,n),r=["children",""+a]):ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(t){case"input":Xl(i),Om(i,s,!0);break;case"textarea":Xl(i),zm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Fi]=e,n[_l]=i,zx(n,e,!1,!1),e.stateNode=n;e:{switch(o=jh(t,i),t){case"dialog":mt("cancel",n),mt("close",n),r=i;break;case"iframe":case"object":case"embed":mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ka.length;r++)mt(ka[r],n);r=i;break;case"source":mt("error",n),r=i;break;case"img":case"image":case"link":mt("error",n),mt("load",n),r=i;break;case"details":mt("toggle",n),r=i;break;case"input":Im(n,i),r=Bh(n,i),mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),mt("invalid",n);break;case"textarea":Fm(n,i),r=Gh(n,i),mt("invalid",n);break;default:r=i}Xh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&al(n,l):typeof l=="number"&&al(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ol.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",n):l!=null&&lp(n,s,l,o))}switch(t){case"input":Xl(n),Om(n,i,!1);break;case"textarea":Xl(n),zm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ns(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ko(n,!!i.multiple,s,!1):i.defaultValue!=null&&ko(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=fc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(n&&e.stateNode!=null)Bx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=Ds(vl.current),Ds(Wi.current),eu(e)){if(i=e.stateNode,t=e.memoizedProps,i[Fi]=e,(s=i.nodeValue!==t)&&(n=Yn,n!==null))switch(n.tag){case 3:Jl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Jl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Fi]=e,e.stateNode=i}return an(e),null;case 13:if(gt(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yt&&Xn!==null&&e.mode&1&&!(e.flags&128))rx(),Jo(),e.flags|=98560,s=!1;else if(s=eu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Fi]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else Mi!==null&&(Ad(Mi),Mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?Vt===0&&(Vt=3):Wp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return ta(),vd(n,e),n===null&&pl(e.stateNode.containerInfo),an(e),null;case 10:return Cp(e.type._context),an(e),null;case 17:return Rn(e.type)&&hc(),an(e),null;case 19:if(gt(Et),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ra(s,!1);else{if(Vt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=xc(n),o!==null){for(e.flags|=128,Ra(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return dt(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&It()>ia&&(e.flags|=128,i=!0,Ra(s,!1),e.lanes=4194304)}else{if(!i)if(n=xc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return an(e),null}else 2*It()-s.renderingStartTime>ia&&t!==1073741824&&(e.flags|=128,i=!0,Ra(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,t=Et.current,dt(Et,i?t&1|2:t&1),e):(an(e),null);case 22:case 23:return Gp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Vn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function QE(n,e){switch(Ep(e),e.tag){case 1:return Rn(e.type)&&hc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ta(),gt(Cn),gt(dn),Dp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Lp(e),null;case 13:if(gt(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Jo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return gt(Et),null;case 4:return ta(),null;case 10:return Cp(e.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var iu=!1,cn=!1,JE=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Uo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Lt(n,e,i)}else t.current=null}function xd(n,e,t){try{t()}catch(i){Lt(n,e,i)}}var C_=!1;function e1(n,e){if(nd=lc,n=Xv(),Sp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(id={focusedElem:n,selectionRange:t},lc=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:yi(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){Lt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return _=C_,C_=!1,_}function Za(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,t,s)}r=r.next}while(r!==i)}}function Zc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function yd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Hx(n){var e=n.alternate;e!==null&&(n.alternate=null,Hx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Fi],delete e[_l],delete e[od],delete e[OE],delete e[FE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vx(n){return n.tag===5||n.tag===3||n.tag===4}function R_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(n=n.child,n!==null))for(Sd(n,e,t),n=n.sibling;n!==null;)Sd(n,e,t),n=n.sibling}function Md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Md(n,e,t),n=n.sibling;n!==null;)Md(n,e,t),n=n.sibling}var Qt=null,Si=!1;function Tr(n,e,t){for(t=t.child;t!==null;)Gx(n,e,t),t=t.sibling}function Gx(n,e,t){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(Gc,t)}catch{}switch(t.tag){case 5:cn||Uo(t,e);case 6:var i=Qt,r=Si;Qt=null,Tr(n,e,t),Qt=i,Si=r,Qt!==null&&(Si?(n=Qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Qt.removeChild(t.stateNode));break;case 18:Qt!==null&&(Si?(n=Qt,t=t.stateNode,n.nodeType===8?Uf(n.parentNode,t):n.nodeType===1&&Uf(n,t),fl(n)):Uf(Qt,t.stateNode));break;case 4:i=Qt,r=Si,Qt=t.stateNode.containerInfo,Si=!0,Tr(n,e,t),Qt=i,Si=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(t,e,o),r=r.next}while(r!==i)}Tr(n,e,t);break;case 1:if(!cn&&(Uo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Lt(t,e,a)}Tr(n,e,t);break;case 21:Tr(n,e,t);break;case 22:t.mode&1?(cn=(i=cn)||t.memoizedState!==null,Tr(n,e,t),cn=i):Tr(n,e,t);break;default:Tr(n,e,t)}}function P_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new JE),e.forEach(function(i){var r=u1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function mi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,Si=!1;break e;case 3:Qt=a.stateNode.containerInfo,Si=!0;break e;case 4:Qt=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(Qt===null)throw Error(ae(160));Gx(s,o,r),Qt=null,Si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wx(e,n),e=e.sibling}function Wx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(e,n),Li(n),i&4){try{Za(3,n,n.return),Zc(3,n)}catch(g){Lt(n,n.return,g)}try{Za(5,n,n.return)}catch(g){Lt(n,n.return,g)}}break;case 1:mi(e,n),Li(n),i&512&&t!==null&&Uo(t,t.return);break;case 5:if(mi(e,n),Li(n),i&512&&t!==null&&Uo(t,t.return),n.flags&32){var r=n.stateNode;try{al(r,"")}catch(g){Lt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hv(r,s),jh(a,o);var u=jh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?gv(r,h):c==="dangerouslySetInnerHTML"?mv(r,h):c==="children"?al(r,h):lp(r,c,h,u)}switch(a){case"input":Hh(r,s);break;case"textarea":dv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ko(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ko(r,!!s.multiple,s.defaultValue,!0):ko(r,!!s.multiple,s.multiple?[]:"",!1))}r[_l]=s}catch(g){Lt(n,n.return,g)}}break;case 6:if(mi(e,n),Li(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Lt(n,n.return,g)}}break;case 3:if(mi(e,n),Li(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(g){Lt(n,n.return,g)}break;case 4:mi(e,n),Li(n);break;case 13:mi(e,n),Li(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hp=It())),i&4&&P_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(cn=(u=cn)||c,mi(e,n),cn=u):mi(e,n),Li(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Me=n,c=n.child;c!==null;){for(h=Me=c;Me!==null;){switch(d=Me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Za(4,d,d.return);break;case 1:Uo(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Lt(i,t,g)}}break;case 5:Uo(d,d.return);break;case 22:if(d.memoizedState!==null){L_(h);continue}}p!==null?(p.return=d,Me=p):L_(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_v("display",o))}catch(g){Lt(n,n.return,g)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){Lt(n,n.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mi(e,n),Li(n),i&4&&P_(n);break;case 21:break;default:mi(e,n),Li(n)}}function Li(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Vx(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(al(r,""),i.flags&=-33);var s=R_(n);Md(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=R_(n);Sd(n,a,o);break;default:throw Error(ae(161))}}catch(l){Lt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function t1(n,e,t){Me=n,Xx(n)}function Xx(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||iu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=iu;var u=cn;if(iu=o,(cn=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?D_(r):l!==null?(l.return=o,Me=l):D_(r);for(;s!==null;)Me=s,Xx(s),s=s.sibling;Me=r,iu=a,cn=u}b_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):b_(n)}}function b_(n){for(;Me!==null;){var e=Me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Zc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:yi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}p_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&fl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}cn||e.flags&512&&yd(e)}catch(d){Lt(e,e.return,d)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function L_(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function D_(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Zc(4,e)}catch(l){Lt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{yd(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{yd(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===n){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var n1=Math.ceil,Mc=Er.ReactCurrentDispatcher,kp=Er.ReactCurrentOwner,hi=Er.ReactCurrentBatchConfig,nt=0,$t=null,Bt=null,tn=0,Vn=0,Io=cs(0),Vt=0,Ml=null,js=0,Qc=0,Bp=0,Qa=null,wn=null,Hp=0,ia=1/0,nr=null,Ec=!1,Ed=null,qr=null,ru=!1,zr=null,wc=0,Ja=0,wd=null,qu=-1,Ku=0;function yn(){return nt&6?It():qu!==-1?qu:qu=It()}function Kr(n){return n.mode&1?nt&2&&tn!==0?tn&-tn:kE.transition!==null?(Ku===0&&(Ku=Pv()),Ku):(n=lt,n!==0||(n=window.event,n=n===void 0?16:Ov(n.type)),n):1}function Ci(n,e,t,i){if(50<Ja)throw Ja=0,wd=null,Error(ae(185));Nl(n,t,i),(!(nt&2)||n!==$t)&&(n===$t&&(!(nt&2)&&(Qc|=t),Vt===4&&Ir(n,tn)),Pn(n,i),t===1&&nt===0&&!(e.mode&1)&&(ia=It()+500,$c&&fs()))}function Pn(n,e){var t=n.callbackNode;kM(n,e);var i=ac(n,n===$t?tn:0);if(i===0)t!==null&&Hm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Hm(t),e===1)n.tag===0?zE(N_.bind(null,n)):tx(N_.bind(null,n)),UE(function(){!(nt&6)&&fs()}),t=null;else{switch(bv(i)){case 1:t=dp;break;case 4:t=Cv;break;case 16:t=oc;break;case 536870912:t=Rv;break;default:t=oc}t=Jx(t,jx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function jx(n,e){if(qu=-1,Ku=0,nt&6)throw Error(ae(327));var t=n.callbackNode;if(Wo()&&n.callbackNode!==t)return null;var i=ac(n,n===$t?tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Tc(n,i);else{e=i;var r=nt;nt|=2;var s=$x();($t!==n||tn!==e)&&(nr=null,ia=It()+500,Os(n,e));do try{s1();break}catch(a){Yx(n,a)}while(!0);Ap(),Mc.current=s,nt=r,Bt!==null?e=0:($t=null,tn=0,e=Vt)}if(e!==0){if(e===2&&(r=Zh(n),r!==0&&(i=r,e=Td(n,r))),e===1)throw t=Ml,Os(n,0),Ir(n,i),Pn(n,It()),t;if(e===6)Ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!i1(r)&&(e=Tc(n,i),e===2&&(s=Zh(n),s!==0&&(i=s,e=Td(n,s))),e===1))throw t=Ml,Os(n,0),Ir(n,i),Pn(n,It()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Ts(n,wn,nr);break;case 3:if(Ir(n,i),(i&130023424)===i&&(e=Hp+500-It(),10<e)){if(ac(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){yn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=sd(Ts.bind(null,n,wn,nr),e);break}Ts(n,wn,nr);break;case 4:if(Ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*n1(i/1960))-i,10<i){n.timeoutHandle=sd(Ts.bind(null,n,wn,nr),i);break}Ts(n,wn,nr);break;case 5:Ts(n,wn,nr);break;default:throw Error(ae(329))}}}return Pn(n,It()),n.callbackNode===t?jx.bind(null,n):null}function Td(n,e){var t=Qa;return n.current.memoizedState.isDehydrated&&(Os(n,e).flags|=256),n=Tc(n,e),n!==2&&(e=wn,wn=t,e!==null&&Ad(e)),n}function Ad(n){wn===null?wn=n:wn.push.apply(wn,n)}function i1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Pi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(n,e){for(e&=~Bp,e&=~Qc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ai(e),i=1<<t;n[t]=-1,e&=~i}}function N_(n){if(nt&6)throw Error(ae(327));Wo();var e=ac(n,0);if(!(e&1))return Pn(n,It()),null;var t=Tc(n,e);if(n.tag!==0&&t===2){var i=Zh(n);i!==0&&(e=i,t=Td(n,i))}if(t===1)throw t=Ml,Os(n,0),Ir(n,e),Pn(n,It()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ts(n,wn,nr),Pn(n,It()),null}function Vp(n,e){var t=nt;nt|=1;try{return n(e)}finally{nt=t,nt===0&&(ia=It()+500,$c&&fs())}}function Ys(n){zr!==null&&zr.tag===0&&!(nt&6)&&Wo();var e=nt;nt|=1;var t=hi.transition,i=lt;try{if(hi.transition=null,lt=1,n)return n()}finally{lt=i,hi.transition=t,nt=e,!(nt&6)&&fs()}}function Gp(){Vn=Io.current,gt(Io)}function Os(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,NE(t)),Bt!==null)for(t=Bt.return;t!==null;){var i=t;switch(Ep(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hc();break;case 3:ta(),gt(Cn),gt(dn),Dp();break;case 5:Lp(i);break;case 4:ta();break;case 13:gt(Et);break;case 19:gt(Et);break;case 10:Cp(i.type._context);break;case 22:case 23:Gp()}t=t.return}if($t=n,Bt=n=Zr(n.current,null),tn=Vn=e,Vt=0,Ml=null,Bp=Qc=js=0,wn=Qa=null,Ls!==null){for(e=0;e<Ls.length;e++)if(t=Ls[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ls=null}return n}function Yx(n,e){do{var t=Bt;try{if(Ap(),ju.current=Sc,yc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if(Xs=0,Yt=Ht=At=null,Ka=!1,xl=0,kp.current=null,t===null||t.return===null){Vt=1,Ml=e,Bt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=y_(o);if(p!==null){p.flags&=-257,S_(p,o,a,s,e),p.mode&1&&x_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){x_(s,u,e),Wp();break e}l=Error(ae(426))}}else if(yt&&a.mode&1){var m=y_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),S_(m,o,a,s,e),wp(na(l,a));break e}}s=l=na(l,a),Vt!==4&&(Vt=2),Qa===null?Qa=[s]:Qa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=bx(s,l,e);d_(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qr===null||!qr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Lx(s,a,e);d_(s,y);break e}}s=s.return}while(s!==null)}Kx(t)}catch(M){e=M,Bt===t&&t!==null&&(Bt=t=t.return);continue}break}while(!0)}function $x(){var n=Mc.current;return Mc.current=Sc,n===null?Sc:n}function Wp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),$t===null||!(js&268435455)&&!(Qc&268435455)||Ir($t,tn)}function Tc(n,e){var t=nt;nt|=2;var i=$x();($t!==n||tn!==e)&&(nr=null,Os(n,e));do try{r1();break}catch(r){Yx(n,r)}while(!0);if(Ap(),nt=t,Mc.current=i,Bt!==null)throw Error(ae(261));return $t=null,tn=0,Vt}function r1(){for(;Bt!==null;)qx(Bt)}function s1(){for(;Bt!==null&&!bM();)qx(Bt)}function qx(n){var e=Qx(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,e===null?Kx(n):Bt=e,kp.current=null}function Kx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=QE(t,e),t!==null){t.flags&=32767,Bt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Vt=6,Bt=null;return}}else if(t=ZE(t,e,Vn),t!==null){Bt=t;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=n}while(e!==null);Vt===0&&(Vt=5)}function Ts(n,e,t){var i=lt,r=hi.transition;try{hi.transition=null,lt=1,o1(n,e,t,i)}finally{hi.transition=r,lt=i}return null}function o1(n,e,t,i){do Wo();while(zr!==null);if(nt&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(BM(n,s),n===$t&&(Bt=$t=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ru||(ru=!0,Jx(oc,function(){return Wo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=hi.transition,hi.transition=null;var o=lt;lt=1;var a=nt;nt|=4,kp.current=null,e1(n,t),Wx(t,n),AE(id),lc=!!nd,id=nd=null,n.current=t,t1(t),LM(),nt=a,lt=o,hi.transition=s}else n.current=t;if(ru&&(ru=!1,zr=n,wc=r),s=n.pendingLanes,s===0&&(qr=null),UM(t.stateNode),Pn(n,It()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,n=Ed,Ed=null,n;return wc&1&&n.tag!==0&&Wo(),s=n.pendingLanes,s&1?n===wd?Ja++:(Ja=0,wd=n):Ja=0,fs(),null}function Wo(){if(zr!==null){var n=bv(wc),e=hi.transition,t=lt;try{if(hi.transition=null,lt=16>n?16:n,zr===null)var i=!1;else{if(n=zr,zr=null,wc=0,nt&6)throw Error(ae(331));var r=nt;for(nt|=4,Me=n.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:Za(8,c,s)}var h=c.child;if(h!==null)h.return=c,Me=h;else for(;Me!==null;){c=Me;var d=c.sibling,p=c.return;if(Hx(c),c===u){Me=null;break}if(d!==null){d.return=p,Me=d;break}Me=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Za(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){o=Me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Me=x;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zc(9,a)}}catch(M){Lt(a,a.return,M)}if(a===o){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(nt=r,fs(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(Gc,n)}catch{}i=!0}return i}finally{lt=t,hi.transition=e}}return!1}function U_(n,e,t){e=na(t,e),e=bx(n,e,1),n=$r(n,e,1),e=yn(),n!==null&&(Nl(n,1,e),Pn(n,e))}function Lt(n,e,t){if(n.tag===3)U_(n,n,t);else for(;e!==null;){if(e.tag===3){U_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qr===null||!qr.has(i))){n=na(t,n),n=Lx(e,n,1),e=$r(e,n,1),n=yn(),e!==null&&(Nl(e,1,n),Pn(e,n));break}}e=e.return}}function a1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=yn(),n.pingedLanes|=n.suspendedLanes&t,$t===n&&(tn&t)===t&&(Vt===4||Vt===3&&(tn&130023424)===tn&&500>It()-Hp?Os(n,0):Bp|=t),Pn(n,e)}function Zx(n,e){e===0&&(n.mode&1?(e=$l,$l<<=1,!($l&130023424)&&($l=4194304)):e=1);var t=yn();n=gr(n,e),n!==null&&(Nl(n,e,t),Pn(n,t))}function l1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Zx(n,t)}function u1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Zx(n,t)}var Qx;Qx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Cn.current)An=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return An=!1,KE(n,e,t);An=!!(n.flags&131072)}else An=!1,yt&&e.flags&1048576&&nx(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$u(n,e),n=e.pendingProps;var r=Qo(e,dn.current);Go(e,t),r=Up(null,e,i,n,r,t);var s=Ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,dc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pp(e),r.updater=Kc,e.stateNode=r,r._reactInternals=e,hd(e,i,n,t),e=md(null,e,i,!0,s,t)):(e.tag=0,yt&&s&&Mp(e),gn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch($u(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=f1(i),n=yi(i,n),r){case 0:e=pd(null,e,i,n,t);break e;case 1:e=w_(null,e,i,n,t);break e;case 11:e=M_(null,e,i,n,t);break e;case 14:e=E_(null,e,i,yi(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),pd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),w_(n,e,i,r,t);case 3:e:{if(Ix(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lx(n,e),vc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=na(Error(ae(423)),e),e=T_(n,e,i,t,r);break e}else if(i!==r){r=na(Error(ae(424)),e),e=T_(n,e,i,t,r);break e}else for(Xn=Yr(e.stateNode.containerInfo.firstChild),Yn=e,yt=!0,Mi=null,t=ox(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Jo(),i===r){e=vr(n,e,t);break e}gn(n,e,i,t)}e=e.child}return e;case 5:return ux(e),n===null&&ud(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,rd(i,r)?o=null:s!==null&&rd(i,s)&&(e.flags|=32),Ux(n,e),gn(n,e,o,t),e.child;case 6:return n===null&&ud(e),null;case 13:return Ox(n,e,t);case 4:return bp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ea(e,null,i,t):gn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),M_(n,e,i,r,t);case 7:return gn(n,e,e.pendingProps,t),e.child;case 8:return gn(n,e,e.pendingProps.children,t),e.child;case 12:return gn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(_c,i._currentValue),i._currentValue=o,s!==null)if(Pi(s.value,o)){if(s.children===r.children&&!Cn.current){e=vr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),cd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),cd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Go(e,t),r=di(r),i=i(r),e.flags|=1,gn(n,e,i,t),e.child;case 14:return i=e.type,r=yi(i,e.pendingProps),r=yi(i.type,r),E_(n,e,i,r,t);case 15:return Dx(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),$u(n,e),e.tag=1,Rn(i)?(n=!0,dc(e)):n=!1,Go(e,t),Px(e,i,r),hd(e,i,r,t),md(null,e,i,!0,n,t);case 19:return Fx(n,e,t);case 22:return Nx(n,e,t)}throw Error(ae(156,e.tag))};function Jx(n,e){return Av(n,e)}function c1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,e,t,i){return new c1(n,e,t,i)}function Xp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function f1(n){if(typeof n=="function")return Xp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===cp)return 11;if(n===fp)return 14}return 2}function Zr(n,e){var t=n.alternate;return t===null?(t=ai(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Zu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Xp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case To:return Fs(t.children,r,s,e);case up:o=8,r|=8;break;case Oh:return n=ai(12,t,e,r|2),n.elementType=Oh,n.lanes=s,n;case Fh:return n=ai(13,t,e,r),n.elementType=Fh,n.lanes=s,n;case zh:return n=ai(19,t,e,r),n.elementType=zh,n.lanes=s,n;case uv:return Jc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case av:o=10;break e;case lv:o=9;break e;case cp:o=11;break e;case fp:o=14;break e;case Dr:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=ai(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Fs(n,e,t,i){return n=ai(7,n,i,e),n.lanes=t,n}function Jc(n,e,t,i){return n=ai(22,n,i,e),n.elementType=uv,n.lanes=t,n.stateNode={isHidden:!1},n}function Vf(n,e,t){return n=ai(6,n,null,e),n.lanes=t,n}function Gf(n,e,t){return e=ai(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function h1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ef(0),this.expirationTimes=Ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ef(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jp(n,e,t,i,r,s,o,a,l){return n=new h1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ai(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pp(s),n}function d1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ey(n){if(!n)return is;n=n._reactInternals;e:{if(Js(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(Rn(t))return ex(n,t,e)}return e}function ty(n,e,t,i,r,s,o,a,l){return n=jp(t,i,!0,n,r,s,o,a,l),n.context=ey(null),t=n.current,i=yn(),r=Kr(t),s=hr(i,r),s.callback=e??null,$r(t,s,r),n.current.lanes=r,Nl(n,r,i),Pn(n,i),n}function ef(n,e,t,i){var r=e.current,s=yn(),o=Kr(r);return t=ey(t),e.context===null?e.context=t:e.pendingContext=t,e=hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=$r(r,e,o),n!==null&&(Ci(n,r,o,s),Xu(n,r,o)),o}function Ac(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function I_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Yp(n,e){I_(n,e),(n=n.alternate)&&I_(n,e)}function p1(){return null}var ny=typeof reportError=="function"?reportError:function(n){console.error(n)};function $p(n){this._internalRoot=n}tf.prototype.render=$p.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));ef(n,e,null,null)};tf.prototype.unmount=$p.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ys(function(){ef(null,n,null,null)}),e[_r]=null}};function tf(n){this._internalRoot=n}tf.prototype.unstable_scheduleHydration=function(n){if(n){var e=Nv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ur.length&&e!==0&&e<Ur[t].priority;t++);Ur.splice(t,0,n),t===0&&Iv(n)}};function qp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function O_(){}function m1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ac(o);s.call(u)}}var o=ty(e,i,n,0,null,!1,!1,"",O_);return n._reactRootContainer=o,n[_r]=o.current,pl(n.nodeType===8?n.parentNode:n),Ys(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ac(l);a.call(u)}}var l=jp(n,0,!1,null,null,!1,!1,"",O_);return n._reactRootContainer=l,n[_r]=l.current,pl(n.nodeType===8?n.parentNode:n),Ys(function(){ef(e,l,t,i)}),l}function rf(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ac(o);a.call(l)}}ef(e,o,n,r)}else o=m1(t,e,n,r,i);return Ac(o)}Lv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=za(e.pendingLanes);t!==0&&(pp(e,t|1),Pn(e,It()),!(nt&6)&&(ia=It()+500,fs()))}break;case 13:Ys(function(){var i=gr(n,1);if(i!==null){var r=yn();Ci(i,n,1,r)}}),Yp(n,1)}};mp=function(n){if(n.tag===13){var e=gr(n,134217728);if(e!==null){var t=yn();Ci(e,n,134217728,t)}Yp(n,134217728)}};Dv=function(n){if(n.tag===13){var e=Kr(n),t=gr(n,e);if(t!==null){var i=yn();Ci(t,n,e,i)}Yp(n,e)}};Nv=function(){return lt};Uv=function(n,e){var t=lt;try{return lt=n,e()}finally{lt=t}};$h=function(n,e,t){switch(e){case"input":if(Hh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Yc(i);if(!r)throw Error(ae(90));fv(i),Hh(i,r)}}}break;case"textarea":dv(n,t);break;case"select":e=t.value,e!=null&&ko(n,!!t.multiple,e,!1)}};yv=Vp;Sv=Ys;var _1={usingClientEntryPoint:!1,Events:[Il,Po,Yc,vv,xv,Vp]},Pa={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wv(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||p1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Gc=su.inject(g1),Gi=su}catch{}}Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;Jn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(e))throw Error(ae(200));return d1(n,e,null,t)};Jn.createRoot=function(n,e){if(!qp(n))throw Error(ae(299));var t=!1,i="",r=ny;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jp(n,1,!1,null,null,t,!1,i,r),n[_r]=e.current,pl(n.nodeType===8?n.parentNode:n),new $p(e)};Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=wv(e),n=n===null?null:n.stateNode,n};Jn.flushSync=function(n){return Ys(n)};Jn.hydrate=function(n,e,t){if(!nf(e))throw Error(ae(200));return rf(null,n,e,!0,t)};Jn.hydrateRoot=function(n,e,t){if(!qp(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ny;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ty(e,null,n,1,t??null,r,!1,s,o),n[_r]=e.current,pl(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new tf(e)};Jn.render=function(n,e,t){if(!nf(e))throw Error(ae(200));return rf(null,n,e,!1,t)};Jn.unmountComponentAtNode=function(n){if(!nf(n))throw Error(ae(40));return n._reactRootContainer?(Ys(function(){rf(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1};Jn.unstable_batchedUpdates=Vp;Jn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nf(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return rf(n,e,t,!1,i)};Jn.version="18.3.1-next-f1338f8080-20240426";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(n){console.error(n)}}iy(),iv.exports=Jn;var v1=iv.exports,ry,F_=v1;ry=F_.createRoot,F_.hydrateRoot;var x1=Object.defineProperty,y1=(n,e,t)=>e in n?x1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ou=(n,e,t)=>y1(n,typeof e!="symbol"?e+"":e,t);const S1={stringify:n=>n?"true":"false",parse:n=>/^[ty1-9]/i.test(n)},M1={stringify:n=>n.name,parse:(n,e,t)=>{const i=(()=>{if(typeof window<"u"&&n in window)return window[n];if(typeof global<"u"&&n in global)return global[n]})();return typeof i=="function"?i.bind(t):void 0}},E1={stringify:n=>JSON.stringify(n),parse:n=>JSON.parse(n)},w1={stringify:n=>`${n}`,parse:n=>parseFloat(n)},T1={stringify:n=>n,parse:n=>n},Wf={string:T1,number:w1,boolean:S1,function:M1,json:E1};function A1(n){return n.replace(/([a-z0-9])([A-Z])/g,(e,t,i)=>`${t}-${i.toLowerCase()}`)}const au=Symbol.for("r2wc.render"),lu=Symbol.for("r2wc.connected"),ms=Symbol.for("r2wc.context"),qi=Symbol.for("r2wc.props");function C1(n,e,t){var i,r,s;e.props||(e.props=n.propTypes?Object.keys(n.propTypes):[]),e.events||(e.events=[]);const o=Array.isArray(e.props)?e.props.slice():Object.keys(e.props),a=Array.isArray(e.events)?e.events.slice():Object.keys(e.events),l={},u={},c={},h={};for(const p of o){l[p]=Array.isArray(e.props)?"string":e.props[p];const _=A1(p);c[p]=_,h[_]=p}for(const p of a)u[p]=Array.isArray(e.events)?{}:e.events[p];class d extends HTMLElement{constructor(){super(),ou(this,s,!0),ou(this,r),ou(this,i,{}),ou(this,"container"),e.shadow?this.container=this.attachShadow({mode:e.shadow}):this.container=this,this[qi].container=this.container;for(const _ of o){const g=c[_],m=this.getAttribute(g),f=l[_],v=f?Wf[f]:null;v!=null&&v.parse&&m&&(this[qi][_]=v.parse(m,g,this))}for(const _ of a)this[qi][_]=g=>{const m=_.replace(/^on/,"").toLowerCase();this.dispatchEvent(new CustomEvent(m,{detail:g,...u[_]}))}}static get observedAttributes(){return Object.keys(h)}connectedCallback(){this[lu]=!0,this[au]()}disconnectedCallback(){this[lu]=!1,this[ms]&&t.unmount(this[ms]),delete this[ms]}attributeChangedCallback(_,g,m){const f=h[_],v=l[f],x=v?Wf[v]:null;f in l&&x!=null&&x.parse&&m&&(this[qi][f]=x.parse(m,_,this),this[au]())}[(s=lu,r=ms,i=qi,au)](){this[lu]&&(this[ms]?t.update(this[ms],this[qi]):this[ms]=t.mount(this.container,n,this[qi]))}}for(const p of o){const _=c[p],g=l[p];Object.defineProperty(d.prototype,p,{enumerable:!0,configurable:!0,get(){return this[qi][p]},set(m){this[qi][p]=m;const f=g?Wf[g]:null;if(f!=null&&f.stringify){const v=f.stringify(m,_,this);this.getAttribute(_)!==v&&this.setAttribute(_,v)}else this[au]()}})}return d}function R1(n,e,t){const i=ry(n),r=ls.createElement(e,t);return i.render(r),{root:i,ReactComponent:e}}function P1({root:n,ReactComponent:e},t){const i=ls.createElement(e,t);n.render(i)}function b1({root:n}){n.unmount()}function L1(n,e={}){return C1(n,e,{mount:R1,update:P1,unmount:b1})}var sy={exports:{}},sf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1=Ye,N1=Symbol.for("react.element"),U1=Symbol.for("react.fragment"),I1=Object.prototype.hasOwnProperty,O1=D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F1={key:!0,ref:!0,__self:!0,__source:!0};function oy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)I1.call(e,i)&&!F1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N1,type:n,key:s,ref:o,props:r,_owner:O1.current}}sf.Fragment=U1;sf.jsx=oy;sf.jsxs=oy;sy.exports=sf;var De=sy.exports;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kp="165",io={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z1=0,z_=1,k1=2,ay=1,B1=2,tr=3,rs=0,bn=1,lr=2,Qr=0,Xo=1,k_=2,B_=3,H_=4,H1=5,Rs=100,V1=101,G1=102,W1=103,X1=104,j1=200,Y1=201,$1=202,q1=203,Cd=204,Rd=205,K1=206,Z1=207,Q1=208,J1=209,ew=210,tw=211,nw=212,iw=213,rw=214,sw=0,ow=1,aw=2,Cc=3,lw=4,uw=5,cw=6,fw=7,ly=0,hw=1,dw=2,Jr=0,pw=1,mw=2,_w=3,gw=4,vw=5,xw=6,yw=7,uy=300,ra=301,sa=302,Pd=303,bd=304,of=306,Ld=1e3,Ns=1001,Dd=1002,li=1003,Sw=1004,uu=1005,Ei=1006,Xf=1007,Us=1008,ss=1009,Mw=1010,Ew=1011,Rc=1012,cy=1013,oa=1014,kr=1015,af=1016,fy=1017,hy=1018,aa=1020,ww=35902,Tw=1021,Aw=1022,Hi=1023,Cw=1024,Rw=1025,jo=1026,la=1027,Pw=1028,dy=1029,bw=1030,py=1031,my=1033,jf=33776,Yf=33777,$f=33778,qf=33779,V_=35840,G_=35841,W_=35842,X_=35843,j_=36196,Y_=37492,$_=37496,q_=37808,K_=37809,Z_=37810,Q_=37811,J_=37812,eg=37813,tg=37814,ng=37815,ig=37816,rg=37817,sg=37818,og=37819,ag=37820,lg=37821,Kf=36492,ug=36494,cg=36495,Lw=36283,fg=36284,hg=36285,dg=36286,Dw=3200,Nw=3201,Uw=0,Iw=1,Or="",Ii="srgb",hs="srgb-linear",Zp="display-p3",lf="display-p3-linear",Pc="linear",_t="srgb",bc="rec709",Lc="p3",so=7680,pg=519,Ow=512,Fw=513,zw=514,_y=515,kw=516,Bw=517,Hw=518,Vw=519,Nd=35044,mg="300 es",fr=2e3,Dc=2001;class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _g=1234567;const el=Math.PI/180,El=180/Math.PI;function dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function Qp(n,e){return(n%e+e)%e}function Gw(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ww(n,e,t){return n!==e?(t-n)/(e-n):0}function tl(n,e,t){return(1-t)*n+t*e}function Xw(n,e,t,i){return tl(n,e,1-Math.exp(-t*i))}function jw(n,e=1){return e-Math.abs(Qp(n,e*2)-e)}function Yw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $w(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kw(n,e){return n+Math.random()*(e-n)}function Zw(n){return n*(.5-Math.random())}function Qw(n){n!==void 0&&(_g=n);let e=_g+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jw(n){return n*el}function eT(n){return n*El}function tT(n){return(n&n-1)===0&&n!==0}function nT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function iT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rT(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*h,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*_,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*_,a*u);break;case"ZYZ":n.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gy={DEG2RAD:el,RAD2DEG:El,generateUUID:dr,clamp:en,euclideanModulo:Qp,mapLinear:Gw,inverseLerp:Ww,lerp:tl,damp:Xw,pingpong:jw,smoothstep:Yw,smootherstep:$w,randInt:qw,randFloat:Kw,randFloatSpread:Zw,seededRandom:Qw,degToRad:Jw,radToDeg:eT,isPowerOfTwo:tT,ceilPowerOfTwo:nT,floorPowerOfTwo:iT,setQuaternionFromProperEuler:rT,normalize:ot,denormalize:wi};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,o,a,l,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],v=r[1],x=r[4],y=r[7],M=r[2],T=r[5],E=r[8];return s[0]=o*g+a*v+l*M,s[3]=o*m+a*x+l*T,s[6]=o*f+a*y+l*E,s[1]=u*g+c*v+h*M,s[4]=u*m+c*x+h*T,s[7]=u*f+c*y+h*E,s[2]=d*g+p*v+_*M,s[5]=d*m+p*x+_*T,s[8]=d*f+p*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=t*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zf.makeScale(e,t)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new qe;function vy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sT(){const n=Nc("canvas");return n.style.display="block",n}const gg={};function Jp(n){n in gg||(gg[n]=!0,console.warn(n))}function oT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const vg=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xg=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cu={[hs]:{transfer:Pc,primaries:bc,toReference:n=>n,fromReference:n=>n},[Ii]:{transfer:_t,primaries:bc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lf]:{transfer:Pc,primaries:Lc,toReference:n=>n.applyMatrix3(xg),fromReference:n=>n.applyMatrix3(vg)},[Zp]:{transfer:_t,primaries:Lc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(xg),fromReference:n=>n.applyMatrix3(vg).convertLinearToSRGB()}},aT=new Set([hs,lf]),at={enabled:!0,_workingColorSpace:hs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!aT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cu[e].toReference,r=cu[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return cu[n].primaries},getTransfer:function(n){return n===Or?Pc:cu[n].transfer}};function Yo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oo;class lT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oo===void 0&&(oo=Nc("canvas")),oo.width=e.width,oo.height=e.height;const i=oo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yo(t[i]/255)*255):t[i]=Yo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uT=0;class xy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jf(r[o].image)):s.push(Jf(r[o]))}else s=Jf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cT=0;class Ln extends eo{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=Ns,r=Ns,s=Ei,o=Us,a=Hi,l=ss,u=Ln.DEFAULT_ANISOTROPY,c=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=dr(),this.name="",this.source=new xy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Ns:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Ns:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=uy;Ln.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,M=(f+1)/2,T=(c+d)/4,E=(h+g)/4,P=(_+m)/4;return x>y&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=E/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=E/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fT extends eo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends fT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yy extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hT extends Ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||u!==p||c!==_){let m=1-a;const f=l*d+u*p+c*_+h*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const M=Math.sqrt(x),T=Math.atan2(M,f*v);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const y=a*v;if(l=l*m+d*y,u=u*m+p*y,c=c*m+_*y,h=h*m+g*y,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=M,u*=M,c*=M,h*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*h+l*p-u*d,e[t+1]=l*_+c*d+u*h-a*p,e[t+2]=u*_+c*p+a*d-l*h,e[t+3]=c*_-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h-d*p*_;break;case"YXZ":this._x=d*c*h+u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h+d*p*_;break;case"ZXY":this._x=d*c*h-u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h-d*p*_;break;case"ZYX":this._x=d*c*h-u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h+d*p*_;break;case"YZX":this._x=d*c*h+u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h-d*p*_;break;case"XZY":this._x=d*c*h-u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new U,yg=new qs;class Ri{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fu.copy(i.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),hu.subVectors(this.max,ba),ao.subVectors(e.a,ba),lo.subVectors(e.b,ba),uo.subVectors(e.c,ba),Ar.subVectors(lo,ao),Cr.subVectors(uo,lo),_s.subVectors(ao,uo);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-_s.z,_s.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,_s.z,0,-_s.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-_s.y,_s.x,0];return!th(t,ao,lo,uo,hu)||(t=[1,0,0,0,1,0,0,0,1],!th(t,ao,lo,uo,hu))?!1:(du.crossVectors(Ar,Cr),t=[du.x,du.y,du.z],th(t,ao,lo,uo,hu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new U,new U,new U,new U,new U,new U,new U,new U],_i=new U,fu=new Ri,ao=new U,lo=new U,uo=new U,Ar=new U,Cr=new U,_s=new U,ba=new U,hu=new U,du=new U,gs=new U;function th(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gs.fromArray(n,s);const a=r.x*Math.abs(gs.x)+r.y*Math.abs(gs.y)+r.z*Math.abs(gs.z),l=e.dot(gs),u=t.dot(gs),c=i.dot(gs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const dT=new Ri,La=new U,nh=new U;class ya{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(La,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(nh)),this.expandByPoint(La.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new U,ih=new U,pu=new U,Rr=new U,rh=new U,mu=new U,sh=new U;class Fl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ih.copy(e).add(t).multiplyScalar(.5),pu.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(ih);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pu),a=Rr.dot(this.direction),l=-Rr.dot(pu),u=Rr.lengthSq(),c=Math.abs(1-o*o);let h,d,p,_;if(c>0)if(h=o*l-a,d=o*a-l,_=s*c,h>=0)if(d>=-_)if(d<=_){const g=1/c;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ih).addScaledVector(pu,d),p}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),r=Zi.dot(Zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,r,s){rh.subVectors(t,e),mu.subVectors(i,e),sh.crossVectors(rh,mu);let o=this.direction.dot(sh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rr.subVectors(this.origin,e);const l=a*this.direction.dot(mu.crossVectors(Rr,mu));if(l<0)return null;const u=a*this.direction.dot(rh.cross(Rr));if(u<0||l+u>o)return null;const c=-a*Rr.dot(sh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,o,a,l,u,c,h,d,p,_,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,d,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/co.setFromMatrixColumn(e,0).length(),s=1/co.setFromMatrixColumn(e,1).length(),o=1/co.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,_=a*c,g=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+_*u,t[5]=d-g*u,t[9]=-a*l,t[2]=g-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,_=u*c,g=u*h;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,_=u*c,g=u*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,_=a*c,g=a*h;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+g,t[1]=l*h,t[5]=g*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+g,t[5]=o*c,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*c,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pT,e,mT)}lookAt(e,t,i){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Pr.crossVectors(i,Bn),Pr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Pr.crossVectors(i,Bn)),Pr.normalize(),_u.crossVectors(Bn,Pr),r[0]=Pr.x,r[4]=_u.x,r[8]=Bn.x,r[1]=Pr.y,r[5]=_u.y,r[9]=Bn.y,r[2]=Pr.z,r[6]=_u.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],v=i[3],x=i[7],y=i[11],M=i[15],T=r[0],E=r[4],P=r[8],w=r[12],A=r[1],b=r[5],I=r[9],F=r[13],Y=r[2],$=r[6],V=r[10],q=r[14],N=r[3],K=r[7],Z=r[11],se=r[15];return s[0]=o*T+a*A+l*Y+u*N,s[4]=o*E+a*b+l*$+u*K,s[8]=o*P+a*I+l*V+u*Z,s[12]=o*w+a*F+l*q+u*se,s[1]=c*T+h*A+d*Y+p*N,s[5]=c*E+h*b+d*$+p*K,s[9]=c*P+h*I+d*V+p*Z,s[13]=c*w+h*F+d*q+p*se,s[2]=_*T+g*A+m*Y+f*N,s[6]=_*E+g*b+m*$+f*K,s[10]=_*P+g*I+m*V+f*Z,s[14]=_*w+g*F+m*q+f*se,s[3]=v*T+x*A+y*Y+M*N,s[7]=v*E+x*b+y*$+M*K,s[11]=v*P+x*I+y*V+M*Z,s[15]=v*w+x*F+y*q+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+g*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=h*m*u-g*d*u+g*l*p-a*m*p-h*l*f+a*d*f,x=_*d*u-c*m*u-_*l*p+o*m*p+c*l*f-o*d*f,y=c*g*u-_*h*u+_*a*p-o*g*p-c*a*f+o*h*f,M=_*h*l-c*g*l-_*a*d+o*g*d+c*a*m-o*h*m,T=t*v+i*x+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(g*d*s-h*m*s-g*r*p+i*m*p+h*r*f-i*d*f)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*E,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*m*s-_*d*s+_*r*p-t*m*p-c*r*f+t*d*f)*E,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*f-t*l*f)*E,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(_*h*s-c*g*s-_*i*p+t*g*p+c*i*f-t*h*f)*E,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*f+t*a*f)*E,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*E,e[12]=M*E,e[13]=(c*g*r-_*h*r+_*i*d-t*g*d-c*i*m+t*h*m)*E,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*E,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,_=s*h,g=o*c,m=o*h,f=a*h,v=l*u,x=l*c,y=l*h,M=i.x,T=i.y,E=i.z;return r[0]=(1-(g+f))*M,r[1]=(p+y)*M,r[2]=(_-x)*M,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+x)*E,r[9]=(m-v)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=co.set(r[0],r[1],r[2]).length();const o=co.set(r[4],r[5],r[6]).length(),a=co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const u=1/s,c=1/o,h=1/a;return gi.elements[0]*=u,gi.elements[1]*=u,gi.elements[2]*=u,gi.elements[4]*=c,gi.elements[5]*=c,gi.elements[6]*=c,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===fr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Dc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*u,p=(i+r)*c;let _,g;if(a===fr)_=(o+s)*h,g=-2*h;else if(a===Dc)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const co=new U,gi=new Ct,pT=new U(0,0,0),mT=new U(1,1,1),Pr=new U,_u=new U,Bn=new U,Sg=new Ct,Mg=new qs;class xr{constructor(e=0,t=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-en(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _T=0;const Eg=new U,fo=new qs,Qi=new Ct,gu=new U,Da=new U,gT=new U,vT=new qs,wg=new U(1,0,0),Tg=new U(0,1,0),Ag=new U(0,0,1),Cg={type:"added"},xT={type:"removed"},ho={type:"childadded",child:null},oh={type:"childremoved",child:null};class Dn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new U,t=new xr,i=new qs,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new qe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,t){return fo.setFromAxisAngle(e,t),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,t){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gu.copy(e):gu.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Da,gu,this.up):Qi.lookAt(gu,Da,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(Qi),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),ho.child=e,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xT),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,gT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,vT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dn.DEFAULT_UP=new U(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new U,Ji=new U,ah=new U,er=new U,po=new U,mo=new U,Rg=new U,lh=new U,uh=new U,ch=new U;class zi{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vi.subVectors(e,t),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vi.subVectors(r,t),Ji.subVectors(i,t),ah.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(Ji),l=vi.dot(ah),u=Ji.dot(Ji),c=Ji.dot(ah),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,er.x),l.addScaledVector(o,er.y),l.addScaledVector(a,er.z),l)}static isFrontFacing(e,t,i,r){return vi.subVectors(i,t),Ji.subVectors(e,t),vi.cross(Ji).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),vi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;po.subVectors(r,i),mo.subVectors(s,i),lh.subVectors(e,i);const l=po.dot(lh),u=mo.dot(lh);if(l<=0&&u<=0)return t.copy(i);uh.subVectors(e,r);const c=po.dot(uh),h=mo.dot(uh);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(po,o);ch.subVectors(e,s);const p=po.dot(ch),_=mo.dot(ch);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(mo,a);const m=c*_-p*h;if(m<=0&&h-c>=0&&p-_>=0)return Rg.subVectors(s,r),a=(h-c)/(h-c+(p-_)),t.copy(r).addScaledVector(Rg,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(i).addScaledVector(po,o).addScaledVector(mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},vu={h:0,s:0,l:0};function fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Qp(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fh(o,s,e+1/3),this.g=fh(o,s,e),this.b=fh(o,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ii){const i=Sy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}copyLinearToSRGB(e){return this.r=Qf(e.r),this.g=Qf(e.g),this.b=Qf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return at.fromWorkingColorSpace(un.copy(this),e),Math.round(en(un.r*255,0,255))*65536+Math.round(en(un.g*255,0,255))*256+Math.round(en(un.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Ii){at.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==Ii?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(vu);const i=tl(br.h,vu.h,t),r=tl(br.s,vu.s,t),s=tl(br.l,vu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new tt;tt.NAMES=Sy;let yT=0;class zl extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Xo,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class My extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=ly,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new U,xu=new ke;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xu.fromBufferAttribute(this,t),xu.applyMatrix3(e),this.setXY(t,xu.x,xu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nd&&(e.usage=this.usage),e}}class Ey extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wy extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xi extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ST=0;const ni=new Ct,hh=new Dn,_o=new U,Hn=new Ri,Na=new Ri,jt=new U;class bi extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vy(e)?wy:Ey)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Na.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Hn.min,Na.min),Hn.expandByPoint(jt),jt.addVectors(Hn.max,Na.max),Hn.expandByPoint(jt)):(Hn.expandByPoint(Na.min),Hn.expandByPoint(Na.max))}Hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)jt.fromBufferAttribute(a,u),l&&(_o.fromBufferAttribute(e,u),jt.add(_o)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const u=new U,c=new U,h=new U,d=new ke,p=new ke,_=new ke,g=new U,m=new U;function f(P,w,A){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,A),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,A),c.sub(u),h.sub(u),p.sub(d),_.sub(d);const b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(b),a[P].add(g),a[w].add(g),a[A].add(g),l[P].add(m),l[w].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,w=v.length;P<w;++P){const A=v[P],b=A.start,I=A.count;for(let F=b,Y=b+I;F<Y;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new U,y=new U,M=new U,T=new U;function E(P){M.fromBufferAttribute(r,P),T.copy(M);const w=a[P];x.copy(w),x.sub(M.multiplyScalar(M.dot(w))).normalize(),y.crossVectors(T,w);const b=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,w=v.length;P<w;++P){const A=v[P],b=A.start,I=A.count;for(let F=b,Y=b+I;F<Y;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)d[_++]=u[p++]}return new $n(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pg=new Ct,vs=new Fl,yu=new ya,bg=new U,go=new U,vo=new U,xo=new U,dh=new U,Su=new U,Mu=new ke,Eu=new ke,wu=new ke,Lg=new U,Dg=new U,Ng=new U,Tu=new U,Au=new U;class Ti extends Dn{constructor(e=new bi,t=new My){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Su.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(dh.fromBufferAttribute(h,e),o?Su.addScaledVector(dh,c):Su.addScaledVector(dh.sub(t),c))}t.add(Su)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yu.copy(i.boundingSphere),yu.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(yu.containsPoint(vs.origin)===!1&&(vs.intersectSphere(yu,bg)===null||vs.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(Pg.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,M=x;y<M;y+=3){const T=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);r=Cu(this,f,e,i,u,c,h,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Cu(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,M=x;y<M;y+=3){const T=y,E=y+1,P=y+2;r=Cu(this,f,e,i,u,c,h,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,x=m+1,y=m+2;r=Cu(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function MT(n,e,t,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rs,a),l===null)return null;Au.copy(a),Au.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Au);return u<t.near||u>t.far?null:{distance:u,point:Au.clone(),object:n}}function Cu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,go),n.getVertexPosition(l,vo),n.getVertexPosition(u,xo);const c=MT(n,e,t,i,go,vo,xo,Tu);if(c){r&&(Mu.fromBufferAttribute(r,a),Eu.fromBufferAttribute(r,l),wu.fromBufferAttribute(r,u),c.uv=zi.getInterpolation(Tu,go,vo,xo,Mu,Eu,wu,new ke)),s&&(Mu.fromBufferAttribute(s,a),Eu.fromBufferAttribute(s,l),wu.fromBufferAttribute(s,u),c.uv1=zi.getInterpolation(Tu,go,vo,xo,Mu,Eu,wu,new ke)),o&&(Lg.fromBufferAttribute(o,a),Dg.fromBufferAttribute(o,l),Ng.fromBufferAttribute(o,u),c.normal=zi.getInterpolation(Tu,go,vo,xo,Lg,Dg,Ng,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new U,materialIndex:0};zi.getNormal(go,vo,xo,h.normal),c.face=h}return c}class kl extends bi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xi(u,3)),this.setAttribute("normal",new Xi(c,3)),this.setAttribute("uv",new Xi(h,2));function _(g,m,f,v,x,y,M,T,E,P,w){const A=y/E,b=M/P,I=y/2,F=M/2,Y=T/2,$=E+1,V=P+1;let q=0,N=0;const K=new U;for(let Z=0;Z<V;Z++){const se=Z*b-F;for(let Se=0;Se<$;Se++){const Ge=Se*A-I;K[g]=Ge*v,K[m]=se*x,K[f]=Y,u.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[f]=T>0?1:-1,c.push(K.x,K.y,K.z),h.push(Se/E),h.push(1-Z/P),q+=1}}for(let Z=0;Z<P;Z++)for(let se=0;se<E;se++){const Se=d+se+$*Z,Ge=d+se+$*(Z+1),X=d+(se+1)+$*(Z+1),ne=d+(se+1)+$*Z;l.push(Se,Ge,ne),l.push(Ge,X,ne),N+=6}a.addGroup(p,N,w),p+=N,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ua(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=ua(n[t]);for(const r in i)e[r]=i[r]}return e}function ET(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ty(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const tm={clone:ua,merge:_n};var wT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wT,this.fragmentShader=TT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=ET(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ay extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new U,Ug=new ke,Ig=new ke;class oi extends Ay{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Ug,Ig),t.subVectors(Ig,Ug)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yo=-90,So=1;class AT extends Dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(yo,So,e,t);r.layers=this.layers,this.add(r);const s=new oi(yo,So,e,t);s.layers=this.layers,this.add(s);const o=new oi(yo,So,e,t);o.layers=this.layers,this.add(o);const a=new oi(yo,So,e,t);a.layers=this.layers,this.add(a);const l=new oi(yo,So,e,t);l.layers=this.layers,this.add(l);const u=new oi(yo,So,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===fr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Cy extends Ln{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ra,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CT extends $s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kl(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Qr});s.uniforms.tEquirect.value=t;const o=new Ti(r,s),a=t.minFilter;return t.minFilter===Us&&(t.minFilter=Ei),new AT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ph=new U,RT=new U,PT=new qe;class sr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ph.subVectors(i,t).cross(RT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||PT.getNormalMatrix(e),r=this.coplanarPoint(ph).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new ya,Ru=new U;class nm{constructor(e=new sr,t=new sr,i=new sr,r=new sr,s=new sr,o=new sr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-f).normalize(),i[1].setComponents(l+s,d+u,m+p,y+f).normalize(),i[2].setComponents(l+o,d+c,m+_,y+v).normalize(),i[3].setComponents(l-o,d-c,m-_,y-v).normalize(),i[4].setComponents(l-a,d-h,m-g,y-x).normalize(),t===fr)i[5].setComponents(l+a,d+h,m+g,y+x).normalize();else if(t===Dc)i[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ru.x=r.normal.x>0?e.max.x:e.min.x,Ru.y=r.normal.y>0?e.max.y:e.min.y,Ru.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ry(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bT(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l._updateRange,d=l.updateRanges;if(n.bindBuffer(u,a),h.count===-1&&d.length===0&&n.bufferSubData(u,0,c),d.length!==0){for(let p=0,_=d.length;p<_;p++){const g=d[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(u,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class uf extends bi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<c;f++){const v=f*d-o;for(let x=0;x<u;x++){const y=x*h-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+u*f,y=v+u*(f+1),M=v+1+u*(f+1),T=v+1+u*f;p.push(x,y,T),p.push(y,M,T)}this.setIndex(p),this.setAttribute("position",new Xi(_,3)),this.setAttribute("normal",new Xi(g,3)),this.setAttribute("uv",new Xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.width,e.height,e.widthSegments,e.heightSegments)}}var LT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DT=`#ifdef USE_ALPHAHASH
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
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FT=`#ifdef USE_AOMAP
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
#endif`,zT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kT=`#ifdef USE_BATCHING
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
#endif`,BT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WT=`#ifdef USE_IRIDESCENCE
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
#endif`,XT=`#ifdef USE_BUMPMAP
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
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eA=`#define PI 3.141592653589793
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
} // validated`,tA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nA=`vec3 transformedNormal = objectNormal;
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
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aA="gl_FragColor = linearToOutputTexel( gl_FragColor );",lA=`
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
}`,uA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fA=`#ifdef USE_ENVMAP
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
#endif`,hA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
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
#endif`,pA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_A=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
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
}`,xA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
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
#endif`,EA=`#ifdef USE_ENVMAP
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
#endif`,wA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RA=`PhysicalMaterial material;
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
#endif`,PA=`struct PhysicalMaterial {
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
}`,bA=`
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
#endif`,LA=`#if defined( RE_IndirectDiffuse )
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
#endif`,DA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BA=`#if defined( USE_POINTS_UV )
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
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jA=`#ifdef USE_MORPHTARGETS
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
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
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
#endif`,eC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mC=`float getShadowMask() {
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
}`,_C=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gC=`#ifdef USE_SKINNING
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
#endif`,vC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xC=`#ifdef USE_SKINNING
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
#endif`,yC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wC=`#ifdef USE_TRANSMISSION
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
#endif`,TC=`#ifdef USE_TRANSMISSION
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
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LC=`uniform sampler2D t2D;
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
}`,DC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`#include <common>
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
}`,FC=`#if DEPTH_PACKING == 3200
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
}`,zC=`#define DISTANCE
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
}`,kC=`#define DISTANCE
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
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`uniform float scale;
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
}`,GC=`uniform vec3 diffuse;
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
}`,WC=`#include <common>
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
}`,XC=`uniform vec3 diffuse;
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
}`,jC=`#define LAMBERT
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
}`,YC=`#define LAMBERT
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
}`,$C=`#define MATCAP
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
}`,qC=`#define MATCAP
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
}`,KC=`#define NORMAL
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
}`,ZC=`#define NORMAL
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
}`,QC=`#define PHONG
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
}`,JC=`#define PHONG
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
}`,eR=`#define STANDARD
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
}`,tR=`#define STANDARD
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
}`,nR=`#define TOON
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
}`,iR=`#define TOON
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
}`,rR=`uniform float size;
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
}`,sR=`uniform vec3 diffuse;
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
}`,oR=`#include <common>
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
}`,aR=`uniform vec3 color;
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
}`,lR=`uniform float rotation;
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
}`,uR=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:LT,alphahash_pars_fragment:DT,alphamap_fragment:NT,alphamap_pars_fragment:UT,alphatest_fragment:IT,alphatest_pars_fragment:OT,aomap_fragment:FT,aomap_pars_fragment:zT,batching_pars_vertex:kT,batching_vertex:BT,begin_vertex:HT,beginnormal_vertex:VT,bsdfs:GT,iridescence_fragment:WT,bumpmap_pars_fragment:XT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:$T,clipping_planes_vertex:qT,color_fragment:KT,color_pars_fragment:ZT,color_pars_vertex:QT,color_vertex:JT,common:eA,cube_uv_reflection_fragment:tA,defaultnormal_vertex:nA,displacementmap_pars_vertex:iA,displacementmap_vertex:rA,emissivemap_fragment:sA,emissivemap_pars_fragment:oA,colorspace_fragment:aA,colorspace_pars_fragment:lA,envmap_fragment:uA,envmap_common_pars_fragment:cA,envmap_pars_fragment:fA,envmap_pars_vertex:hA,envmap_physical_pars_fragment:EA,envmap_vertex:dA,fog_vertex:pA,fog_pars_vertex:mA,fog_fragment:_A,fog_pars_fragment:gA,gradientmap_pars_fragment:vA,lightmap_pars_fragment:xA,lights_lambert_fragment:yA,lights_lambert_pars_fragment:SA,lights_pars_begin:MA,lights_toon_fragment:wA,lights_toon_pars_fragment:TA,lights_phong_fragment:AA,lights_phong_pars_fragment:CA,lights_physical_fragment:RA,lights_physical_pars_fragment:PA,lights_fragment_begin:bA,lights_fragment_maps:LA,lights_fragment_end:DA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:UA,logdepthbuf_pars_vertex:IA,logdepthbuf_vertex:OA,map_fragment:FA,map_pars_fragment:zA,map_particle_fragment:kA,map_particle_pars_fragment:BA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:VA,morphinstance_vertex:GA,morphcolor_vertex:WA,morphnormal_vertex:XA,morphtarget_pars_vertex:jA,morphtarget_vertex:YA,normal_fragment_begin:$A,normal_fragment_maps:qA,normal_pars_fragment:KA,normal_pars_vertex:ZA,normal_vertex:QA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:eC,clearcoat_normal_fragment_maps:tC,clearcoat_pars_fragment:nC,iridescence_pars_fragment:iC,opaque_fragment:rC,packing:sC,premultiplied_alpha_fragment:oC,project_vertex:aC,dithering_fragment:lC,dithering_pars_fragment:uC,roughnessmap_fragment:cC,roughnessmap_pars_fragment:fC,shadowmap_pars_fragment:hC,shadowmap_pars_vertex:dC,shadowmap_vertex:pC,shadowmask_pars_fragment:mC,skinbase_vertex:_C,skinning_pars_vertex:gC,skinning_vertex:vC,skinnormal_vertex:xC,specularmap_fragment:yC,specularmap_pars_fragment:SC,tonemapping_fragment:MC,tonemapping_pars_fragment:EC,transmission_fragment:wC,transmission_pars_fragment:TC,uv_pars_fragment:AC,uv_pars_vertex:CC,uv_vertex:RC,worldpos_vertex:PC,background_vert:bC,background_frag:LC,backgroundCube_vert:DC,backgroundCube_frag:NC,cube_vert:UC,cube_frag:IC,depth_vert:OC,depth_frag:FC,distanceRGBA_vert:zC,distanceRGBA_frag:kC,equirect_vert:BC,equirect_frag:HC,linedashed_vert:VC,linedashed_frag:GC,meshbasic_vert:WC,meshbasic_frag:XC,meshlambert_vert:jC,meshlambert_frag:YC,meshmatcap_vert:$C,meshmatcap_frag:qC,meshnormal_vert:KC,meshnormal_frag:ZC,meshphong_vert:QC,meshphong_frag:JC,meshphysical_vert:eR,meshphysical_frag:tR,meshtoon_vert:nR,meshtoon_frag:iR,points_vert:rR,points_frag:sR,shadow_vert:oR,shadow_frag:aR,sprite_vert:lR,sprite_frag:uR},pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Tn={basic:{uniforms:_n([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:_n([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:_n([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:_n([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:_n([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:_n([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:_n([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:_n([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:_n([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:_n([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:_n([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:_n([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:_n([pe.lights,pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Tn.physical={uniforms:_n([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Pu={r:0,b:0,g:0},ys=new xr,cR=new Ct;function fR(n,e,t,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const y=_(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),x=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===of)?(c===void 0&&(c=new Ti(new kl(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:ua(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ys.copy(x.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cR.makeRotationFromEuler(ys)),c.material.toneMapped=at.getTransfer(y.colorSpace)!==_t,(h!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Ti(new uf(2,2),new yr({name:"BackgroundMaterial",uniforms:ua(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=at.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function f(v,x){v.getRGB(Pu,Ty(n)),i.buffers.color.setClear(Pu.r,Pu.g,Pu.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:g,addToRenderList:m}}function hR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(A,b,I,F,Y){let $=!1;const V=h(F,I,b);s!==V&&(s=V,u(s.object)),$=p(A,F,I,Y),$&&_(A,F,I,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(A,b,I,F),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function u(A){return n.bindVertexArray(A)}function c(A){return n.deleteVertexArray(A)}function h(A,b,I){const F=I.wireframe===!0;let Y=i[A.id];Y===void 0&&(Y={},i[A.id]=Y);let $=Y[b.id];$===void 0&&($={},Y[b.id]=$);let V=$[F];return V===void 0&&(V=d(l()),$[F]=V),V}function d(A){const b=[],I=[],F=[];for(let Y=0;Y<t;Y++)b[Y]=0,I[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:I,attributeDivisors:F,object:A,attributes:{},index:null}}function p(A,b,I,F){const Y=s.attributes,$=b.attributes;let V=0;const q=I.getAttributes();for(const N in q)if(q[N].location>=0){const Z=Y[N];let se=$[N];if(se===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function _(A,b,I,F){const Y={},$=b.attributes;let V=0;const q=I.getAttributes();for(const N in q)if(q[N].location>=0){let Z=$[N];Z===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),Y[N]=se,V++}s.attributes=Y,s.attributesNum=V,s.index=F}function g(){const A=s.newAttributes;for(let b=0,I=A.length;b<I;b++)A[b]=0}function m(A){f(A,0)}function f(A,b){const I=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;I[A]=1,F[A]===0&&(n.enableVertexAttribArray(A),F[A]=1),Y[A]!==b&&(n.vertexAttribDivisor(A,b),Y[A]=b)}function v(){const A=s.newAttributes,b=s.enabledAttributes;for(let I=0,F=b.length;I<F;I++)b[I]!==A[I]&&(n.disableVertexAttribArray(I),b[I]=0)}function x(A,b,I,F,Y,$,V){V===!0?n.vertexAttribIPointer(A,b,I,Y,$):n.vertexAttribPointer(A,b,I,F,Y,$)}function y(A,b,I,F){g();const Y=F.attributes,$=I.getAttributes(),V=b.defaultAttributeValues;for(const q in $){const N=$[q];if(N.location>=0){let K=Y[q];if(K===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),K!==void 0){const Z=K.normalized,se=K.itemSize,Se=e.get(K);if(Se===void 0)continue;const Ge=Se.buffer,X=Se.type,ne=Se.bytesPerElement,ge=X===n.INT||X===n.UNSIGNED_INT||K.gpuType===cy;if(K.isInterleavedBufferAttribute){const he=K.data,Xe=he.stride,Ve=K.offset;if(he.isInstancedInterleavedBuffer){for(let Ke=0;Ke<N.locationSize;Ke++)f(N.location+Ke,he.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ke=0;Ke<N.locationSize;Ke++)m(N.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ke=0;Ke<N.locationSize;Ke++)x(N.location+Ke,se/N.locationSize,X,Z,Xe*ne,(Ve+se/N.locationSize*Ke)*ne,ge)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<N.locationSize;he++)f(N.location+he,K.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<N.locationSize;he++)m(N.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let he=0;he<N.locationSize;he++)x(N.location+he,se/N.locationSize,X,Z,se*ne,se/N.locationSize*he*ne,ge)}}else if(V!==void 0){const Z=V[q];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(N.location,Z);break;case 3:n.vertexAttrib3fv(N.location,Z);break;case 4:n.vertexAttrib4fv(N.location,Z);break;default:n.vertexAttrib1fv(N.location,Z)}}}}v()}function M(){P();for(const A in i){const b=i[A];for(const I in b){const F=b[I];for(const Y in F)c(F[Y].object),delete F[Y];delete b[I]}delete i[A]}}function T(A){if(i[A.id]===void 0)return;const b=i[A.id];for(const I in b){const F=b[I];for(const Y in F)c(F[Y].object),delete F[Y];delete b[I]}delete i[A.id]}function E(A){for(const b in i){const I=i[b];if(I[A.id]===void 0)continue;const F=I[A.id];for(const Y in F)c(F[Y].object),delete F[Y];delete I[A.id]}}function P(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function dR(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(u[p],c[p]);else{d.multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let _=0;_<h;_++)p+=c[_];t.update(p,i,1)}}function l(u,c,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=c[g];for(let g=0;g<d.length;g++)t.update(_,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Hi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===af&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ss&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kr&&!E)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:M}}function mR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new sr,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=f.clippingState||null;l.value=y,y=c(_,d,x,p);for(let M=0;M!==x;++M)y[M]=t[M];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function _R(n){let e=new WeakMap;function t(o,a){return a===Pd?o.mapping=ra:a===bd&&(o.mapping=sa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pd||a===bd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new CT(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gR extends Ay{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oo=4,Og=[.125,.215,.35,.446,.526,.582],Ps=20,mh=new gR,Fg=new tt;let _h=null,gh=0,vh=0,xh=!1;const As=(1+Math.sqrt(5))/2,Mo=1/As,zg=[new U(-As,Mo,0),new U(As,Mo,0),new U(-Mo,0,As),new U(Mo,0,As),new U(0,As,-Mo),new U(0,As,Mo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class kg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_h=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,gh,vh),this._renderer.xr.enabled=xh,e.scissorTest=!1,bu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:af,format:Hi,colorSpace:hs,depthBuffer:!1},r=Bg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vR(s)),this._blurMaterial=xR(s,e,t)}return r}_compileMaterial(e){const t=new Ti(this._lodPlanes[0],e);this._renderer.compile(t,mh)}_sceneToCubeUV(e,t,i,r){const a=new oi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Fg),c.toneMapping=Jr,c.autoClear=!1;const p=new My({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new Ti(new kl,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Fg),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;bu(r,v*x,f>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ra||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,mh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=zg[(r-s-1)%zg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Ti(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ps-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):Ps;m>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);const f=[];let v=0;for(let E=0;E<Ps;++E){const P=E/g,w=Math.exp(-P*P/2);f.push(w),E===0?v+=w:E<m&&(v+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],M=3*y*(r>x-Oo?r-x+Oo:0),T=4*(this._cubeSize-y);bu(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(h,mh)}}function vR(n){const e=[],t=[],i=[];let r=n;const s=n-Oo+1+Og.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Oo?l=Og[o-n+Oo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(w,g*_*T),x.set(d,m*_*T);const A=[T,T,T,T,T,T];y.set(A,f*_*T)}const M=new bi;M.setAttribute("position",new $n(v,g)),M.setAttribute("uv",new $n(x,m)),M.setAttribute("faceIndex",new $n(y,f)),e.push(M),r>Oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bg(n,e,t){const i=new $s(n,e,t);return i.texture.mapping=of,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xR(n,e,t){const i=new Float32Array(Ps),r=new U(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:im(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Hg(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Vg(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function yR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Pd||l===bd,c=l===ra||l===sa;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new kg(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new kg(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function SR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Jp("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MR(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const M=v[x+0],T=v[x+1],E=v[x+2];d.push(M,T,T,E,E,M)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const M=x+0,T=x+1,E=x+2;d.push(M,T,T,E,E,M)}}else return;const m=new(vy(d)?wy:Ey)(d,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function ER(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function u(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*o,_),t.update(p,i,_))}function c(d,p,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(d[m]/o,p[m]);else{g.multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}}function h(d,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=p[v];for(let v=0;v<g.length;v++)t.update(f,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function wR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TR(n,e,t){const i=new WeakMap,r=new Dt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var p=A;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let M=a.attributes.position.count*y,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const E=new Float32Array(M*T*4*h),P=new yy(E,M,T,h);P.type=kr,P.needsUpdate=!0;const w=y*4;for(let b=0;b<h;b++){const I=f[b],F=v[b],Y=x[b],$=M*T*4*b;for(let V=0;V<I.count;V++){const q=V*w;_===!0&&(r.fromBufferAttribute(I,V),E[$+q+0]=r.x,E[$+q+1]=r.y,E[$+q+2]=r.z,E[$+q+3]=0),g===!0&&(r.fromBufferAttribute(F,V),E[$+q+4]=r.x,E[$+q+5]=r.y,E[$+q+6]=r.z,E[$+q+7]=0),m===!0&&(r.fromBufferAttribute(Y,V),E[$+q+8]=r.x,E[$+q+9]=r.y,E[$+q+10]=r.z,E[$+q+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new ke(M,T)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function AR(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Py extends Ln{constructor(e,t,i,r,s,o,a,l,u,c=jo){if(c!==jo&&c!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===jo&&(i=oa),i===void 0&&c===la&&(i=aa),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:li,this.minFilter=l!==void 0?l:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const by=new Ln,Ly=new Py(1,1);Ly.compareFunction=_y;const Dy=new yy,Ny=new hT,Uy=new Cy,Gg=[],Wg=[],Xg=new Float32Array(16),jg=new Float32Array(9),Yg=new Float32Array(4);function Sa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gg[r];if(s===void 0&&(s=new Float32Array(r),Gg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cf(n,e){let t=Wg[e];t===void 0&&(t=new Int32Array(e),Wg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function PR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function bR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function LR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Yg.set(i),n.uniformMatrix2fv(this.addr,!1,Yg),Wt(t,i)}}function DR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;jg.set(i),n.uniformMatrix3fv(this.addr,!1,jg),Wt(t,i)}}function NR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Xg.set(i),n.uniformMatrix4fv(this.addr,!1,Xg),Wt(t,i)}}function UR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function IR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function OR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function FR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function zR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function BR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function HR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function VR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Ly:by;t.setTexture2D(e||s,r)}function GR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ny,r)}function WR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Uy,r)}function XR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dy,r)}function jR(n){switch(n){case 5126:return CR;case 35664:return RR;case 35665:return PR;case 35666:return bR;case 35674:return LR;case 35675:return DR;case 35676:return NR;case 5124:case 35670:return UR;case 35667:case 35671:return IR;case 35668:case 35672:return OR;case 35669:case 35673:return FR;case 5125:return zR;case 36294:return kR;case 36295:return BR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return WR;case 36289:case 36303:case 36311:case 36292:return XR}}function YR(n,e){n.uniform1fv(this.addr,e)}function $R(n,e){const t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function qR(n,e){const t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function KR(n,e){const t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function ZR(n,e){const t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QR(n,e){const t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JR(n,e){const t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eP(n,e){n.uniform1iv(this.addr,e)}function tP(n,e){n.uniform2iv(this.addr,e)}function nP(n,e){n.uniform3iv(this.addr,e)}function iP(n,e){n.uniform4iv(this.addr,e)}function rP(n,e){n.uniform1uiv(this.addr,e)}function sP(n,e){n.uniform2uiv(this.addr,e)}function oP(n,e){n.uniform3uiv(this.addr,e)}function aP(n,e){n.uniform4uiv(this.addr,e)}function lP(n,e,t){const i=this.cache,r=e.length,s=cf(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||by,s[o])}function uP(n,e,t){const i=this.cache,r=e.length,s=cf(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ny,s[o])}function cP(n,e,t){const i=this.cache,r=e.length,s=cf(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Uy,s[o])}function fP(n,e,t){const i=this.cache,r=e.length,s=cf(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dy,s[o])}function hP(n){switch(n){case 5126:return YR;case 35664:return $R;case 35665:return qR;case 35666:return KR;case 35674:return ZR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return eP;case 35667:case 35671:return tP;case 35668:case 35672:return nP;case 35669:case 35673:return iP;case 5125:return rP;case 36294:return sP;case 36295:return oP;case 36296:return aP;case 35678:case 36198:case 36298:case 36306:case 35682:return lP;case 35679:case 36299:case 36307:return uP;case 35680:case 36300:case 36308:case 36293:return cP;case 36289:case 36303:case 36311:case 36292:return fP}}class dP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jR(t.type)}}class pP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hP(t.type)}}class mP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function $g(n,e){n.seq.push(e),n.map[e.id]=e}function _P(n,e,t){const i=n.name,r=i.length;for(yh.lastIndex=0;;){const s=yh.exec(i),o=yh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){$g(t,u===void 0?new dP(a,n,e):new pP(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new mP(a),$g(t,h)),t=h}}}class Qu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_P(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gP=37297;let vP=0;function xP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function yP(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===Lc&&t===bc?i="LinearDisplayP3ToLinearSRGB":e===bc&&t===Lc&&(i="LinearSRGBToLinearDisplayP3"),n){case hs:case lf:return[i,"LinearTransferOETF"];case Ii:case Zp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Kg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xP(n.getShaderSource(e),o)}else return r}function SP(n,e){const t=yP(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function MP(n,e){let t;switch(e){case pw:t="Linear";break;case mw:t="Reinhard";break;case _w:t="OptimizedCineon";break;case gw:t="ACESFilmic";break;case xw:t="AgX";break;case yw:t="Neutral";break;case vw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function EP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function wP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ba(n){return n!==""}function Zg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(n){return n.replace(AP,RP)}const CP=new Map;function RP(n,e){let t=$e[e];if(t===void 0){const i=CP.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}const PP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(n){return n.replace(PP,bP)}function bP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===B1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function DP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ra:case sa:e="ENVMAP_TYPE_CUBE";break;case of:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function UP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ly:e="ENVMAP_BLENDING_MULTIPLY";break;case hw:e="ENVMAP_BLENDING_MIX";break;case dw:e="ENVMAP_BLENDING_ADD";break}return e}function IP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OP(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LP(t),u=DP(t),c=NP(t),h=UP(t),d=IP(t),p=EP(t),_=wP(s),g=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ba).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ba).join(`
`),f.length>0&&(f+=`
`)):(m=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),f=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jr?"#define TONE_MAPPING":"",t.toneMapping!==Jr?$e.tonemapping_pars_fragment:"",t.toneMapping!==Jr?MP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,SP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),o=Ud(o),o=Zg(o,t),o=Qg(o,t),a=Ud(a),a=Zg(a,t),a=Qg(a,t),o=Jg(o),a=Jg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+o,y=v+f+a,M=qg(r,r.VERTEX_SHADER,x),T=qg(r,r.FRAGMENT_SHADER,y);r.attachShader(g,M),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(b){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),F=r.getShaderInfoLog(M).trim(),Y=r.getShaderInfoLog(T).trim();let $=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,M,T);else{const q=Kg(r,M,"vertex"),N=Kg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+I+`
`+q+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||Y==="")&&(V=!1);V&&(b.diagnostics={runnable:$,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(M),r.deleteShader(T),P=new Qu(r,g),w=TP(r,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(g,gP)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let FP=0;class zP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kP(e),t.set(e,i)),i}}class kP{constructor(e){this.id=FP++,this.code=e,this.usedTimes=0}}function BP(n,e,t,i,r,s,o){const a=new em,l=new zP,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,A,b,I,F){const Y=I.fog,$=F.geometry,V=w.isMeshStandardMaterial?I.environment:null,q=(w.isMeshStandardMaterial?t:e).get(w.envMap||V),N=q&&q.mapping===of?q.image.height:null,K=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,se=Z!==void 0?Z.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Ge,X,ne,ge;if(K){const Fe=Tn[K];Ge=Fe.vertexShader,X=Fe.fragmentShader}else Ge=w.vertexShader,X=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const he=n.getRenderTarget(),Xe=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,Ke=!!w.map,D=!!w.matcap,de=!!q,re=!!w.aoMap,ve=!!w.lightMap,le=!!w.bumpMap,xe=!!w.normalMap,me=!!w.displacementMap,Ce=!!w.emissiveMap,Je=!!w.metalnessMap,L=!!w.roughnessMap,C=w.anisotropy>0,B=w.clearcoat>0,Q=w.dispersion>0,J=w.iridescence>0,te=w.sheen>0,we=w.transmission>0,oe=C&&!!w.anisotropyMap,ce=B&&!!w.clearcoatMap,Le=B&&!!w.clearcoatNormalMap,ue=B&&!!w.clearcoatRoughnessMap,Te=J&&!!w.iridescenceMap,je=J&&!!w.iridescenceThicknessMap,Ne=te&&!!w.sheenColorMap,_e=te&&!!w.sheenRoughnessMap,Be=!!w.specularMap,He=!!w.specularColorMap,pt=!!w.specularIntensityMap,S=we&&!!w.transmissionMap,W=we&&!!w.thicknessMap,k=!!w.gradientMap,j=!!w.alphaMap,ie=w.alphaTest>0,ee=!!w.alphaHash,Ee=!!w.extensions;let Ze=Jr;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const We={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Ge,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&F.instanceColor!==null,instancingMorph:Xe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:hs,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:D,envMap:de,envMapMode:de&&q.mapping,envMapCubeUVHeight:N,aoMap:re,lightMap:ve,bumpMap:le,normalMap:xe,displacementMap:d&&me,emissiveMap:Ce,normalMapObjectSpace:xe&&w.normalMapType===Iw,normalMapTangentSpace:xe&&w.normalMapType===Uw,metalnessMap:Je,roughnessMap:L,anisotropy:C,anisotropyMap:oe,clearcoat:B,clearcoatMap:ce,clearcoatNormalMap:Le,clearcoatRoughnessMap:ue,dispersion:Q,iridescence:J,iridescenceMap:Te,iridescenceThicknessMap:je,sheen:te,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Be,specularColorMap:He,specularIntensityMap:pt,transmission:we,transmissionMap:S,thicknessMap:W,gradientMap:k,opaque:w.transparent===!1&&w.blending===Xo&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:ie,alphaHash:ee,combine:w.combine,mapUv:Ke&&g(w.map.channel),aoMapUv:re&&g(w.aoMap.channel),lightMapUv:ve&&g(w.lightMap.channel),bumpMapUv:le&&g(w.bumpMap.channel),normalMapUv:xe&&g(w.normalMap.channel),displacementMapUv:me&&g(w.displacementMap.channel),emissiveMapUv:Ce&&g(w.emissiveMap.channel),metalnessMapUv:Je&&g(w.metalnessMap.channel),roughnessMapUv:L&&g(w.roughnessMap.channel),anisotropyMapUv:oe&&g(w.anisotropyMap.channel),clearcoatMapUv:ce&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(w.sheenRoughnessMap.channel),specularMapUv:Be&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:pt&&g(w.specularIntensityMap.channel),transmissionMapUv:S&&g(w.transmissionMap.channel),thicknessMapUv:W&&g(w.thicknessMap.channel),alphaMapUv:j&&g(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(xe||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Ke||j),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===lr,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=u.has(1),We.vertexUv2s=u.has(2),We.vertexUv3s=u.has(3),u.clear(),We}function f(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const b in w.defines)A.push(b),A.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(v(A,w),x(A,w),A.push(n.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function v(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function x(w,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.transmission&&a.enable(14),A.sheen&&a.enable(15),A.opaque&&a.enable(16),A.pointsUvs&&a.enable(17),A.decodeVideoTexture&&a.enable(18),A.alphaToCoverage&&a.enable(19),w.push(a.mask)}function y(w){const A=_[w.type];let b;if(A){const I=Tn[A];b=tm.clone(I.uniforms)}else b=w.uniforms;return b}function M(w,A){let b;for(let I=0,F=c.length;I<F;I++){const Y=c[I];if(Y.cacheKey===A){b=Y,++b.usedTimes;break}}return b===void 0&&(b=new OP(n,A,w,s),c.push(b)),b}function T(w){if(--w.usedTimes===0){const A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function E(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function HP(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function VP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function t0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function n0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,_,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||VP),i.length>1&&i.sort(d||t0),r.length>1&&r.sort(d||t0)}function c(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function GP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new n0,n.set(i,[o])):r>=s.length?(o=new n0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function XP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jP=0;function YP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $P(n){const e=new WP,t=XP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new Ct,o=new Ct;function a(u){let c=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,v=0,x=0,y=0,M=0,T=0,E=0;u.sort(YP);for(let w=0,A=u.length;w<A;w++){const b=u[w],I=b.color,F=b.intensity,Y=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=I.r*F,h+=I.g*F,d+=I.b*F;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],F);E++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,N=t.get(b);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=b.shadow.matrix,v++}i.directional[p]=V,p++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(I).multiplyScalar(F),V.distance=Y,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[g]=V;const q=b.shadow;if(b.map&&(i.spotLightMap[M]=b.map,M++,q.updateMatrices(b),b.castShadow&&T++),i.spotLightMatrix[g]=q.matrix,b.castShadow){const N=t.get(b);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=$,y++}g++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(I).multiplyScalar(F),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=V,m++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const q=b.shadow,N=t.get(b);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=b.shadow.matrix,x++}i.point[_]=V,_++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(F),V.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==M||P.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,P.directionalLength=p,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=M,P.numLightProbes=E,i.version=jP++)}function l(u,c){let h=0,d=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let f=0,v=u.length;f<v;f++){const x=u[f];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function i0(n){const e=new $P(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qP(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new i0(n),e.set(r,[a])):s>=o.length?(a=new i0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class KP extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZP extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JP=`uniform sampler2D shadow_pass;
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
}`;function eb(n,e,t){let i=new nm;const r=new ke,s=new ke,o=new Dt,a=new KP({depthPacking:Nw}),l=new ZP,u={},c=t.maxTextureSize,h={[rs]:bn,[bn]:rs,[lr]:lr},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:QP,fragmentShader:JP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ti(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ay;let f=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=n.getRenderTarget(),A=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Qr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=f!==tr&&this.type===tr,Y=f===tr&&this.type!==tr;for(let $=0,V=T.length;$<V;$++){const q=T[$],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||F===!0||Y===!0){const se=this.type!==tr?{minFilter:li,magFilter:li}:{};N.map!==null&&N.map.dispose(),N.map=new $s(r.x,r.y,se),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Z=N.getViewportCount();for(let se=0;se<Z;se++){const Se=N.getViewport(se);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),I.viewport(o),N.updateMatrices(q,se),i=N.getFrustum(),y(E,P,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===tr&&v(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,A,b)};function v(T,E){const P=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $s(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,d,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,p,g,null)}function x(T,E,P,w){let A=null;const b=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)A=b;else if(A=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=A.uuid,F=E.uuid;let Y=u[I];Y===void 0&&(Y={},u[I]=Y);let $=Y[F];$===void 0&&($=A.clone(),Y[F]=$,E.addEventListener("dispose",M)),A=$}if(A.visible=E.visible,A.wireframe=E.wireframe,w===tr?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:h[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=n.properties.get(A);I.light=P}return A}function y(T,E,P,w,A){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===tr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=e.update(T),Y=T.material;if(Array.isArray(Y)){const $=F.groups;for(let V=0,q=$.length;V<q;V++){const N=$[V],K=Y[N.materialIndex];if(K&&K.visible){const Z=x(T,K,w,A);T.onBeforeShadow(n,T,E,P,F,Z,N),n.renderBufferDirect(P,null,F,Z,T,N),T.onAfterShadow(n,T,E,P,F,Z,N)}}}else if(Y.visible){const $=x(T,Y,w,A);T.onBeforeShadow(n,T,E,P,F,$,null),n.renderBufferDirect(P,null,F,$,T,null),T.onAfterShadow(n,T,E,P,F,$,null)}}const I=T.children;for(let F=0,Y=I.length;F<Y;F++)y(I[F],E,P,w,A)}function M(T){T.target.removeEventListener("dispose",M);for(const P in u){const w=u[P],A=T.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function tb(n){function e(){let S=!1;const W=new Dt;let k=null;const j=new Dt(0,0,0,0);return{setMask:function(ie){k!==ie&&!S&&(n.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){S=ie},setClear:function(ie,ee,Ee,Ze,We){We===!0&&(ie*=Ze,ee*=Ze,Ee*=Ze),W.set(ie,ee,Ee,Ze),j.equals(W)===!1&&(n.clearColor(ie,ee,Ee,Ze),j.copy(W))},reset:function(){S=!1,k=null,j.set(-1,0,0,0)}}}function t(){let S=!1,W=null,k=null,j=null;return{setTest:function(ie){ie?ge(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ie){W!==ie&&!S&&(n.depthMask(ie),W=ie)},setFunc:function(ie){if(k!==ie){switch(ie){case sw:n.depthFunc(n.NEVER);break;case ow:n.depthFunc(n.ALWAYS);break;case aw:n.depthFunc(n.LESS);break;case Cc:n.depthFunc(n.LEQUAL);break;case lw:n.depthFunc(n.EQUAL);break;case uw:n.depthFunc(n.GEQUAL);break;case cw:n.depthFunc(n.GREATER);break;case fw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=ie}},setLocked:function(ie){S=ie},setClear:function(ie){j!==ie&&(n.clearDepth(ie),j=ie)},reset:function(){S=!1,W=null,k=null,j=null}}}function i(){let S=!1,W=null,k=null,j=null,ie=null,ee=null,Ee=null,Ze=null,We=null;return{setTest:function(Fe){S||(Fe?ge(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Fe){W!==Fe&&!S&&(n.stencilMask(Fe),W=Fe)},setFunc:function(Fe,Pe,Ie){(k!==Fe||j!==Pe||ie!==Ie)&&(n.stencilFunc(Fe,Pe,Ie),k=Fe,j=Pe,ie=Ie)},setOp:function(Fe,Pe,Ie){(ee!==Fe||Ee!==Pe||Ze!==Ie)&&(n.stencilOp(Fe,Pe,Ie),ee=Fe,Ee=Pe,Ze=Ie)},setLocked:function(Fe){S=Fe},setClear:function(Fe){We!==Fe&&(n.clearStencil(Fe),We=Fe)},reset:function(){S=!1,W=null,k=null,j=null,ie=null,ee=null,Ee=null,Ze=null,We=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,f=null,v=null,x=null,y=null,M=null,T=new tt(0,0,0),E=0,P=!1,w=null,A=null,b=null,I=null,F=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=V>=2);let N=null,K={};const Z=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),Se=new Dt().fromArray(Z),Ge=new Dt().fromArray(se);function X(S,W,k,j){const ie=new Uint8Array(4),ee=n.createTexture();n.bindTexture(S,ee),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<k;Ee++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(W+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ee}const ne={};ne[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Cc),le(!1),xe(z_),ge(n.CULL_FACE),re(Qr);function ge(S){u[S]!==!0&&(n.enable(S),u[S]=!0)}function he(S){u[S]!==!1&&(n.disable(S),u[S]=!1)}function Xe(S,W){return c[S]!==W?(n.bindFramebuffer(S,W),c[S]=W,S===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=W),S===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=W),!0):!1}function Ve(S,W){let k=d,j=!1;if(S){k=h.get(W),k===void 0&&(k=[],h.set(W,k));const ie=S.textures;if(k.length!==ie.length||k[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ee=ie.length;ee<Ee;ee++)k[ee]=n.COLOR_ATTACHMENT0+ee;k.length=ie.length,j=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,j=!0);j&&n.drawBuffers(k)}function Ke(S){return p!==S?(n.useProgram(S),p=S,!0):!1}const D={[Rs]:n.FUNC_ADD,[V1]:n.FUNC_SUBTRACT,[G1]:n.FUNC_REVERSE_SUBTRACT};D[W1]=n.MIN,D[X1]=n.MAX;const de={[j1]:n.ZERO,[Y1]:n.ONE,[$1]:n.SRC_COLOR,[Cd]:n.SRC_ALPHA,[ew]:n.SRC_ALPHA_SATURATE,[Q1]:n.DST_COLOR,[K1]:n.DST_ALPHA,[q1]:n.ONE_MINUS_SRC_COLOR,[Rd]:n.ONE_MINUS_SRC_ALPHA,[J1]:n.ONE_MINUS_DST_COLOR,[Z1]:n.ONE_MINUS_DST_ALPHA,[tw]:n.CONSTANT_COLOR,[nw]:n.ONE_MINUS_CONSTANT_COLOR,[iw]:n.CONSTANT_ALPHA,[rw]:n.ONE_MINUS_CONSTANT_ALPHA};function re(S,W,k,j,ie,ee,Ee,Ze,We,Fe){if(S===Qr){_===!0&&(he(n.BLEND),_=!1);return}if(_===!1&&(ge(n.BLEND),_=!0),S!==H1){if(S!==g||Fe!==P){if((m!==Rs||x!==Rs)&&(n.blendEquation(n.FUNC_ADD),m=Rs,x=Rs),Fe)switch(S){case Xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case k_:n.blendFunc(n.ONE,n.ONE);break;case B_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case H_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case k_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case B_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case H_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}f=null,v=null,y=null,M=null,T.set(0,0,0),E=0,g=S,P=Fe}return}ie=ie||W,ee=ee||k,Ee=Ee||j,(W!==m||ie!==x)&&(n.blendEquationSeparate(D[W],D[ie]),m=W,x=ie),(k!==f||j!==v||ee!==y||Ee!==M)&&(n.blendFuncSeparate(de[k],de[j],de[ee],de[Ee]),f=k,v=j,y=ee,M=Ee),(Ze.equals(T)===!1||We!==E)&&(n.blendColor(Ze.r,Ze.g,Ze.b,We),T.copy(Ze),E=We),g=S,P=!1}function ve(S,W){S.side===lr?he(n.CULL_FACE):ge(n.CULL_FACE);let k=S.side===bn;W&&(k=!k),le(k),S.blending===Xo&&S.transparent===!1?re(Qr):re(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const j=S.stencilWrite;o.setTest(j),j&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Ce(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(S){w!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),w=S)}function xe(S){S!==z1?(ge(n.CULL_FACE),S!==A&&(S===z_?n.cullFace(n.BACK):S===k1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),A=S}function me(S){S!==b&&($&&n.lineWidth(S),b=S)}function Ce(S,W,k){S?(ge(n.POLYGON_OFFSET_FILL),(I!==W||F!==k)&&(n.polygonOffset(W,k),I=W,F=k)):he(n.POLYGON_OFFSET_FILL)}function Je(S){S?ge(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function L(S){S===void 0&&(S=n.TEXTURE0+Y-1),N!==S&&(n.activeTexture(S),N=S)}function C(S,W,k){k===void 0&&(N===null?k=n.TEXTURE0+Y-1:k=N);let j=K[k];j===void 0&&(j={type:void 0,texture:void 0},K[k]=j),(j.type!==S||j.texture!==W)&&(N!==k&&(n.activeTexture(k),N=k),n.bindTexture(S,W||ne[S]),j.type=S,j.texture=W)}function B(){const S=K[N];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ne(S){Se.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),Se.copy(S))}function _e(S){Ge.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),Ge.copy(S))}function Be(S,W){let k=l.get(W);k===void 0&&(k=new WeakMap,l.set(W,k));let j=k.get(S);j===void 0&&(j=n.getUniformBlockIndex(W,S.name),k.set(S,j))}function He(S,W){const j=l.get(W).get(S);a.get(W)!==j&&(n.uniformBlockBinding(W,j,S.__bindingPointIndex),a.set(W,j))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},N=null,K={},c={},h=new WeakMap,d=[],p=null,_=!1,g=null,m=null,f=null,v=null,x=null,y=null,M=null,T=new tt(0,0,0),E=0,P=!1,w=null,A=null,b=null,I=null,F=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:he,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:Ke,setBlending:re,setMaterial:ve,setFlipSided:le,setCullFace:xe,setLineWidth:me,setPolygonOffset:Ce,setScissorTest:Je,activeTexture:L,bindTexture:C,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:Te,texImage3D:je,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:Le,texStorage3D:ue,texSubImage2D:te,texSubImage3D:we,compressedTexSubImage2D:oe,compressedTexSubImage3D:ce,scissor:Ne,viewport:_e,reset:pt}}function nb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,C){return p?new OffscreenCanvas(L,C):Nc("canvas")}function g(L,C,B){let Q=1;const J=Je(L);if((J.width>B||J.height>B)&&(Q=B/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const te=Math.floor(Q*J.width),we=Math.floor(Q*J.height);h===void 0&&(h=_(te,we));const oe=C?_(te,we):h;return oe.width=te,oe.height=we,oe.getContext("2d").drawImage(L,0,0,te,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+we+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==li&&L.minFilter!==Ei}function f(L){n.generateMipmap(L)}function v(L,C,B,Q,J=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let te=C;if(C===n.RED&&(B===n.FLOAT&&(te=n.R32F),B===n.HALF_FLOAT&&(te=n.R16F),B===n.UNSIGNED_BYTE&&(te=n.R8)),C===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(te=n.R8UI),B===n.UNSIGNED_SHORT&&(te=n.R16UI),B===n.UNSIGNED_INT&&(te=n.R32UI),B===n.BYTE&&(te=n.R8I),B===n.SHORT&&(te=n.R16I),B===n.INT&&(te=n.R32I)),C===n.RG&&(B===n.FLOAT&&(te=n.RG32F),B===n.HALF_FLOAT&&(te=n.RG16F),B===n.UNSIGNED_BYTE&&(te=n.RG8)),C===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(te=n.RG8UI),B===n.UNSIGNED_SHORT&&(te=n.RG16UI),B===n.UNSIGNED_INT&&(te=n.RG32UI),B===n.BYTE&&(te=n.RG8I),B===n.SHORT&&(te=n.RG16I),B===n.INT&&(te=n.RG32I)),C===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),C===n.RGBA){const we=J?Pc:at.getTransfer(Q);B===n.FLOAT&&(te=n.RGBA32F),B===n.HALF_FLOAT&&(te=n.RGBA16F),B===n.UNSIGNED_BYTE&&(te=we===_t?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(L,C){let B;return L?C===null||C===oa||C===aa?B=n.DEPTH24_STENCIL8:C===kr?B=n.DEPTH32F_STENCIL8:C===Rc&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===oa||C===aa?B=n.DEPTH_COMPONENT24:C===kr?B=n.DEPTH_COMPONENT32F:C===Rc&&(B=n.DEPTH_COMPONENT16),B}function y(L,C){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==Ei?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function M(L){const C=L.target;C.removeEventListener("dispose",M),E(C),C.isVideoTexture&&c.delete(C)}function T(L){const C=L.target;C.removeEventListener("dispose",T),w(C)}function E(L){const C=i.get(L);if(C.__webglInit===void 0)return;const B=L.source,Q=d.get(B);if(Q){const J=Q[C.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(L),Object.keys(Q).length===0&&d.delete(B)}i.remove(L)}function P(L){const C=i.get(L);n.deleteTexture(C.__webglTexture);const B=L.source,Q=d.get(B);delete Q[C.__cacheKey],o.memory.textures--}function w(L){const C=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(C.__webglFramebuffer[Q]))for(let J=0;J<C.__webglFramebuffer[Q].length;J++)n.deleteFramebuffer(C.__webglFramebuffer[Q][J]);else n.deleteFramebuffer(C.__webglFramebuffer[Q]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[Q])}else{if(Array.isArray(C.__webglFramebuffer))for(let Q=0;Q<C.__webglFramebuffer.length;Q++)n.deleteFramebuffer(C.__webglFramebuffer[Q]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Q=0;Q<C.__webglColorRenderbuffer.length;Q++)C.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[Q]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const B=L.textures;for(let Q=0,J=B.length;Q<J;Q++){const te=i.get(B[Q]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(L)}let A=0;function b(){A=0}function I(){const L=A;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),A+=1,L}function F(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function Y(L,C){const B=i.get(L);if(L.isVideoTexture&&me(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(B,L,C);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+C)}function $(L,C){const B=i.get(L);if(L.version>0&&B.__version!==L.version){Ge(B,L,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+C)}function V(L,C){const B=i.get(L);if(L.version>0&&B.__version!==L.version){Ge(B,L,C);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+C)}function q(L,C){const B=i.get(L);if(L.version>0&&B.__version!==L.version){X(B,L,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+C)}const N={[Ld]:n.REPEAT,[Ns]:n.CLAMP_TO_EDGE,[Dd]:n.MIRRORED_REPEAT},K={[li]:n.NEAREST,[Sw]:n.NEAREST_MIPMAP_NEAREST,[uu]:n.NEAREST_MIPMAP_LINEAR,[Ei]:n.LINEAR,[Xf]:n.LINEAR_MIPMAP_NEAREST,[Us]:n.LINEAR_MIPMAP_LINEAR},Z={[Ow]:n.NEVER,[Vw]:n.ALWAYS,[Fw]:n.LESS,[_y]:n.LEQUAL,[zw]:n.EQUAL,[Hw]:n.GEQUAL,[kw]:n.GREATER,[Bw]:n.NOTEQUAL};function se(L,C){if(C.type===kr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ei||C.magFilter===Xf||C.magFilter===uu||C.magFilter===Us||C.minFilter===Ei||C.minFilter===Xf||C.minFilter===uu||C.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,N[C.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,N[C.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,N[C.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,K[C.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,K[C.minFilter]),C.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Z[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===li||C.minFilter!==uu&&C.minFilter!==Us||C.type===kr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Se(L,C){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",M));const Q=C.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const te=F(C);if(te!==L.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[te].usedTimes++;const we=J[L.__cacheKey];we!==void 0&&(J[L.__cacheKey].usedTimes--,we.usedTimes===0&&P(C)),L.__cacheKey=te,L.__webglTexture=J[te].texture}return B}function Ge(L,C,B){let Q=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Q=n.TEXTURE_3D);const J=Se(L,C),te=C.source;t.bindTexture(Q,L.__webglTexture,n.TEXTURE0+B);const we=i.get(te);if(te.version!==we.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const oe=at.getPrimaries(at.workingColorSpace),ce=C.colorSpace===Or?null:at.getPrimaries(C.colorSpace),Le=C.colorSpace===Or||oe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ue=g(C.image,!1,r.maxTextureSize);ue=Ce(C,ue);const Te=s.convert(C.format,C.colorSpace),je=s.convert(C.type);let Ne=v(C.internalFormat,Te,je,C.colorSpace,C.isVideoTexture);se(Q,C);let _e;const Be=C.mipmaps,He=C.isVideoTexture!==!0,pt=we.__version===void 0||J===!0,S=te.dataReady,W=y(C,ue);if(C.isDepthTexture)Ne=x(C.format===la,C.type),pt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Te,je,null));else if(C.isDataTexture)if(Be.length>0){He&&pt&&t.texStorage2D(n.TEXTURE_2D,W,Ne,Be[0].width,Be[0].height);for(let k=0,j=Be.length;k<j;k++)_e=Be[k],He?S&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,_e.width,_e.height,Te,je,_e.data):t.texImage2D(n.TEXTURE_2D,k,Ne,_e.width,_e.height,0,Te,je,_e.data);C.generateMipmaps=!1}else He?(pt&&t.texStorage2D(n.TEXTURE_2D,W,Ne,ue.width,ue.height),S&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Te,je,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Te,je,ue.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){He&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Ne,Be[0].width,Be[0].height,ue.depth);for(let k=0,j=Be.length;k<j;k++)if(_e=Be[k],C.format!==Hi)if(Te!==null)if(He){if(S)if(C.layerUpdates.size>0){for(const ie of C.layerUpdates){const ee=_e.width*_e.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,ie,_e.width,_e.height,1,Te,_e.data.slice(ee*ie,ee*(ie+1)),0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,_e.width,_e.height,ue.depth,Te,_e.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Ne,_e.width,_e.height,ue.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?S&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,_e.width,_e.height,ue.depth,Te,je,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,k,Ne,_e.width,_e.height,ue.depth,0,Te,je,_e.data)}else{He&&pt&&t.texStorage2D(n.TEXTURE_2D,W,Ne,Be[0].width,Be[0].height);for(let k=0,j=Be.length;k<j;k++)_e=Be[k],C.format!==Hi?Te!==null?He?S&&t.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,k,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?S&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,_e.width,_e.height,Te,je,_e.data):t.texImage2D(n.TEXTURE_2D,k,Ne,_e.width,_e.height,0,Te,je,_e.data)}else if(C.isDataArrayTexture)if(He){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Ne,ue.width,ue.height,ue.depth),S)if(C.layerUpdates.size>0){let k;switch(je){case n.UNSIGNED_BYTE:switch(Te){case n.ALPHA:k=1;break;case n.LUMINANCE:k=1;break;case n.LUMINANCE_ALPHA:k=2;break;case n.RGB:k=3;break;case n.RGBA:k=4;break;default:throw new Error(`Unknown texel size for format ${Te}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:k=1;break;default:throw new Error(`Unknown texel size for type ${je}.`)}const j=ue.width*ue.height*k;for(const ie of C.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Te,je,ue.data.slice(j*ie,j*(ie+1)));C.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,je,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,Te,je,ue.data);else if(C.isData3DTexture)He?(pt&&t.texStorage3D(n.TEXTURE_3D,W,Ne,ue.width,ue.height,ue.depth),S&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,je,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,Te,je,ue.data);else if(C.isFramebufferTexture){if(pt)if(He)t.texStorage2D(n.TEXTURE_2D,W,Ne,ue.width,ue.height);else{let k=ue.width,j=ue.height;for(let ie=0;ie<W;ie++)t.texImage2D(n.TEXTURE_2D,ie,Ne,k,j,0,Te,je,null),k>>=1,j>>=1}}else if(Be.length>0){if(He&&pt){const k=Je(Be[0]);t.texStorage2D(n.TEXTURE_2D,W,Ne,k.width,k.height)}for(let k=0,j=Be.length;k<j;k++)_e=Be[k],He?S&&t.texSubImage2D(n.TEXTURE_2D,k,0,0,Te,je,_e):t.texImage2D(n.TEXTURE_2D,k,Ne,Te,je,_e);C.generateMipmaps=!1}else if(He){if(pt){const k=Je(ue);t.texStorage2D(n.TEXTURE_2D,W,Ne,k.width,k.height)}S&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,je,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Te,je,ue);m(C)&&f(Q),we.__version=te.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function X(L,C,B){if(C.image.length!==6)return;const Q=Se(L,C),J=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+B);const te=i.get(J);if(J.version!==te.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const we=at.getPrimaries(at.workingColorSpace),oe=C.colorSpace===Or?null:at.getPrimaries(C.colorSpace),ce=C.colorSpace===Or||we===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Le=C.isCompressedTexture||C.image[0].isCompressedTexture,ue=C.image[0]&&C.image[0].isDataTexture,Te=[];for(let j=0;j<6;j++)!Le&&!ue?Te[j]=g(C.image[j],!0,r.maxCubemapSize):Te[j]=ue?C.image[j].image:C.image[j],Te[j]=Ce(C,Te[j]);const je=Te[0],Ne=s.convert(C.format,C.colorSpace),_e=s.convert(C.type),Be=v(C.internalFormat,Ne,_e,C.colorSpace),He=C.isVideoTexture!==!0,pt=te.__version===void 0||Q===!0,S=J.dataReady;let W=y(C,je);se(n.TEXTURE_CUBE_MAP,C);let k;if(Le){He&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Be,je.width,je.height);for(let j=0;j<6;j++){k=Te[j].mipmaps;for(let ie=0;ie<k.length;ie++){const ee=k[ie];C.format!==Hi?Ne!==null?He?S&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,ee.width,ee.height,Ne,ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,Be,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,0,0,ee.width,ee.height,Ne,_e,ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie,Be,ee.width,ee.height,0,Ne,_e,ee.data)}}}else{if(k=C.mipmaps,He&&pt){k.length>0&&W++;const j=Je(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Be,j.width,j.height)}for(let j=0;j<6;j++)if(ue){He?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te[j].width,Te[j].height,Ne,_e,Te[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Te[j].width,Te[j].height,0,Ne,_e,Te[j].data);for(let ie=0;ie<k.length;ie++){const Ee=k[ie].image[j].image;He?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,Ee.width,Ee.height,Ne,_e,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,Be,Ee.width,Ee.height,0,Ne,_e,Ee.data)}}else{He?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ne,_e,Te[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Ne,_e,Te[j]);for(let ie=0;ie<k.length;ie++){const ee=k[ie];He?S&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,0,0,Ne,_e,ee.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie+1,Be,Ne,_e,ee.image[j])}}}m(C)&&f(n.TEXTURE_CUBE_MAP),te.__version=J.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ne(L,C,B,Q,J,te){const we=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),ce=v(B.internalFormat,we,oe,B.colorSpace);if(!i.get(C).__hasExternalTextures){const ue=Math.max(1,C.width>>te),Te=Math.max(1,C.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,ce,ue,Te,C.depth,0,we,oe,null):t.texImage2D(J,te,ce,ue,Te,0,we,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),xe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,J,i.get(B).__webglTexture,0,le(C)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,J,i.get(B).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(L,C,B){if(n.bindRenderbuffer(n.RENDERBUFFER,L),C.depthBuffer){const Q=C.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,te=x(C.stencilBuffer,J),we=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=le(C);xe(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,te,C.width,C.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,te,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,L)}else{const Q=C.textures;for(let J=0;J<Q.length;J++){const te=Q[J],we=s.convert(te.format,te.colorSpace),oe=s.convert(te.type),ce=v(te.internalFormat,we,oe,te.colorSpace),Le=le(C);B&&xe(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ce,C.width,C.height):xe(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ce,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ce,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const Q=i.get(C.depthTexture).__webglTexture,J=le(C);if(C.depthTexture.format===jo)xe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(C.depthTexture.format===la)xe(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const C=i.get(L),B=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(C.__webglFramebuffer,L)}else if(B){C.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[Q]),C.__webglDepthbuffer[Q]=n.createRenderbuffer(),ge(C.__webglDepthbuffer[Q],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),ge(C.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(L,C,B){const Q=i.get(L);C!==void 0&&ne(Q.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Xe(L)}function Ke(L){const C=L.texture,B=i.get(L),Q=i.get(C);L.addEventListener("dispose",T);const J=L.textures,te=L.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=C.version,o.memory.textures++),te){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let ce=0;ce<C.mipmaps.length;ce++)B.__webglFramebuffer[oe][ce]=n.createFramebuffer()}else B.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)B.__webglFramebuffer[oe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(we)for(let oe=0,ce=J.length;oe<ce;oe++){const Le=i.get(J[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&xe(L)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const ce=J[oe];B.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Le=s.convert(ce.format,ce.colorSpace),ue=s.convert(ce.type),Te=v(ce.internalFormat,Le,ue,ce.colorSpace,L.isXRRenderTarget===!0),je=le(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Te,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),se(n.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let ce=0;ce<C.mipmaps.length;ce++)ne(B.__webglFramebuffer[oe][ce],L,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ne(B.__webglFramebuffer[oe],L,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(C)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let oe=0,ce=J.length;oe<ce;oe++){const Le=J[oe],ue=i.get(Le);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),se(n.TEXTURE_2D,Le),ne(B.__webglFramebuffer,L,Le,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Le)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),se(oe,C),C.mipmaps&&C.mipmaps.length>0)for(let ce=0;ce<C.mipmaps.length;ce++)ne(B.__webglFramebuffer[ce],L,C,n.COLOR_ATTACHMENT0,oe,ce);else ne(B.__webglFramebuffer,L,C,n.COLOR_ATTACHMENT0,oe,0);m(C)&&f(oe),t.unbindTexture()}L.depthBuffer&&Xe(L)}function D(L){const C=L.textures;for(let B=0,Q=C.length;B<Q;B++){const J=C[B];if(m(J)){const te=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(J).__webglTexture;t.bindTexture(te,we),f(te),t.unbindTexture()}}}const de=[],re=[];function ve(L){if(L.samples>0){if(xe(L)===!1){const C=L.textures,B=L.width,Q=L.height;let J=n.COLOR_BUFFER_BIT;const te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(L),oe=C.length>1;if(oe)for(let ce=0;ce<C.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ce=0;ce<C.length;ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ce]);const Le=i.get(C[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,n.NEAREST),l===!0&&(de.length=0,re.length=0,de.push(n.COLOR_ATTACHMENT0+ce),L.depthBuffer&&L.resolveDepthBuffer===!1&&(de.push(te),re.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ce=0;ce<C.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,we.__webglColorRenderbuffer[ce]);const Le=i.get(C[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function le(L){return Math.min(r.maxSamples,L.samples)}function xe(L){const C=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function me(L){const C=o.render.frame;c.get(L)!==C&&(c.set(L,C),L.update())}function Ce(L,C){const B=L.colorSpace,Q=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==hs&&B!==Or&&(at.getTransfer(B)===_t?(Q!==Hi||J!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),C}function Je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=xe}function ib(n,e){function t(i,r=Or){let s;const o=at.getTransfer(r);if(i===ss)return n.UNSIGNED_BYTE;if(i===fy)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hy)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ww)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mw)return n.BYTE;if(i===Ew)return n.SHORT;if(i===Rc)return n.UNSIGNED_SHORT;if(i===cy)return n.INT;if(i===oa)return n.UNSIGNED_INT;if(i===kr)return n.FLOAT;if(i===af)return n.HALF_FLOAT;if(i===Tw)return n.ALPHA;if(i===Aw)return n.RGB;if(i===Hi)return n.RGBA;if(i===Cw)return n.LUMINANCE;if(i===Rw)return n.LUMINANCE_ALPHA;if(i===jo)return n.DEPTH_COMPONENT;if(i===la)return n.DEPTH_STENCIL;if(i===Pw)return n.RED;if(i===dy)return n.RED_INTEGER;if(i===bw)return n.RG;if(i===py)return n.RG_INTEGER;if(i===my)return n.RGBA_INTEGER;if(i===jf||i===Yf||i===$f||i===qf)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$f)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===V_||i===G_||i===W_||i===X_)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===V_)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===G_)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===W_)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===X_)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===j_||i===Y_||i===$_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===j_||i===Y_)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$_)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===q_||i===K_||i===Z_||i===Q_||i===J_||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag||i===lg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===q_)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===K_)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Z_)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Q_)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===J_)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eg)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tg)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ng)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ig)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rg)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sg)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===og)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ag)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lg)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kf||i===ug||i===cg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kf)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ug)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lw||i===fg||i===hg||i===dg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class rb extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lu extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
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

}`;class lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ln,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yr({vertexShader:ob,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ti(new uf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class ub extends eo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,_=null;const g=new lb,m=t.getContextAttributes();let f=null,v=null;const x=[],y=[],M=new ke;let T=null;const E=new oi;E.layers.enable(1),E.viewport=new Dt;const P=new oi;P.layers.enable(2),P.viewport=new Dt;const w=[E,P],A=new rb;A.layers.enable(1),A.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=x[X];return ne===void 0&&(ne=new Sh,x[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=x[X];return ne===void 0&&(ne=new Sh,x[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=x[X];return ne===void 0&&(ne=new Sh,x[X]=ne),ne.getHandSpace()};function F(X){const ne=y.indexOf(X.inputSource);if(ne===-1)return;const ge=x[ne];ge!==void 0&&(ge.update(X.inputSource,X.frame,u||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let X=0;X<x.length;X++){const ne=y[X];ne!==null&&(y[X]=null,x[X].disconnect(ne))}b=null,I=null,g.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new $s(p.framebufferWidth,p.framebufferHeight,{format:Hi,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?la:jo,ge=m.stencil?aa:oa);const Xe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new $s(d.textureWidth,d.textureHeight,{format:Hi,type:ss,depthTexture:new Py(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(X){for(let ne=0;ne<X.removed.length;ne++){const ge=X.removed[ne],he=y.indexOf(ge);he>=0&&(y[he]=null,x[he].disconnect(ge))}for(let ne=0;ne<X.added.length;ne++){const ge=X.added[ne];let he=y.indexOf(ge);if(he===-1){for(let Ve=0;Ve<x.length;Ve++)if(Ve>=y.length){y.push(ge),he=Ve;break}else if(y[Ve]===null){y[Ve]=ge,he=Ve;break}if(he===-1)break}const Xe=x[he];Xe&&Xe.connect(ge)}}const V=new U,q=new U;function N(X,ne,ge){V.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const he=V.distanceTo(q),Xe=ne.projectionMatrix.elements,Ve=ge.projectionMatrix.elements,Ke=Xe[14]/(Xe[10]-1),D=Xe[14]/(Xe[10]+1),de=(Xe[9]+1)/Xe[5],re=(Xe[9]-1)/Xe[5],ve=(Xe[8]-1)/Xe[0],le=(Ve[8]+1)/Ve[0],xe=Ke*ve,me=Ke*le,Ce=he/(-ve+le),Je=Ce*-ve;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Je),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const L=Ke+Ce,C=D+Ce,B=xe-Je,Q=me+(he-Je),J=de*D/C*L,te=re*D/C*L;X.projectionMatrix.makePerspective(B,Q,J,te,L,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;g.texture!==null&&(X.near=g.depthNear,X.far=g.depthFar),A.near=P.near=E.near=X.near,A.far=P.far=E.far=X.far,(b!==A.near||I!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),b=A.near,I=A.far,E.near=b,E.far=I,P.near=b,P.far=I,E.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const ne=X.parent,ge=A.cameras;K(A,ne);for(let he=0;he<ge.length;he++)K(ge[he],ne);ge.length===2?N(A,E,P):A.projectionMatrix.copy(E.projectionMatrix),Z(X,A,ne)};function Z(X,ne,ge){ge===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=El*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)};let se=null;function Se(X,ne){if(c=ne.getViewerPose(u||o),_=ne,c!==null){const ge=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let he=!1;ge.length!==A.cameras.length&&(A.cameras.length=0,he=!0);for(let Ve=0;Ve<ge.length;Ve++){const Ke=ge[Ve];let D=null;if(p!==null)D=p.getViewport(Ke);else{const re=h.getViewSubImage(d,Ke);D=re.viewport,Ve===0&&(e.setRenderTargetTextures(v,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(v))}let de=w[Ve];de===void 0&&(de=new oi,de.layers.enable(Ve),de.viewport=new Dt,w[Ve]=de),de.matrix.fromArray(Ke.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Ke.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(D.x,D.y,D.width,D.height),Ve===0&&(A.matrix.copy(de.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),he===!0&&A.cameras.push(de)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Ve=h.getDepthInformation(ge[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(e,Ve,r.renderState)}}for(let ge=0;ge<x.length;ge++){const he=y[ge],Xe=x[ge];he!==null&&Xe!==void 0&&Xe.update(he,ne,u||o)}se&&se(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Ge=new Ry;Ge.setAnimationLoop(Se),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const Ss=new xr,cb=new Ct;function fb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ty(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Ss.copy(y),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(cb.makeRotationFromEuler(Ss)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const M=x.program;i.updateUBOMapping(v,M);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),M=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,M,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,E=y.length;T<E;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,A=P.length;w<A;w++){const b=P[w];if(p(b,T,w,M)===!0){const I=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let $=0;$<F.length;$++){const V=F[$],q=g(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,I+Y,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,M){const T=v.value,E=x+"_"+y;if(M[E]===void 0)return typeof T=="number"||typeof T=="boolean"?M[E]=T:M[E]=T.clone(),!0;{const P=M[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return M[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const x=v.uniforms;let y=0;const M=16;for(let E=0,P=x.length;E<P;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let A=0,b=w.length;A<b;A++){const I=w[A],F=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,$=F.length;Y<$;Y++){const V=F[Y],q=g(V),N=y%M;N!==0&&M-N<q.boundary&&(y+=M-N),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=q.storage}}}const T=y%M;return T>0&&(y+=M-T),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class db{constructor(e={}){const{canvas:t=sT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this.toneMapping=Jr,this.toneMappingExposure=1;const x=this;let y=!1,M=0,T=0,E=null,P=-1,w=null;const A=new Dt,b=new Dt;let I=null;const F=new tt(0);let Y=0,$=t.width,V=t.height,q=1,N=null,K=null;const Z=new Dt(0,0,$,V),se=new Dt(0,0,$,V);let Se=!1;const Ge=new nm;let X=!1,ne=!1;const ge=new Ct,he=new U,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ke(){return E===null?q:1}let D=i;function de(R,O){return t.getContext(R,O)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kp}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",j,!1),D===null){const O="webgl2";if(D=de(O,R),D===null)throw de(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,ve,le,xe,me,Ce,Je,L,C,B,Q,J,te,we,oe,ce,Le,ue,Te,je,Ne,_e,Be,He;function pt(){re=new SR(D),re.init(),_e=new ib(D,re),ve=new pR(D,re,e,_e),le=new tb(D),xe=new wR(D),me=new HP,Ce=new nb(D,re,le,me,ve,_e,xe),Je=new _R(x),L=new yR(x),C=new bT(D),Be=new hR(D,C),B=new MR(D,C,xe,Be),Q=new AR(D,B,C,xe),Te=new TR(D,ve,Ce),ce=new mR(me),J=new BP(x,Je,L,re,ve,Be,ce),te=new fb(x,me),we=new GP,oe=new qP(re),ue=new fR(x,Je,L,le,Q,d,l),Le=new eb(x,Q,ve),He=new hb(D,xe,ve,le),je=new dR(D,re,xe),Ne=new ER(D,re,xe),xe.programs=J.programs,x.capabilities=ve,x.extensions=re,x.properties=me,x.renderLists=we,x.shadowMap=Le,x.state=le,x.info=xe}pt();const S=new ub(x,D);this.xr=S,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize($,V,!1))},this.getSize=function(R){return R.set($,V)},this.setSize=function(R,O,H=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,V=O,t.width=Math.floor(R*q),t.height=Math.floor(O*q),H===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set($*q,V*q).floor()},this.setDrawingBufferSize=function(R,O,H){$=R,V=O,q=H,t.width=Math.floor(R*H),t.height=Math.floor(O*H),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,O,H,G){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,O,H,G),le.viewport(A.copy(Z).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,O,H,G){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,O,H,G),le.scissor(b.copy(se).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){le.setScissorTest(Se=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(R=!0,O=!0,H=!0){let G=0;if(R){let z=!1;if(E!==null){const fe=E.texture.format;z=fe===my||fe===py||fe===dy}if(z){const fe=E.texture.type,ye=fe===ss||fe===oa||fe===Rc||fe===aa||fe===fy||fe===hy,Ae=ue.getClearColor(),Re=ue.getClearAlpha(),Oe=Ae.r,ze=Ae.g,Ue=Ae.b;ye?(p[0]=Oe,p[1]=ze,p[2]=Ue,p[3]=Re,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Oe,_[1]=ze,_[2]=Ue,_[3]=Re,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",j,!1),we.dispose(),oe.dispose(),me.dispose(),Je.dispose(),L.dispose(),Q.dispose(),Be.dispose(),He.dispose(),J.dispose(),S.dispose(),S.removeEventListener("sessionstart",Pe),S.removeEventListener("sessionend",Ie),rt.stop()};function W(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=xe.autoReset,O=Le.enabled,H=Le.autoUpdate,G=Le.needsUpdate,z=Le.type;pt(),xe.autoReset=R,Le.enabled=O,Le.autoUpdate=H,Le.needsUpdate=G,Le.type=z}function j(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const O=R.target;O.removeEventListener("dispose",ie),ee(O)}function ee(R){Ee(R),me.remove(R)}function Ee(R){const O=me.get(R).programs;O!==void 0&&(O.forEach(function(H){J.releaseProgram(H)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,H,G,z,fe){O===null&&(O=Xe);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Ae=$S(R,O,H,G,z);le.setMaterial(G,ye);let Re=H.index,Oe=1;if(G.wireframe===!0){if(Re=B.getWireframeAttribute(H),Re===void 0)return;Oe=2}const ze=H.drawRange,Ue=H.attributes.position;let it=ze.start*Oe,Pt=(ze.start+ze.count)*Oe;fe!==null&&(it=Math.max(it,fe.start*Oe),Pt=Math.min(Pt,(fe.start+fe.count)*Oe)),Re!==null?(it=Math.max(it,0),Pt=Math.min(Pt,Re.count)):Ue!=null&&(it=Math.max(it,0),Pt=Math.min(Pt,Ue.count));const bt=Pt-it;if(bt<0||bt===1/0)return;Be.setup(z,G,Ae,H,Re);let kn,st=je;if(Re!==null&&(kn=C.get(Re),st=Ne,st.setIndex(kn)),z.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*Ke()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(z.isLine){let be=G.linewidth;be===void 0&&(be=1),le.setLineWidth(be*Ke()),z.isLineSegments?st.setMode(D.LINES):z.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else z.isPoints?st.setMode(D.POINTS):z.isSprite&&st.setMode(D.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)st.renderInstances(it,bt,z.count);else if(H.isInstancedBufferGeometry){const be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pn=Math.min(H.instanceCount,be);st.renderInstances(it,bt,pn)}else st.render(it,bt)};function Ze(R,O,H){R.transparent===!0&&R.side===lr&&R.forceSinglePass===!1?(R.side=bn,R.needsUpdate=!0,Hl(R,O,H),R.side=rs,R.needsUpdate=!0,Hl(R,O,H),R.side=lr):Hl(R,O,H)}this.compile=function(R,O,H=null){H===null&&(H=R),m=oe.get(H),m.init(O),v.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),R!==H&&R.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const G=new Set;return R.traverse(function(z){const fe=z.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Ae=fe[ye];Ze(Ae,H,z),G.add(Ae)}else Ze(fe,H,z),G.add(fe)}),v.pop(),m=null,G},this.compileAsync=function(R,O,H=null){const G=this.compile(R,O,H);return new Promise(z=>{function fe(){if(G.forEach(function(ye){me.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){z(R);return}setTimeout(fe,10)}re.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let We=null;function Fe(R){We&&We(R)}function Pe(){rt.stop()}function Ie(){rt.start()}const rt=new Ry;rt.setAnimationLoop(Fe),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(R){We=R,S.setAnimationLoop(R),R===null?rt.stop():rt.start()},S.addEventListener("sessionstart",Pe),S.addEventListener("sessionend",Ie),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(O),O=S.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,O,E),m=oe.get(R,v.length),m.init(O),v.push(m),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ge.setFromProjectionMatrix(ge),ne=this.localClippingEnabled,X=ce.init(this.clippingPlanes,ne),g=we.get(R,f.length),g.init(),f.push(g),S.enabled===!0&&S.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&vt(fe,O,-1/0,x.sortObjects)}vt(R,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(N,K),Ve=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,Ve&&ue.addToRenderList(g,R),this.info.render.frame++,X===!0&&ce.beginShadows();const H=m.state.shadowsArray;Le.render(H,R,O),X===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,z=g.transmissive;if(m.setupLights(),O.isArrayCamera){const fe=O.cameras;if(z.length>0)for(let ye=0,Ae=fe.length;ye<Ae;ye++){const Re=fe[ye];Ot(G,z,R,Re)}Ve&&ue.render(R);for(let ye=0,Ae=fe.length;ye<Ae;ye++){const Re=fe[ye];Mt(g,R,Re,Re.viewport)}}else z.length>0&&Ot(G,z,R,O),Ve&&ue.render(R),Mt(g,R,O);E!==null&&(Ce.updateMultisampleRenderTarget(E),Ce.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,O),Be.resetDefaultState(),P=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&ce.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function vt(R,O,H,G){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)H=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){G&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const ye=Q.update(R),Ae=R.material;Ae.visible&&g.push(R,ye,Ae,H,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const ye=Q.update(R),Ae=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),he.copy(ye.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Ae)){const Re=ye.groups;for(let Oe=0,ze=Re.length;Oe<ze;Oe++){const Ue=Re[Oe],it=Ae[Ue.materialIndex];it&&it.visible&&g.push(R,ye,it,H,he.z,Ue)}}else Ae.visible&&g.push(R,ye,Ae,H,he.z,null)}}const fe=R.children;for(let ye=0,Ae=fe.length;ye<Ae;ye++)vt(fe[ye],O,H,G)}function Mt(R,O,H,G){const z=R.opaque,fe=R.transmissive,ye=R.transparent;m.setupLightsView(H),X===!0&&ce.setGlobalState(x.clippingPlanes,H),G&&le.viewport(A.copy(G)),z.length>0&&xt(z,O,H),fe.length>0&&xt(fe,O,H),ye.length>0&&xt(ye,O,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ot(R,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new $s(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?af:ss,minFilter:Us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const fe=m.state.transmissionRenderTarget[G.id],ye=G.viewport||A;fe.setSize(ye.z,ye.w);const Ae=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(F),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),Ve?ue.render(H):x.clear();const Re=x.toneMapping;x.toneMapping=Jr;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),X===!0&&ce.setGlobalState(x.clippingPlanes,G),xt(R,H,G),Ce.updateMultisampleRenderTarget(fe),Ce.updateRenderTargetMipmap(fe),re.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ue=0,it=O.length;Ue<it;Ue++){const Pt=O[Ue],bt=Pt.object,kn=Pt.geometry,st=Pt.material,be=Pt.group;if(st.side===lr&&bt.layers.test(G.layers)){const pn=st.side;st.side=bn,st.needsUpdate=!0,Yi(bt,H,G,kn,st,be),st.side=pn,st.needsUpdate=!0,ze=!0}}ze===!0&&(Ce.updateMultisampleRenderTarget(fe),Ce.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ae),x.setClearColor(F,Y),Oe!==void 0&&(G.viewport=Oe),x.toneMapping=Re}function xt(R,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,fe=R.length;z<fe;z++){const ye=R[z],Ae=ye.object,Re=ye.geometry,Oe=G===null?ye.material:G,ze=ye.group;Ae.layers.test(H.layers)&&Yi(Ae,O,H,Re,Oe,ze)}}function Yi(R,O,H,G,z,fe){R.onBeforeRender(x,O,H,G,z,fe),R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(x,O,H,G,R,fe),z.transparent===!0&&z.side===lr&&z.forceSinglePass===!1?(z.side=bn,z.needsUpdate=!0,x.renderBufferDirect(H,O,G,z,R,fe),z.side=rs,z.needsUpdate=!0,x.renderBufferDirect(H,O,G,z,R,fe),z.side=lr):x.renderBufferDirect(H,O,G,z,R,fe),R.onAfterRender(x,O,H,G,z,fe)}function Hl(R,O,H){O.isScene!==!0&&(O=Xe);const G=me.get(R),z=m.state.lights,fe=m.state.shadowsArray,ye=z.state.version,Ae=J.getParameters(R,z.state,fe,O,H),Re=J.getProgramCacheKey(Ae);let Oe=G.programs;G.environment=R.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(R.isMeshStandardMaterial?L:Je).get(R.envMap||G.environment),G.envMapRotation=G.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",ie),Oe=new Map,G.programs=Oe);let ze=Oe.get(Re);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===ye)return Cm(R,Ae),ze}else Ae.uniforms=J.getUniforms(R),R.onBuild(H,Ae,x),R.onBeforeCompile(Ae,x),ze=J.acquireProgram(Ae,Re),Oe.set(Re,ze),G.uniforms=Ae.uniforms;const Ue=G.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),Cm(R,Ae),G.needsLights=KS(R),G.lightsStateVersion=ye,G.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMap.value=z.state.directionalShadowMap,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotShadowMap.value=z.state.spotShadowMap,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMap.value=z.state.pointShadowMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Am(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Qu.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Cm(R,O){const H=me.get(R);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function $S(R,O,H,G,z){O.isScene!==!0&&(O=Xe),Ce.resetTextureUnits();const fe=O.fog,ye=G.isMeshStandardMaterial?O.environment:null,Ae=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:hs,Re=(G.isMeshStandardMaterial?L:Je).get(G.envMap||ye),Oe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,Pt=!!H.morphAttributes.color;let bt=Jr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(bt=x.toneMapping);const kn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=kn!==void 0?kn.length:0,be=me.get(G),pn=m.state.lights;if(X===!0&&(ne===!0||R!==w)){const ti=R===w&&G.id===P;ce.setState(G,R,ti)}let ut=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==pn.state.version||be.outputColorSpace!==Ae||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Re||G.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ce.numPlanes||be.numIntersection!==ce.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==ze||be.morphTargets!==Ue||be.morphNormals!==it||be.morphColors!==Pt||be.toneMapping!==bt||be.morphTargetsCount!==st)&&(ut=!0):(ut=!0,be.__version=G.version);let $i=be.currentProgram;ut===!0&&($i=Hl(G,O,z));let Vl=!1,ps=!1,mf=!1;const Xt=$i.getUniforms(),wr=be.uniforms;if(le.useProgram($i.program)&&(Vl=!0,ps=!0,mf=!0),G.id!==P&&(P=G.id,ps=!0),Vl||w!==R){Xt.setValue(D,"projectionMatrix",R.projectionMatrix),Xt.setValue(D,"viewMatrix",R.matrixWorldInverse);const ti=Xt.map.cameraPosition;ti!==void 0&&ti.setValue(D,he.setFromMatrixPosition(R.matrixWorld)),ve.logarithmicDepthBuffer&&Xt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Xt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,ps=!0,mf=!0)}if(z.isSkinnedMesh){Xt.setOptional(D,z,"bindMatrix"),Xt.setOptional(D,z,"bindMatrixInverse");const ti=z.skeleton;ti&&(ti.boneTexture===null&&ti.computeBoneTexture(),Xt.setValue(D,"boneTexture",ti.boneTexture,Ce))}z.isBatchedMesh&&(Xt.setOptional(D,z,"batchingTexture"),Xt.setValue(D,"batchingTexture",z._matricesTexture,Ce),Xt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Xt.setValue(D,"batchingColorTexture",z._colorsTexture,Ce));const _f=H.morphAttributes;if((_f.position!==void 0||_f.normal!==void 0||_f.color!==void 0)&&Te.update(z,H,$i),(ps||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,Xt.setValue(D,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wr.envMap.value=Re,wr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(wr.envMapIntensity.value=O.environmentIntensity),ps&&(Xt.setValue(D,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&qS(wr,mf),fe&&G.fog===!0&&te.refreshFogUniforms(wr,fe),te.refreshMaterialUniforms(wr,G,q,V,m.state.transmissionRenderTarget[R.id]),Qu.upload(D,Am(be),wr,Ce)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qu.upload(D,Am(be),wr,Ce),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Xt.setValue(D,"center",z.center),Xt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Xt.setValue(D,"normalMatrix",z.normalMatrix),Xt.setValue(D,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ti=G.uniformsGroups;for(let gf=0,ZS=ti.length;gf<ZS;gf++){const Rm=ti[gf];He.update(Rm,$i),He.bind(Rm,$i)}}return $i}function qS(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function KS(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,O,H){me.get(R.texture).__webglTexture=O,me.get(R.depthTexture).__webglTexture=H;const G=me.get(R);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const H=me.get(R);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,H=0){E=R,M=O,T=H;let G=!0,z=null,fe=!1,ye=!1;if(R){const Re=me.get(R);Re.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):Re.__webglFramebuffer===void 0?Ce.setupRenderTarget(R):Re.__hasExternalTextures&&Ce.rebindTextures(R,me.get(R.texture).__webglTexture,me.get(R.depthTexture).__webglTexture);const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const ze=me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?z=ze[O][H]:z=ze[O],fe=!0):R.samples>0&&Ce.useMultisampledRTT(R)===!1?z=me.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[H]:z=ze,A.copy(R.viewport),b.copy(R.scissor),I=R.scissorTest}else A.copy(Z).multiplyScalar(q).floor(),b.copy(se).multiplyScalar(q).floor(),I=Se;if(le.bindFramebuffer(D.FRAMEBUFFER,z)&&G&&le.drawBuffers(R,z),le.viewport(A),le.scissor(b),le.setScissorTest(I),fe){const Re=me.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,H)}else if(ye){const Re=me.get(R.texture),Oe=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,H||0,Oe)}P=-1},this.readRenderTargetPixels=function(R,O,H,G,z,fe,ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){le.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Re=R.texture,Oe=Re.format,ze=Re.type;if(!ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-G&&H>=0&&H<=R.height-z&&D.readPixels(O,H,G,z,_e.convert(Oe),_e.convert(ze),fe)}finally{const Re=E!==null?me.get(E).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(R,O,H,G,z,fe,ye){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){le.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Re=R.texture,Oe=Re.format,ze=Re.type;if(!ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-G&&H>=0&&H<=R.height-z){const Ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(O,H,G,z,_e.convert(Oe),_e.convert(ze),0),D.flush();const it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await oT(D,it,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe)}finally{D.deleteBuffer(Ue),D.deleteSync(it)}return fe}}finally{const Re=E!==null?me.get(E).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(R,O=null,H=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const G=Math.pow(2,-H),z=Math.floor(R.image.width*G),fe=Math.floor(R.image.height*G),ye=O!==null?O.x:0,Ae=O!==null?O.y:0;Ce.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ye,Ae,z,fe),le.unbindTexture()},this.copyTextureToTexture=function(R,O,H=null,G=null,z=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1],O=arguments[2],z=arguments[3]||0,H=null);let fe,ye,Ae,Re,Oe,ze;H!==null?(fe=H.max.x-H.min.x,ye=H.max.y-H.min.y,Ae=H.min.x,Re=H.min.y):(fe=R.image.width,ye=R.image.height,Ae=0,Re=0),G!==null?(Oe=G.x,ze=G.y):(Oe=0,ze=0);const Ue=_e.convert(O.format),it=_e.convert(O.type);Ce.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Pt=D.getParameter(D.UNPACK_ROW_LENGTH),bt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),st=D.getParameter(D.UNPACK_SKIP_ROWS),be=D.getParameter(D.UNPACK_SKIP_IMAGES),pn=R.isCompressedTexture?R.mipmaps[z]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,pn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Oe,ze,fe,ye,Ue,it,pn.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Oe,ze,pn.width,pn.height,Ue,pn.data):D.texSubImage2D(D.TEXTURE_2D,z,Oe,ze,Ue,it,pn),D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,st),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be),z===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(R,O,H=null,G=null,z=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,R=arguments[2],O=arguments[3],z=arguments[4]||0);let fe,ye,Ae,Re,Oe,ze,Ue,it,Pt;const bt=R.isCompressedTexture?R.mipmaps[z]:R.image;H!==null?(fe=H.max.x-H.min.x,ye=H.max.y-H.min.y,Ae=H.max.z-H.min.z,Re=H.min.x,Oe=H.min.y,ze=H.min.z):(fe=bt.width,ye=bt.height,Ae=bt.depth,Re=0,Oe=0,ze=0),G!==null?(Ue=G.x,it=G.y,Pt=G.z):(Ue=0,it=0,Pt=0);const kn=_e.convert(O.format),st=_e.convert(O.type);let be;if(O.isData3DTexture)Ce.setTexture3D(O,0),be=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ce.setTexture2DArray(O,0),be=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const pn=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$i=D.getParameter(D.UNPACK_SKIP_PIXELS),Vl=D.getParameter(D.UNPACK_SKIP_ROWS),ps=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(be,z,Ue,it,Pt,fe,ye,Ae,kn,st,bt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(be,z,Ue,it,Pt,fe,ye,Ae,kn,bt.data):D.texSubImage3D(be,z,Ue,it,Pt,fe,ye,Ae,kn,st,bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,pn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$i),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vl),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ps),z===0&&O.generateMipmaps&&D.generateMipmap(be),le.unbindTexture()},this.initRenderTarget=function(R){me.get(R).__webglFramebuffer===void 0&&Ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ce.setTextureCube(R,0):R.isData3DTexture?Ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ce.setTexture2DArray(R,0):Ce.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,le.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zp?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===lf?"display-p3":"srgb"}}class pb extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new U;class Br{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new $n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Iy extends zl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const r0=new Ct,Id=new Fl,Du=new ya,Nu=new U;class s0 extends Dn{constructor(e=new bi,t=new Iy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Du.copy(i.boundingSphere),Du.applyMatrix4(r),Du.radius+=s,e.ray.intersectsSphere(Du)===!1)return;r0.copy(r).invert(),Id.copy(e.ray).applyMatrix4(r0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=u.getX(_);Nu.fromBufferAttribute(h,m),o0(Nu,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p;_<g;_++)Nu.fromBufferAttribute(h,_),o0(Nu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function o0(n,e,t,i,r,s,o){const a=Id.distanceSqToPoint(n);if(a<t){const l=new U;Id.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _b extends bi{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new U,s=new U;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,c=l.length;u<c;++u){const h=l[u],d=h.start,p=h.count;for(let _=d,g=d+p;_<g;_+=3)for(let m=0;m<3;m++){const f=a.getX(_+m),v=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,v),a0(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let u=0;u<3;u++){const c=3*a+u,h=3*a+(u+1)%3;r.fromBufferAttribute(o,c),s.fromBufferAttribute(o,h),a0(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xi(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function a0(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class gb extends bi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Od extends mb{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const l0=new Ct;class vb{constructor(e,t,i=0,r=1/0){this.ray=new Fl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new em,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return l0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l0),this}intersectObject(e,t=!0,i=[]){return Fd(e,this,i,t),i.sort(u0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fd(e[r],this,i,t);return i.sort(u0),i}}function u0(n,e){return n.distance-e.distance}function Fd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Fd(s[o],e,t,!0)}}class c0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const f0=new U,Uu=new U;class xb{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){f0.subVectors(e,this.start),Uu.subVectors(this.end,this.start);const i=Uu.dot(Uu);let s=Uu.dot(f0)/i;return t&&(s=en(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);function yb(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function s(){var o,a=i.length,l,u=0,c=0,h=0;for(o=0;o<a;++o)l=i[o],u+=l.x||0,c+=l.y||0,h+=l.z||0;for(u=(u/a-n)*r,c=(c/a-e)*r,h=(h/a-t)*r,o=0;o<a;++o)l=i[o],u&&(l.x-=u),c&&(l.y-=c),h&&(l.z-=h)}return s.initialize=function(o){i=o},s.x=function(o){return arguments.length?(n=+o,s):n},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(t=+o,s):t},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function Sb(n){const e=+this._x.call(null,n);return Oy(this.cover(e),e,n)}function Oy(n,e,t){if(isNaN(e))return n;var i,r=n._root,s={data:t},o=n._x0,a=n._x1,l,u,c,h,d;if(!r)return n._root=s,n;for(;r.length;)if((c=e>=(l=(o+a)/2))?o=l:a=l,i=r,!(r=r[h=+c]))return i[h]=s,n;if(u=+n._x.call(null,r.data),e===u)return s.next=r,i?i[h]=s:n._root=s,n;do i=i?i[h]=new Array(2):n._root=new Array(2),(c=e>=(l=(o+a)/2))?o=l:a=l;while((h=+c)==(d=+(u>=l)));return i[d]=r,i[h]=s,n}function Mb(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let s=0,o;s<e;++s)isNaN(o=+this._x.call(null,n[s]))||(t[s]=o,o<i&&(i=o),o>r&&(r=o));if(i>r)return this;this.cover(i).cover(r);for(let s=0;s<e;++s)Oy(this,t[s],n[s]);return this}function Eb(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,s,o;e>n||n>=t;)switch(o=+(n<e),s=new Array(2),s[o]=r,r=s,i*=2,o){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function wb(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Tb(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function pr(n,e,t){this.node=n,this.x0=e,this.x1=t}function Ab(n,e){var t,i=this._x0,r,s,o=this._x1,a=[],l=this._root,u,c;for(l&&a.push(new pr(l,i,o)),e==null?e=1/0:(i=n-e,o=n+e);u=a.pop();)if(!(!(l=u.node)||(r=u.x0)>o||(s=u.x1)<i))if(l.length){var h=(r+s)/2;a.push(new pr(l[1],h,s),new pr(l[0],r,h)),(c=+(n>=h))&&(u=a[a.length-1],a[a.length-1]=a[a.length-1-c],a[a.length-1-c]=u)}else{var d=Math.abs(n-+this._x.call(null,l.data));d<e&&(e=d,i=n-d,o=n+d,t=l.data)}return t}function Cb(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._x1,l,u,c,h,d;if(!t)return this;if(t.length)for(;;){if((c=l>=(u=(o+a)/2))?o=u:a=u,e=t,!(t=t[h=+c]))return this;if(!t.length)break;e[h+1&1]&&(i=e,d=h)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[h]=s:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=s,this)}function Rb(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Pb(){return this._root}function bb(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Lb(n){var e=[],t,i=this._root,r,s,o;for(i&&e.push(new pr(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.x1)&&i.length){var a=(s+o)/2;(r=i[1])&&e.push(new pr(r,a,o)),(r=i[0])&&e.push(new pr(r,s,a))}return this}function Db(n){var e=[],t=[],i;for(this._root&&e.push(new pr(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.x1,l=(o+a)/2;(s=r[0])&&e.push(new pr(s,o,l)),(s=r[1])&&e.push(new pr(s,l,a))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function Nb(n){return n[0]}function Ub(n){return arguments.length?(this._x=n,this):this._x}function Fy(n,e){var t=new rm(e??Nb,NaN,NaN);return n==null?t:t.addAll(n)}function rm(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function h0(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var zn=Fy.prototype=rm.prototype;zn.copy=function(){var n=new rm(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=h0(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=h0(i));return n};zn.add=Sb;zn.addAll=Mb;zn.cover=Eb;zn.data=wb;zn.extent=Tb;zn.find=Ab;zn.remove=Cb;zn.removeAll=Rb;zn.root=Pb;zn.size=bb;zn.visit=Lb;zn.visitAfter=Db;zn.x=Ub;function Ib(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return zy(this.cover(e,t),e,t,n)}function zy(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,u=n._x1,c=n._y1,h,d,p,_,g,m,f,v;if(!s)return n._root=o,n;for(;s.length;)if((g=e>=(h=(a+u)/2))?a=h:u=h,(m=t>=(d=(l+c)/2))?l=d:c=d,r=s,!(s=s[f=m<<1|g]))return r[f]=o,n;if(p=+n._x.call(null,s.data),_=+n._y.call(null,s.data),e===p&&t===_)return o.next=s,r?r[f]=o:n._root=o,n;do r=r?r[f]=new Array(4):n._root=new Array(4),(g=e>=(h=(a+u)/2))?a=h:u=h,(m=t>=(d=(l+c)/2))?l=d:c=d;while((f=m<<1|g)===(v=(_>=d)<<1|p>=h));return r[v]=s,r[f]=o,n}function Ob(n){var e,t,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,u=1/0,c=-1/0,h=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(o[t]=r,a[t]=s,r<l&&(l=r),r>c&&(c=r),s<u&&(u=s),s>h&&(h=s));if(l>c||u>h)return this;for(this.cover(l,u).cover(c,h),t=0;t<i;++t)zy(this,o[t],a[t],n[t]);return this}function Fb(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var o=r-t||1,a=this._root,l,u;t>n||n>=r||i>e||e>=s;)switch(u=(e<i)<<1|n<t,l=new Array(4),l[u]=a,a=l,o*=2,u){case 0:r=t+o,s=i+o;break;case 1:t=r-o,s=i+o;break;case 2:r=t+o,i=s-o;break;case 3:t=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function zb(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function kb(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function vn(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function Bb(n,e,t){var i,r=this._x0,s=this._y0,o,a,l,u,c=this._x1,h=this._y1,d=[],p=this._root,_,g;for(p&&d.push(new vn(p,r,s,c,h)),t==null?t=1/0:(r=n-t,s=e-t,c=n+t,h=e+t,t*=t);_=d.pop();)if(!(!(p=_.node)||(o=_.x0)>c||(a=_.y0)>h||(l=_.x1)<r||(u=_.y1)<s))if(p.length){var m=(o+l)/2,f=(a+u)/2;d.push(new vn(p[3],m,f,l,u),new vn(p[2],o,f,m,u),new vn(p[1],m,a,l,f),new vn(p[0],o,a,m,f)),(g=(e>=f)<<1|n>=m)&&(_=d[d.length-1],d[d.length-1]=d[d.length-1-g],d[d.length-1-g]=_)}else{var v=n-+this._x.call(null,p.data),x=e-+this._y.call(null,p.data),y=v*v+x*x;if(y<t){var M=Math.sqrt(t=y);r=n-M,s=e-M,c=n+M,h=e+M,i=p.data}}return i}function Hb(n){if(isNaN(c=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,u=this._y1,c,h,d,p,_,g,m,f;if(!t)return this;if(t.length)for(;;){if((_=c>=(d=(o+l)/2))?o=d:l=d,(g=h>=(p=(a+u)/2))?a=p:u=p,e=t,!(t=t[m=g<<1|_]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,f=m)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[m]=s:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[f]=t:this._root=t),this):(this._root=s,this)}function Vb(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Gb(){return this._root}function Wb(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Xb(n){var e=[],t,i=this._root,r,s,o,a,l;for(i&&e.push(new vn(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.x1,l=t.y1)&&i.length){var u=(s+a)/2,c=(o+l)/2;(r=i[3])&&e.push(new vn(r,u,c,a,l)),(r=i[2])&&e.push(new vn(r,s,c,u,l)),(r=i[1])&&e.push(new vn(r,u,o,a,c)),(r=i[0])&&e.push(new vn(r,s,o,u,c))}return this}function jb(n){var e=[],t=[],i;for(this._root&&e.push(new vn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,u=i.y1,c=(o+l)/2,h=(a+u)/2;(s=r[0])&&e.push(new vn(s,o,a,c,h)),(s=r[1])&&e.push(new vn(s,c,a,l,h)),(s=r[2])&&e.push(new vn(s,o,h,c,u)),(s=r[3])&&e.push(new vn(s,c,h,l,u))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Yb(n){return n[0]}function $b(n){return arguments.length?(this._x=n,this):this._x}function qb(n){return n[1]}function Kb(n){return arguments.length?(this._y=n,this):this._y}function ky(n,e,t){var i=new sm(e??Yb,t??qb,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function sm(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function d0(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var En=ky.prototype=sm.prototype;En.copy=function(){var n=new sm(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=d0(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=d0(i));return n};En.add=Ib;En.addAll=Ob;En.cover=Fb;En.data=zb;En.extent=kb;En.find=Bb;En.remove=Hb;En.removeAll=Vb;En.root=Gb;En.size=Wb;En.visit=Xb;En.visitAfter=jb;En.x=$b;En.y=Kb;function Zb(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return By(this.cover(e,t,i),e,t,i,n)}function By(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var s,o=n._root,a={data:r},l=n._x0,u=n._y0,c=n._z0,h=n._x1,d=n._y1,p=n._z1,_,g,m,f,v,x,y,M,T,E,P;if(!o)return n._root=a,n;for(;o.length;)if((y=e>=(_=(l+h)/2))?l=_:h=_,(M=t>=(g=(u+d)/2))?u=g:d=g,(T=i>=(m=(c+p)/2))?c=m:p=m,s=o,!(o=o[E=T<<2|M<<1|y]))return s[E]=a,n;if(f=+n._x.call(null,o.data),v=+n._y.call(null,o.data),x=+n._z.call(null,o.data),e===f&&t===v&&i===x)return a.next=o,s?s[E]=a:n._root=a,n;do s=s?s[E]=new Array(8):n._root=new Array(8),(y=e>=(_=(l+h)/2))?l=_:h=_,(M=t>=(g=(u+d)/2))?u=g:d=g,(T=i>=(m=(c+p)/2))?c=m:p=m;while((E=T<<2|M<<1|y)===(P=(x>=m)<<2|(v>=g)<<1|f>=_));return s[P]=o,s[E]=a,n}function Qb(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let s=1/0,o=1/0,a=1/0,l=-1/0,u=-1/0,c=-1/0;for(let h=0,d,p,_,g;h<e;++h)isNaN(p=+this._x.call(null,d=n[h]))||isNaN(_=+this._y.call(null,d))||isNaN(g=+this._z.call(null,d))||(t[h]=p,i[h]=_,r[h]=g,p<s&&(s=p),p>l&&(l=p),_<o&&(o=_),_>u&&(u=_),g<a&&(a=g),g>c&&(c=g));if(s>l||o>u||a>c)return this;this.cover(s,o,a).cover(l,u,c);for(let h=0;h<e;++h)By(this,t[h],i[h],r[h],n[h]);return this}function Jb(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,a=(r=Math.floor(e))+1,l=(s=Math.floor(t))+1;else{for(var u=o-i||1,c=this._root,h,d;i>n||n>=o||r>e||e>=a||s>t||t>=l;)switch(d=(t<s)<<2|(e<r)<<1|n<i,h=new Array(8),h[d]=c,c=h,u*=2,d){case 0:o=i+u,a=r+u,l=s+u;break;case 1:i=o-u,a=r+u,l=s+u;break;case 2:o=i+u,r=a-u,l=s+u;break;case 3:i=o-u,r=a-u,l=s+u;break;case 4:o=i+u,a=r+u,s=l-u;break;case 5:i=o-u,a=r+u,s=l-u;break;case 6:o=i+u,r=a-u,s=l-u;break;case 7:i=o-u,r=a-u,s=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function e2(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function t2(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function ft(n,e,t,i,r,s,o){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=s,this.z1=o}function n2(n,e,t,i){var r,s=this._x0,o=this._y0,a=this._z0,l,u,c,h,d,p,_=this._x1,g=this._y1,m=this._z1,f=[],v=this._root,x,y;for(v&&f.push(new ft(v,s,o,a,_,g,m)),i==null?i=1/0:(s=n-i,o=e-i,a=t-i,_=n+i,g=e+i,m=t+i,i*=i);x=f.pop();)if(!(!(v=x.node)||(l=x.x0)>_||(u=x.y0)>g||(c=x.z0)>m||(h=x.x1)<s||(d=x.y1)<o||(p=x.z1)<a))if(v.length){var M=(l+h)/2,T=(u+d)/2,E=(c+p)/2;f.push(new ft(v[7],M,T,E,h,d,p),new ft(v[6],l,T,E,M,d,p),new ft(v[5],M,u,E,h,T,p),new ft(v[4],l,u,E,M,T,p),new ft(v[3],M,T,c,h,d,E),new ft(v[2],l,T,c,M,d,E),new ft(v[1],M,u,c,h,T,E),new ft(v[0],l,u,c,M,T,E)),(y=(t>=E)<<2|(e>=T)<<1|n>=M)&&(x=f[f.length-1],f[f.length-1]=f[f.length-1-y],f[f.length-1-y]=x)}else{var P=n-+this._x.call(null,v.data),w=e-+this._y.call(null,v.data),A=t-+this._z.call(null,v.data),b=P*P+w*w+A*A;if(b<i){var I=Math.sqrt(i=b);s=n-I,o=e-I,a=t-I,_=n+I,g=e+I,m=t+I,r=v.data}}return r}const i2=(n,e,t,i,r,s)=>Math.sqrt((n-i)**2+(e-r)**2+(t-s)**2);function r2(n,e,t,i){const r=[],s=n-i,o=e-i,a=t-i,l=n+i,u=e+i,c=t+i;return this.visit((h,d,p,_,g,m,f)=>{if(!h.length)do{const v=h.data;i2(n,e,t,this._x(v),this._y(v),this._z(v))<=i&&r.push(v)}while(h=h.next);return d>l||p>u||_>c||g<s||m<o||f<a}),r}function s2(n){if(isNaN(d=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(_=+this._z.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._z0,u=this._x1,c=this._y1,h=this._z1,d,p,_,g,m,f,v,x,y,M,T;if(!t)return this;if(t.length)for(;;){if((v=d>=(g=(o+u)/2))?o=g:u=g,(x=p>=(m=(a+c)/2))?a=m:c=m,(y=_>=(f=(l+h)/2))?l=f:h=f,e=t,!(t=t[M=y<<2|x<<1|v]))return this;if(!t.length)break;(e[M+1&7]||e[M+2&7]||e[M+3&7]||e[M+4&7]||e[M+5&7]||e[M+6&7]||e[M+7&7])&&(i=e,T=M)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[M]=s:delete e[M],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[T]=t:this._root=t),this):(this._root=s,this)}function o2(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function a2(){return this._root}function l2(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function u2(n){var e=[],t,i=this._root,r,s,o,a,l,u,c;for(i&&e.push(new ft(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.z0,l=t.x1,u=t.y1,c=t.z1)&&i.length){var h=(s+l)/2,d=(o+u)/2,p=(a+c)/2;(r=i[7])&&e.push(new ft(r,h,d,p,l,u,c)),(r=i[6])&&e.push(new ft(r,s,d,p,h,u,c)),(r=i[5])&&e.push(new ft(r,h,o,p,l,d,c)),(r=i[4])&&e.push(new ft(r,s,o,p,h,d,c)),(r=i[3])&&e.push(new ft(r,h,d,a,l,u,p)),(r=i[2])&&e.push(new ft(r,s,d,a,h,u,p)),(r=i[1])&&e.push(new ft(r,h,o,a,l,d,p)),(r=i[0])&&e.push(new ft(r,s,o,a,h,d,p))}return this}function c2(n){var e=[],t=[],i;for(this._root&&e.push(new ft(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.z0,u=i.x1,c=i.y1,h=i.z1,d=(o+u)/2,p=(a+c)/2,_=(l+h)/2;(s=r[0])&&e.push(new ft(s,o,a,l,d,p,_)),(s=r[1])&&e.push(new ft(s,d,a,l,u,p,_)),(s=r[2])&&e.push(new ft(s,o,p,l,d,c,_)),(s=r[3])&&e.push(new ft(s,d,p,l,u,c,_)),(s=r[4])&&e.push(new ft(s,o,a,_,d,p,h)),(s=r[5])&&e.push(new ft(s,d,a,_,u,p,h)),(s=r[6])&&e.push(new ft(s,o,p,_,d,c,h)),(s=r[7])&&e.push(new ft(s,d,p,_,u,c,h))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function f2(n){return n[0]}function h2(n){return arguments.length?(this._x=n,this):this._x}function d2(n){return n[1]}function p2(n){return arguments.length?(this._y=n,this):this._y}function m2(n){return n[2]}function _2(n){return arguments.length?(this._z=n,this):this._z}function Hy(n,e,t,i){var r=new om(e??f2,t??d2,i??m2,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function om(n,e,t,i,r,s,o,a,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function p0(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var sn=Hy.prototype=om.prototype;sn.copy=function(){var n=new om(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=p0(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=p0(i));return n};sn.add=Zb;sn.addAll=Qb;sn.cover=Jb;sn.data=e2;sn.extent=t2;sn.find=n2;sn.findAllWithinRadius=r2;sn.remove=s2;sn.removeAll=o2;sn.root=a2;sn.size=l2;sn.visit=u2;sn.visitAfter=c2;sn.x=h2;sn.y=p2;sn.z=_2;function nl(n){return function(){return n}}function or(n){return(n()-.5)*1e-6}function g2(n){return n.index}function m0(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function v2(n){var e=g2,t=d,i,r=nl(30),s,o,a,l,u,c,h=1;n==null&&(n=[]);function d(f){return 1/Math.min(l[f.source.index],l[f.target.index])}function p(f){for(var v=0,x=n.length;v<h;++v)for(var y=0,M,T,E,P=0,w=0,A=0,b,I;y<x;++y)M=n[y],T=M.source,E=M.target,P=E.x+E.vx-T.x-T.vx||or(c),a>1&&(w=E.y+E.vy-T.y-T.vy||or(c)),a>2&&(A=E.z+E.vz-T.z-T.vz||or(c)),b=Math.sqrt(P*P+w*w+A*A),b=(b-s[y])/b*f*i[y],P*=b,w*=b,A*=b,E.vx-=P*(I=u[y]),a>1&&(E.vy-=w*I),a>2&&(E.vz-=A*I),T.vx+=P*(I=1-I),a>1&&(T.vy+=w*I),a>2&&(T.vz+=A*I)}function _(){if(o){var f,v=o.length,x=n.length,y=new Map(o.map((T,E)=>[e(T,E,o),T])),M;for(f=0,l=new Array(v);f<x;++f)M=n[f],M.index=f,typeof M.source!="object"&&(M.source=m0(y,M.source)),typeof M.target!="object"&&(M.target=m0(y,M.target)),l[M.source.index]=(l[M.source.index]||0)+1,l[M.target.index]=(l[M.target.index]||0)+1;for(f=0,u=new Array(x);f<x;++f)M=n[f],u[f]=l[M.source.index]/(l[M.source.index]+l[M.target.index]);i=new Array(x),g(),s=new Array(x),m()}}function g(){if(o)for(var f=0,v=n.length;f<v;++f)i[f]=+t(n[f],f,n)}function m(){if(o)for(var f=0,v=n.length;f<v;++f)s[f]=+r(n[f],f,n)}return p.initialize=function(f,...v){o=f,c=v.find(x=>typeof x=="function")||Math.random,a=v.find(x=>[1,2,3].includes(x))||2,_()},p.links=function(f){return arguments.length?(n=f,_(),p):n},p.id=function(f){return arguments.length?(e=f,p):e},p.iterations=function(f){return arguments.length?(h=+f,p):h},p.strength=function(f){return arguments.length?(t=typeof f=="function"?f:nl(+f),g(),p):t},p.distance=function(f){return arguments.length?(r=typeof f=="function"?f:nl(+f),m(),p):r},p}var x2={value:()=>{}};function Vy(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Ju(t)}function Ju(n){this._=n}function y2(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Ju.prototype=Vy.prototype={constructor:Ju,on:function(n,e){var t=this._,i=y2(n+"",t),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=S2(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(n=i[s]).type)t[r]=_0(t[r],n.name,e);else if(e==null)for(r in t)t[r]=_0(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Ju(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function S2(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function _0(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=x2,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var ca=0,Ha=0,Ua=0,Gy=1e3,Uc,Va,Ic=0,Ks=0,ff=0,wl=typeof performance=="object"&&performance.now?performance:Date,Wy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Xy(){return Ks||(Wy(M2),Ks=wl.now()+ff)}function M2(){Ks=0}function zd(){this._call=this._time=this._next=null}zd.prototype=jy.prototype={constructor:zd,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Xy():+t)+(e==null?0:+e),!this._next&&Va!==this&&(Va?Va._next=this:Uc=this,Va=this),this._call=n,this._time=t,kd()},stop:function(){this._call&&(this._call=null,this._time=1/0,kd())}};function jy(n,e,t){var i=new zd;return i.restart(n,e,t),i}function E2(){Xy(),++ca;for(var n=Uc,e;n;)(e=Ks-n._time)>=0&&n._call.call(void 0,e),n=n._next;--ca}function g0(){Ks=(Ic=wl.now())+ff,ca=Ha=0;try{E2()}finally{ca=0,T2(),Ks=0}}function w2(){var n=wl.now(),e=n-Ic;e>Gy&&(ff-=e,Ic=n)}function T2(){for(var n,e=Uc,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Uc=t);Va=n,kd(i)}function kd(n){if(!ca){Ha&&(Ha=clearTimeout(Ha));var e=n-Ks;e>24?(n<1/0&&(Ha=setTimeout(g0,n-wl.now()-ff)),Ua&&(Ua=clearInterval(Ua))):(Ua||(Ic=wl.now(),Ua=setInterval(w2,Gy)),ca=1,Wy(g0))}}const A2=1664525,C2=1013904223,v0=4294967296;function R2(){let n=1;return()=>(n=(A2*n+C2)%v0)/v0}var x0=3;function Mh(n){return n.x}function y0(n){return n.y}function P2(n){return n.z}var b2=10,L2=Math.PI*(3-Math.sqrt(5)),D2=Math.PI*20/(9+Math.sqrt(221));function N2(n,e){e=e||2;var t=Math.min(x0,Math.max(1,Math.round(e))),i,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,u=new Map,c=jy(p),h=Vy("tick","end"),d=R2();n==null&&(n=[]);function p(){_(),h.call("tick",i),r<s&&(c.stop(),h.call("end",i))}function _(f){var v,x=n.length,y;f===void 0&&(f=1);for(var M=0;M<f;++M)for(r+=(a-r)*o,u.forEach(function(T){T(r)}),v=0;v<x;++v)y=n[v],y.fx==null?y.x+=y.vx*=l:(y.x=y.fx,y.vx=0),t>1&&(y.fy==null?y.y+=y.vy*=l:(y.y=y.fy,y.vy=0)),t>2&&(y.fz==null?y.z+=y.vz*=l:(y.z=y.fz,y.vz=0));return i}function g(){for(var f=0,v=n.length,x;f<v;++f){if(x=n[f],x.index=f,x.fx!=null&&(x.x=x.fx),x.fy!=null&&(x.y=x.fy),x.fz!=null&&(x.z=x.fz),isNaN(x.x)||t>1&&isNaN(x.y)||t>2&&isNaN(x.z)){var y=b2*(t>2?Math.cbrt(.5+f):t>1?Math.sqrt(.5+f):f),M=f*L2,T=f*D2;t===1?x.x=y:t===2?(x.x=y*Math.cos(M),x.y=y*Math.sin(M)):(x.x=y*Math.sin(M)*Math.cos(T),x.y=y*Math.cos(M),x.z=y*Math.sin(M)*Math.sin(T))}(isNaN(x.vx)||t>1&&isNaN(x.vy)||t>2&&isNaN(x.vz))&&(x.vx=0,t>1&&(x.vy=0),t>2&&(x.vz=0))}}function m(f){return f.initialize&&f.initialize(n,d,t),f}return g(),i={tick:_,restart:function(){return c.restart(p),i},stop:function(){return c.stop(),i},numDimensions:function(f){return arguments.length?(t=Math.min(x0,Math.max(1,Math.round(f))),u.forEach(m),i):t},nodes:function(f){return arguments.length?(n=f,g(),u.forEach(m),i):n},alpha:function(f){return arguments.length?(r=+f,i):r},alphaMin:function(f){return arguments.length?(s=+f,i):s},alphaDecay:function(f){return arguments.length?(o=+f,i):+o},alphaTarget:function(f){return arguments.length?(a=+f,i):a},velocityDecay:function(f){return arguments.length?(l=1-f,i):1-l},randomSource:function(f){return arguments.length?(d=f,u.forEach(m),i):d},force:function(f,v){return arguments.length>1?(v==null?u.delete(f):u.set(f,m(v)),i):u.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),v=f.shift()||0,x=(t>1?f.shift():null)||0,y=(t>2?f.shift():null)||0,M=f.shift()||1/0,T=0,E=n.length,P,w,A,b,I,F;for(M*=M,T=0;T<E;++T)I=n[T],P=v-I.x,w=x-(I.y||0),A=y-(I.z||0),b=P*P+w*w+A*A,b<M&&(F=I,M=b);return F},on:function(f,v){return arguments.length>1?(h.on(f,v),i):h.on(f)}}}function U2(){var n,e,t,i,r,s=nl(-30),o,a=1,l=1/0,u=.81;function c(_){var g,m=n.length,f=(e===1?Fy(n,Mh):e===2?ky(n,Mh,y0):e===3?Hy(n,Mh,y0,P2):null).visitAfter(d);for(r=_,g=0;g<m;++g)t=n[g],f.visit(p)}function h(){if(n){var _,g=n.length,m;for(o=new Array(g),_=0;_<g;++_)m=n[_],o[m.index]=+s(m,_,n)}}function d(_){var g=0,m,f,v=0,x,y,M,T,E=_.length;if(E){for(x=y=M=T=0;T<E;++T)(m=_[T])&&(f=Math.abs(m.value))&&(g+=m.value,v+=f,x+=f*(m.x||0),y+=f*(m.y||0),M+=f*(m.z||0));g*=Math.sqrt(4/E),_.x=x/v,e>1&&(_.y=y/v),e>2&&(_.z=M/v)}else{m=_,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do g+=o[m.data.index];while(m=m.next)}_.value=g}function p(_,g,m,f,v){if(!_.value)return!0;var x=[m,f,v][e-1],y=_.x-t.x,M=e>1?_.y-t.y:0,T=e>2?_.z-t.z:0,E=x-g,P=y*y+M*M+T*T;if(E*E/u<P)return P<l&&(y===0&&(y=or(i),P+=y*y),e>1&&M===0&&(M=or(i),P+=M*M),e>2&&T===0&&(T=or(i),P+=T*T),P<a&&(P=Math.sqrt(a*P)),t.vx+=y*_.value*r/P,e>1&&(t.vy+=M*_.value*r/P),e>2&&(t.vz+=T*_.value*r/P)),!0;if(_.length||P>=l)return;(_.data!==t||_.next)&&(y===0&&(y=or(i),P+=y*y),e>1&&M===0&&(M=or(i),P+=M*M),e>2&&T===0&&(T=or(i),P+=T*T),P<a&&(P=Math.sqrt(a*P)));do _.data!==t&&(E=o[_.data.index]*r/P,t.vx+=y*E,e>1&&(t.vy+=M*E),e>2&&(t.vz+=T*E));while(_=_.next)}return c.initialize=function(_,...g){n=_,i=g.find(m=>typeof m=="function")||Math.random,e=g.find(m=>[1,2,3].includes(m))||2,h()},c.strength=function(_){return arguments.length?(s=typeof _=="function"?_:nl(+_),h(),c):s},c.distanceMin=function(_){return arguments.length?(a=_*_,c):Math.sqrt(a)},c.distanceMax=function(_){return arguments.length?(l=_*_,c):Math.sqrt(l)},c.theta=function(_){return arguments.length?(u=_*_,c):Math.sqrt(u)},c}const S0={type:"change"},Eh={type:"start"},M0={type:"end"},Iu=new Fl,E0=new sr,I2=Math.cos(70*gy.DEG2RAD);class O2 extends eo{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",ce),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(S0),i.update(),s=r.NONE},this.update=function(){const S=new U,W=new qs().setFromUnitVectors(e.up,new U(0,1,0)),k=W.clone().invert(),j=new U,ie=new qs,ee=new U,Ee=2*Math.PI;return function(We=null){const Fe=i.object.position;S.copy(Fe).sub(i.target),S.applyQuaternion(W),a.setFromVector3(S),i.autoRotate&&s===r.NONE&&I(A(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=i.minAzimuthAngle,Ie=i.maxAzimuthAngle;isFinite(Pe)&&isFinite(Ie)&&(Pe<-Math.PI?Pe+=Ee:Pe>Math.PI&&(Pe-=Ee),Ie<-Math.PI?Ie+=Ee:Ie>Math.PI&&(Ie-=Ee),Pe<=Ie?a.theta=Math.max(Pe,Math.min(Ie,a.theta)):a.theta=a.theta>(Pe+Ie)/2?Math.max(Pe,a.theta):Math.min(Ie,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let rt=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const vt=a.radius;a.radius=Z(a.radius*u),rt=vt!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(k),Fe.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&T){let vt=null;if(i.object.isPerspectiveCamera){const Mt=S.length();vt=Z(Mt*u);const Ot=Mt-vt;i.object.position.addScaledVector(y,Ot),i.object.updateMatrixWorld(),rt=!!Ot}else if(i.object.isOrthographicCamera){const Mt=new U(M.x,M.y,0);Mt.unproject(i.object);const Ot=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),rt=Ot!==i.object.zoom;const xt=new U(M.x,M.y,0);xt.unproject(i.object),i.object.position.sub(xt).add(Mt),i.object.updateMatrixWorld(),vt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(vt).add(i.object.position):(Iu.origin.copy(i.object.position),Iu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Iu.direction))<I2?e.lookAt(i.target):(E0.setFromNormalAndCoplanarPoint(i.object.up,i.target),Iu.intersectPlane(E0,i.target))))}else if(i.object.isOrthographicCamera){const vt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),vt!==i.object.zoom&&(i.object.updateProjectionMatrix(),rt=!0)}return u=1,T=!1,rt||j.distanceToSquared(i.object.position)>o||8*(1-ie.dot(i.object.quaternion))>o||ee.distanceToSquared(i.target)>o?(i.dispatchEvent(S0),j.copy(i.object.position),ie.copy(i.object.quaternion),ee.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Te),i.domElement.removeEventListener("pointerdown",Je),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",C),i.domElement.getRootNode().removeEventListener("keydown",we,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new c0,l=new c0;let u=1;const c=new U,h=new ke,d=new ke,p=new ke,_=new ke,g=new ke,m=new ke,f=new ke,v=new ke,x=new ke,y=new U,M=new ke;let T=!1;const E=[],P={};let w=!1;function A(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function b(S){const W=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*W)}function I(S){l.theta-=S}function F(S){l.phi-=S}const Y=function(){const S=new U;return function(k,j){S.setFromMatrixColumn(j,0),S.multiplyScalar(-k),c.add(S)}}(),$=function(){const S=new U;return function(k,j){i.screenSpacePanning===!0?S.setFromMatrixColumn(j,1):(S.setFromMatrixColumn(j,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(k),c.add(S)}}(),V=function(){const S=new U;return function(k,j){const ie=i.domElement;if(i.object.isPerspectiveCamera){const ee=i.object.position;S.copy(ee).sub(i.target);let Ee=S.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*k*Ee/ie.clientHeight,i.object.matrix),$(2*j*Ee/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(k*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),$(j*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(S,W){if(!i.zoomToCursor)return;T=!0;const k=i.domElement.getBoundingClientRect(),j=S-k.left,ie=W-k.top,ee=k.width,Ee=k.height;M.x=j/ee*2-1,M.y=-(ie/Ee)*2+1,y.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function se(S){h.set(S.clientX,S.clientY)}function Se(S){K(S.clientX,S.clientX),f.set(S.clientX,S.clientY)}function Ge(S){_.set(S.clientX,S.clientY)}function X(S){d.set(S.clientX,S.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const W=i.domElement;I(2*Math.PI*p.x/W.clientHeight),F(2*Math.PI*p.y/W.clientHeight),h.copy(d),i.update()}function ne(S){v.set(S.clientX,S.clientY),x.subVectors(v,f),x.y>0?q(b(x.y)):x.y<0&&N(b(x.y)),f.copy(v),i.update()}function ge(S){g.set(S.clientX,S.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),V(m.x,m.y),_.copy(g),i.update()}function he(S){K(S.clientX,S.clientY),S.deltaY<0?N(b(S.deltaY)):S.deltaY>0&&q(b(S.deltaY)),i.update()}function Xe(S){let W=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),W=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),W=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),W=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),W=!0;break}W&&(S.preventDefault(),i.update())}function Ve(S){if(E.length===1)h.set(S.pageX,S.pageY);else{const W=He(S),k=.5*(S.pageX+W.x),j=.5*(S.pageY+W.y);h.set(k,j)}}function Ke(S){if(E.length===1)_.set(S.pageX,S.pageY);else{const W=He(S),k=.5*(S.pageX+W.x),j=.5*(S.pageY+W.y);_.set(k,j)}}function D(S){const W=He(S),k=S.pageX-W.x,j=S.pageY-W.y,ie=Math.sqrt(k*k+j*j);f.set(0,ie)}function de(S){i.enableZoom&&D(S),i.enablePan&&Ke(S)}function re(S){i.enableZoom&&D(S),i.enableRotate&&Ve(S)}function ve(S){if(E.length==1)d.set(S.pageX,S.pageY);else{const k=He(S),j=.5*(S.pageX+k.x),ie=.5*(S.pageY+k.y);d.set(j,ie)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const W=i.domElement;I(2*Math.PI*p.x/W.clientHeight),F(2*Math.PI*p.y/W.clientHeight),h.copy(d)}function le(S){if(E.length===1)g.set(S.pageX,S.pageY);else{const W=He(S),k=.5*(S.pageX+W.x),j=.5*(S.pageY+W.y);g.set(k,j)}m.subVectors(g,_).multiplyScalar(i.panSpeed),V(m.x,m.y),_.copy(g)}function xe(S){const W=He(S),k=S.pageX-W.x,j=S.pageY-W.y,ie=Math.sqrt(k*k+j*j);v.set(0,ie),x.set(0,Math.pow(v.y/f.y,i.zoomSpeed)),q(x.y),f.copy(v);const ee=(S.pageX+W.x)*.5,Ee=(S.pageY+W.y)*.5;K(ee,Ee)}function me(S){i.enableZoom&&xe(S),i.enablePan&&le(S)}function Ce(S){i.enableZoom&&xe(S),i.enableRotate&&ve(S)}function Je(S){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",C)),!_e(S)&&(je(S),S.pointerType==="touch"?Le(S):B(S)))}function L(S){i.enabled!==!1&&(S.pointerType==="touch"?ue(S):Q(S))}function C(S){switch(Ne(S),E.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",C),i.dispatchEvent(M0),s=r.NONE;break;case 1:const W=E[0],k=P[W];Le({pointerId:W,pageX:k.x,pageY:k.y});break}}function B(S){let W;switch(S.button){case 0:W=i.mouseButtons.LEFT;break;case 1:W=i.mouseButtons.MIDDLE;break;case 2:W=i.mouseButtons.RIGHT;break;default:W=-1}switch(W){case io.DOLLY:if(i.enableZoom===!1)return;Se(S),s=r.DOLLY;break;case io.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;Ge(S),s=r.PAN}else{if(i.enableRotate===!1)return;se(S),s=r.ROTATE}break;case io.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;se(S),s=r.ROTATE}else{if(i.enablePan===!1)return;Ge(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eh)}function Q(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(S);break;case r.DOLLY:if(i.enableZoom===!1)return;ne(S);break;case r.PAN:if(i.enablePan===!1)return;ge(S);break}}function J(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(Eh),he(te(S)),i.dispatchEvent(M0))}function te(S){const W=S.deltaMode,k={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(W){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return S.ctrlKey&&!w&&(k.deltaY*=10),k}function we(S){S.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(S){S.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function ce(S){i.enabled===!1||i.enablePan===!1||Xe(S)}function Le(S){switch(Be(S),E.length){case 1:switch(i.touches.ONE){case ro.ROTATE:if(i.enableRotate===!1)return;Ve(S),s=r.TOUCH_ROTATE;break;case ro.PAN:if(i.enablePan===!1)return;Ke(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ro.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;de(S),s=r.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;re(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eh)}function ue(S){switch(Be(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;me(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(S),i.update();break;default:s=r.NONE}}function Te(S){i.enabled!==!1&&S.preventDefault()}function je(S){E.push(S.pointerId)}function Ne(S){delete P[S.pointerId];for(let W=0;W<E.length;W++)if(E[W]==S.pointerId){E.splice(W,1);return}}function _e(S){for(let W=0;W<E.length;W++)if(E[W]==S.pointerId)return!0;return!1}function Be(S){let W=P[S.pointerId];W===void 0&&(W=new ke,P[S.pointerId]=W),W.set(S.pageX,S.pageY)}function He(S){const W=S.pointerId===E[0]?E[1]:E[0];return P[W]}i.domElement.addEventListener("contextmenu",Te),i.domElement.addEventListener("pointerdown",Je),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",J,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",we,{passive:!0,capture:!0}),this.update()}}const F2=ls.forwardRef(({onGenerate:n,onReset:e,isGenerating:t},i)=>{const[r,s]=Ye.useState(""),o=()=>{r.trim()&&(n(r),s(""))};return De.jsxs("div",{ref:i,style:{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",width:"60%",maxWidth:"800px",background:"rgba(0,0,0,0.7)",padding:"15px",borderRadius:"10px",display:"flex",gap:"10px"},children:[De.jsx("textarea",{value:r,onChange:a=>s(a.target.value),placeholder:"Enter a prompt to generate a workflow...",style:{width:"100%",height:"50px",borderRadius:"5px",border:"none",padding:"10px",fontFamily:"sans-serif",fontSize:"16px"},disabled:t}),De.jsx("button",{onClick:o,disabled:t||!r.trim(),children:t?"Generating...":"Generate"}),De.jsx("button",{onClick:e,disabled:t,children:"Reset"})]})}),z2=ls.forwardRef(({testCases:n,selectedCase:e,onCaseChange:t,onPromptSelect:i,onShowOverview:r},s)=>{const o=n.find(u=>u.name===e),[a,l]=Ye.useState(null);return De.jsxs("div",{ref:s,style:{position:"absolute",top:10,left:10,padding:10,background:"rgba(0,0,0,0.7)",color:"white",borderRadius:5,fontFamily:"sans-serif",fontSize:"14px"},children:[De.jsx("div",{style:{marginBottom:10},children:De.jsx("button",{onClick:r,children:"Show Overview"})}),De.jsxs("div",{children:[De.jsx("strong",{children:"Test Case:"}),De.jsx("select",{value:e,onChange:u=>t(u.target.value),style:{marginLeft:5},"aria-label":"Select Test Case",children:n.map(u=>De.jsx("option",{value:u.name,children:u.name},u.name))})]}),o&&De.jsxs("div",{style:{marginTop:10},children:[De.jsx("strong",{children:"Prompts:"}),De.jsx("ul",{style:{listStyle:"none",padding:0,margin:"5px 0 0"},children:o.prompts.map(u=>De.jsx("li",{onClick:()=>i(u.name),onMouseEnter:()=>l(u.name),onMouseLeave:()=>l(null),style:{cursor:"pointer",padding:"2px 5px",borderRadius:3,background:a===u.name?"#555":"transparent"},children:u.name},u.name))})]})]})}),k2=ls.forwardRef(({onSearch:n,results:e,onResultClick:t},i)=>De.jsxs("div",{ref:i,style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",padding:"8px",background:"rgba(0,0,0,0.7)",borderRadius:5,width:"300px",zIndex:101},children:[De.jsx("input",{type:"text",placeholder:"Search nodes...",onChange:r=>n(r.target.value),style:{width:"100%",boxSizing:"border-box",background:"rgba(255,255,255,0.1)",color:"white",border:"1px solid #555",borderRadius:3,padding:"4px 8px",fontFamily:"sans-serif",fontSize:"14px"}}),e.length>0&&De.jsx("div",{style:{marginTop:"8px",maxHeight:"150px",overflowY:"auto"},children:e.map(r=>De.jsx("div",{onClick:()=>t(r.id),style:{padding:"4px 8px",cursor:"pointer",color:"white"},onMouseOver:s=>s.currentTarget.style.backgroundColor="#555",onMouseOut:s=>s.currentTarget.style.backgroundColor="transparent",children:r.name},r.id))})]})),B2=ls.forwardRef(({nodeCount:n,edgeCount:e,workflowCount:t},i)=>De.jsxs("div",{ref:i,style:{position:"absolute",top:10,right:10,padding:10,background:"rgba(0,0,0,0.7)",color:"white",borderRadius:5,fontFamily:"sans-serif",fontSize:"14px",width:"180px"},children:[De.jsx("h3",{style:{margin:"0 0 10px",fontSize:"16px"},children:"Statistics"}),De.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5px"},children:[De.jsx("span",{children:"Nodes:"}),De.jsx("span",{style:{textAlign:"right"},children:n}),De.jsx("span",{children:"Edges:"}),De.jsx("span",{style:{textAlign:"right"},children:e}),De.jsx("span",{children:"Workflows:"}),De.jsx("span",{style:{textAlign:"right"},children:t})]})]})),H2=ls.forwardRef(({prompts:n,onPromptSelect:e},t)=>{const[i,r]=Ye.useState(null);return n.length===0?null:De.jsxs("div",{ref:t,style:{position:"absolute",bottom:80,left:10,padding:10,background:"rgba(0,0,0,0.7)",color:"white",borderRadius:5,fontFamily:"sans-serif",fontSize:"14px",maxHeight:"30vh",overflowY:"auto"},children:[De.jsx("h3",{style:{margin:"0 0 10px",fontSize:"16px"},children:"My Prompts"}),De.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:n.map((s,o)=>De.jsx("li",{onClick:()=>e(s),onMouseEnter:()=>r(s),onMouseLeave:()=>r(null),style:{cursor:"pointer",padding:"2px 5px",borderRadius:3,background:i===s?"#555":"transparent"},children:s},`${s}-${o}`))})]})}),V2=({nodes:n})=>n.length===0?null:De.jsx("div",{className:"workflow-display",children:n.map((e,t)=>De.jsxs(ls.Fragment,{children:[De.jsx("span",{className:"workflow-node",children:e.label}),t<n.length-1&&De.jsx("span",{className:"workflow-arrow",children:" → "})]},t))}),w0=new Ri,Ou=new U;class Yy extends gb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Xi(e,3)),this.setAttribute("uv",new Xi(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Od(t,6,1);return this.setAttribute("instanceStart",new Br(i,3,0)),this.setAttribute("instanceEnd",new Br(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Od(t,6,1);return this.setAttribute("instanceColorStart",new Br(i,3,0)),this.setAttribute("instanceColorEnd",new Br(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new _b(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),w0.setFromBufferAttribute(t),this.boundingBox.union(w0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ou.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ou)),Ou.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ou));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Tn.line={uniforms:tm.merge([pe.common,pe.fog,pe.line]),vertexShader:`
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
		`};class am extends yr{constructor(e){super({type:"LineMaterial",uniforms:tm.clone(Tn.line.uniforms),vertexShader:Tn.line.vertexShader,fragmentShader:Tn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const wh=new Dt,T0=new U,A0=new U,Kt=new Dt,Zt=new Dt,Di=new Dt,Th=new U,Ah=new Ct,Jt=new xb,C0=new U,Fu=new Ri,zu=new ya,Ni=new Dt;let ki,zs;function R0(n,e,t){return Ni.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ni.multiplyScalar(1/Ni.w),Ni.x=zs/t.width,Ni.y=zs/t.height,Ni.applyMatrix4(n.projectionMatrixInverse),Ni.multiplyScalar(1/Ni.w),Math.abs(Math.max(Ni.x,Ni.y))}function G2(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Jt.start.fromBufferAttribute(r,a),Jt.end.fromBufferAttribute(s,a),Jt.applyMatrix4(t);const u=new U,c=new U;ki.distanceSqToSegment(Jt.start,Jt.end,c,u),c.distanceTo(u)<zs*.5&&e.push({point:c,pointOnLine:u,distance:ki.origin.distanceTo(c),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function W2(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,u=a.attributes.instanceEnd,c=Math.min(a.instanceCount,l.count),h=-e.near;ki.at(1,Di),Di.w=1,Di.applyMatrix4(e.matrixWorldInverse),Di.applyMatrix4(i),Di.multiplyScalar(1/Di.w),Di.x*=s.x/2,Di.y*=s.y/2,Di.z=0,Th.copy(Di),Ah.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=c;d<p;d++){if(Kt.fromBufferAttribute(l,d),Zt.fromBufferAttribute(u,d),Kt.w=1,Zt.w=1,Kt.applyMatrix4(Ah),Zt.applyMatrix4(Ah),Kt.z>h&&Zt.z>h)continue;if(Kt.z>h){const x=Kt.z-Zt.z,y=(Kt.z-h)/x;Kt.lerp(Zt,y)}else if(Zt.z>h){const x=Zt.z-Kt.z,y=(Zt.z-h)/x;Zt.lerp(Kt,y)}Kt.applyMatrix4(i),Zt.applyMatrix4(i),Kt.multiplyScalar(1/Kt.w),Zt.multiplyScalar(1/Zt.w),Kt.x*=s.x/2,Kt.y*=s.y/2,Zt.x*=s.x/2,Zt.y*=s.y/2,Jt.start.copy(Kt),Jt.start.z=0,Jt.end.copy(Zt),Jt.end.z=0;const g=Jt.closestPointToPointParameter(Th,!0);Jt.at(g,C0);const m=gy.lerp(Kt.z,Zt.z,g),f=m>=-1&&m<=1,v=Th.distanceTo(C0)<zs*.5;if(f&&v){Jt.start.fromBufferAttribute(l,d),Jt.end.fromBufferAttribute(u,d),Jt.start.applyMatrix4(o),Jt.end.applyMatrix4(o);const x=new U,y=new U;ki.distanceSqToSegment(Jt.start,Jt.end,y,x),t.push({point:y,pointOnLine:x,distance:ki.origin.distanceTo(y),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class X2 extends Ti{constructor(e=new Yy,t=new am({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)T0.fromBufferAttribute(t,o),A0.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+T0.distanceTo(A0);const s=new Od(r,2,1);return e.setAttribute("instanceDistanceStart",new Br(s,1,0)),e.setAttribute("instanceDistanceEnd",new Br(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ki=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;zs=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),zu.copy(a.boundingSphere).applyMatrix4(o);let u;if(i)u=zs*.5;else{const h=Math.max(r.near,zu.distanceToPoint(ki.origin));u=R0(r,h,l.resolution)}if(zu.radius+=u,ki.intersectsSphere(zu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Fu.copy(a.boundingBox).applyMatrix4(o);let c;if(i)c=zs*.5;else{const h=Math.max(r.near,Fu.distanceToPoint(ki.origin));c=R0(r,h,l.resolution)}Fu.expandByScalar(c),ki.intersectsBox(Fu)!==!1&&(i?G2(this,t):W2(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(wh),this.material.uniforms.resolution.value.set(wh.z,wh.w))}}class $y extends Yy{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let r=0;r<t;r+=3)i[2*r]=e[r],i[2*r+1]=e[r+1],i[2*r+2]=e[r+2],i[2*r+3]=e[r+3],i[2*r+4]=e[r+4],i[2*r+5]=e[r+5];return super.setColors(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class P0 extends X2{constructor(e=new $y,t=new am({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function ir(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function qy(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fa={duration:.5,overwrite:!1,delay:0},lm,nn,St,ui=1e8,ht=1/ui,Bd=Math.PI*2,j2=Bd/4,Y2=0,Ky=Math.sqrt,$2=Math.cos,q2=Math.sin,qt=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},um=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},cm=function(){return typeof window<"u"},ku=function(e){return Nt(e)||qt(e)},Zy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,Hd=/(?:-?\.?\d|\.)+/gi,Qy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ch=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jy=/[+-]=-?[.\d]+/,eS=/[^,'"\[\]\s]+/gi,K2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,Oi,Vd,fm,Zn={},Oc={},tS,nS=function(e){return(Oc=ha(e,Zn))&&Fn},hm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Tl=function(e,t){return!t&&console.warn(e)},iS=function(e,t){return e&&(Zn[e]=t)&&Oc&&(Oc[e]=t)||Zn},Al=function(){return 0},Z2={suppressEvents:!0,isStart:!0,kill:!1},ec={suppressEvents:!0,kill:!1},Q2={suppressEvents:!0},dm={},es=[],Gd={},rS,Gn={},Rh={},b0=30,tc=[],pm="",mm=function(e){var t=e[0],i,r;if(ji(t)||Nt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=tc.length;r--&&!tc[r].targetTest(t););i=tc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new RS(e[r],i)))||e.splice(r,1);return e},ks=function(e){return e._gsap||mm(ci(e))[0]._gsap},sS=function(e,t,i){return(i=e[t])&&Nt(i)?e[t]():um(i)&&e.getAttribute&&e.getAttribute(t)||i},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},$o=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},J2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Fc=function(){var e=es.length,t=es.slice(0),i,r;for(Gd={},es.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_m=function(e){return!!(e._initted||e._startAt||e.add)},oS=function(e,t,i,r){es.length&&!nn&&Fc(),e.render(t,i,!!(nn&&t<0&&_m(e))),es.length&&!nn&&Fc()},aS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(eS).length<2?t:qt(e)?e.trim():e},lS=function(e){return e},Qn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},eL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ha=function(e,t){for(var i in t)e[i]=t[i];return e},L0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ji(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},zc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},il=function(e){var t=e.parent||wt,i=e.keyframes?eL(hn(e.keyframes)):Qn;if(Nn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},tL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},uS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},hf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},nL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wd=function(e,t,i,r){return e._startAt&&(nn?e._startAt.revert(ec):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},iL=function n(e){return!e||e._ts&&n(e.parent)},D0=function(e){return e._repeat?da(e._tTime,e=e.duration()+e._rDelay)*e:0},da=function(e,t){var i=Math.floor(e=kt(e/t));return e&&i===e?i-1:i},kc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},df=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},pf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=kt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),df(e),i._dirty||Bs(i,e)),e},cS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=kc(e.rawTime(),t),(!t._dur||Bl(0,t.totalDuration(),i)-t._tTime>ht)&&t.render(i,!0)),Bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ht}},Bi=function(e,t,i,r){return t.parent&&os(t),t._start=kt((Sr(i)?i:i||e!==wt?ii(e,i,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),uS(e,t,"_first","_last",e._sort?"_start":0),Xd(t)||(e._recent=t),r||cS(e,t),e._ts<0&&pf(e,e._tTime),e},fS=function(e,t){return(Zn.ScrollTrigger||hm("scrollTrigger",t))&&Zn.ScrollTrigger.create(t,e)},hS=function(e,t,i,r,s){if(vm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rS!==Wn.frame)return es.push(e),e._lazy=[s,r],1},rL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&rL(e)&&!(!e._initted&&Xd(e))||(e._ts<0||e._dp._ts<0)&&!Xd(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=Bl(0,e._tDur,t),c=da(l,a),e._yoyo&&c&1&&(o=1-o),c!==da(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||r||e._zTime===ht||!t&&e._zTime){if(!e._initted&&hS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?ht:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Wd(e,t,i,!0),e._onUpdate&&!i&&jn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&os(e,1),!i&&!nn&&(jn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},oL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},pa=function(e,t,i,r){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&pf(e,e._tTime=e._tDur*a),e.parent&&df(e),i||Bs(e.parent,e),e},N0=function(e){return e instanceof xn?Bs(e):pa(e,e._dur)},aL={_start:0,endTime:Al,totalDuration:Al},ii=function n(e,t,i){var r=e.labels,s=e._recent||aL,o=e.duration()>=ui?s.endTime(!1):e._dur,a,l,u;return qt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(hn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},rl=function(e,t,i){var r=Sr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new zt(t[0],o,t[s+1])},ds=function(e,t){return e||e===0?t(e):t},Bl=function(e,t,i){return i<e?e:i>t?t:i},fn=function(e,t){return!qt(e)||!(t=K2.exec(e))?"":t[1]},lL=function(e,t,i){return ds(i,function(r){return Bl(e,t,r)})},jd=[].slice,dS=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==Oi},uL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return qt(r)&&!t||dS(r,1)?(s=i).push.apply(s,ci(r)):i.push(r)})||i},ci=function(e,t,i){return St&&!t&&St.selector?St.selector(e):qt(e)&&!i&&(Vd||!ma())?jd.call((t||fm).querySelectorAll(e),0):hn(e)?uL(e,i):dS(e)?jd.call(e,0):e?[e]:[]},Yd=function(e){return e=ci(e)[0]||Tl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ci(t,i.querySelectorAll?i:i===e?Tl("Invalid scope")||fm.createElement("div"):e)}},pS=function(e){return e.sort(function(){return .5-Math.random()})},mS=function(e){if(Nt(e))return e;var t=ji(e)?e:{each:e},i=Hs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return qt(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(d,p,_){var g=(_||t).length,m=o[g],f,v,x,y,M,T,E,P,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,ui])[1],!w){for(E=-ui;E<(E=_[w++].getBoundingClientRect().left)&&w<g;);w<g&&w--}for(m=o[g]=[],f=l?Math.min(w,g)*c-.5:r%w,v=w===ui?0:l?g*h/w-.5:r/w|0,E=0,P=ui,T=0;T<g;T++)x=T%w-f,y=v-(T/w|0),m[T]=M=u?Math.abs(u==="y"?y:x):Ky(x*x+y*y),M>E&&(E=M),M<P&&(P=M);r==="random"&&pS(m),m.max=E-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(w>g?g-1:u?u==="y"?g/w:w:Math.max(w,g/w))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=fn(t.amount||t.each)||0,i=i&&g<0?TS(i):i}return g=(m[d]-m.min)/m.max||0,kt(m.b+(i?i(g):g)*m.v)+m.u}},$d=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=kt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Sr(i)?0:fn(i))}},_S=function(e,t){var i=hn(e),r,s;return!i&&ji(e)&&(r=i=e.radius||ui,e.values?(e=ci(e.values),(s=!Sr(e[0]))&&(r*=r)):e=$d(e.increment)),ds(t,i?Nt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ui,c=0,h=e.length,d,p;h--;)s?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<u&&(u=d,c=h);return c=!r||u<=r?e[c]:o,s||c===o||Sr(o)?c:c+fn(o)}:$d(e))},gS=function(e,t,i,r){return ds(hn(e)?!t:i===!0?!!(i=0):!r,function(){return hn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},cL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},fL=function(e,t){return function(i){return e(parseFloat(i))+(t||fn(i))}},hL=function(e,t,i){return xS(e,t,0,1,i)},vS=function(e,t,i){return ds(i,function(r){return e[~~t(r)]})},dL=function n(e,t,i){var r=t-e;return hn(e)?vS(e,n(0,e.length),t):ds(i,function(s){return(r+(s-e)%r)%r+e})},pL=function n(e,t,i){var r=t-e,s=r*2;return hn(e)?vS(e,n(0,e.length-1),t):ds(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Cl=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?eS:Hd),i+=e.substr(t,r-t)+gS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},xS=function(e,t,i,r,s){var o=t-e,a=r-i;return ds(s,function(l){return i+((l-e)/o*a||0)})},mL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=qt(e),a={},l,u,c,h,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return c[g](_-g)},i=t}else r||(e=ha(hn(e)?[]:{},e));if(!c){for(l in t)gm.call(a,e,l,"get",t[l]);s=function(_){return Sm(_,a)||(o?e.p:e)}}}return ds(i,s)},U0=function(e,t,i){var r=e.labels,s=ui,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},jn=function(e,t,i){var r=e.vars,s=r[t],o=St,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&es.length&&Fc(),a&&(St=a),c=l?s.apply(u,l):s.call(u),St=o,c},Ga=function(e){return os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&jn(e,"onInterrupt"),e},zo,yS=[],SS=function(e){if(e)if(e=!e.name&&e.default||e,cm()||e.headless){var t=e.name,i=Nt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Al,render:Sm,add:gm,kill:LL,modifier:bL,rawVars:0},o={targetTest:0,get:0,getSetter:ym,aliases:{},register:0};if(ma(),e!==r){if(Gn[t])return;Qn(r,Qn(zc(e,s),o)),ha(r.prototype,ha(s,zc(e,o))),Gn[r.prop=t]=r,e.targetTest&&(tc.push(r),dm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}iS(t,r),e.register&&e.register(Fn,r,In)}else yS.push(e)},ct=255,Wa={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Ph=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ct+.5|0},MS=function(e,t,i){var r=e?Sr(e)?[e>>16,e>>8&ct,e&ct]:0:Wa.black,s,o,a,l,u,c,h,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wa[e])r=Wa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ct,r&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Hd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Ph(l+1/3,s,o),r[1]=Ph(l,s,o),r[2]=Ph(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Qy),i&&r.length<4&&(r[3]=1),r}else r=e.match(Hd)||Wa.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/ct,o=r[1]/ct,a=r[2]/ct,h=Math.max(s,o,a),d=Math.min(s,o,a),c=(h+d)/2,h===d?l=u=0:(p=h-d,u=c>.5?p/(2-h-d):p/(h+d),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ES=function(e){var t=[],i=[],r=-1;return e.split(ts).forEach(function(s){var o=s.match(Fo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},I0=function(e,t,i){var r="",s=(e+r).match(ts),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(d){return(d=MS(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=ES(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ts,"1").split(Fo),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ts),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},ts=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),_L=/hsl[a]?\(/,wS=function(e){var t=e.join(" "),i;if(ts.lastIndex=0,ts.test(t))return i=_L.test(t),e[1]=I0(e[1],i),e[0]=I0(e[0],i,ES(e[1])),!0},Rl,Wn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,d,p,_=function g(m){var f=n()-r,v=m===!0,x,y,M,T;if((f>e||f<0)&&(i+=f-t),r+=f,M=r-i,x=M-o,(x>0||v)&&(T=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](M,d,T,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){tS&&(!Vd&&cm()&&(Oi=Vd=window,fm=Oi.document||{},Zn.gsap=Fn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(Fn.version),nS(Oc||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),yS.forEach(SS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Rl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Rl=0,u=Al},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,f,v){var x=f?function(y,M,T,E){m(y,M,T,E),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),ma(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},h}(),ma=function(){return!Rl&&Wn.wake()},et={},gL=/^[\d.\-M][\d.\-,\s]/,vL=/["']/g,xL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(vL,"").trim():+u,r=l.substr(a+1).trim();return t},yL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},SL=function(e){var t=(e+"").split("("),i=et[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[xL(t[1])]:yL(e).split(",").map(aS)):et._CE&&gL.test(e)?et._CE("",e):i},TS=function(e){return function(t){return 1-e(1-t)}},AS=function n(e,t){for(var i=e._first,r;i;)i instanceof xn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Hs=function(e,t){return e&&(Nt(e)?e:et[e]||SL(e))||t},to=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Un(e,function(a){et[a]=Zn[a]=s,et[o=a.toLowerCase()]=i;for(var l in s)et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[a+"."+l]=s[l]}),s},CS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Bd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*q2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:CS(a);return s=Bd/s,l.config=function(u,c){return n(e,u,c)},l},Lh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:CS(i);return r.config=function(s){return n(e,s)},r};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;to(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;to("Elastic",bh("in"),bh("out"),bh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};to("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);to("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});to("Circ",function(n){return-(Ky(1-n*n)-1)});to("Sine",function(n){return n===1?1:-$2(n*j2)+1});to("Back",Lh("in"),Lh("out"),Lh());et.SteppedEase=et.steps=Zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-ht;return function(a){return((r*Bl(0,o,a)|0)+s)*i}}};fa.ease=et["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return pm+=n+","+n+"Params,"});var RS=function(e,t){this.id=Y2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sS,this.set=t?t.getSetter:ym},Pl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,pa(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),Rl||Wn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,pa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ma(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pf(this,i),!s._dp||s.parent||cS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ht||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),oS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+D0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+D0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?da(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?kc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ht?0:this._rts,this.totalTime(Bl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),df(this),nL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ma(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Bi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Nn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Q2);var r=nn;return nn=i,_m(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),nn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,N0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,N0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ii(this,i),Nn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Nn(r)),this._dur||(this._zTime=-ht),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ht)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Nt(i)?i:lS,a=function(){var u=r.then;r.then=null,Nt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ga(this)},n}();Qn(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var xn=function(n){qy(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Nn(i.sortChildren),wt&&Bi(i.parent||wt,ir(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&fS(ir(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return rl(0,arguments,this),this},t.from=function(r,s,o){return rl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return rl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,il(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new zt(r,s,ii(this,o),1),this},t.call=function(r,s,o){return Bi(this,zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new zt(r,o,ii(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,il(o).immediateRender=Nn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,il(a).immediateRender=Nn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:kt(r),h=this._zTime<0!=r<0&&(this._initted||!u),d,p,_,g,m,f,v,x,y,M,T,E;if(this!==wt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,f=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=kt(c%m),c===l?(g=this._repeat,d=u):(M=kt(c/m),g=~~M,g&&g===M&&(d=u,g--),d>u&&(d=u)),M=da(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),T&&g&1&&(d=u-d,E=1),g!==M&&!this._lock){var P=T&&M&1,w=P===(T&&g&1);if(g<M&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(E?0:kt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;AS(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=oL(this,kt(a),kt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!s&&!M&&(jn(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){v=0,_&&(c+=this._zTime=-ht);break}}p=_}else{p=this._last;for(var A=r<0?r:d;p;){if(_=p._prev,(p._act||A<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||nn&&_m(p)),d!==this._time||!this._ts&&!f){v=0,_&&(c+=this._zTime=A?-ht:ht);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-ht)._zTime=d>=a?1:-1,this._ts))return this._start=y,df(this),this.render(r,s,o);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&os(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(jn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Sr(s)||(s=ii(this,s,r)),!(r instanceof Pl)){if(hn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(qt(r))return this.addLabel(r,s);if(Nt(r))r=zt.delayedCall(0,r);else return this}return this!==r?Bi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ui);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof zt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return qt(r)?this.removeLabel(r):Nt(r)?this.killTweensOf(r):(r.parent===this&&hf(this,r),r===this._recent&&(this._recent=this._last),Bs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Wn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ii(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=zt.delayedCall(0,s||Al,o);return a.data="isPause",this._hasPause=1,Bi(this,a,ii(this,r))},t.removePause=function(r){var s=this._first;for(r=ii(this,r);s;)s._start===r&&s.data==="isPause"&&os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Hr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ci(r),l=this._first,u=Sr(s),c;l;)l instanceof zt?J2(l._targets,a)&&(u?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ii(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,p,_=zt.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&pa(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Qn({startAt:{time:ii(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),U0(this,ii(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),U0(this,ii(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Bs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Bs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ui,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;pa(o,o===wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(wt._ts&&(oS(wt,kc(r,wt)),rS=Wn.frame),Wn.frame>=b0){b0+=qn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&qn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},e}(Pl);Qn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ML=function(e,t,i,r,s,o,a){var l=new In(this._pt,e,t,0,1,US,null,s),u=0,c=0,h,d,p,_,g,m,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Cl(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(Ch)||[];h=Ch.exec(r);)_=h[0],g=r.substring(u,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?$o(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Ch.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Jy.test(r)||f)&&(l.e=0),this._pt=l,l},gm=function(e,t,i,r,s,o,a,l,u,c){Nt(r)&&(r=r(s||0,e,o));var h=e[t],d=i!=="get"?i:Nt(h)?u?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=Nt(h)?u?CL:DS:xm,_;if(qt(r)&&(~r.indexOf("random(")&&(r=Cl(r)),r.charAt(1)==="="&&(_=$o(d,r)+(fn(d)||0),(_||_===0)&&(r=_))),!c||d!==r||qd)return!isNaN(d*r)&&r!==""?(_=new In(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?PL:NS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&hm(t,r),ML.call(this,e,t,d,r,p,l||qn.stringFilter,u))},EL=function(e,t,i,r,s){if(Nt(e)&&(e=sl(e,s,t,i,r)),!ji(e)||e.style&&e.nodeType||hn(e)||Zy(e))return qt(e)?sl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=sl(e[a],s,t,i,r);return o},PS=function(e,t,i,r,s,o){var a,l,u,c;if(Gn[e]&&(a=new Gn[e]).init(s,a.rawVars?t[e]:EL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new In(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==zo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Hr,qd,vm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,x=e._overwrite==="auto"&&!lm,y=e.timeline,M,T,E,P,w,A,b,I,F,Y,$,V,q;if(y&&(!d||!s)&&(s="none"),e._ease=Hs(s,fa.ease),e._yEase=h?TS(Hs(h===!0?s:h,fa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(I=m[0]?ks(m[0]).harness:0,V=I&&r[I.prop],M=zc(r,dm),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?ec:Z2),g._lazy=0),o){if(os(e._startAt=zt.set(m,Qn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Nn(l),startAt:null,delay:0,onUpdate:u&&function(){return jn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!a&&!p)&&e._startAt.revert(ec),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),E=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Nn(l),immediateRender:a,stagger:0,parent:f},M),V&&(E[I.prop]=V),os(e._startAt=zt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(ec):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Nn(l)||l&&!_,T=0;T<m.length;T++){if(w=m[T],b=w._gsap||mm(m)[T]._gsap,e._ptLookup[T]=Y={},Gd[b.id]&&es.length&&Fc(),$=v===m?T:v.indexOf(w),I&&(F=new I).init(w,V||M,e,$,v)!==!1&&(e._pt=P=new In(e._pt,w,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(N){Y[N]=P}),F.priority&&(A=1)),!I||V)for(E in M)Gn[E]&&(F=PS(E,M,e,$,w,v))?F.priority&&(A=1):Y[E]=P=gm.call(e,w,E,"get",M[E],$,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(w,e._op[T]),x&&e._pt&&(Hr=e,wt.killTweensOf(w,Y,e.globalTime(t)),q=!e.parent,Hr=0),e._pt&&l&&(Gd[b.id]=1)}A&&IS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&y.render(ui,!0,!0)},wL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qd=1,e.vars[t]="+=0",vm(e,a),qd=0,l?Tl(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Ut(i)+fn(h.e)),h.b&&(h.b=c.s+fn(h.b))},TL=function(e,t){var i=e[0]?ks(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ha({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},AL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(hn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},sl=function(e,t,i,r,s){return Nt(e)?e.call(t,i,r,s):qt(e)&&~e.indexOf("random(")?Cl(e):e},bS=pm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",LS={};Un(bS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return LS[n]=1});var zt=function(n){qy(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:il(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,v=r.parent||wt,x=(hn(i)||Zy(i)?Sr(i[0]):"length"in r)?[i]:ci(i),y,M,T,E,P,w,A,b;if(a._targets=x.length?mm(x):Tl("GSAP target "+i+" not found. https://gsap.com",!qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||ku(u)||ku(c)){if(r=a.vars,y=a.timeline=new xn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=ir(a),y._start=0,d||ku(u)||ku(c)){if(E=x.length,A=d&&mS(d),ji(d))for(P in d)~bS.indexOf(P)&&(b||(b={}),b[P]=d[P]);for(M=0;M<E;M++)T=zc(r,LS),T.stagger=0,f&&(T.yoyoEase=f),b&&ha(T,b),w=x[M],T.duration=+sl(u,ir(a),M,w,x),T.delay=(+sl(c,ir(a),M,w,x)||0)-a._delay,!d&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(w,T,A?A(M,w,x):0),y._ease=et.none;y.duration()?u=c=0:a.timeline=0}else if(_){il(Qn(y.vars.defaults,{ease:"none"})),y._ease=Hs(_.ease||r.ease||"none");var I=0,F,Y,$;if(hn(_))_.forEach(function(V){return y.to(x,V,">")}),y.duration();else{T={};for(P in _)P==="ease"||P==="easeEach"||AL(P,_[P],T,_.easeEach);for(P in T)for(F=T[P].sort(function(V,q){return V.t-q.t}),I=0,M=0;M<F.length;M++)Y=F[M],$={ease:Y.e,duration:(Y.t-(M?F[M-1].t:0))/100*u},$[P]=Y.v,y.to(x,$,I),I+=$.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!lm&&(Hr=ir(a),wt.killTweensOf(x),Hr=0),Bi(v,ir(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!_&&a._start===kt(v._time)&&Nn(h)&&iL(ir(a))&&v.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-c)||0)),m&&fS(ir(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-ht&&!c?l:r<ht?0:r,d,p,_,g,m,f,v,x,y;if(!u)sL(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=h,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=kt(h%g),h===l?(_=this._repeat,d=u):(m=kt(h/g),_=~~m,_&&_===m?(d=u,_--):d>u&&(d=u)),f=this._yoyo&&_&1,f&&(y=this._yEase,d=u-d),m=da(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(x&&this._yEase&&AS(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(kt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(hS(this,c?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/u),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(jn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Wd(this,r,s,o),jn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Wd(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&os(this,1),!s&&!(c&&!a)&&(h||a||f)&&(jn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Rl||Wn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vm(this,u),c=this._ease(u/this._dur),wL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(pf(this,0),this.parent||uS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Hr&&Hr.vars.overwrite!==!0)._first||Ga(this),this.parent&&o!==this.timeline.totalDuration()&&pa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ci(r):a,u=this._ptLookup,c=this._pt,h,d,p,_,g,m,f;if((!s||s==="all")&&tL(a,l))return s==="all"&&(this._pt=0),Ga(this);for(h=this._op=this._op||[],s!=="all"&&(qt(s)&&(g={},Un(s,function(v){return g[v]=1}),s=g),s=TL(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=u[f],s==="all"?(h[f]=s,_=d,p={}):(p=h[f]=h[f]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&hf(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Ga(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return rl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return rl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return wt.killTweensOf(r,s,o)},e}(Pl);Qn(zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(n){zt[n]=function(){var e=new xn,t=jd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var xm=function(e,t,i){return e[t]=i},DS=function(e,t,i){return e[t](i)},CL=function(e,t,i,r){return e[t](r.fp,i)},RL=function(e,t,i){return e.setAttribute(t,i)},ym=function(e,t){return Nt(e[t])?DS:um(e[t])&&e.setAttribute?RL:xm},NS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},PL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},US=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Sm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},bL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},LL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?hf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},DL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},IS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},In=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||NS,this.d=l||this,this.set=u||xm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=DL,this.m=i,this.mt=s,this.tween=r},n}();Un(pm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return dm[n]=1});Zn.TweenMax=Zn.TweenLite=zt;Zn.TimelineLite=Zn.TimelineMax=xn;wt=new xn({sortChildren:!1,defaults:fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=wS;var Vs=[],nc={},NL=[],O0=0,UL=0,Dh=function(e){return(nc[e]||NL).map(function(t){return t()})},Kd=function(){var e=Date.now(),t=[];e-O0>2&&(Dh("matchMediaInit"),Vs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Oi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Dh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),O0=e,Dh("matchMedia"))},OS=function(){function n(t,i){this.selector=i&&Yd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=UL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Nt(i)&&(s=r,r=i,i=Nt);var o=this,a=function(){var u=St,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Yd(s)),St=o,h=r.apply(o,arguments),Nt(h)&&o._r.push(h),St=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===Nt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=St;St=null,i(this),St=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof xn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof zt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Vs.length;o--;)Vs[o].id===this.id&&Vs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),IL=function(){function n(t){this.contexts=[],this.scope=t,St&&St.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){ji(i)||(i={matches:i});var o=new OS(0,s||this.scope),a=o.conditions={},l,u,c;St&&!o.selector&&(o.selector=St.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Oi.matchMedia(i[u]),l&&(Vs.indexOf(o)<0&&Vs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Kd):l.addEventListener("change",Kd)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Bc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return SS(r)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){qt(e)&&(e=ci(e)[0]);var s=ks(e||{}).get,o=i?lS:aS;return i==="native"&&(i=""),e&&(t?o((Gn[t]&&Gn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Gn[a]&&Gn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ci(e),e.length>1){var r=e.map(function(c){return Fn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Gn[t],a=ks(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;zo._pt=0,h.init(e,i?c+i:c,zo,0,[e]),h.render(1,h),zo._pt&&Sm(1,zo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Fn.to(e,Qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hs(e.ease,fa.ease)),L0(fa,e||{})},config:function(e){return L0(qn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Gn[a]&&!Zn[a]&&Tl(t+" effect requires "+a+" plugin.")}),Rh[t]=function(a,l,u){return i(ci(a),Qn(l||{},s),u)},o&&(xn.prototype[t]=function(a,l,u){return this.add(Rh[t](a,ji(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){et[e]=Hs(t)},parseEase:function(e,t){return arguments.length?Hs(e,t):et},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new xn(e),r,s;for(i.smoothChildTiming=Nn(e.smoothChildTiming),wt.remove(i),i._dp=0,i._time=i._tTime=wt._time,r=wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof zt&&r.vars.onComplete===r._targets[0]))&&Bi(i,r,r._start-r._delay),r=s;return Bi(wt,i,0),i},context:function(e,t){return e?new OS(e,t):St},matchMedia:function(e){return new IL(e)},matchMediaRefresh:function(){return Vs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kd()},addEventListener:function(e,t){var i=nc[e]||(nc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=nc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:dL,wrapYoyo:pL,distribute:mS,random:gS,snap:_S,normalize:hL,getUnit:fn,clamp:lL,splitColor:MS,toArray:ci,selector:Yd,mapRange:xS,pipe:cL,unitize:fL,interpolate:mL,shuffle:pS},install:nS,effects:Rh,ticker:Wn,updateRoot:xn.updateRoot,plugins:Gn,globalTimeline:wt,core:{PropTween:In,globals:iS,Tween:zt,Timeline:xn,Animation:Pl,getCache:ks,_removeLinkedListItem:hf,reverting:function(){return nn},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return lm=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Bc[n]=zt[n]});Wn.add(xn.updateRoot);zo=Bc.to({},{duration:0});var OL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},FL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=OL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Nh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(qt(s)&&(l={},Un(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}FL(a,s)}}}},Fn=Bc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)nn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Nh("roundProps",$d),Nh("modifiers"),Nh("snap",_S))||Bc;zt.version=xn.version=Fn.version="3.13.0";tS=1;cm()&&ma();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F0,Vr,qo,Mm,Is,z0,Em,zL=function(){return typeof window<"u"},Mr={},Cs=180/Math.PI,Ko=Math.PI/180,Eo=Math.atan2,k0=1e8,wm=/([A-Z])/g,kL=/(left|right|width|margin|padding|x)/i,BL=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},FS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WL=function(e,t,i){return e.style[t]=i},XL=function(e,t,i){return e.style.setProperty(t,i)},jL=function(e,t,i){return e._gsap[t]=i},YL=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},$L=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},qL=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Tt="transform",On=Tt+"Origin",KL=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Mr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ar(r,a)}):this.tfm[e]=o.x?o[e]:ar(r,e),e===On&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Tt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(On,t,"")),e=Tt}(s||t)&&this.props.push(e,t,s[e])},kS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZL=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Em(),(!s||!s.isStart)&&!i[Tt]&&(kS(i),r.zOrigin&&i[On]&&(i[On]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},BS=function(e,t){var i={target:e,props:[],revert:ZL,save:KL};return e._gsap||Fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},HS,Qd=function(e,t){var i=Vr.createElementNS?Vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vr.createElement(e);return i&&i.style?i:Vr.createElement(e)},fi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(wm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,_a(t)||t,1)||""},B0="O,Moz,ms,Ms,Webkit".split(","),_a=function(e,t,i){var r=t||Is,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(B0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?B0[o]:"")+e},Jd=function(){zL()&&window.document&&(F0=window,Vr=F0.document,qo=Vr.documentElement,Is=Qd("div")||{style:{}},Qd("div"),Tt=_a(Tt),On=Tt+"Origin",Is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",HS=!!_a("perspective"),Em=Fn.core.reverting,Mm=1)},H0=function(e){var t=e.ownerSVGElement,i=Qd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),qo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),qo.removeChild(i),s},V0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},VS=function(e){var t,i;try{t=e.getBBox()}catch{t=H0(e),i=1}return t&&(t.width||t.height)||i||(t=H0(e)),t&&!t.width&&!t.x&&!t.y?{x:+V0(e,["x","cx","x1"])||0,y:+V0(e,["y","cy","y1"])||0,width:0,height:0}:t},GS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&VS(e))},Zs=function(e,t){if(t){var i=e.style,r;t in Mr&&t!==On&&(t=Tt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(wm,"-$1").toLowerCase())):i.removeAttribute(t)}},Gr=function(e,t,i,r,s,o){var a=new In(e._pt,t,i,0,1,o?zS:FS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},G0={deg:1,rad:1,turn:1},QL={grid:1,flex:1},as=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Is.style,l=kL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",p=r==="%",_,g,m,f;if(r===o||!s||G0[r]||G0[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),f=e.getCTM&&GS(e),(p||o==="%")&&(Mr[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[c],Ut(p?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Vr||!g.appendChild)&&(g=Vr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Wn.time&&!m.uncache)return Ut(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,_=e[c],v?e.style[t]=v:Zs(e,t)}else(p||o==="%")&&!QL[fi(g,"display")]&&(a.position=fi(e,"position")),g===e&&(a.position="static"),g.appendChild(Is),_=Is[c],g.removeChild(Is),a.position="absolute";return l&&p&&(m=ks(g),m.time=Wn.time,m.width=g[c]),Ut(d?_*s/h:_&&s?h/_*s:0)},ar=function(e,t,i,r){var s;return Mm||Jd(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mr[t]&&t!=="transform"?(s=Ll(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vc(fi(e,On))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Hc[t]&&Hc[t](e,t,i)||fi(e,t)||sS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?as(e,t,s,i)+i:s},JL=function(e,t,i,r){if(!i||i==="none"){var s=_a(t,e,1),o=s&&fi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=fi(e,"borderTopColor"))}var a=new In(this._pt,e.style,t,0,1,US),l=0,u=0,c,h,d,p,_,g,m,f,v,x,y,M;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=fi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=fi(e,t)||r,g?e.style[t]=g:Zs(e,t)),c=[i,r],wS(c),i=c[0],r=c[1],d=i.match(Fo)||[],M=r.match(Fo)||[],M.length){for(;h=Fo.exec(r);)m=h[0],v=r.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=$o(p,m)+y),f=parseFloat(m),x=m.substr((f+"").length),l=Fo.lastIndex-x.length,x||(x=x||qn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=as(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?zS:FS;return Jy.test(r)&&(a.e=0),this._pt=a,a},W0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=W0[i]||i,t[1]=W0[r]||r,t.join(" ")},tD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Mr[a]&&(l=1,a=a==="transformOrigin"?On:Tt),Zs(i,a);l&&(Zs(i,Tt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ll(i,1),o.uncache=1,kS(r)))}},Hc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new In(e._pt,t,i,0,0,tD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},bl=[1,0,0,1,0,0],WS={},XS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},X0=function(e){var t=fi(e,Tt);return XS(t)?bl:t.substr(7).match(Qy).map(Ut)},Tm=function(e,t){var i=e._gsap||ks(e),r=e.style,s=X0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bl:s):(s===bl&&!e.offsetParent&&e!==qo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,qo.appendChild(e)),s=X0(e),l?r.display=l:Zs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):qo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ep=function(e,t,i,r,s,o){var a=e._gsap,l=s||Tm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,M=parseFloat(x[1])||0,T,E,P,w;i?l!==bl&&(E=p*m-_*g)&&(P=y*(m/E)+M*(-g/E)+(g*v-m*f)/E,w=y*(-_/E)+M*(p/E)-(p*v-_*f)/E,y=P,M=w):(T=VS(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(x[1]||x[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(f=y-u,v=M-c,a.xOffset=h+(f*p+v*g)-f,a.yOffset=d+(f*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[On]="0px 0px",o&&(Gr(o,a,"xOrigin",u,y),Gr(o,a,"yOrigin",c,M),Gr(o,a,"xOffset",h,a.xOffset),Gr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ll=function(e,t){var i=e._gsap||new RS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=fi(e,On)||"0",c,h,d,p,_,g,m,f,v,x,y,M,T,E,P,w,A,b,I,F,Y,$,V,q,N,K,Z,se,Se,Ge,X,ne;return c=h=d=g=m=f=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&GS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),r.scale=r.rotate=r.translate="none"),E=Tm(e,i.svg),i.svg&&(i.uncache?(N=e.getBBox(),u=i.xOrigin-N.x+"px "+(i.yOrigin-N.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),ep(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,T=i.yOrigin||0,E!==bl&&(b=E[0],I=E[1],F=E[2],Y=E[3],c=$=E[4],h=V=E[5],E.length===6?(p=Math.sqrt(b*b+I*I),_=Math.sqrt(Y*Y+F*F),g=b||I?Eo(I,b)*Cs:0,v=F||Y?Eo(F,Y)*Cs+g:0,v&&(_*=Math.abs(Math.cos(v*Ko))),i.svg&&(c-=M-(M*b+T*F),h-=T-(M*I+T*Y))):(ne=E[6],Ge=E[7],Z=E[8],se=E[9],Se=E[10],X=E[11],c=E[12],h=E[13],d=E[14],P=Eo(ne,Se),m=P*Cs,P&&(w=Math.cos(-P),A=Math.sin(-P),q=$*w+Z*A,N=V*w+se*A,K=ne*w+Se*A,Z=$*-A+Z*w,se=V*-A+se*w,Se=ne*-A+Se*w,X=Ge*-A+X*w,$=q,V=N,ne=K),P=Eo(-F,Se),f=P*Cs,P&&(w=Math.cos(-P),A=Math.sin(-P),q=b*w-Z*A,N=I*w-se*A,K=F*w-Se*A,X=Y*A+X*w,b=q,I=N,F=K),P=Eo(I,b),g=P*Cs,P&&(w=Math.cos(P),A=Math.sin(P),q=b*w+I*A,N=$*w+V*A,I=I*w-b*A,V=V*w-$*A,b=q,$=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=Ut(Math.sqrt(b*b+I*I+F*F)),_=Ut(Math.sqrt(V*V+ne*ne)),P=Eo($,V),v=Math.abs(P)>2e-4?P*Cs:0,y=X?1/(X<0?-X:X):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!XS(fi(e,Tt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Ut(p),i.scaleY=Ut(_),i.rotation=Ut(g)+a,i.rotationX=Ut(m)+a,i.rotationY=Ut(f)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[On]=Vc(u)),i.xOffset=i.yOffset=0,i.force3D=qn.force3D,i.renderTransform=i.svg?iD:HS?jS:nD,i.uncache=0,i},Vc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uh=function(e,t,i){var r=fn(t);return Ut(parseFloat(t)+parseFloat(as(e,"x",i+"px",r)))+r},nD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jS(e,t)},Ms="0deg",Ia="0px",Es=") ",jS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,x=i.zOrigin,y="",M=f==="auto"&&e&&e!==1||f===!0;if(x&&(h!==Ms||c!==Ms)){var T=parseFloat(c)*Ko,E=Math.sin(T),P=Math.cos(T),w;T=parseFloat(h)*Ko,w=Math.cos(T),o=Uh(v,o,E*w*-x),a=Uh(v,a,-Math.sin(T)*-x),l=Uh(v,l,P*w*-x+x)}m!==Ia&&(y+="perspective("+m+Es),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==Ia||a!==Ia||l!==Ia)&&(y+=l!==Ia||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Es),u!==Ms&&(y+="rotate("+u+Es),c!==Ms&&(y+="rotateY("+c+Es),h!==Ms&&(y+="rotateX("+h+Es),(d!==Ms||p!==Ms)&&(y+="skew("+d+", "+p+Es),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Es),v.style[Tt]=y||"translate(0, 0)"},iD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),M,T,E,P,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ko,u*=Ko,M=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=Ko,w=Math.tan(u-c),w=Math.sqrt(1+w*w),E*=w,P*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),M*=w,T*=w)),M=Ut(M),T=Ut(T),E=Ut(E),P=Ut(P)):(M=h,P=d,T=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=as(p,"x",o,"px"),y=as(p,"y",a,"px")),(_||g||m||f)&&(x=Ut(x+_-(_*M+g*E)+m),y=Ut(y+g-(_*T+g*P)+f)),(r||s)&&(w=p.getBBox(),x=Ut(x+r/100*w.width),y=Ut(y+s/100*w.height)),w="matrix("+M+","+T+","+E+","+P+","+x+","+y+")",p.setAttribute("transform",w),v&&(p.style[Tt]=w)},rD=function(e,t,i,r,s){var o=360,a=qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Cs:1),u=l-r,c=r+u+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*k0)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*k0)%o-~~(u/o)*o)),e._pt=d=new In(e._pt,t,i,r,u,HL),d.e=c,d.u="deg",e._props.push(i),d},j0=function(e,t){for(var i in t)e[i]=t[i];return e},sD=function(e,t,i){var r=j0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,d,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Tt]=t,a=Ll(i,1),Zs(i,Tt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Tt],o[Tt]=t,a=Ll(i,1),o[Tt]=u);for(l in Mr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=fn(u),_=fn(c),h=p!==_?as(i,l,u,_):parseFloat(u),d=parseFloat(c),e._pt=new In(e._pt,a,l,h,d-h,Zd),e._pt.u=_||0,e._props.push(l));j0(a,r)};Un("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Hc[e>1?"border"+n:n]=function(a,l,u,c,h){var d,p;if(arguments.length<4)return d=o.map(function(_){return ar(a,_,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,h)}});var YS={name:"css",register:Jd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,d,p,_,g,m,f,v,x,y,M,T,E,P;Mm||Jd(),this.styles=this.styles||BS(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Gn[g]&&PS(g,t,i,r,e,s)))){if(p=typeof c,_=Hc[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Cl(c)),_)_(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",ts.lastIndex=0,ts.test(u)||(m=fn(u),f=fn(c)),f?m!==f&&(u=as(e,g,u,f)+f):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],qt(u)&&~u.indexOf("random(")&&(u=Cl(u)),fn(u+"")||u==="auto"||(u+=qn.units[g]||fn(ar(e,g))||""),(u+"").charAt(1)==="="&&(u=ar(e,g))):u=ar(e,g),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),g in Vi&&(g==="autoAlpha"&&(d===1&&ar(e,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,a.visibility),Gr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Mr,x){if(this.styles.save(g),p==="string"&&c.substring(0,6)==="var(--"&&(c=fi(e,c.substring(4,c.indexOf(")"))),h=parseFloat(c)),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ll(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new In(this._pt,a,Tt,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new In(this._pt,M,"scaleY",M.scaleY,(v?$o(M.scaleY,v+h):h)-M.scaleY||0,Zd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(On,0,a[On]),c=eD(c),M.svg?ep(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==M.zOrigin&&Gr(this,M,"zOrigin",M.zOrigin,f),Gr(this,a,g,Vc(u),Vc(c)));continue}else if(g==="svgOrigin"){ep(e,c,1,T,0,this);continue}else if(g in WS){rD(this,M,g,d,v?$o(d,v+c):c);continue}else if(g==="smoothOrigin"){Gr(this,M,"smooth",M.smooth,c);continue}else if(g==="force3D"){M[g]=c;continue}else if(g==="transform"){sD(this,c,e);continue}}else g in a||(g=_a(g)||g);if(x||(h||h===0)&&(d||d===0)&&!BL.test(c)&&g in a)m=(u+"").substr((d+"").length),h||(h=0),f=fn(c)||(g in qn.units?qn.units[g]:m),m!==f&&(d=as(e,g,u,f)),this._pt=new In(this._pt,x?M:a,g,d,(v?$o(d,v+h):h)-d,!x&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?GL:Zd),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=VL);else if(g in a)JL.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){hm(g,c);continue}x||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}E&&IS(this)},render:function(e,t){if(t.tween._time||!Em())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ar,aliases:Vi,getSetter:function(e,t,i){var r=Vi[t];return r&&r.indexOf(",")<0&&(t=r),t in Mr&&t!==On&&(e._gsap.x||ar(e,"x"))?i&&z0===i?t==="scale"?YL:jL:(z0=i||{})&&(t==="scale"?$L:qL):e.style&&!um(e.style[t])?WL:~t.indexOf("-")?XL:ym(e,t)},core:{_removeProperty:Zs,_getMatrix:Tm}};Fn.utils.checkPrefix=_a;Fn.core.getStyleSaver=BS;(function(n,e,t,i){var r=Un(n+","+e+","+t,function(s){Mr[s]=1});Un(e,function(s){qn.units[s]="deg",WS[s]=1}),Vi[r[13]]=n+","+e,Un(i,function(s){var o=s.split(":");Vi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){qn.units[n]="px"});Fn.registerPlugin(YS);var tp=Fn.registerPlugin(YS)||Fn;tp.core.Tween;const Y0=[{name:"Sample Case 1",prompts:[{name:"How to write a file in python?"},{name:"How to read a file in python?"}]},{name:"Sample Case 2",prompts:[{name:"Create a simple web server"},{name:"What is a closure in javascript?"}]}],xi=n=>{const e=n.match(/^([a-f0-9-]+)__/);return e?e[1]:null},oD=({apiUrl:n})=>{const e=Ye.useRef(null),t=Ye.useRef(null),i=Ye.useRef(null),r=Ye.useRef(null),s=Ye.useRef(null),o=Ye.useRef(null),a=Ye.useRef([]),l=Ye.useRef(null),u=Ye.useRef(null),c=Ye.useRef(null),h=Ye.useRef(null),d=Ye.useRef([]),p=Ye.useRef(null),_=Ye.useRef(!1),[g,m]=Ye.useState([]),[f,v]=Ye.useState([]),[x,y]=Ye.useState([]),[M,T]=Ye.useState(!1),[E,P]=Ye.useState(Y0[0].name),[w,A]=Ye.useState(null),[b,I]=Ye.useState(null),[F,Y]=Ye.useState([]),[$,V]=Ye.useState([]),[q,N]=Ye.useState([]),[K,Z]=Ye.useState([]),se=Ye.useRef(w);Ye.useEffect(()=>{se.current=w},[w]);const Se=Ye.useRef(b);Ye.useEffect(()=>{Se.current=b},[b]),Ye.useEffect(()=>{if(!b){Z([]);return}const D=f.filter(me=>xi(me.id)===b),de=x.filter(me=>xi(me.source)===b&&xi(me.target)===b),re=D.find(me=>me.type==="Intent");if(!re){Z([]);return}const ve=[re],le=new Map(de.map(me=>[me.source,me.target]));let xe=re;for(;le.has(xe.id)&&ve.length<D.length;){const me=le.get(xe.id),Ce=D.find(Je=>Je.id===me);if(Ce)ve.push(Ce),xe=Ce;else break}Z(ve)},[b,f,x]),Ye.useEffect(()=>{if(b){const D=d.current.filter(de=>xi(de.id)===b);if(D.length>0&&u.current&&c.current){const de=new Ri;if(D.forEach(re=>{re.x!==void 0&&re.y!==void 0&&re.z!==void 0&&de.expandByPoint(new U(re.x,re.y,re.z))}),!de.isEmpty()){const re=new U,ve=new U;de.getCenter(re),de.getSize(ve);const le=Math.max(ve.x,ve.y,ve.z),xe=u.current.fov*(Math.PI/180);let me=Math.abs(le/2*Math.tan(xe*2));me*=2,me=Math.max(me,50),c.current.enabled=!1,tp.to(u.current.position,{duration:1.5,x:re.x,y:re.y,z:re.z+me,ease:"power2.inOut"}),tp.to(c.current.target,{duration:1.5,x:re.x,y:re.y,z:re.z,ease:"power2.inOut",onUpdate:()=>{var Je;(Je=c.current)==null||Je.update()},onComplete:()=>{c.current.enabled=!0}})}}}},[b]),Ye.useEffect(()=>{fetch(`${n}/graph`).then(D=>D.json()).then(D=>{D&&D.nodes?(v(D.nodes.map(de=>({id:de.key,...de.attributes}))),y(D.edges.map(de=>({source:de.source,target:de.target,...de.attributes})))):(v([]),y([]))})},[n]);const Ge=async D=>{q.includes(D)||N(ve=>[...ve,D]),T(!0),I(null);const re=await(await fetch(`${n}/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:D})})).json();re.graph&&re.graph.nodes&&(v(re.graph.nodes.map(ve=>({id:ve.key,...ve.attributes}))),y(re.graph.edges.map(ve=>({source:ve.source,target:ve.target,...ve.attributes}))),re.highlightedNodeId&&I(xi(re.highlightedNodeId))),T(!1)},X=()=>{I(null);const D=u.current,de=c.current,re=d.current;if(!D||!de||!re||re.length===0)return;const ve=new Ri;if(re.forEach(oe=>{oe.x!==void 0&&oe.y!==void 0&&ve.expandByPoint(new U(oe.x,oe.y,0))}),ve.isEmpty())return;const le=new U;ve.getCenter(le);const xe=new U;ve.getSize(xe);const me=Math.max(xe.x,xe.y),Ce=D.fov*(Math.PI/180),Je=Math.abs(me/1.5/Math.tan(Ce/2)),L=D.position.clone(),C=new U(le.x,le.y,le.z+Math.max(Je,50)),B=de.target.clone(),Q=le;let J=null;const te=1e3,we=oe=>{J===null&&(J=oe);const ce=oe-J,Le=Math.min(ce/te,1);D.position.lerpVectors(L,C,Le),de.target.lerpVectors(B,Q,Le),de.update(),Le<1&&requestAnimationFrame(we)};requestAnimationFrame(we)},ne=async D=>{if(window.confirm(`Are you sure you want to delete workflow ${D}?`))try{const re=await fetch(`${n}/workflow/${D}`,{method:"DELETE"});if(!re.ok)throw new Error(`Server error: ${re.statusText}`);const ve=await re.json();if(ve.graph&&ve.graph.nodes)v(ve.graph.nodes.map(le=>({id:le.key,...le.attributes}))),y(ve.graph.edges.map(le=>({source:le.source,target:le.target,...le.attributes})));else{const le=f.filter(Ce=>xi(Ce.id)!==D),xe=new Set(le.map(Ce=>Ce.id)),me=x.filter(Ce=>xe.has(Ce.source)&&xe.has(Ce.target));v(le),y(me)}}catch(re){console.error("Failed to delete workflow:",re),alert("Error: Could not delete workflow. See console for details.")}finally{I(null)}},ge=async()=>{T(!0),await fetch(`${n}/reset`,{method:"POST"}),v([]),y([]),N([]),I(null),T(!1)},he=D=>{if(!D){Y([]),V([]);return}const de=d.current.filter(re=>re.name.toLowerCase().includes(D.toLowerCase())).map(re=>({id:re.id,name:re.name}));V(de),Y(de.map(re=>re.id))},Xe=D=>{const de=d.current.find(le=>le.id===D),re=u.current,ve=c.current;if(de&&re&&ve){const le=new U(de.x,de.y,de.z),xe=new U().subVectors(re.position,ve.target).normalize(),me=100,Ce=re.position.clone(),Je=new U().addVectors(le,xe.multiplyScalar(me)),L=ve.target.clone(),C=le;let B=null;const Q=500,J=te=>{B===null&&(B=te);const we=te-B,oe=Math.min(we/Q,1);re.position.lerpVectors(Ce,Je,oe),ve.target.lerpVectors(L,C,oe),ve.update(),oe<1&&requestAnimationFrame(J)};requestAnimationFrame(J)}};Ye.useEffect(()=>{if(!e.current||f.length===0)return;const D=e.current,de=D.clientWidth,re=D.clientHeight,ve=new pb;ve.background=new tt(0);const le=new oi(75,de/re,.1,1e4),xe=new db({antialias:!0});xe.setSize(de,re),D.appendChild(xe.domElement),l.current=ve,u.current=le;const me=new O2(le,xe.domElement);me.enableDamping=!0,me.dampingFactor=.05,me.screenSpacePanning=!1,me.minDistance=0,me.maxDistance=1/0,me.enableZoom=!1,me.minPolarAngle=Math.PI/4,me.maxPolarAngle=3*Math.PI/4,c.current=me;const Ce=.02,Je=ee=>{ee.preventDefault();const Ee=ee.deltaY>0?1:-1,Ze=1-Ee*Ce,We=u.current,Fe=c.current;if(!We||!Fe)return;let Pe;if(p.current)Pe=p.current;else{const Mt=new sr,Ot=new Fl;Mt.setFromNormalAndCoplanarPoint(We.getWorldDirection(new U),Fe.target);const xt=new ke(ee.clientX/xe.domElement.clientWidth*2-1,-(ee.clientY/xe.domElement.clientHeight)*2+1);Ot.origin.copy(We.position),Ot.direction.set(xt.x,xt.y,.5).unproject(We).sub(Ot.origin).normalize();const Yi=new U;Ot.intersectPlane(Mt,Yi),Pe=Yi}const Ie=new U().lerpVectors(We.position,Pe,1-Ze);if(Ee>0&&Ie.distanceTo(Pe)<1)return;const rt=new U().subVectors(Ie,We.position),vt=Fe.target.clone().add(rt);We.position.copy(Ie),Fe.target.copy(vt),Fe.update()};xe.domElement.addEventListener("wheel",Je,{passive:!1});const L=f.map(ee=>({...ee,name:ee.label}));d.current=L;const C=x.map(ee=>({...ee})),B=N2(L,3).force("link",v2(C).id(ee=>ee.id).distance(50)).force("charge",U2().strength(-300)).force("center",yb(0,0,0));B.tick(500);const Q=new Float32Array(L.length*3),J=new Float32Array(L.length*3),te=new bi;te.setAttribute("position",new $n(Q,3)),te.setAttribute("color",new $n(J,3));const we=new Iy({size:10,sizeAttenuation:!1,vertexColors:!0}),oe=new s0(te,we);ve.add(oe),h.current=oe;const ce=new am({color:16777215,linewidth:2,transparent:!0,opacity:.6});ce.resolution.set(de,re);const Le=[],ue=new vb;ue.params.Points.threshold=10;const Te=new tt(65535),je=new tt(16776960),Ne=new tt(16777215);let _e=0;const Be=new ke,He=ee=>{if(_.current)return;const Ee=new ke(ee.clientX/de*2-1,-(ee.clientY/re)*2+1);ue.setFromCamera(Ee,le);const Ze=ue.intersectObjects([oe,...Le]);if(Ze.length>0){const We=Ze[0];let Fe=null;if(p.current=We.point,We.object.type==="Points"&&We.index!==void 0){const Pe=L[We.index].id;Fe=xi(Pe)}else We.object.userData.workflowId&&(Fe=We.object.userData.workflowId);A(Fe)}else A(null),p.current=null};xe.domElement.addEventListener("mousemove",He);const pt=ee=>{if(_.current=!0,_e=Date.now(),Be.set(ee.clientX,ee.clientY),p.current&&c.current&&u.current){const Ee=c.current,Ze=p.current;Ee.target.copy(Ze),Ee.update()}};xe.domElement.addEventListener("mousedown",pt);const S=ee=>{_.current=!1;const Ee=new ke(ee.clientX,ee.clientY),Ze=Be.distanceTo(Ee),We=Date.now()-_e;Ze<5&&We<200&&(se.current?Se.current===se.current?I(null):I(se.current):I(null))};xe.domElement.addEventListener("mouseup",S);const W=()=>{const ee=[];t.current&&ee.push(t.current.getBoundingClientRect()),i.current&&ee.push(i.current.getBoundingClientRect()),r.current&&ee.push(r.current.getBoundingClientRect()),s.current&&ee.push(s.current.getBoundingClientRect()),o.current&&ee.push(o.current.getBoundingClientRect()),a.current=ee};if(W(),!b){const ee=new Ri;L.forEach(Ie=>{Ie.x!==void 0&&Ie.y!==void 0&&ee.expandByPoint(new U(Ie.x,Ie.y,0))});const Ee=new U;ee.getCenter(Ee);const Ze=new U;ee.getSize(Ze);const We=Math.max(Ze.x,Ze.y),Fe=le.fov*(Math.PI/180),Pe=Math.abs(We/1.5/Math.tan(Fe/2));le.position.set(Ee.x,Ee.y,Ee.z+Math.max(Pe,50)),me.target.copy(Ee),me.update()}let k;const j=()=>{k=requestAnimationFrame(j),me.update(),B.tick();const ee=oe.geometry.attributes.position.array,Ee=oe.geometry.attributes.color.array;L.forEach((Pe,Ie)=>{ee[Ie*3]=Pe.x??0,ee[Ie*3+1]=Pe.y??0,ee[Ie*3+2]=Pe.z??0;const rt=xi(Pe.id),vt=b&&rt===b||!b&&rt&&rt===se.current,Ot=F.includes(Pe.id)?je:vt?Te:Ne;Ee[Ie*3]=Ot.r,Ee[Ie*3+1]=Ot.g,Ee[Ie*3+2]=Ot.b}),oe.geometry.attributes.position.needsUpdate=!0,oe.geometry.attributes.color.needsUpdate=!0;const Ze=[],We=new nm,Fe=new Ct;Fe.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),We.setFromProjectionMatrix(Fe),L.forEach(Pe=>{if(Pe.x&&Pe.y&&Pe.z){const Ie=new U(Pe.x,Pe.y,Pe.z);if(!We.containsPoint(Ie))return;const rt=Ie.clone().project(le),vt=(rt.x*.5+.5)*de,Mt=(rt.y*-.5+.5)*re;a.current.some(xt=>vt>xt.left&&vt<xt.right&&Mt>xt.top&&Mt<xt.bottom)||Ze.push({id:Pe.id,name:Pe.name,x:vt,y:Mt,type:Pe.type})}}),m(Ze),Le.forEach(Pe=>{ve.remove(Pe),Pe.geometry.dispose(),Pe.material&&Pe.material.dispose()}),Le.length=0,C.forEach(Pe=>{const Ie=Pe.source,rt=Pe.target;if(Ie.x&&Ie.y&&Ie.z&&rt.x&&rt.y&&rt.z){const vt=new $y;vt.setPositions([Ie.x,Ie.y,Ie.z,rt.x,rt.y,rt.z]);const Mt=xi(Ie.id),Ot=b&&Mt===b||!b&&Mt&&Mt===se.current,xt=ce.clone();xt.color=Ot?Te:Ne,xt.opacity=Ot?1:.6,Pe.type==="Similarity"&&(xt.dashed=!0,xt.dashSize=3,xt.gapSize=3,xt.color=new tt(5592405),xt.opacity=.8);const Yi=new P0(vt,xt);Mt&&(Yi.userData.workflowId=Mt),ve.add(Yi),Le.push(Yi)}}),xe.render(ve,le)};j();const ie=()=>{if(!e.current)return;const ee=e.current;le.aspect=ee.clientWidth/ee.clientHeight,le.updateProjectionMatrix(),xe.setSize(ee.clientWidth,ee.clientHeight),ce.resolution.set(ee.clientWidth,ee.clientHeight),W()};return window.addEventListener("resize",ie),()=>{cancelAnimationFrame(k),window.removeEventListener("resize",ie),xe.domElement.removeEventListener("wheel",Je),xe.domElement.removeEventListener("mousemove",He),xe.domElement.removeEventListener("mousedown",pt),xe.domElement.removeEventListener("mouseup",S),ve.traverse(ee=>{(ee instanceof Ti||ee instanceof P0||ee instanceof s0)&&(ee.geometry&&ee.geometry.dispose(),ee.material&&ee.material.dispose())}),me.dispose(),ce.dispose(),we.dispose(),xe.dispose(),e.current&&e.current.contains(xe.domElement)&&e.current.removeChild(xe.domElement),B.stop()}},[f,x]),Ye.useEffect(()=>{const D=async de=>{const re=de.target;re&&(re.tagName==="INPUT"||re.tagName==="TEXTAREA")||(de.key==="Delete"||de.key==="Backspace")&&b&&await ne(b)};return window.addEventListener("keydown",D),()=>{window.removeEventListener("keydown",D)}},[b,f,x]);const Ve=new Set(f.map(D=>xi(D.id)).filter(D=>D)).size,Ke=()=>De.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.7)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white",zIndex:1e3},children:[De.jsx("div",{style:{border:"4px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",borderTop:"4px solid white",width:"40px",height:"40px",animation:"spin 1s linear infinite",marginBottom:"20px"}}),De.jsx("p",{children:"Generating..."}),De.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]});return De.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative"},children:[M&&De.jsx(Ke,{}),De.jsx("div",{ref:e,style:{width:"100%",height:"100%"}}),De.jsx(B2,{ref:s,nodeCount:f.length,edgeCount:x.length,workflowCount:Ve}),De.jsx(z2,{ref:t,testCases:Y0,selectedCase:E,onCaseChange:P,onPromptSelect:Ge,onShowOverview:X}),De.jsx(k2,{ref:r,onSearch:he,results:$,onResultClick:Xe}),De.jsx(H2,{ref:o,prompts:q,onPromptSelect:Ge}),De.jsx(F2,{ref:i,onGenerate:Ge,onReset:ge,isGenerating:M}),De.jsx(V2,{nodes:K}),g.map((D,de)=>{const re=xi(D.id),ve=re?re===w:!1,le=F.includes(D.id);return De.jsx("div",{style:{position:"absolute",left:D.x,top:D.y,color:D.type==="Intent"?"cyan":"white",fontWeight:b&&re===b||ve||le?"bold":"normal",transform:"translate(-50%, -50%)",pointerEvents:"none",textShadow:"1px 1px 2px black",padding:"2px 5px"},children:D.name},de)}),De.jsx("style",{children:`
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
      `})]})},aD=L1(oD,{props:{apiUrl:"string"}});customElements.define("pathway-goggles",aD);
