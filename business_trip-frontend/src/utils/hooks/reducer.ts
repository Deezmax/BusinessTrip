import { IStates } from '../actiontypes/actionTypes';

export const initialState: any = {
  status: null,
  response: null,
};

const reducer = (state = initialState, { type, res }: any = {}) => {
  switch (type) {
    case IStates.FETCHING:
      return { ...initialState, status: IStates.FETCHING };
      break;
    case IStates.SUCCESS:
      return { ...state, status: IStates.SUCCESS, res };
      break;
    case IStates.ERROR:
      return { ...state, status: IStates.SUCCESS, res };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
