'use strict';

var Todo = require('./models/todo');

var todos = [
	'Did great work!',
	'Like the classic cars out front',
	'Good work at a good price.'
];

todos.forEach(function (todo, index) {
  Todo.find({ 'name': todo }, function(err, todos) {
  	if (!err && !todos.length) {
      Todo.create({ completed: false, name: todo });
  	}
  });
});
