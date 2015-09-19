window.addEventListener("load", function() {

var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(["cheap", "flex", "standart"]);
    color.domain(["blue", "green", "red"]);


var xAxis = d3.svg.axis().scale(x).orient("bottom");
var yAxis = d3.svg.axis().scale(y).orient("right");

function dx(d) { return x(d.x); }
function dy(d) { return y(d.y); }
var line1 = d3.svg.line().interpolate("monotone").x(dx).y(dy);
var line2 = d3.svg.line().interpolate("monotone").x(dx).y(dy);
var line3 = d3.svg.line().interpolate("monotone").x(dx).y(dy);

var svg = d3.select("#speedchart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);
    //.append("g")
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  data1 = [ {x: 1, y: 448}, {x: 2, y: 896}, {x: 3, y: 1344}];
  data2 = [ {x: 1, y: 440}, {x: 2, y: 880}, {x: 3, y: 1320}];
  data3 = [ {x: 1, y: 500}, {x: 2, y: 1000}, {x: 3, y: 1500}];

  x.domain(d3.extent(data1, function(d) { return d.x; }));
  y.domain(d3.extent(data1.concat(data2).concat(data3), function(d) { return d.y; }));

  svg.append("path").datum(data1).attr("class", "line blue").attr("d", line1);
  svg.append("path").datum(data2).attr("class", "line green").attr("d", line2);
  svg.append("path").datum(data3).attr("class", "line red").attr("d", line3);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + height + ")")
      .call(xAxis);

  svg.append("g").attr("class", "y axis").call(yAxis);
  /*
  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

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
  */
});
