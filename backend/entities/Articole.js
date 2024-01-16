import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Articole = db.define("Articole",
{
    Id:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    Continut:   
    {
        type:Sequelize.STRING,
        allowNull:false
    },
    IdAutor:
    {
        type:Sequelize.INTEGER,
        foreignKey:true,
        autoIncrement:false,
        allowNull:false
    },
    IdCriticCareAproba:
    {
        type:Sequelize.INTEGER,
        foreignKey:true,
        autoIncrement:false,
        allowNull:true
    },
    IdCritic1:
    {
        type:Sequelize.INTEGER,
        foreignKey:true,
        autoIncrement:false,
        allowNull:true
    },
    IdCritic2:
    {
        type:Sequelize.INTEGER,
        foreignKey:true,
        autoIncrement:false,
        allowNull:true
    },
    IdConferinta:
    {
        type:Sequelize.INTEGER,
        foreignKey:true,
        autoIncrement:false,
        allowNull:true
    },
    Feedback:
    {
        type:Sequelize.STRING,
        allowNull:true
    }
})

export default Articole;