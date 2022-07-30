export interface ResponseWrapper<T> {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  responseData?: T | null;
}
