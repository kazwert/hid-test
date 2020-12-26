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
    width: metrics.screenWidth - 100,
    height: metrics.screenHeight * 0.07,
    borderRadius: 4
  },
  appName: {
    ...globalStyles.title,
    color: colors.white
  }
});

export default styles;
