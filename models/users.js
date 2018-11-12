'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('Users', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};