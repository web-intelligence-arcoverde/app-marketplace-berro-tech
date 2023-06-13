import React, {useState} from 'react';

type IProps = {
  children: string | JSX.Element | JSX.Element[];
};

export interface IAppContextAddProduct {
  step: number;
  setStep: (step: number) => void;
}

export const ContextFormAddProduct =
  React.createContext<IAppContextAddProduct | null>(null);

export const ProviderStepsFormAddProduct = ({children}: IProps) => {
  const [step, setStep] = useState(0);

  return (
    <ContextFormAddProduct.Provider value={{step, setStep}}>
      {children}
    </ContextFormAddProduct.Provider>
  );
};
