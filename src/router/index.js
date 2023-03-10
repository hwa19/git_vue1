import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },

  {
    path: '/category1',
    name: 'category1',
    component: () => import(/* webpackChunkName: "category1" */ '../views/category1/index.vue'),

    children: [
      {
        path: 'category1menu1',
        name: 'category1-Menu1',
        component: () => import(/* webpackChunkName: "category1" */ '../views/category1/Category1Menu1.vue'),
      },
    ],
  },

  {
    path: '/category2',
    name: 'category2',
    component: () => import(/* webpackChunkName: "category2" */ '../views/category2/index.vue'),

    children: [
      {
        path: 'category2menu1',
        name: 'category2-Menu1',
        component: () => import(/* webpackChunkName: "category2" */ '../views/category2/Category2Menu1.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
