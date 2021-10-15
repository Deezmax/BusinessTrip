export enum TRIPS {
  FETCH_TRIPS = 'FETCH_TRIPS',
  ERROR = 'ERROR',
  FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS',
  POST_TRIPS = 'POST_TRIPS',
  POST_TRIPS_SUCCESS = 'POST_TRIPS_SUCCESS',
}

export interface TripsState {
  trips: any;
  fetchedTrips?: any;
  message?: string;
  error?: string;
  isLoading: boolean;
  hasChanged: boolean;
}
