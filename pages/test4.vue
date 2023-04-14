<template>
  <n-config-provider :hljs="hljs">
       <n-code
         :code='`
 {
   "username": "aaaa",
   "password": "123456",
 }
 `'
         language="json"
       />
     </n-config-provider>
 </template>
 
 <script setup>
 import hljs from "highlight.js/lib/core"
 import json from "highlight.js/lib/languages/json"
 
 hljs.registerLanguage("json", json)
 </script>