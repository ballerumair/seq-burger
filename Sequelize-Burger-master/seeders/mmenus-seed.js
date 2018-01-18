'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [
      { item: 'Bacon Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Brisket Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cheese Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'The Fish Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'The Counter Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'The Egg Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Classic Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Husker Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Velveeta Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },
      { item: 'KKale Burger', entree: 1, createdAt: new Date(), updatedAt: new Date() },

      { item: 'Waffle Fries', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Onion Rings', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cole Slaw & House Fries', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Chocolate Mint Milk Shake', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Vanilla Milk Shake', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Blackberry Milk Shake', entree: 0, createdAt: new Date(), updatedAt: new Date() },
      { item: 'Cookes and Cream Milk Shake', entree: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {truncate : true});
  }
};