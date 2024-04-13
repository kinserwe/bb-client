export interface PaginatedResponse<T> {
  total_pages: number;
  results: T[];
}
