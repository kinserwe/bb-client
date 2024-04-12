import { PaginatedResponse, Product } from "../../types.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestParams } from "../../pages/CatalogPage.tsx";
import { AxiosError } from "axios";
import apiClient from "../../axios.ts";

interface productState {
  data: Product[] | null;
  total_pages: number | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: productState = {
  data: null,
  total_pages: null,
  loading: false,
  error: undefined,
};

export const fetchProducts = createAsyncThunk<
  PaginatedResponse<Product>,
  RequestParams,
  { rejectValue: string }
>("products/fetch", async (params, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get<PaginatedResponse<Product>>(
      "api/products",
      { params: params },
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.error);
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.results;
      state.total_pages = action.payload.total_pages;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
