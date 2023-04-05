import{r as c,f as E,h as B,c as C,w as o,o as f,a as n,b as e,e as D,i as w,j as H,F as S,k as u,v as r,l as v}from"./entry.68d15f63.js";import{_ as P}from"./Table.8a96f03b.js";import{_ as R}from"./Layout.29e198ed.js";import{_ as j,a as F}from"./Dropdown.b2273ba0.js";import{_ as I,a as L,b as M}from"./LayoutFooter.2ba363dc.js";import{_ as q}from"./Select.65b79b42.js";import{_ as A}from"./Space.d00fd348.js";import{N as G}from"./Input.7f66ed55.js";import"./light.2e394c2d.js";import"./Scrollbar.54d56e2b.js";import"./browser.a0ed56ab.js";import"./Popover.e82ca720.js";import"./Suffix.57597a62.js";const O={class:"flex justify-between"},J=e("div",{class:"flex"},[e("p",null,"NewCollection/"),e("p",{class:"font-bold"},"New Request")],-1),Q={class:"flex bg-gray-100 border border-gray-300 rounded ml-68%"},W=e("div",{class:"flex items-center mr-1"},[e("div",{class:"i-mdi:content-save-outline text-xl"}),e("p",{class:"decoration-none ml-1 cursor-pointer"},"Save")],-1),X=e("div",{class:"i-mdi:chevron-down text-xl mt15%"},null,-1),Y=e("div",{class:"i-mdi:dots-horizontal text-xl mt"},null,-1),Z={class:"flex bg-gray-100 border border-gray-300 rounded mr2%"},ee=e("div",{class:"flex items-center mr-1"},[e("div",{class:"i-mdi:pencil-outline bg-red-500 text-xl"})],-1),te=e("div",{class:"i-mdi:android-messages text-xl mt25%"},null,-1),le=e("hr",null,null,-1),ne={class:"flex"},oe=e("hr",null,null,-1),se={class:"flex w-full h-screen divide-gray-300 divide-x"},ae={class:"w1/2 bg-white"},ie=e("div",{class:"flex items-center space-x-4"},[e("div",null,[e("a",{class:"decoration-none text-black font-bold",href:""},"Header")]),e("div",{class:"flex bg-gray-100 h5 rounded-5 cursor-pointer"},[e("div",{class:"flex items-center mr-1"},[e("div",{class:"i-mdi:eye-off text-sm"}),e("p",{class:"decoration-none"},"Hide auto-generated herders")])])],-1),de=e("thead",null,[e("tr",null,[e("th"),e("th",null,"Key"),e("th",null,"Value"),e("th",null,"Description")])],-1),ue=e("td",null,null,-1),re=["onUpdate:modelValue","onKeydown"],ce=["onUpdate:modelValue"],_e=["onUpdate:modelValue"],pe=e("td",null,[e("p",{class:"i-mdi:checkbox-marked"})],-1),me=e("div",{class:"w1/2 bg-white"},[e("div",null,[e("p",{class:"mt5%"},"Response")])],-1),$e={__name:"Headers",setup(ve){const a=c([]),s=c(""),b=c(""),g=c("");c("");const _=[{label:"Send and Dowload"}];function p(i){s.value.trim()!==""&&(a.value.splice(i+1,0,{variable:s.value,initialValue:b.value,currentValue:g.value}),s.value="",b.value="",g.value="")}E(a,i=>{console.log(i)}),B(()=>{console.log("Table mounted")});const V=[{label:"GET",value:"1"},{label:"POST",value:"2"},{label:"PUT",value:"3"},{label:"PATCH",value:"4"},{label:"DELETE",value:"5"}];return(i,l)=>{const m=j,k=I,U=q,h=A,K=G,x=F,N=L,T=P,$=M,z=R;return f(),C(z,null,{default:o(()=>[n(k,null,{default:o(()=>[e("div",O,[J,e("div",Q,[W,n(m,{placement:"bottom-start",trigger:"click",size:"small",options:_},{default:o(()=>[X]),_:1})]),e("div",null,[n(m,{placement:"bottom-start",trigger:"click",size:"small",options:_},{default:o(()=>[Y]),_:1})]),e("div",Z,[ee,n(m,{placement:"bottom-start",trigger:"click",size:"small",options:_},{default:o(()=>[te]),_:1})])]),le]),_:1}),n(N,null,{default:o(()=>[e("div",ne,[n(h,{class:"w-11%",vertical:""},{default:o(()=>[n(U,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=t=>i.value=t),options:V},null,8,["modelValue"])]),_:1}),n(h,{class:"w-82%",vertical:""},{default:o(()=>[n(K)]),_:1}),n(x,{class:"",type:"info"},{default:o(()=>[D(" Send ")]),_:1}),n(m,{placement:"bottom-start",trigger:"click",size:"small",options:_},{default:o(()=>[e("div",null,[n(x,{class:"i-mdi:menu-down-outline text-xl",type:"info"})])]),_:1})]),oe]),_:1}),n($,{class:""},{default:o(()=>[e("div",se,[e("div",ae,[ie,n(T,{class:"",bordered:!1,"single-line":!1},{default:o(()=>[de,e("tbody",null,[(f(!0),w(S,null,H(a.value,(t,y)=>(f(),w("tr",{key:y},[ue,e("td",null,[u(e("input",{class:"border-none",type:"text","onUpdate:modelValue":d=>t.variable=d,onKeydown:v(d=>p(y),["enter"])},null,40,re),[[r,t.variable]])]),e("td",null,[u(e("input",{class:"border-none",type:"text","onUpdate:modelValue":d=>t.initialValue=d},null,8,ce),[[r,t.initialValue]])]),e("td",null,[u(e("input",{class:"border-none",type:"text","onUpdate:modelValue":d=>t.initialValue=d},null,8,_e),[[r,t.initialValue]])])]))),128)),e("tr",null,[pe,e("td",null,[u(e("input",{class:"border-none",placeholder:"Key",type:"text","onUpdate:modelValue":l[1]||(l[1]=t=>s.value=t),onKeydown:l[2]||(l[2]=v(t=>p(a.value.length),["enter"]))},null,544),[[r,s.value]])]),e("td",null,[u(e("input",{class:"border-none",placeholder:"Key",type:"text","onUpdate:modelValue":l[3]||(l[3]=t=>s.value=t),onKeydown:l[4]||(l[4]=v(t=>p(a.value.length),["enter"]))},null,544),[[r,s.value]])]),e("td",null,[u(e("input",{class:"border-none",placeholder:"Key",type:"text","onUpdate:modelValue":l[5]||(l[5]=t=>s.value=t),onKeydown:l[6]||(l[6]=v(t=>p(a.value.length),["enter"]))},null,544),[[r,s.value]])])])])]),_:1})]),me])]),_:1})]),_:1})}}};export{$e as default};