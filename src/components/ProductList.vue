<template>
  <!-- 画面全体のレイアウトコンテナ -->
  <v-container>
    
    

              <v-btn small color="primary" @click="fetchWeather">検索</v-btn>
          <p>
          結果: {{ data }}
          </p>

     
  </v-container>
</template>

<script>
    export default {
        computed: {
            
            // VueXのstateから商品リストを取得
            products() {
                return this.$store.state.product.products; // 名前空間の変更
            },

            data() {
                return this.$store.state.data; // 名前空間の変更
            },
            
            // getterから合計金額を取得
            totalPrice() {
                return this.$store.getters['product/totalPrice']; // 名前空間の変更
            }
        },

        methods: {
            // ボタン押下でmutationをcommitする
            addToCart(product) {
                this.$store.commit('product/addToCart', product); // 名前空間の変更
            },
             
            async fetchWeather() {
              this.$store.dispatch('fetchData')
            }
        }
    }
</script>