<template>
    <v-container class="solution-container">
        <v-card
                class="mx-auto"
                max-width=100%
                elevation="0"
                color="transparent"
        >
            <v-list-item>
                <v-list-item-avatar
                        tile
                        size="500"
                        color="transparent"
                >
                    <img src="../assets/marketPics/solution.png">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="how">HOW</v-list-item-title>
                    <v-list-item-title class="title mb-1 text subtitle">we do what we do</v-list-item-title>
                    <v-list-item-content class="solution-text text">
                        <p class="solution-text">{{messagePart1}}</p>
                    </v-list-item-content>
                    <v-list-item-content class="solution-text text">
                        <p class="solution-text">{{messagePart2}}</p>
                    </v-list-item-content>
                </v-list-item-content>


            </v-list-item>
        </v-card>
<!--        <v-container class = "solution-svg-container">-->
<!--            <v-col>-->
<!--                <v-row>-->
<!--                    <svg class="solution-svg"></svg>-->
<!--                </v-row>-->
<!--            </v-col>-->
<!--        </v-container>-->
<!--        <v-container class = "solution-text-container">-->
<!--            <v-col>-->
<!--                <v-row><h1 class="how">How</h1></v-row>-->
<!--                <v-row>-->
<!--                    <p class="solution-text">{{messagePart1}}</p>-->
<!--                    <p class="solution-text">{{messagePart2}}</p>-->
<!--&lt;!&ndash;                    <p class="solution-text" v-dummy = "150"></p>&ndash;&gt;-->
<!--                </v-row>-->
<!--            </v-col>-->
<!--        </v-container>-->
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
        display: flex;
        flex-direction: column;
        text-align: right;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        color: #27214C;
    }
    .subtitle{
        display: flex;
        flex-direction: column;
        text-align: right;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        color: #61BFF0;
    }
    .solution-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        padding-top: 10px;
        height: 500px;
    }

    .solution-text{
        display: inline;
        text-align: right;
        font-family: "Trebuchet MS", serif;
        font-size: 20px;
        color: #2D2B1F;
        background-color: white;
    }

    /*.solution-text-container{*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    text-align: right;*/
    /*    font-family: "Trebuchet MS";*/
    /*    font-style: normal;*/
    /*    font-size: 20px;*/
    /*    color: #27214C;*/
    /*}*/

    /*.solution-svg-container{*/
    /*    display: flex;*/
    /*    flex-direction: column-reverse;*/
    /*}*/

    /*.solution-text{*/
    /*    display: inline;*/
    /*    text-align: right;*/
    /*    font-family: "Trebuchet MS", serif;*/
    /*    font-size: 20px;*/
    /*    color: #2D2B1F;*/
    /*}*/

    /*.solution-svg{*/
    /*    width: 400px;*/
    /*    height: 600px;*/
    /*    display: inline;*/
    /*    background-color: #61BFF0;*/
    /*    !*background-color: white;*!*/
    /*    margin-left: 20px;*/
    /*    margin-top: 30px;*/
    /*}*/
</style>
