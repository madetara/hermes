import Vue from "vue";
import index from "./components/index.vue";

new Vue({
  render: createEl => createEl(index)
}).$mount("#app");
