import React from 'react'
import classes from './DropdownContent.module.css'

const DrodownContent = ({item, title}) => {
  return (
    <div className={classes.dropdown_content}>
     <div className={classes.dropdown_title}>
        <p>{title}</p>
        <div className={classes.dropdown_items}>
          <p>{item}</p>
        </div>
   </div>
  </div>
  )
}

export default DrodownContent