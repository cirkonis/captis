<template>
    <div>
        <div class="logo">
            <div v-if="this.buttonExist">
            <button class="captis-button" v-on:click="carbonCapture()">
            </button>
            </div>
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
            <p class="flufferMcflufferton">{{message}}</p>
            <p class="flufferMcflufferton" v-dummy = "100"></p>
        </v-row>
    </v-col>
    </v-container>
    </div>
</template>
<script>
    export default{
        data: function(){
            return{
                buttonExist: true,
                props:{
                    carbonCaptureTrigger: false,
                },
             message: "Well hello there! Aren't you a curios one. Please excuse our mess, excessive use of lorem ipsum, grammar, spelling, and Mike's strange filler text." +
                 " We will be up and running in no time ;)"
            }
        },
        methods: {
            carbonCapture(){
                console.log('luky sucks a fat ass dick and my button works from main :) ');
                this.carbonCaptureTrigger = !this.carbonCaptureTrigger;
                console.log(this.carbonCaptureTrigger);
                this.buttonExist = false;
                this.$emit('childToParent', this.carbonCaptureTrigger);
                return this.carbonCaptureTrigger;
            }
        },
    }
</script>
<style>
    .captis-button{
        position: absolute;
        top: 115px;
        right: 47%;
        width: 70px;
        height: 70px;
        background-color: yellow;
        border-radius: 50%;
        z-index: 3;
        cursor: default;
        outline: none;
    }
    captis-button:hover{
        color: transparent;
    }
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
