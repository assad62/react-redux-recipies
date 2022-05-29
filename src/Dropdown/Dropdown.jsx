import React from 'react'
import classes from './Dropdown.module.css'
const Dropdown = () => {
  return (
    <div>
   <div className={classes.dropdown}>
    <div className={classes.dropdown_content}>
      <div className={classes.dropdown_title}>
         <p>Select Country</p>
         <div className={classes.dropdown_items}>
         <p>Hello World!</p>
         <p>Hello World!</p>
         <p>Hello World!</p>  
         <p>Hello World!</p>
         </div>
        

      </div>
    

    </div>
    <div style={{width: "10rem"}}/>  

    <div className={classes.dropdown_content}>
     <div className={classes.dropdown_title}>
         <p>Select Category</p>
         <div className={classes.dropdown_items}>
           <p>Hello World!</p>
           <p>Hello World!</p>
           <p>Hello World!</p>
           <p>Hello World!</p>
           <p>Hello World!</p>
           <p>Hello World!</p>
           <p>Hello World!</p>
           <p>Hello World!</p>

      </div>
    </div>
   </div>
</div>
</div>
  )
}

export default Dropdown