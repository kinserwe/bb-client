import { Product } from "./product.ts";

export enum OrderStatus {
  OPEN = 1,
  PENDING = 2,
  CANCELLED = 3,
  ACCEPTED = 4,
  DELIVERED = 5,
}

export interface Order {
  id: number;
  created_at: Date;
  status: OrderStatus;
  total_cost: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
}
