import { USER, UserState } from './types';

export const initialState: UserState = {
  user: {},
  users: [],
  hasChanged: false,
  isLoading: false,
};

export default function useUser(state = initialState, action: any) {
  switch (action.type) {
    case USER.FETCH_USER: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        user: undefined,
      };
    }
    case USER.FETCH_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        message: undefined,
        user: action.payload,
      };
    }
    case USER.POST_USER: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        // user: undefined,
      };
    }
    case USER.POST_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        message: action.payload,
        // user: action.payload,
      };
    }
    case USER.FETCH_ALL_USERS: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        message: undefined,
        users: [],
      };
    }
    case USER.FETCH_ALL_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        message: undefined,
        users: action.payload.users,
      };
    }
    case USER.ERROR: {
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
