import { createSlice } from '@reduxjs/toolkit'
import DI from '../DIContainer/DIC'


const initialState = {
  value: [],
}


export const areasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
   
    getListOfAreas: (state, action) => {
       
       state.value = [...action.payload]
    },
   
   
  },
})


export const getAllAreas = () => async(dispatch) => {
     const service = DI.getInstance().get('APIService')
     var res = await service.getAllAreas()
     dispatch(getListOfAreas(res.data.meals))
}



// Action creators are generated for each case reducer function
export const { getListOfAreas } = areasSlice.actions

export default areasSlice.reducer