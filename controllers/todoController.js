const db = require('../models');

//creating main model ------

const Todo = db.todos;

//1- creating  todo -------

const addTodo = async (req, res) => {
  try {
    let todoInfo = {
      text: req.body.text,
      isCompleted: req.body.isCompleted ? req.body.isCompleted : false,
    };

    const todo = await Todo.create(todoInfo);
    res.status(200).send(todo);
  } catch (error) {
    console.error('Error: ', error);
  }
};

//2 - for getting all todos ---

const getAllTodos = async (req, res) => {
  let todos = await Todo.findAll({
    attributes: [
      //we can also specify whatever attributes (column ) we want to get
      'id',
      'text',
      'isCompleted',
    ],
  });
  res.status(200).send(todos);
};

//3- for getting single todo --------

const getOneTodo = async (req, res) => {
  let id = req.params.id; //we will get id from url and pass to findOne()
  const todo = await Todo.findOne({ where: { id: id } }); //using where we will compare id of that todo , that we want
  res.status(200).send(todo);
};

//4- for updating todo by id ------------

const updateTodo = async (req, res) => {
  let id = req.params.id;

  const todo = await Todo.update(req.body, { where: { id: id } });

  res.status(200).send(todo);
};

//5- for deleting todo by id --------

const deleteTodo = async (req, res) => {
  let id = req.params.id;

  await Todo.destroy({ where: { id: id } });

  res.status(200).send(`Todo with id : ${id} has deleted !`);
};

module.exports = {
  addTodo,
  getAllTodos,
  getOneTodo,
  updateTodo,
  deleteTodo,
};
