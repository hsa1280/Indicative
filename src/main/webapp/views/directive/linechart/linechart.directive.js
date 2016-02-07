function lineChart() {
	return {
		restrict: 'E',
    controller: function( $scope ) {
      $scope.flipChart = true;
      $scope.initializeLineChart = false;
      $scope.createLineChart = function () {
    		var chart = new CanvasJS.Chart("chartContainer",
    		{
    			zoomEnabled: false,
                            animationEnabled: true,
    			title:{
    				text: "Mobile Phone Subscriptions"
    			},
    			axisY2:{
    				valueFormatString:"0.0 bn",

    				maximum: 1.2,
    				interval: .2,
    				interlacedColor: "#F5F5F5",
    				gridColor: "#D7D7D7",
    	 			tickColor: "#D7D7D7"
    			},
                            theme: "theme2",
                            toolTip:{
                                    shared: true
                            },
    			legend:{
    				verticalAlign: "bottom",
    				horizontalAlign: "center",
    				fontSize: 15,
    				fontFamily: "Lucida Sans Unicode"

    			},
    			data: [
      			{
      				type: "line",
      				lineThickness:3,
      				showInLegend: true,
      				name: "China",
      				axisYType:"secondary",
      				dataPoints: [
      				{ x: new Date(2001, 0), y: 0.18 },
      				{ x: new Date(2002, 0), y: 0.2 },
      				{ x: new Date(2003, 0), y: 0.25},
      				{ x: new Date(2004, 0), y: 0.35 },
      				{ x: new Date(2005, 0), y: 0.42 },
      				{ x: new Date(2006, 0), y: 0.5 },
      				{ x: new Date(2007, 0), y: 0.58 },
      				{ x: new Date(2008, 0), y: 0.67  },
      				{ x: new Date(2009, 0), y: 0.78},
      				{ x: new Date(2010, 0), y: 0.88 },
      				{ x: new Date(2011, 0), y: 0.98 },
      				{ x: new Date(2012, 0), y: 1.04 }
      				]
      			}
    			],
          legend: {
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
        });

      chart.render();
      }

      $scope.hideShowChart = function() {
        $scope.flipChart = !$scope.flipChart;
      }
      $scope.createLineChart();

    },
		templateUrl: 'directive/lineChart/lineChart.html'
	}
}

export default lineChart;
