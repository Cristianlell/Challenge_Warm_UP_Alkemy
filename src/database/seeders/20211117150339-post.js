'use strict';

let faker = require('faker');
faker.locale = "es";



const posts = [];

for (let i = 0; i < 10; i++) {

  const element ={
    title: faker.name.findName(),
    content:faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    category_id:Math.ceil(Math.random() * 3),
    create_date: new Date,
    createdAt: new Date,
    updatedAt:  new Date

  } 
  posts.push(element)
  
}

module.exports = {


up: async (queryInterface, Sequelize) =>{

  await queryInterface.bulkInsert('Posts', posts, {});

},
down: async (queryInterface, Sequelize) =>{

  await queryInterface.bulkDelete('Posts', null, {});

}
}
