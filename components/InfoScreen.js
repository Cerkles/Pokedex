import { View, StyleSheet, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { requestPokemon } from '../Requests'
import { requestFlavorText } from '../Requests'
import Scaling from '../Scaling'
import Types from './Types'
import typeColor from '../TypeColors'
import About from './About'
import Stats from './Stats'
import Evolution from './Evolution'
import Other from './Other'

export default function InfoScreen({ route }) {
    const [flavorText, setFlavorText] = useState("")
    const [search, setSearch] = useState("")
    const [sprite, setSprite] = useState("")
    const [dexEntry, setDexEntry] = useState("")
    const [pokeName, setPokeName] = useState("")
    const [type, setType] = useState([])
    const [stats, setStats] = useState([])
    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [tabState, setTabState] = useState('about')

    useEffect(() => {
        requestPokemon(route.params.id).then((response) => (response &&
            setFlavorText(response.data.species.url),
            setSprite(response.data.sprites.front_default),
            setPokeName(response.data.forms[0].name),
            setType(response.data.types),
            setStats(response.data.stats)))
    }, [])

    const handleSubmit = () => {
        requestPokemon(search).then((response) => (response &&
            setFlavorText(response.data.species.url),
            setSprite(response.data.sprites.front_default),
            setPokeName(response.data.forms[0].name),
            setType(response.data.types),
            setStats(response.data.stats)))
    }

    useEffect(() => {
        requestFlavorText(flavorText).then((response) =>
            (response && setDexEntry(response.data.flavor_text_entries)))
    }, [flavorText])

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


            </View>

            <View style={styles.searchInfo}>

                <Text style={{ fontSize: 25, textAlign: 'center' }}>{capitalizeFirstLetter(pokeName)}</Text>

                {type1 && <Types type1={type1} type2={type2} />}

                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => setTabState('about')}>
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabState('stats')}>
                        <Text>Stats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabState('evolution')}>
                        <Text>Evolution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTabState('other')}>
                        <Text>Other</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {tabState === 'about' ? <About dexEntry={dexEntry}/> :
                        tabState === 'stats' ? <Stats stats={stats} type1={type1}/> :
                        tabState === 'evolution' ? <Evolution /> :
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
    //////////////////////////////////////////////////////////////////////////
    
    tabs: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
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