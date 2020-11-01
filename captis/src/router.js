import Vue from "vue";
import Router from 'vue-router';
import Main from './components/Main';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Bizniz from "./components/Bizniz";
import WhoWeAre from "./components/WhoWeAre";

Vue.use(Router);


export default new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        scrollBehavior(to, from, savedPosition) {
            if(savedPosition){
                    return savedPosition;
            } else {
                const position = {};
                if(to.hash){
                    position.selector = to.hash;
                    if (document.querySelector(to.hash)){
                        return position;
                    }
                    return false;
                }

            }
        },
        routes: [
            {
                path:'',
                name:'main',
                component:Main,
            },
            {
                path:'/',
                name:'main',
                component:Main,
            },
            {
                path:'/problem',
                name:'problem',
                component:Problem,
            },
            {
                path:'/solution',
                name:'solution',
                component:Solution,
            },
            {
                path:'/bizniz',
                name:'bizniz',
                component:Bizniz,
            },
            {
                path:'/who-we-are',
                name:'who-we-are',
                component:WhoWeAre,
            }
        ]
})
