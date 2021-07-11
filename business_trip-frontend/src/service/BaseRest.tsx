import { useCallback, useReducer } from 'react';
import { BASE_URI } from '../utils/commons/config';
import reducer, { initialState } from '../utils/hooks/reducer';
import {
  getRequestOptions,
  IRequestMethods,
} from '../utils/secruity/baseSecruityHttp';
import { fetching, success, error } from '../utils/actiontypes/actionTypes';

export const useApiRequest = (
  uri: string,
  { method = IRequestMethods.GET, params = {} },
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(
    async (body?: any) => {
      dispatch(fetching());

      const requestOptions = getRequestOptions(method, body);

      // TODO params

      try {
        const res = await fetch(`${BASE_URI}${uri}`, requestOptions);
        const resBody = await res.json();
        dispatch(success(resBody));
      } catch (e) {
        dispatch(error(e));
      }
    },
    [uri, method, params],
  );

  return [state, fetchData];
};
