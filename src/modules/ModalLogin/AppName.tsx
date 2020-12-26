import React from 'react';
import {Text} from 'react-native';
import options from '../../core/options';
import styles from './styles';

function AppName(): JSX.Element {
  return <Text style={styles.appName}>{options.appName}</Text>;
}

export default AppName;
