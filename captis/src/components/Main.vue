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
        </v-row>
        <v-row class="contact-button">
            <v-btn class="white--text"
                   color="#61BFF0"
                   elevation="2"
                   large
                   rounded
                   v-on:click="getContact()">Say Hello</v-btn>
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
             message: "A cost efficient and effective solution to a problem that affects us all. Contact us to find out more or read on below to learn how it is we do what we do."
            }
        },
        methods: {
            carbonCapture(){
                this.carbonCaptureTrigger = !this.carbonCaptureTrigger;
                this.buttonExist = false;
                this.$emit('childToParent', this.carbonCaptureTrigger);
                return this.carbonCaptureTrigger;
            },

            getContact(){
                console.log('buttonworks');
                this.$copyText('hello@captis.dk').then(function () {
                    alert('hello@captis.dk copied to your clipboard!' );
                }, function () {
                    alert('Could not retrieve email');
                });
            }
        },
    }
</script>
<style>
    .captis-button{
        position: absolute;
        top: 2%;
        right: 46%;
        width: 150px;
        height: 200px;
        background-color: transparent;
        border-radius: 20%;
        z-index: 3;
        cursor: pointer;
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

    .contact-button{
        display: flex;
        align-content: center;
        justify-content: center;
        width: 100%;
        height: 50px;
    }
</style>
