<template>
    <div class="solution">
    <v-container class="solution-container">
        <v-container class = "solution-svg-container">
            <v-col>
                <v-row>
                    <svg class="solution-svg"></svg>
                </v-row>
            </v-col>
        </v-container>
        <v-container class = "solution-text-container">
            <v-col>
                <v-row><h1>Solution</h1></v-row>
                <v-row>
                    <p class="solution-text" v-dummy = "200"></p>
                </v-row>
            </v-col>
        </v-container>
    </v-container>
    </div>
</template>

<script>
    export default {
        name: "Solution"
    }
</script>

<style scoped>
    .solution-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
    }

    .solution-text-container{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-size: 20px;
        color: #27214C;
    }

    .solution-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .solution-text{
        display: inline;
        font-family: "Trebuchet MS", serif;
        font-size: 18px;
        color: #2D2B1F;
    }

    .solution-svg{
        width: 400px;
        height: 600px;
        display: inline;
        background-color: #61BFF0;
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
