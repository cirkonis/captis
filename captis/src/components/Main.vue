<template>
    <div class="main-container">
        <div class="row logo-row">
            <img class="captisLogo" src="../assets/captisLogo.svg">
        </div>
            <div class ="row words-row">
                <div class="message-header">
                    <p>Offshore Carbon Capture</p>
                </div>
                <div class="message-subheader">
                    <p>A cost efficient and effective solution to a problem that affects us all.
                    Contact us to find out more or read on below to learn how it is we do what we do.</p>
                </div>
                <v-btn class="white--text"
                       color="#61BFF0"
                       elevation="2"
                       large
                       rounded
                       style="font-family: titillium"
                       v-on:click="getContact()">Say Hello</v-btn>
            </div>
        </div>
</template>
<script>
    export default {
        methods: {
            carbonCapture() {
                this.carbonCaptureTrigger = !this.carbonCaptureTrigger;
                this.buttonExist = false;
                this.$emit('childToParent', this.carbonCaptureTrigger);
                console.log('easteregg')
                return this.carbonCaptureTrigger;
            },

            getContact() {
                console.log('buttonworks');
                this.$copyText('hello@captis.dk').then(function () {
                    alert('hello@captis.dk copied to your clipboard!');
                }, function () {
                    alert('Could not retrieve email');
                });
            }
        },
    }
</script>
<style>
    .main-container{
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 2% 2% 1% 2%;
    }
    .captisLogo{
        width: 60vh;
        height: 60vh;
        position: relative;
    }
    .logo-row{
        justify-content: center;
        align-content: center;
        flex: 70%;
        height: 60vh;
        padding: 5% 0 0 0;
    }

    .words-row{
        position: relative;
        flex: 30%;
        /*top: 25%;*/
        justify-content: center;
        align-content: center;
        text-align: center;
        padding: .5% 1% 1% 1%;
    }

    .message-header{
        font-family: titillium;
        font-size: 4vw;
        color: #61BFF0;
        height: 4vw;
        padding: 0 0 0 0;
        margin: 0 0 2% 0;

    }
    .message-subheader{
        font-family: titillium;
        font-size: 2vw;
        color: #2D2B1F;
        text-align: center;
    }
</style>

<!--<template>-->
<!--    <div class="-->
<!--            mb-xs-4-->
<!--            mb-sm-5-->
<!--            mb-md-7-->
<!--            mb-lg-10-->
<!--            mb-xl-16-->
<!--">-->
<!--        <div class="logo">-->
<!--            <div class="easter-egg" v-if="this.buttonExist">-->
<!--            <button class="captis-button-->
<!--            mt-xs-7-->
<!--            mt-sm-8-->
<!--            mt-md-10-->
<!--            mt-lg-14-->
<!--            mt-xl-16" v-on:click="carbonCapture()">-->
<!--            </button>-->
<!--            </div>-->
<!--            <v-img-->
<!--                    alt="Vuetify Logo"-->
<!--                    class="mt-6"-->
<!--                    contain-->
<!--                    src="../../src/assets/captisLogo.svg"-->
<!--                    :width="size"-->
<!--                    :height="size"-->

<!--            />-->
<!--        </div>-->
<!--    <v-container class="main">-->
<!--    <v-col cols="12">-->
<!--        <v-row>-->
<!--        <h1 class ="the-header text-xs-h6 text-sm-h5 text-md-h4 text-lg-h text-xl-h2">Offshore Carbon Capture</h1>-->
<!--        </v-row>-->
<!--        <v-row justify="center">-->
<!--            <p class="-->
<!--        flufferMcflufferton text-xs-body-1-->
<!--        text-sm-body-2-->
<!--        text-md-h6-->
<!--        text-lg-h5-->
<!--        text-xl-h4-->
<!--">{{message}}</p>-->
<!--        </v-row>-->
<!--        <v-row class="contact-button">-->

<!--        </v-row>-->
<!--    </v-col>-->
<!--    </v-container>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    export default{-->
<!--        data: function(){-->
<!--            return{-->
<!--                buttonExist: true,-->
<!--                props:{-->
<!--                    carbonCaptureTrigger: false,-->
<!--                },-->
<!--             message: "A cost efficient and effective solution to a problem that affects us all. Contact us to find out more or read on below to learn how it is we do what we do."-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            size: function() {-->
<!--                switch (this.$vuetify.breakpoint.name) {-->
<!--                    case 'xs':-->
<!--                        return 150;-->
<!--                    case 'sm':-->
<!--                        return 200;-->
<!--                    case 'md':-->
<!--                        return 300;-->
<!--                    case 'lg':-->
<!--                        return 400;-->
<!--                    case 'xl':-->
<!--                        return 500;-->
<!--                    default:-->
<!--                        return 300;-->
<!--                }-->
<!--            },-->
<!--        },-->
<!--    }-->
<!--</script>-->
<!--<style>-->
<!--    .captis-button{-->
<!--        position: absolute;-->
<!--        width: 150px;-->
<!--        height: 300px;-->
<!--        background-color: transparent;-->
<!--        border-radius: 20%;-->
<!--        z-index: 3;-->
<!--        cursor: pointer;-->
<!--        outline: none;-->
<!--    }-->
<!--    captis-button:hover{-->
<!--        color: transparent;-->
<!--    }-->
<!--    .main{-->
<!--        display: flex;-->
<!--        align-content: center;-->
<!--        justify-content: center;-->
<!--    }-->
<!--    .easter-egg{-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        align-content: center;-->
<!--        position: relative;-->
<!--    }-->


<!--    .the-header{-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        align-content: center;-->
<!--        text-align: center;-->
<!--        font-family: Roboto!important;-->
<!--        font-size: 50px;-->
<!--        font-style: normal;-->
<!--        color: #61BFF0;-->
<!--        width: 100%;-->
<!--        padding-bottom: 5px;-->
<!--    }-->

<!--    .flufferMcflufferton{-->
<!--        text-align: center;-->
<!--        color: #2D2B1F;-->
<!--    }-->

<!--    .logo{-->
<!--        display: grid;-->
<!--        align-content: center;-->
<!--        justify-content: center;-->
<!--        margin-top: 20px;-->
<!--    }-->

<!--    .contact-button{-->
<!--        display: flex;-->
<!--        align-content: center;-->
<!--        justify-content: center;-->
<!--        width: 100%;-->
<!--        height: 50px;-->
<!--    }-->

<!--</style>-->
