
export default {
  namespaced: true, // モジュール名でアクセスするための設定
  state: {
    products: [
      { id: 1, name: 'リンゴ', price: 150, quantity: 0 },
      { id: 2, name: 'バナナ', price: 120, quantity: 0 },
      { id: 3, name: 'みかん', price: 100, quantity: 0 }
    ]
  },
  getters: {
    totalPrice(state) {
      return state.products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    productsInCart(state) {
      return state.products.filter(p => p.quantity > 0);
    }
  },
  mutations: {
    addToCart(state, product) {
      const item = state.products.find(p => p.id === product.id);
      if (item) item.quantity++;
    },
    clearCart(state) {
      state.products.forEach(p => (p.quantity = 0));
    }
  },
  actions: {
    async purchaseItems({ commit }) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      commit('clearCart');
    }
  }
}