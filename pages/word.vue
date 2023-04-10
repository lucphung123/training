<template>
  <div>
    <div>
      <input class="w-full" v-model="inputData" placeholder="Enter URL" />
      <button>Send</button>
    </div>
    <n-table :bordered="false" :single-line="false" class="w-full">
      <thead>
        <tr>
          <th class="w-5%"></th>
          <th class="w-10%">Key</th>
          <th class="w-10%">Value</th>
          <th>Description</th>
          <th class="w-full flex">
            <div class="i-mdi:dots-horizontal text-xl"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(param, index) in params" :key="index">
          <td>
            <input type="checkbox" v-model="param.enabled" />
          </td>
          <td>
            <input
              type="text"
              v-model="param.key"
              placeholder="Key"
              @input="handleInput(index)"
            />
          </td>
          <td>
            <input
              type="text"
              v-model="param.value"
              placeholder="Value"
              @input="handleInput(index)"
            />
          </td>
          <td>
            <input
              type="text"
              v-model="param.description"
              placeholder="Description"
              @input="handleInput(index)"
            />
          </td>
          <td>
            <div
              @click="removeParam(index)"
              class="i-mdi:trash-can-outline text-xl"
            ></div>
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputData = ref("https://642541e49e0a30d92b2ccf2a.mockapi.io/Minhh");

const params = ref([{ key: "", value: "", description: "", enabled: true }]);
const newParam = ref({ key: "", value: "", description: "", enabled: true });

function handleInput(index) {
  if (index === params.value.length - 1) {
    params.value.push({ key: "", value: "", description: "", enabled: true });
  }
}

function addParam() {
  params.value.push(newParam.value);
  newParam.value = { key: "", value: "", description: "", enabled: true };
}

function removeParam(index) {
  params.value.splice(index, 1);
}


</script>
