<template>
<v-app>
<v-app-bar

      app

      color="primary"

      dark
>
<div class="d-flex align-center">
<v-img

          alt="Vuetify Logo"

          class="shrink mr-2"

          contain

          src="https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(this.city)}&appid=${this.apiKey}"

          transition="scale-transition"

          width="40"

        />
 
        <v-img

          alt="Vuetify Name"

          class="shrink mt-1 hidden-sm-and-down"

          contain

          min-width="100"

          src="https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(this.city)}&appid=${this.apiKey}"

          width="100"

        />
</div>
 
      <v-spacer></v-spacer>
<v-btn text to="/" tag="router-link">Home</v-btn>
<v-btn text to="/about" tag="router-link">About</v-btn>
<v-btn text to="/purchase" tag="router-link">購入</v-btn> <!-- 購入ビューを追加 -->
<v-btn

        href="https://github.com/vuetifyjs/vuetify/releases/latest"

        target="_blank"

        text
>
<span class="mr-2">Latest Release</span>
<v-icon>mdi-open-in-new</v-icon>
</v-btn>
</v-app-bar>
 
    <v-main>
<router-view/>
</v-main>
</v-app>
</template>
 
<script>
 
export default {

  name: 'App',
 
  data: () => ({

    //

  }),

};
</script>

 