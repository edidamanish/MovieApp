"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var SettingsScreen = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.conatiner },
        react_1["default"].createElement(react_native_1.Text, null, "Settings Screen")));
};
exports["default"] = SettingsScreen;
var styles = react_native_1.StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
});
