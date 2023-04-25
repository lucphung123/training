<template>
  <div>
    <n-layout has-sider>
      <n-layout-sider
        class="bg-white"
        content-style="padding: 10px; border: 1px solid lightgray;"
      >
        <n-upload>
          <n-button>Upload File</n-button>
        </n-upload>
        <div class="flex items-center">
          <div class="i-mdi:plus mr-2 text-4xl" @click="addCollection"></div>

          <input class="w-full h3% text-blue" type="text" />
          <div class="i-mdi:dots-horizontal ml-2 text-3xl"></div>
        </div>
        <div>
          <n-collapse
            class="flex justify-between mt5"
            v-for="(i, index) in items"
            :key="index"
          >
            <n-collapse-item :title="i.title" name="">
              <n-collapse-item
                class="justify-between items-center"
                :title="x.title"
                v-for="(x, index) in i.data"
                :key="index"
              >
                <nuxt-link
                  to="/params"
                  class="flex items-center space-x-2 cursor-pointer decoration-none mt--3 ml-8"
                >
                  <p class="text-green text-sm">Get</p>
                  <p class="text-black">New Request</p>
                  <div
                    class="i-mdi:message-question-outline bg-green-600 text-xl"
                  ></div>
                </nuxt-link>
              </n-collapse-item>
            </n-collapse-item>
            <n-dropdown
              placement="bottom-start"
              trigger="click"
              size="small"
              :options="options"
              @select="(key) => clickFolder(index, key)"
            >
              <div class="i-mdi:dots-horizontal text-xl"></div>
            </n-dropdown>
          </n-collapse>
        </div>
      </n-layout-sider>
      <slot />
    </n-layout>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const STORAGE_KEY = "myItems";
const items = ref([]);
onMounted(() => {
  const storedItems = localStorage.getItem(STORAGE_KEY);
  if (storedItems) {
    items.value = JSON.parse(storedItems);
  }
});
const addCollection = () => {
  let newItem = {
    title: "New Collection",
    data: [],
  };
  items.value.push(newItem);
  // Store the updated items in local storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
};
const options = [
  {
    label: "Add Folder",
    key: 1,
  },
  {
    label: "Edit",
    key: 2,
  },
  {
    label: "Delete",
    key: 3,
  },
];
const clickFolder = (index, key) => {
  if (key === 1) {
    let dataFolder = {
      title: "New Folder",
      data: [],
    };
    items.value[index].data.push(dataFolder);
  } else if (key === 3) {
    items.value.splice(index, 1);
  }
  // Store the updated items in local storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
};
</script>
