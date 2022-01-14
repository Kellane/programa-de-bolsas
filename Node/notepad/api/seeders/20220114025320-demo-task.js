'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Task', [{
      "title": "Bancroft",
      "taskRelevance": 1,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "title": "Tomaso",
      "taskRelevance": 2,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "title": "Greta",
      "taskRelevance": 3,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "title": "Luca",
      "taskRelevance": 4,
      "completed": false,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "title": "Scott",
      "taskRelevance": 5,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }], {});
  
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Task', null, {});
     
  }
};
