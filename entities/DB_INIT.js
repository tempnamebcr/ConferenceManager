import mysql from 'mysql2/promise.js'
import env from 'dotenv';
import Articole from './Articole.js';
import Critici from './Critici.js';
import Autori from './Autori.js';
import Conferinte from './Conferinte.js';
import Organizatori from './Organizatori.js';
import RecenziiArticole from './RecenziiArticole.js';


env.config();

function create_DB(){
    let conn;

    mysql.createConnection({
        user:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD
    })
    .then((connection)=>{
        conn = connection
        return connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`)
    })
    .then(()=>{
        return conn.end()
    })
    .catch((err)=>{
        console.warn(err.stack)
    })
}

function DB_INIT(){
    create_DB();
    FK_Config();
}
function FK_Config(){
    Organizatori.hasMany(Conferinte, { as: 'Conferinte', foreignKey: 'IdOrganizator' });
    Conferinte.belongsTo(Organizatori, { foreignKey: 'IdOrganizator' });

    Articole.hasOne(Critici, {foreignKey: 'IdCriticCareAproba', as: 'CriticCareAproba'});
    Critici.belongsToMany(Articole, {foreignKey: 'IdCriticCareAproba', through:"IdCriticCareAproba", as: 'ArticoleAprobate'})

    Articole.hasOne(Conferinte, {foreignKey: 'IdConferinta', as: 'Conferinta'});
    Critici.belongsToMany(Articole, {foreignKey: 'IdConferinta', through:"IdConferinta", as: 'Articole'})

    Autori.hasMany(Articole, {as:"Articole", foreignKey:"IdAutor"});
    Articole.belongsTo(Autori, {as:"Autor", foreignKey:"IdAutor"})
  
    Conferinte.belongsToMany(Critici, {as:"Critici", through:"CriticiConferinte", foreignKey:"IdConferinta"})
    Critici.belongsToMany(Conferinte, {as:"Conferinte", through:"CriticiConferinte", foreignKey:"IdCritic"})

    Articole.hasMany(RecenziiArticole, {as:"Recenzii", foreignKey:"IdArticol"})
    RecenziiArticole.belongsTo(Articole, {as:"Articol", foreignKey:"IdArticol"})

    Critici.hasMany(RecenziiArticole, {as:"Recenzii", foreignKey:"IdCritic"});
    RecenziiArticole.belongsTo(Critici, {as:"Critic", foreignKey:"IdCritic"});


    
}

export default DB_INIT;