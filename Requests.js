import axios from "axios"

export const requestPokemon = (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    const response = axios.get(url)
    return response
}

export const requestFlavorText = (url) => {
    const response = axios.get(url)
    return response
}