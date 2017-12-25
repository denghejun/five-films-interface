import { CacheRequest, MockRequest } from '../common'

export interface MovieSearchRequest extends MockRequest, CacheRequest {
  q: string;
}

export interface MovieSearchResponse {
  reason: string;
  result: any;
  error_code: number;
}

export interface MovieSearchService {
  search(request: MovieSearchRequest): Promise<MovieSearchResponse>;
}
