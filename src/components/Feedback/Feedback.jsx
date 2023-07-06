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
        <button className={css.myButton} onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && children}
      </div>
    );
  }
}

export default Feedback;