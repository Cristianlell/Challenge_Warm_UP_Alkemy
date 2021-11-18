'use strict';

let categorias = ["musica","trabajo","diversión"];

const categoria = [];

for (let i = 0; i < categorias.length; i++) {

  let elemento = {
    name : categorias[i],
    createdAt: new Date,
    updatedAt:  new Date
  }
  categoria.push(elemento)
  
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
     
      await queryInterface.bulkInsert('Categories', categoria, {});
  
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Categories', null, {});
  
  }
};
