import {StyleSheet} from 'react-native';
import {colors, globalStyles, metrics} from '../../themes';
import {RFPercentage, RFValue} from '../../helpers';

const styles = StyleSheet.create({
  modal: {
    margin: 0
  },
  container: {
    ...globalStyles.containerModal,
    backgroundColor: colors.white,
    height: metrics.screenHeight - 78
  },
  title: {
    ...globalStyles.title,
    textAlign: 'center',
    color: colors.gray
  },
  description: {
    ...globalStyles.description,
    textAlign: 'center',
    color: colors.gray
  },
  phoneNumber: {
    ...globalStyles.normalBold,
    color: colors.primary,
    textAlign: 'center',
    marginTop: 1
  },
  textSpace: {
    marginVertical: 25
  },
  resendCode: {
    ...globalStyles.description,
    marginTop: RFValue(80),
    color: colors.primary
  },
  containerDescription: {
    marginTop: RFValue(30),
    paddingHorizontal: RFValue(25)
  },
  formContainer: {
    alignItems: 'center',
    marginTop: RFValue(25)
  },
  otpView: {
    width: RFPercentage(50),
    height: 50,
    paddingHorizontal: RFValue(40)
  },
  otpFieldStyle: {
    width: 65,
    height: 50,
    ...globalStyles.otpText,
    color: colors.black,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: colors.gray
  },
  otpHighlightStyle: {
    borderBottomColor: colors.primary
  }
});

export default styles;
