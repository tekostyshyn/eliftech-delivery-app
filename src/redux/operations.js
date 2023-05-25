import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://646f0b5809ff19b120867593.mockapi.io";

export const fetchShops = createAsyncThunk(
    "shops/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/restaurants");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const submitOrder = createAsyncThunk(
    "orders/submitOrder",
    async (order, thunkAPI) => {
      try {
        const response = await axios.post("/orders", order);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
//   export const deleteTask = createAsyncThunk(
//     "tasks/deleteTask",
//     async (taskId, thunkAPI) => {
//       try {
//         const response = await axios.delete(`/tasks/${taskId}`);
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );
  
  