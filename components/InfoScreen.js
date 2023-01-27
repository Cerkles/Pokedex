import {View, StyleSheet, Text, TextInput, Button, Image, SafeAreaView} from 'react-native'
import { useState, useEffect } from 'react'
import { requestPokemon } from '../Requests'
import { requestFlavorText } from '../Requests'

export default function InfoScreen() {
    const [flavorText, setFlavorText] = useState("")
    const [search, setSearch] = useState("")
    const [sprite, setSprite] = useState("")
    const [dexEntry, setDexEntry] = useState("")
    const [pokeName, setPokeName] = useState("")


const handleSubmit = () => {
    requestPokemon(search).then((response) => (response && 
        setFlavorText(response.data.species.url), setSprite(response.data.sprites.front_default), setPokeName(response.data.forms[0].name)))
}

useEffect(() => {
    requestFlavorText(flavorText).then((response)=> (response && setDexEntry(response.data.flavor_text_entries[0].flavor_text)))
}, [flavorText])
    
console.log(`name: ${pokeName}`)
    return(
        <SafeAreaView style={styles.container}>

            <View style={{flexShrink: 2, alignItems: 'center'}}>
                <Text>{pokeName}</Text>
                <View style={{backgroundColor: 'white', borderRadius: 150, width: 280, height: 280, alignItems: 'center', justifyContent: 'center'}}>
            <Image 
            style={styles.sprite}
            resizeMode= 'cover'
            source={{uri: sprite}}/>
            </View>
            <Text>{dexEntry.replace(/\n/g, " ").replace(/\f/g, " ")}</Text>
            </View>
            
            <View style={{flex: 2}}>
            <TextInput 
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.search}
            value={search}
            onChangeText={setSearch}
            ></TextInput>
            

            <Button title='Click' onPress={() => handleSubmit()}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    search: {
        height: 25,
        width: 300,
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 5,
        backgroundColor: 'white'
    },
    sprite: {
        height: 250,
        width: 250,
    },
    
})