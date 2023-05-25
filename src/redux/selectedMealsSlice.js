import { createSlice } from '@reduxjs/toolkit';

const selectedMealsSlice = createSlice({
  name: 'selectedMeals',
  initialState: [],
  reducers: {
    addMeal(state, action) {
      const index = state.findIndex(meal => meal.name === action.payload.name);
      if (index >= 0) {
        state[index] = action.payload;
        return;
      }
      state.push(action.payload);
    },
  },
});

export const { addMeal } = selectedMealsSlice.actions;
export const selectedMealsReducer = selectedMealsSlice.reducer;
