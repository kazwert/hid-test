import {StyleSheet} from 'react-native';
import {colors, globalStyles, metrics} from '../../themes';
import {RFPercentage, RFValue} from '../../helpers';

const styles = StyleSheet.create({
  modal: {
    margin: 0
  },
  container: {
    paddingHorizontal: 10,
    width: metrics.screenWidth,
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
    color: colors.gray,
    paddingHorizontal: 25
  },
  descriptionBottom: {
    ...globalStyles.description,
    textAlign: 'center',
    color: colors.gray,
    paddingHorizontal: 5
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
    marginTop: RFValue(40),
    color: colors.primary,
    alignSelf: 'flex-start',
    paddingLeft: RFValue(30)
  },
  containerDescription: {
    marginTop: RFValue(30),
    paddingHorizontal: RFValue(15)
  },
  formContainer: {
    alignItems: 'center',
    marginTop: RFValue(25)
  },
  otpView: {
    width: RFPercentage(45),
    height: 50,
    paddingHorizontal: RFValue(10)
  },
  otpFieldStyle: {
    width: RFValue(70),
    height: 50,
    ...globalStyles.otpText,
    color: colors.black,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: colors.graySmooth
  },
  otpHighlightStyle: {
    width: RFValue(70),
    height: 50,
    ...globalStyles.otpText,
    color: colors.primary,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  }
});

export default styles;
