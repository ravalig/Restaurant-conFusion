'use strict';
angular.module('confusionApp') 
.controller('HeaderController', ['$scope', function($scope){ 

  $scope.tab = 1;

  $scope.select = function(setTab) {
    $scope.tab = setTab;
  };

  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };




}])
.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showMenu = true;
  $scope.message = "Loading ...";


  $scope.dishes = menuFactory.getDishes().query();

  $scope.select = function(setTab) {
    $scope.tab = setTab;
    
    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } 
    else if (setTab === 3) {
      $scope.filtText = "mains";
    }
    else if (setTab === 4) {
      $scope.filtText = "dessert";
    }
    else {
      $scope.filtText = "";
    }
  };
  
  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };
}])

.controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            $scope.channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            $scope.invalidChannelSelection = false;
}])

.controller('FeedbackController', ['$scope', function($scope) {
            $scope.sendFeedback = function() {
            console.log($scope.feedback);
            if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                  $scope.invalidChannelSelection = false;
                  $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                  $scope.feedback.mychannel="";
                  $scope.feedbackForm.$setPristine();
                  console.log($scope.feedback);
                }
            };
}])

.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            $scope.showDish = true;
            $scope.message="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)});
            $scope.sortBy= "";
            
}])

.controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
          $scope.showDish = true;
          $scope.message="Loading ...";                        
          $scope.dish = menuFactory.getDishes().get({id:0});
          $scope.promotion = {};

          menuFactory.getPromotion()
              .then(
                    function(response){
                        $scope.promotion = response.data;
                    }
              );

          $scope.leader = {};
          corporateFactory.getLeader(3)
          .then(
              function(response){
                $scope.leader = response.data;
              }
            );


}])

.controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

          $scope.leaders = {};
          corporateFactory.getLeaders()
          .then(
            function(response){
              $scope.leaders = response.data;
            }
            );

}]);


