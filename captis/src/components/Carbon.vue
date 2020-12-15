<template>
    <v-container class="svg-container mt-8" width="100vw">
        <svg class="carbon-svg" width="100vw"></svg>
    </v-container>
</template>

<script>
    import * as d3 from "d3";
    export default {
        name: "Carbon",
        data: function () {
            return {
            }
        },
        mounted() {
            this.makeSumCarbon('.carbon-svg', -10, 3000);
        },
        methods: {
            makeSumCarbon(svgTag, repulsionStrength, timeOut) {
                let svg = d3.select(svgTag);
                let g = svg.append('g');
                let radius = 2;
                let width = innerWidth - 100;
                let height = 200;
                let bonds = [];
                let numNodes = Math.pow(3, 6);
                let nodes = [];
                for (let i = 0; i < numNodes; i += 3) {
                    nodes.push({id: i, type: 'c1'});
                    nodes.push({id: i + 1, type: 'c2'});
                    nodes.push({id: i + 2, type: 'o'});
                    bonds.push({source: i, target: i + 2});
                    bonds.push({source: i + 1, target: i + 2});
                }
                let edges = bonds;

                let forceSimulation = d3.forceSimulation(nodes)
                    .force('link', d3.forceLink().strength(1.3))
                    .force('charge', d3.forceManyBody().strength(repulsionStrength))
                    .force('center', d3.forceCenter());
                forceSimulation.nodes(nodes)
                    .on('tick', ticked);
                forceSimulation.force('link')
                    .links(edges)
                    .distance(.2);
                forceSimulation.force('center')
                    .x(width / 2)
                    .y(height);
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
                    .attr('r', radius)
                    .attr('fill', node => {
                        if (node.type === 'o') {
                            return '#171616'
                        } else {
                            return '#D73D1C'
                        }
                    });


                function ticked() {
                    gs
                        .attr('transform', function (d) {
                            return 'translate(' + d.x + ',' + d.y + ')'
                        });

                    links
                        .attr('x1', function (d) {
                            return d.source.x
                        })
                        .attr('y1', function (d) {
                            return d.source.y
                        })
                        .attr('x2', function (d) {
                            return d.target.x
                        })
                        .attr('y2', function (d) {
                            return d.target.y
                        });
                }
                setTimeout( function () {
                    forceSimulation.stop();
                    forceSimulation.force('charge').strength(55);
                    forceSimulation.force('link')
                        .links(edges)
                        .distance(.1);
                    forceSimulation.restart();
                    setTimeout(function() {
                        forceSimulation.stop();
                        forceSimulation.force('charge').strength(.6);
                        forceSimulation.force('link')
                            .links(edges)
                            .distance(.1);
                        forceSimulation.restart();
                    }, 2200);
                    setTimeout(function() {d3.select(svgTag).transition().style('opacity', 0);}, 8000);
                }, timeOut);
            }

        },
        computed: {
            height: function () {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 300;
                    case 'sm':
                        return 600;
                    case 'md':
                        return 900;
                    case 'lg':
                        return 1200;
                    case 'xl':
                        return 1500;
                    default:
                        return 300;
                }
            },
            width: function () {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return 300 + "px";
                    case 'sm':
                        return 500 + "px";
                    case 'md':
                        return 1000 + "px";
                    case 'lg':
                        return 1500 + "px";
                    case 'xl':
                        return 2000 + "px";
                    default:
                        return 1000 + "px";
                }
            },
        },
    }

</script>

<style>
    .svg-container{
        position: absolute;
        display: flex;
        justify-content: center;
        top:0;
        opacity: .3;
        z-index: 0;
        height: 100vh;
    }

    .carbon-svg {
        height: 100%;
        z-index: -1;
    }

</style>
