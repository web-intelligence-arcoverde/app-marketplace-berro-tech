import React, {useEffect, useState} from 'react';

import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {
  readAgeCategoriesRequest,
  readAnimalRequest,
  readBreedRequest,
  readClassificationRequest,
  readSellTypeRequest,
  setAnimal,
  setAnimalBreed,
  setAnimalSex,
  setClassification,
  setVisibleBottomSheetAgeCategory,
  setVisibleBottomSheetAnimal,
  setVisibleBottomSheetAnimalBreed,
  setVisibleBottomSheetAnimalSex,
  setVisibleBottomSheetClassification,
  setVisibleBottomSheetSellType,
  setSellType,
  updateProductBasicInformationRequest,
} from '../../../store/reducer/product/actions';

import {setAgeCategory as changerAgeCategory} from '../../../store/reducer/product/actions';

import {
  Text,
  SecondInput,
  CustomDropDownPicker,
  Button,
  Separator,
  Loading,
} from '../..';

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
  quantity: yup.number().required(),
  price: yup.string().required(),
  installments: yup.number().required('Esse campo é obrigatorio'),
});

import DatePicker from 'react-native-date-picker';
import {weightMask} from '../../../utils/weightMask';
import {moneyMask} from '../../../utils/moneyMask';

export const StepEditBasicInformationProduct = () => {
  const dispatch = useAppDispatch();

  const product = useAppSelector(state => state.product.product.products[0]);
  const {loadingProduct} = useAppSelector(state => state.product);

  const {gender, ageCategory, date_birth} = product;

  const {amount, installments, price} = product.business;

  const saleType = product.business.sale.name;

  const breedName = product.breed.name;

  const animalName = product.breed.animal.name;

  const classificationName = product.classification.name;

  const ageCategoryName = ageCategory.name;

  const {goToRouter} = useNavigationHook();

  useEffect(() => {
    dispatch(setAnimal(animalName));
    dispatch(setAnimalBreed({animal_breed: breedName}));
    dispatch(setClassification(classificationName));
    dispatch(setAnimalSex({animal_sex: gender}));
    dispatch(changerAgeCategory(ageCategoryName));
    dispatch(setSellType(saleType));
  }, [
    ageCategoryName,
    animalName,
    breedName,
    classificationName,
    dispatch,
    gender,
    saleType,
  ]);

  const [date, setDate] = useState(new Date(date_birth.toString()));
  const [open, setOpen] = useState(false);

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
      name: product.name,
      weight: weightMask(product.weight.toString()),
      description: product.description,
      quantity: amount.toString(),
      price: moneyMask(price.toString()),
      installments: installments.toString(),
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
      id: product.id,
      animal: selectAnimal,
      breed: animal_breed,
      gender: animal_sex,
      ageCategory: setAgeCategory,
      sellType: sellType,
      classification: classification,
      birthday: date,
    };

    let isEmptyObj: boolean = isCheckPropObj(createProduct);

    dispatch(updateProductBasicInformationRequest(createProduct));

    !isEmptyObj &&
      toast.show('Informações atualizadas', {
        type: 'success',
        placement: 'bottom',
        duration: 4000,
        animationType: 'zoom-in',
      });

    !isEmptyObj && goToRouter('DashboardBottomNavigation');

    isEmptyObj &&
      toast.show('Preencha o restante dos campos', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        animationType: 'zoom-in',
      });
  };

  return (
    <Container>
      {loadingProduct ? (
        <Loading />
      ) : (
        <CustomContainer>
          <Text typography="h3" colorFamily="gray" colorVariant="_01">
            Editar o produto
          </Text>

          <SecondInput
            name="name"
            control={control}
            label="Nome"
            placeholder="Nome"
            //@ts-ignore
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
            keyboardType="numeric"
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
            //@ts-ignore
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
            keyboardType="numeric"
            control={control}
            label="Parcelas"
            placeholder="Informe a quantidade de parcelas"
            //@ts-ignore
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
            //@ts-ignore
            errors={errors?.quantity?.message}
            control={control}
            label="Quantidade"
            placeholder="Quantidade"
            keyboardType="numeric"
          />

          <Button
            title="Atualizar"
            variant="containedThirdy"
            onPress={handleSubmit(onSubmit)}
          />

          <DatePicker
            modal
            mode="date"
            maximumDate={new Date()}
            open={open}
            date={date}
            onConfirm={newDate => {
              setOpen(false);
              setDate(newDate);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Separator height={getBottomSpaceHeight() + 28} />
        </CustomContainer>
      )}
    </Container>
  );
};
