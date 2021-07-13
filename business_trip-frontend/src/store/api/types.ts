export enum API {
  FETCH_API = 'FETCH_CAMPAIGNS',
  ERROR = 'ERROR',
  FETCH_API_SUCCESS = 'FETCH_API_SUCCESS',
}

export interface ApiState {
  api: any;
  message?: string;
  error?: string;
  isLoading: boolean;
  hasChanged: boolean;
}
