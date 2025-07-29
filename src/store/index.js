import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      data: null
    },
    getters: {
    },
    mutations: {
      setData(state, value){
        state.data = value
      }
    },
    actions: {
      async fetchData({ commit }) {
        try {
          const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=1b57c8e1c12b3818e67aae4099e33982')
          const weather = resp.data.weather[0].main
          commit('setData', weather)
        } catch (error) { 
          console.log(error)
        }
      } 
    },
    
    modules: {
      product
    }
})