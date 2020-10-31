<template>
    <v-toolbar class="theToolbarItself"
            dense
            flat
            color="white"
        >
        <v-toolbar-title class="toolbar-title" color="#27214C">
        <span>{{title}}</span>
        </v-toolbar-title>
        <v-spacer> </v-spacer>
        <v-toolbar-items class="toolbar-buttons">
            <v-btn class = "toolbar-button"
                   text color="#27214C"
                   v-on:click.native="buttonWorks(links[0].route)" router to="/main">
                {{links[0].name}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C"
                   v-on:click.native="buttonWorks(links[1].route)" router to="/problem">
                {{links[1].name}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C"
                   v-on:click.native="buttonWorks(links[2].route)" router to="/solution">
                {{links[2].name}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C"
                   v-on:click.native="buttonWorks(links[3].route)" router to="/bizniz">
                {{links[3].name}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C"
                   v-on:click.native="buttonWorks(links[4].route)" router to="/who-we-are">
                {{links[4].name}}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar",
            data: function () {
                return {
                    title: "CAPTIS",
                    links: [
                        {name: "What", route: '/'},
                        {name: "Where", route: '/problem'},
                        {name: "How", route: '/solution'},
                        {name: "Why", route: '/bizniz'},
                        {name: "Who", route: '/who-we-are'},
                        ]
                }
            },
        methods: {
            buttonWorks(button){
                console.log(button);
            }
        }
    }
</script>

<style scoped>
    .toolbar-title{
        font-family: "Trebuchet MS", serif;
        font-size: 24px;
        color: #27214C;
        opacity: .5;
    }

    .toolbar-button{
        font-family: "Trebuchet MS", serif;
        font-size: 16px;
    }
</style>
