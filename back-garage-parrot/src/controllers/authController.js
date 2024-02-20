// src/controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db/db.js';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const [users] = await pool.query('SELECT * FROM utilisateurs WHERE email = ?', [email]);
        const user = users[0];


        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect." });
        }


        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });


        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // Envoyé seulement sur HTTPS
            maxAge: 3600000
        });


        res.json({ message: "Connexion réussie.", role: user.role });
    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur lors de la tentative de connexion.", error: error.message });
    }
};
