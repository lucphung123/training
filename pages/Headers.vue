<template>
  <n-layout>
    <n-layout-header>
      <div class="flex justify-between">
        <div class="flex">
          <p>NewCollection/</p>
          <p class="font-bold">New Request</p>
        </div>
        <div class="flex bg-gray-100 border border-gray-300 rounded ml-68%">
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
            <div class="i-mdi:chevron-down text-xl mt15%"></div>
          </n-dropdown>
        </div>
        <div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:dots-horizontal text-xl mt"></div>
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
            <div class="i-mdi:android-messages text-xl mt25%"></div>
          </n-dropdown>
        </div>
      </div>
      <hr />
    </n-layout-header>
    <n-layout-content>
      <div class="flex">
        <n-space class="w-11%" vertical>
          <n-select v-model="value" :options="options1" />
        </n-space>

        <n-space class="w-82%" vertical>
          <n-input />
        </n-space>
        <n-button class="" type="info"> Send </n-button>
        <n-dropdown
          placement="bottom-start"
          trigger="click"
          size="small"
          :options="options"
        >
          <div>
            <n-button
              class="i-mdi:menu-down-outline text-xl"
              type="info"
            ></n-button>
          </div>
        </n-dropdown>
      </div>
      <hr />
    </n-layout-content>
    <n-layout-footer class=" ">
      <div class="flex w-full h-screen divide-gray-300 divide-x">
        <div class="w1/2 bg-white">
          <div class="flex items-center space-x-4">
            <div>
              <a class="decoration-none text-black font-bold" href="">Header</a>
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
                <td> <p class="i-mdi:checkbox-marked"></p></td>
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
        </div>
        <div class="w1/2 bg-white">
          <div>
            <p class="mt5%">Response</p>
          </div>
        </div>
      </div>
    </n-layout-footer>
  </n-layout>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
const boxs = ref([]);
const newVariable = ref("");
const newInitialValue = ref("");
const newCurrentValue = ref("");
const fruits = [
  { id: 1, name: "GET" },
  { id: 2, name: "PORT" },
  { id: 3, name: "PUT" },
  { id: 4, name: "DELETE" },
];
const selectedFruit = ref("");
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
onMounted(() => {
  console.log("Table mounted");
});
const options1 = [
  {
    label: "GET",
    value: "1",
  },
  {
    label: "POST",
    value: "2",
  },
  {
    label: "PUT",
    value: "3",
  },
  {
    label: "PATCH",
    value: "4",
  },
  {
    label: "DELETE",
    value: "5",
  },
];
</script>
