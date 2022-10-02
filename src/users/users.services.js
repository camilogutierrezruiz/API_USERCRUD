
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
      message: `User ${id} has not found or does'nt exist. Try again.`
    });

};

module.exports = {
  getUsers,
  getUser
};