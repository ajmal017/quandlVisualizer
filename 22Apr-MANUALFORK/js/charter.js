

// var MAKECHART = function(obj){

//    // Load relevant packages
//    google.charts.load('current', {'packages':['corechart']});
//    google.charts.setOnLoadCallback(drawChart);

//    // Globals
//    var dataObj = obj;
//    console.log(typeof dataObj);


//    function drawChart() {
//       var data = google.visualization.arrayToDataTable(
//          [
//             ['Year', 'Sales', 'Expenses'],
//             ['2004',  1000,      400],
//             ['2005',  1170,      460],
//             ['2006',  660,       1120],
//             ['2007',  1030,      540]
//          ]
//       );

//       var options = {
//          title: '',
//          curveType: 'function',
//          legend: { position: 'bottom' }
//       };

//       var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

//       chart.draw(data, options);
//    }

// }