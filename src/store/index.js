import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { requests: [router.currentRoute], cards: [] },
  actions: {
    async apiRequest({ commit }, endpoint, type = "get") {
      const res = await axios[type]("http://localhost:3000" + endpoint, {
        params: router.currentRoute.params
      });
      const {
        data: { data, link, ...otherData },
        config: { method }
      } = res;
      commit("setRequests", { link, method });
      return data || otherData;
    }
  },
  getters: {
    getRequests: state => state.requests
  },
  mutations: {
    setRequests: (state, request) => {
      state.requests = [...state.requests, request];
    }
  }
});
