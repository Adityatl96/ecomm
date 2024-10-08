const Sequelize = require('sequelize')

const sequelize = require('../db')

const User = sequelize.define('user',{
    id:{
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey:true,
        allowNull:false,
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    isVendor:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    userName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userEmail:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userPassword:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userAddress:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userPhoneNumber:{type:Sequelize.STRING,
        allowNull:false}
});

module.exports = User;