import{r as _,f as E,h as B,c as C,w as o,o as f,a as n,b as e,e as D,i as w,j as H,F as S,k as u,v as r,l as v}from"./entry.4a3385b7.js";import{_ as P}from"./Table.65930385.js";import{_ as R}from"./Layout.65d229e6.js";import{_ as j,a as F}from"./Dropdown.dda4cfcc.js";import{_ as L,a as M,b as q}from"./LayoutFooter.b4fd9aa8.js";import{_ as A}from"./Select.9da64d09.js";import{_ as G}from"./Space.c763b5a2.js";import{_ as I}from"./Input.8ecc38a4.js";import"./light.ac94ac37.js";import"./Popover.6853abd9.js";import"./Suffix.5c1f8bc1.js";const O={class:"flex justify-between"},J=e("div",{class:"flex"},[e("p",null,"NewCollection/"),e("p",{class:"font-bold"},"New Request")],-1),Q={class:"flex bg-gray-100 border border-gray-300 rounded ml-68%"},W=e("div",{class:"flex items-center mr-1"},[e("div",{class:"i-mdi:content-save-outline text-xl"}),e("p",{class:"decoration-none ml-1 cursor-pointer"},"Save")],-1),X=e("div",{class:"i-mdi:chevron-down text-xl mt15%"},null,-1),Y=e("div",{class:"i-mdi:dots-horizontal text-xl mt"},null,-1),Z={class:"flex bg-gray-100 border border-gray-300 rounded mr2%"},ee=e("div",{class:"flex items-center mr-1"},[e("div",{class:"i-mdi:pencil-outline bg-red-500 text-xl"})],-1),le=e("div",{class:"i-mdi:android-messages text-xl mt25%"},null,-1),te=e("hr",null,null,-1),ne={class:"flex"},oe=e("hr",null,null,-1),se={class:"flex w-full h-screen divide-gray-300 divide-x"},ae={class:"w1/2 bg-white"},ie=e("div",{class:"flex items-center space-x-4"},[e("div",null,[e("a",{class:"decoration-none text-black font-bold",href:""},"Header")]),e("div",{class:"flex bg-gray-100 h5 rounded-5 cursor-pointer"},[e("div",{class:"flex items-center mr-1"},[e("div",{class:"i-mdi:eye-off text-sm"}),e("p",{class:"decoration-none"},"Hide auto-generated herders")])])],-1),de=e("thead",null,[e("tr",null,[e("th"),e("th",null,"Key"),e("th",null,"Value"),e("th",null,"Description")])],-1),ue=e("td",null,null,-1),re=["onUpdate:modelValue","onKeydown"],_e=["onUpdate:modelValue"],ce=["onUpdate:modelValue"],pe=e("td",null,[e("p",{class:"i-mdi:checkbox-marked"})],-1),me=e("div",{class:"w1/2 bg-white"},[e("div",null,[e("p",{class:"mt5%"},"Response")])],-1),Te={__name:"Headers",setup(ve){const a=_([]),s=_(""),g=_(""),b=_("");_("");const c=[{label:"Send and Dowload"}];function p(i){s.value.trim()!==""&&(a.value.splice(i+1,0,{variable:s.value,initialValue:g.value,currentValue:b.value}),s.value="",g.value="",b.value="")}E(a,i=>{console.log(i)}),B(()=>{console.log("Table mounted")});const V=[{label:"GET",value:"1"},{label:"POST",value:"2"},{label:"PUT",value:"3"},{label:"PATCH",value:"4"},{label:"DELETE",value:"5"}];return(i,t)=>{const m=j,k=L,U=A,h=G,K=I,x=F,T=M,$=P,N=q,z=R;return f(),C(z,null,{default:o(()=>[n(k,null,{default:o(()=>[e("div",O,[J,e("div",Q,[W,n(m,{placement:"bottom-start",trigger:"click",size:"small",options:c},{default:o(()=>[X]),_:1})]),e("div",null,[n(m,{placement:"bottom-start",trigger:"click",size:"small",options:c},{default:o(()=>[Y]),_:1})]),e("div",Z,[ee,n(m,{placement:"bottom-start",trigger:"click",size:"small",options:c},{default:o(()=>[le]),_:1})])]),te]),_:1}),n(T,null,{default:o(()=>[e("div",ne,[n(h,{class:"w-11%",vertical:""},{default:o(()=>[n(U,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=l=>i.value=l),options:V},null,8,["modelValue"])]),_:1}),n(h,{class:"w-82%",vertical:""},{default:o(()=>[n(K)]),_:1}),n(x,{class:"",type:"info"},{default:o(()=>[D(" Send ")]),_:1}),n(m,{placement:"bottom-start",trigger:"click",size:"small",options:c},{default:o(()=>[e("div",null,[n(x,{class:"i-mdi:menu-down-outline text-xl",type:"info"})])]),_:1})]),oe]),_:1}),n(N,{class:""},{default:o(()=>[e("div",se,[e("div",ae,[ie,n($,{class:"",bordered:!1,"single-line":!1},{default:o(()=>[de,e("tbody",null,[(f(!0),w(S,null,H(a.value,(l,y)=>(f(),w("tr",{key:y},[ue,e("td",null,[u(e("input",{class:"border-none",type:"text","onUpdate:modelValue":d=>l.variable=d,onKeydown:v(d=>p(y),["enter"])},null,40,re),[[r,l.variable]])]),e("td",null,[u(e("input",{class:"border-none",type:"text","onUpdate:modelValue":d=>l.initialValue=d},null,8,_e),[[r,l.initialValue]])]),e("td",null,[u(e("input",{class:"border-none",type:"text","onUpdate:modelValue":d=>l.initialValue=d},null,8,ce),[[r,l.initialValue]])])]))),128)),e("tr",null,[pe,e("td",null,[u(e("input",{class:"border-none",placeholder:"Key",type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l),onKeydown:t[2]||(t[2]=v(l=>p(a.value.length),["enter"]))},null,544),[[r,s.value]])]),e("td",null,[u(e("input",{class:"border-none",placeholder:"Key",type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>s.value=l),onKeydown:t[4]||(t[4]=v(l=>p(a.value.length),["enter"]))},null,544),[[r,s.value]])]),e("td",null,[u(e("input",{class:"border-none",placeholder:"Key",type:"text","onUpdate:modelValue":t[5]||(t[5]=l=>s.value=l),onKeydown:t[6]||(t[6]=v(l=>p(a.value.length),["enter"]))},null,544),[[r,s.value]])])])])]),_:1})]),me])]),_:1})]),_:1})}}};export{Te as default};
