import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import pool from '../config/db/db.js';

const router = express.Router();

router.get('/employees', authMiddleware, async (req, res) => {
    if (req.user.role !== 'administrateur') {
        return res.status(403).json({ message: "Accès non autorisé." });
    }

    try {
        const [employees] = await pool.query('SELECT prenom, nom, email FROM utilisateurs WHERE role = ?', ['employe']);
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur lors de la récupération des employés.", error: error.message });
    }
});
export default router;