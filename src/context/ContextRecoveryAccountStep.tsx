import React, {useState} from 'react';

export interface AppContextInterface {
  step?: string;
  setStep?: () => void;
}

export const AppContextStepRecoveryAccount =
  React.createContext<AppContextInterface | null>(null);
