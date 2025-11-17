import { useState } from "react";
import { MealList } from "./components/MealList";
import { useMeals } from "./hooks/useMeals";
import MealForm from "./components/MealForm";
import { MealStats } from "./components/MealStats";

function App() {
  // Meals state
  const { meals, loading, createMeal, removeMeal, editMeal } = useMeals();

  // Selected date (defaults to today)
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const filteredMeals = meals.filter((meal) =>
    meal.date.startsWith(selectedDate)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className=''>
        Worlds2
        <MealForm onSubmit={createMeal} />
        {/* Date picker for displayed meals & stats */}
        <div>
          <label htmlFor=''>View stats for: </label>
          <input
            type='date'
            className=''
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        {/* Meal list */}
        <MealList meals={filteredMeals} onDelete={removeMeal} />
        {/* Meal stats */}
        <MealStats meals={filteredMeals} />
      </div>
    </>
  );
}

export default App;
