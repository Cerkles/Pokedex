import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { requestPokeList } from "../Requests";
import Scaling from "../Scaling";

export default function ListScreen({ navigation }) {
    const [pokeList, setPokeList] = useState([])
    const [pokeCount, setPokeCount] = useState(151)
    const [pokeOffset, setPokeOffset] = useState(0)
    let counter = pokeOffset

    useEffect(() => {
        requestPokeList(pokeCount, pokeOffset).then((response) => (response && setPokeList(response.data.results)))
    }, [])

    useEffect(() => {
        requestPokeList(pokeCount, pokeOffset).then((response) => (response && setPokeList(response.data.results)))
    }, [pokeCount])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    console.log(counter)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>

                <View style={styles.genContainer}>
                    <TouchableOpacity onPress={() => { setPokeCount(151), setPokeOffset(0) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 151 ? 3 : 0}]}>
                        <Text>Gen. I</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(251), setPokeOffset(151) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 251 ? 3 : 0}]}>
                        <Text>Gen. II</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(386), setPokeOffset(251) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 386 ? 3 : 0}]}>
                        <Text>Gen. III</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(494), setPokeOffset(386) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 494 ? 3 : 0}]}>
                        <Text>Gen. IV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(649), setPokeOffset(494) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 649 ? 3 : 0}]}>
                        <Text>Gen. V</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(721), setPokeOffset(649) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 721 ? 3 : 0}]}>
                        <Text>Gen. VI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(809), setPokeOffset(721) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 809 ? 3 : 0}]}>
                        <Text>Gen. VII</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(905), setPokeOffset(809) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 905 ? 3 : 0}]}>
                        <Text>Gen. VIII</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setPokeCount(1008), setPokeOffset(905) }}
                        style={[styles.genButton, {borderWidth: pokeCount === 1008 ? 3 : 0}]}>
                        <Text>Gen. IX</Text>
                    </TouchableOpacity>
                </View>


                {pokeList.length !== 0 && pokeList.map((pokemon) =>
                    <TouchableOpacity onPress={() => navigation.navigate("Info", { id: pokemon.name })} style={styles.pokeCard}>
                        <Image style={styles.sprite}
                            resizeMode='stretch'
                            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter += 1}.png` }} />
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
    genContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    genButton: {
        backgroundColor: 'skyblue',
        height: Scaling.windowHeight * .04,
        width: Scaling.windowWidth * .3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
        borderRadius: 10,
        borderColor: 'blue'
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
