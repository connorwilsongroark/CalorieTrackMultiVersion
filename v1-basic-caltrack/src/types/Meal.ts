export interface Meal {
  id: string; // unique ID
  name: string;
  calories: number;
  protein: number; // In grams
  date: string; // Date that we attribute the meal to - consumption date
  createdAt: string;
}
