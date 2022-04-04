import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, CardBody, Card, Alert, Container, Button } from "reactstrap"

import { AvForm, AvField } from "availity-reactstrap-validation"
import { registerUser, apiError, registerUserFailed } from "../../store/actions"
import { connect } from "react-redux"
import { Link, useHistory, useLocation } from "react-router-dom"
import { useAuth } from "../../Contexts/AuthContext"

import logoSm from "../../assets/images/ckLogo.jpg"
import google from "../../assets/images/google.png"

import { Db } from '../../Database/init-firebase';
import { collection, addDoc } from 'firebase/firestore/lite';


const Register = props => {
  const history = useHistory()
  const location = useLocation()

  const { register, signInWithGoogle } = useAuth()

  const handleValidSubmit = (event, values) => {
    event.preventDefault()

    const { email, password } = values
    register(email, password)
      .then(res => {

        // this is => User-Login the Database name
        addDoc(collection(Db, "User-Login"), {
          email: email,
          password: password
        })
        console.log("Added user to firebase Successfully");


        history.replace(location.state?.from ?? "/login");        
      })
    .catch(err => console.log(err))
  }

  console.log(Db)


  return (
    <React.Fragment>
      <MetaTags>
        <title>School Management System</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block"></div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-success">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20"> Register With Us</h5>
                    <p className="text-white-50">Your Information is Safe with us</p>

                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError && props.registrationError ? (
                        <Alert color="danger">{props.registrationError}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                    

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                          autoComplete="password"
                        />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-success w-md waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>

                        <Row>
                          <div className="col-12 mt-4">
                            <Button
                              className="w-100 bg-white "
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
                             <img src={google} height="30" alt="logo"  />
                            SignIn With Google
                            </Button>
                          </div>
                        </Row>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">
                            By registering you agree to the School Management
                            System
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?
                  <Link to="/login" className="fw-medium text-primary">
                    Login
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

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
