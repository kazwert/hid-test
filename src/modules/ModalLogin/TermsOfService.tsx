import React from 'react';
import {Text} from 'react-native';
import options from '../../core/options';
import styles from './styles';

function TermsOfService(): JSX.Element {
  return (
    <Text
      style={styles.tosLabel}
      textBreakStrategy="balanced"
    >
      {`I hereby agree to ${options.appName}'s Terms of Service`}
    </Text>
  );
}

export default TermsOfService;
