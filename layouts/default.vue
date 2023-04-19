<template>
  <n-space vertical size="large" class="p1%">
    <n-layout has-sider>
      <n-layout-sider>
        <div class="bg-#F8F8F8 min-h-screen">
          <div class="flex space-x-3">
            <div class="mt4">
              <button
                class="i-mdi:plus text-xl ml2"
                @click="newCollection"
              ></button>
            </div>
            <div><input class="mt4" type="text" placeholder="" /></div>
            <div class="i-mdi:dots-horizontal text-xl mt4"></div>
          </div>

          <n-upload
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :headers="{
              'naive-info': 'hello!',
            }"
            :data="{
              'naive-data': 'cool! naive!',
            }"
          >
            <n-button>Import</n-button>
          </n-upload>

          <div>
            <n-collapse
              class="flex justify-between mt5 ml3"
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
                    to="/request"
                    class="flex items-center space-x-2 cursor-pointer decoration-none mt--3 ml-8"
                  >
                    <p class="text-green text-sm">Get</p>
                    <p class="text-black">New Request</p>
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
                <n-button
                  quaternary
                  class="i-mdi:dots-horizontal text-xl mr9"
                ></n-button>
              </n-dropdown>
            </n-collapse>
          </div>
        </div>
      </n-layout-sider>
      <slot />
    </n-layout>
  </n-space>
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

const newCollection = () => {
  let newItem = {
    title: "New Collection",
    data: [],
  };
  items.value.push(newItem);
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
};
</script>
