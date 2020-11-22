import Vue from "vue";
import less from "less";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

//按需引用Vant
import { Field } from 'vant';
import { Toast } from 'vant';
import { Icon } from 'vant';
import { Uploader } from 'vant';
import { ActionSheet } from 'vant';
import { Dialog } from 'vant';

//设置axios
const request = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})
//设置拦截器，为每个请求加上token
//config就是一个请求
request.interceptors.request.use(config => {
  if (localStorage.getItem('token') !== '' || localStorage.getItem('token') !== undefined) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
})
Vue.prototype.$http = request;
Vue.prototype.$message = Toast;

Vue.config.productionTip = false;
//注意按需引入要写在new Vue前面
Vue.use(less);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Dialog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

