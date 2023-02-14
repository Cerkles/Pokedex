import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { requestPokeList } from "../Requests";
import Scaling from "../Scaling";

export default function ListScreen({navigation}) {
    const [pokeList, setPokeList] = useState([])
    let counter = 0

    useEffect(() => {
        requestPokeList().then((response) => (response && setPokeList(response.data.results)))
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>



                {pokeList.length !== 0 && pokeList.map((pokemon) =>
                    <TouchableOpacity onPress={() => navigation.navigate("Info", {id: pokemon.name})} style={styles.pokeCard}>
                        <Image style={styles.sprite}
                        resizeMode='stretch'
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter+=1}.png`}}/>
                        <Text>{capitalizeFirstLetter(pokemon.name)}</Text>
                        {String(counter).length === 1 ? <Text>#00{counter}</Text> : String(counter).length === 2 ? <Text>#0{counter}</Text> : <Text>#{counter}</Text>}
                    </TouchableOpacity>
                )}



            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'crimson'
    },
    listContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: Scaling.windowHeight * .05
    },
    pokeCard: {
        width: '45%',
        height: Scaling.windowHeight * .2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin: '1%',
        backgroundColor: '#efefef'
    }, 
    sprite: {
        width: '70%',
        height: '70%'
    }
})
