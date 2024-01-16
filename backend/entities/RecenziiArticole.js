import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const RecenziiArticole = db.define("RecenziiArticole",
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
    },
    Continut:
    {
        type:Sequelize.STRING,
        allowNull:false
    }
})

export default RecenziiArticole;