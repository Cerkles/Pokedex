import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { requestEvolution, requestPokemon } from '../Requests';
import Scaling from '../Scaling';

export default function Evolution({evoChain, search}) {
    const [evolution, setEvolution] = useState([])
    const [evolution1, setEvolution1] = useState([])
    const [evolution2, setEvolution2] = useState([])
    const [sprite, setSprite] = useState("")
    const [sprite1, setSprite1] = useState("")
    const [sprite2, setSprite2] = useState("")

useEffect(() => {
    requestEvolution(evoChain).then((response) => (response && 
        setEvolution([]), setEvolution1([]), setEvolution2([]),
        setEvolution(response.data.chain.species.name),
        setEvolution1(response.data.chain.evolves_to[0].species.name),
        setEvolution2(response.data.chain.evolves_to[0].evolves_to[0].species.name)

        ))
}, [evoChain])


useEffect(() => {
    requestPokemon(evolution).then((response) => (response && 
        setSprite(response.data.sprites.other['official-artwork'].front_default)
        ))
}, [evolution])
        
useEffect(() => {
    requestPokemon(evolution1).then((response) => (response && 
        setSprite1(response.data.sprites.other['official-artwork'].front_default)
        ))
}, [evolution1])

useEffect(() => {
    requestPokemon(evolution2).then((response) => (response && 
        setSprite2(response.data.sprites.other['official-artwork'].front_default)
        ))
}, [evolution2])

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

    return (
        <View>
            {evolution.length !== 0 && 
            <View style={styles.spriteContainer}>
                <View>
                    <Image style={styles.sprite}
                            resizeMode="stretch"
                            source={{ uri: sprite }}/>
                    <Text style={styles.name}>{capitalizeFirstLetter(evolution)}</Text>
                </View>
                {evolution1.length !== 0 && <Text>→</Text>}
                
                {evolution1.length !== 0 && 
                    <View>
                        <Image style={styles.sprite}
                            resizeMode="stretch"
                            source={{ uri: sprite1 }}/>
                        <Text style={styles.name}>{capitalizeFirstLetter(evolution1)}</Text>
                    </View>}

                    {evolution2.length !== 0 && <Text>→</Text>}
                    
                {evolution2.length !== 0 && 
                    <View>
                        <Image style={styles.sprite}
                            resizeMode="stretch"
                            source={{ uri: sprite2 }}/>
                        <Text style={styles.name}>{capitalizeFirstLetter(evolution2)}</Text>
                    </View>}
            </View>

            
            }            
        </View>
    );
}

const styles = StyleSheet.create({
    spriteContainer: {
        marginTop: Scaling.windowHeight * 0.08,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    name: {
        textAlign: "center",
    },
    sprite: {
        height: Scaling.windowWidth * .25,
        width: Scaling.windowWidth * .25,
    }
    
    
})