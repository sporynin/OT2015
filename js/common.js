   var parseDate = d3.time.format("%d-%b-%y").parse;
   var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


   function diff(data) 
   {
      if (data.length < 1)
      {
         return data;
      }
      var a = data[0].close;
      data[0].speed = 100;
      data[0].date = parseDate(data[0].date);
      for (var i=1; i<data.length; i++) {
         data[i].speed = 100 + (data[i].close - a) / a * 100;
         data[i].date = parseDate(data[i].date); 
         a = data[i].close;
      }
      return data;
   };

   var sum = [
      {date: "1-Jan-14", tch: 317, bsp: 224}, 
      {date: "1-Feb-14", tch: 361, bsp: 277}, 
      {date: "1-Mar-14", tch: 407, bsp: 311},
      {date: "1-Apr-14", tch: 585, bsp: 432},
      {date: "1-May-14", tch: 653, bsp: 386}, 
      {date: "1-Jun-14", tch: 762, bsp: 409}, 
      {date: "1-Jul-14", tch: 881, bsp: 484},
      {date: "1-Aug-14", tch: 723, bsp: 459},
      {date: "1-Sep-14", tch: 587, bsp: 454}, 
      {date: "1-Oct-14", tch: 653, bsp: 520}, 
      {date: "1-Nov-14", tch: 558, bsp: 437},
      {date: "1-Dec-14", tch: 561, bsp: 395},
      {date: "1-Jan-15", tch: 375, bsp: 328},
      {date: "1-Feb-15", tch: 440, bsp: 379},
      {date: "1-Mar-15", tch: 511, bsp: 430},

   ];
   var bspsum = [
      {date: "1-Jan-14", close: 224}, 
      {date: "1-Feb-14", close: 277}, 
      {date: "1-Mar-14", close: 311},
      {date: "1-Apr-14", close: 432},
      {date: "1-May-14", close: 386}, 
      {date: "1-Jun-14", close: 409}, 
      {date: "1-Jul-14", close: 484},
      {date: "1-Aug-14", close: 459},
      {date: "1-Sep-14", close: 454}, 
      {date: "1-Oct-14", close: 520}, 
      {date: "1-Nov-14", close: 437},
      {date: "1-Dec-14", close: 395},
      {date: "1-Jan-15", close: 328},
      {date: "1-Feb-15", close: 379},
      {date: "1-Mar-15", close: 430},
   ];

   var tchsum = [
      {date: "1-Jan-14", close: 317}, 
      {date: "1-Feb-14", close: 361}, 
      {date: "1-Mar-14", close: 407},
      {date: "1-Apr-14", close: 585},
      {date: "1-May-14", close: 653}, 
      {date: "1-Jun-14", close: 762}, 
      {date: "1-Jul-14", close: 881},
      {date: "1-Aug-14", close: 723},
      {date: "1-Sep-14", close: 587}, 
      {date: "1-Oct-14", close: 653}, 
      {date: "1-Nov-14", close: 558},
      {date: "1-Dec-14", close: 561},
      {date: "1-Jan-15", close: 375},
      {date: "1-Feb-15", close: 440},
      {date: "1-Mar-15", close: 511},
   ];

   var cnt = [
      {date: "1-Jan-14", tch: 38778, bsp: 17740}, 
      {date: "1-Feb-14", tch: 43407, bsp: 19490}, 
      {date: "1-Mar-14", tch: 45861, bsp: 21857},
      {date: "1-Apr-14", tch: 59623, bsp: 27585},
      {date: "1-May-14", tch: 61132, bsp: 25806}, 
      {date: "1-Jun-14", tch: 64164, bsp: 25589}, 
      {date: "1-Jul-14", tch: 74356, bsp: 30966},
      {date: "1-Aug-14", tch: 62855, bsp: 27904},
      {date: "1-Sep-14", tch: 61596, bsp: 29744}, 
      {date: "1-Oct-14", tch: 72974, bsp: 31067}, 
      {date: "1-Nov-14", tch: 74899, bsp: 35245},
      {date: "1-Dec-14", tch: 80051, bsp: 33730},
      {date: "1-Jan-15", tch: 55520, bsp: 29726},
      {date: "1-Feb-15", tch: 60183, bsp: 34025},
      {date: "1-Mar-15", tch: 65213, bsp: 35122},
   ];

   var tchcnt = [
      {date: "1-Jan-14", close: 38778}, 
      {date: "1-Feb-14", close: 43407}, 
      {date: "1-Mar-14", close: 45861},
      {date: "1-Apr-14", close: 59623},
      {date: "1-May-14", close: 61132}, 
      {date: "1-Jun-14", close: 64164}, 
      {date: "1-Jul-14", close: 74356},
      {date: "1-Aug-14", close: 62855},
      {date: "1-Sep-14", close: 61596}, 
      {date: "1-Oct-14", close: 72974}, 
      {date: "1-Nov-14", close: 74899},
      {date: "1-Dec-14", close: 80051},
      {date: "1-Jan-15", close: 55520},
      {date: "1-Feb-15", close: 60183},
      {date: "1-Mar-15", close: 65213},
   ];

   var bspcnt = [
      {date: "1-Jan-14", close: 17740}, 
      {date: "1-Feb-14", close: 19490}, 
      {date: "1-Mar-14", close: 21857},
      {date: "1-Apr-14", close: 27585},
      {date: "1-May-14", close: 25806}, 
      {date: "1-Jun-14", close: 25589}, 
      {date: "1-Jul-14", close: 30966},
      {date: "1-Aug-14", close: 27904},
      {date: "1-Sep-14", close: 29774}, 
      {date: "1-Oct-14", close: 31067}, 
      {date: "1-Nov-14", close: 35245},
      {date: "1-Dec-14", close: 33730},
      {date: "1-Jan-15", close: 29726},
      {date: "1-Feb-15", close: 34025},
      {date: "1-Mar-15", close: 35122},
   ];

