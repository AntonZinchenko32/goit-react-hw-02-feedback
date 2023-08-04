import React, { Component } from "react";
import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types"
import { nanoid } from "nanoid";

export default class FeedbackOptions extends Component {
    render() {

        const {
            myButtons,
            myButton
        } = css;

        const { onLeaveFeedback, options } = this.props;
        
        // Пишемо функцію, що збільшує першу літеру у рядку, для назв кнопок
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        return (
            <div className={myButtons}>
                {options.map(option => (
                    <button key={nanoid()} className={myButton} onClick={onLeaveFeedback}>{capitalizeFirstLetter(option)}</button>
                ))}
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}