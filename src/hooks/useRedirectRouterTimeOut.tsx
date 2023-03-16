import {useEffect, useState} from 'react';
import {useNavigationHook} from './';

export const useRedirectRouterTimeOut = () => {
  const [count, setCount] = useState(10);

  const {goToRouter} = useNavigationHook();

  useEffect(() => {
    const interval = setInterval(() => {
      // update the state after 1000ms
      setCount(currentCount => currentCount - 1);
    }, 1000);
    // when count is 0, navigate
    count === 0 && goToRouter('/OnboardingScreen');
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, goToRouter]);
};
