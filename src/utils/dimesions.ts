import {Dimensions, PixelRatio} from 'react-native';
import {
  getBottomSpace,
  isIphoneX as libIsIphoneX,
} from 'react-native-iphone-x-helper';
import {getStatusBarHeight as libGetStatusBarHeight} from 'react-native-status-bar-height';
import {isWeb} from '.';

export const isIphoneX = libIsIphoneX;

export const getStatusBarHeight = (skipAndroid: boolean = false) =>
  libGetStatusBarHeight(skipAndroid);

export const getBottomSpaceHeight = getBottomSpace;

export let screenWidth: number = Dimensions.get('window').width;

export let screenHeight: number = Dimensions.get('window').height;

export const widthPercentageToDP = (widthPercent: string | number): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = (
  heightPercent: string | number,
): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 680;

export const scale = (size: number) => {
  return !isWeb() ? (screenWidth / guidelineBaseWidth) * size : size;
};

export const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

export const horizontalScale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
