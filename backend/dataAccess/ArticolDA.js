import Articole from "../entities/Articole.js"
import Conferinte from "../entities/Conferinte.js"
import Critici from "../entities/Critici.js"
import CriticiConferinte from "../entities/CriticiConferinte.js"

async function createArticol(articol){
    let articolNou = await Articole.create(articol);
    const conferinta = await Conferinte.findOne({
        where: { IdConferinta: articolNou.IdConferinta },
    });
    const criticiIds = await CriticiConferinte.findAll({
        attributes: ['IdCritic'],
        where: { IdConferinta: articolNou.IdConferinta }
    });
    articolNou.IdCritic1 = criticiIds[0].IdCritic;
    articolNou.IdCritic2 = criticiIds[1].IdCritic;
    await articolNou.save();
    return articolNou;
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