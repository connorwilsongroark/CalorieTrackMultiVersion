import {useEffect, useState} from "react";
import type { Meal } from "../types/Meal";
import {addMeal, deleteMeal, getMeals, updateMeal} from "../db/indexedDb";

export function useMeals() {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(true);

    // load meals when mounted
    useEffect(() => {
        (async () => {
            const data = await getMeals();
            setMeals(data);
            setLoading(false);
        })();
    }, []);

    async function createMeal(meal: Omit<Meal, "id">) {
        const newMeal: Meal = {
            ...meal,
            id: crypto.randomUUID(),
        }

        await addMeal(newMeal);
        setMeals((prev)=> [...prev, newMeal]);
    }

    async function removeMeal(id: string){
        await deleteMeal(id);
        setMeals((prev) => prev.filter((m) => m.id !== id));
    }

    async function editMeal(meal: Meal){
        await updateMeal(meal);
        setMeals((prev) => 
        prev.map((m) => (m.id === meal.id? meal : m)));
    }

    return {
        meals,
        loading,
        createMeal,
        removeMeal,
        editMeal,
    };
}