<template>
  <div>
    <h1 class="title">Hello from Hermes!</h1>
    <div class="container">
      <div class="A4" contenteditable="true"></div>
      <div class="docs">Сlick on the sheet area</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style>
.title {
  text-align: center;
}
.container {
  display: flex;
}
.A4 {
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  padding: 1cm;
  font-size: 20px;
}
.docs {
  padding-left: 15px;
}
</style>