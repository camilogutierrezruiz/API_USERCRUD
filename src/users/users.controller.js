
const users = require('../models/user.model');
const uuid = require('uuid');

const getAllUsers = () => {
  return users;
};

const getUserByID = (id) => {
  const data = users.find(user => user.id === id);
  return data;
};

const createNewUser = (user) => {
  const newUser = {
    id: uuid.v4(),
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    birthday: new Date(user.birthday)
  };

  users.push(newUser);

  return newUser;

};


module.exports = {
  getAllUsers,
  getUserByID,
  createNewUser
};