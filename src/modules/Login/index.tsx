import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import Header from '../Header';
import Logo from './Logo';
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
    clearState,
    resetReducer
  } = useContext(Context);

  const handleOnCancel = () => {
    EventRegister.emitEvent(ON_CANCEL, true);
    resetReducer();
    clearState();
  };

  return (
    <>
      <Modal
        useNativeDriver={true}
        animationInTiming={200}
        animationOutTiming={200}
        animationIn="slideInUp"
        animationOut="fadeOut"
        isVisible={loginVisible}
        onBackButtonPress={handleOnCancel}
        backdropOpacity={1}
        backdropColor={colors.white}
        style={styles.modal}
        coverScreen={true}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Header />
          <View style={styles.container}>
            <Logo />
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
      </Modal>
    </>
  );
}

export default Login;
