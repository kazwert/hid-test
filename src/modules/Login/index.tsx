import React, {useContext} from 'react';
import {KeyboardAvoidingView, Platform, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import OTP from '../OTP';
import Illustration from './Illustration';
import Description from './Description';
import TermsDescription from './TermsDescription';
import styles from './styles';
import {colors} from '../../themes';
import Form from './Form';
import {Context} from '../../core/Context';
import {EventRegister, ON_CANCEL} from '../../core/eventManager';

function Login(): JSX.Element {
  const {
    loginVisible,
    setLoginVisible,
    clearState,
    resetReducer
  } = useContext(Context);

  const hideSelf = () => {
    setLoginVisible(false);
  };

  const handleOnCancel = () => {
    EventRegister.emitEvent(ON_CANCEL, true);
    resetReducer();
    clearState();
  };

  return (
    <Modal
      useNativeDriver={true}
      avoidKeyboard={false}
      animationInTiming={500}
      animationOut="fadeOut"
      animationOutTiming={500}
      isVisible={loginVisible}
      onBackButtonPress={hideSelf}
      backdropOpacity={1}
      backdropColor={colors.primary}
      coverScreen={true}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Illustration />
          <Description />
          <Form />
          <TermsDescription />
          <Text style={styles.btnCancel} onPress={handleOnCancel}>
            Cancel
          </Text>
        </View>
      </KeyboardAvoidingView>
      <OTP />
    </Modal>
  );
}

export default Login;
