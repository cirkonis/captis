<template>
    <v-container class="bizniz-container">
        <v-container class = "bizniz-text-container">
            <v-col>
                <v-row><h1>Business Stuffs</h1></v-row>
                <v-row>
                    <p class="bizniz-text" v-dummy = "200"></p>
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
        name: "Bizniz"
    }
</script>

<style scoped>

    .bizniz-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
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
