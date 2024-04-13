import { Order } from "../../types.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import apiClient from "../../axios.ts";

interface OrderState {
  data: Order | null;
  loading: boolean;
  error: string | undefined;
}

const initialState: OrderState = {
  data: null,
  loading: false,
  error: undefined,
};

export const fetchOrder = createAsyncThunk<
  Order,
  number,
  { rejectValue: string }
>("order/fetchOrder", async (orderId, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get<Order>(`api/orders/${orderId}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.error);
    } else {
      return rejectWithValue("Неизвестная ошибка");
    }
  }
});

export const addToOrder = createAsyncThunk<
  Order,
  {
    orderId: number;
    productId: number;
    quantity: number;
  },
  { rejectValue: string }
>("order/addToOrder", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.patch<Order>(
      `api/orders/${requestData.orderId}`,
      { quantity: requestData.quantity },
      { params: { product_id: requestData.productId, option: "add" } },
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

export const deleteFromOrder = createAsyncThunk<
  Order,
  { orderId: number; productId: number },
  { rejectValue: string }
>("order/deleteFromOrder", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.patch<Order>(
      `api/orders/${requestData.orderId}`,
      null,
      { params: { product_id: requestData.productId, option: "delete" } },
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

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchOrder.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(addToOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToOrder.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(addToOrder.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteFromOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteFromOrder.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteFromOrder.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default orderSlice.reducer;
