import RecenziiArticole from "../entities/RecenziiArticole.js"

async function createRecenzie(organizator){
    return await RecenziiArticole.create(organizator);
}
async function getRecenziiArticole(){
    return await RecenziiArticole.findAll({include:["Articol"]});
}
async function getRecenzieById(id){
    return await RecenziiArticole.findByPk(id, {include:["Articol"]});
}
async function deleteRecenzieArticol(id){
    let recenzie = RecenziiArticole.findByPk(id);
    if(!recenzie){
        console.log("Nu a fost gasita recenzia");
        return;
    }
    return await recenzie.destroy();
}

export{
    createRecenzie,
    getRecenziiArticole,
    getRecenzieById,
    deleteRecenzieArticol
}