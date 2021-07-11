// Enum States for Dispatch/Reducer

export enum IStates {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const fetching = () => ({
  type: IStates.FETCHING,
});

export const success = (res: JSON) => ({
  type: IStates.SUCCESS,
  res,
});

export const error = (res: JSON) => ({
  type: IStates.ERROR,
  res,
});
