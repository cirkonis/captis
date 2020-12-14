<template>
    <v-toolbar class="theToolbarItself"
               dense
               flat
               color="white"
    >
        <v-toolbar-title class="toolbar-title" color="#27214C">
            <span>{{title}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="toolbar-buttons">
            <v-btn class="toolbar-button"
                   text color="#27214C"
                   style="font-size: 1.5vw"
                   v-on:click.native="buttonWorks(buttonNames[0].buttonName)"
                   v-scroll-to="'#main'">
                {{buttonNames[0].buttonName}}
            </v-btn>
            <v-btn class="toolbar-button"
                   text color="#27214C"
                   style="font-size: 1.5vw"
                   v-on:click.native="buttonWorks(buttonNames[1].buttonName)"
                   v-scroll-to="'#problem'">
                {{buttonNames[1].buttonName}}
            </v-btn>
            <v-btn class="toolbar-button"
                   text color="#27214C"
                   style="font-size: 1.5vw"
                   v-on:click.native="buttonWorks(buttonNames[2].buttonName)"
                   v-scroll-to="'#solution'">
                {{buttonNames[2].buttonName}}
            </v-btn>
            <v-btn class="toolbar-button"
                   text color="#27214C"
                   style="font-size: 1.5vw"
                   v-on:click.native="buttonWorks(buttonNames[3].buttonName)"
                   v-scroll-to="'#bizniz'">
                {{buttonNames[3].buttonName}}
            </v-btn>
            <v-btn class="toolbar-button"
                   text color="#27214C"
                   style="font-size: 1.5vw"
                   v-on:click.native="buttonWorks(buttonNames[4].buttonName)"
                   v-scroll-to="'#who'">
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
                    {buttonName: "What"},
                    {buttonName: "How"},
                    {buttonName: "Why"},
                    {buttonName: "Who"},
                ]
            }
        },
        methods: {
            buttonWorks() {
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
    .toolbar-title {
        font-family: titillium;
        font-size: 2.5vw;
        color: #27214C;
        opacity: .5;
    }

    .toolbar-button {
        font-family: titillium;
    }
</style>
