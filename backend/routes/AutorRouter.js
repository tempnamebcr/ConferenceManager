import express from 'express'
import { createAutor, getAutoriById, getAutori, deleteAutori } from '../dataAccess/AutorDA.js'

let autoriRouter = express.Router();

autoriRouter.route('/autor').post(async (req, res) =>{
    return res.json(await createAutor(req.body));
})
autoriRouter.route('/autori').get(async (req, res) =>{
    return res.json(await getAutori());
})
autoriRouter.route('/autor/:id').post(async (req, res) =>{
    return res.json(await getAutoriById(req.params.id));
})
autoriRouter.route('/autor/:id').delete(async(req, res) =>{
    return res.json(await deleteAutori(req.params.id));
})

export default autoriRouter