<template>
    <v-container class="solution-container">
        <v-card
                :width= "width"
                :height="height"
                elevation="0"
                color="transparent"
        >
            <v-list-item>
                <v-list-item-content>
                            <v-list-item-title class="how">WHY</v-list-item-title>
                    <v-list-item-title class="title mb-1 text subtitle">we want to do it</v-list-item-title>
                    <v-list-item-content class="solution-text text">
                            <p class="solution-text">{{messagePart1}}</p>
                    </v-list-item-content>
                    <v-list-item-content class="solution-text text">
                        <p class="solution-text">{{messagePart2}}</p>
                    </v-list-item-content>
<!--                    <v-list-item-content class="solution-text text">-->
<!--                        <p class="solution-text">{{messagePart3}}</p>-->
<!--                    </v-list-item-content>-->
                </v-list-item-content>
                <v-list-item-avatar
                        tile
                        size="500"
                        color="transparent"
                >
                    <img src="../assets/marketPics/unSustain.png">
                </v-list-item-avatar>
            </v-list-item>
        </v-card>
    </v-container>
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
        computed: {
            height: function() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 220;
                    case 'sm':
                        return 400;
                    case 'md':
                        return 500;
                    case 'lg':
                        return 600;
                    case 'xl':
                        return 800;
                    default:
                        return 500;
                }
            },
                width: function() {
                    switch (this.$vuetify.breakpoint.name) {
                        case 'xs':
                            return 600;
                        case 'sm':
                            return 960;
                        case 'md':
                            return 1264;
                        case 'lg':
                            return 1904;
                        case 'xl':
                            return 2200;
                        default:
                            return 1264;
                    }
            },
        },
    }
</script>

<style scoped>
    .how{
        display: flex;
        flex-direction: column;
        text-align: left;
        font-family: "Trebuchet MS";
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        color: #27214C;
    }
    .subtitle{
        display: flex;
        flex-direction: column;
        text-align: left;
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
        text-align: left;
        font-family: "Trebuchet MS", serif;
        font-size: 20px;
        color: #2D2B1F;
        background-color: white;
        line-height: 1.2;
    }
</style>
