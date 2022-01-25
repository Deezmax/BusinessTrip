import React, { createContext, useCallback, useContext, useReducer } from 'react';
import { asyncer } from './middlewares';
import mainReducer, { initialState } from './reducers';

interface ContextProps {
  state: any;
  dispatch: any;
}

const GlobalStore = createContext({} as ContextProps);

export const useGlobalStore = () => useContext(GlobalStore);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatchBase] = useReducer(mainReducer, initialState);

  const dispatch = useCallback(asyncer(dispatchBase, state), []);

  return <GlobalStore.Provider value={{ state, dispatch }}>{children}</GlobalStore.Provider>;
}
