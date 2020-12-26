import React from 'react';
import {Image} from 'react-native';
import {images} from '../../themes';
import styles from './styles';

function Logo(): JSX.Element {
  return <Image source={images.logoLight} style={styles.logo} />;
}

export default Logo;
