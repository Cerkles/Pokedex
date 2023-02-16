import { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { requestPokeList } from "../Requests";
import Scaling from "../Scaling";

export default function ListScreen({ navigation }) {
    const [pokeList, setPokeList] = useState([])
    const [pokeCount, setPokeCount] = useState(151)
    const [pokeOffset, setPokeOffset] = useState(0)
    let counter = 0

    useEffect(() => {
        requestPokeList(pokeCount, pokeOffset).then((response) => (response && setPokeList(response.data.results)))
    }, [])

    useEffect(() => {
        requestPokeList(pokeCount, pokeOffset).then((response) => (response && setPokeList(response.data.results)))
    }, [pokeCount])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.listContainer}>

                <View style={styles.genContainer}>
                    <TouchableOpacity onPress={() => {setPokeCount(151), setPokeOffset(0), counter = 0}} style={styles.genButton}>
                        <Text>Gen. I</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(251), setPokeOffset(151), counter = 151}} style={styles.genButton}>
                        <Text>Gen. II</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(286), setPokeOffset(251), counter = 251}} style={styles.genButton}>
                        <Text>Gen. III</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(493), setPokeOffset(286), counter = 286}} style={styles.genButton}>
                        <Text>Gen. IV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(649), setPokeOffset(493), counter = 493}} style={styles.genButton}>
                        <Text>Gen. V</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(721), setPokeOffset(649), counter = 649}} style={styles.genButton}>
                        <Text>Gen. VI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(809), setPokeOffset(721), counter = 721}} style={styles.genButton}>
                        <Text>Gen. VII</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(905), setPokeOffset(809), counter = 809}} style={styles.genButton}>
                        <Text>Gen. VIII</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setPokeCount(1008), setPokeOffset(905), counter = 905}} style={styles.genButton}>
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
        height: Scaling.windowHeight * .05,
        width: Scaling.windowWidth * .3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
        borderRadius: 10
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
