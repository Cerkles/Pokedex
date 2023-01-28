import { View, StyleSheet, Text, Pressable, Button, Image } from 'react-native'
import { useState, useEffect } from 'react';
import Scaling from '../Scaling';
import { request151 } from '../Requests';

export default function Pokedex() {
    const [blueLight, setBlueLight] = useState('#90c9df')
    const [smallRed, setSmallRed] = useState('#db0000')
    const [smallYellow, setSmallYellow] = useState('#f0cc00')
    const [smallGreen, setSmallGreen] = useState('limegreen')
    const [pokeContainer, setPokeContainer] = useState([])
    const pokeImages = [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    ]
    let [counter, setCounter] = useState(1)


    useEffect(() => {
        request151(counter).then((response) => response && setPokeContainer(response.data.sprites.front_default))
    }, [counter])

    const handleUpClick = () => {
        counter === 151 ? (setCounter(1)) : (setCounter(counter += 1))
    }

    const handleDownClick = () => {
        counter === 1 ? (setCounter(151)) : (setCounter(counter -= 1))
    }


    console.log(pokeContainer)
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
                </View>
                <View style={styles.thinRed} />
                <View style={styles.thinBlue} />
                <View style={styles.blackButton} />
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
        flex: 2,
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
    
    /////////////////////////////////////////////////////////////
    
    screenContainer: {
        position: 'absolute',
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
        height: '45%',
        backgroundColor: '#111',
        borderRadius: 10,
        position: 'absolute',
        left: '33%'
    },
    downDirection: {
        width: '33%',
        height: '45%',
        backgroundColor: '#111',
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        left: '33%'
    },
    leftDirection: {
        width: '45%',
        height: '33%',
        backgroundColor: '#111',
        borderRadius: 10,
        position: 'absolute',
        top: '33%'
    },
    rightDirection: {
        width: '45%',
        height: '33%',
        backgroundColor: '#111',
        borderRadius: 10,
        position: 'absolute',
        right: 0,
        top: '33%'
    },
    blackButton: {
        position: 'absolute',
        top: Scaling.windowHeight * .05,
        left: Scaling.windowWidth * .03,
        backgroundColor: '#111',
        borderWidth: 4,
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
    },
})