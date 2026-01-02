import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseSync('ratemymeal_v2.db');

export const initDatabase = async () => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        rating REAL NOT NULL, 
        image TEXT
      );
    `);
    
    console.log("Base de données v2 initialisée !");
  } catch (error) {
    console.error("Erreur initialisation DB:", error);
  }
};

export const addMealToDB = async (name: string, rating: number, image: string) => {
  try {
    const result = await db.runAsync(
      'INSERT INTO meals (name, rating, image) VALUES (?, ?, ?)',
      [name, rating, image]
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error("Erreur ajout plat:", error);
  }
};

export const getMealsFromDB = async () => {
  try {
    const allRows = await db.getAllAsync('SELECT * FROM meals');
    return allRows;
  } catch (error) {
    console.error("Erreur lecture plats:", error);
    return [];
  }
};