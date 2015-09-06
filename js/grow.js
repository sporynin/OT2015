window.addEventListener("load", function() {


var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right");

var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.close); });

var svg = d3.select("#growchart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


   data = [
      {date: "1-Feb-13", close: 10047}, 
      {date: "1-Mar-13", close: 11188}, 
      {date: "1-Apr-13", close: 15211}, 
      {date: "1-May-13", close: 19083},
      {date: "1-Jun-13", close: 19601},
      {date: "1-Jul-13", close: 23330},
      {date: "1-Aug-13", close: 26159},
      {date: "1-Sep-13", close: 22703},
      {date: "1-Oct-13", close: 20073},
      {date: "1-Nov-13", close: 20934},
      {date: "1-Dec-13", close: 18759}, 
      {date: "1-Jan-14", close: 17592},
      {date: "1-Feb-14", close: 17106},
      {date: "1-Mar-14", close: 19644}, 
      {date: "1-Apr-14", close: 23411},
      {date: "1-May-14", close: 31369}, 
      {date: "1-Jun-14", close: 34449},
      {date: "1-Jul-14", close: 38144},
      {date: "1-Aug-14", close: 39847},
      {date: "1-Sep-14", close: 33048},
      {date: "1-Oct-14", close: 28822},
      {date: "1-Nov-14", close: 32380}, 
      {date: "1-Dec-14", close: 28844},
      {date: "1-Jan-15", close: 29318},
      {date: "1-Feb-15", close: 22067},
      {date: "1-Mar-15", close: 23140},
      {date: "1-Apr-15", close: 30149},
   ];
   data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.close = +d.close;
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0, " + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);
});
