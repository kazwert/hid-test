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
const styles_1 = __importDefault(require("./styles"));
class OTPInputView extends react_1.Component {
    constructor(props) {
        super(props);
        this.fields = [];
        this.bringUpKeyBoardIfNeeded = () => {
            const { autoFocusOnLoad, pinCount } = this.props;
            const digits = this.getDigits();
            const focusIndex = digits.length ? digits.length - 1 : 0;
            if (focusIndex < pinCount && autoFocusOnLoad) {
                this.focusField(focusIndex);
            }
        };
        this.getDigits = () => {
            const { digits: innerDigits } = this.state;
            return innerDigits;
        };
        this.handleKeyboardDidHide = () => {
            this.blurAllFields();
        };
        this.notifyCodeChanged = () => {
            const { digits } = this.state;
            const code = digits.join('');
            const { onCodeChanged } = this.props;
            if (onCodeChanged) {
                onCodeChanged(code);
            }
        };
        this.handleChangeText = (index, text) => {
            const { onCodeFilled, pinCount } = this.props;
            const digits = this.getDigits();
            let newdigits = digits.slice();
            const oldTextLength = newdigits[index] ? newdigits[index].length : 0;
            const newTextLength = text.length;
            if (newTextLength - oldTextLength === pinCount) {
                // user pasted text in.
                newdigits = text.split('').slice(oldTextLength, newTextLength);
                this.setState({ digits: newdigits }, this.notifyCodeChanged);
            }
            else {
                if (text.length === 0) {
                    if (newdigits.length > 0) {
                        newdigits = newdigits.slice(0, newdigits.length - 1);
                    }
                }
                else {
                    text.split('').forEach((value) => {
                        if (index < pinCount) {
                            newdigits[index] = value;
                            index += 1;
                        }
                    });
                    index -= 1;
                }
                this.setState({ digits: newdigits }, this.notifyCodeChanged);
            }
            let result = newdigits.join('');
            if (result.length >= pinCount) {
                onCodeFilled && onCodeFilled(result);
                this.focusField(pinCount - 1);
                this.blurAllFields();
            }
            else {
                if (text.length > 0 && index < pinCount - 1) {
                    this.focusField(index + 1);
                }
            }
        };
        this.handleKeyPressTextInput = (index, key) => {
            const digits = this.getDigits();
            if (key === 'Backspace') {
                if (!digits[index] && index > 0) {
                    this.handleChangeText(index - 1, '');
                    this.focusField(index - 1);
                }
            }
        };
        this.focusField = (index) => {
            if (index < this.fields.length) {
                this.fields[index].focus();
                this.setState({
                    selectedIndex: index
                });
            }
        };
        this.blurAllFields = () => {
            this.fields.forEach((field) => field.blur());
            this.setState({
                selectedIndex: -1
            });
        };
        this.clearAllFields = () => {
            const { clearInputs } = this.props;
            if (clearInputs) {
                this.setState({ digits: [], selectedIndex: 0 });
            }
        };
        this.renderOneInputField = (_, index) => {
            const { codeInputFieldStyle, codeInputHighlightStyle, secureTextEntry, editable, keyboardType, selectionColor, keyboardAppearance } = this.props;
            const { defaultTextFieldStyle } = styles_1.default;
            const { selectedIndex, digits } = this.state;
            const { clearInputs, placeholderCharacter, placeholderTextColor } = this.props;
            const { color: defaultPlaceholderTextColor } = Object.assign(Object.assign({}, defaultTextFieldStyle), codeInputFieldStyle);
            return (<react_native_1.View pointerEvents="none" key={index + 'view'} testID="inputSlotView">
        <react_native_1.TextInput testID="textInput" underlineColorAndroid="rgba(0,0,0,0)" style={selectedIndex === index
                ? [
                    defaultTextFieldStyle,
                    codeInputFieldStyle,
                    codeInputHighlightStyle
                ]
                : [defaultTextFieldStyle, codeInputFieldStyle]} ref={(ref) => {
                this.fields[index] = ref;
            }} onChangeText={(text) => {
                this.handleChangeText(index, text);
            }} onKeyPress={({ nativeEvent: { key } }) => {
                this.handleKeyPressTextInput(index, key);
            }} value={!clearInputs ? digits[index] : ''} keyboardAppearance={keyboardAppearance} keyboardType={keyboardType} textContentType="none" key={index} selectionColor={selectionColor} secureTextEntry={secureTextEntry} editable={editable} placeholder={placeholderCharacter} placeholderTextColor={placeholderTextColor || defaultPlaceholderTextColor}/>
      </react_native_1.View>);
        };
        this.renderTextFields = () => {
            const { pinCount } = this.props;
            const array = new Array(pinCount).fill(0);
            return array.map(this.renderOneInputField);
        };
        this.state = {
            digits: [],
            selectedIndex: props.autoFocusOnLoad ? 0 : -1
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.bringUpKeyBoardIfNeeded();
        }, 300);
        this.keyboardDidHideListener = react_native_1.Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }
    componentWillUnmount() {
        var _a;
        if (this.timer) {
            clearInterval(this.timer);
        }
        (_a = this.keyboardDidHideListener) === null || _a === void 0 ? void 0 : _a.remove();
    }
    render() {
        const { pinCount, style, clearInputs } = this.props;
        const digits = this.getDigits();
        return (<react_native_1.View testID="OTPInputView" style={style}>
        <react_native_1.TouchableWithoutFeedback style={styles_1.default.touchable} onPress={() => {
            if (!clearInputs) {
                let filledPinCount = digits.filter((digit) => {
                    return digit !== null && digit !== undefined;
                }).length;
                this.focusField(Math.min(filledPinCount, pinCount - 1));
            }
            else {
                this.clearAllFields();
                this.focusField(0);
            }
        }}>
          <react_native_1.View style={styles_1.default.containerTextField}>
            {this.renderTextFields()}
          </react_native_1.View>
        </react_native_1.TouchableWithoutFeedback>
      </react_native_1.View>);
    }
}
exports.default = OTPInputView;
OTPInputView.defaultProps = {
    pinCount: 6,
    autoFocusOnLoad: true,
    secureTextEntry: false,
    editable: true,
    keyboardAppearance: 'default',
    keyboardType: 'number-pad',
    clearInputs: false,
    placeholderCharacter: '',
    selectionColor: '#000'
};
