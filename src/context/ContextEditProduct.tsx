import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {
  changerStepProduct,
  deleteFileProductRequest,
} from '../store/reducer/product/actions';

type IProps = {
  children: string | JSX.Element | JSX.Element[];
};

export interface IAppContextEditProduct {
  step: number;
  setStep: (step: number) => void;
  files: any;
  addFile: (file: any) => void;
  removerFile: (id: number) => void;
}

export const ContextEditProduct =
  React.createContext<IAppContextEditProduct | null>(null);

export const ProviderStepsFormEditProduct = ({children}: IProps) => {
  const documents = useAppSelector(
    state => state.product.product.products[0].documents,
  );

  const [files, setFiles] = useState<any[]>(documents);

  const dispatch = useAppDispatch();
  const {stepProduct} = useAppSelector(state => state.product);

  const changerStep = (step: number) => {
    dispatch(changerStepProduct(step));
  };

  const addFile = (file: any) => {
    let newFile: any[] = [...files];
    let mergeFiles: any[] = [];

    mergeFiles = newFile.concat(file);

    setFiles([...mergeFiles]);
  };

  const removerFile = (idFile: any) => {
    let newFile = files;
    let removeItem = newFile.filter((_: any, index: number) => {
      return index !== idFile;
    });

    let array1 = newFile.filter(val => !removeItem.includes(val));

    dispatch(deleteFileProductRequest(array1[0].file));

    setFiles(removeItem);
  };

  return (
    <ContextEditProduct.Provider
      value={{
        step: stepProduct,
        setStep: changerStep,
        files,
        addFile,
        removerFile,
      }}>
      {children}
    </ContextEditProduct.Provider>
  );
};
