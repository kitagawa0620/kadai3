import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product' // 商品管理モジュールをインポート

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product // productモジュールを登録
  }
})