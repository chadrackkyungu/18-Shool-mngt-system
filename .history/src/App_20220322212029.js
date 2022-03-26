import PropTypes from "prop-types"
import React, { useEffect } from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// here i hv 2 type of routes, the pages routes and the user login routes
//* the Entire App pages
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

// Import scss
import "./assets/scss/theme.scss"

import fakeBackend from "./helpers/AuthType/fakeBackend"
fakeBackend()

//Animation
import AOS from "aos"
import "aos/dist/aos.css"

const App = props => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  }, [])

  // ! Note: here i'm routing between 2 pages the user login page and the entire app
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path} //route path / nav link pages
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any,
}

// ! this is redux
const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

// ! this is redux
export default connect(mapStateToProps, null)(App)
