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
                       color="#0074b3"
                       elevation="2"
                       large
                       rounded
                       style="font-family: titillium; font-weight: bold"
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
                    alert('hello@captis.dk copied to your clipboard. Looking forward to hearing form you!');
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
        padding: .5% 4% 1% 4%;
    }

    .message-header{
        font-family: titillium;
        font-size: 4vw;
        color: #0074b3;
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
