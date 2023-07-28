import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    leasings: [],
    breadCrumbs: [{ text: 'Home', href: '/' }],
    formSpek: {},
    harga: {
      hargaMin: 0,
      hargaMax: 1000000000
    }
  },
  mutations: {
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
      console.log(payload, 'ini productsnya')
    },
    SET_HARGA (state, payload) {
      state.harga = payload
    },
    SET_LEASINGS (state, payload) {
      state.leasings = payload
    },
    SET_BREADCRUMBS (state, payload) {
      state.breadCrumbs = [{ text: 'Home', href: '/' }]
      state.breadCrumbs.push(payload)
    },
    SET_FORMSPEK (state, payload) {
      console.log(payload, 'this comes from store')
      state.formSpek = payload
    },
    ADD_BREADCRUMBS (state, payload) {
      state.breadCrumbs = [{ text: 'Home', href: '/' }, { text: 'Products', href: '/products' }]
      state.breadCrumbs.push(payload)
    }
  },
  actions: {
    subHarga (context, payload) {
      context.commit('SET_HARGA', payload)
    },
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
    async getProducts (context, payload) {
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
    submitForm (context, payload) {
      context.commit('SET_FORMSPEK', payload)
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
      let bikes = []
      if (state.products) {
        bikes = state.products.filter(el => {
          return el.jenisMotor === 'cub'
        })
        if (state.formSpek.kapasitas_mesin) {
          bikes = bikes.filter(el => {
            return el.volumeLangkah === state.formSpek.kapasitas_mesin
          })
        } if (state.formSpek.transmisi) {
          bikes = bikes.filter(el => {
            return el.tipeMesin === state.formSpek.transmisi
          })
        } if (state.formSpek.SSBB) {
          bikes = bikes.filter(el => {
            return el.sistemSuplaiBahanBakar === state.formSpek.SSBB
          })
        } if (state.harga.hargaMin && state.harga.hargaMax) {
          bikes = bikes.filter(el => {
            return el.price <= state.harga.hargaMax && el.price >= state.harga.hargaMin
          })
        }
        return bikes
      }
    },
    matic: state => {
      let bikes = []
      if (state.products) {
        bikes = state.products.filter(el => {
          return el.jenisMotor === 'matic'
        })
        if (state.formSpek.kapasitas_mesin) {
          bikes = bikes.filter(el => {
            return el.volumeLangkah === state.formSpek.kapasitas_mesin
          })
        } if (state.formSpek.transmisi) {
          bikes = bikes.filter(el => {
            return el.tipeMesin === state.formSpek.transmisi
          })
        } if (state.formSpek.SSBB) {
          bikes = bikes.filter(el => {
            return el.sistemSuplaiBahanBakar === state.formSpek.SSBB
          })
        } if (state.harga.hargaMin && state.harga.hargaMax) {
          bikes = bikes.filter(el => {
            return el.price <= state.harga.hargaMax && el.price >= state.harga.hargaMin
          })
        }
        return bikes
      }
    },
    premium: state => {
      let bikes = []
      if (state.products) {
        bikes = state.products.filter(el => {
          return el.jenisMotor === 'premium'
        })
        if (state.formSpek.kapasitas_mesin) {
          bikes = bikes.filter(el => {
            return el.volumeLangkah === state.formSpek.kapasitas_mesin
          })
        } if (state.formSpek.transmisi) {
          bikes = bikes.filter(el => {
            return el.tipeMesin === state.formSpek.transmisi
          })
        } if (state.formSpek.SSBB) {
          bikes = bikes.filter(el => {
            return el.sistemSuplaiBahanBakar === state.formSpek.SSBB
          })
        } if (state.harga.hargaMin && state.harga.hargaMax) {
          bikes = bikes.filter(el => {
            return el.price <= state.harga.hargaMax && el.price >= state.harga.hargaMin
          })
        }
        return bikes
      }
    },
    sport: state => {
      let bikes = []
      if (state.products) {
        bikes = state.products.filter(el => {
          return el.jenisMotor === 'sport'
        })
        if (state.formSpek.kapasitas_mesin) {
          bikes = bikes.filter(el => {
            return el.volumeLangkah === state.formSpek.kapasitas_mesin
          })
        } if (state.formSpek.transmisi) {
          bikes = bikes.filter(el => {
            return el.tipeMesin === state.formSpek.transmisi
          })
        } if (state.formSpek.SSBB) {
          bikes = bikes.filter(el => {
            return el.sistemSuplaiBahanBakar === state.formSpek.SSBB
          })
        } if (state.harga.hargaMin && state.harga.hargaMax) {
          bikes = bikes.filter(el => {
            return el.price <= state.harga.hargaMax && el.price >= state.harga.hargaMin
          })
        }
        return bikes
      }
    }
  },
  modules: {
  }
})
