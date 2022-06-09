"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const screens_1 = require("./src/screens");
const native_1 = require("@react-navigation/native");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const assets_1 = require("./src/assets");
const Tab = bottom_tabs_1.createBottomTabNavigator();
function App() {
    return (<native_1.NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={screens_1.HomeScreen} options={{
        tabBarIcon: () => <assets_1.HomeIcon />,
    }}/>
        <Tab.Screen name="Search" component={screens_1.SearchScreen}/>
        <Tab.Screen name="Settings" component={screens_1.SettingsScreen}/>
      </Tab.Navigator>
    </native_1.NavigationContainer>);
}
exports.default = App;