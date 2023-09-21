const yup = require('yup');

//creating yup validation schema for todo
const todoSchema = yup.object().shape({
  text: yup.string().required(),
  isCompleted: yup.boolean().required(),
});

module.exports = todoSchema;
