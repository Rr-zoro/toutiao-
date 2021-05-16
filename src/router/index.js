import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/Login')
  },
  {
    path: '/',
    component: () => import('views/layout/Layout'),
    children: [
      {
        path: '', // Home页为Layout的默认子路由, Home页为默认打开页面,所以path为空
        name: 'home',
        component: () => import('views/home/Home')
      },
      {
        path: '/qa', 
        name: 'qa',
        component: () => import('views/qa/Qa')
      },
      {
        path: '/video', 
        name: 'video',
        component: () => import('views/video/Video')
      },
      {
        path: '/my', 
        name: 'my',
        component: () => import('views/my/My')
      },
      
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
