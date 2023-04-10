<template>
  <div>
    <n-input
      v-model:value="inputData"
      class="my-5"
      onUpdate:value="val => inputData.value = val"
    />
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :row-key="rowKey"
      @update:checked-row-keys="checkActive"
    />
  </div>
</template>
<script setup>
import { NInput, NButton } from "naive-ui";
import { ref, h } from "vue";

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
        "delete"
      );
    },
  },
];

const pagination = () => ({
  pageSize: 10,
});

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

  // Thay đổi query parameter trên URL và lưu vào inputParams
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

</script>
