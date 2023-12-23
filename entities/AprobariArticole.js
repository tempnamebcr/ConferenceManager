import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const AprobariArticole = db.define("AprobariArticole",
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
    IdArticol:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        allowNull:false
    }
})