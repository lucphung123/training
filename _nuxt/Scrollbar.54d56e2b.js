import{e as Xt,F as Ee,U as at,W as At,m as le,q as R,r as B,f as st,h as ke,S as Ft,M as Nt,I as Me,O as Yt,N as Vt,H as jt,s as lt,y as Ut,R as qt,p as h,K as ze,z as ct,A as Gt,t as Kt}from"./entry.68d15f63.js";import{o as Jt,P as Zt,I as Qt,S as Le,G as en,u as tn,y as nn,w as Xe,Y as rn,b as ae,a as y,z as ut,f as O,c as on,e as Se,k as dt,j as an,l as sn,n as ln}from"./light.2e394c2d.js";function cn(e){return e.composedPath()[0]||null}function ar(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function sr(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function lr(e,t){const n=e.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}function cr(e,t){const[n,r]=e.split(" ");return t?t==="row"?n:r:{row:n,col:r||n}}function ur(e,t="default",n=[]){const i=e.$slots[t];return i===void 0?n:i()}function Ae(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(Xt(String(r)));return}if(Array.isArray(r)){Ae(r,t,n);return}if(r.type===Ee){if(r.children===null)return;Array.isArray(r.children)&&Ae(r.children,t,n)}else r.type!==at&&n.push(r)}}),n}function un(e,...t){if(Array.isArray(e))e.forEach(n=>un(n,...t));else return e(...t)}function ce(e){return e.some(t=>At(t)?!(t.type===at||t.type===Ee&&!ce(t.children)):!0)?e:null}function dr(e,t){return e&&ce(e())||t()}function fr(e,t,n){return e&&ce(e(t))||n(t)}function hr(e,t){const n=e&&ce(e());return t(n||null)}function vr(e,t,n){const r=e&&ce(e(t));return n(r||null)}function br(e){return!(e&&ce(e()))}const Fe=le({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}}),gr=typeof document<"u"&&typeof window<"u";function pr(e){const t=R(e),n=B(t.value);return st(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function pe(e){return e.composedPath()[0]}const dn={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function fn(e,t,n){if(e==="mousemoveoutside"){const r=i=>{t.contains(pe(i))||n(i)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const i=d=>{r=!t.contains(pe(d))},l=d=>{r&&(t.contains(pe(d))||n(d))};return{mousedown:i,mouseup:l,touchstart:i,touchend:l}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function ft(e,t,n){const r=dn[e];let i=r.get(t);i===void 0&&r.set(t,i=new WeakMap);let l=i.get(n);return l===void 0&&i.set(n,l=fn(e,t,n)),l}function hn(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=ft(e,t,n);return Object.keys(i).forEach(l=>{de(l,document,i[l],r)}),!0}return!1}function vn(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=ft(e,t,n);return Object.keys(i).forEach(l=>{te(l,document,i[l],r)}),!0}return!1}function bn(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function i(a,s,f){const v=a[s];return a[s]=function(){return f.apply(a,arguments),v.apply(a,arguments)},a}function l(a,s){a[s]=Event.prototype[s]}const d=new WeakMap,z=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function b(){var a;return(a=d.get(this))!==null&&a!==void 0?a:null}function m(a,s){z!==void 0&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:s??z.get})}const S={bubble:{},capture:{}},p={};function W(){const a=function(s){const{type:f,eventPhase:v,bubbles:w}=s,M=pe(s);if(v===2)return;const $=v===1?"capture":"bubble";let H=M;const k=[];for(;H===null&&(H=window),k.push(H),H!==window;)H=H.parentNode||null;const L=S.capture[f],V=S.bubble[f];if(i(s,"stopPropagation",n),i(s,"stopImmediatePropagation",r),m(s,b),$==="capture"){if(L===void 0)return;for(let X=k.length-1;X>=0&&!e.has(s);--X){const J=k[X],Z=L.get(J);if(Z!==void 0){d.set(s,J);for(const j of Z){if(t.has(s))break;j(s)}}if(X===0&&!w&&V!==void 0){const j=V.get(J);if(j!==void 0)for(const he of j){if(t.has(s))break;he(s)}}}}else if($==="bubble"){if(V===void 0)return;for(let X=0;X<k.length&&!e.has(s);++X){const J=k[X],Z=V.get(J);if(Z!==void 0){d.set(s,J);for(const j of Z){if(t.has(s))break;j(s)}}}}l(s,"stopPropagation"),l(s,"stopImmediatePropagation"),m(s)};return a.displayName="evtdUnifiedHandler",a}function D(){const a=function(s){const{type:f,eventPhase:v}=s;if(v!==2)return;const w=p[f];w!==void 0&&w.forEach(M=>M(s))};return a.displayName="evtdUnifiedWindowEventHandler",a}const F=W(),N=D();function C(a,s){const f=S[a];return f[s]===void 0&&(f[s]=new Map,window.addEventListener(s,F,a==="capture")),f[s]}function I(a){return p[a]===void 0&&(p[a]=new Set,window.addEventListener(a,N)),p[a]}function _(a,s){let f=a.get(s);return f===void 0&&a.set(s,f=new Set),f}function Y(a,s,f,v){const w=S[s][f];if(w!==void 0){const M=w.get(a);if(M!==void 0&&M.has(v))return!0}return!1}function G(a,s){const f=p[a];return!!(f!==void 0&&f.has(s))}function K(a,s,f,v){let w;if(typeof v=="object"&&v.once===!0?w=L=>{E(a,s,w,v),f(L)}:w=f,hn(a,s,w,v))return;const $=v===!0||typeof v=="object"&&v.capture===!0?"capture":"bubble",H=C($,a),k=_(H,s);if(k.has(w)||k.add(w),s===window){const L=I(a);L.has(w)||L.add(w)}}function E(a,s,f,v){if(vn(a,s,f,v))return;const M=v===!0||typeof v=="object"&&v.capture===!0,$=M?"capture":"bubble",H=C($,a),k=_(H,s);if(s===window&&!Y(s,M?"bubble":"capture",a,f)&&G(a,f)){const V=p[a];V.delete(f),V.size===0&&(window.removeEventListener(a,N),p[a]=void 0)}k.has(f)&&k.delete(f),k.size===0&&H.delete(s),H.size===0&&(window.removeEventListener(a,F,$==="capture"),S[$][a]=void 0)}return{on:K,off:E}}const{on:de,off:te}=bn();function mr(e,t){return st(e,n=>{n!==void 0&&(t.value=n)}),R(()=>e.value===void 0?t.value:e.value)}function gn(){const e=B(!1);return ke(()=>{e.value=!0}),Ft(e)}const pn=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function mn(){return pn}function Ne(e,t){console.error(`[vueuc/${e}]: ${t}`)}var ne=[],wn=function(){return ne.some(function(e){return e.activeTargets.length>0})},yn=function(){return ne.some(function(e){return e.skippedTargets.length>0})},Ye="ResizeObserver loop completed with undelivered notifications.",xn=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Ye}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Ye),window.dispatchEvent(e)},fe;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(fe||(fe={}));var re=function(e){return Object.freeze(e)},Sn=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,re(this)}return e}(),ht=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,re(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,l=t.right,d=t.bottom,z=t.left,b=t.width,m=t.height;return{x:n,y:r,top:i,right:l,bottom:d,left:z,width:b,height:m}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Oe=function(e){return e instanceof SVGElement&&"getBBox"in e},vt=function(e){if(Oe(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,l=i.offsetWidth,d=i.offsetHeight;return!(l||d||e.getClientRects().length)},Ve=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},Rn=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},bt=typeof window<"u"?window:{},ve=new WeakMap,je=/auto|scroll/,Tn=/^tb|vertical/,zn=/msie|trident/i.test(globalThis.navigator&&bt.navigator.userAgent),A=function(e){return parseFloat(e||"0")},se=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new Sn((n?t:e)||0,(n?e:t)||0)},Ue=re({devicePixelContentBoxSize:se(),borderBoxSize:se(),contentBoxSize:se(),contentRect:new ht(0,0,0,0)}),gt=function(e,t){if(t===void 0&&(t=!1),ve.has(e)&&!t)return ve.get(e);if(vt(e))return ve.set(e,Ue),Ue;var n=getComputedStyle(e),r=Oe(e)&&e.ownerSVGElement&&e.getBBox(),i=!zn&&n.boxSizing==="border-box",l=Tn.test(n.writingMode||""),d=!r&&je.test(n.overflowY||""),z=!r&&je.test(n.overflowX||""),b=r?0:A(n.paddingTop),m=r?0:A(n.paddingRight),S=r?0:A(n.paddingBottom),p=r?0:A(n.paddingLeft),W=r?0:A(n.borderTopWidth),D=r?0:A(n.borderRightWidth),F=r?0:A(n.borderBottomWidth),N=r?0:A(n.borderLeftWidth),C=p+m,I=b+S,_=N+D,Y=W+F,G=z?e.offsetHeight-Y-e.clientHeight:0,K=d?e.offsetWidth-_-e.clientWidth:0,E=i?C+_:0,a=i?I+Y:0,s=r?r.width:A(n.width)-E-K,f=r?r.height:A(n.height)-a-G,v=s+C+K+_,w=f+I+G+Y,M=re({devicePixelContentBoxSize:se(Math.round(s*devicePixelRatio),Math.round(f*devicePixelRatio),l),borderBoxSize:se(v,w,l),contentBoxSize:se(s,f,l),contentRect:new ht(p,b,s,f)});return ve.set(e,M),M},pt=function(e,t,n){var r=gt(e,n),i=r.borderBoxSize,l=r.contentBoxSize,d=r.devicePixelContentBoxSize;switch(t){case fe.DEVICE_PIXEL_CONTENT_BOX:return d;case fe.BORDER_BOX:return i;default:return l}},Bn=function(){function e(t){var n=gt(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=re([n.borderBoxSize]),this.contentBoxSize=re([n.contentBoxSize]),this.devicePixelContentBoxSize=re([n.devicePixelContentBoxSize])}return e}(),mt=function(e){if(vt(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},En=function(){var e=1/0,t=[];ne.forEach(function(d){if(d.activeTargets.length!==0){var z=[];d.activeTargets.forEach(function(m){var S=new Bn(m.target),p=mt(m.target);z.push(S),m.lastReportedSize=pt(m.target,m.observedBox),p<e&&(e=p)}),t.push(function(){d.callback.call(d.observer,z,d.observer)}),d.activeTargets.splice(0,d.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},qe=function(e){ne.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(mt(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},kn=function(){var e=0;for(qe(e);wn();)e=En(),qe(e);return yn()&&xn(),e>0},Re,wt=[],Mn=function(){return wt.splice(0).forEach(function(e){return e()})},On=function(e){if(!Re){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Mn()}).observe(n,r),Re=function(){n.textContent="".concat(t?t--:t++)}}wt.push(e),Re()},Hn=function(e){On(function(){requestAnimationFrame(e)})},me=0,Pn=function(){return!!me},Cn=250,$n={attributes:!0,characterData:!0,childList:!0,subtree:!0},Ge=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ke=function(e){return e===void 0&&(e=0),Date.now()+e},Te=!1,Wn=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=Cn),!Te){Te=!0;var r=Ke(t);Hn(function(){var i=!1;try{i=kn()}finally{if(Te=!1,t=r-Ke(),!Pn())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,$n)};document.body?n():bt.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Ge.forEach(function(n){return globalThis.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Ge.forEach(function(n){return globalThis.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),Be=new Wn,Je=function(e){!me&&e>0&&Be.start(),me+=e,!me&&Be.stop()},Dn=function(e){return!Oe(e)&&!Rn(e)&&getComputedStyle(e).display==="inline"},In=function(){function e(t,n){this.target=t,this.observedBox=n||fe.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=pt(this.target,this.observedBox,!0);return Dn(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),_n=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),be=new WeakMap,Ze=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},ge=function(){function e(){}return e.connect=function(t,n){var r=new _n(t,n);be.set(t,r)},e.observe=function(t,n,r){var i=be.get(t),l=i.observationTargets.length===0;Ze(i.observationTargets,n)<0&&(l&&ne.push(i),i.observationTargets.push(new In(n,r&&r.box)),Je(1),Be.schedule())},e.unobserve=function(t,n){var r=be.get(t),i=Ze(r.observationTargets,n),l=r.observationTargets.length===1;i>=0&&(l&&ne.splice(ne.indexOf(r),1),r.observationTargets.splice(i,1),Je(-1))},e.disconnect=function(t){var n=this,r=be.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Ln=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ge.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ve(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ge.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ve(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ge.unobserve(this,t)},e.prototype.disconnect=function(){ge.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Xn{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Ln)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const Qe=new Xn,et=le({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=Nt().proxy;function r(i){const{onResize:l}=e;l!==void 0&&l(i)}ke(()=>{const i=n.$el;if(i===void 0){Ne("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){Ne("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(Qe.registerHandler(i.nextElementSibling,r),t=!0)}),Me(()=>{t&&Qe.unregisterHandler(n.$el.nextElementSibling)})},render(){return Yt(this.$slots,"default")}});function An(e){const t={isDeactivated:!1};let n=!1;return Vt(()=>{if(t.isDeactivated=!1,!n){n=!0;return}e()}),jt(()=>{t.isDeactivated=!0,n||(n=!0)}),t}const tt=Jt("n-form-item");function wr(e,{defaultSize:t="medium",mergedSize:n,mergedDisabled:r}={}){const i=lt(tt,null);Ut(tt,null);const l=R(n?()=>n(i):()=>{const{size:b}=e;if(b)return b;if(i){const{mergedSize:m}=i;if(m.value!==void 0)return m.value}return t}),d=R(r?()=>r(i):()=>{const{disabled:b}=e;return b!==void 0?b:i?i.disabled.value:!1}),z=R(()=>{const{status:b}=e;return b||(i==null?void 0:i.mergedValidationStatus.value)});return Me(()=>{i&&i.restoreValidation()}),{mergedSizeRef:l,mergedDisabledRef:d,mergedStatusRef:z,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var Fn="[object Symbol]";function Nn(e){return typeof e=="symbol"||Zt(e)&&Qt(e)==Fn}function Yn(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var Vn=1/0,nt=Le?Le.prototype:void 0,rt=nt?nt.toString:void 0;function yt(e){if(typeof e=="string")return e;if(en(e))return Yn(e,yt)+"";if(Nn(e))return rt?rt.call(e):"";var t=e+"";return t=="0"&&1/e==-Vn?"-0":t}function yr(e){return e==null?"":yt(e)}function xt(e,t,n){if(!t)return;const r=tn(),i=lt(nn,null),l=()=>{const d=n==null?void 0:n.value;t.mount({id:d===void 0?e:d+e,head:!0,anchorMetaName:Xe,props:{bPrefix:d?`.${d}-`:void 0},ssr:r}),i!=null&&i.preflightStyleDisabled||rn.mount({id:"n-global",head:!0,anchorMetaName:Xe,ssr:r})};r?l():qt(l)}const jn=le({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=gn();return()=>h(ze,{name:"icon-switch-transition",appear:n.value},t)}}),Un=ae("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[y("svg",`
 height: 1em;
 width: 1em;
 `)]),xr=le({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){xt("-base-icon",Un,ct(e,"clsPrefix"))},render(){return h("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),{cubicBezierEaseInOut:qn}=ut;function it({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${qn} !important`}={}){return[y("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:n,opacity:0}),y("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),y("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const Gn=y([y("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),y("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),y("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),y("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),ae("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[O("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[it()]),O("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[O("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),O("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[O("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[O("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),O("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[O("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),O("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[O("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),O("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[it({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Kn={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Sr=le({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Kn),setup(e){xt("-base-loading",Gn,ct(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,l=t/i;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(jn,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:l,cy:l,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:l,cy:l,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*l} ${2*l}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:l,cy:l,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),Jn=e=>{const{scrollbarColor:t,scrollbarColorHover:n}=e;return{color:t,colorHover:n}},Zn={name:"Scrollbar",common:on,self:Jn},Qn=Zn,{cubicBezierEaseInOut:ot}=ut;function er({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=ot,leaveCubicBezier:i=ot}={}){return[y(`&.${e}-transition-enter-active`,{transition:`all ${t} ${r}!important`}),y(`&.${e}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),y(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),y(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const tr=ae("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[y(">",[ae("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[y("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),y(">",[ae("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),y(">, +",[ae("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[Se("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[y(">",[O("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Se("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[y(">",[O("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Se("disabled",[y(">",[O("scrollbar",{pointerEvents:"none"})])]),y(">",[O("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[er(),y("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),nr=Object.assign(Object.assign({},dt.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),St=le({name:"Scrollbar",props:nr,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=an(e),i=sn("Scrollbar",r,t),l=B(null),d=B(null),z=B(null),b=B(null),m=B(null),S=B(null),p=B(null),W=B(null),D=B(null),F=B(null),N=B(null),C=B(0),I=B(0),_=B(!1),Y=B(!1);let G=!1,K=!1,E,a,s=0,f=0,v=0,w=0;const M=mn(),$=R(()=>{const{value:o}=W,{value:c}=S,{value:u}=F;return o===null||c===null||u===null?0:Math.min(o,u*o/c+e.size*1.5)}),H=R(()=>`${$.value}px`),k=R(()=>{const{value:o}=D,{value:c}=p,{value:u}=N;return o===null||c===null||u===null?0:u*o/c+e.size*1.5}),L=R(()=>`${k.value}px`),V=R(()=>{const{value:o}=W,{value:c}=C,{value:u}=S,{value:g}=F;if(o===null||u===null||g===null)return 0;{const T=u-o;return T?c/T*(g-$.value):0}}),X=R(()=>`${V.value}px`),J=R(()=>{const{value:o}=D,{value:c}=I,{value:u}=p,{value:g}=N;if(o===null||u===null||g===null)return 0;{const T=u-o;return T?c/T*(g-k.value):0}}),Z=R(()=>`${J.value}px`),j=R(()=>{const{value:o}=W,{value:c}=S;return o!==null&&c!==null&&c>o}),he=R(()=>{const{value:o}=D,{value:c}=p;return o!==null&&c!==null&&c>o}),Rt=R(()=>{const{trigger:o}=e;return o==="none"||_.value}),Tt=R(()=>{const{trigger:o}=e;return o==="none"||Y.value}),Q=R(()=>{const{container:o}=e;return o?o():d.value}),zt=R(()=>{const{content:o}=e;return o?o():z.value}),He=An(()=>{e.container||Pe({top:C.value,left:I.value})}),Bt=()=>{He.isDeactivated||ee()},Et=o=>{if(He.isDeactivated)return;const{onResize:c}=e;c&&c(o),ee()},Pe=(o,c)=>{if(!e.scrollable)return;if(typeof o=="number"){ie(c??0,o,0,!1,"auto");return}const{left:u,top:g,index:T,elSize:P,position:U,behavior:x,el:q,debounce:ue=!0}=o;(u!==void 0||g!==void 0)&&ie(u??0,g??0,0,!1,x),q!==void 0?ie(0,q.offsetTop,q.offsetHeight,ue,x):T!==void 0&&P!==void 0?ie(0,T*P,P,ue,x):U==="bottom"?ie(0,Number.MAX_SAFE_INTEGER,0,!1,x):U==="top"&&ie(0,0,0,!1,x)},kt=(o,c)=>{if(!e.scrollable)return;const{value:u}=Q;u&&(typeof o=="object"?u.scrollBy(o):u.scrollBy(o,c||0))};function ie(o,c,u,g,T){const{value:P}=Q;if(P){if(g){const{scrollTop:U,offsetHeight:x}=P;if(c>U){c+u<=U+x||P.scrollTo({left:o,top:c+u-x,behavior:T});return}}P.scrollTo({left:o,top:c,behavior:T})}}function Mt(){Ct(),$t(),ee()}function Ot(){we()}function we(){Ht(),Pt()}function Ht(){a!==void 0&&window.clearTimeout(a),a=window.setTimeout(()=>{Y.value=!1},e.duration)}function Pt(){E!==void 0&&window.clearTimeout(E),E=window.setTimeout(()=>{_.value=!1},e.duration)}function Ct(){E!==void 0&&window.clearTimeout(E),_.value=!0}function $t(){a!==void 0&&window.clearTimeout(a),Y.value=!0}function Wt(o){const{onScroll:c}=e;c&&c(o),Ce()}function Ce(){const{value:o}=Q;o&&(C.value=o.scrollTop,I.value=o.scrollLeft*(i!=null&&i.value?-1:1))}function Dt(){const{value:o}=zt;o&&(S.value=o.offsetHeight,p.value=o.offsetWidth);const{value:c}=Q;c&&(W.value=c.offsetHeight,D.value=c.offsetWidth);const{value:u}=m,{value:g}=b;u&&(N.value=u.offsetWidth),g&&(F.value=g.offsetHeight)}function $e(){const{value:o}=Q;o&&(C.value=o.scrollTop,I.value=o.scrollLeft*(i!=null&&i.value?-1:1),W.value=o.offsetHeight,D.value=o.offsetWidth,S.value=o.scrollHeight,p.value=o.scrollWidth);const{value:c}=m,{value:u}=b;c&&(N.value=c.offsetWidth),u&&(F.value=u.offsetHeight)}function ee(){e.scrollable&&(e.useUnifiedContainer?$e():(Dt(),Ce()))}function We(o){var c;return!(!((c=l.value)===null||c===void 0)&&c.contains(cn(o)))}function It(o){o.preventDefault(),o.stopPropagation(),K=!0,de("mousemove",window,De,!0),de("mouseup",window,Ie,!0),f=I.value,v=i!=null&&i.value?window.innerWidth-o.clientX:o.clientX}function De(o){if(!K)return;E!==void 0&&window.clearTimeout(E),a!==void 0&&window.clearTimeout(a);const{value:c}=D,{value:u}=p,{value:g}=k;if(c===null||u===null)return;const P=(i!=null&&i.value?window.innerWidth-o.clientX-v:o.clientX-v)*(u-c)/(c-g),U=u-c;let x=f+P;x=Math.min(U,x),x=Math.max(x,0);const{value:q}=Q;if(q){q.scrollLeft=x*(i!=null&&i.value?-1:1);const{internalOnUpdateScrollLeft:ue}=e;ue&&ue(x)}}function Ie(o){o.preventDefault(),o.stopPropagation(),te("mousemove",window,De,!0),te("mouseup",window,Ie,!0),K=!1,ee(),We(o)&&we()}function _t(o){o.preventDefault(),o.stopPropagation(),G=!0,de("mousemove",window,ye,!0),de("mouseup",window,xe,!0),s=C.value,w=o.clientY}function ye(o){if(!G)return;E!==void 0&&window.clearTimeout(E),a!==void 0&&window.clearTimeout(a);const{value:c}=W,{value:u}=S,{value:g}=$;if(c===null||u===null)return;const P=(o.clientY-w)*(u-c)/(c-g),U=u-c;let x=s+P;x=Math.min(U,x),x=Math.max(x,0);const{value:q}=Q;q&&(q.scrollTop=x)}function xe(o){o.preventDefault(),o.stopPropagation(),te("mousemove",window,ye,!0),te("mouseup",window,xe,!0),G=!1,ee(),We(o)&&we()}Gt(()=>{const{value:o}=he,{value:c}=j,{value:u}=t,{value:g}=m,{value:T}=b;g&&(o?g.classList.remove(`${u}-scrollbar-rail--disabled`):g.classList.add(`${u}-scrollbar-rail--disabled`)),T&&(c?T.classList.remove(`${u}-scrollbar-rail--disabled`):T.classList.add(`${u}-scrollbar-rail--disabled`))}),ke(()=>{e.container||ee()}),Me(()=>{E!==void 0&&window.clearTimeout(E),a!==void 0&&window.clearTimeout(a),te("mousemove",window,ye,!0),te("mouseup",window,xe,!0)});const Lt=dt("Scrollbar","-scrollbar",tr,Qn,e,t),_e=R(()=>{const{common:{cubicBezierEaseInOut:o,scrollbarBorderRadius:c,scrollbarHeight:u,scrollbarWidth:g},self:{color:T,colorHover:P}}=Lt.value;return{"--n-scrollbar-bezier":o,"--n-scrollbar-color":T,"--n-scrollbar-color-hover":P,"--n-scrollbar-border-radius":c,"--n-scrollbar-width":g,"--n-scrollbar-height":u}}),oe=n?ln("scrollbar",void 0,_e,e):void 0;return Object.assign(Object.assign({},{scrollTo:Pe,scrollBy:kt,sync:ee,syncUnifiedContainer:$e,handleMouseEnterWrapper:Mt,handleMouseLeaveWrapper:Ot}),{mergedClsPrefix:t,rtlEnabled:i,containerScrollTop:C,wrapperRef:l,containerRef:d,contentRef:z,yRailRef:b,xRailRef:m,needYBar:j,needXBar:he,yBarSizePx:H,xBarSizePx:L,yBarTopPx:X,xBarLeftPx:Z,isShowXBar:Rt,isShowYBar:Tt,isIos:M,handleScroll:Wt,handleContentResize:Bt,handleContainerResize:Et,handleYScrollMouseDown:_t,handleXScrollMouseDown:It,cssVars:n?void 0:_e,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:n,triggerDisplayManually:r,rtlEnabled:i,internalHoistYRail:l}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const d=this.trigger==="none",z=()=>h("div",{ref:"yRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},h(d?Fe:ze,d?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?h("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),b=()=>{var S,p;return(S=this.onRender)===null||S===void 0||S.call(this),h("div",Kt(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass,i&&`${n}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(p=t.default)===null||p===void 0?void 0:p.call(t):h("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},h(et,{onResize:this.handleContentResize},{default:()=>h("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},t)})),l?null:z(),this.xScrollable&&h("div",{ref:"xRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},h(d?Fe:ze,d?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?h("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:i?this.xBarLeftPx:void 0,left:i?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},m=this.container?b():h(et,{onResize:this.handleContainerResize},{default:b});return l?h(Ee,null,m,z()):m}}),Rr=St,Tr=St;export{An as A,gr as B,cr as C,br as D,Yn as E,xr as N,et as V,Fe as W,Tr as X,wr as a,it as b,un as c,pr as d,jn as e,Ae as f,lr as g,dr as h,Nn as i,ur as j,ar as k,Rr as l,te as m,Sr as n,de as o,sr as p,fr as q,hr as r,Qn as s,xt as t,mr as u,Qe as v,gn as w,cn as x,yr as y,vr as z};
