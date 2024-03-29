import { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { requestPokemon, requestSpecies } from '../requests/Requests'
import Scaling from '../utils/Scaling'
import typeColor from '../utils/TypeColors'
import capitalizeFirstLetter from '../utils/Capitalize'
import Types from '../components/Types'
import About from '../components/About'
import Stats from '../components/Stats'
import Evolution from '../components/Evolution'
import Other from '../components/Other'

export default function InfoScreen({ route, navigation }) {
    const [species, setSpecies] = useState("")
    const [dexEntry, setDexEntry] = useState("")
    const [pokeName, setPokeName] = useState("")
    const [type, setType] = useState([])
    const [stats, setStats] = useState([])
    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [tabState, setTabState] = useState('about')
    const [evoChain, setEvoChain] = useState([])
    const [pokemonId, setPokemonId] = useState("")
    const [pokemonOriginalId, setPokemonOriginalId] = useState("")
    const [varieties, setVarieties] = useState([])
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        requestPokemon(route.params.id).then((response) => (response &&
            setSpecies(response.data.species.url),
            setPokeName(response.data.forms[0].name),
            setType(response.data.types),
            setStats(response.data.stats),
            setPokemonId(response.data.id)))
    }, [])

    useEffect(() => {
        requestPokemon(pokemonId).then((response) => (response &&
            setSpecies(response.data.species.url),
            setType(response.data.types),
            setStats(response.data.stats)))
    }, [pokemonId])

    useEffect(() => {
        requestSpecies(species).then((response) =>
        (response &&
            setDexEntry(response.data.flavor_text_entries),
            setEvoChain(response.data.evolution_chain.url),
            setVarieties(response.data.varieties)))
    }, [species])

    useEffect(() => {
        type[0] ? setType1(type[0].type.name) : (setType1(''))
        type[1] ? setType2(type[1].type.name) : (setType2(''))
    }, [type])

    function getDifferentFormsRight() {
        setCounter(counter += 1)
        if (counter <= varieties.length - 1) {
            setPokeName(varieties[counter].pokemon.name)
            return (varieties[counter].pokemon.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
        }
        else if (counter === varieties.length) {
            setCounter(0)
            setPokeName(varieties[0].pokemon.name)
            return (varieties[0].pokemon.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
        }
    }

    function getDifferentFormsLeft() {
        setCounter(counter -= 1)
        if (counter >= 0) {
            setPokeName(varieties[counter].pokemon.name)
            return (varieties[counter].pokemon.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
        }
        else if (counter < 0) {
            setCounter(varieties.length - 1)
            setPokeName(varieties[varieties.length - 1].pokemon.name)
            return (varieties[varieties.length - 1].pokemon.url).replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
        }
    }

    useEffect(() => {
        if (String(pokemonId).length === 2) {
            setPokemonOriginalId(`#0${pokemonId}`)
        } else if (String(pokemonId).length === 1) {
            setPokemonOriginalId(`#00${pokemonId}`)
        } else if (String(pokemonId).length === 3) {
            setPokemonOriginalId(`#${pokemonId}`)
        }
    }, [pokemonId])

    return (
        <View style={[styles.container, { backgroundColor: typeColor(type1) }]}>

            <View style={styles.topContainer}>

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("List")}>
                    <Text>Back</Text>
                </TouchableOpacity>

                <Image
                    style={styles.sprite}
                    resizeMode='stretch'
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png` }} />

                <View style={{ marginBottom: '-10%' }}>
                    {varieties.length > 1 &&
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '80%' }}>
                            <TouchableOpacity style={styles.formButtons}
                                onPress={() => setPokemonId(getDifferentFormsLeft())}>
                                <Text>← </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.formButtons}
                                onPress={() => setPokemonId(getDifferentFormsRight())}>
                                <Text> →</Text>
                            </TouchableOpacity>
                        </View>}
                </View>

                <View style={styles.pokemonId}>
                    {String(pokemonId).length === 5 ? <Text>{pokemonOriginalId}</Text> :
                        String(pokemonId).length === 1 ? <Text>#00{pokemonId}</Text> :
                            String(pokemonId).length === 2 ? <Text>#0{pokemonId}</Text> :
                                <Text>#{pokemonId}</Text>}
                </View>
            </View>

            <View style={styles.searchInfo}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>{capitalizeFirstLetter(pokeName)}</Text>
                {type1 && <Types type1={type1} type2={type2} />}

                <View style={styles.tabs}>
                    <TouchableOpacity style={[styles.singleTab, { borderBottomWidth: tabState === 'about' ? 1 : 0 }]}
                        onPress={() => setTabState('about')}>
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.singleTab, { borderBottomWidth: tabState === 'stats' ? 1 : 0 }]}
                        onPress={() => setTabState('stats')}>
                        <Text>Stats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.singleTab, { borderBottomWidth: tabState === 'evolution' ? 1 : 0 }]}
                        onPress={() => setTabState('evolution')}>
                        <Text>Evolution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.singleTab, { borderBottomWidth: tabState === 'other' ? 1 : 0 }]}
                        onPress={() => setTabState('other')}>
                        <Text>Other</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {tabState === 'about' ? <About dexEntry={dexEntry} pokeName={pokeName} /> :
                        tabState === 'stats' ? <Stats stats={stats} type1={type1} /> :
                            tabState === 'evolution' ? <Evolution evoChain={evoChain} /> :
                                <Other />
                    }

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'efefef',
    },
    topContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: Scaling.windowWidth
    },
    sprite: {
        height: Scaling.windowHeight * .3,
        width: Scaling.windowHeight * .3,
    },
    pokemonId: {
        position: "absolute",
        top: Scaling.windowHeight * 0.11,
        right: Scaling.windowWidth * 0.08
    },
    backButton: {
        position: 'absolute',
        top: Scaling.windowHeight * .07,
        left: 0,
        backgroundColor: 'skyblue',
        height: Scaling.windowHeight * .04,
        width: Scaling.windowWidth * .15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formButtons: {
        width: '20%',
        height: Scaling.windowHeight * .03,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //////////////////////////////////////////////////////////////////////////

    tabs: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    singleTab: {
        alignItems: 'center',
        width: '20%',
        paddingBottom: '2%'
    },
    searchInfo: {
        flex: 3,
        backgroundColor: "#efefef",
        width: Scaling.windowWidth,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: "2%"
    },

})