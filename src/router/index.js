import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Sells from '../views/Sells.vue'
import CreateProduct from '../views/CreateProduct.vue'
import CreateSell from '../views/CreateSell.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/sells',
    name: 'Sells',
    component: Sells
  },
  {
    path: '/create-product',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/create-sell',
    name: 'CreateSell',
    component: CreateSell
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: "exact-active",
  routes
})

export default router
