import React, {FC} from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const SettingsScreen:FC = () => {
    return(
        <View style={styles.conatiner}>
            <Text>Settings Screen</Text>
        </View>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})