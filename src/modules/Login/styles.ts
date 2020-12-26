import {StyleSheet} from 'react-native';
import {colors, globalStyles, metrics} from '../../themes';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  illustration: {
    width: 150,
    height: 150
  },
  desc: {
    ...globalStyles.normal,
    color: colors.white,
    textAlign: 'center'
  },
  textSpace: {
    marginVertical: 20
  },
  termsText: {
    ...globalStyles.description,
    color: colors.white,
    textAlign: 'center'
  },
  learnMoreText: {
    ...globalStyles.descriptionBold,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 15,
    textDecorationLine: 'underline'
  },
  btnCancel: {
    ...globalStyles.title,
    color: colors.white
  },
  containerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 25
  },
  textInput: {
    width: '65%',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingHorizontal: 20,
    marginTop: -10,
    color: colors.white,
    ...globalStyles.title,
    textAlign: 'center'
  },
  btnContainer: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal: 5
  },
  btnEnter: {
    backgroundColor: colors.orange
  },
  btnEnterDisabled: {
    backgroundColor: colors.gray
  },
  btnEnterText: {
    ...globalStyles.title
  },
  centerContent: {
    justifyContent: 'center'
  },
  keyboardAvoid: {
    flex: 1
  },
  iconFlag: {
    width: 25,
    height: 25
  },
  countryText: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: '600'
  },
  countryCodeText: {
    ...globalStyles.normalBold,
    color: colors.gray
  },
  itemFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 15
  },
  containerModal: {
    backgroundColor: colors.graySmooth,
    marginHorizontal: 15,
    height: metrics.screenHeight / 1.5,
    borderRadius: 6
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray400
  },
  placeholderCountryCode: {
    ...globalStyles.title,
    color: colors.white,
    marginLeft: 5
  },
  containerInputCountryCode: {
    height: 39,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 5
  },
  btnCancelCountryPicker: {
    textAlign: 'center',
    backgroundColor: colors.graySmooth,
    borderRadius: 6,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical: 25,
    ...globalStyles.title
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 5
  }
});

export default styles;
