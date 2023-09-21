const express = require('express');
const app = express();

// todo routers -------
const todoRouter = require('./routes/todosRouter.js');

// Add body parsing middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todoRouter);

//testing api -------

app.get('/', (req, res) => {
  res.send('Welcome to Homepage !');
});

//port --------

const PORT = process.env.PORT || 8080;

//server -------

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
