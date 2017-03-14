import React, { Component }         from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  _buttonClicked = (e) => {
    e.preventDefault();
    this.props.onClick(e)
  }

  render = () => {
    return (
      <button class="login-btn medium-horizontal-margin" onClick={this._buttonClicked}>
        { this.props.value }
      </button>
    )
  }
}

export default Button;
