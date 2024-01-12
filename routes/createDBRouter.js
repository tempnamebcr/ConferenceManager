import express from 'express';
import db from '../dbConfig.js';
import Sequelize from 'sequelize';
import Autori from '../entities/Autori.js';
import Organizatori from '../entities/Organizatori.js';
import Critici from '../entities/Critici.js';

const createDbRouter = express.Router();


async function adaugaDateInTabel(){
    try {
        await Autori.create({
            nume: 'Marcel',
        });
        await Organizatori.create({
            nume: 'Ionut',
        });
        await Critici.create({
            nume: 'Popescu',
        });
    } catch (err) {
    }
}

createDbRouter.route('/incarcaDate').get(async (req, res) => {
    try {
        await adaugaDateInTabel();
        
        res.status(201).json({ message: 'Date încărcate cu succes în toate tabelele.' });
    } catch (err) {
        console.error('Eroare la încărcarea datelor:', err);
        res.status(500).json({ message: 'Eroare la încărcarea datelor.' });
    }
});

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
