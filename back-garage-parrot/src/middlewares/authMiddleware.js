import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Accès refusé. Aucun token fourni." });
    }

    try {
        // Vérifier le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Ajouter les infos utilisateur à l'objet req
        next(); // Passer au prochain middleware
    } catch (error) {
        res.status(400).json({ message: "Token invalide." });
    }
};