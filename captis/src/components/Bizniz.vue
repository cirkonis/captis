<template>
    <v-container class="bizniz-container">
        <v-container class = "bizniz-text-container">
            <v-col>
                <v-row><h1>Why</h1></v-row>
                <v-row>
                    <p class="bizniz-text">{{message}}</p>
                    <p class="bizniz-text" v-dummy = "50"></p>
                </v-row>
            </v-col>
        </v-container>
        <v-container class = "bizniz-svg-container">
            <v-col>
                <v-row>
                    <svg class="bizniz-svg"></svg>
                </v-row>
            </v-col>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "Bizniz",
        data: function() {
            return{
             message: "Why we do what we do may kinda sounds obvious but it is a solution with two parts. Carbon capture for the sake of the " +
                 "environment obviously, and carbon selling which is kinda like carbon usage just that we dont know how to use " +
                 "it so thats someone elses problem I guess. Plus we want some say in how gets used so its not just for " +
                 "stuff that will put the c02 right back in the air anyway. So what ever here we talk about our 'businessmodel' and " +
                 "monies and stuff"
            }
        }

    }
</script>

<style scoped>

    .bizniz-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        padding-top: 10px;
    }

    .bizniz-text-container{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-size: 20px;
        color: #27214C;
    }

    .bizniz-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .bizniz-text{
        display: inline;
        font-family: "Trebuchet MS", serif;
        font-size: 18px;
        color: #2D2B1F;
    }

    .bizniz-svg{
        width: 400px;
        height: 400px;
        display: inline;
        background-color: #61BFF0;
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
