import { useEffect, useState } from 'react'
import Dropdown from '../Dropdown/Dropdown';
import classes from './Navbar.module.css'


const Navbar = () => {

  useEffect(() => {

  }, []);


  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_left}>
        <img src="/images/title-icon.png" alt="" />
        <h2>React Redux Recipes</h2>
      </div>
      <div className={classes.dropdown_parent}>
      <Dropdown/>
      </div>


    </div>
  )
}

export default Navbar