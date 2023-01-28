import {
  getUnixTime,
  addSeconds,
  format,
  parseISO,
  getYear,
  parse,
  subYears,
  isAfter,
  fromUnixTime,
  addMinutes,
  isValid,
  isToday,
  addHours,
  addDays,
  differenceInMonths,
  addMonths,
  isSameDay,
  isBefore,
} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export const DATE_FORMAT = 'yyyy-MM-dd';
const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const monthNamesShort = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

interface TimeObject {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export const addDaysToDate = (date: Date, days: number) => {
  return addDays(date, days);
};

export const addMonthsToDate = (date: Date, months: number) => {
  return addMonths(date, months);
};

export const returnDiffInMonths = (
  firstDate: Date | number,
  secondDate: Date | number,
) => {
  return differenceInMonths(firstDate, secondDate);
};

export function getCurrentDate(mask: string = 'yyyy-MM-dd'): string {
  return format(new Date(), mask);
}

export const addCorrectTimeToDate = (unformattedDate: Date) => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return addSeconds(
    addMinutes(addHours(unformattedDate, hours), minutes),
    seconds,
  );
};

export const getCurrentYear = () => getYear(new Date());

export const getRemainingSeconds = (targetTime: Date, extraTime = 0) => {
  const targetTimeWithExtra = getUnixTime(addSeconds(targetTime, extraTime));
  const unixCurrentTime = getUnixTime(new Date());
  const remainingSeconds = targetTimeWithExtra - unixCurrentTime;

  return remainingSeconds;
};

export const formatShortDate = (date: string) =>
  format(parseISO(date), 'dd MMM', {locale: ptBR});

export const parseStringToISODate = (date: string): Date => parseISO(date);

export const parseStringToISODateWithoutTimeZone = (date: string): Date =>
  parseISO(`${date}T00:00:00.000Z`);

export const parseStringToDate = (date: string, dateFormat: string): Date =>
  parse(date, dateFormat, new Date());

export const isMinorAge = (birthDate: Date) => {
  const maxDate = subYears(new Date(), 18);
  return isAfter(birthDate, maxDate);
};

export const hasTimeLoggedExpired = (timeDate: number) => {
  const timeExpiredIn = addMinutes(fromUnixTime(timeDate), 30);
  const timeNow = new Date();
  return isAfter(timeNow, timeExpiredIn);
};

export const formatDate = (value: Date, dateFormat: string = 'dd/MM/yyyy') =>
  isValid(value) ? format(value, dateFormat) : '';

export const changeDateStringFormat = (
  value: string,
  originalFormat: string = 'yyyy-MM-dd',
  newFormat: string = 'dd/MM/yyyy',
) => formatDate(parseStringToDate(value, originalFormat), newFormat);

export const formatDateWithLocale = (
  date: Date,
  formatString: string = 'MMM',
) => {
  return format(date, formatString, {locale: ptBR});
};

export const isAfterDateTime = (firstDate: Date, secondDate: Date) => {
  return isAfter(firstDate, secondDate);
};

export const setTimeOnCurrentDate = (time: TimeObject) => {
  const {hours = 0, minutes = 0, seconds = 0} = time;
  const date = new Date(getCurrentDate());

  return addSeconds(addMinutes(addHours(date, hours), minutes), seconds);
};

export const isThisDateToday = (date: Date) => {
  return isToday(date);
};

export const getShortDayName = (dayNumber: number) => {
  return dayNames[dayNumber];
};

export const getShortMonthName = (monthNumber: number) => {
  return monthNamesShort[monthNumber];
};

export const shouldItBeMarked = (firstDate: string, dates?: Array<string>) => {
  return dates ? (dates.indexOf(firstDate) > -1 ? true : false) : false;
};

export const isOneMonthAgo = (selecteDate: Date) => {
  const timeExpiredIn = addMonths(new Date(selecteDate), 1);
  const timeNow = new Date();
  return timeExpiredIn < timeNow;
};

export const isTheSameDay = (firstDate: Date, secondDate: Date) => {
  return isSameDay(firstDate, secondDate);
};

export const isThisDateBefore = (firstDate: Date, secondDate: Date) => {
  return isBefore(firstDate, secondDate);
};
