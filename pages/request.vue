<template>
  <n-layout class="p2">
    <n-layout-header>
      <div class="flex justify-between">
        <div class="flex">
          <p class="opacity-50">NewCollection /</p>
          <p class="font-bold ml1">New Request</p>
        </div>
        <div class="flex bg-#F8F8F8 mt1 rounded ml65% h10">
          <div class="flex items-center mr-1 opacity-50">
            <div class="i-mdi:content-save-outline text-xl"></div>
            <p class="ml-1 cursor-pointer">Save</p>
          </div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:chevron-down text-xl mt9% cursor-pointer"></div>
          </n-dropdown>
        </div>
        <div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:dots-horizontal text-xl mt3 cursor-pointer"></div>
          </n-dropdown>
        </div>
        <div class="flex bg-#F8F8F8 rounded items-center mt1 space-x-2 h10">
          <div class="flex mr-1">
            <div class="i-mdi:pencil-outline bg-red-500 text-xl"></div>
          </div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div
              class="i-mdi:message-processing-outline opacity50 text-xl cursor-pointer"
            ></div>
          </n-dropdown>
        </div>
      </div>
      <hr />
    </n-layout-header>
    <n-layout-content>
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

        <div class="flex items-center bg-#2080f0 rounded">
          <n-button @click="getApi" type="info"> Send </n-button>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div>
              <n-button
                class="i-mdi:chevron-down text-xl mt1 mr1 bg-white"
                type="info"
              ></n-button>
            </div>
          </n-dropdown>
        </div>
      </div>
    </n-layout-content>
    <n-layout-footer class=" ">
      <div class="flex w-full h-screen divide-x divide-gray-300">
        <div class="w2/3 bg-white">
          <n-card>
            <n-tabs type="line" animated>
              <n-tab-pane name="oasis" tab="Params">
                <div>
                  <p class="font-bold">Query Params</p>
                </div>
                <!-- <n-table :bordered="false" :single-line="false">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Key</th>
                      <th>Value</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(box, index) in boxs" :key="index">
                      <td></td>
                      <td>
                        <input
                          class="border-none"
                          type="text"
                          v-model="box.variable"
                          @keydown.enter="addNewRow(index)"
                        />
                      </td>
                      <td>
                        <input
                          class="border-none"
                          type="text"
                          v-model="box.initialValue"
                        />
                      </td>
                      <td>
                        <input
                          class="border-none"
                          type="text"
                          v-model="box.initialValue"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <input
                          class="border-none"
                          placeholder="Key"
                          type="text"
                          v-model="newVariable"
                          @keydown.enter="addNewRow(boxs.length)"
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Value"
                          class="border-none"
                          type="text"
                          v-model="newInitialValue"
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Description"
                          class="border-none"
                          type="text"
                          v-model="newCurrentValue"
                        />
                      </td>
                    </tr>
                  </tbody>
                </n-table> -->

                <n-data-table
                  :columns="columns"
                  :data="data"
                  :row-key="rowKey"
                  @update:checked-row-keys="checkActive"
                />
              </n-tab-pane>
              <n-tab-pane name="the beatles" tab="Headers">
                <div class="flex items-center space-x-4">
                  <div>
                    <a class="decoration-none text-black font-bold" href=""
                      >Header</a
                    >
                  </div>
                  <div class="flex bg-gray-100 h5 rounded-5 cursor-pointer">
                    <div class="flex items-center mr-1">
                      <div class="i-mdi:eye-off text-sm"></div>
                      <p class="decoration-none">Hide auto-generated herders</p>
                    </div>
                  </div>
                </div>
                <n-table class="" :bordered="false" :single-line="false">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Key</th>
                      <th>Value</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(box, index) in boxs" :key="index">
                      <td></td>
                      <td>
                        <input
                          class="border-none"
                          type="text"
                          v-model="box.variable"
                          @keydown.enter="addNewRow(index)"
                        />
                      </td>
                      <td>
                        <input
                          class="border-none"
                          type="text"
                          v-model="box.initialValue"
                        />
                      </td>
                      <td>
                        <input
                          class="border-none"
                          type="text"
                          v-model="box.initialValue"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><p class="i-mdi:checkbox-marked"></p></td>
                      <td>
                        <input
                          class="border-none"
                          placeholder="Key"
                          type="text"
                          v-model="newVariable"
                          @keydown.enter="addNewRow(boxs.length)"
                        />
                      </td>
                      <td>
                        <input
                          class="border-none"
                          placeholder="Key"
                          type="text"
                          v-model="newVariable"
                          @keydown.enter="addNewRow(boxs.length)"
                        />
                      </td>
                      <td>
                        <input
                          class="border-none"
                          placeholder="Key"
                          type="text"
                          v-model="newVariable"
                          @keydown.enter="addNewRow(boxs.length)"
                        />
                      </td>
                    </tr>
                  </tbody>
                </n-table>
              </n-tab-pane>
              <n-tab-pane name="jay chou" tab="Body">
                <div>
                  <div>
                    <p class="cursor-pointer ml89.5% font-bold">Beautify</p>
                  </div>
                  <div class="flex mt--8% items-center">
                    <div
                      class="flex bg-gray-100 border-gray-300 h9 items-center"
                    >
                      <div class="flex items-center">
                        <p class="cursor-pointer">Raw</p>
                      </div>
                      <n-dropdown
                        placement="bottom-start"
                        trigger="click"
                        size="small"
                        :options="options"
                      >
                        <div
                          class="i-mdi:chevron-down text-xl cursor-pointer"
                        ></div>
                      </n-dropdown>
                    </div>
                    <div class="flex items-center ml5%">
                      <div class="flex items-center mr-1">
                        <p class="cursor-pointer ml-1 font-bold text-green">
                          JSON
                        </p>
                      </div>
                      <n-dropdown
                        placement="bottom-start"
                        trigger="click"
                        size="small"
                        :options="options"
                      >
                        <div
                          class="i-mdi:chevron-down text-xl cursor-pointer"
                        ></div>
                      </n-dropdown>
                    </div>
                  </div>
                  <div>
                    <textarea
                      ref="input"
                      v-model="inputValue"
                      @keyup.enter.prevent="submitInput"
                    ></textarea>
                  </div>
                </div>
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </div>
        <div class="w1/3 bg-white overflow-y-auto   h82%">
          <h2 class="ml-5 text-truegray-500">Response</h2>

          <div v-if="loading" class="spinner"></div>
          <div v-else class="whitespace-pre-wrap">
             <n-config-provider  :hljs="hljs">
                <n-code  :code="JSON.stringify(responseData, null, 2)" language="json" />
              </n-config-provider>
          </div>
          <div v-if="errorMsg">
            <p>{{ errorMsg }}</p>
          </div>
        </div>
      </div>
    </n-layout-footer>
  </n-layout>
</template>
<script setup>
import { NInput, NButton } from "naive-ui";
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import hljs from "highlight.js/lib/core"
import json from "highlight.js/lib/languages/json"
 
 hljs.registerLanguage("json", json)
const selectedRef = ref(1);
// const inputData = ref("https://6425a3217ac292e3cf0661d3.mockapi.io/LUCC");
const responseData = ref();
const value1 = ref("");
const inputValue = ref("");
const newVariable = ref("");
const errorMsg = ref();
const loading = ref(false);
const boxs = ref([]);
onMounted(() => {
  console.log("Table mounted");
});
const options = [
  {
    label: "Send and Dowload",
  },
];
watch(boxs, (newboxs) => {
  console.log(newboxs);
});
const options1 = [
  {
    label: "GET",
    value: 1,
  },
  {
    label: "POST",
    value: 2,
  },
  {
    label: "PUT",
    value: 3,
  },
  {
    label: "PATCH",
    value: 4,
  },
  {
    label: "DELETE",
    value: 5,
  },
];

const getApi = async () => {
  loading.value = true;
  if (!isValidUrl(inputData.value)) {
    errorMsg.value = "URL không đúng định dạng";
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
    if (error.response) {  
      errorMsg.value = error.response.data;
      responseData.value = error.response;
    } else {
      console.error(error);
      errorMsg.value = "Đã xảy ra lỗi trong quá trình gửi yêu cầu";
      responseData.value = error.response;
    }
  }
};

const handlePost = async () => {
  try {
    const data = inputValue.value ? JSON.parse(inputValue.value) : null;
    const response = await axios.post(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    if (error.response) {
      errorMsg.value = error.response.data;
      responseData.value = null;
    } else {
      console.error(error);
      errorMsg.value = "Đã xảy ra lỗi trong quá trình gửi yêu cầu";
      responseData.value = null;
    }
  }
};
const handlePut = async () => {
  try {
    const data = inputValue.value ? JSON.parse(inputValue.value) : null;
    const response = await axios.put(inputData.value, data);
    responseData.value = response.data;
  } catch (error) {
    if (error.response) {
      errorMsg.value = error.response.data;
      responseData.value = null;
    } else {
      console.error(error);
      errorMsg.value = "Đã xảy ra lỗi trong quá trình gửi yêu cầu";
      responseData.value = null;
    }
  }
};

const handleDelete = async () => {
  try {
    const response = await axios.delete(inputData.value);
    responseData.value = response.data;
  } catch (error) {
    if (error.response) {
      errorMsg.value = error.response.data;
      responseData.value = null;
    } else {
      console.error(error);
      errorMsg.value = "Đã xảy ra lỗi trong quá trình gửi yêu cầu";
      responseData.value = null;
    }
  }
};

function submitInput() {
  console.log(inputValue.value);
}

const rowKey = (row) => {
  return row.id;
};

const data = ref([
  {
    id: 0,
    key: "",
    value: "",
    description: "",
  },
  {
    id: 1,
    key: "",
    value: "",
    description: "",
  },
]);

const inputData = ref("");

const columns = [
  {
    type: "selection",
  },
  {
    title: "Key",
    key: "key",
    render(row, index) {
      console.log(row);
      return h(NInput, {
        value: row.key,
        onUpdateValue(v) {
          data.value[index].key = v;
        },
        onInput() {
          const lastIndex = data.value.length - 1;
          if (
            data.value[lastIndex].key !== "" ||
            data.value[lastIndex].value !== "" ||
            data.value[lastIndex].description !== ""
          ) {
            data.value.push({
              id: lastIndex + 1,
              key: "",
              value: "",
              description: "",
            });
          }
        },
      });
    },
  },
  {
    title: "Value",
    key: "value",
    render(row, index) {
      return h(NInput, {
        value: row.value,
        onUpdateValue(v) {
          data.value[index].value = v;
        },
        onInput() {
          // Thêm một dòng mới vào mảng data nếu ô input cuối cùng có giá trị khác rỗng
          const lastIndex = data.value.length - 1;
          if (
            data.value[lastIndex].key !== "" ||
            data.value[lastIndex].value !== "" ||
            data.value[lastIndex].description !== ""
          ) {
            data.value.push({
              id: lastIndex + 1,
              key: "",
              value: "",
              description: "",
            });
          }
        },
      });
    },
  },
  {
    title: "Description",
    key: "description",
    render(row, index) {
      return h(NInput, {
        value: row.description,
        onUpdateValue(v) {
          data.value[index].description = v;
        },
        onInput() {
          const lastIndex = data.value.length - 1;
          if (
            data.value[lastIndex].key !== "" ||
            data.value[lastIndex].value !== "" ||
            data.value[lastIndex].description !== ""
          ) {
            data.value.push({
              id: lastIndex + 1,
              key: "",
              value: "",
              description: "",
            });
          }
        },
      });
    },
  },
  {
    title: "",
    key: "delete",
    render(row, index) {
      return h(
        NButton,
        {
          type: "info",
          onClick() {
            handleDeleteRow(row);
          },
        },
        "Delete"
      );
    },
  },
];
const checkActive = (checkedRowKeys) => {
  let url;
  try {
    url = new URL(inputData.value);
  } catch (error) {
    console.log("Invalid URL:", inputData.value);
    return;
  }

  const searchParams = url.searchParams;

  const originalParams = {};

  // Lưu giá trị query parameter ban đầu của URL vào originalParams
  for (const [key, value] of searchParams) {
    originalParams[key] = value;
  }

  // Xóa các cặp key-value được thêm vào URL bởi checkActive
  for (const row of data.value) {
    if (!checkedRowKeys.includes(row.id) && searchParams.has(row.key)) {
      searchParams.delete(row.key);
    }
  }

  // Thêm các cặp key-value vào URL
  let params = "";
  for (let i = 0; i < data.value.length; i++) {
    const row = data.value[i];
    if (checkedRowKeys.includes(row.id)) {
      if (params === "") {
        params += `?${row.key}=${row.value}`;
      } else {
        params += `&${row.key}=${row.value}`;
      }
      searchParams.set(row.key, row.value);
    }
  }

  // Thay đổi query parameter trên URL và lưu vào inputData
  url.search = params;
  inputData.value = url.href;
};
const handleDeleteRow = (row) => {
  // Xóa hàng khỏi mảng data
  data.value = data.value.filter((item) => item.id !== row.id);

  // Xóa các query parameter tương ứng khỏi URL
  const url = new URL(inputData.value);
  const searchParams = url.searchParams;
  searchParams.delete(row.key);

  // Cập nhật lại giá trị của ô input
  inputData.value = url.href;
};

function isValidUrl(url) {
  const urlPattern = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
}

// const myContainer = ref(null)
// onMounted(() => {
//   myContainer.value.addEventListener("mouseenter", handleMouseEnter);
//   myContainer.value.addEventListener("mouseleave", handleMouseLeave);
// });

// const handleMouseEnter = () => {
//   myContainer.value.style.overflowY = "scroll";
// };

// const handleMouseLeave = () => {
//   myContainer.value.style.overflowY = "hidden";
// };
</script>

<style>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #97fe07;
  border-radius: 0%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 83%;
  margin: auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
