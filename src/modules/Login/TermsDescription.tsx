import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function TermDescription(): JSX.Element {
  return (
    <View>
      <Text style={styles.termsText}>
        humanID gives you back control over your privacy. The non profit
        organization authenticates you without sharing your data or retaning
        your data.
      </Text>
      <Text style={[styles.learnMoreText, styles.textSpace]}>Learn More</Text>
    </View>
  );
}

export default TermDescription;
