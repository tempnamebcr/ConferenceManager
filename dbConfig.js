import { Sequelize } from "sequelize";
import env from 'dotenv';

env.config();

const db = new Sequelize({
    dialect:process.env.dialect,
    database:process.env.DB_DATABASE,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    logging:false,
    define:{
        timestamps:true,
        freezeTableName:true
    }
})

export default db;