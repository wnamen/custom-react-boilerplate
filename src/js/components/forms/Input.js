import React, { Component }         from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  _inputChanged = (e) => {
    this.props.onChange(e)
  }

  render = () => {
    return (
      <div class="medium-margin flex-spread">
        <label class="medium-horizontal-margin">{this.props.label}</label>
        <input class="medium-horizontal-margin" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this._inputChanged}/>
      </div>
    )
  }
}

export default Input;
