import { openDB } from "idb";
import type { Meal } from "../types/Meal";

const DB_NAME = "calorieTrackerDB";
const STORE_NAME = "meals";
const DB_VERSION = 1;

// Access the indexed DB storage
export async function getDb() {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)){
                db.createObjectStore(STORE_NAME, {keyPath: "id"});
            }
        }
    })
}

// Add a new meal to the indexedDb storage
export async function addMeal(meal: Meal){
    const db = await getDb();
    await db.add(STORE_NAME, meal);
}

// Get a list of all meals stored in idb
export async function getMeals(): Promise<Meal[]> {
    const db = await getDb();
    return await db.getAll(STORE_NAME);
}

// remove a meal from idb by its Id
export async function deleteMeal(id: string){
    const db = await getDb();
    await db.delete(STORE_NAME, id);
}

// update a given meal with new data
export async function updateMeal(meal: Meal) {
    const db = await getDb();
    await db.put(STORE_NAME, meal);
}
