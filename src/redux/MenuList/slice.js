import { createSlice } from '@reduxjs/toolkit';

const randomUserSlice = createSlice({
  name: 'randomUser',
  initialState: null,
  reducers: {
    setRandomUser: (state, action) => action.payload,
  },
});

export const { setRandomUser } = randomUserSlice.actions;
export default randomUserSlice.reducer;
