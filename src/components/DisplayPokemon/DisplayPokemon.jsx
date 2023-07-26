import React from 'react'
import results from "../../mock/results-preview.json"
import "./DisplayPokemon.css"

export const DisplayPokemon = ({pokemonData}) => {
    const data = results;
    const name = data.name;
    const image = data.sprites.front_default;

    

  return (
    <div className='displayPokemonContainer'>
        <h2>DisplayPokemon</h2>
        <div className='pokemonCard'>
            <h3>{pokemonData?.name}</h3>
            <img src={pokemonData?.image} alt='pokemon'/>

        </div>

        
    </div>
  )
}
