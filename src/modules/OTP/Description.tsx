import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Context} from '../../core/Context';
import {formatPhoneInternational} from '../../helpers';

function Description(): JSX.Element {
  const {phoneNumber, countryCode} = useContext(Context);

  return (
    <View style={styles.containerDescription}>
      <Text style={[styles.title, styles.textSpace]}>Verify Your Phone Number</Text>
      <Text style={styles.description}>
        Please enter the 4 digit code you received as SMS to
      </Text>
      <Text style={styles.phoneNumber}>{formatPhoneInternational({
        country_code: countryCode,
        national_number: phoneNumber
      })}</Text>
      <Text style={[styles.descriptionBottom, styles.textSpace]}>
        After successful verification, your number will be deleted permanently. Only a random identifier will be stored.
      </Text>
    </View>
  );
}

export default Description;
