import Vue from "vue";
import App from "./App.vue";
import "./fa.config";
import Clipboard from "v-clipboard";

Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
