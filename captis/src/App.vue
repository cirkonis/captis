<template>
    <v-app>
        <v-app-bar   dense
                     flat
                     app
                     color="white"
                    >
            <Toolbar/>
        </v-app-bar>
    <div class="fullpage-container" :options="options">
        <div class="fullpage-wp" v-fullpage="opts" :options="options" ref="fullpage">
        <div class = "page">
      <Carbon/>
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
        </div>
        <div class = "page">     <Problem/>    </div>
        <div class = "page">     <Solution/>   </div>
        <div class = "page">     <Bizniz/>     </div>
            <WhoWeAre/>
    </div>
    </div>
  </v-app>
</template>

<script>
import Carbon from "./components/Carbon";
import Main from './components/Main';
import WhoWeAre from "./components/WhoWeAre";
import Vue from 'vue';
import Vuetify from 'vuetify';
import * as d3 from 'd3';
import 'vuetify/dist/vuetify.min.css';
import VueClipboard from 'vue-clipboard2';
import VueRouter from 'vue-router';
import VueDummy from 'vue-dummy';
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Bizniz from "./components/Bizniz";
import Toolbar from "./components/Toolbar";
import VueFullpage from 'fullpage-vue';
import 'fullpage-vue/src/fullpage.css'


Vue.use(VueFullpage);
Vue.use(VueDummy);
Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(d3);
Vue.use(VueRouter);

export default {
  name: 'App',
components: {
    Bizniz,
    Problem,
    Solution,
    Toolbar,
    Main,
    Carbon,
    WhoWeAre,
  },
  data: () => ({
      options: {
          autoScrolling: false,
      }
  }),
    mounted(){
            this.fPage();
    },
    methods: {
      fPage(){
          console.log(this.$refs.fullpage);
        }
    },
};
</script>
<style>
    .logo{
        display: flex;
        align-content: center;
        justify-content: center;
        top:5%;
        left: 35%;
        margin-top: 20px;
    }

    .fullpage-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>
