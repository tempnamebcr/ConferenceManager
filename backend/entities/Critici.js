import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Critici = db.define("Critici",
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



export default Critici;