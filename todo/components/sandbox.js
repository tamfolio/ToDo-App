import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingTop: 40, 
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex: 1,
        backgroundColor: "violet",
        alignItems: "center",
        padding: 10
    },
    boxTwo: {
        flex: 1,
        backgroundColor: "gold",
        padding: 10
    },
    boxThree: {
        flex: 1,
        backgroundColor: "coral",
        padding: 10
    },
    boxFour: {
        flex: 1,
        backgroundColor: "skyblue",
        padding: 10
    }
})