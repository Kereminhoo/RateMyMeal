import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseSync('ratemymeal.db');

export const initDatabase = async () => {
  try {
    
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS meals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        rating INTEGER NOT NULL,
        image TEXT
      );
    `);
    console.log("Base de données initialisée !");
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