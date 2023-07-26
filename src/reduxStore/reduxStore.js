import { configureStore } from '@reduxjs/toolkit'
import { pokemonsSlice } from '../reduxSlices/searchHistorySlice/searchHistorySlice'


export const store = configureStore({
  reducer: {
    pokemonHistory:pokemonsSlice,
  },
})