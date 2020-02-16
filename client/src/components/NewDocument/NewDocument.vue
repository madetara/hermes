<template>
  <div class="A4" contenteditable="true"></div>
</template>

<script>
export default {
  name: "NewDocument",
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style>
.A4 {
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
  padding: 1cm;
  font-size: 20px;
}
</style>
