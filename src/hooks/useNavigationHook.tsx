import {useNavigation} from '@react-navigation/core';

export const useNavigationHook = () => {
  const navigation = useNavigation();

  const goToRouter = (router: string) => {
    //@ts-ignore
    navigation.navigate(router);
  };

  return {goToRouter};
};
