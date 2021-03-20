import {StyleSheet, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {colors, globalStyles, metrics} from '../../themes';
import {RFValue, RFPercentage} from '../../helpers';

const styles = StyleSheet.create({
  appName: {
    ...globalStyles.normalBold,
    color: colors.gray,
    marginVertical: 25,
    textAlign: 'center'
  },
  modal: {
    margin: 0,
    flex: 1
  },
  container: {
    ...globalStyles.container,
    flex: 1,
    height: metrics.screenHeight - 78,
    paddingHorizontal: 30
  },
  containerModal: {
    backgroundColor: colors.graySmooth,
    marginHorizontal: 15,
    height: metrics.screenHeight / 1.5,
    borderRadius: 6
  },
  content: {
    flex: 1,
    alignItems: 'center'
  },
  containerTerms: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: RFValue(20),
    paddingLeft: RFValue(15),
    paddingRight: RFPercentage(15)
  },
  illustration: {
    width: RFValue(120),
    height: RFValue(120),
    ...isIphoneX() && { marginTop: 25 }
  },
  desc: {
    ...globalStyles.description,
    color: colors.gray
  },
  textSpace: {
    marginVertical: 10
  },
  termsText: {
    ...globalStyles.description,
    color: colors.primary
  },
  learnMoreText: {
    ...globalStyles.descriptionBold,
    color: colors.gray,
    textAlign: 'center',
    paddingVertical: 15,
    textDecorationLine: 'underline'
  },
  btnCancel: {
    ...globalStyles.normal,
    color: colors.gray,
    marginTop: RFValue(30)
  },
  containerForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: RFValue(25)
  },
  textInput: {
    width: '65%',
    height: '100%',
    marginHorizontal: 5,
    ...Platform.OS === 'android' && { marginTop: -4.5 },
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingHorizontal: 10,
    color: colors.gray,
    ...globalStyles.title,
    textAlign: 'center'
  },
  btnContainer: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    marginHorizontal: 5
  },
  btnEnter: {
    backgroundColor: colors.primary
  },
  btnEnterDisabled: {
    backgroundColor: colors.gray400
  },
  btnEnterText: {
    ...globalStyles.descriptionBold,
    textTransform: 'uppercase',
    color: colors.white
  },
  btnEnterTextDisabled: {
    ...globalStyles.descriptionBold,
    textTransform: 'uppercase',
    color: colors.grayDisable
  },
  centerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: RFValue(10),
    paddingHorizontal: RFValue(15)
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
  separator: {
    height: 1,
    backgroundColor: colors.gray400
  },
  placeholderCountryCode: {
    ...globalStyles.title,
    color: colors.gray,
    marginLeft: 5
  },
  containerInputCountryCode: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    ...Platform.OS === 'android' && { paddingBottom: 5 }
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
  },
  containerIconAppName: {
    marginVertical: 10,
    alignItems: 'center'
  },
  iconLock: {
    width: RFValue(20),
    height: RFValue(20),
    marginRight: 10,
    alignSelf: 'center'
  },
  iconInfo: {
    marginTop: RFValue(2.5),
    width: RFValue(15),
    height: RFValue(15),
    marginRight: 10,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});

export default styles;
