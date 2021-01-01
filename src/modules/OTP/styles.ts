import {StyleSheet, ViewStyle} from 'react-native';
import {colors, globalStyles, metrics} from '../../themes';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    width: metrics.screenWidth
  },
  logo: {
    width: 150,
    height: 40,
    marginVertical: 25,
    alignSelf: 'center'
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: metrics.screenHeight * 0.65,
    ...(globalStyles.containerModal as ViewStyle)
  },
  title: {
    ...globalStyles.title,
    textAlign: 'center'
  },
  description: {
    ...globalStyles.normal,
    textAlign: 'center'
  },
  phoneNumber: {
    ...globalStyles.normalBold,
    color: colors.primary,
    textAlign: 'center'
  },
  textSpace: {
    marginVertical: 20
  },
  resendCode: {
    ...globalStyles.descriptionBold,
    color: colors.gray
  },
  containerPhoneNumber: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerDescription: {
    alignItems: 'center'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  otpView: {
    width: '80%',
    height: 50,
    marginTop: 20
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
