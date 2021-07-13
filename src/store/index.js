import { createStore } from 'vuex'
import axios from 'axios';

const url = 'http://localhost:3000/api/'

export default createStore({
  state: {
    products: [],
    sells: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    newProduct(state, payload) {
      state.products = state.products.push(payload)
    },
    setSells(state, payload) {
      state.sells = payload
    },
    newSell(state, payload) {
      state.sells = state.sells.push(payload)
    },
  },
  actions: {
    setProducts(ctx) {
      if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify([]))
      } else {
        const data = localStorage.getItem('products')
        ctx.commit('setProducts', JSON.parse(data))
      }
    },
    newProduct(ctx, payload) {
      let data = JSON.parse(localStorage.getItem('products'))
      const newData = data = [...data,{
        id: payload.id,
        name: payload.name,
        total: payload.total,
        price: payload.price,
        cost: payload.cost
      }]
      localStorage.setItem('products', JSON.stringify(newData))
      ctx.commit('setProducts', JSON.parse(localStorage.getItem('products')))
    },
    deleteProduct(ctx, payload) {
      const data = JSON.parse(localStorage.getItem('products'))
      const newData = JSON.stringify(data.filter(el => el.id != payload))
      localStorage.setItem('products', newData)
      ctx.commit('setProducts', JSON.parse(newData))
    },
    setSells(ctx) {
      if (!localStorage.getItem('sells')) {
        localStorage.setItem('sells', JSON.stringify([]))
      } else {
        const data = localStorage.getItem('sells')
        ctx.commit('setSells', JSON.parse(data))
      }
    },
    newSell(ctx, payload) {
      let data = JSON.parse(localStorage.getItem('sells'))
      const newData = data = [...data,{
        id: payload.id,
        name: payload.name,
        total: payload.total,
        products: payload.products,
        earnings: payload.earnings,
      }]
      localStorage.setItem('sells', JSON.stringify(newData))
      ctx.commit('setSells', JSON.parse(localStorage.getItem('sells')))
    },
    deleteSell(ctx, payload) {
      const data = JSON.parse(localStorage.getItem('sells'))
      const newData = JSON.stringify(data.filter(el => el.id != payload))
      localStorage.setItem('sells', newData)
      ctx.commit('setSells', JSON.parse(newData))
    }
  },
  modules: {
  },
  getters: {
    getProducts: (state) => (search) => {
      if (search !== '') {
        return state.products.filter(el => el.includes(search.toLowerCase()))
      } else {
        return state.products
      }
    },
    getSells: (state) => (search) => {
      if (search !== '') {
        return state.sells.filter(el => el.includes(search.toLowerCase()))
      } else {
        return state.sells
      }
    }
  }
})
