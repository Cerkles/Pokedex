import axios from "axios"

export const requestPokemon = (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const response = axios.get(url)
    return response
}

export const requestSpecies = (url) => {
    const response = axios.get(url)
    return response
}

export const request151 = (id) => {
const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`

const response = axios.get(url)
return response
}

export const requestEvolution = (url) => {
    const response = axios.get(url)
    return response
}

export const requestAbility = (ability) => {
    const url = `https://pokeapi.co/api/v2/ability/${ability}/`

    const response = axios.get(url)
    return response
}

export const requestPokeList = (counter, offset) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${counter}&offset=${offset}`)
}