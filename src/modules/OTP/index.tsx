import React, {useContext} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import Modal from 'react-native-modal';
import Logo from './Logo';
import styles from './styles';
import Description from './Description';
import Form from './Form';
import {Context} from '../../core/Context';

function OTP(): JSX.Element {
  const {loginOTPVisible, setLoginOTPVisible} = useContext(Context);

  const hideSelf = () => {
    setLoginOTPVisible(false);
  };

  return (
    <Modal
      useNativeDriver={true}
      style={styles.modal}
      isVisible={loginOTPVisible}
      backdropOpacity={0.3}
      onBackdropPress={hideSelf}
      onBackButtonPress={hideSelf}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
            <Logo />
            <View style={styles.containerDescForm}>
              <Description />
              <Form />
            </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default OTP;
