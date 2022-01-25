import { TRAVEL, ITravelState } from './types';

export const initialState: ITravelState = {
  travels: [],
  hasChanged: false,
  isLoading: false,
};

export default function useTRAVEL(state = initialState, action: any) {
  switch (action.type) {
    case TRAVEL.FETCH_TRAVEL: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        TRAVEL: undefined,
      };
    }
    case TRAVEL.FETCH_TRAVEL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        message: undefined,
        travels: action.payload,
      };
    }
    case TRAVEL.POST_TRAVEL: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
      };
    }
    case TRAVEL.POST_TRAVEL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
      };
    }
    case TRAVEL.ERROR: {
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
