import { View, StyleSheet, Text, TextInput, Button, Image, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import { requestPokemon } from '../Requests'
import { requestFlavorText } from '../Requests'
import Scaling from '../Scaling'
import ColorTypes from '../ColorTypes'

export default function InfoScreen() {
    const [flavorText, setFlavorText] = useState("")
    const [search, setSearch] = useState("")
    const [sprite, setSprite] = useState("")
    const [dexEntry, setDexEntry] = useState("")
    const [pokeName, setPokeName] = useState("")
    const [type, setType] = useState([])
    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [typeBackground, setTypeBackground] = useState('white')


    const handleSubmit = () => {
        requestPokemon(search).then((response) => (response &&
            setFlavorText(response.data.species.url), setSprite(response.data.sprites.front_default), setPokeName(response.data.forms[0].name), setType(response.data.types)))
    }

    useEffect(() => {
        requestFlavorText(flavorText).then((response) => (response && setDexEntry(response.data.flavor_text_entries[0].flavor_text)))
    }, [flavorText])

    useEffect(() => {
        type[0] ? setType1(type[0].type.name) : (setType1(''))
        type[1] ? setType2(type[1].type.name) : (setType2(''))
    }, [type])

    useEffect(() => {

    }, [type1])


    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexShrink: 2, alignItems: 'center' }}>
                
                <View style={[styles.spriteContainer, {backgroundColor: typeBackground}]}>
                    <Image
                        style={styles.sprite}
                        resizeMode='cover'
                        source={{ uri: sprite }} />
                </View>
                <Text style={{fontSize: 20}}>{pokeName}</Text>
                <Text style={{padding: '5%'}}>{dexEntry.replace(/\n/g, " ").replace(/\f/g, " ").toUpperCase()}</Text>
            </View>

            <View style={{ flex: 2 }}>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    style={styles.search}
                    value={search}
                    onChangeText={setSearch}
                ></TextInput>


                <Button title='Click' onPress={() => handleSubmit()} />


        <Text>{type1}</Text>
        <Text>{type2}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'crimson'
    },
    search: {
        height: Scaling.windowHeight * .04,
        width: Scaling.windowWidth * .6,
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 5,
        backgroundColor: 'white'
    },
    sprite: {
        height: Scaling.windowHeight * .2,
        width: Scaling.windowHeight * .2,
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