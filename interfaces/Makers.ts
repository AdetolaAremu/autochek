export interface CarMake {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Pagination {
  total: number;
  currentPage: number;
  pageSize: number;
}

export interface MakeListResponse {
  makeList: CarMake[];
  pagination: Pagination;
}
