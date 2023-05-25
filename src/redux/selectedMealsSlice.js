import { createSlice } from '@reduxjs/toolkit';
import { submitOrder } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const selectedMealsSlice = createSlice({
  name: 'selectedMeals',
  initialState: { meals: [], isLoading: false, error: null },
  reducers: {
    addMeal(state, action) {
      const index = state.meals.findIndex(
        meal => meal.name === action.payload.name
      );
      if (index >= 0) {
        state.meals[index] = action.payload;
        return;
      }
      state.meals.push(action.payload);
    },
    increaseAmount(state, action) {
      const index = state.meals.findIndex(meal => meal.name === action.payload);
      if (index >= 0) {
        state.meals[index].amount += 1;
        return;
      }
    },
    decreaseAmount(state, action) {
      const index = state.meals.findIndex(meal => meal.name === action.payload);
      if (index >= 0) {
        if (state.meals[index].amount === 1) {
          return;
        }
        state.meals[index].amount -= 1;
        return;
      }
    },
    deleteMeal(state, action) {
      const index = state.meals.findIndex(meal => meal.id === action.payload);
      state.meals.splice(index, 1);
    },
  },
  extraReducers: {
    [submitOrder.pending]: handlePending,
    [submitOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.meals = [];
    },
    [submitOrder.rejected]: handleRejected,
  },
});

export const {
  addMeal,
  increaseAmount,
  decreaseAmount,
  deleteMeal,
  setUserInfo,
} = selectedMealsSlice.actions;
export const selectedMealsReducer = selectedMealsSlice.reducer;
