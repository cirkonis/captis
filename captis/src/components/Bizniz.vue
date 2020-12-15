<template>
    <div class="container">
        <div class="row header">
            <p>Why</p>
        </div>
        <div class="row sub-header">
            <p>we do it</p>
        </div>
        <div class="row first col-12">
            <div class="column message col-6">
                <p>{{messagePart1}}</p>
            </div>
            <div class="column image col-4">
                <img class="un-sustain" src="../assets/marketPics/unSustain.png" alt="Sustainability Goals">
            </div>
        </div>
        <div class="row second">
            <div class="column">
                <p>{{messagePart2}}</p>
            </div>
        </div>
        <div class="row third">
            <div class="column">
                <p>{{messagePart3}}</p>
            </div>
        </div>
        </div>
</template>

<script>
    export default {
        name: "Bizniz",
        data: function () {
            return {
                messagePart1: "How impactful the implementation of this solution can be is visible by the sheer amount of UN Sustainability Development Goals that are influenced. Goal 7 is maybe the most obvious impact, but due to the significance of the reduction of carbon emissions to fulfil the aim of the Paris Climate Agreement, several other SDG´s are also affected.",
                messagePart2: "To act on climate change and stop the warming of the planet, carbon capture is essential. If the trend of the rise of the amount of CO2 in the atmosphere can be mitigated and reversed, the stability of eco-systems and life both on land and below water can be secured and ongoing species extinction can be stopped.",
                messagePart3: "The Paris Climate Agreement states that the goal of median warming of 2°C maximum is only achievable with the use of CCS. It is because of this importance that broad use of this technology in all industrial sectors worldwide is necessary."
            }
        },
    }
</script>

<style scoped>
    .container {
        padding: 5% 0 0 0;
    }

    .header {
        font-family: titillium;
        font-size: 4vw;
        height: 4vw;
        color: #27214C;
        padding: 0 0 0 2%;
        margin: 0 0 1% 0;
        text-transform: uppercase;
    }

    .sub-header {
        font-family: titillium;
        font-size: 3vw;
        hieght: 3vw;
        color: #0074b3;
        margin: 0 2% 0 2%;
        padding: 0 2% 0 2%;
        text-transform: capitalize;
    }

    .row {
        display: flex;
        padding: 0 3% 0 5%;
    }

    .column {
        display: flex;
        font-family: titillium;
        color: #2D2B1F;
        font-size: 2.1vw;
        padding: 0 5% 0 5%;
        margin: 0 0 0 0;
    }

    .first .message {
        flex: 50%;
    }

    .first .image {
        flex: 50%;
        margin: 0 0 1% 0;
    }
    .un-sustain{
        width: 50vw;
        /*height: auto;*/
        position: relative;
        bottom: 6%;
        right: 20%;
    }
    .row::after {
        content: "";
        clear: both;
        display: table;
    }

    .second .column {
        flex: 100%;
    }

    .third .column {
        flex: 100%;
    }
</style>
