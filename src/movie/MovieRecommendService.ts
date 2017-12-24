export interface MovieRecommendRequest {
  dtType?: string;
  city: string;
  mock?: boolean;
}

export interface MovieRecommendResponse {
  reason: string;
  result: any;
  error_code: number;
  resultcode?: string;
}

export interface MovieRecommendService {
  getRecommendMovies(request: MovieRecommendRequest): Promise<MovieRecommendResponse>;
}
