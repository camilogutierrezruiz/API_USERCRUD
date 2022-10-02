
const usersController = require('./users.controller');

const getUsers = (req, res) => {
  const data = usersController.getAllUsers();
  res.status(200).json(data);
};

const getUser = (req, res) => {
  const id = req.params.id;

  const data = usersController.getUserByID(id);

  data
    ? res.status(200).json(data)
    : res.status(404).json({
      message: `User ${id} hasn't been found or doesn't exist.`
    });

};

const postUser = (req, res) => {
  const newUser = req.body;
  let expectedData;

  for (prop in newUser) {
    if (!newUser[prop]) {
      expectedData = prop;
    }
  }

  if (newUser.first_name && newUser.last_name && newUser.email && newUser.password && newUser.birthday) {
    const data = usersController.createNewUser(newUser);
    res.status(201).json(data);
  } else (
    res.status(400).json(`The field '${expectedData}' can't be empty!`)
  );
};

module.exports = {
  getUsers,
  getUser,
  postUser
};