'use strict';

// GLOBALS
var stockData;
var colNames;
var dataObj;
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
}

var populate = function (theUrl){
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
		}
	});
}

