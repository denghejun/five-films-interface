export interface MovieSearchRequest {
  q: string;
  mock?: boolean;
}

export interface MovieSearchResponse {
  reason: string;
  result: any;
  error_code: number;
}

export interface MovieSearchService {
  search(request: MovieSearchRequest): Promise<MovieSearchResponse>;
}
