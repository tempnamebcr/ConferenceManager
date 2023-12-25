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
        primaryKey:true,
        autoIncrement:false,
        allowNull:false
    },
    IdCriticCareAproba:
    {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:false,
        allowNull:true
    }
})

export default Articole;