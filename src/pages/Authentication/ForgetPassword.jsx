import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap"

import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { userForgetPassword } from "../../store/actions"
import logoSm from "../../assets/images/ckLogo.jpg"
import { useAuth } from "../../Contexts/AuthContext"

const ForgetPasswordPage = props => {
  const { forgotPassword } = useAuth()
  const [msg, setMsg] = useState("")

  function handleValidSubmit(event, values) {
    event.preventDefault()

    const { email } = values
    forgotPassword(email)
      .then(res => {
        console.log("We jst sent you an Email")
        setMsg("We jst sent you an Email")
      })
      .catch(err => console.log(err.message))
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>School Management System</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block"></div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <p className="bg-success text-white">{msg}</p>

            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-success">
                  <div className="text-success text-center p-4">
                    <h5 className="text-white font-size-20 p-2">
                      Forget Password
                    </h5>
                    <a href="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </a>
                  </div>
                </div>
                <CardBody className="p-4">
                  {props.forgetError && props.forgetError ? (
                    <Alert
                      color="danger"
                      style={{ marginTop: "13px" }}
                      className="mt-5"
                    >
                      {props.forgetError}
                    </Alert>
                  ) : null}
                  {props.forgetSuccessMsg ? (
                    <Alert
                      color="success"
                      style={{ marginTop: "13px" }}
                      className="mt-5"
                    >
                      {props.forgetSuccessMsg}
                    </Alert>
                  ) : null}

                  <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                  >
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-success w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Remember It ?
                  <Link to="login" className="fw-medium text-primary">
                    Sign In here
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

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func,
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
)
