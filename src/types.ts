export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone?: string;
  is_staff: boolean;
  order: number;
}

export interface Manufacturer {
  id: number;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  quantity: number;
  manufacturer: Manufacturer;
  category: string;
  parent_category: string;
  review_count: number;
}

export interface Review {
  id: number;
  user: User;
  product: Product;
  value: number;
  text: string;
  created_at: Date;
}

export interface PaginatedResponse<T> {
  total_pages: number;
  results: T[];
}

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
