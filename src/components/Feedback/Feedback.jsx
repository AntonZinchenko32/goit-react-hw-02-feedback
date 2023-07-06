import React, { Component } from "react";
import css from './Feedback.module.css';


class Feedback extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  addFeedback = () => {
      this.setState(state => ({
          
      }));
  };

  render() {
    

    return (
        <div>
            <h2>Please leave feedback</h2>

            <button className={css.myButton} onClick={this.addFeedback}>Good</button>
            <button className={css.myButton} onClick={this.addFeedback}>Neutral</button>
            <button className={css.myButton} onClick={this.addFeedback}>Bad</button>
        
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