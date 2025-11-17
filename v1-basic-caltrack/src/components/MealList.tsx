import { useState } from "react";
import type { Meal } from "../types/Meal";
import { EditMealModal } from "./EditMealModal";

interface MealListProps {
  meals: Meal[];
  onDelete: (id: string) => void;
  onEdit: (meal: Meal) => void;
}

export function MealList({ meals, onDelete, onEdit }: MealListProps) {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  return (
    <>
      <ul className=''>
        {meals.map((meal) => (
          <li key={meal.id} className=''>
            <div>
              <strong>{meal.name}</strong>
              <br />
              {meal.calories} cal - {meal.protein} g protein
            </div>
            <button onClick={() => setSelectedMeal(meal)}>Edit</button>
            <button onClick={() => onDelete(meal.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Edit dialog / modal appears once we set the selectedMeal */}
      {selectedMeal && (
        <EditMealModal
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
          onSave={onEdit}
        />
      )}
    </>
  );
}
