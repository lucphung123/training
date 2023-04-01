<template>
  <n-layout>
    <n-layout-header>
      <div
        class="flex justify-between position-absolute position-relative items-center"
      >
        <p class="font-bold mr40%">NewCollection</p>
        <div class="display-flex mt5">
          <div class="i-mdi:share text-xl"></div>
          <p class="font-bold mt--1% cursor-pointer">share</p>
        </div>
        <div class="display-flex mt5">
          <div class="i-mdi:source-fork text-xl"></div>
          <p class="font-bold mt--1% cursor-pointer">fork|0</p>
        </div>
        <div class="display-flex mt5">
          <div class="i-mdi:eye text-xl"></div>
          <p class="font-bold mt--1% cursor-pointer">watch|0</p>
        </div>
        <div class="display-flex mt5">
          <div class="i-mdi:play-circle text-xl"></div>
          <p class="font-bold mt--1% cursor-pointer">run</p>
        </div>
        <div class="display-flex mt5">
          <div class="i-mdi:content-save text-xl"></div>
          <p class="font-bold mt--1% cursor-pointer">save</p>
        </div>
        <p class="i-mdi:dots-horizontal text-xl mt-0% cursor-pointer mt6"></p>
      </div>
      <hr />
    </n-layout-header>
    <n-layout-content content-style="padding: 0px;">
      <div
        class="display-flex flex justify-between position-absolute position-relative mr70% mt--1% cursor-pointer"
      >
        <p>Authorization</p>
        <p>Pre-request Scrip</p>
        <p>Tests</p>
        <p class="font-bold text-blue underline">variabels</p>
        <p>runs</p>
      </div>
      <div class="display-flex items-center">
        <p class="">
          These variables specific to this collection and its requests.Learn
          more about
        </p>
        <a class="ml-0.5%" href=""> collection variables.</a>
      </div>

      <div class="w15%">
        <n-space vertical>
          <n-input type="text" placeholder="Filter variable" />
        </n-space>
      </div>

      <div class="mt2%">
        <n-table :single-line="false">
          <thead>
            <tr>
              <th></th>
              <th>VARIABLE</th>
              <th>INITIAL VALUE</th>
              <th>CURRENT VALUE</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input class="" type="checkbox" name="" id="" /></td>
              <td><input class="border-none" type="text" id="input" /></td>
              <td><input class="border-none" type="text" /></td>
              <td><input class="border-none" type="text" /></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  class="border-none"
                  type="text"
                  placeholder="add new variable"
                />
              </td>
              <td><input class="border-none" type="text" /></td>
              <td><input class="border-none" type="text" /></td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </n-layout-content>
    <n-layout-footer><nuxt-link to="/request">565</nuxt-link> </n-layout-footer>
    <n-layout-footer><nuxt-link to="/word">565fx</nuxt-link> </n-layout-footer>
  </n-layout>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const input = document.querySelector("#input");
  const checkbox = document.querySelector("#checkbox");

  input.addEventListener("focus", () => {
    checkbox.checked = true;
  });
});
</script>
