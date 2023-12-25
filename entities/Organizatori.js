import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Organizatori = db.define("Organizatori",
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

export default Organizatori;