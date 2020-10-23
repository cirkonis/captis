<template>
<v-container class="problem-container">
    <v-container class = "problem-text-container">
        <v-col>
        <v-row><h1>Problem</h1></v-row>
            <v-row>
                <p class="problem-text" v-dummy = "200"></p>
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
</template>

<script>
    export default {
        name: "Problem"
    }
</script>

<style scoped>

    .problem-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
    }

    .problem-text-container{
        display: flex;
        flex-direction: column;
    }

    .problem-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .problem-text{
        display: inline;
    }

    .problem-svg{
        width: 400px;
        height: 600px;
        display: inline;
        background-color: dodgerblue;
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
