import React from 'react';
import classes from './CustomerDetails.module.css';
import Order from './Order';


const CustomerDetails = () => {
  return (
    <div className={classes.outer}>
      <span className={classes.header}> Customer Name</span>
      <div className={classes.titleHolder}>
        <span className={classes.mainTitle}>Cashier id : </span>
        <span className={classes.subTitle}>C008</span>
      </div>
      <div className={classes.topGradient}>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      <Order/>
      
      </div>
    
    </div>
  )
}

export default CustomerDetails
