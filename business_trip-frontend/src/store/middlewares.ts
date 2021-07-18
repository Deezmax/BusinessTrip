export const asyncer = (dispatch: any, state: any) => (action: any) =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action);

export const logger = (action: object, prevState: object, currentState: object) => {
  console.groupCollapsed('Logger');
  console.log(`Action: `, action);
  console.log(`PreviousState: `, prevState);
  console.log(`CurrentState: `, currentState);
  console.groupEnd();
};
