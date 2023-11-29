const { sequelize, sequelizeConnection } = require  ("../config/sequelize.js");
const { Model, DataTypes } = require  ("sequelize");
sequelizeConnection();

class UserModel extends Model {

}

UserModel.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "users",
  timestamps:  false,
  sequelize
})

module.exports = UserModel