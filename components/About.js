import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { requestPokemon } from '../Requests';


export default function About({ dexEntry, pokeName }) {
    const [pokeWeight, setPokeWeight] = useState("")
    const [abilities, setAbilities] = useState([])




    useEffect(() => {
        requestPokemon(pokeName).then((response) => (response && 
            setPokeWeight(response.data.weight), 
            setAbilities(response.data.abilities)))
    }, [pokeName])


    function getFlavorText() {
        for (let entry of dexEntry) {
            if (entry.language.name === 'en') {
                return entry.flavor_text.replace(/\n/g, " ").replace(/\f/g, " ");
            }
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    


    return (
        <View>
            {dexEntry !== '' && <Text style={{ padding: '5%', textAlign: 'center' }}>{getFlavorText()}</Text>}

            {pokeWeight !== '' && <Text style={{ padding: '5%', textAlign: 'center' }}>Weight: {pokeWeight}</Text>}

            {/* {abilities.length !== 0 && abilities.map((ability) => 
                <Text>{capitalizeFirstLetter(ability.ability.name)}</Text>
            )} */}

        </View>
    );
}
