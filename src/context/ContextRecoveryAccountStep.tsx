import React from 'react';

export interface AppContextInterface {
  step?: string;
  setStep?: () => void;
  email?: string;
  setEmail?: () => void;
}

export const AppContextStepRecoveryAccount =
  React.createContext<AppContextInterface | null>(null);
