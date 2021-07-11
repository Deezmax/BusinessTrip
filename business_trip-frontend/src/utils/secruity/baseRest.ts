import { IStates } from '../actiontypes/actionTypes';

const header = {
  'Content-Type': 'application/json',
  Accept: 'application/json,application/xhtml+xml,application/xml,text/html',
};

export enum IRequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface RequestOptions {
  method: IRequestMethods;
  headers: any;
}

export function getRequestOptions(method?: IRequestMethods) {
  const requestOptions: RequestOptions = {
    method: null,
    headers: null,
  };

  switch (method) {
    case IRequestMethods.GET:
      requestOptions.method = IRequestMethods.GET;
      break;
    case IRequestMethods.POST:
      requestOptions.method = IRequestMethods.POST;
      break;
    case IRequestMethods.PUT:
      requestOptions.method = IRequestMethods.PUT;
      break;
    case IRequestMethods.DELETE:
      requestOptions.method = IRequestMethods.DELETE;
      break;
    default:
      requestOptions.method = IRequestMethods.GET;
      break;
  }

  requestOptions.headers = header;

  return requestOptions;
}
