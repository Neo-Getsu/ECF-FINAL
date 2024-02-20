import pool from '../config/db/db.js';
import dotenv from "dotenv"
dotenv.config()
// SQL pour créer les tables, si elles n'existent pas
const CREATE_TABLES_SQL = {
    utilisateurs: `
        CREATE TABLE IF NOT EXISTS utilisateurs (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255),
            prenom VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255),
            role ENUM('administrateur', 'employe') DEFAULT 'employe'
        )
    `,
    vehicules: `
        CREATE TABLE IF NOT EXISTS vehicules (
            id INT AUTO_INCREMENT PRIMARY KEY,
            prix DECIMAL(10, 2),
            image_url VARCHAR(255),
            annee_circulation YEAR(4),
            kilometrage INT,
            description TEXT
        )
    `,
    temoignages: `
        CREATE TABLE IF NOT EXISTS temoignages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom_client VARCHAR(255),
            commentaire TEXT,
            note INT,
            approuve TINYINT(1)
        )
    `
};

// Fonction pour vérifier l'existence d'une table spécifique
async function tableExists(tableName) {
    const query = `SHOW TABLES LIKE ?`;
    const [rows] = await pool.query(query, [tableName]);
    return rows.length > 0;
}

// Fonction pour créer une table si elle n'existe pas
async function createTableIfNotExists(tableName) {
    if (!(tableName in CREATE_TABLES_SQL)) {
        throw new Error(`La requête SQL de création pour '${tableName}' n'existe pas.`);
    }
    await pool.query(CREATE_TABLES_SQL[tableName]);
}

// Fonction principale pour vérifier et créer les tables si nécessaire
export const checkTables = async () => {
    const tableNames = Object.keys(CREATE_TABLES_SQL);
    const tableStatus = {};

    for (const tableName of tableNames) {
        const exists = await tableExists(tableName);
        if (!exists) {
            await createTableIfNotExists(tableName);
            tableStatus[tableName] = 'Créée';
        } else {
            tableStatus[tableName] = 'Existe déjà';
        }
    }

    return tableStatus;
};
export const verifyDatabaseConnection = async () => {
    const connection = await pool.getConnection();

    try {
        // Utilisation des propriétés de configuration de la connexion pour vérifier la base de données
        const currentDb = connection.config.database;
        const currentUser = connection.config.user;
//TODO Protect information
        const expectedDb = "garageParrot";
        const expectedUser = 'root';
        if (currentUser !== expectedUser || currentDb !== expectedDb) {
            throw new Error(`Connexion à la base de données ${expectedDb} ou utilisateur ${expectedUser} incorrect.`);
        }

        console.log('Connexion à la base de données vérifiée avec succès.');
    } catch (error) {
        console.error('Erreur lors de la vérification de la base de données:', error.message);
        process.exit(1);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};