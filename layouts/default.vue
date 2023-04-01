<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider>
        <div class="bg-#F8F8F8 min-h-screen">
          <div class="flex space-x-3 ">
            <div class="mt4">
              <button
                class="i-mdi:plus text-xl ml2"
                @click="newCollection"
              ></button>
            </div>
            <div><input class="mt4" type="text" placeholder="" /></div>
            <div class="i-mdi:dots-horizontal text-xl mt4"></div>
          </div>

          <div>
            <n-collapse
              class="flex justify-between mt5"
              v-for="(i, index) in items"
              :key="index"
            >
              <n-collapse-item :title="i.title" name=""> </n-collapse-item>
              <n-dropdown
                placement="bottom-start"
                trigger="click"
                size="small"
                :options="options"
              >
                <n-button
                  quaternary
                  class="i-mdi:dots-horizontal text-xl mr6"
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
import { ref } from "vue";
const items = ref([]);
const newCollection = () => {
  let newItem = {
    title: "New Collection",
  };
  items.value.push(newItem);
};
const options = [
  {
    label: "Move",
  },
  {
    label: "Edit",
  },
  {
    label: "Delete",
  },
];
</script>
