import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { cairoSlice } from "./cairo/cairoSlice";


export const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      cairo: cairoSlice.reducer,
    },
  })