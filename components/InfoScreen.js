import { View, StyleSheet, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { requestPokemon } from '../Requests'
import { requestSpecies } from '../Requests'
import Scaling from '../Scaling'
import Types from './Types'
import typeColor from '../TypeColors'
import About from './About'
import Stats from './Stats'
import Evolution from './Evolution'
import Other from './Other'


export default function InfoScreen({ route }) {
    const [species, setSpecies] = useState("")
    const [search, setSearch] = useState("")
    const [sprite, setSprite] = useState("")
    const [dexEntry, setDexEntry] = useState("")
    const [pokeName, setPokeName] = useState("")
    const [type, setType] = useState([])
    const [stats, setStats] = useState([])
    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [tabState, setTabState] = useState('about')
    const [evoChain, setEvoChain] = useState([])
    const [pokemonId, setPokemonId] = useState("")


    useEffect(() => {
        requestPokemon(route.params.id).then((response) => (response &&
            setSpecies(response.data.species.url),
            setSprite(response.data.sprites.other['official-artwork'].front_default),
            setPokeName(response.data.forms[0].name),
            setType(response.data.types),
            setStats(response.data.stats),
            setPokemonId(response.data.id)))
    }, [])

    const handleSubmit = () => {
        requestPokemon(search).then((response) => (response &&
            setSpecies(response.data.species.url),
            setSprite(response.data.sprites.other['official-artwork'].front_default),
            setPokeName(response.data.forms[0].name),
            setType(response.data.types),
            setStats(response.data.stats),
            setPokemonId(response.data.id)))
    }

    useEffect(() => {
        requestSpecies(species).then((response) =>
            (response && 
                setDexEntry(response.data.flavor_text_entries), 
                setEvoChain(response.data.evolution_chain.url)))
    }, [species])

    useEffect(() => {
        type[0] ? setType1(type[0].type.name) : (setType1(''))
        type[1] ? setType2(type[1].type.name) : (setType2(''))
    }, [type])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <View style={[styles.container, { backgroundColor: typeColor(type1) }]}>

            <View style={styles.topContainer}>

                <View style={styles.searchBar}>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.search}
                        value={search}
                        onChangeText={setSearch}
                    ></TextInput>
                    <TouchableOpacity style={styles.searchButton} onPress={() => handleSubmit()}>
                        <View style={{ height: '50%', width: '100%', backgroundColor: 'red', borderBottomWidth: 1, borderTopRightRadius: 2 }} />
                        <View style={{ height: '15%', width: '15%', borderRadius: 50, backgroundColor: 'black', position: 'absolute', top: '42%', left: '42%' }} />
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.sprite}
                    resizeMode='stretch'
                    source={{ uri: sprite }} />

                <View style={styles.pokemonId}>
                    {String(pokemonId).length === 1 ? <Text>#00{pokemonId}</Text> :
                    String(pokemonId).length === 2 ? <Text>#0{pokemonId}</Text> :
                    <Text>#{pokemonId}</Text>}
                </View>


            </View>

            <View style={styles.searchInfo}>

                <Text style={{ fontSize: 25, textAlign: 'center' }}>{capitalizeFirstLetter(pokeName)}</Text>

                {type1 && <Types type1={type1} type2={type2} />}

                <View style={styles.tabs}>
                    <TouchableOpacity style={[styles.singleTab, {borderBottomWidth: tabState === 'about' ? 1 : 0}]}
                    onPress={() => setTabState('about')}>
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.singleTab, {borderBottomWidth: tabState === 'stats' ? 1 : 0}]}
                    onPress={() => setTabState('stats')}>
                        <Text>Stats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.singleTab, {borderBottomWidth: tabState === 'evolution' ? 1 : 0}]}
                    onPress={() => setTabState('evolution')}>
                        <Text>Evolution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.singleTab, {borderBottomWidth: tabState === 'other' ? 1 : 0}]}
                    onPress={() => setTabState('other')}>
                        <Text>Other</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {tabState === 'about' ? <About dexEntry={dexEntry} pokeName={pokeName}/> :
                        tabState === 'stats' ? <Stats stats={stats} type1={type1}/> :
                        tabState === 'evolution' ? <Evolution evoChain={evoChain}/> :
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
        width: Scaling.windowWidth
    },
    searchBar: {
        flexDirection: 'row',
        margin: '1%',
        marginTop: Scaling.windowHeight * .055,
        height: Scaling.windowWidth * .05
    },
    search: {
        height: '150%',
        width: Scaling.windowWidth * .6,
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        paddingLeft: 5,
        backgroundColor: 'white'
    },
    searchButton: {
        height: '151%',
        width: Scaling.windowWidth * .08,
        borderWidth: 1,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: "white",
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