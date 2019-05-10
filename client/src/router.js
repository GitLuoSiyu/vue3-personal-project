import Vue from "vue";
import Router from "vue-router";

import Index from "./views/Index.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import NotFound from "./views/404.vue";
import InfoShow from "./views/InfoShow.vue";
import Home from "./views/Home.vue";
import FoundList from "./views/FoundList.vue";

// views
import Blog from "./views/blog/Blog.vue";
// import Index from "./../views/index/Index.vue";
// import Signin from "./../views/login/Signin.vue";
// import Signout from "./../views//login/Signout.vue";
import Navi from "./views/navi/Navi.vue";
import Pindex from "./views/pindex/Pindex.vue";
import Project from "./views/project/Project.vue";
import Projectindex from "./views/projectindex/Projectindex.vue";
import Todo from "./views/todo/Todo.vue";
import Tools from "./views/tools/Tools.vue";
import Tree from "./views/tree/Tree.vue";
import Wxarticle from "./views/wxarticle/Wxarticle.vue";
import Wxlist from "./views/wxarticle/modules/Wxlist.vue";

// error
// import Error400 from "./../views/error/400.vue";
// import Error401 from "./../views/error/401.vue";
// import Error403 from "./../views/error/403.vue";
// import Error404 from "./../views/error/404.vue";
// import Error500 from "./../views/error/500.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "/home",
          name: "home",
          component: Home
        },
        {
          path: "/infoshow",
          name: "infoshow",
          component: InfoShow
        },
        {
          path: "/foundlist",
          name: "foundlist",
          component: FoundList
        }
      ]
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/navi",
      name: "navi",
      component: Navi
    },
    {
      path: "/pindex",
      name: "pindex",
      component: Pindex
    },
    {
      path: "/project",
      name: "project",
      component: Project
    },
    {
      path: "/projectindex",
      name: "projectindex",
      component: Projectindex
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/tools",
      name: "tools",
      component: Tools
    },
    {
      path: "/tree",
      name: "tree",
      component: Tree
    },
    {
      path: "/wxarticle",
      name: "wxarticle",
      component: Wxarticle,
      children: [
        {
          path: "/wxarticle/list",
          name: "wxlist",
          component: Wxlist
        }
      ]
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "*",
      name: "/404",
      component: NotFound
    }
  ]
});

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.eleToken ? true : false;
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// });

export default router;
