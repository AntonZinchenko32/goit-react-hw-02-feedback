import React, { Component } from "react";
import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types"

export default class FeedbackOptions extends Component {
    render() {

        const {
            myButtons,
            myButton
        } = css;

        const { onLeaveFeedback, options } = this.props;
        

        return (
            <div className={myButtons}>
                {options.map(({id, name}) => (
                    <button key={id} className={myButton} onClick={onLeaveFeedback}>{name}</button>
                ))}
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }))
}