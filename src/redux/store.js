import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screen/reducer";

/** Store : objek yang menyimpan seluruh state global dan menyediakan
 * method dispatch action untuk mengakses dan mentrigger perubahan state*/
export const store = configureStore({
  // panggil reducer-reducer yang mau dipake
  reducer: {
    screen: screenReducer,
  },
});

export default store;
