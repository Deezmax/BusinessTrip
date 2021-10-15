import { useGlobalStore } from '../../store';
import userReducer from '../../store/user';
import bindActions from '../../store/bindActions';

const { actions } = userReducer;

const useUser: any = () => {
  const { state, dispatch } = useGlobalStore();

  const { user } = state;

  const { handleFetchAllUser, handleFetchUser, handlePostUser } = actions;

  const apiActions = bindActions(
    {
      handleFetchAllUser,
      handleFetchUser,
      handlePostUser,
    },
    dispatch,
  );

  return { ...user, ...apiActions };
};

export default useUser;
