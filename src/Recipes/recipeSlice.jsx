import { createSlice } from '@reduxjs/toolkit'
import DI from '../DIContainer/DIC'


const initialState = {
  value: [],
}


export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
   
    getRecipes: (state, action) => {
       
       state.value = [...action.payload]
    },
   
   
  },
})


export const getRecipesByArea = (area) => async(dispatch) => {
     const service = DI.getInstance().get('APIService')
     var res = await service.getRecipesByArea(area)
   
     dispatch(getRecipes(res.data.meals))
}



// Action creators are generated for each case reducer function
export const { getRecipes } = recipeSlice.actions

export default recipeSlice.reducer