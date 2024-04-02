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
  is_staff: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  quantity: number;
  manufacturer: number;
  category: number;
}

export interface Category {
  name: string;
  subcategories: string[];
}

export interface Review {
  id: number;
  user: User;
  product: Product;
  value: number;
  text: string;
  created_at: Date;
}
