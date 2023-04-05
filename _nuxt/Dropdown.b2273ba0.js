import{b as V,a as D,z as Ye,v as Ne,o as he,c as Ce,e as E,f as I,p as pe,k as te,j as Se,l as Ze,m as h,q as ie,n as Pe,s as Je,x as Be}from"./light.2e394c2d.js";import{i as eo}from"./browser.a0ed56ab.js";import{m as ae,o as de,t as oo,B as ro,b as to,d as se,a as no,r as Re,D as io,e as so,n as lo,c as ue,X as ao,u as co}from"./Scrollbar.54d56e2b.js";import{z as uo,t as He,p as po,g as fo,A as Fe,V as ho,v as vo,w as bo,r as fe,h as ze,B as xo,C as mo,D as yo,m as go,d as wo,k as Co,N as So,e as We}from"./Popover.e82ca720.js";import{r as Q,f as $e,Q as Po,R as $o,I as Ee,S as Io,m as X,p as u,T as To,K as Oe,z as Z,x as ko,s as ee,q as N,t as Ie,y as re,F as Ro}from"./entry.68d15f63.js";function Ho(e){return o=>{o?e.value=o.$el:e.value=null}}function zo(e,o,l){if(!o)return e;const r=Q(e.value);let n=null;return $e(e,t=>{n!==null&&window.clearTimeout(n),t===!0?l&&!l.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Do(e={},o){const l=Po({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,t=a=>{switch(a.key){case"Control":l.ctrl=!0;break;case"Meta":l.command=!0,l.win=!0;break;case"Shift":l.shift=!0;break;case"Tab":l.tab=!0;break}r!==void 0&&Object.keys(r).forEach(R=>{if(R!==a.key)return;const S=r[R];if(typeof S=="function")S(a);else{const{stop:g=!1,prevent:K=!1}=S;g&&a.stopPropagation(),K&&a.preventDefault(),S.handler(a)}})},p=a=>{switch(a.key){case"Control":l.ctrl=!1;break;case"Meta":l.command=!1,l.win=!1;break;case"Shift":l.shift=!1;break;case"Tab":l.tab=!1;break}n!==void 0&&Object.keys(n).forEach(R=>{if(R!==a.key)return;const S=n[R];if(typeof S=="function")S(a);else{const{stop:g=!1,prevent:K=!1}=S;g&&a.stopPropagation(),K&&a.preventDefault(),S.handler(a)}})},i=()=>{(o===void 0||o.value)&&(de("keydown",document,t),de("keyup",document,p)),o!==void 0&&$e(o,a=>{a?(de("keydown",document,t),de("keyup",document,p)):(ae("keydown",document,t),ae("keyup",document,p))})};return uo()?($o(i),Ee(()=>{(o===void 0||o.value)&&(ae("keydown",document,t),ae("keyup",document,p))})):i(),Io(l)}const No=X({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Bo=X({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:o}){function l(i){e.width?i.style.maxWidth=`${i.offsetWidth}px`:i.style.maxHeight=`${i.offsetHeight}px`,i.offsetWidth}function r(i){e.width?i.style.maxWidth="0":i.style.maxHeight="0",i.offsetWidth;const{onLeave:a}=e;a&&a()}function n(i){e.width?i.style.maxWidth="":i.style.maxHeight="";const{onAfterLeave:a}=e;a&&a()}function t(i){if(i.style.transition="none",e.width){const a=i.offsetWidth;i.style.maxWidth="0",i.offsetWidth,i.style.transition="",i.style.maxWidth=`${a}px`}else if(e.reverse)i.style.maxHeight=`${i.offsetHeight}px`,i.offsetHeight,i.style.transition="",i.style.maxHeight="0";else{const a=i.offsetHeight;i.style.maxHeight="0",i.offsetWidth,i.style.transition="",i.style.maxHeight=`${a}px`}i.offsetWidth}function p(i){var a;e.width?i.style.maxWidth="":e.reverse||(i.style.maxHeight=""),(a=e.onAfterEnter)===null||a===void 0||a.call(e)}return()=>{const i=e.group?To:Oe;return u(i,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:t,onAfterEnter:p,onBeforeLeave:l,onLeave:r,onAfterLeave:n},o)}}}),Fo=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Wo=X({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){oo("-base-wave",Fo,Z(e,"clsPrefix"));const o=Q(null),l=Q(!1);let r=null;return Ee(()=>{r!==null&&window.clearTimeout(r)}),{active:l,selfRef:o,play(){r!==null&&(window.clearTimeout(r),l.value=!1,r=null),ko(()=>{var n;(n=o.value)===null||n===void 0||n.offsetHeight,l.value=!0,r=window.setTimeout(()=>{l.value=!1,r=null},1e3)})}}},render(){const{clsPrefix:e}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:J}=Ye;function Eo({duration:e=".2s",delay:o=".1s"}={}){return[D("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),D("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),D("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${J},
 max-width ${e} ${J} ${o},
 margin-left ${e} ${J} ${o},
 margin-right ${e} ${J} ${o};
 `),D("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${J} ${o},
 max-width ${e} ${J},
 margin-left ${e} ${J},
 margin-right ${e} ${J};
 `)]}function oe(e){return Ne(e,[255,255,255,.16])}function ce(e){return Ne(e,[0,0,0,.12])}const Oo=he("n-button-group"),_o={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Ko=e=>{const{heightTiny:o,heightSmall:l,heightMedium:r,heightLarge:n,borderRadius:t,fontSizeTiny:p,fontSizeSmall:i,fontSizeMedium:a,fontSizeLarge:R,opacityDisabled:S,textColor2:g,textColor3:K,primaryColorHover:m,primaryColorPressed:H,borderColor:q,primaryColor:P,baseColor:v,infoColor:L,infoColorHover:_,infoColorPressed:f,successColor:y,successColorHover:B,successColorPressed:s,warningColor:M,warningColorHover:O,warningColorPressed:G,errorColor:F,errorColorHover:c,errorColorPressed:w,fontWeight:b,buttonColor2:x,buttonColor2Hover:T,buttonColor2Pressed:d,fontWeightStrong:k}=e;return Object.assign(Object.assign({},_o),{heightTiny:o,heightSmall:l,heightMedium:r,heightLarge:n,borderRadiusTiny:t,borderRadiusSmall:t,borderRadiusMedium:t,borderRadiusLarge:t,fontSizeTiny:p,fontSizeSmall:i,fontSizeMedium:a,fontSizeLarge:R,opacityDisabled:S,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:x,colorSecondaryHover:T,colorSecondaryPressed:d,colorTertiary:x,colorTertiaryHover:T,colorTertiaryPressed:d,colorQuaternary:"#0000",colorQuaternaryHover:T,colorQuaternaryPressed:d,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:g,textColorTertiary:K,textColorHover:m,textColorPressed:H,textColorFocus:m,textColorDisabled:g,textColorText:g,textColorTextHover:m,textColorTextPressed:H,textColorTextFocus:m,textColorTextDisabled:g,textColorGhost:g,textColorGhostHover:m,textColorGhostPressed:H,textColorGhostFocus:m,textColorGhostDisabled:g,border:`1px solid ${q}`,borderHover:`1px solid ${m}`,borderPressed:`1px solid ${H}`,borderFocus:`1px solid ${m}`,borderDisabled:`1px solid ${q}`,rippleColor:P,colorPrimary:P,colorHoverPrimary:m,colorPressedPrimary:H,colorFocusPrimary:m,colorDisabledPrimary:P,textColorPrimary:v,textColorHoverPrimary:v,textColorPressedPrimary:v,textColorFocusPrimary:v,textColorDisabledPrimary:v,textColorTextPrimary:P,textColorTextHoverPrimary:m,textColorTextPressedPrimary:H,textColorTextFocusPrimary:m,textColorTextDisabledPrimary:g,textColorGhostPrimary:P,textColorGhostHoverPrimary:m,textColorGhostPressedPrimary:H,textColorGhostFocusPrimary:m,textColorGhostDisabledPrimary:P,borderPrimary:`1px solid ${P}`,borderHoverPrimary:`1px solid ${m}`,borderPressedPrimary:`1px solid ${H}`,borderFocusPrimary:`1px solid ${m}`,borderDisabledPrimary:`1px solid ${P}`,rippleColorPrimary:P,colorInfo:L,colorHoverInfo:_,colorPressedInfo:f,colorFocusInfo:_,colorDisabledInfo:L,textColorInfo:v,textColorHoverInfo:v,textColorPressedInfo:v,textColorFocusInfo:v,textColorDisabledInfo:v,textColorTextInfo:L,textColorTextHoverInfo:_,textColorTextPressedInfo:f,textColorTextFocusInfo:_,textColorTextDisabledInfo:g,textColorGhostInfo:L,textColorGhostHoverInfo:_,textColorGhostPressedInfo:f,textColorGhostFocusInfo:_,textColorGhostDisabledInfo:L,borderInfo:`1px solid ${L}`,borderHoverInfo:`1px solid ${_}`,borderPressedInfo:`1px solid ${f}`,borderFocusInfo:`1px solid ${_}`,borderDisabledInfo:`1px solid ${L}`,rippleColorInfo:L,colorSuccess:y,colorHoverSuccess:B,colorPressedSuccess:s,colorFocusSuccess:B,colorDisabledSuccess:y,textColorSuccess:v,textColorHoverSuccess:v,textColorPressedSuccess:v,textColorFocusSuccess:v,textColorDisabledSuccess:v,textColorTextSuccess:y,textColorTextHoverSuccess:B,textColorTextPressedSuccess:s,textColorTextFocusSuccess:B,textColorTextDisabledSuccess:g,textColorGhostSuccess:y,textColorGhostHoverSuccess:B,textColorGhostPressedSuccess:s,textColorGhostFocusSuccess:B,textColorGhostDisabledSuccess:y,borderSuccess:`1px solid ${y}`,borderHoverSuccess:`1px solid ${B}`,borderPressedSuccess:`1px solid ${s}`,borderFocusSuccess:`1px solid ${B}`,borderDisabledSuccess:`1px solid ${y}`,rippleColorSuccess:y,colorWarning:M,colorHoverWarning:O,colorPressedWarning:G,colorFocusWarning:O,colorDisabledWarning:M,textColorWarning:v,textColorHoverWarning:v,textColorPressedWarning:v,textColorFocusWarning:v,textColorDisabledWarning:v,textColorTextWarning:M,textColorTextHoverWarning:O,textColorTextPressedWarning:G,textColorTextFocusWarning:O,textColorTextDisabledWarning:g,textColorGhostWarning:M,textColorGhostHoverWarning:O,textColorGhostPressedWarning:G,textColorGhostFocusWarning:O,textColorGhostDisabledWarning:M,borderWarning:`1px solid ${M}`,borderHoverWarning:`1px solid ${O}`,borderPressedWarning:`1px solid ${G}`,borderFocusWarning:`1px solid ${O}`,borderDisabledWarning:`1px solid ${M}`,rippleColorWarning:M,colorError:F,colorHoverError:c,colorPressedError:w,colorFocusError:c,colorDisabledError:F,textColorError:v,textColorHoverError:v,textColorPressedError:v,textColorFocusError:v,textColorDisabledError:v,textColorTextError:F,textColorTextHoverError:c,textColorTextPressedError:w,textColorTextFocusError:c,textColorTextDisabledError:g,textColorGhostError:F,textColorGhostHoverError:c,textColorGhostPressedError:w,textColorGhostFocusError:c,textColorGhostDisabledError:F,borderError:`1px solid ${F}`,borderHoverError:`1px solid ${c}`,borderPressedError:`1px solid ${w}`,borderFocusError:`1px solid ${c}`,borderDisabledError:`1px solid ${F}`,rippleColorError:F,waveOpacity:"0.6",fontWeight:b,fontWeightStrong:k})},Lo={name:"Button",common:Ce,self:Ko},Mo=Lo,Ao=D([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[E("color",[I("border",{borderColor:"var(--n-border-color)"}),E("disabled",[I("border",{borderColor:"var(--n-border-color-disabled)"})]),pe("disabled",[D("&:focus",[I("state-border",{borderColor:"var(--n-border-color-focus)"})]),D("&:hover",[I("state-border",{borderColor:"var(--n-border-color-hover)"})]),D("&:active",[I("state-border",{borderColor:"var(--n-border-color-pressed)"})]),E("pressed",[I("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),E("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[I("border",{border:"var(--n-border-disabled)"})]),pe("disabled",[D("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[I("state-border",{border:"var(--n-border-focus)"})]),D("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[I("state-border",{border:"var(--n-border-hover)"})]),D("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[I("state-border",{border:"var(--n-border-pressed)"})]),E("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[I("state-border",{border:"var(--n-border-pressed)"})])]),E("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[E("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ro&&"MozBoxSizing"in document.createElement("div").style?D("&::moz-focus-inner",{border:0}):null,I("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),I("border",{border:"var(--n-border)"}),I("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),I("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[to({top:"50%",originalTransform:"translateY(-50%)"})]),Eo()]),I("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[D("~",[I("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),E("block",`
 display: flex;
 width: 100%;
 `),E("dashed",[I("border, state-border",{borderStyle:"dashed !important"})]),E("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),D("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),D("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Go=Object.assign(Object.assign({},te.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!eo}}),jo=X({name:"Button",props:Go,setup(e){const o=Q(null),l=Q(null),r=Q(!1),n=se(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),t=ee(Oo,{}),{mergedSizeRef:p}=no({},{defaultSize:"medium",mergedSize:f=>{const{size:y}=e;if(y)return y;const{size:B}=t;if(B)return B;const{mergedSize:s}=f||{};return s?s.value:"medium"}}),i=N(()=>e.focusable&&!e.disabled),a=f=>{var y;i.value||f.preventDefault(),!e.nativeFocusBehavior&&(f.preventDefault(),!e.disabled&&i.value&&((y=o.value)===null||y===void 0||y.focus({preventScroll:!0})))},R=f=>{var y;if(!e.disabled&&!e.loading){const{onClick:B}=e;B&&ue(B,f),e.text||(y=l.value)===null||y===void 0||y.play()}},S=f=>{switch(f.key){case"Enter":if(!e.keyboard)return;r.value=!1}},g=f=>{switch(f.key){case"Enter":if(!e.keyboard||e.loading){f.preventDefault();return}r.value=!0}},K=()=>{r.value=!1},{inlineThemeDisabled:m,mergedClsPrefixRef:H,mergedRtlRef:q}=Se(e),P=te("Button","-button",Ao,Mo,e,H),v=Ze("Button",q,H),L=N(()=>{const f=P.value,{common:{cubicBezierEaseInOut:y,cubicBezierEaseOut:B},self:s}=f,{rippleDuration:M,opacityDisabled:O,fontWeight:G,fontWeightStrong:F}=s,c=p.value,{dashed:w,type:b,ghost:x,text:T,color:d,round:k,circle:U,textColor:j,secondary:ne,tertiary:Y,quaternary:be,strong:xe}=e,me={"font-weight":xe?F:G};let z={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const $=b==="tertiary",ke=b==="default",C=$?"default":b;if(T){const W=j||d;z={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":W||s[h("textColorText",C)],"--n-text-color-hover":W?oe(W):s[h("textColorTextHover",C)],"--n-text-color-pressed":W?ce(W):s[h("textColorTextPressed",C)],"--n-text-color-focus":W?oe(W):s[h("textColorTextHover",C)],"--n-text-color-disabled":W||s[h("textColorTextDisabled",C)]}}else if(x||w){const W=j||d;z={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":d||s[h("rippleColor",C)],"--n-text-color":W||s[h("textColorGhost",C)],"--n-text-color-hover":W?oe(W):s[h("textColorGhostHover",C)],"--n-text-color-pressed":W?ce(W):s[h("textColorGhostPressed",C)],"--n-text-color-focus":W?oe(W):s[h("textColorGhostHover",C)],"--n-text-color-disabled":W||s[h("textColorGhostDisabled",C)]}}else if(ne){const W=ke?s.textColor:$?s.textColorTertiary:s[h("color",C)],A=d||W,le=b!=="default"&&b!=="tertiary";z={"--n-color":le?ie(A,{alpha:Number(s.colorOpacitySecondary)}):s.colorSecondary,"--n-color-hover":le?ie(A,{alpha:Number(s.colorOpacitySecondaryHover)}):s.colorSecondaryHover,"--n-color-pressed":le?ie(A,{alpha:Number(s.colorOpacitySecondaryPressed)}):s.colorSecondaryPressed,"--n-color-focus":le?ie(A,{alpha:Number(s.colorOpacitySecondaryHover)}):s.colorSecondaryHover,"--n-color-disabled":s.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":A,"--n-text-color-hover":A,"--n-text-color-pressed":A,"--n-text-color-focus":A,"--n-text-color-disabled":A}}else if(Y||be){const W=ke?s.textColor:$?s.textColorTertiary:s[h("color",C)],A=d||W;Y?(z["--n-color"]=s.colorTertiary,z["--n-color-hover"]=s.colorTertiaryHover,z["--n-color-pressed"]=s.colorTertiaryPressed,z["--n-color-focus"]=s.colorSecondaryHover,z["--n-color-disabled"]=s.colorTertiary):(z["--n-color"]=s.colorQuaternary,z["--n-color-hover"]=s.colorQuaternaryHover,z["--n-color-pressed"]=s.colorQuaternaryPressed,z["--n-color-focus"]=s.colorQuaternaryHover,z["--n-color-disabled"]=s.colorQuaternary),z["--n-ripple-color"]="#0000",z["--n-text-color"]=A,z["--n-text-color-hover"]=A,z["--n-text-color-pressed"]=A,z["--n-text-color-focus"]=A,z["--n-text-color-disabled"]=A}else z={"--n-color":d||s[h("color",C)],"--n-color-hover":d?oe(d):s[h("colorHover",C)],"--n-color-pressed":d?ce(d):s[h("colorPressed",C)],"--n-color-focus":d?oe(d):s[h("colorFocus",C)],"--n-color-disabled":d||s[h("colorDisabled",C)],"--n-ripple-color":d||s[h("rippleColor",C)],"--n-text-color":j||(d?s.textColorPrimary:$?s.textColorTertiary:s[h("textColor",C)]),"--n-text-color-hover":j||(d?s.textColorHoverPrimary:s[h("textColorHover",C)]),"--n-text-color-pressed":j||(d?s.textColorPressedPrimary:s[h("textColorPressed",C)]),"--n-text-color-focus":j||(d?s.textColorFocusPrimary:s[h("textColorFocus",C)]),"--n-text-color-disabled":j||(d?s.textColorDisabledPrimary:s[h("textColorDisabled",C)])};let ye={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};T?ye={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ye={"--n-border":s[h("border",C)],"--n-border-hover":s[h("borderHover",C)],"--n-border-pressed":s[h("borderPressed",C)],"--n-border-focus":s[h("borderFocus",C)],"--n-border-disabled":s[h("borderDisabled",C)]};const{[h("height",c)]:ge,[h("fontSize",c)]:Ae,[h("padding",c)]:Ge,[h("paddingRound",c)]:je,[h("iconSize",c)]:Ve,[h("borderRadius",c)]:qe,[h("iconMargin",c)]:Ue,waveOpacity:Qe}=s,Xe={"--n-width":U&&!T?ge:"initial","--n-height":T?"initial":ge,"--n-font-size":Ae,"--n-padding":U||T?"initial":k?je:Ge,"--n-icon-size":Ve,"--n-icon-margin":Ue,"--n-border-radius":T?"initial":U||k?ge:qe};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":y,"--n-bezier-ease-out":B,"--n-ripple-duration":M,"--n-opacity-disabled":O,"--n-wave-opacity":Qe},me),z),ye),Xe)}),_=m?Pe("button",N(()=>{let f="";const{dashed:y,type:B,ghost:s,text:M,color:O,round:G,circle:F,textColor:c,secondary:w,tertiary:b,quaternary:x,strong:T}=e;y&&(f+="a"),s&&(f+="b"),M&&(f+="c"),G&&(f+="d"),F&&(f+="e"),w&&(f+="f"),b&&(f+="g"),x&&(f+="h"),T&&(f+="i"),O&&(f+="j"+He(O)),c&&(f+="k"+He(c));const{value:d}=p;return f+="l"+d[0],f+="m"+B[0],f}),L,e):void 0;return{selfElRef:o,waveElRef:l,mergedClsPrefix:H,mergedFocusable:i,mergedSize:p,showBorder:n,enterPressed:r,rtlEnabled:v,handleMousedown:a,handleKeydown:g,handleBlur:K,handleKeyup:S,handleClick:R,customColorCssVars:N(()=>{const{color:f}=e;if(!f)return null;const y=oe(f);return{"--n-border-color":f,"--n-border-color-hover":y,"--n-border-color-pressed":ce(f),"--n-border-color-focus":y,"--n-border-color-disabled":f}}),cssVars:m?void 0:L,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:e,tag:o,onRender:l}=this;l==null||l();const r=Re(this.$slots.default,n=>n&&u("span",{class:`${e}-button__content`},n));return u(o,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&r,u(Bo,{width:!0},{default:()=>Re(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&u("span",{class:`${e}-button__icon`,style:{margin:io(this.$slots.default)?"0":""}},u(so,null,{default:()=>this.loading?u(lo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&r,this.text?null:u(Wo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?u("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),br=jo,Vo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},qo=e=>{const{primaryColor:o,textColor2:l,dividerColor:r,hoverColor:n,popoverColor:t,invertedColor:p,borderRadius:i,fontSizeSmall:a,fontSizeMedium:R,fontSizeLarge:S,fontSizeHuge:g,heightSmall:K,heightMedium:m,heightLarge:H,heightHuge:q,textColor3:P,opacityDisabled:v}=e;return Object.assign(Object.assign({},Vo),{optionHeightSmall:K,optionHeightMedium:m,optionHeightLarge:H,optionHeightHuge:q,borderRadius:i,fontSizeSmall:a,fontSizeMedium:R,fontSizeLarge:S,fontSizeHuge:g,optionTextColor:l,optionTextColorHover:l,optionTextColorActive:o,optionTextColorChildActive:o,color:t,dividerColor:r,suffixColor:l,prefixColor:l,optionColorHover:n,optionColorActive:ie(o,{alpha:.1}),groupHeaderTextColor:P,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:p,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:v})},Uo=Je({name:"Dropdown",common:Ce,peers:{Popover:po},self:qo}),Qo=Uo,_e=X({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Xo=e=>{const{textColorBase:o,opacity1:l,opacity2:r,opacity3:n,opacity4:t,opacity5:p}=e;return{color:o,opacity1Depth:l,opacity2Depth:r,opacity3Depth:n,opacity4Depth:t,opacity5Depth:p}},Yo={name:"Icon",common:Ce,self:Xo},Zo=Yo,Jo=V("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[E("color-transition",{transition:"color .3s var(--n-bezier)"}),E("depth",{color:"var(--n-color)"},[D("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),D("svg",{height:"1em",width:"1em"})]),er=Object.assign(Object.assign({},te.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),or=X({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:er,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:l}=Se(e),r=te("Icon","-icon",Jo,Zo,e,o),n=N(()=>{const{depth:p}=e,{common:{cubicBezierEaseInOut:i},self:a}=r.value;if(p!==void 0){const{color:R,[`opacity${p}Depth`]:S}=a;return{"--n-bezier":i,"--n-color":R,"--n-opacity":S}}return{"--n-bezier":i,"--n-color":"","--n-opacity":""}}),t=l?Pe("icon",N(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:o,mergedStyle:N(()=>{const{size:p,color:i}=e;return{fontSize:fo(p),color:i}}),cssVars:l?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$parent:o,depth:l,mergedClsPrefix:r,component:n,onRender:t,themeClass:p}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&Be("icon","don't wrap `n-icon` inside `n-icon`"),t==null||t(),u("i",Ie(this.$attrs,{role:"img",class:[`${r}-icon`,p,{[`${r}-icon--depth`]:l,[`${r}-icon--color-transition`]:l!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?u(n):this.$slots)}}),Te=he("n-dropdown-menu"),ve=he("n-dropdown"),De=he("n-dropdown-option");function we(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function rr(e){return e.type==="group"}function Ke(e){return e.type==="divider"}function tr(e){return e.type==="render"}const Le=X({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=ee(ve),{hoverKeyRef:l,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:t,activeKeyPathRef:p,animatedRef:i,mergedShowRef:a,renderLabelRef:R,renderIconRef:S,labelFieldRef:g,childrenFieldRef:K,renderOptionRef:m,nodePropsRef:H,menuPropsRef:q}=o,P=ee(De,null),v=ee(Te),L=ee(Fe),_=N(()=>e.tmNode.rawNode),f=N(()=>{const{value:d}=K;return we(e.tmNode.rawNode,d)}),y=N(()=>{const{disabled:d}=e.tmNode;return d}),B=N(()=>{if(!f.value)return!1;const{key:d,disabled:k}=e.tmNode;if(k)return!1;const{value:U}=l,{value:j}=r,{value:ne}=n,{value:Y}=t;return U!==null?Y.includes(d):j!==null?Y.includes(d)&&Y[Y.length-1]!==d:ne!==null?Y.includes(d):!1}),s=N(()=>r.value===null&&!i.value),M=zo(B,300,s),O=N(()=>!!(P!=null&&P.enteringSubmenuRef.value)),G=Q(!1);re(De,{enteringSubmenuRef:G});function F(){G.value=!0}function c(){G.value=!1}function w(){const{parentKey:d,tmNode:k}=e;k.disabled||a.value&&(n.value=d,r.value=null,l.value=k.key)}function b(){const{tmNode:d}=e;d.disabled||a.value&&l.value!==d.key&&w()}function x(d){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:k}=d;k&&!ze({target:k},"dropdownOption")&&!ze({target:k},"scrollbarRail")&&(l.value=null)}function T(){const{value:d}=f,{tmNode:k}=e;a.value&&!d&&!k.disabled&&(o.doSelect(k.key,k.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:R,renderIcon:S,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:q,popoverBody:L,animated:i,mergedShowSubmenu:N(()=>M.value&&!O.value),rawNode:_,hasSubmenu:f,pending:se(()=>{const{value:d}=t,{key:k}=e.tmNode;return d.includes(k)}),childActive:se(()=>{const{value:d}=p,{key:k}=e.tmNode,U=d.findIndex(j=>k===j);return U===-1?!1:U<d.length-1}),active:se(()=>{const{value:d}=p,{key:k}=e.tmNode,U=d.findIndex(j=>k===j);return U===-1?!1:U===d.length-1}),mergedDisabled:y,renderOption:m,nodeProps:H,handleClick:T,handleMouseMove:b,handleMouseEnter:w,handleMouseLeave:x,handleSubmenuBeforeEnter:F,handleSubmenuAfterEnter:c}},render(){var e,o;const{animated:l,rawNode:r,mergedShowSubmenu:n,clsPrefix:t,siblingHasIcon:p,siblingHasSubmenu:i,renderLabel:a,renderIcon:R,renderOption:S,nodeProps:g,props:K,scrollable:m}=this;let H=null;if(n){const L=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);H=u(Me,Object.assign({},L,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const q={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},P=g==null?void 0:g(r),v=u("div",Object.assign({class:[`${t}-dropdown-option`,P==null?void 0:P.class],"data-dropdown-option":!0},P),u("div",Ie(q,K),[u("div",{class:[`${t}-dropdown-option-body__prefix`,p&&`${t}-dropdown-option-body__prefix--show-icon`]},[R?R(r):fe(r.icon)]),u("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(r):fe((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,i&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(or,null,{default:()=>u(No,null)}):null)]),this.hasSubmenu?u(ho,null,{default:()=>[u(vo,null,{default:()=>u("div",{class:`${t}-dropdown-offset-container`},u(bo,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>u("div",{class:`${t}-dropdown-menu-wrapper`},l?u(Oe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>H}):H)}))})]}):null);return S?S({node:v,option:r}):v}}),nr=X({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=ee(Te),{renderLabelRef:l,labelFieldRef:r,nodePropsRef:n,renderOptionRef:t}=ee(ve);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:l,nodeProps:n,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:l,showIcon:r,nodeProps:n,renderLabel:t,renderOption:p}=this,{rawNode:i}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(i)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},fe(i.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(i):fe((e=i.title)!==null&&e!==void 0?e:i[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,l&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:a,option:i}):a}}),ir=X({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:l}=this,{children:r}=e;return u(Ro,null,u(nr,{clsPrefix:l,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:t}=n;return t.show===!1?null:Ke(t)?u(_e,{clsPrefix:l,key:n.key}):n.isGroup?(Be("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Le,{clsPrefix:l,tmNode:n,parentKey:o,key:n.key})}))}}),sr=X({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Me=X({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:l}=ee(ve);re(Te,{showIconRef:N(()=>{const n=o.value;return e.tmNodes.some(t=>{var p;if(t.isGroup)return(p=t.children)===null||p===void 0?void 0:p.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:i}=t;return n?n(i):i.icon})}),hasSubmenuRef:N(()=>{const{value:n}=l;return e.tmNodes.some(t=>{var p;if(t.isGroup)return(p=t.children)===null||p===void 0?void 0:p.some(({rawNode:a})=>we(a,n));const{rawNode:i}=t;return we(i,n)})})});const r=Q(null);return re(mo,null),re(yo,null),re(Fe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:l}=this,r=this.tmNodes.map(n=>{const{rawNode:t}=n;return t.show===!1?null:tr(t)?u(sr,{tmNode:n,key:n.key}):Ke(t)?u(_e,{clsPrefix:o,key:n.key}):rr(t)?u(ir,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):u(Le,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:t.props,scrollable:l})});return u("div",{class:[`${o}-dropdown-menu`,l&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},l?u(ao,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?xo({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),lr=V("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[go(),V("dropdown-option",`
 position: relative;
 `,[D("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[D("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),V("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[D("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),pe("disabled",[E("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),D("&::before","background-color: var(--n-option-color-hover);")]),E("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),D("&::before","background-color: var(--n-option-color-active);")]),E("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),E("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),E("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[E("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[E("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),V("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[E("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),V("icon",`
 font-size: var(--n-option-icon-size);
 `)]),V("dropdown-menu","pointer-events: all;")]),V("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),V("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),V("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),D(">",[V("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),pe("scrollable",`
 padding: var(--n-padding);
 `),E("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),ar={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},dr=Object.keys(We),cr=Object.assign(Object.assign(Object.assign({},We),ar),te.props),xr=X({name:"Dropdown",inheritAttrs:!1,props:cr,setup(e){const o=Q(!1),l=co(Z(e,"show"),o),r=N(()=>{const{keyField:c,childrenField:w}=e;return wo(e.options,{getKey(b){return b[c]},getDisabled(b){return b.disabled===!0},getIgnored(b){return b.type==="divider"||b.type==="render"},getChildren(b){return b[w]}})}),n=N(()=>r.value.treeNodes),t=Q(null),p=Q(null),i=Q(null),a=N(()=>{var c,w,b;return(b=(w=(c=t.value)!==null&&c!==void 0?c:p.value)!==null&&w!==void 0?w:i.value)!==null&&b!==void 0?b:null}),R=N(()=>r.value.getPath(a.value).keyPath),S=N(()=>r.value.getPath(e.value).keyPath),g=se(()=>e.keyboard&&l.value);Do({keydown:{ArrowUp:{prevent:!0,handler:y},ArrowRight:{prevent:!0,handler:f},ArrowDown:{prevent:!0,handler:B},ArrowLeft:{prevent:!0,handler:_},Enter:{prevent:!0,handler:s},Escape:L}},g);const{mergedClsPrefixRef:K,inlineThemeDisabled:m}=Se(e),H=te("Dropdown","-dropdown",lr,Qo,e,K);re(ve,{labelFieldRef:Z(e,"labelField"),childrenFieldRef:Z(e,"childrenField"),renderLabelRef:Z(e,"renderLabel"),renderIconRef:Z(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:p,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:R,activeKeyPathRef:S,animatedRef:Z(e,"animated"),mergedShowRef:l,nodePropsRef:Z(e,"nodeProps"),renderOptionRef:Z(e,"renderOption"),menuPropsRef:Z(e,"menuProps"),doSelect:q,doUpdateShow:P}),$e(l,c=>{!e.animated&&!c&&v()});function q(c,w){const{onSelect:b}=e;b&&ue(b,c,w)}function P(c){const{"onUpdate:show":w,onUpdateShow:b}=e;w&&ue(w,c),b&&ue(b,c),o.value=c}function v(){t.value=null,p.value=null,i.value=null}function L(){P(!1)}function _(){O("left")}function f(){O("right")}function y(){O("up")}function B(){O("down")}function s(){const c=M();c!=null&&c.isLeaf&&l.value&&(q(c.key,c.rawNode),P(!1))}function M(){var c;const{value:w}=r,{value:b}=a;return!w||b===null?null:(c=w.getNode(b))!==null&&c!==void 0?c:null}function O(c){const{value:w}=a,{value:{getFirstAvailableNode:b}}=r;let x=null;if(w===null){const T=b();T!==null&&(x=T.key)}else{const T=M();if(T){let d;switch(c){case"down":d=T.getNext();break;case"up":d=T.getPrev();break;case"right":d=T.getChild();break;case"left":d=T.getParent();break}d&&(x=d.key)}}x!==null&&(t.value=null,p.value=x)}const G=N(()=>{const{size:c,inverted:w}=e,{common:{cubicBezierEaseInOut:b},self:x}=H.value,{padding:T,dividerColor:d,borderRadius:k,optionOpacityDisabled:U,[h("optionIconSuffixWidth",c)]:j,[h("optionSuffixWidth",c)]:ne,[h("optionIconPrefixWidth",c)]:Y,[h("optionPrefixWidth",c)]:be,[h("fontSize",c)]:xe,[h("optionHeight",c)]:me,[h("optionIconSize",c)]:z}=x,$={"--n-bezier":b,"--n-font-size":xe,"--n-padding":T,"--n-border-radius":k,"--n-option-height":me,"--n-option-prefix-width":be,"--n-option-icon-prefix-width":Y,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":j,"--n-option-icon-size":z,"--n-divider-color":d,"--n-option-opacity-disabled":U};return w?($["--n-color"]=x.colorInverted,$["--n-option-color-hover"]=x.optionColorHoverInverted,$["--n-option-color-active"]=x.optionColorActiveInverted,$["--n-option-text-color"]=x.optionTextColorInverted,$["--n-option-text-color-hover"]=x.optionTextColorHoverInverted,$["--n-option-text-color-active"]=x.optionTextColorActiveInverted,$["--n-option-text-color-child-active"]=x.optionTextColorChildActiveInverted,$["--n-prefix-color"]=x.prefixColorInverted,$["--n-suffix-color"]=x.suffixColorInverted,$["--n-group-header-text-color"]=x.groupHeaderTextColorInverted):($["--n-color"]=x.color,$["--n-option-color-hover"]=x.optionColorHover,$["--n-option-color-active"]=x.optionColorActive,$["--n-option-text-color"]=x.optionTextColor,$["--n-option-text-color-hover"]=x.optionTextColorHover,$["--n-option-text-color-active"]=x.optionTextColorActive,$["--n-option-text-color-child-active"]=x.optionTextColorChildActive,$["--n-prefix-color"]=x.prefixColor,$["--n-suffix-color"]=x.suffixColor,$["--n-group-header-text-color"]=x.groupHeaderTextColor),$}),F=m?Pe("dropdown",N(()=>`${e.size[0]}${e.inverted?"i":""}`),G,e):void 0;return{mergedClsPrefix:K,mergedTheme:H,tmNodes:n,mergedShow:l,handleAfterLeave:()=>{e.animated&&v()},doUpdateShow:P,cssVars:m?void 0:G,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender}},render(){const e=(r,n,t,p,i)=>{var a;const{mergedClsPrefix:R,menuProps:S}=this;(a=this.onRender)===null||a===void 0||a.call(this);const g=(S==null?void 0:S(void 0,this.tmNodes.map(m=>m.rawNode)))||{},K={ref:Ho(n),class:[r,`${R}-dropdown`,this.themeClass],clsPrefix:R,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:i};return u(Me,Ie(this.$attrs,K,g))},{mergedTheme:o}=this,l={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(So,Object.assign({},Co(this.$props,dr),l),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}});export{No as C,Bo as N,xr as _,br as a,Mo as b,Ho as c,Qo as d};
