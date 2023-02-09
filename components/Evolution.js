import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { requestEvolution, requestPokemon } from '../Requests';

export default function Evolution({evoChain, search}) {
    const [evolution, setEvolution] = useState([])
    const [evolution1, setEvolution1] = useState([])
    const [evolution2, setEvolution2] = useState([])

useEffect(() => {
    requestEvolution(evoChain).then((response) => (response && 
        setEvolution([]), setEvolution1([]), setEvolution2([]),
        setEvolution(response.data.chain.species.name),
        setEvolution1(response.data.chain.evolves_to[0].species.name),
        setEvolution2(response.data.chain.evolves_to[0].evolves_to[0].species.name)

        ))
}, [evoChain])

console.log(evolution, evolution1, evolution2)

// useEffect(() => {
//     requestPokemon()
// })


    return (
        <View>
            {evolution.length !== 0 && 
            <View style={styles.spriteContainer}>
            <Text>{evolution}</Text>
            {evolution1.length !== 0 && <Text>{evolution1}</Text>}
            {evolution2.length !== 0 && <Text>{evolution2}</Text>}
            </View>
            
            }            
        </View>
    );
}

const styles = StyleSheet.create({
    spriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',


    }
    
})