import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {images} from '../../themes';

function Illustration(): JSX.Element {
  return <Image source={images.logoOutline} style={styles.illustration} />;
}

export default Illustration;
