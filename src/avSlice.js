import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: 'https://pixabay.com/get/gd9f76a0bd21c430decbefd6552d3578aed2cdf73f233d2a922410cf2b48a4d4503a82e34b52668d5c378c37c8da9424ffcccc3f06a050510ffd4198ea4e6b368_1280.jpg',
      name: 'Projectors',
      cost: 200,
      quantity: 0,
    },
    {
      img: 'https://pixabay.com/get/gd233cfd289c9c6949b91426803e80caf5b332448bd7021b642cf6ba3cd0099d536a273573086db55ed3eb0a53f63af08838f2d1cd1e395e44164d064a1fe28bd_1280.jpg',
      name: 'Speakers',
      cost: 35,
      quantity: 0,
    },
    {
      img: 'https://pixabay.com/get/g2e38cca85670cd1a3b0120b5f20f027d8553df1716c64cb7de99e18e3e010485b429ff56d57583f90c030e249311b668d23d1f0583c3b75c3a78d590d29e0657_1280.jpg',
      name: 'Microphones',
      cost: 45,
      quantity: 0,
    },
    {
      img: 'https://pixabay.com/get/g2b6531df38e26f33998c28a1ae954e3aefd8022bcf97b39f056acf524b448f1bc775e492f89ff5f859b4d31b5a138fb5_1280.jpg',
      name: 'Whiteboards',
      cost: 80,
      quantity: 0,
    },
    {
      img: 'https://pixabay.com/get/gd6841a64389a2c3637744de52daf22a9ff8b06befdbfc6db9b31845864ba8c5504b902da63eaea6b8bbfab08ee5927af3b5ad90453de4d7e2ac9e85e1656a050_1280.jpg',
      name: 'Signage',
      cost: 80,
      quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {                       //reducer function increments the quantity of a specific item in the state.
      const item = state[action.payload];                           //The reducer retrieves the item from the state using state[action.payload].
      if (item) {                                                   //If the item exists, it increments its quantity property by 1.
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {                       //reducer function decrements the quantity of a specific item in the state. it takes two parameters: state and action.
     const item = state[action.payload];                            //The action.payload object contains the item identifier to decrement. - It's reducer retrieves the item from the state using state[action.payload].
     if (item && item.quantity > 0) {                               //If the item exists and its quantity is greater than 0, it decrements its quantity property by 1, ensuring the quantity doesn't drop below 0 and indicates no more available items.
        item.quantity--;
     }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
