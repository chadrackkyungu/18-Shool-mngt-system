import React from "react"
import user6 from "../../assets/images/users/user-6.jpg"

import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumbs from "../../components/Common/Breadcrumb"


import { Link } from "react-router-dom"

function AccessAdmin() {
    return (
        <React.Fragment>

<div className="page-content">
          <MetaTags>
            <title>
             School Management System
            </title>
          </MetaTags>
          <Container fluid={true}>
            <Breadcrumbs
              maintitle="Dashboard"
              title="School Management System"
              breadcrumbItem="Admin"
            />

<Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                  <h4 className="font-size-18 mt-5 text-center">Only Admin Can Access To this Page</h4>
                      <p className="text-muted text-center">
                        Hello Chad, Mske sure you have the pin with you in order to have acces to the admin Page
                      </p>
    
                      <form className="mt-4" action="#">
                        <div className="pt-3 text-center">
                          <img
                            src={user6}
                            className="rounded-circle img-thumbnail avatar-lg"
                            alt="thumbnail"
                          />
                          <h6 className="font-size-16 mt-3">Chadrack Kyungu</h6>
                        </div>
    
                        <div className="mb-3">
                          <label htmlFor="userpassword">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="userpassword"
                            placeholder="Enter password"
                          />
                        </div>
    
                        <div className="row">
                          <div className="col-12 text-end">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Unlock
                            </button>
                          </div>
                        </div>
                      </form>
    
                      <div className="mt-5 pt-4 text-center">
                        <p>
                          Not you ? return
                          <Link
                            to="pages-login-2"
                            className="fw-medium text-primary"
                          >
                            Sign In
                          </Link>
                        </p>
                    
                      </div>

</CardBody>
</Card>
</Col>
</Row>


            </Container>


            </div>


        
        </React.Fragment>
      )
    }

export default AccessAdmin