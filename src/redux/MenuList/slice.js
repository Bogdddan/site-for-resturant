import { createSlice } from '@reduxjs/toolkit';

const dishesListSlice = createSlice({
  name: 'dishesList',
  initialState: null,
  reducers: {
    setDishesList: (state, action) => action.payload.results,
  },
});

export const { setDishesList } = dishesListSlice.actions;
export default dishesListSlice.reducer;
