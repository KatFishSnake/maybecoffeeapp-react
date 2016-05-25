import React from "react";
import Create from "./Create"
import Status from "./Status"

const Order = React.createClass({
	getInitialState: function () {
		return {
			created: false,
			order: null
		};
	},
	onOrder: function (order) {
		this.setState({
			created: true,
			order: order
		});
	},
	render: function () {
		return (
			<div>
	            {this.state.created ? (
	              <Status></Status>
	            ) : (
	              <Create onOrder={this.onOrder}></Create>
	            )}
			</div>
		    
		);
	}
});

export default Order;