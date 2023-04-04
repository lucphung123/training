import{m as ae,h as Ie,I as ln,J as rn,s as P,r as O,p as a,B as an,A as co,K as sn,L as Ro,t as re,q as uo,M as To,f as Te,z as ro,y as cn,F as dn,k as un,C as hn}from"./entry.4a3385b7.js";import{m as Fo,d as B,g as Z,f as Q,h as me,c as $e,e as _,u as ho,i as fe,s as fn,k as J,l as Be,v as fo,a as N,j as vn,b as gn}from"./light.ac94ac37.js";import{c as Oo,a as Ve,b as bn,r as Re,i as vo,f as Mo,d as pn,h as Ke,e as mn,g as bo,p as Cn,N as xn,j as wn,u as yn,k as io,V as Sn,l as zn,m as kn,n as po}from"./Popover.6853abd9.js";import{c as je,l as ao,p as De,V as mo,m as Co,u as Rn,f as go,s as Tn,g as eo,d as so,n as Fn,N as On,e as Mn,h as ue,W as Pn,a as xo,b as In,q as $n,t as Bn}from"./Space.c763b5a2.js";import{r as _n,u as Po,a as Ln}from"./Suffix.5c1f8bc1.js";function En(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function oo(e){const o=e.filter(n=>n!==void 0);if(o.length!==0)return o.length===1?o[0]:n=>{e.forEach(i=>{i&&i(n)})}}const An=new WeakSet;function Hn(e){An.add(e)}function wo(e){return e&-e}class Nn{constructor(o,n){this.l=o,this.min=n;const i=new Array(o+1);for(let r=0;r<o+1;++r)i[r]=0;this.ft=i}add(o,n){if(n===0)return;const{l:i,ft:r}=this;for(o+=1;o<=i;)r[o]+=n,o+=wo(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:n,min:i,l:r}=this;if(o>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=o*i;for(;o>0;)s+=n[o],o-=wo(o);return s}getBound(o){let n=0,i=this.l;for(;i>n;){const r=Math.floor((n+i)/2),s=this.sum(r);if(s>o){i=r;continue}else if(s<o){if(n===r)return this.sum(n+1)<=o?n+1:r;n=r}else return r}return n}}let We;function Dn(){return We===void 0&&("matchMedia"in window?We=window.matchMedia("(pointer:coarse)").matches:We=!1),We}let no;function yo(){return no===void 0&&(no="chrome"in window?window.devicePixelRatio:1),no}const Wn=Ve(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ve("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ve("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Vn=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=Fo();Wn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Oo,ssr:o}),Ie(()=>{const{defaultScrollIndex:f,defaultScrollKey:p}=e;f!=null?h({index:f}):p!=null&&h({key:p})});let n=!1,i=!1;ln(()=>{if(n=!1,!i){i=!0;return}h({top:y.value,left:b})}),rn(()=>{n=!0,i||(i=!0)});const r=P(()=>{const f=new Map,{keyField:p}=e;return e.items.forEach((M,j)=>{f.set(M[p],j)}),f}),s=O(null),d=O(void 0),l=new Map,m=P(()=>{const{items:f,itemSize:p,keyField:M}=e,j=new Nn(f.length,p);return f.forEach((K,V)=>{const E=K[M],G=l.get(E);G!==void 0&&j.add(V,G)}),j}),x=O(0);let b=0;const y=O(0),R=je(()=>Math.max(m.value.getBound(y.value-ao(e.paddingTop))-1,0)),C=P(()=>{const{value:f}=d;if(f===void 0)return[];const{items:p,itemSize:M}=e,j=R.value,K=Math.min(j+Math.ceil(f/M+1),p.length-1),V=[];for(let E=j;E<=K;++E)V.push(p[E]);return V}),h=(f,p)=>{if(typeof f=="number"){z(f,p,"auto");return}const{left:M,top:j,index:K,key:V,position:E,behavior:G,debounce:c=!0}=f;if(M!==void 0||j!==void 0)z(M,j,G);else if(K!==void 0)S(K,G,c);else if(V!==void 0){const g=r.value.get(V);g!==void 0&&S(g,G,c)}else E==="bottom"?z(0,Number.MAX_SAFE_INTEGER,G):E==="top"&&z(0,0,G)};let k,F=null;function S(f,p,M){const{value:j}=m,K=j.sum(f)+ao(e.paddingTop);if(!M)s.value.scrollTo({left:0,top:K,behavior:p});else{k=f,F!==null&&window.clearTimeout(F),F=window.setTimeout(()=>{k=void 0,F=null},16);const{scrollTop:V,offsetHeight:E}=s.value;if(K>V){const G=j.get(f);K+G<=V+E||s.value.scrollTo({left:0,top:K+G-E,behavior:p})}else s.value.scrollTo({left:0,top:K,behavior:p})}}function z(f,p,M){s.value.scrollTo({left:f,top:p,behavior:M})}function W(f,p){var M,j,K;if(n||e.ignoreItemResize||oe(p.target))return;const{value:V}=m,E=r.value.get(f),G=V.get(E),c=(K=(j=(M=p.borderBoxSize)===null||M===void 0?void 0:M[0])===null||j===void 0?void 0:j.blockSize)!==null&&K!==void 0?K:p.contentRect.height;if(c===G)return;c-e.itemSize===0?l.delete(f):l.set(f,c-e.itemSize);const D=c-G;if(D===0)return;V.add(E,D);const ne=s.value;if(ne!=null){if(k===void 0){const se=V.sum(E);ne.scrollTop>se&&ne.scrollBy(0,D)}else if(E<k)ne.scrollBy(0,D);else if(E===k){const se=V.sum(E);c+se>ne.scrollTop+ne.offsetHeight&&ne.scrollBy(0,D)}le()}x.value++}const Y=!Dn();let U=!1;function H(f){var p;(p=e.onScroll)===null||p===void 0||p.call(e,f),(!Y||!U)&&le()}function q(f){var p;if((p=e.onWheel)===null||p===void 0||p.call(e,f),Y){const M=s.value;if(M!=null){if(f.deltaX===0&&(M.scrollTop===0&&f.deltaY<=0||M.scrollTop+M.offsetHeight>=M.scrollHeight&&f.deltaY>=0))return;f.preventDefault(),M.scrollTop+=f.deltaY/yo(),M.scrollLeft+=f.deltaX/yo(),le(),U=!0,bn(()=>{U=!1})}}}function ee(f){if(n||oe(f.target)||f.contentRect.height===d.value)return;d.value=f.contentRect.height;const{onResize:p}=e;p!==void 0&&p(f)}function le(){const{value:f}=s;f!=null&&(y.value=f.scrollTop,b=f.scrollLeft)}function oe(f){let p=f;for(;p!==null;){if(p.style.display==="none")return!0;p=p.parentElement}return!1}return{listHeight:d,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:P(()=>{const{itemResizable:f}=e,p=De(m.value.sum());return x.value,[e.itemsStyle,{boxSizing:"content-box",height:f?"":p,minHeight:f?p:"",paddingTop:De(e.paddingTop),paddingBottom:De(e.paddingBottom)}]}),visibleItemsStyle:P(()=>(x.value,{transform:`translateY(${De(m.value.sum(R.value))})`})),viewportItems:C,listElRef:s,itemsElRef:O(null),scrollTo:h,handleListResize:ee,handleListScroll:H,handleListWheel:q,handleItemResize:W}},render(){const{itemResizable:e,keyField:o,keyToIndex:n,visibleItemsTag:i}=this;return a(mo,{onResize:this.handleListResize},{default:()=>{var r,s;return a("div",an(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(d=>{const l=d[o],m=n.get(l),x=this.$slots.default({item:d,index:m})[0];return e?a(mo,{key:l,onResize:b=>this.handleItemResize(l,b)},{default:()=>x}):(x.key=l,x)})})]):(s=(r=this.$slots).empty)===null||s===void 0?void 0:s.call(r)])}})}}),Se="v-hidden",jn=Ve("[v-hidden]",{display:"none!important"}),So=ae({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const n=O(null),i=O(null);function r(){const{value:d}=n,{getCounter:l,getTail:m}=e;let x;if(l!==void 0?x=l():x=i.value,!d||!x)return;x.hasAttribute(Se)&&x.removeAttribute(Se);const{children:b}=d,y=d.offsetWidth,R=[],C=o.tail?m==null?void 0:m():null;let h=C?C.offsetWidth:0,k=!1;const F=d.children.length-(o.tail?1:0);for(let z=0;z<F-1;++z){if(z<0)continue;const W=b[z];if(k){W.hasAttribute(Se)||W.setAttribute(Se,"");continue}else W.hasAttribute(Se)&&W.removeAttribute(Se);const Y=W.offsetWidth;if(h+=Y,R[z]=Y,h>y){const{updateCounter:U}=e;for(let H=z;H>=0;--H){const q=F-1-H;U!==void 0?U(q):x.textContent=`${q}`;const ee=x.offsetWidth;if(h-=R[H],h+ee<=y||H===0){k=!0,z=H-1,C&&(z===-1?(C.style.maxWidth=`${y-ee}px`,C.style.boxSizing="border-box"):C.style.maxWidth="");break}}}}const{onUpdateOverflow:S}=e;k?S!==void 0&&S(!0):(S!==void 0&&S(!1),x.setAttribute(Se,""))}const s=Fo();return jn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Oo,ssr:s}),Ie(r),{selfRef:n,counterRef:i,sync:r}},render(){const{$slots:e}=this;return co(this.sync),a("div",{class:"v-overflow",ref:"selfRef"},[sn(e,"default"),e.counter?e.counter():a("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Io(e,o){o&&(Ie(()=>{const{value:n}=e;n&&Co.registerHandler(n,o)}),Ro(()=>{const{value:n}=e;n&&Co.unregisterHandler(n)}))}const Kn=ae({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Un=_n("close",a("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),qn=ae({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Gn=B("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[Z("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),Q("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),me("disabled",[Q("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Q("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),Q("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),Q("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),Q("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Z("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Z("round",[Q("&::before",`
 border-radius: 50%;
 `)])]),Yn=ae({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Rn("-base-close",Gn,re(e,"clsPrefix")),()=>{const{clsPrefix:o,disabled:n,absolute:i,round:r,isButtonTag:s}=e;return a(s?"button":"div",{type:s?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${o}-base-close`,i&&`${o}-base-close--absolute`,n&&`${o}-base-close--disabled`,r&&`${o}-base-close--round`],onMousedown:l=>{e.focusable||l.preventDefault()},onClick:e.onClick},a(go,{clsPrefix:o},{default:()=>a(Un,null)}))}}}),Zn=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Xn={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Jn=e=>{const{textColorDisabled:o,iconColor:n,textColor2:i,fontSizeSmall:r,fontSizeMedium:s,fontSizeLarge:d,fontSizeHuge:l}=e;return Object.assign(Object.assign({},Xn),{fontSizeSmall:r,fontSizeMedium:s,fontSizeLarge:d,fontSizeHuge:l,textColor:o,iconColor:n,extraTextColor:i})},Qn={name:"Empty",common:$e,self:Jn},$o=Qn,et=B("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Q("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),ot=Object.assign(Object.assign({},fe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),nt=ae({name:"Empty",props:ot,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=ho(e),i=fe("Empty","-empty",et,$o,e,o),{localeRef:r}=Po("Empty"),s=uo(fn,null),d=P(()=>{var b,y,R;return(b=e.description)!==null&&b!==void 0?b:(R=(y=s==null?void 0:s.mergedComponentPropsRef.value)===null||y===void 0?void 0:y.Empty)===null||R===void 0?void 0:R.description}),l=P(()=>{var b,y;return((y=(b=s==null?void 0:s.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||y===void 0?void 0:y.renderIcon)||(()=>a(qn,null))}),m=P(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:y},self:{[J("iconSize",b)]:R,[J("fontSize",b)]:C,textColor:h,iconColor:k,extraTextColor:F}}=i.value;return{"--n-icon-size":R,"--n-font-size":C,"--n-bezier":y,"--n-text-color":h,"--n-icon-color":k,"--n-extra-text-color":F}}),x=n?Be("empty",P(()=>{let b="";const{size:y}=e;return b+=y[0],b}),m,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:l,localizedDescription:P(()=>d.value||r.value.description),cssVars:n?void 0:m,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:n}=this;return n==null||n(),a("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${o}-empty__icon`},e.icon?e.icon():a(go,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${o}-empty__extra`},e.extra()):null)}}),tt={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},lt=e=>{const{borderRadius:o,popoverColor:n,textColor3:i,dividerColor:r,textColor2:s,primaryColorPressed:d,textColorDisabled:l,primaryColor:m,opacityDisabled:x,hoverColor:b,fontSizeSmall:y,fontSizeMedium:R,fontSizeLarge:C,fontSizeHuge:h,heightSmall:k,heightMedium:F,heightLarge:S,heightHuge:z}=e;return Object.assign(Object.assign({},tt),{optionFontSizeSmall:y,optionFontSizeMedium:R,optionFontSizeLarge:C,optionFontSizeHuge:h,optionHeightSmall:k,optionHeightMedium:F,optionHeightLarge:S,optionHeightHuge:z,borderRadius:o,color:n,groupHeaderTextColor:i,actionDividerColor:r,optionTextColor:s,optionTextColorPressed:d,optionTextColorDisabled:l,optionTextColorActive:m,optionOpacityDisabled:x,optionCheckColor:m,optionColorPending:b,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:b,actionTextColor:s,loadingColor:m})},rt=fo({name:"InternalSelectMenu",common:$e,peers:{Scrollbar:Tn,Empty:$o},self:lt}),Bo=rt;function it(e,o){return a(To,{name:"fade-in-scale-up-transition"},{default:()=>e?a(go,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>a(Kn)}):null})}const zo=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:n,multipleRef:i,valueSetRef:r,renderLabelRef:s,renderOptionRef:d,labelFieldRef:l,valueFieldRef:m,showCheckmarkRef:x,nodePropsRef:b,handleOptionClick:y,handleOptionMouseEnter:R}=uo(vo),C=je(()=>{const{value:S}=n;return S?e.tmNode.key===S.key:!1});function h(S){const{tmNode:z}=e;z.disabled||y(S,z)}function k(S){const{tmNode:z}=e;z.disabled||R(S,z)}function F(S){const{tmNode:z}=e,{value:W}=C;z.disabled||W||R(S,z)}return{multiple:i,isGrouped:je(()=>{const{tmNode:S}=e,{parent:z}=S;return z&&z.rawNode.type==="group"}),showCheckmark:x,nodeProps:b,isPending:C,isSelected:je(()=>{const{value:S}=o,{value:z}=i;if(S===null)return!1;const W=e.tmNode.rawNode[m.value];if(z){const{value:Y}=r;return Y.has(W)}else return S===W}),labelField:l,renderLabel:s,renderOption:d,handleMouseMove:F,handleMouseEnter:k,handleClick:h}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:n,isPending:i,isGrouped:r,showCheckmark:s,nodeProps:d,renderOption:l,renderLabel:m,handleClick:x,handleMouseEnter:b,handleMouseMove:y}=this,R=it(n,e),C=m?[m(o,n),s&&R]:[Re(o[this.labelField],o,n),s&&R],h=d==null?void 0:d(o),k=a("div",Object.assign({},h,{class:[`${e}-base-select-option`,o.class,h==null?void 0:h.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:s}],style:[(h==null?void 0:h.style)||"",o.style||""],onClick:oo([x,h==null?void 0:h.onClick]),onMouseenter:oo([b,h==null?void 0:h.onMouseenter]),onMousemove:oo([y,h==null?void 0:h.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},C));return o.render?o.render({node:k,option:o,selected:n}):l?l({node:k,option:o,selected:n}):k}}),ko=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:n,nodePropsRef:i}=uo(vo);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:n,nodeProps:i,tmNode:{rawNode:r}}=this,s=i==null?void 0:i(r),d=o?o(r,!1):Re(r[this.labelField],r,!1),l=a("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),d);return r.render?r.render({node:l,option:r}):n?n({node:l,option:r,selected:!1}):l}}),at=B("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[B("scrollbar",`
 max-height: var(--n-height);
 `),B("virtual-list",`
 max-height: var(--n-height);
 `),B("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[_("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),B("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),B("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),B("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Q("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Q("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Z("pending",[Q("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Z("selected",`
 color: var(--n-option-text-color-active);
 `,[Q("&::before",`
 background-color: var(--n-option-color-active);
 `),Z("pending",[Q("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[me("selected",`
 color: var(--n-option-text-color-disabled);
 `),Z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Mo({enterScale:"0.5"})])])]),st=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const o=fe("InternalSelectMenu","-internal-select-menu",at,Bo,e,re(e,"clsPrefix")),n=O(null),i=O(null),r=O(null),s=P(()=>e.treeMate.getFlattenedNodes()),d=P(()=>pn(s.value)),l=O(null);function m(){const{treeMate:c}=e;let g=null;const{value:D}=e;D===null?g=c.getFirstAvailableNode():(e.multiple?g=c.getNode((D||[])[(D||[]).length-1]):g=c.getNode(D),(!g||g.disabled)&&(g=c.getFirstAvailableNode())),f(g||null)}function x(){const{value:c}=l;c&&!e.treeMate.getNode(c.key)&&(l.value=null)}let b;Te(()=>e.show,c=>{c?b=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?m():x(),co(p)):x()},{immediate:!0}):b==null||b()},{immediate:!0}),Ro(()=>{b==null||b()});const y=P(()=>ao(o.value.self[J("optionHeight",e.size)])),R=P(()=>eo(o.value.self[J("padding",e.size)])),C=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),h=P(()=>{const c=s.value;return c&&c.length===0});function k(c){const{onToggle:g}=e;g&&g(c)}function F(c){const{onScroll:g}=e;g&&g(c)}function S(c){var g;(g=r.value)===null||g===void 0||g.sync(),F(c)}function z(){var c;(c=r.value)===null||c===void 0||c.sync()}function W(){const{value:c}=l;return c||null}function Y(c,g){g.disabled||f(g,!1)}function U(c,g){g.disabled||k(g)}function H(c){var g;Ke(c,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,c)}function q(c){var g;Ke(c,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,c)}function ee(c){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,c),!e.focusable&&c.preventDefault()}function le(){const{value:c}=l;c&&f(c.getNext({loop:!0}),!0)}function oe(){const{value:c}=l;c&&f(c.getPrev({loop:!0}),!0)}function f(c,g=!1){l.value=c,g&&p()}function p(){var c,g;const D=l.value;if(!D)return;const ne=d.value(D.key);ne!==null&&(e.virtualScroll?(c=i.value)===null||c===void 0||c.scrollTo({index:ne}):(g=r.value)===null||g===void 0||g.scrollTo({index:ne,elSize:y.value}))}function M(c){var g,D;!((g=n.value)===null||g===void 0)&&g.contains(c.target)&&((D=e.onFocus)===null||D===void 0||D.call(e,c))}function j(c){var g,D;!((g=n.value)===null||g===void 0)&&g.contains(c.relatedTarget)||(D=e.onBlur)===null||D===void 0||D.call(e,c)}ro(vo,{handleOptionMouseEnter:Y,handleOptionClick:U,valueSetRef:C,pendingTmNodeRef:l,nodePropsRef:re(e,"nodeProps"),showCheckmarkRef:re(e,"showCheckmark"),multipleRef:re(e,"multiple"),valueRef:re(e,"value"),renderLabelRef:re(e,"renderLabel"),renderOptionRef:re(e,"renderOption"),labelFieldRef:re(e,"labelField"),valueFieldRef:re(e,"valueField")}),ro(mn,n),Ie(()=>{const{value:c}=r;c&&c.sync()});const K=P(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:g},self:{height:D,borderRadius:ne,color:se,groupHeaderTextColor:Ce,actionDividerColor:xe,optionTextColorPressed:ge,optionTextColor:ve,optionTextColorDisabled:de,optionTextColorActive:ie,optionOpacityDisabled:be,optionCheckColor:he,actionTextColor:Fe,optionColorPending:we,optionColorActive:ye,loadingColor:Oe,loadingSize:Me,optionColorActivePending:Pe,[J("optionFontSize",c)]:ze,[J("optionHeight",c)]:ke,[J("optionPadding",c)]:ce}}=o.value;return{"--n-height":D,"--n-action-divider-color":xe,"--n-action-text-color":Fe,"--n-bezier":g,"--n-border-radius":ne,"--n-color":se,"--n-option-font-size":ze,"--n-group-header-text-color":Ce,"--n-option-check-color":he,"--n-option-color-pending":we,"--n-option-color-active":ye,"--n-option-color-active-pending":Pe,"--n-option-height":ke,"--n-option-opacity-disabled":be,"--n-option-text-color":ve,"--n-option-text-color-active":ie,"--n-option-text-color-disabled":de,"--n-option-text-color-pressed":ge,"--n-option-padding":ce,"--n-option-padding-left":eo(ce,"left"),"--n-option-padding-right":eo(ce,"right"),"--n-loading-color":Oe,"--n-loading-size":Me}}),{inlineThemeDisabled:V}=e,E=V?Be("internal-select-menu",P(()=>e.size[0]),K,e):void 0,G={selfRef:n,next:le,prev:oe,getPendingTmNode:W};return Io(n,e.onResize),Object.assign({mergedTheme:o,virtualListRef:i,scrollbarRef:r,itemSize:y,padding:R,flattenedNodes:s,empty:h,virtualListContainer(){const{value:c}=i;return c==null?void 0:c.listElRef},virtualListContent(){const{value:c}=i;return c==null?void 0:c.itemsElRef},doScroll:F,handleFocusin:M,handleFocusout:j,handleKeyUp:H,handleKeyDown:q,handleMouseDown:ee,handleVirtualListResize:z,handleVirtualListScroll:S,cssVars:V?void 0:K,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},G)},render(){const{$slots:e,virtualScroll:o,clsPrefix:n,mergedTheme:i,themeClass:r,onRender:s}=this;return s==null||s(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?a("div",{class:`${n}-base-select-menu__loading`},a(Fn,{clsPrefix:n,strokeWidth:20})):this.empty?a("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},Mn(e.empty,()=>[a(nt,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):a(On,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?a(Vn,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:d})=>d.isGroup?a(ko,{key:d.key,clsPrefix:n,tmNode:d}):d.ignored?null:a(zo,{clsPrefix:n,key:d.key,tmNode:d})}):a("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(d=>d.isGroup?a(ko,{key:d.key,clsPrefix:n,tmNode:d}):a(zo,{clsPrefix:n,key:d.key,tmNode:d})))}),so(e.action,d=>d&&[a("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},d),a(Zn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ct={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},dt=e=>{const{textColor2:o,primaryColorHover:n,primaryColorPressed:i,primaryColor:r,infoColor:s,successColor:d,warningColor:l,errorColor:m,baseColor:x,borderColor:b,opacityDisabled:y,tagColor:R,closeIconColor:C,closeIconColorHover:h,closeIconColorPressed:k,borderRadiusSmall:F,fontSizeMini:S,fontSizeTiny:z,fontSizeSmall:W,fontSizeMedium:Y,heightMini:U,heightTiny:H,heightSmall:q,heightMedium:ee,closeColorHover:le,closeColorPressed:oe,buttonColor2Hover:f,buttonColor2Pressed:p,fontWeightStrong:M}=e;return Object.assign(Object.assign({},ct),{closeBorderRadius:F,heightTiny:U,heightSmall:H,heightMedium:q,heightLarge:ee,borderRadius:F,opacityDisabled:y,fontSizeTiny:S,fontSizeSmall:z,fontSizeMedium:W,fontSizeLarge:Y,fontWeightStrong:M,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:x,colorCheckable:"#0000",colorHoverCheckable:f,colorPressedCheckable:p,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:i,border:`1px solid ${b}`,textColor:o,color:R,colorBordered:"rgb(250, 250, 252)",closeIconColor:C,closeIconColorHover:h,closeIconColorPressed:k,closeColorHover:le,closeColorPressed:oe,borderPrimary:`1px solid ${N(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:N(r,{alpha:.12}),colorBorderedPrimary:N(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:N(r,{alpha:.12}),closeColorPressedPrimary:N(r,{alpha:.18}),borderInfo:`1px solid ${N(s,{alpha:.3})}`,textColorInfo:s,colorInfo:N(s,{alpha:.12}),colorBorderedInfo:N(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:N(s,{alpha:.12}),closeColorPressedInfo:N(s,{alpha:.18}),borderSuccess:`1px solid ${N(d,{alpha:.3})}`,textColorSuccess:d,colorSuccess:N(d,{alpha:.12}),colorBorderedSuccess:N(d,{alpha:.1}),closeIconColorSuccess:d,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:d,closeColorHoverSuccess:N(d,{alpha:.12}),closeColorPressedSuccess:N(d,{alpha:.18}),borderWarning:`1px solid ${N(l,{alpha:.35})}`,textColorWarning:l,colorWarning:N(l,{alpha:.15}),colorBorderedWarning:N(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:N(l,{alpha:.12}),closeColorPressedWarning:N(l,{alpha:.18}),borderError:`1px solid ${N(m,{alpha:.23})}`,textColorError:m,colorError:N(m,{alpha:.1}),colorBorderedError:N(m,{alpha:.08}),closeIconColorError:m,closeIconColorHoverError:m,closeIconColorPressedError:m,closeColorHoverError:N(m,{alpha:.12}),closeColorPressedError:N(m,{alpha:.18})})},ut={name:"Tag",common:$e,self:dt},ht=ut,ft={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},vt=B("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Z("strong",`
 font-weight: var(--n-font-weight-strong);
 `),_("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),_("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Z("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Z("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Z("icon, avatar",[Z("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Z("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Z("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[me("disabled",[Q("&:hover","background-color: var(--n-color-hover-checkable);",[me("checked","color: var(--n-text-color-hover-checkable);")]),Q("&:active","background-color: var(--n-color-pressed-checkable);",[me("checked","color: var(--n-text-color-pressed-checkable);")])]),Z("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[me("disabled",[Q("&:hover","background-color: var(--n-color-checked-hover);"),Q("&:active","background-color: var(--n-color-checked-pressed);")])])])]),gt=Object.assign(Object.assign(Object.assign({},fe.props),ft),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),bt=gn("n-tag"),to=ae({name:"Tag",props:gt,setup(e){const o=O(null),{mergedBorderedRef:n,mergedClsPrefixRef:i,inlineThemeDisabled:r,mergedRtlRef:s}=ho(e),d=fe("Tag","-tag",vt,ht,e,i);ro(bt,{roundRef:re(e,"round")});function l(C){if(!e.disabled&&e.checkable){const{checked:h,onCheckedChange:k,onUpdateChecked:F,"onUpdate:checked":S}=e;F&&F(!h),S&&S(!h),k&&k(!h)}}function m(C){if(e.triggerClickOnClose||C.stopPropagation(),!e.disabled){const{onClose:h}=e;h&&ue(h,C)}}const x={setTextContent(C){const{value:h}=o;h&&(h.textContent=C)}},b=vn("Tag",s,i),y=P(()=>{const{type:C,size:h,color:{color:k,textColor:F}={}}=e,{common:{cubicBezierEaseInOut:S},self:{padding:z,closeMargin:W,closeMarginRtl:Y,borderRadius:U,opacityDisabled:H,textColorCheckable:q,textColorHoverCheckable:ee,textColorPressedCheckable:le,textColorChecked:oe,colorCheckable:f,colorHoverCheckable:p,colorPressedCheckable:M,colorChecked:j,colorCheckedHover:K,colorCheckedPressed:V,closeBorderRadius:E,fontWeightStrong:G,[J("colorBordered",C)]:c,[J("closeSize",h)]:g,[J("closeIconSize",h)]:D,[J("fontSize",h)]:ne,[J("height",h)]:se,[J("color",C)]:Ce,[J("textColor",C)]:xe,[J("border",C)]:ge,[J("closeIconColor",C)]:ve,[J("closeIconColorHover",C)]:de,[J("closeIconColorPressed",C)]:ie,[J("closeColorHover",C)]:be,[J("closeColorPressed",C)]:he}}=d.value;return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${se} - 8px)`,"--n-bezier":S,"--n-border-radius":U,"--n-border":ge,"--n-close-icon-size":D,"--n-close-color-pressed":he,"--n-close-color-hover":be,"--n-close-border-radius":E,"--n-close-icon-color":ve,"--n-close-icon-color-hover":de,"--n-close-icon-color-pressed":ie,"--n-close-icon-color-disabled":ve,"--n-close-margin":W,"--n-close-margin-rtl":Y,"--n-close-size":g,"--n-color":k||(n.value?c:Ce),"--n-color-checkable":f,"--n-color-checked":j,"--n-color-checked-hover":K,"--n-color-checked-pressed":V,"--n-color-hover-checkable":p,"--n-color-pressed-checkable":M,"--n-font-size":ne,"--n-height":se,"--n-opacity-disabled":H,"--n-padding":z,"--n-text-color":F||xe,"--n-text-color-checkable":q,"--n-text-color-checked":oe,"--n-text-color-hover-checkable":ee,"--n-text-color-pressed-checkable":le}}),R=r?Be("tag",P(()=>{let C="";const{type:h,size:k,color:{color:F,textColor:S}={}}=e;return C+=h[0],C+=k[0],F&&(C+=`a${bo(F)}`),S&&(C+=`b${bo(S)}`),n.value&&(C+="c"),C}),y,e):void 0;return Object.assign(Object.assign({},x),{rtlEnabled:b,mergedClsPrefix:i,contentRef:o,mergedBordered:n,handleClick:l,handleCloseClick:m,cssVars:r?void 0:y,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender})},render(){var e,o;const{mergedClsPrefix:n,rtlEnabled:i,closable:r,color:{borderColor:s}={},round:d,onRender:l,$slots:m}=this;l==null||l();const x=so(m.avatar,y=>y&&a("div",{class:`${n}-tag__avatar`},y)),b=so(m.icon,y=>y&&a("div",{class:`${n}-tag__icon`},y));return a("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:i,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:d,[`${n}-tag--avatar`]:x,[`${n}-tag--icon`]:b,[`${n}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},b||x,a("span",{class:`${n}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?a(Yn,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:d,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${n}-tag__border`,style:{borderColor:s}}):null)}}),pt={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},mt=e=>{const{borderRadius:o,textColor2:n,textColorDisabled:i,inputColor:r,inputColorDisabled:s,primaryColor:d,primaryColorHover:l,warningColor:m,warningColorHover:x,errorColor:b,errorColorHover:y,borderColor:R,iconColor:C,iconColorDisabled:h,clearColor:k,clearColorHover:F,clearColorPressed:S,placeholderColor:z,placeholderColorDisabled:W,fontSizeTiny:Y,fontSizeSmall:U,fontSizeMedium:H,fontSizeLarge:q,heightTiny:ee,heightSmall:le,heightMedium:oe,heightLarge:f}=e;return Object.assign(Object.assign({},pt),{fontSizeTiny:Y,fontSizeSmall:U,fontSizeMedium:H,fontSizeLarge:q,heightTiny:ee,heightSmall:le,heightMedium:oe,heightLarge:f,borderRadius:o,textColor:n,textColorDisabled:i,placeholderColor:z,placeholderColorDisabled:W,color:r,colorDisabled:s,colorActive:r,border:`1px solid ${R}`,borderHover:`1px solid ${l}`,borderActive:`1px solid ${d}`,borderFocus:`1px solid ${l}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${N(d,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${N(d,{alpha:.2})}`,caretColor:d,arrowColor:C,arrowColorDisabled:h,loadingColor:d,borderWarning:`1px solid ${m}`,borderHoverWarning:`1px solid ${x}`,borderActiveWarning:`1px solid ${m}`,borderFocusWarning:`1px solid ${x}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${N(m,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${N(m,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:m,borderError:`1px solid ${b}`,borderHoverError:`1px solid ${y}`,borderActiveError:`1px solid ${b}`,borderFocusError:`1px solid ${y}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${N(b,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${N(b,{alpha:.2})}`,colorActiveError:r,caretColorError:b,clearColor:k,clearColorHover:F,clearColorPressed:S})},Ct=fo({name:"InternalSelection",common:$e,peers:{Popover:Cn},self:mt}),_o=Ct,xt=Q([B("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[B("base-loading",`
 color: var(--n-loading-color);
 `),B("base-selection-tags","min-height: var(--n-height);"),_("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),_("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[_("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),B("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[_("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[_("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),B("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[B("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[_("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),_("render-label",`
 color: var(--n-text-color);
 `)]),me("disabled",[Q("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[_("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),_("render-label",`
 color: var(--n-text-color-disabled);
 `)]),B("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),B("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),B("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[_("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),_("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[_("state-border",`border: var(--n-border-${e});`),me("disabled",[Q("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),B("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),B("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Q("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[_("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),wt=ae({name:"InternalSelection",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const o=O(null),n=O(null),i=O(null),r=O(null),s=O(null),d=O(null),l=O(null),m=O(null),x=O(null),b=O(null),y=O(!1),R=O(!1),C=O(!1),h=fe("InternalSelection","-internal-selection",xt,_o,e,re(e,"clsPrefix")),k=P(()=>e.clearable&&!e.disabled&&(C.value||e.active)),F=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=P(()=>{const u=e.selectedOption;if(u)return u[e.labelField]}),z=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function W(){var u;const{value:w}=o;if(w){const{value:X}=n;X&&(X.style.width=`${w.offsetWidth}px`,e.maxTagCount!=="responsive"&&((u=x.value)===null||u===void 0||u.sync()))}}function Y(){const{value:u}=b;u&&(u.style.display="none")}function U(){const{value:u}=b;u&&(u.style.display="inline-block")}Te(re(e,"active"),u=>{u||Y()}),Te(re(e,"pattern"),()=>{e.multiple&&co(W)});function H(u){const{onFocus:w}=e;w&&w(u)}function q(u){const{onBlur:w}=e;w&&w(u)}function ee(u){const{onDeleteOption:w}=e;w&&w(u)}function le(u){const{onClear:w}=e;w&&w(u)}function oe(u){const{onPatternInput:w}=e;w&&w(u)}function f(u){var w;(!u.relatedTarget||!(!((w=i.value)===null||w===void 0)&&w.contains(u.relatedTarget)))&&H(u)}function p(u){var w;!((w=i.value)===null||w===void 0)&&w.contains(u.relatedTarget)||q(u)}function M(u){le(u)}function j(){C.value=!0}function K(){C.value=!1}function V(u){!e.active||!e.filterable||u.target!==n.value&&u.preventDefault()}function E(u){ee(u)}function G(u){if(u.key==="Backspace"&&!c.value&&!e.pattern.length){const{selectedOptions:w}=e;w!=null&&w.length&&E(w[w.length-1])}}const c=O(!1);let g=null;function D(u){const{value:w}=o;if(w){const X=u.target.value;w.textContent=X,W()}e.ignoreComposition&&c.value?g=u:oe(u)}function ne(){c.value=!0}function se(){c.value=!1,e.ignoreComposition&&oe(g),g=null}function Ce(u){var w;R.value=!0,(w=e.onPatternFocus)===null||w===void 0||w.call(e,u)}function xe(u){var w;R.value=!1,(w=e.onPatternBlur)===null||w===void 0||w.call(e,u)}function ge(){var u,w;if(e.filterable)R.value=!1,(u=d.value)===null||u===void 0||u.blur(),(w=n.value)===null||w===void 0||w.blur();else if(e.multiple){const{value:X}=r;X==null||X.blur()}else{const{value:X}=s;X==null||X.blur()}}function ve(){var u,w,X;e.filterable?(R.value=!1,(u=d.value)===null||u===void 0||u.focus()):e.multiple?(w=r.value)===null||w===void 0||w.focus():(X=s.value)===null||X===void 0||X.focus()}function de(){const{value:u}=n;u&&(U(),u.focus())}function ie(){const{value:u}=n;u&&u.blur()}function be(u){const{value:w}=l;w&&w.setTextContent(`+${u}`)}function he(){const{value:u}=m;return u}function Fe(){return n.value}let we=null;function ye(){we!==null&&window.clearTimeout(we)}function Oe(){e.disabled||e.active||(ye(),we=window.setTimeout(()=>{z.value&&(y.value=!0)},100))}function Me(){ye()}function Pe(u){u||(ye(),y.value=!1)}Te(z,u=>{u||(y.value=!1)}),Ie(()=>{cn(()=>{const u=d.value;u&&(u.tabIndex=e.disabled||R.value?-1:0)})}),Io(i,e.onResize);const{inlineThemeDisabled:ze}=e,ke=P(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:w},self:{borderRadius:X,color:_e,placeholderColor:qe,textColor:Ge,paddingSingle:Ye,paddingMultiple:Ze,caretColor:Le,colorDisabled:Ee,textColorDisabled:Ae,placeholderColorDisabled:Xe,colorActive:Je,boxShadowFocus:He,boxShadowActive:pe,boxShadowHover:t,border:v,borderFocus:T,borderHover:A,borderActive:I,arrowColor:L,arrowColorDisabled:$,loadingColor:te,colorActiveWarning:Ne,boxShadowFocusWarning:Qe,boxShadowActiveWarning:Eo,boxShadowHoverWarning:Ao,borderWarning:Ho,borderFocusWarning:No,borderHoverWarning:Do,borderActiveWarning:Wo,colorActiveError:Vo,boxShadowFocusError:jo,boxShadowActiveError:Ko,boxShadowHoverError:Uo,borderError:qo,borderFocusError:Go,borderHoverError:Yo,borderActiveError:Zo,clearColor:Xo,clearColorHover:Jo,clearColorPressed:Qo,clearSize:en,arrowSize:on,[J("height",u)]:nn,[J("fontSize",u)]:tn}}=h.value;return{"--n-bezier":w,"--n-border":v,"--n-border-active":I,"--n-border-focus":T,"--n-border-hover":A,"--n-border-radius":X,"--n-box-shadow-active":pe,"--n-box-shadow-focus":He,"--n-box-shadow-hover":t,"--n-caret-color":Le,"--n-color":_e,"--n-color-active":Je,"--n-color-disabled":Ee,"--n-font-size":tn,"--n-height":nn,"--n-padding-single":Ye,"--n-padding-multiple":Ze,"--n-placeholder-color":qe,"--n-placeholder-color-disabled":Xe,"--n-text-color":Ge,"--n-text-color-disabled":Ae,"--n-arrow-color":L,"--n-arrow-color-disabled":$,"--n-loading-color":te,"--n-color-active-warning":Ne,"--n-box-shadow-focus-warning":Qe,"--n-box-shadow-active-warning":Eo,"--n-box-shadow-hover-warning":Ao,"--n-border-warning":Ho,"--n-border-focus-warning":No,"--n-border-hover-warning":Do,"--n-border-active-warning":Wo,"--n-color-active-error":Vo,"--n-box-shadow-focus-error":jo,"--n-box-shadow-active-error":Ko,"--n-box-shadow-hover-error":Uo,"--n-border-error":qo,"--n-border-focus-error":Go,"--n-border-hover-error":Yo,"--n-border-active-error":Zo,"--n-clear-size":en,"--n-clear-color":Xo,"--n-clear-color-hover":Jo,"--n-clear-color-pressed":Qo,"--n-arrow-size":on}}),ce=ze?Be("internal-selection",P(()=>e.size[0]),ke,e):void 0;return{mergedTheme:h,mergedClearable:k,patternInputFocused:R,filterablePlaceholder:F,label:S,selected:z,showTagsPanel:y,isComposing:c,counterRef:l,counterWrapperRef:m,patternInputMirrorRef:o,patternInputRef:n,selfRef:i,multipleElRef:r,singleElRef:s,patternInputWrapperRef:d,overflowRef:x,inputTagElRef:b,handleMouseDown:V,handleFocusin:f,handleClear:M,handleMouseEnter:j,handleMouseLeave:K,handleDeleteOption:E,handlePatternKeyDown:G,handlePatternInputInput:D,handlePatternInputBlur:xe,handlePatternInputFocus:Ce,handleMouseEnterCounter:Oe,handleMouseLeaveCounter:Me,handleFocusout:p,handleCompositionEnd:se,handleCompositionStart:ne,onPopoverUpdateShow:Pe,focus:ve,focusInput:de,blur:ge,blurInput:ie,updateCounter:be,getCounter:he,getTail:Fe,renderLabel:e.renderLabel,cssVars:ze?void 0:ke,themeClass:ce==null?void 0:ce.themeClass,onRender:ce==null?void 0:ce.onRender}},render(){const{status:e,multiple:o,size:n,disabled:i,filterable:r,maxTagCount:s,bordered:d,clsPrefix:l,onRender:m,renderTag:x,renderLabel:b}=this;m==null||m();const y=s==="responsive",R=typeof s=="number",C=y||R,h=a(Pn,null,{default:()=>a(Ln,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,S;return(S=(F=this.$slots).arrow)===null||S===void 0?void 0:S.call(F)}})});let k;if(o){const{labelField:F}=this,S=p=>a("div",{class:`${l}-base-selection-tag-wrapper`,key:p.value},x?x({option:p,handleClose:()=>this.handleDeleteOption(p)}):a(to,{size:n,closable:!p.disabled,disabled:i,onClose:()=>this.handleDeleteOption(p),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>b?b(p,!0):Re(p[F],p,!0)})),z=()=>(R?this.selectedOptions.slice(0,s):this.selectedOptions).map(S),W=r?a("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,Y=y?()=>a("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(to,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let U;if(R){const p=this.selectedOptions.length-s;p>0&&(U=a("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},a(to,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${p}`})))}const H=y?r?a(So,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:Y,tail:()=>W}):a(So,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:z,counter:Y}):R?z().concat(U):z(),q=C?()=>a("div",{class:`${l}-base-selection-popover`},y?z():this.selectedOptions.map(S)):void 0,ee=C?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,oe=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,f=r?a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},H,y?null:W,h):a("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:i?void 0:0},H,h);k=a(dn,null,C?a(xn,Object.assign({},ee,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>f,default:q}):f,oe)}else if(r){const F=this.pattern||this.isComposing,S=this.active?!F:!this.selected,z=this.active?!1:this.selected;k=a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),z?a("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},a("div",{class:`${l}-base-selection-overlay__wrapper`},x?x({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,S?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else k=a("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${l}-base-selection-input`,title:En(this.label),key:"input"},a("div",{class:`${l}-base-selection-input__content`},x?x({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),h);return a("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,d?a("div",{class:`${l}-base-selection__border`}):null,d?a("div",{class:`${l}-base-selection__state-border`}):null)}});function Ue(e){return e.type==="group"}function Lo(e){return e.type==="ignored"}function lo(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function yt(e,o){return{getIsGroup:Ue,getIgnored:Lo,getKey(i){return Ue(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[o]}}}function St(e,o,n,i){if(!o)return e;function r(s){if(!Array.isArray(s))return[];const d=[];for(const l of s)if(Ue(l)){const m=r(l[i]);m.length&&d.push(Object.assign({},l,{[i]:m}))}else{if(Lo(l))continue;o(n,l)&&d.push(l)}return d}return r(e)}function zt(e,o,n){const i=new Map;return e.forEach(r=>{Ue(r)?r[n].forEach(s=>{i.set(s[o],s)}):i.set(r[o],r)}),i}function kt(e){const{boxShadow2:o}=e;return{menuBoxShadow:o}}const Rt=fo({name:"Select",common:$e,peers:{InternalSelection:_o,InternalSelectMenu:Bo},self:kt}),Tt=Rt,Ft=Q([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Mo({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Ot=Object.assign(Object.assign({},fe.props),{to:io.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),_t=ae({name:"Select",props:Ot,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:n,namespaceRef:i,inlineThemeDisabled:r}=ho(e),s=fe("Select","-select",Ft,Tt,e,o),d=O(e.defaultValue),l=re(e,"value"),m=xo(l,d),x=O(!1),b=O(""),y=P(()=>{const{valueField:t,childrenField:v}=e,T=yt(t,v);return wn(p.value,T)}),R=P(()=>zt(oe.value,e.valueField,e.childrenField)),C=O(!1),h=xo(re(e,"show"),C),k=O(null),F=O(null),S=O(null),{localeRef:z}=Po("Select"),W=P(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:z.value.placeholder}),Y=yn(e,["items","options"]),U=[],H=O([]),q=O([]),ee=O(new Map),le=P(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:v,valueField:T}=e;return A=>({[v]:String(A),[T]:A})}return t===!1?!1:v=>Object.assign(t(v),{value:v})}),oe=P(()=>q.value.concat(H.value).concat(Y.value)),f=P(()=>{const{filter:t}=e;if(t)return t;const{labelField:v,valueField:T}=e;return(A,I)=>{if(!I)return!1;const L=I[v];if(typeof L=="string")return lo(A,L);const $=I[T];return typeof $=="string"?lo(A,$):typeof $=="number"?lo(A,String($)):!1}}),p=P(()=>{if(e.remote)return Y.value;{const{value:t}=oe,{value:v}=b;return!v.length||!e.filterable?t:St(t,f.value,v,e.childrenField)}});function M(t){const v=e.remote,{value:T}=ee,{value:A}=R,{value:I}=le,L=[];return t.forEach($=>{if(A.has($))L.push(A.get($));else if(v&&T.has($))L.push(T.get($));else if(I){const te=I($);te&&L.push(te)}}),L}const j=P(()=>{if(e.multiple){const{value:t}=m;return Array.isArray(t)?M(t):[]}return null}),K=P(()=>{const{value:t}=m;return!e.multiple&&!Array.isArray(t)?t===null?null:M([t])[0]||null:null}),V=In(e),{mergedSizeRef:E,mergedDisabledRef:G,mergedStatusRef:c}=V;function g(t,v){const{onChange:T,"onUpdate:value":A,onUpdateValue:I}=e,{nTriggerFormChange:L,nTriggerFormInput:$}=V;T&&ue(T,t,v),I&&ue(I,t,v),A&&ue(A,t,v),d.value=t,L(),$()}function D(t){const{onBlur:v}=e,{nTriggerFormBlur:T}=V;v&&ue(v,t),T()}function ne(){const{onClear:t}=e;t&&ue(t)}function se(t){const{onFocus:v,showOnFocus:T}=e,{nTriggerFormFocus:A}=V;v&&ue(v,t),A(),T&&de()}function Ce(t){const{onSearch:v}=e;v&&ue(v,t)}function xe(t){const{onScroll:v}=e;v&&ue(v,t)}function ge(){var t;const{remote:v,multiple:T}=e;if(v){const{value:A}=ee;if(T){const{valueField:I}=e;(t=j.value)===null||t===void 0||t.forEach(L=>{A.set(L[I],L)})}else{const I=K.value;I&&A.set(I[e.valueField],I)}}}function ve(t){const{onUpdateShow:v,"onUpdate:show":T}=e;v&&ue(v,t),T&&ue(T,t),C.value=t}function de(){G.value||(ve(!0),C.value=!0,e.filterable&&Ae())}function ie(){ve(!1)}function be(){b.value="",q.value=U}const he=O(!1);function Fe(){e.filterable&&(he.value=!0)}function we(){e.filterable&&(he.value=!1,h.value||be())}function ye(){G.value||(h.value?e.filterable?Ae():ie():de())}function Oe(t){var v,T;!((T=(v=S.value)===null||v===void 0?void 0:v.selfRef)===null||T===void 0)&&T.contains(t.relatedTarget)||(x.value=!1,D(t),ie())}function Me(t){se(t),x.value=!0}function Pe(t){x.value=!0}function ze(t){var v;!((v=k.value)===null||v===void 0)&&v.$el.contains(t.relatedTarget)||(x.value=!1,D(t),ie())}function ke(){var t;(t=k.value)===null||t===void 0||t.focus(),ie()}function ce(t){var v;h.value&&(!((v=k.value)===null||v===void 0)&&v.$el.contains(Bn(t))||ie())}function u(t){if(!Array.isArray(t))return[];if(le.value)return Array.from(t);{const{remote:v}=e,{value:T}=R;if(v){const{value:A}=ee;return t.filter(I=>T.has(I)||A.has(I))}else return t.filter(A=>T.has(A))}}function w(t){X(t.rawNode)}function X(t){if(G.value)return;const{tag:v,remote:T,clearFilterAfterSelect:A,valueField:I}=e;if(v&&!T){const{value:L}=q,$=L[0]||null;if($){const te=H.value;te.length?te.push($):H.value=[$],q.value=U}}if(T&&ee.value.set(t[I],t),e.multiple){const L=u(m.value),$=L.findIndex(te=>te===t[I]);if(~$){if(L.splice($,1),v&&!T){const te=_e(t[I]);~te&&(H.value.splice(te,1),A&&(b.value=""))}}else L.push(t[I]),A&&(b.value="");g(L,M(L))}else{if(v&&!T){const L=_e(t[I]);~L?H.value=[H.value[L]]:H.value=U}Ee(),ie(),g(t[I],t)}}function _e(t){return H.value.findIndex(T=>T[e.valueField]===t)}function qe(t){h.value||de();const{value:v}=t.target;b.value=v;const{tag:T,remote:A}=e;if(Ce(v),T&&!A){if(!v){q.value=U;return}const{onCreate:I}=e,L=I?I(v):{[e.labelField]:v,[e.valueField]:v},{valueField:$}=e;Y.value.some(te=>te[$]===L[$])||H.value.some(te=>te[$]===L[$])?q.value=U:q.value=[L]}}function Ge(t){t.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&ie(),ne(),v?g([],[]):g(null,null)}function Ye(t){!Ke(t,"action")&&!Ke(t,"empty")&&t.preventDefault()}function Ze(t){xe(t)}function Le(t){var v,T,A,I,L;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((v=k.value)===null||v===void 0)&&v.isComposing)){if(h.value){const $=(T=S.value)===null||T===void 0?void 0:T.getPendingTmNode();$?w($):e.filterable||(ie(),Ee())}else if(de(),e.tag&&he.value){const $=q.value[0];if($){const te=$[e.valueField],{value:Ne}=m;e.multiple&&Array.isArray(Ne)&&Ne.some(Qe=>Qe===te)||X($)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;h.value&&((A=S.value)===null||A===void 0||A.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;h.value?(I=S.value)===null||I===void 0||I.next():de();break;case"Escape":h.value&&(Hn(t),ie()),(L=k.value)===null||L===void 0||L.focus();break}}function Ee(){var t;(t=k.value)===null||t===void 0||t.focus()}function Ae(){var t;(t=k.value)===null||t===void 0||t.focusInput()}function Xe(){var t;h.value&&((t=F.value)===null||t===void 0||t.syncPosition())}ge(),Te(re(e,"options"),ge);const Je={focus:()=>{var t;(t=k.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=k.value)===null||t===void 0||t.blur()}},He=P(()=>{const{self:{menuBoxShadow:t}}=s.value;return{"--n-menu-box-shadow":t}}),pe=r?Be("select",void 0,He,e):void 0;return Object.assign(Object.assign({},Je),{mergedStatus:c,mergedClsPrefix:o,mergedBordered:n,namespace:i,treeMate:y,isMounted:$n(),triggerRef:k,menuRef:S,pattern:b,uncontrolledShow:C,mergedShow:h,adjustedTo:io(e),uncontrolledValue:d,mergedValue:m,followerRef:F,localizedPlaceholder:W,selectedOption:K,selectedOptions:j,mergedSize:E,mergedDisabled:G,focused:x,activeWithoutMenuOpen:he,inlineThemeDisabled:r,onTriggerInputFocus:Fe,onTriggerInputBlur:we,handleTriggerOrMenuResize:Xe,handleMenuFocus:Pe,handleMenuBlur:ze,handleMenuTabOut:ke,handleTriggerClick:ye,handleToggle:w,handleDeleteOption:X,handlePatternInput:qe,handleClear:Ge,handleTriggerBlur:Oe,handleTriggerFocus:Me,handleKeydown:Le,handleMenuAfterLeave:be,handleMenuClickOutside:ce,handleMenuScroll:Ze,handleMenuKeydown:Le,handleMenuMousedown:Ye,mergedTheme:s,cssVars:r?void 0:He,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Sn,null,{default:()=>[a(zn,null,{default:()=>a(wt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),a(kn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===io.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(To,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),un(a(st,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[hn,this.mergedShow],[po,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[po,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Yn as N,_t as _};
