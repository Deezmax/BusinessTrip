import { logger } from './middlewares';

import apiReducer from '../store/api';
import { ApiState } from './api/types';

interface IState {
  api: ApiState;
}

export const initialState: IState = {
  api: apiReducer.initialState,
};

export default function reducer(state: IState, action: object) {
  const { api } = state;

  const currentState = {
    api: apiReducer.reducer(api, action),
  };

  logger(action, state, currentState);

  return currentState;
}
