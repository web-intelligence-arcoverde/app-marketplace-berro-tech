import {useRoute} from '@react-navigation/native';

import {Image, TouchableOpacity, View} from 'react-native';
import {Button, HeaderVariantProfile, IconComponent} from '../..';
import {IMAGES} from '../../../assets';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationHook,
} from '../../../hooks';
import {
  readFilterProduct,
  searchProduct,
} from '../../../store/reducer/product/actions';

const EDIT_PROFILE_ROUTER = 'EditProfileScreen';
const SELLER_SCREEN = 'SellerScreen';
const DETAIL_PRODUCT_ROUTER = 'DetailProductScreen';

interface IHeaderVariantProfileEdit {
  focus?: boolean;
  setFocus?: any;
}

export const HeaderVariantProfileEdit = ({
  focus,
  setFocus,
}: IHeaderVariantProfileEdit) => {
  const {search} = useAppSelector(state => state.product);

  const {name} = useRoute();

  const {goBack} = useNavigationHook();
  const isRouter = verifyRouter(name);

  const dispatch = useAppDispatch();

  const isEditProfileScreen = name === EDIT_PROFILE_ROUTER;
  const isDetailProduictScreen = name === DETAIL_PRODUCT_ROUTER;
  const isSelleterScreen = name === SELLER_SCREEN;

  let isVisibleClearSearch = search.length > 0;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:
          isEditProfileScreen || isDetailProduictScreen || isSelleterScreen
            ? '100%'
            : 'auto',
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
      {isVisibleClearSearch && (
        <TouchableOpacity
          onPress={() => {
            setFocus(false);
            dispatch(readFilterProduct([]));
            dispatch(searchProduct(''));
          }}>
          <IconComponent icon="close-icon" />
        </TouchableOpacity>
      )}
      {search.length <= 0 && <Image source={IMAGES.LogoHeader} />}
      {isEditProfileScreen || isDetailProduictScreen || isSelleterScreen ? (
        <></>
      ) : (
        <HeaderVariantProfile />
      )}
    </View>
  );
};

function verifyRouter(name: string) {
  const isEditProfileScreen = name === 'EditProfileScreen';
  const isAddProductScreen = name === 'AddProductScreen';
  const isEditProductScreenn = name === 'EditProductScreen';
  const isSelleterProfile = name === 'EditProductScreen';
  const isProfileChangerPasswordScreen = name == 'ProfileChangerPasswordScreen';

  const isSelleterScreen = name === SELLER_SCREEN;
  const isDetailProduictScreen = name === DETAIL_PRODUCT_ROUTER;

  if (
    isAddProductScreen ||
    isEditProductScreenn ||
    isSelleterProfile ||
    isProfileChangerPasswordScreen ||
    isDetailProduictScreen ||
    isSelleterScreen
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
