import React from 'react'
import "./SearchBar.css"
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pushSearch } from '../../reduxSlices/searchHistorySlice/searchHistorySlice';



export const SearchBar = ({setPokemonData}) => {
  const [search, updateSearch] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch()
  
  const url = `https://pokeapi.co/api/v2/pokemon/`;

  const fetchData = async ()=>{
    try {
      const dataResult = await axios.get(`${url}${search}`)
      console.log(dataResult.data)
      setPokemonDetails({
        name:dataResult.data.name,
        image:dataResult.data.sprites.front_default
      })
      
      setPokemonData({
        name:dataResult.data.name,
        image:dataResult.data.sprites.front_default
      })
      
      dispatch(pushSearch(dataResult.data.name))
    } catch (err) {
      console.log(`Axios request failed ${err}`)
    }

    
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    fetchData();
    
 
  }

  const handleChange = (event) =>{
    
    updateSearch(event.target.value);
  }

  useEffect(()=>{
    if (search===""){
      setError("The field can't be empty")
      return
    }

    if (search.match(/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/)){
      setError("The field must not contain numbers")
      return
    }

    setError(null)

  }, [search])

  console.log(`This is the name: ${pokemonDetails?.name}`)
  console.log(`This is the featured image: ${pokemonDetails?.image}`)
  return (
    <div className='SearchContainer'>
        <h1>Pokedex</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name='PokemonSearch' type='text' placeholder='Pikachu'/>
            <button type='submit'>Buscar</button>
        </form>

        {error && <p style={{color:"red"}}>{error}</p>}
    
    </div>
  )
}
