<template>
    <v-container class="svg-container">
        <svg class="carbon-svg">
        </svg>
    </v-container>
</template>

<script>
    import * as d3 from 'd3';
    export default {
        name: "Carbon",
        data: function(){
            return {
                fuck: "you",
                cNode1: [{
                    id: 1,
                }],
                cNode2: [
                    {
                        id:2,
                    }
                ],
                oNode: [
                    {
                        id:3
                    }
                ],
                links: [
                    {
                        source: 1,
                        target: 2,
                    },
                    {
                        source: 3,
                        target: 1,
                    },
                ],
        }
        },
        mounted(){
            this.fuckYou();
            this.makeGraph();
        },
        methods: {
         fuckYou(){
             console.log(this.fuck);
         },
            makeGraph(){
             const nodes = this.nodes;
             const links = this.links;
             const svg = d3.select('.carbon-svg')
                 .append('circle')
                 .attr('r', 50)
                 .attr('cx', 200)
                 .attr('cy', 40);

             const force = svg.force()
                .nodes(nodes)
                .links(links);

             console.log(force);

            }
        },
    }

</script>

<style scoped>
    .svg-container{
        position: fixed;
        top: 2.5%;
        left: 5%;
        z-index: 0;
        display: flex;
        opacity: .3;
        width: 85%;
        height: 250px;
        border-radius: 40%;
    }
    .carbon-svg{
        width: 100%;
        height: 100%;
    }

</style>
