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
  // retrieve data from service functions
  $scope.mealCount = mealDataService.getMealCount();
  $scope.meals = mealDataService.getMeals();
  $scope.meal = mealDataService.getMeal();
  $scope.getPreviousMeal = mealDataService.getPreviousMeal();
  $scope.getNextMeal = mealDataService.getNextMeal();
  // assign scope variables to values from mealData
  $scope.tip = $scope.meal.tip/100 * $scope.meal.price;
  $scope.total = $scope.meal.price + $scope.tip;


}]);

app.controller('earningsCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {



}]);

app.controller('resetCtrl', ['$scope', 'mealDataService', function($scope, mealDataService) {
  $scope.reset = function(){
    mealDataService.resetAll();
  };
  
}]);