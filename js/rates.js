/**
 * Created by root on 4/18/15.
 */
function dorate(id, data, col) {
    var n = 2;
    var x = d3.scale.ordinal().rangeRoundBands([0, width - margin.left - margin.right], .1);
    var y = d3.scale.linear().range([height, 0]);
    var color = d3.scale.ordinal().range(col);
    color.domain(["tch", "bsp"]);
    var chart = d3.select(id)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.time.format('%m %y'));
    var yAxis = d3.svg.axis().scale(y).orient("right");

    data.forEach(function(d) {
       d.bars = [{name : "tch", y0 : 0, y1 : d.tch}, {name : "bsp", y0 : d.tch, y1 : d.tch + d.bsp}];
       d.total = d.tch + d.bsp;
       d.m = Math.max(d.tch, d.bsp);
    });
    y.domain([0, d3.max(data, function(d) { return d.m; })]);
    x.domain(data.map(function(d) { return parseDate(d.date); }));
    var bar = chart.selectAll("g")
        .data(data).enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + x(parseDate(d.date)) + ", 0)"; });

    bar.selectAll("rect")
        .data(function(d) { return d.bars; }).enter().append("rect")
        .attr("y", function(d) { return y(d.y1 - d.y0); })
        .attr("height", function(d) { return height - y(d.y1 - d.y0); })
        .attr("x", function(d) { return d.name == "tch" ? 0 : x.rangeBand() / n; })
        .attr("width", x.rangeBand() / n)
        .attr("class", function(d) { return color(d.name); });

    var legend = chart.selectAll(".legend")
      .data(color.domain().slice().reverse())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0, " + i * 20 + ")"; });

    legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("class", color);

    legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

    chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + height + ")")
      .call(xAxis);


    chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);

    /*
    bar.append("text")
        .attr("x", barWidth / 2)
        .attr("y", function(d) { return y(d.close) + 3; })
        .attr("dy", ".5em")
        .text(function(d) { return d.close; });
    */

};

window.addEventListener("load", function() {
     dorate("#ratsumchart", sum, ["tchsum", "bspsum"]);
     dorate("#ratcntchart", cnt, ["tchcnt", "bspcnt"]); 
});
