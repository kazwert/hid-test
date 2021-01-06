import React from 'react';
import {Text, View, Linking} from 'react-native';
import styles from './styles';

function TermDescription(): JSX.Element {
  const openWeb = () => {
    Linking.openURL('https://human-id.org/#how-we-protect')
  }

  return (
    <View>
      <Text style={styles.termsText}>
        humanID gives you back control over your privacy. The non profit
        organization authenticates you without sharing your data or retaning
        your data.
      </Text>
      <Text
        onPress={openWeb}
        style={[styles.learnMoreText, styles.textSpace]}
      >
        Learn More
      </Text>
    </View>
  );
}

export default TermDescription;
