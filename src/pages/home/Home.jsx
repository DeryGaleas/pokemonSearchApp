import React from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { DisplayPokemon } from '../../components/DisplayPokemon/DisplayPokemon'
import "./Home.css"
import { useState } from 'react'

export const Home = () => {
  const [pokemonData, setPokemonData] = useState({name:"", image:""})

  console.log(`Home pokemon name: ${pokemonData?.name} and image url ${pokemonData?.image}`)
  return (
    <div className='homeContainer'>
        <SearchBar setPokemonData={setPokemonData}/>
        <DisplayPokemon pokemonData={pokemonData}/>

    </div>
  )
}
