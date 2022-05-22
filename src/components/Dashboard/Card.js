import React from 'react';
import {DashboardCard} from './styles.js';

const Card = (props) => {
  
  return (
    <DashboardCard>
       <h3>{props.title}</h3>
       <h2>{props.amount}</h2>
    </DashboardCard>
  )
}

export default Card;