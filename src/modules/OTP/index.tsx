import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import Header from '../Header';
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
      onBackButtonPress={hideSelf}
      coverScreen={true}
    >
      <ScrollView>
        <Header />
        <View style={styles.container}>
          <Description />
          <Form />
        </View>
      </ScrollView>
    </Modal>
  );
}

export default OTP;
