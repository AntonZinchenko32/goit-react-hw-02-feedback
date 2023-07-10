import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    render() {

        const {
            myButton
        } = css;

        const clickFunc = this.props.clickHandle;

        return (
            <>
                <h2>Please leave feedback</h2>
                
                <button className={myButton} onClick={clickFunc}>Good</button>
                <button className={myButton} onClick={clickFunc}>Neutral</button>
                <button className={myButton} onClick={clickFunc}>Bad</button>
            </>
        )
    }
}

export default FeedbackOptions;