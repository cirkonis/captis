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
                   v-on:click.native="buttonWorks" v-scroll-to="'#main'">
                {{buttonNames[0].buttonName}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C" v-on:click.native="buttonWorks()" v-scroll-to="'#problem'">
                {{buttonNames[1].buttonName}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C" v-on:click.native="buttonWorks" v-scroll-to="'#solution'" >
                {{buttonNames[2].buttonName}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C" v-on:click.native="buttonWorks" v-scroll-to="'#bizniz'">
                {{buttonNames[3].buttonName}}
            </v-btn>
            <v-btn class = "toolbar-button" text color="#27214C" v-on:click.native="buttonWorks" v-scroll-to="'#who'">
                {{buttonNames[4].buttonName}}
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
                    buttonNames: [
                        {buttonName: "Main"},
                        {buttonName: "Problem"},
                        {buttonName: "Solution"},
                        {buttonName: "Money"},
                        {buttonName: "Us"},
                        ]
                }
            },
        methods: {
            buttonWorks(){
                console.log('button works')
            },
            scrollMeTo(refName) {
                const element = this.$els[refName];
                const top = element.offsetTop;

                window.scrollTo(0, top);
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
