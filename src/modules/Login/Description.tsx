import React from 'react';
import {Text, View} from 'react-native';
import options from '../../core/options';
import styles from './styles';

function Description(): JSX.Element {
  return (
    <View style={styles.centerContent}>
      <Text style={styles.desc}>
        HumanID confirms your phone number without sharing it with {options.appName}
      </Text>
      <Text style={[styles.desc, styles.textSpace]}>
        Your data is permanently deleted after verification.
      </Text>
    </View>
  );
}

export default Description;
