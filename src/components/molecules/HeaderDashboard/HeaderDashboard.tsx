import React from 'react';

import {getStatusBarHeight} from '../../../utils';

import {AppLogo} from '../AppLogo/AppLogo';
import {ClearSearchIcon} from '../ClearSearchIcon/ClearSearchIcon';
import {CreateNewProductButton} from '../CreateNewProductButton/CreateNewProductButton';

import {Separator, SearchInput, Button} from '../..';

import {useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {useAppDispatch, useNavigationHook} from '../../../hooks';
import {readInformationUserLoggedRequest} from '../../../store/reducer/auth/actions';

import {Container, StyledContainer} from './style';

import {Image} from 'react-native';
import {IMAGES} from '../../../assets';

import {BUSINESS_SCREEN, HOME_SCREEN, PROFILE_SCREEN} from '../../../common';
import {useCheckUserLoggedIn} from '../../../hooks/useCheckUserLoggedIn';

export const HeaderDashboard = () => {
  const {name} = useRoute();

  const {} = useCheckUserLoggedIn();

  const isHomeScreen = name === HOME_SCREEN;
  const isBusinessScreen = name === BUSINESS_SCREEN;
  const isProfileScreen = name === PROFILE_SCREEN;

  const {goBack} = useNavigationHook();

  const dispatch = useAppDispatch();

  const isNotBottomNavigate =
    isHomeScreen || isBusinessScreen || isProfileScreen;

  useEffect(() => {
    dispatch(readInformationUserLoggedRequest());
  }, []);

  let buttonBackText = 'Voltar';
  let buttonVariant = 'outlinedFour';

  return (
    <Container>
      <Separator height={getStatusBarHeight()} />
      <HeaderVariantBottomNavigate />
      {!isNotBottomNavigate && (
        <StyledContainer>
          <Button
            title={buttonBackText}
            variant={buttonVariant}
            icon="arrow-left"
            onPress={() => goBack()}
          />

          <Image source={IMAGES.LogoHeader} />
        </StyledContainer>
      )}
    </Container>
  );
};

export const HeaderVariantBottomNavigate = () => {
  const {name} = useRoute();

  const isHomeScreen = name === HOME_SCREEN;
  const isBusinessScreen = name === BUSINESS_SCREEN;
  const isProfileScreen = name === PROFILE_SCREEN;

  const showSearchProduct = isHomeScreen || isBusinessScreen;

  const [focusSearchProduct, setFocusSearchProduct] = useState(false);

  return (
    <StyledContainer>
      {focusSearchProduct ? (
        <ClearSearchIcon setFocus={setFocusSearchProduct} />
      ) : (
        <AppLogo />
      )}

      {showSearchProduct && (
        <SearchInput
          setFocus={setFocusSearchProduct}
          focus={focusSearchProduct}
        />
      )}
      {isProfileScreen && <CreateNewProductButton />}
    </StyledContainer>
  );
};
