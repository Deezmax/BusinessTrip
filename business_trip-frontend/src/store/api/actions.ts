import api from '../../common/api';
import { API } from './types';

// ################# FETCH API #########################

export function handleFetchApi() {
  return async (dispatch: any) => {
    dispatch(fetchApi());
    try {
      const api = await fetchApiResponse();
      if (api) {
        dispatch(fetchApiSuccess(api));
      } else {
        dispatch(failed('Konnte API nicht laden'));
      }
    } catch (error) {
      dispatch(failed(error.response.data));
    }
  };
}

function fetchApi() {
  return {
    type: API.FETCH_API,
    isLoading: true,
    payload: undefined,
  };
}

function fetchApiSuccess(api: any) {
  return {
    type: API.FETCH_API_SUCCESS,
    payload: api,
  };
}

async function fetchApiResponse() {
  const respone = await api('');
  const json = await respone.json();
  return json;
}

// ################ ERROR ##################

function failed(error: string) {
  return {
    type: API.ERROR,
    payload: error,
  };
}
