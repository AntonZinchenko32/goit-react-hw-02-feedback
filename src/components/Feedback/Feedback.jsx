import React, { Component } from "react";
import css from './Feedback.module.css';


class Feedback extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  clickHandle = (evt) => {
    const whatClicked = evt.target.textContent;

    switch (whatClicked) {
      case "Good":
        this.setState(state => ({ good: state.good + 1 }))
        break;
      
      case "Neutral":
        this.setState(state => ({ neutral: state.neutral + 1 }))
        break;
      
      case "Bad":
        this.setState(state => ({ bad: state.bad + 1 }))
        break;
    
      default:
        this.setState(state => ({
          good: 0,
          neutral: 0,
          bad: 0,
        }))
        break;
    }
  };

  render() {
    

    return (
        <div>
            <h2>Please leave feedback</h2>

            <button className={css.myButton} onClick={this.clickHandle}>Good</button>
            <button className={css.myButton} onClick={this.clickHandle}>Neutral</button>
            <button className={css.myButton} onClick={this.clickHandle}>Bad</button>
        
            <h2>Statistics</h2>

            <ul className={css.statList}>
                <li className={css.statListItem}>
                    <span className={css.label}>Bad:</span>
                    <span className={css.percentage}>{this.state.bad}</span>     
                </li>
                
                <li className={css.statListItem}>
                    <span className={css.label}>Neutral:</span>
                    <span className={css.percentage}>{this.state.neutral}</span>     
                </li>
                
                <li className={css.statListItem}>
                    <span className={css.label}>Good:</span>
                    <span className={css.percentage}>{this.state.good}</span>     
                </li>    
            </ul>  
        </div>
    );
  }
}

export default Feedback;