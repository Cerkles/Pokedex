import { View, StyleSheet, Text, Pressable, Button } from 'react-native'
import { useState } from 'react';

export default function HomeScreen() {
    const [blueLight, setBlueLight] = useState('skyblue')
    const [smallRed, setSmallRed] = useState('#db0000')
    const [smallYellow, setSmallYellow] = useState('#f0cc00')
    const [smallGreen, setSmallGreen] = useState('limegreen')
    
    return (
        <View style={styles.container}>
            <View style={styles.topBorder}>
            <View style={styles.topLeft}/>
            <View style={styles.topDiagonal}>
                <View style={styles.diagonal}/>
            </View>
            <View style={styles.topRight}/>
            </View>
            <View style={styles.blueLightBorder} />
            <View style={[styles.blueLight, {backgroundColor: blueLight}]} />
            <View style={styles.blueLightShine} />
            <View style={styles.smallLightContainer}>
                <View style={[styles.smallLight, {backgroundColor: smallRed}]}/>
                <View style={[styles.smallLight, {backgroundColor: smallYellow}]} />
                <View style={[styles.smallLight, {backgroundColor: smallGreen}]} />

            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={{width: 100, backgroundColor: 'green', height: 100}} 
                onPressIn={() => {setBlueLight('#0085fa'), setSmallRed('#ff2d1a'), setSmallYellow('#ffff00'), setSmallGreen('lime')}} 
                onPressOut={() => {setBlueLight('skyblue'), setSmallRed('#db0000'), setSmallYellow('#f0cc00'), setSmallGreen('limegreen')}}>
            </Pressable>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "crimson",
    },
    blueLight: {
        position: 'absolute',
        top: 60,
        left: 30,
        borderRadius: 50,
        borderWidth: 1,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    blueLightBorder :{
        position: 'absolute',
        top: 50,
        left: 20,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: 'white',
        width: 90,
        height: 90,
    },
    blueLightShine: {
        position: 'absolute',
        top: 70,
        left: 35,
        borderTopLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: '#dcf1f9',
        width: 25,
        height: 25,
    },
    smallLightContainer: {
        width: 150, 
        height: 50, 
        position: 'absolute', 
        top: 55, 
        left: 110,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    smallLight: {
        borderRadius: 50,
        borderWidth: 1,
        width: 30,
        height: 30,
    },
    topBorder: {
        flexDirection: "row",
        position: "absolute",
        top: 110,
    },
    topLeft: {

        borderBottomWidth: 4,
        height: 50,
        width: 220,
    },
    topDiagonal: {
        justifyContent: "center",
        height: 50,
        width: 80,
    },
    diagonal: {
        borderWidth: 2,
        transform: [{rotate: "-29deg"}],
        width: 95,
        marginLeft: -7,
    },
    topRight: {
        borderTopWidth: 4,
        height: 50,
        width: 130,

    }
})