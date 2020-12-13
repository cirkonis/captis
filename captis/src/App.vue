<template>
    <v-app>
        <v-app-bar   dense
                     flat
                     app
                     color="white"
                     class = "app-bar"
                    >
            <Toolbar/>
        </v-app-bar>
        <div style="display: flex; flex-direction: row; justify-content: center">
        <Carbon  v-bind:carbonCapture="this.carbonCapture"/>
        </div>
      <div id = "main" class="what">   <Main @childToParent="carbonCaptureClicked()"/>    </div>
      <div id = "problem" class="where">  <Problem/>  </div>
      <div id = "solution" class="how">  <Solution/> </div>
      <div id = "bizniz" class="why">  <Bizniz/>   </div>
      <div id = "who" class="who"> <WhoWeAre/>  </div>
  </v-app>
</template>

<script>
//libraries and such
import Vue from 'vue';
import Vuetify from 'vuetify';
import * as d3 from 'd3';
import 'vuetify/dist/vuetify.min.css';
import VueClipboard from 'vue-clipboard2';
import VueDummy from 'vue-dummy';
import VueScrollTo from 'vue-scrollto'

//Components and such
import Carbon from "./components/Carbon";
import Toolbar from "./components/Toolbar";
import Main from './components/Main';
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Bizniz from "./components/Bizniz";
import WhoWeAre from "./components/WhoWeAre";

Vue.use(VueDummy);
Vue.use(VueClipboard);
Vue.use(Vuetify);
Vue.use(d3);
Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

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
            carbonCapture: false,
    }),
    methods: {
        carbonCaptureClicked(){
            this.carbonCapture = true;
        }
    },
}
</script>
<style>
    .app-bar{
        padding-bottom: 10px;
    }

    .what{
        /*padding: 20% 3% 0 3%;*/
        /*margin: 20% 0 2% 0;*/
    }

    .where{
        padding-top: 20px;
        margin-bottom: 10px;
    }

    .how{
        padding-top: 20px;
        margin-bottom: 10px;
    }

    .why{
        padding-top: 20px;
        margin-bottom: 10px;
    }

    .who{
        padding-top: 20px;
        margin-bottom: 10px;
    }








</style>
