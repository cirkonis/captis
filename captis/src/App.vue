<template>
    <v-app>
<!--    <v-navigation-drawer app>-->
<!--     -->
<!--    </v-navigation-drawer>-->
        <v-content>
            <router-view></router-view>
        </v-content>

        <v-app-bar   dense
                     flat
                     app
                     color="white"
                    >
            <Toolbar/>
        </v-app-bar>
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
      <Problem/>
      <Solution/>
      <Bizniz/>
    <WhoWeAre/>
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
import VueDummy from 'vue-dummy';
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Bizniz from "./components/Bizniz";
import Toolbar from "./components/Toolbar";

Vue.use(VueDummy);
Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(d3);

export default {
  name: 'App',
components: {
    Toolbar,
    WhoWeAre,
    Main,
    Carbon,
    Bizniz,
    Solution,
    Problem,
  },
  data: () => ({

  }),
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
</style>
