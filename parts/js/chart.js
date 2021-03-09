function getChart(data, total) {
// set the dimensions and margins of the graph
var margin = 20;
var $container = $('#outputarea'),
    width = $container.width() * 0.5,
    height = width;

// append the svg object to the body of the page
var chart = d3.select("#chart")
.append("svg")
    .attr("width", width + margin * 2)
    .attr("height", height + margin * 2)
.append("g")
    .attr("transform",
        "translate(" + margin + "," + margin + ")");


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

}