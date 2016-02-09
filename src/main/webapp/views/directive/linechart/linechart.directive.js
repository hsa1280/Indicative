function lineChart() {
	return {
		restrict: 'E',
		scope: {
			listData: '=',
			watch: '='
		},
    controller: function( $scope ) {
      $scope.flipChart = true;
			$scope.showByColor = false;

			$scope.getDateDataPoints = function() {
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

			$scope.getColorDataPoints = function() {
				var myMap = new Map();
				if ($scope.listData) {
					$scope.listData.forEach( user => {
						if (user.purchased_item && user.purchased_item.color) {
							if ( myMap.has(user.purchased_item.color) ) {
								myMap.set(user.purchased_item.color, myMap.get(user.purchased_item.color) + 1);
							} else {
								myMap.set(user.purchased_item.color, 1);
							}
						}
					});
				}

				return myMap;
			}

      $scope.createLineChart = function () {
				var dateData = [];
				var colorData = [];
				$scope.getDateDataPoints().forEach( (key, value) =>  {
					dateData.push([ value, key ]);
				});

				$scope.getColorDataPoints().forEach( (key, value) =>  {
					colorData.push([ value, key ]);
				});

				var data = new google.visualization.DataTable();
				data.addColumn('string', 'date/color');
				data.addColumn('number', 'purchases');
				data.addRows($scope.showByColor ? colorData : dateData);

				var options = {
					hAxis: {
						title: $scope.showByColor ? 'color' :  'date'
					},
					vAxis: {
						title: 'purchases'
					},
					width:900,
          height:300,
					curveType: 'function',
					pointSize: 20
				};

				var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

				chart.draw(data, options);
      }

			$scope.showByColorFunc = function() {
				$scope.showByColor = true;
				$scope.createLineChart();
			}

      $scope.showChart = function() {
				$scope.showByColor = false;
				$scope.createLineChart();
        $scope.flipChart = !$scope.flipChart;
      }

			$scope.hideChart = function() {
				$scope.flipChart = !$scope.flipChart;
			}

			$scope.$watch(function(scope) {
				return scope.watch;
			}, function() {
				$scope.createLineChart();
			});
    },
		templateUrl: 'directive/lineChart/lineChart.html'
	}
}

export default lineChart;
