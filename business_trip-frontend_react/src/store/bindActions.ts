import { NameToValueMap } from '../common/types';

export default function bindActions(actions: any, dispatch: any) {
  const bindAction = (action: any, dispatch: any) => {
    return function () {
      return dispatch(action.apply(null, arguments));
    };
  };

  if (typeof actions === 'function') {
    return bindAction(actions, dispatch);
  }

  if (typeof actions !== 'object' || actions === null) {
    throw new Error('SHIT HAPPEND');
  }
  const boundActions: NameToValueMap = {};
  for (const key in actions) {
    const action: any = actions[key];
    if (typeof action === 'function') {
      boundActions[key] = bindAction(action, dispatch);
    }
  }
  return boundActions;
}
