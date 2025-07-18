<template>
  <v-container>
    <ProductList />
  </v-container>
</template>

<script>
  import ProductList from '@/components/ProductList.vue' //ProductList.vueをインポート

  export default {
    name: 'HomeView',

    components: {
      ProductList,
    },
  }
</script>
