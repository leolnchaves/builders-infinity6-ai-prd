var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ie={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ie,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),f=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=d()}));function p(e){return e[e.length-1]}function m(e){return typeof e==`function`}function h(e,t){return m(e)?e(t):e}var g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;function v(e){for(let t in e)if(g.call(e,t))return!0;return!1}var y=()=>Object.create(null),b=(e,t)=>x(e,t,y);function x(e,t,n=()=>({}),r=0){if(e===t)return e;if(r>500)return t;let i=t,a=T(e)&&T(i);if(!a&&!(C(e)&&C(i)))return i;let o=a?e:S(e);if(!o)return i;let s=a?i:S(i);if(!s)return i;let c=o.length,l=s.length,u=a?Array(l):n(),d=0;for(let t=0;t<l;t++){let o=a?t:s[t],l=e[o],f=i[o];if(l===f){u[o]=l,(a?t<c:g.call(e,o))&&d++;continue}if(l===null||f===null||typeof l!=`object`||typeof f!=`object`){u[o]=f;continue}let p=x(l,f,n,r+1);u[o]=p,p===l&&d++}return c===l&&d===c?e:u}function S(e){let t=Object.getOwnPropertyNames(e);for(let n of t)if(!_.call(e,n))return!1;let n=Object.getOwnPropertySymbols(e);if(n.length===0)return t;let r=t;for(let t of n){if(!_.call(e,t))return!1;r.push(t)}return r}function C(e){if(!w(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!w(n)||!n.hasOwnProperty(`isPrototypeOf`))}function w(e){return Object.prototype.toString.call(e)===`[object Object]`}function T(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function E(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(!E(e[r],t[r],n))return!1;return!0}if(C(e)&&C(t)){let r=n?.ignoreUndefined??!0;if(n?.partial){for(let i in t)if((!r||t[i]!==void 0)&&!E(e[i],t[i],n))return!1;return!0}let i=0;if(!r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;let a=0;for(let o in t)if((!r||t[o]!==void 0)&&(a++,a>i||!E(e[o],t[o],n)))return!1;return i===a}return!1}function D(e){let t,n,r=new Promise((e,r)=>{t=e,n=r});return r.status=`pending`,r.resolve=n=>{r.status=`resolved`,r.value=n,t(n),e?.(n)},r.reject=e=>{r.status=`rejected`,n(e)},r}function O(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}function ee(e){return!!(e&&typeof e==`object`&&typeof e.then==`function`)}var te=/[\x00-\x1f\x7f"<>`{}]/g;function k(e){return e.replace(te,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function ne(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return k(t)}var A=[`http:`,`https:`,`mailto:`,`tel:`];function j(e,t){if(!e)return!1;try{let n=new URL(e);return!t.has(n.protocol)}catch{return!1}}var re={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},M=/[&><\u2028\u2029]/g;function ie(e){return e.replace(M,e=>re[e])}function ae(e){if(!e||!/[%\\\x00-\x1f\x7f]/.test(e)&&!e.startsWith(`//`))return{path:e,handledProtocolRelativeURL:!1};let t=/%25|%5C/gi,n=0,r=``,i;for(;(i=t.exec(e))!==null;)r+=ne(e.slice(n,i.index))+i[0],n=t.lastIndex;r+=ne(n?e.slice(n):e);let a=!1;return r.startsWith(`//`)&&(a=!0,r=`/`+r.replace(/^\/+/,``)),{path:r,handledProtocolRelativeURL:a}}function oe(e){return/\s|[^\u0000-\u007F]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function se(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function N(){throw Error(`Invariant failed`)}function P(e){let t=new Map,n,r,i=e=>{e.next&&(e.prev?(e.prev.next=e.next,e.next.prev=e.prev,e.next=void 0,r&&(r.next=e,e.prev=r)):(e.next.prev=void 0,n=e.next,e.next=void 0,r&&(e.prev=r,r.next=e)),r=e)};return{get(e){let n=t.get(e);if(n)return i(n),n.value},set(a,o){if(t.size>=e&&n){let e=n;t.delete(e.key),e.next&&(n=e.next,e.next.prev=void 0),e===r&&(r=void 0)}let s=t.get(a);if(s)s.value=o,i(s);else{let e={key:a,value:o,prev:r};r&&(r.next=e),r=e,n||=e,t.set(a,e)}},clear(){t.clear(),n=void 0,r=void 0}}}var F=4,I=5;function ce(e){let t=e.indexOf(`{`);if(t===-1)return null;let n=e.indexOf(`}`,t);return n===-1||t+1>=e.length?null:[t,n]}function L(e,t,n=new Uint16Array(6)){let r=e.indexOf(`/`,t),i=r===-1?e.length:r,a=e.substring(t,i);if(!a||!a.includes(`$`))return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n;if(a===`$`){let r=e.length;return n[0]=2,n[1]=t,n[2]=t,n[3]=r,n[4]=r,n[5]=r,n}if(a.charCodeAt(0)===36)return n[0]=1,n[1]=t,n[2]=t+1,n[3]=i,n[4]=i,n[5]=i,n;let o=ce(a);if(o){let[r,s]=o,c=a.charCodeAt(r+1);if(c===45){if(r+2<a.length&&a.charCodeAt(r+2)===36){let e=r+3,a=s;if(e<a)return n[0]=3,n[1]=t+r,n[2]=t+e,n[3]=t+a,n[4]=t+s+1,n[5]=i,n}}else if(c===36){let a=r+1,o=r+2;return o===s?(n[0]=2,n[1]=t+r,n[2]=t+a,n[3]=t+o,n[4]=t+s+1,n[5]=e.length,n):(n[0]=1,n[1]=t+r,n[2]=t+o,n[3]=t+s,n[4]=t+s+1,n[5]=i,n)}}return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n}function R(e,t,n,r,i,a,o){o?.(n);let s=r;{let r=n.fullPath??n.from,o=r.length,c=n.options?.caseSensitive??e,l=n.options?.params?.parse??n.options?.parseParams;for(;s<o;){let e=L(r,s,t),o,u=s,d=e[5];switch(s=d+1,a++,e[0]){case 0:{let t=r.substring(e[2],e[3]);if(c){let e=i.static?.get(t);if(e)o=e;else{i.static??=new Map;let e=V(n.fullPath??n.from);e.parent=i,e.depth=a,o=e,i.static.set(t,e)}}else{let e=t.toLowerCase(),r=i.staticInsensitive?.get(e);if(r)o=r;else{i.staticInsensitive??=new Map;let t=V(n.fullPath??n.from);t.parent=i,t.depth=a,o=t,i.staticInsensitive.set(e,t)}}break}case 1:{let t=r.substring(u,e[1]),s=r.substring(e[4],d),f=c&&!!(t||s),p=t?f?t:t.toLowerCase():void 0,m=s?f?s:s.toLowerCase():void 0,h=!l&&i.dynamic?.find(e=>!e.parse&&e.caseSensitive===f&&e.prefix===p&&e.suffix===m);if(h)o=h;else{let e=H(1,n.fullPath??n.from,f,p,m);o=e,e.depth=a,e.parent=i,i.dynamic??=[],i.dynamic.push(e)}break}case 3:{let t=r.substring(u,e[1]),s=r.substring(e[4],d),f=c&&!!(t||s),p=t?f?t:t.toLowerCase():void 0,m=s?f?s:s.toLowerCase():void 0,h=!l&&i.optional?.find(e=>!e.parse&&e.caseSensitive===f&&e.prefix===p&&e.suffix===m);if(h)o=h;else{let e=H(3,n.fullPath??n.from,f,p,m);o=e,e.parent=i,e.depth=a,i.optional??=[],i.optional.push(e)}break}case 2:{let t=r.substring(u,e[1]),s=r.substring(e[4],d),l=c&&!!(t||s),f=t?l?t:t.toLowerCase():void 0,p=s?l?s:s.toLowerCase():void 0,m=H(2,n.fullPath??n.from,l,f,p);o=m,m.parent=i,m.depth=a,i.wildcard??=[],i.wildcard.push(m)}}i=o}if(l&&n.children&&!n.isRoot&&n.id&&n.id.charCodeAt(n.id.lastIndexOf(`/`)+1)===95){let e=V(n.fullPath??n.from);e.kind=I,e.parent=i,a++,e.depth=a,i.pathless??=[],i.pathless.push(e),i=e}let u=(n.path||!n.children)&&!n.isRoot;if(u&&r.endsWith(`/`)){let e=V(n.fullPath??n.from);e.kind=F,e.parent=i,a++,e.depth=a,i.index=e,i=e}i.parse=l??null,i.priority=n.options?.params?.priority??0,u&&!i.route&&(i.route=n,i.fullPath=n.fullPath??n.from)}if(n.children)for(let r of n.children)R(e,t,r,s,i,a,o)}function z(e,t){if(e.parse&&!t.parse)return-1;if(!e.parse&&t.parse)return 1;if(e.parse&&t.parse&&(e.priority||t.priority))return t.priority-e.priority;if(e.prefix&&t.prefix&&e.prefix!==t.prefix){if(e.prefix.startsWith(t.prefix))return-1;if(t.prefix.startsWith(e.prefix))return 1}if(e.suffix&&t.suffix&&e.suffix!==t.suffix){if(e.suffix.endsWith(t.suffix))return-1;if(t.suffix.endsWith(e.suffix))return 1}return e.prefix&&!t.prefix?-1:!e.prefix&&t.prefix?1:e.suffix&&!t.suffix?-1:!e.suffix&&t.suffix?1:e.caseSensitive&&!t.caseSensitive?-1:!e.caseSensitive&&t.caseSensitive?1:0}function B(e){if(e.pathless)for(let t of e.pathless)B(t);if(e.static)for(let t of e.static.values())B(t);if(e.staticInsensitive)for(let t of e.staticInsensitive.values())B(t);if(e.dynamic?.length){e.dynamic.sort(z);for(let t of e.dynamic)B(t)}if(e.optional?.length){e.optional.sort(z);for(let t of e.optional)B(t)}if(e.wildcard?.length){e.wildcard.sort(z);for(let t of e.wildcard)B(t)}}function V(e){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:e,parent:null,parse:null,priority:0}}function H(e,t,n,r,i){return{kind:e,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:t,parent:null,parse:null,priority:0,caseSensitive:n,prefix:r,suffix:i}}function le(e,t){let n=V(`/`),r=new Uint16Array(6);for(let t of e)R(!1,r,t,1,n,0);B(n),t.masksTree=n,t.flatCache=P(1e3)}function ue(e,t){e||=`/`;let n=t.flatCache.get(e);if(n)return n;let r=W(e,t.masksTree);return t.flatCache.set(e,r),r}function de(e,t,n,r,i){e||=`/`,r||=`/`;let a=t?`case\0${e}`:e,o=i.singleCache.get(a);return o||(o=V(`/`),R(t,new Uint16Array(6),{from:e},1,o,0),i.singleCache.set(a,o)),W(r,o,n)}function fe(e,t,n=!1){let r=n?e:`nofuzz\0${e}`,i=t.matchCache.get(r);if(i!==void 0)return i;e||=`/`;let a;try{a=W(e,t.segmentTree,n)}catch(e){if(e instanceof URIError)a=null;else throw e}return a&&(a.branch=me(a.route)),t.matchCache.set(r,a),a}function pe(e){return e===`/`?e:e.replace(/\/{1,}$/,``)}function U(e,t=!1,n){let r=V(e.fullPath),i=new Uint16Array(6),a={},o={},s=0;return R(t,i,e,1,r,0,e=>{if(n?.(e,s),e.id in a&&N(),a[e.id]=e,s!==0&&e.path){let t=pe(e.fullPath);(!o[t]||e.fullPath.endsWith(`/`))&&(o[t]=e)}s++}),B(r),{processedTree:{segmentTree:r,singleCache:P(1e3),matchCache:P(1e3),flatCache:null,masksTree:null},routesById:a,routesByPath:o}}function W(e,t,n=!1){let r=e.split(`/`),i=ge(e,r,t,n);if(!i)return null;let[a]=G(e,r,i);return{route:i.node.route,rawParams:a}}function G(e,t,n){let r=he(n.node),i=null,a=Object.create(null),o=n.extract?.part??0,s=n.extract?.node??0,c=n.extract?.path??0,l=n.extract?.segment??0;for(;s<r.length;o++,s++,c++,l++){let u=r[s];if(u.kind===F)break;if(u.kind===I){l--,o--,c--;continue}let d=t[o],f=c;if(d&&(c+=d.length),u.kind===1){i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0;if(e.charCodeAt(t)===123){let n=u.suffix?.length??0,r=e.substring(t+2,e.length-n-1),i=d.substring(t,d.length-n);a[r]=decodeURIComponent(i)}else{let t=e.substring(1);a[t]=decodeURIComponent(d)}}else if(u.kind===3){if(n.skipped&1<<s){o--,c=f-1;continue}i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0,r=u.suffix?.length??0,p=e.substring(t+3,e.length-r-1),m=u.suffix||u.prefix?d.substring(t,d.length-r):d;m&&(a[p]=decodeURIComponent(m))}else if(u.kind===2){let t=u,n=e.substring(f+(t.prefix?.length??0),e.length-(t.suffix?.length??0)),r=decodeURIComponent(n);a[`*`]=r,a._splat=r;break}}return n.rawParams&&Object.assign(a,n.rawParams),[a,{part:o,node:s,path:c,segment:l}]}function me(e){let t=[e];for(;e.parentRoute;)e=e.parentRoute,t.push(e);return t.reverse(),t}function he(e){let t=Array(e.depth+1);do t[e.depth]=e,e=e.parent;while(e);return t}function ge(e,t,n,r){if(e===`/`&&n.index)return{node:n.index,skipped:0};let i=!p(t),a=i&&e!==`/`,o=t.length-+!!i,s=[{node:n,index:1,skipped:0,depth:1,statics:0,dynamics:0,optionals:0}],c=null,l=null;for(;s.length;){let n=s.pop(),{node:i,index:u,skipped:d,depth:f,statics:p,dynamics:m,optionals:h}=n,{extract:g,rawParams:_}=n;if(i.kind===2&&i.route&&!q(l,n))continue;if(i.parse){if(!ve(e,t,n))continue;_=n.rawParams,g=n.extract}r&&i.route&&i.kind!==F&&q(c,n)&&(c=n);let v=u===o;if(v&&(i.route&&(!a||i.kind===F||i.kind===2)&&q(l,n)&&(l=n),!i.optional&&!i.wildcard&&!i.index&&!i.pathless))continue;let y=v?void 0:t[u],b;if(v&&i.index){let n={node:i.index,index:u,skipped:d,depth:f+1,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_},r=!0;if(i.index.parse&&(ve(e,t,n)||(r=!1)),r){if(!m&&!h&&!d&&_e(p,o))return n;q(l,n)&&(l=n)}}if(i.wildcard)for(let e=i.wildcard.length-1;e>=0;e--){let n=i.wildcard[e],{prefix:r,suffix:a}=n;if(!(r&&(v||!(n.caseSensitive?y:b??=y.toLowerCase()).startsWith(r)))){if(a){if(v)continue;let e=t.slice(u).join(`/`).slice(-a.length);if((n.caseSensitive?e:e.toLowerCase())!==a)continue}s.push({node:n,index:o,skipped:d,depth:f+1,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_})}}if(i.optional){let e=d|1<<f,t=f+1;for(let n=i.optional.length-1;n>=0;n--){let r=i.optional[n];s.push({node:r,index:u,skipped:e,depth:t,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_})}if(!v)for(let e=i.optional.length-1;e>=0;e--){let n=i.optional[e],{prefix:r,suffix:a}=n;if(r||a){let e=n.caseSensitive?y:b??=y.toLowerCase();if(r&&!e.startsWith(r)||a&&!e.endsWith(a))continue}s.push({node:n,index:u+1,skipped:d,depth:t,statics:p,dynamics:m,optionals:h+K(o,u),extract:g,rawParams:_})}}if(!v&&i.dynamic&&y)for(let e=i.dynamic.length-1;e>=0;e--){let t=i.dynamic[e],{prefix:n,suffix:r}=t;if(n||r){let e=t.caseSensitive?y:b??=y.toLowerCase();if(n&&!e.startsWith(n)||r&&!e.endsWith(r))continue}s.push({node:t,index:u+1,skipped:d,depth:f+1,statics:p,dynamics:m+K(o,u),optionals:h,extract:g,rawParams:_})}if(!v&&i.staticInsensitive){let e=i.staticInsensitive.get(b??=y.toLowerCase());e&&s.push({node:e,index:u+1,skipped:d,depth:f+1,statics:p+K(o,u),dynamics:m,optionals:h,extract:g,rawParams:_})}if(!v&&i.static){let e=i.static.get(y);e&&s.push({node:e,index:u+1,skipped:d,depth:f+1,statics:p+K(o,u),dynamics:m,optionals:h,extract:g,rawParams:_})}if(i.pathless){let e=f+1;for(let t=i.pathless.length-1;t>=0;t--){let n=i.pathless[t];s.push({node:n,index:u,skipped:d,depth:e,statics:p,dynamics:m,optionals:h,extract:g,rawParams:_})}}}if(l)return l;if(r&&c){let n=c.index;for(let e=0;e<c.index;e++)n+=t[e].length;let r=n===e.length?`/`:e.slice(n);return c.rawParams??=Object.create(null),c.rawParams[`**`]=decodeURIComponent(r),c}return null}function K(e,t){return 2**(e-t-1)}function _e(e,t){return e===2**(t-1)-1}function ve(e,t,n){let r,i;try{[r,i]=G(e,t,n)}catch{return null}if(n.rawParams=r,n.extract=i,!n.node.parse)return!0;try{if(n.node.parse(r)===!1)return null}catch{}return!0}function q(e,t){return!e||t.statics>e.statics||t.statics===e.statics&&(t.dynamics>e.dynamics||t.dynamics===e.dynamics&&(t.optionals>e.optionals||t.optionals===e.optionals&&((t.node.kind===F)>(e.node.kind===F)||t.node.kind===F==(e.node.kind===F)&&t.depth>e.depth)))}function ye(e){return be(e.filter(e=>e!==void 0).join(`/`))}function be(e){return e.replace(/\/{2,}/g,`/`)}function xe(e){return e===`/`?e:e.replace(/^\/{1,}/,``)}function Se(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/{1,}$/,``):e}function Ce(e){return Se(xe(e))}function J(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function we(e,t,n){return J(e,n)===J(t,n)}function Te({base:e,to:t,trailingSlash:n=`never`,cache:r}){let i=t.startsWith(`/`),a=!i&&t===`.`,o;if(r){o=i?t:a?e:e+`\0`+t;let n=r.get(o);if(n)return n}let s;if(a)s=e.split(`/`);else if(i)s=t.split(`/`);else{for(s=e.split(`/`);s.length>1&&p(s)===``;)s.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&s.push(r):s=[r]:r===`..`?s.pop():r===`.`||s.push(r)}}s.length>1&&(p(s)===``?n===`never`&&s.pop():n===`always`&&s.push(``));let c=be(s.join(`/`))||`/`;return o&&r&&r.set(o,c),c}function Ee(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=Array.from(t.keys()).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),r=new RegExp(n,`g`);return e=>e.replace(r,e=>t.get(e)??e)}function De(e,t,n){let r=t[e];return typeof r==`string`?e===`_splat`?/^[a-zA-Z0-9\-._~!/]*$/.test(r)?r:r.split(`/`).map(e=>ke(e,n)).join(`/`):ke(r,n):r}function Oe({path:e,params:t,decoder:n,...r}){let i=!1,a=Object.create(null);if(!e||e===`/`)return{interpolatedPath:`/`,usedParams:a,isMissingParams:i};if(!e.includes(`$`))return{interpolatedPath:e,usedParams:a,isMissingParams:i};let o=e.length,s=0,c,l=``;for(;s<o;){let r=s;c=L(e,r,c);let o=c[5];if(s=o+1,r===o)continue;let u=c[0];if(u===0){l+=`/`+e.substring(r,o);continue}if(u===2){let s=t._splat;a._splat=s,a[`*`]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o);if(!s){i=!0,(u||d)&&(l+=`/`+u+d);continue}let f=De(`_splat`,t,n);l+=`/`+u+f+d;continue}if(u===1){let s=e.substring(c[2],c[3]);!i&&!(s in t)&&(i=!0),a[s]=t[s];let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=De(s,t,n)??`undefined`;l+=`/`+u+f+d;continue}if(u===3){let i=e.substring(c[2],c[3]),s=t[i];if(s==null)continue;a[i]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=De(i,t,n)??``;l+=`/`+u+f+d;continue}}return e.endsWith(`/`)&&(l+=`/`),{usedParams:a,interpolatedPath:l||`/`,isMissingParams:i}}function ke(e,t){let n=encodeURIComponent(e);return t?.(n)??n}var Ae=`Error preloading route! ☝️`,Y=c(u(),1),je=Y.use,Me=typeof window<`u`?Y.useLayoutEffect:Y.useEffect;function Ne(e){let t=Y.useRef({value:e,prev:null}),n=t.current.value;return e!==n&&(t.current={value:e,prev:n}),t.current.prev}function Pe(e,t,n={},r={}){Y.useEffect(()=>{if(!e.current||r.disabled||typeof IntersectionObserver!=`function`)return;let i=new IntersectionObserver(([e])=>{t(e)},n);return i.observe(e.current),()=>{i.disconnect()}},[t,n,r.disabled,e])}function Fe(e){let t=Y.useRef(null);return Y.useImperativeHandle(e,()=>t.current,[]),t}var Ie=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Le=o(((e,t)=>{t.exports=Ie()})),Re=Le();function ze({children:e,fallback:t=null}){return Be()?(0,Re.jsx)(Y.Fragment,{children:e}):(0,Re.jsx)(Y.Fragment,{children:t})}function Be(){return Y.useSyncExternalStore(Ve,()=>!0,()=>!1)}function Ve(){return()=>{}}var He=Y.createContext(null);function X(e){return Y.useContext(He)}var Ue=Y.createContext(void 0),We=Y.createContext(void 0),Ge=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useState,a=t.useEffect,o=t.useLayoutEffect,s=t.useDebugValue;function c(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),c=r[0].inst,u=r[1];return o(function(){c.value=n,c.getSnapshot=t,l(c)&&u({inst:c})},[e,n,t]),a(function(){return l(c)&&u({inst:c}),e(function(){l(c)&&u({inst:c})})},[e]),s(n),n}function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!r(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:c;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),Ke=o(((e,t)=>{t.exports=Ge()})),qe=o((e=>{var t=u(),n=Ke();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useSyncExternalStore,o=t.useRef,s=t.useEffect,c=t.useMemo,l=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=o(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=c(function(){function e(e){if(!a){if(a=!0,o=e,e=r(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return s=t}return s=e}if(t=s,i(o,e))return t;var n=r(e);return u!==void 0&&u(t,n)?(o=e,t):(o=e,s=n)}var a=!1,o,s,c=n===void 0?null:n;return[function(){return e(t())},c===null?void 0:function(){return e(c())}]},[t,n,r,u]);var p=a(e,d[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}})),Je=o(((e,t)=>{t.exports=qe()}))();function Ye(e,t){return e===t}function Xe(e,t,n=Ye){let r=(0,Y.useCallback)(t=>{if(!e)return()=>{};let{unsubscribe:n}=e.subscribe(t);return n},[e]),i=(0,Y.useCallback)(()=>e?.get(),[e]);return(0,Je.useSyncExternalStoreWithSelector)(r,i,i,t,n)}var Ze={get(){},subscribe(){return{unsubscribe(){}}}};function Qe(e,t){let n=Y.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=x(n.current,i):i}}function $e(e){let t=X(),n=Y.useContext(e.from?We:Ue),r=e.from?t.stores.getRouteMatchStore(e.from):t.stores.matchStores.get(n),i=Qe(e,t),a=Xe(r??Ze,e=>e?i(e):Ze);if(a!==Ze)return a;(e.shouldThrow??!0)&&N()}function et(e){let t=X();return Y.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}var tt=f();function nt(e,t){let n=X(),r=Fe(t),{activeProps:i,inactiveProps:a,activeOptions:o,to:s,preload:c,preloadDelay:l,preloadIntentProximity:u,hashScrollIntoView:d,replace:f,startTransition:p,resetScroll:m,viewTransition:g,children:_,target:v,disabled:y,style:b,className:x,onClick:S,onBlur:C,onFocus:w,onMouseEnter:T,onMouseLeave:D,onTouchStart:O,ignoreBlocker:ee,params:te,search:k,hash:ne,state:A,mask:re,reloadDocument:M,unsafeRelative:ie,from:ae,_fromLocation:oe,...se}=e,N=Be(),P=Y.useMemo(()=>e,[n,e.from,e._fromLocation,e.hash,e.to,e.search,e.params,e.state,e.mask,e.unsafeRelative]),F=Xe(n.stores.location,e=>e,(e,t)=>e.href===t.href),I=Y.useMemo(()=>{let e={_fromLocation:F,...P};return n.buildLocation(e)},[n,F,P]),ce=I.maskedLocation?I.maskedLocation.publicHref:I.publicHref,L=I.maskedLocation?I.maskedLocation.external:I.external,R=Y.useMemo(()=>lt(ce,L,n.history,y),[y,L,ce,n.history]),z=Y.useMemo(()=>{if(R?.external)return j(R.href,n.protocolAllowlist)?void 0:R.href;if(!ut(s)&&typeof s==`string`&&s.indexOf(`:`)!==-1)try{return new URL(s),j(s,n.protocolAllowlist)?void 0:s}catch{}},[s,R,n.protocolAllowlist]),B=Y.useMemo(()=>{if(z)return!1;if(o?.exact){if(!we(F.pathname,I.pathname,n.basepath))return!1}else{let e=J(F.pathname,n.basepath),t=J(I.pathname,n.basepath);if(!(e.startsWith(t)&&(e.length===t.length||e[t.length]===`/`)))return!1}return(o?.includeSearch??!0)&&!E(F.search,I.search,{partial:!o?.exact,ignoreUndefined:!o?.explicitUndefined})?!1:!o?.includeHash||N&&F.hash===I.hash},[o?.exact,o?.explicitUndefined,o?.includeHash,o?.includeSearch,F,z,N,I.hash,I.pathname,I.search,n.basepath]),V=B?h(i,{})??it:rt,H=B?rt:h(a,{})??rt,le=[x,V.className,H.className].filter(Boolean).join(` `),ue=(b||V.style||H.style)&&{...b,...V.style,...H.style},[de,fe]=Y.useState(!1),pe=Y.useRef(!1),U=e.reloadDocument||z?!1:c??n.options.defaultPreload,W=l??n.options.defaultPreloadDelay??0,G=Y.useCallback(()=>{n.preloadRoute({...P,_builtLocation:I}).catch(e=>{console.warn(e),console.warn(Ae)})},[n,P,I]);Pe(r,Y.useCallback(e=>{e?.isIntersecting&&G()},[G]),ct,{disabled:!!y||U!==`viewport`}),Y.useEffect(()=>{pe.current||!y&&U===`render`&&(G(),pe.current=!0)},[y,G,U]);let me=e=>{let t=e.currentTarget.getAttribute(`target`),r=v===void 0?t:v;if(!y&&!ft(e)&&!e.defaultPrevented&&(!r||r===`_self`)&&e.button===0){e.preventDefault(),(0,tt.flushSync)(()=>{fe(!0)});let t=n.subscribe(`onResolved`,()=>{t(),fe(!1)});n.navigate({...P,replace:f,resetScroll:m,hashScrollIntoView:d,startTransition:p,viewTransition:g,ignoreBlocker:ee})}};if(z)return{...se,ref:r,href:z,..._&&{children:_},...v&&{target:v},...y&&{disabled:y},...b&&{style:b},...x&&{className:x},...S&&{onClick:S},...C&&{onBlur:C},...w&&{onFocus:w},...T&&{onMouseEnter:T},...D&&{onMouseLeave:D},...O&&{onTouchStart:O}};let he=e=>{if(y||U!==`intent`)return;if(!W){G();return}let t=e.currentTarget;if(Z.has(t))return;let n=setTimeout(()=>{Z.delete(t),G()},W);Z.set(t,n)},ge=e=>{y||U!==`intent`||G()},K=e=>{if(y||!U||!W)return;let t=e.currentTarget,n=Z.get(t);n&&(clearTimeout(n),Z.delete(t))};return{...se,...V,...H,href:R?.href,ref:r,onClick:Q([S,me]),onBlur:Q([C,K]),onFocus:Q([w,he]),onMouseEnter:Q([T,he]),onMouseLeave:Q([D,K]),onTouchStart:Q([O,ge]),disabled:!!y,target:v,...ue&&{style:ue},...le&&{className:le},...y&&at,...B&&ot,...N&&de&&st}}var rt={},it={className:`active`},at={role:`link`,"aria-disabled":!0},ot={"data-status":`active`,"aria-current":`page`},st={"data-transitioning":`transitioning`},Z=new WeakMap,ct={rootMargin:`100px`},Q=e=>t=>{for(let n of e)if(n){if(t.defaultPrevented)return;n(t)}};function lt(e,t,n,r){if(!r)return t?{href:e,external:!0}:{href:n.createHref(e)||`/`,external:!1}}function ut(e){if(typeof e!=`string`)return!1;let t=e.charCodeAt(0);return t===47?e.charCodeAt(1)!==47:t===46}var dt=Y.forwardRef((e,t)=>{let{_asChild:n,...r}=e,{type:i,...a}=nt(r,t),o=typeof r.children==`function`?r.children({isActive:a[`data-status`]===`active`}):r.children;if(!n){let{disabled:e,...t}=a;return Y.createElement(`a`,t,o)}return Y.createElement(n,a,o)});function ft(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var pt=[`pt-BR`,`en-US`,`es-ES`],mt=`pt-BR`;function ht(e){return typeof e==`string`&&pt.includes(e)}var gt={"pt-BR":{nav:{"brand.product":`i6 Builders Platform`,"brand.aria":`builders.infinity6.ai`,"search.placeholder":`Buscar na documentação...`,"search.aria":`Buscar na documentação`,"search.empty":`Nenhum resultado encontrado.`,"actions.console":`Console`,"actions.consoleOpen":`Abrir console`,"actions.github":`Abrir GitHub`,"actions.menuOpen":`Abrir navegação`,"actions.menuClose":`Fechar navegação`,"breadcrumb.docs":`Documentação`,"status.operational":`Todos os sistemas operacionais`,"sidebar.aria":`Documentação`,"groups.start":`COMECE AQUI`,"groups.build":`CONSTRUA`,"groups.engines":`MOTORES DE DECISÃO`,"groups.resources":`RECURSOS`,"items.gettingStarted":`Primeiros passos`,"items.auth":`Autenticação`,"items.sdkReference":`Referência do SDK`,"items.api":`API Reference`,"items.sdks":`SDKs`,"items.agents":`Agentes`,"items.webhooks":`Webhooks`,"items.previsio":`i6Previsio`,"items.recsys":`i6RecSys`,"items.elasticPrice":`i6ElasticPrice`,"items.guides":`Guias`,"items.examples":`Exemplos`,"items.help":`Ajuda`,"badges.new":`Novo`,"badges.soon":`Em breve`,"language.aria":`Selecionar idioma`,"language.listAria":`Idioma`},docs:{"meta.title":`builders.infinity6.ai — Documentação para builders`,"meta.description":`APIs, SDKs e ferramentas infinity6 para construir decisões inteligentes, confiáveis e auditáveis.`,"meta.ogDescription":`Explore a documentação técnica, APIs, SDKs e agentes da infinity6.`,"start.kicker":`COMECE A CONSTRUIR`,"start.heading":`Tudo o que você precisa`,"start.updated":`Atualizado em setembro de 2026`,"cards.gettingStarted.title":`Primeiros passos`,"cards.gettingStarted.description":`Faça sua primeira chamada à API em menos de cinco minutos.`,"cards.api.title":`API Reference`,"cards.api.description":`Explore endpoints, parâmetros e respostas da plataforma.`,"cards.agents.title":`Construa agentes`,"cards.agents.description":`Orquestre agentes confiáveis para decisões complexas.`,"example.kicker":`EXEMPLO RÁPIDO`,"example.heading":`Da ideia à primeira execução`,"example.lead":`Carregue o bundle do SDK, garanta a sessão e envie um arquivo com poucas linhas.`,"example.copy":`Copiar código`,"example.runtime":`Roda no navegador, carregado via tag script`,"example.code.loginComment":`Sem sessão: redireciona para o login`,"example.code.dataset":`seu-dataset`,"example.code.table":`sua-tabela`,"example.code.key":`sua-chave`,"example.code.value":`seu-valor`,"next.kicker":`PRÓXIMO PASSO`,"next.heading":`Pronto para construir?`,"next.lead":`Acesse o console e crie seu primeiro projeto.`,"toc.title":`NESTA PÁGINA`,"toc.start":`Comece a construir`,"toc.example":`Exemplo rápido`,"toc.next":`Próximo passo`,"feedback.question":`Esta página foi útil?`,"feedback.yes":`Sim`,"feedback.no":`Não`,"page.prev":`Anterior`,"page.next":`Próximo`,"page.minRead":`min de leitura`}},"en-US":{nav:{"brand.product":`i6 Builders Platform`,"brand.aria":`builders.infinity6.ai`,"search.placeholder":`Search the documentation...`,"search.aria":`Search the documentation`,"search.empty":`No results found.`,"actions.console":`Console`,"actions.consoleOpen":`Open console`,"actions.github":`Open GitHub`,"actions.menuOpen":`Open navigation`,"actions.menuClose":`Close navigation`,"breadcrumb.docs":`Documentation`,"status.operational":`All systems operational`,"sidebar.aria":`Documentation`,"groups.start":`START HERE`,"groups.build":`BUILD`,"groups.engines":`DECISION ENGINES`,"groups.resources":`RESOURCES`,"items.gettingStarted":`Getting started`,"items.auth":`Authentication`,"items.sdkReference":`SDK reference`,"items.api":`API Reference`,"items.sdks":`SDKs`,"items.agents":`Agents`,"items.webhooks":`Webhooks`,"items.previsio":`i6Previsio`,"items.recsys":`i6RecSys`,"items.elasticPrice":`i6ElasticPrice`,"items.guides":`Guides`,"items.examples":`Examples`,"items.help":`Help`,"badges.new":`New`,"badges.soon":`Coming soon`,"language.aria":`Select language`,"language.listAria":`Language`},docs:{"meta.title":`builders.infinity6.ai — Documentation for builders`,"meta.description":`infinity6 APIs, SDKs and tooling to build intelligent, reliable and auditable decisions.`,"meta.ogDescription":`Explore infinity6 technical documentation, APIs, SDKs and agents.`,"start.kicker":`START BUILDING`,"start.heading":`Everything you need`,"start.updated":`Updated September 2026`,"cards.gettingStarted.title":`Getting started`,"cards.gettingStarted.description":`Make your first API call in under five minutes.`,"cards.api.title":`API Reference`,"cards.api.description":`Explore the platform endpoints, parameters and responses.`,"cards.agents.title":`Build agents`,"cards.agents.description":`Orchestrate reliable agents for complex decisions.`,"example.kicker":`QUICK EXAMPLE`,"example.heading":`From idea to first run`,"example.lead":`Load the SDK bundle, ensure the session and upload a file in a few lines.`,"example.copy":`Copy code`,"example.runtime":`Runs in the browser, loaded via script tag`,"example.code.loginComment":`No session: redirects to login`,"example.code.dataset":`your-dataset`,"example.code.table":`your-table`,"example.code.key":`your-key`,"example.code.value":`your-value`,"next.kicker":`NEXT STEP`,"next.heading":`Ready to build?`,"next.lead":`Open the console and create your first project.`,"toc.title":`ON THIS PAGE`,"toc.start":`Start building`,"toc.example":`Quick example`,"toc.next":`Next step`,"feedback.question":`Was this page helpful?`,"feedback.yes":`Yes`,"feedback.no":`No`,"page.prev":`Previous`,"page.next":`Next`,"page.minRead":`min read`}},"es-ES":{nav:{"brand.product":`i6 Builders Platform`,"brand.aria":`builders.infinity6.ai`,"search.placeholder":`Buscar en la documentación...`,"search.aria":`Buscar en la documentación`,"search.empty":`No se encontraron resultados.`,"actions.console":`Consola`,"actions.consoleOpen":`Abrir consola`,"actions.github":`Abrir GitHub`,"actions.menuOpen":`Abrir navegación`,"actions.menuClose":`Cerrar navegación`,"breadcrumb.docs":`Documentación`,"status.operational":`Todos los sistemas operativos`,"sidebar.aria":`Documentación`,"groups.start":`EMPIEZA AQUÍ`,"groups.build":`CONSTRUYE`,"groups.engines":`MOTORES DE DECISIÓN`,"groups.resources":`RECURSOS`,"items.gettingStarted":`Primeros pasos`,"items.auth":`Autenticación`,"items.sdkReference":`Referencia del SDK`,"items.api":`API Reference`,"items.sdks":`SDKs`,"items.agents":`Agentes`,"items.webhooks":`Webhooks`,"items.previsio":`i6Previsio`,"items.recsys":`i6RecSys`,"items.elasticPrice":`i6ElasticPrice`,"items.guides":`Guías`,"items.examples":`Ejemplos`,"items.help":`Ayuda`,"badges.new":`Nuevo`,"badges.soon":`Próximamente`,"language.aria":`Seleccionar idioma`,"language.listAria":`Idioma`},docs:{"meta.title":`builders.infinity6.ai — Documentación para builders`,"meta.description":`APIs, SDKs y herramientas de infinity6 para construir decisiones inteligentes, confiables y auditables.`,"meta.ogDescription":`Explora la documentación técnica, las APIs, los SDKs y los agentes de infinity6.`,"start.kicker":`EMPIEZA A CONSTRUIR`,"start.heading":`Todo lo que necesitas`,"start.updated":`Actualizado en septiembre de 2026`,"cards.gettingStarted.title":`Primeros pasos`,"cards.gettingStarted.description":`Haz tu primera llamada a la API en menos de cinco minutos.`,"cards.api.title":`API Reference`,"cards.api.description":`Explora los endpoints, parámetros y respuestas de la plataforma.`,"cards.agents.title":`Construye agentes`,"cards.agents.description":`Orquesta agentes confiables para decisiones complejas.`,"example.kicker":`EJEMPLO RÁPIDO`,"example.heading":`De la idea a la primera ejecución`,"example.lead":`Carga el bundle del SDK, asegura la sesión y sube un archivo en pocas líneas.`,"example.copy":`Copiar código`,"example.runtime":`Se ejecuta en el navegador, cargado mediante etiqueta script`,"example.code.loginComment":`Sin sesión: redirige al login`,"example.code.dataset":`tu-dataset`,"example.code.table":`tu-tabla`,"example.code.key":`tu-clave`,"example.code.value":`tu-valor`,"next.kicker":`SIGUIENTE PASO`,"next.heading":`¿Listo para construir?`,"next.lead":`Entra en la consola y crea tu primer proyecto.`,"toc.title":`EN ESTA PÁGINA`,"toc.start":`Empieza a construir`,"toc.example":`Ejemplo rápido`,"toc.next":`Siguiente paso`,"feedback.question":`¿Te resultó útil esta página?`,"feedback.yes":`Sí`,"feedback.no":`No`,"page.prev":`Anterior`,"page.next":`Siguiente`,"page.minRead":`min de lectura`}}};function _t(e,t){return t?e.replace(/\{(\w+)\}/g,(e,n)=>{let r=t[n];return r===void 0?e:String(r)}):e}function vt(e){let t=e.indexOf(`.`);return t<=0?null:{namespace:e.slice(0,t),path:e.slice(t+1)}}function yt(e,t){let n=vt(t);if(!n)return;let r=gt[e]?.[n.namespace]?.[n.path];return typeof r==`string`?r:void 0}function bt(e,t,n){for(let r of[...e,mt]){let e=yt(r,t);if(e!==void 0)return _t(e,n)}return t}var xt=[`pt`,`en`,`es`],St=`https://builders.infinity6.ai`;function Ct(e){return typeof e==`string`&&xt.includes(e)}function wt(e){return e===`en`?`en-US`:e===`es`?`es-ES`:`pt-BR`}function Tt(e){return e.startsWith(`en`)?`en`:e.startsWith(`es`)?`es`:`pt`}function Et(e){let t=e.split(`/`).filter(Boolean)[0];return Ct(t)?wt(t):mt}function Dt(e,t){return e===`pt`?t||`/`:`/${e}${t}`}function Ot(e,t=St){let n=t.replace(/\/$/,``);return[...xt.map(t=>({rel:`alternate`,hrefLang:t,href:`${n}${Dt(t,e)}`})),{rel:`alternate`,hrefLang:`x-default`,href:`${n}${Dt(`pt`,e)}`}]}var kt={pages:[{locale:`en-US`,category:`ajuda`,slug:`solucao-de-problemas`,title:`Troubleshooting`,description:`Common symptoms when integrating the web SDK, with cause and verification steps for each.`,order:1,toc:!0,searchKeywords:[`erro`,`troubleshooting`,`Failed to fetch`,`CORS`,`cookie`,`file must be a single File`,`Get upload URL failed`,`Upload failed`,`Network error occurred during upload`,`I6Sdk is not defined`,`not valid JSON`,`Load failed`,`NetworkError when attempting to fetch resource`,`Unexpected end of JSON input`,`JSON.parse`,`JSON Parse error`,`error`],cta:null,html:`<p>This page gathers the most common symptoms when integrating the web SDK. The SDK messages are from the <code>latest</code> bundle verified on 09/28/2026 and may change across versions. Browser messages vary according to the browser. When the cause depends on platform configuration, the page indicates what to bring to infinity6.</p>
<h2 id="i6sdk-is-not-defined">I6Sdk is not defined</h2>
<p><strong>Symptom:</strong> the console shows <code>I6Sdk is not defined</code> or <code>window.I6Sdk is not a constructor</code>.</p>
<p><strong>Cause:</strong> the bundle had not loaded yet when your code executed, or failed to load.</p>
<p><strong>What to verify:</strong></p>
<ul>
<li>The bundle&#39;s <code>&lt;script src=&quot;...&quot;&gt;</code> is a classic script, without <code>async</code>, and appears before the <code>&lt;script type=&quot;module&quot;&gt;</code>.</li>
<li>In the Network tab, the bundle request finished with status 200.</li>
<li>If your page defines Content-Security-Policy, it allows the bundle URL in <code>script-src</code>.</li>
</ul>
<h2 id="failed-to-fetch">Failed to fetch</h2>
<p><strong>Symptom:</strong> <code>TypeError: Failed to fetch</code> (Chrome), <code>TypeError: NetworkError when attempting to fetch resource.</code> (Firefox) or <code>TypeError: Load failed</code> (Safari) when calling <code>requireUser()</code>, <code>user()</code> or <code>upload()</code>.</p>
<p><strong>Cause:</strong> the browser did not complete the request to the platform and provides no specific reason in the error. Common causes: your page origin is not allowed for CORS with credentials on the platform; no network connection; a browser extension blocking the request.</p>
<p><strong>What to verify:</strong></p>
<ul>
<li>In the console, look for a CORS message alongside the error.</li>
<li>In the Network tab, check if the call appears blocked or unanswered.</li>
<li>If it is CORS, ask infinity6 to allow the exact origin of your page, including <code>https://</code> and port if applicable. See <a href="/en/autenticacao/cookies-e-cors">Cookies and CORS</a>.</li>
</ul>
<h2 id="syntaxerror-is-not-valid-json">SyntaxError: is not valid JSON</h2>
<p><strong>Symptom:</strong> a <code>SyntaxError</code> when calling <code>user()</code> or <code>requireUser()</code>. In Chrome the message ends in <code>is not valid JSON</code> or is <code>Unexpected end of JSON input</code> (empty body); in Firefox it begins with <code>JSON.parse:</code>; in Safari it is <code>JSON Parse error</code>.</p>
<p><strong>Cause:</strong> <code>user()</code> reads the <code>api/auth/me</code> response as JSON, and the received response was not JSON. In this case <code>requireUser()</code> rejects the promise and does not reach the login redirect.</p>
<p><strong>What to verify:</strong> in the Network tab, open the <code>api/auth/me</code> request and inspect the status and response body. Bring both to infinity6.</p>
<h2 id="file-must-be-a-single-file">file must be a single File</h2>
<p><strong>Symptom:</strong> <code>Error: file must be a single File.</code> when calling <code>upload()</code>.</p>
<p><strong>Cause:</strong> the value of <code>file</code> is not a <code>File</code> object. Occurs when passing the <code>&lt;input&gt;</code> element, the <code>input.files</code> list, or <code>undefined</code> (no file selected).</p>
<p><strong>What to verify:</strong> pass <code>input.files[0]</code> and ensure it exists beforehand (<code>if (!file) return;</code>). See <a href="/en/referencia-sdk/ingest">ingest()</a>.</p>
<h2 id="get-upload-url-failed-with-status">Get upload URL failed with status</h2>
<p><strong>Symptom:</strong> <code>Error: Get upload URL failed with status</code> followed by a number.</p>
<p><strong>Cause:</strong> the step where the SDK requests the upload target from the platform received an error response. The number is the HTTP status returned by the platform.</p>
<p><strong>What to verify:</strong> in the Network tab, the POST call to <code>api/ingest/get-url/dataset/&lt;your-dataset&gt;</code>: the status, response body, and payload sent (<code>table</code> and <code>partitions</code>). Also verify whether the <code>dataset</code>, <code>table</code>, and <code>partitions</code> values match your environment.</p>
<h2 id="get-upload-url-returned-no-upload-url">Get upload URL returned no upload URL</h2>
<p><strong>Symptom:</strong> <code>Error: Get upload URL returned no upload URL.</code></p>
<p><strong>Cause:</strong> the platform responded with success, but the response did not contain the expected upload target.</p>
<p><strong>What to verify:</strong> in the Network tab, the response body of that same request. Bring it to infinity6.</p>
<h2 id="upload-failed-with-status">Upload failed with status</h2>
<p><strong>Symptom:</strong> <code>Error: Upload failed with status</code> followed by a number.</p>
<p><strong>Cause:</strong> uploading the file to the signed URL received an error response. This upload goes directly to the signed URL returned by the platform, bypassing the platform API and carrying no session cookie.</p>
<p><strong>What to verify:</strong> in the Network tab, the PUT request: status and response body. Note the status, timestamp, and dataset name.</p>
<h2 id="network-error-occurred-during-upload">Network error occurred during upload</h2>
<p><strong>Symptom:</strong> <code>Error: Network error occurred during upload.</code></p>
<p><strong>Cause:</strong> the file upload did not complete. The browser triggers this error when the PUT request fails to complete, including connection drops and browser CORS blocking at the upload destination.</p>
<p><strong>What to verify:</strong> in the console, a CORS message; in the Network tab, the blocked or canceled PUT; the connection. If it is CORS at the destination, bring your page origin and the exact console message to infinity6.</p>
<h2 id="the-page-loops-back-to-login">The page loops back to login</h2>
<p><strong>Symptom:</strong> after logging in, the page redirects to login again, or <code>user()</code> does not return the profile.</p>
<p><strong>Cause:</strong> the session cookie is not being stored or sent. The platform cookie is <code>SameSite=None; Secure</code>. Causes to verify:</p>
<ul>
<li>Your page is served over HTTP. The cookie only travels over HTTPS.</li>
<li>The browser blocks or partitions third-party cookies. In general, your page and the platform belong to different sites, so the session cookie is treated as third-party. Safari blocks them by default; Firefox isolates these cookies per site by default; in Chrome it depends on user settings.</li>
<li>The origin is not allowed for CORS with credentials (in this case the error is usually Failed to fetch, described above).</li>
</ul>
<p><strong>What to verify:</strong> ensure the page is on HTTPS; repeat the test in another browser or profile without third-party cookie blocking; in the Application tab (Cookies), check if the platform cookie is present.</p>
<p>Didn&#39;t find your case? Gather the status and response body from the Network tab, the console message, and the error timestamp.</p>
`,headings:[{id:`i6sdk-is-not-defined`,text:`I6Sdk is not defined`,level:2},{id:`failed-to-fetch`,text:`Failed to fetch`,level:2},{id:`syntaxerror-is-not-valid-json`,text:`SyntaxError: is not valid JSON`,level:2},{id:`file-must-be-a-single-file`,text:`file must be a single File`,level:2},{id:`get-upload-url-failed-with-status`,text:`Get upload URL failed with status`,level:2},{id:`get-upload-url-returned-no-upload-url`,text:`Get upload URL returned no upload URL`,level:2},{id:`upload-failed-with-status`,text:`Upload failed with status`,level:2},{id:`network-error-occurred-during-upload`,text:`Network error occurred during upload`,level:2},{id:`the-page-loops-back-to-login`,text:`The page loops back to login`,level:2}],readingMinutes:4},{locale:`es-ES`,category:`ajuda`,slug:`solucao-de-problemas`,title:`Solución de problemas`,description:`Síntomas comunes al integrar el SDK web, con la causa y qué verificar en cada uno.`,order:1,toc:!0,searchKeywords:[`erro`,`troubleshooting`,`Failed to fetch`,`CORS`,`cookie`,`file must be a single File`,`Get upload URL failed`,`Upload failed`,`Network error occurred during upload`,`I6Sdk is not defined`,`not valid JSON`,`Load failed`,`NetworkError when attempting to fetch resource`,`Unexpected end of JSON input`,`JSON.parse`,`JSON Parse error`,`error`,`solución de problemas`],cta:null,html:`<p>Esta página reúne los síntomas más comunes al integrar el SDK web. Los mensajes del SDK son los del bundle <code>latest</code> verificado el 28/09/2026 y pueden cambiar entre versiones. Los mensajes del navegador varían según el navegador. Cuando la causa depende de la configuración de la plataforma, la página indica qué llevar a infinity6.</p>
<h2 id="i6sdk-is-not-defined">I6Sdk is not defined</h2>
<p><strong>Síntoma:</strong> la consola muestra <code>I6Sdk is not defined</code> o <code>window.I6Sdk is not a constructor</code>.</p>
<p><strong>Causa:</strong> el bundle todavía no había cargado cuando su código se ejecutó, o no llegó a cargar.</p>
<p><strong>Qué verificar:</strong></p>
<ul>
<li>El <code>&lt;script src=&quot;...&quot;&gt;</code> del bundle es un script clásico, sin <code>async</code>, y viene antes del <code>&lt;script type=&quot;module&quot;&gt;</code>.</li>
<li>En la pestaña Network, la petición del bundle terminó con estado 200.</li>
<li>Si su página define Content-Security-Policy, permite la dirección del bundle en <code>script-src</code>.</li>
</ul>
<h2 id="failed-to-fetch">Failed to fetch</h2>
<p><strong>Síntoma:</strong> <code>TypeError: Failed to fetch</code> (Chrome), <code>TypeError: NetworkError when attempting to fetch resource.</code> (Firefox) o <code>TypeError: Load failed</code> (Safari) al llamar a <code>requireUser()</code>, <code>user()</code> o <code>upload()</code>.</p>
<p><strong>Causa:</strong> el navegador no completó la petición a la plataforma y no informa el motivo en el error. Causas comunes: el origen de su página no está habilitado para CORS con credenciales en la plataforma; falta de conexión; extensión del navegador bloqueando la petición.</p>
<p><strong>Qué verificar:</strong></p>
<ul>
<li>En la consola, busque un mensaje sobre CORS junto al error.</li>
<li>En la pestaña Network, compruebe si la llamada aparece bloqueada o sin respuesta.</li>
<li>Si es CORS, pida a infinity6 la habilitación del origen exacto de su página, con <code>https://</code> y puerto, si corresponde. Consulte <a href="/es/autenticacao/cookies-e-cors">Cookies y CORS</a>.</li>
</ul>
<h2 id="syntaxerror-is-not-valid-json">SyntaxError: is not valid JSON</h2>
<p><strong>Síntoma:</strong> un <code>SyntaxError</code> al llamar a <code>user()</code> o <code>requireUser()</code>. En Chrome el mensaje termina en <code>is not valid JSON</code> o es <code>Unexpected end of JSON input</code> (cuerpo vacío); en Firefox comienza con <code>JSON.parse:</code>; en Safari es <code>JSON Parse error</code>.</p>
<p><strong>Causa:</strong> <code>user()</code> lee la respuesta de <code>api/auth/me</code> como JSON, y la respuesta recibida no era JSON. En este caso <code>requireUser()</code> rechaza la promesa y no llega a redirigir al login.</p>
<p><strong>Qué verificar:</strong> en la pestaña Network, abra la llamada <code>api/auth/me</code> y revise el estado y el cuerpo de la respuesta. Lleve ambos a infinity6.</p>
<h2 id="file-must-be-a-single-file">file must be a single File</h2>
<p><strong>Síntoma:</strong> <code>Error: file must be a single File.</code> al llamar a <code>upload()</code>.</p>
<p><strong>Causa:</strong> el valor de <code>file</code> no es un objeto <code>File</code>. Ocurre al pasar el elemento <code>&lt;input&gt;</code>, la lista <code>input.files</code> o <code>undefined</code> (ningún archivo seleccionado).</p>
<p><strong>Qué verificar:</strong> pase <code>input.files[0]</code> y compruebe que exista antes (<code>if (!file) return;</code>). Consulte <a href="/es/referencia-sdk/ingest">ingest()</a>.</p>
<h2 id="get-upload-url-failed-with-status">Get upload URL failed with status</h2>
<p><strong>Síntoma:</strong> <code>Error: Get upload URL failed with status</code> seguido de un número.</p>
<p><strong>Causa:</strong> el paso en que el SDK solicita a la plataforma la dirección de subida recibió una respuesta de error. El número es el estado HTTP devuelto por la plataforma.</p>
<p><strong>Qué verificar:</strong> en la pestaña Network, la llamada POST a <code>api/ingest/get-url/dataset/&lt;tu-dataset&gt;</code>: el estado, el cuerpo de la respuesta y el cuerpo enviado (<code>table</code> y <code>partitions</code>). Compruebe también si los valores de <code>dataset</code>, <code>table</code> y <code>partitions</code> coinciden con los de su entorno.</p>
<h2 id="get-upload-url-returned-no-upload-url">Get upload URL returned no upload URL</h2>
<p><strong>Síntoma:</strong> <code>Error: Get upload URL returned no upload URL.</code></p>
<p><strong>Causa:</strong> la plataforma respondió con éxito, pero la respuesta no incluyó la dirección de subida esperada.</p>
<p><strong>Qué verificar:</strong> en la pestaña Network, el cuerpo de la respuesta de la misma llamada. Llévelo a infinity6.</p>
<h2 id="upload-failed-with-status">Upload failed with status</h2>
<p><strong>Síntoma:</strong> <code>Error: Upload failed with status</code> seguido de un número.</p>
<p><strong>Causa:</strong> la subida del archivo a la dirección firmada recibió una respuesta de error. Esta subida va directamente a la dirección firmada devuelta por la plataforma, sin pasar por la API de la plataforma y sin enviar la cookie de sesión.</p>
<p><strong>Qué verificar:</strong> en la pestaña Network, la petición PUT: el estado y el cuerpo de la respuesta. Guarde el estado, la hora y el nombre del dataset.</p>
<h2 id="network-error-occurred-during-upload">Network error occurred during upload</h2>
<p><strong>Síntoma:</strong> <code>Error: Network error occurred during upload.</code></p>
<p><strong>Causa:</strong> la subida del archivo no se completó. El navegador dispara este error cuando la petición PUT no se completa, lo que incluye pérdida de conexión y también bloqueo del navegador por CORS en el destino de la subida.</p>
<p><strong>Qué verificar:</strong> en la consola, un mensaje de CORS; en la pestaña Network, el PUT bloqueado o cancelado; la conexión. Si es CORS en el destino, lleve a infinity6 el origen de su página y el mensaje exacto de la consola.</p>
<h2 id="la-pagina-vuelve-al-login-en-bucle">La página vuelve al login en bucle</h2>
<p><strong>Síntoma:</strong> después de iniciar sesión, la página redirige al login nuevamente, o <code>user()</code> no devuelve el perfil.</p>
<p><strong>Causa:</strong> la cookie de sesión no se está guardando o enviando. La cookie de la plataforma es <code>SameSite=None; Secure</code>. Causas a verificar:</p>
<ul>
<li>Su página se sirve por HTTP. La cookie solo viaja por HTTPS.</li>
<li>El navegador bloquea o aísla cookies de terceros. En general, su página y la plataforma pertenecen a sitios diferentes, por lo que la cookie de sesión se trata como de terceros. Safari las bloquea por defecto; Firefox aísla esas cookies por sitio por defecto; en Chrome depende de la configuración del usuario.</li>
<li>El origen no está habilitado para CORS con credenciales (en este caso el error suele ser Failed to fetch, descrito arriba).</li>
</ul>
<p><strong>Qué verificar:</strong> compruebe si la página está en HTTPS; repita la prueba en otro navegador o perfil sin bloqueo de cookies de terceros; en la pestaña Application (Cookies), vea si aparece la cookie de la plataforma.</p>
<p>¿No encontró su caso? Reúna el estado y el cuerpo de la respuesta de la pestaña Network, el mensaje de la consola y la hora del error.</p>
`,headings:[{id:`i6sdk-is-not-defined`,text:`I6Sdk is not defined`,level:2},{id:`failed-to-fetch`,text:`Failed to fetch`,level:2},{id:`syntaxerror-is-not-valid-json`,text:`SyntaxError: is not valid JSON`,level:2},{id:`file-must-be-a-single-file`,text:`file must be a single File`,level:2},{id:`get-upload-url-failed-with-status`,text:`Get upload URL failed with status`,level:2},{id:`get-upload-url-returned-no-upload-url`,text:`Get upload URL returned no upload URL`,level:2},{id:`upload-failed-with-status`,text:`Upload failed with status`,level:2},{id:`network-error-occurred-during-upload`,text:`Network error occurred during upload`,level:2},{id:`la-pagina-vuelve-al-login-en-bucle`,text:`La página vuelve al login en bucle`,level:2}],readingMinutes:5},{locale:`pt-BR`,category:`ajuda`,slug:`solucao-de-problemas`,title:`Solução de problemas`,description:`Sintomas comuns ao integrar o SDK web, com a causa e o que verificar em cada um.`,order:1,toc:!0,searchKeywords:[`erro`,`troubleshooting`,`Failed to fetch`,`CORS`,`cookie`,`file must be a single File`,`Get upload URL failed`,`Upload failed`,`Network error occurred during upload`,`I6Sdk is not defined`,`not valid JSON`,`Load failed`,`NetworkError when attempting to fetch resource`,`Unexpected end of JSON input`,`JSON.parse`,`JSON Parse error`],cta:null,html:`<p>Esta página reúne os sintomas mais comuns ao integrar o SDK web. As mensagens do SDK são as do bundle <code>latest</code> verificado em 28/09/2026 e podem mudar entre versões. As mensagens do navegador variam conforme o navegador. Quando a causa depende de configuração da plataforma, a página indica o que levar à infinity6.</p>
<h2 id="i6sdk-is-not-defined">I6Sdk is not defined</h2>
<p><strong>Sintoma:</strong> o console mostra <code>I6Sdk is not defined</code> ou <code>window.I6Sdk is not a constructor</code>.</p>
<p><strong>Causa:</strong> o bundle ainda não tinha carregado quando o seu código rodou, ou não chegou a carregar.</p>
<p><strong>O que verificar:</strong></p>
<ul>
<li>O <code>&lt;script src=&quot;...&quot;&gt;</code> do bundle é um script clássico, sem <code>async</code>, e vem antes do <code>&lt;script type=&quot;module&quot;&gt;</code>.</li>
<li>Na aba Network, a requisição do bundle terminou com status 200.</li>
<li>Se a sua página define Content-Security-Policy, ela permite o endereço do bundle em <code>script-src</code>.</li>
</ul>
<h2 id="failed-to-fetch">Failed to fetch</h2>
<p><strong>Sintoma:</strong> <code>TypeError: Failed to fetch</code> (Chrome), <code>TypeError: NetworkError when attempting to fetch resource.</code> (Firefox) ou <code>TypeError: Load failed</code> (Safari) ao chamar <code>requireUser()</code>, <code>user()</code> ou <code>upload()</code>.</p>
<p><strong>Causa:</strong> o navegador não completou a requisição à plataforma e não informa o motivo no erro. Causas comuns: a origem da sua página não está liberada para CORS com credenciais na plataforma; falta de conexão; extensão do navegador bloqueando a requisição.</p>
<p><strong>O que verificar:</strong></p>
<ul>
<li>No console, procure uma mensagem sobre CORS junto do erro.</li>
<li>Na aba Network, veja se a chamada aparece bloqueada ou sem resposta.</li>
<li>Se for CORS, peça à infinity6 a liberação da origem exata da sua página, com <code>https://</code> e porta, se houver. Veja <a href="/autenticacao/cookies-e-cors">Cookies e CORS</a>.</li>
</ul>
<h2 id="syntaxerror-is-not-valid-json">SyntaxError: is not valid JSON</h2>
<p><strong>Sintoma:</strong> um <code>SyntaxError</code> ao chamar <code>user()</code> ou <code>requireUser()</code>. No Chrome a mensagem termina em <code>is not valid JSON</code> ou é <code>Unexpected end of JSON input</code> (corpo vazio); no Firefox começa com <code>JSON.parse:</code>; no Safari é <code>JSON Parse error</code>.</p>
<p><strong>Causa:</strong> <code>user()</code> lê a resposta de <code>api/auth/me</code> como JSON, e a resposta recebida não era JSON. Nesse caso <code>requireUser()</code> rejeita a promessa e não chega a redirecionar ao login.</p>
<p><strong>O que verificar:</strong> na aba Network, abra a chamada <code>api/auth/me</code> e veja o status e o corpo da resposta. Leve esses dois dados à infinity6.</p>
<h2 id="file-must-be-a-single-file">file must be a single File</h2>
<p><strong>Sintoma:</strong> <code>Error: file must be a single File.</code> ao chamar <code>upload()</code>.</p>
<p><strong>Causa:</strong> o valor de <code>file</code> não é um objeto <code>File</code>. Acontece ao passar o elemento <code>&lt;input&gt;</code>, a lista <code>input.files</code> ou <code>undefined</code> (nenhum arquivo escolhido).</p>
<p><strong>O que verificar:</strong> passe <code>input.files[0]</code> e confira que ele existe antes (<code>if (!file) return;</code>). Veja <a href="/referencia-sdk/ingest">ingest()</a>.</p>
<h2 id="get-upload-url-failed-with-status">Get upload URL failed with status</h2>
<p><strong>Sintoma:</strong> <code>Error: Get upload URL failed with status</code> seguido de um número.</p>
<p><strong>Causa:</strong> o passo em que o SDK pede à plataforma o endereço de envio recebeu uma resposta de erro. O número é o status HTTP devolvido pela plataforma.</p>
<p><strong>O que verificar:</strong> na aba Network, a chamada POST para <code>api/ingest/get-url/dataset/&lt;seu-dataset&gt;</code>: o status, o corpo da resposta e o corpo enviado (<code>table</code> e <code>partitions</code>). Confira também se os valores de <code>dataset</code>, <code>table</code> e <code>partitions</code> são os do seu ambiente.</p>
<h2 id="get-upload-url-returned-no-upload-url">Get upload URL returned no upload URL</h2>
<p><strong>Sintoma:</strong> <code>Error: Get upload URL returned no upload URL.</code></p>
<p><strong>Causa:</strong> a plataforma respondeu com sucesso, mas a resposta não trouxe o endereço de envio esperado.</p>
<p><strong>O que verificar:</strong> na aba Network, o corpo da resposta da mesma chamada. Leve-o à infinity6.</p>
<h2 id="upload-failed-with-status">Upload failed with status</h2>
<p><strong>Sintoma:</strong> <code>Error: Upload failed with status</code> seguido de um número.</p>
<p><strong>Causa:</strong> o envio do arquivo ao endereço assinado recebeu uma resposta de erro. Esse envio vai direto ao endereço assinado devolvido pela plataforma, sem passar pela API da plataforma e sem levar o cookie de sessão.</p>
<p><strong>O que verificar:</strong> na aba Network, a requisição PUT: o status e o corpo da resposta. Guarde o status, o horário e o nome do dataset.</p>
<h2 id="network-error-occurred-during-upload">Network error occurred during upload</h2>
<p><strong>Sintoma:</strong> <code>Error: Network error occurred during upload.</code></p>
<p><strong>Causa:</strong> o envio do arquivo não foi concluído. O navegador dispara esse erro quando a requisição PUT não completa, o que inclui queda de conexão e também bloqueio do navegador por CORS no destino do envio.</p>
<p><strong>O que verificar:</strong> no console, uma mensagem de CORS; na aba Network, o PUT bloqueado ou cancelado; a conexão. Se for CORS no destino, leve à infinity6 a origem da sua página e a mensagem exata do console.</p>
<h2 id="a-pagina-volta-ao-login-em-repeticao">A página volta ao login em repetição</h2>
<p><strong>Sintoma:</strong> depois de fazer login, a página redireciona ao login de novo, ou <code>user()</code> não devolve o perfil.</p>
<p><strong>Causa:</strong> o cookie de sessão não está sendo guardado ou enviado. O cookie da plataforma é <code>SameSite=None; Secure</code>. Causas a verificar:</p>
<ul>
<li>A sua página é servida em HTTP. O cookie só trafega em HTTPS.</li>
<li>O navegador bloqueia ou isola cookies de terceiros. Em geral, a sua página e a plataforma são de sites diferentes, então o cookie de sessão é tratado como de terceiros. O Safari bloqueia por padrão; o Firefox isola esses cookies por site por padrão; no Chrome depende da configuração do usuário.</li>
<li>A origem não está liberada para CORS com credenciais (nesse caso o erro costuma ser Failed to fetch, descrito acima).</li>
</ul>
<p><strong>O que verificar:</strong> se a página está em HTTPS; repita o teste em outro navegador ou perfil sem bloqueio de cookies de terceiros; na aba Application (Cookies), veja se o cookie da plataforma aparece.</p>
<p>Não encontrou o seu caso? Reúna o status e o corpo da resposta da aba Network, a mensagem do console e o horário do erro.</p>
`,headings:[{id:`i6sdk-is-not-defined`,text:`I6Sdk is not defined`,level:2},{id:`failed-to-fetch`,text:`Failed to fetch`,level:2},{id:`syntaxerror-is-not-valid-json`,text:`SyntaxError: is not valid JSON`,level:2},{id:`file-must-be-a-single-file`,text:`file must be a single File`,level:2},{id:`get-upload-url-failed-with-status`,text:`Get upload URL failed with status`,level:2},{id:`get-upload-url-returned-no-upload-url`,text:`Get upload URL returned no upload URL`,level:2},{id:`upload-failed-with-status`,text:`Upload failed with status`,level:2},{id:`network-error-occurred-during-upload`,text:`Network error occurred during upload`,level:2},{id:`a-pagina-volta-ao-login-em-repeticao`,text:`A página volta ao login em repetição`,level:2}],readingMinutes:5},{locale:`en-US`,category:`autenticacao`,slug:`visao-geral`,title:`Overview`,description:`Web SDK authentication through a cookie session set by the platform.`,order:1,toc:!0,searchKeywords:[`authentication`,`session`,`cookie`,`requireUser`,`login`],cta:{eyebrow:`Next step`,title:`Login flow`,description:`How the SDK sends the user to login.`,buttonLabel:`Continue`,buttonHref:`/en/autenticacao/fluxo-de-login`},html:`<p>In the web SDK there is no API key to configure. Authentication is a cookie
session set by the platform.</p>
<h2 id="how-the-sdk-sees-the-session">How the SDK sees the session</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
    <span class="hljs-comment">// from here on there is an active session</span>
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>requireUser()</code> returns the user profile when a session is active. Without a
session, the SDK sends the browser to the platform login.</p>
<h2 id="sending-credentials">Sending credentials</h2>
<p>SDK calls to the platform API use <code>credentials: &quot;include&quot;</code>, so the session
cookie travels with the request.</p>
<h2 id="what-does-not-exist-here">What does not exist here</h2>
<p>There is no API key, scope or authorization header to fill in the web SDK.</p>
`,headings:[{id:`how-the-sdk-sees-the-session`,text:`How the SDK sees the session`,level:2},{id:`sending-credentials`,text:`Sending credentials`,level:2},{id:`what-does-not-exist-here`,text:`What does not exist here`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`autenticacao`,slug:`visao-geral`,title:`Visión general`,description:`Autenticación del SDK web mediante sesión por cookie definida por la plataforma.`,order:1,toc:!0,searchKeywords:[`autenticación`,`sesión`,`cookie`,`requireUser`,`login`],cta:{eyebrow:`Siguiente paso`,title:`Flujo de login`,description:`Cómo el SDK envía al usuario al login.`,buttonLabel:`Continuar`,buttonHref:`/es/autenticacao/fluxo-de-login`},html:`<p>En el SDK web no hay clave de API que configurar. La autenticación es una
sesión por cookie definida por la plataforma.</p>
<h2 id="como-ve-el-sdk-la-sesion">Cómo ve el SDK la sesión</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
    <span class="hljs-comment">// a partir de aquí hay sesión activa</span>
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>requireUser()</code> devuelve el perfil del usuario cuando hay sesión activa. Sin
sesión, el SDK envía el navegador al login de la plataforma.</p>
<h2 id="envio-de-credenciales">Envío de credenciales</h2>
<p>Las llamadas del SDK a la API de la plataforma usan <code>credentials: &quot;include&quot;</code>,
para que la cookie de sesión acompañe la petición.</p>
<h2 id="lo-que-no-existe-aqui">Lo que no existe aquí</h2>
<p>No hay clave de API, alcances ni encabezado de autorización que completar en el
SDK web.</p>
`,headings:[{id:`como-ve-el-sdk-la-sesion`,text:`Cómo ve el SDK la sesión`,level:2},{id:`envio-de-credenciales`,text:`Envío de credenciales`,level:2},{id:`lo-que-no-existe-aqui`,text:`Lo que no existe aquí`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`autenticacao`,slug:`visao-geral`,title:`Visão geral`,description:`Autenticação do SDK web por sessão de cookie definida pela plataforma.`,order:1,toc:!0,searchKeywords:[`autenticação`,`sessão`,`cookie`,`requireUser`,`login`],cta:{eyebrow:`Próximo passo`,title:`Fluxo de login`,description:`Como o SDK encaminha o usuário ao login.`,buttonLabel:`Continuar`,buttonHref:`/autenticacao/fluxo-de-login`},html:`<p>No SDK web não há chave de API para configurar. A autenticação é uma sessão por
cookie definida pela plataforma.</p>
<h2 id="como-o-sdk-ve-a-sessao">Como o SDK vê a sessão</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
    <span class="hljs-comment">// a partir daqui há sessão ativa</span>
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>requireUser()</code> devolve o perfil do usuário quando há sessão ativa. Sem sessão,
o SDK encaminha o navegador ao login da plataforma.</p>
<h2 id="envio-de-credenciais">Envio de credenciais</h2>
<p>As chamadas do SDK à API da plataforma usam <code>credentials: &quot;include&quot;</code>, para que
o cookie de sessão acompanhe a requisição.</p>
<h2 id="o-que-nao-existe-aqui">O que não existe aqui</h2>
<p>Não há chave de API, escopos ou cabeçalho de autorização a preencher no SDK web.</p>
`,headings:[{id:`como-o-sdk-ve-a-sessao`,text:`Como o SDK vê a sessão`,level:2},{id:`envio-de-credenciais`,text:`Envio de credenciais`,level:2},{id:`o-que-nao-existe-aqui`,text:`O que não existe aqui`,level:2}],readingMinutes:1},{locale:`en-US`,category:`autenticacao`,slug:`fluxo-de-login`,title:`Login flow`,description:`How the SDK builds the login URL and redirects the browser.`,order:2,toc:!0,searchKeywords:[`login`,`backurl`,`redirect`,`session`],cta:{eyebrow:`Next step`,title:`Checking the session`,description:`Read the current user from the session.`,buttonLabel:`Continue`,buttonHref:`/en/autenticacao/verificando-sessao`},html:`<p>When there is no active session, the SDK sends the browser to the platform
login.</p>
<h2 id="the-url-built-by-the-sdk">The URL built by the SDK</h2>
<div class="doc-code"><span class="doc-code-lang">text</span><pre><code class="hljs">{baseUrl}/api/decsuite/auth/login?backurl=&lt;current url encoded&gt;</code></pre></div>
<p>The SDK reports the current page in <code>backurl</code> so the platform can use it on
return.</p>
<h2 id="declared-facts">Declared facts</h2>
<ul>
<li>The SDK only builds the login URL and redirects the browser. What the
platform does with <code>backurl</code> after login is defined by the platform.</li>
<li>When the page loads with an active session, <code>requireUser()</code> returns the user
profile.</li>
</ul>
`,headings:[{id:`the-url-built-by-the-sdk`,text:`The URL built by the SDK`,level:2},{id:`declared-facts`,text:`Declared facts`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`autenticacao`,slug:`fluxo-de-login`,title:`Flujo de login`,description:`Cómo el SDK construye la URL de login y redirige el navegador.`,order:2,toc:!0,searchKeywords:[`login`,`backurl`,`redirección`,`sesión`],cta:{eyebrow:`Siguiente paso`,title:`Verificando la sesión`,description:`Lee el usuario actual de la sesión.`,buttonLabel:`Continuar`,buttonHref:`/es/autenticacao/verificando-sessao`},html:`<p>Cuando no hay sesión activa, el SDK envía el navegador al login de la
plataforma.</p>
<h2 id="la-url-construida-por-el-sdk">La URL construida por el SDK</h2>
<div class="doc-code"><span class="doc-code-lang">text</span><pre><code class="hljs">{baseUrl}/api/decsuite/auth/login?backurl=&lt;url actual codificada&gt;</code></pre></div>
<p>El SDK informa la página actual en <code>backurl</code> para que la plataforma pueda
usarla en el retorno.</p>
<h2 id="hechos-declarados">Hechos declarados</h2>
<ul>
<li>El SDK solo construye la URL de login y redirige el navegador. Lo que la
plataforma hace con <code>backurl</code> después del login lo define ella.</li>
<li>Cuando la página se carga con sesión activa, <code>requireUser()</code> devuelve el
perfil del usuario.</li>
</ul>
`,headings:[{id:`la-url-construida-por-el-sdk`,text:`La URL construida por el SDK`,level:2},{id:`hechos-declarados`,text:`Hechos declarados`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`autenticacao`,slug:`fluxo-de-login`,title:`Fluxo de login`,description:`Como o SDK monta a URL de login e encaminha o navegador.`,order:2,toc:!0,searchKeywords:[`login`,`backurl`,`redirecionamento`,`sessão`],cta:{eyebrow:`Próximo passo`,title:`Verificando a sessão`,description:`Leia o usuário atual da sessão.`,buttonLabel:`Continuar`,buttonHref:`/autenticacao/verificando-sessao`},html:`<p>Quando não há sessão ativa, o SDK encaminha o navegador ao login da plataforma.</p>
<h2 id="a-url-montada-pelo-sdk">A URL montada pelo SDK</h2>
<div class="doc-code"><span class="doc-code-lang">text</span><pre><code class="hljs">{baseUrl}/api/decsuite/auth/login?backurl=&lt;url atual codificada&gt;</code></pre></div>
<p>O SDK informa a página atual em <code>backurl</code> para que a plataforma possa usá-la no
retorno.</p>
<h2 id="fatos-declarados">Fatos declarados</h2>
<ul>
<li>O SDK apenas monta a URL de login e redireciona o navegador. O que a
plataforma faz com <code>backurl</code> depois do login é definido por ela.</li>
<li>Quando a página é carregada com sessão ativa, <code>requireUser()</code> devolve o
perfil do usuário.</li>
</ul>
`,headings:[{id:`a-url-montada-pelo-sdk`,text:`A URL montada pelo SDK`,level:2},{id:`fatos-declarados`,text:`Fatos declarados`,level:2}],readingMinutes:1},{locale:`en-US`,category:`autenticacao`,slug:`verificando-sessao`,title:`Checking the session`,description:`Read the current user from the session with the web SDK.`,order:3,toc:!0,searchKeywords:[`session`,`user`,`auth/me`,`requireUser`],cta:{eyebrow:`Next step`,title:`Cookies and CORS`,description:`Requirements for the session to work across origins.`,buttonLabel:`Continue`,buttonHref:`/en/autenticacao/cookies-e-cors`},html:`<p>The SDK offers two ways to look at the session.</p>
<h2 id="querying-the-user">Querying the user</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
  <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>();
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(user);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>sdk.auth().user()</code> queries <code>api/auth/me</code> on the platform.</p>
<h2 id="requiring-the-session">Requiring the session</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
    <span class="hljs-comment">// from here on there is an active session</span>
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>requireUser()</code> sends the browser to login when there is no active session. Use
this form when the page loads, before any user action.</p>
<p>Full reference: <a href="/en/referencia-sdk/auth">auth()</a>.</p>
`,headings:[{id:`querying-the-user`,text:`Querying the user`,level:2},{id:`requiring-the-session`,text:`Requiring the session`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`autenticacao`,slug:`verificando-sessao`,title:`Verificando la sesión`,description:`Lee el usuario actual de la sesión con el SDK web.`,order:3,toc:!0,searchKeywords:[`sesión`,`usuario`,`auth/me`,`requireUser`],cta:{eyebrow:`Siguiente paso`,title:`Cookies y CORS`,description:`Requisitos para que la sesión funcione entre orígenes.`,buttonLabel:`Continuar`,buttonHref:`/es/autenticacao/cookies-e-cors`},html:`<p>El SDK ofrece dos formas de mirar la sesión.</p>
<h2 id="consultando-el-usuario">Consultando el usuario</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
  <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>();
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(user);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>sdk.auth().user()</code> consulta <code>api/auth/me</code> en la plataforma.</p>
<h2 id="exigiendo-la-sesion">Exigiendo la sesión</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
    <span class="hljs-comment">// a partir de aquí hay sesión activa</span>
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>requireUser()</code> envía el navegador al login cuando no hay sesión activa. Usa
esta forma al cargar la página, antes de cualquier acción del usuario.</p>
<p>Referencia completa: <a href="/es/referencia-sdk/auth">auth()</a>.</p>
`,headings:[{id:`consultando-el-usuario`,text:`Consultando el usuario`,level:2},{id:`exigiendo-la-sesion`,text:`Exigiendo la sesión`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`autenticacao`,slug:`verificando-sessao`,title:`Verificando a sessão`,description:`Leia o usuário atual da sessão com o SDK web.`,order:3,toc:!0,searchKeywords:[`sessão`,`usuário`,`auth/me`,`requireUser`,`user`],cta:{eyebrow:`Próximo passo`,title:`Cookies e CORS`,description:`Requisitos para a sessão funcionar entre origens.`,buttonLabel:`Continuar`,buttonHref:`/autenticacao/cookies-e-cors`},html:`<p>O SDK oferece duas formas de olhar a sessão.</p>
<h2 id="consultando-o-usuario">Consultando o usuário</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
  <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>();
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(user);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>sdk.auth().user()</code> consulta <code>api/auth/me</code> na plataforma.</p>
<h2 id="exigindo-a-sessao">Exigindo a sessão</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
    <span class="hljs-comment">// a partir daqui há sessão ativa</span>
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><code>requireUser()</code> encaminha o navegador ao login quando não há sessão ativa. Use
essa forma ao carregar a página, antes de qualquer ação do usuário.</p>
<p>Referência completa: <a href="/referencia-sdk/auth">auth()</a>.</p>
`,headings:[{id:`consultando-o-usuario`,text:`Consultando o usuário`,level:2},{id:`exigindo-a-sessao`,text:`Exigindo a sessão`,level:2}],readingMinutes:1},{locale:`en-US`,category:`autenticacao`,slug:`cookies-e-cors`,title:`Cookies and CORS`,description:`Cookie and CORS requirements for the session to work across origins.`,order:4,toc:!0,searchKeywords:[`cookie`,`cors`,`samesite`,`secure`,`credentials`],cta:null,html:`<p>The web SDK session depends on a cookie set by the platform and a CORS
configuration that accepts credentials.</p>
<h2 id="the-session-cookie">The session cookie</h2>
<p>The cookie is set by the platform with <code>SameSite=None; Secure</code>. That is why your
page must be served over HTTPS.</p>
<h2 id="sending-credentials">Sending credentials</h2>
<p>SDK calls to the platform API use <code>credentials: &quot;include&quot;</code>.</p>
<h2 id="cors">CORS</h2>
<p>The platform responds with <code>Access-Control-Allow-Credentials: true</code> for allowed
origins. Your origin must be among them.</p>
<h2 id="file-upload">File upload</h2>
<p>Sending the file to the signed address does not go through this credentials
configuration.</p>
`,headings:[{id:`the-session-cookie`,text:`The session cookie`,level:2},{id:`sending-credentials`,text:`Sending credentials`,level:2},{id:`cors`,text:`CORS`,level:2},{id:`file-upload`,text:`File upload`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`autenticacao`,slug:`cookies-e-cors`,title:`Cookies y CORS`,description:`Requisitos de cookie y CORS para que la sesión funcione entre orígenes.`,order:4,toc:!0,searchKeywords:[`cookie`,`cors`,`samesite`,`secure`,`credentials`],cta:null,html:`<p>La sesión del SDK web depende de una cookie definida por la plataforma y de una
configuración de CORS que acepte credenciales.</p>
<h2 id="la-cookie-de-sesion">La cookie de sesión</h2>
<p>La cookie la define la plataforma con <code>SameSite=None; Secure</code>. Por eso tu página
debe servirse por HTTPS.</p>
<h2 id="envio-de-credenciales">Envío de credenciales</h2>
<p>Las llamadas del SDK a la API de la plataforma usan <code>credentials: &quot;include&quot;</code>.</p>
<h2 id="cors">CORS</h2>
<p>La plataforma responde con <code>Access-Control-Allow-Credentials: true</code> para los
orígenes habilitados. Tu origen debe estar entre ellos.</p>
<h2 id="envio-del-archivo">Envío del archivo</h2>
<p>El envío del archivo a la dirección firmada no pasa por esta configuración de
credenciales.</p>
`,headings:[{id:`la-cookie-de-sesion`,text:`La cookie de sesión`,level:2},{id:`envio-de-credenciales`,text:`Envío de credenciales`,level:2},{id:`cors`,text:`CORS`,level:2},{id:`envio-del-archivo`,text:`Envío del archivo`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`autenticacao`,slug:`cookies-e-cors`,title:`Cookies e CORS`,description:`Requisitos de cookie e CORS para a sessão funcionar entre origens.`,order:4,toc:!0,searchKeywords:[`cookie`,`cors`,`samesite`,`secure`,`credentials`],cta:null,html:`<p>A sessão do SDK web depende de um cookie definido pela plataforma e de uma
configuração de CORS que aceite credenciais.</p>
<h2 id="o-cookie-de-sessao">O cookie de sessão</h2>
<p>O cookie é definido pela plataforma com <code>SameSite=None; Secure</code>. Por isso a sua
página precisa ser servida por HTTPS.</p>
<h2 id="envio-das-credenciais">Envio das credenciais</h2>
<p>As chamadas do SDK à API da plataforma usam <code>credentials: &quot;include&quot;</code>.</p>
<h2 id="cors">CORS</h2>
<p>A plataforma responde com <code>Access-Control-Allow-Credentials: true</code> para as
origens liberadas. Sua origem precisa estar entre elas.</p>
<h2 id="envio-do-arquivo">Envio do arquivo</h2>
<p>O envio do arquivo ao endereço assinado não passa por essa configuração de
credenciais.</p>
`,headings:[{id:`o-cookie-de-sessao`,text:`O cookie de sessão`,level:2},{id:`envio-das-credenciais`,text:`Envio das credenciais`,level:2},{id:`cors`,text:`CORS`,level:2},{id:`envio-do-arquivo`,text:`Envio do arquivo`,level:2}],readingMinutes:1},{locale:`en-US`,category:`elastic-price`,slug:`visao-geral`,title:`i6ElasticPrice`,description:`Coming soon. Estimate of price sensitivity and of the trade-off between volume and margin in each simulated scenario.`,order:1,toc:!0,searchKeywords:[`i6ElasticPrice`,`pricing`,`elasticity`,`price`,`margin`],cta:null,html:`<p>Coming soon: the current web SDK does not yet expose a service for this engine.</p>
<p><strong>Decision family:</strong> Pricing &amp; Elasticity Modeling</p>
<p>Estimates how demand responds to price changes by item, channel and region,
considering competition, promotion and positioning. Lets you simulate
scenarios before changing the price and choose the point that balances
volume, revenue and margin.</p>
<h2 id="output-types">Output types</h2>
<ul>
<li>Recommended price by item, channel and region.</li>
<li>Elasticity curve and acceptable price range.</li>
<li>Volume x revenue x margin simulation per scenario.</li>
<li>Estimated impact of promotion and markdown.</li>
<li>Adjustment priority (where margin is being drained).</li>
<li>Drivers of each price recommendation.</li>
</ul>
`,headings:[{id:`output-types`,text:`Output types`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`elastic-price`,slug:`visao-geral`,title:`i6ElasticPrice`,description:`Próximamente. Estimación de la sensibilidad al precio y del trade-off entre volumen y margen en cada escenario simulado.`,order:1,toc:!0,searchKeywords:[`i6ElasticPrice`,`pricing`,`elasticity`,`precio`,`elasticidad`,`margen`],cta:null,html:`<p>Próximamente: el SDK web actual aún no expone un servicio para este engine.</p>
<p><strong>Familia de decisión:</strong> Pricing &amp; Elasticity Modeling</p>
<p>Estima cómo responde la demanda a las variaciones de precio por ítem, canal y
región, considerando competencia, promoción y posicionamiento. Permite simular
escenarios antes de tocar el precio y elegir el punto que equilibra volumen,
ingresos y margen.</p>
<h2 id="tipos-de-salida">Tipos de salida</h2>
<ul>
<li>Precio recomendado por ítem, canal y región.</li>
<li>Curva de elasticidad y rango de precio aceptable.</li>
<li>Simulación volumen x ingresos x margen por escenario.</li>
<li>Impacto estimado de promoción y markdown.</li>
<li>Prioridad de ajuste (dónde se está drenando el margen).</li>
<li>Drivers de cada recomendación de precio.</li>
</ul>
`,headings:[{id:`tipos-de-salida`,text:`Tipos de salida`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`elastic-price`,slug:`visao-geral`,title:`i6ElasticPrice`,description:`Em breve. Estimativa de sensibilidade a preço e de trade-off entre volume e margem em cada cenário simulado.`,order:1,toc:!0,searchKeywords:[`i6ElasticPrice`,`pricing`,`elasticity`,`preço`,`elasticidade`,`margem`],cta:null,html:`<p>Em breve: o SDK web atual ainda não expõe um serviço para este engine.</p>
<p><strong>Família de decisão:</strong> Pricing &amp; Elasticity Modeling</p>
<p>Estima como a demanda responde a variações de preço por item, canal e região,
considerando concorrência, promoção e posicionamento. Permite simular cenários
antes de mexer no preço e escolher o ponto que equilibra volume, receita e
margem.</p>
<h2 id="tipos-de-saida">Tipos de saída</h2>
<ul>
<li>Preço recomendado por item, canal e região.</li>
<li>Curva de elasticidade e faixa de preço aceitável.</li>
<li>Simulação volume x receita x margem por cenário.</li>
<li>Impacto estimado de promoção e markdown.</li>
<li>Prioridade de ajuste (onde a margem está sendo drenada).</li>
<li>Drivers de cada recomendação de preço.</li>
</ul>
`,headings:[{id:`tipos-de-saida`,text:`Tipos de saída`,level:2}],readingMinutes:1},{locale:`en-US`,category:`previsio`,slug:`visao-geral`,title:`i6Previsio`,description:`Coming soon. Projection of future demand, volume and capacity behavior across different horizons and aggregation levels.`,order:1,toc:!0,searchKeywords:[`i6Previsio`,`forecasting`,`demand modeling`,`sales planning`,`forecast`,`demand`],cta:null,html:`<p>Coming soon: the current web SDK does not yet expose a service for this engine.</p>
<p><strong>Decision family:</strong> Forecasting, Demand Modeling &amp; Sales Planning</p>
<p>Models the historical series of sales, inventory, capacity and external
variables to anticipate what is likely to happen in each combination of
product, channel and location. Supports replenishment, sales planning,
capacity allocation and target-setting decisions, with a reading of the
factors that push each projection up or down.</p>
<h2 id="output-types">Output types</h2>
<ul>
<li>Demand forecast by period, product, channel and location.</li>
<li>Confidence intervals and optimistic/pessimistic scenarios.</li>
<li>Stockout and overstock risk per item.</li>
<li>Replenishment suggestion and coverage in days.</li>
<li>Sales plan and targets by commercial hierarchy.</li>
<li>Drivers of each projection (seasonality, trend, price, events).</li>
</ul>
`,headings:[{id:`output-types`,text:`Output types`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`previsio`,slug:`visao-geral`,title:`i6Previsio`,description:`Próximamente. Proyección del comportamiento futuro de demanda, volumen y capacidad en diferentes horizontes y niveles de agregación.`,order:1,toc:!0,searchKeywords:[`i6Previsio`,`forecasting`,`demand modeling`,`sales planning`,`previsión`,`demanda`],cta:null,html:`<p>Próximamente: el SDK web actual aún no expone un servicio para este engine.</p>
<p><strong>Familia de decisión:</strong> Forecasting, Demand Modeling &amp; Sales Planning</p>
<p>Modela la serie histórica de ventas, inventario, capacidad y variables
externas para anticipar lo que tiende a ocurrir en cada combinación de
producto, canal y ubicación. Sustenta decisiones de reposición, plan de
ventas, asignación de capacidad y definición de metas, con lectura de los
factores que empujan cada proyección hacia arriba o hacia abajo.</p>
<h2 id="tipos-de-salida">Tipos de salida</h2>
<ul>
<li>Previsión de demanda por período, producto, canal y ubicación.</li>
<li>Intervalos de confianza y escenarios optimista/pesimista.</li>
<li>Riesgo de quiebre y de exceso de inventario por ítem.</li>
<li>Sugerencia de reposición y cobertura en días.</li>
<li>Plan de ventas y metas por jerarquía comercial.</li>
<li>Drivers de cada proyección (estacionalidad, tendencia, precio, eventos).</li>
</ul>
`,headings:[{id:`tipos-de-salida`,text:`Tipos de salida`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`previsio`,slug:`visao-geral`,title:`i6Previsio`,description:`Em breve. Projeção de comportamento futuro de demanda, volume e capacidade em diferentes horizontes e níveis de agregação.`,order:1,toc:!0,searchKeywords:[`i6Previsio`,`forecasting`,`demand modeling`,`sales planning`,`previsão`,`demanda`],cta:null,html:`<p>Em breve: o SDK web atual ainda não expõe um serviço para este engine.</p>
<p><strong>Família de decisão:</strong> Forecasting, Demand Modeling &amp; Sales Planning</p>
<p>Modela a série histórica de vendas, estoque, capacidade e variáveis externas
para antecipar o que tende a acontecer em cada combinação de produto, canal e
local. Sustenta decisões de reposição, plano de vendas, alocação de capacidade
e definição de metas, com leitura dos fatores que empurram cada projeção para
cima ou para baixo.</p>
<h2 id="tipos-de-saida">Tipos de saída</h2>
<ul>
<li>Previsão de demanda por período, produto, canal e local.</li>
<li>Intervalos de confiança e cenários otimista/pessimista.</li>
<li>Risco de ruptura e de excesso de estoque por item.</li>
<li>Sugestão de reposição e cobertura em dias.</li>
<li>Plano de vendas e metas por hierarquia comercial.</li>
<li>Drivers de cada projeção (sazonalidade, tendência, preço, eventos).</li>
</ul>
`,headings:[{id:`tipos-de-saida`,text:`Tipos de saída`,level:2}],readingMinutes:1},{locale:`en-US`,category:`primeiros-passos`,slug:`instalacao`,title:`Installation`,description:`Load the infinity6 web SDK from the browser bundle.`,order:1,toc:!0,searchKeywords:[`install`,`bundle`,`sdk`,`script`,`browser`],cta:{eyebrow:`Next step`,title:`Make your first call`,description:`Ensure the session and upload a file.`,buttonLabel:`Continue`,buttonHref:`/en/primeiros-passos/primeira-chamada`},html:`<p>The infinity6 web SDK is loaded in the browser through a script tag. There is
no npm package and there is no API key to configure.</p>
<h2 id="requirements">Requirements</h2>
<p>A page served from an origin allowed by the platform and a user with access to
the platform.</p>
<h2 id="load-the-bundle">Load the bundle</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p>This is the bundle path as it exists today. It points to the latest version,
which is not recommended for production: pin a version once one is available.</p>
<h2 id="check-the-load">Check the load</h2>
<p>After the script, the constructor is available on <code>window.I6Sdk</code>.</p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-keyword">typeof</span> sdk.<span class="hljs-property">auth</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
`,headings:[{id:`requirements`,text:`Requirements`,level:2},{id:`load-the-bundle`,text:`Load the bundle`,level:2},{id:`check-the-load`,text:`Check the load`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`primeiros-passos`,slug:`instalacao`,title:`Instalación`,description:`Carga el SDK web de infinity6 desde el bundle del navegador.`,order:1,toc:!0,searchKeywords:[`instalar`,`bundle`,`sdk`,`script`,`navegador`],cta:{eyebrow:`Siguiente paso`,title:`Haz tu primera llamada`,description:`Asegura la sesión y sube un archivo.`,buttonLabel:`Continuar`,buttonHref:`/es/primeiros-passos/primeira-chamada`},html:`<p>El SDK web de infinity6 se carga en el navegador mediante una etiqueta de
script. No hay paquete en npm ni clave de API que configurar.</p>
<h2 id="requisitos">Requisitos</h2>
<p>Una página servida desde un origen habilitado por la plataforma y un usuario
con acceso a la plataforma.</p>
<h2 id="carga-el-bundle">Carga el bundle</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p>Esta es la ruta del bundle tal como existe hoy. Apunta a la versión más
reciente, lo cual no se recomienda en producción: fija una versión cuando esté
disponible.</p>
<h2 id="verifica-la-carga">Verifica la carga</h2>
<p>Después del script, el constructor está disponible en <code>window.I6Sdk</code>.</p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-keyword">typeof</span> sdk.<span class="hljs-property">auth</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
`,headings:[{id:`requisitos`,text:`Requisitos`,level:2},{id:`carga-el-bundle`,text:`Carga el bundle`,level:2},{id:`verifica-la-carga`,text:`Verifica la carga`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`primeiros-passos`,slug:`instalacao`,title:`Instalação`,description:`Carregue o SDK web da infinity6 pelo bundle no navegador.`,order:1,toc:!0,searchKeywords:[`instalar`,`bundle`,`sdk`,`script`,`navegador`],cta:{eyebrow:`Próximo passo`,title:`Faça sua primeira chamada`,description:`Garanta a sessão e envie um arquivo.`,buttonLabel:`Continuar`,buttonHref:`/primeiros-passos/primeira-chamada`},html:`<p>O SDK web da infinity6 é carregado no navegador por uma tag de script. Não há
pacote no npm e não há chave de API para configurar.</p>
<h2 id="requisitos">Requisitos</h2>
<p>Uma página servida em uma origem liberada pela plataforma e um usuário com
acesso à plataforma.</p>
<h2 id="carregue-o-bundle">Carregue o bundle</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p>Este é o caminho do bundle como existe hoje. Ele aponta para a versão mais
recente, o que não é recomendado em produção: fixe uma versão quando ela
estiver disponível.</p>
<h2 id="verifique-o-carregamento">Verifique o carregamento</h2>
<p>Depois do script, o construtor fica disponível em <code>window.I6Sdk</code>.</p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-keyword">typeof</span> sdk.<span class="hljs-property">auth</span>);
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
`,headings:[{id:`requisitos`,text:`Requisitos`,level:2},{id:`carregue-o-bundle`,text:`Carregue o bundle`,level:2},{id:`verifique-o-carregamento`,text:`Verifique o carregamento`,level:2}],readingMinutes:1},{locale:`en-US`,category:`primeiros-passos`,slug:`primeira-chamada`,title:`First call`,description:`Ensure the user session and upload a file through Ingest.`,order:2,toc:!0,searchKeywords:[`upload`,`ingest`,`session`,`file`,`requireUser`],cta:{eyebrow:`Next step`,title:`Understand authentication`,description:`Cookie session set by the platform.`,buttonLabel:`See authentication`,buttonHref:`/en/autenticacao/visao-geral`},html:`<p>With the bundle loaded, the first call ensures the user session and uploads a
file through Ingest.</p>
<h2 id="complete-page">Complete page</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;file&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;arquivo&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-comment">// No session: redirects to login</span>
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;

    <span class="hljs-keyword">const</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&quot;#arquivo&quot;</span>);
    input.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&quot;change&quot;</span>, <span class="hljs-title function_">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> file = input.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
      <span class="hljs-keyword">if</span> (!file) <span class="hljs-keyword">return</span>;
      <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({
        <span class="hljs-attr">dataset</span>: <span class="hljs-string">&quot;&lt;your-dataset&gt;&quot;</span>,
        <span class="hljs-attr">table</span>: <span class="hljs-string">&quot;&lt;your-table&gt;&quot;</span>,
        <span class="hljs-attr">partitions</span>: { <span class="hljs-string">&quot;&lt;your-key&gt;&quot;</span>: <span class="hljs-string">&quot;&lt;your-value&gt;&quot;</span> },
        file,
      });
    });
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<h2 id="how-the-flow-works">How the flow works</h2>
<ol>
<li>The session is ensured when the page loads, so the redirect to login does
not discard a file that has already been chosen.</li>
<li>The upload only proceeds if a file is selected.</li>
<li>The upload asks the platform for a signed upload address, using the session,
and sends the file directly to that address.</li>
</ol>
<h2 id="upload-parameters">Upload parameters</h2>
<p><code>dataset</code>, <code>table</code> and <code>partitions</code> are placeholders. Use the values from your
environment. <code>file</code> is a <code>File</code> object taken from the file input.</p>
<p>Full reference: <a href="/en/referencia-sdk/ingest">ingest()</a>.</p>
`,headings:[{id:`complete-page`,text:`Complete page`,level:2},{id:`how-the-flow-works`,text:`How the flow works`,level:2},{id:`upload-parameters`,text:`Upload parameters`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`primeiros-passos`,slug:`primeira-chamada`,title:`Primera llamada`,description:`Asegura la sesión del usuario y sube un archivo con Ingest.`,order:2,toc:!0,searchKeywords:[`upload`,`ingest`,`sesión`,`archivo`,`requireUser`],cta:{eyebrow:`Siguiente paso`,title:`Entiende la autenticación`,description:`Sesión por cookie definida por la plataforma.`,buttonLabel:`Ver autenticación`,buttonHref:`/es/autenticacao/visao-geral`},html:`<p>Con el bundle cargado, la primera llamada asegura la sesión del usuario y sube
un archivo con Ingest.</p>
<h2 id="pagina-completa">Página completa</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;file&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;arquivo&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-comment">// Sin sesión: redirige al login</span>
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;

    <span class="hljs-keyword">const</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&quot;#arquivo&quot;</span>);
    input.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&quot;change&quot;</span>, <span class="hljs-title function_">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> file = input.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
      <span class="hljs-keyword">if</span> (!file) <span class="hljs-keyword">return</span>;
      <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({
        <span class="hljs-attr">dataset</span>: <span class="hljs-string">&quot;&lt;tu-dataset&gt;&quot;</span>,
        <span class="hljs-attr">table</span>: <span class="hljs-string">&quot;&lt;tu-tabla&gt;&quot;</span>,
        <span class="hljs-attr">partitions</span>: { <span class="hljs-string">&quot;&lt;tu-clave&gt;&quot;</span>: <span class="hljs-string">&quot;&lt;tu-valor&gt;&quot;</span> },
        file,
      });
    });
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<h2 id="como-funciona-el-flujo">Cómo funciona el flujo</h2>
<ol>
<li>La sesión se asegura al cargar la página, para que la redirección al login
no descarte un archivo ya elegido.</li>
<li>La subida solo continúa si hay un archivo seleccionado.</li>
<li>La subida pide a la plataforma una dirección de envío firmada, usando la
sesión, y envía el archivo directamente a esa dirección.</li>
</ol>
<h2 id="parametros-de-la-subida">Parámetros de la subida</h2>
<p><code>dataset</code>, <code>table</code> y <code>partitions</code> son placeholders. Usa los valores de tu
entorno. <code>file</code> es un objeto <code>File</code> obtenido del campo de archivo.</p>
<p>Referencia completa: <a href="/es/referencia-sdk/ingest">ingest()</a>.</p>
`,headings:[{id:`pagina-completa`,text:`Página completa`,level:2},{id:`como-funciona-el-flujo`,text:`Cómo funciona el flujo`,level:2},{id:`parametros-de-la-subida`,text:`Parámetros de la subida`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`primeiros-passos`,slug:`primeira-chamada`,title:`Primeira chamada`,description:`Garanta a sessão do usuário e envie um arquivo pelo Ingest.`,order:2,toc:!0,searchKeywords:[`upload`,`ingest`,`sessão`,`arquivo`,`requireUser`],cta:{eyebrow:`Próximo passo`,title:`Entenda a autenticação`,description:`Sessão por cookie definida pela plataforma.`,buttonLabel:`Ver autenticação`,buttonHref:`/autenticacao/visao-geral`},html:`<p>Com o bundle carregado, a primeira chamada garante a sessão do usuário e envia
um arquivo pelo Ingest.</p>
<h2 id="pagina-completa">Página completa</h2>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;file&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;arquivo&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-comment">// Sem sessão: redireciona para o login</span>
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;

    <span class="hljs-keyword">const</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&quot;#arquivo&quot;</span>);
    input.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&quot;change&quot;</span>, <span class="hljs-title function_">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> file = input.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
      <span class="hljs-keyword">if</span> (!file) <span class="hljs-keyword">return</span>;
      <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({
        <span class="hljs-attr">dataset</span>: <span class="hljs-string">&quot;&lt;seu-dataset&gt;&quot;</span>,
        <span class="hljs-attr">table</span>: <span class="hljs-string">&quot;&lt;sua-tabela&gt;&quot;</span>,
        <span class="hljs-attr">partitions</span>: { <span class="hljs-string">&quot;&lt;sua-chave&gt;&quot;</span>: <span class="hljs-string">&quot;&lt;seu-valor&gt;&quot;</span> },
        file,
      });
    });
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<h2 id="como-funciona-o-fluxo">Como funciona o fluxo</h2>
<ol>
<li>A sessão é garantida ao carregar a página, para que o redirecionamento ao
login não descarte um arquivo já escolhido.</li>
<li>O upload só prossegue se houver arquivo selecionado.</li>
<li>O upload pede à plataforma um endereço de envio assinado, usando a sessão, e
envia o arquivo diretamente a esse endereço.</li>
</ol>
<h2 id="parametros-do-upload">Parâmetros do upload</h2>
<p><code>dataset</code>, <code>table</code> e <code>partitions</code> estão como placeholders. Use os valores do
seu ambiente. <code>file</code> é um objeto <code>File</code> obtido do campo de arquivo.</p>
<p>Referência completa: <a href="/referencia-sdk/ingest">ingest()</a>.</p>
`,headings:[{id:`pagina-completa`,text:`Página completa`,level:2},{id:`como-funciona-o-fluxo`,text:`Como funciona o fluxo`,level:2},{id:`parametros-do-upload`,text:`Parâmetros do upload`,level:2}],readingMinutes:1},{locale:`en-US`,category:`primeiros-passos`,slug:`qual-engine-eu-uso`,title:`Which engine do I use?`,description:`Find out which decision engine powers each i6 Decision Suite product.`,order:4,toc:!0,searchKeywords:[`engine`,`relevance`,`forecasting`,`assortment`,`pricing`,`targeting`,`previsio`,`recsys`,`elasticprice`],cta:null,html:`<p>Coming soon: the current web SDK does not yet expose services for these engines.</p>
<p>If you arrived knowing a product&#39;s commercial name, use the table below to find the decision engine that serves it.</p>
<h2 id="product-family-and-engine">Product, family and engine</h2>
<table>
<thead>
<tr>
<th>Product</th>
<th>Decision family</th>
<th>Engine</th>
</tr>
</thead>
<tbody><tr>
<td>Relevance</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/en/recsys/visao-geral">i6RecSys</a></td>
</tr>
<tr>
<td>Forecasting</td>
<td>Forecasting, Demand Modeling &amp; Sales Planning</td>
<td><a href="/en/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Assortment</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/en/recsys/visao-geral">i6RecSys</a> + <a href="/en/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Sales Planning</td>
<td>Forecasting, Demand Modeling &amp; Sales Planning</td>
<td><a href="/en/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Pricing</td>
<td>Pricing &amp; Elasticity Modeling</td>
<td><a href="/en/elastic-price/visao-geral">i6ElasticPrice</a></td>
</tr>
<tr>
<td>Targeting</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/en/recsys/visao-geral">i6RecSys</a></td>
</tr>
</tbody></table>
<h2 id="the-three-families">The three families</h2>
<ul>
<li><strong>Recommendation, Personalization, Propension &amp; Assortment</strong> — rankings, propensity and mix composition.</li>
<li><strong>Forecasting, Demand Modeling &amp; Sales Planning</strong> — granular demand forecasting and sales targets.</li>
<li><strong>Pricing &amp; Elasticity Modeling</strong> — elasticity curves and recommended prices.</li>
</ul>
<h2 id="before-getting-started">Before getting started</h2>
<p>Every engine starts from the same ingested data. Begin with installation and your first call.</p>
`,headings:[{id:`product-family-and-engine`,text:`Product, family and engine`,level:2},{id:`the-three-families`,text:`The three families`,level:2},{id:`before-getting-started`,text:`Before getting started`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`primeiros-passos`,slug:`qual-engine-eu-uso`,title:`¿Qué engine uso?`,description:`Descubre qué motor de decisión alimenta cada producto de i6 Decision Suite.`,order:4,toc:!0,searchKeywords:[`engine`,`motor`,`relevance`,`forecasting`,`assortment`,`pricing`,`targeting`,`previsio`,`recsys`,`elasticprice`],cta:null,html:`<p>Próximamente: el SDK web actual aún no expone servicios para estos engines.</p>
<p>Si llegaste conociendo el nombre comercial de un producto, usa la tabla siguiente para encontrar el motor de decisión que lo atiende.</p>
<h2 id="producto-familia-y-motor">Producto, familia y motor</h2>
<table>
<thead>
<tr>
<th>Producto</th>
<th>Familia de decisión</th>
<th>Motor</th>
</tr>
</thead>
<tbody><tr>
<td>Relevance</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/es/recsys/visao-geral">i6RecSys</a></td>
</tr>
<tr>
<td>Forecasting</td>
<td>Forecasting, Demand Modeling &amp; Sales Planning</td>
<td><a href="/es/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Assortment</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/es/recsys/visao-geral">i6RecSys</a> + <a href="/es/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Sales Planning</td>
<td>Forecasting, Demand Modeling &amp; Sales Planning</td>
<td><a href="/es/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Pricing</td>
<td>Pricing &amp; Elasticity Modeling</td>
<td><a href="/es/elastic-price/visao-geral">i6ElasticPrice</a></td>
</tr>
<tr>
<td>Targeting</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/es/recsys/visao-geral">i6RecSys</a></td>
</tr>
</tbody></table>
<h2 id="las-tres-familias">Las tres familias</h2>
<ul>
<li><strong>Recommendation, Personalization, Propension &amp; Assortment</strong> — rankings, propensión y composición del mix.</li>
<li><strong>Forecasting, Demand Modeling &amp; Sales Planning</strong> — previsión granular de demanda y metas de venta.</li>
<li><strong>Pricing &amp; Elasticity Modeling</strong> — curvas de elasticidad y precios recomendados.</li>
</ul>
<h2 id="antes-de-empezar">Antes de empezar</h2>
<p>Todos los motores parten de los mismos datos enviados en la ingesta. Empieza por la instalación y la primera llamada.</p>
`,headings:[{id:`producto-familia-y-motor`,text:`Producto, familia y motor`,level:2},{id:`las-tres-familias`,text:`Las tres familias`,level:2},{id:`antes-de-empezar`,text:`Antes de empezar`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`primeiros-passos`,slug:`qual-engine-eu-uso`,title:`Qual engine eu uso?`,description:`Descubra qual motor de decisão alimenta cada produto da i6 Decision Suite.`,order:4,toc:!0,searchKeywords:[`engine`,`motor`,`relevance`,`forecasting`,`assortment`,`pricing`,`targeting`,`previsio`,`recsys`,`elasticprice`],cta:null,html:`<p>Em breve: o SDK web atual ainda não expõe serviços para estes engines.</p>
<p>Se você chegou até aqui conhecendo o nome comercial de um produto, use a tabela abaixo para encontrar o motor de decisão que atende a ele.</p>
<h2 id="produto-familia-e-motor">Produto, família e motor</h2>
<table>
<thead>
<tr>
<th>Produto</th>
<th>Família de decisão</th>
<th>Motor</th>
</tr>
</thead>
<tbody><tr>
<td>Relevance</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/recsys/visao-geral">i6RecSys</a></td>
</tr>
<tr>
<td>Forecasting</td>
<td>Forecasting, Demand Modeling &amp; Sales Planning</td>
<td><a href="/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Assortment</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/recsys/visao-geral">i6RecSys</a> + <a href="/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Sales Planning</td>
<td>Forecasting, Demand Modeling &amp; Sales Planning</td>
<td><a href="/previsio/visao-geral">i6Previsio</a></td>
</tr>
<tr>
<td>Pricing</td>
<td>Pricing &amp; Elasticity Modeling</td>
<td><a href="/elastic-price/visao-geral">i6ElasticPrice</a></td>
</tr>
<tr>
<td>Targeting</td>
<td>Recommendation, Personalization, Propension &amp; Assortment</td>
<td><a href="/recsys/visao-geral">i6RecSys</a></td>
</tr>
</tbody></table>
<h2 id="as-tres-familias">As três famílias</h2>
<ul>
<li><strong>Recommendation, Personalization, Propension &amp; Assortment</strong> — rankings, propensão e composição de mix.</li>
<li><strong>Forecasting, Demand Modeling &amp; Sales Planning</strong> — previsão granular de demanda e metas de venda.</li>
<li><strong>Pricing &amp; Elasticity Modeling</strong> — curvas de elasticidade e preços recomendados.</li>
</ul>
<h2 id="antes-de-comecar">Antes de começar</h2>
<p>Todos os motores partem dos mesmos dados enviados na ingestão. Comece pela instalação e pela primeira chamada.</p>
`,headings:[{id:`produto-familia-e-motor`,text:`Produto, família e motor`,level:2},{id:`as-tres-familias`,text:`As três famílias`,level:2},{id:`antes-de-comecar`,text:`Antes de começar`,level:2}],readingMinutes:1},{locale:`en-US`,category:`recsys`,slug:`visao-geral`,title:`i6RecSys`,description:`Coming soon. Prioritization of items, audiences and combinations by the likelihood of response in each context.`,order:1,toc:!0,searchKeywords:[`i6RecSys`,`recommendation`,`personalization`,`propension`,`assortment`],cta:null,html:`<p>Coming soon: the current web SDK does not yet expose a service for this engine.</p>
<p><strong>Decision family:</strong> Recommendation, Personalization, Propension &amp; Assortment</p>
<p>Models individual and collective behavior from browsing, purchase and
interaction events to rank what to offer, to whom and at what moment. Covers
everything from in-product recommendation to assortment design per store and
prioritization of contact lists.</p>
<h2 id="output-types">Output types</h2>
<ul>
<li>Ranked list of items per customer or session.</li>
<li>Propensity score for purchase, repurchase and churn.</li>
<li>Prioritized audience per campaign and channel.</li>
<li>Suggested assortment per store, region or cluster.</li>
<li>Cross-sell and up-sell combinations.</li>
<li>Drivers of each recommendation (affinity, context, history).</li>
</ul>
<h2 id="engines-involved">Engines involved</h2>
<p>i6RecSys and i6Previsio.</p>
`,headings:[{id:`output-types`,text:`Output types`,level:2},{id:`engines-involved`,text:`Engines involved`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`recsys`,slug:`visao-geral`,title:`i6RecSys`,description:`Próximamente. Priorización de ítems, públicos y combinaciones según la probabilidad de respuesta en cada contexto.`,order:1,toc:!0,searchKeywords:[`i6RecSys`,`recommendation`,`personalization`,`propension`,`assortment`,`recomendación`,`surtido`],cta:null,html:`<p>Próximamente: el SDK web actual aún no expone un servicio para este engine.</p>
<p><strong>Familia de decisión:</strong> Recommendation, Personalization, Propension &amp; Assortment</p>
<p>Modela el comportamiento individual y colectivo a partir de eventos de
navegación, compra e interacción para ordenar qué ofrecer, a quién y en qué
momento. Abarca desde la recomendación dentro del producto hasta el diseño de
surtido por tienda y la priorización de listas de contacto.</p>
<h2 id="tipos-de-salida">Tipos de salida</h2>
<ul>
<li>Lista ordenada de ítems por cliente o sesión.</li>
<li>Score de propensión a compra, recompra y churn.</li>
<li>Público priorizado por campaña y canal.</li>
<li>Surtido sugerido por tienda, región o cluster.</li>
<li>Combinaciones de cross-sell y up-sell.</li>
<li>Drivers de cada recomendación (afinidad, contexto, historial).</li>
</ul>
<h2 id="engines-involucrados">Engines involucrados</h2>
<p>i6RecSys e i6Previsio.</p>
`,headings:[{id:`tipos-de-salida`,text:`Tipos de salida`,level:2},{id:`engines-involucrados`,text:`Engines involucrados`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`recsys`,slug:`visao-geral`,title:`i6RecSys`,description:`Em breve. Priorização de itens, públicos e combinações pela probabilidade de resposta em cada contexto.`,order:1,toc:!0,searchKeywords:[`i6RecSys`,`recommendation`,`personalization`,`propension`,`assortment`,`recomendação`,`sortimento`],cta:null,html:`<p>Em breve: o SDK web atual ainda não expõe um serviço para este engine.</p>
<p><strong>Família de decisão:</strong> Recommendation, Personalization, Propension &amp; Assortment</p>
<p>Modela comportamento individual e coletivo a partir de eventos de navegação,
compra e interação para ordenar o que oferecer, a quem e em que momento. Cobre
desde recomendação dentro do produto até desenho de sortimento por loja e
priorização de listas de contato.</p>
<h2 id="tipos-de-saida">Tipos de saída</h2>
<ul>
<li>Lista ordenada de itens por cliente ou sessão.</li>
<li>Score de propensão a compra, recompra e churn.</li>
<li>Público priorizado por campanha e canal.</li>
<li>Sortimento sugerido por loja, região ou cluster.</li>
<li>Combinações de cross-sell e up-sell.</li>
<li>Drivers de cada recomendação (afinidade, contexto, histórico).</li>
</ul>
<h2 id="engines-envolvidos">Engines envolvidos</h2>
<p>i6RecSys e i6Previsio.</p>
`,headings:[{id:`tipos-de-saida`,text:`Tipos de saída`,level:2},{id:`engines-envolvidos`,text:`Engines envolvidos`,level:2}],readingMinutes:1},{locale:`en-US`,category:`referencia-sdk`,slug:`sdk`,title:`I6Sdk`,description:`Web SDK constructor and access to services.`,order:1,toc:!0,searchKeywords:[`I6Sdk`,`baseUrl`,`config`,`auth`,`ingest`,`reference`],cta:{eyebrow:`Next`,title:`auth()`,description:`Querying and requiring the session.`,buttonLabel:`See auth()`,buttonHref:`/en/referencia-sdk/auth`},html:`<p>The bundle exposes the <code>window.I6Sdk</code> class. Each instance gives access to the
SDK services.</p>
<h2 id="new-i6sdk-config">new I6Sdk(config?)</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>(config?)</code></pre></div>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>config</code></td>
<td><code>object</code></td>
<td>No</td>
<td>Instance configuration.</td>
</tr>
<tr>
<td><code>config.baseUrl</code></td>
<td><code>string</code></td>
<td>No</td>
<td>Platform address used for calls. The default is the sandbox environment.</td>
</tr>
</tbody></table>
<p><strong>Returns:</strong> an <code>I6Sdk</code> instance.</p>
<p><strong>Minimal example</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notes</strong></p>
<ul>
<li>Values passed in <code>config</code> override the default values.</li>
</ul>
<h2 id="sdk-auth">sdk.auth()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs">sdk.<span class="hljs-title function_">auth</span>()</code></pre></div>
<p><strong>Returns:</strong> the authentication service. See <a href="/en/referencia-sdk/auth">auth()</a>.</p>
<h2 id="sdk-ingest">sdk.ingest()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs">sdk.<span class="hljs-title function_">ingest</span>()</code></pre></div>
<p><strong>Returns:</strong> the file upload service. See <a href="/en/referencia-sdk/ingest">ingest()</a>.</p>
`,headings:[{id:`new-i6sdk-config`,text:`new I6Sdk(config?)`,level:2},{id:`sdk-auth`,text:`sdk.auth()`,level:2},{id:`sdk-ingest`,text:`sdk.ingest()`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`referencia-sdk`,slug:`sdk`,title:`I6Sdk`,description:`Constructor del SDK web y acceso a los servicios.`,order:1,toc:!0,searchKeywords:[`I6Sdk`,`baseUrl`,`config`,`auth`,`ingest`,`referencia`],cta:{eyebrow:`Siguiente`,title:`auth()`,description:`Consulta y exigencia de sesión.`,buttonLabel:`Ver auth()`,buttonHref:`/es/referencia-sdk/auth`},html:`<p>El bundle expone la clase <code>window.I6Sdk</code>. Cada instancia da acceso a los
servicios del SDK.</p>
<h2 id="new-i6sdk-config">new I6Sdk(config?)</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>(config?)</code></pre></div>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Obligatorio</th>
<th>Descripción</th>
</tr>
</thead>
<tbody><tr>
<td><code>config</code></td>
<td><code>object</code></td>
<td>No</td>
<td>Configuración de la instancia.</td>
</tr>
<tr>
<td><code>config.baseUrl</code></td>
<td><code>string</code></td>
<td>No</td>
<td>Dirección de la plataforma usada en las llamadas. El valor por defecto es el entorno sandbox.</td>
</tr>
</tbody></table>
<p><strong>Devuelve:</strong> una instancia de <code>I6Sdk</code>.</p>
<p><strong>Ejemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notas</strong></p>
<ul>
<li>Los valores informados en <code>config</code> sustituyen a los valores por defecto.</li>
</ul>
<h2 id="sdk-auth">sdk.auth()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs">sdk.<span class="hljs-title function_">auth</span>()</code></pre></div>
<p><strong>Devuelve:</strong> el servicio de autenticación. Ver <a href="/es/referencia-sdk/auth">auth()</a>.</p>
<h2 id="sdk-ingest">sdk.ingest()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs">sdk.<span class="hljs-title function_">ingest</span>()</code></pre></div>
<p><strong>Devuelve:</strong> el servicio de envío de archivos. Ver <a href="/es/referencia-sdk/ingest">ingest()</a>.</p>
`,headings:[{id:`new-i6sdk-config`,text:`new I6Sdk(config?)`,level:2},{id:`sdk-auth`,text:`sdk.auth()`,level:2},{id:`sdk-ingest`,text:`sdk.ingest()`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`referencia-sdk`,slug:`sdk`,title:`I6Sdk`,description:`Construtor do SDK web e acesso aos serviços.`,order:1,toc:!0,searchKeywords:[`I6Sdk`,`baseUrl`,`config`,`auth`,`ingest`,`referência`],cta:{eyebrow:`Próximo`,title:`auth()`,description:`Consulta e exigência de sessão.`,buttonLabel:`Ver auth()`,buttonHref:`/referencia-sdk/auth`},html:`<p>O bundle expõe a classe <code>window.I6Sdk</code>. Cada instância dá acesso aos serviços
do SDK.</p>
<h2 id="new-i6sdk-config">new I6Sdk(config?)</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>(config?)</code></pre></div>
<table>
<thead>
<tr>
<th>Nome</th>
<th>Tipo</th>
<th>Obrigatório</th>
<th>Descrição</th>
</tr>
</thead>
<tbody><tr>
<td><code>config</code></td>
<td><code>object</code></td>
<td>Não</td>
<td>Configuração da instância.</td>
</tr>
<tr>
<td><code>config.baseUrl</code></td>
<td><code>string</code></td>
<td>Não</td>
<td>Endereço da plataforma usado nas chamadas. O padrão é o ambiente sandbox.</td>
</tr>
</tbody></table>
<p><strong>Devolve:</strong> uma instância de <code>I6Sdk</code>.</p>
<p><strong>Exemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notas</strong></p>
<ul>
<li>Os valores informados em <code>config</code> substituem os valores padrão.</li>
</ul>
<h2 id="sdk-auth">sdk.auth()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs">sdk.<span class="hljs-title function_">auth</span>()</code></pre></div>
<p><strong>Devolve:</strong> o serviço de autenticação. Veja <a href="/referencia-sdk/auth">auth()</a>.</p>
<h2 id="sdk-ingest">sdk.ingest()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs">sdk.<span class="hljs-title function_">ingest</span>()</code></pre></div>
<p><strong>Devolve:</strong> o serviço de envio de arquivos. Veja <a href="/referencia-sdk/ingest">ingest()</a>.</p>
`,headings:[{id:`new-i6sdk-config`,text:`new I6Sdk(config?)`,level:2},{id:`sdk-auth`,text:`sdk.auth()`,level:2},{id:`sdk-ingest`,text:`sdk.ingest()`,level:2}],readingMinutes:1},{locale:`en-US`,category:`referencia-sdk`,slug:`auth`,title:`auth()`,description:`Reference for user() and requireUser().`,order:2,toc:!0,searchKeywords:[`auth`,`user`,`requireUser`,`session`,`login`,`reference`],cta:{eyebrow:`Next`,title:`ingest()`,description:`File upload.`,buttonLabel:`See ingest()`,buttonHref:`/en/referencia-sdk/ingest`},html:`<p>Service obtained with <code>sdk.auth()</code>.</p>
<h2 id="user">user()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>()</code></pre></div>
<p>No parameters.</p>
<p><strong>Returns:</strong> a <code>Promise</code> with the JSON returned by <code>api/auth/me</code> (the user
profile when there is an active session).</p>
<p><strong>Error conditions</strong></p>
<ul>
<li>The promise rejects, for example, when the request does not complete
(network or CORS) or when the response is not valid JSON.</li>
</ul>
<p><strong>Minimal example</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>();
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(user);
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<h2 id="requireuser">requireUser()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>()</code></pre></div>
<p>No parameters.</p>
<p><strong>Returns:</strong> a <code>Promise</code> with the result of <code>user()</code>. When that result is empty
(for example <code>null</code>), it starts the redirect to login and returns <code>null</code>.</p>
<p><strong>Error conditions</strong></p>
<ul>
<li>The same as <code>user()</code>.</li>
</ul>
<p><strong>Minimal example</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notes</strong></p>
<ul>
<li><code>requireUser()</code> uses <code>user()</code> internally.</li>
<li>The login URL is described in <a href="/en/autenticacao/fluxo-de-login">Login flow</a>.</li>
</ul>
`,headings:[{id:`user`,text:`user()`,level:2},{id:`requireuser`,text:`requireUser()`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`referencia-sdk`,slug:`auth`,title:`auth()`,description:`Referencia de user() y requireUser().`,order:2,toc:!0,searchKeywords:[`auth`,`user`,`requireUser`,`sesión`,`login`,`referencia`],cta:{eyebrow:`Siguiente`,title:`ingest()`,description:`Envío de archivos.`,buttonLabel:`Ver ingest()`,buttonHref:`/es/referencia-sdk/ingest`},html:`<p>Servicio obtenido con <code>sdk.auth()</code>.</p>
<h2 id="user">user()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>()</code></pre></div>
<p>Sin parámetros.</p>
<p><strong>Devuelve:</strong> una <code>Promise</code> con el JSON respondido por <code>api/auth/me</code> (el
perfil del usuario cuando hay sesión activa).</p>
<p><strong>Condiciones de error</strong></p>
<ul>
<li>La promesa se rechaza, por ejemplo, cuando la solicitud no se completa
(red o CORS) o cuando la respuesta no es JSON válido.</li>
</ul>
<p><strong>Ejemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>();
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(user);
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<h2 id="requireuser">requireUser()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>()</code></pre></div>
<p>Sin parámetros.</p>
<p><strong>Devuelve:</strong> una <code>Promise</code> con el resultado de <code>user()</code>. Cuando ese resultado
está vacío (por ejemplo <code>null</code>), inicia la redirección al login y devuelve
<code>null</code>.</p>
<p><strong>Condiciones de error</strong></p>
<ul>
<li>Las mismas de <code>user()</code>.</li>
</ul>
<p><strong>Ejemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notas</strong></p>
<ul>
<li><code>requireUser()</code> usa <code>user()</code> internamente.</li>
<li>La URL de login se describe en <a href="/es/autenticacao/fluxo-de-login">Flujo de login</a>.</li>
</ul>
`,headings:[{id:`user`,text:`user()`,level:2},{id:`requireuser`,text:`requireUser()`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`referencia-sdk`,slug:`auth`,title:`auth()`,description:`Referência de user() e requireUser().`,order:2,toc:!0,searchKeywords:[`auth`,`user`,`requireUser`,`sessão`,`login`,`referência`],cta:{eyebrow:`Próximo`,title:`ingest()`,description:`Envio de arquivos.`,buttonLabel:`Ver ingest()`,buttonHref:`/referencia-sdk/ingest`},html:`<p>Serviço obtido com <code>sdk.auth()</code>.</p>
<h2 id="user">user()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>()</code></pre></div>
<p>Sem parâmetros.</p>
<p><strong>Devolve:</strong> uma <code>Promise</code> com o JSON respondido por <code>api/auth/me</code> (o perfil
do usuário quando há sessão ativa).</p>
<p><strong>Condições de erro</strong></p>
<ul>
<li>A promessa é rejeitada, por exemplo, quando a requisição não é concluída
(rede ou CORS) ou quando a resposta não é JSON válido.</li>
</ul>
<p><strong>Exemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">user</span>();
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(user);
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<h2 id="requireuser">requireUser()</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>()</code></pre></div>
<p>Sem parâmetros.</p>
<p><strong>Devolve:</strong> uma <code>Promise</code> com o resultado de <code>user()</code>. Quando esse resultado
é vazio (por exemplo <code>null</code>), inicia o redirecionamento ao login e devolve
<code>null</code>.</p>
<p><strong>Condições de erro</strong></p>
<ul>
<li>As mesmas de <code>user()</code>.</li>
</ul>
<p><strong>Exemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notas</strong></p>
<ul>
<li><code>requireUser()</code> usa <code>user()</code> internamente.</li>
<li>A URL de login é descrita em <a href="/autenticacao/fluxo-de-login">Fluxo de login</a>.</li>
</ul>
`,headings:[{id:`user`,text:`user()`,level:2},{id:`requireuser`,text:`requireUser()`,level:2}],readingMinutes:1},{locale:`en-US`,category:`referencia-sdk`,slug:`ingest`,title:`ingest()`,description:`Reference for upload() to send files.`,order:3,toc:!0,searchKeywords:[`ingest`,`upload`,`dataset`,`table`,`partitions`,`file`,`reference`],cta:{eyebrow:`Guide`,title:`First call`,description:`Complete page with a file upload.`,buttonLabel:`See guide`,buttonHref:`/en/primeiros-passos/primeira-chamada`},html:`<p>Service obtained with <code>sdk.ingest()</code>.</p>
<h2 id="upload-params">upload(params)</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({ dataset, table, partitions, file })</code></pre></div>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td><code>dataset</code></td>
<td><code>string</code></td>
<td>Yes</td>
<td>Dataset that receives the file.</td>
</tr>
<tr>
<td><code>table</code></td>
<td><code>string</code></td>
<td>Yes</td>
<td>Inbox table.</td>
</tr>
<tr>
<td><code>partitions</code></td>
<td><code>object</code></td>
<td>Yes</td>
<td>Values for the table partitions.</td>
</tr>
<tr>
<td><code>file</code></td>
<td><code>File</code></td>
<td>Yes</td>
<td>A single <code>File</code> object.</td>
</tr>
</tbody></table>
<p><strong>Returns:</strong> a <code>Promise</code> with no value, resolved when the upload succeeds.</p>
<p><strong>Error conditions</strong></p>
<ul>
<li>The promise rejects when <code>file</code> is missing or is not a single <code>File</code> object.</li>
<li>The promise rejects when the upload address cannot be obtained.</li>
<li>The promise rejects when sending the file fails.</li>
</ul>
<p><strong>Minimal example</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;file&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;arquivo&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;

    <span class="hljs-keyword">const</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&quot;#arquivo&quot;</span>);
    input.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&quot;change&quot;</span>, <span class="hljs-title function_">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> file = input.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
      <span class="hljs-keyword">if</span> (!file) <span class="hljs-keyword">return</span>;
      <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({
        <span class="hljs-attr">dataset</span>: <span class="hljs-string">&quot;&lt;your-dataset&gt;&quot;</span>,
        <span class="hljs-attr">table</span>: <span class="hljs-string">&quot;&lt;your-table&gt;&quot;</span>,
        <span class="hljs-attr">partitions</span>: { <span class="hljs-string">&quot;&lt;your-key&gt;&quot;</span>: <span class="hljs-string">&quot;&lt;your-value&gt;&quot;</span> },
        file,
      });
    });
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notes</strong></p>
<ul>
<li>The SDK asks the platform for a signed upload address and sends the file to
that address with <code>PUT</code>.</li>
<li>Each call sends one file.</li>
<li>The SDK validates only <code>file</code>. <code>dataset</code>, <code>table</code> and <code>partitions</code> are sent
to the platform without local validation.</li>
</ul>
`,headings:[{id:`upload-params`,text:`upload(params)`,level:2}],readingMinutes:1},{locale:`es-ES`,category:`referencia-sdk`,slug:`ingest`,title:`ingest()`,description:`Referencia de upload() para envío de archivos.`,order:3,toc:!0,searchKeywords:[`ingest`,`upload`,`dataset`,`table`,`partitions`,`file`,`referencia`],cta:{eyebrow:`Guía`,title:`Primera llamada`,description:`Página completa con envío de archivo.`,buttonLabel:`Ver guía`,buttonHref:`/es/primeiros-passos/primeira-chamada`},html:`<p>Servicio obtenido con <code>sdk.ingest()</code>.</p>
<h2 id="upload-params">upload(params)</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({ dataset, table, partitions, file })</code></pre></div>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Obligatorio</th>
<th>Descripción</th>
</tr>
</thead>
<tbody><tr>
<td><code>dataset</code></td>
<td><code>string</code></td>
<td>Sí</td>
<td>Dataset que recibe el archivo.</td>
</tr>
<tr>
<td><code>table</code></td>
<td><code>string</code></td>
<td>Sí</td>
<td>Tabla de entrada.</td>
</tr>
<tr>
<td><code>partitions</code></td>
<td><code>object</code></td>
<td>Sí</td>
<td>Valores de las particiones de la tabla.</td>
</tr>
<tr>
<td><code>file</code></td>
<td><code>File</code></td>
<td>Sí</td>
<td>Un único objeto <code>File</code>.</td>
</tr>
</tbody></table>
<p><strong>Devuelve:</strong> una <code>Promise</code> sin valor, resuelta cuando el envío termina con
éxito.</p>
<p><strong>Condiciones de error</strong></p>
<ul>
<li>La promesa se rechaza cuando <code>file</code> falta o no es un único objeto <code>File</code>.</li>
<li>La promesa se rechaza cuando no es posible obtener la dirección de envío.</li>
<li>La promesa se rechaza cuando falla el envío del archivo.</li>
</ul>
<p><strong>Ejemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;file&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;arquivo&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;

    <span class="hljs-keyword">const</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&quot;#arquivo&quot;</span>);
    input.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&quot;change&quot;</span>, <span class="hljs-title function_">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> file = input.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
      <span class="hljs-keyword">if</span> (!file) <span class="hljs-keyword">return</span>;
      <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({
        <span class="hljs-attr">dataset</span>: <span class="hljs-string">&quot;&lt;tu-dataset&gt;&quot;</span>,
        <span class="hljs-attr">table</span>: <span class="hljs-string">&quot;&lt;tu-tabla&gt;&quot;</span>,
        <span class="hljs-attr">partitions</span>: { <span class="hljs-string">&quot;&lt;tu-clave&gt;&quot;</span>: <span class="hljs-string">&quot;&lt;tu-valor&gt;&quot;</span> },
        file,
      });
    });
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notas</strong></p>
<ul>
<li>El SDK pide a la plataforma una dirección de envío firmada y envía el
archivo a esa dirección con <code>PUT</code>.</li>
<li>Cada llamada envía un archivo.</li>
<li>El SDK valida solo <code>file</code>. <code>dataset</code>, <code>table</code> y <code>partitions</code> se envían a la
plataforma sin validación local.</li>
</ul>
`,headings:[{id:`upload-params`,text:`upload(params)`,level:2}],readingMinutes:1},{locale:`pt-BR`,category:`referencia-sdk`,slug:`ingest`,title:`ingest()`,description:`Referência de upload() para envio de arquivos.`,order:3,toc:!0,searchKeywords:[`ingest`,`upload`,`dataset`,`table`,`partitions`,`file`,`referência`],cta:{eyebrow:`Guia`,title:`Primeira chamada`,description:`Página completa com envio de arquivo.`,buttonLabel:`Ver guia`,buttonHref:`/primeiros-passos/primeira-chamada`},html:`<p>Serviço obtido com <code>sdk.ingest()</code>.</p>
<h2 id="upload-params">upload(params)</h2>
<div class="doc-code"><span class="doc-code-lang">js</span><pre><code class="hljs"><span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({ dataset, table, partitions, file })</code></pre></div>
<table>
<thead>
<tr>
<th>Nome</th>
<th>Tipo</th>
<th>Obrigatório</th>
<th>Descrição</th>
</tr>
</thead>
<tbody><tr>
<td><code>dataset</code></td>
<td><code>string</code></td>
<td>Sim</td>
<td>Dataset que recebe o arquivo.</td>
</tr>
<tr>
<td><code>table</code></td>
<td><code>string</code></td>
<td>Sim</td>
<td>Tabela de entrada.</td>
</tr>
<tr>
<td><code>partitions</code></td>
<td><code>object</code></td>
<td>Sim</td>
<td>Valores das partições da tabela.</td>
</tr>
<tr>
<td><code>file</code></td>
<td><code>File</code></td>
<td>Sim</td>
<td>Um único objeto <code>File</code>.</td>
</tr>
</tbody></table>
<p><strong>Devolve:</strong> uma <code>Promise</code> sem valor, resolvida quando o envio termina com
sucesso.</p>
<p><strong>Condições de erro</strong></p>
<ul>
<li>A promessa é rejeitada quando <code>file</code> está ausente ou não é um único objeto
<code>File</code>.</li>
<li>A promessa é rejeitada quando não é possível obter o endereço de envio.</li>
<li>A promessa é rejeitada quando o envio do arquivo falha.</li>
</ul>
<p><strong>Exemplo mínimo</strong></p>
<div class="doc-code"><span class="doc-code-lang">html</span><pre><code class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.infinity6.ai/releases/sdkweb/latest/bundle/i6sdk-web.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;file&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;arquivo&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="language-javascript">
  <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">main</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> sdk = <span class="hljs-keyword">new</span> <span class="hljs-variable language_">window</span>.<span class="hljs-title function_">I6Sdk</span>();
    <span class="hljs-keyword">const</span> user = <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">auth</span>().<span class="hljs-title function_">requireUser</span>();
    <span class="hljs-keyword">if</span> (!user) <span class="hljs-keyword">return</span>;

    <span class="hljs-keyword">const</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">&quot;#arquivo&quot;</span>);
    input.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&quot;change&quot;</span>, <span class="hljs-title function_">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> file = input.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
      <span class="hljs-keyword">if</span> (!file) <span class="hljs-keyword">return</span>;
      <span class="hljs-keyword">await</span> sdk.<span class="hljs-title function_">ingest</span>().<span class="hljs-title function_">upload</span>({
        <span class="hljs-attr">dataset</span>: <span class="hljs-string">&quot;&lt;seu-dataset&gt;&quot;</span>,
        <span class="hljs-attr">table</span>: <span class="hljs-string">&quot;&lt;sua-tabela&gt;&quot;</span>,
        <span class="hljs-attr">partitions</span>: { <span class="hljs-string">&quot;&lt;sua-chave&gt;&quot;</span>: <span class="hljs-string">&quot;&lt;seu-valor&gt;&quot;</span> },
        file,
      });
    });
  }
  <span class="hljs-title function_">main</span>();
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre></div>
<p><strong>Notas</strong></p>
<ul>
<li>O SDK pede à plataforma um endereço de envio assinado e envia o arquivo a
esse endereço por <code>PUT</code>.</li>
<li>Cada chamada envia um arquivo.</li>
<li>O SDK valida apenas <code>file</code>. <code>dataset</code>, <code>table</code> e <code>partitions</code> são enviados à
plataforma sem validação local.</li>
</ul>
`,headings:[{id:`upload-params`,text:`upload(params)`,level:2}],readingMinutes:1}]},At=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),jt=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Mt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Nt=e=>{let t=Mt(e);return t.charAt(0).toUpperCase()+t.slice(1)},Pt={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Ft=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},It=(0,Y.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,Y.createElement)(`svg`,{ref:c,...Pt,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:At(`lucide`,i),...!a&&!Ft(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,Y.createElement)(e,t)),...Array.isArray(a)?a:[a]])),$=(e,t)=>{let n=(0,Y.forwardRef)(({className:n,...r},i)=>(0,Y.createElement)(It,{ref:i,iconNode:t,className:At(`lucide-${jt(Nt(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Nt(e),n},Lt=$(`bot`,[[`path`,{d:`M12 8V4H8`,key:`hb8ula`}],[`rect`,{width:`16`,height:`12`,x:`4`,y:`8`,rx:`2`,key:`enze0r`}],[`path`,{d:`M2 14h2`,key:`vft8re`}],[`path`,{d:`M20 14h2`,key:`4cs60a`}],[`path`,{d:`M15 13v2`,key:`1xurst`}],[`path`,{d:`M9 13v2`,key:`rq6x2g`}]]),Rt=$(`boxes`,[[`path`,{d:`M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,key:`lc1i9w`}],[`path`,{d:`m7 16.5-4.74-2.85`,key:`1o9zyk`}],[`path`,{d:`m7 16.5 5-3`,key:`va8pkn`}],[`path`,{d:`M7 16.5v5.17`,key:`jnp8gn`}],[`path`,{d:`M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,key:`8zsnat`}],[`path`,{d:`m17 16.5-5-3`,key:`8arw3v`}],[`path`,{d:`m17 16.5 4.74-2.85`,key:`8rfmw`}],[`path`,{d:`M17 16.5v5.17`,key:`k6z78m`}],[`path`,{d:`M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,key:`1xygjf`}],[`path`,{d:`M12 8 7.26 5.15`,key:`1vbdud`}],[`path`,{d:`m12 8 4.74-2.85`,key:`3rx089`}],[`path`,{d:`M12 13.5V8`,key:`1io7kd`}]]),zt=$(`braces`,[[`path`,{d:`M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1`,key:`ezmyqa`}],[`path`,{d:`M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1`,key:`e1hn23`}]]),Bt=$(`chart-line`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`m19 9-5 5-4-4-3 3`,key:`2osh9i`}]]),Vt=$(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Ht=$(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),Ut=$(`earth`,[[`path`,{d:`M21.54 15H17a2 2 0 0 0-2 2v4.54`,key:`1djwo0`}],[`path`,{d:`M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17`,key:`1tzkfa`}],[`path`,{d:`M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05`,key:`14pb5j`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Wt=$(`file-code-corner`,[[`path`,{d:`M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35`,key:`1wthlu`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`m5 16-3 3 3 3`,key:`331omg`}],[`path`,{d:`m9 22 3-3-3-3`,key:`lsp7cz`}]]),Gt=$(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Kt=$(`tags`,[[`path`,{d:`M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z`,key:`16rjxf`}],[`path`,{d:`M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193`,key:`178nd4`}],[`circle`,{cx:`10.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`12ikhr`}]]),qt=$(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Jt=$(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Yt=$(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Xt=[{id:`comece-aqui`,key:`nav.groups.start`,items:[{key:`nav.items.gettingStarted`,icon:Yt,category:`primeiros-passos`},{key:`nav.items.auth`,icon:Wt,category:`autenticacao`}]},{id:`construa`,key:`nav.groups.build`,items:[{key:`nav.items.sdkReference`,icon:zt,category:`referencia-sdk`},{key:`nav.items.api`,icon:Ht,badgeKey:`v1`},{key:`nav.items.sdks`,icon:Rt},{key:`nav.items.agents`,icon:Lt,badgeKey:`nav.badges.new`},{key:`nav.items.webhooks`,icon:Ut}]},{id:`motores`,key:`nav.groups.engines`,items:[{key:`nav.items.previsio`,icon:Bt,category:`previsio`,badgeKey:`nav.badges.soon`},{key:`nav.items.recsys`,icon:qt,category:`recsys`,badgeKey:`nav.badges.soon`},{key:`nav.items.elasticPrice`,icon:Kt,category:`elastic-price`,badgeKey:`nav.badges.soon`}]},{id:`recursos`,key:`nav.groups.resources`,items:[{key:`nav.items.guides`,icon:Gt},{key:`nav.items.examples`,icon:Jt},{key:`nav.items.help`,icon:Vt,category:`ajuda`}]}],Zt=Xt.flatMap(e=>e.items).map(e=>e.category).filter(e=>!!e),Qt=kt.pages;function $t(e){return Qt.filter(t=>t.locale===e).sort((e,t)=>Zt.indexOf(e.category)-Zt.indexOf(t.category)||e.order-t.order)}function en(e,t,n){return Qt.find(r=>r.locale===e&&r.category===t&&r.slug===n)}function tn(e){let t=$t(e.locale),n=t.findIndex(t=>t.category===e.category&&t.slug===e.slug);return{prev:t[n-1]??null,next:t[n+1]??null}}function nn(e,t){return e===`pt`?`/${t.category}/${t.slug}`:`/${e}/${t.category}/${t.slug}`}export{ae as $,Le as A,xe as B,Qe as C,He as D,X as E,Ee as F,de as G,me as H,Oe as I,P as J,le as K,ye as L,Me as M,Ne as N,ze as O,be as P,D as Q,Te as R,$e as S,Ue as T,ue as U,Se as V,fe as W,A as X,N as Y,se as Z,bt as _,Xt as a,j as at,dt as b,Lt as c,p as ct,Ot as d,f as dt,E as et,Dt as f,u as ft,Tt as g,wt as h,$t as i,v as it,je as j,Be as k,$ as l,b as lt,Et as m,c as mt,nn as n,ie as nt,Yt as o,O as ot,Ct as p,o as pt,U as q,en as r,h as rt,Ht as s,ee as st,tn as t,oe as tt,St as u,x as ut,mt as v,Xe as w,et as x,ht as y,Ce as z};