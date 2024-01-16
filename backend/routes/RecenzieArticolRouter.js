import express from 'express'
import { createRecenzie, getRecenzieById, getRecenziiArticole, deleteRecenzieArticol} from '../dataAccess/RecenzieArticolDA.js'

let recenzieArticolRouter = express.Router();

recenzieArticolRouter.route('/recenzie').post(async (req, res) =>{
    return res.json(await createRecenzie(req.body));
})
recenzieArticolRouter.route('/recenzii').get(async (req, res) =>{
    return res.json(await getRecenziiArticole());
})
recenzieArticolRouter.route('/recenzie/:id').post(async (req, res) =>{
    return res.json(await getRecenzieById(req.params.id));
})
recenzieArticolRouter.route('/recenzie/:id').delete(async(req, res) =>{
    return res.json(await deleteRecenzieArticol(req.params.id));
})

export default recenzieArticolRouter