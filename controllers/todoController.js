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
    throw new Error(error);
  }
};

//2 - for getting all todos ---

const getAllTodos = async (req, res) => {
  try {
    let todos = await Todo.findAll({
      attributes: [
        //we can also specify whatever attributes (column ) we want to get
        'id',
        'text',
        'isCompleted',
      ],
    });
    res.status(200).send(todos);
  } catch (error) {
    throw new Error(error);
  }
};

//3- for getting single todo --------

const getOneTodo = async (req, res, next) => {
  try {
    let id = Number(req.params.id); //we will get id from url and pass to findOne()

    if (isNaN(id)) {
      let error = new Error(`Invalid Id : ${id}`);
      error.statusCode = 400;
      throw error;
    }
    const todo = await Todo.findOne({ where: { id: id } }); //using where we will compare id of that todo , that we want

    if (todo === null) {
      throw new Error(` Fetching failed : Id-${id} doesn't exist  !`);
    }
    res.status(200).send(todo);
  } catch (err) {
    next(err);
  }
};

//4- for updating todo by id ------------

const updateTodo = async (req, res, next) => {
  try {
    let id = req.params.id;

    const [isUpdated] = await Todo.update(req.body, { where: { id: id } });

    if (isUpdated === 0) {
      throw new Error(`Updation failed : Id-${id} doesn't exist !`);
    }
    res.sendStatus(200).send(`Todo with id : ${id} has updated !`);
  } catch (error) {
    next(error);
  }
};

//5- for deleting todo by id --------

const deleteTodo = async (req, res, next) => {
  try {
    let id = req.params.id;

    let isDeleted = await Todo.destroy({ where: { id: id } });
    if (isDeleted === 0) {
      throw new Error(`Deletion failed : Id-${id} doesn't exist !`);
    }
    res.status(200).send(`Todo with id : ${id} has deleted !`);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addTodo,
  getAllTodos,
  getOneTodo,
  updateTodo,
  deleteTodo,
};
