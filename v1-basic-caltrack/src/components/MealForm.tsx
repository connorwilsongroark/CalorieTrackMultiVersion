import { useState } from "react";
import type { Meal } from "../types/Meal";

interface MealFormProps {
  onSubmit: (meal: Omit<Meal, "id">) => void;
}

export default function MealForm({ onSubmit }: MealFormProps) {
  // New meal details state
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");

  function handleSubmit(e: React.FormEvent) {
    // Stop default submission behavior
    e.preventDefault();

    // Validate user input
    if (!name.trim()) {
      alert("Please enter a meal name");
      return;
    }

    // Build a new Meal item from user inputs
    const newMeal: Omit<Meal, "id"> = {
      name,
      calories: Number(calories),
      protein: Number(protein),
      createdAt: new Date().toISOString(),
    };

    onSubmit(newMeal); // Persist the new meal

    // Clear form fields
    setName("");
    setCalories("");
    setProtein("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a meal</h2>
      {/* Meal name */}
      <div className=''>
        <label htmlFor=''>Meal name</label>
        <input
          type='text'
          className=''
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='e.g. Protein Bar'
          required
        />
      </div>

      {/* Calorie count */}
      <div className=''>
        <label htmlFor=''>Calories</label>
        <input
          type='number'
          className=''
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder='100'
          required
        />
      </div>

      {/* Protein count (in grams) */}
      <div className=''>
        <label htmlFor=''>Protein (g)</label>
        <input
          type='number'
          className=''
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          placeholder='15'
          required
        />
      </div>

      {/* Submit button */}
      <button type='submit' className='cursor-pointer'>
        Add meal
      </button>
    </form>
  );
}
