function lineChart() {
	return {
		restrict: 'E',
		scope: {
			listData: '='
		},
    controller: function( $scope ) {
      $scope.flipChart = true;
			$scope.initializeLineChart = false;

			$scope.getDataPoints = function() {
				var myMap = new Map();
				if ($scope.listData) {
					$scope.listData.forEach( user => {
						if (user.purchased_item && user.purchased_item.date) {
							if ( myMap.has(user.purchased_item.date) ) {
								myMap.set(user.purchased_item.date, myMap.get(user.purchased_item.date) + 1);
							} else {
								myMap.set(user.purchased_item.date, 1);
							}
						}
					});
				}

				return myMap;
			}

      $scope.createLineChart = function () {
				console.log('$scope data --> ',$scope.listData);
				var data = [];
				$scope.getDataPoints().forEach( (key, value) =>  {
					data.push({
						x: new Date(value),
						y: key
					})
				})
				$scope.initializeLineChart = true;
    		var chart = new CanvasJS.Chart("chartContainer",
    		{
    			zoomEnabled: false,
          animationEnabled: true,
    			title:{
    				text: "Customers purchase line chart"
    			},
    			axisY2:{
    				valueFormatString:"0",

    				maximum: 10,
    				interval: 1,
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
      				name: "purchase",
      				axisYType:"secondary",
							dataPoints: data
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
				$scope.createLineChart();
        $scope.flipChart = !$scope.flipChart;
				console.log('data points -->', $scope.getDataPoints());
      }
    },
		templateUrl: 'directive/lineChart/lineChart.html'
	}
}

export default lineChart;
