import express from 'express';
import env from 'dotenv';
import DB_INIT from './entities/DB_INIT.js';
import createDbRouter from './routes/createDBRouter.js';
import autoriRouter from './routes/AutorRouter.js';
import conferintaRouter from './routes/ConferintaRouter.js';
import criticRouter from './routes/CriticRouter.js';
import organizatorRouter from './routes/OrganizatorRouter.js';
import recenzieArticolRouter from './routes/RecenzieArticolRouter.js';
import Articole from './entities/Articole.js';
import Autori from './entities/Autori.js';
import Conferinte from './entities/Conferinte.js';
import Critici from './entities/Critici.js';
import CriticiConferinte from './entities/CriticiConferinte.js';
import Organizatori from './entities/Organizatori.js';
import RecenziiArticole from './entities/RecenziiArticole.js';

env.config();
let app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

DB_INIT();

app.use("/api", createDbRouter);
app.use("/api", autoriRouter);
app.use("/api", articoleRouter);
app.use("/api", organizatorRouter);
app.use("/api", criticRouter);
app.use("/api", conferintaRouter);
app.use("/api", recenzieArticolRouter);

let port = process.env.PORT || 8001;
app.listen(port);
console.log('Running at' + port);