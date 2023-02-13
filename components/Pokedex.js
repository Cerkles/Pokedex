import { View, StyleSheet, Text, Pressable, Image} from 'react-native'
import { useState, useEffect } from 'react';
import Scaling from '../Scaling';
import { request151 } from '../Requests';

export default function Pokedex({navigation}) {
    const [blueLight, setBlueLight] = useState('#90c9df')
    const [smallRed, setSmallRed] = useState('#db0000')
    const [smallYellow, setSmallYellow] = useState('#f0cc00')
    const [smallGreen, setSmallGreen] = useState('limegreen')
    const [pokeContainer, setPokeContainer] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    let [counter, setCounter] = useState(1)
    const [blueLightOn, setBlueLightOn] = useState(false)
    const [lightsOn, setLightsOn] = useState(false)


    useEffect(() => {
        request151(counter).then((response) => response && setPokeContainer(response.data.sprites.front_default))
    }, [counter])

    useEffect(() => {
        blueLightOn ? (setBlueLight('blue')):(setBlueLight('#90c9df'))
    }, [blueLightOn])

    const handleUpClick = () => {
        counter === 151 ? (setCounter(1)) : (setCounter(counter += 1))
    }

    const handleDownClick = () => {
        counter === 1 ? (setCounter(151)) : (setCounter(counter -= 1))
    }


    return (
        <View style={styles.container}>

            <View style={styles.topDex}>
                <View style={styles.blueLightContainer}>
                    <View style={styles.blueLightBorder}>
                        <View style={[styles.blueLight, { backgroundColor: blueLight }]}>
                            <View style={styles.blueLightShine} />
                        </View>
                    </View>
                </View>
                <View style={styles.smallLightContainer}>
                    <View style={[styles.smallLight, { backgroundColor: smallRed }]} />
                    <View style={[styles.smallLight, { backgroundColor: smallYellow }]} />
                    <View style={[styles.smallLight, { backgroundColor: smallGreen }]} />
                </View>
                <View style={styles.topBorder}>
                    <View style={styles.topLeft} />
                    <View style={styles.topDiagonal}>
                        <View style={styles.diagonal} />
                    </View>
                    <View style={styles.topRight} />
                </View>
            </View>

            <View style={styles.middleDex}>
                <View style={styles.screenContainer}>
                    <View style={styles.rightScreenLight}/>
                    <View style={styles.leftScreenLight}/>
                    <View style={styles.screen}>     
                        <Image style={styles.sprite} source={{uri: pokeContainer}}/>
                    </View>
                    <View style={styles.topLines}/>
                    <View style={styles.botLines}/>
                    <View style={styles.screenLight} />
                </View>
            </View>

            <View style={styles.botDex}>
                <View style={styles.directionalPad}>
                    <Pressable onPress={() => handleUpClick()} style={styles.upDirection} />
                    <Pressable onPress={() => handleDownClick()} style={styles.downDirection} />
                    <View style={styles.leftDirection} />
                    <View style={styles.rightDirection} />
                    <View style={styles.middleDirection} />
                </View>
                <Pressable onPress={() => navigation.navigate("List")} style={styles.thinRed} />
                <Pressable onPress={() => setBlueLightOn(!blueLightOn)} style={styles.thinBlue} />
                <Pressable onPress={() => navigation.navigate("Info", {id: counter})} style={styles.blackButton} />
                <View style={styles.greenScreen} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "crimson",
    },
    topDex: {
        flex: 1,
    },
    middleDex: {
        flex: 2,
    },
    botDex: {
        flex: 1.5,
        marginTop: "5%",
    },

    /////////////////////////////////////////////////////////////

    blueLightBorder: {
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: 'white',
        width: Scaling.windowHeight * .1,
        height: Scaling.windowHeight * .1,
        justifyContent: "center",
        alignItems: "center",
    },
    blueLight: {
        borderRadius: 50,
        borderWidth: 1,
        width: Scaling.windowHeight * .08,
        height: Scaling.windowHeight * .08,
        alignItems: "center",
        justifyContent: "center"
    },
    blueLightShine: {
        borderTopLeftRadius: 120,
        borderBottomRightRadius: 120,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: '#dcf1f9',
        width: Scaling.windowHeight * .02,
        height: Scaling.windowHeight * .02,
        marginTop: -Scaling.windowHeight * .04,
        marginLeft: -Scaling.windowHeight * .04,
    },
    blueLightContainer: {
        position: 'absolute',
        top: Scaling.windowHeight * .05,
        left: Scaling.windowHeight * .03
    },
    smallLightContainer: {
        width: Scaling.windowWidth * .3,
        position: 'absolute',
        top: Scaling.windowHeight * .05,
        left: Scaling.windowHeight * .14,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    smallLight: {
        borderRadius: 50,
        borderWidth: 1,
        width: Scaling.windowHeight * .03,
        height: Scaling.windowHeight * .03,
    },   
    topBorder: {
        flexDirection: "row",
        position: "absolute",
        top: Scaling.windowHeight * .11,
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
    
    /////////////////////////////////////////////////////////////
    
    screenContainer: {
        position: 'absolute',
        top: "5%",
        left: '10%',
        backgroundColor: "#efefef",
        borderWidth: 2,
        borderBottomLeftRadius: 4,
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 50
    },
    screen: {
        width: '80%',
        height: '70%',
        backgroundColor: "#333",
        borderWidth: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    sprite: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    rightScreenLight: {
        position: 'absolute',
        top: '6%',
        right: '35%',
        backgroundColor: 'red',
        width: Scaling.windowHeight * .018,
        height: Scaling.windowHeight * .018,
        borderRadius: 50,
        borderWidth: 1
    },
    leftScreenLight: {
        position: 'absolute',
        top: '6%',
        left: '35%',
        backgroundColor: 'red',
        width: Scaling.windowHeight * .018,
        height: Scaling.windowHeight * .018,
        borderRadius: 50,
        borderWidth: 1
    },
    topLines: {
        position: 'absolute',
        top: '87%',
        right: '11%',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        width: '10%',
        height: '4%',
    },
    botLines: {
        position: 'absolute',
        top: '94%',
        right: '11%',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        width: '10%',
        height: '4%',
    },
    screenLight: {
        position: 'absolute',
        top: '88%',
        left: '15%',
        width: Scaling.windowHeight * .03,
        height: Scaling.windowHeight * .03,
        borderRadius: 50,
        backgroundColor: 'red',
        borderWidth: 1,
    },


    /////////////////////////////////////////////////////////////

    directionalPad: {
        position: 'absolute',
        top: Scaling.windowHeight * .02,
        right: Scaling.windowWidth * .04,
        width: Scaling.windowWidth * .35,
        height: Scaling.windowWidth * .35,
    },
    upDirection: {
        width: '33%',
        height: '39%',
        backgroundColor: '#222',
        borderRadius: 10,
        position: 'absolute',
        left: '33%',
        borderWidth: 3
    },
    downDirection: {
        width: '33%',
        height: '39%',
        backgroundColor: '#222',
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        left: '33%',
        borderWidth: 3
    },
    leftDirection: {
        width: '39%',
        height: '33%',
        backgroundColor: '#222',
        borderRadius: 10,
        position: 'absolute',
        top: '33%',
        borderWidth: 3
    },
    rightDirection: {
        width: '39%',
        height: '33%',
        backgroundColor: '#222',
        borderRadius: 10,
        position: 'absolute',
        right: 0,
        top: '33%',
        borderWidth: 3
    },
    middleDirection:{
        width: '33%',
        height: '33%',
        backgroundColor: '#222',
        position: 'absolute',
        top: '33%',
        left: '33%',
        borderRadius: 8
    },
    blackButton: {
        position: 'absolute',
        top: Scaling.windowHeight * .05,
        left: Scaling.windowWidth * .03,
        backgroundColor: '#222',
        borderWidth: 3,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderRadius: 50,
        height: Scaling.windowHeight * .07,
        width: Scaling.windowHeight * .07,
    },
    greenScreen: {
        position: 'absolute',
        top: Scaling.windowHeight * .15,
        left: Scaling.windowWidth * .23,
        backgroundColor: 'lime',
        width: Scaling.windowWidth * .3,
        height: Scaling.windowHeight * .1,
        borderWidth: 1,
        borderRadius: 5
    },
    thinBlue: {
        position: 'absolute',
        top: Scaling.windowHeight * .07,
        left: Scaling.windowWidth * .41,
        height: Scaling.windowHeight * .015,
        width: Scaling.windowWidth * .1,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    thinRed: {
        position: 'absolute',
        top: Scaling.windowHeight * .07,
        left: Scaling.windowWidth * .25,
        height: Scaling.windowHeight * .015,
        width: Scaling.windowWidth * .1,
        backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2,

    },
})