import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
    render() {

        const {
            myButtons,
            myButton
        } = css;

        const { onLeaveFeedback } = this.props;


        return (
            <div className={myButtons}>
                <button className={myButton} onClick={onLeaveFeedback}>Good</button>
                <button className={myButton} onClick={onLeaveFeedback}>Neutral</button>
                <button className={myButton} onClick={onLeaveFeedback}>Bad</button>
            </div>
        )
    }
}

 