import express from "express";
import demoRouter from "./router/demo.router.js";

const app = express();
const { PORT, NODE_ENV } = process.env;

app.use("/demo", demoRouter);

app.listen(PORT, (error) => {
    if(error) {
        console.log('Erreur lors du démarrage du serveur !', error);
        return;
    }
    console.log(`Le serveur web tourne sur le port ${PORT} [${NODE_ENV}]`);
    console.log('mon serveur', `http://localhost:${PORT}`);
})