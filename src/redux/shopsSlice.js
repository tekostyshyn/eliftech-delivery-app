import { createSlice } from '@reduxjs/toolkit';
import { fetchShops } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const shopsSlice = createSlice({
  name: 'shops',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchShops.pending]: handlePending,
    [fetchShops.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...action.payload]
    },
    [fetchShops.rejected]: handleRejected,
    // [addTask.pending]: handlePending,
    // [addTask.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [addTask.rejected]: handleRejected,
    // [deleteTask.pending]: handlePending,
    // [deleteTask.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    // [deleteTask.rejected]: handleRejected,
    // [toggleCompleted.pending]: handlePending,
    // [toggleCompleted.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   state.items.splice(index, 1, action.payload);
    // },
    // [toggleCompleted.rejected]: handleRejected,
  },
});

export const shopsReducer = shopsSlice.reducer;
