import React, { Component } from "react";
import css from './Feedback.module.css';


class Feedback extends Component {
  state = { isOpen: false };

  toggle = () => {
      this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
        <div>
            <h2>Please leave feedback</h2>

        <button className={css.myButton} onClick={this.toggle}>Good</button>
        <button className={css.myButton} onClick={this.toggle}>Neutral</button>
        <button className={css.myButton} onClick={this.toggle}>Bad</button>
           
        <h2>Statistics</h2>

        <ul className={css.statList}>
            <li className={css.statListItem}>
               <span className={css.label}>Bad:</span>
               <span className={css.percentage}>0</span>     
                </li>
                
            <li className={css.statListItem}>
               <span className={css.label}>Neutral:</span>
               <span className={css.percentage}>0</span>     
                </li>
                
            <li className={css.statListItem}>
               <span className={css.label}>Good:</span>
               <span className={css.percentage}>0</span>     
            </li>    
        </ul>    
      </div>
    );
  }
}

export default Feedback;