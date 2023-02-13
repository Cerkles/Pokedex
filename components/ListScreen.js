import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { requestPokemon } from "../Requests";
import { requestPokeList } from "../Requests";
import { requestSpecies } from "../Requests";
import Scaling from "../Scaling";

export default function ListScreen() {
    const [pokeList, setPokeList] = useState([])
    const [sprite, setSprite] = useState("")

    useEffect(() => {
        requestPokeList().then((response) => (response && setPokeList(response.data.results)))
    }, [])

    function getPokeInfo(url){
        requestSpecies(url).then((response) => console.log(response.data.sprites.front_default))
    }



    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>



                {pokeList.length !== 0 && pokeList.map((pokemon) =>
                    <View style={styles.pokeCard}>
                        {getPokeInfo(pokemon.url)}
                        {/* {<Image style={{width: '40%', height: '40%'}} source={{uri: getPokeInfo(pokemon.name)}}/>} */}
                        <Text>{capitalizeFirstLetter(pokemon.name)}</Text>
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
