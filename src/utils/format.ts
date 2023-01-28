import latinize from 'latinize';

import {addMonthsToDate, DATE_FORMAT, formatDate, returnDiffInMonths} from '.';

export const lowerCase = (string: string) => string.toLowerCase();

export const camelCase = (text: string = '') => {
  return text
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
};

export const capitalize = (text: string = '') => {
  return text
    .split(' ')
    .map(s => {
      if (s.length >= 2) {
        return s.charAt(0).toUpperCase() + s.substring(1);
      } else if (s.length === 1) {
        return s.toUpperCase();
      }
      return s;
    })
    .join(' ');
};

export const removeSpecialCharacters = (text: string) => {
  return text.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ0-9 ]/gi, '');
};

export const removeStringAccents = (str: string) => latinize(str);

export const truncateNumberTo = (
  value: number,
  decimalPlaces: number,
): number => Number(value.toFixed(decimalPlaces));

// Based on https://stackoverflow.com/a/2901298/7988516
type NumberFormatOptions = {
  decimalSeparator?: string;
  thousandsSeparator?: string;
  decimalPlaces?: number | null;
  removeTrailingZeroes?: boolean;
};

export const formatNumber = (
  value: number,
  {
    decimalSeparator = ',',
    thousandsSeparator = '.',
    decimalPlaces = null,
    removeTrailingZeroes = true,
  }: NumberFormatOptions = {},
): string => {
  const valueWithPlaces =
    decimalPlaces !== null
      ? truncateNumberTo(value, decimalPlaces).toString()
      : value.toString();

  const tempDecimalSeparator = '###';
  const withTempDecimal = valueWithPlaces.replace('.', tempDecimalSeparator);

  // https://stackoverflow.com/a/2901298/7988516
  const withTempDecimalParts = withTempDecimal.split(tempDecimalSeparator);
  withTempDecimalParts[0] = withTempDecimalParts[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator,
  );

  const withThousands = withTempDecimalParts.join(tempDecimalSeparator);
  const formatted = withThousands.replace(
    tempDecimalSeparator,
    decimalSeparator,
  );

  return removeTrailingZeroes && formatted.indexOf(decimalSeparator) >= 0
    ? formatted.replace(new RegExp(`\\${decimalSeparator}?0+$`), '')
    : formatted;
};

export const formatNumberToCurrency = (value: string | number) => {
  const floatNumber = typeof value === 'string' ? parseFloat(value) : value;
  return formatNumber(floatNumber, {
    decimalPlaces: 2,
    removeTrailingZeroes: false,
  });
};

export const formatNumberToMiles = (
  value: number,
  {allowDecimalPlaces = false} = {},
) => {
  return formatNumber(value, {
    decimalPlaces: allowDecimalPlaces ? 2 : 0,
    removeTrailingZeroes: false,
  });
};

/**
 * Prevents small rounding differences of mattering when calculating anything,
 * Works by verifying if the result has a small decimal part and, if it does, rounding it up
 */
export const roundNumberToTwoDecimalPlaces = (value: number) => {
  const splittenValue = value.toString().split('.');
  if (splittenValue.length > 1) {
    const numberOfDecimalPlaces = splittenValue[1].length;
    if (numberOfDecimalPlaces > 2) {
      return value + 0.01;
    }
  }

  return value;
};

export const formatNumberToPoints = (value: string | number) => {
  let formattedValue = value.toString();
  if (formattedValue[0] === '0' && formattedValue.length > 1) {
    formattedValue =
      formattedValue.substring(0, 0) + '' + formattedValue.substring(1);
  }
  return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const bytesToSize = (bytes: number) => {
  let l = 0,
    n = parseInt(bytes.toString(), 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
};

export const normalizeStringSpaces = (value: string = '') => {
  const aName = value.trim().split(' ');

  return aName.reduce(
    (finalName: string, partName: string) =>
      finalName + (partName ? ' ' : '') + partName,
  );
};

export const formatCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

export const formatLowercaseName = (name: string = 'Smiles'): string => {
  if (name.length > 0) {
    return name
      .trim()
      .toLowerCase()
      .split(' ')
      .splice(0, 2)
      .map((word: string) => {
        return word[0].toUpperCase() + word.substring(word.length, 1);
      })
      .join(' ');
  }
  return name;
};

export const phoneNumberToObject = (phoneNumber: string) => {
  return {
    DDI: phoneNumber.substring(0, 2),
    DDD: phoneNumber.substring(2, 4),
    phone: phoneNumber.substring(4, phoneNumber.length),
  };
};

export const phoneNumberObjectToString = (
  DDI: string,
  DDD: string,
  number: string,
) => {
  if (
    DDI.trim().length > 0 &&
    DDD.trim().length > 0 &&
    number.trim().length > 0
  ) {
    return `+${DDI}${DDD}${number}`;
  } else {
    return '';
  }
};

export const formatHolidays = (
  holidays: any,
  today: Date,
  lastDayAvailable: Date,
) => {
  let formattedHolidays = {};
  const diffInMonths = returnDiffInMonths(lastDayAvailable, today);
  for (let i = 0; i < diffInMonths; i++) {
    const addedMonths = addMonthsToDate(today, i);

    //@ts-ignore
    formattedHolidays[
      `${addedMonths.getMonth() + 1}/${addedMonths.getFullYear()}`
    ] = [];
  }

  holidays.forEach((item: any) => {
    const formattedMonth = `${
      item.start.getMonth() + 1
    }/${item.start.getFullYear()}`;

    //@ts-ignore
    if (Object.keys(formattedHolidays).indexOf(formattedMonth) > -1) {
      //@ts-ignore
      formattedHolidays[formattedMonth].push({
        day: item.start.getDate(),
        date: formatDate(item.start, DATE_FORMAT),
        text: item.name,
      });
    }
  });

  const holidaysValues = Object.values(formattedHolidays);
  const parsedHolidays = holidaysValues.map(item =>
    //@ts-ignore
    item.length === 0 ? undefined : item,
  );

  return parsedHolidays;
};
