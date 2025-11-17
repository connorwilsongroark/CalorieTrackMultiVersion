import { useState } from "react";
import { MealList } from "./components/MealList";
import { useMeals } from "./hooks/useMeals";
import MealForm from "./components/MealForm";

function App() {
  // Meals state
  const { meals, loading, createMeal, removeMeal, editMeal } = useMeals();

  return (
    <>
      <div className=''>
        Worlds2
        <MealForm onSubmit={createMeal} />
        <MealList meals={meals} loading={loading} onDelete={removeMeal} />
      </div>
    </>
  );
}

export default App;
