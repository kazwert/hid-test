"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const themes_1 = require("../../themes");
const styles = react_native_1.StyleSheet.create({
    modal: {
        margin: 0,
        width: themes_1.metrics.screenWidth
    },
    logo: {
        width: 150,
        height: 40,
        marginVertical: 25,
        alignSelf: 'center'
    },
    container: Object.assign({ backgroundColor: themes_1.colors.white, flex: 1, justifyContent: 'space-between', height: themes_1.metrics.screenHeight * 0.65 }, themes_1.globalStyles.containerModal),
    title: Object.assign(Object.assign({}, themes_1.globalStyles.title), { textAlign: 'center' }),
    description: Object.assign(Object.assign({}, themes_1.globalStyles.normal), { textAlign: 'center' }),
    phoneNumber: Object.assign(Object.assign({}, themes_1.globalStyles.normalBold), { color: themes_1.colors.primary, textAlign: 'center' }),
    textSpace: {
        marginVertical: 20
    },
    resendCode: Object.assign(Object.assign({}, themes_1.globalStyles.descriptionBold), { color: themes_1.colors.gray }),
    containerPhoneNumber: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerDescription: {
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    otpView: {
        width: '80%',
        height: 50,
        marginTop: 20
    },
    otpFieldStyle: Object.assign(Object.assign({ width: 65, height: 50 }, themes_1.globalStyles.otpText), { color: themes_1.colors.black, borderWidth: 0, borderBottomWidth: 3, borderBottomColor: themes_1.colors.gray }),
    otpHighlightStyle: {
        borderBottomColor: themes_1.colors.primary
    }
});
exports.default = styles;
