'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      taskRelevance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      note_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'notes',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};