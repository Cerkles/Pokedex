import { View, StyleSheet, Text, TextInput, Button, Image, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import { requestPokemon } from '../Requests'
import { requestFlavorText } from '../Requests'
import Scaling from '../Scaling'
import Types from './Types'

export default function InfoScreen({route}) {
    const [flavorText, setFlavorText] = useState("")
    const [search, setSearch] = useState("")
    const [sprite, setSprite] = useState("")
    const [dexEntry, setDexEntry] = useState("")
    const [pokeName, setPokeName] = useState("")
    const [type, setType] = useState([])
    const [stats, setStats] = useState([])
    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [typeBackground, setTypeBackground] = useState('white')

    useEffect(() => {
        requestPokemon(route.params.id).then((response) => (response &&
            setFlavorText(response.data.species.url), setSprite(response.data.sprites.front_default), setPokeName(response.data.forms[0].name), setType(response.data.types), setStats(response.data.stats)))
   
    }, [])

    const handleSubmit = () => {
        requestPokemon(search).then((response) => (response &&
            setFlavorText(response.data.species.url), setSprite(response.data.sprites.front_default), setPokeName(response.data.forms[0].name), setType(response.data.types), setStats(response.data.stats)))
    }

    useEffect(() => {
        requestFlavorText(flavorText).then((response) => (response && setDexEntry(response.data.flavor_text_entries[0].flavor_text)))
    }, [flavorText])

    useEffect(() => {
        type[0] ? setType1(type[0].type.name) : (setType1(''))
        type[1] ? setType2(type[1].type.name) : (setType2(''))
    }, [type])

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 2, alignItems: 'center',}}>

                <View style={styles.searchBar}>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize='none'
                        style={styles.search}
                        value={search}
                        onChangeText={setSearch}
                    ></TextInput>
                    <Button title='Search' onPress={() => handleSubmit()} />
                </View>

                <View style={[styles.spriteContainer, { backgroundColor: typeBackground }]}>
                    <Image
                        style={styles.sprite}
                        resizeMode='cover'
                        source={{ uri: sprite }} />
                </View>

            </View>

            <View style={styles.searchInfo}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>{capitalizeFirstLetter(pokeName)}</Text>
                <Text style={{ padding: '5%', textAlign: 'center' }}>{dexEntry.replace(/\n/g, " ").replace(/\f/g, " ").toUpperCase()}</Text>

            {type1 && <Types type1={type1} type2={type2} />}

            <View style={{marginTop: "3%"}}>
                    {stats.length !== 0 && stats.map((stat) => 
                    <Text>{capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}</Text>
                    )}
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'efefef'
    },
    search: {
        height: Scaling.windowHeight * .04,
        width: Scaling.windowWidth * .6,
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 5,
        backgroundColor: 'white'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '1%'
    },
    searchInfo: {
        flex: 3,
    },
    sprite: {
        height: Scaling.windowHeight * .25,
        width: Scaling.windowHeight * .25,
    },
    spriteContainer: {
        borderRadius: 150,
        width: Scaling.windowHeight * .3,
        height: Scaling.windowHeight * .3,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },

})