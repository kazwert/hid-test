import React from 'react';
import rootState from '../models/rootState';
import {LoginOTPRequest, LoginRequest, State} from '../models/models.interface';
import {UseGlobalState} from './core.interface';

interface Context extends UseGlobalState {
  state: State;
  loginRequest: (params: LoginRequest) => void;
  loginOTPRequest: (params: LoginOTPRequest) => void;
  resetReducer: () => void;
}

const Context = React.createContext<Context>({
  state: rootState,
  loginRequest: () => {},
  loginOTPRequest: () => {},
  phoneNumber: '',
  setPhoneNumber: () => {},
  countryCode: 'us',
  setCountryCode: () => {},
  loginVisible: false,
  setLoginVisible: () => {},
  loginOTPVisible: false,
  setLoginOTPVisible: () => {},
  clearState: () => {},
  resetReducer: () => {}
});

export {Context};
