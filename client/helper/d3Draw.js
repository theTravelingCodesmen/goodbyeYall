'use strict'

import $ from 'jquery'

function d3LineDraw (endpoint, transformFunction) {
	if (transformFunction===undefined){
		transformFunction = function(input){return input}
	}
  // Get the data
  d3.json(endpoint, function(error, price) {
    //transform datagetd3Cachegraph
    let data = transformFunction(price);
    function showData(obj, d) {
     let coord = d3.mouse(obj);
     let infobox = d3.select(".infobox");
     // now we just position the infobox roughly where our mouse is
     infobox.style("left", (coord[0]) + "px" );
     infobox.style("top", (coord[1]-300) + "px");
     $(".infobox").html(d);
     $(".infobox").show();
     // debugger;
     }
     function hideData() {
        $(".infobox").hide();
     }
    // Set the dimensions of the canvas / graph
    let margin = {top: 30, right: 20, bottom: 60, left: 50},
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    // Parse the date / time, convert a string of "YYYY-mm" to time
    let parseDate = d3.time.format("%Y-%m").parse;

    
    // first get first and last month
    let firstMonth = data[0].date, lastMonth = data[data.length-1].date;
    // Set the ranges with first and last month
    let x = d3.time.scale().domain([new Date(firstMonth),new Date(lastMonth)]).range([0, width]);
    let y = d3.scale.linear().range([height, 0]);

    // Define the axes
    let xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(7)
        .tickFormat(d3.time.format("%b %y"));

    let yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);

    // Define the line
    let valueline = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.price); });
        
    // Adds the svg canvas
    let svg = d3.select(".d-three")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", 
                  "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function(d) {
        d.date = parseDate(d.date);
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([d3.min(data, function(d) { return d.price; })-120, d3.max(data, function(d) { return d.price; })+120]);

    // Add the valueline path.
    svg.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
      .enter().append("circle")
        .attr("r", 2.5)
        .attr('fill','red')
        .attr("cx", function(d) { return x(d.date); })
        .attr("cy", function(d) { return y(d.price); })
        .on("mouseover", function(d) { showData(this, d3.time.format("%b %Y")(d.date) + ': $' + d.price);})
        .on("mouseout", function(){ hideData();});

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .attr('y',0)
        .attr('x',-40)
        .attr('transform','rotate(-65)');

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    svg.append('text')
        .attr('x', width/2)
        .attr('y', 0-(margin.top/2))
        .attr('text-anchor','middle')
        .style('font-size','16px')
        .text('graph title');


    svg.append("text")
        .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate("+ (width/2) +","+(height+(margin.bottom/3))+")")  // centre below axis
        .text("Date");

    svg.append("text")
        .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate("+ 0 +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
        .text("Price");

    $("svg").after("<div class='infobox' style='display:none;'>Test</div>");

  });
}

export default d3LineDraw;
