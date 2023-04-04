<template>
  <div class="flex">
    <div class="flex h-10% w-full">
      <n-space class="w-15%" vertical>
        <n-select v-model:value="selectRef" :options="options1" />
      </n-space>
      <input v-model="inputData" placeholder="Enter URL" />
      <button @click="getApi">Send</button>
    </div>
    <div>
      <textarea
        ref="input"
        v-model="inputValue"
        @keyup.enter.prevent="submitInput"
        class="w-full h-400px"
      ></textarea>
    </div>
  </div>
  <div v-if="responseData">
    <h3>Response Data:</h3>
    <pre>{{ JSON.stringify(responseData, null, 2) }}</pre>
  </div>
</template>
<script setup>
import { ref, watchEffect, nextTick } from "vue";
import axios from "axios";
const selectRef = ref("GET");
const inputData = ref("https://642541e49e0a30d92b2ccf2a.mockapi.io/Minhh");
const responseData = ref(null);
const getApi = async () => {
  switch (selectRef.value) {
    case "GET":
      await handleGet();
      break;
    case "POST":
      console.log("post api");
      await handlePost();
      break;
    case "PUT":
      console.log("put api");
      await handlePut();
      break;
    case "DELETE":
      await handleDelete();
      console.log("delete api");
      break;
    default:
      break;
  }
};
const options1 = [
  { label: "GET", value: "GET" },
  { label: "POST", value: "POST" },
  { label: "PUT", value: "PUT" },
  { label: "DELETE", value: "DELETE" },
];
const handleGet = async () => {
  try {
    const response = await axios.get(inputData.value);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
  }
  console.log("🚀 ~ file: test.vue:46 ~ handleGet ~ handleGet:", handleGet);
};

const handlePost = async () => {
  try {
    const data = JSON.parse(inputValue.value);
    const response = await axios.post(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
const handlePut = async () => {
  try {
    const data = JSON.parse(inputValue.value);
    const response = await axios.put(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
const handleDelete = async () => {
  try {
    const response = await axios.delete(inputData.value);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
  }
  console.log(
    "🚀 ~ file: test.vue:76 ~ handleDelete ~ handleDelete:",
    handleDelete
  );
};
const inputValue = ref("");
const inputRef = ref(null);

watchEffect(() => {
  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.style.height = "auto";
      inputRef.value.style.height = `${inputRef.value.scrollHeight}px`;
    }
  });
});

function submitInput() {
  console.log(inputValue.value);
}
</script>
