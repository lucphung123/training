import{c as x,l as b,p as h}from"./Layout.65d229e6.js";import{d as v,g as i,i as a,u as m,l as f}from"./light.ac94ac37.js";import{m as p,s as d,p as C}from"./entry.4a3385b7.js";const P=x(!0),g=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[i("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),i("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),y={position:h,inverted:Boolean,bordered:{type:Boolean,default:!1}},I=p({name:"LayoutHeader",props:Object.assign(Object.assign({},a.props),y),setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=m(o),c=a("Layout","-layout-header",g,b,o,r),l=d(()=>{const{common:{cubicBezierEaseInOut:u},self:s}=c.value,e={"--n-bezier":u};return o.inverted?(e["--n-color"]=s.headerColorInverted,e["--n-text-color"]=s.textColorInverted,e["--n-border-color"]=s.headerBorderColorInverted):(e["--n-color"]=s.headerColor,e["--n-text-color"]=s.textColor,e["--n-border-color"]=s.headerBorderColor),e}),t=n?f("layout-header",d(()=>o.inverted?"a":"b"),l,o):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;const{mergedClsPrefix:r}=this;return(o=this.onRender)===null||o===void 0||o.call(this),C("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),_=v("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[i("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),i("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),z=Object.assign(Object.assign({},a.props),{inverted:Boolean,position:h,bordered:Boolean}),L=p({name:"LayoutFooter",props:z,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=m(o),c=a("Layout","-layout-footer",_,b,o,r),l=d(()=>{const{common:{cubicBezierEaseInOut:u},self:s}=c.value,e={"--n-bezier":u};return o.inverted?(e["--n-color"]=s.footerColorInverted,e["--n-text-color"]=s.textColorInverted,e["--n-border-color"]=s.footerBorderColorInverted):(e["--n-color"]=s.footerColor,e["--n-text-color"]=s.textColor,e["--n-border-color"]=s.footerBorderColor),e}),t=n?f("layout-footer",d(()=>o.inverted?"a":"b"),l,o):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:l,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var o;const{mergedClsPrefix:r}=this;return(o=this.onRender)===null||o===void 0||o.call(this),C("div",{class:[`${r}-layout-footer`,this.themeClass,this.position&&`${r}-layout-footer--${this.position}-positioned`,this.bordered&&`${r}-layout-footer--bordered`],style:this.cssVars},this.$slots)}});export{I as _,P as a,L as b};
