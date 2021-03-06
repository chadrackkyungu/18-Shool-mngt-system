import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect, useLocation } from "react-router-dom"

import { useAuth } from "../../Contexts/AuthContext"

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const { currentUser } = useAuth()
  const location = useLocation()

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected && !currentUser && !localStorage.getItem("token")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }

        if (path === "/login") {
          return (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: props.location } }}
            />
          )
        }

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
