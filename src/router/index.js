import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import VendorsCreate from "../views/VendorsCreate.vue";
import VendorsIndex from "../views/VendorsIndex.vue";
import VendorsShow from "../views/VendorsShow.vue";
import VendorsEdit from "../views/VendorsEdit.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import UsersEdit from "../views/UsersEdit.vue";
import PartiesCreate from "../views/PartiesCreate.vue";
import PartiesShow from "../views/PartiesShow.vue";
import PartiesEdit from "../views/PartiesEdit.vue";
import CategoriesIndex from "../views/CategoriesIndex.vue";
import CategoriesShow from "../views/CategoriesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/users/:id/edit",
    name: "users-edit",
    component: UsersEdit,
  },
  {
    path: "/users/:id",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/vendors-create",
    name: "vendors-create",
    component: VendorsCreate,
  },
  {
    path: "/vendors",
    name: "vendors-index",
    component: VendorsIndex,
  },
  {
    path: "/vendors/:id",
    name: "vendors-show",
    component: VendorsShow,
  },
  {
    path: "/vendors/:id/edit",
    name: "vendors-edit",
    component: VendorsEdit,
  },
  {
    path: "/parties-create",
    name: "parties-create",
    component: PartiesCreate,
  },
  {
    path: "/parties/:id",
    name: "parties-show",
    component: PartiesShow,
  },
  {
    path: "/parties/:id/edit",
    name: "parties-edit",
    component: PartiesEdit,
  },
  {
    path: "/categories",
    name: "categories-index",
    component: CategoriesIndex,
  },
  {
    path: "/categories/:id",
    name: "categories-show",
    component: CategoriesShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
