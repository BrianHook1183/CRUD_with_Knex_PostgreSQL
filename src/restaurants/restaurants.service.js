const knex = require("../db/connection");

/* 

1. Complete the create() function to create a new restaurant in the restaurants table, returning all columns of the newly created restaurant in the result.

2. Complete the destroy() function to delete a restaurant given the restaurant ID.

*/

function list() {
  return knex("restaurants").select("restaurant_name", "restaurant_cuisine");
}

function create(restaurant) {
  // your solution here
}

function read(restaurant_id = 0) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

function destroy(restaurant_id) {
  // your solution here
}

module.exports = {
  create,
  list,
  read,
  update,
  delete: destroy,
};
