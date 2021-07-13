import {
  getRequestOptions,
  IRequestMethods,
} from '../utils/secruity/baseSecruityHttp';
import { BASE_URI } from './config';

export default async (
  url: any,
  method: IRequestMethods = IRequestMethods.GET,
  body?: any,
) => {
  const requestOptions = getRequestOptions(method, body);
  return fetch(`${BASE_URI}${url}`, requestOptions);
};
