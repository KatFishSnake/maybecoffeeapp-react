import React from "react";

const Status = React.createClass({
	render: function () {
		return (
			<div>
			    <div id="order-status" className="status-container">
			    	This is page for the order status
	        	</div>
		    	<pre> {this.state.data} </pre>
        	</div>
		);
	}
});

export default Status;