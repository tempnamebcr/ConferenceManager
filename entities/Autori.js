import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Autori = db.define("Autori",
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

export default Autori;
