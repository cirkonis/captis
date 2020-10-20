<template>
    <v-container class="svg-container">
        <svg class="carbon-svg">
            <g :id="nodes"></g>
            <g :id="links"></g>
        </svg>
    </v-container>
</template>

<script>
    import * as d3 from "d3";
    export default {
        name: "Carbon",
        data: function () {
            return {
                nodes: [
                    {
                    id: 1,
                    type: 'c1'
                },
                    {
                        id: 2,
                        type: 'c2'
                },
                    {
                        id: 3,
                        type: 'o'
                    }
                ],
                links: [
                    {
                        id: 10,
                        source: 1,
                        target: 2,
                    },
                    {
                        id: 11,
                        source: 3,
                        target: 1,
                    },
                ],
            }
        },
        mounted() {
           // this.makeGraph('.carbon-svg');
            let svg = d3.select('svg');
            // let width = svg.attr('width');
            // let height = svg.attr('height');
            let g = svg.append('g');
            let nodes = [
                { name: '湖南邵阳' },
                { name: '山东泰安' },
                { name: '广东阳江' },
                { name: '山西太原' },
                { name: '亮' },
                { name: '丽' },
                { name: '雪' },
                { name: '小明' },
                { name: '组长' }
            ];
            let edges = [
                { source: 0, target: 4, relation: '籍贯', value: 1.3 },
                { source: 4, target: 5, relation: '舍友', value: 1 },
                { source: 4, target: 6, relation: '舍友', value: 1 },
                { source: 4, target: 7, relation: '舍友', value: 1 },
                { source: 1, target: 6, relation: '籍贯', value: 2 },
                { source: 2, target: 5, relation: '籍贯', value: 0.9 },
                { source: 3, target: 7, relation: '籍贯', value: 1 },
                { source: 5, target: 6, relation: '同学', value: 1.6 },
                { source: 6, target: 7, relation: '朋友', value: 0.7 },
                { source: 6, target: 8, relation: '职责', value: 2 }
            ];
            let colorScale = d3.scaleOrdinal()
                .domain(d3.range(nodes.length))
                .range(d3.schemeCategory10);
            let forceSimulation = d3.forceSimulation()
                .force('link', d3.forceLink())
                .force('charge', d3.forceManyBody())
                .force('center', d3.forceCenter());
            forceSimulation.nodes(nodes)
                .on('tick', ticked);
            forceSimulation.force('link')
                .links(edges)
                .distance(function (d) { // 每一边的长度
                    return d.value * 100
                });
            forceSimulation.force('center')
                .x(150)
                .y(150);
            let links = g.append('g')
                .selectAll('line')
                .data(edges)
                .enter()
                .append('line')
                .attr('stroke', function (d, i) {
                    return colorScale(i)
                })
                .attr('stroke-width', 1);
            let linksText = g.append('g')
                .selectAll('text')
                .data(edges)
                .enter()
                .append('text')
                .text(function (d) {
                    return d.relation
                });
            let gs = g.selectAll('.circleText')
                .data(nodes)
                .enter()
                .append('g')
                .attr('transform', function (d) {
                    let cirX = d.x;
                    let cirY = d.y;
                    return 'translate(' + cirX + ',' + cirY + ')'
                })
                .call(d3.drag()
                    .on('start', started)
                    .on('drag', dragged)
                    .on('end', ended)
                );
            gs.append('circle')
                .attr('r', 10)
                .attr('fill', function (d, i) {
                    return colorScale(i)
                });
            gs.append('text')
                .attr('x', -10)
                .attr('y', -20)
                .attr('dy', 10)
                .text(function (d) {
                    return d.name
                });
            function ticked () {
                links
                    .attr('x1', function (d) { return d.source.x })
                    .attr('y1', function (d) { return d.source.y })
                    .attr('x2', function (d) { return d.target.x })
                    .attr('y2', function (d) { return d.target.y })
                linksText
                    .attr('x', function (d) { return (d.source.x + d.target.x) / 2 })
                    .attr('y', function (d) { return (d.source.y + d.target.y) / 2 })
                gs
                    .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
            }
            function started (d) {
                if (!d3.event.active) {
                    forceSimulation.alphaTarget(0.8).restart() // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0, 1]
                }
                d.fx = d.x;
                d.fy = d.y;
            }
            function dragged (d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }
            function ended (d) {
                if (!d3.event.active) {
                    forceSimulation.alphaTarget(0)
                }
                d.fx = null;
                d.fy = null;
            }
        },
        methods: {
            makeGraph(svgClass) {
                const links = this.links.map(d => Object.create(d));
                const nodes = this.nodes.map(d => Object.create(d));
                console.log('nodes on top');
                console.log(nodes);
                console.log('links on top');
                console.log(links);

                const simulation = d3.forceSimulation(nodes)
                    .force("link", d3.forceLink(links).id(d => d.id))
                    .force("charge", d3.forceManyBody())
                    .force("center", d3.forceCenter(100, 100));
                console.log('simulation');
                console.log(simulation);

                const svg = d3.select(svgClass);

                console.log('svg');
                console.log(svg);

                const link = svg.select('links')
                                .data(links)
                                .enter()
                                .append('line')
                                .attr('stroke', '#000000')
                                .attr('stroke-width', 1.5);

                console.log('link');
                console.log(link);
                const node = svg.select('nodes')
                                .data(nodes)
                                .enter()
                                .append('circle')
                                .attr('r', 20)
                                .attr('fill', '#000000');

                console.log('node');
                console.log(node);

                simulation.on("tick", () => {
                    link
                        .attr("x1", d => d.source.x)
                        .attr("y1", d => d.source.y)
                        .attr("x2", d => d.target.x)
                        .attr("y2", d => d.target.y);

                    node
                        .attr("cx", d => d.x)
                        .attr("cy", d => d.y);
                });
            },
        },
    }

</script>

<style>
    .svg-container{
        top: 5%;
        left: 5%;
        z-index: 0;
        display: flex;
        opacity: .3;
        width: 95%;
        height: 250px;
        border-radius: 40%;
        background-color: red;
    }
    .carbon-svg{
        width: 100%;
        height: 100%;
        background-color: blue;
        border-radius: 40%;
    }

</style>
