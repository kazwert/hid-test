/* eslint-disable prettier/prettier */
import React from 'react';
import {UseGlobalState} from './core.interface';
import {FlagType} from '../modules/Login/Login.interface';

function useGlobalState(): UseGlobalState {
  const [phoneNumber, handlePhoneNumber] = React.useState('');
  const [countryCode, handleCountryCode] = React.useState<FlagType>('us');
  const [permissionVisible, handlePermissionVisible] = React.useState(false);
  const [permissionIsContinue, handlePermissionIsContinue] = React.useState(false);
  const [loginVisible, handleLoginVisible] = React.useState(false);
  const [loginOTPVisible, handleLoginOTPVIsible] = React.useState(false);

  const clearState = () => {
    if (loginOTPVisible) {
      handlePhoneNumber('');
      handleLoginOTPVIsible(false);
    }

    setTimeout(() => {
      handlePhoneNumber('');
      handleCountryCode('us');
      handlePermissionVisible(false);
      handlePermissionIsContinue(false);
      handleLoginVisible(false);
    }, loginOTPVisible ? 500 : 0);
  };

  const setPhoneNumber = (number: string) => {
    handlePhoneNumber(number);
  };

  const setCountryCode = (country: FlagType) => {
    handleCountryCode(country);
  };

  const setPermissionVisible = (visible: boolean) => {
    handlePermissionVisible(visible);
  };

  const setPermissionIsContinue = (isContinue: boolean) => {
    handlePermissionIsContinue(isContinue);
  };

  const setLoginVisible = (visible: boolean) => {
    handleLoginVisible(visible);
  };

  const setLoginOTPVisible = (visible: boolean) => {
    handleLoginOTPVIsible(visible);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    permissionVisible,
    setPermissionVisible,
    permissionIsContinue,
    setPermissionIsContinue,
    loginVisible,
    setLoginVisible,
    loginOTPVisible,
    setLoginOTPVisible,
    clearState,
  };
}

export default useGlobalState;
