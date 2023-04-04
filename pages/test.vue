<template>
  <div>
    <input v-model="username" type="text" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const username = ref("");

watch(username, (newValue) => {
  const url = new URL(window.location.href);
  url.searchParams.set("username", newValue);
  window.history.pushState({}, "", url.toString());
});
</script>
