import React, { Component } from "react";

import FeedbackOptions from './FeedbackOptions';
import Statistics from "./Statistics";

export class App extends Component {

  state = {
  
    good: 0,
    neutral: 0,
    bad: 0,
    
    total: 0,
    positivePercentage: 0
  }


  // Функція обробки кліку по кнопці, для залишення зворотонього зв'язку ********
  clickHandle = (evt) => {
    
    // Визначаємо яка кнопка була натиснута та зберігаємо цю інформацію у змінну
    const whatClicked = evt.target.textContent;
    

    if (whatClicked === "Good") this.setState(state => ({ good: state.good + 1 }))
    else if (whatClicked === "Neutral") this.setState(state => ({ neutral: state.neutral + 1 }))
    else this.setState(state => ({ bad: state.bad + 1 }))

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }


  // Функція підрахунку суми залишених відгуків *********
  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({ total: good + neutral + bad }))
  }


  // Функці підрахунку відсотку позитивних відгуків серед усіх відгуків *********
  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({ positivePercentage: Math.round((good / total) * 100) }))
  }

  render() {

    // Деструктуризуємо
    const { bad, good, neutral, total, positivePercentage } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <FeedbackOptions
          // options={ }
          onLeaveFeedback={this.clickHandle}
        />
        
        <Statistics
          bad={bad}
          neutral={neutral}
          good={good}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  };
}
