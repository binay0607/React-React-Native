import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlert } from "../../interfaces/alert";

const initialState: IAlert = {
  body: "Nothing",
  variant: "success",
  timeout: 1000,
};
export const alertsSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    show(state: IAlert, action: PayloadAction<IAlert>): IAlert {
      return { ...state, ...action.payload };
    },
  },
});

export const alertActions = { ...alertsSlice.actions };

export default alertsSlice.reducer;
