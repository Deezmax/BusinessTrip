import { useGlobalStore } from '../../store';
import apiReducer from '../../store/api';
import bindActions from '../../store/bindActions';

const { actions } = apiReducer;

const useApi: any = () => {
  const { state, dispatch } = useGlobalStore();

  const { api } = state;

  const { handleFetchApi } = actions;

  const apiActions = bindActions(
    {
      handleFetchApi,
    },
    dispatch,
  );

  return { ...api, apiActions };
};

export default useApi;
