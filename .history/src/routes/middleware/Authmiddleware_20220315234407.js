import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

import { useAuth } from "../../Contexts/AuthContext"

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  // collecting the contextAPI user state
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        //the login page that check if the user as login
        // if (isAuthProtected && !localStorage.getItem("token")) {
        // ! if the user login is null go login
        if (isAuthProtected && !currentUser) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }

        //the main app
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware
