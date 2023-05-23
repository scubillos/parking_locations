const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Area = sequelize.define('area', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    status: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Area;
