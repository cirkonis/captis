<template>
    <v-container class="svg-container">
        <div class = svg-holder  v-if="!this.carbonCapture">
        <svg
                class="carbon-svg">
        </svg>
        </div>
        <div class = "svg-holder"  v-if="this.carbonCapture"></div>
        <svg
               class="carbon-capture-svg">
        </svg>

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
            this.makeSumCarbon('.carbon-svg', 130, 70, -22);
            this.makeSumCarbon('.carbon-svg', 2530, 70, -22);

            // let svg = d3.select('.carbon-svg');
            // let g = svg.append('g');
            // let radius = 1.5;
            // let width = window.innerWidth;
            // // let height = window.innerHeight;
            // let bonds = [];
            // let numNodes = Math.pow(3, 6);
            // let nodes = [];
            //     for (let i = 0; i < numNodes; i += 3) {
            //         nodes.push({id: i, type: 'c1'});
            //         nodes.push({id: i + 1, type: 'c2'});
            //         nodes.push({id: i + 2, type: 'o'});
            //         bonds.push({source: i, target: i+2});
            //         bonds.push({source: i + 1, target: i+2});
            //     }
            // let edges = bonds;
            //
            // // function box_force() {
            // //     for (var i = 0, n = nodes.length; i < n; ++i) {
            // //        const curr_node = nodes[i];
            // //         curr_node.x = Math.max(radius, Math.min(width - radius, curr_node.x));
            // //         curr_node.y = Math.max(radius, Math.min(height - radius, curr_node.y));
            // //     }
            // // }
            //
            //
            // let forceSimulation = d3.forceSimulation(nodes)
            //     .force('link', d3.forceLink().strength(1.3))
            //     .force('charge', d3.forceManyBody().strength(-22))
            //     .force('center', d3.forceCenter().strength(1));
            //     // .force('box_force', box_force());
            // forceSimulation.nodes(nodes)
            //     .on('tick', ticked);
            // forceSimulation.force('link')
            //     .links(edges)
            //     .distance(.5);
            // forceSimulation.force('center')
            //     .x(width / 2 - 70)
            //     .y(130);
            // let links = g.append('g')
            //     .selectAll('line')
            //     .data(edges)
            //     .enter()
            //     .append('line')
            //     .attr('stroke', '#6A6A6A')
            //     .attr('stroke-width', .5);
            // let gs = g.selectAll('.circleText')
            //     .data(nodes)
            //     .enter()
            //     .append('g')
            //     .attr('transform', function (d) {
            //         let cirX = d.x;
            //         let cirY = d.y;
            //         return 'translate(' + cirX + ',' + cirY + ')'
            //     });
            //
            // gs.append('circle')
            //     .attr('r', radius)
            //     .attr('fill', node => {if (node.type === 'o'){ return '#171616'} else { return '#D73D1C'}});
            //
            //
            // function ticked () {
            //     gs
            //      .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' });
            //
            //     links
            //         .attr('x1', function (d) { return d.source.x })
            //         .attr('y1', function (d) { return d.source.y })
            //         .attr('x2', function (d) { return d.target.x })
            //         .attr('y2', function (d) { return d.target.y });
            // }

        },
        watch: {
            carbonCapture: function (val) {
                this.carbonCapture = val;
                console.log('luky loves anal and value is passed in carbon ');
                console.log(this.carbonCapture);
                this.makeSumCarbon('.carbon-capture-svg',150, 55, 44);
            },
        },
         methods: {


                makeSumCarbon(svgTag, top, right, repulsionStrength){
                    let svg = d3.select(svgTag);
                    let g = svg.append('g');
                    let radius = 1.5;
                    let width = window.innerWidth;
                    // let height = window.innerHeight;
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

                    // function box_force() {
                    //     for (var i = 0, n = nodes.length; i < n; ++i) {
                    //        const curr_node = nodes[i];
                    //         curr_node.x = Math.max(radius, Math.min(width - radius, curr_node.x));
                    //         curr_node.y = Math.max(radius, Math.min(height - radius, curr_node.y));
                    //     }
                    // }


                    let forceSimulation = d3.forceSimulation(nodes)
                        .force('link', d3.forceLink().strength(1.3))
                        .force('charge', d3.forceManyBody().strength(repulsionStrength))
                        .force('center', d3.forceCenter());
                    // .force('box_force', box_force());
                    forceSimulation.nodes(nodes)
                        .on('tick', ticked);
                    forceSimulation.force('link')
                        .links(edges)
                        .distance(.5);
                    forceSimulation.force('center')
                        .x(width / 2 - right)
                        .y(top);
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
                        .attr('fill', node => {if (node.type === 'o'){ return '#171616'} else { return '#D73D1C'}});


                    function ticked () {
                        gs
                            .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' });

                        links
                            .attr('x1', function (d) { return d.source.x })
                            .attr('y1', function (d) { return d.source.y })
                            .attr('x2', function (d) { return d.target.x })
                            .attr('y2', function (d) { return d.target.y });
                    }

                }








         },
    }

</script>

<style>
    .svg-container{
        position: absolute;
        top: 0;
        left: 3.5%;
        display: flex;
        opacity: .3;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .carbon-svg{
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .carbon-capture-svg{
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .svg-holder{
        position: absolute;
        top: 0;
        left:3.5%;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

</style>

//USER: admin@captis.dk
// PASSWORD: captisownstheworld
