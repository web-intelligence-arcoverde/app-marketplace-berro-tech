import {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import store from '../../../store';

export const ProviderRedux = ({children}: PropsWithChildren<{}>) => {
  return <Provider store={store}>{children}</Provider>;
};
