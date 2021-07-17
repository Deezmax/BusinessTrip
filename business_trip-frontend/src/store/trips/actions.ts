import api from '../../common/api';
import User from '../../common/dto/Users';
import { IRequestMethods } from '../../utils/secruity/baseSecruityHttp';
import { TRIPS } from './types';

// ################ POST TRIPS ##################

export function handlePostTrips(user: User) {
  return async (dispatch: any) => {
    dispatch(postTrips());
    try {
      const trips = await postTripsResponse(user);
      if (trips) {
        dispatch(postTripsSuccess(trips));
      } else {
        dispatch(failed('Konnte API nicht laden'));
      }
    } catch (error) {
      dispatch(failed(error.response.data));
    }
  };
}

function postTrips(): any {
  return {
    type: TRIPS.POST_TRIPS,
    isLoading: true,
    payload: undefined,
  };
}

function postTripsSuccess(trips: void): any {
  return {
    type: TRIPS.POST_TRIPS_SUCCESS,
    payload: trips,
  };
}

async function postTripsResponse(body: any) {
  const respone = await api('/sample', IRequestMethods.POST, body);
  const json = await respone.json();
  return json;
}

// ################# FETCH TRIPS #########################

export function handleFetchTrips() {
  return async (dispatch: any) => {
    dispatch(fetchTrips());
    try {
      const trips = await fetchTripsResponse();
      if (trips) {
        dispatch(fetchTripsSuccess(trips));
      } else {
        dispatch(failed('Konnte API nicht laden'));
      }
    } catch (error) {
      dispatch(failed(error.response.data));
    }
  };
}

function fetchTrips() {
  return {
    type: TRIPS.FETCH_TRIPS,
    isLoading: true,
    payload: undefined,
  };
}

function fetchTripsSuccess(trips: any) {
  return {
    type: TRIPS.FETCH_TRIPS_SUCCESS,
    payload: trips,
  };
}

async function fetchTripsResponse() {
  const respone = await api('/sample', IRequestMethods.GET);
  const json = await respone.json();
  return json;
}

// ################ ERROR ##################

function failed(error: string) {
  return {
    type: TRIPS.ERROR,
    payload: error,
  };
}
