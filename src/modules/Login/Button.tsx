import React, {useContext} from 'react';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from './Login.interface';
import styles from './styles';
import {colors} from '../../themes';
import {Context} from '../../core/Context';

function Button(props: ButtonProps) {
  const {enabled, onPress} = props;
  const {state} = useContext(Context);

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        enabled ? styles.btnEnter : styles.btnEnterDisabled
      ]}
      disabled={!enabled}
      onPress={onPress}>
      {state.loginOTPFetching ? (
        <ActivityIndicator size="small" color={colors.black} />
      ) : (
        <Text style={styles.btnEnterText}>Enter</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
