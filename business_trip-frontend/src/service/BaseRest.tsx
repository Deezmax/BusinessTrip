import { useCallback, useEffect, useReducer, useState } from 'react';
import { BASE_URI } from '../utils/commons/config';
import reducer, { initialState } from '../utils/hooks/reducer';
import { requestOptionsGet } from '../utils/secruity/baseRest';
import { fetching, success, error } from '../utils/actiontypes/actionTypes';

export async function retrieve() {
  await fetch(`${BASE_URI}api`, requestOptionsGet)
    .then(async (res) => {
      if (!res.ok) {
        // return Promise.reject(res.statusText);
        return null;
      }

      const data = await res.json();
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function useAsyncHook() {
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(false);

  async function fetchAPI() {
    try {
      setLoading(true);

      const response = await fetch(`${BASE_URI}api`, requestOptionsGet);
      const json = await response.json();
      setData(json);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return [data, loading];
}

export const useApiRequest = (uri: string, { verb = 'get', params = {} }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch(fetching());

    try {
      const res = await fetch(`${BASE_URI}${uri}`, requestOptionsGet);
      const body = await res.json();
      dispatch(success(body));
    } catch (e) {
      dispatch(error(e));
    }
  }, [uri, verb, params]);

  return [state, fetchData];
};
