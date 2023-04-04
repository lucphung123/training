<template>
  <n-layout>
    <n-layout-header>
      <div class="flex justify-between">
        <div class="flex">
          <p>NewCollection/</p>
          <p class="font-bold">New Request</p>
        </div>
        <div class="flex bg-gray-100 border-gray-300 rounded ml-68%">
          <div class="flex items-center mr-1">
            <div class="i-mdi:content-save-outline text-xl"></div>
            <p class="decoration-none ml-1 cursor-pointer">Save</p>
          </div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:chevron-down text-xl mt15% cursor-pointer"></div>
          </n-dropdown>
        </div>
        <div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:dots-horizontal text-xl mt cursor-pointer"></div>
          </n-dropdown>
        </div>
        <div class="flex bg-gray-100 border border-gray-300 rounded mr2%">
          <div class="flex items-center mr-1">
            <div class="i-mdi:pencil-outline bg-red-500 text-xl"></div>
          </div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div
              class="i-mdi:android-messages text-xl mt25% cursor-pointer"
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

        <input
          class="w-82%"
          placeholder="Enter URL"
          v-model="inputData"
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
    </n-layout-content>
    <n-layout-footer class=" ">
      <div class="flex w-full h-screen divide-x divide-gray-300">
        <div class="w1/2 bg-white">
          <n-card>
            <n-tabs type="line" animated>
              <n-tab-pane name="oasis" tab="Params">
                <div>
                  <p class="font-bold">Query Params</p>
                </div>
                <n-table :bordered="false" :single-line="false">
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
                </n-table>
              </n-tab-pane>
              <n-tab-pane name="the beatles" tab="Herders">
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
        <div class="w1/2 bg-white">
          <div v-if="responseData">
            <p class="mt5%">Response</p>
            <pre>{{ JSON.stringify(responseData, null, 2) }}</pre>
          </div>
        </div>
      </div>
    </n-layout-footer>
  </n-layout>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import queryString from 'query-string';
const selectedRef = ref(1);
const inputData = ref("https://6425a3217ac292e3cf0661d3.mockapi.io/LUCC");
const responseData = ref(null);
const value1 = ref("");
const inputValue = ref("");
const inputRef = ref(null);
onMounted(() => {
  console.log("Table mounted");
});
const boxs = ref([]);
const newVariable = ref("");
const newInitialValue = ref("");

const newCurrentValue = ref("");
const options = [
  {
    label: "Send and Dowload",
  },
];
function addNewRow(index) {
  if (newVariable.value.trim() !== "") {
    boxs.value.splice(index + 1, 0, {
      variable: newVariable.value,
      initialValue: newInitialValue.value,
      currentValue: newCurrentValue.value,
    });
    newVariable.value = "";
    newInitialValue.value = "";
    newCurrentValue.value = "";
  }
}
watch(boxs, (newboxs) => {
  console.log(newboxs);
});
const value = ref(null);
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

const receivedData = ref("");

const getApi = async () => {
  console.log(selectedRef.value);
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
};

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

// const handlePatch = async () => {
//   const { data } = await useFetch(inputData.value, {
//     method: "PATCH",
//     body: {
//       title: "test product",
//       price: 13.5,
//       description: "lorem ipsum set",
//       image: "https://i.pravatar.cc",
//       category: "electronic",
//     },
//   });
//   responseData.value = data.value;
//   console.log("🚀 ~ file: detail.vue:373 ~ handlePost ~ data:", data);
// };

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

function submitInput() {
  console.log(inputValue.value);
}



</script>
