import {useEffect, useRef, useState} from 'react';

const twoDigits = (num: any) => String(num).padStart(2, '0');

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const INITIAL_COUNT = 120;

const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
};

export const useChronometerHook = (initialCount = INITIAL_COUNT) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialCount);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
    setSecondsRemaining(initialCount);

    setStatus(STATUS.STARTED);
  };

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null,
  );

  const chronometer = `${twoDigits(minutesToDisplay)}:${twoDigits(
    secondsToDisplay,
  )}`;

  return {chronometer, handleStart};
};
