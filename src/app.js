import express from "express";
import demoRouter from "./router/demo.router.js";

// Config et variables
const app = express();
const { PORT, NODE_ENV } = process.env;


// todo: Middleware (niveau App)
// req : requête
// res: réponse
// next: méthode pour passer au middleware suivant
app.use( (req, res, next) => {
    // Récupération les infos de la route
    const url = req.url;
    const start = new Date();

    // On passe au middleware suivant
    next();

    // Traitement après la résolution du controller
    const end = new Date();
    const time = end.getTime() - start.getTime();
    const status = res.statusCode;

    console.log(`${url} - ${time}ms [${status}]`);
})

app.use('/demo', demoRouter);

// Serveur
app.listen(PORT, (error) => {
    if(error) {
        console.log('Erreur lors du démarrage du serveur !', error);
        return;
    }
    console.log(`Le serveur web tourne sur le port ${PORT} [${NODE_ENV}]`);
    console.log('mon serveur', `http://localhost:${PORT}`);
})