const knex = require("knex");

const knexConfig = require("../knexfile").development;
const db = knex(knexConfig);

const getUsers = () => {
  return db("users").select("id", "username", "department");
};

const addUser = user => {
  const result = db("users").insert(user);

  return result;
};

const getUserByUsername = username => {
  const user = db("users")
    .where({ username })
    .first();

  if (user) return user;
  else return null;
};

module.exports = {
  getUsers,
  getUserByUsername,
  addUser
};
