import { View, StyleSheet, Text } from 'react-native'
import typeColor from '../TypeColors'


export default function Types({ type1, type2 }) {

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
        height: '8%',
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
        height: "100%",
    },
    types: {
        width: "30%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: '1%'

    },
})