"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const themes_1 = require("../../themes");
const styles = react_native_1.StyleSheet.create({
    container: Object.assign(Object.assign({}, themes_1.globalStyles.container), { flex: 1, backgroundColor: themes_1.colors.primary, alignItems: 'center', justifyContent: 'space-around' }),
    illustration: {
        width: 150,
        height: 150
    },
    desc: Object.assign(Object.assign({}, themes_1.globalStyles.normal), { color: themes_1.colors.white, textAlign: 'center' }),
    textSpace: {
        marginVertical: 20
    },
    termsText: Object.assign(Object.assign({}, themes_1.globalStyles.description), { color: themes_1.colors.white, textAlign: 'center' }),
    learnMoreText: Object.assign(Object.assign({}, themes_1.globalStyles.descriptionBold), { color: themes_1.colors.white, textAlign: 'center', paddingVertical: 15, textDecorationLine: 'underline' }),
    btnCancel: Object.assign(Object.assign({}, themes_1.globalStyles.title), { color: themes_1.colors.white }),
    containerForm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 25
    },
    textInput: Object.assign(Object.assign({ width: '65%', marginHorizontal: 5, borderBottomWidth: 1, borderBottomColor: themes_1.colors.white, paddingHorizontal: 20, marginTop: -10, color: themes_1.colors.white }, themes_1.globalStyles.title), { textAlign: 'center' }),
    btnContainer: {
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginHorizontal: 5
    },
    btnEnter: {
        backgroundColor: themes_1.colors.orange
    },
    btnEnterDisabled: {
        backgroundColor: themes_1.colors.gray
    },
    btnEnterText: Object.assign({}, themes_1.globalStyles.title),
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
    countryCodeText: Object.assign(Object.assign({}, themes_1.globalStyles.normalBold), { color: themes_1.colors.gray }),
    itemFlag: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingVertical: 15
    },
    containerModal: {
        backgroundColor: themes_1.colors.graySmooth,
        marginHorizontal: 15,
        height: themes_1.metrics.screenHeight / 1.5,
        borderRadius: 6
    },
    separator: {
        height: 1,
        backgroundColor: themes_1.colors.gray400
    },
    placeholderCountryCode: Object.assign(Object.assign({}, themes_1.globalStyles.title), { color: themes_1.colors.white, marginLeft: 5 }),
    containerInputCountryCode: {
        height: 39,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: themes_1.colors.white,
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingHorizontal: 5
    },
    btnCancelCountryPicker: Object.assign({ textAlign: 'center', backgroundColor: themes_1.colors.graySmooth, borderRadius: 6, paddingVertical: 15, marginHorizontal: 15, marginVertical: 25 }, themes_1.globalStyles.title),
    arrowDown: {
        width: 15,
        height: 15,
        marginLeft: 5
    }
});
exports.default = styles;
