import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {images} from '../../themes';
import {ButtonProps} from './ModalLogin.interface';
import styles from './styles';

function Button(props: ButtonProps): JSX.Element {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.imgButton}
        source={images.buttonBackground}
      />
    </TouchableOpacity>
  );
}

export default Button;
