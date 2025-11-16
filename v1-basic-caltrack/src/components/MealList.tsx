import { useMeals } from "../hooks/useMeals"

export function MealList() {
    const { meals, loading, removeMeal } = useMeals();

    if (loading) return <p>Loading...</p>

    return (
        <ul className="">
            {
                meals.map((meal) => (
                    <li key={meal.id} className="">
                        <div>
                            <strong>{meal.name}</strong>
                            <br />
                            {meal.calories} cal - {meal.protein} g protein
                        </div>
                        <button onClick={() => removeMeal(meal.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}