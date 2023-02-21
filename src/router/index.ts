import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    beforeEnter : (to,from,next) => {
      if(from.name == 'loginPage'){
        next();
      }else{
        next('loginPage');
      }
    },
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/status',
    name: 'status',
    component: () => import(/* webpackChunkName: "about" */ '../views/StatusView.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
