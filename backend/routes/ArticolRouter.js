import express from 'express'
import { getArticolById, getArticole, createArticol, deleteArticol } from '../dataAccess/ArticolDA.js';

let articoleRouter = express.Router();

articoleRouter.route('/articol').post(async (req, res) =>{
    return res.json(await createArticol(req.body));
})
articoleRouter.route('/articole').get(async (req, res) =>{
    return res.json(await getArticole());
})
articoleRouter.route('/articol/:id').post(async (req, res) =>{
    return res.json(await getArticolById(req.params.id));
})
articoleRouter.route('/autor/:id').delete(async(req, res) =>{
    return res.json(await deleteArticol(req.params.id));
})

export default articoleRouter