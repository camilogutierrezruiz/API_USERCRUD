
const users = require('../models/user.model');

const getAllUsers = () => {
  return users;
};

const getUserByID = (id) => {
  const data = users.find(user => user.id === id);
  return data;
};


module.exports = {
  getAllUsers,
  getUserByID
};