import { initialState as loadingStatusInitialState } from './LoadingStatus/reducer';
import { initialState as authenticationInitialState } from './Authentication/reducer';
import { RootState } from './rootReducer';

const initialStoreMock: RootState = {
  loadingStatus: loadingStatusInitialState,
  authentication: authenticationInitialState,
};

export const getInitialStoreMock = (partialState?: Partial<RootState>): RootState => {
  return { ...initialStoreMock, ...partialState };
};
