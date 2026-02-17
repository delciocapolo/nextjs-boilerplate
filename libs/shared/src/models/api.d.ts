export interface ApiResponse<T> {
  data: T | Partial<{ error: string; }>;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}