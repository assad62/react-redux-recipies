import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { getAllAreas } from './areasSlice'
import DrodownContent from '../DropdownContent/DrodownContent'
import classes from './Dropdown.module.css'
import { getAllCategories } from './categoriesSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/fontawesome-free-solid'


const Dropdown = () => {

  const Countries =  useSelector((state) => state.areas.value)
  const Categories = useSelector ((state) => state.categories.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllAreas())
  },[])

  useEffect(()=>{
    dispatch(getAllCategories())
  },[])
  //const countries = ["Aus","Pak","India","2"];
  const categories = ["fast food", "keto", "two"]

  return (
    <div>
   <div className={classes.dropdown}>
    <div className={classes.dropdown_content}>
      <div className={classes.dropdown_title}>
      <div className={classes.dropdown_title_content}>
           <p>Select Country</p>
           <FontAwesomeIcon icon={faCaretDown} />
         </div>
         <div className={classes.dropdown_items}>
           {
             Countries.map((e,i) => <DrodownContent key={i} item={e.strArea} />)
           }
         </div>
        

      </div>
    

    </div>
    <div style={{width: "10rem"}}/>  
    <div className={classes.dropdown_content}>
      <div className={classes.dropdown_title}>
         <div className={classes.dropdown_title_content}>
           <p>Select Category</p>
           <FontAwesomeIcon icon={faCaretDown} />
         </div>
       
         <div className={classes.dropdown_items}>
           {
             Categories.map((e,i) => <DrodownContent key={i} item={e.strCategory} />)
           }
           
         </div>
        

      </div>
    

    </div>
    {/* <DrodownContent item="hello"  title="title"/> */}
    
</div>
</div>
  )
}

export default Dropdown