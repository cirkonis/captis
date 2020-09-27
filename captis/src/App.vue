<template>
  <v-app>
      <div class="logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/captisLogo.svg"
          transition="scale-transition"
          width="350"
          height="350"
        />
      </div>
        <Main/>
    <WhoWeAre/>
  </v-app>
</template>

<script>
import Main from './components/Main';
import WhoWeAre from "./components/WhoWeAre";
import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default {
  name: 'App',

  components: {
    WhoWeAre,
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
    .logo{
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>
