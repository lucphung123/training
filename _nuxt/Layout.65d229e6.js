import{A as v,s as L,z as R,N as w}from"./Space.c763b5a2.js";import{v as z,c as j,w as g,b as x,d as C,g as O,i as y,u as _,l as $}from"./light.ac94ac37.js";import{m as E,r as S,s as p,p as b,z as P}from"./entry.4a3385b7.js";const F=v&&"chrome"in window;v&&navigator.userAgent.includes("Firefox");const q=v&&navigator.userAgent.includes("Safari")&&!F,N=u=>{const{baseColor:e,textColor2:o,bodyColor:a,cardColor:i,dividerColor:t,actionColor:d,scrollbarColor:f,scrollbarColorHover:h,invertedColor:s}=u;return{textColor:o,textColorInverted:"#FFF",color:a,colorEmbedded:d,headerColor:i,headerColorInverted:s,footerColor:d,footerColorInverted:s,headerBorderColor:t,headerBorderColorInverted:s,footerBorderColor:t,footerBorderColorInverted:s,siderBorderColor:t,siderBorderColorInverted:s,siderColor:i,siderColorInverted:s,siderToggleButtonBorder:`1px solid ${t}`,siderToggleButtonColor:e,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:g(a,f),siderToggleBarColorHover:g(a,h),__invertScrollbar:"true"}},A=z({name:"Layout",common:j,peers:{Scrollbar:L},self:N}),H=A,G=x("n-layout-sider"),K={type:String,default:"static"},V=C("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),O("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),k={embedded:Boolean,position:K,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},D=x("n-layout");function M(u){return E({name:u?"LayoutContent":"Layout",props:Object.assign(Object.assign({},y.props),k),setup(e){const o=S(null),a=S(null),{mergedClsPrefixRef:i,inlineThemeDisabled:t}=_(e),d=y("Layout","-layout",V,H,e,i);function f(r,l){if(e.nativeScrollbar){const{value:n}=o;n&&(l===void 0?n.scrollTo(r):n.scrollTo(r,l))}else{const{value:n}=a;n&&n.scrollTo(r,l)}}P(D,e);let h=0,s=0;const B=r=>{var l;const n=r.target;h=n.scrollLeft,s=n.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,r)};R(()=>{if(e.nativeScrollbar){const r=o.value;r&&(r.scrollTop=s,r.scrollLeft=h)}});const T={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},I={scrollTo:f},m=p(()=>{const{common:{cubicBezierEaseInOut:r},self:l}=d.value;return{"--n-bezier":r,"--n-color":e.embedded?l.colorEmbedded:l.color,"--n-text-color":l.textColor}}),c=t?$("layout",p(()=>e.embedded?"e":""),m,e):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:a,hasSiderStyle:T,mergedTheme:d,handleNativeElScroll:B,cssVars:t?void 0:m,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender},I)},render(){var e;const{mergedClsPrefix:o,hasSider:a}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=a?this.hasSiderStyle:void 0,t=[this.themeClass,u&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return b("div",{class:t,style:this.cssVars},this.nativeScrollbar?b("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):b(w,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const J=M(!1);export{J as _,G as a,D as b,M as c,q as i,H as l,K as p};
