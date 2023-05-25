import { createSlice } from '@reduxjs/toolkit';

const selectedMealsSlice = createSlice({
  name: 'selectedMeals',
  initialState: [],
  reducers: {
    addMeal(state, action) {
        state.push(action.payload)
    },
  },
});

export const { addMeal } = selectedMealsSlice.actions;
export const selectedMealsReducer = selectedMealsSlice.reducer;
