import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    leasings: [],
    breadCrumbs: [{ text: 'Home', href: '/' }]
  },
  mutations: {
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
      console.log(payload, 'ini productsnya')
    },
    SET_LEASINGS (state, payload) {
      state.leasings = payload
    },
    SET_BREADCRUMBS (state, payload) {
      state.breadCrumbs = [{ text: 'Home', href: '/' }]
      state.breadCrumbs.push(payload)
    },
    ADD_BREADCRUMBS (state, payload) {
      state.breadCrumbs = [{ text: 'Home', href: '/' }, { text: 'Products', href: '/products' }]
      state.breadCrumbs.push(payload)
    }
  },
  actions: {
    async getBanners (context) {
      try {
        const response = await axios({
          method: 'get',
          url: '/banner'
        })
        if (response.status === 200) {
          const { data } = response
          context.commit('SET_BANNERS', data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getProducts (context) {
      try {
        const response = await axios({
          method: 'get',
          url: '/products'
        })
        if (response.status === 200) {
          const { data } = response
          context.commit('SET_PRODUCTS', data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getLeasings (context) {
      try {
        const response = await axios({
          method: 'get',
          url: '/leasing'
        })
        if (response.status === 200) {
          const { data } = response
          context.commit('SET_LEASINGS', data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    addBreadCrumbs (context, payload) {
      context.commit('SET_BREADCRUMBS', payload)
    },
    pushBreadCrumbs (context, payload) {
      context.commit('ADD_BREADCRUMBS', payload)
    },
    async fetch (context, payload) {
      try {
        const response = await axios({
          method: 'get',
          url: `/products/${payload}`
        })
        if (response.status === 200) {
          const { data } = response
          if (data) {
            return data
          } else {
            return 'not-found'
          }
        }
      } catch (error) {
        console.log(error)
        return 'not-found'
      }
    }
  },
  getters: {
    cub: state => {
      if (state.products) {
        return state.products.filter(el => {
          return el.tipeMesin === 'cub'
        })
      }
    },
    matic: state => {
      if (state.products) {
        return state.products.filter(el => {
          return el.tipeMesin === 'matic'
        })
      }
    },
    premium: state => {
      if (state.products) {
        return state.products.filter(el => {
          return el.tipeMesin === 'premium'
        })
      }
    },
    sport: state => {
      if (state.products) {
        return state.products.filter(el => {
          return el.tipeMesin === 'sport'
        })
      }
    }
  },
  modules: {
  }
})
