import Organizatori from "../entities/Organizatori.js"
import RecenziiArticole from "../entities/RecenziiArticole.js"

async function createOrganizator(organizator){
    return await Organizatori.create(organizator);
}
async function getOrganizatori(){
    return await Organizatori.findAll({include:["Conferinte"]});
}
async function getOrganizatorById(id){
    return await Organizatori.findByPk(id, {include:["Conferinte"]});
}
async function deleteOrganizatori(id){
    let organizator = Organizatori.findByPk(id);
    if(!organizator){
        console.log("Nu a fost gasit organizatorul");
        return;
    }
    return await organizator.destroy();
}

export{
    createOrganizator,
    getOrganizatori,
    getOrganizatorById,
    deleteOrganizatori
}