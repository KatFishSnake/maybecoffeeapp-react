import React from "react";
import Create from "./Create"
import Status from "./Status"

const Order = React.createClass({
	getInitialState: function () {
		return {
			order: null
		};
	},
	onOrder: function (order) {
		let self = this;
		self.setState({
			order: order
		});
	},
	render: function () {
		return (
			<div>
	            {this.state.order ? (
	              <Status data={this.state.order}></Status>
	            ) : (
	              <Create onOrder={this.onOrder}></Create>
	            )}
			</div>
		    
		);
	}
});

export default Order;