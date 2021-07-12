import React, {FC} from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const HomeScreen:FC = () => {
    return(
        <View style={styles.conatiner}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})