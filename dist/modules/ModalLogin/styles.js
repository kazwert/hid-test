"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const themes_1 = require("../../themes");
const styles = react_native_1.StyleSheet.create({
    modal: {
        margin: 0,
        width: themes_1.metrics.screenWidth
    },
    container: Object.assign({ backgroundColor: themes_1.colors.primary, flex: 1, justifyContent: 'space-around', alignItems: 'center', height: themes_1.metrics.screenHeight * 0.4 }, themes_1.globalStyles.containerModal),
    tosLabel: {
        color: themes_1.colors.orange,
        marginVertical: 10
    },
    imgButton: {
        width: themes_1.metrics.screenWidth - 100,
        height: themes_1.metrics.screenHeight * 0.07,
        borderRadius: 4
    },
    appName: Object.assign(Object.assign({}, themes_1.globalStyles.title), { color: themes_1.colors.white })
});
exports.default = styles;
