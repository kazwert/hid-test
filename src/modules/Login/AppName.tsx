import React from 'react';
import {Text} from 'react-native';
import options from '../../core/options';
import styles from './styles';

function AppName(): JSX.Element {
  return (
    <Text
      style={styles.appName}
      textBreakStrategy="balanced"
    >
    {options.appName} will not receive any of your personal information.
    </Text>
  );
}

export default AppName;
