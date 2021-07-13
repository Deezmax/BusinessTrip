import { useGlobalStore } from '../../store';
import tripsReducer from '../../store/trips';
import bindActions from '../../store/bindActions';

const { actions } = tripsReducer;

const useApi: any = () => {
  const { state, dispatch } = useGlobalStore();

  const { trips } = state;

  const { handleFetchTrips, handlePostTrips } = actions;

  const apiActions = bindActions(
    {
      handleFetchTrips,
      handlePostTrips,
    },
    dispatch,
  );

  return { ...trips, ...apiActions };
};

export default useApi;
