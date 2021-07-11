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
  { verb = IRequestMethods.GET, params = {} },
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch(fetching());

    const requestOptions = getRequestOptions(verb);
    // TODO params

    try {
      const res = await fetch(`${BASE_URI}${uri}`, requestOptions);
      const body = await res.json();
      dispatch(success(body));
    } catch (e) {
      dispatch(error(e));
    }
  }, [uri, verb, params]);

  return [state, fetchData];
};
