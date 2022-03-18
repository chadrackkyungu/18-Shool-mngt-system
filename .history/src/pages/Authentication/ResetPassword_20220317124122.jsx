import React from "react"
import MetaTags from 'react-meta-tags';
import { Link, useLocation } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useAuth } from "../../Contexts/AuthContext"



function useQuery(){
    const location = useLocation() 
    return new URLSearchParams(location.search)
}


const ResetPassword = () => {

    const { resetPassword } = useAuth()
    const query = useQuery();

    function handleValidSubmit(event, values) {
      event.preventDefault()
  
      const { password } = values
      console.log(password);

      resetPassword(query.get('oodCode'), password )
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err.message))
    }

  return (
    <React.Fragment>
      <MetaTags>
        <title> School Management System </title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
       
      </div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-success">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">
                      Reset Password
                      </h5>
                   
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <div className="alert alert-success mt-5" role="alert" className="mt-5">
                      Enter yourPassword!
                      </div>

                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }} >
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Reset Password"
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                      </div>

                      <div className="row mb-0">
                        <Col xs={12} className="text-end">
                          <button
                            className="btn btn-success w-md waves-effect waves-light"
                            type="submit"
                          >
                            Reset password
                            </button>
                        </Col>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Remember It ?
                  <Link
                    to="login"
                    className="fw-medium text-primary"
                  >
                      Sign In here
                  </Link>
                </p>
                <p className="mb-0">
                 Copy right © {new Date().getFullYear()} School Management System
                  <i className="mdi mdi-heart text-danger"></i> chadrack_code
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div> </React.Fragment>
  )
}

export default ResetPassword
