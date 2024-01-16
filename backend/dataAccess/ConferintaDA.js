import Conferinte from "../entities/Conferinte.js"
import Organizatori from "../entities/Organizatori.js"

async function createConferinta(data){
    try {
        const conferinta = await Conferinte.create({
          Nume: data.Nume,
          IdOrganizator: data.IdOrganizator
        });
    
        if (data.critici && data.critici.length > 0) {
          await conferinta.addCritici(data.critici);
        }
        return conferinta;
      } catch (error) {
        throw new Error('Eroare la crearea conferinței.');
      }
}
async function getConferinte(){
    return await Conferinte.findAll({include: [{model: Organizatori}]});
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