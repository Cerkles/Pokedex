import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { requestPokemon } from "../Requests";
import { requestPokeList } from "../Requests";
import { requestSpecies } from "../Requests";
import Scaling from "../Scaling";

export default function ListScreen() {
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
                    <View style={styles.pokeCard}>
                        <Image style={{width: '60%', height: '60%'}}
                        resizeMode='stretch'
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter+=1}.png`}}/>
                        <Text>{capitalizeFirstLetter(pokemon.name)}</Text>
                        {String(counter).length === 1 ? <Text>#00{counter}</Text> : String(counter).length === 2 ? <Text>#0{counter}</Text> : <Text>#{counter}</Text>}
                    </View>
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
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: '1%',
        backgroundColor: '#efefef'
    }
})
