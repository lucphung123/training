<template>
  <div>
    <n-input v-model:value="inputParams" class="my-5" />
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :row-key="rowKey"
      @update:checked-row-keys="checkActive"
    />
    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>
<script setup>
import { NInput } from "naive-ui";

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

const inputParams = ref("https://dantri.com.vn/");

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
      });
    },
  },
  {
    title: "Value",
    key: "value",
    render(row, index) {
      return h(NInput, {
        value: row.age,
        onUpdateValue(v) {
          data.value[index].value = v;
        },
      });
    },
  },
  {
    title: "Description",
    key: "description",
    render(row, index) {
      return h(NInput, {
        value: row.address,
        onUpdateValue(v) {
          data.value[index].description = v;
        },
      });
    },
  },
];
const pagination = () => ({
  pageSize: 10,
});
const checkActive = (key) => {
  if (key.length !== 0) {
    let x = data.value[key];
    inputParams.value = `${inputParams.value}?${x.key}=${x.value}`;
    console.log("jkdsafjksdbfjkb", data.value[key]);
  } else {
    inputParams.value = "https://dantri.com.vn/";
  }
};
</script>
