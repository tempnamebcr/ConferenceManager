import express from 'express';
import env from 'dotenv';
import DB_INIT from './entities/DB_INIT.js';


env.config();
let app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

DB_INIT();

let port = process.env.PORT || 8001;
app.listen(port);
console.log('Running at' + port);