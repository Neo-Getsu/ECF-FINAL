// src/routes/initRoutes.js
import express from 'express';
import pool from '../config/db/db.js';
import { checkTables } from '../utils/databaseUtils.js'; // Vous allez créer ce fichier et cette fonction

const router = express.Router();

router.get('/initialisation', async (req, res) => {
    try {
        // Test de connexion
        const connection = await pool.getConnection();
        await connection.ping(); // Cette méthode vérifie que la connexion est active
        connection.release(); // Libérer la connexion immédiatement après le test

        // Vérification des tables
        const tablesStatus = await checkTables(); // Suppose que cette fonction renvoie un état des tables

        res.json({ message: 'Initialisation réussie.', tablesStatus });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'initialisation.', error: error.message });
    }
});

export default router;
