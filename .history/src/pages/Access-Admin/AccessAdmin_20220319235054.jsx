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
              breadcrumbItem="Access To Admin Page"
            />

<Row>
              <Col lg="6" className="d-flex justify-content-center align-items-center">
                <Card>
                  <CardBody>
                  <h4 className="font-size-18 mt-5 text-center"> Only Admin Can Access To this Page </h4>
                      <p className="text-muted text-center">
                        Hello Chad, Mske sure you have the pin with you in order to have acces to the admin Page
                      </p>
    
                      <AvForm className="mt-4" action="#">
                        <div className="pt-3 text-center">
                          <img
                            src={user6}
                            className="rounded-circle img-thumbnail avatar-lg"
                            alt="thumbnail"
                          />
                          <h6 className="font-size-16 mt-3">Chadrack Kyungu</h6>
                        </div>
                         
                        <FormGroup className="mb-3">
                        <AvField
                          name="Title"
                          type="password"
                          label="Info title"
                          placeholder="Enter Your Pin To Access The Admin page"
                          className="form-control"
                          id="userpassword"
                          required
                        />
                      </FormGroup>          
                        
    
                        <div className="row">
                          <div className="col-12 text-center">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Unlock
                            </button>
                          </div>
                        </div>
                      </AvForm>
    
                      <div className="mt-5 pt-4 text-center">
                        <p>
                         
                          <Link
                            to="dashboard"
                            className="fw-medium text-primary"
                          >
                           Go back to the dashboard
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