import {StyleSheet, ViewStyle} from 'react-native';
import {colors, globalStyles, metrics} from '../../themes';

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    width: metrics.screenWidth
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: metrics.screenHeight * 0.5,
    ...(globalStyles.containerModal as ViewStyle)
  },
  tosLabel: {
    color: colors.orange,
    marginVertical: 10,
    textAlign: 'center'
  },
  imgButton: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  appName: {
    ...globalStyles.title,
    color: colors.white,
    fontWeight: 'bold'
  },
  containerButton: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 15,
    flexDirection: 'row'
  },
  containerLogoText: {
    paddingVertical: 10,
    marginRight: 5,
  },
  sectionLogoText: {
    paddingLeft: 10,
    flexDirection: 'row',
  },
  continueWithText: {
    ...globalStyles.title,
    fontWeight: 'bold',
    fontSize: 15
  },
  privacyText: {
    ...globalStyles.description,
    flex: 1,
    color: colors.gray,
    alignSelf: 'center'
  },
  imgText: {
    flex: 1,
    height: '140%',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: -5,
    marginLeft: -5
  }
});

export default styles;
