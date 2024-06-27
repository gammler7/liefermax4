import { configureStore } from "@reduxjs/toolkit";
import warenkorbReducer from '../redux/warenkorbSlice'

export default configureStore( {
  reducer: {
    warenkorb: warenkorbReducer,
  },
});