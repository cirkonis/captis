<template>
    <div>
<v-container class="problem-container">
    <v-container class = "problem-text-container">
        <v-col>
        <v-row><h1>Where</h1></v-row>
            <v-row>
                <p class="problem-text">{{message}}</p>
                <p class="problem-text" v-dummy = "150"></p>
            </v-row>
        </v-col>
    </v-container>
    <v-container class = "problem-svg-container">
        <v-col>
            <v-row>
               <svg class="problem-svg"></svg>
            </v-row>
        </v-col>
    </v-container>
</v-container>
    </div>
</template>

<script>
    export default {
        name: "Problem",
        data: function() {
            return{
             message: "Here there be monsters lad. The seas and what not. Why a specific geological location?"
            }
        }
    }
</script>

<style scoped>

    .problem-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        padding-top: 10px;
    }

    .problem-text-container{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-size: 20px;
        color: #27214C;
    }

    .problem-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .problem-text{
        display: inline;
        font-family: "Trebuchet MS", serif;
        font-size: 18px;
        color: #2D2B1F;
    }

    .problem-svg{
        width: 400px;
        height: 600px;
        display: inline;
        background-color: #61BFF0;
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
