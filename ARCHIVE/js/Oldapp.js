'use strict';

// GLOBALS
var stockData; // array of stock data
var colNames; // titles of columns
var dataObj; // main object rtrnd frm API call
var pageLoad;
var ticker;

// Initial setup
$(document).ready(function() {
	// When page loaded, load AAPL stock data
	populate('AAPL');	
});

// Listeners
$('#aapl').click(function(){
	if (pageLoad) {clear()};
	populate('AAPL');
});
$('#tsla').click(function(){
	if (pageLoad) {clear()};
	populate('TSLA');

});
$('#goog').click(function(){
	if (pageLoad) {clear()};
	populate('GOOG');

});
$('#brk').click(function(){
	if (pageLoad) {clear()};
	populate('BRK_A');
});

$('#takeTicker').click(function(e) {
	e.preventDefault();
	
	ticker = $('input[name="tickerName"]').val().toUpperCase();
	console.log(ticker);
	populate(ticker);
});


var clear = function() {
	$('#dataInfo').empty();
	$('#vTable').empty();
	$('#vTable').append('<thead id="colNames"></thead>');

	$('#relStatsName').empty();
}



var populate = function (theUrl){
	// google.charts.load('current', {'packages':['corechart']});
	// google.charts.setOnLoadCallback(drawChart);

	$.ajax({
		type: 'GET',
		url: 'https://www.quandl.com/api/v3/datasets/WIKI/' + theUrl + '.json?api_key=rh1C19BLzxoz3PZs7HB6',

		success: function(data) {
			console.log('DataCaptureSuccess', data);
			
			pageLoad = true;
			
			// GLOBALS
			dataObj = data.dataset;
			stockData = data.dataset.data;
			colNames = data.dataset.column_names;
			

			$('#dataInfo').append('<p class="tickerInfo">' + dataObj.name + '</p>');

			// ADD NAMES
			for(var i = 0; i < 6; i++) {
				$('#colNames').append('<td class="colNames">' + colNames[i] + '</td>');
			}

			// ADD LATEST 10 ENTRIES
			for(var j = 0; j < 1; j++) {
				$('#vTable').append('<tr></tr>');
				for(var i = 0; i < 6; i++) {
					if (i > 0 && i < 5) {
						$('#vTable tr:last-child').append('<td>' + "$" + parseFloat(stockData[j][i]).toFixed(2) + '</td>');	
					} else {
						$('#vTable tr:last-child').append('<td>' + stockData[j][i] + '</td>');	
					}
				}
			}

			$('#relStatsName').append('Relevant Stats About ' + dataObj.name.substring(0, dataObj.name.length - 52));
			// google.charts.load('current', {'packages':['corechart']});
			// google.charts.setOnLoadCallback(drawChart);
		}
	});
	
}

var MAKECHART = function(table){

   // Load relevant packages
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

   // Globals
   var stockDataArr = table;
   console.log(stockDataArr);


   function drawChart() {
      var data = google.visualization.arrayToDataTable(
         [
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
         ]
      );

      var options = {
         title: '',
         curveType: 'function',
         legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
   }

}

MAKECHART();

