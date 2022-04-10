import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VeeValidate from "vee-validate";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(Toast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
