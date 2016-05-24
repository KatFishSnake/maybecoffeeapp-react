import React from "react";
import { Link } from 'react-router';

const MainLayout = React.createClass({
	render: function () {
		return (
			<div className="app">
		        <div className="menu">
	                <Link to="/order/create" className="logo">
	                    Maybe coffee app
	                </Link>
	                <Link to="/order/create" className="order">Current Order</Link>
	                <Link to="/que" className="que">Que</Link>
		        </div>

		        <main>
		        	{this.props.children}
		        </main>
	        </div>
		);
	}
});

export default MainLayout;