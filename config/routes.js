import React from "react";
import { Route } from "react-router";
import auth from "../utils/auth"

import Main from "../components/Main"
import Que from "../components/admin/Que"
import Order from "../components/client/Order"

function redirectToLogin(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToDashboard(nextState, replace) {
  if (auth.loggedIn()) {
    replace('/')
  }
}

export default {
	component: require('../components/Main'),
	childRoutes: [
	    { path: '/order',
	      getComponent: (nextState, cb) => {
	        require.ensure([], (require) => {
	          cb(null, require('../components/client/Order'))
	        })
	      }
	    },
	    { path: '/que',
	      getComponent: (nextState, cb) => {
	        require.ensure([], (require) => {
	          cb(null, require('../components/admin/Que'))
	        })
	      }
	    }
    ]
}