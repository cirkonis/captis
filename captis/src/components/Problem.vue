<template>
    <div class="container">
        <div class="row header">
            <p>What</p>
        </div>
        <div class="row sub-header">
            <p>is captis about</p>
        </div>
        <div class="row first col-12">
            <div class="column message col-6">
                <p>{{messagePart1}}</p>
            </div>
            <div class="column image col-4">
                <img class="the-image" src="../assets/marketPics/hiTechUnit.png" alt="Captis Tech">
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
        name: "Problem",
        data: function () {
            return {
                messagePart1: "Captis provides a solution for carbon capture specialized for offshore operations and can be used on " +
                    "drilling rigs, oil platforms, transport vessels and more. We focus our efforts on the North Sea and " +
                    "Norwegian waters, though with a product that is applicable all around the world. ",

                messagePart2: "Utilising the most " +
                    "energy-efficient process available, CCS is possible at a rate below the cost of the carbon tax, " +
                    "providing an excellent financial incentive besides the increased corporate social responsibility value for customers.",

                messagePart3: "Captis consists of a team of interdisciplinary engineers and entrepreneurs in the Capitol Region of " +
                    "Denmark, established from current and former students of the acclaimed DTU.",
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
        position: relative;
        right: 5%;
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
    .the-image{
        height: auto;
        width: 50vw
    }

</style>
