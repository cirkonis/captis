<template>
    <v-container class="svg-container">
        <svg class="carbon-svg">
        </svg>
    </v-container>
</template>

<script>
    import * as d3 from "d3";
    export default {
        name: "Carbon",

        data: function () {
            return {}
        },
        mounted() {
            let svg = d3.select('.carbon-svg');
            let g = svg.append('g');
            let bonds = [];
            let numNodes = Math.pow(3, 5);
            let nodes = [];
                for (let i = 0; i < numNodes; i += 3) {
                    nodes.push({id: i, type: 'c1'});
                    nodes.push({id: i + 1, type: 'c2'});
                    nodes.push({id: i + 2, type: 'o'});
                    bonds.push({source: i, target: i+2});
                    bonds.push({source: i + 1, target: i+2});
                }
            let edges = bonds;
            console.log(nodes);
            console.log(edges);
            let forceSimulation = d3.forceSimulation()
                .force('link', d3.forceLink())
                .force('charge', d3.forceManyBody())
                .force('center', d3.forceCenter());
            forceSimulation.nodes(nodes)
                .on('tick', ticked);
            forceSimulation.force('link')
                .links(edges)
                .distance(.5);
            forceSimulation.force('center')
                .x(window.innerWidth / 2)
                .y(125);
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
                links
                    .attr('x1', function (d) { return d.source.x })
                    .attr('y1', function (d) { return d.source.y })
                    .attr('x2', function (d) { return d.target.x })
                    .attr('y2', function (d) { return d.target.y });
                gs
                    .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
            }
        },
    }

</script>

<style>
    .svg-container{
        position: absolute;
        top: 0%;
        left: 5%;
        z-index: 0;
        display: flex;
        opacity: .3;
        width: 95%;
        height: 350px;
        border-radius: 40%;
    }
    .carbon-svg{
        width: 100%;
        height: 100%;
        border-radius: 40%;
    }

</style>
