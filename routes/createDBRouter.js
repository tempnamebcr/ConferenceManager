import express from 'express';
import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const createDbRouter = express.Router();


createDbRouter.route('/create').get(async (req, res) => {
    try {
        await db.sync({ force: true });
        const tableNames = Object.keys(db.models);
        res.status(201).json({ message: 'created', tables: tableNames });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'server error' });
    }
});

export default createDbRouter;
