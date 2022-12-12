import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: state => {
      state.value += 1;
    },
  },
});

// export const contactsSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: state => {
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });
