const express = require('express');
const usersRouter = require('./src/users/users.routes');

const app = express();

app.use(express.json());

app.use('/', usersRouter);

const PORT = 1969;

app.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}`);
});