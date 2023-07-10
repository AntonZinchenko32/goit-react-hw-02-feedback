import React, { Component } from "react";
import css from './Statistics.module.css';


class Statistics extends Component {

    render() {
   
    // Деструктуризуємо об'єкт стилів
    const {
      statList,
      statListItem,
      label,
      value
    } = css;

    // Деструктуризуємо об'єкт стану екземпляру класу Feedback
    const {
      bad,
      neutral,
      good,
      total,
      positivePercentage
    } = this.props

    return (
        <div>
        
            <h2>Statistics</h2>

            <ul className={statList}>
                <li className={statListItem}>
                    <span className={label}>Bad:</span>
                    <span className={value}>{bad}</span>     
                </li>
                
                <li className={statListItem}>
                    <span className={label}>Neutral:</span>
                    <span className={value}>{neutral}</span>     
                </li>
                
                <li className={statListItem}>
                    <span className={label}>Good:</span>
                    <span className={value}>{good}</span>     
                </li>
          
                <li className={statListItem}>
                    <span className={label}>Total:</span>
                    <span className={value}>{total}</span>     
                </li>
          
                <li className={statListItem}>
                    <span className={label}>Positive feedback:</span>
                    <span className={value}>{positivePercentage}%</span>     
                </li>
            </ul>  
        </div>
    );
  }
}

export default Statistics;