import express from 'express'
import { getCriticById, getCritici, createCritic, deleteCritici } from '../dataAccess/CriticDA.js';
let criticiRouter = express.Router();

criticiRouter.route('/critic').post(async (req, res) =>{
    return res.json(await createCritic(req.body));
})
criticiRouter.route('/critici').get(async (req, res) =>{
    return res.json(await getCritici());
})
criticiRouter.route('/critic/:id').post(async (req, res) =>{
    return res.json(await getCriticById(req.params.id));
})
criticiRouter.route('/critic/:id').delete(async(req, res) =>{
    return res.json(await deleteCritici(req.params.id));
})

export default criticiRouter