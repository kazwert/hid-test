import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {flags, images} from '../../themes';
import {
  Countries,
  Country,
  CountryPickerProps,
  FlagType
} from './Login.interface';
import styles from './styles';
import {Context} from '../../core/Context';
import FlatListSeparator from './FlatListSeparator';
import {getDialCode} from '../../helpers';

const countries: Countries = require('../../../assets/json/countries.json');

const arrCountry = Object.keys(countries).map((key) => {
  return countries[key as FlagType];
});

function CountryPicker(props: CountryPickerProps) {
  const {onSelected} = props;

  const {countryCode} = useContext(Context);
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleOnSelected = (item: Country) => {
    toggleModal();
    onSelected(item);
  };

  const keyExtractor = (item: Country) => item.iso2;

  const renderItem = ({item}: {item: Country}) => {
    const imageSource = flags[item.iso2];

    return (
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => handleOnSelected(item)}>
        <View style={styles.itemFlag}>
          <Image
            source={imageSource}
            style={styles.iconFlag}
            resizeMode="contain"
          />
          <Text style={styles.countryText}>{item.name}</Text>
          <Text style={styles.countryCodeText}>{`+${item.dialCode}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.3} onPress={toggleModal}>
        <View style={styles.containerInputCountryCode}>
          <Image
            source={flags[countryCode]}
            resizeMode="contain"
            style={styles.iconFlag}
          />
          <Text style={styles.placeholderCountryCode}>
            {`+${getDialCode(countryCode)}`}
          </Text>
          <Image source={images.arrowDown} style={styles.arrowDown} />
        </View>
      </TouchableOpacity>
      {visible && (
        <Modal
          useNativeDriver={true}
          isVisible={visible}
          backdropOpacity={0.5}>
          <View>
            <View style={styles.containerModal}>
              <FlatList
                keyExtractor={keyExtractor}
                data={arrCountry}
                renderItem={renderItem}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                maxToRenderPerBatch={15}
                ItemSeparatorComponent={FlatListSeparator}
              />
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.3} onPress={toggleModal}>
                <Text style={styles.btnCancelCountryPicker}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}

export default React.memo(CountryPicker);
