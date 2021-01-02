import React, {useContext} from 'react';
import {Platform, View, Text, ScrollView} from 'react-native';
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
    <>
      <Modal
        useNativeDriver={true}
        animationInTiming={500}
        animationOut="fadeOut"
        animationOutTiming={500}
        isVisible={loginVisible}
        onBackButtonPress={hideSelf}
        backdropOpacity={1}
        backdropColor={colors.primary}
        style={styles.modal}
        coverScreen={true}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Illustration />
            <View style={styles.content}>
              <Description />
              <Form />
              <TermsDescription />
              <Text style={styles.btnCancel} onPress={handleOnCancel}>
                Cancel
              </Text>
            </View>
          </View>
        </ScrollView>
        <OTP />
      </Modal>
    </>
  );
}

export default Login;
