<template>
    <v-container class="solution-container">
        <v-container class = "solution-svg-container">
            <v-col>
                <v-row>
                    <svg class="solution-svg"></svg>
                </v-row>
            </v-col>
        </v-container>
        <v-container class = "solution-text-container">
            <v-col>
                <v-row><h1 class="how">How</h1></v-row>
                <v-row>
                    <p class="solution-text">{{messagePart1}}</p>
                    <p class="solution-text">{{messagePart2}}</p>
<!--                    <p class="solution-text" v-dummy = "150"></p>-->
                </v-row>
            </v-col>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "Solution",
        data: function() {
            return {
                messagePart1: "The Captis process is the modern, economical way of capturing and storing post combustion CO2. " +
                    "An amine-based solvent is used to bind and absorb carbon dioxide from post-combustion exhaust gases. " +
                    "In an energy-efficient operation, the CO2 is then stripped off the absorbing material, transferred and " +
                    "stored at high pressure and low temperature in a cryogenic tank, ready for transportation and further useage. " +
                    "The solvent is recycled and re-enters the carbon capture cycle once more.",
                messagePart2: "This operation is specialized for offshore operations and can be used on drilling rigs, oil platforms, transport vessels and more. " +
                    "The solution is scalable to any amount of CO2 desired to capture and store. " +
                    "This is possible due to the compact design of the CCS unit. " +
                    "For instance, a unit on a drilling rig, capturing 20 tons of CO2 per week is dimensioned at around 5 by 2 meters on the ground and a height of just 3 meters. " +
                    "The storage units come in the design of regular shipping containers for simple and standardized handling."
            }
        }
    }
</script>

<style scoped>
    .how{
        width: 100%;
    }
    .solution-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        padding-top: 10px;
    }

    .solution-text-container{
        display: flex;
        flex-direction: column;
        text-align: right;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-size: 20px;
        color: #27214C;
    }

    .solution-svg-container{
        display: flex;
        flex-direction: column-reverse;
    }

    .solution-text{
        display: inline;
        text-align: right;
        font-family: "Trebuchet MS", serif;
        font-size: 20px;
        color: #2D2B1F;
    }

    .solution-svg{
        width: 400px;
        height: 600px;
        display: inline;
        background-color: #61BFF0;
        /*background-color: white;*/
        margin-left: 20px;
        margin-top: 30px;
    }
</style>
