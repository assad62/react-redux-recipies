import React from 'react'
import DropdownContent from '../DropdownContent'
import DrodownContent from '../DropdownContent/DrodownContent'
import classes from './Dropdown.module.css'
const Dropdown = () => {


  const countries = ["Aus","Pak","India","2"];
  const categories = ["fast food", "keto", "two"]

  return (
    <div>
   <div className={classes.dropdown}>
    <div className={classes.dropdown_content}>
      <div className={classes.dropdown_title}>
         <p>Select Country</p>
         <div className={classes.dropdown_items}>
        
           {
             countries.map((e) => <DrodownContent item={e} />)
           }
         </div>
        

      </div>
    

    </div>
    <div style={{width: "10rem"}}/>  
    <div className={classes.dropdown_content}>
      <div className={classes.dropdown_title}>
         <p>Select Category</p>
         <div className={classes.dropdown_items}>
           {
             categories.map((e) => <DrodownContent item={e} />)
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