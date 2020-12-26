import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Context} from '../../core/Context';
import {getDialCode} from '../../helpers';

function Description(): JSX.Element {
  const {phoneNumber, countryCode} = useContext(Context);

  return (
    <View style={styles.containerDescription}>
      <Text style={[styles.title, styles.textSpace]}>Verification Number</Text>
      <Text style={[styles.description, styles.textSpace]}>
        We just sent a text to (+{getDialCode(countryCode)}) {phoneNumber}. We will not save or forward this
        number after the verification
      </Text>
      <Text style={styles.description}>
        Please enter the 4 digit code you received via SMS to
        <Text style={styles.phoneNumber}> (+{getDialCode(countryCode)}) {phoneNumber}</Text>
      </Text>
    </View>
  );
}

export default Description;
