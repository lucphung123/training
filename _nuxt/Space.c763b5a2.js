import{e as jt,F as Oe,R as ct,U as Yt,m as ie,s as z,r as E,f as ut,h as He,Q as Vt,x as Ut,L as $e,K as Gt,I as qt,J as Kt,q as dt,z as Jt,P as Qt,p as h,M as Ee,t as ft,y as Zt,B as en}from"./entry.4a3385b7.js";import{b as tn,O as nn,H as rn,S as Fe,F as on,m as an,s as sn,X as Ne,Y as ln,d as se,f as S,x as ht,e as W,c as cn,g as Re,i as we,u as vt,j as pt,l as un,k as dn}from"./light.ac94ac37.js";function fn(e){return e.composedPath()[0]||null}function je(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function mr(e){if(e!=null)return typeof e=="number"?`${e}px`:e.endsWith("px")?e:`${e}px`}function wr(e,t){const n=e.trim().split(/\s+/g),r={top:n[0]};switch(n.length){case 1:r.right=n[0],r.bottom=n[0],r.left=n[0];break;case 2:r.right=n[1],r.left=n[1],r.bottom=n[0];break;case 3:r.right=n[1],r.bottom=n[2],r.left=n[1];break;case 4:r.right=n[1],r.bottom=n[2],r.left=n[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return t===void 0?r:r[t]}function hn(e,t){const[n,r]=e.split(" ");return t?t==="row"?n:r:{row:n,col:r||n}}function vn(e,t="default",n=[]){const i=e.$slots[t];return i===void 0?n:i()}function ke(e,t=!0,n=[]){return e.forEach(r=>{if(r!==null){if(typeof r!="object"){(typeof r=="string"||typeof r=="number")&&n.push(jt(String(r)));return}if(Array.isArray(r)){ke(r,t,n);return}if(r.type===Oe){if(r.children===null)return;Array.isArray(r.children)&&ke(r.children,t,n)}else r.type!==ct&&n.push(r)}}),n}function pn(e,...t){if(Array.isArray(e))e.forEach(n=>pn(n,...t));else return e(...t)}function ce(e){return e.some(t=>Yt(t)?!(t.type===ct||t.type===Oe&&!ce(t.children)):!0)?e:null}function yr(e,t){return e&&ce(e())||t()}function xr(e,t,n){return e&&ce(e(t))||n(t)}function Sr(e,t){const n=e&&ce(e());return t(n||null)}function Rr(e,t,n){const r=e&&ce(e(t));return n(r||null)}function zr(e){return!(e&&ce(e()))}const Ye=ie({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}}),gn=typeof document<"u"&&typeof window<"u";function Br(e){const t=z(e),n=E(t.value);return ut(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function be(e){return e.composedPath()[0]}const bn={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function mn(e,t,n){if(e==="mousemoveoutside"){const r=i=>{t.contains(be(i))||n(i)};return{mousemove:r,touchstart:r}}else if(e==="clickoutside"){let r=!1;const i=d=>{r=!t.contains(be(d))},a=d=>{r&&(t.contains(be(d))||n(d))};return{mousedown:i,mouseup:a,touchstart:i,touchend:a}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function gt(e,t,n){const r=bn[e];let i=r.get(t);i===void 0&&r.set(t,i=new WeakMap);let a=i.get(n);return a===void 0&&i.set(n,a=mn(e,t,n)),a}function wn(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=gt(e,t,n);return Object.keys(i).forEach(a=>{de(a,document,i[a],r)}),!0}return!1}function yn(e,t,n,r){if(e==="mousemoveoutside"||e==="clickoutside"){const i=gt(e,t,n);return Object.keys(i).forEach(a=>{te(a,document,i[a],r)}),!0}return!1}function xn(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function r(){e.set(this,!0),t.set(this,!0)}function i(s,l,f){const g=s[l];return s[l]=function(){return f.apply(s,arguments),g.apply(s,arguments)},s}function a(s,l){s[l]=Event.prototype[l]}const d=new WeakMap,w=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function v(){var s;return(s=d.get(this))!==null&&s!==void 0?s:null}function p(s,l){w!==void 0&&Object.defineProperty(s,"currentTarget",{configurable:!0,enumerable:!0,get:l??w.get})}const y={bubble:{},capture:{}},b={};function $(){const s=function(l){const{type:f,eventPhase:g,bubbles:x}=l,P=be(l);if(g===2)return;const X=g===1?"capture":"bubble";let I=P;const H=[];for(;I===null&&(I=window),H.push(I),I!==window;)I=I.parentNode||null;const N=y.capture[f],V=y.bubble[f];if(i(l,"stopPropagation",n),i(l,"stopImmediatePropagation",r),p(l,v),X==="capture"){if(N===void 0)return;for(let j=H.length-1;j>=0&&!e.has(l);--j){const J=H[j],Q=N.get(J);if(Q!==void 0){d.set(l,J);for(const U of Q){if(t.has(l))break;U(l)}}if(j===0&&!x&&V!==void 0){const U=V.get(J);if(U!==void 0)for(const he of U){if(t.has(l))break;he(l)}}}}else if(X==="bubble"){if(V===void 0)return;for(let j=0;j<H.length&&!e.has(l);++j){const J=H[j],Q=V.get(J);if(Q!==void 0){d.set(l,J);for(const U of Q){if(t.has(l))break;U(l)}}}}a(l,"stopPropagation"),a(l,"stopImmediatePropagation"),p(l)};return s.displayName="evtdUnifiedHandler",s}function D(){const s=function(l){const{type:f,eventPhase:g}=l;if(g!==2)return;const x=b[f];x!==void 0&&x.forEach(P=>P(l))};return s.displayName="evtdUnifiedWindowEventHandler",s}const _=$(),A=D();function B(s,l){const f=y[s];return f[l]===void 0&&(f[l]=new Map,window.addEventListener(l,_,s==="capture")),f[l]}function k(s){return b[s]===void 0&&(b[s]=new Set,window.addEventListener(s,A)),b[s]}function C(s,l){let f=s.get(l);return f===void 0&&s.set(l,f=new Set),f}function F(s,l,f,g){const x=y[l][f];if(x!==void 0){const P=x.get(s);if(P!==void 0&&P.has(g))return!0}return!1}function M(s,l){const f=b[s];return!!(f!==void 0&&f.has(l))}function K(s,l,f,g){let x;if(typeof g=="object"&&g.once===!0?x=N=>{O(s,l,x,g),f(N)}:x=f,wn(s,l,x,g))return;const X=g===!0||typeof g=="object"&&g.capture===!0?"capture":"bubble",I=B(X,s),H=C(I,l);if(H.has(x)||H.add(x),l===window){const N=k(s);N.has(x)||N.add(x)}}function O(s,l,f,g){if(yn(s,l,f,g))return;const P=g===!0||typeof g=="object"&&g.capture===!0,X=P?"capture":"bubble",I=B(X,s),H=C(I,l);if(l===window&&!F(l,P?"bubble":"capture",s,f)&&M(s,f)){const V=b[s];V.delete(f),V.size===0&&(window.removeEventListener(s,A),b[s]=void 0)}H.has(f)&&H.delete(f),H.size===0&&I.delete(l),I.size===0&&(window.removeEventListener(s,_,X==="capture"),y[X][s]=void 0)}return{on:K,off:O}}const{on:de,off:te}=xn();function Tr(e,t){return ut(e,n=>{n!==void 0&&(t.value=n)}),z(()=>e.value===void 0?t.value:e.value)}function Sn(){const e=E(!1);return He(()=>{e.value=!0}),Vt(e)}const Rn=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function zn(){return Rn}function Ve(e,t){console.error(`[vueuc/${e}]: ${t}`)}var ne=[],Bn=function(){return ne.some(function(e){return e.activeTargets.length>0})},Tn=function(){return ne.some(function(e){return e.skippedTargets.length>0})},Ue="ResizeObserver loop completed with undelivered notifications.",En=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Ue}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Ue),window.dispatchEvent(e)},fe;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(fe||(fe={}));var re=function(e){return Object.freeze(e)},kn=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,re(this)}return e}(),bt=function(){function e(t,n,r,i){return this.x=t,this.y=n,this.width=r,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,re(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,i=t.top,a=t.right,d=t.bottom,w=t.left,v=t.width,p=t.height;return{x:n,y:r,top:i,right:a,bottom:d,left:w,width:v,height:p}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Ce=function(e){return e instanceof SVGElement&&"getBBox"in e},mt=function(e){if(Ce(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,a=i.offsetWidth,d=i.offsetHeight;return!(a||d||e.getClientRects().length)},Ge=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},Mn=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},wt=typeof window<"u"?window:{},ve=new WeakMap,qe=/auto|scroll/,On=/^tb|vertical/,Hn=/msie|trident/i.test(globalThis.navigator&&wt.navigator.userAgent),Y=function(e){return parseFloat(e||"0")},le=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new kn((n?t:e)||0,(n?e:t)||0)},Ke=re({devicePixelContentBoxSize:le(),borderBoxSize:le(),contentBoxSize:le(),contentRect:new bt(0,0,0,0)}),yt=function(e,t){if(t===void 0&&(t=!1),ve.has(e)&&!t)return ve.get(e);if(mt(e))return ve.set(e,Ke),Ke;var n=getComputedStyle(e),r=Ce(e)&&e.ownerSVGElement&&e.getBBox(),i=!Hn&&n.boxSizing==="border-box",a=On.test(n.writingMode||""),d=!r&&qe.test(n.overflowY||""),w=!r&&qe.test(n.overflowX||""),v=r?0:Y(n.paddingTop),p=r?0:Y(n.paddingRight),y=r?0:Y(n.paddingBottom),b=r?0:Y(n.paddingLeft),$=r?0:Y(n.borderTopWidth),D=r?0:Y(n.borderRightWidth),_=r?0:Y(n.borderBottomWidth),A=r?0:Y(n.borderLeftWidth),B=b+p,k=v+y,C=A+D,F=$+_,M=w?e.offsetHeight-F-e.clientHeight:0,K=d?e.offsetWidth-C-e.clientWidth:0,O=i?B+C:0,s=i?k+F:0,l=r?r.width:Y(n.width)-O-K,f=r?r.height:Y(n.height)-s-M,g=l+B+K+C,x=f+k+M+F,P=re({devicePixelContentBoxSize:le(Math.round(l*devicePixelRatio),Math.round(f*devicePixelRatio),a),borderBoxSize:le(g,x,a),contentBoxSize:le(l,f,a),contentRect:new bt(b,v,l,f)});return ve.set(e,P),P},xt=function(e,t,n){var r=yt(e,n),i=r.borderBoxSize,a=r.contentBoxSize,d=r.devicePixelContentBoxSize;switch(t){case fe.DEVICE_PIXEL_CONTENT_BOX:return d;case fe.BORDER_BOX:return i;default:return a}},$n=function(){function e(t){var n=yt(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=re([n.borderBoxSize]),this.contentBoxSize=re([n.contentBoxSize]),this.devicePixelContentBoxSize=re([n.devicePixelContentBoxSize])}return e}(),St=function(e){if(mt(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Cn=function(){var e=1/0,t=[];ne.forEach(function(d){if(d.activeTargets.length!==0){var w=[];d.activeTargets.forEach(function(p){var y=new $n(p.target),b=St(p.target);w.push(y),p.lastReportedSize=xt(p.target,p.observedBox),b<e&&(e=b)}),t.push(function(){d.callback.call(d.observer,w,d.observer)}),d.activeTargets.splice(0,d.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var i=r[n];i()}return e},Je=function(e){ne.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(St(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},Pn=function(){var e=0;for(Je(e);Bn();)e=Cn(),Je(e);return Tn()&&En(),e>0},ze,Rt=[],Wn=function(){return Rt.splice(0).forEach(function(e){return e()})},_n=function(e){if(!ze){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Wn()}).observe(n,r),ze=function(){n.textContent="".concat(t?t--:t++)}}Rt.push(e),ze()},In=function(e){_n(function(){requestAnimationFrame(e)})},me=0,Ln=function(){return!!me},Dn=250,Xn={attributes:!0,characterData:!0,childList:!0,subtree:!0},Qe=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ze=function(e){return e===void 0&&(e=0),Date.now()+e},Be=!1,An=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=Dn),!Be){Be=!0;var r=Ze(t);In(function(){var i=!1;try{i=Pn()}finally{if(Be=!1,t=r-Ze(),!Ln())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,Xn)};document.body?n():wt.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Qe.forEach(function(n){return globalThis.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Qe.forEach(function(n){return globalThis.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),Me=new An,et=function(e){!me&&e>0&&Me.start(),me+=e,!me&&Me.stop()},Fn=function(e){return!Ce(e)&&!Mn(e)&&getComputedStyle(e).display==="inline"},Nn=function(){function e(t,n){this.target=t,this.observedBox=n||fe.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=xt(this.target,this.observedBox,!0);return Fn(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),jn=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),pe=new WeakMap,tt=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},ge=function(){function e(){}return e.connect=function(t,n){var r=new jn(t,n);pe.set(t,r)},e.observe=function(t,n,r){var i=pe.get(t),a=i.observationTargets.length===0;tt(i.observationTargets,n)<0&&(a&&ne.push(i),i.observationTargets.push(new Nn(n,r&&r.box)),et(1),Me.schedule())},e.unobserve=function(t,n){var r=pe.get(t),i=tt(r.observationTargets,n),a=r.observationTargets.length===1;i>=0&&(a&&ne.splice(ne.indexOf(r),1),r.observationTargets.splice(i,1),et(-1))},e.disconnect=function(t){var n=this,r=pe.get(t);r.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),Yn=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ge.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ge(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ge.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ge(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ge.unobserve(this,t)},e.prototype.disconnect=function(){ge.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Vn{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||Yn)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const r=this.elHandlersMap.get(n.target);r!==void 0&&r(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const nt=new Vn,rt=ie({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=Ut().proxy;function r(i){const{onResize:a}=e;a!==void 0&&a(i)}He(()=>{const i=n.$el;if(i===void 0){Ve("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){Ve("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(nt.registerHandler(i.nextElementSibling,r),t=!0)}),$e(()=>{t&&nt.unregisterHandler(n.$el.nextElementSibling)})},render(){return Gt(this.$slots,"default")}});function Un(e){const t={isDeactivated:!1};let n=!1;return qt(()=>{if(t.isDeactivated=!1,!n){n=!0;return}e()}),Kt(()=>{t.isDeactivated=!0,n||(n=!0)}),t}const it=tn("n-form-item");function Er(e,{defaultSize:t="medium",mergedSize:n,mergedDisabled:r}={}){const i=dt(it,null);Jt(it,null);const a=z(n?()=>n(i):()=>{const{size:v}=e;if(v)return v;if(i){const{mergedSize:p}=i;if(p.value!==void 0)return p.value}return t}),d=z(r?()=>r(i):()=>{const{disabled:v}=e;return v!==void 0?v:i?i.disabled.value:!1}),w=z(()=>{const{status:v}=e;return v||(i==null?void 0:i.mergedValidationStatus.value)});return $e(()=>{i&&i.restoreValidation()}),{mergedSizeRef:a,mergedDisabledRef:d,mergedStatusRef:w,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var Gn="[object Symbol]";function qn(e){return typeof e=="symbol"||nn(e)&&rn(e)==Gn}function Kn(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var Jn=1/0,ot=Fe?Fe.prototype:void 0,at=ot?ot.toString:void 0;function zt(e){if(typeof e=="string")return e;if(on(e))return Kn(e,zt)+"";if(qn(e))return at?at.call(e):"";var t=e+"";return t=="0"&&1/e==-Jn?"-0":t}function kr(e){return e==null?"":zt(e)}function Bt(e,t,n){if(!t)return;const r=an(),i=dt(sn,null),a=()=>{const d=n==null?void 0:n.value;t.mount({id:d===void 0?e:d+e,head:!0,anchorMetaName:Ne,props:{bPrefix:d?`.${d}-`:void 0},ssr:r}),i!=null&&i.preflightStyleDisabled||ln.mount({id:"n-global",head:!0,anchorMetaName:Ne,ssr:r})};r?a():Qt(a)}const Qn=ie({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=Sn();return()=>h(Ee,{name:"icon-switch-transition",appear:n.value},t)}}),Zn=se("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[S("svg",`
 height: 1em;
 width: 1em;
 `)]),Mr=ie({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Bt("-base-icon",Zn,ft(e,"clsPrefix"))},render(){return h("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),{cubicBezierEaseInOut:er}=ht;function st({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${er} !important`}={}){return[S("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:n,opacity:0}),S("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),S("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const tr=S([S("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),S("@keyframes loading-layer-rotate",`
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
 `),S("@keyframes loading-left-spin",`
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
 `),S("@keyframes loading-right-spin",`
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
 `),se("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[W("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[st()]),W("container",`
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
 `,[W("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),W("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[W("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[W("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),W("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[W("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),W("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[W("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),W("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[st({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),nr={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Or=ie({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},nr),setup(e){Bt("-base-loading",tr,ft(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,a=t/i;return h("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},h(Qn,null,{default:()=>this.show?h("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},h("div",{class:`${e}-base-loading__container`},h("div",{class:`${e}-base-loading__container-layer`},h("div",{class:`${e}-base-loading__container-layer-left`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),h("div",{class:`${e}-base-loading__container-layer-patch`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),h("div",{class:`${e}-base-loading__container-layer-right`},h("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},h("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:a,cy:a,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):h("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),rr=e=>{const{scrollbarColor:t,scrollbarColorHover:n}=e;return{color:t,colorHover:n}},ir={name:"Scrollbar",common:cn,self:rr},or=ir,{cubicBezierEaseInOut:lt}=ht;function ar({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:r=lt,leaveCubicBezier:i=lt}={}){return[S(`&.${e}-transition-enter-active`,{transition:`all ${t} ${r}!important`}),S(`&.${e}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),S(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),S(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const sr=se("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[S(">",[se("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),S(">",[se("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),S(">, +",[se("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[Re("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[S(">",[W("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Re("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[S(">",[W("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Re("disabled",[S(">",[W("scrollbar",{pointerEvents:"none"})])]),S(">",[W("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[ar(),S("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),lr=Object.assign(Object.assign({},we.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Tt=ie({name:"Scrollbar",props:lr,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=vt(e),i=pt("Scrollbar",r,t),a=E(null),d=E(null),w=E(null),v=E(null),p=E(null),y=E(null),b=E(null),$=E(null),D=E(null),_=E(null),A=E(null),B=E(0),k=E(0),C=E(!1),F=E(!1);let M=!1,K=!1,O,s,l=0,f=0,g=0,x=0;const P=zn(),X=z(()=>{const{value:o}=$,{value:c}=y,{value:u}=_;return o===null||c===null||u===null?0:Math.min(o,u*o/c+e.size*1.5)}),I=z(()=>`${X.value}px`),H=z(()=>{const{value:o}=D,{value:c}=b,{value:u}=A;return o===null||c===null||u===null?0:u*o/c+e.size*1.5}),N=z(()=>`${H.value}px`),V=z(()=>{const{value:o}=$,{value:c}=B,{value:u}=y,{value:m}=_;if(o===null||u===null||m===null)return 0;{const T=u-o;return T?c/T*(m-X.value):0}}),j=z(()=>`${V.value}px`),J=z(()=>{const{value:o}=D,{value:c}=k,{value:u}=b,{value:m}=A;if(o===null||u===null||m===null)return 0;{const T=u-o;return T?c/T*(m-H.value):0}}),Q=z(()=>`${J.value}px`),U=z(()=>{const{value:o}=$,{value:c}=y;return o!==null&&c!==null&&c>o}),he=z(()=>{const{value:o}=D,{value:c}=b;return o!==null&&c!==null&&c>o}),Et=z(()=>{const{trigger:o}=e;return o==="none"||C.value}),kt=z(()=>{const{trigger:o}=e;return o==="none"||F.value}),Z=z(()=>{const{container:o}=e;return o?o():d.value}),Mt=z(()=>{const{content:o}=e;return o?o():w.value}),Pe=Un(()=>{e.container||We({top:B.value,left:k.value})}),Ot=()=>{Pe.isDeactivated||ee()},Ht=o=>{if(Pe.isDeactivated)return;const{onResize:c}=e;c&&c(o),ee()},We=(o,c)=>{if(!e.scrollable)return;if(typeof o=="number"){oe(c??0,o,0,!1,"auto");return}const{left:u,top:m,index:T,elSize:L,position:G,behavior:R,el:q,debounce:ue=!0}=o;(u!==void 0||m!==void 0)&&oe(u??0,m??0,0,!1,R),q!==void 0?oe(0,q.offsetTop,q.offsetHeight,ue,R):T!==void 0&&L!==void 0?oe(0,T*L,L,ue,R):G==="bottom"?oe(0,Number.MAX_SAFE_INTEGER,0,!1,R):G==="top"&&oe(0,0,0,!1,R)},$t=(o,c)=>{if(!e.scrollable)return;const{value:u}=Z;u&&(typeof o=="object"?u.scrollBy(o):u.scrollBy(o,c||0))};function oe(o,c,u,m,T){const{value:L}=Z;if(L){if(m){const{scrollTop:G,offsetHeight:R}=L;if(c>G){c+u<=G+R||L.scrollTo({left:o,top:c+u-R,behavior:T});return}}L.scrollTo({left:o,top:c,behavior:T})}}function Ct(){It(),Lt(),ee()}function Pt(){ye()}function ye(){Wt(),_t()}function Wt(){s!==void 0&&window.clearTimeout(s),s=window.setTimeout(()=>{F.value=!1},e.duration)}function _t(){O!==void 0&&window.clearTimeout(O),O=window.setTimeout(()=>{C.value=!1},e.duration)}function It(){O!==void 0&&window.clearTimeout(O),C.value=!0}function Lt(){s!==void 0&&window.clearTimeout(s),F.value=!0}function Dt(o){const{onScroll:c}=e;c&&c(o),_e()}function _e(){const{value:o}=Z;o&&(B.value=o.scrollTop,k.value=o.scrollLeft*(i!=null&&i.value?-1:1))}function Xt(){const{value:o}=Mt;o&&(y.value=o.offsetHeight,b.value=o.offsetWidth);const{value:c}=Z;c&&($.value=c.offsetHeight,D.value=c.offsetWidth);const{value:u}=p,{value:m}=v;u&&(A.value=u.offsetWidth),m&&(_.value=m.offsetHeight)}function Ie(){const{value:o}=Z;o&&(B.value=o.scrollTop,k.value=o.scrollLeft*(i!=null&&i.value?-1:1),$.value=o.offsetHeight,D.value=o.offsetWidth,y.value=o.scrollHeight,b.value=o.scrollWidth);const{value:c}=p,{value:u}=v;c&&(A.value=c.offsetWidth),u&&(_.value=u.offsetHeight)}function ee(){e.scrollable&&(e.useUnifiedContainer?Ie():(Xt(),_e()))}function Le(o){var c;return!(!((c=a.value)===null||c===void 0)&&c.contains(fn(o)))}function At(o){o.preventDefault(),o.stopPropagation(),K=!0,de("mousemove",window,De,!0),de("mouseup",window,Xe,!0),f=k.value,g=i!=null&&i.value?window.innerWidth-o.clientX:o.clientX}function De(o){if(!K)return;O!==void 0&&window.clearTimeout(O),s!==void 0&&window.clearTimeout(s);const{value:c}=D,{value:u}=b,{value:m}=H;if(c===null||u===null)return;const L=(i!=null&&i.value?window.innerWidth-o.clientX-g:o.clientX-g)*(u-c)/(c-m),G=u-c;let R=f+L;R=Math.min(G,R),R=Math.max(R,0);const{value:q}=Z;if(q){q.scrollLeft=R*(i!=null&&i.value?-1:1);const{internalOnUpdateScrollLeft:ue}=e;ue&&ue(R)}}function Xe(o){o.preventDefault(),o.stopPropagation(),te("mousemove",window,De,!0),te("mouseup",window,Xe,!0),K=!1,ee(),Le(o)&&ye()}function Ft(o){o.preventDefault(),o.stopPropagation(),M=!0,de("mousemove",window,xe,!0),de("mouseup",window,Se,!0),l=B.value,x=o.clientY}function xe(o){if(!M)return;O!==void 0&&window.clearTimeout(O),s!==void 0&&window.clearTimeout(s);const{value:c}=$,{value:u}=y,{value:m}=X;if(c===null||u===null)return;const L=(o.clientY-x)*(u-c)/(c-m),G=u-c;let R=l+L;R=Math.min(G,R),R=Math.max(R,0);const{value:q}=Z;q&&(q.scrollTop=R)}function Se(o){o.preventDefault(),o.stopPropagation(),te("mousemove",window,xe,!0),te("mouseup",window,Se,!0),M=!1,ee(),Le(o)&&ye()}Zt(()=>{const{value:o}=he,{value:c}=U,{value:u}=t,{value:m}=p,{value:T}=v;m&&(o?m.classList.remove(`${u}-scrollbar-rail--disabled`):m.classList.add(`${u}-scrollbar-rail--disabled`)),T&&(c?T.classList.remove(`${u}-scrollbar-rail--disabled`):T.classList.add(`${u}-scrollbar-rail--disabled`))}),He(()=>{e.container||ee()}),$e(()=>{O!==void 0&&window.clearTimeout(O),s!==void 0&&window.clearTimeout(s),te("mousemove",window,xe,!0),te("mouseup",window,Se,!0)});const Nt=we("Scrollbar","-scrollbar",sr,or,e,t),Ae=z(()=>{const{common:{cubicBezierEaseInOut:o,scrollbarBorderRadius:c,scrollbarHeight:u,scrollbarWidth:m},self:{color:T,colorHover:L}}=Nt.value;return{"--n-scrollbar-bezier":o,"--n-scrollbar-color":T,"--n-scrollbar-color-hover":L,"--n-scrollbar-border-radius":c,"--n-scrollbar-width":m,"--n-scrollbar-height":u}}),ae=n?un("scrollbar",void 0,Ae,e):void 0;return Object.assign(Object.assign({},{scrollTo:We,scrollBy:$t,sync:ee,syncUnifiedContainer:Ie,handleMouseEnterWrapper:Ct,handleMouseLeaveWrapper:Pt}),{mergedClsPrefix:t,rtlEnabled:i,containerScrollTop:B,wrapperRef:a,containerRef:d,contentRef:w,yRailRef:v,xRailRef:p,needYBar:U,needXBar:he,yBarSizePx:I,xBarSizePx:N,yBarTopPx:j,xBarLeftPx:Q,isShowXBar:Et,isShowYBar:kt,isIos:P,handleScroll:Dt,handleContentResize:Ot,handleContainerResize:Ht,handleYScrollMouseDown:Ft,handleXScrollMouseDown:At,cssVars:n?void 0:Ae,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:n,triggerDisplayManually:r,rtlEnabled:i,internalHoistYRail:a}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const d=this.trigger==="none",w=()=>h("div",{ref:"yRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},h(d?Ye:Ee,d?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?h("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),v=()=>{var y,b;return(y=this.onRender)===null||y===void 0||y.call(this),h("div",en(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass,i&&`${n}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?(b=t.default)===null||b===void 0?void 0:b.call(t):h("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},h(rt,{onResize:this.handleContentResize},{default:()=>h("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},t)})),a?null:w(),this.xScrollable&&h("div",{ref:"xRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},h(d?Ye:Ee,d?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?h("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:i?this.xBarLeftPx:void 0,left:i?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},p=this.container?v():h(rt,{onResize:this.handleContainerResize},{default:v});return a?h(Oe,null,p,w()):p}}),Hr=Tt,$r=Tt,cr={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},ur=()=>cr,dr={name:"Space",self:ur},fr=dr;let Te;const hr=()=>{if(!gn)return!0;if(Te===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),Te=t}return Te},vr=Object.assign(Object.assign({},we.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Cr=ie({name:"Space",props:vr,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=vt(e),r=we("Space","-space",void 0,fr,e,t),i=pt("Space",n,t);return{useGap:hr(),rtlEnabled:i,mergedClsPrefix:t,margin:z(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[dn("gap",a)]:d}}=r.value,{row:w,col:v}=hn(d);return{horizontal:je(v),vertical:je(w)}})}},render(){const{vertical:e,align:t,inline:n,justify:r,itemStyle:i,margin:a,wrap:d,mergedClsPrefix:w,rtlEnabled:v,useGap:p,wrapItem:y,internalUseGap:b}=this,$=ke(vn(this));if(!$.length)return null;const D=`${a.horizontal}px`,_=`${a.horizontal/2}px`,A=`${a.vertical}px`,B=`${a.vertical/2}px`,k=$.length-1,C=r.startsWith("space-");return h("div",{role:"none",class:[`${w}-space`,v&&`${w}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(r)?"flex-"+r:r,flexWrap:!d||e?"nowrap":"wrap",marginTop:p||e?"":`-${B}`,marginBottom:p||e?"":`-${B}`,alignItems:t,gap:p?`${a.vertical}px ${a.horizontal}px`:""}},!y&&(p||b)?$:$.map((F,M)=>h("div",{role:"none",style:[i,{maxWidth:"100%"},p?"":e?{marginBottom:M!==k?A:""}:v?{marginLeft:C?r==="space-between"&&M===k?"":_:M!==k?D:"",marginRight:C?r==="space-between"&&M===0?"":_:"",paddingTop:B,paddingBottom:B}:{marginRight:C?r==="space-between"&&M===k?"":_:M!==k?D:"",marginLeft:C?r==="space-between"&&M===0?"":_:"",paddingTop:B,paddingBottom:B}]},F)))}});export{gn as A,zr as B,Kn as C,Hr as N,rt as V,Ye as W,$r as X,Cr as _,Tr as a,Er as b,Br as c,Sr as d,yr as e,Mr as f,wr as g,pn as h,te as i,qn as j,ke as k,je as l,nt as m,Or as n,de as o,mr as p,Sn as q,xr as r,or as s,fn as t,Bt as u,kr as v,st as w,Qn as x,Rr as y,Un as z};
