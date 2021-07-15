import { createStore } from 'vuex'
import axios from 'axios';
import Cookie from 'universal-cookie';

const url = 'http://localhost:3000/api/'
const cookie = new Cookie()

export default createStore({
  state: {
    products: [],
    sells: [],
    user: {}
  },
  mutations: {

    // Products

    setProducts(state, payload) {
      state.products = payload
    },
    newProduct(state, payload) {
      state.products = state.products.push(payload)
    },

    // Sells

    setSells(state, payload) {
      state.sells = payload
    },
    newSell(state, payload) {
      state.sells = state.sells.push(payload)
    },

    // Auth

    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {

    // Products

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

    // Sells

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
    },

    // Auth

    async setUser(ctx) {
      try {
        if (cookie.get("token")) {
          console.log(cookie.get("token"))
          const { data } = await axios({
            method: "GET",
            headers: {
              "Authorization": "Bearer " + cookie.get("token")
            },
            url: url + "user/profile"
          })

          data.user.token = cookie.get("token", {
            path: "/",
            maxAge: 60 * 60 * 72,
            domain: "localhost"
          })

          ctx.commit('setUser', data.user)
        } 
      } catch (error) {
        console.error(error)
      }
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
    },
    getUser: (state) => {
      return state.user
    }
  }
})
