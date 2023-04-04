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
            <p class="cursor-pointer ml-1">Save</p>
          </div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:chevron-down text-xl mt15% cursor-pointer"></div>
          </n-dropdown>
        </div>
        <div>
          <n-dropdown
            placement="bottom-start"
            trigger="click"
            size="small"
            :options="options"
          >
            <div class="i-mdi:dots-horizontal text-xl mt cursor-pointer"></div>
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
            <div class="i-mdi:android-messages text-xl mt25% cursor-pointer"></div>
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
      <hr>
    </n-layout-content>
    <n-layout-footer class=" ">
      <div class="flex w-full h-screen divide-x divide-gray-300">
        <div class="w1/2 bg-white">
          <div class="flex justify-between">
            <a class="decoration-none p2.3% font-bold mt3%" href="">Cookies</a>
          </div>
          <div>
            <a class="decoration-none ml89.5% font-bold" href="">Beautify</a>
          </div>
          <div class="flex mt--7%">
            <div
              class="flex bg-gray-100 border-gray-300 w10% h9 mt items-center"
            >
              <div class="flex items-center mr-1">
                <a href="" class="decoration-none ml-1">Raw</a>
              </div>
              <n-dropdown
                placement="bottom-start"
                trigger="click"
                size="small"
                :options="options"
              >
                <div class="i-mdi:chevron-down text-xl"></div>
              </n-dropdown>
            </div>
            <div class="flex items-center ml5% mt2.5%">
              <div class="flex items-center mr-1">
                <a href="" class="decoration-none ml-1 font-bold text-green"
                  >JSON</a
                >
              </div>
              <n-dropdown
                placement="bottom-start"
                trigger="click"
                size="small"
                :options="options"
              >
                <div class="i-mdi:chevron-down text-xl"></div>
              </n-dropdown>
            </div>
          </div>
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
const options = [
  {
    label: "Send and Dowload",
  },
];
</script>
