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
  { path: '/product/:id/edit', name: 'Productedit', props:true, component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue') },
  
]

const router = new VueRouter({
  routes,
   scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: 'history'
})

export default router
