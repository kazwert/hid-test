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
    height: metrics.screenHeight * 0.4,
    ...(globalStyles.containerModal as ViewStyle)
  },
  tosLabel: {
    color: colors.orange,
    marginVertical: 10
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerLogoText: {
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionLogoText: {
    flexDirection: 'row',
    paddingLeft: 3
  },
  continueWithText: {
    ...globalStyles.title,
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 3
  },
  privacyText: {
    ...globalStyles.description,
    color: colors.gray
  },
  imgText: {
    flex: 1,
    height: 17,
    marginTop: -1.5
  }
});

export default styles;
