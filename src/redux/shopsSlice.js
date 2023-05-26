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
    chosenShop: 'McDonalds',
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setChosenShop(state, action) {
      state.chosenShop = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchShops.pending, handlePending);
    builder.addCase(fetchShops.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...action.payload];
    });
    builder.addCase(fetchShops.rejected, handleRejected);
  },
});

export const { setChosenShop } = shopsSlice.actions;

export const shopsReducer = shopsSlice.reducer;
