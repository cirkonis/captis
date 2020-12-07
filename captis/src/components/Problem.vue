<template>
    <v-container class="solution-container
                 px-16
                 my-10" col="10">
        <v-card
                :class="height"
                elevation="0"
                color="transparent"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="how
        text-xs-h6
        text-sm-h5
        text-md-h4
        text-lg-h3
        text-xl-h2
        text-justify">WHAT</v-list-item-title>
                    <v-list-item-title class="title mb-1 text subtitle
        text-xs-body-1
        text-sm-h6
        text-md-h5
        text-lg-h4
        text-xl-h3
        text-justify">is Captis about</v-list-item-title>
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
                    <v-list-item-content class="solution-text text
        text-xs-body-2
        text-sm-body-1
        text-md-h6
        text-lg-h4
        text-xl-h3
        text-justify">
                        <p class="solution-text">{{messagePart3}}</p>
                    </v-list-item-content>
                </v-list-item-content>
                <v-list-item-avatar
                        tile
                        :size="size"
                        color="transparent"
                >
                    <img src="../assets/marketPics/captisTech.png">
                </v-list-item-avatar>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Problem",
        data: function() {
            return {
               messagePart1: "Captis provides a solution for carbon capture specialized for offshore operations and can be used on " +
                    "drilling rigs, oil platforms, transport vessels and more. We focus our efforts on the North Sea and " +
                    "Norwegian waters, though with a product that is applicable all around the world. ",

               messagePart2:"Utilising the most " +
                    "energy-efficient process available, CCS is possible at a rate below the cost of the carbon tax, " +
                    "providing an excellent financial incentive besides the increased corporate social responsibility value for customers.",

               messagePart3: "Captis consists of a team of interdisciplinary engineers and entrepreneurs in the Capitol Region of " +
                        "Denmark, established from current and former students of the acclaimed DTU.",


                //
                // messagePart1: "We are an international team of dedicated engineers and entrepreneurs headquartered in the Capitol Region of Denmark.",
                //
                // messagePart2: "Captis provides a solution specialized for offshore operations and can be used on drilling rigs, oil platforms, transport vessels and more. " +
                //     "We focus our efforts in the North Sea and more specifically in Norwegian waters. " +
                //     "With the application of the most energy-efficient process available, CCS is possible at a rate below the cost of the carbon tax in Norway, " +
                //     "providing an additional financial incentive, besides the created corporate social responsibility value for customers.",

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
                        return 150;
                    case 'sm':
                        return 150;
                    case 'md':
                        return 400;
                    case 'lg':
                        return 500;
                    case 'xl':
                        return 600;
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
        color: #61BFF0;
    }
    .solution-container{
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        padding-top: 10px;
    }

    .solution-text{
        display: inline;
        text-align: left;
        font-family: "Trebuchet MS", serif;
        color: #2D2B1F;
        line-height: 1.2;
    }
</style>



<!--<template>-->
<!--    <div>-->
<!--<v-container class="problem-container">-->
<!--    <v-container class = "problem-text-container">-->
<!--        <v-col>-->
<!--        <v-row><h1>Where</h1></v-row>-->
<!--            <v-row>-->
<!--                <p class="problem-text">{{message}}</p>-->
<!--                <p class="problem-text" v-dummy = "150"></p>-->
<!--            </v-row>-->
<!--        </v-col>-->
<!--    </v-container>-->
<!--    <v-container class = "problem-svg-container">-->
<!--        <v-col>-->
<!--            <v-row>-->
<!--               <svg class="problem-svg"></svg>-->
<!--            </v-row>-->
<!--        </v-col>-->
<!--    </v-container>-->
<!--</v-container>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "Problem",-->
<!--        data: function() {-->
<!--            return{-->
<!--             message: "Here there be monsters lad. The seas and what not. Why a specific geological location?"-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--    .problem-container{-->
<!--        display: flex;-->
<!--        justify-content: space-between;-->
<!--        align-content: space-between;-->
<!--        padding-top: 10px;-->
<!--    }-->

<!--    .problem-text-container{-->
<!--        display: flex;-->
<!--        flex-direction: column;-->
<!--        text-align: center;-->
<!--        font-family: "Trebuchet MS";-->
<!--        font-style: normal;-->
<!--        font-size: 20px;-->
<!--        color: #27214C;-->
<!--    }-->

<!--    .problem-svg-container{-->
<!--        display: flex;-->
<!--        flex-direction: column-reverse;-->
<!--    }-->

<!--    .problem-text{-->
<!--        display: inline;-->
<!--        font-family: "Trebuchet MS", serif;-->
<!--        font-size: 18px;-->
<!--        color: #2D2B1F;-->
<!--    }-->

<!--    .problem-svg{-->
<!--        width: 400px;-->
<!--        height: 600px;-->
<!--        display: inline;-->
<!--        background-color: #61BFF0;-->
<!--        margin-left: 20px;-->
<!--        margin-top: 30px;-->
<!--    }-->
<!--</style>-->
