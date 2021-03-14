/* eslint-disable prettier/prettier */
import React from 'react';
import {UseGlobalState} from './core.interface';
import {FlagType} from '../modules/Login/Login.interface';

function useGlobalState(): UseGlobalState {
  const [phoneNumber, handlePhoneNumber] = React.useState('');
  const [countryCode, handleCountryCode] = React.useState<FlagType>('us');
  const [loginVisible, handleLoginVisible] = React.useState(false);
  const [loginOTPVisible, handleLoginOTPVisible] = React.useState(false);

  const clearState = () => {
    setTimeout(() => {
      handleLoginVisible(false);
      handlePhoneNumber('');
    }, 0);

    setTimeout(() => {
      handleCountryCode('us');
      handleLoginOTPVisible(false);
    }, 500);
  };

  const setPhoneNumber = (number: string) => {
    handlePhoneNumber(number);
  };

  const setCountryCode = (country: FlagType) => {
    handleCountryCode(country);
  };

  const setLoginVisible = (visible: boolean) => {
    handleLoginVisible(visible);
  };

  const setLoginOTPVisible = (visible: boolean) => {
    handleLoginOTPVisible(visible);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    clearState,
  };
}

export default useGlobalState;
