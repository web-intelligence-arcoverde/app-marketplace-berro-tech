import {useEffect} from 'react';
import {useAppSelector, useAsyncStorage} from '.';

export const useCheckUserLoggedIn = () => {
  const {getData} = useAsyncStorage();

  const {token, isLogged} = useAppSelector(state => state.auth);

  useEffect(() => {
    getData('@token');
  }, [getData]);

  return {
    token,
    isLogged,
  };
};
