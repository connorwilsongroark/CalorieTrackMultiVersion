import type { Meal } from "../types/Meal";

interface MealListProps {
  meals: Meal[];
  onDelete: (id: string) => void;
  loading?: boolean;
}

export function MealList({ meals, onDelete, loading }: MealListProps) {
  if (loading) return <p>Loading...</p>;

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
