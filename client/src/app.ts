import Vue from "vue";
import index from "./components/index.vue";
import {store} from "./store/store.ts";

new Vue({
  render: createEl => createEl(index),
  store
}).$mount("#app");
