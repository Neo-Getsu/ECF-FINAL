// src/routes/authRoute.js
import express from 'express';
import { login } from '../controllers/authController.js'; // Assurez-vous que le chemin est correct

const router = express.Router();

router.post('/', login);

export default router;
