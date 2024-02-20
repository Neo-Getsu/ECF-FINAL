// src/app.js
import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv';
import { checkTables, verifyDatabaseConnection } from './utils/databaseUtils.js'; // Assurez-vous que ce chemin est correct.
import { errorHandler } from './middlewares/errorHandler.js'; // Assurez-vous que ce chemin est correct.
import authRoute from "./routes/authRoute.js";
import employeRoute from "./routes/employeRoute.js";
import cookieParser from 'cookie-parser';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // Permet d'envoyer des cookies et des headers d'authentification
}));
app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limite chaque IP à 100 requêtes par `window` (ici 15 minutes)
});
app.use(limiter);
app.use(express.static('public'));





//ROUTE
app.use('/api/auth',authRoute);
app.use ('/api', employeRoute)

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send("Désolé, cette page n'existe pas !");
});

// Middleware de gestion des erreurs
app.use(errorHandler);


async function startServer() {
    try {
        await verifyDatabaseConnection(); // Vérifie que la connexion est établie avec la bonne base de données et utilisateur
        const tablesStatus = await checkTables();
        console.log('Vérification de la base de données au démarrage:', tablesStatus);

        app.listen(port, () => {
            console.log(`Serveur démarré sur le port ${port}`);
        });
    } catch (error) {
        console.error('Erreur lors de la vérification initiale de la base de données:', error.message, error.stack);
        process.exit(1);
    }
}

await startServer();
