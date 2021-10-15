import { API, ApiState } from './types';

export const initialState: ApiState = {
  api: {},
  hasChanged: false,
  isLoading: false,
};

export default function api(state = initialState, action: any) {
  switch (action.type) {
    case API.FETCH_API: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        api: undefined,
      };
    }
    case API.FETCH_API_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        message: undefined,
        api: action.payload,
      };
    }
    case API.ERROR: {
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
