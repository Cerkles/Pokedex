import { View, StyleSheet, Text } from 'react-native'
import { useState } from 'react'


export default function Types({ type1, type2 }) {

    function typeColor(type) {
        switch (type) {
            case 'grass':
                return '#78C84F'
            case 'water':
                return '#6790F0'
            case 'fire':
                return '#EF8031'
            case 'normal':
                return '#A8A877'
            case 'electric':
                return '#F9CF30'
            case 'ice':
                return '#99D8D8'
            case 'fighting':
                return '#C03028'
            case 'poison':
                return '#9F40A0'
            case 'flying':
                return '#A790F0'
            case 'psychic':
                return '#F85888'
            case 'bug':
                return '#A8B721'
            case 'ground':
                return '#E0C068'
            case 'rock':
                return '#B8A038'
            case 'ghosts':
                return '#6F5898'
            case 'dark':
                return '#705848'
            case 'dragon':
                return '#7138F8'
            case 'steel':
                return '#B8B8D0'
            case 'fairy':
                return '#EE99AC'
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