import logger from "../utils/logger.js";
export function errorHandler(err, req, res, next) {
    logger.error(err.stack);
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Une erreur interne est survenue.';


    res.status(statusCode).json({ message });
}
