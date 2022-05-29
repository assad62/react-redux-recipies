import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { getRecipesByArea } from './recipeSlice'

const Recipes = () => {
  const Recipes =  useSelector((state) => state.recipes.value)
   
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getRecipesByArea("Indian"))
  },[])

  
  return (
    <div> {Recipes.map(r => <div key={r.idMeal} >{r.strMeal}</div>)}</div>
  )
}

export default Recipes