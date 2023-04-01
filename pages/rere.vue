<template>
  <div>
    <textarea
      class="w-full h-full"
      ref="input"
      v-model="inputValue"
      @keyup.enter.prevent="submitInput"
    ></textarea>
  </div>
</template>

<script setup>
// import { ref, watchEffect, nextTick } from "vue"

// const inputValue = ref("")
// const inputRef = ref(null)

// watchEffect(() => {
//   nextTick(() => {
//     if (inputRef.value) {
//       inputRef.value.style.height = "auto"
//       inputRef.value.style.height = ${inputRef.value.scrollHeight}px
//     }
//   })
// })

// function submitInput() {
//   console.log(inputValue.value)
// }
</script>
