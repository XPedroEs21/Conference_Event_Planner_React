// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
   {name: "Breakfast", cost: 50, selected: false},
   {name: "High Tea", cost: 25, selected: false},
   {name: "Lunch", cost: 65, selected: false},
   {name: "Dinner", cost: 70, selected: false},
  ],
  reducers: {
    toggleMealSelection: (state, action) => {                         //function toggles the selected property of a specific item in the state. It takes the current state and an action object, using action.payload to identify the item to update. It then switches the selected status of that item from true to false or vice versa.
    state[action.payload].selected = !state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
