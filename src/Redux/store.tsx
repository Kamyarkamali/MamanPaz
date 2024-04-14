import { configureStore } from "@reduxjs/toolkit";

import fetchareSlice from "../Redux/CreatReducer/actionReducer";

const store = configureStore({
  reducer: {
    counter: fetchareSlice,
  },
});

export default store;
