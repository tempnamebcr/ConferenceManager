import Autori from "../entities/Autori.js"

async function createAutor(autor){
    return await Autori.create(autor);
}
async function getAutori(){
    return await Autori.findAll({include:["Articole"]});
}
async function getAutoriById(id){
    return await Autori.findByPk(id, {include:["Articole"]});
}
async function deleteAutori(id){
    let autori = Autori.findByPk(id);
    if(!Autori){
        console.log("Nu a fost gasit Autorul");
        return;
    }
    return await autori.destroy();
}
export{
    createAutor,
    getAutori,
    getAutoriById,
    deleteAutori
}