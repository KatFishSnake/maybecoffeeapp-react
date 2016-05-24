import React from "react";
import {
	Router,
	Route,
	browserHistory,
	IndexRoute
} from "react-router";

import Main from "./components/main"

import Que from "./components/admin/que"

import Create from "./components/client/create"
import Status from "./components/client/status"

export default ( 
	<Router history={browserHistory}>
		<Route component={Main}>
	        <Route path="/order">
				<Route path="/order/create" component={Create} />
				<Route path="/order/status" component={Status} />
	        </Route>
            <Route path="/que" component={Que} />
		</Route>
	</Router>
);