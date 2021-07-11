// Enum States for Dispatch/Reducer

export enum IStates {
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export const fetching = () => ({
  type: IStates.FETCHING,
});

export const success = (res: any) => ({
  type: IStates.SUCCESS,
  res,
});

export const error = (res: any) => ({
  type: IStates.ERROR,
  res,
});
