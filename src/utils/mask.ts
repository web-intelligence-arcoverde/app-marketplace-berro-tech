// @ts-ignore
import {MaskService} from 'react-native-masked-text';

import {phoneNumberToObject, removeSpecialCharacters} from './';

export type MaskType = 'phoneNumber';

export const BRMask = '+99 (99) 99999-9999';
export const internationalOneDigitMask = '+9 99999999999999';
export const internationalTwoDigitMask = '+99 9999999999999';
export const internationalThreeDigitMask = '+999 999999999999';

interface MaskObject {
  [key: string]: Function;
}

export const masks: MaskObject = {};

export const maskedPhoneNumber = (phoneNumber: string) => {
  return phoneNumber
    ? MaskService.toMask('custom', phoneNumber, {
        mask: BRMask,
      })
    : '';
};

export const unmaskPhoneNumber = (phone: string) =>
  MaskService.toRawValue('cel-phone', phone);

masks.applyPhonenumber = maskedPhoneNumber;

masks.extractPhonenumber = unmaskPhoneNumber;

export const unmaskAnyPhoneNumber = (phone: string) =>
  removeSpecialCharacters(phone.replace(/\s/g, ''));

// TODO: Substituir pelo CORE
export const maskEmail = (email: string) => {
  const newValue = email.split('@');
  if (newValue.length === 1) {
    return '•••••••' + email.substring(email.length - 3);
  }
  const awaysVisible = '@' + newValue[1];
  const visibleStart = newValue[0].substring(newValue[0].length - 3);
  return '•••••••' + visibleStart + awaysVisible;
};

export const smilesMaskPhone = (
  phone: string,
  DDI: string,
  DDD?: string,
): string => {
  let ddd;
  DDD ? (ddd = `(${DDD})`) : (ddd = '');
  if (phone?.length <= 4) {
    return `+${DDI} ${ddd} ${'•'.repeat(phone.length)}`;
  } else {
    return `+${DDI} ${ddd} ${'•'.repeat(phone.length - 4)}-${phone.substr(
      phone.length - 4,
      4,
    )}`;
  }
};

// TODO: Substituir pelo CORE
export const maskCpfOrMemberNumber = (cpfOrMemberNumber: string) => {
  return '•••••••' + cpfOrMemberNumber.substring(cpfOrMemberNumber.length - 2);
};

// TODO: Substituir pelo CORE
export const maskByType = (
  value: string,
  type: 'CPF' | 'MEMBER' | 'EMAIL' | 'PHONE',
) => {
  switch (type) {
    case 'EMAIL':
      return maskEmail(value);
    case 'PHONE':
      const {DDI, DDD, phone} = phoneNumberToObject(value);
      return smilesMaskPhone(phone, DDI, DDD);
    case 'CPF':
    case 'MEMBER':
      return maskCpfOrMemberNumber(value);
  }
};

export const maskServicePhoneNumber = (flagIndex: {
  code: {value?: string};
  ddi: {value?: string};
}) => {
  const {code, ddi} = flagIndex;

  if (code.value === 'BR') {
    return BRMask;
  } else {
    if (ddi.value?.length === 1) {
      return internationalOneDigitMask;
    } else if (ddi.value?.length === 2) {
      return internationalTwoDigitMask;
    } else {
      return internationalThreeDigitMask;
    }
  }
};

export const getMaskFromCore = (
  flagIndex: {
    code: {value?: string};
    ddi: {value?: string};
  },
  phoneNumber: string,
) => {
  const {code, ddi} = flagIndex;
  let phone;

  if (code.value === 'BR') {
    const ddd = phoneNumber.substring(2, 4);
    phone = phoneNumber.substring(4, phoneNumber.length);
    return smilesMaskPhone(phone, ddi.value || '', ddd);
  } else {
    phone = phoneNumber.substring(ddi.value?.length || 0, phoneNumber.length);
    return smilesMaskPhone(phone, ddi.value || '', undefined);
  }
};
