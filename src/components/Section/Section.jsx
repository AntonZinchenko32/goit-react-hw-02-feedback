import React, { Component } from "react";
import css from './Section.module.css'
import PropTypes from "prop-types"

export default class Section extends Component {
    render() {
        return (
            <h2 className={css.section}>{this.props.title}</h2>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}