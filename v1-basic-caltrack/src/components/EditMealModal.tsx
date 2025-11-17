import { useEffect, useState, useRef } from "react";
import type { Meal } from "../types/Meal";

interface EditMealModalProps {
  meal: Meal;
  onClose: () => void;
  onSave: (meal: Meal) => void;
}

export function EditMealModal({ meal, onClose, onSave }: EditMealModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState<Meal>(meal);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // open or close the dialog base on the state
    if (meal) {
      setFormData(meal);
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [meal]);

  // Handle closing the modal (on bg click or esc input)
  const handleClose = () => {
    onClose();
  };

  if (!formData) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      ...formData,
      calories: Number(formData.calories),
      protein: Number(formData.protein),
    });
    onClose();
  }

  return (
    <dialog ref={dialogRef} onClose={handleClose} className=''>
      <form onSubmit={handleSubmit} method='dialog' className=''>
        <h2>Edit meal</h2>
        <div className=''>
          <label htmlFor=''>Name</label>
          <input
            type='name'
            value={formData.name}
            onChange={handleChange}
            className=''
          />
        </div>
        <div className=''>
          <label htmlFor=''>Calories</label>
          <input
            type='number'
            name='calories'
            value={formData.calories}
            onChange={handleChange}
            className=''
          />
        </div>
        <div className=''>
          <label htmlFor=''>Protein</label>
          <input
            type='number'
            name='protein'
            value={formData.protein}
            onChange={handleChange}
            className=''
          />
        </div>
        <div className=''>
          <button
            type='button'
            onClick={() => dialogRef.current?.close()}
            className=''
          >
            Cancel
          </button>
          <button type='submit' className=''>
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
}
