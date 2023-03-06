import { configureStore } from '@reduxjs/toolkit';
import personsReducer from "./reducer/reducer"

export const store = configureStore({
  reducer: {
    persons: personsReducer,
  },
});
