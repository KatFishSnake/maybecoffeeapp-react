import React from "react";
import Header from "./global/Header";

const Main = React.createClass({
	render: function () {
		return (
			<div className="app">
		        <div className="section">
		        	<Header location={this.props.location}/>
		        </div>

		        <div className="section">
		        	<div className="container">
		        		{this.props.children}
		        	</div>
		        </div>
	        </div>
		);
	}
});

export default Main;



