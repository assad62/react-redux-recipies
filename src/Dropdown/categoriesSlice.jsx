import { createSlice } from '@reduxjs/toolkit'
import DI from '../DIContainer/DIC'


const initialState = {
  value: [],
}


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
   
    getListOfcategories: (state, action) => {
       
       state.value = [...action.payload]
    },
   
   
  },
})


export const getAllCategories = () => async(dispatch) => {
     const service = DI.getInstance().get('APIService')
     var res = await service.getAllCategories()
     dispatch(getListOfcategories(res.data.meals))
}



// Action creators are generated for each case reducer function
export const { getListOfcategories } = categoriesSlice.actions

export default categoriesSlice.reducer