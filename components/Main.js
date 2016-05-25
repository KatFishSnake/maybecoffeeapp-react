import React from "react";
import { Link } from 'react-router';

const Main = React.createClass({
	render: function () {
		return (
			<div className="app">
		        <h1> hello</h1>
	        </div>
		);
	}
});

export default Main;


/* instead of hello
<div className="menu">
	                <Link to="/order" className="logo">
	                    Maybe coffee app
	                </Link>
	                <br />
	                <Link to="/order" className="order">Current Order</Link>
	                <br />
	                <Link to="/que" className="que">Que</Link>
		        </div>

		        <div>
		        	{this.props.children}
		        </div>
 */