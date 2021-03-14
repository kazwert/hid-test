import {StyleSheet} from 'react-native';
import {colors, metrics, globalStyles} from '../../themes';
import {RFValue} from '../../helpers';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: RFValue(30),
    height: RFValue(30),
    marginHorizontal: RFValue(10)
  },
  logoText: {
    width: RFValue(70),
    height: RFValue(25),
    marginHorizontal: RFValue(7.5),
    marginTop: RFValue(-1)
  },
  text: {
    ...globalStyles.normal,
    color: colors.white
  }
});

export default styles;
