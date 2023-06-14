import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {changerStepProduct} from '../store/reducer/product/actions';

type IProps = {
  children: string | JSX.Element | JSX.Element[];
};

export interface IAppContextAddProduct {
  step: number;
  setStep: (step: number) => void;
  files: any;
  addFile: (file: any) => void;
  removerFile: (id: number) => void;
}

export const ContextFormAddProduct =
  React.createContext<IAppContextAddProduct | null>(null);

export const ProviderStepsFormAddProduct = ({children}: IProps) => {
  const [files, setFiles] = useState<any>([]);

  const dispatch = useAppDispatch();
  const {stepProduct} = useAppSelector(state => state.product);

  const changerStep = (step: number) => {
    dispatch(changerStepProduct(step));
  };

  const addFile = (file: any) => {
    let newFiles = files;
    newFiles.push(file);
    setFiles([...newFiles]);
  };

  const removerFile = (idFile: any) => {
    let newFile = files;
    let removeItem = newFile.filter((_, index: number) => {
      return index !== idFile;
    });
    setFiles(removeItem);
  };

  return (
    <ContextFormAddProduct.Provider
      value={{
        step: stepProduct,
        setStep: changerStep,
        files,
        addFile,
        removerFile,
      }}>
      {children}
    </ContextFormAddProduct.Provider>
  );
};
