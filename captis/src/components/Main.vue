<template>
    <div>
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
    <v-container class="main">

    <v-col cols="12">
        <v-row>
        <h1 class ="the-header">Offshore Carbon Capture</h1>
        </v-row>
        <v-row>
            <p class="flufferMcflufferton" v-dummy = "200"></p>
        </v-row>
    </v-col>
    </v-container>
    </div>
</template>
<script>
</script>
<style>
    .main{
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .the-header{
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        font-family: "Trebuchet MS";
        font-size: 50px;
        font-style: normal;
        color: #61BFF0;
        width: 100%;
        padding-bottom: 5px;
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
