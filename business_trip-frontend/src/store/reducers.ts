import { logger } from './middlewares';
import apiReducer from '../store/api';
import tripsReducer from '../store/trips';
import userReducer from '../store/user';
import { ApiState } from './api/types';
import { TripsState } from './trips/types';
import { UserState } from './user/types';

interface IState {
  api: ApiState;
  trips: TripsState;
  user: UserState;
}

export const initialState: IState = {
  api: apiReducer.initialState,
  trips: tripsReducer.initialState,
  user: userReducer.initialState,
};

export default function reducer(state: IState, action: object) {
  const { api, trips, user } = state;

  const currentState = {
    api: apiReducer.reducer(api, action),
    trips: tripsReducer.reducer(trips, action),
    user: userReducer.reducer(user, action),
  };

  logger(action, state, currentState);

  return currentState;
}
