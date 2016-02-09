function stats( cart, $state ) {
	return {
		restrict: 'E',
    scope: {
      data: '='
    },
    controller: function( $scope ) {
			console.log('data --> ', $scope.data);
      $scope.showStats = true;
      $scope.toggleStats = function() {
        $scope.showStats = !$scope.showStats;
      }

      $scope.getFemalePercent = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.gender == 'Female' ) count++;
        });

        return count / $scope.data.length;
      }

      $scope.getColors = function() {
        var count = 0;
				var colorMap = new Map();
        $scope.data.forEach( user => {
          if( user.purchased_item && user.purchased_item.color ) {
            if( !colorMap.has( user.purchased_item.color ) ) {
							count++;
							colorMap.set(user.purchased_item.color, 1);
						}
          }
        });

        return count;
      }

      //get signed up users
      $scope.getSignedUpUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.signed_up ) count++;
        });

        return count;
      }

      //get viewed profile users
      $scope.getViewedProfileUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.viewed_profile ) count++;
        });

        return count;
      }
      //get viewed item users
      $scope.getViewedItemUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.viewed_item ) count++;
        });

        return count;
      }
      //get purchased item users
      $scope.getPurchasedItemUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.purchased_item ) count++;
        });

        return count;
      }

      //get signed_up to purchased_item conversion
      $scope.getSignedUptoPurchasedUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.signed_up && user.purchased_item ) {

            if( Date.parse(user.signed_up.date) < Date.parse(user.purchased_item.date) )
              count++;
          }
        });

        return count;
      }

			//get signed_up to viewed_profile to purchased_item conversion
      $scope.getSignedUptoViewedProfileToPurchasedUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.signed_up && user.viewed_profile && user.purchased_item ) {

            if( ( Date.parse(user.signed_up.date) ) < Date.parse(user.viewed_profile.date) && ( Date.parse(user.viewed_profile.date) < Date.parse(user.purchased_item.date) ) )
              count++;
          }
        });

        return count;
      }

			//get signed_up to viewed_item to purchased_item conversion
      $scope.getSignedUptoViewedItemToPurchasedUsers = function() {
        var count = 0;
        $scope.data.forEach( user => {
          if( user.signed_up && user.viewed_item && user.purchased_item ) {

            if( (Date.parse(user.signed_up.date) < Date.parse(user.viewed_item.date) ) && (Date.parse(user.viewed_item.date) < Date.parse(user.purchased_item.date)) )
              count++;
          }
        });

        return count;
      }
    },
		templateUrl: 'directive/stats/stats.html'
	}
}

export default stats;
