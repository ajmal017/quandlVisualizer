'use strict';

// IMPORT DATASET
var dataArr = fullDataset.data; 
// Data is stored in


// GLOBAL VARIABLES


$(document).ready(function() {
	console.log(nflxData.name);

	MAKECHART();
});


var MAKECHART = function(){

   // Load relevant packages
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

   // Globals
   var arrToDisplay = []; // ADD THE RELEVANT DATA HERE
   var graphTitle; // ADD THE GRAPH TITLE HERE

   // Function to load data into array


   function drawChart() {
      var data = google.visualization.arrayToDataTable(arrToDisplay);

      var options = {
         title: graphTitle,
         curveType: 'function',
         legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      chart.draw(data, options);
   }
}



// < ---- FORMAT OF DATATABLE FOR GRAPH ---- >
// [
// 	  ['Year', 'Sales', 'Expenses'],
// 	  ['2004',  1000,      400],
// 	  ['2005',  1170,      460],
// 	  ['2006',  660,       1120],
// 	  ['2007',  1030,      540]
// ]