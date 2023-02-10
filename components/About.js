import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { requestPokemon, requestAbility } from '../Requests';


export default function About({ dexEntry, pokeName }) {
    const [pokeWeight, setPokeWeight] = useState("")
    const [ability1, setAbility1] = useState("")
    const [ability2, setAbility2] = useState("")
    const [ability3, setAbility3] = useState("")
    const [description1, setDescription1] = useState([])
    const [description2, setDescription2] = useState([])
    const [description3, setDescription3] = useState([])

    useEffect(() => {
        requestPokemon(pokeName).then((response) => (response && 
            setPokeWeight(response.data.weight), 
            setAbility1(""), setAbility2(""), setAbility3(""),
            setAbility1(response.data.abilities[0].ability.name),
            setAbility2(response.data.abilities[1].ability.name),
            setAbility3(response.data.abilities[2].ability.name)
            ))
    }, [pokeName])

    useEffect(() => {
        requestAbility(ability1).then((response) => ( response && 
            setDescription1(response.data.effect_entries)
            ))
    }, [ability1])

    useEffect(() => {
        requestAbility(ability2).then((response) => ( response && 
            setDescription2(response.data.effect_entries)
            ))
    }, [ability2])

    useEffect(() => {
        requestAbility(ability3).then((response) => ( response && 
            setDescription3(response.data.effect_entries)
            ))
    }, [ability3])


    function getFlavorText() {
        for (let entry of dexEntry) {
            if (entry.language.name === 'en') {
                return entry.flavor_text.replace(/\n/g, " ").replace(/\f/g, " ");
            }
        }
    }

    function getAbilityText(description){
        for(let x of description){
            if(x.language.name === 'en'){
                return x.short_effect
            }
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    function weights(pokeweight){
        const kgs = String(pokeweight * 0.1)
        const pounds = String((pokeweight * 0.1) * 2.2046)
        const index = pounds.indexOf(".")
        return <Text> {pounds.slice(0, index + 2)} lbs. ({kgs.slice(0, index + 2)} kg) </Text>
    }


    return (
        <View>
            {dexEntry !== '' && <Text style={{ padding: '5%', textAlign: 'center' }}>{getFlavorText()}</Text>}

            {pokeWeight !== '' && <Text style={{ padding: '5%'}}>
                Weight: {weights(pokeWeight)}
                </Text>}

            <Text>Abilities:</Text>
            
            <Text >{capitalizeFirstLetter(ability1)}</Text>
            {description1 !== undefined && <Text>{getAbilityText(description1)}</Text>}
            {ability2 && <Text >{capitalizeFirstLetter(ability2)}</Text>}
            {description2 !== undefined && <Text>{getAbilityText(description2)}</Text>}
            {ability3 && <Text >{capitalizeFirstLetter(ability3)}</Text>}
            {description3 !== undefined && <Text>{getAbilityText(description3)}</Text>}


        </View>
    );
}
