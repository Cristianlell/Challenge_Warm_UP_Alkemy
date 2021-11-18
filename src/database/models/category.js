'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate(models) {
      Category.hasMany(models.Post,{
        as:"posts",
        foreignKey:"category_id",
        onDelete : 'cascade',
        onUpdate : 'cascade'
      })

    }
  }
  
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};