import express from 'express'
import { getConferintaById, getConferinte, createConferinta, deleteConferinte } from '../dataAccess/ConferintaDA.js';
let conferinteRouter = express.Router();

conferinteRouter.route('/conferinta').post(async (req, res) =>{
    return res.json(await createConferinta(req.body));
})
conferinteRouter.route('/conferinte').get(async (req, res) =>{
    return res.json(await getConferinte());
})
conferinteRouter.route('/conferinta/:id').post(async (req, res) =>{
    return res.json(await getConferintaById(req.params.id));
})
conferinteRouter.route('/conferinta/:id').delete(async(req, res) =>{
    return res.json(await deleteConferinte(req.params.id));
})

export default conferinteRouter