import React, {useContext} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Button from './Button';
import TermsOfService from './TermsOfService';
import styles from './styles';
import Logo from './Logo';
import {Context} from '../../core/Context';

function ModalLogin(): JSX.Element {
  const {
    permissionVisible,
    setPermissionVisible,
    permissionIsContinue,
    setPermissionIsContinue,
    setLoginVisible
  } = useContext(Context);

  const hideSelf = () => {
    setPermissionVisible(false);
  };

  const handleContinue = () => {
    setPermissionIsContinue(true);
    hideSelf();
  };

  const handleWillHide = () => {
    if (permissionIsContinue) {
      setLoginVisible(true);
    }
  };

  return (
    <Modal
      useNativeDriver={true}
      style={styles.modal}
      isVisible={permissionVisible}
      backdropOpacity={0.3}
      onBackButtonPress={hideSelf}
      onBackdropPress={hideSelf}
      onModalHide={handleWillHide}>
      <View style={styles.container}>
        <Logo />
        <Button onPress={handleContinue} />
        <TermsOfService />
      </View>
    </Modal>
  );
}

export default ModalLogin;
