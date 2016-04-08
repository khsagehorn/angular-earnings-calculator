app.service('mealDataService', [function(){
  var meals = [
  {price: 125, tax: 7.5, tip: 20},
  {price: 85, tax: 7.5, tip: 20}

  ];
  var totals = {};
  var mealCount = meals.length + 1;

  return {
    getMeals: function(){
      return meals;
    },

    
    getCumulativeTotals: function(){

      
      return totals;

    },

    getMealCount: function(){
      return mealCount;
    },

    getMeal: function(){
      return meals[0];

    },

    getNextMeal: function(){

      if (mealCount < meals.length){
        return meals[mealCount+1];
      }

    },

    getPreviousMeal: function(){
      if (mealCount > meals.length){
        return meals[mealCount-1]
      }
    },

    addMeal: function(obj){
      meals.push(obj)
      mealCount = mealCount + 1;
    },

    resetAll: function(){
      meals = {};
      mealCount = 1;

    }
  };


}]);
