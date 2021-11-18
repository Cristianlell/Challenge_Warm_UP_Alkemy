'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      image: {
        type: Sequelize.STRING
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categories'
          },
          key : 'id'
        }
      },
      create_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};