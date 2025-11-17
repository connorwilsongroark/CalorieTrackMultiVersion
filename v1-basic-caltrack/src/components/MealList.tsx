import type { Meal } from "../types/Meal";

interface MealListProps {
  meals: Meal[];
  onDelete: (id: string) => void;
}

export function MealList({ meals, onDelete }: MealListProps) {
  return (
    <ul className=''>
      {meals.map((meal) => (
        <li key={meal.id} className=''>
          <div>
            <strong>{meal.name}</strong>
            <br />
            {meal.calories} cal - {meal.protein} g protein
          </div>
          <button onClick={() => onDelete(meal.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
