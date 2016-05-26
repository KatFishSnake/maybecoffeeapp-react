import React from "react";
import { Route } from "react-router";
import auth from "../utils/auth"

import Login from "../components/Login"

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
	component: Main,
	childRoutes: [
			{ onEnter: redirectToDashboard,
	      childRoutes: [
	        // Unauthenticated routes
	        // Redirect to dashboard if user is already logged in
	        { path: '/login',
	          getComponent: (nextState, cb) => {
	            require.ensure([], (require) => {
	              cb(null, Login)
	            })
	          }
	        }
	      ]
	    },
	    { path: '/order',
	      getComponent: (nextState, cb) => {
	        require.ensure([], (require) => {
	          cb(null, Order)
	        })
	      }
	    },
	    { path: '/que',
	      getComponent: (nextState, cb) => {
	        require.ensure([], (require) => {
	          cb(null, Que)
	        })
	      }
	    }
    ]
}