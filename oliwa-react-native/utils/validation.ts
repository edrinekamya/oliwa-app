import { parsePhoneNumber } from 'libphonenumber-js';

export const isDigitString = (str: string): boolean => {
  return /^[0-9\b]+$/.test(str);
};

export const isPhoneString = (str: string) => {
  return /^[+][0-9\b\s]+$/.test(str);
};

export const isPhoneValid = (phone: string) => {
  try {
    return parsePhoneNumber(phone).isValid();
  } catch (e) {
    return false;
  }
};
