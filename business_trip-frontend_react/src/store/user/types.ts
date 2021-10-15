export enum USER {
  FETCH_USER = 'FETCH_USER',
  ERROR = 'ERROR',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  POST_USER = 'POST_USER',
  POST_USER_SUCCESS = 'POST_USER_SUCCESS',
  FETCH_ALL_USERS = 'FETCH_ALL_USERS',
  FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS',
}

export interface UserState {
  user: any;
  users?: any;
  message?: string;
  error?: string;
  isLoading: boolean;
  hasChanged: boolean;
}
