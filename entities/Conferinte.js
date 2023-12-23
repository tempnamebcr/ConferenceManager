import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Conferinte = db.define("Conferinte",
{
    Id:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    Nume:
    {
        type:Sequelize.STRING,
        allowNull:false
    },
    IdOrganizator:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        allowNull:false
    }
})