import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const CriticiConferinte = db.define("CriticiConferinte",
{
    Id:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    IdCritic:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        allowNull:false
    },
    IdConferinta:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        allowNull:false
    }
})