import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import ContactView from "../views/ContactView.vue";
import CheckoutView from "../views/CheckoutView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Freshu | Home",
    },
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
    meta: {
      title: "Freshu | Shop",
    },
    children: [
      {
        path: "Checkout",
        name: "Checkout",
        component: CheckoutView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),

    meta: {
      title: "Freshu | About",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Freshu | Contact",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
export default router;
