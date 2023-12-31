import React from 'react';
import classes from './UpperNavBar.module.css';
import MainLogo from './MainLogo';
import SearchBar from './SearchBar/SearchBar';

const UpperNavBar = () => {
  return (
    <div className={classes.container}>
      <MainLogo/>
      <SearchBar/>
    </div>
  )
}

export default UpperNavBar
