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
              v-for="(collection, index) in collections"
              :key="collection.id"
            >
              <n-collapse-item :title="collection.name" name="">
                <n-collapse-item
                  class="justify-between items-center"
                  :title="folder.name"
                  v-for="(folder, folderIndex) in collection.folders"
                  :key="folder.id"
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
import axios from "axios";
const STORAGE_KEY = "myItems";
const items = ref([]);
const collections = ref([]);
onMounted(async () => {
  const storedItems = localStorage.getItem(STORAGE_KEY);
  if (storedItems) {
    items.value = JSON.parse(storedItems);
  }
  const collectionData = await axios.get("http://127.0.0.1:8000/collection");
  collections.value = collectionData.data;
});

const newCollection = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/collection", {
      name: "New Collection",
    });
    const newCollection = response.data;
    collections.value.push(newCollection);
  } catch (error) {
    console.log(error);
  }
};

const options = [
  {
    label: "Add Folder",
    key: 1,
    name: "addfolder",
  },
  {
    label: "Rename",
    key: 2,
    name: "renameCollection",
  },
  {
    label: "Delete",
    key: 3,
    name: "deletecollection",
  },
];

const clickFolder = async (index, key) => {
  if (key === 1) {
    let dataFolder = {
      title: "New Folder",
      data: [],
    };
    items.value[index].data.push(dataFolder);

    // Add the new folder to the database using POST request
    try {
      const response = await axios.post(`http://127.0.0.1:8000/folder`, {
        title: dataFolder.title,
        data: dataFolder.data,
        collection_id: collections.value[index].id,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  } else if (key === 2) {
    const collection = collections.value[index];
    const action = options.find((opt) => opt.key === key)?.name; // find action based on key
    if (action) {
      await eval(action)(collection);
    }
  } else if (key === 3) {
    const collection = collections.value[index];
    const action = options.find((opt) => opt.key === key)?.name; // find action based on key
    if (action) {
      await eval(action)(collection);
      collections.value = collections.value.filter(
        (c) => c.id !== collection.id
      ); // remove the deleted collection from the list
    }
  }
};
const renameCollection = async (collection) => {
  try {
    const newName = prompt("Enter new collection name:");
    if (newName) {
      const response = await axios.put(
        `http://127.0.0.1:8000/collection?id=${collection.id}`,
        { name: newName }
      );
      console.log(response.data);
      console.log(collection);
    }
  } catch (error) {
    console.log(error);
  }
};
const deletecollection = async (collection) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/collection?id=${collection.id}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
</script>
<!-- <template>
  <div>
    <n-layout has-sider>
      <n-layout-sider
        class="bg-white"
        content-style="padding: 10px; border: 1px solid lightgray;"
      >
        <div class="flex items-center">
          <div class="i-mdi:plus mr-2 text-4xl" @click="addCollection"></div>

          <input class="w-full h3% text-blue" type="text" />
          <div class="i-mdi:dots-horizontal ml-2 text-3xl"></div>
        </div>
        <div>
          <n-collapse
            class="flex justify-between mt5"
            v-for="(collection, index) in collections"
            :key="collection.id"
          >
            <n-collapse-item :title="collection.name" name="">
              <n-collapse-item
                class="justify-between items-center"
                :title="folder.name"
                v-for="(folder, folderIndex) in collection.folders"
                :key="folder.id"
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
              <div class="i-mdi:dots-horizontal text-xl"></div>
            </n-dropdown>
          </n-collapse>
          <n-collapse
            class="flex justify-between mt5"
            v-for="(item, index) in items"
            :key="index"
          >
            <n-collapse-item :title="item.title" name="">
              <n-collapse-item
                class="justify-between items-center"
                :title="subItem.title"
                v-for="(subItem, subIndex) in item.data"
                :key="subIndex"
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
import axios from "axios";
const STORAGE_KEY = "myItems";
const items = ref([]);
const collections = ref([]);
onMounted(async () => {
  const storedItems = localStorage.getItem(STORAGE_KEY);
  if (storedItems) {
    items.value = JSON.parse(storedItems);
  }
  const collectionData = await axios.get("http://127.0.0.1:8000/collection");
  collections.value = collectionData.data;
});
const options = [
  {
    label: "Add Folder",
    key: 1,
  },
  {
    label: "Rename",
    key: 2,
    name: "renameCollection",
  },
  {
    label: "Delete",
    key: 3,
    name: "deletecollection",
  },
];
const addCollection = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/collection", {
      name: "New Collection",
    });
    const newCollection = response.data;
    collections.value.push(newCollection);
  } catch (error) {
    console.log(error);
  }
};
const clickFolder = async (index, key) => {
  if (key === 1) {
    let dataFolder = {
      title: "New Folder",
      data: [],
    };
    items.value[index].data.push(dataFolder);
  } else if (key === 2) {
    const collection = collections.value[index];
    const action = options.find((opt) => opt.key === key)?.name; // find action based on key
    if (action) {
      await eval(action)(collection);
    }
  } else if (key === 3) {
    const collection = collections.value[index];
    const action = options.find((opt) => opt.key === key)?.name; // find action based on key
    if (action) {
      await eval(action)(collection);
      collections.value = collections.value.filter(
        (c) => c.id !== collection.id
      ); // remove the deleted collection from the list
    }
  }
};
const renameCollection = async (collection) => {
  try {
    const newName = prompt("Enter new collection name:");
    if (newName) {
      const response = await axios.put(
        `http://127.0.0.1:8000/collection?id=${collection.id}`,
        { name: newName }
      );
      console.log(response.data);
      console.log(collection);
    }
  } catch (error) {
    console.log(error);
  }
};
const deletecollection = async (collection) => {
  try {
    const response = await axios.delete(
      `http://127.0.0.1:8000/collection?id=${collection.id}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
</script> -->
