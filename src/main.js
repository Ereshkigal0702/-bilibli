import Vue from "vue";
import less from "less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//按需引用Vant
import { Field } from 'vant';

Vue.config.productionTip = false;
//注意按需引入要写在new Vue前面
Vue.use(less);
Vue.use(Field);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

