"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_modal_1 = __importDefault(require("react-native-modal"));
const themes_1 = require("../../themes");
const styles_1 = __importDefault(require("./styles"));
const Context_1 = require("../../core/Context");
const FlatListSeparator_1 = __importDefault(require("./FlatListSeparator"));
const helpers_1 = require("../../helpers");
const countries = require('../../assets/json/countries.json');
const arrCountry = Object.keys(countries).map((key) => {
    return countries[key];
});
function Modal(props) {
    const { onSelected } = props;
    const { countryCode } = react_1.useContext(Context_1.Context);
    const [visible, setVisible] = react_1.default.useState(false);
    const toggleModal = () => {
        setVisible(!visible);
    };
    const handleOnSelected = (item) => {
        toggleModal();
        onSelected(item);
    };
    const keyExtractor = (item) => item.iso2;
    const renderItem = ({ item }) => {
        const imageSource = themes_1.flags[item.iso2];
        return (<react_native_1.TouchableOpacity activeOpacity={0.3} onPress={() => handleOnSelected(item)}>
        <react_native_1.View style={styles_1.default.itemFlag}>
          <react_native_1.Image source={imageSource} style={styles_1.default.iconFlag} resizeMode="contain"/>
          <react_native_1.Text style={styles_1.default.countryText}>{item.name}</react_native_1.Text>
          <react_native_1.Text style={styles_1.default.countryCodeText}>{`+${item.dialCode}`}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>);
    };
    return (<>
      <react_native_1.TouchableOpacity activeOpacity={0.3} onPress={toggleModal}>
        <react_native_1.View style={styles_1.default.containerInputCountryCode}>
          <react_native_1.Image source={themes_1.flags[countryCode]} resizeMode="contain" style={styles_1.default.iconFlag}/>
          <react_native_1.Text style={styles_1.default.placeholderCountryCode}>
            {`+${helpers_1.getDialCode(countryCode)}`}
          </react_native_1.Text>
          <react_native_1.Image source={themes_1.images.arrowDown} style={styles_1.default.arrowDown}/>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>
      <react_native_modal_1.default useNativeDriver={true} avoidKeyboard={false} animationInTiming={500} animationOut="fadeOut" animationOutTiming={500} isVisible={visible} backdropOpacity={0.5}>
        <react_native_1.View>
          <react_native_1.View style={styles_1.default.containerModal}>
            <react_native_1.FlatList keyExtractor={keyExtractor} data={arrCountry} renderItem={renderItem} scrollEnabled={true} showsVerticalScrollIndicator={false} maxToRenderPerBatch={15} ItemSeparatorComponent={FlatListSeparator_1.default}/>
          </react_native_1.View>
          <react_native_1.View>
            <react_native_1.TouchableOpacity activeOpacity={0.3} onPress={toggleModal}>
              <react_native_1.Text style={styles_1.default.btnCancelCountryPicker}>Cancel</react_native_1.Text>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_modal_1.default>
    </>);
}
exports.default = Modal;
