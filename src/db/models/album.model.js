module.exports = function(sequelize, DataTypes) {
  sequelize.define('Album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING
    }
  })
 }