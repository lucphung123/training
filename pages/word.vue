<template>
  <div class="flex h-10% w-full">
    <n-space class="w-15%" vertical>
      <n-select v-model:value="selectRef" :options="options1" />
    </n-space>
    <input v-model="inputData" placeholder="Enter URL" />
    <button @click="getApi">Send</button>
  </div>
  <div v-if="responseData">
    <h3>Response Data:</h3>
    <pre>{{ JSON.stringify(responseData, null, 2) }}</pre>
  </div>
</template>
<script setup>
import { ref } from "vue";
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
  console.log("🚀 ~ file: test.vue:49 ~ getApi ~ handleGet:", handleGet);
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
};
const handlePost = async () => {
  try {
    const data = {
      requestId: "1233444",
      items: "hello",
      count: "1",
      anyKey: "any",
    };
    const response = await axios.post(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
const handlePut = async () => {
  try {
    const data = {
      requestId: "minhhhh",
      items: "Duong Tuan Minh",
      count: "2",
      anyKey: "mmmmm",
    };
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
};
</script>
