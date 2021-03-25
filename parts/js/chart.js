function getChart(data, total) {
// set the dimensions and margins of the graph
var margin = 20;
var $container = $('.outputarea'),
    width = $container.width(),
    height = width;

if (data.length > 50) { width = width * 2 }
if (data.length > 100) { width = width * 1.5 }

// append the svg object to the body of the page
var chart = d3.select("#chart")
.append("svg")
    .attr("width", width + margin * 2)
    .attr("height", height + margin * 2)
.append("g")
    .attr("transform",
        "translate(" + margin * 2 + "," + margin + ")");


const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, Math.max(...data)/total]);

chart.append('g').call(d3.axisLeft(yScale));

const xScale = d3.scaleBand()
    .range([0, width])
    .domain(data.map((item, index) => index))
    .padding(0.2)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

chart.selectAll()
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (item, index) => xScale(index))
    .attr('y', (item, index) => yScale(item/total))
    .attr('height', (item, index) => height - yScale(item/total))
    .attr('width', xScale.bandwidth())
    .attr('fill', "#5a6978")

chart.selectAll()
    .data(data)
    .enter()
    .append("text")
    .text((item, index) => item)
    .attr("x", (item, index) => xScale(index) + xScale.bandwidth() / 2)
    .attr("y", (item, index) => yScale(item/total) - 5)
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "14px")
    .attr("fill" , "black")
    .attr("text-anchor", "middle");

d3.selectAll("rect").on("mouseover", function(){
    d3.select(this).attr("opacity", .5)
}).on("mouseout", function(){
    d3.select(this).attr("opacity", 1)
});

}