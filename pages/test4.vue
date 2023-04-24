<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :selectable="false"
  />
</template>

<script setup>
import { h, ref } from "vue";
import { repeat } from "seemly";
import { NButton } from "naive-ui";

function createData(level = 4, baseKey = "") {
  if (!level) return undefined;
  return repeat(6 - level, undefined).map((_, index) => {
    const key = "" + baseKey + level + index;
    const label = createLabel(level);
    return {
      label,
      key,
      children: createData(level - 1, key),
      suffix: () =>
        h(
          NButton,
          { text: true, type: "primary" },
          { default: () => "Suffix" }
        ),
    };
  });
}

function createLabel(level) {
  if (level === 4) return "Out of Tao, One is born";
  if (level === 3) return "Out of One, Two";
  if (level === 2) return "Out of Two, Three";
  if (level === 1) return "Out of Three, the created universe";
  return "";
}

const data = createData();
const defaultExpandedKeys = ref(["40", "41"]);
</script>
