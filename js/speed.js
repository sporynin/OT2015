window.addEventListener("load", function() {

var xd = ["cheap", "flex", "standart"];
var svg = d3.select("#speedchart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
var y = d3.scale.linear().range([height, 0]);
var color = d3.scale.ordinal().range(["blue", "green", "red"]).domain(xd);


var xAxis = d3.svg.axis().scale(x).orient("bottom");
var yAxis = d3.svg.axis().scale(y).orient("right");

var data0 = [ {name: "cheap", y: 448}, {name: "flex", y: 440}, {name: "standart", y:500} ];
x.domain(xd);
y.domain([0, d3.max(data0, function(d) { return d.y; })]);
/*
function dx(d) { return x(d.x); }
function dy(d) { return y(d.y); }
var line1 = d3.svg.line().interpolate("monotone").x(dx).y(dy);
var line2 = d3.svg.line().interpolate("monotone").x(dx).y(dy);
var line3 = d3.svg.line().interpolate("monotone").x(dx).y(dy);
var data1 = [ {x: 1, y: 448}, {x: 2, y: 896}, {x: 3, y: 1344}];
var data2 = [ {x: 1, y: 440}, {x: 2, y: 880}, {x: 3, y: 1320}];
var data3 = [ {x: 1, y: 500}, {x: 2, y: 1000}, {x: 3, y: 1500}];
x.domain(d3.extent(data1, function(d) { return d.x; }));
y.domain(d3.extent(data1.concat(data2).concat(data3), function(d) { return d.y; }));

svg.append("path").data(data1).attr("class", "line blue").attr("d", line1);
svg.append("path").data(data2).attr("class", "line green").attr("d", line2);
svg.append("path").data(data3).attr("class", "line red").attr("d", line3);
*/

  var gradient = d3.select("#speedchart")
                 .append("defs").selectAll("linearGradient").data(data0).enter().append("linearGradient")
                 .attr("y1", "100%")
                 .attr("y2", "0%")
                 .attr("x1", "100%")
                 .attr("x2", "100%")
                 .attr("id", function(d) { return "gr" + d.name; });
                 //.attr("gradientUnits", "userSpaceOnUse");
  gradient.append("stop").attr("offset", "0%").attr("stop-color", "white");
  gradient.append("stop").attr("offset", "100%").attr("stop-color", function(d) { return color(d.name); });

  var bar = svg.selectAll("g").data(data0).enter().append("g")
      .attr("transform", function(d) { return "translate(" + x(d.name) + ", 0)"; });

  bar.append("rect")
      .attr("y", function(d) { return y(d.y); })
      .attr("height", function(d) { return height - y(d.y); })
      .attr("width", x.rangeBand())
      .style("fill", function(d) { return "url(#gr" + d.name + ")"; });

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
  */
});
