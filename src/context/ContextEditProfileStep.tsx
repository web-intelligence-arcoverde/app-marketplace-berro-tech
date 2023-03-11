import React from 'react';

export interface IAppContextEditProfileStepp {
  step: string;
  setStep: () => string;
}

export const ContextEditProfileStep =
  React.createContext<IAppContextEditProfileStepp | null>(null);
