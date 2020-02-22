<template>
  <div>
    <h1 class="title">Hello from Hermes!</h1>
    <div class="container">
      <NewDocument></NewDocument>
      <div class="docs">Сlick on the sheet area</div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style>
.title {
  text-align: center;
}
.container {
  display: flex;
}
.docs {
  padding-left: 15px;
}
</style>
