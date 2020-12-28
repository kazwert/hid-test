import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import {images} from '../../themes';
import {ButtonProps} from './ModalLogin.interface';
import styles from './styles';

function Button(props: ButtonProps): JSX.Element {
    const {onPress} = props;

    return (
      <TouchableOpacity onPress={onPress}>
          <View style={styles.containerButton}>
              <Image
                style={styles.imgButton}
                source={images.logoIcon}
              />
              <View style={styles.containerLogoText}>
                  <View style={styles.sectionLogoText}>
                      <Text style={styles.continueWithText}>Continue with</Text>
                      <Image
                        style={styles.imgText}
                        source={images.logoText}
                      />
                  </View>
                  <Text style={styles.privacyText}>
                      (recommended for full privacy)
                  </Text>
              </View>
          </View>
      </TouchableOpacity>
    );
}

export default Button;
