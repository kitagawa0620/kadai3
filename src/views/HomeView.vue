<template>
  <v-container>
    <ProductList />
    <router-link to="/about">
    <v-btn>画面遷移</v-btn>
    </router-link>
  </v-container>
</template>

<script>
  import ProductList from '@/components/ProductList.vue' //ProductList.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      ProductList,
    },
    methods:{
      pagechange(){
        this.$router.push('/about');
      }
    }
  };
</script>
