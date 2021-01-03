import { createRouter, createWebHistory } from 'vue-router'
import Files from '../views/Files.vue'

const routes = [
  {
    path: '/',
    name: 'Files',
    component: Files
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
