<template>
    <v-container class="svg-container mt-16"  v-bind:style="styleObject">
        <div v-if="!this.carbonCapture" v-bind:style="styleObject" >
        <svg class="carbon-svg" >
        </svg>
        </div>

        <div v-if="this.carbonCapture" v-bind:style="styleObject" >
        <svg class="carbon-capture-svg" >
        </svg>
        </div>
    </v-container>
</template>

<script>
    import * as d3 from "d3";
    export default {
        name: "Carbon",
        props: ['carbonCapture',],
        data: function () {
            return {
                styleObject: {
                    width: this.width + "px",
                    height: this.height + "px",
                }
            }
        },
        mounted() {
            this.makeSumCarbon('.carbon-svg', -3);
        },
        watch: {
            carbonCapture: function (val) {
                this.carbonCapture = val;
                this.makeSumCarbon('.carbon-capture-svg', .1);
            },
        },
        methods: {
            makeSumCarbon(svgTag, repulsionStrength) {
                let svg = d3.select(svgTag);
                let g = svg.append('g');
                let radius = 2;
                let width = 1000;
                let height = 500;
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

                function box_force() {
                    for (var i = 0, n = nodes.length; i < n; ++i) {
                        const curr_node = nodes[i];
                        curr_node.x = Math.max(radius, Math.min(width - radius, curr_node.x));
                        curr_node.y = Math.max(radius, Math.min(height - radius, curr_node.y));
                    }
                }


                let forceSimulation = d3.forceSimulation(nodes)
                    .force('link', d3.forceLink().strength(1.3))
                    .force('charge', d3.forceManyBody().strength(repulsionStrength))
                    .force('center', d3.forceCenter())
                    .force('box_force', box_force());
                forceSimulation.nodes(nodes)
                    .on('tick', ticked);
                forceSimulation.force('link')
                    .links(edges)
                    .distance(.5);
                forceSimulation.force('center')
                    .x(width / 2)
                    .y(height / 2);
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
                        return 200;
                    case 'sm':
                        return 200;
                    case 'md':
                        return 200;
                    case 'lg':
                        return 200;
                    case 'xl':
                        return 200;
                    default:
                        return 400;
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
        width: 1000px;
        height: 1000px;
    }

    .carbon-svg{
        width: 1000px;
        height: 1000px;
        z-index: -1;
    }

    .carbon-capture-svg{
        width: 1000px;
        height: 1000px;
        z-index: -1;
    }
</style>
