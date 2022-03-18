import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { Row, Col, CardBody, Card, Alert, Container, Button } from "reactstrap"

import { connect } from "react-redux"
import { withRouter, Link, useHistory, useLocation } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { loginUser, apiError } from "../../store/actions"
import { useAuth } from "../../Contexts/AuthContext"
import logoSm from "../../assets/images/ckLogo.jpg"

const Login = props => {
  // use history will be used to go to home page after the user as logedIn
  const history = useHistory()
  const location = useLocation()

  const [msg, setMsg] = useState("")

  const { login, signInWithGoogle } = useAuth()

  const handleValidSubmit = (event, values) => {
    event.preventDefault()

    const { email, password } = values
    login(email, password)
      .then(res => {
        const { accessToken } = res.user
        localStorage.setItem("token", JSON.stringify(accessToken))
        setMsg("Login successful")
        history.replace(location.state?.from ?? "/dashboard")
      })
      .catch(err => setMsg("Email or Password Incorrect, Please Try Again"))
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title> School Management System </title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block"></div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <p className="bg-success text-white">{msg}</p>
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-success">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50">
                      Sign in to continue School Management System
                    </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          type="email"
                          label="Email"
                          placeholder="Enter email"
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <button
                            className="btn btn-success w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </Col>
                      </Row>
                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </Row>

                      <Row>
                        <div className="col-12 mt-4 ">
                          <Button
                          className="w-100 bg-white"
                            variant="outline"
                            colorSchema="red"
                            isFullwidth
                            onClick={() =>
                              signInWithGoogle()
                                .then(res => {
                                  const { accessToken } = res.user
                                  localStorage.setItem(
                                    "token",
                                    JSON.stringify(accessToken)
                                  )
                                  history.replace(
                                    location.state?.from ?? "/dashboard"
                                  )
                                })
                                .catch(err => {
                                  console.log(err)
                                })
                            }
                          >
                            <i className="mdi mdi-FcGoogle  "></i>
                            SignIn with Google
                          </Button>
                        </div>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?
                  <Link to="register" className="fw-medium text-primary">
                    Signup now
                  </Link>
                </p>
                <p>
                Cpoy right © {new Date().getFullYear()} School Management
                  System made with 
                  <i className="mdi mdi-heart text-danger" />
                  By chadrack_code
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
}
