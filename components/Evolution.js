import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { requestEvolution } from '../Requests';

export default function Evolution({evoChain, search}) {
    const [evolution, setEvolution] = useState([])

useEffect(() => {
    requestEvolution(evoChain).then((response) => 
    (response && setEvolution(response.data)))
}, [search])

{evolution.length !== 0 && console.log(evolution.chain.evolves_to)}
    return (
        <View>

            
        </View>
    );
}