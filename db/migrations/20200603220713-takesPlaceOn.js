'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Events',
      'eventDate',{ type: Sequelize.DATE }
     
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Events',
      'eventDate',{ type: Sequelize.DATE }
     
    );
  }
};
