import React from "react";

const Option = React.createClass({
	render: function () {
		return (
			<option value={this.props.value}> {this.props.title} </option>
		);
	}
});

const Select = React.createClass({
	handleChange: function(event) {
    	let value = event.target.value;
    	this.props.onUpdate(this.props.name, value);
  	},
	render: function () {
		let options = this.props.data.list.map(function (option, i) {
			return <Option key={i} title={option.title} value={option.value}/>
		});
		return (
	        <select 
	        onChange={this.handleChange}
	        defaultValue={this.props.data.value} 
	        className={this.props.classname} 
	        name={this.props.name}>
	        	{options}
	        </select>
		);
	}
});

export default Select;