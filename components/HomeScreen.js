import { View, StyleSheet, Text, Pressable, Button, Image } from 'react-native'
import { useState } from 'react';

export default function HomeScreen() {
    const [blueLight, setBlueLight] = useState('#90c9df')
    const [smallRed, setSmallRed] = useState('#db0000')
    const [smallYellow, setSmallYellow] = useState('#f0cc00')
    const [smallGreen, setSmallGreen] = useState('limegreen')
    const [lightOn, setLightOn] = useState(false)
    const pokeImages = [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    ]
    let [counter, setCounter] = useState(0)

    // const cycle = () =>{
    //     console.log(counter)
    //     counter === 3 ? (setCounter(0)): (setCounter(counter+=1))
    // }

    // setInterval(cycle, 5000)

    // const lights = () => {
    //     lightOn === false ? (setBlueLight('#05e2ff')) : (setBlueLight('#90c9df'))
    //     setLightOn(!lightOn)
    // }

    // setInterval(lights, 1000)

    return (
        <View style={styles.container}>
            <View style={styles.topBorder}>
                <View style={styles.topLeft} />
                <View style={styles.topDiagonal}>
                    <View style={styles.diagonal} />
                </View>
                <View style={styles.topRight} />
            </View>
            <View style={styles.blueLightBorder} />
            <View style={[styles.blueLight, { backgroundColor: blueLight }]} />
            <View style={styles.blueLightShine} />
            <View style={styles.smallLightContainer}>
                <View style={[styles.smallLight, { backgroundColor: smallRed }]} />
                <View style={[styles.smallLight, { backgroundColor: smallYellow }]} />
                <View style={[styles.smallLight, { backgroundColor: smallGreen }]} />
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.topLines}/>
                <View style={styles.botLines}/>
                <View style={styles.screenLight} />
                <View style={styles.screenCorner} />
                <View style={styles.screenCornerBorder} />
                <View style={styles.screen}>
                    <Image style={styles.sprite} source={{ uri: pokeImages[counter] }} />
                </View>
                <View style={styles.leftScreenLight}/>
                <View style={styles.rightScreenLight}/>
            </View>


            <View style={styles.bottomDex}>
                <View style={styles.directionalPad}>
                    <View style={styles.upDirection} />
                    <View style={styles.downDirection} />
                    <View style={styles.leftDirection} />
                    <View style={styles.rightDirection} />
                </View>
                <View style={styles.thinRed} />
                <View style={styles.thinBlue} />
                <View style={styles.blackButton} />
                <View style={styles.greenScreen} />
            </View>



            {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={{width: 100, backgroundColor: 'green', height: 100}} 
                onPressIn={() => {setBlueLight('#05e2ff'), setSmallRed('#ff2d1a'), setSmallYellow('#ffff00'), setSmallGreen('lime')}} 
                onPressOut={() => {setBlueLight('#90c9df'), setSmallRed('#db0000'), setSmallYellow('#f0cc00'), setSmallGreen('limegreen')}}>
            </Pressable>
            </View> */}
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
    bottomDex: {
        position: 'absolute',
        top: 550,
        width: '100%',
        height: '35%'
    },
    blackButton: {
        position: 'absolute',
        top: 80,
        left: 40,
        backgroundColor: '#111',
        borderWidth: 4,
        borderRadius: 50,
        height: 50,
        width: 50,
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
    blueLightBorder: {
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
    directionalPad: {
        position: 'absolute',
        top: 80,
        right: 20,
        width: 150,
        height: 150,
    },
    upDirection: {
        width: 50,
        height: 100,
        backgroundColor: '#111',
        position: 'absolute',
        left: 50,
        borderRadius: 10
    },
    downDirection: {
        width: 50,
        height: 100,
        backgroundColor: '#111',
        position: 'absolute',
        left: 50,
        bottom: 0,
        borderRadius: 10
    },
    leftDirection: {
        width: 100,
        height: 50,
        backgroundColor: '#111',
        position: 'absolute',
        borderRadius: 10,
        top: 50
    },
    rightDirection: {
        width: 100,
        height: 50,
        backgroundColor: '#111',
        position: 'absolute',
        borderRadius: 10,
        top: 50,
        right: 0
    },
    greenScreen: {
        position: 'absolute',
        top: 140,
        left: 100,
        backgroundColor: 'lime',
        width: 145,
        height: 70,
        borderWidth: 1,
        borderRadius: 5
    },
    thinBlue: {
        position: 'absolute',
        top: 50,
        left: 100,
        width: 60,
        height: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
    },
    thinRed: {
        position: 'absolute',
        top: 50,
        left: 190,
        width: 60,
        height: 15,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        borderWidth: 1,
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
        borderBottomRightRadius: 2,
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
        transform: [{ rotate: "-29deg" }],
        width: 95,
        marginLeft: -7,
    },
    topRight: {
        borderTopWidth: 4,
        borderTopLeftRadius: 2,
        height: 50,
        width: 130,
    },
    screenContainer: {
        width: 320,
        height: 320,
        backgroundColor: "#efefef",
        borderWidth: 2,
        borderBottomLeftRadius: 4,
        position: 'absolute',
        top: 200,
    },
    screenCorner: {
        position: "absolute",
        bottom: -27,
        borderLeftWidth: 25,
        borderLeftColor: "transparent",
        borderRightWidth: 293,
        borderTopWidth: 25,
    },
    screenCornerBorder: {
        position: "absolute",
        bottom: -24,
        borderLeftWidth: 25,
        borderLeftColor: "transparent",
        borderRightWidth: 291,
        borderRightColor: "#efefef",
        borderTopWidth: 25,
        borderTopColor: "#efefef",
    },
    screen: {
        position: "absolute",
        top: 30,
        left: 30,
        width: 260,
        height: 260,
        backgroundColor: "#333",
        borderWidth: 2,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    screenLight: {
        position: 'absolute',
        top: 302,
        left: 35,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'red',
        borderWidth: 1,
        zIndex: 1,
    },
    sprite: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
    },
    topLines: {
        position: 'absolute',
        top: 300,
        right: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        width: 40,
        height: 12,
    },
    botLines: {
        position: 'absolute',
        top: 320,
        right: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        width: 40,
        height: 12,
        zIndex: 3,
    },
    leftScreenLight: {
        position: 'absolute',
        top: 10,
        left: 120,
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 50,
        borderWidth: 1
    },
    rightScreenLight: {
        position: 'absolute',
        top: 10,
        right: 120,
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 50,
        borderWidth: 1
    }
});
