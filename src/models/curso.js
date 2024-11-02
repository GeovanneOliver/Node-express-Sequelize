'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Categoria, {//belongsto é informado na ponta n das ligações entre tabelas
        foreignKey: 'caterogia_id'
      });
      Curso.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });
      Curso.hasMany(models.Matricula, {
        foreignKey: 'curso_id'
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos',
  });
  return Curso;
};