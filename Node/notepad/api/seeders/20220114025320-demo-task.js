'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Task', [{
      "note_id": 1,
      "title": "Bancroft",
      "taskRelevance": 1,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "note_id": 1,
      "title": "Tomaso",
      "taskRelevance": 2,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "note_id": 1,
      "title": "Greta",
      "taskRelevance": 3,
      "completed": true,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "note_id": 1,
      "title": "Luca",
      "taskRelevance": 4,
      "completed": false,
      "createdAt": new Date(),
      "updatedAt": new Date(),
    }, {
      "note_id": 1,
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
