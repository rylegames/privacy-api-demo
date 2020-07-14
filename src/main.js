import Vue from "vue";
import VueChatScroll from "vue-chat-scroll";
import App from "./views";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueChatScroll);

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
