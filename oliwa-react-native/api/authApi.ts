// a dummy api for the start, simply logs a code to the console

import { Country } from '../components/Auth/CountryList';
import { sleep } from '../utils/time';

export type AuthResponse = {
  error: null | string;
  data: any;
};

export type SignupConfig = {
  name: string;
  events: string[];
};

export type LoginConfig = {
  country: Country;
  phoneNumber: string;
};

const code = '123456';

const login = async ({ phoneNumber }: LoginConfig): Promise<AuthResponse> => {
  await sleep(2000);
  if (Math.random() > 0.3) {
    return { error: null, data: { phoneNumber } };
  } else {
    return { error: 'Invalid phone number', data: null };
  }
};

const verify = async (verificationCode: string): Promise<AuthResponse> => {
  await sleep(2000);
  if (verificationCode === code) {
    return { error: null, data: { verificationCode } };
  } else {
    return { error: 'Invalid verification code', data: null };
  }
};

const signup = async (config: SignupConfig): Promise<AuthResponse> => {
  await sleep(2000);
  if (Math.random() > 0.2) {
    return { error: null, data: { config } };
  } else {
    console.log('called agin');

    return { error: 'Signup failed', data: null };
  }
};

const authApi = { login, verify, signup };

export default authApi;
