import React from 'react'
import classes from './DropdownContent.module.css'


const DrodownContent = ({item}) => {
  return (
    <div className={classes.dropdown_content}>
    
      <p>{item}</p>
   
     
        
   </div>
  
  )
}

export default DrodownContent