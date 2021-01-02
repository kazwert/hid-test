import React from 'react';
import {View} from 'react-native';
import AppName from './AppName';
import styles from './styles';
import options from '../../core/options';

function Logo(): JSX.Element | null {
  const {Icon} = options;

  if (Icon === null) {
    return null;
  }

  return (
    <View style={styles.containerIconAppName}>
      {/* @ts-ignore */}
      <Icon />
      <AppName />
    </View>
  )
}

export default Logo;
