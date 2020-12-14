<template>
    <div class="container">
        <div class="row header">
            <p>How</p>
        </div>
        <div class="row sub-header">
            <p>it is done</p>
        </div>
        <div class="row first col-12">
            <div class="column image col-6">
            </div>
            <div class="column message col-4">
                <p>{{messagePart1}}</p>
            </div>
        </div>
        <div class="row second">
            <div class="column">
                <p>{{messagePart2}}</p>
            </div>
        </div>
        <div class="row second">
            <div class="column">
                <p>{{messagePart3}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Solution",
        data: function () {
            return {
                messagePart1: "The Captis process is the modern, economical way of capturing and storing post combustion CO2. " +
                    "An amine-based solvent is used to bind and absorb carbon dioxide from post-combustion exhaust gases. ",

                messagePart2:
                    "In an energy-efficient operation, the CO2 is then stripped off the absorbing material, transferred and " +
                    "stored at high pressure and low temperature in a cryogenic tank, ready for transportation and further useage. " +
                    "The solvent is recycled and re-enters the carbon capture cycle once more.",
                messagePart3:
                    "The solution is scalable to any amount of CO2 desired to capture and store. " +
                    "This is possible due to the compact design of the CCS unit. " +
                    "For instance, a unit on a drilling rig, capturing 20 tons of CO2 per week is dimensioned at around 5 by 2 meters on the ground and a height of just 3 meters. " +
                    "The storage units come in the design of regular shipping containers for simple and standardized handling.",
            }
        },
    }
</script>

<style scoped>
    .container {
        padding: 5% 0 0 0;
    }

    .header {
        display: flex;
        flex-direction: row-reverse;
        font-family: titillium;
        font-size: 4vw;
        height: 4vw;
        color: #27214C;
        padding: 0 0 0 2%;
        margin: 0 4% 1% 0;
        text-transform: uppercase;
        text-align: right;
    }

    .sub-header {
        display: flex;
        flex-direction: row-reverse;
        font-family: titillium;
        font-size: 3vw;
        hieght: 3vw;
        color: #0074b3;
        margin: 0 6% 0 2%;
        padding: 0 4% 0 2%;
        text-transform: capitalize;
        text-align: right;
    }

    .row {
        display: flex;
        padding: 0 2% 0 2%;
    }

    .column {
        display: flex;
        flex-direction: row-reverse;
        justify-content: right;
        font-family: titillium;
        color: #2D2B1F;
        font-size: 2.1vw;
        padding: 0 5% 0 5%;
        margin: 0 0 0 0;
    }

    .first .message {
        padding: 0 0 0 3%;
    }

    .first .image {
        flex: 50%;
        background-image: url(../assets/marketPics/unit.png);
        background-size: contain;
        padding: 0 0 0 15%;
        margin: 0 0 0 15%;
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
