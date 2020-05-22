exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("villagers2")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("villagers2").insert([
        { id: 1, name: "Raymond" },
        { id: 2, name: "Vesta" },
        { id: 3, name: "Merry" },
      ]);
    });
};
