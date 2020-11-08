<template>
    <v-container class="svg-container">
        <svg class="carbon-svg">
        </svg>
        <button class="temp-button" v-on:click="isCarbonCaptured()">fffffuuuck luky</button>
    </v-container>
</template>

<script>
    import * as d3 from "d3";
    export default {
        name: "Carbon",
        props:['carbonCapture',],
        data: function () {
            return {}
        },
        mounted() {
            // let angle = 0;
            let svg = d3.select('.carbon-svg');
            let g = svg.append('g');
            let width = window.innerWidth;
            // let height = window.innerheight;
            let bonds = [];
            let numNodes = Math.pow(3, 6);
            let nodes = [];
                for (let i = 0; i < numNodes; i += 3) {
                    nodes.push({id: i, type: 'c1'});
                    nodes.push({id: i + 1, type: 'c2'});
                    nodes.push({id: i + 2, type: 'o'});
                    bonds.push({source: i, target: i+2});
                    bonds.push({source: i + 1, target: i+2});
                }
            let edges = bonds;
            let forceSimulation = d3.forceSimulation(nodes)
                .force('link', d3.forceLink().strength(1.3))
                .force('charge', d3.forceManyBody().strength(-20))
                .force('center', d3.forceCenter());
            forceSimulation.nodes(nodes)
                .on('tick', ticked);
            forceSimulation.force('link')
                .links(edges)
                .distance(.5);
            forceSimulation.force('center')
                .x(width / 2 - 50)
                .y(130);
            let links = g.append('g')
                .selectAll('line')
                .data(edges)
                .enter()
                .append('line')
                .attr('stroke', '#6A6A6A')
                .attr('stroke-width', .5);
            let gs = g.selectAll('.circleText')
                .data(nodes)
                .enter()
                .append('g')
                .attr('transform', function (d) {
                    let cirX = d.x;
                    let cirY = d.y;
                    return 'translate(' + cirX + ',' + cirY + ')'
                });

            gs.append('circle')
                .attr('r', 1.5)
                .attr('fill', node => {if (node.type === 'o'){ return '#171616'} else { return '#D73D1C'}});


            function ticked () {

                gs
                 .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' });

                links
                    .attr('x1', function (d) { return d.source.x })
                    .attr('y1', function (d) { return d.source.y })
                    .attr('x2', function (d) { return d.target.x })
                    .attr('y2', function (d) { return d.target.y });

                // angle += 1;
            }
        },
        watch: {
            carbonCapture: function(val){
                this.carbonCapture = val;
                console.log('luky loves anal and value is passed in carbon ');
                console.log(this.carbonCapture);
            }
        }
    }

</script>

<style>
    .svg-container{
        position: absolute;
        top: 0%;
        left: 3.5%;
        display: flex;
        opacity: .3;
        width: 100%;
        height: 100%;
        border-radius: 2%;
        z-index: 0;
    }

    .carbon-svg{
        width: 100%;
        height: 100%;
        border-radius: 2%;
    }

    .temp-button{
        position: absolute;
        width: 300px;
        height: 300px;
        top: 300px;
        color: yellow;
    }

</style>

//USER: admin@captis.dk
// PASSWORD: captisownstheworld
