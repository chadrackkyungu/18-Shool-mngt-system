import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { Provider } from "react-redux"

import store from "./store"

import AuthContextProvider from "./Contexts/AuthContext"

const app = (
  <AuthContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthContextProvider>
)

ReactDOM.render(app, document.getElementById("root"))
// serviceWorker.unregister()
