import{j as $,k as S,l as z,m as j}from"./light.2e394c2d.js";import{B as G,f as R,j as E,C as L,k as x}from"./Scrollbar.54d56e2b.js";import{m as M,q as _,p as v}from"./entry.68d15f63.js";const I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},P=()=>I,T={name:"Space",self:P},A=T;let h;const O=()=>{if(!G)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},W=Object.assign(Object.assign({},S.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),H=M({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:u}=$(e),n=S("Space","-space",void 0,A,e,a),g=z("Space",u,a);return{useGap:O(),rtlEnabled:g,mergedClsPrefix:a,margin:_(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[j("gap",t)]:f}}=n.value,{row:l,col:p}=L(f);return{horizontal:x(p),vertical:x(l)}})}},render(){const{vertical:e,align:a,inline:u,justify:n,itemStyle:g,margin:t,wrap:f,mergedClsPrefix:l,rtlEnabled:p,useGap:o,wrapItem:b,internalUseGap:w}=this,c=R(E(this));if(!c.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,B=`${t.vertical}px`,i=`${t.vertical/2}px`,s=c.length-1,d=n.startsWith("space-");return v("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!f||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:a,gap:o?`${t.vertical}px ${t.horizontal}px`:""}},!b&&(o||w)?c:c.map((C,r)=>v("div",{role:"none",style:[g,{maxWidth:"100%"},o?"":e?{marginBottom:r!==s?B:""}:p?{marginLeft:d?n==="space-between"&&r===s?"":m:r!==s?y:"",marginRight:d?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:d?n==="space-between"&&r===s?"":m:r!==s?y:"",marginLeft:d?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}]},C)))}});export{H as _};
