const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(villager) {
  return db("villagers")
    .insert(villager)
    .then((ids) => {
      return findById(ids[0]);
    });
}

async function update(id, changes) {
  return database("villagers").where({ id }).update(changes);
}

function remove(id) {
  return database("villagers").where({ id }).del();
}

function getAll() {
  return db("villagers");
}

function findById(id) {
  return db("villagers").where({ id }).first();
}
