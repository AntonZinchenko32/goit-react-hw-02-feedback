import React, { Component } from "react";
import css from './Feedback.module.css';


class Feedback extends Component {
  
  state = {
  
  good: 0,
  neutral: 0,
  bad: 0,
  
  total: 0,
  positivePercentage: 0
}

  
  
  clickHandle = (evt) => {
    
    // Визначаємо яка кнопка була натиснута та зберігаємо цю інформацію у змінну
    const whatClicked = evt.target.textContent;
    

    if (whatClicked === "Good") this.setState(state => ({ good: state.good + 1 }))
    else if (whatClicked === "Neutral") this.setState(state => ({ neutral: state.neutral + 1 }))
    else this.setState(state => ({ bad: state.bad + 1 }))

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback = () => {
    this.setState(({good,neutral,bad}) => ({ total: good + neutral + bad }))
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(({good,total}) => ({ positivePercentage: Math.round((good/total)*100) }))
  }
  

  render() {

    // Деструктуризуємо об'єкт стилів
    const {
      myButton,
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
    } = this.state


    return (
        <div>
            <h2>Please leave feedback</h2>

            <button className={myButton} onClick={this.clickHandle}>Good</button>
            <button className={myButton} onClick={this.clickHandle}>Neutral</button>
            <button className={myButton} onClick={this.clickHandle}>Bad</button>
        
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

export default Feedback;