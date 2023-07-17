import Main from '@/pages/Main.vue'
import Places from '@/pages/Places.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/places',
    component: Places
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;