import api from '../../common/api';
import User from '../../common/dto/Users';
import { IRequestMethods } from '../../utils/secruity/baseSecruityHttp';
import { TRAVEL } from './types';

// ################ POST TRIPS ##################


// ################# FETCH TRIPS #########################


// ################ ERROR ##################

function failed(error: string) {
  return {
    type: TRAVEL.ERROR,
    payload: error,
  };
}
