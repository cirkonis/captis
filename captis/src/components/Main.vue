<template>
    <div class="main">
        <div class="logo">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="../../src/assets/captisLogo.svg"
                    transition="scale-transition"
                    width="350"
                    height="350"
            />
        </div>
        <Carbon/>
    <v-container class="main-container">
    <v-col cols="12">
        <v-row>
        <h1 class ="the-header">Off Shore Carbon Capture</h1>
        </v-row>
        <v-row>
            <p class="flufferMcflufferton" v-dummy = "100"></p>
        </v-row>
    </v-col>
    </v-container>
        <Problem/>
        <Solution/>
        <Bizniz/>
        <WhoWeAre/>
    </div>
</template>
<script>
    import Carbon from "./Carbon";
    import Problem from "./Problem";
    import Solution from "./Solution";
    import Bizniz from "./Bizniz";
    import WhoWeAre from "./WhoWeAre";
    export default {
        components: {WhoWeAre, Bizniz, Solution, Problem, Carbon}
    }
</script>
<style>
    .main-container{
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: -65px;
    }
    .the-header{
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        text-anchor: middle;
        width: 100%;
        justify-content: center;
        align-content: center;
        font-family: "Trebuchet MS";
        font-size: 50px;
        font-style: normal;
        color: #61BFF0;
    }

    .flufferMcflufferton{
        text-align: center;
        font-family: "Trebuchet MS";
        font-size: 20px;
        font-style: normal;
        darkcolor: #2D2B1F;
    }
    .logo{
        display: flex;
        align-content: center;
        justify-content: center;
        top:5%;
        left: 35%;
        margin-top: 20px;
    }
</style>
