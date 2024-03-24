import { LoginCredentials, User } from "../../types.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../axios.ts";
import { AxiosError } from "axios";

interface UserState {
  isAuth: boolean;
  data: User | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  isAuth: false,
  data: null,
  loading: false,
  error: undefined,
};

export const loginUser = createAsyncThunk<
  User,
  LoginCredentials,
  { rejectValue: string }
>("user/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.post<User>("auth/login", credentials);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.error);
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isAuth = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
