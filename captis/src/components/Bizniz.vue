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
    }

    .bizniz-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .bizniz-text{
        display: inline;
    }

    .bizniz-svg{
        width: 400px;
        height: 400px;
        display: inline;
        background-color: dodgerblue;
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
