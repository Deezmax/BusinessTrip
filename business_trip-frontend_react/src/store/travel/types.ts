export enum TRAVEL {
  FETCH_TRAVEL = 'FETCH_TRAVEL',
  ERROR = 'ERROR',
  FETCH_TRAVEL_SUCCESS = 'FETCH_TRAVEL_SUCCESS',
  POST_TRAVEL = 'POST_TRAVEL',
  POST_TRAVEL_SUCCESS = 'POST_TRAVEL_SUCCESS',
}

export interface ITravelState {
  travels: [];
  message?: string;
  error?: string;
  isLoading: boolean;
  hasChanged: boolean;
}
