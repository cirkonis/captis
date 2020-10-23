<template>
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
    }

    .solution-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .solution-text{
        display: inline;
    }

    .solution-svg{
        width: 400px;
        height: 600px;
        display: inline;
        background-color: dodgerblue;
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
