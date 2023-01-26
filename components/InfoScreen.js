import {View, StyleSheet, Text, TextInput, Button, Image} from 'react-native'
import { useState, useEffect } from 'react'
import { requestPokemon } from '../Requests'
import { requestFlavorText } from '../Requests'

export default function InfoScreen() {
    const [flavorText, setFlavorText] = useState("")
    const [search, setSearch] = useState("")
    const [sprite, setSprite] = useState("")
    const [dexEntry, setDexEntry] = useState("")


const handleSubmit = () => {
    requestPokemon(search).then((response) => (response && 
        setFlavorText(response.data.species.url), setSprite(response.data.sprites.front_default)))
}

useEffect(() => {
    requestFlavorText(flavorText).then((response)=> (response && setDexEntry(response.data.flavor_text_entries[0].flavor_text)))
}, [flavorText])
    
console.log(dexEntry)
    return(
        <View style={styles.container}>
            <Text>{dexEntry.replace(/\n/g, " ").replace(/\f/g, " ")}</Text>
            <Image 
            style={styles.sprite}
            resizeMode="cover"
            source={{uri: sprite}}/>
            
            <TextInput 
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.search}
            value={search}
            onChangeText={setSearch}
            ></TextInput>
            

            <Button title='Click' onPress={() => handleSubmit()}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        height: 25,
        width: 300,
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 5,
    },
    sprite: {
        height: 200,
        width: 200,
        borderWidth: 1,
    },
    
})