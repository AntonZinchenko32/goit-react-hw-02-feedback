import React, { Component } from "react";
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
    render() {

        const {
            myButtons,
            myButton
        } = css;

        const clickFunc = this.props.clickHandle;

        return (
            <div className={myButtons}>
                <button className={myButton} onClick={clickFunc}>Good</button>
                <button className={myButton} onClick={clickFunc}>Neutral</button>
                <button className={myButton} onClick={clickFunc}>Bad</button>
            </div>
        )
    }
}

 