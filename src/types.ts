export interface LoginCredentials {
  username: string;
  password: string;
}

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  is_staff: boolean;
}
