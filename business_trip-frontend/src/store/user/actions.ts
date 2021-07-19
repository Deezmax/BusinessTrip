import api from '../../common/api';
import User from '../../common/dto/Users';
import { IRequestMethods } from '../../utils/secruity/baseSecruityHttp';
import { USER } from './types';

// ################ POST USER ##################

export function handlePostUser(user: User) {
  return async (dispatch: any) => {
    console.log(user);
    dispatch(postUser());
    try {
      const fetchedUser = await postUserResponse(user);
      if (fetchedUser) {
        dispatch(postUserSuccess(fetchedUser));
      } else {
        dispatch(failed('Konnte User nicht posten'));
      }
    } catch (error) {
      dispatch(failed(error.response.data));
    }
  };
}

function postUser(): any {
  return {
    type: USER.POST_USER,
    isLoading: true,
    payload: undefined,
  };
}

function postUserSuccess(user: User): any {
  return {
    type: USER.POST_USER_SUCCESS,
    payload: user,
  };
}

async function postUserResponse(body: any) {
  const respone = await api('/sample', IRequestMethods.POST, body);
  const json = await respone.json();
  return json;
}

// ################# FETCH USER #########################

export function handleFetchUser() {
  return async (dispatch: any) => {
    dispatch(fetchUser());
    try {
      const user = await fetchUserResponse();
      if (user) {
        dispatch(fetchUserSuccess(user));
      } else {
        dispatch(failed('Konnte User nicht laden'));
      }
    } catch (error) {
      dispatch(failed(error.response.data));
    }
  };
}

function fetchUser() {
  return {
    type: USER.FETCH_USER,
    isLoading: true,
    payload: undefined,
  };
}

function fetchUserSuccess(trips: any) {
  return {
    type: USER.FETCH_USER_SUCCESS,
    payload: trips,
  };
}

async function fetchUserResponse() {
  const respone = await api('/sample', IRequestMethods.GET);
  const json = await respone.json();
  return json;
}

export function handleFetchAllUser() {
  return async (dispatch: any) => {
    dispatch(fetchAllUser());
    try {
      const user = await fetchAllUserResponse();
      if (user) {
        dispatch(fetchAllUserSuccess(user));
      } else {
        dispatch(failed('Konnte User nicht laden'));
      }
    } catch (error) {
      dispatch(failed(error.response.data));
    }
  };
}

function fetchAllUser() {
  return {
    type: USER.FETCH_ALL_USERS,
    isLoading: true,
    payload: undefined,
  };
}

function fetchAllUserSuccess(users: any) {
  return {
    type: USER.FETCH_ALL_USERS_SUCCESS,
    payload: users,
  };
}

async function fetchAllUserResponse() {
  // TODO
  const respone = await api('/user/users', IRequestMethods.GET);
  const json = await respone.json();
  return json;
}

// ################ ERROR ##################

function failed(error: string) {
  return {
    type: USER.ERROR,
    payload: error,
  };
}
