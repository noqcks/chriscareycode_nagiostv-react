import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   //console.log('shouldComponentUpdate', nextProps, nextState);
  //   if (nextProps.nowtime !== this.props.nowtime || nextProps.prevtime !== this.props.prevtime) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    
    return (
      <label className={this.props.className} onClick={this.props.handleChange(this.props.stateName, 'checkbox')}>
	      <input type="checkbox" defaultChecked={this.props.defaultChecked}  />
	      <strong>{this.props.howMany}</strong> {this.props.howManyText}
	    </label>
    );
  }
}

export default Checkbox;