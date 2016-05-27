import React from "react";
import { Link } from 'react-router';

const Header = React.createClass({
	render: function () {
		return (
			<div className="container">
				<div className="column header-logo">
				    <div className="seven columns offset-by-three">
				        <Link to="/order" className="logo">
				        	<img src="/img/coffee.svg" />
				            <h4>Maybe coffee app</h4>
				        </Link>
				    </div>
				</div>

				<div className="column header-menu">
					<div className="seven columns offset-by-three">
						<div className="menu">
				            <Link to="/order" activeClassName='active' >
				            	Order
				        	</Link>
				            <Link to="/que" activeClassName='active' >
				            	Que
				            </Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Header;