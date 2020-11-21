import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import UserInfo from "../views/UserInfo.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/userinfo",
    name: "UserInfo",
    component: UserInfo
  },
  {
    path:"/edit",
    component:Edit,
    name:Edit
  }
];

const router = new VueRouter({
  mode:'history',
  routes
});

//在router对象创建后使用路由=守卫，防止未登录就进入页面
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    next();
  }
  else {
    if (localStorage.getItem('token') === '' || localStorage.getItem('token') === undefined){
      next('/login');
    }
    else{
      next();
    }
  }
});

export default router;
