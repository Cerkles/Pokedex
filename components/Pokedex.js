import { Dimensions, View, StyleSheet, Text, Pressable, Button, Image } from 'react-native'
import { useState } from 'react';

export default function Pokedex() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [blueLight, setBlueLight] = useState('#90c9df')
    const [smallRed, setSmallRed] = useState('#db0000')
    const [smallYellow, setSmallYellow] = useState('#f0cc00')
    const [smallGreen, setSmallGreen] = useState('limegreen')

    return (
        <View style={styles.container}>

            <View style={styles.topDex}>
                <View style={[styles.blueLightContainer, {marginTop: windowHeight*0.05}]}>
                    <View style={[styles.blueLightBorder, {width: windowHeight*.08, height: windowHeight*.08 }]}>
                        <View style={[styles.blueLight, { backgroundColor: blueLight, width: windowHeight*.06, height: windowHeight*.06 }]}>
                            <View style={[styles.blueLightShine, {width: windowHeight*.03, height: windowHeight*.03 }]} />
                        </View>
                    </View>   
                </View>
                <View style={[styles.smallLightContainer, {marginTop: windowHeight*-0.01}]}>
                    <View style={[styles.smallLight, { backgroundColor: smallRed }]} />
                    <View style={[styles.smallLight, { backgroundColor: smallYellow }]} />
                    <View style={[styles.smallLight, { backgroundColor: smallGreen }]} />
                </View>
            </View>

            <View style={styles.middleDex}>
            </View>

            <View style={styles.botDex}>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        borderColor: "white",
        backgroundColor: "crimson",
    },
    topDex: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'green',
    },
    middleDex: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'blue'
    },
    botDex: {
        flex: 2,
        borderWidth: 2,
        borderColor: 'yellow'
    },
    blueLightBorder: {
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: 'white',
        width: 90,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
    },
    blueLight: {
        borderRadius: 50,
        borderWidth: 1,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    blueLightShine: {
        borderTopLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: '#dcf1f9',
        width: 25,
        height: 25,        
        marginTop: -32,
        marginLeft: -23,
    },
    blueLightContainer: {
        borderWidth: 1,
        marginLeft: '5%',
    },
    smallLightContainer: {
        borderWidth: 1,
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
})