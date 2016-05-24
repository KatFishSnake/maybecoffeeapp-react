import React from "react";

const Option = React.createClass({
	render: function () {
		return (
			<option value={this.props.value}> {this.props.title} </option>
		);
	}
});

const Select = React.createClass({
	render: function () {
		let options = this.props.data.list.map(function (option, i) {
			return <Option key={i} title={option.title} value={option.value}/>
		});
		return (
	        <select defaultValue={this.props.data.value} className={this.props.classname} name={this.props.classname}>
	        	{options}
	        </select>
		);
	}
});

export default Select;