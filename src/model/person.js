const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    return Person.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: { type: DataTypes.STRING, allowNull: false },
        lastname: { type: DataTypes.STRING, allowNull: false },
        address1: { type: DataTypes.STRING, allowNull: false },
        address2: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        dob: { type: DataTypes.DATE, allowNull: false },
        maritial_status: { type: DataTypes.BOOLEAN, allowNull: false },
        spouse: { type: DataTypes.STRING, allowNull: false },
        occupation: { type: DataTypes.STRING },
        infection_status: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false }
    }, {
        sequelize,
        modelName: 'person'
    });
}

class Person extends Model { }
