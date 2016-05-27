import React from "react";

const Status = React.createClass({
	getInitialState: function () {
		return this.props.data;
	},
	render: function () {
		let self = this;
		let order = Object.keys(self.state).map(function(key, i) {
			return (
				<div key={i}>
					<strong>{key}:</strong>
					{self.state[key]}
				</div>
			);
		});

		return (
			<div>
				<h3 id="order-status" className="status-container">
					This is page for the order status
				</h3>
				{order}
			</div>
		);
	}
});

export default Status;