<template>
    <v-container class="solution-container
                       px-16
                       my-10
                            " col="10">
        <v-card
                :class="height"
                elevation="0"
                color="transparent"
        >
            <v-list-item>
                <v-list-item-avatar
                        tile
                        :size="size"
                        color="transparent"
                >
                    <img src="../assets/marketPics/unit.png">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="how
        text-xs-h6
        text-sm-h5
        text-md-h4
        text-lg-h3
        text-xl-h2
        text-justify">HOW</v-list-item-title>
                    <v-list-item-title class="title mb-1 text subtitle
        text-xs-body-1
        text-sm-h6
        text-md-h5
        text-lg-h4
        text-xl-h3
        text-justify">we do what we do</v-list-item-title>
                    <v-list-item-content class="solution-text text
        text-xs-body-2
        text-sm-body-1
        text-md-h6
        text-lg-h4
        text-xl-h3
        text-justify">
                        <p class="solution-text">{{messagePart1}}</p>
                    </v-list-item-content>
                    <v-list-item-content class="solution-text text
        text-xs-body-2
        text-sm-body-1
        text-md-h6
        text-lg-h4
        text-xl-h3
        text-justify">
                        <p class="solution-text">{{messagePart2}}</p>
                    </v-list-item-content>
                </v-list-item-content>
            </v-list-item>
        </v-card>
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
                messagePart2:
                    "The solution is scalable to any amount of CO2 desired to capture and store. " +
                    "This is possible due to the compact design of the CCS unit. " +
                    "For instance, a unit on a drilling rig, capturing 20 tons of CO2 per week is dimensioned at around 5 by 2 meters on the ground and a height of just 3 meters. " +
                    "The storage units come in the design of regular shipping containers for simple and standardized handling."
            }
        },
        computed: {
            height: function() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 1000;
                    case 'sm':
                        return 700;
                    case 'md':
                        return 600;
                    case 'lg':
                        return 900;
                    case 'xl':
                        return 1000;
                    default:
                        return 900;
                }
            },

            size: function() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 0;
                    case 'sm':
                        return 200;
                    case 'md':
                        return 400;
                    case 'lg':
                        return 500;
                    case 'xl':
                        return 800;
                    default:
                        return 300;
                }
            },
        },
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
        color: #27214C;
    }
    .subtitle{
        display: flex;
        flex-direction: column;
        text-align: right;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-weight: bold;
        color: #61BFF0;
    }
    .solution-container{
        display: flex;
        /*justify-content: center;*/
        /*align-content: space-between;*/
        padding-top: 10px;
    }

    .solution-text{
        display: inline;
        text-align: right;
        font-family: "Trebuchet MS", serif;
        color: #2D2B1F;
        background-color: white;
        line-height: 1.2;
    }
</style>
