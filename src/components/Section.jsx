import React, { Component } from "react";
import css from './Section.module.css'

export default class Section extends Component {
    render() {
        return (
            <h2>{this.props.title}</h2>
        );
    }
}