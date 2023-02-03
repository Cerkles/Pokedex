import { View, StyleSheet, Text } from 'react-native'
import { useState } from 'react'


export default function Types({ type1, type2 }) {

    function typeColor(type) {
        switch (type) {
            case 'grass':
                return 'green'
                break;
            case 'water':
                return 'blue'
                break;
            case 'fire':
                return 'orange'
                break;
            case 'normal':
                return 'white'
                break;
            case 'electric':
                return 'gold'
                break;
            case 'ice':
                return 'lightblue'
                break;
            case 'fighting':
                return 'red'
                break;
            case 'poison':
                return 'purple'
                break;
            case 'flying':
                return 'skyblue'
                break;
            case 'psychic':
                return 'violet'
                break;
            case 'bug':
                return 'lightgreen'
                break;
            case 'ground':
                return 'brown'
                break;
            case 'rock':
                return 'grey'
                break;
            case 'ghosts':
                return 'blue'
                break;
            case 'dark':
                return 'black'
                break;
            case 'dragon':
                return 'darkpurple'
                break;
            case 'steel':
                return 'silver'
                break;
            case 'fairy':
                return 'pink'
                break;
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <View style={styles.container}>
        <View style={styles.typeContainer}>
            <View style={[styles.types, { backgroundColor: typeColor(type1) }]}>
                <Text>{capitalizeFirstLetter(type1)}</Text>
            </View>
            
            {type2.length !== 0 &&
            <View style={[styles.types, { backgroundColor: typeColor(type2) }]}>
                <Text>{capitalizeFirstLetter(type2)}</Text>
            </View>}

        </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height: '10%',
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        height: "100%",
    },
    types: {
        width: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: '1%'

    },
})