import {useRoute} from '@react-navigation/native';

import {Image, View} from 'react-native';
import {Button} from '../..';
import {IMAGES} from '../../../assets';
import {useNavigationHook} from '../../../hooks';

export const HeaderVariantProfileEdit = () => {
  const {name} = useRoute();

  const {goBack} = useNavigationHook();
  const isRouter = verifyRouter(name);

  const isEditProfileScreen = name === 'EditProfileScreen';

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
      <Image source={IMAGES.LogoHeader} />
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
