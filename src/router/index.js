import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Resources from '../views/Resources.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
 
  { path: '/login', name: 'Login', component: Login },
  { path: '/resources/:id', name: 'Resources', component: Resources },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/products', name: 'Products', component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue') },
  { path: '/product/new', name: 'Product', props:true, component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue') },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
