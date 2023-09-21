const todoSchema = require('../schemas/todoSchema'); //improting our todoSchema

//defining middleware for todos -----

const validateTodo = async (req, res, next) => {
  try {
    await todoSchema.validate(req.body, {
      abortEarly: false,
    });
    /*it validate the req body  and abortEarly doesnt stop validation at one error 
        but it collect all errors while validation
       */
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

module.exports = validateTodo;
