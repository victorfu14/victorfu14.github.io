function getChart(data, total) {
    // set the dimensions and margins of the graph
    var margin = 20;
    var $container = $('.outputarea'),
        width = $container.width(),
        height = width;

    minIdx = data.findIndex(val => val > 0)
    maxIdx = data.length - data.slice().reverse().findIndex(val => val > 0)

    var data_plot = []
    for (let i = minIdx; i < maxIdx; i++) {
        data_plot.push([i, data[i]])
    }
        
    if (data_plot.length > 50) { width = width * 2 }
    if (data_plot.length > 100) { width = width * 1.5 }

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
        .domain(Array.from({length: maxIdx - minIdx}, (_, i) => i + minIdx))
        .padding(0.2)
    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    chart.selectAll()
        .data(data_plot)
        .enter()
        .append('rect')
        .attr('x', (item, _) => xScale(item[0]))
        .attr('y', (item, _) => yScale(item[1] / total))
        .attr('height', (item, _) => height - yScale(item[1] / total))
        .attr('width', xScale.bandwidth())
        .attr('fill', "#5a6978")

    chart.selectAll()
        .data(data_plot)
        .enter()
        .append("text")
        .text((item, _) => item[1])
        .attr("x", (item, _) => xScale(item[0]) + xScale.bandwidth() / 2)
        .attr("y", (item, _) => yScale(item[1] / total) - 5)
        .attr("font-family" , "sans-serif")
        .attr("font-size" , "14px")
        .attr("fill" , "black")
        .attr("text-anchor", "middle");


    // var tooltip = d3.select("body")
    //     .append("div")
    //     .style("position", "absolute")
    //     .style("z-index", "10")
    //     .style("visibility", "hidden")
    //     .style("background", "#000")
    //     .text("a simple tooltip");

    d3.selectAll("rect").on("mouseover", function(d){
        d3.select(this).attr("opacity", .5)
        // tooltip.text(d); 
        // return tooltip.style("visibility", "visible");
    }).on("mouseout", function(){
        d3.select(this).attr("opacity", 1)
        // return tooltip.style("visibility", "hidden");
    });

}