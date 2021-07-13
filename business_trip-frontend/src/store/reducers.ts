import { logger } from './middlewares';
import apiReducer from '../store/api';
import tripsReducer from '../store/trips';
import { ApiState } from './api/types';
import { TripsState } from './trips/types';

interface IState {
  api: ApiState;
  trips: TripsState;
}

export const initialState: IState = {
  api: apiReducer.initialState,
  trips: tripsReducer.initialState,
};

export default function reducer(state: IState, action: object) {
  const { api, trips } = state;

  const currentState = {
    api: apiReducer.reducer(api, action),
    trips: tripsReducer.reducer(trips, action),
  };

  logger(action, state, currentState);

  return currentState;
}
