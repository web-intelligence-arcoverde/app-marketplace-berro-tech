import React, {useEffect, useContext, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  ContextFormAddProduct,
  IAppContextAddProduct,
} from '../../../context/ContextContainerAddProduct';

import {useForm} from 'react-hook-form';
import {
  readAgeCategoriesRequest,
  readAnimalRequest,
  readBreedRequest,
  readClassificationRequest,
  readSellTypeRequest,
  setProductInfo,
  setVisibleBottomSheetAgeCategory,
  setVisibleBottomSheetAnimal,
  setVisibleBottomSheetAnimalBreed,
  setVisibleBottomSheetAnimalSex,
  setVisibleBottomSheetClassification,
  setVisibleBottomSheetSellType,
} from '../../../store/reducer/product/actions';

import {
  Text,
  SecondInput,
  CustomInput,
  CustomDropDownPicker,
  Button,
  Separator,
} from '../../';

const handleDate = (value: string) => {
  const selectedDate = new Date(value);

  return selectedDate.toISOString().slice(0, 10);
};

import {Container, CustomContainer} from './style';
import {ErrorMessage} from '../../../locale';
import {useToast} from 'react-native-toast-notifications';
import {formatDate, getBottomSpaceHeight} from '../../../utils';
import {MaskInput} from '../../atoms/MaskInput/MaskInput';

const schema = yup.object({
  name: yup.string().required(ErrorMessage['name-required']),
  weight: yup.string().required(),
  description: yup.string().required(),
  quantity: yup.string().required(),
  price: yup.string().required(),
  installments: yup.string().required(),
});

import DatePicker from 'react-native-date-picker';

export const StepBasicInformationProduct = () => {
  const {setStep} = useContext(ContextFormAddProduct) as IAppContextAddProduct;

  const {productInfo} = useAppSelector(state => state.product);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const {
    selectAnimal,
    animal_breed,
    animal_sex,
    setAgeCategory,
    sellType,
    classification,
  } = useAppSelector(state => state.product);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: productInfo.name,
      weight: productInfo.weight,
      description: productInfo.description,
      quantity: productInfo.quantity,
      price: productInfo.price,
      installments: productInfo.installments,
    },
  });

  useEffect(() => {
    dispatch(readAnimalRequest());
    dispatch(readAgeCategoriesRequest());
    dispatch(readSellTypeRequest());
    dispatch(readClassificationRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectAnimal) {
      dispatch(readBreedRequest(selectAnimal));
    }
  }, [dispatch, selectAnimal]);

  function isCheckPropObj(obj: any) {
    let isEmptyObj = false;
    Object.keys(obj).map(item => {
      if (obj[item] === '' || obj[item] === null) {
        isEmptyObj = true;
      }
    });
    return isEmptyObj;
  }

  const toast = useToast();

  //@ts-ignore
  const onSubmit = data => {
    let createProduct = {
      ...data,
      animal: selectAnimal,
      breed: animal_breed,
      gender: animal_sex,
      date: setAgeCategory,
      sellType: sellType,
      classification: classification,
      birthday: date,
    };

    dispatch(setProductInfo(createProduct));

    let isEmptyObj: boolean = isCheckPropObj(createProduct);

    //@ts-ignore
    isCheckPropObj &&
      toast.show('Preencha o restante dos campos', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        animationType: 'zoom-in',
      });

    !isEmptyObj && setStep(1);
  };

  return (
    <Container>
      <CustomContainer>
        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Sobre o produto
        </Text>

        <SecondInput
          name="name"
          control={control}
          label="Nome"
          placeholder="Nome"
          errors={errors?.name?.message}
        />

        <CustomDropDownPicker
          name="animal"
          label={'Animal'}
          placeholder={'Selecione um animal'}
          onPress={() => dispatch(setVisibleBottomSheetAnimal(1))}
          value={selectAnimal}
        />

        <CustomDropDownPicker
          name="breed"
          label="Raça"
          placeholder={'Selecione uma raça'}
          onPress={() => {
            if (selectAnimal !== '') {
              dispatch(
                setVisibleBottomSheetAnimalBreed({
                  visible_animal_breed_select: 1,
                }),
              );
            }
          }}
          value={animal_breed}
        />

        <CustomDropDownPicker
          name="classification"
          label="Classificação"
          placeholder={'Classificação'}
          onPress={() => dispatch(setVisibleBottomSheetClassification(1))}
          value={classification}
        />

        <CustomDropDownPicker
          name="gender"
          label={'Sexo'}
          placeholder={'Selecione o sexo do animal'}
          onPress={() =>
            dispatch(
              setVisibleBottomSheetAnimalSex({visible_animal_sex_select: 1}),
            )
          }
          value={animal_sex}
        />

        <CustomDropDownPicker
          name="ageCategory"
          label="Idade"
          placeholder={'Selecione a idade do animal'}
          onPress={() => dispatch(setVisibleBottomSheetAgeCategory(1))}
          value={setAgeCategory}
        />

        <MaskInput
          name="weight"
          control={control}
          label="Peso"
          placeholder="Peso"
          errors={errors?.weight?.message}
          maskType="weight"
        />

        <CustomDropDownPicker
          name="birthday"
          label="Data de nascimento"
          placeholder={'Data de nascimento'}
          onPress={() => setOpen(true)}
          value={formatDate(new Date(handleDate(date.toString())))}
        />

        <SecondInput
          name="description"
          control={control}
          label="Descrição"
          placeholder="Descrição"
          errors={errors?.description?.message}
        />

        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Sobre o produto
        </Text>

        <CustomDropDownPicker
          name="sellType"
          label={'Tipo de venda'}
          placeholder={'Selecione o tipo de venda'}
          onPress={() => dispatch(setVisibleBottomSheetSellType(1))}
          value={sellType}
        />

        <SecondInput
          name="installments"
          control={control}
          label="Parcelas"
          placeholder="Informe a quantidade de parcelas"
          errors={errors?.installments?.message}
        />

        <MaskInput
          control={control}
          label="Preço"
          name="price"
          placeholder="Digite o valor do animal"
          errors={errors?.price?.message}
          maskType="price"
        />

        <SecondInput
          name="quantity"
          errors={errors?.quantity?.message}
          control={control}
          label="Quantidade"
          placeholder="Quantidade"
        />

        <Button
          title="Próximo"
          variant="containedThirdy"
          onPress={handleSubmit(onSubmit)}
        />

        <DatePicker
          modal
          mode="date"
          maximumDate={new Date()}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <Separator height={getBottomSpaceHeight() + 28} />
      </CustomContainer>
    </Container>
  );
};
