import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IAuthState } from "../../interfaces/auth";
import { LocalStorage } from "../../utils/localStorage";

const initialState: IAuthState = {
  auth: LocalStorage.get("auth"),
  error: null,
};

// export const SignIn = createAsyncThunk(
//     "auth/signIn",
//     async (note: INoteCreate, thunkApi) => {
//       return await Fetcher.post<INoteCreate, INote>(`${baseUrl}/api/Note`, note);
//     }
//   );
