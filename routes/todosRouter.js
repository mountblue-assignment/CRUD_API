const todosController = require('../controllers/todoController.js'); //importing todoController
const router = require('express').Router();
const validateTodo = require('../middleware/validateTodo.js'); //importing the middleware -------

//for creating todos with validation middleware -----

router.post('/', validateTodo, todosController.addTodo);

//for fetching all todos -----

router.get('/', todosController.getAllTodos);

//for fetching one  todo details  -----

router.get('/:id', todosController.getOneTodo);

//for updating todo  -------

router.put('/:id', validateTodo, todosController.updateTodo);

//for deleting todo ---------

router.delete('/:id', todosController.deleteTodo);

module.exports = router;
