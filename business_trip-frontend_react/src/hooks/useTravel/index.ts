import { useGlobalStore } from '../../store';
import travelReducer from '../../store/travel';
import bindActions from '../../store/bindActions';

const { actions } = travelReducer;

const useApi: any = () => {
  const { state, dispatch } = useGlobalStore();

  const { trips } = state;

  const {} = actions;

  const apiActions = bindActions({}, dispatch);

  return { ...trips, ...apiActions };
};

export default useApi;
