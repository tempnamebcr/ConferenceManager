import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Organizator = db.define("Organizator",
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
    }
})