const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Location = sequelize.define('location', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255
    },
    parking_area_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    parking_number: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Location;
