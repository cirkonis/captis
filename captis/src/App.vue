<template>
    <v-app>
<!--    <v-navigation-drawer app>-->
<!--     -->
<!--    </v-navigation-drawer>-->
        <v-app-bar   dense
                     flat
                     app
                     color="white"
                    >
            <Toolbar/>
        </v-app-bar>
        <Carbon/>
      <Main/>
      <Problem/>
      <Solution/>
      <Bizniz/>
    <WhoWeAre/>
  </v-app>
</template>

<script>
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
import Carbon from "./components/Carbon";

Vue.use(VueDummy);
Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(d3);
Vue.use(VueRouter);

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
</style>
