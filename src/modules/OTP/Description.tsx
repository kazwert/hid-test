import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Context} from '../../core/Context';
import {getDialCode} from '../../helpers';

function Description(): JSX.Element {
  const {phoneNumber, countryCode} = useContext(Context);

  return (
    <View style={styles.containerDescription}>
      <Text style={[styles.title, styles.textSpace]}>Verify Your Phone Number</Text>
      <Text style={styles.description}>
        Please enter the 4 digit code you received as SMS to
      </Text>
      <Text style={styles.phoneNumber}> +{getDialCode(countryCode)} {phoneNumber}</Text>
      <Text style={[styles.description, styles.textSpace]}>
        After successful verification, your number will be deleted permanently. Only a random identifier will be stored.
      </Text>
    </View>
  );
}

export default Description;
