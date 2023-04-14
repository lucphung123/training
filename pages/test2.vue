<template>
  <div>
    <input type="file" @change="onFileChange">
    <button @click="uploadFile">Upload File</button>
  </div>
</template>

<script setup>
  import axios from 'axios';
  let file = null;

  const onFileChange = (event) => {
    file = event.target.files[0];
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };
</script>