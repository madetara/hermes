import Vue from "vue";
import Vuex from "vuex";
import NewDocumentStore from "./NewDocumentStore/NewDocumentStore.ts";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        NewDocumentStore
    }
});