import React, { Component }         from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} />
      </div>
    )
  }
}

export default Input;
