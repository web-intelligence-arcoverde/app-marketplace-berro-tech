import React from 'react';

export interface IAppContextSignUpScreenStep {
  step: string;
  setStep: () => string;
}

export const ContextSignUpScreenStep =
  React.createContext<IAppContextSignUpScreenStep | null>(null);
