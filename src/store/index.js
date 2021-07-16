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
    deleteProduct(state, payload) {
      state.products = state.products.filter(el => el.id != payload)
    },

    // Sells

    setSells(state, payload) {
      state.sells = payload
    },
    deleteSell(state, payload) {
      state.sells = state.sells.filter(el => el.id != payload)
    },

    // Auth

    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {

    // Products

    async setProducts(ctx) {
      try {
        const { data } = await axios({
          method: "GET",
          url: url + 'product/getAll',
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
        })

        ctx.commit('setProducts', data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async newProduct(ctx, payload) {
      try {
        const { data } = await axios({
          method: "POST",
          url: url + 'product/create',
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
          data: payload
        })

        const products = await axios({
          method: "GET",
          url: url + 'product/getAll',
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
        })

        ctx.commit('setProducts', products.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProduct(ctx, payload) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: url + 'product/delete/' + payload,
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
        })

        ctx.commit('deleteProduct', payload)
      } catch (error) {
        console.log(error)
      }
    },

    // Sells

    async setSells(ctx) {
      try {
        const { data } = await axios({
          method: "GET",
          url: url + 'sell/getAll',
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
        })

        ctx.commit('setSells', data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async newSell(ctx, payload) {
      try {
        await axios({
          method: "POST",
          url: url + 'sell/create',
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
          data: payload
        })

        const products = await axios({
          method: "GET",
          url: url + 'sell/getAll',
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
        })

        ctx.commit('setSells', products.data.data)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteSell(ctx, payload) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: url + 'sell/delete/' + payload,
          headers: {
            "Authorization": "Bearer " + ctx.state.user.token
          },
        })

        ctx.commit('deleteSell', payload)
      } catch (error) {
        console.log(error)
      }
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
