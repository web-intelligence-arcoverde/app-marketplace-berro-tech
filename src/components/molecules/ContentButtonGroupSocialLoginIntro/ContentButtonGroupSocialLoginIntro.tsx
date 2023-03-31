import {Button} from '../..';
import {useNavigationHook} from '../../../hooks';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {Container} from './style';

import {useAppDispatch} from '../../../hooks/useReduxHook';
import {
  signInRequestFacebook,
  signInRequestGoogle,
} from '../../../store/reducer/auth/actions';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

export const ContentButtonGroupSocialLoginIntro = () => {
  const {goToRouter} = useNavigationHook();
  const dispatch = useAppDispatch();

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <Container>
      <Button
        title="Entrar com email"
        variant="contained"
        icon="email"
        onPress={() => goToRouter('SignInEmailScreen')}
      />
      <Button
        title="Entrar com google"
        variant="outlined"
        icon="gmail"
        onPress={() => dispatch(signInRequestGoogle())}
      />
      <Button
        title="Entrar com facebook"
        variant="outlined"
        icon="facebook"
        onPress={() => onFacebookButtonPress()}
      />
    </Container>
  );
};
