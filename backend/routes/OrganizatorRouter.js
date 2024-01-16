import express from 'express'
import { getOrganizatorById, getOrganizatori, createOrganizator, deleteOrganizatori } from '../dataAccess/OrganizatorDA.js';
let organizatorRouter = express.Router();

organizatorRouter.route('/organizator').post(async (req, res) =>{
    return res.json(await createOrganizator(req.body));
})
organizatorRouter.route('/organizatori').get(async (req, res) =>{
    return res.json(await getOrganizatori());
})
organizatorRouter.route('/organizator/:id').post(async (req, res) =>{
    return res.json(await getCriticById(req.params.id));
})
organizatorRouter.route('/organizator/:id').delete(async(req, res) =>{
    return res.json(await deleteOrganizatori(req.params.id));
})

export default organizatorRouter