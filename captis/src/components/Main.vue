<template>
    <div class="
            mb-xs-4
            mb-sm-5
            mb-md-7
            mb-lg-10
            mb-xl-16
">
        <div class="logo">
            <div class="easter-egg
      " v-if="this.buttonExist">
            <button class="captis-button
            mt-xs-7
            mt-sm-8
            mt-md-10
            mt-lg-14
            mt-xl-16" v-on:click="carbonCapture()">
            </button>
            </div>
            <v-img
                    alt="Vuetify Logo"
                    class="mt-6"
                    contain
                    src="../../src/assets/captisLogo.svg"
                    transition="scale-transition"
                    :width="size"
                    :height="size"

            />
        </div>
    <v-container class="main">
    <v-col cols="12">
        <v-row>
        <h1 class ="the-header
             text-xs-h6
        text-sm-h5
        text-md-h4
        text-lg-h3
        text-xl-h2
">Offshore Carbon Capture</h1>
        </v-row>
        <v-row justify="center">
            <p class="flufferMcflufferton
            text-xs-body-1
        text-sm-body-2
        text-md-h6
        text-lg-h5
        text-xl-h4
">{{message}}</p>
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
                console.log('easteregg')
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
        computed: {
            size: function() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 150;
                    case 'sm':
                        return 200;
                    case 'md':
                        return 300;
                    case 'lg':
                        return 400;
                    case 'xl':
                        return 500;
                    default:
                        return 300;
                }
            },
        },
    }
</script>
<style>
    .captis-button{
        position: absolute;
        width: 150px;
        height: 300px;
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
    .easter-egg{
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
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
        display: grid;
        align-content: center;
        justify-content: center;
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
