import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from '../Recipes/recipeSlice'

export const store = configureStore({
  reducer: {
    recipes: recipeReducer //recipes --> name has to be same as what we register reducer as. its recipes there too
  },
})