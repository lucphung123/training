import{f as w,x as oe,c as re,d as i,g as C,e as n,u as V,i as D,j as q,l as K,b as le,t as ne}from"./light.ac94ac37.js";import{a as X,h as B,c as ae,r as Y,f as Z,y as se,z as ie,N as ce,_ as de}from"./Space.c763b5a2.js";import{N as pe,C as G,a as ue,_ as me}from"./Dropdown.dda4cfcc.js";import{m as j,p as a,r as A,s as R,z as J,t as U,k as fe,C as ge,q as Q,c as H,w as O,o as M,a as L,b as P,i as he,j as be,F as ve,K as xe}from"./entry.4a3385b7.js";import{a as ye,l as Ce,p as _e,b as we,_ as $e}from"./Layout.65d229e6.js";import{q as Se,s as ze,t as W}from"./Popover.6853abd9.js";const Te=j({name:"ChevronLeft",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),{cubicBezierEaseInOut:T,cubicBezierEaseOut:Re,cubicBezierEaseIn:Ee}=oe;function Ne({overflow:e="hidden",duration:t=".3s",originalTransition:r="",leavingDelay:o="0s",foldPadding:c=!1,enterToProps:s=void 0,leaveToProps:v=void 0,reverse:h=!1}={}){const f=h?"leave":"enter",g=h?"enter":"leave";return[w(`&.fade-in-height-expand-transition-${g}-from,
 &.fade-in-height-expand-transition-${f}-to`,Object.assign(Object.assign({},s),{opacity:1})),w(`&.fade-in-height-expand-transition-${g}-to,
 &.fade-in-height-expand-transition-${f}-from`,Object.assign(Object.assign({},v),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:c?"0 !important":void 0,paddingBottom:c?"0 !important":void 0})),w(`&.fade-in-height-expand-transition-${g}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${T} ${o},
 opacity ${t} ${Re} ${o},
 margin-top ${t} ${T} ${o},
 margin-bottom ${t} ${T} ${o},
 padding-top ${t} ${T} ${o},
 padding-bottom ${t} ${T} ${o}
 ${r?","+r:""}
 `),w(`&.fade-in-height-expand-transition-${f}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${T},
 opacity ${t} ${Ee},
 margin-top ${t} ${T},
 margin-bottom ${t} ${T},
 padding-top ${t} ${T},
 padding-bottom ${t} ${T}
 ${r?","+r:""}
 `)]}const ke=e=>{const{fontWeight:t,textColor1:r,textColor2:o,textColorDisabled:c,dividerColor:s,fontSize:v}=e;return{titleFontSize:v,titleFontWeight:t,dividerColor:s,titleTextColor:r,titleTextColorDisabled:c,fontSize:v,textColor:o,arrowColor:o,arrowColorDisabled:c,itemMargin:"16px 0 0 0"}},Pe={name:"Collapse",common:re,self:ke},Be=Pe,Ie=i("collapse","width: 100%;",[i("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[C("disabled",[n("header","cursor: not-allowed;",[n("header-main",`
 color: var(--n-title-text-color-disabled);
 `),i("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),i("collapse-item","margin-left: 32px;"),w("&:first-child","margin-top: 0;"),w("&:first-child >",[n("header","padding-top: 0;")]),C("left-arrow-placement",[n("header",[i("collapse-item-arrow","margin-right: 4px;")])]),C("right-arrow-placement",[n("header",[i("collapse-item-arrow","margin-left: 4px;")])]),n("content-wrapper",[n("content-inner","padding-top: 16px;"),Ne({duration:"0.15s"})]),C("active",[n("header",[C("active",[i("collapse-item-arrow","transform: rotate(90deg);")])])]),w("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),n("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[n("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),i("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),je=Object.assign(Object.assign({},D.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),ee=le("n-collapse"),Fe=j({name:"Collapse",props:je,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:c}=V(e),s=A(e.defaultExpandedNames),v=R(()=>e.expandedNames),h=X(v,s),f=D("Collapse","-collapse",Ie,Be,e,r);function g(y){const{"onUpdate:expandedNames":u,onUpdateExpandedNames:_,onExpandedNamesChange:N}=e;_&&B(_,y),u&&B(u,y),N&&B(N,y),s.value=y}function b(y){const{onItemHeaderClick:u}=e;u&&B(u,y)}function p(y,u,_){const{accordion:N}=e,{value:I}=h;if(N)y?(g([u]),b({name:u,expanded:!0,event:_})):(g([]),b({name:u,expanded:!1,event:_}));else if(!Array.isArray(I))g([u]),b({name:u,expanded:!0,event:_});else{const x=I.slice(),d=x.findIndex(l=>u===l);~d?(x.splice(d,1),g(x),b({name:u,expanded:!1,event:_})):(x.push(u),g(x),b({name:u,expanded:!0,event:_}))}}J(ee,{props:e,mergedClsPrefixRef:r,expandedNamesRef:h,slots:t,toggleItem:p});const S=q("Collapse",c,r),E=R(()=>{const{common:{cubicBezierEaseInOut:y},self:{titleFontWeight:u,dividerColor:_,titleTextColor:N,titleTextColorDisabled:I,textColor:x,arrowColor:d,fontSize:l,titleFontSize:m,arrowColorDisabled:F,itemMargin:k}}=f.value;return{"--n-font-size":l,"--n-bezier":y,"--n-text-color":x,"--n-divider-color":_,"--n-title-font-size":m,"--n-title-text-color":N,"--n-title-text-color-disabled":I,"--n-title-font-weight":u,"--n-arrow-color":d,"--n-arrow-color-disabled":F,"--n-item-margin":k}}),$=o?K("collapse",void 0,E,e):void 0;return{rtlEnabled:S,mergedTheme:f,mergedClsPrefix:r,cssVars:o?void 0:E,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Oe=j({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Se(U(e,"show"))}},render(){return a(pe,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:r,clsPrefix:o}=this,c=t==="show"&&r,s=a("div",{class:`${o}-collapse-item__content-wrapper`},a("div",{class:`${o}-collapse-item__content-inner`},this.$slots));return c?fe(s,[[ge,e]]):e?s:null}})}}),Le={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},Ae=j({name:"CollapseItem",props:Le,setup(e){const{mergedRtlRef:t}=V(e),r=ze(),o=ae(()=>{var p;return(p=e.name)!==null&&p!==void 0?p:r}),c=Q(ee);c||ne("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:s,props:v,mergedClsPrefixRef:h,slots:f}=c,g=R(()=>{const{value:p}=s;if(Array.isArray(p)){const{value:S}=o;return!~p.findIndex(E=>E===S)}else if(p){const{value:S}=o;return S!==p}return!0});return{rtlEnabled:q("Collapse",t,h),collapseSlots:f,randomName:r,mergedClsPrefix:h,collapsed:g,mergedDisplayDirective:R(()=>{const{displayDirective:p}=e;return p||v.displayDirective}),arrowPlacement:R(()=>v.arrowPlacement),handleClick(p){c&&!e.disabled&&c.toggleItem(g.value,o.value,p)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:r,collapsed:o,mergedDisplayDirective:c,mergedClsPrefix:s,disabled:v}=this,h=Y(t.header,{collapsed:o},()=>[this.title]),f=t["header-extra"]||e["header-extra"],g=t.arrow||e.arrow;return a("div",{class:[`${s}-collapse-item`,`${s}-collapse-item--${r}-arrow-placement`,v&&`${s}-collapse-item--disabled`,!o&&`${s}-collapse-item--active`]},a("div",{class:[`${s}-collapse-item__header`,!o&&`${s}-collapse-item__header--active`]},a("div",{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},r==="right"&&h,a("div",{class:`${s}-collapse-item-arrow`,key:this.rtlEnabled?0:1},Y(g,{collapsed:o},()=>{var b;return[a(Z,{clsPrefix:s},{default:(b=e.expandIcon)!==null&&b!==void 0?b:()=>this.rtlEnabled?a(Te,null):a(G,null)})]})),r==="left"&&h),se(f,{collapsed:o},b=>a("div",{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick},b))),a(Oe,{clsPrefix:s,displayDirective:c,show:!o},t))}}),De=i("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[C("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[C("bordered",[n("border",`
 right: 0;
 `)])]),C("right-placement",`
 justify-content: flex-start;
 `,[C("bordered",[n("border",`
 left: 0;
 `)]),C("collapsed",[i("layout-toggle-button",[i("base-icon",`
 transform: rotate(180deg);
 `)]),i("layout-toggle-bar",[w("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),i("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[i("base-icon",`
 transform: rotate(0);
 `)]),i("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[w("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),C("collapsed",[i("layout-toggle-bar",[w("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),i("layout-toggle-button",[i("base-icon",`
 transform: rotate(0);
 `)])]),i("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[i("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),i("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),w("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),w("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),i("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),C("show-content",[i("layout-sider-scroll-container",{opacity:1})]),C("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Me=j({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(Z,{clsPrefix:e},{default:()=>a(G,null)}))}}),We=j({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Ue={position:_e,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ve=j({name:"LayoutSider",props:Object.assign(Object.assign({},D.props),Ue),setup(e){const t=Q(we),r=A(null),o=A(null),c=R(()=>W(f.value?e.collapsedWidth:e.width)),s=R(()=>e.collapseMode!=="transform"?{}:{minWidth:W(e.width)}),v=R(()=>t?t.siderPlacement:"left"),h=A(e.defaultCollapsed),f=X(U(e,"collapsed"),h);function g(d,l){if(e.nativeScrollbar){const{value:m}=r;m&&(l===void 0?m.scrollTo(d):m.scrollTo(d,l))}else{const{value:m}=o;m&&m.scrollTo(d,l)}}function b(){const{"onUpdate:collapsed":d,onUpdateCollapsed:l,onExpand:m,onCollapse:F}=e,{value:k}=f;l&&B(l,!k),d&&B(d,!k),h.value=!k,k?m&&B(m):F&&B(F)}let p=0,S=0;const E=d=>{var l;const m=d.target;p=m.scrollLeft,S=m.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,d)};ie(()=>{if(e.nativeScrollbar){const d=r.value;d&&(d.scrollTop=S,d.scrollLeft=p)}}),J(ye,{collapsedRef:f,collapseModeRef:U(e,"collapseMode")});const{mergedClsPrefixRef:$,inlineThemeDisabled:y}=V(e),u=D("Layout","-layout-sider",De,Ce,e,$);function _(d){var l,m;d.propertyName==="max-width"&&(f.value?(l=e.onAfterLeave)===null||l===void 0||l.call(e):(m=e.onAfterEnter)===null||m===void 0||m.call(e))}const N={scrollTo:g},I=R(()=>{const{common:{cubicBezierEaseInOut:d},self:l}=u.value,{siderToggleButtonColor:m,siderToggleButtonBorder:F,siderToggleBarColor:k,siderToggleBarColorHover:te}=l,z={"--n-bezier":d,"--n-toggle-button-color":m,"--n-toggle-button-border":F,"--n-toggle-bar-color":k,"--n-toggle-bar-color-hover":te};return e.inverted?(z["--n-color"]=l.siderColorInverted,z["--n-text-color"]=l.textColorInverted,z["--n-border-color"]=l.siderBorderColorInverted,z["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColorInverted,z.__invertScrollbar=l.__invertScrollbar):(z["--n-color"]=l.siderColor,z["--n-text-color"]=l.textColor,z["--n-border-color"]=l.siderBorderColor,z["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColor),z}),x=y?K("layout-sider",R(()=>e.inverted?"a":"b"),I,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:o,mergedClsPrefix:$,mergedTheme:u,styleMaxWidth:c,mergedCollapsed:f,scrollContainerStyle:s,siderPlacement:v,handleNativeElScroll:E,handleTransitionend:_,handleTriggerClick:b,inlineThemeDisabled:y,cssVars:I,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender},N)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:W(this.width)}]},this.nativeScrollbar?a("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):a(ce,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),o?o==="bar"?a(We,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(Me,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${t}-layout-sider__border`}):null)}}),Ye={class:"bg-#F8F8F8 min-h-screen"},He=P("div",null,[P("input",{class:"mt4",type:"text",placeholder:""})],-1),qe=P("div",{class:"i-mdi:dots-horizontal text-xl mt4"},null,-1),et={__name:"default",setup(e){const t=A([]),r=()=>{let c={title:"New Collection"};t.value.push(c)},o=[{label:"Move"},{label:"Edit"},{label:"Delete"}];return(c,s)=>{const v=Ae,h=ue,f=me,g=Fe,b=Ve,p=$e,S=de;return M(),H(S,{vertical:"",size:"large"},{default:O(()=>[L(p,{"has-sider":""},{default:O(()=>[L(b,null,{default:O(()=>[P("div",Ye,[P("div",{class:"flex space-x-3"},[P("div",{class:"mt4"},[P("button",{class:"i-mdi:plus text-xl ml2",onClick:r})]),He,qe]),P("div",null,[(M(!0),he(ve,null,be(t.value,(E,$)=>(M(),H(g,{class:"flex justify-between mt5",key:$},{default:O(()=>[L(v,{title:E.title,name:""},null,8,["title"]),L(f,{placement:"bottom-start",trigger:"click",size:"small",options:o},{default:O(()=>[L(h,{quaternary:"",class:"i-mdi:dots-horizontal text-xl mr6"})]),_:1})]),_:2},1024))),128))])])]),_:1}),xe(c.$slots,"default")]),_:3})]),_:3})}}};export{et as default};
