import { logger } from './middlewares';
import apiReducer from '../store/api';
import tripsReducer from '../store/trips';
import userReducer from '../store/user';
import travelReducer from '../store/travel';
import { ApiState as IApiState } from './api/types';
import { TripsState as ITripsState } from './trips/types';
import { UserState as IUserState } from './user/types';
import { ITravelState } from './travel/types';

interface IState {
  api: IApiState;
  trips: ITripsState;
  user: IUserState;
  travel: ITravelState;
}

export const initialState: IState = {
  api: apiReducer.initialState,
  trips: tripsReducer.initialState,
  user: userReducer.initialState,
  travel: travelReducer.initialState,
};

export default function reducer(state: IState, action: object) {
  const { api, trips, user, travel } = state;

  const currentState = {
    api: apiReducer.reducer(api, action),
    trips: tripsReducer.reducer(trips, action),
    user: userReducer.reducer(user, action),
    travel: travelReducer.reducer(travel, action),
  };

  logger(action, state, currentState);

  return currentState;
}
