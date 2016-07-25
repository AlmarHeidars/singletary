'use strict';

function MainCtrl ($scope, dataService) {

  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
  });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "To leave a comment click here and click post twice.",
                      completed: false});
  };

}

module.exports = MainCtrl;
