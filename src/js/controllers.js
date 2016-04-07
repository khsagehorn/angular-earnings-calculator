app.controller('detailsCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.mealCount = mealDataService.getMealCount();
  $scope.meal = {};

  $scope.formSubmit = function() {
    // call the service, pass it data
    mealDataService.addMeal($scope.meal)
    // refresh meal count
    $scope.mealCount = mealDataService.getMealCount();
    // clear the form
    $scope.meal = {};

  }

}]);

app.controller('chargesCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {

  mealDataService.getMeals;

}]);

app.controller('earningsCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {



}]);

app.controller('resetCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.reset = function(){
    mealDataService.resetAll();
  }
  
}]);