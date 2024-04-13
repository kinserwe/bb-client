import { User } from "../../types/user.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginCredentials, RegisterData } from "../../types/auth.ts";
import apiClient from "../../axios.ts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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
    if (error instanceof AxiosError && error.response?.data.error) {
      return rejectWithValue(error.response.data.error);
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});

export const registerUser = createAsyncThunk<
  void,
  RegisterData,
  { rejectValue: string }
>("user/register", async (data, { rejectWithValue }) => {
  try {
    await apiClient.post<void>("auth/register", data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.error);
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});

export const fetchProfile = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("user/profile", async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get<User>("auth/users/me");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.error);
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await apiClient.post<User>("auth/logout");
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.error);
      } else {
        return rejectWithValue("Неизвестная ошибка");
      }
    }
  },
);

export const updateUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "user/update",
  async (updateData, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.patch<User>("auth/users/me", updateData);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.error);
      } else {
        return rejectWithValue("Неизвестная ошибка");
      }
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuth = true;
      state.data = action.payload;
      state.loading = false;
      toast.success(`Добро пожаловать, ${action.payload.first_name}!`, {
        position: "top-center",
        autoClose: 2000,
      });
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isAuth = true;
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.data = null;
      state.isAuth = false;
      state.loading = false;
      toast.info("Вы вышли из аккаунта", {
        position: "top-center",
        autoClose: 2000,
      });
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      toast.success("Изменения сохранены", {
        position: "top-center",
        autoClose: 2000,
      });
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
