<template>
  <form id="jsonFile" name="jsonFile" enctype="multipart/form-data" method="post">
    <fieldset>
      <input type="file" id="fileinput" />
      <input type="button" id="btnLoad" value="Load" @click="loadFile" />
      <div id="content"></div>
    </fieldset>
  </form>
</template>
<script setup>
const loadFile = () => {
  const input = document.getElementById("fileinput")

  const file = input.files[0]
  const fr = new FileReader()
  fr.onload = () => {
    const lines = fr.result
    const newArr = JSON.parse(lines)
    document.getElementById("content").innerHTML = JSON.stringify(newArr)
  }
  fr.readAsText(file)
}
</script>