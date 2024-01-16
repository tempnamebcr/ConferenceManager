import express from 'express'
import { getArticolById, getArticole, createArticol, deleteArticol } from '../dataAccess/ArticolDA.js';
import Articole from "../entities/Articole.js"

let articoleRouter = express.Router();

articoleRouter.route('/articol').post(async (req, res) =>{
    return res.json(await createArticol(req.body));
})
articoleRouter.route('/articole').get(async (req, res) =>{
    return res.json(await getArticole());
})
articoleRouter.route('/articol/:id').post(async (req, res) => {
    const articleId = req.params.id;
    const { Feedback, IdCriticCareAproba, Continut } = req.body;
  
    let updatedRowsCount; 
  
    try {
      if (Continut !== undefined) {
        updatedRowsCount = await Articole.update(
          { Continut, Feedback: null, IdCriticCareAproba },
          { where: { id: articleId } }
        );
      } else {
        updatedRowsCount = await Articole.update(
          { Feedback, IdCriticCareAproba },
          { where: { id: articleId } }
        );
      }
  
      if (updatedRowsCount[0] === 0) {
        return res.status(404).json({ error: 'Article not found' });
      }
  
      const updatedArticle = await Articole.findByPk(articleId);
  
      return res.json(updatedArticle);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
articoleRouter.route('/autor/:id').delete(async(req, res) =>{
    return res.json(await deleteArticol(req.params.id));
})

export default articoleRouter