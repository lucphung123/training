<template>
  <div class="flex">
    <n-space class="w-11%" vertical>
      <n-select v-model:value="selectedRef" :options="options1" />
    </n-space>
    <n-input
      class="w-82%"
      placeholder="Enter URL"
      v-model:value="inputData"
      @update:value="(val) => (inputData = val)"
      vertical
    />

    <n-button @click="getApi" type="info"> Send </n-button>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="small"
      :options="options"
    >
      <div>
        <n-button class="i-mdi:chevron-down text-xl" type="info"></n-button>
      </div>
    </n-dropdown>
  </div>
  <div class="w1/3 bg-white">
    <div v-if="responseData" class="spinner"></div>
    <div>
      <p class="mt5%">Response</p>
      <div>
        <pre>{{ JSON.stringify(responseData, null, 2) }}</pre>
      </div>
    </div>
    <div v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>
<script setup>
import { NInput, NButton } from "naive-ui";
import { ref, watch, onMounted } from "vue";
import axios from "axios";
const selectedRef = ref(1);
const responseData = ref();
const inputValue = ref("");
const errorMsg = ref(null);
const loading = ref(false);
const options1 = [
  { label: "GET", value: 1 },
  { label: "POST", value: 2 },
  { label: "PUT", value: 3 },
  { label: "PATCH", value: 4 },
  { label: "DELETE", value: 5 },
];
const getApi = async () => {
  loading.value = true;
  if (!isValidUrl(inputData.value)) {
    errorMsg.value = "Could not send request";
    responseData.value = null;
    return;
  } else {
    errorMsg.value = null;
  }
  switch (selectedRef.value) {
    case 1:
      console.log("get api");
      handleGet();
      break;
    case 2:
      console.log("post api");
      handlePost();
      break;
    case 3:
      console.log("put api");
      handlePut();
      break;
    case 4:
      console.log("patch api");
      handlePatch();
      break;
    case 5:
      console.log("delete api");
      handleDelete();
      break;
    default:
      break;
  }
  setTimeout(() => {
    loading.value = false; // ẩn spinner
  }, 1000);
};

const handleGet = async () => {
  try {
    const response = await axios.get(inputData.value);
    responseData.value = response.data;
    errorMsg.value = null;
  } catch (error) {
    console.error(error);
    responseData.value = error.response;
  }
};

const handlePost = async () => {
  try {
    const data = inputValue.value ? JSON.parse(inputValue.value) : null;
    const response = await axios.post(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
    responseData.value = error.response;
  }
};
const handlePut = async () => {
  try {
    const data = inputValue.value ? JSON.parse(inputValue.value) : null;
    const response = await axios.put(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
    responseData.value = error.response;
  }
};
const handleDelete = async () => {
  try {
    const response = await axios.delete(inputData.value);
    responseData.value = response.data;
  } catch (error) {
    console.error(error);
    responseData.value = error.response;
  }
  console.log(
    "🚀 ~ file: test.vue:76 ~ handleDelete ~ handleDelete:",
    handleDelete
  );
};
function isValidUrl(url) {
  const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
}
</script>
<style>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #97fe07;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
