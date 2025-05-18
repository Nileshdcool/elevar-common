export interface PaginationMeta {
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    pageCount: number;
  };
}

export interface StrapiCountResponse {
  data: any[];
  meta: PaginationMeta;
}