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
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected && !localStorage.getItem("token")) {
          // if (isAuthProtected && !currentUser) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
              // to={{ pathname: "/login", state: { from: props.location } }}
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
