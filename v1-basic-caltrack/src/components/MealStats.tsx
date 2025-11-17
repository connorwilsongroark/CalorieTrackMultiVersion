import { useState } from "react";
import type { Meal } from "../types/Meal";

interface MealStatsProps {
  meals: Meal[];
}

export function MealStats({ meals }: MealStatsProps) {
  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
  const totalProtein = meals.reduce((sum, m) => sum + m.protein, 0);
  const totalMeals = meals.length;

  return (
    <div>
      <h2>Meal Stats</h2>
      <p>Total meals: {totalMeals}</p>
      <p>Total calories: {totalCalories}</p>
      <p>Total protein: {totalProtein} g</p>
    </div>
  );
}
