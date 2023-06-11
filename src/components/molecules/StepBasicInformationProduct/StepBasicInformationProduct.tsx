import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../../hooks';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import {
  changerStepProduct,
  readAgeCategoriesRequest,
  readAnimalRequest,
  readBreedRequest,
  setVisibleBottomSheetAgeCategory,
  setVisibleBottomSheetAnimal,
  setVisibleBottomSheetAnimalBreed,
  setVisibleBottomSheetAnimalSex,
} from '../../../store/reducer/product/actions';

import {
  Text,
  SecondInput,
  CustomInput,
  CustomDropDownPicker,
  Button,
} from '../../';

import {Container, CustomContainer} from './style';
import {ErrorMessage} from '../../../locale';

const schema = yup.object({
  name: yup.string().required(ErrorMessage['name-required']),
  weight: yup.number().required(),
  date_birth: yup.date().required(),
  description: yup.string().required(),
  quantity: yup.string().required(),
  price: yup.string().required(),
  installments: yup.string().required(),
});

export const StepBasicInformationProduct = () => {
  const dispatch = useAppDispatch();
  const {selectAnimal, animal_breed, animal_sex, setAgeCategory} =
    useAppSelector(state => state.product);

  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      animal: '',
      breed: '',
      classification: '',
      gender: '',
      ageCategory: '',
      weight: '',
      date_birth: utc,
      description: '',
      sellType: '',
      quantity: '',
      price: '',
      installments: '',
    },
  });

  const [productBasic, setProductBasic] = useState({
    name: '',
    animal: '',
    breed: '',
    classification: '',
    gender: '',
    ageCategory: '',
    weight: '',
    date_birth: utc,
    description: '',
    sellType: '',
    quantity: '',
    price: '',
    installments: '',
  });

  const onChangeProductBasicInformation = (name: string, value: any) => {
    setProductBasic({...productBasic, [name]: value});
  };

  useEffect(() => {
    dispatch(readAnimalRequest());
    dispatch(readAgeCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (selectAnimal) {
      dispatch(readBreedRequest(selectAnimal));
    }
  }, [dispatch, selectAnimal]);

  //@ts-ignore
  const onSubmit = data => {
    onChangeProductBasicInformation('name', data.name);
    onChangeProductBasicInformation('animal', selectAnimal);
    onChangeProductBasicInformation('breed', animal_breed);
    onChangeProductBasicInformation('gender', animal_sex);
    onChangeProductBasicInformation('ageCategory', setAgeCategory);
    onChangeProductBasicInformation('weight', data.weight);
    onChangeProductBasicInformation('date_birth', data.date_birth);
    onChangeProductBasicInformation('description', data.description);
    console.log(data);
    dispatch(changerStepProduct(1));
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
          onPress={() =>
            dispatch(
              setVisibleBottomSheetAnimalBreed({
                visible_animal_breed_select: 1,
              }),
            )
          }
          value={animal_breed}
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

        <SecondInput
          name="weight"
          control={control}
          label="Peso"
          placeholder="Peso"
          errors={errors?.weight?.message}
        />

        <CustomInput
          control={control}
          label="Data de nascimento"
          name="date_birth"
          type="datetime"
          options={{
            format: 'DD/MM/YYYY',
          }}
          placeholder="Digite a data de nascimento do seu animal"
          errors={errors?.date_birth?.message}
        />

        <SecondInput
          name="description"
          control={control}
          label="Descrição"
          placeholder="Nós dê uma descrição detalhada"
          errors={errors?.description?.message}
        />

        <Text typography="h3" colorFamily="gray" colorVariant="_01">
          Sobre o produto
        </Text>

        <CustomDropDownPicker
          name="sellType"
          label={'Tipo de venda'}
          placeholder={'Selecione o tipo de venda'}
          onPress={() => console.log('log')}
          value={''}
        />

        <SecondInput
          name="installments"
          control={control}
          label="Parcelas"
          placeholder="Informe a quantidade de parcelas"
          errors={errors?.installments?.message}
        />

        <CustomInput
          control={control}
          label="Preço"
          name="price"
          type="money"
          placeholder="Digite o valor do animal"
          errors={errors?.price?.message}
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
          //onPress={() => dispatch(changerStepProduct(1))}
        />
      </CustomContainer>
    </Container>
  );
};
