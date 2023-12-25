import Conferinte from "../entities/Conferinte.js"
import Organizatori from "../entities/Organizatori.js"

async function createConferinta(conferinta){
    return await Conferinte.create(conferinta);
}
async function getConferinte(){
    return await Conferinte.findAll({include:["Organizator"]});
}
async function getConferintaById(id){
    return await Conferinte.findByPk(id, {include:["Organizator"]});
}
async function deleteConferinte(id){
    let conferinte = Conferinte.findByPk(id);
    if(!conferinte){
        console.log("Nu a fost gasita Conferinta");
        return;
    }
    return await conferinte.destroy();
}
export{
    createConferinta,
    getConferinte,
    getConferintaById,
    deleteConferinte
}