import {useRoute} from '@react-navigation/native';

import {Image, TouchableOpacity, View} from 'react-native';
import {Button, HeaderVariantProfile, IconComponent} from '../..';
import {IMAGES} from '../../../assets';
import {useAppDispatch, useNavigationHook} from '../../../hooks';
import {readFilterProduct} from '../../../store/reducer/product/actions';

const EDIT_PROFILE_ROUTER = 'EditProfileScreen';

interface IHeaderVariantProfileEdit {
  focus?: boolean;
  setFocus?: any;
}

export const HeaderVariantProfileEdit = ({
  focus,
  setFocus,
}: IHeaderVariantProfileEdit) => {
  const {name} = useRoute();

  const {goBack} = useNavigationHook();
  const isRouter = verifyRouter(name);

  const dispatch = useAppDispatch();

  const isEditProfileScreen = name === EDIT_PROFILE_ROUTER;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: isEditProfileScreen ? '100%' : 'auto',
        alignItems: 'center',
      }}>
      {isRouter?.router && (
        <Button
          title={isRouter.buttonBackText}
          variant={isRouter.buttonVariant}
          icon="arrow-left"
          onPress={() => goBack()}
        />
      )}
      {focus && (
        <TouchableOpacity
          onPress={() => {
            setFocus(false);
            dispatch(readFilterProduct([]));
          }}>
          <IconComponent icon="close-icon" />
        </TouchableOpacity>
      )}
      {!focus && <Image source={IMAGES.LogoHeader} />}
      <HeaderVariantProfile />
    </View>
  );
};

function verifyRouter(name: string) {
  const isEditProfileScreen = name === 'EditProfileScreen';
  const isAddProductScreen = name === 'AddProductScreen';
  const isEditProductScreenn = name === 'EditProductScreen';
  const isSelleterProfile = name === 'EditProductScreen';
  const isProfileChangerPasswordScreen = name == 'ProfileChangerPasswordScreen';

  if (
    isAddProductScreen ||
    isEditProductScreenn ||
    isSelleterProfile ||
    isProfileChangerPasswordScreen
  ) {
    return {
      router: true,
      buttonBackText: 'Voltar',
      buttonVariant: 'outlinedFour',
    };
  } else if (isEditProfileScreen) {
    return {
      router: true,
      buttonBackText: 'Voltar',
      buttonVariant: 'outlinedFour',
    };
  }
}
