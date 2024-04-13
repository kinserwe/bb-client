import { User } from "./user.ts";

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
  created_at: string;
}
