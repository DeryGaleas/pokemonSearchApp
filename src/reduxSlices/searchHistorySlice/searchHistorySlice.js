import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemonsSearched: [],
}

export const pokemonsSlice = createSlice({
  name: 'pokemonsSearchedSlice',
  initialState,
  reducers: {
    pushSearch: (state, action) => {
      newSearch = action.payload;
      state.pokemonsSearched.push(newSearch)
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushSearch } = pokemonsSlice.actions

export default pokemonsSlice.reducer