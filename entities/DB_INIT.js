import mysql from 'mysql2/promise.js'
import env from 'dotenv';

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
}
function FK_Config(){
    Organizator.hasMany(Conferinta, { as: 'Conferinte', foreignKey: 'IdOrganizator' });
    Conferinta.belongsTo(Organizator, { foreignKey: 'IdOrganizator' });
  
    Conferinta.hasMany(CriticiConferinte, { as: 'CriticiConferinte', foreignKey: 'IdConferinta' });
    CriticiConferinte.belongsTo(Conferinta, { foreignKey: 'IdConferinta' });
  
    Autor.hasMany(Articol, { as: 'Articole', foreignKey: 'IdAutor' });
    Articol.belongsTo(Autor, { foreignKey: 'IdAutor' });
  
    Articol.hasMany(AprobariArticole, { as: 'AprobariArticole', foreignKey: 'IdArticol' });
    AprobariArticole.belongsTo(Articol, { foreignKey: 'IdArticol' });
  
    Critici.hasMany(CriticiConferinte, { as: 'CriticiConferinte', foreignKey: 'IdCritic' });
    CriticiConferinte.belongsTo(Critici, { foreignKey: 'IdCritic' });
  
    Critici.hasMany(RecenziiArticole, { as: 'RecenziiArticole', foreignKey: 'IdCritic' });
    RecenziiArticole.belongsTo(Critici, { foreignKey: 'IdCritic' });
  
    Articol.belongsToMany(Critici, { through: RecenziiArticole, foreignKey: 'IdArticol' });
    Critici.belongsToMany(Articol, { through: RecenziiArticole, foreignKey: 'IdCritic' });
  
    CriticiConferinte.belongsToMany(Critici, { through: 'AprobariArticole', foreignKey: 'IdCritic' });
    Critici.belongsToMany(CriticiConferinte, { through: 'AprobariArticole', foreignKey: 'IdCritic' });
  
    AprobariArticole.belongsToMany(CriticiConferinte, { through: 'RecenziiArticole', foreignKey: 'IdArticol' });
    CriticiConferinte.belongsToMany(AprobariArticole, { through: 'RecenziiArticole', foreignKey: 'IdCritic' });
}

export default DB_INIT;