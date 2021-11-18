'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      Post.belongsTo(models.Category,{
        as:"category",
        foreignKey:"category_id",
        onDelete : 'cascade',
        onUpdate : 'cascade'
      })
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    create_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};