import { TRIPS, TripsState } from './types';

export const initialState: TripsState = {
  trips: {},
  fetchedTrips: {},
  hasChanged: false,
  isLoading: false,
};

export default function useTrips(state = initialState, action: any) {
  switch (action.type) {
    case TRIPS.FETCH_TRIPS: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        trips: undefined,
      };
    }
    case TRIPS.FETCH_TRIPS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        message: undefined,
        trips: action.payload,
      };
    }
    case TRIPS.POST_TRIPS: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        fetchedTrips: undefined,
      };
    }
    case TRIPS.POST_TRIPS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        fetchedTrips: action.payload,
      };
    }
    case TRIPS.ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        message: undefined,
      };
    }
    default: {
      return state;
    }
  }
}
