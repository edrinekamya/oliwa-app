import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi, { LoginConfig, SignupConfig } from '../api/authApi';
import CountryData from '../utils/CountryData';

export const login = createAsyncThunk(
  'auth/login',
  async (config: LoginConfig) => {
    const response = await authApi.login(config);
    return response;
  }
);

export const verify = createAsyncThunk('auth/verify', async (code: string) => {
  const response = await authApi.verify(code);
  return response;
});

export const signup = createAsyncThunk(
  'auth/signup',
  async (config: SignupConfig) => {
    const response = await authApi.signup(config);
    return response;
  }
);

type AuthState = {
  login: {
    isLoggedIn: boolean;
    isLoading: boolean;
    config: LoginConfig;
  };
  signup: {
    isSignedUp: boolean;
    isLoading: boolean;
    error: string | null;
    config: SignupConfig;
  };
  verification: {
    isLoading: boolean;
    error: string | null;
  };
  loginError: string | null;
};

const initialState: AuthState = {
  login: {
    isLoggedIn: false,
    isLoading: false,
    config: {
      phoneNumber: CountryData[0].code,
      country: CountryData[0],
    },
  },

  signup: {
    isSignedUp: false,
    isLoading: false,
    error: '',
    config: {
      events: [],
      name: '',
    },
  },
  verification: {
    isLoading: false,
    error: '',
  },
  loginError: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleEventSelect: (state, { payload }) => {
      if (state.signup.config.events.includes(payload)) {
        state.signup.config.events = [
          ...state.signup.config.events.filter((x) => x !== payload),
        ];
      } else {
        state.signup.config.events = [...state.signup.config.events, payload];
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.login = {
        ...state.login,
        isLoading: true,
      };
    });
    builder.addCase(login.fulfilled, (state, { payload, meta }) => {
      state.loginError = payload.error;
      state.login = {
        ...state.login,
        isLoading: false,
        config: meta.arg,
      };
      // state.login.error = '';
    });
    builder.addCase(verify.pending, (state) => {
      state.verification = {
        isLoading: true,
        error: '',
      };
    });
    builder.addCase(verify.fulfilled, (state, { payload }) => {
      state.verification = {
        isLoading: false,
        error: payload.error,
      };
      if (payload.error === null) {
        state.login.isLoggedIn = true;
        // check if the user has already signed up
        // state.isSignedUp = payload.data.user.isSignedUp;
      }
    });
    builder.addCase(signup.pending, (state) => {
      state.signup = {
        ...state.signup,
        isLoading: true,
        error: '',
      };
    });
    builder.addCase(signup.fulfilled, (state, { payload, meta }) => {
      state.signup = {
        ...state.signup,
        isLoading: false,
        error: payload.error,
      };
      if (payload.error === null) {
        state.signup.isSignedUp = true;
        state.signup.config = meta.arg;
        // store more details about the user
      }
    });
  },
});

const authReducer = authSlice.reducer;

export const { handleEventSelect } = authSlice.actions;

export default authReducer;
