import { configureStore } from '@reduxjs/toolkit';
import { shopsReducer } from './shopsSlice';
import { selectedMealsReducer } from './selectedMealsSlice';

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    selectedMeals: selectedMealsReducer,
  },
});
