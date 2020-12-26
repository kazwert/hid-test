import React, {useContext, useEffect} from 'react';
import {Keyboard, TextInput, View} from 'react-native';
import CountryPicker from './CountryPicker';
import Button from './Button';
import styles from './styles';
import {colors} from '../../themes';
import {Context} from '../../core/Context';
import {Country} from './Login.interface';
import {getCountry, getDialCode} from '../../helpers';

function Form() {
  const {
    state,
    phoneNumber,
    setPhoneNumber,
    setLoginOTPVisible,
    setCountryCode,
    countryCode,
    loginOTPRequest
  } = useContext(Context);

  useEffect(() => {
    if (state.loginOTPPayload?.success) {
      setLoginOTPVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loginOTPPayload]);

  const handleChangeText = (text: string) => {
    if (isNaN(Number(text))) {
      return;
    }

    setPhoneNumber(text);
  };

  const handleCountrySelected = (item: Country) => {
    setCountryCode(item.iso2);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();

    loginOTPRequest({
      phone: phoneNumber,
      countryCode: getDialCode(countryCode)
    });
  };

  const isSubmitEnabled = (): boolean => {
    if (phoneNumber.length >= 9) {
      const phoneNumberLib = require('google-libphonenumber');
      const phoneUtil = phoneNumberLib.PhoneNumberUtil.getInstance();

      const currentCountry = getCountry(countryCode);
      const iso2 = currentCountry?.iso2;

      const phoneInfo = phoneUtil.parse(phoneNumber, iso2);

      return phoneUtil.isValidNumber(phoneInfo);
    }

    return false;
  };

  return (
    <View style={styles.containerForm}>
      <CountryPicker onSelected={handleCountrySelected} />
      <TextInput
        style={styles.textInput}
        keyboardType="phone-pad"
        onChangeText={handleChangeText}
        value={phoneNumber}
        placeholder="Phone Number"
        placeholderTextColor={colors.white}
        maxLength={15}
      />
      <Button enabled={isSubmitEnabled()} onPress={handleSubmit} />
    </View>
  );
}

export default Form;
