import { CacheRequest, MockRequest } from '../common'

export interface MovieRecommendRequest extends MockRequest, CacheRequest {
  dtType?: string;
  city: string;
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
