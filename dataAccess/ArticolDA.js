import Articole from "../entities/Articole.js"
import Autori from "../entities/Autori.js"

async function createArticol(articol){
    return await Articole.create(articol);
}
async function getArticole(){
    return await Articole.findAll({include:["Autor"]});
}
async function getArticolById(id){
    return await Articole.findByPk(id, {include:["Autor"]});
}
async function deleteArticol(id){
    let articol = Articole.findByPk(id);
    if(!articol){
        console.log("Nu a fost gasit articolul");
        return;
    }
    return await articol.destroy();
}

export{
    createArticol,
    getArticole,
    getArticolById,
    deleteArticol
}