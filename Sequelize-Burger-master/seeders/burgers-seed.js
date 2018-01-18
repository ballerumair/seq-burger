'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Bacon Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Brisket Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Cheese Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'The Fish Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};