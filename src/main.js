import Vue from "vue";
import less from "less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

//按需引用Vant
import { Field } from 'vant';
import { Toast } from 'vant';

//设置axios
const request = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})
Vue.prototype.$http = request;
Vue.prototype.$message = Toast;

Vue.config.productionTip = false;
//注意按需引入要写在new Vue前面
Vue.use(less);
Vue.use(Field);
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

