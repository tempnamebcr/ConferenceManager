import Critici from "../entities/Critici.js"
import RecenziiArticole from "../entities/RecenziiArticole.js"

async function createCritic(critic){
    return await Critici.create(critic);
}
async function getCritici(){
    return await Critici.findAll({include:["Recenzii"]});
}
async function getCriticById(id){
    return await Critici.findByPk(id, {include:["Recenzii"]});
}
async function deleteCritici(id){
    let critic = Critici.findByPk(id);
    if(!critic){
        console.log("Nu a fost gasit criticul");
        return;
    }
    return await critic.destroy();
}

export{
    createCritic,
    getCritici,
    getCriticById,
    deleteCritici
}