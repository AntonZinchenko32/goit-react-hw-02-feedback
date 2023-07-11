import React, { Component } from "react";

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from "./Statistics";
import buttons from './data-files/buttons.json'

export class App extends Component {

  state = {
  
    good: 0,
    neutral: 0,
    bad: 0,
  
  }
// ****************************************

  // Функція обробки кліку по кнопці, для залишення зворотонього зв'язку ********
  clickHandle = (evt) => {
    
    // Визначаємо яка кнопка була натиснута та зберігаємо цю інформацію у змінну
    const whatClicked = evt.target.textContent;
    
    
    if (whatClicked === "Good") this.setState(state => ({ good: state.good + 1 }))
    else if (whatClicked === "Neutral") this.setState(state => ({ neutral: state.neutral + 1 }))
    else this.setState(state => ({ bad: state.bad + 1 }))
  }

// *********************************************

    // Функція підрахунку суми залишених відгуків *********
    countTotalFeedback = () => {
      
      return this.state.good + this.state.bad + this.state.neutral;
    }

// *********************************************
  
  
    // Функці підрахунку відсотку позитивних відгуків серед усіх відгуків *********
    countPositiveFeedbackPercentage = () => {
      
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
 
// ********************************************
  
  render() {

    // Деструктуризуємо
    const { bad, good, neutral } = this.state;

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
        <Section title="Please leave feedback"/>
          <FeedbackOptions
          options={buttons}
          onLeaveFeedback={this.clickHandle}
        />
        
        
        <Section title="Statistics" />
          <Statistics
          bad={bad}
          neutral={neutral}
          good={good}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  };
}
