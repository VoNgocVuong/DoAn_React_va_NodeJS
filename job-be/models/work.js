'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {

    static associate(models) {
      Work.belongsTo(models.Company),
        Work.belongsToMany(models.User, {
          through: "SaveWorks"
        }),
        Work.belongsToMany(models.User, {
          through: "WorkApplies",
          as: "workapply2"
        }),
        Work.belongsToMany(models.Tag, {
          through: "TagWorks"
        }),
        Work.belongsToMany(models.TypeOfWork, {
          through: "WorkTypeOfWorks"
        }),
        Work.hasMany(models.TagWork, { foreignKey: 'workId', as: "tagWork" }),
        Work.hasMany(models.WorkApply, { foreignKey: 'workId'}),
        Work.hasMany(models.WorkTypeOfWork, { foreignKey: 'workId', as: "workType" })
    }
  };
  Work.init({
    companyId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Company",
        key: "id"
      }
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    addressGoogle: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    price1: DataTypes.INTEGER,
    price2: DataTypes.INTEGER,
    request: DataTypes.STRING,
    interest: DataTypes.STRING,
    dealtime: DataTypes.STRING,
    nature: DataTypes.STRING,
    exprience: DataTypes.STRING,
    description: DataTypes.STRING,
    form: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Work',
  });
  return Work;
};