import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/ProductDetail.vue'
import Contact from '../views/Contact.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/our-dealer',
    name: 'Our Dealer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/products/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/contact',
    name: 'Contact-us',
    component: Contact
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: 'Page not found'
    },
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   if (to.name !== 'Home' || to.name !== 'Our Dealer' || to.name !== 'Product' || to.name !== 'Home') next({ name: 'Login' })
//   else next()
// })
export default router
